import experienceRepository from "../../infrastructure/database/prisma/experienceRepository.js";
import Experience from "../../domain/experienceEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";


export default async function createExperienceUseCase(experienceData){
    try{
        logger.info("Creating new experience");
        
        // Crear instancia de la entidad Experience
        const experience = new Experience(experienceData);
 
        // Validar datos
        const validation = experience.validate();
        if(!validation.isValid){
            throw new ValidationError(validation.errors.join(", "));
        }

        // Guardar en la base de datos
        const createdExperience = await experienceRepository.create({
            company: experience.company,
            position: experience.position,
            description: experience.description,
            technologies: experience.technologies,
            startDate: experience.startDate,
            endDate: experience.endDate,
            isCurrent: experience.isCurrent,
            location: experience.location,
            type: experience.type,
            achievements: experience.achievements,
        });

        logger.info(`Experience created successfully: ${createdExperience.id}`);
        return createdExperience;
    }catch(error){
        logger.error(`Error creating experience: ${error.message}`);
        throw error;
    }
}