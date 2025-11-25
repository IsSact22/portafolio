import prisma from "./client.js";
import Profile from "../../../domain/profileEntity.js";
import { NotFoundError } from "../../../core/AppError.js";

class ProfileRepository {
  // Crear un nuevo perfil
  async create(profileData) {
    const profile = await prisma.profile.create({
      data: profileData,
    });
    return this.toDomain(profile);
  }

  // Obtener el perfil activo (solo debe haber uno)
  async getActive() {
    const profile = await prisma.profile.findFirst({
      where: { isActive: true },
    });
    
    if (!profile) {
      throw new NotFoundError("Profile");
    }
    
    return this.toDomain(profile);
  }

  // Obtener perfil por ID
  async getById(id) {
    const profile = await prisma.profile.findUnique({
      where: { id },
    });
    
    if (!profile) {
      throw new NotFoundError("Profile");
    }
    
    return this.toDomain(profile);
  }

  // Actualizar perfil
  async update(id, updateData) {
    try {
      const profile = await prisma.profile.update({
        where: { id },
        data: updateData,
      });
      
      return this.toDomain(profile);
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Profile");
      }
      throw error;
    }
  }

  // Eliminar perfil (soft delete)
  async delete(id) {
    try {
      const profile = await prisma.profile.update({
        where: { id },
        data: { isActive: false },
      });
      
      return this.toDomain(profile);
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Profile");
      }
      throw error;
    }
  }

  // Verificar si existe un perfil
  async exists() {
    const count = await prisma.profile.count({
      where: { isActive: true },
    });
    return count > 0;
  }

  // Convertir registro de Prisma a entidad de dominio
  toDomain(profileRecord) {
    if (!profileRecord) return null;

    return new Profile({
      id: profileRecord.id,
      fullName: profileRecord.fullName,
      title: profileRecord.title,
      bio: profileRecord.bio,
      email: profileRecord.email,
      phone: profileRecord.phone,
      location: profileRecord.location,
      avatar: profileRecord.avatar,
      resume: profileRecord.resume,
      socialLinks: profileRecord.socialLinks,
      isActive: profileRecord.isActive,
      createdAt: profileRecord.createdAt,
      updatedAt: profileRecord.updatedAt,
    });
  }
}

export default new ProfileRepository();
