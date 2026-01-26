export interface Service {
  id?: string;
  slug: string;
  title?: string;
  name?: string; // Added for compatibility with components
  description?: string;
  content?: string;
  icon?: string;
  features?: string[];
  isPublished?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  order?: number;
  
  // Image-related properties
  image?: string;
  imageAlt?: string;
  excerpt?: string;
  
  // Any additional metadata
  [key: string]: any;
}

export const serviceCategories = [
  "Cloud Infrastructure",
  "Identity & Security",
  "Data Solutions",
  "Application Development",
  "DevOps & Automation"
];

export interface ServiceMap {
  [slug: string]: Service;
}
