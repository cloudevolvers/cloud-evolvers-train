import dynamic from 'next/dynamic';
import { type ComponentType } from 'react';

// Import metadata from all training components that export it
import { trainingMetadata as azureAdministratorMasteryMetadata } from './AzureAdministratorMasteryContent';
import { trainingMetadata as azureDevOpsMetadata } from './AzureDevOpsEngineerContent';
import { trainingMetadata as azureFundamentalsMetadata } from './AzureFundamentalsContent';
import { trainingMetadata as azureDeveloperMetadata } from './AzureDeveloperContent';
import { trainingMetadata as azureSecurityFundamentalsMetadata } from './AzureSecurityFundamentalsContent';
import { trainingMetadata as azureSolutionsArchitectMetadata } from './AzureSolutionsArchitectContent';
import { trainingMetadata as azureAIDeveloperBootcampMetadata } from './AzureAIDeveloperBootcampContent';
import { trainingMetadata as azureNetworkEngineerMetadata } from './AzureNetworkEngineerContent';
import { trainingMetadata as microsoft365CopilotMasteryMetadata } from './Microsoft365CopilotMasteryContent';
import { trainingMetadata as powerPlatformAutomationMetadata } from './PowerPlatformAutomationContent';
import { trainingMetadata as teamsAdvancedAdministrationMetadata } from './TeamsAdvancedAdministrationContent';

// Import metadata from new training components
import { trainingMetadata as azureAIFundamentalsMetadata } from './AzureAIFundamentalsContent';
import { trainingMetadata as microsoft365FundamentalsMetadata } from './Microsoft365FundamentalsContent';
import { trainingMetadata as securityComplianceIdentityFundamentalsMetadata } from './SecurityComplianceIdentityFundamentalsContent';
import { trainingMetadata as powerPlatformFundamentalsMetadata } from './PowerPlatformFundamentalsContent';
import { trainingMetadata as microsoft365SecurityAdministratorMetadata } from './Microsoft365SecurityAdministratorContent';
import { trainingMetadata as microsoft365IdentityAccessAdministratorMetadata } from './Microsoft365IdentityAccessAdministratorContent';
import { trainingMetadata as azureIoTDeveloperMetadata } from './AzureIoTDeveloperContent';
import { trainingMetadata as azureVirtualDesktopMetadata } from './AzureVirtualDesktopContent';
import { trainingMetadata as azureStackHubMetadata } from './AzureStackHubContent';
import { trainingMetadata as azureSupportEngineerMetadata } from './AzureSupportEngineerContent';
import { trainingMetadata as windowsServerHybridAdministratorMetadata } from './WindowsServerHybridAdministratorContent';
import { trainingMetadata as windowsServerHybridInfrastructureMetadata } from './WindowsServerHybridInfrastructureContent';

// Dynamic imports for all training components
const AzureAdministratorMasteryContent = dynamic(() => import('./AzureAdministratorMasteryContent'));
const AzureDevOpsEngineerContent = dynamic(() => import('./AzureDevOpsEngineerContent'));
const AzureFundamentalsContent = dynamic(() => import('./AzureFundamentalsContent'));
const AzureDeveloperContent = dynamic(() => import('./AzureDeveloperContent'));
const AzureSecurityFundamentalsContent = dynamic(() => import('./AzureSecurityFundamentalsContent'));
const AzureSolutionsArchitectContent = dynamic(() => import('./AzureSolutionsArchitectContent'));
const AzureAIDeveloperBootcampContent = dynamic(() => import('./AzureAIDeveloperBootcampContent'));
const AzureNetworkEngineerContent = dynamic(() => import('./AzureNetworkEngineerContent'));
const Microsoft365CopilotMasteryContent = dynamic(() => import('./Microsoft365CopilotMasteryContent'));
const PowerPlatformAutomationContent = dynamic(() => import('./PowerPlatformAutomationContent'));
const TeamsAdvancedAdministrationContent = dynamic(() => import('./TeamsAdvancedAdministrationContent'));

