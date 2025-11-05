import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import config from "./config/index.js";
import connectDB from "./config/database.js";
import logger from "./config/logger.js";
import errorHandler from "./infrastructure/webserver/express/middlewares/errorHandler.js";

// Importar rutas
import profileRoutes from "./infrastructure/webserver/express/routes/profileRoutes.js";
import projectRoutes from "./infrastructure/webserver/express/routes/projectRoutes.js";

const app = express();

// 🔒 Middlewares de seguridad
app.use(helmet());
app.use(cors());

// 📊 Logging HTTP
app.use(morgan("dev"));

// 📦 Parseo de body
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// 🗜️ Compresión de respuestas
app.use(compression());

// 🌐 Ruta de salud
app.get("/api/health", (req, res) => {
  res.json({ 
    success: true, 
    message: "Portfolio API is healthy", 
    env: config.env,
    timestamp: new Date().toISOString()
  });
});

// 📦 Rutas principales
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);

// 🚫 Manejo de rutas no encontradas
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// 🧨 Manejador global de errores
app.use(errorHandler);

// 🗄️ Conectar a la base de datos
await connectDB();

logger.info("Application initialized successfully");

export default app;