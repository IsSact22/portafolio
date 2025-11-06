import apiClient from '../api/client';
import type { Profile, CreateProfileDto, UpdateProfileDto } from '../types/profile';
import type { ApiResponse } from '../types/api';

export const profileService = {
  // Get active profile
  getProfile: async (): Promise<Profile> => {
    const response = await apiClient.get<ApiResponse<Profile>>('/profile');
    return response.data.data;
  },

  // Create profile
  createProfile: async (data: CreateProfileDto): Promise<Profile> => {
    const response = await apiClient.post<ApiResponse<Profile>>('/profile', data);
    return response.data.data;
  },

  // Update profile
  updateProfile: async (id: string, data: UpdateProfileDto): Promise<Profile> => {
    const response = await apiClient.put<ApiResponse<Profile>>(`/profile/${id}`, data);
    return response.data.data;
  },
};
