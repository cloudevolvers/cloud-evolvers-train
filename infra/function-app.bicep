// Simple Function App deployment for pricing API
targetScope = 'resourceGroup'

@description('Location for all resources')
param location string = resourceGroup().location

@description('Environment name')
param environment string = 'dta'

// Generate unique suffix
var resourceToken = uniqueString(subscription().id, resourceGroup().id)
var functionAppName = 'ce-pricing-func-${resourceToken}'
var storageAccountName = 'cesasaxqhpxutdeftm2'
var hostingPlanName = 'ce-pricing-plan-${resourceToken}'

// Reference existing storage account
resource existingStorageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' existing = {
  name: storageAccountName
}

// Hosting plan for Functions
resource hostingPlan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: hostingPlanName
  location: location
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
    size: 'Y1'
    family: 'Y'
    capacity: 0
  }
  properties: {
    reserved: false
  }
  tags: {
    environment: environment
    purpose: 'pricing-api'
  }
}

// Function App
resource functionApp 'Microsoft.Web/sites@2023-12-01' = {
  name: functionAppName
  location: location
  kind: 'functionapp'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: hostingPlan.id
    siteConfig: {
      appSettings: [
        {
          name: 'AzureWebJobsStorage'
          value: 'DefaultEndpointsProtocol=https;AccountName=${existingStorageAccount.name};EndpointSuffix=${az.environment().suffixes.storage};AccountKey=${existingStorageAccount.listKeys().keys[0].value}'
        }
        {
          name: 'WEBSITE_CONTENTAZUREFILECONNECTIONSTRING'
          value: 'DefaultEndpointsProtocol=https;AccountName=${existingStorageAccount.name};EndpointSuffix=${az.environment().suffixes.storage};AccountKey=${existingStorageAccount.listKeys().keys[0].value}'
        }
        {
          name: 'WEBSITE_CONTENTSHARE'
          value: functionAppName
        }
        {
          name: 'FUNCTIONS_EXTENSION_VERSION'
          value: '~4'
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'node'
        }
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
        {
          name: 'AZURE_STORAGE_ACCOUNT_NAME'
          value: existingStorageAccount.name
        }
        {
          name: 'AZURE_STORAGE_TABLE_ENDPOINT'
          value: existingStorageAccount.properties.primaryEndpoints.table
        }
        {
          name: 'PRICING_ADMIN_KEY'
          value: 'loganislove'
        }
      ]
    }
  }
  tags: {
    environment: environment
    purpose: 'pricing-api'
  }
}

// Storage Table Data Contributor role assignment for Function App
resource functionAppStorageRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(existingStorageAccount.id, functionApp.id, '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3')
  scope: existingStorageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3') // Storage Table Data Contributor
    principalId: functionApp.identity.principalId
    principalType: 'ServicePrincipal'
  }
}

// Outputs
output functionAppName string = functionApp.name
output functionAppUrl string = 'https://${functionApp.properties.defaultHostName}'
output storageAccountName string = existingStorageAccount.name
