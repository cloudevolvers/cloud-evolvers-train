import type { BlogPost } from '../types';

export const entraAgentIdPost: BlogPost = {
  id: 'entra-agent-id-security',
  title: {
    en: 'Microsoft Entra Agent ID: Identity and Access Control for AI Agents',
    nl: 'Microsoft Entra Agent ID: Identiteit en toegangsbeheer voor AI-agents'
  },
  description: {
    en: 'Microsoft Entra Agent ID extends conditional access, identity protection, and governance to AI agents. Currently in preview, it treats agents as first-class identities with enforceable security policies.',
    nl: 'Microsoft Entra Agent ID breidt conditional access, identiteitsbeveiliging en governance uit naar AI-agents. Momenteel in preview, behandelt het agents als volwaardige identiteiten met afdwingbare beveiligingsregels.'
  },
  date: '2026-03-09',
  author: 'Yair Knijn',
  tags: ['Microsoft Entra', 'AI Agents', 'Security', 'Identity', 'Conditional Access'],
  image: '/images/pexels/pexels-artificial-intelligence-robot.jpg',
  excerpt: {
    en: 'AI agents are getting their own identities in Entra ID. Conditional access, risk detection, lifecycle governance — the same controls you apply to users now apply to agents. Here is how it works and what to prepare for.',
    nl: 'AI-agents krijgen hun eigen identiteiten in Entra ID. Conditional access, risicodetectie, levenscyclusgovernance — dezelfde controles die je op gebruikers toepast, gelden nu voor agents. Zo werkt het en hoe je je kunt voorbereiden.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'AI agents are multiplying fast. Every team wants one. Sales wants an agent that reads CRM data. Support wants one that triages tickets. Finance wants one that pulls reporting data. Each of these agents needs access to company resources — and right now, most organizations handle that with service principals or managed identities that were designed for traditional applications, not autonomous AI.\n\nMicrosoft Entra Agent ID changes that. Currently in preview, it extends Entra\'s identity capabilities directly to AI agents. Conditional access, identity protection, governance, network controls — all of it applies to agents the same way it applies to users. The pitch is simple: if an agent acts like a user, secure it like a user.',
      nl: 'AI-agents vermenigvuldigen zich snel. Elk team wil er een. Sales wil een agent die CRM-data leest. Support wil er een die tickets triageert. Finance wil er een die rapportagedata ophaalt. Elk van deze agents heeft toegang nodig tot bedrijfsresources — en op dit moment handelen de meeste organisaties dat af met service principals of managed identities die ontworpen zijn voor traditionele applicaties, niet voor autonome AI.\n\nMicrosoft Entra Agent ID verandert dat. Momenteel in preview, breidt het Entra\'s identiteitsmogelijkheden rechtstreeks uit naar AI-agents. Conditional access, identiteitsbeveiliging, governance, netwerkcontroles — alles is van toepassing op agents op dezelfde manier als op gebruikers. De boodschap is simpel: als een agent zich gedraagt als een gebruiker, beveilig hem dan als een gebruiker.'
    },
    sections: [
      {
        title: {
          en: 'What Entra Agent ID Actually Is',
          nl: 'Wat Entra Agent ID eigenlijk is'
        },
        content: {
          en: 'Agent ID is a new identity type in Entra. Not a service principal. Not a managed identity. A distinct object type designed for AI agents that operate with some degree of autonomy.\n\nThe difference matters. Service principals represent applications. Managed identities represent Azure resources. Neither concept maps well to an AI agent that makes decisions, calls APIs based on context, and operates in multi-step workflows without direct human oversight for every action.\n\nAgent ID gives each agent a proper identity in your directory. That identity can be assigned roles, scoped to specific resources, subjected to conditional access policies, and monitored by identity protection. It also integrates with the Security Dashboard for AI, which entered preview in March 2026 — giving security teams a single view of agent activity alongside user activity.\n\nThe identity platform component is aimed at developers building agents. You register the agent identity, configure what it can access, and the platform handles token issuance, consent, and lifecycle. Agents built on Azure AI Foundry, Copilot Studio, or custom frameworks can all use Agent ID as their identity layer.',
          nl: 'Agent ID is een nieuw identiteitstype in Entra. Geen service principal. Geen managed identity. Een apart objecttype ontworpen voor AI-agents die met een zekere mate van autonomie werken.\n\nHet verschil is belangrijk. Service principals vertegenwoordigen applicaties. Managed identities vertegenwoordigen Azure-resources. Geen van beide concepten past goed bij een AI-agent die beslissingen neemt, API\'s aanroept op basis van context, en in meerstaps-workflows opereert zonder direct menselijk toezicht op elke actie.\n\nAgent ID geeft elke agent een volwaardige identiteit in je directory. Die identiteit kan rollen krijgen, worden beperkt tot specifieke resources, worden onderworpen aan conditional access-beleid en worden gemonitord door identiteitsbeveiliging. Het integreert ook met het Security Dashboard for AI, dat in maart 2026 in preview ging — waardoor beveiligingsteams agentactiviteit en gebruikersactiviteit in een enkel overzicht zien.\n\nHet identiteitsplatformonderdeel is gericht op ontwikkelaars die agents bouwen. Je registreert de agentidentiteit, configureert wat het kan benaderen, en het platform regelt tokenuitgifte, consent en levenscyclus. Agents gebouwd op Azure AI Foundry, Copilot Studio of custom frameworks kunnen allemaal Agent ID gebruiken als hun identiteitslaag.'
        },
        callout: {
          type: 'info',
          title: 'Preview status',
          content: 'Entra Agent ID is currently in preview. Features and APIs may change before general availability. Plan pilots, not production rollouts.'
        }
      },
      {
        title: {
          en: 'Conditional Access for Agents',
          nl: 'Conditional Access voor Agents'
        },
        content: {
          en: 'This is where it gets practical. Conditional access policies can now target agent identities. You can require specific conditions before an agent gets a token — network location, risk level, custom security attributes, or compliance state.\n\nMicrosoft ships managed policies that block high-risk agents automatically. If identity protection flags an agent identity as compromised — unusual API call patterns, access from unexpected networks, privilege escalation attempts — the managed policy blocks further token issuance until an admin investigates.\n\nCustom security attributes let you tag agents at scale. Tag agents by department, data sensitivity level, or business function. Then write conditional access policies against those tags. All agents tagged "finance-data-access" must connect from the corporate network. All agents tagged "customer-pii" require a compliant host. This scales better than writing individual policies per agent.\n\nThe risk evaluation is adaptive. It considers the agent\'s historical behavior, the sensitivity of the resource it is requesting, and the current threat landscape for your tenant. A sudden spike in API calls from an agent that normally makes a few requests per hour will trigger a risk signal.',
          nl: 'Hier wordt het praktisch. Conditional access-beleid kan nu gericht worden op agentidentiteiten. Je kunt specifieke voorwaarden eisen voordat een agent een token krijgt — netwerklocatie, risiconiveau, custom security attributes of compliancestatus.\n\nMicrosoft levert managed policies die risicovolle agents automatisch blokkeren. Als identiteitsbeveiliging een agentidentiteit als gecompromitteerd markeert — ongebruikelijke API-aanroeppatronen, toegang vanuit onverwachte netwerken, privilege-escalatiepogingen — blokkeert het managed beleid verdere tokenuitgifte totdat een admin onderzoek doet.\n\nCustom security attributes laten je agents op schaal taggen. Tag agents op afdeling, datagevoeligheidsniveau of bedrijfsfunctie. Schrijf dan conditional access-beleid tegen die tags. Alle agents getagd met "finance-data-access" moeten verbinden vanuit het bedrijfsnetwerk. Alle agents getagd met "customer-pii" vereisen een compliant host. Dit schaalt beter dan individueel beleid per agent schrijven.\n\nDe risicobeoordeling is adaptief. Het houdt rekening met het historische gedrag van de agent, de gevoeligheid van de gevraagde resource en het huidige dreigingslandschap voor je tenant. Een plotselinge piek in API-aanroepen van een agent die normaal een paar verzoeken per uur doet, triggert een risicosignaal.'
        },
        code: {
          language: 'json',
          title: 'Conditional access policy targeting agents (conceptual)',
          code: '{\n  "displayName": "Require corporate network for finance agents",\n  "conditions": {\n    "clientApplications": {\n      "includeAgents": {\n        "customSecurityAttributes": {\n          "department": "finance-data-access"\n        }\n      }\n    },\n    "locations": {\n      "includeLocations": ["AllTrusted"],\n      "excludeLocations": []\n    }\n  },\n  "grantControls": {\n    "builtInControls": ["compliantDevice"]\n  }\n}',
          collapsed: true
        }
      },
      {
        title: {
          en: 'Identity Protection and Risk Detection',
          nl: 'Identiteitsbeveiliging en risicodetectie'
        },
        content: {
          en: 'Identity Protection for agents works the same way as for users, with detection models tuned for agent behavior patterns. The system watches for anomalies: an agent accessing resources it has never touched before, tokens being used from unexpected IP ranges, unusual timing patterns, or attempts to request higher privileges than assigned.\n\nWhen a risk is detected, the response is automatic. Low risk might trigger additional logging. Medium risk could restrict the agent to read-only operations. High risk blocks the agent entirely and alerts the security team. These responses are configurable — you set the thresholds and actions.\n\nThe integration with Security Dashboard for AI (also in March 2026 preview) gives you a consolidated view. You see agent identities alongside user identities, with risk scores, recent activity, and policy compliance. This matters because agent compromises look different from user compromises. A compromised user might exfiltrate data manually. A compromised agent can do it at API speed.\n\nOne gap to be aware of: detection models for agents are still learning. The baseline for "normal agent behavior" takes time to establish. Early adopters should expect some tuning of risk thresholds as the models mature.',
          nl: 'Identity Protection voor agents werkt hetzelfde als voor gebruikers, met detectiemodellen afgestemd op gedragspatronen van agents. Het systeem let op anomalieën: een agent die resources benadert die hij nog nooit heeft aangeraakt, tokens die worden gebruikt vanuit onverwachte IP-reeksen, ongebruikelijke timingpatronen, of pogingen om hogere privileges aan te vragen dan toegewezen.\n\nWanneer een risico wordt gedetecteerd, is de respons automatisch. Laag risico kan extra logging triggeren. Gemiddeld risico kan de agent beperken tot alleen-lezen bewerkingen. Hoog risico blokkeert de agent volledig en waarschuwt het beveiligingsteam. Deze reacties zijn configureerbaar — jij stelt de drempels en acties in.\n\nDe integratie met Security Dashboard for AI (ook in maart 2026 preview) geeft je een geconsolideerd overzicht. Je ziet agentidentiteiten naast gebruikersidentiteiten, met risicoscores, recente activiteit en beleidsconformiteit. Dit is belangrijk omdat agentcompromissen er anders uitzien dan gebruikerscompromissen. Een gecompromitteerde gebruiker kan handmatig data exfiltreren. Een gecompromitteerde agent kan dat op API-snelheid.\n\nEen hiaat om bewust van te zijn: detectiemodellen voor agents leren nog. De baseline voor "normaal agentgedrag" kost tijd om vast te stellen. Early adopters moeten wat afstemming van risicodrempels verwachten naarmate de modellen volwassen worden.'
        },
        callout: {
          type: 'warning',
          title: 'Speed of compromise',
          content: 'A compromised AI agent can exfiltrate data at API speed — thousands of requests per minute. Response automation is not optional; manual review is too slow.'
        }
      },
      {
        title: {
          en: 'The Developer Platform: Building Agents with Proper Identity',
          nl: 'Het ontwikkelplatform: agents bouwen met goede identiteit'
        },
        content: {
          en: 'For developers, Agent ID provides an identity platform you register against. The flow: create an agent identity in Entra, assign it the minimum necessary permissions, configure conditional access policies, and use the Entra token endpoint to get tokens for your agent.\n\nThe platform handles consent flows. If your agent needs to access a user\'s calendar, the user (or an admin) grants consent to the agent identity — same pattern as app consent today, but the consent screen explicitly identifies the requestor as an AI agent. Users see what data the agent can access and what actions it can take.\n\nLifecycle management is built in. When a project ends, you disable or delete the agent identity. Access reviews can include agent identities, so quarterly reviews catch agents that still have access to resources they no longer need. Entitlement management lets you create access packages for agents — predefined bundles of permissions that agents can request through an approval workflow.\n\nThe SDK supports agents built on any framework. Azure AI Foundry agents, Copilot Studio agents, LangChain agents, custom Python agents — if it can call a token endpoint, it can use Agent ID. The identity layer is decoupled from the agent framework.',
          nl: 'Voor ontwikkelaars biedt Agent ID een identiteitsplatform waartegen je registreert. De flow: maak een agentidentiteit aan in Entra, wijs de minimaal noodzakelijke permissies toe, configureer conditional access-beleid, en gebruik het Entra-tokenendpoint om tokens voor je agent te krijgen.\n\nHet platform regelt consentflows. Als je agent toegang nodig heeft tot de agenda van een gebruiker, verleent de gebruiker (of een admin) consent aan de agentidentiteit — hetzelfde patroon als app-consent vandaag, maar het consentscherm identificeert de aanvrager expliciet als AI-agent. Gebruikers zien welke data de agent kan benaderen en welke acties het kan uitvoeren.\n\nLevenscyclusbeheer is ingebouwd. Als een project eindigt, schakel je de agentidentiteit uit of verwijder je deze. Access reviews kunnen agentidentiteiten bevatten, zodat kwartaalreviews agents opvangen die nog toegang hebben tot resources die ze niet meer nodig hebben. Entitlement management laat je toegangspakketten maken voor agents — voorgedefinieerde bundels permissies die agents kunnen aanvragen via een goedkeuringsworkflow.\n\nDe SDK ondersteunt agents gebouwd op elk framework. Azure AI Foundry-agents, Copilot Studio-agents, LangChain-agents, custom Python-agents — als het een tokenendpoint kan aanroepen, kan het Agent ID gebruiken. De identiteitslaag is losgekoppeld van het agentframework.'
        },
        code: {
          language: 'python',
          title: 'Acquiring a token for an agent identity',
          code: 'from azure.identity import ClientSecretCredential\n\n# Agent identity registered in Entra\nagent_credential = ClientSecretCredential(\n    tenant_id="your-tenant-id",\n    client_id="agent-client-id",\n    client_secret="agent-secret"  # Use managed identity in production\n)\n\n# Get token scoped to Microsoft Graph\ntoken = agent_credential.get_token("https://graph.microsoft.com/.default")\n\n# Agent requests are subject to:\n# - Conditional access policies targeting this agent\n# - Identity protection risk evaluation\n# - Network location restrictions\n# - Custom security attribute requirements',
          collapsed: true
        }
      },
      {
        title: {
          en: 'Why This Matters Now',
          nl: 'Waarom dit nu belangrijk is'
        },
        content: {
          en: 'The timing is not accidental. Organizations are deploying agents faster than security teams can review them. A developer spins up an agent with a service principal, grants it broad Graph permissions, and ships it. Nobody applies conditional access because the service principal model was not built for that kind of policy enforcement on autonomous workloads.\n\nAgent ID forces the conversation. When you register an agent identity, you go through the same security posture evaluation as a user identity. What can it access? Under what conditions? What happens when it behaves abnormally? These questions have answers in the Entra framework. They did not have answers in the service principal model.\n\nThe preview status means you should not bet production workloads on it yet. But you should start planning. Inventory your current agents. Figure out which ones use service principals with overly broad permissions. Map out which conditional access policies you would apply if you could. When Agent ID goes GA, you want to be ready to migrate — not starting from scratch.\n\nThe organizations that get ahead of this will be the ones who treat agent identity as a security requirement, not an afterthought. Every agent should have a named identity, scoped permissions, conditional access policies, and a defined lifecycle. Agent ID makes that possible. The question is whether your team will use it.',
          nl: 'De timing is niet toevallig. Organisaties deployen agents sneller dan beveiligingsteams ze kunnen reviewen. Een ontwikkelaar start een agent op met een service principal, geeft brede Graph-permissies, en levert het op. Niemand past conditional access toe omdat het service principal-model niet gebouwd was voor dat soort beleidshandhaving op autonome workloads.\n\nAgent ID dwingt het gesprek af. Wanneer je een agentidentiteit registreert, doorloop je dezelfde beveiligingspostuur-evaluatie als bij een gebruikersidentiteit. Wat kan het benaderen? Onder welke voorwaarden? Wat gebeurt er als het zich abnormaal gedraagt? Deze vragen hebben antwoorden in het Entra-framework. Ze hadden geen antwoorden in het service principal-model.\n\nDe preview-status betekent dat je er nog geen productie-workloads op moet laten draaien. Maar je moet wel beginnen met plannen. Inventariseer je huidige agents. Zoek uit welke service principals gebruiken met te brede permissies. Breng in kaart welke conditional access-beleidsregels je zou toepassen als je kon. Als Agent ID GA gaat, wil je klaar zijn om te migreren — niet vanaf nul beginnen.\n\nDe organisaties die hierop voorlopen zijn degenen die agentidentiteit behandelen als een beveiligingsvereiste, niet als een bijzaak. Elke agent zou een benoemde identiteit, afgebakende permissies, conditional access-beleid en een gedefinieerde levenscyclus moeten hebben. Agent ID maakt dat mogelijk. De vraag is of je team het gaat gebruiken.'
        }
      }
    ],
    conclusion: {
      en: 'Entra Agent ID fills a real gap. Service principals and managed identities were never designed for autonomous AI workloads that make context-dependent decisions. Agent ID gives you the same security controls for agents that you have for users: conditional access, risk-based protection, lifecycle governance, and audit trails. The preview is the time to explore it. Map your current agent landscape, identify the high-risk ones, and start planning policies. When this goes GA, the organizations that already have an agent identity strategy will be months ahead of the ones scrambling to retrofit security onto agents already in production.',
      nl: 'Entra Agent ID vult een echte leemte. Service principals en managed identities zijn nooit ontworpen voor autonome AI-workloads die contextafhankelijke beslissingen nemen. Agent ID geeft je dezelfde beveiligingscontroles voor agents als voor gebruikers: conditional access, risicogebaseerde bescherming, levenscyclusgovernance en audittrails. De preview is het moment om het te verkennen. Breng je huidige agentlandschap in kaart, identificeer de risicovolle, en begin met het plannen van beleid. Als dit GA gaat, zijn de organisaties die al een agentidentiteitsstrategie hebben maanden voorop ten opzichte van degenen die zich haasten om beveiliging achteraf toe te voegen aan agents die al in productie draaien.'
    }
  }
};
