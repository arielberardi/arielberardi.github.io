export interface WorkExperience {
  role: string;
  company: string;
  dateRange: string;
  achievements: string[];
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Certificate {
  title: string;
  academy: string;
  year: string | number;
  certificateUrl: string;
  image: string;
}
