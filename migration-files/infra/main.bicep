// Cloud Evolvers Azure Infrastructure
// This Bicep template creates the infrastructure for the Cloud Evolvers website
// Uses Azure Container Apps with system-assigned managed identity for secure authentication

targetScope = 'resourceGroup'

@description('Name of the environment')
param environmentName string = 'cloudevolvers-prod'

@description('Azure region for resources')
param location string = resourceGroup().location

@description('Container image to deploy')
param containerImage string = 'nginx:latest'

@description('Minimum number of replicas')
@minValue(0)
@maxValue(25)
param minReplicas int = 1

@description('Maximum number of replicas')
@minValue(1)
@maxValue(25)
param maxReplicas int = 3

// Generate unique resource names using resource token
var resourceToken = uniqueString(subscription().id, resourceGroup().id, environmentName)
var prefix = 'ce-${resourceToken}'

// Tags for all resources
var tags = {
  'azd-env-name': environmentName
  'azd-service-name': 'web'
  'project': 'cloudevolvers'
  'environment': 'production'
}

// User-assigned managed identity for secure authentication
resource userAssignedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: '${prefix}-identity'
  location: location
  tags: tags
}

// Container Apps Environment
resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2024-03-01' = {
  name: '${prefix}-env'
  location: location
  tags: tags
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspace.properties.customerId
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey
      }
    }
    zoneRedundant: false
  }
}

// Log Analytics Workspace for monitoring
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: '${prefix}-logs'
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    features: {
      searchVersion: 1
      legacy: 0
      enableLogAccessUsingOnlyResourcePermissions: true
    }
  }
}

// Container App with user-assigned managed identity
resource containerApp 'Microsoft.App/containerApps@2024-03-01' = {
  name: '${prefix}-web'
  location: location
  tags: tags
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${userAssignedIdentity.id}': {}
    }
  }
  properties: {
    managedEnvironmentId: containerAppsEnvironment.id
    configuration: {
      ingress: {
        external: true
        targetPort: 80
        allowInsecure: false
        traffic: [
          {
            weight: 100
            latestRevision: true
          }
        ]
        corsPolicy: {
          allowedOrigins: ['*']
          allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
          allowedHeaders: ['*']
          allowCredentials: false
        }
      }
      secrets: [
        {
          name: 'graph-client-id'
          keyVaultUrl: '${keyVault.properties.vaultUri}secrets/graph-client-id'
          identity: userAssignedIdentity.id
        }
        {
          name: 'graph-client-secret'
          keyVaultUrl: '${keyVault.properties.vaultUri}secrets/graph-client-secret'
          identity: userAssignedIdentity.id
        }
        {
          name: 'graph-tenant-id'
          keyVaultUrl: '${keyVault.properties.vaultUri}secrets/graph-tenant-id'
          identity: userAssignedIdentity.id
        }
        {
          name: 'nextauth-secret'
          keyVaultUrl: '${keyVault.properties.vaultUri}secrets/nextauth-secret'
          identity: userAssignedIdentity.id
        }
        {
          name: 'admin-password'
          keyVaultUrl: '${keyVault.properties.vaultUri}secrets/admin-password'
          identity: userAssignedIdentity.id
        }
        {
          name: 'jwt-secret'
          keyVaultUrl: '${keyVault.properties.vaultUri}secrets/jwt-secret'
          identity: userAssignedIdentity.id
        }
      ]
      registries: [
        {
          server: containerRegistry.properties.loginServer
          identity: userAssignedIdentity.id
        }
      ]
    }
    template: {
      containers: [
        {
          image: 'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest'
          name: '${prefix}-web'
          env: [
            {
              name: 'NEXT_PUBLIC_CLOUD_EVOLVERS'
              value: '1'
            }
            {
              name: 'NEXT_PUBLIC_CONTACT_EMAIL'
              value: 'training@cloudevolvers.com'
            }
            {
              name: 'NEXT_PUBLIC_CONTACT_PHONE'
              value: '06-34272027'
            }
            {
              name: 'NEXT_PUBLIC_PRIVACY_EMAIL'
              value: 'privacy@cloudevolvers.com'
            }
            {
              name: 'NOTIFICATION_EMAIL'
              value: 'training@cloudevolvers.com'
            }
            {
              name: 'TRAINING_INQUIRY_EMAIL'
              value: 'training@cloudevolvers.com'
            }
            {
              name: 'LOCAL_DEV'
              value: 'false'
            }
            {
              name: 'PORT'
              value: '80'
            }
            {
              name: 'AZURE_KEY_VAULT_NAME'
              value: keyVault.name
            }
            {
              name: 'AZURE_KEY_VAULT_URL'
              value: keyVault.properties.vaultUri
            }
            {
              name: 'AZURE_STORAGE_ACCOUNT_NAME'
              value: 'webxevolvestorage'
            }
            {
              name: 'AZURE_STORAGE_CONTAINER_NAME'
              value: 'images'
            }
            {
              name: 'AZURE_STORAGE_RESOURCE_GROUP'
              value: 'sc-northeu-sc-apim'
            }
            {
              name: 'AZURE_SUBSCRIPTION_ID'
              value: '4a55c776-9f6b-4966-921e-c9f60e50652f'
            }
            {
              name: 'NEXTAUTH_URL'
              value: 'https://cloudevolvers.com'
            }
            {
              name: 'AZURE_CLIENT_ID'
              secretRef: 'graph-client-id'
            }
            {
              name: 'AZURE_CLIENT_SECRET'
              secretRef: 'graph-client-secret'
            }
            {
              name: 'AZURE_TENANT_ID'
              secretRef: 'graph-tenant-id'
            }
            {
              name: 'NEXTAUTH_SECRET'
              secretRef: 'nextauth-secret'
            }
            {
              name: 'ADMIN_PASSWORD'
              secretRef: 'admin-password'
            }
            {
              name: 'JWT_SECRET'
              secretRef: 'jwt-secret'
            }
          ]
          resources: {
            cpu: json('0.5')
            memory: '1Gi'
          }
        }
      ]
      scale: {
        minReplicas: minReplicas
        maxReplicas: maxReplicas
        rules: [
          {
            name: 'http-rule'
            http: {
              metadata: {
                concurrentRequests: '100'
              }
            }
          }
        ]
      }
    }
  }
}

