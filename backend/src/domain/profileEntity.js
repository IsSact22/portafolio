export default class Profile {
  constructor({
    id,
    fullName,
    title,
    bio,
    email,
    phone,
    location,
    avatar,
    resume,
    socialLinks,
    isActive = true,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.fullName = fullName;
    this.title = title; // "Backend Developer", "Fullstack Developer"
    this.bio = bio; // Descripción corta
    this.email = email;
    this.phone = phone;
    this.location = location; // "Ciudad, País"
    this.avatar = avatar; // URL de la imagen de perfil
    this.resume = resume; // URL del CV en PDF
    this.socialLinks = socialLinks || {
      github: "",
      linkedin: "",
      twitter: "",
      portfolio: "",
      instagram: "",
    };
    this.isActive = isActive;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  // Método para validar que los datos sean correctos
  validate() {
    const errors = [];

    if (!this.fullName || this.fullName.trim().length === 0) {
      errors.push("Full name is required");
    }

    if (!this.title || this.title.trim().length === 0) {
      errors.push("Title is required");
    }

    if (!this.email || !this.isValidEmail(this.email)) {
      errors.push("Valid email is required");
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

  // Método para actualizar el perfil
  update(data) {
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined && key !== "createdAt") {
        this[key] = data[key];
      }
    });
    this.updatedAt = new Date();
  }
}
