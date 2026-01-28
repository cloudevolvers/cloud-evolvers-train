import React, { ComponentType } from 'react';

// Import metadata from all training components  
import { trainingMetadata as azureFundamentalsMetadata } from './AzureFundamentalsContent';
import { trainingMetadata as azureAdministratorMetadata } from './AzureAdministratorContent';
import { trainingMetadata as azureDeveloperMetadata } from './AzureDeveloperContent';
import { trainingMetadata as azureSolutionsArchitectMetadata } from './AzureSolutionsArchitectContent';
import { trainingMetadata as azureSecurityEngineerMetadata } from './AzureSecurityEngineerContent';
import { trainingMetadata as microsoft365FundamentalsMetadata } from './Microsoft365FundamentalsContent';
import { trainingMetadata as powerPlatformFundamentalsMetadata } from './PowerPlatformFundamentalsContent';
import { trainingMetadata as azureIoTDeveloperMetadata } from './AzureIoTDeveloperContent';
import { trainingMetadata as azureDevOpsEngineerMetadata } from './AzureDevOpsEngineerContent';
import { trainingMetadata as azureNetworkEngineerMetadata } from './AzureNetworkEngineerContent';
import { trainingMetadata as azureVirtualDesktopMetadata } from './AzureVirtualDesktopContent';
import { trainingMetadata as powerPlatformAutomationMetadata } from './PowerPlatformAutomationContent';
import { trainingMetadata as securityComplianceIdentityFundamentalsMetadata } from './SecurityComplianceIdentityFundamentalsContent';

// Import metadata from the 12 newly created training components
import { trainingMetadata as azureAdministratorMasteryMetadata } from './AzureAdministratorMasteryContent';
import { trainingMetadata as azureAIFundamentalsMetadata } from './AzureAIFundamentalsContent';
import { trainingMetadata as microsoft365CopilotMasteryMetadata } from './Microsoft365CopilotMasteryContent';
import { trainingMetadata as azureAIDeveloperBootcampMetadata } from './AzureAIDeveloperBootcampContent';
import { trainingMetadata as azureSecurityFundamentalsMetadata } from './AzureSecurityFundamentalsContent';
import { trainingMetadata as azureStackHubMetadata } from './AzureStackHubContent';
import { trainingMetadata as azureSupportEngineerMetadata } from './AzureSupportEngineerContent';
import { trainingMetadata as microsoft365IdentityAccessAdministratorMetadata } from './Microsoft365IdentityAccessAdministratorContent';
import { trainingMetadata as microsoft365SecurityAdministratorMetadata } from './Microsoft365SecurityAdministratorContent';
import { trainingMetadata as teamsAdvancedAdministrationMetadata } from './TeamsAdvancedAdministrationContent';
import { trainingMetadata as windowsServerHybridAdministratorMetadata } from './WindowsServerHybridAdministratorContent';
import { trainingMetadata as windowsServerHybridInfrastructureMetadata } from './WindowsServerHybridInfrastructureContent';

// Dynamic imports for all training components
const AzureFundamentalsContent = React.lazy(() => import('./AzureFundamentalsContent'));
const AzureAdministratorContent = React.lazy(() => import('./AzureAdministratorContent'));
const AzureDeveloperContent = React.lazy(() => import('./AzureDeveloperContent'));
const AzureSolutionsArchitectContent = React.lazy(() => import('./AzureSolutionsArchitectContent'));
const AzureSecurityEngineerContent = React.lazy(() => import('./AzureSecurityEngineerContent'));
const Microsoft365FundamentalsContent = React.lazy(() => import('./Microsoft365FundamentalsContent'));
const PowerPlatformFundamentalsContent = React.lazy(() => import('./PowerPlatformFundamentalsContent'));
const AzureIoTDeveloperContent = React.lazy(() => import('./AzureIoTDeveloperContent'));
const AzureDevOpsEngineerContent = React.lazy(() => import('./AzureDevOpsEngineerContent'));
const AzureNetworkEngineerContent = React.lazy(() => import('./AzureNetworkEngineerContent'));
const AzureVirtualDesktopContent = React.lazy(() => import('./AzureVirtualDesktopContent'));
const PowerPlatformAutomationContent = React.lazy(() => import('./PowerPlatformAutomationContent'));
const SecurityComplianceIdentityFundamentalsContent = React.lazy(() => import('./SecurityComplianceIdentityFundamentalsContent'));

// Dynamic imports for the 12 newly created training components
const AzureAdministratorMasteryContent = React.lazy(() => import('./AzureAdministratorMasteryContent'));
const AzureAIFundamentalsContent = React.lazy(() => import('./AzureAIFundamentalsContent'));
const Microsoft365CopilotMasteryContent = React.lazy(() => import('./Microsoft365CopilotMasteryContent'));
const AzureAIDeveloperBootcampContent = React.lazy(() => import('./AzureAIDeveloperBootcampContent'));
const AzureSecurityFundamentalsContent = React.lazy(() => import('./AzureSecurityFundamentalsContent'));
const AzureStackHubContent = React.lazy(() => import('./AzureStackHubContent'));
const AzureSupportEngineerContent = React.lazy(() => import('./AzureSupportEngineerContent'));
const Microsoft365IdentityAccessAdministratorContent = React.lazy(() => import('./Microsoft365IdentityAccessAdministratorContent'));
const Microsoft365SecurityAdministratorContent = React.lazy(() => import('./Microsoft365SecurityAdministratorContent'));
const TeamsAdvancedAdministrationContent = React.lazy(() => import('./TeamsAdvancedAdministrationContent'));
const WindowsServerHybridAdministratorContent = React.lazy(() => import('./WindowsServerHybridAdministratorContent'));
const WindowsServerHybridInfrastructureContent = React.lazy(() => import('./WindowsServerHybridInfrastructureContent'));

