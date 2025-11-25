import contactRepository from "../../infrastructure/database/prisma/contactRepository.js";
import logger from "../../config/logger.js";

export default async function deleteContactUseCase(contactId) {
  try {
    logger.info(`Deleting contact message: ${contactId}`);

    await contactRepository.delete(contactId);

    logger.info(`Contact message deleted successfully: ${contactId}`);
    return true;
  } catch (error) {
    logger.error(`Error deleting contact message: ${error.message}`);
    throw error;
  }
}
