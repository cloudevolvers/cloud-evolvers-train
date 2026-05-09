import type { BlogPost } from '../types';

export const azureM365ComplianceReadinessGetStartedPost: BlogPost = {
  id: 'azure-m365-compliance-readiness-get-started',
  title: {
    en: 'Azure and Microsoft 365 Compliance Readiness: How to Get Started',
    nl: 'Azure en Microsoft 365 Compliance Readiness: hoe je start'
  },
  description: {
    en: 'A practical first scan for Azure and Microsoft 365 teams dealing with DORA, NIS2, NIST CSF, CIS Controls, Secure Score, Defender for Cloud, and Purview Compliance Manager.',
    nl: 'Een praktische eerste scan voor Azure en Microsoft 365 teams die bezig zijn met DORA, NIS2, NIST CSF, CIS Controls, Secure Score, Defender for Cloud en Purview Compliance Manager.'
  },
  date: '2026-05-09',
  author: 'Yair Knijn',
  tags: ['Azure', 'Microsoft 365', 'DORA', 'NIS2', 'NIST', 'CIS', 'Security'],
  image: '/images/unsplash/compliance-governance-audit.jpg',
  excerpt: {
    en: 'Do not start compliance work with a giant spreadsheet. Start with the Microsoft systems that already know where the gaps are: Defender for Cloud, Secure Score, Purview Compliance Manager, Entra ID, and Azure Policy.',
    nl: 'Begin compliancewerk niet met een gigantische spreadsheet. Begin met de Microsoft-systemen die de gaps al kennen: Defender for Cloud, Secure Score, Purview Compliance Manager, Entra ID en Azure Policy.'
  },
  category: {
    en: 'Security & Compliance',
    nl: 'Beveiliging & Compliance'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Most Azure and Microsoft 365 teams get pulled into compliance work the wrong way. Someone asks for DORA, NIS2, NIST CSF, CIS Controls, ISO 27001, or SOC 2 evidence, and the team opens a spreadsheet before looking at the tenant. That is backwards. The fastest first step is a readiness scan: what can we prove today, what is missing, and which fixes reduce the most risk this month.',
      nl: 'Veel Azure en Microsoft 365 teams worden op de verkeerde manier compliancewerk ingetrokken. Iemand vraagt om DORA, NIS2, NIST CSF, CIS Controls, ISO 27001 of SOC 2 evidence, en het team opent een spreadsheet voordat iemand naar de tenant kijkt. Dat is omgekeerd. De snelste eerste stap is een readiness scan: wat kunnen we vandaag aantonen, wat mist er, en welke fixes verlagen deze maand het meeste risico.'
    },
    sections: [
      {
        title: {
          en: 'This is evidence-readiness, not certification',
          nl: 'Dit is evidence-readiness, geen certificering'
        },
        content: {
          en: 'A scan does not make you DORA compliant, NIST certified, or audit-ready by itself. It gives you a defensible starting point. The output should show findings, affected systems, evidence sources, framework mappings, owners, and the next remediation step. That is enough to get moving without pretending the work is done.',
          nl: 'Een scan maakt je niet automatisch DORA compliant, NIST certified of audit-ready. Het geeft je een verdedigbaar startpunt. De output moet bevindingen, geraakte systemen, evidence bronnen, framework mapping, eigenaren en de volgende remediation stap tonen. Dat is genoeg om te starten zonder te doen alsof het werk klaar is.'
        }
      },
      {
        title: {
          en: 'Azure checks to run first',
          nl: 'Azure checks om eerst te draaien'
        },
        content: {
          en: 'Start with Defender for Cloud regulatory compliance, Microsoft Cloud Security Benchmark recommendations, Azure Policy compliance, Key Vault recovery settings, secret and certificate expiry, public network exposure, storage security, diagnostic settings, Activity Log alerts, backup posture, and Entra app registrations. These checks catch the gaps that usually hurt during a review: no owner, no logs, no rotation, no alert, no evidence.',
          nl: 'Begin met Defender for Cloud regulatory compliance, Microsoft Cloud Security Benchmark recommendations, Azure Policy compliance, Key Vault recovery settings, secret en certificate expiry, public network exposure, storage security, diagnostic settings, Activity Log alerts, backup posture en Entra app registrations. Deze checks vinden de gaps die meestal pijn doen tijdens een review: geen eigenaar, geen logs, geen rotation, geen alert, geen evidence.'
        }
      },
      {
        title: {
          en: 'Microsoft 365 checks to run first',
          nl: 'Microsoft 365 checks om eerst te draaien'
        },
        content: {
          en: 'For Microsoft 365, start with Secure Score, Defender XDR recommendations, Purview Compliance Manager, Conditional Access, MFA, privileged accounts, risky users, Exchange protection, Teams guest access, SharePoint and OneDrive external sharing, audit logging, retention, DLP, and sensitivity labels. If Copilot is in scope, also check oversharing and label coverage before rollout.',
          nl: 'Voor Microsoft 365 begin je met Secure Score, Defender XDR recommendations, Purview Compliance Manager, Conditional Access, MFA, privileged accounts, risky users, Exchange protection, Teams guest access, SharePoint en OneDrive external sharing, audit logging, retention, DLP en sensitivity labels. Als Copilot in scope is, controleer dan ook oversharing en label coverage voor de uitrol.'
        }
      },
      {
        title: {
          en: 'The framework map',
          nl: 'De framework mapping'
        },
        content: {
          en: 'DORA is the strongest angle for financial entities and ICT third-party risk. NIS2 is broader and applies to many essential and important entities in the EU. NIST CSF 2.0 gives management language across Govern, Identify, Protect, Detect, Respond, and Recover. CIS Controls gives the practical implementation checklist. Microsoft Cloud Security Benchmark, Secure Score, Defender for Cloud, and Purview Compliance Manager turn those ideas into tenant-level evidence.',
          nl: 'DORA is de sterkste hoek voor financiele instellingen en ICT third-party risk. NIS2 is breder en raakt veel essentiele en belangrijke entiteiten in de EU. NIST CSF 2.0 geeft managementtaal voor Govern, Identify, Protect, Detect, Respond en Recover. CIS Controls geeft de praktische implementatiechecklist. Microsoft Cloud Security Benchmark, Secure Score, Defender for Cloud en Purview Compliance Manager zetten die ideeen om naar tenant-level evidence.'
        }
      },
      {
        title: {
          en: 'What Cloud Evolvers can do',
          nl: 'Wat Cloud Evolvers kan doen'
        },
        content: {
          en: 'We can run the first Azure and Microsoft 365 readiness scan, write the evidence map, fix the highest-risk gaps with your admins, and turn the findings into training. That can be a one-day scan, a five-day remediation sprint, a monthly evidence pulse, or a workshop for Azure, Microsoft 365, Entra, Defender, Purview, Sentinel, and Copilot admins.',
          nl: 'We kunnen de eerste Azure en Microsoft 365 readiness scan draaien, de evidence map schrijven, de hoogste risico-gaps samen met je beheerders oplossen, en de bevindingen omzetten naar training. Dat kan een eendaagse scan zijn, een vijfdaagse remediation sprint, een maandelijkse evidence pulse, of een workshop voor Azure, Microsoft 365, Entra, Defender, Purview, Sentinel en Copilot beheerders.'
        }
      },
      {
        title: {
          en: 'How to get started',
          nl: 'Hoe je start'
        },
        content: {
          en: 'Pick the scope first: Azure, Microsoft 365, or both. Then pick the pressure: DORA, NIS2, NIST CSF, CIS Controls, ISO 27001, SOC 2, or not sure yet. On the first call we confirm tenant size, industry, deadline, access model, and what evidence already exists. The first useful deliverable is not a huge report. It is the top findings, the evidence gaps, and the next fixes in order.',
          nl: 'Kies eerst de scope: Azure, Microsoft 365 of allebei. Kies daarna de druk: DORA, NIS2, NIST CSF, CIS Controls, ISO 27001, SOC 2 of nog niet zeker. In het eerste gesprek bevestigen we tenantgrootte, industrie, deadline, toegangsmodel en welke evidence al bestaat. De eerste nuttige deliverable is geen gigantisch rapport. Het zijn de belangrijkste bevindingen, de evidence gaps en de volgende fixes op volgorde.'
        }
      }
    ],
    conclusion: {
      en: 'If you are starting from zero, do not try to boil the compliance ocean. Run one Azure and Microsoft 365 readiness pass, map it to the framework that matters, fix the highest-risk items, and repeat monthly. That rhythm beats a theoretical compliance program that nobody updates.',
      nl: 'Als je vanaf nul start, probeer dan niet het hele complianceprobleem in een keer op te lossen. Draai een Azure en Microsoft 365 readiness pass, map die op het framework dat ertoe doet, fix de hoogste risico-items en herhaal maandelijks. Dat ritme wint van een theoretisch complianceprogramma dat niemand bijwerkt.'
    }
  }
};
