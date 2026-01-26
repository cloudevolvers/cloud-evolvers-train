// Main infrastructure template for Cloud Evolvers Training Platform
// This template creates Static Web Apps with Key Vault access
targetScope = 'resourceGroup'

@description('Environment name (staging, dta or prod)')
@allowed(['staging', 'dta', 'prod'])
param environment string = 'staging'

@description('Project name')
param projectName string = 'cloudevolvers'

@description('Location for all resources')
param location string = resourceGroup().location

@description('Existing Key Vault name')
param keyVaultName string

@description('Repository URL for GitHub integration')
param repositoryUrl string = 'https://github.com/xevolve-org/cloud-evolvers-train'

@description('Branch for deployment')
param branch string = 'main'

@description('SKU for the Static Web App (Basic required for Key Vault access)')
@allowed(['Free', 'Basic', 'Standard'])
param skuName string = 'Basic'

// Generate unique suffix for resource names
var resourceToken = uniqueString(subscription().id, resourceGroup().id)
var appName = environment == 'staging' ? '${projectName}-${environment}-website' : '${projectName}-${environment}-${resourceToken}'

// Static Web App resource
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: '${appName}-swa'
  location: location
  sku: {
    name: skuName
    tier: skuName
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
  }
  identity: {
    type: 'SystemAssigned'
  }
  tags: {
    environment: environment
    project: projectName
    'azd-env-name': environment
  }
}

// Storage Account for pricing management
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: 'ceprice${resourceToken}'
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    supportsHttpsTrafficOnly: true
    accessTier: 'Hot'
    networkAcls: {
      defaultAction: 'Allow'
    }
  }
  tags: {
    environment: environment
    project: projectName
    'azd-env-name': environment
  }
}

// Table Service
resource tableService 'Microsoft.Storage/storageAccounts/tableServices@2023-05-01' = {
  parent: storageAccount
  name: 'default'
}

// Pricing Table
resource pricingTable 'Microsoft.Storage/storageAccounts/tableServices/tables@2023-05-01' = {
  parent: tableService
  name: 'pricing'
}

// Promotions Table
resource promotionsTable 'Microsoft.Storage/storageAccounts/tableServices/tables@2023-05-01' = {
  parent: tableService
  name: 'promotions'
}

// Storage Table Data Contributor role assignment for Static Web App
resource storageTableDataContributorRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storageAccount.id, staticWebApp.id, '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3')
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3') // Storage Table Data Contributor
    principalId: staticWebApp.identity.principalId
    principalType: 'ServicePrincipal'
  }
}

// Reference to existing Key Vault in different resource group
resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' existing = {
  name: keyVaultName
  scope: resourceGroup('xevolve-dta-rg')
}

// Key Vault Secrets User role assignment for Static Web App
resource keyVaultSecretsUserRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(keyVault.id, staticWebApp.id, '4633458b-17de-408a-b874-0445c86b69e6')
  scope: keyVault
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4633458b-17de-408a-b874-0445c86b69e6') // Key Vault Secrets User
    principalId: staticWebApp.identity.principalId
    principalType: 'ServicePrincipal'
  }
}

// Key Vault Reader role assignment for Static Web App (to list secrets)
resource keyVaultReaderRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(keyVault.id, staticWebApp.id, 'acdd72a7-3385-48ef-bd42-f606fba81ae7')
  scope: keyVault
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'acdd72a7-3385-48ef-bd42-f606fba81ae7') // Reader
    principalId: staticWebApp.identity.principalId
    principalType: 'ServicePrincipal'
  }
}

// Outputs
@description('The name of the Static Web App')
output staticWebAppName string = staticWebApp.name

@description('The default hostname of the Static Web App')
output staticWebAppDefaultHostname string = staticWebApp.properties.defaultHostname

@description('The resource ID of the Static Web App')
output staticWebAppId string = staticWebApp.id

@description('The principal ID of the Static Web App managed identity')
output staticWebAppPrincipalId string = staticWebApp.identity.principalId

@description('The Key Vault URI')
output keyVaultUri string = keyVault.properties.vaultUri

@description('The Key Vault ID')
output keyVaultId string = keyVault.id

@description('The Storage Account name for pricing')
output storageAccountName string = storageAccount.name

@description('The Storage Account table endpoint')
output storageTableEndpoint string = storageAccount.properties.primaryEndpoints.table

@description('The Storage Account ID')
output storageAccountId string = storageAccount.id
