import express from "express";
import experienceController from "../../../../interfaces/controllers/experienceController.js";

const router = express.Router();


/**
 * @route   GET /api/experience
 * @desc    Obtener todas las experiencias
 * @access  Public
 */
router.get("/", experienceController.getAll);

/**
 * @route   GET /api/experience/:id
 * @desc    Obtener una experiencia por ID
 * @access  Public
 */
router.get("/:id", experienceController.getById);

/**
 * @route   POST /api/experience
 * @desc    Crear una nueva experiencia
 * @access  Public (luego será Private con JWT)
 */
router.post("/", experienceController.create);

/**
 * @route   PUT /api/experience/:id
 * @desc    Actualizar una experiencia
 * @access  Public (luego será Private con JWT)
 */
router.put("/:id", experienceController.update);

/**
 * @route   DELETE /api/experience/:id
 * @desc    Eliminar una experiencia
 * @access  Public (luego será Private con JWT)
 */
router.delete("/:id", experienceController.delete);

export default router;
