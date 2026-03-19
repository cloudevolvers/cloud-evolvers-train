import type { BlogPost } from '../types';

export const azureDeploymentEnvironmentsPost: BlogPost = {
  id: 'azure-deployment-environments-platform-engineering',
  title: {
    en: 'Azure Deployment Environments: Self-Service Infrastructure for Development Teams',
    nl: 'Azure Deployment Environments: Self-Service Infrastructuur voor Ontwikkelteams'
  },
  description: {
    en: 'How Azure Deployment Environments enables platform engineering teams to provide governed self-service infrastructure using IaC templates with Bicep, Terraform, or Pulumi',
    nl: 'Hoe Azure Deployment Environments platform engineering-teams in staat stelt om beheerde self-service infrastructuur te bieden met IaC-templates in Bicep, Terraform of Pulumi'
  },
  date: '2026-01-05',
  author: 'Yair Knijn',
  tags: ['Azure', 'Platform Engineering', 'DevOps', 'IaC', 'Developer Experience'],
  image: '/images/unsplash/cloud-infrastructure-network.jpg',
  excerpt: {
    en: 'Azure Deployment Environments lets platform teams define approved IaC templates and developers self-serve their own environments through a portal or CLI — with built-in governance, RBAC, and auto-delete schedules.',
    nl: 'Azure Deployment Environments laat platformteams goedgekeurde IaC-templates definiëren en ontwikkelaars hun eigen omgevingen self-serven via een portaal of CLI — met ingebouwde governance, RBAC en automatische verwijderingsschema\'s.'
  },
  category: {
    en: 'DevOps',
    nl: 'DevOps'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'Every platform engineering team faces the same tension: developers want infrastructure fast, and platform teams want governance and cost control. The traditional outcome is either a slow ticketing process where developers wait days for environments, or a free-for-all where developers create resources directly and costs spiral out of control. Azure Deployment Environments (ADE) is Microsoft\'s answer to this problem. It lets platform teams define approved infrastructure-as-code templates in a catalog, and developers provision complete environments from those templates through a self-service portal or CLI — with guardrails built in from the start. No tickets, no waiting, and no ungoverned sprawl.',
      nl: 'Elk platform engineering-team staat voor dezelfde spanning: ontwikkelaars willen snel infrastructuur, en platformteams willen governance en kostenbeheersing. Het traditionele resultaat is ofwel een traag ticketproces waarbij ontwikkelaars dagen wachten op omgevingen, of een vrij-voor-allen waarbij ontwikkelaars direct resources aanmaken en kosten uit de hand lopen. Azure Deployment Environments (ADE) is Microsoft\'s antwoord op dit probleem. Het laat platformteams goedgekeurde infrastructure-as-code templates definiëren in een catalogus, en ontwikkelaars volledige omgevingen provisioneren vanuit die templates via een self-service portaal of CLI — met vangrails vanaf het begin ingebouwd. Geen tickets, geen wachten, en geen onbeheerde wildgroei.'
    },
    sections: [
      {
        title: {
          en: 'The Architecture: Dev Center, Catalogs, Projects, and Environments',
          nl: 'De Architectuur: Dev Center, Catalogi, Projecten en Omgevingen'
        },
        content: {
          en: 'ADE follows a clear hierarchy. At the top is the dev center — your organization-level container that holds catalogs and project configurations. A catalog is a Git repository (GitHub or Azure DevOps) containing environment definitions — these are your IaC templates (ARM, Bicep, Terraform, or Pulumi) plus a manifest file that describes parameters, the deployment identity, and which container image to use for deployment. Projects represent teams or applications and control who can create environments and which environment definitions are available to them. Finally, environments are the actual deployed infrastructure instances that developers create from definitions. A developer in the "payments-api" project selects the "microservice-with-database" environment definition, fills in a few parameters, and gets a complete environment deployed to a subscription managed by the platform team.',
          nl: 'ADE volgt een duidelijke hiërarchie. Bovenaan staat het dev center — je container op organisatieniveau die catalogi en projectconfiguraties bevat. Een catalogus is een Git-repository (GitHub of Azure DevOps) met omgevingsdefinities — dit zijn je IaC-templates (ARM, Bicep, Terraform of Pulumi) plus een manifestbestand dat parameters beschrijft, de deployment-identiteit en welk containerimage te gebruiken voor deployment. Projecten vertegenwoordigen teams of applicaties en bepalen wie omgevingen kan aanmaken en welke omgevingsdefinities voor hen beschikbaar zijn. Tot slot zijn omgevingen de daadwerkelijk gedeployde infrastructuurinstanties die ontwikkelaars aanmaken vanuit definities. Een ontwikkelaar in het "payments-api" project selecteert de "microservice-with-database" omgevingsdefinitie, vult een paar parameters in en krijgt een complete omgeving gedeployd naar een abonnement dat wordt beheerd door het platformteam.'
        }
      },
      {
        title: {
          en: 'Infrastructure-as-Code Templates and the Extensibility Model',
          nl: 'Infrastructure-as-Code Templates en het Uitbreidingsmodel'
        },
        content: {
          en: 'Out of the box, ADE supports ARM and Bicep templates natively. For Terraform and Pulumi, ADE uses an extensibility model based on custom container images. You provide a Docker image that includes the IaC tool and any required providers, and ADE executes the deployment inside that container. Microsoft provides official container images for Terraform and Pulumi, but you can build custom images for any IaC tool or deployment workflow. This means you are not locked into a specific IaC technology — your platform team can standardize on Terraform for infrastructure modules while offering Bicep templates for simpler Azure-native deployments. Each environment definition in your catalog includes a manifest (environment.yaml) that specifies the template path, parameters with types and defaults, and the container image to use for deployment.',
          nl: 'Standaard ondersteunt ADE ARM- en Bicep-templates native. Voor Terraform en Pulumi gebruikt ADE een uitbreidingsmodel gebaseerd op aangepaste containerimages. Je biedt een Docker-image dat de IaC-tool en eventuele vereiste providers bevat, en ADE voert de deployment uit in die container. Microsoft biedt officiële containerimages voor Terraform en Pulumi, maar je kunt aangepaste images bouwen voor elke IaC-tool of deployment-workflow. Dit betekent dat je niet vastzit aan een specifieke IaC-technologie — je platformteam kan standaardiseren op Terraform voor infrastructuurmodules terwijl het Bicep-templates aanbiedt voor eenvoudigere Azure-native deployments. Elke omgevingsdefinitie in je catalogus bevat een manifest (environment.yaml) dat het templatepad, parameters met typen en standaardwaarden, en het containerimage voor deployment specificeert.'
        },
        code: {
          language: 'yaml',
          code: `# environment.yaml - Environment definition manifest
name: microservice-with-database
version: 1.0.0
summary: A containerized microservice with Azure SQL and Redis Cache
description: Deploys a Container App, Azure SQL database, and Redis cache
runner: "{registry}/ade-terraform:latest"
templatePath: main.tf
parameters:
  - id: environmentName
    name: Environment Name
    type: string
    required: true
  - id: sqlSkuName
    name: SQL Database SKU
    type: string
    default: "S1"
    allowed: ["S0", "S1", "S2"]
  - id: enableRedis
    name: Enable Redis Cache
    type: boolean
    default: false`
        }
      },
      {
        title: {
          en: 'Governance: RBAC, Policies, and Auto-Delete',
          nl: 'Governance: RBAC, Beleid en Automatisch Verwijderen'
        },
        content: {
          en: 'Governance is where ADE differentiates itself from just "giving developers access to deploy templates." At the project level, you assign roles: Deployment Environment User (can create and manage their own environments), Deployment Environment Reader (can view but not create), and project-level admins. Developers never need direct access to the target Azure subscription — ADE uses a managed identity or service principal configured at the dev center level to deploy resources. This means your platform team controls which subscriptions receive resources and what policies apply. Azure Policy on the target subscriptions enforces organizational standards — allowed regions, required tags, prohibited SKUs — and these apply automatically to every environment created through ADE. The auto-delete schedule is critical for cost management: set environments to automatically delete after a configurable period (for example, 14 days for dev environments), and developers can extend the deadline if they still need the environment. This eliminates the forgotten dev environments that silently accumulate cost.',
          nl: 'Governance is waar ADE zich onderscheidt van simpelweg "ontwikkelaars toegang geven om templates te deployen." Op projectniveau wijs je rollen toe: Deployment Environment User (kan eigen omgevingen aanmaken en beheren), Deployment Environment Reader (kan bekijken maar niet aanmaken), en projectniveau-beheerders. Ontwikkelaars hebben nooit directe toegang tot het doel-Azure-abonnement nodig — ADE gebruikt een managed identity of service principal die is geconfigureerd op dev center-niveau om resources te deployen. Dit betekent dat je platformteam bepaalt welke abonnementen resources ontvangen en welk beleid van toepassing is. Azure Policy op de doelabonnementen handhaaft organisatiestandaarden — toegestane regio\'s, vereiste tags, verboden SKU\'s — en deze zijn automatisch van toepassing op elke omgeving die via ADE wordt aangemaakt. Het automatische verwijderingsschema is cruciaal voor kostenbeheer: stel in dat omgevingen automatisch worden verwijderd na een configureerbare periode (bijvoorbeeld 14 dagen voor dev-omgevingen), en ontwikkelaars kunnen de deadline verlengen als ze de omgeving nog nodig hebben. Dit elimineert de vergeten dev-omgevingen die stilletjes kosten opbouwen.'
        }
      },
      {
        title: {
          en: 'Azure Developer CLI Integration',
          nl: 'Azure Developer CLI Integratie'
        },
        content: {
          en: 'The Azure Developer CLI (azd) integrates with ADE to provide a command-line workflow for developers who prefer the terminal over the portal. Running azd env new with an ADE-backed project provisions an environment from a catalog definition, and azd env delete tears it down. This fits naturally into developer workflows — you can script environment creation in your CI/CD pipeline, create short-lived environments for pull request validation, and tear them down automatically when the PR is merged. The azd integration also means developers can use the same familiar tool they use for azd-compatible projects, reducing the learning curve. For teams already using azd templates, migrating to ADE-managed environments is straightforward because the template structure is compatible.',
          nl: 'De Azure Developer CLI (azd) integreert met ADE om een command-line workflow te bieden voor ontwikkelaars die de voorkeur geven aan de terminal boven het portaal. Het uitvoeren van azd env new met een ADE-ondersteund project provisioneert een omgeving vanuit een catalogusdefinitie, en azd env delete ruimt deze op. Dit past natuurlijk in ontwikkelaarworkflows — je kunt omgevingsaanmaak scripten in je CI/CD-pipeline, kortlevende omgevingen aanmaken voor pull request-validatie, en ze automatisch opruimen wanneer de PR is gemerged. De azd-integratie betekent ook dat ontwikkelaars dezelfde vertrouwde tool kunnen gebruiken die ze voor azd-compatibele projecten gebruiken, wat de leercurve vermindert. Voor teams die al azd-templates gebruiken, is het migreren naar ADE-beheerde omgevingen eenvoudig omdat de templatestructuur compatibel is.'
        }
      },
      {
        title: {
          en: 'The Complete Developer Platform: ADE + Dev Box',
          nl: 'Het Complete Developer Platform: ADE + Dev Box'
        },
        content: {
          en: 'ADE is one half of Microsoft\'s developer platform story — the other half is Microsoft Dev Box, which provides cloud-based developer workstations. Together, they form a complete self-service developer platform: Dev Box gives developers a pre-configured development machine with the right tools, SDKs, and repo access, while ADE gives them the infrastructure environments to deploy and test against. Both are managed through the same dev center, share the same project structure, and are governed by the same platform team. A new developer joins your team, gets a Dev Box with everything installed, and provisions a personal ADE environment with a full application stack — all within minutes, all self-service, all governed. This is the platform engineering vision that Microsoft is building toward, and for organizations already using Azure, it integrates naturally with your existing identity, governance, and subscription management.',
          nl: 'ADE is de ene helft van Microsoft\'s developer platform-verhaal — de andere helft is Microsoft Dev Box, dat cloudgebaseerde ontwikkelaarswerkstations biedt. Samen vormen ze een compleet self-service developer platform: Dev Box geeft ontwikkelaars een vooraf geconfigureerde ontwikkelmachine met de juiste tools, SDK\'s en repo-toegang, terwijl ADE hen de infrastructuuromgevingen geeft om tegen te deployen en testen. Beide worden beheerd via hetzelfde dev center, delen dezelfde projectstructuur en worden beheerd door hetzelfde platformteam. Een nieuwe ontwikkelaar voegt zich bij je team, krijgt een Dev Box met alles geïnstalleerd, en provisioneert een persoonlijke ADE-omgeving met een volledige applicatiestack — allemaal binnen minuten, allemaal self-service, allemaal beheerd. Dit is de platform engineering-visie die Microsoft aan het bouwen is, en voor organisaties die al Azure gebruiken, integreert het natuurlijk met je bestaande identiteit, governance en abonnementsbeheer.'
        }
      }
    ],
    conclusion: {
      en: 'Azure Deployment Environments solves the fundamental platform engineering challenge of providing fast developer self-service without sacrificing governance. The catalog-based model means platform teams define the guardrails once and developers operate freely within them. The extensibility model supports any IaC tool, the auto-delete schedules prevent cost sprawl, and the integration with azd and Dev Box creates a complete developer platform. If your organization is struggling with the classic tension between developer velocity and infrastructure governance, ADE is worth evaluating — especially if you are already invested in the Azure ecosystem.',
      nl: 'Azure Deployment Environments lost de fundamentele platform engineering-uitdaging op van het bieden van snelle developer self-service zonder governance op te offeren. Het catalogusgebaseerde model betekent dat platformteams de vangrails eenmaal definiëren en ontwikkelaars er vrijelijk binnen opereren. Het uitbreidingsmodel ondersteunt elke IaC-tool, de automatische verwijderingsschema\'s voorkomen kostenwildgroei, en de integratie met azd en Dev Box creëert een compleet developer platform. Als je organisatie worstelt met de klassieke spanning tussen ontwikkelaarsnelheid en infrastructuurgovernance, is ADE het evalueren waard — vooral als je al geïnvesteerd bent in het Azure-ecosysteem.'
    }
  }
};
