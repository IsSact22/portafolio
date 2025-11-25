export default class Skill {
    constructor({
        id,
        name,
        category,
        level,
        icon,
        order = 0,
        yearsOfExperience,
        createdAt,
        updatedAt,
 }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.level = level;
    this.icon = icon;
    this.order = order;
    this.yearsOfExperience = yearsOfExperience;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
    }
    
    validate() {
        const errors = [];

        if (!this.name || this.name.trim().length === 0) {
            errors.push("El nombre es requerido");
        }

        if (!this.category || this.category.trim().length === 0) {
            errors.push("La categoría es requerida");
        }

        if (!this.level || this.level.trim().length === 0) {
            errors.push("El nivel es requerido");
        }

        if (!this.icon || this.icon.trim().length === 0) {
            errors.push("El icono es requerido");
        }

        if (!this.yearsOfExperience || this.yearsOfExperience.trim().length === 0) {
            errors.push("Los años de experiencia son requeridos");
        }

        return {
            isValid: errors.length === 0,
            errors,
        };
    }

    update(data) {
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined && key !== "createdAt" && key !== "id") {
                this[key] = data[key];
            }
        });
        this.updatedAt = new Date();
    }

}

