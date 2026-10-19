export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface KitchenProject {
  id: string;
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
  content: string; // MDX content
}

export interface WardrobeProject {
  id: string;
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
  content: string; // MDX content
}

export type Project = KitchenProject | WardrobeProject;

export interface ProjectListItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  styleOrType: string;
  image: string;
  description: string;
  category: "kitchen" | "wardrobe";
}

export interface ProjectFilters {
  category?: "kitchen" | "wardrobe";
  style?: string;
  type?: string;
  location?: string;
}