import type { BlogPost } from '../types';

export const appRegistrationsSecurityPost: BlogPost = {
  id: 'entra-app-registrations-security-audit',
  title: {
    en: 'Entra App Registrations: Security Audit and Credential Management',
    nl: 'Entra App Registrations: Security Audit en Credential Management'
  },
  description: {
    en: 'Learn how to audit app registrations in Microsoft Entra ID, identify security risks, and implement proper credential lifecycle management',
    nl: 'Leer hoe je app registrations in Microsoft Entra ID auditeert, beveiligingsrisico\'s identificeert en goed credential lifecycle management implementeert'
  },
  date: '2025-06-08',
  author: 'Yair Knijn',
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
      en: 'Open your Entra ID tenant right now and count the app registrations. Now check how many have expired credentials. How many have Directory.ReadWrite.All permissions that nobody remembers granting. How many have no owner listed at all. If you have been running your tenant for more than a year, the answers are probably uncomfortable. App registrations in Microsoft Entra ID (formerly Azure AD) are quiet attack vectors — they sit there with stale secrets and overprivileged permissions until something goes wrong. Here is how to audit them and set up the guardrails so they stop drifting.',
      nl: 'Open je Entra ID-tenant nu en tel de app registrations. Controleer dan hoeveel verlopen credentials hebben. Hoeveel Directory.ReadWrite.All-permissies hebben die niemand zich herinnert te hebben verleend. Hoeveel geen eigenaar hebben. Als je tenant langer dan een jaar draait, zijn de antwoorden waarschijnlijk ongemakkelijk. App registrations in Microsoft Entra ID (voorheen Azure AD) zijn stille aanvalsvectoren — ze zitten daar met verouderde secrets en te brede permissies totdat er iets misgaat. Zo audit je ze en stel je de vangrails in zodat ze stoppen met afdrijven.'
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
      en: 'A one-time audit is useful. A recurring one is what actually keeps you safe. Run the PowerShell scripts on a schedule — weekly is fine for most tenants. Automate credential rotation through Key Vault so secrets do not sit expired for months. Set up alerts for new high-privilege permission grants so you catch them when they happen, not during next quarter\'s review. None of this is hard to do. The hard part is doing it consistently before an incident forces you to.',
      nl: 'Een eenmalige audit is nuttig. Een terugkerende is wat je echt veilig houdt. Draai de PowerShell-scripts op een schema — wekelijks is prima voor de meeste tenants. Automatiseer credential rotation via Key Vault zodat secrets niet maanden verlopen blijven. Stel alerts in voor nieuwe high-privilege permission grants zodat je ze opmerkt wanneer ze gebeuren, niet tijdens de review van volgend kwartaal. Niets hiervan is moeilijk. Het moeilijke is het consequent doen voordat een incident je ertoe dwingt.'
    }
  }
};
