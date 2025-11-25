import createProfileUseCase from "../../application/profile/createProfileUseCase.js";
import getProfileUseCase from "../../application/profile/getProfileUseCase.js";
import updateProfileUseCase from "../../application/profile/updateProfileUseCase.js";

class ProfileController {
  // Crear un nuevo perfil
  async create(req, res, next) {
    try {
      const profile = await createProfileUseCase(req.body);
      
      res.status(201).json({
        success: true,
        message: "Profile created successfully",
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener el perfil activo
  async get(req, res, next) {
    try {
      const profile = await getProfileUseCase();
      
      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  // Actualizar perfil
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const profile = await updateProfileUseCase(id, req.body);
      
      res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProfileController();
