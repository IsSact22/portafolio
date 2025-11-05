import contactRepository from "../../infrastructure/database/prisma/contactRepository.js";
import Contact from "../../domain/contactEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function createContactUseCase(contactData) {
  try {
    logger.info("Creating new contact message");

    // Crear instancia de la entidad Contact
    const contact = new Contact(contactData);

    // Validar datos
    const validation = contact.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Guardar en la base de datos
    const createdContact = await contactRepository.create({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      status: contact.status,
    });

    logger.info(`Contact message created successfully: ${createdContact.id}`);
    return createdContact;
  } catch (error) {
    logger.error(`Error creating contact message: ${error.message}`);
    throw error;
  }
}
