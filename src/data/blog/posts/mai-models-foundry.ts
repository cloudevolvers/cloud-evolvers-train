import type { BlogPost } from '../types';

export const maiModelsFoundryPost: BlogPost = {
  id: 'mai-models-foundry',
  title: {
    en: 'Microsoft MAI Models: In-House Voice, Image, and Transcribe Land in Foundry',
    nl: 'Microsoft MAI-modellen: in-house voice, image en transcribe komen naar Foundry'
  },
  description: {
    en: 'Microsoft shipped three foundation models built in-house — MAI-Voice-1, MAI-Image-2, and MAI-Transcribe-1 — directly in Microsoft Foundry. Here is what that means for teams already deep in Azure OpenAI.',
    nl: 'Microsoft heeft drie eigen foundation-modellen uitgebracht — MAI-Voice-1, MAI-Image-2 en MAI-Transcribe-1 — direct in Microsoft Foundry. Wat betekent dat voor teams die al diep in Azure OpenAI zitten.'
  },
  date: '2026-04-15',
  author: 'Yair Knijn',
  tags: ['Azure', 'AI Foundry', 'MAI', 'Foundation Models', 'OpenAI'],
  image: '/images/pexels/pexels-machine-learning-algorithms.jpg',
  excerpt: {
    en: 'For the first time, Microsoft is putting its own foundation models in front of customers in Foundry — not as wrappers around OpenAI, but as alternatives to it. Here is what shipped and where it actually fits.',
    nl: 'Voor het eerst zet Microsoft eigen foundation-modellen in Foundry voor klanten — niet als wrapper rond OpenAI, maar als alternatief. Wat is er uitgebracht en waar past het.'
  },
  category: {
    en: 'AI & Automation',
    nl: 'AI & Automatisering'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'Microsoft launched three foundation models built in-house — MAI-Voice-1, MAI-Image-2, and MAI-Transcribe-1 — directly available through Microsoft Foundry and a new MAI Playground. This is a shift. Up to now, "Microsoft AI" inside Foundry has mostly meant OpenAI behind a Microsoft front door. The MAI series is different: built by Microsoft, hosted by Microsoft, billed by Microsoft. For teams locked into the Azure stack, that matters more than the benchmark numbers.',
      nl: 'Microsoft lanceerde drie eigen foundation-modellen — MAI-Voice-1, MAI-Image-2 en MAI-Transcribe-1 — direct beschikbaar via Microsoft Foundry en een nieuwe MAI Playground. Dat is een verschuiving. Tot nu toe betekende "Microsoft AI" binnen Foundry vooral OpenAI achter een Microsoft-voordeur. De MAI-serie is anders: gebouwd door Microsoft, gehost door Microsoft, gefactureerd door Microsoft. Voor teams die vastzitten in de Azure-stack telt dat meer dan de benchmark-cijfers.'
    },
    sections: [
      {
        title: {
          en: 'What actually shipped',
          nl: 'Wat er daadwerkelijk is uitgebracht'
        },
        content: {
          en: 'MAI-Voice-1 is a real-time speech generation model — low latency, expressive, designed to plug into Voice Live and the Realtime API patterns Foundry already supports. MAI-Image-2 is a text-to-image model competing in the same space as DALL-E 3 and the Stable Diffusion variants in Foundry. MAI-Transcribe-1 is a speech-to-text model built for streaming and batch use cases. All three are in the catalog, all three have a Playground, all three bill through your existing Azure subscription.',
          nl: 'MAI-Voice-1 is een real-time spraakgeneratie-model — lage latency, expressief, ontworpen om aan te sluiten op Voice Live en de Realtime API-patronen die Foundry al ondersteunt. MAI-Image-2 is een tekst-naar-beeld-model dat concurreert in hetzelfde veld als DALL-E 3 en de Stable Diffusion-varianten in Foundry. MAI-Transcribe-1 is een spraak-naar-tekst-model voor streaming en batch-toepassingen. Alle drie staan in de catalogus, alle drie hebben een Playground, alle drie worden via je bestaande Azure-abonnement gefactureerd.'
        }
      },
      {
        title: {
          en: 'Why it matters even if the benchmarks tie',
          nl: 'Waarom het ertoe doet, zelfs als de benchmarks gelijk zijn'
        },
        content: {
          en: 'Most enterprise customers do not switch models on benchmark numbers. They switch on procurement, data residency, support, and risk. MAI models give Microsoft a story it could not tell before: when a customer asks about EU data boundaries, model governance, or "what happens if OpenAI changes terms tomorrow", there is now a Microsoft-owned answer in the catalog. For a Dutch organization that already has a Foundry contract and a procurement process around it, that lowers the bar to running production AI workloads — independent of how the OpenAI partnership evolves.',
          nl: 'De meeste enterprise-klanten wisselen niet van model op basis van benchmarks. Ze wisselen op procurement, dataresidency, support en risico. MAI-modellen geven Microsoft een verhaal dat het eerder niet kon vertellen: als een klant vraagt naar EU-databoundaries, modelgovernance, of "wat als OpenAI morgen de voorwaarden verandert", is er nu een Microsoft-eigen antwoord in de catalogus. Voor een Nederlandse organisatie met een bestaand Foundry-contract en een inkoopproces eromheen verlaagt dat de drempel om AI-workloads naar productie te brengen — los van hoe het OpenAI-partnership evolueert.'
        }
      },
      {
        title: {
          en: 'Where MAI-Voice-1 fits',
          nl: 'Waar MAI-Voice-1 past'
        },
        content: {
          en: 'If you are already using Voice Live or the Realtime API for voice agents, MAI-Voice-1 is a drop-in alternative for the TTS half. Sample usage looks identical to swapping any model deployment in Foundry — change the model name, redeploy, test. Where it gets interesting is for Dutch and other non-English voices: Microsoft has invested heavily in non-English speech, and early feedback from Foundry users suggests MAI-Voice-1 holds up well for European languages where some open models still struggle.',
          nl: 'Als je al Voice Live of de Realtime API gebruikt voor spraakagents, is MAI-Voice-1 een drop-in alternatief voor het TTS-deel. Het gebruik ziet er identiek uit aan het wisselen van een willekeurige model-deployment in Foundry — modelnaam aanpassen, opnieuw deployen, testen. Het wordt interessant voor Nederlandse en andere niet-Engelse stemmen: Microsoft heeft fors geïnvesteerd in niet-Engelse speech, en eerste feedback van Foundry-gebruikers suggereert dat MAI-Voice-1 goed presteert voor Europese talen waar sommige open modellen nog moeite mee hebben.'
        },
        code: {
          language: 'python',
          code: `# Swap from OpenAI TTS to MAI-Voice-1 in Foundry
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

client = AIProjectClient(
    endpoint="https://your-project.services.ai.azure.com",
    credential=DefaultAzureCredential(),
)

# Use the MAI-Voice-1 deployment instead of tts-1
audio = client.inference.synthesize_speech(
    model="mai-voice-1",
    text="Hallo, dit is een test van het MAI-Voice-1 model.",
    voice="nl-NL-natural",
)`
        }
      },
      {
        title: {
          en: 'What it does not replace',
          nl: 'Wat het niet vervangt'
        },
        content: {
          en: 'MAI-Image-2 and MAI-Transcribe-1 are useful, but neither is positioned as a frontier-class replacement for the highest-capability models in the catalog. If you are running RAG over technical documents and need GPT-5.4-grade reasoning, MAI is not the answer — Microsoft is not pretending it is. The MAI series is about giving you a viable Microsoft-owned default for use cases where good-enough models save real money over premium frontier inference.',
          nl: 'MAI-Image-2 en MAI-Transcribe-1 zijn bruikbaar, maar geen van beide is gepositioneerd als frontier-vervanger voor de modellen met de hoogste capability in de catalogus. Als je RAG draait over technische documenten en GPT-5.4-niveau redenering nodig hebt, is MAI niet het antwoord — Microsoft doet ook niet alsof. De MAI-serie gaat over een Microsoft-eigen default voor use cases waar good-enough modellen echt geld besparen ten opzichte van premium frontier-inference.'
        }
      }
    ],
    conclusion: {
      en: 'Try MAI-Voice-1 first if you are running a voice agent — the Dutch and other European voices are worth a real test. For image and transcription, evaluate against your actual workload before swapping anything. The strategic value of the MAI series is not "Microsoft caught up to OpenAI" — it is that procurement, governance, and data residency conversations now have a one-vendor answer inside Foundry. That alone makes the launch worth paying attention to.',
      nl: 'Probeer MAI-Voice-1 eerst als je een spraakagent draait — de Nederlandse en andere Europese stemmen verdienen een echte test. Voor image en transcriptie: evalueer tegen je eigen workload voordat je iets wisselt. De strategische waarde van de MAI-serie is niet "Microsoft heeft OpenAI ingehaald" — het is dat gesprekken over procurement, governance en dataresidency nu een one-vendor antwoord binnen Foundry hebben. Dat alleen maakt de lancering al de moeite waard.'
    }
  }
};
