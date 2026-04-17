import type { BlogPost } from '../types';

export const foundryAgentPrivateNetworkingPost: BlogPost = {
  id: 'foundry-agent-private-networking',
  title: {
    en: 'Foundry Agent Service Standard Setup: Private Networking, BYO VNet, No Public Egress',
    nl: 'Foundry Agent Service Standard Setup: private networking, BYO VNet, geen public egress'
  },
  description: {
    en: 'Foundry Agent Service now supports a Standard Setup with full private networking — bring your own VNet, container and subnet injection, no agent traffic on the public internet.',
    nl: 'Foundry Agent Service ondersteunt nu een Standard Setup met volledige private networking — bring your own VNet, container en subnet injection, geen agent-verkeer op het publieke internet.'
  },
  date: '2026-04-07',
  author: 'Yair Knijn',
  tags: ['Azure', 'AI Foundry', 'Networking', 'Agents', 'Security'],
  image: '/images/pexels/pexels-network-infrastructure.jpg',
  excerpt: {
    en: 'For regulated industries that wanted Foundry Agents in production, the lack of a real private networking story was the blocker. Standard Setup makes the production deployment look like a normal Azure landing zone pattern.',
    nl: 'Voor gereguleerde sectoren die Foundry Agents in productie wilden, was het ontbreken van een echt private networking-verhaal de blocker. Standard Setup laat de productie-deployment lijken op een normaal Azure landing zone-patroon.'
  },
  category: {
    en: 'Cloud Infrastructure',
    nl: 'Cloud Infrastructuur'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'Foundry Agent Service now supports a Standard Setup deployment mode with full private networking. You bring your own virtual network, agents run in your subscription with container and subnet injection, and there is no public egress from the agent runtime to the internet. For organizations that wanted to deploy AI agents inside an existing Azure landing zone — banks, healthcare, government — this is the configuration that makes the security review actually pass.',
      nl: 'Foundry Agent Service ondersteunt nu een Standard Setup deployment mode met volledige private networking. Je brengt je eigen virtual network mee, agents draaien in jouw subscription met container- en subnet-injection, en er is geen public egress van de agent-runtime naar het internet. Voor organisaties die AI-agents in een bestaand Azure landing zone wilden deployen — banken, zorg, overheid — is dit de configuratie waarmee de security review echt door komt.'
    },
    sections: [
      {
        title: {
          en: 'What "Standard Setup" actually configures',
          nl: 'Wat "Standard Setup" daadwerkelijk configureert'
        },
        content: {
          en: 'Standard Setup deploys the Agent Service runtime into a subnet you control, inside a VNet you own. Outbound calls to Foundry models, tools, and storage all go through private endpoints. The agent runtime container is injected into your subnet, which means your existing NSGs, route tables, and Azure Firewall rules apply. There is no shared multi-tenant ingress to your agents — every request comes from your VNet through a private endpoint. The audit trail records the source subnet, which means you can prove during an audit that nothing left your boundary.',
          nl: 'Standard Setup deployt de Agent Service-runtime in een subnet dat jij beheert, binnen een VNet dat jij bezit. Uitgaande calls naar Foundry-modellen, tools en storage gaan allemaal via private endpoints. De agent runtime-container wordt in jouw subnet geïnjecteerd, wat betekent dat je bestaande NSGs, route tables en Azure Firewall-regels gelden. Er is geen gedeelde multi-tenant ingress naar je agents — elke request komt vanuit jouw VNet via een private endpoint. De audit trail registreert het bron-subnet, wat betekent dat je tijdens een audit kunt aantonen dat niets je boundary heeft verlaten.'
        }
      },
      {
        title: {
          en: 'How it fits into a CAF landing zone',
          nl: 'Hoe het in een CAF landing zone past'
        },
        content: {
          en: 'If you have a Cloud Adoption Framework landing zone with hub-and-spoke, the Agent Service subnet sits in a workload spoke just like any other application subnet. Outbound through the hub firewall, inbound only from approved sources, monitored by your existing log pipeline. The Agent Service-specific pieces — the model deployments, the AI Search index, the storage account for tool state — get private endpoints in the same spoke. Nothing about the network topology has to change to accommodate Foundry agents; you just add the agent workload as a new spoke pattern.',
          nl: 'Heb je een Cloud Adoption Framework landing zone met hub-and-spoke, dan zit het Agent Service-subnet in een workload spoke zoals elk ander applicatiesubnet. Uitgaand via de hub firewall, inkomend alleen vanuit goedgekeurde bronnen, gemonitord door je bestaande log pipeline. De Agent Service-specifieke onderdelen — de model deployments, de AI Search-index, het storage-account voor tool state — krijgen private endpoints in dezelfde spoke. Niets aan de netwerktopologie hoeft te veranderen om Foundry agents in te passen; je voegt de agent workload toe als een nieuw spoke-patroon.'
        },
        code: {
          language: 'bicep',
          code: `// Foundry Agent Service in Standard Setup with subnet injection
resource agentService 'Microsoft.CognitiveServices/accounts@2026-01-01' = {
  name: 'foundry-agent-prod'
  location: location
  kind: 'AIServices'
  identity: { type: 'SystemAssigned' }
  properties: {
    networkAcls: {
      defaultAction: 'Deny'
      virtualNetworkRules: [
        {
          id: agentSubnet.id
          ignoreMissingVnetServiceEndpoint: false
        }
      ]
    }
    publicNetworkAccess: 'Disabled'
    customSubDomainName: 'foundry-agent-prod'
  }
}

resource privateEndpoint 'Microsoft.Network/privateEndpoints@2024-05-01' = {
  name: 'pe-foundry-agent'
  location: location
  properties: {
    subnet: { id: agentSubnet.id }
    privateLinkServiceConnections: [
      {
        name: 'foundry-agent-link'
        properties: {
          privateLinkServiceId: agentService.id
          groupIds: ['account']
        }
      }
    ]
  }
}`
        }
      },
      {
        title: {
          en: 'Cost and operational tradeoffs',
          nl: 'Kosten- en operationele tradeoffs'
        },
        content: {
          en: 'Standard Setup is more expensive than the basic shared deployment because you pay for the dedicated runtime in your subnet, the private endpoints, and the data transfer through your hub firewall. For a single agent serving a single team, this might double the cost compared to the shared model. For multiple production agents at scale, the cost difference shrinks because the runtime is shared across your agents. The right framing is not "Standard Setup costs more" but "Standard Setup is what production looks like" — the basic deployment was always the prototype path.',
          nl: 'Standard Setup is duurder dan de basis shared deployment omdat je betaalt voor de dedicated runtime in je subnet, de private endpoints en het dataverkeer door je hub firewall. Voor één agent die één team bedient kan dit de kosten verdubbelen vergeleken met het shared model. Voor meerdere productieagents op schaal slinkt het kostenverschil omdat de runtime over je agents wordt gedeeld. De juiste framing is niet "Standard Setup kost meer" maar "Standard Setup is hoe productie eruitziet" — de basis deployment was altijd het prototype-pad.'
        }
      },
      {
        title: {
          en: 'When to switch from Basic to Standard',
          nl: 'Wanneer wissel je van Basic naar Standard'
        },
        content: {
          en: 'Switch when the answer to any of these is yes: you are about to put an agent in front of customer data subject to NIS2, DORA, or sector-specific regulation; your security team has flagged shared AI runtimes as an unaccepted risk class; you are deploying to a sovereign or government tenant where public egress is not permitted; or you are running the agent at volume where the cost-per-call argument flips. For experimentation and internal pilots, Basic stays the right choice.',
          nl: 'Wissel zodra het antwoord op één van deze vragen ja is: je gaat een agent voor klantdata zetten die onder NIS2, DORA of sectorspecifieke regelgeving valt; je security-team heeft gedeelde AI-runtimes gemarkeerd als niet-geaccepteerde risicoklasse; je deployt naar een sovereign- of overheids-tenant waar public egress niet is toegestaan; of je draait de agent op een volume waar het cost-per-call-argument omslaat. Voor experimenten en interne pilots blijft Basic de juiste keuze.'
        }
      }
    ],
    conclusion: {
      en: 'Standard Setup is the configuration that makes Foundry Agent Service deployable inside a real Azure landing zone. The Bicep is straightforward, the topology fits the patterns your network team already uses, and the audit story finally has the right shape. If you have been holding off on production agents because the networking story was thin, the blocker is gone.',
      nl: 'Standard Setup is de configuratie die Foundry Agent Service deployable maakt binnen een echte Azure landing zone. De Bicep is rechttoe rechtaan, de topologie past op de patronen die je netwerkteam al gebruikt, en het audit-verhaal heeft eindelijk de goede vorm. Heb je productie-agents uitgesteld omdat het netwerk-verhaal te dun was, dan is de blocker weg.'
    }
  }
};