// Type for training metadata
export interface TrainingMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: { days: number; hours: number };
  price: { amount: number; currency: string };
  featured: boolean;
  icon: string;
  learningObjectives: string[];
  prerequisites: string[];
  targetAudience: string[];
  certification: { available: boolean; examCode?: string; examName?: string };
  tags: string[];
  maxParticipants: number;
  instructor: {
    name: string;
    title: string;
    experience: string;
    certifications: string[];
  };
}

// Map of available training components
export const trainingContentMap: Record<string, ComponentType<any>> = {
  // 'azure-fundamentals': AzureFundamentalsContent, // Migrated to JSON
  // 'azure-administrator': AzureAdministratorContent, // Migrated to JSON
  // 'azure-developer': AzureDeveloperContent, // Migrated to JSON
  // 'azure-solutions-architect': AzureSolutionsArchitectContent, // Migrated to JSON
  // 'azure-security-engineer': AzureSecurityEngineerContent, // Migrated to JSON
  // 'microsoft-365-fundamentals': Microsoft365FundamentalsContent, // Migrated to JSON
  // 'power-platform-fundamentals': PowerPlatformFundamentalsContent, // Migrated to JSON
  // 'azure-iot-developer': AzureIoTDeveloperContent, // Migrated to JSON
  // 'azure-ai-developer': AzureAIDeveloperContent, // Migrated to JSON
  // 'azure-devops-engineer': AzureDevOpsEngineerContent, // Migrated to JSON
  // 'azure-network-engineer': AzureNetworkEngineerContent, // Migrated to JSON
  // 'azure-virtual-desktop': AzureVirtualDesktopContent, // Migrated to JSON
  // 'power-platform-automation': PowerPlatformAutomationContent, // Migrated to JSON
  // 'security-compliance-identity-fundamentals': SecurityComplianceIdentityFundamentalsContent, // Migrated to JSON
  // Add the 12 newly created training components
  // 'azure-administrator-mastery': AzureAdministratorMasteryContent, // Migrated to JSON
  // 'azure-ai-fundamentals': AzureAIFundamentalsContent, // Migrated to JSON
  // 'microsoft-365-copilot-mastery': Microsoft365CopilotMasteryContent, // Migrated to JSON
  // 'azure-ai-developer-bootcamp': AzureAIDeveloperBootcampContent, // Migrated to JSON
  // 'azure-security-fundamentals': AzureSecurityFundamentalsContent, // Migrated to JSON
  // 'azure-stack-hub': AzureStackHubContent, // Migrated to JSON
  // 'azure-support-engineer': AzureSupportEngineerContent, // Migrated to JSON
  // 'microsoft-365-identity-access-administrator': Microsoft365IdentityAccessAdministratorContent, // Migrated to JSON
  // 'microsoft-365-security-administrator': Microsoft365SecurityAdministratorContent, // Migrated to JSON
  // 'teams-advanced-administration': TeamsAdvancedAdministrationContent, // Migrated to JSON
  // 'windows-server-hybrid-administrator': WindowsServerHybridAdministratorContent, // Migrated to JSON
  // 'windows-server-hybrid-infrastructure': WindowsServerHybridInfrastructureContent, // Migrated to JSON
};

// Function to get a specific training component
export function getTrainingContent(slug: string): ComponentType<any> | null {
  return trainingContentMap[slug] || null;
}

// Function to get all trainings with their metadata
export function getAllTrainings(): TrainingMetadata[] {
  const trainingMetadataModules = [
    azureFundamentalsMetadata,
    azureAdministratorMetadata,
    azureDeveloperMetadata,
    azureSolutionsArchitectMetadata,
    azureSecurityEngineerMetadata,
    microsoft365FundamentalsMetadata,
    powerPlatformFundamentalsMetadata,
    azureIoTDeveloperMetadata,
    azureDevOpsEngineerMetadata,
    azureNetworkEngineerMetadata,
    azureVirtualDesktopMetadata,
    powerPlatformAutomationMetadata,
    securityComplianceIdentityFundamentalsMetadata,
    // Add the 12 newly created training metadata
    azureAdministratorMasteryMetadata,
    azureAIFundamentalsMetadata,
    microsoft365CopilotMasteryMetadata,
    azureAIDeveloperBootcampMetadata,
    azureSecurityFundamentalsMetadata,
    azureStackHubMetadata,
    azureSupportEngineerMetadata,
    microsoft365IdentityAccessAdministratorMetadata,
    microsoft365SecurityAdministratorMetadata,
    teamsAdvancedAdministrationMetadata,
    windowsServerHybridAdministratorMetadata,
    windowsServerHybridInfrastructureMetadata,
  ];

  const trainings: TrainingMetadata[] = trainingMetadataModules
    .filter((metadata) => !!metadata) as TrainingMetadata[];

  return trainings;
}

// Helper function to get training by slug
export function getTrainingBySlug(slug: string): TrainingMetadata | null {
  const allTrainings = getAllTrainings();
  return allTrainings.find(training => training.slug === slug) || null;
}

// Helper function to get trainings by category
export function getTrainingsByCategory(category: string): TrainingMetadata[] {
  const allTrainings = getAllTrainings();
  return allTrainings.filter(training => training.category.toLowerCase() === category.toLowerCase());
}

// Helper function to get featured trainings
export function getFeaturedTrainings(): TrainingMetadata[] {
  const allTrainings = getAllTrainings();
  return allTrainings.filter(training => training.featured);
}
