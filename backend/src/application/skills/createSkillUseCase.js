import skillsRepository from "../../infrastructure/database/prisma/skillsRepository.js";
import Skill from "../../domain/skillEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function createSkillUseCase(skillData) {
  try {
    logger.info("Creating new skill");

    // Crear instancia de la entidad Skill
    const skill = new Skill(skillData);

    // Validar datos
    const validation = skill.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Guardar en la base de datos
    const createdSkill = await skillsRepository.create({
      name: skill.name,
      category: skill.category,
      level: skill.level,
      icon: skill.icon,
      order: skill.order,
      yearsOfExperience: skill.yearsOfExperience,
    });

    logger.info(`Skill created successfully: ${createdSkill.name}`);
    return createdSkill;
  } catch (error) {
    logger.error(`Error creating skill: ${error.message}`);
    throw error;
  }
}
