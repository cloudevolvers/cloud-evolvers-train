import type { BlogPost } from '../types';

export const azureAiFoundryPost: BlogPost = {
  id: 'azure-ai-foundry-building-ai-apps',
  title: {
    en: 'Azure AI Foundry: Microsoft\'s Unified Platform for Building AI Applications',
    nl: 'Azure AI Foundry: Microsoft\'s Uniforme Platform voor het Bouwen van AI-Applicaties'
  },
  description: {
    en: 'Explore Azure AI Foundry, the rebranded and expanded successor to Azure AI Studio, offering a unified model catalog, prompt flow, evaluation tools, and governance for building production AI applications.',
    nl: 'Ontdek Azure AI Foundry, de hernoemde en uitgebreide opvolger van Azure AI Studio, met een uniforme modelcatalogus, prompt flow, evaluatietools en governance voor het bouwen van productie AI-applicaties.'
  },
  date: '2026-03-15',
  author: 'Yair Knijn',
  tags: ['Azure', 'AI', 'Azure AI Foundry', 'Machine Learning', 'LLM'],
  image: '/images/unsplash/ai-machine-learning.jpg',
  excerpt: {
    en: 'Azure AI Foundry consolidates Microsoft\'s AI development experience into a single platform with a unified model catalog, prompt flow for RAG apps, built-in evaluation, and enterprise governance through the hub-project model.',
    nl: 'Azure AI Foundry consolideert Microsoft\'s AI-ontwikkelervaring in één platform met een uniforme modelcatalogus, prompt flow voor RAG-apps, ingebouwde evaluatie en enterprise governance via het hub-project model.'
  },
  category: {
    en: 'AI & Automation',
    nl: 'AI & Automatisering'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'In late 2024, Microsoft rebranded Azure AI Studio to Azure AI Foundry, and it was more than just a name change. The platform received significant capability upgrades, a restructured governance model, and deeper integration with Azure OpenAI Service. If you have been building AI applications on Azure or evaluating where to start, Azure AI Foundry is now the single entry point for model selection, prompt engineering, RAG pipeline development, and production deployment. Here is what changed and why it matters for your AI projects.',
      nl: 'Eind 2024 hernoemde Microsoft Azure AI Studio naar Azure AI Foundry, en het was meer dan alleen een naamswijziging. Het platform kreeg aanzienlijke capaciteitsupgrades, een herstructureerd governance-model en diepere integratie met Azure OpenAI Service. Als je AI-applicaties hebt gebouwd op Azure of aan het evalueren bent waar je moet beginnen, is Azure AI Foundry nu het enkele startpunt voor modelselectie, prompt engineering, RAG-pijplijnontwikkeling en productie-deployment. Hier is wat er veranderd is en waarom het belangrijk is voor je AI-projecten.'
    },
    sections: [
      {
        title: {
          en: 'From Azure AI Studio to AI Foundry: What Actually Changed',
          nl: 'Van Azure AI Studio naar AI Foundry: Wat Er Daadwerkelijk Veranderde'
        },
        content: {
          en: 'Azure AI Studio was already a capable platform, but it felt like a collection of separate tools loosely stitched together. AI Foundry addresses this by providing a truly unified experience. The model catalog, prompt flow editor, evaluation suite, and deployment pipeline now share a common project context, meaning your datasets, connections, and configurations carry across the entire workflow. The underlying Azure resources — Azure OpenAI endpoints, AI Search indexes, storage accounts — are now managed through a hub-project hierarchy instead of standalone resource groups. Microsoft also consolidated the SDKs: the new Azure AI Foundry SDK replaces the patchwork of azure-ai-ml, openai, and langchain-specific packages with a cohesive API surface.',
          nl: 'Azure AI Studio was al een capabel platform, maar het voelde als een verzameling van afzonderlijke tools die losjes aan elkaar waren genaaid. AI Foundry pakt dit aan door een werkelijk uniforme ervaring te bieden. De modelcatalogus, prompt flow editor, evaluatiesuite en deployment-pijplijn delen nu een gemeenschappelijke projectcontext, wat betekent dat je datasets, verbindingen en configuraties door de hele workflow meegaan. De onderliggende Azure-resources — Azure OpenAI-endpoints, AI Search-indexes, storage accounts — worden nu beheerd via een hub-project hiërarchie in plaats van losse resource groups. Microsoft consolideerde ook de SDK\'s: de nieuwe Azure AI Foundry SDK vervangt het lappendeken van azure-ai-ml, openai en langchain-specifieke packages met een samenhangend API-oppervlak.'
        }
      },
      {
        title: {
          en: 'The Unified Model Catalog: Choosing the Right Model',
          nl: 'De Uniforme Modelcatalogus: Het Juiste Model Kiezen'
        },
        content: {
          en: 'One of the strongest features of AI Foundry is the model catalog, which now hosts models from OpenAI (GPT-4o, GPT-4 Turbo, o1), Meta (Llama 3.1, Llama 3.2), Mistral (Mistral Large, Mixtral), Cohere (Command R+), and many others — all deployable from the same interface. Each model card includes benchmark scores across common evaluation tasks, so you can compare MMLU, HumanEval, and other metrics side by side before committing. For deployment, you choose between Models as a Service (MaaS) for serverless pay-per-token billing, or managed compute for dedicated throughput. The MaaS option is particularly useful for experimentation since you skip the provisioning step entirely. For fine-tuning, managed compute gives you GPU allocation with clear cost visibility. The model catalog also shows content filtering defaults per model and region availability, which matters when you need to stay within EU data residency boundaries.',
          nl: 'Een van de sterkste functies van AI Foundry is de modelcatalogus, die nu modellen host van OpenAI (GPT-4o, GPT-4 Turbo, o1), Meta (Llama 3.1, Llama 3.2), Mistral (Mistral Large, Mixtral), Cohere (Command R+), en vele anderen — allemaal deploybaar vanuit dezelfde interface. Elke modelkaart bevat benchmarkscores voor veelvoorkomende evaluatietaken, zodat je MMLU, HumanEval en andere metrics naast elkaar kunt vergelijken voordat je een keuze maakt. Voor deployment kies je tussen Models as a Service (MaaS) voor serverless pay-per-token facturering, of managed compute voor dedicated throughput. De MaaS-optie is bijzonder nuttig voor experimenten omdat je de provisioningstap volledig overslaat. Voor fine-tuning geeft managed compute je GPU-allocatie met duidelijke kostenzichtbaarheid. De modelcatalogus toont ook content filtering-standaarden per model en regiobeschikbaarheid, wat belangrijk is wanneer je binnen EU data residency-grenzen moet blijven.'
        }
      },
      {
        title: {
          en: 'Prompt Flow: Building RAG Applications Visually',
          nl: 'Prompt Flow: RAG-Applicaties Visueel Bouwen'
        },
        content: {
          en: 'Prompt flow is where AI Foundry really differentiates itself from just calling an API. It provides a visual DAG (directed acyclic graph) editor for building retrieval-augmented generation pipelines. A typical flow connects your data source (Azure AI Search, Cosmos DB, or uploaded documents), a retrieval step that chunks and embeds queries, and an LLM node that generates grounded responses. Each node in the flow is independently testable, and you can inject variants — different prompt templates, chunk sizes, or model versions — to compare outputs systematically. The tracing feature logs every step of the flow execution with latencies, token counts, and intermediate outputs, which is invaluable when debugging why your RAG pipeline returns irrelevant results. You can run flows locally with the prompt flow VS Code extension or deploy them as managed endpoints with auto-scaling.',
          nl: 'Prompt flow is waar AI Foundry zich echt onderscheidt van alleen een API aanroepen. Het biedt een visuele DAG (directed acyclic graph) editor voor het bouwen van retrieval-augmented generation pijplijnen. Een typische flow verbindt je databron (Azure AI Search, Cosmos DB of geüploade documenten), een ophaalstap die queries chunkt en embedt, en een LLM-node die gegronde antwoorden genereert. Elke node in de flow is onafhankelijk testbaar, en je kunt varianten injecteren — verschillende prompt-templates, chunk-groottes of modelversies — om outputs systematisch te vergelijken. De tracingfunctie logt elke stap van de flow-uitvoering met latenties, tokenaantallen en tussenliggende outputs, wat onmisbaar is bij het debuggen waarom je RAG-pijplijn irrelevante resultaten retourneert. Je kunt flows lokaal draaien met de prompt flow VS Code-extensie of ze deployen als managed endpoints met auto-scaling.'
        }
      },
      {
        title: {
          en: 'Evaluation and Content Safety',
          nl: 'Evaluatie en Content Safety'
        },
        content: {
          en: 'Shipping an AI application without proper evaluation is asking for trouble, and AI Foundry builds evaluation directly into the development loop. You can run built-in evaluators for groundedness (does the answer match the retrieved documents?), relevance, coherence, fluency, and similarity against ground truth datasets. Custom evaluators are supported too — write a Python function or use an LLM-as-judge pattern to score outputs on domain-specific criteria. The content safety filters in AI Foundry are configurable per deployment. You can set severity thresholds for hate, violence, sexual, and self-harm categories, and the filters apply at both the input and output stages. There is also a jailbreak detection layer that catches prompt injection attempts. For regulated industries, this is not optional — it is a baseline requirement, and having it built into the platform saves significant engineering effort compared to building these safeguards from scratch.',
          nl: 'Een AI-applicatie uitrollen zonder goede evaluatie is vragen om problemen, en AI Foundry bouwt evaluatie direct in de ontwikkelcyclus in. Je kunt ingebouwde evaluatoren draaien voor gegrondheid (komt het antwoord overeen met de opgehaalde documenten?), relevantie, coherentie, vloeiendheid en gelijkenis met ground truth datasets. Aangepaste evaluatoren worden ook ondersteund — schrijf een Python-functie of gebruik een LLM-als-beoordelaar patroon om outputs te scoren op domeinspecifieke criteria. De content safety-filters in AI Foundry zijn configureerbaar per deployment. Je kunt ernstdrempels instellen voor haat, geweld, seksuele en zelfbeschadiging categorieën, en de filters gelden zowel in de invoer- als uitvoerfase. Er is ook een jailbreak-detectielaag die prompt injection-pogingen opvangt. Voor gereguleerde sectoren is dit niet optioneel — het is een basisvereiste, en het ingebouwd hebben in het platform bespaart aanzienlijke engineering-inspanning vergeleken met het vanaf nul opbouwen van deze beveiligingen.'
        }
      },
      {
        title: {
          en: 'Hub-Project Governance and Azure OpenAI Integration',
          nl: 'Hub-Project Governance en Azure OpenAI Integratie'
        },
        content: {
          en: 'The hub-project model is AI Foundry\'s answer to enterprise governance. A hub is a shared environment that holds connections to Azure resources (OpenAI endpoints, search indexes, storage), security policies, and compute configurations. Projects within a hub inherit these settings, so individual teams get their own workspace without needing to reconfigure infrastructure. This maps well to how enterprises actually operate: a central platform team manages the hub with approved models and data connections, while application teams create projects for their specific use cases. Azure OpenAI Service is fully integrated — you can deploy and manage OpenAI models directly from AI Foundry without switching to a separate Azure OpenAI resource blade. The model deployment, quota management, and content filtering configuration all happen in one place. For teams already using Azure OpenAI, this means AI Foundry is not a replacement but a superset that adds evaluation, prompt flow, and governance on top of what you already have.',
          nl: 'Het hub-project model is AI Foundry\'s antwoord op enterprise governance. Een hub is een gedeelde omgeving die verbindingen bevat naar Azure-resources (OpenAI-endpoints, search-indexes, storage), beveiligingsbeleid en compute-configuraties. Projecten binnen een hub erven deze instellingen, zodat individuele teams hun eigen werkruimte krijgen zonder infrastructuur opnieuw te moeten configureren. Dit past goed bij hoe enterprises daadwerkelijk opereren: een centraal platformteam beheert de hub met goedgekeurde modellen en dataverbindingen, terwijl applicatieteams projecten aanmaken voor hun specifieke use cases. Azure OpenAI Service is volledig geïntegreerd — je kunt OpenAI-modellen direct vanuit AI Foundry deployen en beheren zonder naar een apart Azure OpenAI resource-blade te schakelen. De modeldeployment, quotabeheer en content filtering-configuratie gebeuren allemaal op één plek. Voor teams die al Azure OpenAI gebruiken, betekent dit dat AI Foundry geen vervanging is maar een superset die evaluatie, prompt flow en governance toevoegt bovenop wat je al hebt.'
        }
      }
    ],
    conclusion: {
      en: 'Azure AI Foundry is a meaningful step forward from Azure AI Studio. The unified model catalog, integrated prompt flow, built-in evaluation tools, and hub-project governance model address the real pain points of building AI applications at scale. If you are starting a new AI project on Azure, begin in AI Foundry — it is where all the pieces come together. For existing Azure OpenAI users, the migration path is straightforward since your deployments and endpoints carry over. The platform is evolving rapidly, so expect the model catalog and evaluation capabilities to expand further throughout 2026.',
      nl: 'Azure AI Foundry is een betekenisvolle stap vooruit ten opzichte van Azure AI Studio. De uniforme modelcatalogus, geïntegreerde prompt flow, ingebouwde evaluatietools en het hub-project governance-model pakken de echte pijnpunten aan van het bouwen van AI-applicaties op schaal. Als je een nieuw AI-project start op Azure, begin dan in AI Foundry — het is waar alle onderdelen samenkomen. Voor bestaande Azure OpenAI-gebruikers is het migratiepad eenvoudig omdat je deployments en endpoints meekomen. Het platform evolueert snel, dus verwacht dat de modelcatalogus en evaluatiemogelijkheden verder uitbreiden in 2026.'
    }
  }
};