// Azure Container Registry for storing container images
resource containerRegistry 'Microsoft.ContainerRegistry/registries@2023-07-01' = {
  name: '${replace(prefix, '-', '')}acr'
  location: location
  tags: tags
  sku: {
    name: 'Basic'
  }
  properties: {
    adminUserEnabled: false
    policies: {
      trustPolicy: {
        type: 'Notary'
        status: 'disabled'
      }
      retentionPolicy: {
        days: 7
        status: 'enabled'
      }
    }
    encryption: {
      status: 'disabled'
    }
    dataEndpointEnabled: false
    publicNetworkAccess: 'Enabled'
    networkRuleBypassOptions: 'AzureServices'
    zoneRedundancy: 'Disabled'
  }
}

// Key Vault for storing secrets
resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: '${prefix}-kv'
  location: location
  tags: tags
  properties: {
    enabledForDeployment: false
    enabledForDiskEncryption: false
    enabledForTemplateDeployment: false
    tenantId: tenant().tenantId
    accessPolicies: []
    sku: {
      name: 'standard'
      family: 'A'
    }
    networkAcls: {
      defaultAction: 'Allow'
      bypass: 'AzureServices'
    }
    enableRbacAuthorization: true
  }
}

// Role assignment for user-assigned identity to access Key Vault
resource keyVaultSecretsUserRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(keyVault.id, userAssignedIdentity.id, 'Key Vault Secrets User')
  scope: keyVault
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4633458b-17de-408a-b874-0445c86b69e6') // Key Vault Secrets User
    principalId: userAssignedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Role assignment for user-assigned identity to pull from Container Registry
resource acrPullRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(containerRegistry.id, userAssignedIdentity.id, 'AcrPull')
  scope: containerRegistry
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '7f951dda-4ed3-4680-a7ca-43fe172d538d') // AcrPull
    principalId: userAssignedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Outputs for deployment verification and further configuration
output RESOURCE_GROUP_ID string = resourceGroup().id
output AZURE_CONTAINER_REGISTRY_ENDPOINT string = containerRegistry.properties.loginServer
output AZURE_CONTAINER_REGISTRY_NAME string = containerRegistry.name
output AZURE_KEY_VAULT_NAME string = keyVault.name
output AZURE_KEY_VAULT_ENDPOINT string = keyVault.properties.vaultUri
output AZURE_CONTAINER_APPS_ENVIRONMENT_NAME string = containerAppsEnvironment.name
output AZURE_CONTAINER_APP_NAME string = containerApp.name
output AZURE_CONTAINER_APP_FQDN string = containerApp.properties.configuration.ingress.fqdn
output AZURE_LOG_ANALYTICS_WORKSPACE_NAME string = logAnalyticsWorkspace.name
output AZURE_CONTAINER_APP_IDENTITY_PRINCIPAL_ID string = userAssignedIdentity.properties.principalId
