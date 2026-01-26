// Training system types for Cloud Evolvers Training Platform
export interface Training {
  id: string;
  slug: string;
  code?: string; // Course code like AZ-104, MS-900
  title: string;
  description: string;
  category: TrainingCategory;
  subcategory?: string;
  level: DifficultyLevel;
  duration: Duration;
  price?: Price;
  
  // Course Content
  overview: string;
  learningObjectives: string[];
  prerequisites: string[];
  targetAudience: string[];
  
  // Certification & Completion
  certification?: CertificationInfo;
  
  // Course Structure
  modules: CourseModule[];
  highlights: string[];
  
  // Metadata
  instructor: Instructor;
  deliveryMethods: DeliveryMethod[];
  maxParticipants?: number;
  featured?: boolean;
  tags: string[];
  
  // Publishing
  isPublished: boolean;
  publishedAt: string;
  updatedAt: string;
  order?: number;
}

export interface CourseModule {
  title: string;
  topics: string[];
  duration?: string;
}

export interface Duration {
  days?: number;
  hours?: number;
  format: 'days' | 'hours';
}

export interface Price {
  amount: number;
  currency: string;
}

export interface CertificationInfo {
  available: boolean;
  name: string;
  examCode?: string;
  provider?: string;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio?: string;
  avatar?: string;
  certifications?: string[];
  specialties?: string[];
}

export type TrainingCategory = 
  | 'Cloud Fundamentals'
  | 'Azure Administration'
  | 'Azure Architecture'
  | 'Security & Compliance'
  | 'Developer Tools'
  | 'Microsoft 365'
  | 'Power Platform'
  | 'Infrastructure'
  | 'AI & Machine Learning'
  | 'AI & Copilot'
  | 'AI & Leadership';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type DeliveryMethod = 
  | 'In-Person Workshop'
  | 'Virtual Classroom'
  | 'Self-Paced Online'
  | 'Hybrid'
  | 'Executive Coaching';

export const trainingCategories: Array<{
  id: TrainingCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}> = [
  {
    id: 'Cloud Fundamentals',
    name: 'Cloud Fundamentals',
    description: 'Azure fundamentals, administration, architecture, and specialized services',
    icon: 'Cloud',
    color: 'blue'
  },
  {
    id: 'Microsoft 365',
    name: 'Microsoft 365',
    description: 'Productivity suite, collaboration tools, and modern workplace solutions',
    icon: 'Users',
    color: 'green'
  },
  {
    id: 'Power Platform',
    name: 'Power Platform',
    description: 'Low-code solutions, automation, and business applications',
    icon: 'Lightning',
    color: 'purple'
  },
  {
    id: 'Security & Compliance',
    name: 'Security & Compliance',
    description: 'Identity management, security frameworks, and compliance solutions',
    icon: 'Shield',
    color: 'red'
  },
  {
    id: 'Developer Tools',
    name: 'Developer Tools',
    description: 'Development platforms, DevOps, and application lifecycle management',
    icon: 'Code',
    color: 'orange'
  },
  {
    id: 'Infrastructure',
    name: 'Infrastructure',
    description: 'Windows Server administration, hybrid infrastructure, and enterprise services',
    icon: 'Server',
    color: 'gray'
  },
  {
    id: 'AI & Machine Learning',
    name: 'AI & Machine Learning',
    description: 'Artificial intelligence, machine learning, and cognitive services',
    icon: 'Brain',
    color: 'teal'
  }
];

// Helper types for filtering and searching
export interface TrainingFilter {
  category?: TrainingCategory;
  level?: DifficultyLevel;
  duration?: {
    min?: number;
    max?: number;
  };
  tags?: string[];
  search?: string;
  featured?: boolean;
}

// Multilingual content support
export interface TrainingContent {
  en: Training;
  nl: Training;
}

export interface TrainingTranslations {
  [key: string]: TrainingContent;
}
