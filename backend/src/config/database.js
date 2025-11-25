import prisma from "../infrastructure/database/prisma/client.js";
import logger from "./logger.js";

export default async function connectDB() {
  try {
    await prisma.$connect();
    logger.info("🟢 PostgreSQL Connected successfully");
    
    // Verificar conexión
    await prisma.$queryRaw`SELECT 1`;
    logger.info("✅ Database connection verified");
  } catch (error) {
    logger.error(`🔴 PostgreSQL Connection Error: ${error.message}`);
    process.exit(1);
  }
}

// Función para desconectar de la base de datos
export async function disconnectDB() {
  try {
    await prisma.$disconnect();
    logger.info("🔌 PostgreSQL Disconnected");
  } catch (error) {
    logger.error(`Error disconnecting from database: ${error.message}`);
  }
}