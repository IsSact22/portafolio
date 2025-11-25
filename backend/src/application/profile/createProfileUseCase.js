import profileRepository from "../../infrastructure/database/prisma/profileRepository.js";
import Profile from "../../domain/profileEntity.js";
import { ValidationError, ConflictError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function createProfileUseCase(profileData) {
  try {
    logger.info("Creating new profile");

    // Verificar si ya existe un perfil activo
    const profileExists = await profileRepository.exists();
    if (profileExists) {
      throw new ConflictError("An active profile already exists. Please update the existing one instead.");
    }

    // Crear instancia de la entidad Profile
    const profile = new Profile(profileData);

    // Validar datos
    const validation = profile.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Guardar en la base de datos
    const createdProfile = await profileRepository.create({
      fullName: profile.fullName,
      title: profile.title,
      bio: profile.bio,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      avatar: profile.avatar,
      resume: profile.resume,
      socialLinks: profile.socialLinks,
      isActive: profile.isActive,
    });

    logger.info(`Profile created successfully: ${createdProfile.email}`);
    return createdProfile;
  } catch (error) {
    logger.error(`Error creating profile: ${error.message}`);
    throw error;
  }
}
