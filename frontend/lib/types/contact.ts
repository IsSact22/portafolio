export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UpdateContactDto {
  status?: 'new' | 'read' | 'replied';
}

export interface ContactFilters {
  status?: 'new' | 'read' | 'replied';
  search?: string;
}
