import skillsRepository from "../../infrastructure/database/prisma/skillsRepository.js";
import Skill from "../../domain/skillEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function updateSkillUseCase(skillId, updateData) {
  try {
    logger.info(`Updating skill: ${skillId}`);

    // Obtener el skill existente
    const existingSkill = await skillsRepository.findById(skillId);

    // Crear una nueva instancia con los datos actualizados
    const updatedSkill = new Skill({
      ...existingSkill,
      ...updateData,
    });

    // Validar los datos actualizados
    const validation = updatedSkill.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Actualizar en la base de datos
    const result = await skillsRepository.update(skillId, {
      name: updatedSkill.name,
      category: updatedSkill.category,
      level: updatedSkill.level,
      icon: updatedSkill.icon,
      order: updatedSkill.order,
      yearsOfExperience: updatedSkill.yearsOfExperience,
    });

    logger.info(`Skill updated successfully: ${skillId}`);
    return result;
  } catch (error) {
    logger.error(`Error updating skill: ${error.message}`);
    throw error;
  }
}
