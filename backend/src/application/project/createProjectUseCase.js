import projectRepository from "../../infrastructure/database/prisma/projectRepository.js";
import Project from "../../domain/projectEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function createProjectUseCase(projectData) {
  try {
    logger.info("Creating new project");

    // Crear instancia de la entidad Project
    const project = new Project(projectData);

    // Validar datos
    const validation = project.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Guardar en la base de datos
    const createdProject = await projectRepository.create({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      technologies: project.technologies,
      category: project.category,
      image: project.image,
      gallery: project.gallery,
      demoUrl: project.demoUrl,
      repoUrl: project.repoUrl,
      featured: project.featured,
      status: project.status,
      order: project.order,
    });

    logger.info(`Project created successfully: ${createdProject.title}`);
    return createdProject;
  } catch (error) {
    logger.error(`Error creating project: ${error.message}`);
    throw error;
  }
}
