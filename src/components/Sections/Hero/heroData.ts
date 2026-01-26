import { IconType } from "react-icons";
import {
  FiCloud,
  FiShield,
  FiSettings,
  FiLock,
  FiCpu,
  FiDatabase,
} from "react-icons/fi";

export interface HeroImage {
  src: string;
  alt: string;
  description: string;
}

export interface TrainingBadge {
  code: string;
  slug: string;
  icon: IconType;
  color: string;
}

export const heroImages: HeroImage[] = [
  {
    src: "/images/unsplash/professional-cloud-training-hero.jpg",
    alt: "Professional cloud computing and training environment",
    description: "Modern cloud infrastructure visualization",
  },
  {
    src: "/images/unsplash/business-team-collaboration-modern.jpg",
    alt: "Business team collaboration in modern office",
    description: "Professional business team working together",
  },
  {
    src: "/images/unsplash/azure-cloud-infrastructure-modern.jpg",
    alt: "Modern cloud infrastructure and data center",
    description: "Cloud computing infrastructure visualization",
  },
  {
    src: "/images/unsplash/professional-training-presentation.jpg",
    alt: "Professional training and presentation session",
    description: "Corporate training and presentation environment",
  },
  {
    src: "/images/unsplash/developer-coding-workspace.jpg",
    alt: "Professional developer coding workspace",
    description: "Modern developer working environment",
  },
  {
    src: "/images/unsplash/corporate-meeting-technology.jpg",
    alt: "Corporate meeting with technology focus",
    description: "Professional corporate technology meeting",
  },
];

export const popularTrainingBadges: TrainingBadge[] = [
  { 
    code: "AZ-104", 
    slug: "azure-administrator",
    icon: FiCloud, 
    color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-50 border-blue-500 dark:border-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800" 
  },
  { 
    code: "AZ-900", 
    slug: "azure-fundamentals",
    icon: FiShield, 
    color: "bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-50 border-sky-500 dark:border-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800" 
  },
  { 
    code: "AZ-204", 
    slug: "azure-developer",
    icon: FiSettings, 
    color: "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-50 border-purple-500 dark:border-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800" 
  },
  { 
    code: "SC-900", 
    slug: "security-compliance-identity-fundamentals",
    icon: FiLock, 
    color: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-50 border-red-500 dark:border-red-400 hover:bg-red-200 dark:hover:bg-red-800" 
  },
  { 
    code: "AI-900", 
    slug: "ai-fundamentals",
    icon: FiCpu, 
    color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-50 border-cyan-500 dark:border-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800" 
  },
  { 
    code: "DP-900", 
    slug: "azure-data-fundamentals",
    icon: FiDatabase, 
    color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-50 border-indigo-500 dark:border-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800" 
  },
];
