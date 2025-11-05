import projectRepository from "../../infrastructure/database/prisma/projectRepository.js";
import Project from "../../domain/projectEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function updateProjectUseCase(projectId, updateData) {
  try {
    logger.info(`Updating project: ${projectId}`);

    // Obtener el proyecto existente
    const existingProject = await projectRepository.findById(projectId);

    // Crear una nueva instancia con los datos actualizados
    const updatedProject = new Project({
      ...existingProject,
      ...updateData,
    });

    // Validar los datos actualizados
    const validation = updatedProject.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Actualizar en la base de datos
    const result = await projectRepository.update(projectId, {
      title: updatedProject.title,
      description: updatedProject.description,
      longDescription: updatedProject.longDescription,
      technologies: updatedProject.technologies,
      category: updatedProject.category,
      image: updatedProject.image,
      gallery: updatedProject.gallery,
      demoUrl: updatedProject.demoUrl,
      repoUrl: updatedProject.repoUrl,
      featured: updatedProject.featured,
      status: updatedProject.status,
      order: updatedProject.order,
    });

    logger.info(`Project updated successfully: ${projectId}`);
    return result;
  } catch (error) {
    logger.error(`Error updating project: ${error.message}`);
    throw error;
  }
}
