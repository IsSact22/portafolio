import { create } from 'zustand';
import { contactService } from '../lib/services/contactService';
import type { CreateContactDto } from '../lib/types/contact';

interface ContactState {
  loading: boolean;
  error: string | null;
  success: boolean;
  sendMessage: (data: CreateContactDto) => Promise<void>;
  clearState: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  loading: false,
  error: null,
  success: false,

  sendMessage: async (data: CreateContactDto) => {
    set({ loading: true, error: null, success: false });
    try {
      await contactService.sendMessage(data);
      set({ loading: false, success: true });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to send message',
        loading: false,
        success: false
      });
    }
  },

  clearState: () => set({ error: null, success: false }),
}));
