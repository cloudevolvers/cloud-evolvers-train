// Enhanced Training JSON Schema and Types for Modular Content System
export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  content: string; // HTML content
  icon: string;
  duration?: string;
  topics?: string[];
  labs?: Array<{
    id: string;
    title: string;
    description: string;
    duration?: string;
  }>;
  resources?: Array<{
    type: 'video' | 'document' | 'link' | 'exercise';
    title: string;
    url: string;
    description?: string;
  }>;
}

export interface HandsOnLab {
  id: string;
  title: string;
  description: string;
  content: string; // HTML content
  duration?: string;
  icon: string;
  objectives?: string[];
  prerequisites?: string[];
}

export interface TrainingInstructor {
  id: string;
  name: string;
  title: string;
  bio?: string;
  expertise?: string[];
  certifications?: string[];
  image?: string;
  linkedin?: string;
}

export interface CertificationInfo {
  available: boolean;
  name: string;
  examCode?: string;
  provider: string;
  validity?: string;
  prerequisites?: string[];
}

export interface TrainingResource {
  type: 'book' | 'video' | 'course' | 'documentation' | 'tool';
  title: string;
  description: string;
  url?: string;
  author?: string;
  recommended?: boolean;
}

export interface TrainingPricing {
  amount: number;
  currency: string;
  discount?: {
    percentage: number;
    validUntil: string;
    description: string;
  };
  earlyBird?: {
    amount: number;
    deadline: string;
  };
  groupDiscount?: {
    minParticipants: number;
    percentage: number;
  };
}

export interface TrainingSchedule {
  available: boolean;
  nextSession?: string;
  format: 'onsite' | 'remote' | 'hybrid';
  timezone?: string;
  sessions?: Array<{
    date: string;
    time: string;
    duration: string;
    topic?: string;
  }>;
}

export interface TrainingTestimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  image?: string;
}

export interface TrainingFAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface TrainingJSON {
  // Basic Info
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  overview: string; // HTML content
  shortDescription?: string;

  // Categorization
  category: string;
  subcategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  keywords?: string[];

  // Duration and Format
  duration: {
    days: number;
    hours?: number;
    format: 'days' | 'hours';
  };

  // Pricing
  price: TrainingPricing;

  // Learning Content
  learningObjectives: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;

  modules: TrainingModule[];

  handsOnLabs: HandsOnLab[];

  // Requirements
  prerequisites: string[];
  targetAudience: string[];
  recommendedExperience?: string;

  // Instructor
  instructor: TrainingInstructor;

  // Certification
  certification?: CertificationInfo;

  // Scheduling
  maxParticipants: number;
  schedule: TrainingSchedule;

  // Additional Content
  agenda?: string; // HTML content
  curriculum?: string; // HTML content
  resources?: TrainingResource[];
  testimonials?: TrainingTestimonial[];
  faqs?: TrainingFAQ[];

  // Metadata
  featured: boolean;
  icon: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  version: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
}

// Service JSON Schema
export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
  details?: string;
}

export interface ServicePricing {
  model: 'fixed' | 'hourly' | 'monthly' | 'custom';
  startingPrice?: number;
  currency: string;
  tiers?: Array<{
    name: string;
    price: number;
    features: string[];
    recommended?: boolean;
  }>;
}

export interface ServiceCaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  image?: string;
}

export interface ServiceJSON {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  overview: string; // HTML content
  category: string;
  subcategory?: string;
  tags: string[];

  features: ServiceFeature[];
  benefits?: string[];
  process?: Array<{
    step: number;
    title: string;
    description: string;
    duration?: string;
  }>;

  pricing: ServicePricing;
  caseStudies?: ServiceCaseStudy[];

  deliverables?: string[];
  timeline?: string;
  prerequisites?: string[];

  featured: boolean;
  icon: string;
  image?: string;
  createdAt: string;
  updatedAt: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}

// Blog JSON Schema
export interface BlogAuthor {
  id: string;
  name: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface BlogJSON {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  content: string; // HTML content
  excerpt?: string;

  author: BlogAuthor;
  coAuthors?: BlogAuthor[];

  category: string;
  subcategories?: string[];
  tags: string[];
  keywords?: string[];

  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // in minutes

  featured: boolean;
  featuredImage?: string;
  images?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;

  series?: {
    name: string;
    part: number;
    total: number;
  };

  relatedPosts?: string[]; // slugs of related posts

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;

  // Social
  socialImage?: string;

  // Metadata
  wordCount?: number;
  language: string;
}

// Content Loading Types
export interface ContentLoader<T> {
  loadBySlug: (slug: string) => Promise<T | null>;
  loadByCategory: (category: string) => Promise<T[]>;
  loadAll: () => Promise<T[]>;
  search: (query: string) => Promise<T[]>;
}

export interface ContentRendererProps<T> {
  data: T;
  language?: string;
  preview?: boolean;
}

// Utility Types
export type ContentType = 'training' | 'service' | 'blog';
export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type TrainingFormat = 'onsite' | 'remote' | 'hybrid';
