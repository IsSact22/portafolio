import createProjectUseCase from "../../application/project/createProjectUseCase.js";
import getAllProjectsUseCase from "../../application/project/getAllProjectsUseCase.js";
import getProjectByIdUseCase from "../../application/project/getProjectByIdUseCase.js";
import updateProjectUseCase from "../../application/project/updateProjectUseCase.js";
import deleteProjectUseCase from "../../application/project/deleteProjectUseCase.js";

class ProjectController {
  // Crear un nuevo proyecto
  async create(req, res, next) {
    try {
      const project = await createProjectUseCase(req.body);

      res.status(201).json({
        success: true,
        message: "Proyecto creado exitosamente",
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener todos los proyectos con paginación y filtros
  async getAll(req, res, next) {
    try {
      const filters = {
        page: req.query.page,
        limit: req.query.limit,
        status: req.query.status,
        featured: req.query.featured,
        category: req.query.category,
        search: req.query.search,
      };

      const result = await getAllProjectsUseCase(filters);

      res.status(200).json({
        success: true,
        data: result.projects,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener un proyecto por ID
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const project = await getProjectByIdUseCase(id);

      res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }

  // Actualizar un proyecto
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const project = await updateProjectUseCase(id, req.body);

      res.status(200).json({
        success: true,
        message: "Proyecto actualizado exitosamente",
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }

  // Eliminar un proyecto (soft delete)
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await deleteProjectUseCase(id);

      res.status(200).json({
        success: true,
        message: "Proyecto eliminado exitosamente",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProjectController();
