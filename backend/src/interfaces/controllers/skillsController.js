import createSkillUseCase from "../../application/skills/createSkillUseCase.js";
import getAllSkillsUseCase from "../../application/skills/getAllSkillsUseCase.js";
import getSkillByIdUseCase from "../../application/skills/getSkillByIdUseCase.js";
import updateSkillUseCase from "../../application/skills/updateSkillUseCase.js";
import deleteSkillUseCase from "../../application/skills/deleteSkillUseCase.js";

class SkillsController {
  // Crear una nueva skill
  async create(req, res, next) {
    try {
      const skill = await createSkillUseCase(req.body);

      res.status(201).json({
        success: true,
        message: "Skill creada exitosamente",
        data: skill,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener todas las skills
  async getAll(req, res, next) {
    try {
      const filters = {
        category: req.query.category,
      };

      const skills = await getAllSkillsUseCase(filters);

      res.status(200).json({
        success: true,
        data: skills,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener una skill por ID
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const skill = await getSkillByIdUseCase(id);

      res.status(200).json({
        success: true,
        data: skill,
      });
    } catch (error) {
      next(error);
    }
  }

  // Actualizar una skill
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const skill = await updateSkillUseCase(id, req.body);

      res.status(200).json({
        success: true,
        message: "Skill actualizada exitosamente",
        data: skill,
      });
    } catch (error) {
      next(error);
    }
  }

  // Eliminar una skill
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await deleteSkillUseCase(id);

      res.status(200).json({
        success: true,
        message: "Skill eliminada exitosamente",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SkillsController();
