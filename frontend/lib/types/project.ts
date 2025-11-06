export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  startDate?: Date;
  endDate?: Date;
  category?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProjectDto {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  status?: 'draft' | 'published' | 'archived';
  featured?: boolean;
  startDate?: Date;
  endDate?: Date;
  category?: string;
  order?: number;
}

export interface UpdateProjectDto {
  title?: string;
  description?: string;
  longDescription?: string;
  technologies?: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  status?: 'draft' | 'published' | 'archived';
  featured?: boolean;
  startDate?: Date;
  endDate?: Date;
  category?: string;
  order?: number;
}

export interface ProjectFilters {
  status?: 'draft' | 'published' | 'archived';
  featured?: boolean;
  category?: string;
  page?: number;
  limit?: number;
}
