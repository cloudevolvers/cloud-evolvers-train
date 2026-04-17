import type { BlogPost } from '../types';

export const azureFoundryVoiceLivePost: BlogPost = {
  id: 'azure-foundry-voice-live',
  title: {
    en: 'Voice Live in Azure Foundry: One API for Real-Time Voice Agents',
    nl: 'Voice Live in Azure Foundry: één API voor real-time spraakagents'
  },
  description: {
    en: 'Voice Live collapses the STT → LLM → TTS pipeline into a single managed runtime with built-in turn detection, noise suppression, and barge-in. Here is when it earns its keep.',
    nl: 'Voice Live klapt de STT → LLM → TTS pipeline samen tot één managed runtime met ingebouwde turn detection, noise suppression en barge-in. Wanneer is het zijn geld waard.'
  },
  date: '2026-04-12',
  author: 'Yair Knijn',
  tags: ['Azure', 'AI Foundry', 'Voice', 'Real-Time API', 'Speech'],
  image: '/images/pexels/pexels-artificial-intelligence-robot.jpg',
  excerpt: {
    en: 'Building voice agents used to mean stitching STT, an LLM, and TTS together yourself — and then handling the awkward stuff like detecting when the user stops talking. Voice Live ships that whole stack as one managed API.',
    nl: 'Spraakagents bouwen betekende vroeger zelf STT, een LLM en TTS aan elkaar knopen — en dan de lastige dingen oplossen zoals detecteren wanneer de gebruiker stopt met praten. Voice Live levert die hele stack als één managed API.'
  },
  category: {
    en: 'AI & Automation',
    nl: 'AI & Automatisering'
  },
  readTime: 10,
  content: {
    introduction: {
      en: 'Voice Live is a fully managed real-time speech-to-speech runtime in Microsoft Foundry. It replaces the traditional voice-agent pattern — speech-to-text, then a language model, then text-to-speech, all stitched together by you — with a single managed API. Semantic voice activity detection, end-of-turn detection, server-side noise suppression, echo cancellation, and barge-in support are all built in. For teams that have built voice agents the hard way before, the question is whether the abstraction is worth giving up control. For teams that have not, it is suddenly viable to ship a real voice agent in a sprint.',
      nl: 'Voice Live is een fully managed real-time speech-to-speech runtime in Microsoft Foundry. Het vervangt het traditionele spraakagent-patroon — speech-to-text, dan een taalmodel, dan text-to-speech, allemaal door jou aan elkaar geknoopt — met één managed API. Semantic voice activity detection, end-of-turn detection, server-side noise suppression, echo cancellation en barge-in zijn allemaal ingebouwd. Voor teams die eerder spraakagents op de moeilijke manier hebben gebouwd is de vraag of de abstractie de controle waard is die je opgeeft. Voor teams die dat nog niet hebben, is het ineens haalbaar om in een sprint een echte spraakagent te shippen.'
    },
    sections: [
      {
        title: {
          en: 'What the stitched-together version actually costs you',
          nl: 'Wat de zelf-aan-elkaar-geknoopte versie je echt kost'
        },
        content: {
          en: 'Anyone who has built a voice agent the long way knows the bill is not in the model calls — it is in the awkward middle. When does the user stop talking? How do you handle them interrupting the bot mid-sentence? What about background noise from a noisy office? End-of-turn detection alone has eaten weeks of engineering time at every shop trying to build this in-house. Voice Live makes those decisions for you with sensible defaults and exposes only the knobs that matter for tuning.',
          nl: 'Wie wel eens een spraakagent op de lange manier heeft gebouwd weet dat de rekening niet in de model-calls zit — die zit in het lastige middendeel. Wanneer stopt de gebruiker met praten? Hoe ga je om met onderbreken midden in de zin van de bot? En wat met achtergrondgeluid uit een rumoerig kantoor? Alleen al end-of-turn detection heeft bij elk team dat dit in-house probeerde te bouwen weken engineering opgeslokt. Voice Live neemt die beslissingen voor je met verstandige defaults en exposeert alleen de knoppen die relevant zijn voor tuning.'
        }
      },
      {
        title: {
          en: 'How it slots into Foundry',
          nl: 'Hoe het in Foundry past'
        },
        content: {
          en: 'Voice Live runs against any model deployment in your Foundry project — GPT-5.4, the smaller GPT-5 variants, MAI models, or open models like the Fireworks-hosted DeepSeek and gpt-oss families. Authentication uses your existing Foundry credentials. Billing flows through your subscription. There is no separate "voice service" to provision — Voice Live is a runtime inside the project.',
          nl: 'Voice Live draait tegen elke model-deployment in je Foundry-project — GPT-5.4, de kleinere GPT-5-varianten, MAI-modellen, of open modellen zoals de Fireworks-gehoste DeepSeek- en gpt-oss-families. Authenticatie gebruikt je bestaande Foundry-credentials. Billing loopt via je subscription. Er is geen aparte "voice service" om te provisionen — Voice Live is een runtime binnen het project.'
        },
        code: {
          language: 'python',
          code: `# Minimal Voice Live session setup
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

project = AIProjectClient(
    endpoint="https://your-project.services.ai.azure.com",
    credential=DefaultAzureCredential(),
)

session = project.voice_live.create_session(
    model="gpt-5.4",
    voice="mai-voice-1",
    instructions="Je bent een Nederlandse klantenservice-agent voor een Azure trainingsbureau.",
    turn_detection={"type": "semantic_vad"},
    noise_suppression=True,
    echo_cancellation=True,
)

# Stream audio in, get audio out — Voice Live handles the rest`
        }
      },
      {
        title: {
          en: 'When to use Voice Live (and when not to)',
          nl: 'Wanneer Voice Live wel — en wanneer niet'
        },
        content: {
          en: 'Use Voice Live when: you want a voice agent in production this quarter, your team is small, and you do not need exotic control over the audio pipeline. Skip it when: you have a regulated environment that demands you own the STT and TTS components separately for compliance reasons, or your use case needs something Voice Live does not yet support (custom wake words, very specific telephony patterns, on-prem audio routing). The middle ground — most enterprises building internal voice agents — is exactly the audience.',
          nl: 'Gebruik Voice Live als: je dit kwartaal een spraakagent in productie wilt, je team klein is, en je geen exotische controle over de audio-pipeline nodig hebt. Sla het over als: je in een gereguleerde omgeving werkt waar je de STT- en TTS-componenten apart moet bezitten om compliance-redenen, of je use case iets nodig heeft dat Voice Live nog niet ondersteunt (custom wake words, heel specifieke telefonie-patronen, on-prem audio-routing). De middengrond — de meeste enterprises die interne spraakagents bouwen — is precies de doelgroep.'
        }
      },
      {
        title: {
          en: 'What to test first if you are a Dutch shop',
          nl: 'Wat eerst testen als je een Nederlands team bent'
        },
        content: {
          en: 'Two things matter before you commit to building on Voice Live: how the turn detection performs in Dutch (the semantic VAD was trained mostly on English data, but Microsoft has improved non-English handling significantly), and how MAI-Voice-1 sounds reading back actual content from your domain. Run a 30-minute test with realistic dialogue from your support transcripts. If both feel acceptable in the playground, the rest of the integration is straightforward. If they do not, fall back to building the pipeline yourself with explicit STT, LLM, and TTS calls — that path still works.',
          nl: 'Twee dingen zijn belangrijk voordat je je vastpint op bouwen op Voice Live: hoe turn detection presteert in het Nederlands (de semantic VAD is vooral op Engelse data getraind, maar Microsoft heeft de non-Engelse verwerking flink verbeterd), en hoe MAI-Voice-1 echte content uit jouw domein leest. Doe een test van 30 minuten met realistische dialoog uit je supporttranscripts. Voelt het allebei acceptabel in de playground, dan is de rest van de integratie rechttoe rechtaan. Zo niet, val terug op zelf bouwen met expliciete STT-, LLM- en TTS-calls — dat pad werkt nog steeds.'
        }
      }
    ],
    conclusion: {
      en: 'Voice Live is one of the more meaningful Foundry releases this quarter — not because the underlying technology is novel (it is not), but because it removes a real engineering tax that has kept voice agents stuck at proof-of-concept in a lot of organizations. Run the playground test in Dutch, and if it holds up, this is a faster path to production than anything Foundry has shipped before for voice.',
      nl: 'Voice Live is een van de relevantere Foundry-releases dit kwartaal — niet omdat de onderliggende technologie nieuw is (dat is ze niet), maar omdat het een echte engineering-belasting wegneemt die in veel organisaties spraakagents heeft vastgehouden in proof-of-concept. Doe de playground-test in het Nederlands, en als die overeind blijft is dit een sneller pad naar productie dan alles wat Foundry eerder voor voice heeft uitgebracht.'
    }
  }
};
