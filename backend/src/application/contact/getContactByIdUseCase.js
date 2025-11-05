import contactRepository from "../../infrastructure/database/prisma/contactRepository.js";
import logger from "../../config/logger.js";

export default async function getContactByIdUseCase(id) {
  try {
    logger.info(`Fetching contact message: ${id}`);
    const contact = await contactRepository.findById(id);
    logger.info("Contact message fetched successfully");
    return contact;
  } catch (error) {
    logger.error(`Error fetching contact message: ${error.message}`);
    throw error;
  }
}
