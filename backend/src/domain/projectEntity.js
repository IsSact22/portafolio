export default class Project {
  constructor({
    id,
    title,
    description,
    longDescription,
    technologies,
    category,
    image,
    gallery,
    demoUrl,
    repoUrl,
    featured = false,
    status = "draft",
    order = 0,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.longDescription = longDescription;
    this.technologies = technologies || [];
    this.category = category;
    this.image = image;
    this.gallery = gallery || [];
    this.demoUrl = demoUrl;
    this.repoUrl = repoUrl;
    this.featured = featured;
    this.status = status;
    this.order = order;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  // Validar datos del proyecto
  validate() {
    const errors = [];

    if (!this.title || this.title.trim().length === 0) {
      errors.push("El título es requerido");
    }

    if (this.title && this.title.length > 200) {
      errors.push("El título no puede exceder 200 caracteres");
    }

    if (!this.description || this.description.trim().length === 0) {
      errors.push("La descripción es requerida");
    }

    if (!this.category || this.category.trim().length === 0) {
      errors.push("La categoría es requerida");
    }

    if (!Array.isArray(this.technologies) || this.technologies.length === 0) {
      errors.push("Debe incluir al menos una tecnología");
    }

    const validStatuses = ["draft", "published"];
    if (!validStatuses.includes(this.status)) {
      errors.push("Estado inválido. Debe ser 'draft' o 'published'");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Marcar como destacado
  setFeatured(featured) {
    this.featured = featured;
    this.updatedAt = new Date();
  }

  // Cambiar estado
  setStatus(status) {
    const validStatuses = ["draft", "published"];
    if (validStatuses.includes(status)) {
      this.status = status;
      this.updatedAt = new Date();
    }
  }

  // Actualizar proyecto
  update(data) {
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined && key !== "createdAt" && key !== "id") {
        this[key] = data[key];
      }
    });
    this.updatedAt = new Date();
  }

  // Verificar si está publicado
  isPublished() {
    return this.status === "published";
  }

  // Verificar si es destacado
  isFeatured() {
    return this.featured === true;
  }
}
