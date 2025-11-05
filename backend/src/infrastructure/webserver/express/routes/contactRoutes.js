import express from "express";
import contactController from "../../../../interfaces/controllers/contactController.js";

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Enviar un mensaje de contacto
 * @access  Public
 */
router.post("/", contactController.create);

/**
 * @route   GET /api/contact
 * @desc    Obtener todos los mensajes de contacto (Admin)
 * @access  Public (luego será Private con JWT)
 * @query   status, search
 */
router.get("/", contactController.getAll);

/**
 * @route   GET /api/contact/:id
 * @desc    Obtener un mensaje por ID (Admin)
 * @access  Public (luego será Private con JWT)
 */
router.get("/:id", contactController.getById);

/**
 * @route   PUT /api/contact/:id
 * @desc    Actualizar estado de un mensaje (Admin)
 * @access  Public (luego será Private con JWT)
 */
router.put("/:id", contactController.update);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Eliminar un mensaje (Admin)
 * @access  Public (luego será Private con JWT)
 */
router.delete("/:id", contactController.delete);

export default router;
