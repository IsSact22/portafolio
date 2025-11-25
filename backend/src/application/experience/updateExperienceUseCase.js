import experienceRepository from "../../infrastructure/database/prisma/experienceRepository.js";
import Experience from "../../domain/experienceEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function updateExperienceUseCase(experienceId, updateData) {
  try {
    logger.info(`Updating experience: ${experienceId}`);

    // Obtener la experiencia existente
    const existingExperience = await experienceRepository.findById(experienceId);

    if (!existingExperience) {
      throw new ValidationError("Experience not found");
    }

    // Crear una nueva instancia con los datos actualizados
    const updatedExperience = new Experience({
      ...existingExperience,
      ...updateData,
    });

    // Validar los datos actualizados
    const validation = updatedExperience.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Actualizar en la base de datos
    const result = await experienceRepository.update(experienceId, {
      company: updatedExperience.company,
      position: updatedExperience.position,
      description: updatedExperience.description,
      technologies: updatedExperience.technologies,
      startDate: updatedExperience.startDate,
      endDate: updatedExperience.endDate,
      isCurrent: updatedExperience.isCurrent,
      location: updatedExperience.location,
      type: updatedExperience.type,
      achievements: updatedExperience.achievements,
    });

    logger.info(`Experience updated successfully: ${experienceId}`);
    return result;
  } catch (error) {
    logger.error(`Error updating experience: ${error.message}`);
    throw error;
  }
}