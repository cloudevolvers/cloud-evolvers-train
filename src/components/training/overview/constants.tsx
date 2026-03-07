// Per-course header images mapped by slug
// Photos from Unsplash (free for commercial use, no attribution required)
const IMG = '/training-categories';

export const courseImages: Record<string, string> = {
  // Azure admin & infrastructure
  'azure-administrator':          `${IMG}/cloud-infra.jpg`,
  'azure-administrator-mastery':  `${IMG}/networking.jpg`,
  'azure-stack-hub':              `${IMG}/windows-server.jpg`,
  'azure-virtual-desktop':        `${IMG}/remote-work.jpg`,
  'azure-network-engineer':       `${IMG}/networking.jpg`,

  // Azure developer & DevOps
  'azure-developer':              `${IMG}/development.jpg`,
  'azure-devops-engineer':        `${IMG}/devops.jpg`,

  // Azure architecture & fundamentals
  'azure-solutions-architect':    `${IMG}/architecture.jpg`,
  'azure-fundamentals':           `${IMG}/learning.jpg`,
  'azure-support-engineer':       `${IMG}/support.jpg`,

  // Azure security
  'azure-security-engineer':      `${IMG}/identity.jpg`,
  'azure-security-fundamentals':  `${IMG}/security.jpg`,

  // AI & Machine Learning
  'azure-ai-fundamentals':        `${IMG}/ai-ml.jpg`,
  'azure-ai-engineer':            `${IMG}/automation.jpg`,
  'azure-ai-developer-bootcamp':  `${IMG}/ai-ml.jpg`,
  'azure-iot-developer':          `${IMG}/iot.jpg`,

  // Microsoft 365
  'microsoft-365-administrator':  `${IMG}/cloud-infra.jpg`,
  'microsoft-365-fundamentals':   `${IMG}/learning.jpg`,
  'microsoft-365-copilot-mastery':`${IMG}/ai-ml.jpg`,
  'copilot-agent-administration-fundamentals': `${IMG}/automation.jpg`,
  'microsoft-365-identity-access-administrator': `${IMG}/identity.jpg`,
  'microsoft-365-security-administrator': `${IMG}/security.jpg`,
  'teams-advanced-administration': `${IMG}/collaboration.jpg`,

  // Security & Compliance
  'cybersecurity-architect':      `${IMG}/architecture.jpg`,
  'security-operations-analyst':  `${IMG}/security.jpg`,
  'security-compliance-identity-fundamentals': `${IMG}/identity.jpg`,

  // Power Platform
  'power-platform-fundamentals':  `${IMG}/power-platform.jpg`,
  'power-platform-automation':    `${IMG}/automation.jpg`,

  // Windows Server
  'windows-server-hybrid-administrator':    `${IMG}/windows-server.jpg`,
  'windows-server-hybrid-infrastructure':   `${IMG}/cloud-infra.jpg`,
};

// Fallback for any unmapped course
export const defaultCourseImage = `${IMG}/azure.jpg`;

// Enhanced level color mapping
export const levelColors: Record<string, string> = {
  'Beginner': 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700 font-medium',
  'Intermediate': 'bg-blue-100 text-blue-900 dark:bg-blue-900/50 dark:text-blue-200 border-blue-300 dark:border-blue-700 font-medium',
  'Advanced': 'bg-orange-100 text-orange-900 dark:bg-orange-900/50 dark:text-orange-200 border-orange-300 dark:border-orange-700 font-medium',
  'Expert': 'bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-200 border-red-300 dark:border-red-700 font-medium',
};
