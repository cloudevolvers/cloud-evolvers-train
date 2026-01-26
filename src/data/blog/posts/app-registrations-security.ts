import type { BlogPost } from '../types';

export const appRegistrationsSecurityPost: BlogPost = {
  id: 'entra-app-registrations-security-audit',
  title: {
    en: 'Entra App Registrations: Security Audit and Credential Management',
    nl: 'Entra App Registrations: Security Audit en Credential Management'
  },
  description: {
    en: 'Learn how to audit app registrations in Microsoft Entra ID, identify security risks, and implement proper credential lifecycle management',
    nl: 'Leer hoe je app registrations in Microsoft Entra ID auditeert, beveiligingsrisicos identificeert en proper credential lifecycle management implementeert'
  },
  date: '2025-06-08',
  author: 'Falk Krahl',
  tags: ['Microsoft Entra', 'Security', 'App Registration', 'Credentials', 'Governance'],
  image: '/images/unsplash/azure-security-center.jpg',
  excerpt: {
    en: 'App registrations are a common attack vector when misconfigured. Learn how to audit your environment, identify risky permissions, and implement credential rotation policies.',
    nl: 'App registrations zijn een veelvoorkomende aanvalsvector bij verkeerde configuratie. Leer hoe je je omgeving auditeert, risicovolle permissies identificeert en credential rotation policies implementeert.'
  },
  category: {
    en: 'Security & Compliance',
    nl: 'Beveiliging & Compliance'
  },
  readTime: 14,
  content: {
    introduction: {
      en: 'App registrations in Microsoft Entra ID (formerly Azure AD) are the identity backbone for your applications. However, they can become a significant security risk when credentials expire without rotation, excessive permissions are granted, or owner access is not properly managed. This article covers a comprehensive security audit approach and best practices for credential management.',
      nl: 'App registrations in Microsoft Entra ID (voorheen Azure AD) zijn de identiteitsruggengraat voor je applicaties. Ze kunnen echter een significant beveiligingsrisico worden wanneer credentials verlopen zonder rotatie, excessieve permissies worden toegekend, of eigenaarstoegang niet goed wordt beheerd. Dit artikel behandelt een uitgebreide security audit-aanpak en best practices voor credential management.'
    },
    sections: [
      {
        title: {
          en: 'Identifying High-Risk App Registrations',
          nl: 'High-Risk App Registrations Identificeren'
        },
        content: {
          en: 'Use Microsoft Graph PowerShell to identify risky configurations: apps with no owners (orphaned), apps with expiring or expired credentials, apps with high-privilege API permissions like Directory.ReadWrite.All, and apps that have not been used in over 90 days.',
          nl: 'Gebruik Microsoft Graph PowerShell om risicovolle configuraties te identificeren: apps zonder eigenaren (orphaned), apps met verlopende of verlopen credentials, apps met high-privilege API-permissies zoals Directory.ReadWrite.All, en apps die meer dan 90 dagen niet zijn gebruikt.'
        },
        code: {
          language: 'powershell',
          code: `# Find apps with expiring credentials (next 30 days)
$apps = Get-MgApplication -All
$expiringApps = foreach ($app in $apps) {
    $creds = $app.PasswordCredentials + $app.KeyCredentials
    $expiring = $creds | Where-Object { 
        $_.EndDateTime -lt (Get-Date).AddDays(30) -and 
        $_.EndDateTime -gt (Get-Date) 
    }
    if ($expiring) {
        [PSCustomObject]@{
            AppName = $app.DisplayName
            AppId = $app.AppId
            ExpiringCredentials = $expiring.Count
            EarliestExpiry = ($expiring | Sort-Object EndDateTime | Select-Object -First 1).EndDateTime
        }
    }
}
$expiringApps | Format-Table -AutoSize`
        }
      },
      {
        title: {
          en: 'Auditing API Permissions',
          nl: 'API Permissies Auditen'
        },
        content: {
          en: 'Review granted permissions and identify over-privileged applications. Look for application permissions (vs delegated), admin consent grants, and permissions to sensitive APIs like Exchange, SharePoint, and Microsoft Graph with write access.',
          nl: 'Beoordeel toegekende permissies en identificeer over-privileged applicaties. Let op application permissions (vs delegated), admin consent grants, en permissies voor gevoelige APIs zoals Exchange, SharePoint en Microsoft Graph met schrijftoegang.'
        }
      },
      {
        title: {
          en: 'Implementing Credential Rotation',
          nl: 'Credential Rotation Implementeren'
        },
        content: {
          en: 'Automate credential rotation using Azure Key Vault and Azure Automation. Store secrets in Key Vault, configure rotation policies, and use Event Grid to trigger rotation workflows before expiration. Prefer certificates over client secrets for better security.',
          nl: 'Automatiseer credential rotation met Azure Key Vault en Azure Automation. Sla secrets op in Key Vault, configureer rotation policies, en gebruik Event Grid om rotation workflows te triggeren vóór expiratie. Geef voorkeur aan certificates boven client secrets voor betere beveiliging.'
        }
      },
      {
        title: {
          en: 'Setting Up Governance Controls',
          nl: 'Governance Controls Instellen'
        },
        content: {
          en: 'Implement Azure Policy to enforce naming conventions and required tags. Use Entra ID Access Reviews for app registration owners. Create alerts for new high-privilege permission grants. Document ownership and purpose for every app registration.',
          nl: 'Implementeer Azure Policy om naming conventions en vereiste tags af te dwingen. Gebruik Entra ID Access Reviews voor app registration-eigenaren. Maak alerts voor nieuwe high-privilege permission grants. Documenteer eigenaarschap en doel voor elke app registration.'
        }
      }
    ],
    conclusion: {
      en: 'Regular auditing of app registrations is essential for maintaining a secure identity posture. Combine automated scanning with governance policies to catch issues before they become vulnerabilities.',
      nl: 'Regelmatige auditing van app registrations is essentieel voor het handhaven van een veilige identity posture. Combineer geautomatiseerde scanning met governance policies om problemen te vangen voordat ze kwetsbaarheden worden.'
    }
  }
};
