import { create } from 'zustand';
import { skillsService } from '../lib/services/skillsService';
import type { Skill, SkillFilters } from '../lib/types/skill';

interface SkillsState {
  skills: Skill[];
  skillsByCategory: Record<string, Skill[]>;
  loading: boolean;
  error: string | null;
  fetchSkills: (filters?: SkillFilters) => Promise<void>;
  groupSkillsByCategory: () => void;
  clearError: () => void;
}

export const useSkillsStore = create<SkillsState>((set, get) => ({
  skills: [],
  skillsByCategory: {},
  loading: false,
  error: null,

  fetchSkills: async (filters?: SkillFilters) => {
    set({ loading: true, error: null });
    try {
      const skills = await skillsService.getSkills(filters);
      set({ skills, loading: false });
      get().groupSkillsByCategory();
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch skills',
        loading: false 
      });
    }
  },

  groupSkillsByCategory: () => {
    const { skills } = get();
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
    
    set({ skillsByCategory: grouped });
  },

  clearError: () => set({ error: null }),
}));
