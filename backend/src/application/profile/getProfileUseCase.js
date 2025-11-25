import profileRepository from "../../infrastructure/database/prisma/profileRepository.js";
import logger from "../../config/logger.js";

export default async function getProfileUseCase() {
  try {
    logger.info("Fetching active profile");
    const profile = await profileRepository.getActive();
    logger.info("Profile fetched successfully");
    return profile;
  } catch (error) {
    logger.error(`Error fetching profile: ${error.message}`);
    throw error;
  }
}
