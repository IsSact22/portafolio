import projectRepository from "../../infrastructure/database/prisma/projectRepository.js";
import logger from "../../config/logger.js";

export default async function deleteProjectUseCase(projectId) {
  try {
    logger.info(`Deleting project: ${projectId}`);
    
    // Soft delete (cambiar status a draft)
    const project = await projectRepository.delete(projectId);
    
    logger.info(`Project deleted successfully: ${projectId}`);
    return project;
  } catch (error) {
    logger.error(`Error deleting project: ${error.message}`);
    throw error;
  }
}
