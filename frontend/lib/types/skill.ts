export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
  icon?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSkillDto {
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
  icon?: string;
  order?: number;
}

export interface UpdateSkillDto {
  name?: string;
  category?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
  icon?: string;
  order?: number;
}

export interface SkillFilters {
  category?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}
