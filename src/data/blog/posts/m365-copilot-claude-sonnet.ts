import type { BlogPost } from '../types';

export const m365CopilotClaudeSonnetPost: BlogPost = {
  id: 'm365-copilot-claude-sonnet',
  title: {
    en: 'Claude Sonnet Lands in Microsoft 365 Copilot Chat — and What That Actually Means',
    nl: 'Claude Sonnet komt naar Microsoft 365 Copilot Chat — en wat dat echt betekent'
  },
  description: {
    en: 'Anthropic Claude Sonnet is now available alongside OpenAI models in M365 Copilot Chat through the Frontier program. The model choice is real, but the rollout has practical edges to plan for.',
    nl: 'Anthropic Claude Sonnet is nu beschikbaar naast OpenAI-modellen in M365 Copilot Chat via het Frontier-programma. De modelkeuze is echt, maar de uitrol heeft praktische randjes om op te plannen.'
  },
  date: '2026-04-11',
  author: 'Yair Knijn',
  tags: ['Microsoft 365', 'M365 Copilot', 'Claude', 'Anthropic', 'AI'],
  image: '/images/pexels/pexels-corporate-workshop.jpg',
  excerpt: {
    en: 'For the first time, M365 Copilot Chat lets users pick between OpenAI and Anthropic. The model picker is small. The governance implications are not.',
    nl: 'Voor het eerst kunnen gebruikers in M365 Copilot Chat kiezen tussen OpenAI en Anthropic. De model-picker is klein. De governance-implicaties niet.'
  },
  category: {
    en: 'Microsoft 365',
    nl: 'Microsoft 365'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'Microsoft 365 Copilot is now expanding model choice by adding Anthropic Claude Sonnet to Copilot Chat alongside the existing OpenAI models, available through the Frontier program. This is the first time M365 Copilot users can pick a non-Microsoft, non-OpenAI model from the in-product picker. The change is small in the UI and significant in what it implies about Microsoft\'s positioning — and about the governance work this lands on every IT team running Copilot.',
      nl: 'Microsoft 365 Copilot breidt de modelkeuze uit door Anthropic Claude Sonnet toe te voegen aan Copilot Chat naast de bestaande OpenAI-modellen, beschikbaar via het Frontier-programma. Voor het eerst kunnen M365 Copilot-gebruikers een niet-Microsoft, niet-OpenAI model kiezen uit de in-product picker. De verandering is klein in de UI en significant voor wat hij impliceert over Microsofts positionering — en over het governance-werk dat dit oplevert voor elk IT-team dat Copilot draait.'
    },
    sections: [
      {
        title: {
          en: 'Where Claude actually shows up',
          nl: 'Waar Claude daadwerkelijk verschijnt'
        },
        content: {
          en: 'Claude Sonnet is available in Copilot Chat — not in Copilot for Word, Excel, PowerPoint, or Outlook. Inside the chat experience, users see a model selector that lets them pick between an OpenAI model and Claude. The selection is per-conversation, not a tenant-wide setting. The Frontier program controls who sees the new options, so admins can stage the rollout instead of getting it tenant-wide overnight.',
          nl: 'Claude Sonnet is beschikbaar in Copilot Chat — niet in Copilot voor Word, Excel, PowerPoint of Outlook. Binnen de chat-ervaring zien gebruikers een model-selector waarmee ze tussen een OpenAI-model en Claude kunnen kiezen. De keuze is per gesprek, geen tenant-brede setting. Het Frontier-programma stuurt wie de nieuwe opties ziet, dus admins kunnen de uitrol faseren in plaats van tenant-breed van de ene op de andere dag.'
        }
      },
      {
        title: {
          en: 'Why Microsoft is doing this',
          nl: 'Waarom Microsoft dit doet'
        },
        content: {
          en: 'Two reasons. First, customer pressure: large enterprises have been asking Microsoft for model choice in Copilot for a year, often citing Anthropic\'s strength on long-document reasoning and code review. Second, hedge value: Microsoft\'s public position is that Copilot is a product, not a wrapper around a single model — and supporting Claude alongside OpenAI is the cleanest way to prove that. The MAI series is part of the same story. None of this changes the fact that OpenAI is still the default in most flows.',
          nl: 'Twee redenen. Ten eerste klantdruk: grote enterprises vragen Microsoft al een jaar om modelkeuze in Copilot, vaak met verwijzing naar Anthropics sterkte op lange-document-redenering en code review. Ten tweede hedge-waarde: Microsofts publieke positie is dat Copilot een product is, geen wrapper rond één model — en Claude ondersteunen naast OpenAI is de schoonste manier om dat te bewijzen. De MAI-serie hoort bij hetzelfde verhaal. Niets hiervan verandert dat OpenAI nog steeds de default is in de meeste flows.'
        }
      },
      {
        title: {
          en: 'What changes for governance',
          nl: 'Wat verandert er voor governance'
        },
        content: {
          en: 'Most Copilot governance documentation written in the last two years assumes one underlying provider. With Claude in the picker, you need to update three things: data flow diagrams (Claude inference traffic now leaves Microsoft\'s infrastructure for Anthropic\'s, even though it is brokered), DPIA wording (your data protection impact assessment likely names OpenAI explicitly — Anthropic needs an entry too), and user-facing acceptable use guidance (some teams will need to know which model to use for what). None of this is hard, but skipping it is the kind of finding that shows up six months later in a routine audit.',
          nl: 'De meeste Copilot-governance-documentatie uit de afgelopen twee jaar gaat uit van één onderliggende provider. Met Claude in de picker moet je drie dingen bijwerken: data flow-diagrammen (Claude-inferentieverkeer verlaat nu Microsofts infrastructuur richting Anthropics, ook al wordt het gebrokerd), DPIA-tekst (je DPIA noemt waarschijnlijk OpenAI expliciet — Anthropic heeft een eigen vermelding nodig), en gebruikersgerichte acceptable use-guidance (sommige teams moeten weten welk model voor wat te gebruiken). Niets hiervan is moeilijk, maar het overslaan is het soort bevinding dat zes maanden later opduikt in een routine-audit.'
        }
      },
      {
        title: {
          en: 'Practical takeaway for IT teams',
          nl: 'Praktische takeaway voor IT-teams'
        },
        content: {
          en: 'Decide whether you want users to see the model picker at all. The Frontier program lets you control rollout per-user, so you can run a pilot with a single team — typically engineering or legal, since those are the workflows where Claude\'s strengths show — and decide based on real usage. If you do enable it, update governance docs and DPIA before the pilot starts, not after. And tell users the truth: the picker is real, the choice matters for some tasks and not for others, and "use what works" is a fine policy.',
          nl: 'Beslis of je wilt dat gebruikers de model-picker überhaupt zien. Met het Frontier-programma kun je de uitrol per gebruiker sturen, dus je kunt een pilot draaien met één team — meestal engineering of legal, want dat zijn de workflows waar Claudes sterktes zichtbaar zijn — en beslissen op basis van echt gebruik. Zet je het aan, werk dan governance-docs en DPIA bij vóór de pilot start, niet erna. En vertel gebruikers de waarheid: de picker is echt, de keuze doet ertoe voor sommige taken en niet voor andere, en "gebruik wat werkt" is een prima beleid.'
        }
      }
    ],
    conclusion: {
      en: 'Claude in M365 Copilot Chat is a small UX change with sensible governance implications. Pilot it with a focused team, update your data-flow and DPIA docs alongside the rollout, and you will land in a better spot than the orgs that wait for the policy to write itself. For most users, the picker will not change daily work — but for the legal, finance, and engineering use cases where it matters, the option is now there.',
      nl: 'Claude in M365 Copilot Chat is een kleine UX-verandering met serieuze governance-implicaties. Pilot het met een gefocust team, werk je data flow- en DPIA-documenten bij naast de uitrol, en je komt beter uit dan de orgs die wachten tot het beleid zichzelf schrijft. Voor de meeste gebruikers verandert de picker het dagelijkse werk niet — maar voor de legal-, finance- en engineering-use cases waar het ertoe doet, is de optie er nu.'
    }
  }
};
