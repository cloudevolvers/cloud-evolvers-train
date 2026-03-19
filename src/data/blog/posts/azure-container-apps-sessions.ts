import type { BlogPost } from '../types';

export const azureContainerAppsSessionsPost: BlogPost = {
  id: 'azure-container-apps-dynamic-sessions',
  title: {
    en: 'Azure Container Apps Dynamic Sessions: Sandboxed Code Execution for AI',
    nl: 'Azure Container Apps Dynamic Sessions: Sandboxed Code-Uitvoering voor AI'
  },
  description: {
    en: 'Learn how Azure Container Apps dynamic sessions enable AI applications to execute untrusted code safely in Hyper-V isolated sandboxes with built-in LangChain and Semantic Kernel integration',
    nl: 'Leer hoe Azure Container Apps dynamic sessions AI-applicaties in staat stellen om onvertrouwde code veilig uit te voeren in Hyper-V geïsoleerde sandboxes met ingebouwde LangChain en Semantic Kernel integratie'
  },
  date: '2026-02-10',
  author: 'Yair Knijn',
  tags: ['Azure', 'Container Apps', 'AI', 'Serverless', 'Python'],
  image: '/images/unsplash/docker-containerization.jpg',
  excerpt: {
    en: 'When your AI agent generates code, where does it run? Azure Container Apps dynamic sessions provide Hyper-V isolated sandboxes that let AI applications execute untrusted Python code safely, with built-in integration for LangChain and Semantic Kernel.',
    nl: 'Wanneer je AI-agent code genereert, waar draait die dan? Azure Container Apps dynamic sessions bieden Hyper-V geïsoleerde sandboxes waarmee AI-applicaties onvertrouwde Python-code veilig kunnen uitvoeren, met ingebouwde integratie voor LangChain en Semantic Kernel.'
  },
  category: {
    en: 'Cloud Architecture',
    nl: 'Cloud Architectuur'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'One of the trickiest problems in building AI agents is code execution. Your LLM generates a Python script to analyze data or produce a chart — but you cannot just run arbitrary code on your application server. The security implications are obvious. Azure Container Apps dynamic sessions solve this by providing on-demand, Hyper-V isolated sandboxes specifically designed for AI workloads. Each session gets its own lightweight container that spins up in seconds, executes the code, and returns results without any risk to your host environment. This is the infrastructure piece that makes AI data analysts and code-generating assistants production-ready.',
      nl: 'Een van de lastigste problemen bij het bouwen van AI-agents is code-uitvoering. Je LLM genereert een Python-script om data te analyseren of een grafiek te produceren — maar je kunt niet zomaar willekeurige code op je applicatieserver draaien. De beveiligingsimplicaties zijn duidelijk. Azure Container Apps dynamic sessions lossen dit op door on-demand, Hyper-V geïsoleerde sandboxes te bieden die specifiek zijn ontworpen voor AI-workloads. Elke sessie krijgt zijn eigen lichtgewicht container die in seconden opstart, de code uitvoert en resultaten retourneert zonder enig risico voor je hostomgeving. Dit is het infrastructuuronderdeel dat AI-data-analisten en code-genererende assistenten productierijp maakt.'
    },
    sections: [
      {
        title: {
          en: 'How Dynamic Sessions Work',
          nl: 'Hoe Dynamic Sessions Werken'
        },
        content: {
          en: 'Dynamic sessions are built on a session pool model. You create a session pool in your Container Apps environment, which pre-allocates a set of Hyper-V isolated sandboxes ready to accept code execution requests. When your application sends code to execute, the pool assigns an available session within milliseconds. Each session is identified by a unique session ID that your application controls — this means you can maintain state across multiple code execution calls within the same session. The session remembers variables, imported libraries, and uploaded files between calls, behaving like a persistent notebook kernel. Sessions automatically clean up after a configurable idle timeout, freeing resources back to the pool. The Python code interpreter session type comes pre-loaded with popular data science packages: pandas, numpy, matplotlib, scikit-learn, and others — so your AI agent can generate data analysis code without worrying about package installation.',
          nl: 'Dynamic sessions zijn gebouwd op een session pool-model. Je maakt een session pool in je Container Apps-omgeving, die een set Hyper-V geïsoleerde sandboxes vooraf toewijst die klaar zijn om code-uitvoeringsverzoeken te accepteren. Wanneer je applicatie code stuurt om uit te voeren, wijst de pool binnen milliseconden een beschikbare sessie toe. Elke sessie wordt geïdentificeerd door een uniek sessie-ID dat je applicatie beheert — dit betekent dat je state kunt behouden over meerdere code-uitvoeringsaanroepen binnen dezelfde sessie. De sessie onthoudt variabelen, geïmporteerde bibliotheken en geüploade bestanden tussen aanroepen, en gedraagt zich als een persistente notebook-kernel. Sessies worden automatisch opgeruimd na een configureerbare idle timeout, waardoor resources worden vrijgegeven aan de pool. Het Python code interpreter sessietype komt voorgeladen met populaire data science-pakketten: pandas, numpy, matplotlib, scikit-learn en andere — zodat je AI-agent data-analysecode kan genereren zonder je zorgen te maken over pakketinstallatie.'
        }
      },
      {
        title: {
          en: 'Integration with LangChain and Semantic Kernel',
          nl: 'Integratie met LangChain en Semantic Kernel'
        },
        content: {
          en: 'Microsoft provides first-party integrations for the two most popular AI orchestration frameworks. For LangChain, the azure-dynamic-sessions package provides a SessionsPythonREPLTool that plugs directly into your agent as a tool. The agent can decide when to write and execute code, pass it to the session, and interpret the output — all within the standard LangChain tool-calling flow. For Semantic Kernel, there is a SessionsPythonPlugin that works with the kernel function calling pattern. In both cases, the integration handles session lifecycle management, authentication via Entra ID, and result parsing. You point it at your session pool endpoint and it handles the rest. This means adding sandboxed code execution to an existing AI agent takes roughly ten lines of code.',
          nl: 'Microsoft biedt first-party integraties voor de twee populairste AI-orchestratieframeworks. Voor LangChain biedt het azure-dynamic-sessions pakket een SessionsPythonREPLTool dat direct als tool in je agent wordt aangesloten. De agent kan beslissen wanneer code te schrijven en uit te voeren, het naar de sessie sturen en de output interpreteren — allemaal binnen de standaard LangChain tool-calling flow. Voor Semantic Kernel is er een SessionsPythonPlugin dat werkt met het kernel function calling-patroon. In beide gevallen handelt de integratie session lifecycle management, authenticatie via Entra ID en resultaatparsing af. Je wijst het naar je session pool-endpoint en het regelt de rest. Dit betekent dat het toevoegen van sandboxed code-uitvoering aan een bestaande AI-agent ongeveer tien regels code kost.'
        }
      },
      {
        title: {
          en: 'Session Pool Management and Cold Start Optimization',
          nl: 'Session Pool Beheer en Cold Start Optimalisatie'
        },
        content: {
          en: 'Session pool configuration directly impacts your user experience. The key settings are the maximum concurrent sessions (how many parallel users your pool supports), the ready session count (pre-warmed sessions waiting for requests), and the idle timeout (how long an inactive session stays alive). For production AI applications, set the ready session count high enough that users never wait for a cold start. A cold start means provisioning a new Hyper-V sandbox, which takes a few seconds — acceptable for batch processing, but noticeable in interactive chat scenarios. The ready session instances are billed even when idle, so balance cost against latency requirements. Monitor the pool utilization metrics in Azure Monitor to right-size over time. If your AI agent needs custom Python packages beyond the pre-installed set, you can use custom container sessions where you define your own Docker image with any dependencies.',
          nl: 'Session pool-configuratie heeft directe impact op je gebruikerservaring. De belangrijkste instellingen zijn het maximum aantal gelijktijdige sessies (hoeveel parallelle gebruikers je pool ondersteunt), het ready session-aantal (voorverwarmde sessies die wachten op verzoeken) en de idle timeout (hoe lang een inactieve sessie in leven blijft). Voor productie AI-applicaties stel je het ready session-aantal hoog genoeg in zodat gebruikers nooit wachten op een cold start. Een cold start betekent het provisioneren van een nieuwe Hyper-V sandbox, wat een paar seconden duurt — acceptabel voor batchverwerking, maar merkbaar in interactieve chatscenarios. De ready session-instances worden gefactureerd ook wanneer ze idle zijn, dus balanceer kosten tegen latentievereisten. Monitor de pool-gebruiksmetriek in Azure Monitor om in de loop der tijd de juiste grootte te bepalen. Als je AI-agent aangepaste Python-pakketten nodig heeft buiten de voorgeïnstalleerde set, kun je custom container-sessies gebruiken waarbij je je eigen Docker-image definieert met eventuele dependencies.'
        }
      },
      {
        title: {
          en: 'File Upload, Download, and the REST API',
          nl: 'Bestandsupload, Download en de REST API'
        },
        content: {
          en: 'Dynamic sessions include built-in file handling that makes data analysis workflows practical. Your application can upload CSV files, Excel spreadsheets, or any data files to a session before executing code. The AI-generated Python code can then read these files using standard pandas read_csv or openpyxl calls. After processing, the session can return generated files — charts saved as PNG, processed DataFrames exported to CSV, or PDF reports. The file API supports upload via multipart form data and download via direct GET requests. Under the hood, everything goes through a REST API on your session pool endpoint. You POST to /code/execute with your Python code and session identifier, and get back stdout, stderr, and execution results as structured JSON. This makes it straightforward to integrate from any language or framework, not just Python.',
          nl: 'Dynamic sessions bevatten ingebouwde bestandsverwerking die data-analyseworkflows praktisch maakt. Je applicatie kan CSV-bestanden, Excel-spreadsheets of andere databestanden uploaden naar een sessie voordat code wordt uitgevoerd. De door AI gegenereerde Python-code kan deze bestanden vervolgens lezen met standaard pandas read_csv of openpyxl aanroepen. Na verwerking kan de sessie gegenereerde bestanden retourneren — grafieken opgeslagen als PNG, verwerkte DataFrames geëxporteerd naar CSV, of PDF-rapporten. De bestands-API ondersteunt upload via multipart form data en download via directe GET-verzoeken. Onder de motorkap gaat alles via een REST API op je session pool-endpoint. Je POST naar /code/execute met je Python-code en sessie-identificatie, en krijgt stdout, stderr en uitvoeringsresultaten terug als gestructureerde JSON. Dit maakt het eenvoudig om te integreren vanuit elke taal of framework, niet alleen Python.'
        },
        code: {
          language: 'bash',
          code: `# Execute Python code in a dynamic session via REST API
curl -X POST "https://{session-pool}.{region}.azurecontainerapps.io/code/execute" \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "properties": {
      "identifier": "session-user-123",
      "codeInputType": "inline",
      "executionType": "synchronous",
      "code": "import pandas as pd\\ndf = pd.DataFrame({\\\"name\\\": [\\\"Alice\\\", \\\"Bob\\\"], \\\"score\\\": [95, 87]})\\nprint(df.describe())"
    }
  }'`
        }
      },
      {
        title: {
          en: 'Real-World Use Cases',
          nl: 'Praktische Toepassingen'
        },
        content: {
          en: 'The most compelling use case is the AI data analysis assistant. A user uploads a sales spreadsheet, asks a question in natural language, and the AI agent writes Python code to analyze the data, generates matplotlib visualizations, and returns insights — all running safely in a sandboxed session. Another strong pattern is code generation and validation: an AI coding assistant writes a function, then immediately executes it with test inputs in a dynamic session to verify correctness before presenting it to the user. Automated report generation is a third pattern — scheduled AI workflows that pull data from APIs, process it with pandas, generate charts, and compile everything into a PDF report. The sandbox isolation means you can let end users influence what code gets generated without worrying about prompt injection leading to server compromise. The blast radius of any malicious code is limited to that single ephemeral Hyper-V container.',
          nl: 'De meest overtuigende use case is de AI-data-analyse-assistent. Een gebruiker uploadt een verkoopspreadsheet, stelt een vraag in natuurlijke taal, en de AI-agent schrijft Python-code om de data te analyseren, genereert matplotlib-visualisaties en retourneert inzichten — allemaal veilig draaiend in een sandboxed sessie. Een ander sterk patroon is codegeneratie en validatie: een AI-codeerassistent schrijft een functie, voert deze vervolgens onmiddellijk uit met testinvoer in een dynamische sessie om correctheid te verifiëren voordat deze aan de gebruiker wordt gepresenteerd. Geautomatiseerde rapportgeneratie is een derde patroon — geplande AI-workflows die data ophalen van APIs, verwerken met pandas, grafieken genereren en alles compileren in een PDF-rapport. De sandbox-isolatie betekent dat je eindgebruikers kunt laten beïnvloeden welke code wordt gegenereerd zonder je zorgen te maken dat prompt injection leidt tot servercompromittering. De blast radius van elke kwaadaardige code is beperkt tot die enkele kortstondige Hyper-V container.'
        }
      }
    ],
    conclusion: {
      en: 'Azure Container Apps dynamic sessions fill a critical gap in the AI application stack. Before this feature, teams either ran untrusted code on their own servers (risky), built custom sandboxing infrastructure (expensive and complex), or simply avoided code execution features (limiting). Now you get production-grade sandboxed execution with a managed service, pre-built framework integrations, and pay-per-use pricing. If you are building AI agents that need to write and run code — whether for data analysis, code validation, or report generation — dynamic sessions should be your default choice.',
      nl: 'Azure Container Apps dynamic sessions vullen een kritieke kloof in de AI-applicatiestack. Vóór deze functie draaiden teams ofwel onvertrouwde code op hun eigen servers (riskant), bouwden aangepaste sandboxing-infrastructuur (duur en complex), of vermeden simpelweg code-uitvoeringsfuncties (beperkend). Nu krijg je productiewaardige sandboxed uitvoering met een managed service, voorgebouwde framework-integraties en pay-per-use prijzen. Als je AI-agents bouwt die code moeten schrijven en uitvoeren — of het nu gaat om data-analyse, codevalidatie of rapportgeneratie — moeten dynamic sessions je standaardkeuze zijn.'
    }
  }
};
