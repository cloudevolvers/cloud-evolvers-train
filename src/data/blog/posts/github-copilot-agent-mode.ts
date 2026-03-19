import type { BlogPost } from '../types';

export const githubCopilotAgentModePost: BlogPost = {
  id: 'github-copilot-agent-mode',
  title: {
    en: 'GitHub Copilot Agent Mode: From Autocomplete to Autonomous Coding',
    nl: 'GitHub Copilot Agent Mode: Van Autocomplete naar Autonoom Programmeren'
  },
  description: {
    en: 'Discover how GitHub Copilot evolved from simple code completions to agent mode, enabling autonomous multi-file editing, terminal commands, and iterative problem solving.',
    nl: 'Ontdek hoe GitHub Copilot evolueerde van eenvoudige code-aanvullingen naar agent mode, met autonome multi-bestandbewerking, terminalcommando\'s en iteratief probleemoplossen.'
  },
  date: '2026-03-10',
  author: 'Yair Knijn',
  tags: ['GitHub', 'Copilot', 'AI', 'Developer Tools', 'Productivity'],
  image: '/images/pexels/pexels-developer-coding-setup.jpg',
  excerpt: {
    en: 'GitHub Copilot agent mode transforms the AI assistant from a suggestion engine into an autonomous coding partner that can execute multi-step tasks, run terminal commands, and iterate on errors — all from a single prompt.',
    nl: 'GitHub Copilot agent mode transformeert de AI-assistent van een suggestie-engine naar een autonome codeerpartner die meerstaps-taken kan uitvoeren, terminalcommando\'s kan draaien en kan itereren op fouten — allemaal vanuit één enkele prompt.'
  },
  category: {
    en: 'AI Tools',
    nl: 'AI Tools'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'When GitHub Copilot launched, it was impressive but limited — an autocomplete engine that predicted the next few lines of code. Fast forward to 2026, and Copilot has evolved into something fundamentally different. Agent mode does not just suggest code; it plans, executes, observes the results, and iterates until the task is done. It can create files, run terminal commands, fix build errors, and work across an entire codebase. This is not a minor feature update — it changes the way you interact with an AI coding assistant. Let me walk through what agent mode actually does, when to use it, and where the boundaries are.',
      nl: 'Toen GitHub Copilot lanceerde, was het indrukwekkend maar beperkt — een autocomplete-engine die de volgende paar regels code voorspelde. Snel vooruit naar 2026, en Copilot is geëvolueerd naar iets fundamenteel anders. Agent mode suggereert niet alleen code; het plant, voert uit, observeert de resultaten en itereert totdat de taak klaar is. Het kan bestanden aanmaken, terminalcommando\'s uitvoeren, buildfouten oplossen en door een hele codebase werken. Dit is geen kleine functie-update — het verandert de manier waarop je communiceert met een AI-codeerassistent. Laat me doorlopen wat agent mode daadwerkelijk doet, wanneer je het moet gebruiken en waar de grenzen liggen.'
    },
    sections: [
      {
        title: {
          en: 'How Agent Mode Works Under the Hood',
          nl: 'Hoe Agent Mode Onder de Motorkap Werkt'
        },
        content: {
          en: 'Agent mode operates as an agentic loop. You give it a task description in natural language, and it breaks the work down into steps. For each step, it can read files to understand context, propose edits across multiple files, run terminal commands to test changes, observe compiler errors or test failures, and autonomously fix issues before moving to the next step. The key difference from chat mode is the autonomy: in chat mode, Copilot gives you a response and waits. In agent mode, it keeps going — running commands, checking results, and adapting its approach. If a build fails after an edit, it reads the error output, identifies the issue, and applies a fix without you asking. The model backing agent mode uses tool-calling capabilities to invoke file operations, terminal access, and workspace search as discrete steps in its reasoning chain.',
          nl: 'Agent mode werkt als een agentische lus. Je geeft het een taakbeschrijving in natuurlijke taal, en het breekt het werk op in stappen. Voor elke stap kan het bestanden lezen om context te begrijpen, bewerkingen voorstellen over meerdere bestanden, terminalcommando\'s uitvoeren om wijzigingen te testen, compilerfouten of testfouten observeren, en autonoom problemen oplossen voordat het naar de volgende stap gaat. Het belangrijkste verschil met chat mode is de autonomie: in chat mode geeft Copilot je een antwoord en wacht. In agent mode gaat het door — commando\'s uitvoeren, resultaten controleren en zijn aanpak aanpassen. Als een build faalt na een bewerking, leest het de foutuitvoer, identificeert het probleem en past een fix toe zonder dat jij erom vraagt. Het model dat agent mode aandrijft gebruikt tool-calling mogelijkheden om bestandsoperaties, terminaltoegang en werkruimte-zoeken als discrete stappen in zijn redeneerketen aan te roepen.'
        }
      },
      {
        title: {
          en: 'Multi-File Editing and Codebase-Wide Changes',
          nl: 'Multi-Bestandbewerking en Codebase-Brede Wijzigingen'
        },
        content: {
          en: 'The real power of agent mode shows when a task touches multiple files. Ask it to "add a new API endpoint for user preferences with validation, tests, and update the OpenAPI spec," and it will create the route handler, add validation middleware, write test files, update the API specification document, and modify any barrel exports or route registrations. It uses workspace indexing to understand your project structure, coding conventions, and import patterns. This is not copy-paste from Stack Overflow — it reads your existing code to match the style. In practice, I find it handles TypeScript and Python projects particularly well because the type information gives the model strong signals about what the code should look like. It is less reliable with loosely typed codebases where conventions are inconsistent.',
          nl: 'De echte kracht van agent mode toont zich wanneer een taak meerdere bestanden raakt. Vraag het om "een nieuw API-endpoint toe te voegen voor gebruikersvoorkeuren met validatie, tests, en werk de OpenAPI-spec bij," en het zal de route handler aanmaken, validatie-middleware toevoegen, testbestanden schrijven, het API-specificatiedocument bijwerken, en eventuele barrel exports of routeregistraties wijzigen. Het gebruikt werkruimte-indexering om je projectstructuur, codeerconventies en importpatronen te begrijpen. Dit is geen copy-paste van Stack Overflow — het leest je bestaande code om de stijl te matchen. In de praktijk vind ik dat het TypeScript- en Python-projecten bijzonder goed afhandelt omdat de type-informatie het model sterke signalen geeft over hoe de code eruit moet zien. Het is minder betrouwbaar met losjes getypeerde codebases waar conventies inconsistent zijn.'
        }
      },
      {
        title: {
          en: 'Copilot Workspace and the Coding Agent',
          nl: 'Copilot Workspace en de Coding Agent'
        },
        content: {
          en: 'Beyond the VS Code agent mode, GitHub has built two additional agentic experiences. Copilot Workspace takes a GitHub issue and generates a complete plan: it analyzes the issue, proposes file changes across the repository, and lets you review and refine the plan before generating code. Think of it as agent mode but starting from an issue rather than a chat prompt. Then there is the coding agent — this one runs in GitHub Actions, not your local editor. You can assign an issue to Copilot, and it will create a branch, make changes, run your CI pipeline, fix any failures, and open a pull request. It operates asynchronously, so you can assign it a task and come back later to review the PR. The coding agent respects your repository\'s existing CI checks, so if your tests or linters fail, it iterates on the fix just like agent mode does locally.',
          nl: 'Naast de VS Code agent mode heeft GitHub twee extra agentische ervaringen gebouwd. Copilot Workspace neemt een GitHub issue en genereert een compleet plan: het analyseert de issue, stelt bestandswijzigingen voor over de hele repository, en laat je het plan reviewen en verfijnen voordat code wordt gegenereerd. Zie het als agent mode maar startend vanuit een issue in plaats van een chatprompt. Dan is er de coding agent — deze draait in GitHub Actions, niet in je lokale editor. Je kunt een issue toewijzen aan Copilot, en het zal een branch aanmaken, wijzigingen doorvoeren, je CI-pijplijn draaien, eventuele fouten oplossen en een pull request openen. Het werkt asynchroon, dus je kunt het een taak toewijzen en later terugkomen om de PR te reviewen. De coding agent respecteert de bestaande CI-checks van je repository, dus als je tests of linters falen, itereert het op de fix net zoals agent mode lokaal doet.'
        }
      },
      {
        title: {
          en: 'MCP Integration: Extending Agent Mode with Custom Tools',
          nl: 'MCP-Integratie: Agent Mode Uitbreiden met Aangepaste Tools'
        },
        content: {
          en: 'The Model Context Protocol (MCP) integration is what makes agent mode truly extensible. By configuring MCP servers in your workspace, you give Copilot access to external tools — databases, APIs, cloud services, documentation systems — that it can invoke as part of its agentic workflow. For example, you can connect an Azure MCP server so the agent can query your cloud resources, or a Jira MCP server so it can read ticket details and update status. MCP servers are defined in a .vscode/mcp.json file and can be shared across the team via version control. The agent discovers available tools from the MCP server and uses them when they are relevant to the task. This composability is what separates agent mode from a simple chat interface — it becomes a platform that adapts to your team\'s specific toolchain rather than being limited to just file editing and terminal access.',
          nl: 'De Model Context Protocol (MCP) integratie maakt agent mode werkelijk uitbreidbaar. Door MCP-servers in je werkruimte te configureren, geef je Copilot toegang tot externe tools — databases, API\'s, cloudservices, documentatiesystemen — die het kan aanroepen als onderdeel van zijn agentische workflow. Je kunt bijvoorbeeld een Azure MCP-server verbinden zodat de agent je cloudresources kan bevragen, of een Jira MCP-server zodat het ticketdetails kan lezen en status kan bijwerken. MCP-servers worden gedefinieerd in een .vscode/mcp.json bestand en kunnen gedeeld worden met het team via versiebeheer. De agent ontdekt beschikbare tools van de MCP-server en gebruikt ze wanneer ze relevant zijn voor de taak. Deze composeerbaarheid is wat agent mode onderscheidt van een eenvoudige chatinterface — het wordt een platform dat zich aanpast aan de specifieke toolchain van je team in plaats van beperkt te zijn tot alleen bestandsbewerking en terminaltoegang.'
        }
      },
      {
        title: {
          en: 'When to Use Agent Mode vs. Inline Completions',
          nl: 'Wanneer Agent Mode vs. Inline Aanvullingen Gebruiken'
        },
        content: {
          en: 'Agent mode is not always the right tool. For writing a single function, filling in a type definition, or completing a pattern you have already started, inline completions are faster and less disruptive. Use agent mode when the task is multi-step and would take you more than a few minutes manually: scaffolding a new feature across multiple files, refactoring a module with many dependents, writing a comprehensive test suite, or debugging a complex issue that requires reading logs and modifying code. A good rule of thumb: if you can describe the task in one sentence and it involves more than two files, agent mode will likely save you time. If you are just writing code and know exactly what you want, tab-completion keeps you in flow. One practical tip — start agent mode prompts with context about what the project does and any constraints. The more specific your instruction, the fewer iterations the agent needs. Vague prompts lead to multiple correction rounds, which negates the time savings.',
          nl: 'Agent mode is niet altijd het juiste gereedschap. Voor het schrijven van een enkele functie, het invullen van een typedefinitie, of het voltooien van een patroon dat je al bent begonnen, zijn inline aanvullingen sneller en minder verstorend. Gebruik agent mode wanneer de taak meerstaps is en je meer dan een paar minuten handmatig zou kosten: een nieuwe feature opzetten over meerdere bestanden, een module refactoren met veel afhankelijkheden, een uitgebreide testsuite schrijven, of een complex probleem debuggen dat het lezen van logs en het wijzigen van code vereist. Een goede vuistregel: als je de taak in één zin kunt beschrijven en het meer dan twee bestanden betreft, zal agent mode je waarschijnlijk tijd besparen. Als je gewoon code schrijft en precies weet wat je wilt, houdt tab-aanvulling je in de flow. Een praktische tip — begin agent mode-prompts met context over wat het project doet en eventuele beperkingen. Hoe specifieker je instructie, hoe minder iteraties de agent nodig heeft. Vage prompts leiden tot meerdere correctierondes, wat de tijdsbesparing tenietdoet.'
        }
      }
    ],
    conclusion: {
      en: 'GitHub Copilot agent mode represents a genuine shift in developer tooling. It is not just autocomplete with extra steps — it is an autonomous collaborator that can plan, execute, and iterate on coding tasks. Combined with Copilot Workspace for issue-driven development and the coding agent for asynchronous CI-integrated work, the Copilot ecosystem now covers the full spectrum from keystroke-level assistance to fully autonomous coding. The MCP integration ensures it will only become more capable as teams connect more of their toolchain. Start with well-scoped tasks, review the changes carefully, and you will quickly find the balance between delegation and control.',
      nl: 'GitHub Copilot agent mode vertegenwoordigt een echte verschuiving in ontwikkelaarstools. Het is niet gewoon autocomplete met extra stappen — het is een autonome medewerker die kan plannen, uitvoeren en itereren op codeertaken. Gecombineerd met Copilot Workspace voor issue-gedreven ontwikkeling en de coding agent voor asynchroon CI-geïntegreerd werk, dekt het Copilot-ecosysteem nu het volledige spectrum van toetsaanslag-niveau assistentie tot volledig autonoom programmeren. De MCP-integratie zorgt ervoor dat het alleen maar capabeler wordt naarmate teams meer van hun toolchain aansluiten. Begin met goed afgebakende taken, review de wijzigingen zorgvuldig, en je zult snel de balans vinden tussen delegatie en controle.'
    }
  }
};
