import { create } from 'zustand';
import { projectsService } from '../lib/services/projectsService';
import type { Project, ProjectFilters } from '../lib/types/project';

interface ProjectsState {
  projects: Project[];
  featuredProjects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: (filters?: ProjectFilters) => Promise<void>;
  fetchFeaturedProjects: () => Promise<void>;
  clearError: () => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  featuredProjects: [],
  loading: false,
  error: null,

  fetchProjects: async (filters?: ProjectFilters) => {
    set({ loading: true, error: null });
    try {
      const projects = await projectsService.getProjects(filters);
      set({ projects, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch projects',
        loading: false 
      });
    }
  },

  fetchFeaturedProjects: async () => {
    set({ loading: true, error: null });
    try {
      const featuredProjects = await projectsService.getProjects({ 
        featured: true, 
        status: 'published' 
      });
      set({ featuredProjects, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch featured projects',
        loading: false 
      });
    }
  },

  clearError: () => set({ error: null }),
}));
