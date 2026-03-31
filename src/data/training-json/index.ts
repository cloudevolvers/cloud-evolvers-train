import { TrainingJSON } from './types';

// Import all training JSON files
import azureAdministratorData from './azure-administrator.json';
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
import azureAIEngineerData from './azure-ai-engineer.json';
import securityOperationsAnalystData from './security-operations-analyst.json';
import cybersecurityArchitectData from './cybersecurity-architect.json';
import copilotAgentAdminFundamentalsData from './copilot-agent-administration-fundamentals.json';
import aiBusinessProfessionalData from './ai-business-professional.json';
import aiTransformationLeaderData from './ai-transformation-leader.json';
import agenticAiSolutionsArchitectData from './agentic-ai-solutions-architect.json';
import azureAiAppAgentDeveloperData from './azure-ai-app-agent-developer.json';
import azureAiCloudDeveloperData from './azure-ai-cloud-developer.json';
import mlopsEngineerData from './mlops-engineer.json';
import cloudAiSecurityEngineerData from './cloud-ai-security-engineer.json';
import windowsServerHybridAdminConsolidatedData from './windows-server-hybrid-administrator-consolidated.json';
import microsoft365AdministratorData from './microsoft-365-administrator.json';

// Training data registry
const trainingRegistry: Record<string, TrainingJSON> = {
  'azure-administrator': azureAdministratorData as TrainingJSON,
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
  'microsoft-365-copilot-mastery': microsoft365CopilotMastery as TrainingJSON,
  'azure-security-fundamentals': azureSecurityFundamentals as TrainingJSON,
  'azure-stack-hub': azureStackHub as TrainingJSON,
  'azure-support-engineer': azureSupportEngineer as TrainingJSON,
  'microsoft-365-identity-access-administrator': microsoft365IdentityAccessAdministrator as TrainingJSON,
  'microsoft-365-security-administrator': microsoft365SecurityAdministrator as TrainingJSON,
  'power-platform-fundamentals': powerPlatformFundamentalsData as TrainingJSON,
  'windows-server-hybrid-infrastructure': windowsServerHybridInfrastructureData as TrainingJSON,
  'windows-server-hybrid-administrator': windowsServerHybridAdministrator as TrainingJSON,
  'azure-ai-engineer': azureAIEngineerData as TrainingJSON,
  'security-operations-analyst': securityOperationsAnalystData as TrainingJSON,
  'cybersecurity-architect': cybersecurityArchitectData as TrainingJSON,
  'copilot-agent-administration-fundamentals': copilotAgentAdminFundamentalsData as TrainingJSON,
  'ai-business-professional': aiBusinessProfessionalData as TrainingJSON,
  'ai-transformation-leader': aiTransformationLeaderData as TrainingJSON,
  'agentic-ai-solutions-architect': agenticAiSolutionsArchitectData as TrainingJSON,
  'azure-ai-app-agent-developer': azureAiAppAgentDeveloperData as TrainingJSON,
  'azure-ai-cloud-developer': azureAiCloudDeveloperData as TrainingJSON,
  'mlops-engineer': mlopsEngineerData as TrainingJSON,
  'cloud-ai-security-engineer': cloudAiSecurityEngineerData as TrainingJSON,
  'windows-server-hybrid-administrator-consolidated': windowsServerHybridAdminConsolidatedData as TrainingJSON,
  'microsoft-365-administrator': microsoft365AdministratorData as TrainingJSON,
};

// Function to get training by slug
export function getTrainingBySlug(slug: string): TrainingJSON | null {
  return trainingRegistry[slug] || null;
}

// Function to get all trainings
export function getAllTrainings(): TrainingJSON[] {
  return Object.values(trainingRegistry);
}

