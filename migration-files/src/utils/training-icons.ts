/**
 * Training course icon mapping using Lucide React icons
 * Maps training course slugs to appropriate Lucide React icon names
 */

export const TRAINING_ICONS = {
  // Azure Fundamentals
  'azure-fundamentals': 'CloudIcon',
  
  // Azure Administrator
  'azure-administrator': 'Settings',
  
  // Azure Developer
  'azure-developer': 'Code',
  
  // Azure Solutions Architect
  'azure-solutions-architect': 'Building',
  
  // Azure Security
  'azure-security-fundamentals': 'Shield',
  
  // Azure DevOps
  'azure-devops-engineer': 'GitBranch',
  
  // Azure Network Engineer
  'azure-network-engineer': 'Network',
  
  // Infrastructure as Code
  'infrastructure-as-code': 'Wrench',
  
  // Bicep
  'azure-bicep-fundamentals': 'HardHat',
  
  // GitHub Copilot
  'github-copilot-agents': 'Bot',
  
  // Microsoft 365
  'microsoft-365-copilot-mastery': 'Sparkles',
  
  // Power Platform
  'power-platform-automation': 'Zap',
  
  // Teams
  'teams-advanced-administration': 'Users',
  
  // Default fallback
  'default': 'BookOpen'
} as const;

export type TrainingIconName = keyof typeof TRAINING_ICONS;

/**
 * Get the appropriate icon name for a training course
 */
export function getTrainingIcon(slug: string): string {
  return TRAINING_ICONS[slug as TrainingIconName] || TRAINING_ICONS.default;
}

/**
 * Training category icon mapping
 */
export const CATEGORY_ICONS = {
  'Azure Cloud': 'Cloud',
  'Azure': 'Cloud',
  'Infrastructure': 'HardHat',
  'Development': 'Code',
  'Security': 'Shield',
  'DevOps': 'GitBranch',
  'Microsoft 365': 'Sparkles',
  'Power Platform': 'Zap',
  'Networking': 'Network',
  'default': 'BookOpen'
} as const;

export function getCategoryIcon(category: string): string {
  return CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] || CATEGORY_ICONS.default;
}

/**
 * Difficulty level icon mapping
 */
export const DIFFICULTY_ICONS = {
  'Beginner': 'Circle',
  'Intermediate': 'CircleDot',
  'Advanced': 'Target',
  'Expert': 'Star'
} as const;

export function getDifficultyIcon(difficulty: string): string {
  return DIFFICULTY_ICONS[difficulty as keyof typeof DIFFICULTY_ICONS] || DIFFICULTY_ICONS.Beginner;
}

/**
 * Certification icon mapping
 */
export const CERTIFICATION_ICONS = {
  'AZ-900': 'Award',
  'AZ-104': 'Settings',
  'AZ-204': 'Code',
  'AZ-305': 'Building',
  'AZ-400': 'GitBranch',
  'AZ-500': 'Shield',
  'AZ-700': 'Network',
  'MS-700': 'Users',
  'PL-300': 'BarChart',
  'PL-400': 'Zap',
  'default': 'Award'
} as const;

export function getCertificationIcon(certificationCode: string): string {
  return CERTIFICATION_ICONS[certificationCode as keyof typeof CERTIFICATION_ICONS] || CERTIFICATION_ICONS.default;
}
