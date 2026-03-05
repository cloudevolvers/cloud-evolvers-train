/**
 * Fallback pricing data used when D1 database is unavailable.
 * Source of truth is the D1 database (cloud-evolvers-pricing).
 */

const p = (code: string, name: string, slug: string, days: number, individual: number, corporate: number, includes: string[], category: string) => ({
  code, name, slug, duration: { days, hours: days * 8 },
  pricing: { individual: { amount: individual, currency: 'EUR' }, corporate: { amount: corporate, currency: 'EUR', minParticipants: 5 }, custom: true },
  includes, category,
});

const mct = ['Official Microsoft courseware', 'Hands-on labs', 'MCT-led instruction'];
const mctPlus = [...mct.slice(0, 2), 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'];

export const fallbackTrainingPricing: Record<string, any> = {
  // Fundamentals (€550)
  'az-900': p('AZ-900', 'Microsoft Azure Fundamentals', 'azure-fundamentals', 2, 550, 450, [...mct, 'Practice exam voucher', 'Certification exam voucher (optional)'], 'fundamentals'),
  'ai-900': p('AI-900', 'Azure AI Fundamentals', 'azure-ai-fundamentals', 2, 550, 450, [...mct, 'Practice exam voucher'], 'fundamentals'),
  'az-security-fundamentals': p('', 'Azure Security Fundamentals', 'azure-security-fundamentals', 2, 550, 450, mct, 'fundamentals'),
  'ms-900': p('MS-900', 'Microsoft 365 Fundamentals', 'microsoft-365-fundamentals', 1, 550, 450, mct, 'fundamentals'),
  'pl-900': p('PL-900', 'Microsoft Power Platform Fundamentals', 'power-platform-fundamentals', 1, 550, 450, mct, 'fundamentals'),
  'sc-900': p('SC-900', 'Security, Compliance & Identity Fundamentals', 'security-compliance-identity-fundamentals', 2, 550, 450, mct, 'fundamentals'),
  'copilot-fundamentals': p('', 'Microsoft 365 Copilot & Agent Administration Fundamentals', 'copilot-agent-administration-fundamentals', 1, 550, 450, mct, 'fundamentals'),

  // Azure Associate/Specialty
  'az-104': p('AZ-104', 'Microsoft Azure Administrator', 'azure-administrator', 4, 1795, 1495, mctPlus, 'azure'),
  'az-104-mastery': p('AZ-104', 'Azure Administrator Mastery', 'azure-administrator-mastery', 4, 1495, 1295, mctPlus, 'azure'),
  'az-204': p('AZ-204', 'Developing Solutions for Microsoft Azure', 'azure-developer', 4, 2195, 1895, mctPlus, 'azure'),
  'az-305': p('AZ-305', 'Designing Microsoft Azure Infrastructure Solutions', 'azure-solutions-architect', 4, 1795, 1495, mctPlus, 'azure'),
  'az-400': p('AZ-400', 'Designing and Implementing Microsoft DevOps Solutions', 'azure-devops-engineer', 4, 1795, 1495, mctPlus, 'azure'),
  'az-500': p('AZ-500', 'Microsoft Azure Security Technologies', 'azure-security-engineer', 4, 1795, 1495, mctPlus, 'security'),
  'ai-102': p('AI-102', 'Designing and Implementing a Microsoft Azure AI Solution', 'azure-ai-engineer', 4, 1950, 1650, mctPlus, 'ai'),
  'az-700': p('AZ-700', 'Azure Network Engineer Associate', 'azure-network-engineer', 3, 1295, 1095, mctPlus, 'azure'),
  'az-140': p('AZ-140', 'Azure Virtual Desktop Specialty', 'azure-virtual-desktop', 3, 1595, 1395, mctPlus, 'azure'),
  'az-220': p('AZ-220', 'Azure IoT Developer Specialty', 'azure-iot-developer', 4, 1895, 1595, mctPlus, 'azure'),
  'az-stack-hub': p('', 'Azure Stack Hub Administration', 'azure-stack-hub', 3, 1295, 1095, mctPlus, 'azure'),
  'az-support': p('', 'Azure Support Engineer Excellence', 'azure-support-engineer', 2, 895, 750, mct, 'azure'),
  'ai-bootcamp': p('', 'Azure AI Developer Bootcamp', 'azure-ai-developer-bootcamp', 3, 1395, 1195, mct, 'ai'),

  // Expert
  'sc-100': p('SC-100', 'Microsoft Cybersecurity Architect', 'cybersecurity-architect', 4, 2195, 1895, mctPlus, 'security'),

  // Microsoft 365
  'ms-102': p('MS-102', 'Microsoft 365 Administrator', 'microsoft-365-administrator', 4, 1795, 1495, mctPlus, 'microsoft-365'),
  'ms-identity': p('', 'Microsoft 365 Identity & Access Administrator', 'microsoft-365-identity-access-administrator', 3, 1195, 995, mctPlus, 'microsoft-365'),
  'ms-security': p('', 'Microsoft 365 Security Administrator', 'microsoft-365-security-administrator', 3, 1195, 995, mctPlus, 'microsoft-365'),
  'copilot-mastery': p('', 'Microsoft 365 Copilot Mastery', 'microsoft-365-copilot-mastery', 1, 595, 495, mct, 'microsoft-365'),
  'teams-admin': p('', 'Teams Advanced Administration', 'teams-advanced-administration', 2, 895, 750, mct, 'microsoft-365'),

  // Security & Power Platform
  'sc-200': p('SC-200', 'Microsoft Security Operations Analyst', 'security-operations-analyst', 4, 1895, 1595, mctPlus, 'security'),
  'pl-automation': p('', 'Power Platform Automation Bootcamp', 'power-platform-automation', 2, 895, 750, mct, 'power-platform'),

  // Windows Server
  'ws-hybrid-admin': p('', 'Windows Server Hybrid Administrator', 'windows-server-hybrid-administrator', 3, 1095, 895, mctPlus, 'windows-server'),
  'ws-hybrid-infra': p('', 'Windows Server Hybrid Infrastructure', 'windows-server-hybrid-infrastructure', 4, 1595, 1395, mctPlus, 'windows-server'),
};

export const fallbackServicePricing: Record<string, any> = {
  'consulting-hourly': { name: 'Cloud Consulting (Hourly)', pricing: { amount: 175, currency: 'EUR', unit: 'hour' }, description: 'Expert Azure consulting and architecture guidance', minHours: 4 },
  'consulting-day': { name: 'Cloud Consulting (Day Rate)', pricing: { amount: 1295, currency: 'EUR', unit: 'day' }, description: 'Full day on-site or remote consulting', savings: '7% discount vs hourly' },
  'health-check': { name: 'Azure Health Check', pricing: { amount: 2495, currency: 'EUR', unit: 'package' }, description: 'Comprehensive Azure environment assessment', includes: ['Security posture review', 'Cost optimization analysis', 'Architecture assessment', 'Best practices recommendations', 'Executive summary report'] },
  'managed-services-starter': { name: 'Managed Services - Starter', pricing: { amount: 995, currency: 'EUR', unit: 'month' }, description: 'Basic Azure management and monitoring', includes: ['24/7 monitoring', 'Monthly cost reports', 'Security updates', 'Email support (business hours)'] },
  'managed-services-professional': { name: 'Managed Services - Professional', pricing: { amount: 2495, currency: 'EUR', unit: 'month' }, description: 'Full Azure management with priority support', includes: ['Everything in Starter', 'Priority phone support', 'Quarterly architecture reviews', 'Performance optimization', 'Disaster recovery planning'] },
};
