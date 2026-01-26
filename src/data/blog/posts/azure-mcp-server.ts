import type { BlogPost } from '../types';

export const azureMcpServerPost: BlogPost = {
  id: 'azure-mcp-server-ai-agents',
  title: {
    en: 'Azure MCP Server: Connecting AI Agents to Azure Resources',
    nl: 'Azure MCP Server: AI Agents Verbinden met Azure Resources'
  },
  description: {
    en: 'Learn how to use the Azure MCP Server to enable AI agents like GitHub Copilot to interact with Azure resources through natural language commands',
    nl: 'Leer hoe je de Azure MCP Server gebruikt om AI agents zoals GitHub Copilot te laten communiceren met Azure resources via natuurlijke taalcommandos'
  },
  date: '2025-12-06',
  author: 'Falk Krahl',
  tags: ['Azure', 'MCP', 'AI Agents', 'GitHub Copilot', 'Automation'],
  image: '/images/pexels/pexels-artificial-intelligence-robot.jpg',
  excerpt: {
    en: 'The Model Context Protocol (MCP) is revolutionizing how AI agents interact with cloud resources. Learn how Azure MCP Server enables GitHub Copilot and other AI tools to manage your Azure infrastructure.',
    nl: 'Het Model Context Protocol (MCP) revolutioneert hoe AI agents communiceren met cloud resources. Leer hoe Azure MCP Server GitHub Copilot en andere AI tools in staat stelt om je Azure infrastructuur te beheren.'
  },
  category: {
    en: 'AI & Automation',
    nl: 'AI & Automatisering'
  },
  readTime: 14,
  content: {
    introduction: {
      en: 'The Azure MCP Server represents a paradigm shift in how developers and AI agents interact with Azure resources. By implementing the Model Context Protocol (MCP), it enables AI agents like GitHub Copilot agent mode, OpenAI Agents SDK, and Microsoft Copilot Studio to execute Azure operations through natural language commands. This opens up powerful automation scenarios where your AI assistant becomes a true Azure operations partner.',
      nl: 'De Azure MCP Server vertegenwoordigt een paradigmaverschuiving in hoe ontwikkelaars en AI agents communiceren met Azure resources. Door het Model Context Protocol (MCP) te implementeren, stelt het AI agents zoals GitHub Copilot agent mode, OpenAI Agents SDK en Microsoft Copilot Studio in staat om Azure-operaties uit te voeren via natuurlijke taalcommandos. Dit opent krachtige automatiseringsscenarios waarbij je AI-assistent een echte Azure-operatiepartner wordt.'
    },
    sections: [
      {
        title: {
          en: 'What is the Model Context Protocol?',
          nl: 'Wat is het Model Context Protocol?'
        },
        content: {
          en: 'The Model Context Protocol (MCP) is an open protocol designed to manage how language models interact with external tools, memory, and context in a safe, structured way. MCP defines a client-server architecture with three key components: Hosts (apps that use MCP clients), Clients (components that manage connections to MCP servers), and Servers (programs that provide tools for performing actions). VS Code acts as a host, GitHub Copilot agent mode is the client, and Azure MCP Server is the server providing Azure-specific tools.',
          nl: 'Het Model Context Protocol (MCP) is een open protocol ontworpen om te beheren hoe taalmodellen communiceren met externe tools, geheugen en context op een veilige, gestructureerde manier. MCP definieert een client-server architectuur met drie kerncomponenten: Hosts (apps die MCP clients gebruiken), Clients (componenten die verbindingen met MCP servers beheren), en Servers (programmas die tools bieden voor het uitvoeren van acties). VS Code fungeert als host, GitHub Copilot agent mode is de client, en Azure MCP Server is de server die Azure-specifieke tools levert.'
        }
      },
      {
        title: {
          en: 'Setting Up Azure MCP Server',
          nl: 'Azure MCP Server Instellen'
        },
        content: {
          en: 'The Azure MCP Server uses Entra ID through the Azure Identity library for authentication, following Azure security best practices. To get started, you need to configure your MCP client (like VS Code with GitHub Copilot) to connect to the Azure MCP Server. The server supports various Azure services including Storage, Cosmos DB, App Service, and the Azure CLI.',
          nl: 'De Azure MCP Server gebruikt Entra ID via de Azure Identity library voor authenticatie, volgens Azure security best practices. Om te beginnen moet je je MCP client (zoals VS Code met GitHub Copilot) configureren om verbinding te maken met de Azure MCP Server. De server ondersteunt verschillende Azure services waaronder Storage, Cosmos DB, App Service en de Azure CLI.'
        },
        code: {
          language: 'json',
          code: `// .vscode/mcp.json configuration
{
  "servers": {
    "azure": {
      "command": "npx",
      "args": ["-y", "@azure/mcp-server"],
      "env": {
        "AZURE_SUBSCRIPTION_ID": "your-subscription-id"
      }
    }
  }
}`
        }
      },
      {
        title: {
          en: 'Available Azure MCP Tools',
          nl: 'Beschikbare Azure MCP Tools'
        },
        content: {
          en: 'The Azure MCP Server provides tools organized by Azure service. Key tool categories include: Storage operations (blob management, container operations), Cosmos DB (database queries, document management), App Service (deployment, configuration), Azure CLI integration, Azure Developer CLI (azd) for infrastructure provisioning, Kubernetes Service management, and Redis cache operations. Each tool can be invoked through natural language in your AI agent.',
          nl: 'De Azure MCP Server biedt tools georganiseerd per Azure service. Belangrijke tool-categorieën zijn: Storage-operaties (blob-beheer, container-operaties), Cosmos DB (database queries, documentbeheer), App Service (deployment, configuratie), Azure CLI-integratie, Azure Developer CLI (azd) voor infrastructuur-provisioning, Kubernetes Service-beheer en Redis cache-operaties. Elke tool kan worden aangeroepen via natuurlijke taal in je AI agent.'
        }
      },
      {
        title: {
          en: 'Deploying a Remote Azure MCP Server',
          nl: 'Een Remote Azure MCP Server Deployen'
        },
        content: {
          en: 'For production scenarios, you can deploy the Azure MCP Server as a self-hosted remote server on Azure Container Apps. This enables AI agents in Microsoft Copilot Studio and Azure AI Foundry to securely connect over HTTPS. Use the Azure Developer CLI (azd) with the official template to deploy: azd init --template Azure-Samples/azmcp-copilot-studio-aca-mi. The template configures managed identity for secure access to Azure resources.',
          nl: 'Voor productiescenarios kun je de Azure MCP Server deployen als een self-hosted remote server op Azure Container Apps. Dit stelt AI agents in Microsoft Copilot Studio en Azure AI Foundry in staat om veilig te verbinden via HTTPS. Gebruik de Azure Developer CLI (azd) met het officiële template om te deployen: azd init --template Azure-Samples/azmcp-copilot-studio-aca-mi. Het template configureert managed identity voor veilige toegang tot Azure resources.'
        }
      },
      {
        title: {
          en: 'Practical Use Cases',
          nl: 'Praktische Use Cases'
        },
        content: {
          en: 'With Azure MCP Server, you can ask your AI agent to: "Create a new storage container and upload this file", "Query my Cosmos DB for all orders from last week", "Scale my App Service to 3 instances", "Show me the logs from my Function App", or "Deploy this Bicep template to my resource group". The AI agent translates your natural language into Azure API calls, handles authentication, and returns results in a conversational format.',
          nl: 'Met Azure MCP Server kun je je AI agent vragen om: "Maak een nieuwe storage container en upload dit bestand", "Query mijn Cosmos DB voor alle bestellingen van vorige week", "Schaal mijn App Service naar 3 instances", "Toon me de logs van mijn Function App", of "Deploy dit Bicep template naar mijn resource group". De AI agent vertaalt je natuurlijke taal naar Azure API calls, handelt authenticatie af en retourneert resultaten in een conversatie-formaat.'
        }
      },
      {
        title: {
          en: 'Security Considerations',
          nl: 'Beveiligingsoverwegingen'
        },
        content: {
          en: 'Azure MCP Server follows security best practices: It uses Entra ID authentication (no stored credentials), supports managed identities for deployed servers, respects your existing RBAC permissions, and logs all operations for audit trails. The AI agent can only perform actions that your identity is authorized to do. Always review the actions before confirming when using agent mode.',
          nl: 'Azure MCP Server volgt security best practices: Het gebruikt Entra ID-authenticatie (geen opgeslagen credentials), ondersteunt managed identities voor gedeployde servers, respecteert je bestaande RBAC-permissies en logt alle operaties voor audit trails. De AI agent kan alleen acties uitvoeren waarvoor je identiteit geautoriseerd is. Review altijd de acties voordat je bevestigt bij gebruik van agent mode.'
        }
      }
    ],
    conclusion: {
      en: 'Azure MCP Server bridges the gap between conversational AI and Azure infrastructure management. As MCP adoption grows across the industry, expect this to become a standard way of interacting with cloud resources. Start experimenting today with GitHub Copilot agent mode to experience the future of cloud operations.',
      nl: 'Azure MCP Server overbrugt de kloof tussen conversationele AI en Azure infrastructuurbeheer. Naarmate MCP-adoptie groeit in de industrie, verwacht dat dit een standaard manier wordt om met cloud resources te communiceren. Begin vandaag te experimenteren met GitHub Copilot agent mode om de toekomst van cloud operations te ervaren.'
    }
  }
};
