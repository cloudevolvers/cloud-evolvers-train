import dynamic from 'next/dynamic';
import { type ComponentType } from 'react';

// Import metadata from Dutch training components
import { trainingMetadata as azureFundamentalsMetadata } from './AzureFundamentalsContent';
import { trainingMetadata as microsoft365FundamentalsMetadata } from './Microsoft365FundamentalsContent';
import { trainingMetadata as azureAdministratorMasteryMetadata } from './AzureAdministratorMasteryContent';
import { trainingMetadata as powerPlatformFundamentalsMetadata } from './PowerPlatformFundamentalsContent';
import { trainingMetadata as azureSecurityFundamentalsMetadata } from './AzureSecurityFundamentalsContent';
import { trainingMetadata as teamsAdvancedAdministrationMetadata } from './TeamsAdvancedAdministrationContent';

// Import metadata for all new Dutch training components
import { trainingMetadata as azureAIFundamentalsMetadata } from './AzureAIFundamentalsContent';
import { trainingMetadata as azureDevOpsEngineerMetadata } from './AzureDevOpsEngineerContent';
import { trainingMetadata as azureDeveloperMetadata } from './AzureDeveloperContent';
import { trainingMetadata as azureNetworkEngineerMetadata } from './AzureNetworkEngineerContent';
import { trainingMetadata as azureSolutionsArchitectMetadata } from './AzureSolutionsArchitectContent';
import { trainingMetadata as azureAIDeveloperBootcampMetadata } from './AzureAIDeveloperBootcampContent';
import { trainingMetadata as azureVirtualDesktopMetadata } from './AzureVirtualDesktopContent';
import { trainingMetadata as microsoft365CopilotMasteryMetadata } from './Microsoft365CopilotMasteryContent';
import { trainingMetadata as microsoft365SecurityAdministratorMetadata } from './Microsoft365SecurityAdministratorContent';
import { trainingMetadata as microsoft365IdentityAccessAdministratorMetadata } from './Microsoft365IdentityAccessAdministratorContent';
import { trainingMetadata as powerPlatformAutomationMetadata } from './PowerPlatformAutomationContent';
import { trainingMetadata as securityComplianceIdentityFundamentalsMetadata } from './SecurityComplianceIdentityFundamentalsContent';
import { trainingMetadata as azureIoTDeveloperMetadata } from './AzureIoTDeveloperContent';
import { trainingMetadata as windowsServerHybridAdministratorMetadata } from './WindowsServerHybridAdministratorContent';
import { trainingMetadata as windowsServerHybridInfrastructureMetadata } from './WindowsServerHybridInfrastructureContent';
import { trainingMetadata as azureStackHubMetadata } from './AzureStackHubContent';
import { trainingMetadata as azureSupportEngineerMetadata } from './AzureSupportEngineerContent';

// Dynamic imports for Dutch training components
const AzureFundamentalsContent = dynamic(() => import('./AzureFundamentalsContent'));
const Microsoft365FundamentalsContent = dynamic(() => import('./Microsoft365FundamentalsContent'));
const AzureAdministratorMasteryContent = dynamic(() => import('./AzureAdministratorMasteryContent'));
const PowerPlatformFundamentalsContent = dynamic(() => import('./PowerPlatformFundamentalsContent'));
const AzureSecurityFundamentalsContent = dynamic(() => import('./AzureSecurityFundamentalsContent'));
const TeamsAdvancedAdministrationContent = dynamic(() => import('./TeamsAdvancedAdministrationContent'));

// Dynamic imports for all new Dutch training components
const AzureAIFundamentalsContent = dynamic(() => import('./AzureAIFundamentalsContent'));
const AzureDevOpsEngineerContent = dynamic(() => import('./AzureDevOpsEngineerContent'));
const AzureDeveloperContent = dynamic(() => import('./AzureDeveloperContent'));
const AzureNetworkEngineerContent = dynamic(() => import('./AzureNetworkEngineerContent'));
const AzureSolutionsArchitectContent = dynamic(() => import('./AzureSolutionsArchitectContent'));
const AzureAIDeveloperBootcampContent = dynamic(() => import('./AzureAIDeveloperBootcampContent'));
const AzureVirtualDesktopContent = dynamic(() => import('./AzureVirtualDesktopContent'));
const Microsoft365CopilotMasteryContent = dynamic(() => import('./Microsoft365CopilotMasteryContent'));
const Microsoft365SecurityAdministratorContent = dynamic(() => import('./Microsoft365SecurityAdministratorContent'));
const Microsoft365IdentityAccessAdministratorContent = dynamic(() => import('./Microsoft365IdentityAccessAdministratorContent'));
const PowerPlatformAutomationContent = dynamic(() => import('./PowerPlatformAutomationContent'));
const SecurityComplianceIdentityFundamentalsContent = dynamic(() => import('./SecurityComplianceIdentityFundamentalsContent'));
const AzureIoTDeveloperContent = dynamic(() => import('./AzureIoTDeveloperContent'));
const WindowsServerHybridAdministratorContent = dynamic(() => import('./WindowsServerHybridAdministratorContent'));
const WindowsServerHybridInfrastructureContent = dynamic(() => import('./WindowsServerHybridInfrastructureContent'));
const AzureStackHubContent = dynamic(() => import('./AzureStackHubContent'));
const AzureSupportEngineerContent = dynamic(() => import('./AzureSupportEngineerContent'));

