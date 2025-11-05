import experienceRepository from "../../infrastructure/database/prisma/experienceRepository.js";
import logger from "../../config/logger.js";

export default async function getAllExperienceUseCase(filters = {}) {
    try {
        logger.info("Fetching all experiences");
        const result = await experienceRepository.findAll(filters);
        logger.info(`Found ${result.length} experiences`);
        return result;
    } catch (error) {
        logger.error(`Error fetching experiences: ${error.message}`);
        throw error;
    }
}