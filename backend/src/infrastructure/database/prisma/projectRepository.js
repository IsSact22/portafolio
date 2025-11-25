import prisma from "./client.js";
import Project from "../../../domain/projectEntity.js";
import { NotFoundError } from "../../../core/AppError.js";

class ProjectRepository {
  // Crear un nuevo proyecto
  async create(projectData) {
    const project = await prisma.project.create({
      data: projectData,
    });
    return this.toDomain(project);
  }

  // Obtener todos los proyectos con paginación y filtros
  async findAll(filters = {}) {
    const {
      page = 1,
      limit = 10,
      status,
      featured,
      category,
      search,
    } = filters;

    const skip = (page - 1) * limit;
    const where = {};

    // Aplicar filtros
    if (status) {
      where.status = status;
    }

    if (featured !== undefined) {
      where.featured = featured === "true" || featured === true;
    }

    if (category) {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    // Obtener proyectos y total
    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      }),
      prisma.project.count({ where }),
    ]);

    return {
      projects: projects.map((p) => this.toDomain(p)),
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // Obtener proyectos destacados
  async findFeatured() {
    const projects = await prisma.project.findMany({
      where: {
        featured: true,
        status: "published",
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });

    return projects.map((p) => this.toDomain(p));
  }

  // Obtener proyecto por ID
  async findById(id) {
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundError("Proyecto");
    }

    return this.toDomain(project);
  }

  // Actualizar proyecto
  async update(id, updateData) {
    try {
      const project = await prisma.project.update({
        where: { id },
        data: updateData,
      });

      return this.toDomain(project);
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Proyecto");
      }
      throw error;
    }
  }

  // Eliminar proyecto (soft delete cambiando status a draft)
  async delete(id) {
    try {
      const project = await prisma.project.update({
        where: { id },
        data: { status: "draft" },
      });

      return this.toDomain(project);
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Proyecto");
      }
      throw error;
    }
  }

  // Eliminar proyecto permanentemente
  async hardDelete(id) {
    try {
      await prisma.project.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Proyecto");
      }
      throw error;
    }
  }

  // Obtener proyectos por categoría
  async findByCategory(category) {
    const projects = await prisma.project.findMany({
      where: {
        category,
        status: "published",
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });

    return projects.map((p) => this.toDomain(p));
  }

  // Contar proyectos
  async count(filters = {}) {
    const where = {};

    if (filters.status) {
      where.status = filters.status;
    }

    if (filters.featured !== undefined) {
      where.featured = filters.featured;
    }

    return await prisma.project.count({ where });
  }

  // Verificar si existe un proyecto
  async exists(id) {
    const count = await prisma.project.count({
      where: { id },
    });
    return count > 0;
  }

  // Convertir registro de Prisma a entidad de dominio
  toDomain(projectRecord) {
    if (!projectRecord) return null;

    return new Project({
      id: projectRecord.id,
      title: projectRecord.title,
      description: projectRecord.description,
      longDescription: projectRecord.longDescription,
      technologies: projectRecord.technologies,
      category: projectRecord.category,
      image: projectRecord.image,
      gallery: projectRecord.gallery,
      demoUrl: projectRecord.demoUrl,
      repoUrl: projectRecord.repoUrl,
      featured: projectRecord.featured,
      status: projectRecord.status,
      order: projectRecord.order,
      createdAt: projectRecord.createdAt,
      updatedAt: projectRecord.updatedAt,
    });
  }
}

export default new ProjectRepository();
