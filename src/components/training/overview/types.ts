// Training overview types and interfaces
export interface CombinedTraining {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: { days: number; hours: number };
  price?: { amount: number; currency: string };
  featured: boolean;
  icon?: string;
  learningObjectives?: string[];
  prerequisites?: string[];
  targetAudience?: string[];
  certification?: { available: boolean; examCode?: string; examName?: string };
  tags?: string[];
  maxParticipants?: number;
  instructor?: {
    name: string;
    title: string;
    experience?: string;
    certifications?: string[];
  };
  isJsonBased?: boolean;
}

export interface FilterState {
  searchTerm: string;
  selectedCategory: string | 'all';
  selectedLevel: string | 'all';
  featuredOnly: boolean;
  certificationOnly: boolean;
  sortBy: 'title' | 'level' | 'duration';
}
