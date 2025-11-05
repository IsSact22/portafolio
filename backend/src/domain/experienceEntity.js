export default class Experience {
  constructor({
    id,
    company,
    position,
    description,
    technologies,
    startDate,
    endDate,
    isCurrent = false,
    location,
    type,
    achievements,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.company = company;
    this.position = position;
    this.description = description;
    this.technologies = technologies || [];
    this.startDate = startDate;
    this.endDate = endDate;
    this.isCurrent = isCurrent;
    this.location = location;
    this.type = type;
    this.achievements = achievements || [];
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  validate() {
    const errors = [];

    if (!this.company || this.company.trim().length === 0) {
      errors.push("La empresa es requerida");
    }

    if (!this.position || this.position.trim().length === 0) {
      errors.push("La posición es requerida");
    }

    if (!this.description || this.description.trim().length === 0) {
      errors.push("La descripción es requerida");
    }

    if (!Array.isArray(this.technologies) || this.technologies.length === 0) {
      errors.push("Debe incluir al menos una tecnología");
    }

    if (!this.startDate) {
      errors.push("La fecha de inicio es requerida");
    }

    // endDate es opcional si isCurrent es true
    if (!this.isCurrent && !this.endDate) {
      errors.push("La fecha de fin es requerida si no es el trabajo actual");
    }

    if (this.type) {
      const validTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];
      if (!validTypes.includes(this.type)) {
        errors.push("Tipo de empleo inválido");
      }
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

