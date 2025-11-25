import apiClient from '../api/client';
import type { Experience, CreateExperienceDto, UpdateExperienceDto, ExperienceFilters } from '../types/experience';
import type { ApiResponse } from '../types/api';

export const experienceService = {
  // Get all experiences with filters
  getExperiences: async (filters?: ExperienceFilters): Promise<Experience[]> => {
    const params = new URLSearchParams();
    
    if (filters?.company) params.append('company', filters.company);
    if (filters?.position) params.append('position', filters.position);

    const queryString = params.toString();
    const url = `/experience${queryString ? `?${queryString}` : ''}`;
    
    const response = await apiClient.get<ApiResponse<Experience[]>>(url);
    return response.data.data;
  },

  // Get single experience
  getExperience: async (id: string): Promise<Experience> => {
    const response = await apiClient.get<ApiResponse<Experience>>(`/experience/${id}`);
    return response.data.data;
  },

  // Create experience
  createExperience: async (data: CreateExperienceDto): Promise<Experience> => {
    const response = await apiClient.post<ApiResponse<Experience>>('/experience', data);
    return response.data.data;
  },

  // Update experience
  updateExperience: async (id: string, data: UpdateExperienceDto): Promise<Experience> => {
    const response = await apiClient.put<ApiResponse<Experience>>(`/experience/${id}`, data);
    return response.data.data;
  },

  // Delete experience
  deleteExperience: async (id: string): Promise<void> => {
    await apiClient.delete(`/experience/${id}`);
  },
};
