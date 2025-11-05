import skillsRepository from "../../infrastructure/database/prisma/skillsRepository.js";
import logger from "../../config/logger.js";

export default async function getAllSkillsUseCase(filters = {}) {
  try {
    logger.info("Fetching all skills");
    const result = await skillsRepository.findAll(filters);
    logger.info(`Found ${result.length} skills`);
    return result;
  } catch (error) {
    logger.error(`Error fetching skills: ${error.message}`);
    throw error;
  }
}