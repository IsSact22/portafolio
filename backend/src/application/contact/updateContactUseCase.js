import contactRepository from "../../infrastructure/database/prisma/contactRepository.js";
import Contact from "../../domain/contactEntity.js";
import { ValidationError } from "../../core/AppError.js";
import logger from "../../config/logger.js";

export default async function updateContactUseCase(contactId, updateData) {
  try {
    logger.info(`Updating contact message: ${contactId}`);

    // Obtener el contacto existente
    const existingContact = await contactRepository.findById(contactId);

    // Crear una nueva instancia con los datos actualizados
    const updatedContact = new Contact({
      ...existingContact,
      ...updateData,
    });

    // Validar los datos actualizados
    const validation = updatedContact.validate();
    if (!validation.isValid) {
      throw new ValidationError(validation.errors.join(", "));
    }

    // Actualizar en la base de datos
    const result = await contactRepository.update(contactId, {
      name: updatedContact.name,
      email: updatedContact.email,
      subject: updatedContact.subject,
      message: updatedContact.message,
      status: updatedContact.status,
    });

    logger.info(`Contact message updated successfully: ${contactId}`);
    return result;
  } catch (error) {
    logger.error(`Error updating contact message: ${error.message}`);
    throw error;
  }
}
