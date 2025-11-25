import apiClient from '../api/client';
import type { Skill, CreateSkillDto, UpdateSkillDto, SkillFilters } from '../types/skill';
import type { ApiResponse } from '../types/api';

export const skillsService = {
  // Get all skills with filters
  getSkills: async (filters?: SkillFilters): Promise<Skill[]> => {
    const params = new URLSearchParams();
    
    if (filters?.category) params.append('category', filters.category);
    if (filters?.level) params.append('level', filters.level);

    const queryString = params.toString();
    const url = `/skills${queryString ? `?${queryString}` : ''}`;
    
    const response = await apiClient.get<ApiResponse<Skill[]>>(url);
    return response.data.data;
  },

  // Get single skill
  getSkill: async (id: string): Promise<Skill> => {
    const response = await apiClient.get<ApiResponse<Skill>>(`/skills/${id}`);
    return response.data.data;
  },

  // Create skill
  createSkill: async (data: CreateSkillDto): Promise<Skill> => {
    const response = await apiClient.post<ApiResponse<Skill>>('/skills', data);
    return response.data.data;
  },

  // Update skill
  updateSkill: async (id: string, data: UpdateSkillDto): Promise<Skill> => {
    const response = await apiClient.put<ApiResponse<Skill>>(`/skills/${id}`, data);
    return response.data.data;
  },

  // Delete skill
  deleteSkill: async (id: string): Promise<void> => {
    await apiClient.delete(`/skills/${id}`);
  },
};
