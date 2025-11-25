import { create } from 'zustand';
import { profileService } from '../lib/services/profileService';
import type { Profile } from '../lib/types/profile';

interface ProfileState {
  profile: Profile | null;
  social_links: {
    github: string | null;
    linkedin: string | null;
    twitter: string | null;
  };
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  clearError: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: false,
  error: null,
  social_links: {
    github: null,
    linkedin: null,
    twitter: null,
  },

  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      const profile = await profileService.getProfile();
      set({ profile, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch profile',
        loading: false 
      });
    }
  },

  clearError: () => set({ error: null }),
}));
