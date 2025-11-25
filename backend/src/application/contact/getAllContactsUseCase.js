import contactRepository from "../../infrastructure/database/prisma/contactRepository.js";
import logger from "../../config/logger.js";

export default async function getAllContactsUseCase(filters = {}) {
  try {
    logger.info("Fetching all contact messages");
    const result = await contactRepository.findAll(filters);
    logger.info(`Found ${result.length} contact messages`);
    return result;
  } catch (error) {
    logger.error(`Error fetching contact messages: ${error.message}`);
    throw error;
  }
}