// Type for training metadata (same as English version)
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

// Map of available Dutch training components
export const trainingContentMap: Record<string, ComponentType<any>> = {
  'azure-fundamentals': AzureFundamentalsContent,
  'microsoft-365-fundamentals': Microsoft365FundamentalsContent,
  'azure-administrator-mastery': AzureAdministratorMasteryContent,
  'power-platform-fundamentals': PowerPlatformFundamentalsContent,
  'azure-security-fundamentals': AzureSecurityFundamentalsContent,
  'teams-advanced-administration': TeamsAdvancedAdministrationContent,
  // All new Dutch training components
  'azure-ai-fundamentals': AzureAIFundamentalsContent,
  'azure-devops-engineer': AzureDevOpsEngineerContent,
  'azure-developer': AzureDeveloperContent,
  'azure-network-engineer': AzureNetworkEngineerContent,
  'azure-solutions-architect': AzureSolutionsArchitectContent,
  'azure-ai-developer-bootcamp': AzureAIDeveloperBootcampContent,
  'azure-virtual-desktop': AzureVirtualDesktopContent,
  'microsoft-365-copilot-mastery': Microsoft365CopilotMasteryContent,
  'microsoft-365-security-administrator': Microsoft365SecurityAdministratorContent,
  'microsoft-365-identity-access-administrator': Microsoft365IdentityAccessAdministratorContent,
  'power-platform-automation': PowerPlatformAutomationContent,
  'security-compliance-identity-fundamentals': SecurityComplianceIdentityFundamentalsContent,
  'azure-iot-developer': AzureIoTDeveloperContent,
  'windows-server-hybrid-administrator': WindowsServerHybridAdministratorContent,
  'windows-server-hybrid-infrastructure': WindowsServerHybridInfrastructureContent,
  'azure-stack-hub': AzureStackHubContent,
  'azure-support-engineer': AzureSupportEngineerContent,
};

// Function to get a specific Dutch training component
export function getTrainingContent(slug: string): ComponentType<any> | null {
  return trainingContentMap[slug] || null;
}

// Function to get all Dutch trainings with their metadata
export function getAllTrainings(): TrainingMetadata[] {
  const trainingMetadataModules = [
    // Original Dutch trainings
    azureFundamentalsMetadata,
    microsoft365FundamentalsMetadata,
    azureAdministratorMasteryMetadata,
    powerPlatformFundamentalsMetadata,
    azureSecurityFundamentalsMetadata,
    teamsAdvancedAdministrationMetadata,
    // All new Dutch trainings
    azureAIFundamentalsMetadata,
    azureDevOpsEngineerMetadata,
    azureDeveloperMetadata,
    azureNetworkEngineerMetadata,
    azureSolutionsArchitectMetadata,
    azureAIDeveloperBootcampMetadata,
    azureVirtualDesktopMetadata,
    microsoft365CopilotMasteryMetadata,
    microsoft365SecurityAdministratorMetadata,
    microsoft365IdentityAccessAdministratorMetadata,
    powerPlatformAutomationMetadata,
    securityComplianceIdentityFundamentalsMetadata,
    azureIoTDeveloperMetadata,
    windowsServerHybridAdministratorMetadata,
    windowsServerHybridInfrastructureMetadata,
    azureStackHubMetadata,
    azureSupportEngineerMetadata,
  ];

  const trainings: TrainingMetadata[] = trainingMetadataModules
    .filter((metadata) => !!metadata);

  return trainings;
}

// Function to get Dutch training by slug
export function getTrainingBySlug(slug: string): TrainingMetadata | null {
  const allTrainings = getAllTrainings();
  return allTrainings.find(training => training.slug === slug) || null;
}