import type { BlogPost } from '../types';

export const stackitVsAzureFirstWorkloadPost: BlogPost = {
  id: 'stackit-vs-azure-first-workload',
  title: {
    en: 'First STACKIT workload: what to move, what to leave on Azure',
    nl: 'Eerste STACKIT-workload: wat verplaats je, wat laat je op Azure'
  },
  description: {
    en: 'A short guide for Azure shops asked to put at least one workload on a sovereign European cloud. Pick the workload that stresses jurisdiction the most and the cloud primitives the least.',
    nl: 'Een korte gids voor Azure-omgevingen die gevraagd worden minstens één workload op een soevereine Europese cloud te zetten. Kies de workload die het meest leunt op jurisdictie en het minst op clouddiensten.'
  },
  date: '2026-04-24',
  author: 'Yair Knijn',
  tags: ['STACKIT', 'Azure', 'Sovereign Cloud', 'Migration', 'Architecture'],
  image: '/images/unsplash/cloud-migration-process.jpg',
  excerpt: {
    en: 'Most Dutch IT teams getting asked about STACKIT are not being told to move off Azure. They are being told to prove at least one workload can live on an EU-sovereign cloud. That is a very different problem, and the workload you pick first matters a lot.',
    nl: 'De meeste Nederlandse IT-teams met een STACKIT-vraag krijgen niet te horen dat ze Azure moeten verlaten. Ze moeten kunnen aantonen dat minstens één workload op een EU-soevereine cloud kan draaien. Dat is een heel ander probleem, en welke workload je als eerste kiest maakt veel uit.'
  },
  category: {
    en: 'Cloud & Infrastructure',
    nl: 'Cloud & Infrastructuur'
  },
  readTime: 6,
  content: {
    introduction: {
      en: 'When a Dutch organization gets a sovereignty requirement from a regulator, an auditor, or a parent company, the usual pragmatic answer is not a full cloud exit. It is a proof point: one real workload running on an EU-sovereign cloud, with documented operations, a defined recovery path, and a team that knows what they are doing. STACKIT is one of the platforms that conversation lands on. The question then is which workload you pick to run there first, and the answer is narrower than people expect.',
      nl: 'Als een Nederlandse organisatie een soevereiniteitsvereiste krijgt van een toezichthouder, auditor of moederbedrijf, is het pragmatische antwoord meestal geen volledige cloud-exit. Het is een bewijspunt: één echte workload draaiend op een EU-soevereine cloud, met gedocumenteerde operations, een gedefinieerd herstelpad, en een team dat weet wat het doet. STACKIT is een van de platformen waar dat gesprek op uitkomt. De vraag is dan welke workload je als eerste daarop laat draaien, en het antwoord is smaller dan mensen verwachten.'
    },
    sections: [
      {
        title: {
          en: 'Pick a workload that is heavy on jurisdiction and light on PaaS',
          nl: 'Kies een workload die zwaar leunt op jurisdictie en licht op PaaS'
        },
        content: {
          en: 'The ideal first STACKIT workload has two properties. First, the sovereignty argument for it is genuine: it holds protected data, it is under NIS2 or DORA scope, it processes citizen data for a public sector customer, or a contract explicitly requires EU jurisdiction. Second, it is built on cloud primitives that exist in any modern cloud: VMs, containers, object storage, a standard managed database, a load balancer, straightforward networking. If the workload depends on Azure OpenAI, Fabric, Power Platform, Synapse, or a chain of Microsoft-proprietary PaaS services, it is the wrong candidate. You will spend the whole project rewriting integrations instead of proving sovereignty.',
          nl: 'De ideale eerste STACKIT-workload heeft twee eigenschappen. Ten eerste: het soevereiniteitsargument is echt. Het bevat beschermde data, het valt onder NIS2 of DORA, het verwerkt burgerdata voor een publieke klant, of een contract vereist expliciet EU-jurisdictie. Ten tweede: het is gebouwd op cloudprimitieven die in elke moderne cloud bestaan. VMs, containers, objectopslag, een standaard managed database, een load balancer, simpel netwerk. Leunt de workload op Azure OpenAI, Fabric, Power Platform, Synapse of een keten van Microsoft-proprietary PaaS-diensten, dan is het de verkeerde kandidaat. Je bent het hele project bezig met integraties herschrijven in plaats van soevereiniteit bewijzen.'
        }
      },
      {
        title: {
          en: 'Good first workloads we see in the field',
          nl: 'Goede eerste workloads die we in het veld zien'
        },
        content: {
          en: 'A few patterns repeat. Kubernetes-based internal platforms move well: the cluster is the abstraction, and STACKIT has a managed Kubernetes service that covers the 80 percent case. Document and object storage for archival or regulatory retention moves well: it is an S3-shaped API on both sides and the data at rest is the whole sovereignty concern. Stateful but boring workloads (a Postgres-backed internal app, a reporting database that feeds a public-sector customer, a backup destination that legal wants out of US jurisdiction) move well. Batch and data-processing jobs that read and write object storage move well. What moves badly: anything tightly coupled to Entra ID for end-user identity, anything that calls Azure-native AI services in a hot path, anything whose CI or observability pipeline assumes Azure-specific glue.',
          nl: 'Een paar patronen komen steeds terug. Kubernetes-gebaseerde interne platformen verhuizen goed: het cluster is de abstractie, en STACKIT heeft een managed Kubernetes-dienst die het 80-procent-geval dekt. Document- en objectopslag voor archivering of bewaarplichten verhuist goed: het is aan beide kanten een S3-achtige API en de data at rest is de hele soevereiniteitsvraag. Stateful maar saaie workloads (een Postgres-gebaseerde interne app, een rapportagedatabase die een publieke klant voedt, een backup-bestemming die legal buiten Amerikaanse jurisdictie wil) verhuizen goed. Batch- en dataverwerkingsjobs die objectopslag lezen en schrijven verhuizen goed. Wat slecht verhuist: alles strak gekoppeld aan Entra ID voor eindgebruikeridentiteit, alles dat in een hot path Azure-native AI-diensten aanroept, alles waarvan de CI- of observability-pijplijn uitgaat van Azure-specifieke lijm.'
        }
      },
      {
        title: {
          en: 'Make the identity decision early',
          nl: 'Beslis vroeg over identity'
        },
        content: {
          en: 'The single biggest design choice on a STACKIT workload is how users and service principals authenticate. If the workload has human users on Entra ID, you can federate and keep Entra ID as the IdP; the STACKIT side is then configured to trust it. For machine-to-machine calls, decide whether you want STACKIT-native identities or Entra-issued tokens. Mixing both works, but you have to decide which is canonical per workload. Writing this down on day one prevents a year of confusion about where a service principal is actually defined and who owns its lifecycle.',
          nl: 'De grootste ontwerpkeuze bij een STACKIT-workload is hoe gebruikers en service principals authenticeren. Heeft de workload mensen op Entra ID als gebruikers, dan kun je federeren en Entra ID als IdP houden; de STACKIT-kant wordt dan geconfigureerd om dat te vertrouwen. Voor machine-to-machine calls, beslis of je STACKIT-native identiteiten wilt of Entra-uitgegeven tokens. Beide door elkaar werkt, maar je moet per workload vastleggen welke canoniek is. Dit op dag één opschrijven voorkomt een jaar verwarring over waar een service principal eigenlijk gedefinieerd is en wie de levenscyclus beheert.'
        }
      },
      {
        title: {
          en: 'What success looks like to an auditor',
          nl: 'Hoe succes er voor een auditor uitziet'
        },
        content: {
          en: 'The goal of a first STACKIT workload is not a heroic cloud migration. It is an auditable answer to "can you run regulated work on an EU-sovereign cloud." Success looks like: one real workload in production on STACKIT, with IaC checked in, a documented runbook, a defined DR procedure, named operators who hold the pager, and a cost line in finance. That artifact set is what NIS2 and DORA reviewers actually look at. Pick the workload that gets you to that artifact set with the least rewrite, ship it, and then the next workloads are a template problem rather than a platform problem.',
          nl: 'Het doel van een eerste STACKIT-workload is geen heroïsche cloudmigratie. Het is een controleerbaar antwoord op "kunnen jullie gereguleerd werk op een EU-soevereine cloud draaien". Succes ziet er zo uit: één echte workload in productie op STACKIT, met IaC in versiebeheer, een gedocumenteerde runbook, een gedefinieerde DR-procedure, aangewezen operators die de pager dragen, en een kostenregel in finance. Die set artefacten is wat NIS2- en DORA-beoordelaars daadwerkelijk bekijken. Kies de workload die je met de minste herschrijving tot die artefactenset brengt, lever hem op, en dan zijn de volgende workloads een sjabloonprobleem en geen platformprobleem.'
        }
      }
    ],
    conclusion: {
      en: 'Picking the first STACKIT workload is mostly about discipline. High sovereignty pressure, low PaaS coupling, identity decided up front, operations documented. Teams that keep to that recipe get the sovereignty proof point they need in a quarter. Teams that pick the wrong workload (usually the one the loudest person in the room wanted moved) spend a year on it and still do not have a clean answer for the auditor. If you are about to kick off this project, scope the first workload before anything else.',
      nl: 'De eerste STACKIT-workload kiezen is vooral een kwestie van discipline. Hoge soevereiniteitsdruk, lage PaaS-koppeling, identity vooraf besloten, operations gedocumenteerd. Teams die zich aan dat recept houden hebben het soevereiniteitsbewijspunt dat ze nodig hebben binnen een kwartaal. Teams die de verkeerde workload kiezen (meestal die van de luidste stem in de kamer) zijn er een jaar mee bezig en hebben nog steeds geen schoon antwoord voor de auditor. Sta je op het punt dit project op te starten, scope dan eerst de eerste workload, voor al het andere.'
    }
  }
};
