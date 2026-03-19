import type { BlogPost } from '../types';

export const mandatoryMfaEnforcementPost: BlogPost = {
  id: 'azure-mandatory-mfa-enforcement-2025',
  title: {
    en: 'Mandatory MFA for Azure Portal: What You Need to Know in 2025',
    nl: 'Verplichte MFA voor Azure Portal: Wat Je Moet Weten in 2025'
  },
  description: {
    en: 'Microsoft is enforcing mandatory MFA for all Azure portal and admin center access. Learn the timeline, requirements, and how to prepare your organization',
    nl: 'Microsoft dwingt verplichte MFA af voor alle Azure portal en admin center toegang. Leer de tijdlijn, vereisten en hoe je je organisatie voorbereidt'
  },
  date: '2025-12-04',
  author: 'Yair Knijn',
  tags: ['Azure', 'MFA', 'Security', 'Compliance', 'Entra ID'],
  image: '/images/unsplash/compliance-governance-audit.jpg',
  excerpt: {
    en: 'Microsoft is rolling out mandatory MFA enforcement for Azure portal, Microsoft 365 admin center, and other admin portals. Is your organization ready?',
    nl: 'Microsoft rolt verplichte MFA-handhaving uit voor Azure portal, Microsoft 365 admin center en andere admin portals. Is je organisatie voorbereid?'
  },
  category: {
    en: 'Security & Compliance',
    nl: 'Beveiliging & Compliance'
  },
  readTime: 10,
  content: {
    introduction: {
      en: 'Microsoft made MFA mandatory for Azure portal, Microsoft 365 admin center, and Entra admin center. Not optional, not recommended — mandatory. The rollout started in late 2024 and by mid-2025 it hit all tenants. If you have not set up MFA yet, your users are getting blocked right now. This is a good move — password-only access to admin portals was a liability — but it caught a lot of organizations off guard, especially those with service accounts and automation scripts that sign in interactively.',
      nl: 'Microsoft heeft MFA verplicht gemaakt voor Azure portal, Microsoft 365 admin center en Entra admin center. Niet optioneel, niet aanbevolen — verplicht. De uitrol begon eind 2024 en halverwege 2025 waren alle tenants aan de beurt. Heb je nog geen MFA ingesteld? Dan worden je gebruikers nu geblokkeerd. Dit is een goede zet — wachtwoord-only toegang tot admin portals was een risico — maar het overviel veel organisaties, vooral die met serviceaccounts en automatiseringsscripts die interactief inloggen.'
    },
    sections: [
      {
        title: {
          en: 'What is Being Enforced?',
          nl: 'Wat Wordt Er Afgedwongen?'
        },
        content: {
          en: 'Microsoft is requiring MFA for all users signing into: Azure portal (portal.azure.com), Microsoft 365 admin center (admin.microsoft.com), Microsoft Entra admin center (entra.microsoft.com), and Intune admin center. This applies to all user accounts - not just administrators. Any user accessing these portals must complete MFA, regardless of their role or permissions.',
          nl: 'Microsoft vereist MFA voor alle gebruikers die inloggen op: Azure portal (portal.azure.com), Microsoft 365 admin center (admin.microsoft.com), Microsoft Entra admin center (entra.microsoft.com), en Intune admin center. Dit geldt voor alle gebruikersaccounts - niet alleen administrators. Elke gebruiker die deze portals bezoekt moet MFA voltooien, ongeacht hun rol of permissies.'
        }
      },
      {
        title: {
          en: 'Timeline and Rollout Phases',
          nl: 'Tijdlijn en Uitrolfases'
        },
        content: {
          en: 'Microsoft began enforcement in phases starting late 2024. Phase 1 covered Azure portal for users without existing MFA policies. Phase 2 expanded to Microsoft 365 admin center in early 2025. By mid-2025, enforcement became universal for all tenants. Check your Message Center in Microsoft 365 admin center for specific dates applicable to your tenant. Some tenants received postponement options, but these have largely expired.',
          nl: 'Microsoft begon met handhaving in fases vanaf eind 2024. Fase 1 betrof Azure portal voor gebruikers zonder bestaande MFA-policies. Fase 2 werd uitgebreid naar Microsoft 365 admin center begin 2025. Halverwege 2025 werd handhaving universeel voor alle tenants. Controleer je Message Center in Microsoft 365 admin center voor specifieke datums die van toepassing zijn op jouw tenant. Sommige tenants kregen uitstel-opties, maar deze zijn grotendeels verlopen.'
        }
      },
      {
        title: {
          en: 'Acceptable MFA Methods',
          nl: 'Geaccepteerde MFA Methoden'
        },
        content: {
          en: 'Microsoft accepts various MFA methods for portal access: Microsoft Authenticator app (push notifications or TOTP codes), FIDO2 security keys, Windows Hello for Business, SMS verification (though not recommended for security reasons), voice call verification, and hardware OATH tokens. For the strongest security posture, deploy phishing-resistant methods like FIDO2 or passkeys rather than relying on SMS.',
          nl: 'Microsoft accepteert verschillende MFA-methoden voor portal-toegang: Microsoft Authenticator app (push-notificaties of TOTP-codes), FIDO2 security keys, Windows Hello for Business, SMS-verificatie (hoewel niet aanbevolen om beveiligingsredenen), spraakoproep-verificatie en hardware OATH-tokens. Voor de sterkste beveiligingshouding, deploy phishing-bestendige methoden zoals FIDO2 of passkeys in plaats van afhankelijk te zijn van SMS.'
        }
      },
      {
        title: {
          en: 'Impact on Service Accounts and Automation',
          nl: 'Impact op Serviceaccounts en Automatisering'
        },
        content: {
          en: 'Service accounts and automation scripts that access admin portals interactively will be affected. Best practices: Migrate to service principals with certificates for Azure automation, use managed identities wherever possible, avoid interactive logins in automation scripts, review Azure CLI and PowerShell scripts that prompt for credentials. For Azure CLI, use az login --service-principal with certificate authentication.',
          nl: 'Serviceaccounts en automatiseringsscripts die admin portals interactief benaderen worden geraakt. Best practices: Migreer naar service principals met certificaten voor Azure-automatisering, gebruik managed identities waar mogelijk, vermijd interactieve logins in automatiseringsscripts, review Azure CLI en PowerShell-scripts die om credentials vragen. Voor Azure CLI, gebruik az login --service-principal met certificaat-authenticatie.'
        },
        code: {
          language: 'bash',
          code: `# Azure CLI service principal login with certificate
az login --service-principal \\
  --username <app-id> \\
  --tenant <tenant-id> \\
  --password /path/to/certificate.pem

# Or use managed identity on Azure resources
az login --identity`
        }
      },
      {
        title: {
          en: 'Preparing Your Organization',
          nl: 'Je Organisatie Voorbereiden'
        },
        content: {
          en: 'Take these steps to prepare: 1) Audit which users access admin portals using sign-in logs, 2) Ensure all users have MFA methods registered - check the Authentication methods activity report, 3) Create Conditional Access policies that require MFA for admin portals (this gives you control over enforcement), 4) Communicate the change to affected users with instructions for registering MFA, 5) Test break-glass accounts to ensure emergency access remains available.',
          nl: 'Neem deze stappen om voor te bereiden: 1) Audit welke gebruikers admin portals benaderen met sign-in logs, 2) Zorg dat alle gebruikers MFA-methoden geregistreerd hebben - controleer het Authentication methods activity-rapport, 3) Maak Conditional Access-policies die MFA vereisen voor admin portals (dit geeft je controle over handhaving), 4) Communiceer de wijziging naar getroffen gebruikers met instructies voor MFA-registratie, 5) Test break-glass accounts om te zorgen dat noodtoegang beschikbaar blijft.'
        }
      },
      {
        title: {
          en: 'Conditional Access vs Security Defaults',
          nl: 'Conditional Access vs Security Defaults'
        },
        content: {
          en: 'Organizations have two paths: Security Defaults (free, basic protection for all users) or Conditional Access (requires Entra ID P1/P2, granular control). If you have Conditional Access policies requiring MFA for admin portals, Microsofts enforcement wont change your experience. If you rely on Security Defaults, MFA is already required. The enforcement primarily affects organizations with neither - they will be forced into MFA regardless of existing configuration.',
          nl: 'Organisaties hebben twee paden: Security Defaults (gratis, basisbescherming voor alle gebruikers) of Conditional Access (vereist Entra ID P1/P2, granulaire controle). Als je Conditional Access-policies hebt die MFA vereisen voor admin portals, verandert Microsofts handhaving je ervaring niet. Als je afhankelijk bent van Security Defaults, is MFA al vereist. De handhaving raakt primair organisaties met geen van beide - zij worden gedwongen tot MFA ongeacht bestaande configuratie.'
        }
      },
      {
        title: {
          en: 'Exemptions and Edge Cases',
          nl: 'Uitzonderingen en Edge Cases'
        },
        content: {
          en: 'Some scenarios have limited exemptions: Emergency access (break-glass) accounts should use FIDO2 keys stored securely, not exemptions. B2B guest users from tenants with their own MFA may satisfy requirements through cross-tenant trust. Workload identities (service principals, managed identities) are not affected - only user accounts. If you believe you need an exemption, contact Microsoft support, but expect very limited flexibility.',
          nl: 'Sommige scenarios hebben beperkte uitzonderingen: Emergency access (break-glass) accounts moeten FIDO2-sleutels gebruiken die veilig zijn opgeslagen, geen uitzonderingen. B2B-gastgebruikers van tenants met hun eigen MFA kunnen aan vereisten voldoen via cross-tenant trust. Workload identities (service principals, managed identities) worden niet geraakt - alleen gebruikersaccounts. Als je denkt dat je een uitzondering nodig hebt, neem contact op met Microsoft support, maar verwacht zeer beperkte flexibiliteit.'
        }
      },
      {
        title: {
          en: 'Monitoring Compliance',
          nl: 'Compliance Monitoren'
        },
        content: {
          en: 'Monitor your organizations MFA readiness using: Entra ID > Protection > Authentication methods > Activity to see registration status, Sign-in logs filtered for admin portal applications to identify non-MFA sign-ins, Microsoft Secure Score recommendations for MFA coverage, and the MFA registration campaign feature to prompt unregistered users.',
          nl: 'Monitor de MFA-gereedheid van je organisatie met: Entra ID > Protection > Authentication methods > Activity om registratiestatus te zien, Sign-in logs gefilterd voor admin portal-applicaties om non-MFA sign-ins te identificeren, Microsoft Secure Score-aanbevelingen voor MFA-dekking, en de MFA registration campaign-functie om niet-geregistreerde gebruikers te vragen.'
        }
      }
    ],
    conclusion: {
      en: 'If your org already had MFA policies in place, nothing changes for you. If not, act now — your admins and users will get locked out otherwise. While you are at it, do not stop at basic MFA. SMS codes are better than nothing, but they are still vulnerable to SIM-swapping and phishing. Set up FIDO2 keys or passkeys for your admins at minimum. And go audit your automation scripts — any script that does `az login` interactively will break. Switch those to service principals or managed identities.',
      nl: 'Had je organisatie al MFA-policies? Dan verandert er niets. Zo niet, handel nu — je admins en gebruikers worden anders buitengesloten. En als je toch bezig bent, stop niet bij basis-MFA. SMS-codes zijn beter dan niets, maar ze zijn nog steeds kwetsbaar voor SIM-swapping en phishing. Stel minstens FIDO2-keys of passkeys in voor je admins. En ga je automatiseringsscripts auditen — elk script dat interactief `az login` doet gaat stuk. Zet die om naar service principals of managed identities.'
    }
  }
};
