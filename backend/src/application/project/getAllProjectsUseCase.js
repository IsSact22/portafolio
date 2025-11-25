import projectRepository from "../../infrastructure/database/prisma/projectRepository.js";
import logger from "../../config/logger.js";

export default async function getAllProjectsUseCase(filters) {
  try {
    logger.info("Fetching all projects with filters");
    const result = await projectRepository.findAll(filters);
    logger.info(`Found ${result.projects.length} projects`);
    return result;
  } catch (error) {
    logger.error(`Error fetching projects: ${error.message}`);
    throw error;
  }
}
