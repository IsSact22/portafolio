import { PrismaClient } from "@prisma/client";
import logger from "../../../config/logger.js";

// Crear instancia única de Prisma Client (Singleton)
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
      {
        emit: "event",
        level: "error",
      },
      {
        emit: "event",
        level: "info",
      },
      {
        emit: "event",
        level: "warn",
      },
    ],
  });
};

const globalForPrisma = global;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Logging de queries en desarrollo
if (process.env.NODE_ENV === "development") {
  prisma.$on("query", (e) => {
    // logger.debug(`Query: ${e.query}`);
    // logger.debug(`Duration: ${e.duration}ms`);
  });
}

// Logging de errores
prisma.$on("error", (e) => {
  logger.error(`Prisma Error: ${e.message}`);
});

// Logging de info
prisma.$on("info", (e) => {
  logger.info(`Prisma Info: ${e.message}`);
});

// Logging de warnings
prisma.$on("warn", (e) => {
  logger.warn(`Prisma Warning: ${e.message}`);
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
