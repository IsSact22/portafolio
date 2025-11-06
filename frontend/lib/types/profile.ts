export interface Profile {
  id: string;
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  avatar?: string;
  resumeUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProfileDto {
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  avatar?: string;
  resumeUrl?: string;
  isActive?: boolean;
}

export type UpdateProfileDto = Partial<CreateProfileDto>;
