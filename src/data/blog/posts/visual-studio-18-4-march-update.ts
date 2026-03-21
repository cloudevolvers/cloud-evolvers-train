import type { BlogPost } from '../types';

export const visualStudio184MarchUpdatePost: BlogPost = {
  id: 'visual-studio-18-4-march-update',
  title: {
    en: 'Visual Studio 2026 18.4 March Update: Custom Agents, Profiler Integration, and NuGet Fixes',
    nl: 'Visual Studio 2026 18.4 March-update: Custom Agents, Profiler-integratie en NuGet-fixes'
  },
  description: {
    en: 'Visual Studio 18.4.0 shipped March 10 with custom Copilot agents, agent skills, profiler-backed test analysis, and inline debug performance tips. 18.4.1 followed a week later with credential and AddressSanitizer fixes.',
    nl: 'Visual Studio 18.4.0 verscheen op 10 maart met custom Copilot-agents, agent skills, profiler-gestuurde testanalyse en inline debug-performancetips. 18.4.1 volgde een week later met credential- en AddressSanitizer-fixes.'
  },
  date: '2026-03-21',
  author: 'Yair Knijn',
  tags: ['Visual Studio', 'GitHub Copilot', 'Developer Tools', 'AI', '.NET'],
  image: '/images/pexels/pexels-developer-coding-setup.jpg',
  excerpt: {
    en: 'The 18.4 release makes Copilot a team player. Define custom agents with .agent.md files, let them discover reusable skills, and get profiler-backed performance advice while debugging. Here is what changed and why it matters.',
    nl: 'De 18.4-release maakt Copilot een teamspeler. Definieer custom agents met .agent.md-bestanden, laat ze herbruikbare skills ontdekken, en krijg profiler-gestuurde performanceadviezen tijdens het debuggen. Dit is wat er veranderd is en waarom het ertoe doet.'
  },
  category: {
    en: 'AI Tools',
    nl: 'AI Tools'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Visual Studio 18.4.0 dropped on March 10. A week later, 18.4.1 patched a handful of bugs. The headline features center on Copilot — but not the "autocomplete your code" kind. Microsoft is pushing Copilot toward something more structured: agents that understand your repo, skills that codify team knowledge, and profiler integration that actually tells you why your code is slow instead of just highlighting the line.\n\nThe update also brings practical quality-of-life improvements. NuGet vulnerability detection gets Copilot-assisted remediation. The JSON editor no longer requires the Web Development workload. And HTML copy/paste now preserves syntax coloring when you paste into Word or Azure DevOps work items. Small things, but the kind that save ten minutes a day.',
      nl: 'Visual Studio 18.4.0 verscheen op 10 maart. Een week later patchte 18.4.1 een handvol bugs. De hoofdfuncties draaien om Copilot — maar niet het "autocomplete je code"-type. Microsoft duwt Copilot richting iets gestructureerders: agents die je repo begrijpen, skills die teamkennis vastleggen, en profiler-integratie die je daadwerkelijk vertelt waarom je code traag is in plaats van alleen de regel te markeren.\n\nDe update brengt ook praktische verbeteringen. NuGet-kwetsbaarheidsdetectie krijgt Copilot-gestuurde remediatie. De JSON-editor vereist niet langer de Web Development-workload. En HTML kopieer/plak behoudt nu syntaxkleuring wanneer je plakt in Word of Azure DevOps work items. Kleine dingen, maar het soort dat tien minuten per dag bespaart.'
    },
    sections: [
      {
        title: {
          en: 'Custom Agents with .agent.md Files',
          nl: 'Custom Agents met .agent.md-bestanden'
        },
        content: {
          en: 'This is the most interesting feature in the release. You can now define custom Copilot agents by placing `.agent.md` files in your repository. Each file describes an agent: its name, a description, instructions for how it should behave, and optionally which MCP servers it can connect to.\n\nThe agent has full workspace awareness. It can read files, understand project structure, and follow repo-specific conventions you write in the instructions. Think of it as a specialized colleague who knows your codebase. A team working on a monorepo could have separate agents for the frontend, backend, and infrastructure layers — each with different instructions and tool access.\n\nThe MCP connections are where this gets powerful. You can wire an agent to an MCP server that talks to your CI/CD pipeline, your internal documentation, or a database schema tool. The agent becomes more than a chat — it becomes an interface to your team\'s infrastructure.\n\nOne thing to watch: these files are checked into your repo. That means agent definitions are versioned, reviewable in PRs, and shared across the team. No more "it works on my machine" for AI configuration.',
          nl: 'Dit is de interessantste feature in de release. Je kunt nu custom Copilot-agents definiëren door `.agent.md`-bestanden in je repository te plaatsen. Elk bestand beschrijft een agent: naam, beschrijving, instructies voor gedrag, en optioneel welke MCP-servers hij kan gebruiken.\n\nDe agent heeft volledig workspace-bewustzijn. Hij kan bestanden lezen, projectstructuur begrijpen en repo-specifieke conventies volgen die je in de instructies schrijft. Zie het als een gespecialiseerde collega die je codebase kent. Een team dat aan een monorepo werkt kan aparte agents hebben voor frontend, backend en infrastructuurlagen — elk met andere instructies en tool-toegang.\n\nDe MCP-verbindingen maken het echt krachtig. Je kunt een agent koppelen aan een MCP-server die praat met je CI/CD-pipeline, je interne documentatie of een databaseschematool. De agent wordt meer dan een chat — het wordt een interface naar de infrastructuur van je team.\n\nBelangrijk: deze bestanden worden ingecheckt in je repo. Dat betekent dat agentdefinities geversioned zijn, reviewbaar in PR\'s, en gedeeld over het team. Geen "het werkt op mijn machine" meer voor AI-configuratie.'
        },
        code: {
          language: 'markdown',
          title: 'Example .agent.md file',
          code: '---\nname: BackendReviewer\ndescription: Reviews backend C# code for performance and security issues\n---\n\n# Instructions\n\nYou are a code reviewer focused on the backend services in /src/Services/.\n\n## Rules\n- Flag any async method missing CancellationToken parameters\n- Check for SQL injection in raw queries\n- Verify that all controller actions have [Authorize] attributes\n- Suggest performance improvements for LINQ queries over large collections\n\n## MCP Servers\n- Use the database-schema server to validate entity relationships\n- Use the ci-pipeline server to check if tests pass before approving'
        },
        callout: {
          type: 'info',
          title: 'Version control matters',
          content: 'Agent definitions in <code>.agent.md</code> files are committed to your repo. They go through code review like any other code change. This keeps AI behavior consistent across the team.'
        }
      },
      {
        title: {
          en: 'Agent Skills: Reusable Instruction Sets',
          nl: 'Agent Skills: Herbruikbare instructiesets'
        },
        content: {
          en: 'Skills sit alongside agents but serve a different purpose. Where an agent is a persona with instructions, a skill is a specific capability — a recipe for a task. Agents discover skills automatically from well-known directories: `.github/skills/`, `.claude/skills/`, and `.agents/skills/`.\n\nA skill might describe how to generate a database migration for your ORM, how to scaffold a new microservice following your team\'s template, or how to write integration tests that connect to your test environment. The skill file contains the instructions. The agent reads them and follows the steps.\n\nThe practical benefit is deduplication. Instead of writing the same instructions in five different agents, you write the skill once and every agent can use it. It also means skills are discoverable — drop a new skill file into the directory and all agents in the repo can immediately use it.\n\nSkills do not replace documentation. But they bridge the gap between "here\'s a wiki page explaining our migration process" and "here\'s something an AI can actually execute." The quality of the skill depends entirely on how well you write the instructions. Garbage in, garbage out.',
          nl: 'Skills bestaan naast agents maar dienen een ander doel. Waar een agent een persona met instructies is, is een skill een specifieke capaciteit — een recept voor een taak. Agents ontdekken skills automatisch uit bekende mappen: `.github/skills/`, `.claude/skills/` en `.agents/skills/`.\n\nEen skill kan beschrijven hoe je een databasemigratie genereert voor je ORM, hoe je een nieuwe microservice scaffoldt volgens het template van je team, of hoe je integratietests schrijft die verbinden met je testomgeving. Het skillbestand bevat de instructies. De agent leest ze en volgt de stappen.\n\nHet praktische voordeel is deduplicatie. In plaats van dezelfde instructies in vijf verschillende agents te schrijven, schrijf je de skill eenmaal en elke agent kan hem gebruiken. Het betekent ook dat skills vindbaar zijn — zet een nieuw skillbestand in de map en alle agents in de repo kunnen het direct gebruiken.\n\nSkills vervangen geen documentatie. Maar ze overbruggen de kloof tussen "hier is een wikipagina die ons migratieproces uitlegt" en "hier is iets dat een AI daadwerkelijk kan uitvoeren." De kwaliteit van de skill hangt volledig af van hoe goed je de instructies schrijft. Rommel erin, rommel eruit.'
        },
        code: {
          language: 'markdown',
          title: 'Example skill file in .agents/skills/',
          code: '---\nname: create-api-endpoint\ndescription: Scaffolds a new REST API endpoint following team conventions\n---\n\n# Steps\n\n1. Create a new controller in /src/Controllers/ named {Name}Controller.cs\n2. Add the [ApiController] and [Route("api/[controller]")] attributes\n3. Inject the corresponding service via constructor DI\n4. Add [Authorize] to every action method\n5. Return IActionResult with proper status codes (201 for POST, 204 for DELETE)\n6. Add a corresponding integration test in /tests/Integration/',
          collapsed: true
        }
      },
      {
        title: {
          en: 'Profile Tests and Debug-Time Performance Tips',
          nl: 'Profileringstests en Debug-time performancetips'
        },
        content: {
          en: 'Two separate features that work well together. First: you can now right-click any test in Test Explorer and ask Copilot to profile it. Visual Studio runs both CPU sampling and instrumentation profiling, collects the data, and hands it to Copilot for analysis. Copilot then tells you where the test spends its time and suggests optimizations.\n\nThis is more useful than it sounds. Performance tests are often written but rarely analyzed. The data sits in `.diagsession` files that nobody opens. Having Copilot summarize the hot paths and suggest fixes lowers the barrier from "I should look at this sometime" to "here are the three methods eating 80% of the runtime."\n\nSecond: the Profiler Agent now provides inline performance tips while you step through code in the debugger. You hit a breakpoint, step over a method call, and a tooltip appears with timing data and a suggestion. Click the suggestion and Copilot explains the bottleneck and proposes a fix. The tips come from real profiler data, not heuristics. If a dictionary lookup takes 2ms because the key type has a bad `GetHashCode` implementation, it will tell you that specifically.\n\nThe combination matters. Profile during testing, get tips during debugging. Two angles on the same problem.',
          nl: 'Twee aparte features die goed samenwerken. Ten eerste: je kunt nu rechts klikken op elke test in Test Explorer en Copilot vragen om deze te profileren. Visual Studio voert zowel CPU-sampling als instrumentatieprofiling uit, verzamelt de data en geeft het aan Copilot voor analyse. Copilot vertelt je vervolgens waar de test zijn tijd besteedt en stelt optimalisaties voor.\n\nDit is nuttiger dan het klinkt. Performancetests worden vaak geschreven maar zelden geanalyseerd. De data zit in `.diagsession`-bestanden die niemand opent. Copilot de hot paths laten samenvatten en fixes voorstellen verlaagt de drempel van "ik moet hier eens naar kijken" naar "hier zijn de drie methoden die 80% van de runtime opeten."\n\nTen tweede: de Profiler Agent geeft nu inline performancetips terwijl je door code stapt in de debugger. Je bereikt een breakpoint, stapt over een methodeaanroep, en een tooltip verschijnt met timingdata en een suggestie. Klik op de suggestie en Copilot legt het knelpunt uit en stelt een fix voor. De tips komen van echte profilerdata, niet van heuristieken. Als een dictionary-lookup 2ms duurt omdat het key-type een slechte `GetHashCode`-implementatie heeft, vertelt het je dat specifiek.\n\nDe combinatie is belangrijk. Profileer tijdens testen, krijg tips tijdens debuggen. Twee invalshoeken op hetzelfde probleem.'
        },
        callout: {
          type: 'info',
          title: 'Real data, not guesses',
          content: 'The debug-time performance tips are backed by actual profiler traces, not static analysis. The suggestions reference measured timings from your running code.'
        }
      },
      {
        title: {
          en: 'NuGet Vulnerability Fixes and Other Improvements',
          nl: 'NuGet-kwetsbaarheidsfix en andere verbeteringen'
        },
        content: {
          en: 'Solution Explorer now shows vulnerability indicators on NuGet packages. That existed before. What is new: right-click a vulnerable package and Copilot will figure out the right update path. It resolves version conflicts, finds the nearest safe version, and handles transitive dependency chains. For projects with deep dependency trees, this saves real time compared to manually checking each package against the NuGet advisory database.\n\nThe JSON editor change is small but welcome. Previously, you needed the ASP.NET and Web Development workload installed to get JSON IntelliSense, formatting, and schema validation. Now it is part of the Core Editor. If you work on configuration files, ARM templates, or Bicep parameter files, you get proper JSON support without installing extra workloads.\n\nHTML rich copy is useful for anyone who writes documentation alongside code. Select a code block, copy it, and paste into Word, Outlook, or an Azure DevOps work item. The syntax coloring comes along. No more screenshots of code in documents.\n\nC++ app modernization with Copilot entered public preview. It analyzes legacy C++ patterns and suggests modern alternatives — smart pointers instead of raw pointers, range-based for loops, `std::optional` instead of null sentinel values. It is preview quality, but for large legacy codebases it provides a starting point for modernization efforts.',
          nl: 'Solution Explorer toont nu kwetsbaarheidsindicatoren op NuGet-pakketten. Dat bestond al. Wat nieuw is: rechtsklik op een kwetsbaar pakket en Copilot zoekt het juiste updatepad. Het lost versieconflicten op, vindt de dichtstbijzijnde veilige versie en handelt transitieve afhankelijkheidsketens af. Voor projecten met diepe dependency trees bespaart dit echt tijd vergeleken met handmatig elk pakket controleren tegen de NuGet-adviesdatabase.\n\nDe JSON-editorwijziging is klein maar welkom. Eerder had je de ASP.NET en Web Development-workload nodig voor JSON IntelliSense, opmaak en schemavalidatie. Nu is het onderdeel van de Core Editor. Als je werkt met configuratiebestanden, ARM-templates of Bicep-parameterbestanden, krijg je goede JSON-ondersteuning zonder extra workloads te installeren.\n\nHTML rich copy is handig voor iedereen die documentatie schrijft naast code. Selecteer een codeblok, kopieer het en plak het in Word, Outlook of een Azure DevOps work item. De syntaxkleuring gaat mee. Geen screenshots van code in documenten meer.\n\nC++ app-modernisering met Copilot is in public preview. Het analyseert legacy C++-patronen en stelt moderne alternatieven voor — smart pointers in plaats van raw pointers, range-based for-loops, `std::optional` in plaats van null-schildwachtwaarden. Het is preview-kwaliteit, maar voor grote legacy codebases biedt het een startpunt voor modernisering.'
        },
        code: {
          language: 'xml',
          title: 'NuGet vulnerability detection in project file',
          code: '<!-- Visual Studio flags this package as vulnerable -->\n<PackageReference Include="System.Text.Json" Version="6.0.0" />\n\n<!-- Copilot suggests the safe upgrade -->\n<!-- Right-click → "Fix vulnerability with Copilot" -->\n<PackageReference Include="System.Text.Json" Version="6.0.11" />',
          collapsed: true
        }
      },
      {
        title: {
          en: '18.4.1 Bug Fixes',
          nl: '18.4.1 Bugfixes'
        },
        content: {
          en: 'A week after the main release, 18.4.1 shipped on March 17 with targeted fixes. The most impactful: GitHub credential refresh was broken. If your GitHub token expired during a session, Visual Studio would fail to reauthenticate until you restarted. Fixed now.\n\nThe devenv command-line switches fix matters for CI/CD pipelines. Several switches that worked in 18.3 broke in 18.4.0 — `/build`, `/deploy`, and `/runexit` were affected. If you use Visual Studio in automated build scripts (some teams do, especially for legacy solutions that resist MSBuild migration), this was a blocker.\n\nAddressSanitizer on Xbox got a fix too. Niche, but if you are doing Xbox development with C++ and rely on ASan for memory safety checks, 18.4.0 was producing false positives. The fix corrects the memory layout assumptions for Xbox targets.\n\nThese are the kind of patches that make point releases worthwhile. None of them are exciting. All of them prevent real problems.',
          nl: 'Een week na de hoofdrelease verscheen 18.4.1 op 17 maart met gerichte fixes. De meest impactvolle: GitHub-credential refresh was kapot. Als je GitHub-token verliep tijdens een sessie, kon Visual Studio niet herauthenticeren tot je het herstartte. Nu opgelost.\n\nDe devenv command-line switches fix is belangrijk voor CI/CD-pipelines. Verschillende switches die werkten in 18.3 waren stuk in 18.4.0 — `/build`, `/deploy` en `/runexit` waren getroffen. Als je Visual Studio gebruikt in geautomatiseerde buildscripts (sommige teams doen dat, vooral voor legacy solutions die zich verzetten tegen MSBuild-migratie), was dit een blocker.\n\nAddressSanitizer op Xbox kreeg ook een fix. Niche, maar als je Xbox-ontwikkeling doet met C++ en vertrouwt op ASan voor geheugenveiligheidscontroles, produceerde 18.4.0 false positives. De fix corrigeert de geheugenlay-outaannames voor Xbox-targets.\n\nDit zijn het soort patches dat point releases de moeite waard maakt. Geen ervan is spannend. Allemaal voorkomen ze echte problemen.'
        }
      }
    ],
    conclusion: {
      en: 'The 18.4 release signals where Microsoft wants Visual Studio to go. Copilot is not just an autocomplete engine anymore — it is becoming a platform for team-specific AI tooling. Custom agents and skills let you encode your team\'s knowledge in a way that scales. The profiler integration is the best example of AI meeting real engineering: instead of guessing at performance, you get data-backed suggestions tied to actual execution traces.\n\nThe practical improvements matter too. NuGet vulnerability remediation, JSON editing without extra workloads, and rich HTML copy are the kind of small wins that add up over months. If you are on 18.3, the upgrade is straightforward. Just make sure you get 18.4.1 — the GitHub credential fix alone justifies it for anyone using Git in Visual Studio.',
      nl: 'De 18.4-release laat zien waar Microsoft Visual Studio naartoe wil. Copilot is niet langer alleen een autocomplete-engine — het wordt een platform voor teamspecifiek AI-tooling. Custom agents en skills laten je de kennis van je team vastleggen op een manier die schaalt. De profiler-integratie is het beste voorbeeld van AI die echte engineering ontmoet: in plaats van gissen naar performance, krijg je datagestuurde suggesties gekoppeld aan daadwerkelijke executietraces.\n\nDe praktische verbeteringen tellen ook mee. NuGet-kwetsbaarheidsremediatie, JSON-bewerking zonder extra workloads, en rich HTML-kopiëren zijn het soort kleine winsten die optellen over maanden. Als je op 18.3 zit, is de upgrade eenvoudig. Zorg er wel voor dat je 18.4.1 pakt — de GitHub-credentialfix alleen al rechtvaardigt het voor iedereen die Git gebruikt in Visual Studio.'
    }
  }
};
