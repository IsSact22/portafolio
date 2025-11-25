import logger from "../../../../config/logger.js";
import AppError from "../../../../core/AppError.js";

// Manejo de errores de Mongoose
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg?.match(/(["'])(\\?.)*?\1/)?.[0];
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError("Token invalido. Por favor, inicia sesión de nuevo", 401);

const handleJWTExpiredError = () =>
  new AppError("Token expirado. Por favor, inicia sesión de nuevo", 401);

// Enviar error en desarrollo
const sendErrorDev = (err, res) => {
  logger.error(`ERROR 💥: ${err.message}`, {
    status: err.status,
    error: err,
    stack: err.stack,
  });

  res.status(err.statusCode).json({
    success: false,
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Enviar error en producción
const sendErrorProd = (err, res) => {
  // Error operacional, confiable: enviar mensaje al cliente
  if (err.isOperational) {
    logger.error(`ERROR 💥: ${err.message}`);
    res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message,
    });
  } else {
    // Error de programación u otro error desconocido: no filtrar detalles
    logger.error("ERROR 💥 UNKNOWN:", err);
    res.status(500).json({
      success: false,
      status: "error",
      message: "Algo salio mal",
    });
  }
};

// Middleware principal de manejo de errores
export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;

    // Manejo específico de errores de Mongoose
    if (err.name === "CastError") error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateFieldsDB(err);
    if (err.name === "ValidationError") error = handleValidationErrorDB(err);
    if (err.name === "JsonWebTokenError") error = handleJWTError();
    if (err.name === "TokenExpiredError") error = handleJWTExpiredError();

    sendErrorProd(error, res);
  }
};
