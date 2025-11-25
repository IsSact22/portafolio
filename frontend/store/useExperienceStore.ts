import { create } from 'zustand';
import { experienceService } from '../lib/services/experienceService';
import type { Experience, ExperienceFilters } from '../lib/types/experience';

interface ExperienceState {
  experiences: Experience[];
  loading: boolean;
  error: string | null;
  fetchExperiences: (filters?: ExperienceFilters) => Promise<void>;
  clearError: () => void;
}

export const useExperienceStore = create<ExperienceState>((set) => ({
  experiences: [],
  loading: false,
  error: null,

  fetchExperiences: async (filters?: ExperienceFilters) => {
    set({ loading: true, error: null });
    try {
      const experiences = await experienceService.getExperiences(filters);
      set({ experiences, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch experiences',
        loading: false 
      });
    }
  },

  clearError: () => set({ error: null }),
}));
