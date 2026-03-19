import type { BlogPost } from '../types';

export const m365CopilotGpt5AgentsPost: BlogPost = {
  id: 'm365-copilot-gpt5-declarative-agents',
  title: {
    en: 'Microsoft 365 Copilot Declarative Agents Now Run on GPT-5',
    nl: 'Microsoft 365 Copilot declaratieve agents draaien nu op GPT-5'
  },
  description: {
    en: 'Since January 2026, Microsoft 365 Copilot agents use GPT-5 as their underlying model. Learn how Agent Builder, Copilot Business pricing, and connected agents reshape M365 automation.',
    nl: 'Sinds januari 2026 gebruiken Microsoft 365 Copilot-agents GPT-5 als onderliggend model. Leer hoe Agent Builder, Copilot Business-prijzen en connected agents M365-automatisering hervormen.'
  },
  date: '2026-03-18',
  author: 'Yair Knijn',
  tags: ['Microsoft 365', 'Copilot', 'GPT-5', 'AI', 'Agents', 'Productivity'],
  image: '/images/pexels/pexels-artificial-intelligence-robot.jpg',
  excerpt: {
    en: 'GPT-5 is now the default model powering M365 Copilot declarative agents. Combined with Agent Builder, Copilot Business at $21/user/month, and connected agents for multi-agent orchestration, this changes what is practical for business automation in Microsoft 365.',
    nl: 'GPT-5 is nu het standaardmodel achter M365 Copilot declaratieve agents. In combinatie met Agent Builder, Copilot Business voor $21/gebruiker/maand en connected agents voor multi-agent-orchestratie verandert dit wat praktisch haalbaar is voor bedrijfsautomatisering in Microsoft 365.'
  },
  category: {
    en: 'AI & Automation',
    nl: 'AI & Automatisering'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'As of January 2026, Microsoft 365 Copilot declarative agents run on GPT-5 as their underlying chat model. This is not a minor engine swap: GPT-5 brings measurably better reasoning, more natural language understanding, and improved multi-step processing compared to its predecessor. For organizations already building declarative agents through M365 Copilot, the upgrade is automatic. For those considering it, the combination of a stronger model, a lower-cost Business SKU, and new orchestration capabilities makes this a good moment to evaluate. This article covers what changed, what it costs, and how to take advantage of it.',
      nl: 'Sinds januari 2026 draaien Microsoft 365 Copilot declaratieve agents op GPT-5 als onderliggend chatmodel. Dit is geen kleine motorwissel: GPT-5 levert meetbaar betere redenering, natuurlijker taalbegrip en verbeterde meerstapsverwerking vergeleken met zijn voorganger. Voor organisaties die al declaratieve agents bouwen via M365 Copilot is de upgrade automatisch. Voor wie het overweegt, maakt de combinatie van een sterker model, een goedkopere Business-SKU en nieuwe orchestratiemogelijkheden dit een goed moment om te evalueren. Dit artikel behandelt wat er is veranderd, wat het kost en hoe je er gebruik van kunt maken.'
    },
    sections: [
      {
        title: {
          en: 'GPT-5 in Microsoft 365 Copilot: What Actually Changed',
          nl: 'GPT-5 in Microsoft 365 Copilot: wat er daadwerkelijk is veranderd'
        },
        content: {
          en: 'GPT-5 became generally available in Copilot Studio for EU and US regions in November 2025, and Microsoft rolled it out as the default model for M365 Copilot agents in January 2026. The practical differences are most visible in three areas. First, advanced reasoning: agents handle multi-step queries more reliably, such as "find all contracts expiring this quarter, summarize the renewal terms, and draft reminder emails to each vendor." Previously, this kind of chain would often lose context by the third step. Second, language understanding is more natural — agents parse ambiguous phrasing and domain-specific jargon with fewer misinterpretations. Third, multi-step processing is faster and more consistent, which matters when agents need to pull data from multiple Microsoft Graph endpoints and synthesize the results into a single response.',
          nl: 'GPT-5 werd in november 2025 algemeen beschikbaar in Copilot Studio voor EU- en US-regio\'s, en Microsoft heeft het in januari 2026 uitgerold als het standaardmodel voor M365 Copilot-agents. De praktische verschillen zijn het meest zichtbaar op drie gebieden. Ten eerste, geavanceerde redenering: agents verwerken meerstapsquery\'s betrouwbaarder, zoals "vind alle contracten die dit kwartaal aflopen, vat de verlengingsvoorwaarden samen en stel herinneringsmails op voor elke leverancier." Eerder verloor dit soort ketens vaak de context bij de derde stap. Ten tweede is het taalbegrip natuurlijker — agents ontleden dubbelzinnige formuleringen en domeinspecifiek jargon met minder misinterpretaties. Ten derde is de meerstapsverwerking sneller en consistenter, wat ertoe doet wanneer agents data moeten ophalen van meerdere Microsoft Graph-endpoints en de resultaten moeten samenvoegen tot één reactie.'
        }
      },
      {
        title: {
          en: 'Agent Builder: Creating Declarative Agents in M365 Copilot',
          nl: 'Agent Builder: declaratieve agents maken in M365 Copilot'
        },
        content: {
          en: 'Agent Builder is the built-in tool within M365 Copilot for creating declarative agents without writing code. You define what the agent knows (its domain-specific knowledge sources), what it can do (actions and connectors), and how it should respond (instructions and tone). Agents can access SharePoint libraries, specific documents, or external data through connectors like the Copilot connector for Dropbox. Once created, agents appear in the Copilot Library, where administrators can manage visibility and access across the organization. The key architectural point is that declarative agents do not run custom code — they are configuration-driven definitions that M365 Copilot interprets at runtime. This means every agent automatically benefits from model upgrades like the GPT-5 rollout. When you need capabilities beyond what declarative agents support, such as custom API calls or complex branching logic, you can copy an agent from M365 Copilot into Copilot Studio for further development with the full low-code toolset.',
          nl: 'Agent Builder is de ingebouwde tool binnen M365 Copilot voor het maken van declaratieve agents zonder code te schrijven. Je definieert wat de agent weet (zijn domeinspecifieke kennisbronnen), wat hij kan doen (acties en connectors) en hoe hij moet reageren (instructies en toon). Agents kunnen SharePoint-bibliotheken, specifieke documenten of externe data benaderen via connectors zoals de Copilot-connector voor Dropbox. Eenmaal gemaakt verschijnen agents in de Copilot Library, waar beheerders zichtbaarheid en toegang binnen de organisatie kunnen beheren. Het belangrijkste architectuurpunt is dat declaratieve agents geen aangepaste code draaien — het zijn configuratiegestuurde definities die M365 Copilot tijdens runtime interpreteert. Dit betekent dat elke agent automatisch profiteert van modelupgrades zoals de GPT-5-uitrol. Wanneer je mogelijkheden nodig hebt die verder gaan dan wat declaratieve agents ondersteunen, zoals aangepaste API-aanroepen of complexe vertakkingslogica, kun je een agent kopiëren van M365 Copilot naar Copilot Studio voor verdere ontwikkeling met de volledige low-code toolset.'
        }
      },
      {
        title: {
          en: 'Copilot Business: Pricing and Licensing for SMBs',
          nl: 'Copilot Business: prijzen en licenties voor het MKB'
        },
        content: {
          en: 'Since December 2025, the Copilot Business SKU is available at $21 per user per month for organizations with up to 300 users. This SKU requires a qualifying base license: Microsoft 365 Business Basic, Business Standard, or Business Premium. For organizations renewing existing agreements, Microsoft offers convenience bundles that package Copilot Business with the base license. Promotional pricing between 15% and 35% off has been available for new subscriptions and renewals, though this promotion runs through March 2026. The $21 price point is notable because it brings GPT-5-powered Copilot agents within reach of small and mid-sized businesses that previously found the per-user cost prohibitive. The Business SKU includes the same Agent Builder capabilities and Copilot Library access as the enterprise tier, so SMBs are not getting a stripped-down version.',
          nl: 'Sinds december 2025 is de Copilot Business-SKU beschikbaar voor $21 per gebruiker per maand voor organisaties met maximaal 300 gebruikers. Deze SKU vereist een kwalificerende basislicentie: Microsoft 365 Business Basic, Business Standard of Business Premium. Voor organisaties die bestaande overeenkomsten verlengen, biedt Microsoft convenience-bundels die Copilot Business samen met de basislicentie verpakken. Promotionele kortingen tussen 15% en 35% zijn beschikbaar geweest voor nieuwe abonnementen en verlengingen, hoewel deze promotie loopt tot en met maart 2026. Het prijspunt van $21 is opvallend omdat het GPT-5-aangedreven Copilot-agents binnen bereik brengt van kleine en middelgrote bedrijven die eerder de kosten per gebruiker te hoog vonden. De Business-SKU bevat dezelfde Agent Builder-mogelijkheden en Copilot Library-toegang als de enterprise-variant, dus het MKB krijgt geen uitgeklede versie.'
        }
      },
      {
        title: {
          en: 'Extending Agents: From M365 Copilot to Copilot Studio',
          nl: 'Agents uitbreiden: van M365 Copilot naar Copilot Studio'
        },
        content: {
          en: 'Declarative agents built in M365 Copilot cover a wide range of use cases, but some scenarios require more. The copy-to-Copilot-Studio feature lets you take a working declarative agent and promote it to the full Copilot Studio environment, where you gain access to custom connectors, Power Automate flows, adaptive cards, and advanced conversation design. This is a one-way migration — the agent becomes a Copilot Studio project — but it preserves the knowledge sources, instructions, and configuration you already defined. Copilot Studio also supports the connected agents feature, which enables multi-agent orchestration. A connected agent can delegate subtasks to other agents, each specialized in a different domain. For example, an IT helpdesk agent could route hardware requests to a procurement agent and software access requests to an identity management agent, each handling their part independently. GPT-5 being GA in Copilot Studio for EU and US regions since November 2025 means that these orchestrated agent workflows also benefit from the improved reasoning capabilities.',
          nl: 'Declaratieve agents gebouwd in M365 Copilot dekken een breed scala aan use cases, maar sommige scenario\'s vereisen meer. De kopiëren-naar-Copilot-Studio-functie laat je een werkende declaratieve agent promoveren naar de volledige Copilot Studio-omgeving, waar je toegang krijgt tot aangepaste connectors, Power Automate-flows, adaptive cards en geavanceerd gespreksontwerp. Dit is een eenrichtingsmigratie — de agent wordt een Copilot Studio-project — maar het behoudt de kennisbronnen, instructies en configuratie die je al hebt gedefinieerd. Copilot Studio ondersteunt ook de connected agents-functie, die multi-agent-orchestratie mogelijk maakt. Een connected agent kan subtaken delegeren aan andere agents, elk gespecialiseerd in een ander domein. Een IT-helpdesk-agent zou bijvoorbeeld hardwareverzoeken kunnen doorsturen naar een inkoopagent en softwaretoegangverzoeken naar een identiteitsbeheeragent, waarbij elk hun deel onafhankelijk afhandelt. Dat GPT-5 sinds november 2025 GA is in Copilot Studio voor EU- en US-regio\'s betekent dat deze georkestreerde agent-workflows ook profiteren van de verbeterde redeneermogelijkheden.'
        }
      },
      {
        title: {
          en: 'Enterprise Governance and the Copilot Library',
          nl: 'Enterprise governance en de Copilot Library'
        },
        content: {
          en: 'As organizations deploy more agents, governance becomes critical. The Copilot Library serves as the central catalog where all declarative agents are published, discovered, and managed. Administrators control which agents are available to which users, review agent configurations before publication, and monitor usage. This prevents the "shadow AI" problem where individual teams build unmanaged agents that access sensitive data without oversight. For regulated industries, the Copilot Library provides audit trails showing who created each agent, what data sources it accesses, and when it was last modified. The combination of Agent Builder for creation, Copilot Library for management, and MCP-style governance policies for controlling external connections gives IT departments a complete lifecycle view of AI agents in their M365 environment. Organizations that start with a few targeted agents — say, one for HR policy questions and one for IT troubleshooting — can scale to dozens of domain-specific agents while maintaining centralized control.',
          nl: 'Naarmate organisaties meer agents inzetten, wordt governance cruciaal. De Copilot Library dient als de centrale catalogus waar alle declaratieve agents worden gepubliceerd, ontdekt en beheerd. Beheerders controleren welke agents beschikbaar zijn voor welke gebruikers, beoordelen agentconfiguraties vóór publicatie en monitoren gebruik. Dit voorkomt het "shadow AI"-probleem waarbij individuele teams onbeheerde agents bouwen die zonder toezicht toegang hebben tot gevoelige data. Voor gereguleerde sectoren biedt de Copilot Library audit trails die tonen wie elke agent heeft gemaakt, welke databronnen deze benadert en wanneer deze voor het laatst is gewijzigd. De combinatie van Agent Builder voor creatie, Copilot Library voor beheer en MCP-achtige governancebeleidsregels voor het controleren van externe verbindingen geeft IT-afdelingen een compleet lifecycleoverzicht van AI-agents in hun M365-omgeving. Organisaties die beginnen met een paar gerichte agents — bijvoorbeeld één voor HR-beleidsvragen en één voor IT-probleemoplossing — kunnen opschalen naar tientallen domeinspecifieke agents met behoud van gecentraliseerde controle.'
        }
      }
    ],
    conclusion: {
      en: 'The GPT-5 upgrade to M365 Copilot agents is the kind of improvement that compounds over time: every declarative agent you build today runs on a better model than it did three months ago, with no migration effort. Combined with the accessible Copilot Business pricing at $21/user/month, the Agent Builder for no-code creation, and connected agents for complex orchestration, Microsoft 365 now offers a practical path from simple chatbot-style assistants to multi-agent enterprise workflows. The organizations that will benefit most are those that start building agents now and refine them as the platform matures.',
      nl: 'De GPT-5-upgrade voor M365 Copilot-agents is het soort verbetering dat in de loop van de tijd toeneemt: elke declaratieve agent die je vandaag bouwt, draait op een beter model dan drie maanden geleden, zonder migratiewerk. In combinatie met de toegankelijke Copilot Business-prijs van $21/gebruiker/maand, de Agent Builder voor no-code creatie en connected agents voor complexe orchestratie biedt Microsoft 365 nu een praktisch pad van eenvoudige chatbot-achtige assistenten naar multi-agent enterprise-workflows. De organisaties die het meest profiteren zijn degenen die nu beginnen met het bouwen van agents en deze verfijnen naarmate het platform volwassener wordt.'
    }
  }
};
