import prisma from "./client.js";
import Skill from "../../../domain/skillEntity.js";
import { NotFoundError } from "../../../core/AppError.js";

class SkillsRepository {
  async create(skillData) {
    const skill = await prisma.skill.create({
      data: skillData,
    });
    return this.toDomain(skill);
  }

  async findAll(filters = {}) {
    const where = {};

    // Filtrar por categoría si se proporciona
    if (filters.category) {
      where.category = filters.category;
    }

    const skills = await prisma.skill.findMany({
      where,
      orderBy: [{ order: "asc" }, { name: "asc" }],
    });

    return skills.map((s) => this.toDomain(s));
  }

  async findById(id) {
    const skill = await prisma.skill.findUnique({
      where: { id },
    });

    if (!skill) {
      throw new NotFoundError("Skill");
    }

    return this.toDomain(skill);
  }

  async findByCategory(category) {
    const skills = await prisma.skill.findMany({
      where: { category },
      orderBy: [{ order: "asc" }, { name: "asc" }],
    });

    return skills.map((s) => this.toDomain(s));
  }

  async update(id, updateData) {
    try {
      const skill = await prisma.skill.update({
        where: { id },
        data: updateData,
      });

      return this.toDomain(skill);
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Skill");
      }
      throw error;
    }
  }

  async delete(id) {
    try {
      await prisma.skill.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Skill");
      }
      throw error;
    }
  }

  async exists(id) {
    const count = await prisma.skill.count({
      where: { id },
    });
    return count > 0;
  }

  toDomain(skillRecord) {
    if (!skillRecord) return null;

    return new Skill({
      id: skillRecord.id,
      name: skillRecord.name,
      category: skillRecord.category,
      level: skillRecord.level,
      icon: skillRecord.icon,
      order: skillRecord.order,
      yearsOfExperience: skillRecord.yearsOfExperience,
      createdAt: skillRecord.createdAt,
      updatedAt: skillRecord.updatedAt,
    });
  }
}

export default new SkillsRepository();