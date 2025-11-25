import skillsRepository from "../../infrastructure/database/prisma/skillsRepository.js";
import logger from "../../config/logger.js";

export default async function deleteSkillUseCase(skillId) {
  try {
    logger.info(`Deleting skill: ${skillId}`);

    await skillsRepository.delete(skillId);

    logger.info(`Skill deleted successfully: ${skillId}`);
    return true;
  } catch (error) {
    logger.error(`Error deleting skill: ${error.message}`);
    throw error;
  }
}
