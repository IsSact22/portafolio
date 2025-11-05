import prisma from "./client.js";
import Experience from "../../../domain/experienceEntity.js";
import { NotFoundError } from "../../../core/AppError.js";


class ExperienceRepository{
    async create(experienceData){
        const experience = await prisma.experience.create({
            data: experienceData,
        });
        return this.toDomain(experience);
    }

    async findAll(filters = {}) {
        
        const where = {};

        // Filtrar por posición si se proporciona
        if(filters.position){
            where.position = filters.position;
        }

        // Filtrar por empresa
        if (filters.company) {
            where.company = filters.company;
        }

        const experiences = await prisma.experience.findMany({
            where,
            orderBy: [{ startDate: "desc" }],
        });

        return experiences.map((s) => this.toDomain(s));
    }

    async findById(id) {
        const experiences = await prisma.experience.findUnique({
            where: { id },
        });

        if (!experiences) {
            throw new NotFoundError("Experience");
        }

        return this.toDomain(experiences);
    }


    async findByCompany(company) {
        const experiences = await prisma.experience.findMany({
            where: { company },
            orderBy: [{ startDate: "desc" }],
        });

        return experiences.map((s) => this.toDomain(s));
    }


    async update(id, updateData) {
        try {
            const experience = await prisma.experience.update({
                where: { id },
                data: updateData,
            });

            return this.toDomain(experience);
        } catch (error) {
            if (error.code === "P2025") {
                throw new NotFoundError("Experience");
            }
            throw error;
        }
    }
    
    async delete(id) {
        try {
            await prisma.experience.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            if (error.code === "P2025") {
                throw new NotFoundError("Experience");
            }
            throw error;
        }
    }

    async technologies(id) {
        const experience = await prisma.experience.findUnique({
            where: { id },
            select: {
                technologies: true,
            },
        });

        if (!experience) {
            throw new NotFoundError("Experience");
        }

        return experience.technologies;
    }


    toDomain(experienceRecord) {
        if (!experienceRecord) { return null; }

        return new Experience({
            id: experienceRecord.id,
            company: experienceRecord.company,
            position: experienceRecord.position,
            description: experienceRecord.description,
            technologies: experienceRecord.technologies,
            startDate: experienceRecord.startDate,
            endDate: experienceRecord.endDate,
            isCurrent: experienceRecord.isCurrent,
            location: experienceRecord.location,
            type: experienceRecord.type,
            achievements: experienceRecord.achievements,
            createdAt: experienceRecord.createdAt,
            updatedAt: experienceRecord.updatedAt,
        });
    }

}
export default new ExperienceRepository();