import projectRepository from "../../infrastructure/database/prisma/projectRepository.js";
import logger from "../../config/logger.js";

export default async function getProjectByIdUseCase(projectId) {
  try {
    logger.info(`Fetching project: ${projectId}`);
    const project = await projectRepository.findById(projectId);
    logger.info("Project fetched successfully");
    return project;
  } catch (error) {
    logger.error(`Error fetching project: ${error.message}`);
    throw error;
  }
}
