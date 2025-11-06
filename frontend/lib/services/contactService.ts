import apiClient from '../api/client';
import type { Contact, CreateContactDto } from '../types/contact';
import type { ApiResponse } from '../types/api';

export const contactService = {
  // Send contact message
  sendMessage: async (data: CreateContactDto): Promise<Contact> => {
    const response = await apiClient.post<ApiResponse<Contact>>('/contact', data);
    return response.data.data;
  },
};
