import express from "express";
import skillsController from "../../../../interfaces/controllers/skillsController.js";

const router = express.Router();

/**
 * @route   GET /api/skills
 * @desc    Obtener todas las habilidades
 * @access  Public
 * @query   category
 */
router.get("/", skillsController.getAll);

/**
 * @route   GET /api/skills/:id
 * @desc    Obtener una habilidad por ID
 * @access  Public
 */
router.get("/:id", skillsController.getById);

/**
 * @route   POST /api/skills
 * @desc    Crear una nueva habilidad
 * @access  Public (luego será Private con JWT)
 */
router.post("/", skillsController.create);

/**
 * @route   PUT /api/skills/:id
 * @desc    Actualizar una habilidad
 * @access  Public (luego será Private con JWT)
 */
router.put("/:id", skillsController.update);

/**
 * @route   DELETE /api/skills/:id
 * @desc    Eliminar una habilidad
 * @access  Public (luego será Private con JWT)
 */
router.delete("/:id", skillsController.delete);

export default router;
