export default class Contact {
  constructor({
    id,
    name,
    email,
    subject,
    message,
    status = "new",
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
    this.status = status;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  validate() {
    const errors = [];

    if (!this.name || this.name.trim().length === 0) {
      errors.push("El nombre es requerido");
    }

    if (this.name && this.name.length > 100) {
      errors.push("El nombre no puede exceder 100 caracteres");
    }

    if (!this.email || !this.isValidEmail(this.email)) {
      errors.push("Email válido es requerido");
    }

    if (!this.subject || this.subject.trim().length === 0) {
      errors.push("El asunto es requerido");
    }

    if (this.subject && this.subject.length > 200) {
      errors.push("El asunto no puede exceder 200 caracteres");
    }

    if (!this.message || this.message.trim().length === 0) {
      errors.push("El mensaje es requerido");
    }

    if (this.message && this.message.length < 10) {
      errors.push("El mensaje debe tener al menos 10 caracteres");
    }

    const validStatuses = ["new", "read", "replied"];
    if (!validStatuses.includes(this.status)) {
      errors.push("Estado inválido. Debe ser: new, read o replied");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Marcar como leído
  markAsRead() {
    this.status = "read";
    this.updatedAt = new Date();
  }

  // Marcar como respondido
  markAsReplied() {
    this.status = "replied";
    this.updatedAt = new Date();
  }

  // Actualizar estado
  updateStatus(status) {
    const validStatuses = ["new", "read", "replied"];
    if (validStatuses.includes(status)) {
      this.status = status;
      this.updatedAt = new Date();
    }
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
