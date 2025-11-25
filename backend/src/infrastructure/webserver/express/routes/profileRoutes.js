import express from "express";
import profileController from "../../../../interfaces/controllers/profileController.js";

const router = express.Router();

/**
 * @route   POST /api/profile
 * @desc    Crear un nuevo perfil
 * @access  Public (luego será Private con JWT)
 */
router.post("/", profileController.create);

/**
 * @route   GET /api/profile
 * @desc    Obtener el perfil activo
 * @access  Public
 */
router.get("/", profileController.get);

/**
 * @route   PUT /api/profile/:id
 * @desc    Actualizar perfil
 * @access  Public (luego será Private con JWT)
 */
router.put("/:id", profileController.update);

export default router;
