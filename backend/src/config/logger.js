import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir niveles de log personalizados
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Definir colores para cada nivel
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

// Formato personalizado para logs
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Formato para archivos (sin colores)
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.json()
);

// Transporte para archivos con rotación diaria (solo en desarrollo)
const fileRotateTransport = process.env.NODE_ENV === "production" ? null : new DailyRotateFile({
  filename: path.join(__dirname, "../../logs/application-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  maxSize: "20m",
  maxFiles: "14d",
  format: fileFormat,
});

// Transporte para errores (solo en desarrollo)
const errorFileTransport = process.env.NODE_ENV === "production" ? null : new DailyRotateFile({
  filename: path.join(__dirname, "../../logs/error-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  maxSize: "20m",
  maxFiles: "30d",
  level: "error",
  format: fileFormat,
});

// Crear el logger
const transports = [new winston.transports.Console({ format })];

// Agregar transportes de archivo solo en desarrollo
if (process.env.NODE_ENV === "development") {
  transports.push(fileRotateTransport);
  transports.push(errorFileTransport);
}

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  levels,
  transports,
});

export default logger;
