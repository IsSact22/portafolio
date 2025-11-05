import profileRepository from "../../infrastructure/database/prisma/profileRepository.js";
import Profile from "../../domain/profileEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function updateProfileUseCase(profileId, updateData) {
  try {
    logger.info(`Updating profile: ${profileId}`);

    // Obtener el perfil existente
    const existingProfile = await profileRepository.getById(profileId);

    // Crear una nueva instancia con los datos actualizados
    const updatedProfile = new Profile({
      ...existingProfile,
      ...updateData,
    });

    // Validar los datos actualizados
    const validation = updatedProfile.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Actualizar en la base de datos
    const result = await profileRepository.update(profileId, {
      fullName: updatedProfile.fullName,
      title: updatedProfile.title,
      bio: updatedProfile.bio,
      email: updatedProfile.email,
      phone: updatedProfile.phone,
      location: updatedProfile.location,
      avatar: updatedProfile.avatar,
      resume: updatedProfile.resume,
      socialLinks: updatedProfile.socialLinks,
      isActive: updatedProfile.isActive,
    });

    logger.info(`Profile updated successfully: ${profileId}`);
    return result;
  } catch (error) {
    logger.error(`Error updating profile: ${error.message}`);
    throw error;
  }
}
