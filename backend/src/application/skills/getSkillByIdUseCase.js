import skillsRepository from "../../infrastructure/database/prisma/skillsRepository.js";
import logger from "../../config/logger.js";

export default async function getSkillByIdUseCase(id) {
  try {
    logger.info(`Fetching skill: ${id}`);
    const skill = await skillsRepository.findById(id);
    logger.info("Skill fetched successfully");
    return skill;
  } catch (error) {
    logger.error(`Error fetching skill: ${error.message}`);
    throw error;
  }
}
