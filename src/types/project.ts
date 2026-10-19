export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  featured: boolean;
  image: string;
  content: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface KitchenProject {
  slug: string;
  title: string;
  location: string;
  style: string;
  finish: string;
  worktop: string;
  hardware: string;
  appliances: string;
  duration: string;
  budgetRange: string;
  completed: string;
  featured: boolean;
  images: ProjectImage[];
  content: string;
}

export interface WardrobeProject {
  slug: string;
  title: string;
  location: string;
  type: string;
  finish: string;
  internalSystem: string;
  hardware: string;
  lighting: string;
  duration: string;
  budgetRange: string;
  completed: string;
  featured: boolean;
  images: ProjectImage[];
  content: string;
}

export type Project = KitchenProject | WardrobeProject;

export interface Guide {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  featured: boolean;
  image: string;
  content: string;
}