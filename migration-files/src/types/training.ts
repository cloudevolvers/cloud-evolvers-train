/**
 * Training system types following the same patterns as blog and services
 */

export interface Training {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: TrainingCategory;
  subcategory?: string;
  difficulty: DifficultyLevel;
  duration: Duration;
  prerequisites: string[];
  learningObjectives: string[];
  instructor: Instructor;
  image?: string;
  imageAlt?: string;
  tags: string[];
  isPublished: boolean;
  publishedAt: string;
  updatedAt: string;
  order?: number;
  
  // Scheduling and delivery
  deliveryMethods: DeliveryMethod[];
  maxParticipants?: number;
  price?: number;
  currency?: string;
  
  // Certification and completion
  certificationOffered?: boolean;
  completionCriteria?: string[];
  
  // Additional metadata
  materials?: TrainingMaterial[];
  [key: string]: any;
}

export interface TrainingMaterial {
  id: string;
  title: string;
  type: MaterialType;
  url?: string;
  description?: string;
  downloadable?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio?: string;
  avatar?: string;
  email?: string;
  certifications?: string[];
  specialties?: string[];
}

export interface Duration {
  hours: number;
  minutes?: number;
  days?: number;
  format: DurationFormat;
}

export type TrainingCategory =
  | 'Microsoft 365'
  | 'Azure Cloud'
  | 'Power Platform'
  | 'Security & Compliance'
  | 'Developer Tools'
  | 'Data & Analytics'
  | 'AI & Machine Learning'
  | 'Windows & Device Management'
  | 'Custom Solutions';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type DeliveryMethod = 
  | 'In-Person Workshop'
  | 'Virtual Classroom'
  | 'Self-Paced Online'
  | 'Hybrid'
  | 'Microlearning'
  | 'On-Demand Video';

export type MaterialType = 
  | 'PDF'
  | 'Video'
  | 'Interactive Demo'
  | 'Lab Environment'
  | 'Certification Exam'
  | 'Reference Guide'
  | 'Template'
  | 'Code Sample';

export type DurationFormat = 'hours' | 'days' | 'weeks' | 'months';

export interface TrainingFilter {
  category?: TrainingCategory;
  difficulty?: DifficultyLevel;
  deliveryMethod?: DeliveryMethod;
  duration?: {
    min?: number;
    max?: number;
  };
  tags?: string[];
  search?: string;
}

export interface TrainingEnrollment {
  id: string;
  trainingId: string;
  userId: string;
  enrolledAt: string;
  status: EnrollmentStatus;
  completedAt?: string;
  progress?: number;
  certificateIssued?: boolean;
}

export type EnrollmentStatus = 
  | 'enrolled'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'expired';

// Default training categories with their metadata
export const trainingCategories: Array<{
  id: TrainingCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}> = [
  {
    id: 'Microsoft 365',
    name: 'Microsoft 365',
    description: 'Copilot, Teams, SharePoint, and productivity suite training',
    icon: 'Users',
    color: 'blue'
  },
  {
    id: 'Azure Cloud',
    name: 'Azure Cloud',
    description: 'Azure fundamentals, services, and cloud architecture',
    icon: 'Cloud',
    color: 'indigo'
  },
  {
    id: 'Power Platform',
    name: 'Power Platform',
    description: 'Power Apps, Power Automate, and Power BI training',
    icon: 'Zap',
    color: 'purple'
  },
  {
    id: 'Security & Compliance',
    name: 'Security & Compliance',
    description: 'Security frameworks, compliance, and risk management',
    icon: 'Shield',
    color: 'red'
  },
  {
    id: 'Developer Tools',
    name: 'Developer Tools',
    description: 'Visual Studio, GitHub, and development workflows',
    icon: 'Code',
    color: 'green'
  },
  {
    id: 'Data & Analytics',
    name: 'Data & Analytics',
    description: 'Data management, analytics, and business intelligence',
    icon: 'BarChart',
    color: 'yellow'
  },
  {
    id: 'AI & Machine Learning',
    name: 'AI & Machine Learning',
    description: 'AI services, machine learning, and cognitive services',
    icon: 'Brain',
    color: 'pink'
  },
  {
    id: 'Windows & Device Management',
    name: 'Windows & Device Management',
    description: 'Windows administration, Intune, and device management',
    icon: 'Monitor',
    color: 'gray'
  },
  {
    id: 'Custom Solutions',
    name: 'Custom Solutions',
    description: 'Tailored training programs for specific business needs',
    icon: 'Settings',
    color: 'orange'
  }
];

// Default instructors
export const defaultInstructors: Instructor[] = [
  {
    id: 'instructor-1',
    name: 'Sarah Johnson',
    title: 'Azure Solutions Architect',
    bio: 'Microsoft MVP with 10+ years of cloud architecture experience',
    avatar: '/images/instructors/sarah-johnson.jpg',
    certifications: ['Azure Solutions Architect Expert', 'Azure DevOps Engineer Expert'],
    specialties: ['Azure Architecture', 'Cloud Migration', 'DevOps']
  },
  {
    id: 'instructor-2',
    name: 'Michael Chen',
    title: 'Microsoft 365 Specialist',
    bio: 'Expert in Microsoft 365 adoption and productivity solutions',
    avatar: '/images/instructors/michael-chen.jpg',
    certifications: ['Microsoft 365 Certified: Enterprise Administrator Expert'],
    specialties: ['Microsoft 365', 'Teams Administration', 'SharePoint']
  },
  {
    id: 'instructor-3',
    name: 'Lisa Rodriguez',
    title: 'Security & Compliance Expert',
    bio: 'Cybersecurity professional specializing in Microsoft security solutions',
    avatar: '/images/instructors/lisa-rodriguez.jpg',
    certifications: ['Azure Security Engineer Associate', 'Microsoft 365 Security Administrator'],
    specialties: ['Zero Trust', 'Compliance', 'Identity Management']
  }
];
