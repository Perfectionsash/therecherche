export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX content
  date: string;
  category: "Kitchens" | "Wardrobes" | "Joinery" | "Guides" | "Design";
  image: string;
  author: string;
  readTime: string;
  featured: boolean;
}

export interface BlogListItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface DesignGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string; // MDX content
  category: "Kitchens" | "Wardrobes" | "Joinery" | "General";
  image: string;
  downloadUrl?: string; // PDF download
  featured: boolean;
}