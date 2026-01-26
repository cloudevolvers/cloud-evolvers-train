import { TrainingJSON } from './types';

// Import all training JSON files
import azureAdministratorData from './azure-administrator.json';
import azureAIDeveloperData from './azure-ai-developer.json';
import azureAIFundamentalsData from './azure-ai-fundamentals.json';
import azureDeveloperData from './azure-developer.json';
import azureAIDeveloperBootcampData from './azure-ai-developer-bootcamp.json';
import azureDevOpsEngineerData from './azure-devops-engineer.json';
import azureFundamentalsData from './azure-fundamentals.json';
import azureIoTDeveloperData from './azure-iot-developer.json';
import azureNetworkEngineerData from './azure-network-engineer.json';
import azureVirtualDesktopData from './azure-virtual-desktop.json';
import microsoft365FundamentalsData from './microsoft-365-fundamentals.json';
import powerPlatformAutomation from './power-platform-automation.json';
import securityComplianceIdentityFundamentals from './security-compliance-identity-fundamentals.json';
import teamsAdvancedAdministration from './teams-advanced-administration.json';
import azureAdministratorMastery from './azure-administrator-mastery.json';
import microsoft365CopilotMastery from './microsoft-365-copilot-mastery.json';
import azureSecurityFundamentals from './azure-security-fundamentals.json';
import azureStackHub from './azure-stack-hub.json';
import azureSupportEngineer from './azure-support-engineer.json';
import microsoft365IdentityAccessAdministrator from './microsoft-365-identity-access-administrator.json';
import microsoft365SecurityAdministrator from './microsoft-365-security-administrator.json';
import powerPlatformFundamentalsData from './power-platform-fundamentals.json';
import azureSolutionsArchitectData from './azure-solutions-architect.json';
import azureSecurityEngineerData from './azure-security-engineer.json';
import windowsServerHybridInfrastructureData from './windows-server-hybrid-infrastructure.json';
import windowsServerHybridAdministrator from './windows-server-hybrid-administrator.json';

// Training data registry
const trainingRegistry: Record<string, TrainingJSON> = {
  'azure-administrator': azureAdministratorData as TrainingJSON,
  'azure-ai-developer': azureAIDeveloperData as TrainingJSON,
  'azure-ai-developer-bootcamp': azureAIDeveloperBootcampData as TrainingJSON,
  'azure-ai-fundamentals': azureAIFundamentalsData as TrainingJSON,
  'azure-developer': azureDeveloperData as TrainingJSON,
  'azure-devops-engineer': azureDevOpsEngineerData as TrainingJSON,
  'azure-fundamentals': azureFundamentalsData as TrainingJSON,
  'azure-iot-developer': azureIoTDeveloperData as TrainingJSON,
  'azure-network-engineer': azureNetworkEngineerData as TrainingJSON,
  'azure-security-engineer': azureSecurityEngineerData as TrainingJSON,
  'azure-solutions-architect': azureSolutionsArchitectData as TrainingJSON,
  'azure-virtual-desktop': azureVirtualDesktopData as TrainingJSON,
  'microsoft-365-fundamentals': microsoft365FundamentalsData as TrainingJSON,
  'power-platform-automation': powerPlatformAutomation as TrainingJSON,
  'security-compliance-identity-fundamentals': securityComplianceIdentityFundamentals as TrainingJSON,
  'teams-advanced-administration': teamsAdvancedAdministration as TrainingJSON,
  'azure-administrator-mastery': azureAdministratorMastery as TrainingJSON,
  'microsoft-365-copilot-mastery': microsoft365CopilotMastery as TrainingJSON,
  'azure-security-fundamentals': azureSecurityFundamentals as TrainingJSON,
  'azure-stack-hub': azureStackHub as TrainingJSON,
  'azure-support-engineer': azureSupportEngineer as TrainingJSON,
  'microsoft-365-identity-access-administrator': microsoft365IdentityAccessAdministrator as TrainingJSON,
  'microsoft-365-security-administrator': microsoft365SecurityAdministrator as TrainingJSON,
  'power-platform-fundamentals': powerPlatformFundamentalsData as TrainingJSON,
  'windows-server-hybrid-infrastructure': windowsServerHybridInfrastructureData as TrainingJSON,
  'windows-server-hybrid-administrator': windowsServerHybridAdministrator as TrainingJSON,
};

// Function to get training by slug
export function getTrainingBySlug(slug: string): TrainingJSON | null {
  return trainingRegistry[slug] || null;
}

// Function to get all trainings
export function getAllTrainings(): TrainingJSON[] {
  return Object.values(trainingRegistry);
}

// Function to get trainings by category
export function getTrainingsByCategory(category: string): TrainingJSON[] {
  return getAllTrainings().filter(training => training.category === category);
}

// Function to get featured trainings
export function getFeaturedTrainings(): TrainingJSON[] {
  return getAllTrainings().filter(training => training.featured);
}

// Function to search trainings
export function searchTrainings(query: string): TrainingJSON[] {
  const lowerQuery = query.toLowerCase();
  return getAllTrainings().filter(training => 
    training.title.toLowerCase().includes(lowerQuery) ||
    training.description.toLowerCase().includes(lowerQuery) ||
    training.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Legacy compatibility functions for the existing system
export function getTrainingContent(slug: string) {
  // This will return null for JSON-based trainings, 
  // indicating they should use the TrainingContentRenderer
  return null;
}

export function getTrainingMetadata(slug: string) {
  const training = getTrainingBySlug(slug);
  if (!training) return null;
  
  // Convert JSON training to legacy format for compatibility
  return {
    id: training.id,
    slug: training.slug,
    title: training.title,
    description: training.description,
    category: training.category,
    subcategory: training.subcategory,
    difficulty: training.difficulty,
    duration: training.duration,
    prerequisites: training.prerequisites,
    learningObjectives: training.learningObjectives.map(obj => obj.description),
    instructor: training.instructor,
    price: training.price,
    schedule: training.schedule,
    tags: training.tags,
    featured: training.featured,
    certification: training.certification,
    maxParticipants: training.maxParticipants,
    icon: training.icon
  };
}
