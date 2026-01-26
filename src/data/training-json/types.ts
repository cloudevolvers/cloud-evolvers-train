// Training JSON Schema and Types
export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration?: string;
  topics?: string[];
}

export interface HandsOnLab {
  id: string;
  title: string;
  description: string;
  duration?: string;
  icon: string;
}

export interface TrainingInstructor {
  id: string;
  name: string;
  title: string;
  bio?: string;
  expertise?: string[];
  certifications?: string[];
}

export interface TrainingJSON {
  // Basic Info
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  overview: string;
  
  // Categorization
  category: string;
  subcategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  
  // Duration and Format
  duration: {
    days: number;
    hours?: number;
    format: 'days' | 'hours';
  };
  
  // Pricing
  price: {
    amount: number;
    currency: string;
  };
  
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
  
  // Instructor
  instructor: TrainingInstructor;
  
  // Certification
  certification?: {
    available: boolean;
    name: string;
    examCode?: string;
    provider: string;
  };
  
  // Scheduling
  maxParticipants: number;
  schedule: {
    available: boolean;
    nextSession?: string;
  };
  
  // Metadata
  featured: boolean;
  icon: string;
  createdAt: string;
  updatedAt: string;
}
