import experienceRepository from "../../infrastructure/database/prisma/experienceRepository.js";
import logger from "../../config/logger.js";

export default async function deleteExperienceUseCase(experienceId){
    try{
        logger.info(`Deleting experience: ${experienceId}`);

        await experienceRepository.delete(experienceId);

        logger.info(`Experience deleted successfully: ${experienceId}`);
        return true;
    }catch(error){
        logger.error(`Error deleting experience: ${error.message}`);
        throw error;
    }
}