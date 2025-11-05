import createExperienceUseCase from "../../application/experience/createExperienceUseCase.js";
import getAllExperienceUseCase from "../../application/experience/getAllExperienceUseCase.js";
import getExperienceByIdUseCase from "../../application/experience/getExperienceByIdUseCase.js";
import updateExperienceUseCase from "../../application/experience/updateExperienceUseCase.js";
import deleteExperienceUseCase from "../../application/experience/deleteExperienceUseCase.js";

class ExperienceController {

    async create(req, res, next){
        try{
            const experience = await createExperienceUseCase(req.body);
            res.status(201).json({
                success: true,
                message: "Experience created successfully",
                data: experience,
            });
        }catch(error){
            next(error);
        }
    }

    async getAll(req, res, next){
        try{
            const experiences = await getAllExperienceUseCase();
            res.status(200).json({
                success: true,
                data: experiences,
            });
        }catch(error){
            next(error);
        }
    }

    async getById(req, res, next){
        try{
            const { id } = req.params;
            const experience = await getExperienceByIdUseCase(id);
            res.status(200).json({
                success: true,
                data: experience,
            });
        }catch(error){
            next(error);
        }
    }

    async update(req, res, next){
        try{
            const { id } = req.params;
            const experience = await updateExperienceUseCase(id, req.body);
            res.status(200).json({
                success: true,
                message: "Experience updated successfully",
                data: experience,
            });
        }catch(error){
            next(error);
        }
    }

    async delete(req, res, next){
        try{
            const { id } = req.params;
            await deleteExperienceUseCase(id);
            res.status(200).json({
                success: true,
                message: "Experience deleted successfully",
            });
        }catch(error){
            next(error);
        }
    }
}
export default new ExperienceController();
