import experienceRepository from "../../infrastructure/database/prisma/experienceRepository.js";
import logger from "../../config/logger.js";

export default async function getExperienceByIdUseCase(id) {
    try {
        logger.info(`Fetching experience: ${id}`);
        const experience = await experienceRepository.findById(id);
        logger.info("Experience fetched successfully");
        return experience;
    } catch (error) {
        logger.error(`Error fetching experience: ${error.message}`);
        throw error;
    }
}