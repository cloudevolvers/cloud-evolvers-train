import type { BlogPost } from '../types';

export const mcpAppsCopilotAgentsPost: BlogPost = {
  id: 'mcp-apps-copilot-agents',
  title: {
    en: 'MCP Apps: Interactive UI Inside M365 Copilot Declarative Agents',
    nl: 'MCP Apps: interactieve UI binnen M365 Copilot declarative agents'
  },
  description: {
    en: 'Microsoft is letting M365 Copilot declarative agents render forms, dashboards, and approval flows directly in chat through MCP Apps. Here is the pattern and what to be careful about.',
    nl: 'Microsoft laat M365 Copilot declarative agents formulieren, dashboards en approval-flows direct in de chat renderen via MCP Apps. Het patroon en waar je op moet letten.'
  },
  date: '2026-04-10',
  author: 'Yair Knijn',
  tags: ['M365 Copilot', 'MCP', 'Declarative Agents', 'Copilot Studio', 'Microsoft 365'],
  image: '/images/pexels/pexels-developer-coding-setup.jpg',
  excerpt: {
    en: 'Declarative agents in M365 Copilot can now render real interactive UI inside the chat surface — expense approvals, project dashboards, side-by-side document compares — without bouncing the user out to a separate app.',
    nl: 'Declarative agents in M365 Copilot kunnen nu echte interactieve UI in het chatoppervlak renderen — declaratie-approvals, projectdashboards, zij-aan-zij document-vergelijkingen — zonder de gebruiker uit een aparte app te schoppen.'
  },
  category: {
    en: 'Microsoft 365',
    nl: 'Microsoft 365'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'Microsoft 365 Copilot declarative agents got a meaningful upgrade with MCP Apps: agents can now render interactive UI components — forms, dashboards, document comparisons, approval flows — directly inside the Copilot chat experience. This is the feature that pushes declarative agents past "smart chatbot" and into "actual app surface". For developers building on Copilot, the question is no longer whether to bounce users out to a Power App or Teams tab — it is what shape the in-chat UI should take.',
      nl: 'Microsoft 365 Copilot declarative agents kregen een serieuze upgrade met MCP Apps: agents kunnen nu interactieve UI-componenten — formulieren, dashboards, document-vergelijkingen, approval-flows — direct in de Copilot chat-ervaring renderen. Dit is de feature die declarative agents voorbij "slimme chatbot" duwt en richting "echt app-oppervlak". Voor developers die op Copilot bouwen is de vraag niet meer of je gebruikers naar een Power App of Teams-tab moet schoppen — het is welke vorm de in-chat UI moet hebben.'
    },
    sections: [
      {
        title: {
          en: 'What MCP Apps actually let you do',
          nl: 'Wat MCP Apps je echt laten doen'
        },
        content: {
          en: 'An MCP App is a UI surface served by an MCP server that the Copilot agent can invoke and render inline. Microsoft\'s reference examples show three patterns: an expense approval form (agent collects details, surfaces a confirm card, posts to the back-end), a project dashboard (agent renders a live status panel with charts), and a document comparison view (agent shows two contracts side by side with diffs highlighted). The user interacts with the rendered UI without leaving the Copilot pane.',
          nl: 'Een MCP App is een UI-oppervlak dat door een MCP-server wordt geleverd en dat de Copilot-agent inline kan aanroepen en renderen. Microsofts referentievoorbeelden tonen drie patronen: een declaratie-approval-formulier (agent verzamelt details, toont een confirm-kaart, post naar de back-end), een projectdashboard (agent rendert een live status-paneel met grafieken), en een document-vergelijking (agent toont twee contracten zij-aan-zij met diffs gemarkeerd). De gebruiker werkt met de gerenderde UI zonder het Copilot-paneel te verlaten.'
        }
      },
      {
        title: {
          en: 'Where this fits compared to Power Apps and Teams tabs',
          nl: 'Waar dit past versus Power Apps en Teams-tabs'
        },
        content: {
          en: 'Power Apps and Teams tabs are still the right answer when you need a full app — many screens, deep navigation, complex state. MCP Apps shine for short, transactional interactions that belong in the conversation: confirm-and-submit, pick-from-a-list, review-and-decide. Trying to build a full CRM inside an MCP App will fight the model of conversational interaction. Trying to build a quick approval inside Power Apps gives the user three context switches when zero would do.',
          nl: 'Power Apps en Teams-tabs zijn nog steeds het juiste antwoord als je een volledige app nodig hebt — veel schermen, diepe navigatie, complexe state. MCP Apps blinken uit voor korte, transactionele interacties die thuishoren in het gesprek: bevestig-en-verstuur, kies-uit-lijst, beoordeel-en-beslis. Een hele CRM bouwen in een MCP App vecht tegen het model van conversationele interactie. Een snelle approval in Power Apps bouwen geeft de gebruiker drie context-switches waar nul genoeg was.'
        }
      },
      {
        title: {
          en: 'Building one with the Agents Toolkit',
          nl: 'Een MCP App bouwen met de Agents Toolkit'
        },
        content: {
          en: 'The Microsoft 365 Agents Toolkit plugin (in VS Code, Claude Code, or GitHub Copilot CLI) lets you scaffold an MCP App through natural language prompts. Tell it what the form should collect, what back-end it talks to, and what confirmation should look like — the toolkit generates the manifest, the MCP server skeleton, and the deployment scaffolding. You still write the actual back-end logic, but the integration plumbing is generated correctly the first time.',
          nl: 'De Microsoft 365 Agents Toolkit plugin (in VS Code, Claude Code of GitHub Copilot CLI) laat je een MCP App scaffolden via natuurlijke taal. Vertel het wat het formulier moet verzamelen, met welke back-end het praat, en hoe de bevestiging eruit moet zien — de toolkit genereert het manifest, de MCP server skeleton en de deployment-scaffolding. Je schrijft nog steeds de eigenlijke back-end logica, maar de integratie-plumbing is direct goed gegenereerd.'
        },
        code: {
          language: 'json',
          code: `// Snippet of an MCP App manifest entry inside a declarative agent
{
  "name": "expense-approval",
  "description": "Render an expense approval form for finance reviewers",
  "type": "mcp_app",
  "server": {
    "url": "https://approvals.contoso.com/mcp",
    "auth": {
      "type": "entra_id",
      "scopes": ["api://approvals.contoso.com/.default"]
    }
  },
  "trigger": {
    "intent": "approve|reject expense"
  }
}`
        }
      },
      {
        title: {
          en: 'Governance: who is authorized to render what',
          nl: 'Governance: wie mag wat renderen'
        },
        content: {
          en: 'MCP Apps render in the user\'s Copilot session, which means they inherit the user\'s identity. The MCP server should validate that identity on every call — do not trust the agent to enforce authorization for you. Same DLP, sensitivity label, and Purview rules that already apply to Copilot data apply here. If your back-end serves financial or HR data, the MCP App pattern is convenient but does not loosen the security boundaries around that data — your existing access control still has to be right.',
          nl: 'MCP Apps renderen in de Copilot-sessie van de gebruiker, wat betekent dat ze de identity van de gebruiker overerven. De MCP-server moet die identity bij elke call valideren — vertrouw de agent niet om de autorisatie voor je af te dwingen. Dezelfde DLP-, sensitivity label- en Purview-regels die al voor Copilot-data gelden, gelden hier ook. Serveert je back-end financiële of HR-data, dan is het MCP App-patroon handig maar verlaagt het de security-grenzen om die data niet — je bestaande access control moet nog steeds kloppen.'
        }
      }
    ],
    conclusion: {
      en: 'MCP Apps are the right tool for the right job: short, transactional, conversation-shaped UI inside Copilot. Use them for approvals, lookups, and confirmations. Keep using Power Apps and Teams tabs for full apps. And before shipping an MCP App that touches sensitive data, audit the back-end\'s authorization the way you would for any other internet-facing API — the chat surface does not change the security perimeter.',
      nl: 'MCP Apps zijn het juiste gereedschap voor het juiste klusje: korte, transactionele, conversatie-vormige UI binnen Copilot. Gebruik ze voor approvals, lookups en bevestigingen. Blijf Power Apps en Teams-tabs gebruiken voor volledige apps. En audit voordat je een MCP App live zet die gevoelige data raakt de autorisatie van de back-end zoals je dat voor elke andere internet-facing API zou doen — het chat-oppervlak verandert de security-perimeter niet.'
    }
  }
};
