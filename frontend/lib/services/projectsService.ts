import apiClient from '../api/client';
import type { Project, CreateProjectDto, UpdateProjectDto, ProjectFilters } from '../types/project';
import type { ApiResponse, PaginatedResponse } from '../types/api';

export const projectsService = {
  // Get all projects with filters
  getProjects: async (filters?: ProjectFilters): Promise<Project[]> => {
    const params = new URLSearchParams();
    
    if (filters?.status) params.append('status', filters.status);
    if (filters?.featured !== undefined) params.append('featured', String(filters.featured));
    if (filters?.category) params.append('category', filters.category);
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.limit) params.append('limit', String(filters.limit));

    const queryString = params.toString();
    const url = `/projects${queryString ? `?${queryString}` : ''}`;
    
    const response = await apiClient.get<PaginatedResponse<Project>>(url);
    return response.data.data;
  },

  // Get single project
  getProject: async (id: string): Promise<Project> => {
    const response = await apiClient.get<ApiResponse<Project>>(`/projects/${id}`);
    return response.data.data;
  },

  // Create project
  createProject: async (data: CreateProjectDto): Promise<Project> => {
    const response = await apiClient.post<ApiResponse<Project>>('/projects', data);
    return response.data.data;
  },

  // Update project
  updateProject: async (id: string, data: UpdateProjectDto): Promise<Project> => {
    const response = await apiClient.put<ApiResponse<Project>>(`/projects/${id}`, data);
    return response.data.data;
  },

  // Delete project
  deleteProject: async (id: string): Promise<void> => {
    await apiClient.delete(`/projects/${id}`);
  },
};
