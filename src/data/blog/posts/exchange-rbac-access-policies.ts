import type { BlogPost } from '../types';

export const exchangeRbacAccessPoliciesPost: BlogPost = {
  id: 'exchange-rbac-access-policies',
  title: {
    en: 'Exchange Online RBAC and Application Access Policies',
    nl: 'Exchange Online RBAC en Application Access Policies'
  },
  description: {
    en: 'Exchange Online has its own RBAC system separate from Entra ID. Learn how role groups, application access policies, and Graph permissions interact — and how to audit and automate RBAC reviews.',
    nl: 'Exchange Online heeft een eigen RBAC-systeem los van Entra ID. Leer hoe rolgroepen, application access policies en Graph-permissies samenwerken — en hoe je RBAC-reviews auditeert en automatiseert.'
  },
  date: '2026-03-20',
  author: 'Yair Knijn',
  tags: ['Exchange Online', 'RBAC', 'Security', 'PowerShell', 'Microsoft 365'],
  image: '/images/pexels/pexels-artificial-intelligence-robot.jpg',
  excerpt: {
    en: 'Exchange RBAC is separate from Entra ID roles, and application access policies are the only way to stop apps from reading every mailbox in your tenant. Here is how to lock it down and keep it audited.',
    nl: 'Exchange RBAC staat los van Entra ID-rollen, en application access policies zijn de enige manier om te voorkomen dat apps elke mailbox in je tenant lezen. Zo vergrendel je het en houd je het geaudit.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'Exchange Online runs its own permission model. That surprises people. They assume Entra ID roles cover everything, assign Global Admin, and move on. But Exchange has role groups like Organization Management, Recipient Management, and Help Desk that control mailbox operations independently. A Global Admin gets Exchange access through a backdoor — Entra maps it behind the scenes — but that is not the same as understanding what each Exchange role group actually permits. Then there are application access policies, which most tenants never configure. By default, any app with mailbox permissions can read every mailbox. Every single one. This post walks through Exchange RBAC, application access policies, Graph permission scoping, and how to audit the whole thing so stale assignments do not become your next security incident.',
      nl: 'Exchange Online draait zijn eigen permissiemodel. Dat verrast mensen. Ze gaan ervan uit dat Entra ID-rollen alles dekken, kennen Global Admin toe en gaan verder. Maar Exchange heeft rolgroepen zoals Organization Management, Recipient Management en Help Desk die mailboxbewerkingen onafhankelijk regelen. Een Global Admin krijgt Exchange-toegang via een achterdeur — Entra koppelt het achter de schermen — maar dat is niet hetzelfde als begrijpen wat elke Exchange-rolgroep daadwerkelijk toestaat. Dan zijn er application access policies, die de meeste tenants nooit configureren. Standaard kan elke app met mailboxpermissies elke mailbox lezen. Elke. Deze post behandelt Exchange RBAC, application access policies, Graph-permissiescoping, en hoe je het geheel auditeert zodat verouderde toewijzingen niet je volgende beveiligingsincident worden.'
    },
    sections: [
      {
        title: {
          en: 'Exchange RBAC: How It Actually Works',
          nl: 'Exchange RBAC: Hoe Het Echt Werkt'
        },
        content: {
          en: 'Exchange RBAC predates Entra ID. It was built for on-premises Exchange and carried over to Exchange Online mostly unchanged. The core concept: role groups contain management roles, and management roles define what actions a member can take. Organization Management is the top-level group — full control over Exchange. Recipient Management handles mailbox creation, distribution lists, contacts. Help Desk covers password resets and basic mailbox properties. There are about a dozen built-in role groups, and you can create custom ones.\n\nThe catch is that Entra ID roles and Exchange role groups overlap in confusing ways. Global Admin maps to Organization Management. Exchange Admin maps to... also Organization Management. But Recipient Administrator in Entra maps to Recipient Management in Exchange. The mapping is not always intuitive. If you need fine-grained control — say, letting a team manage distribution lists but not transport rules — you need to work directly in Exchange Admin Center or PowerShell. Entra ID roles are too coarse for that.',
          nl: 'Exchange RBAC is ouder dan Entra ID. Het was gebouwd voor on-premises Exchange en is grotendeels ongewijzigd overgenomen in Exchange Online. Het basisconcept: rolgroepen bevatten beheerrollen, en beheerrollen definiëren welke acties een lid kan uitvoeren. Organization Management is de topgroep — volledige controle over Exchange. Recipient Management regelt het aanmaken van mailboxen, distributielijsten en contacten. Help Desk dekt wachtwoordresets en basismailboxeigenschappen. Er zijn ongeveer twaalf ingebouwde rolgroepen, en je kunt er zelf aanmaken.\n\nHet lastige is dat Entra ID-rollen en Exchange-rolgroepen op verwarrende manieren overlappen. Global Admin koppelt aan Organization Management. Exchange Admin koppelt aan... ook Organization Management. Maar Recipient Administrator in Entra koppelt aan Recipient Management in Exchange. De mapping is niet altijd logisch. Heb je fijnmazige controle nodig — bijvoorbeeld een team distributielijsten laten beheren maar geen transportregels — dan moet je direct in Exchange Admin Center of PowerShell werken. Entra ID-rollen zijn daar te grof voor.'
        },
        callout: {
          type: 'info',
          title: 'Key point',
          content: 'Exchange RBAC is <strong>separate</strong> from Entra ID roles. A Global Admin gets Exchange access indirectly, but Exchange-specific role groups give you granular control over mailbox operations.'
        },
        code: {
          language: 'powershell',
          title: 'List Exchange role group members',
          code: '# Connect to Exchange Online\nConnect-ExchangeOnline -UserPrincipalName admin@contoso.com\n\n# List all role group members\nGet-RoleGroupMember -Identity "Organization Management"\n\n# Check a specific user\'s roles\nGet-ManagementRoleAssignment -RoleAssignee "user@contoso.com"'
        }
      },
      {
        title: {
          en: 'Application Access Policies',
          nl: 'Application Access Policies'
        },
        content: {
          en: 'Here is the thing that keeps security teams up at night. When you grant an app the full_access_as_app permission — or even Mail.Read at the application level — that app can read every mailbox in your tenant. Not just the ones it needs. All of them. CEO mailbox, HR mailbox, legal mailbox. Everything.\n\nApplication access policies fix this. They scope an app\'s access to a specific mail-enabled security group. You create the group, add the mailboxes the app should access, then create the policy. Any mailbox outside that group becomes invisible to the app. Fair warning: the policy can take up to 30 minutes to propagate, and it only works for EWS and certain REST API calls. But it is the only tenant-level control you have for limiting app-only mailbox access.\n\nThe setup is straightforward. Create a mail-enabled security group in Exchange or Entra. Add your target mailboxes as members. Then use New-ApplicationAccessPolicy with the app\'s client ID, the group, and RestrictAccess as the access right. Test it with Test-ApplicationAccessPolicy to confirm the restriction works before calling it done.',
          nl: 'Dit is wat beveiligingsteams wakker houdt. Wanneer je een app de full_access_as_app-permissie geeft — of zelfs Mail.Read op applicatieniveau — kan die app elke mailbox in je tenant lezen. Niet alleen de benodigde. Allemaal. CEO-mailbox, HR-mailbox, juridische mailbox. Alles.\n\nApplication access policies lossen dit op. Ze beperken de toegang van een app tot een specifieke mail-enabled security group. Je maakt de groep aan, voegt de mailboxen toe die de app nodig heeft, en maakt dan het beleid aan. Elke mailbox buiten die groep wordt onzichtbaar voor de app. Let op: het beleid kan tot 30 minuten duren om door te voeren, en het werkt alleen voor EWS en bepaalde REST API-aanroepen. Maar het is de enige tenant-level controle die je hebt om app-only mailboxtoegang te beperken.\n\nDe configuratie is eenvoudig. Maak een mail-enabled security group aan in Exchange of Entra. Voeg je doelmailboxen toe als leden. Gebruik dan New-ApplicationAccessPolicy met het client-ID van de app, de groep, en RestrictAccess als toegangsrecht. Test het met Test-ApplicationAccessPolicy om te bevestigen dat de beperking werkt voordat je het afrondt.'
        },
        callout: {
          type: 'warning',
          title: 'Warning',
          content: 'Without an access policy, <strong>any app with EWS or Graph mailbox permissions can read all mailboxes</strong> in your tenant. This is the default. You have to explicitly restrict it.'
        },
        code: {
          language: 'powershell',
          title: 'Create an application access policy',
          code: '# Create a mail-enabled security group first\n# Add only the mailboxes the app should access\n\n# Create the access policy\nNew-ApplicationAccessPolicy \\\n  -AppId "your-app-client-id" \\\n  -PolicyScopeGroupId "allowed-mailboxes@contoso.com" \\\n  -AccessRight RestrictAccess \\\n  -Description "Restrict CRM app to sales mailboxes"\n\n# Test the policy (may take 30 min to propagate)\nTest-ApplicationAccessPolicy \\\n  -Identity "user@contoso.com" \\\n  -AppId "your-app-client-id"',
          collapsed: true
        }
      },
      {
        title: {
          en: 'Scoping App-Only Access with Microsoft Graph',
          nl: 'App-Only Toegang Beperken met Microsoft Graph'
        },
        content: {
          en: 'Graph permissions come in two flavors: delegated and application. Delegated permissions act on behalf of a signed-in user — the app can only access what that user can access. Application permissions are different. They operate without a user context, and by default, they apply to every resource of that type in the tenant.\n\nSo Mail.Read with application permission means the app can read mail for every user. Mail.ReadWrite means it can read and modify mail for every user. The permission names sound reasonable until you realize the scope is tenant-wide.\n\nEven with least-privilege Graph permissions, app-only access defaults to all mailboxes. There is no way to scope it down in the Graph permission itself. Application access policies are your only option for EWS and certain Graph endpoints. Microsoft has been talking about resource-specific consent for Graph mail APIs, but as of early 2026, application access policies remain the primary mechanism. If your app only needs to read mail from five service accounts, you need a policy. No exceptions.',
          nl: 'Graph-permissies komen in twee smaken: gedelegeerd en applicatie. Gedelegeerde permissies handelen namens een ingelogde gebruiker — de app heeft alleen toegang tot wat die gebruiker kan. Applicatiepermissies zijn anders. Ze werken zonder gebruikerscontext en zijn standaard van toepassing op elke resource van dat type in de tenant.\n\nDus Mail.Read met applicatiepermissie betekent dat de app mail kan lezen van elke gebruiker. Mail.ReadWrite betekent dat het mail kan lezen en wijzigen van elke gebruiker. De permissienamen klinken redelijk totdat je beseft dat het bereik tenant-breed is.\n\nZelfs met least-privilege Graph-permissies is app-only toegang standaard alle mailboxen. Er is geen manier om het te beperken in de Graph-permissie zelf. Application access policies zijn je enige optie voor EWS en bepaalde Graph-endpoints. Microsoft praat al langer over resource-specific consent voor Graph mail-API\'s, maar begin 2026 blijven application access policies het primaire mechanisme. Als je app alleen mail hoeft te lezen van vijf serviceaccounts, heb je een beleid nodig. Geen uitzonderingen.'
        },
        code: {
          language: 'bash',
          title: 'Test Graph mailbox access',
          code: '# Get an app-only token\nTOKEN=$(curl -s -X POST \\\n  "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token" \\\n  -d "client_id={app_id}" \\\n  -d "scope=https://graph.microsoft.com/.default" \\\n  -d "client_secret={secret}" \\\n  -d "grant_type=client_credentials" | jq -r .access_token)\n\n# Try reading a mailbox (should fail if policy blocks it)\ncurl -s -H "Authorization: Bearer $TOKEN" \\\n  "https://graph.microsoft.com/v1.0/users/user@contoso.com/messages?\\$top=1"',
          collapsed: true
        }
      },
      {
        title: {
          en: 'Auditing Current Role Assignments',
          nl: 'Huidige Roltoewijzingen Auditen'
        },
        content: {
          en: 'Most tenants have stale Exchange admin assignments. People leave, change roles, get promoted — but their Exchange role group memberships stick around. Nobody reviews them because nobody thinks about Exchange RBAC as a separate thing from Entra ID.\n\nThe audit is simple but tedious to do manually. Get-RoleGroup lists every role group. Get-RoleGroupMember lists the members of each. Pipe it all into a CSV and you have a snapshot. Cross-reference with Entra ID to find accounts that have been disabled or deleted but still appear in Exchange role groups. Those are your red flags.\n\nThe script below exports every role group membership to a CSV. Run it quarterly at minimum. Better yet, automate it — which is what the next section covers.',
          nl: 'De meeste tenants hebben verouderde Exchange-admintoewijzingen. Mensen vertrekken, wisselen van rol, krijgen promotie — maar hun Exchange-rolgroeplidmaatschappen blijven hangen. Niemand reviewt ze omdat niemand Exchange RBAC als iets aparts ziet van Entra ID.\n\nDe audit is simpel maar vervelend om handmatig te doen. Get-RoleGroup toont elke rolgroep. Get-RoleGroupMember toont de leden van elk. Stuur alles naar een CSV en je hebt een momentopname. Vergelijk met Entra ID om accounts te vinden die zijn uitgeschakeld of verwijderd maar nog steeds in Exchange-rolgroepen staan. Dat zijn je rode vlaggen.\n\nHet script hieronder exporteert elk rolgroeplidmaatschap naar een CSV. Voer het minimaal elk kwartaal uit. Beter nog: automatiseer het — wat het volgende deel behandelt.'
        },
        code: {
          language: 'powershell',
          title: 'Audit all Exchange admin assignments',
          code: '# Export all role group memberships\n$roleGroups = Get-RoleGroup\nforeach ($group in $roleGroups) {\n    $members = Get-RoleGroupMember -Identity $group.Name\n    foreach ($member in $members) {\n        [PSCustomObject]@{\n            RoleGroup = $group.Name\n            Member    = $member.Name\n            Type      = $member.RecipientType\n        }\n    }\n} | Export-Csv -Path "ExchangeRBAC-Audit.csv" -NoTypeInformation\n\nWrite-Host "Exported to ExchangeRBAC-Audit.csv"',
          collapsed: true
        }
      },
      {
        title: {
          en: 'Automation: Scheduled RBAC Reviews',
          nl: 'Automatisering: Geplande RBAC-Reviews'
        },
        content: {
          en: 'Manual audits are better than nothing, but they happen once and get forgotten. Azure Automation with a managed identity is the right tool here. Set up a runbook that connects to Exchange Online using a system-assigned managed identity — no credentials to rotate. Schedule it monthly. The runbook pulls all role group memberships, compares against a baseline, and emails the results to your security team.\n\nLogic Apps work as a trigger alternative if your team prefers low-code. A recurrence trigger fires the runbook, and a condition step flags any new assignments that were not in the previous month\'s report. The goal is catching drift before it becomes a security incident. Someone gets added to Organization Management for a migration project and never gets removed. That is the kind of thing that shows up in a breach investigation six months later.',
          nl: 'Handmatige audits zijn beter dan niets, maar ze gebeuren eenmalig en worden vergeten. Azure Automation met een managed identity is hier het juiste gereedschap. Stel een runbook in dat verbinding maakt met Exchange Online via een system-assigned managed identity — geen credentials om te roteren. Plan het maandelijks. Het runbook haalt alle rolgroeplidmaatschappen op, vergelijkt met een baseline, en mailt de resultaten naar je beveiligingsteam.\n\nLogic Apps werkt als trigger-alternatief als je team low-code prefereert. Een recurrence-trigger start het runbook, en een conditiestap markeert nieuwe toewijzingen die niet in het rapport van vorige maand stonden. Het doel is drift opvangen voordat het een beveiligingsincident wordt. Iemand wordt toegevoegd aan Organization Management voor een migratieproject en wordt nooit verwijderd. Dat is het soort ding dat zes maanden later opduikt in een onderzoek na een inbraak.'
        },
        code: {
          language: 'powershell',
          title: 'Azure Automation runbook for monthly RBAC review',
          code: '# Runbook: Review-ExchangeRBAC\n# Trigger: Monthly schedule via Azure Automation\n# Auth: System-assigned managed identity\n\nConnect-ExchangeOnline -ManagedIdentity -Organization "contoso.onmicrosoft.com"\n\n$report = @()\n$roleGroups = Get-RoleGroup\nforeach ($group in $roleGroups) {\n    $members = Get-RoleGroupMember -Identity $group.Name\n    foreach ($member in $members) {\n        $report += [PSCustomObject]@{\n            RoleGroup  = $group.Name\n            Member     = $member.Name\n            Type       = $member.RecipientType\n            AuditDate  = (Get-Date).ToString("yyyy-MM-dd")\n        }\n    }\n}\n\n# Send results via Graph (or store in blob)\n$body = $report | ConvertTo-Html -Fragment\nSend-MailMessage -To "security@contoso.com" \\\n  -Subject "Monthly Exchange RBAC Review" \\\n  -Body $body -BodyAsHtml',
          collapsed: true
        }
      }
    ],
    conclusion: {
      en: 'Exchange RBAC is one of those things that flies under the radar until something goes wrong. Most tenants have more Exchange admins than they need and zero application access policies. That is a wide-open surface. Start with the audit — export your role group memberships and look for stale accounts. Then check your app registrations: any app with Mail.Read or full_access_as_app at the application level needs an access policy. Automate the review so it happens monthly, not just when an auditor asks. The PowerShell is straightforward. The hard part is making it a habit.',
      nl: 'Exchange RBAC is een van die dingen die onder de radar vliegt totdat er iets misgaat. De meeste tenants hebben meer Exchange-admins dan nodig en nul application access policies. Dat is een wagenwijd open aanvalsoppervlak. Begin met de audit — exporteer je rolgroeplidmaatschappen en zoek naar verouderde accounts. Controleer dan je app-registraties: elke app met Mail.Read of full_access_as_app op applicatieniveau heeft een access policy nodig. Automatiseer de review zodat het maandelijks gebeurt, niet alleen wanneer een auditor erom vraagt. De PowerShell is eenvoudig. Het moeilijke is er een gewoonte van maken.'
    }
  }
};
