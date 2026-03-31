// Per-course header images mapped by slug
// Photos from Pexels (free for commercial use, no attribution required)
const IMG = '/training-categories';

export const courseImages: Record<string, string> = {
  // Azure admin & infrastructure
  'azure-administrator':          `${IMG}/azure-administrator.jpg`,
  'azure-administrator-mastery':  `${IMG}/azure-administrator-mastery.jpg`,
  'azure-stack-hub':              `${IMG}/azure-stack-hub.jpg`,
  'azure-virtual-desktop':        `${IMG}/azure-virtual-desktop.jpg`,
  'azure-network-engineer':       `${IMG}/azure-network-engineer.jpg`,

  // Azure developer & DevOps
  'azure-developer':              `${IMG}/azure-developer.jpg`,
  'azure-devops-engineer':        `${IMG}/azure-devops-engineer.jpg`,

  // Azure architecture & fundamentals
  'azure-solutions-architect':    `${IMG}/azure-solutions-architect.jpg`,
  'azure-fundamentals':           `${IMG}/azure-fundamentals.jpg`,
  'azure-support-engineer':       `${IMG}/azure-support-engineer.jpg`,

  // Azure security
  'azure-security-engineer':      `${IMG}/azure-security-engineer.jpg`,
  'azure-security-fundamentals':  `${IMG}/azure-security-fundamentals.jpg`,

  // AI & Machine Learning
  'azure-ai-fundamentals':        `${IMG}/azure-ai-fundamentals.jpg`,
  'azure-ai-engineer':            `${IMG}/azure-ai-engineer.jpg`,
  'azure-ai-developer':           `${IMG}/azure-ai-developer.jpg`,
  'azure-ai-developer-bootcamp':  `${IMG}/azure-ai-developer-bootcamp.jpg`,
  'azure-iot-developer':          `${IMG}/azure-iot-developer.jpg`,

  // Microsoft 365
  'microsoft-365-administrator':  `${IMG}/microsoft-365-administrator.jpg`,
  'microsoft-365-fundamentals':   `${IMG}/microsoft-365-fundamentals.jpg`,
  'microsoft-365-copilot-mastery':`${IMG}/microsoft-365-copilot-mastery.jpg`,
  'copilot-agent-administration-fundamentals': `${IMG}/copilot-agent-administration-fundamentals.jpg`,
  'ai-business-professional':     `${IMG}/copilot-agent-administration-fundamentals.jpg`,
  'ai-transformation-leader':     `${IMG}/copilot-agent-administration-fundamentals.jpg`,
  'agentic-ai-solutions-architect': `${IMG}/azure-ai-engineer.jpg`,
  'azure-ai-app-agent-developer':   `${IMG}/azure-ai-engineer.jpg`,
  'azure-ai-cloud-developer':       `${IMG}/azure-ai-fundamentals.jpg`,
  'mlops-engineer':                  `${IMG}/azure-ai-developer-bootcamp.jpg`,
  'cloud-ai-security-engineer':     `${IMG}/azure-security-engineer.jpg`,
  'windows-server-hybrid-administrator-consolidated': `${IMG}/windows-server-hybrid-administrator.jpg`,
  'microsoft-365-identity-access-administrator': `${IMG}/microsoft-365-identity-access-administrator.jpg`,
  'microsoft-365-security-administrator': `${IMG}/microsoft-365-security-administrator.jpg`,
  'teams-advanced-administration': `${IMG}/teams-advanced-administration.jpg`,

  // Security & Compliance
  'cybersecurity-architect':      `${IMG}/cybersecurity-architect.jpg`,
  'security-operations-analyst':  `${IMG}/security-operations-analyst.jpg`,
  'security-compliance-identity-fundamentals': `${IMG}/security-compliance-identity-fundamentals.jpg`,

  // Power Platform
  'power-platform-fundamentals':  `${IMG}/power-platform-fundamentals.jpg`,
  'power-platform-automation':    `${IMG}/power-platform-automation.jpg`,

  // Windows Server
  'windows-server-hybrid-administrator':    `${IMG}/windows-server-hybrid-administrator.jpg`,
  'windows-server-hybrid-infrastructure':   `${IMG}/windows-server-hybrid-infrastructure.jpg`,
};

// Fallback for any unmapped course
export const defaultCourseImage = `${IMG}/azure.jpg`;

// Enhanced level color mapping
export const levelColors: Record<string, string> = {
  'Beginner': 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700 font-medium',
  'Intermediate': 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800/50 dark:text-neutral-200 border-neutral-300 dark:border-neutral-600 font-medium',
  'Advanced': 'bg-orange-100 text-orange-900 dark:bg-orange-900/50 dark:text-orange-200 border-orange-300 dark:border-orange-700 font-medium',
  'Expert': 'bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-200 border-red-300 dark:border-red-700 font-medium',
};
