import type { BlogPost } from '../types';

export const m365E7Agent365Post: BlogPost = {
  id: 'm365-e7-agent-365',
  title: {
    en: 'Microsoft 365 E7 Lands May 1 — and It Brings Agent 365 With It',
    nl: 'Microsoft 365 E7 komt 1 mei — en brengt Agent 365 mee'
  },
  description: {
    en: 'Microsoft 365 E7 bundles E5, Entra Suite, M365 Copilot, and the new Agent 365 control plane into one SKU. Here is what is actually new and what to do about it.',
    nl: 'Microsoft 365 E7 bundelt E5, Entra Suite, M365 Copilot en het nieuwe Agent 365 control plane in één SKU. Wat is er echt nieuw en wat moet je ermee.'
  },
  date: '2026-04-14',
  author: 'Yair Knijn',
  tags: ['Microsoft 365', 'Licensing', 'M365 Copilot', 'Entra Suite', 'Agent 365'],
  image: '/images/pexels/pexels-business-team-meeting.jpg',
  excerpt: {
    en: 'A new top-tier SKU is coming May 1. The pricing story is messy, but the inclusion of Agent 365 as the control plane for AI agents is the part to actually plan for.',
    nl: 'Een nieuwe top-tier SKU komt 1 mei. Het prijsverhaal is rommelig, maar de toevoeging van Agent 365 als control plane voor AI-agents is het deel waar je echt op moet plannen.'
  },
  category: {
    en: 'Microsoft 365',
    nl: 'Microsoft 365'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Beginning May 1, 2026, Microsoft 365 E7 will be available through Cloud Solution Provider channels on monthly, annual, and triennial terms. The bundle: E5 for productivity and security, Entra Suite for identity and access, Microsoft 365 Copilot for AI in the flow of work, and the new Agent 365 as the control plane to govern and scale agents. For most existing E5 customers the licensing math is the obvious thing to look at — but it is not the most interesting thing in the announcement.',
      nl: 'Vanaf 1 mei 2026 is Microsoft 365 E7 beschikbaar via Cloud Solution Provider-kanalen op maand-, jaar- en driejarige termijnen. De bundel: E5 voor productiviteit en security, Entra Suite voor identity en access, Microsoft 365 Copilot voor AI in het werk, en het nieuwe Agent 365 als control plane om agents te governen en te schalen. Voor de meeste bestaande E5-klanten is de licensing-rekensom het voor de hand liggende ding om naar te kijken — maar niet het interessantste deel van de aankondiging.'
    },
    sections: [
      {
        title: {
          en: 'What is in the bundle',
          nl: 'Wat zit er in de bundel'
        },
        content: {
          en: 'E7 is purely a packaging move on the existing E5, Entra Suite, and Copilot SKUs — none of those products are changing. Agent 365 is the new piece. Microsoft is positioning it as the equivalent of what Intune is for devices: a single management plane to register, govern, secure, and observe AI agents — built-in agents from Microsoft, declarative agents you build in Copilot Studio, and third-party agents your team buys or builds. Think of it as enterprise IT management for the agent inventory you are about to have.',
          nl: 'E7 is puur een packaging-zet op de bestaande E5-, Entra Suite- en Copilot-SKUs — geen van die producten verandert. Agent 365 is het nieuwe stuk. Microsoft positioneert het als wat Intune is voor devices: één management plane om AI-agents te registreren, te governen, te beveiligen en te observeren — ingebouwde agents van Microsoft, declarative agents die je bouwt in Copilot Studio, en third-party agents die je team koopt of bouwt. Zie het als enterprise IT-beheer voor de agent-inventory die je binnenkort hebt.'
        }
      },
      {
        title: {
          en: 'Why Agent 365 matters now',
          nl: 'Waarom Agent 365 nu telt'
        },
        content: {
          en: 'Most organizations that turn on M365 Copilot and Copilot Studio end up within months with a sprawl of agents — built by power users, by lines of business, by IT, by external partners. Without a control plane this becomes the Excel macro problem of the AI era: nobody knows what runs where, what data it touches, or who owns it when it breaks. Agent 365 is Microsoft saying "we noticed". It plugs into Entra ID, Purview, and Defender so the same access reviews, DLP rules, and audit trails you already use for users apply to agents.',
          nl: 'De meeste organisaties die M365 Copilot en Copilot Studio aanzetten zitten binnen maanden met een wildgroei aan agents — gebouwd door power users, door business units, door IT, door externe partners. Zonder control plane wordt dit het Excel-macroprobleem van het AI-tijdperk: niemand weet wat waar draait, welke data het raakt, of wie eigenaar is als het breekt. Agent 365 is Microsoft die zegt "we hebben het door". Het sluit aan op Entra ID, Purview en Defender, zodat dezelfde access reviews, DLP-regels en audit trails die je al voor gebruikers gebruikt ook gelden voor agents.'
        }
      },
      {
        title: {
          en: 'The licensing decision tree',
          nl: 'De licensing-beslissing'
        },
        content: {
          en: 'If you already have E5 + Entra Suite + Copilot per-user licenses, E7 is mostly a procurement simplification — not necessarily a discount. Talk to your Microsoft partner before assuming savings. If you have E5 + Copilot but no Entra Suite, the math gets more interesting because Entra Suite (External MFA, Internet Access, Private Access, ID Governance, Verified ID) is genuinely expensive a la carte. If you do not have Copilot at all, E7 is not the right entry point — get a smaller Copilot pilot first, prove the value, then revisit.',
          nl: 'Als je al E5 + Entra Suite + Copilot per-user licenties hebt, is E7 vooral een procurement-vereenvoudiging — niet per se een korting. Praat met je Microsoft-partner voordat je besparingen aanneemt. Als je E5 + Copilot hebt maar geen Entra Suite, wordt de rekensom interessanter omdat Entra Suite (External MFA, Internet Access, Private Access, ID Governance, Verified ID) echt duur is per stuk. Als je nog geen Copilot hebt, is E7 niet het juiste startpunt — doe eerst een kleinere Copilot-pilot, bewijs de waarde, herzie dan.'
        }
      },
      {
        title: {
          en: 'What to do this quarter',
          nl: 'Wat doe je dit kwartaal'
        },
        content: {
          en: 'If you are an E5 + Copilot customer: open a conversation with your CSP about E7 pricing for your tenant before May 1, but do not commit until you have run the numbers. If you have any agents in production today (Copilot Studio bots, declarative agents, custom plugins): start cataloging them now. Agent 365 is going to ask you who owns what — having that list before May 1 is a free quick-win. And if your IT team has been ignoring agent governance because "it is just chat" — that grace period is ending.',
          nl: 'Ben je E5 + Copilot-klant: open een gesprek met je CSP over E7-pricing voor je tenant vóór 1 mei, maar commit niet voordat je de cijfers hebt doorgerekend. Heb je vandaag al agents in productie (Copilot Studio-bots, declarative agents, custom plugins): begin ze nu te catalogeren. Agent 365 gaat je vragen wie wat bezit — die lijst vóór 1 mei klaar hebben is een gratis quick win. En als je IT-team agent-governance heeft genegeerd omdat "het maar chat is" — die grace period loopt af.'
        }
      }
    ],
    conclusion: {
      en: 'E7 itself is mostly packaging. Agent 365 inside it is the actual product launch and worth real attention. Whether or not you buy E7 on day one, treat the May 1 date as the moment to start governing AI agents the way you govern users and devices today. The teams that wait until the first audit finding will spend the rest of the year backfilling.',
      nl: 'E7 zelf is vooral packaging. Agent 365 erin is de echte productlancering en verdient echte aandacht. Of je E7 nu op dag één koopt of niet, behandel 1 mei als het moment om AI-agents te gaan governen zoals je vandaag gebruikers en devices governt. De teams die wachten tot de eerste audit-bevinding spenderen de rest van het jaar aan inhalen.'
    }
  }
};
