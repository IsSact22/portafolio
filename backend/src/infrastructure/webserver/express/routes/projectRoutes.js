import express from "express";
import projectController from "../../../../interfaces/controllers/projectController.js";

const router = express.Router();

/**
 * @route   GET /api/projects
 * @desc    Obtener todos los proyectos con paginación y filtros
 * @access  Public
 * @query   page, limit, status, featured, category, search
 */
router.get("/", projectController.getAll);

/**
 * @route   GET /api/projects/:id
 * @desc    Obtener un proyecto por ID
 * @access  Public
 */
router.get("/:id", projectController.getById);

/**
 * @route   POST /api/projects
 * @desc    Crear un nuevo proyecto
 * @access  Public (luego será Private con JWT)
 */
router.post("/", projectController.create);

/**
 * @route   PUT /api/projects/:id
 * @desc    Actualizar un proyecto
 * @access  Public (luego será Private con JWT)
 */
router.put("/:id", projectController.update);

/**
 * @route   DELETE /api/projects/:id
 * @desc    Eliminar un proyecto (soft delete)
 * @access  Public (luego será Private con JWT)
 */
router.delete("/:id", projectController.delete);

export default router;
