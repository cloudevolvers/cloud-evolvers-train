// Storage Account deployment for pricing management
targetScope = 'resourceGroup'

@description('Environment name (staging, dta or prod)')
@allowed(['staging', 'dta', 'prod'])
param environment string = 'dta'

@description('Project name')
param projectName string = 'cloudevolvers'

@description('Location for all resources')
param location string = resourceGroup().location

// Generate unique suffix for resource names
var resourceToken = uniqueString(subscription().id, resourceGroup().id)

// Reference existing Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' existing = {
  name: 'cloudevolvers-website-swa'
}

// Storage Account for pricing management
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: 'cesasa${resourceToken}'
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

// Outputs
@description('The Storage Account name for pricing')
output storageAccountName string = storageAccount.name

@description('The Storage Account table endpoint')
output storageTableEndpoint string = storageAccount.properties.primaryEndpoints.table

@description('The Storage Account ID')
output storageAccountId string = storageAccount.id
