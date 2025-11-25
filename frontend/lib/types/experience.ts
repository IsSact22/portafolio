export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  location?: string;
  type?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  achievements: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateExperienceDto {
  company: string;
  position: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
  isCurrent?: boolean;
  location?: string;
  type?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  achievements?: string[];
}

export interface UpdateExperienceDto {
  company?: string;
  position?: string;
  description?: string;
  technologies?: string[];
  startDate?: Date;
  endDate?: Date;
  isCurrent?: boolean;
  location?: string;
  type?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  achievements?: string[];
}

export interface ExperienceFilters {
  company?: string;
  position?: string;
}
