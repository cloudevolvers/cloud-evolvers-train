import type { BlogPost } from '../types';

export const azureDevOpsAuditPost: BlogPost = {
  id: 'azure-devops-audit-powershell-html',
  title: {
    en: 'Audit Azure DevOps History with PowerShell and Generate HTML Reports',
    nl: 'Azure DevOps Geschiedenis Auditen met PowerShell en HTML-Rapporten Genereren'
  },
  description: {
    en: 'Learn how to use PowerShell to query Azure DevOps audit logs and generate comprehensive HTML reports for compliance and security reviews',
    nl: 'Leer hoe je PowerShell gebruikt om Azure DevOps audit logs te bevragen en uitgebreide HTML-rapporten te genereren voor compliance- en beveiligingsreviews'
  },
  date: '2025-06-10',
  author: 'Yair Knijn',
  tags: ['Azure DevOps', 'PowerShell', 'Auditing', 'Compliance', 'Security'],
  image: '/images/unsplash/compliance-governance-audit.jpg',
  excerpt: {
    en: 'Azure DevOps maintains a detailed audit log of all changes to your organization. This guide shows you how to extract this data using PowerShell and create professional HTML reports for stakeholders.',
    nl: 'Azure DevOps houdt een gedetailleerde audit log bij van alle wijzigingen in je organisatie. Deze gids laat zien hoe je deze gegevens extraheert met PowerShell en professionele HTML-rapporten maakt voor stakeholders.'
  },
  category: {
    en: 'DevOps & Automation',
    nl: 'DevOps & Automatisering'
  },
  readTime: 12,
  content: {
    introduction: {
      en: 'Someone changed the permissions on your production pipeline last Tuesday. Who was it? What did they change? Good luck finding out from the Azure DevOps UI — the audit log is buried and the filtering is minimal. The Audit API at auditservice.dev.azure.com is much more useful, but it returns raw JSON that nobody wants to read. Here is a PowerShell script that pulls the audit data, filters the noise, and generates an HTML report you can actually hand to a compliance reviewer or security team.',
      nl: 'Iemand heeft afgelopen dinsdag de permissies op je productiepipeline gewijzigd. Wie was het? Wat hebben ze veranderd? Succes met het uitzoeken via de Azure DevOps UI — het auditlog zit diep verstopt en de filtermogelijkheden zijn minimaal. De Audit API op auditservice.dev.azure.com is veel nuttiger, maar die retourneert ruwe JSON die niemand wil lezen. Hier is een PowerShell-script dat de auditdata ophaalt, de ruis filtert, en een HTML-rapport genereert dat je daadwerkelijk kunt overhandigen aan een compliance-reviewer of beveiligingsteam.'
    },
    sections: [
      {
        title: {
          en: 'Understanding the Audit API',
          nl: 'De Audit API Begrijpen'
        },
        content: {
          en: 'The Azure DevOps Audit API is accessible at https://auditservice.dev.azure.com/{organization}/_apis/audit/auditlog. It returns audit events including who performed an action, what was changed, when it happened, and from where (IP address). Access requires appropriate permissions - typically Project Collection Administrators or users with explicit audit read permissions.',
          nl: 'De Azure DevOps Audit API is toegankelijk via https://auditservice.dev.azure.com/{organization}/_apis/audit/auditlog. Het retourneert audit events inclusief wie een actie uitvoerde, wat er veranderd is, wanneer het gebeurde, en vanaf waar (IP-adres). Toegang vereist de juiste permissies - doorgaans Project Collection Administrators of gebruikers met expliciete audit-leesrechten.'
        }
      },
      {
        title: {
          en: 'Setting Up Authentication',
          nl: 'Authenticatie Instellen'
        },
        content: {
          en: "Create a Personal Access Token (PAT) with 'Audit Log - Read' scope. Store it securely using Azure Key Vault or Windows Credential Manager. Never hardcode tokens in your scripts. Use environment variables to pass the PAT to your script.",
          nl: "Maak een Personal Access Token (PAT) aan met 'Audit Log - Read' scope. Sla deze veilig op met Azure Key Vault of Windows Credential Manager. Hardcode nooit tokens in je scripts. Gebruik omgevingsvariabelen om de PAT aan je script door te geven."
        },
        code: {
          language: 'powershell',
          code: `$pat = $env:AZURE_DEVOPS_PAT
$base64Auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$pat"))
$headers = @{ "Authorization" = "Basic $base64Auth" }`
        }
      },
      {
        title: {
          en: 'Generating the HTML Report',
          nl: 'Het HTML-Rapport Genereren'
        },
        content: {
          en: 'Transform the audit data into a professional HTML report with filtering capabilities, color-coded severity, and responsive design. Use ConvertTo-Html as a starting point, then enhance with CSS and JavaScript for a polished result.',
          nl: 'Transformeer de audit data naar een professioneel HTML-rapport met filtermogelijkheden, kleurgecodeerde severity en responsive design. Gebruik ConvertTo-Html als startpunt en verbeter met CSS en JavaScript voor een gepolijst resultaat.'
        }
      },
      {
        title: {
          en: 'Security Best Practices',
          nl: 'Security Best Practices'
        },
        content: {
          en: 'Protect your audit scripts: Use managed identities when running in Azure. Rotate PATs regularly. Implement role-based access to audit reports. Consider using Azure Log Analytics for long-term audit log retention and advanced querying capabilities.',
          nl: 'Bescherm je audit scripts: Gebruik managed identities bij uitvoering in Azure. Roteer PATs regelmatig. Implementeer role-based access voor audit-rapporten. Overweeg Azure Log Analytics te gebruiken voor langdurige audit log-retentie en geavanceerde querymogelijkheden.'
        }
      }
    ],
    conclusion: {
      en: 'The Audit API gives you everything — permission changes, pipeline edits, repo updates, IP addresses, timestamps. The trick is making that data useful. A scheduled PowerShell script that generates an HTML report weekly is enough for most teams. For larger organizations, consider shipping the audit events to Azure Log Analytics where you get retention policies, KQL queries, and alerting built in. Either way, do not wait until an incident to figure out how your audit logs work. Set this up on a quiet afternoon and you will thank yourself later.',
      nl: 'De Audit API geeft je alles — permissiewijzigingen, pipeline-edits, repo-updates, IP-adressen, timestamps. De truc is die data bruikbaar maken. Een gepland PowerShell-script dat wekelijks een HTML-rapport genereert is voldoende voor de meeste teams. Voor grotere organisaties, overweeg de auditevents naar Azure Log Analytics te sturen waar je retentiebeleid, KQL-queries en alerting ingebouwd krijgt. Hoe dan ook, wacht niet tot een incident om uit te zoeken hoe je auditlogs werken. Stel dit in op een rustige middag en je zult jezelf later dankbaar zijn.'
    }
  }
};