// Dynamic imports for new training components
const AzureAIFundamentalsContent = dynamic(() => import('./AzureAIFundamentalsContent'));
const Microsoft365FundamentalsContent = dynamic(() => import('./Microsoft365FundamentalsContent'));
const SecurityComplianceIdentityFundamentalsContent = dynamic(() => import('./SecurityComplianceIdentityFundamentalsContent'));
const PowerPlatformFundamentalsContent = dynamic(() => import('./PowerPlatformFundamentalsContent'));
const Microsoft365SecurityAdministratorContent = dynamic(() => import('./Microsoft365SecurityAdministratorContent'));
const Microsoft365IdentityAccessAdministratorContent = dynamic(() => import('./Microsoft365IdentityAccessAdministratorContent'));
const AzureIoTDeveloperContent = dynamic(() => import('./AzureIoTDeveloperContent'));
const AzureVirtualDesktopContent = dynamic(() => import('./AzureVirtualDesktopContent'));
const AzureStackHubContent = dynamic(() => import('./AzureStackHubContent'));
const AzureSupportEngineerContent = dynamic(() => import('./AzureSupportEngineerContent'));
const WindowsServerHybridAdministratorContent = dynamic(() => import('./WindowsServerHybridAdministratorContent'));
const WindowsServerHybridInfrastructureContent = dynamic(() => import('./WindowsServerHybridInfrastructureContent'));

// Type for training metadata
export interface TrainingMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  subcategory?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: { days: number; format: string };
  prerequisites: string[];
  learningObjectives: string[];
  instructor: { id: string; name: string; title: string };
  price: { amount: number; currency: string };
  schedule: { available: boolean; nextSession?: string };
  tags: string[];
  featured: boolean;
  certification: { available: boolean; name?: string };
  maxParticipants?: number;
}

// Map of available training components
export const trainingContentMap: Record<string, ComponentType<any>> = {
  'azure-administrator-mastery': AzureAdministratorMasteryContent,
  'azure-devops-engineer': AzureDevOpsEngineerContent,
  'azure-fundamentals': AzureFundamentalsContent,
  'azure-developer': AzureDeveloperContent,
  'azure-security-fundamentals': AzureSecurityFundamentalsContent,
  'azure-solutions-architect': AzureSolutionsArchitectContent,
  'azure-ai-developer-bootcamp': AzureAIDeveloperBootcampContent,
  'azure-network-engineer': AzureNetworkEngineerContent,
  'microsoft-365-copilot-mastery': Microsoft365CopilotMasteryContent,
  'power-platform-automation': PowerPlatformAutomationContent,
  'teams-advanced-administration': TeamsAdvancedAdministrationContent,
  // New training components
  'azure-ai-fundamentals': AzureAIFundamentalsContent,
  'microsoft-365-fundamentals': Microsoft365FundamentalsContent,
  'security-compliance-identity-fundamentals': SecurityComplianceIdentityFundamentalsContent,
  'power-platform-fundamentals': PowerPlatformFundamentalsContent,
  'microsoft-365-security-administrator': Microsoft365SecurityAdministratorContent,
  'microsoft-365-identity-access-administrator': Microsoft365IdentityAccessAdministratorContent,
  'azure-iot-developer': AzureIoTDeveloperContent,
  'azure-virtual-desktop': AzureVirtualDesktopContent,
  'azure-stack-hub': AzureStackHubContent,
  'azure-support-engineer': AzureSupportEngineerContent,
  'windows-server-hybrid-administrator': WindowsServerHybridAdministratorContent,
  'windows-server-hybrid-infrastructure': WindowsServerHybridInfrastructureContent,
};

// Function to get a specific training component
export function getTrainingContent(slug: string): ComponentType<any> | null {
  return trainingContentMap[slug] || null;
}

// Function to get all trainings with their metadata
export function getAllTrainings(): TrainingMetadata[] {
  // Collect all training metadata from components that export it
  // This array should be updated when adding new training components
  // Consider implementing automatic discovery of training components with metadata exports
  // to reduce manual maintenance as more training components are added
  const trainingMetadataModules = [
    // Existing trainings
    azureAdministratorMasteryMetadata,
    azureDevOpsMetadata,
    azureFundamentalsMetadata,
    azureDeveloperMetadata,
    azureSolutionsArchitectMetadata,
    azureSecurityFundamentalsMetadata,
    azureAIDeveloperBootcampMetadata,
    azureNetworkEngineerMetadata,
    microsoft365CopilotMasteryMetadata,
    powerPlatformAutomationMetadata,
    teamsAdvancedAdministrationMetadata,
    // New trainings
    azureAIFundamentalsMetadata,
    microsoft365FundamentalsMetadata,
    securityComplianceIdentityFundamentalsMetadata,
    powerPlatformFundamentalsMetadata,
    microsoft365SecurityAdministratorMetadata,
    microsoft365IdentityAccessAdministratorMetadata,
    azureIoTDeveloperMetadata,
    azureVirtualDesktopMetadata,
    azureStackHubMetadata,
    azureSupportEngineerMetadata,
    windowsServerHybridAdministratorMetadata,
    windowsServerHybridInfrastructureMetadata,
  ];

  const trainings: TrainingMetadata[] = trainingMetadataModules
    .filter((metadata) => !!metadata);

  return trainings;
}
