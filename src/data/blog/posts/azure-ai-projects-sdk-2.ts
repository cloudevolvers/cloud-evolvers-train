import type { BlogPost } from '../types';

export const azureAiProjectsSdk2Post: BlogPost = {
  id: 'azure-ai-projects-sdk-2',
  title: {
    en: 'azure-ai-projects 2.0 GA: One SDK, No More azure-ai-agents Dependency',
    nl: 'azure-ai-projects 2.0 GA: één SDK, geen azure-ai-agents-afhankelijkheid meer'
  },
  description: {
    en: 'The Foundry SDK reached 2.0 GA across Python, JS/TS, Java, and .NET. Everything lives under AIProjectClient — and the migration from 1.x is small but worth doing now.',
    nl: 'De Foundry SDK bereikte 2.0 GA in Python, JS/TS, Java en .NET. Alles staat onder AIProjectClient — en de migratie vanaf 1.x is klein maar nu het moment om te doen.'
  },
  date: '2026-04-04',
  author: 'Yair Knijn',
  tags: ['Azure', 'AI Foundry', 'SDK', 'Python', 'TypeScript'],
  image: '/images/pexels/pexels-developer-coding-setup.jpg',
  excerpt: {
    en: 'If you have been on azure-ai-projects 1.x and azure-ai-agents as a separate package, the 2.0 release collapses the surface into one client. The migration is mechanical, the cleanup is real.',
    nl: 'Zit je op azure-ai-projects 1.x en azure-ai-agents als apart pakket, dan klapt de 2.0-release het oppervlak samen in één client. De migratie is mechanisch, de opruiming is echt.'
  },
  category: {
    en: 'AI & Automation',
    nl: 'AI & Automatisering'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'The azure-ai-projects SDK reached general availability at version 2.0 across Python, JS/TS, Java, and .NET (with .NET landing on April 1). The big structural change: the azure-ai-agents dependency is gone. Everything — agents, threads, runs, model inference, file management — lives under AIProjectClient now. For teams who built on the 1.x line, the migration is small. For teams starting fresh, the surface area is finally simple enough to teach in a single session.',
      nl: 'De azure-ai-projects SDK bereikte algemene beschikbaarheid op versie 2.0 in Python, JS/TS, Java en .NET (met .NET op 1 april). De grote structurele verandering: de azure-ai-agents-afhankelijkheid is weg. Alles — agents, threads, runs, model-inference, bestandsbeheer — staat nu onder AIProjectClient. Voor teams die op de 1.x-lijn bouwden is de migratie klein. Voor teams die fresh starten is het oppervlak eindelijk simpel genoeg om in één sessie uit te leggen.'
    },
    sections: [
      {
        title: {
          en: 'What 2.0 actually changes',
          nl: 'Wat 2.0 echt verandert'
        },
        content: {
          en: 'In 1.x you imported azure-ai-projects for project-level operations and azure-ai-agents for agent operations, with subtle inconsistencies between the two surfaces. In 2.0 there is one client (AIProjectClient) with sub-clients for each capability area: client.agents, client.inference, client.evaluations, client.indexes. The naming is more consistent, async is first-class everywhere, and a class of "wait, where does this method live" questions just goes away.',
          nl: 'In 1.x importeerde je azure-ai-projects voor project-level operaties en azure-ai-agents voor agent-operaties, met subtiele inconsistenties tussen de twee oppervlakken. In 2.0 is er één client (AIProjectClient) met sub-clients per capability-area: client.agents, client.inference, client.evaluations, client.indexes. De naamgeving is consistenter, async is overal first-class, en een hele klasse "wacht, waar woont deze methode" vragen verdwijnt.'
        },
        code: {
          language: 'python',
          code: `# 1.x — two packages, two clients
from azure.ai.projects import AIProjectClient
from azure.ai.agents import AgentsClient

project = AIProjectClient(endpoint=ENDPOINT, credential=cred)
agents = AgentsClient(endpoint=ENDPOINT, credential=cred)

agent = agents.create_agent(model="gpt-5", instructions="...")

# 2.0 — one package, one client
from azure.ai.projects import AIProjectClient

project = AIProjectClient(endpoint=ENDPOINT, credential=cred)
agent = project.agents.create_agent(model="gpt-5", instructions="...")`
        }
      },
      {
        title: {
          en: 'Migration is mostly mechanical',
          nl: 'De migratie is grotendeels mechanisch'
        },
        content: {
          en: 'For most codebases, the migration from 1.x to 2.0 is: drop the azure-ai-agents dependency, change AgentsClient calls to project.agents calls, and update import statements. Method signatures are largely the same. The places to look carefully are around evaluations and threads, which got minor signature changes — read the migration guide for those two areas before relying on the codemod tools. A small project takes an afternoon; a large one takes a week.',
          nl: 'Voor de meeste codebases is de migratie van 1.x naar 2.0: drop de azure-ai-agents-afhankelijkheid, vervang AgentsClient-calls door project.agents-calls, en werk import statements bij. Methode-signatures zijn grotendeels hetzelfde. Waar je goed moet kijken is rondom evaluations en threads, die kleine signature-wijzigingen kregen — lees de migratiegids voor die twee gebieden voordat je op codemod-tools vertrouwt. Een klein project kost een middag; een groot project een week.'
        }
      },
      {
        title: {
          en: 'Why now is the right moment to migrate',
          nl: 'Waarom dit het juiste moment is om te migreren'
        },
        content: {
          en: 'Microsoft has stated that new Foundry capabilities ship in 2.x first, with backports to 1.x at their discretion and never to azure-ai-agents. Voice Live, the new MAI model integrations, and several Agent Service Standard Setup primitives are 2.x-only. Staying on 1.x means accepting that you will be the team manually backporting examples and stitching together docs. The cost of migrating now is much lower than the cost of doing it under pressure when you need a 2.x-only feature.',
          nl: 'Microsoft heeft aangegeven dat nieuwe Foundry-capabilities eerst in 2.x landen, met backports naar 1.x naar eigen goeddunken en nooit meer naar azure-ai-agents. Voice Live, de nieuwe MAI-modelintegraties en verschillende Agent Service Standard Setup-primitives zijn 2.x-only. Op 1.x blijven betekent accepteren dat jouw team de voorbeelden handmatig backport en docs aan elkaar plakt. De kosten van nu migreren zijn veel lager dan onder druk migreren omdat je een 2.x-only feature nodig hebt.'
        }
      },
      {
        title: {
          en: 'What to test before merging',
          nl: 'Wat te testen voor de merge'
        },
        content: {
          en: 'Smoke-test against the same agent definition you have today. Make sure your evaluations still produce comparable scores — the underlying scorers are the same, but slight serialization differences in 2.x have caused diffing surprises in early adopter reports. If you depend on streaming responses, test those explicitly: streaming got a small API cleanup that breaks the iteration pattern in 1.x for some clients. Beyond those two areas, expect a quiet upgrade.',
          nl: 'Doe een smoke-test tegen dezelfde agent-definitie die je vandaag hebt. Verzeker je ervan dat je evaluations nog steeds vergelijkbare scores opleveren — de onderliggende scorers zijn hetzelfde, maar kleine serialisatieverschillen in 2.x hebben in early-adopter-rapporten voor diff-verrassingen gezorgd. Hang je af van streaming responses, test die expliciet: streaming kreeg een kleine API-opschoning die het iteratie-patroon in 1.x voor sommige clients breekt. Buiten die twee gebieden mag je een rustige upgrade verwachten.'
        }
      }
    ],
    conclusion: {
      en: 'azure-ai-projects 2.0 GA is a quiet release with real cleanup. One client, no orphan dependencies, async everywhere. Migrate now while the upgrade is mechanical instead of waiting until you need a 2.x-only feature on a deadline. The teams that move this quarter will spend less time fighting their SDK and more time shipping agents.',
      nl: 'azure-ai-projects 2.0 GA is een rustige release met echte opschoning. Één client, geen orphan-afhankelijkheden, async overal. Migreer nu zolang de upgrade mechanisch is in plaats van wachten tot je een 2.x-only feature nodig hebt op een deadline. De teams die dit kwartaal bewegen besteden minder tijd aan vechten met hun SDK en meer aan agents leveren.'
    }
  }
};
