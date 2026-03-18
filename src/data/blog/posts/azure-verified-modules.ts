import type { BlogPost } from '../types';

export const azureVerifiedModulesPost: BlogPost = {
  id: 'azure-verified-modules-iac',
  title: {
    en: 'Azure Verified Modules: Standardized IaC Building Blocks for Azure',
    nl: 'Azure Verified Modules: Gestandaardiseerde IaC Bouwstenen voor Azure'
  },
  description: {
    en: 'Explore Azure Verified Modules (AVM), the Microsoft-maintained IaC registry for Bicep and Terraform that provides tested, governed, and production-ready modules for Azure resources.',
    nl: 'Ontdek Azure Verified Modules (AVM), het door Microsoft onderhouden IaC-register voor Bicep en Terraform dat geteste, beheerde en productieklare modules biedt voor Azure-resources.'
  },
  date: '2026-02-18',
  author: 'Falk Krahl',
  tags: ['Azure', 'IaC', 'Terraform', 'Bicep', 'DevOps'],
  image: '/images/pexels/pexels-infrastructure-as-code.jpg',
  excerpt: {
    en: 'Azure Verified Modules provide Microsoft-maintained, tested Bicep and Terraform modules for Azure resources. They replace CARML and the old Terraform registry with a unified approach: consistent interfaces, mandatory testing, and semantic versioning across both IaC languages.',
    nl: 'Azure Verified Modules bieden door Microsoft onderhouden, geteste Bicep- en Terraform-modules voor Azure-resources. Ze vervangen CARML en het oude Terraform-register met een uniforme aanpak: consistente interfaces, verplichte testing en semantische versiebeheer over beide IaC-talen.'
  },
  category: {
    en: 'DevOps',
    nl: 'DevOps'
  },
  readTime: 6,
  content: {
    introduction: {
      en: 'If you have written Bicep or Terraform for Azure, you know the pattern: every project starts with recreating the same networking, key vault, storage account, and identity modules. You either copy from a previous project, find something on the Terraform registry of varying quality, or build from scratch. Azure Verified Modules (AVM) is Microsoft\'s answer to this problem — a curated library of IaC modules for both Bicep and Terraform that are built by Microsoft engineers, tested in CI pipelines, and follow consistent interface conventions. AVM replaces the older Common Azure Resource Modules Library (CARML) for Bicep and the previous Terraform Azure Verified Modules effort with a unified program that covers both languages under the same governance framework.',
      nl: 'Als je Bicep of Terraform hebt geschreven voor Azure, ken je het patroon: elk project begint met het opnieuw creëren van dezelfde networking-, key vault-, storage account- en identiteitsmodules. Je kopieert van een vorig project, vindt iets op het Terraform-register van wisselende kwaliteit, of bouwt vanaf nul. Azure Verified Modules (AVM) is Microsoft\'s antwoord op dit probleem — een gecureerde bibliotheek van IaC-modules voor zowel Bicep als Terraform die gebouwd zijn door Microsoft-engineers, getest in CI-pijplijnen, en consistente interfaceconventies volgen. AVM vervangt de oudere Common Azure Resource Modules Library (CARML) voor Bicep en de vorige Terraform Azure Verified Modules-inspanning met een uniform programma dat beide talen dekt onder hetzelfde governance-framework.'
    },
    sections: [
      {
        title: {
          en: 'Resource Modules vs. Pattern Modules',
          nl: 'Resource Modules vs. Pattern Modules'
        },
        content: {
          en: 'AVM organizes modules into two categories. Resource modules represent a single Azure resource — a virtual network, a key vault, a storage account — with all its configurable properties exposed as parameters. They follow a strict interface specification: every resource module has a name parameter, location parameter, tags parameter, lock configuration, role assignments, diagnostic settings, and managed identity support where applicable. This consistency means that once you learn the interface for one AVM resource module, you know the pattern for all of them. Pattern modules compose multiple resource modules into an opinionated architecture. For example, a "hub-spoke network" pattern module might combine virtual networks, peering connections, a firewall, and route tables into a single deployable unit. Pattern modules are higher-level abstractions that encode best practices — they make architectural decisions for you based on Microsoft\'s Well-Architected Framework. Use resource modules when you need fine-grained control, and pattern modules when you want a proven architecture deployed quickly.',
          nl: 'AVM organiseert modules in twee categorieën. Resource modules vertegenwoordigen een enkele Azure-resource — een virtueel netwerk, een key vault, een storage account — met alle configureerbare eigenschappen beschikbaar als parameters. Ze volgen een strikte interfacespecificatie: elke resource module heeft een name-parameter, location-parameter, tags-parameter, lock-configuratie, roltoewijzingen, diagnostische instellingen en managed identity-ondersteuning waar van toepassing. Deze consistentie betekent dat zodra je de interface voor één AVM resource module leert, je het patroon kent voor allemaal. Pattern modules combineren meerdere resource modules tot een opinionated architectuur. Bijvoorbeeld, een "hub-spoke netwerk" pattern module combineert mogelijk virtuele netwerken, peering-verbindingen, een firewall en routetabellen in een enkele deploybare eenheid. Pattern modules zijn abstracties op hoger niveau die best practices coderen — ze nemen architectuurbeslissingen voor je op basis van Microsoft\'s Well-Architected Framework. Gebruik resource modules wanneer je fijnmazige controle nodig hebt, en pattern modules wanneer je een bewezen architectuur snel wilt deployen.'
        }
      },
      {
        title: {
          en: 'Testing Framework and CI Pipeline',
          nl: 'Testing Framework en CI-Pijplijn'
        },
        content: {
          en: 'What makes AVM modules trustworthy is the mandatory testing. Every module goes through automated CI testing that includes static analysis (linting, best practice checks), unit tests for parameter validation, deployment tests that actually provision resources in Azure and verify the result, and idempotency tests that run the deployment twice to confirm no drift. For Bicep modules, tests run in GitHub Actions using a dedicated test subscription. For Terraform modules, the CI pipeline uses the same approach with terraform plan and terraform apply validation. The testing is not optional — a module cannot be published to the AVM registry without passing all test stages. This is the fundamental difference from community Terraform modules on the public registry, where testing quality varies enormously. When you consume an AVM module, you know it has been deployed successfully in a real Azure subscription as part of its release process.',
          nl: 'Wat AVM-modules betrouwbaar maakt is de verplichte testing. Elke module doorloopt geautomatiseerde CI-testing die statische analyse (linting, best practice checks), unit tests voor parametervalidatie, deployment tests die daadwerkelijk resources provisioneren in Azure en het resultaat verifiëren, en idempotentietests die de deployment twee keer uitvoeren om te bevestigen dat er geen drift is omvat. Voor Bicep-modules draaien tests in GitHub Actions met een dedicated testsubscriptie. Voor Terraform-modules gebruikt de CI-pijplijn dezelfde aanpak met terraform plan en terraform apply-validatie. De testing is niet optioneel — een module kan niet gepubliceerd worden naar het AVM-register zonder alle teststadia te doorlopen. Dit is het fundamentele verschil met community Terraform-modules op het publieke register, waar testingkwaliteit enorm varieert. Wanneer je een AVM-module consumeert, weet je dat het succesvol is gedeployed in een echte Azure-subscriptie als onderdeel van het releaseproces.'
        }
      },
      {
        title: {
          en: 'Consuming AVM Modules in Your Projects',
          nl: 'AVM-Modules Consumeren in Je Projecten'
        },
        content: {
          en: 'For Bicep, AVM modules are published to the Bicep public module registry and referenced directly in your templates. For Terraform, they are published to the Terraform Registry under the Azure namespace. Both follow semantic versioning — breaking changes only happen in major version bumps, so pinning to a minor version range gives you bug fixes without surprises. A practical example: deploying a virtual network with AVM takes a fraction of the code you would write from scratch. The module handles the subnet configuration, NSG associations, diagnostic settings, resource locks, and RBAC assignments through well-documented parameters. You focus on the values specific to your environment rather than the resource definition boilerplate.',
          nl: 'Voor Bicep worden AVM-modules gepubliceerd naar het Bicep publieke moduleregister en direct gerefereerd in je templates. Voor Terraform worden ze gepubliceerd naar het Terraform Registry onder de Azure-namespace. Beide volgen semantische versiebeheer — breaking changes gebeuren alleen bij major versie-bumps, dus pinnen aan een minor versie-bereik geeft je bug fixes zonder verrassingen. Een praktisch voorbeeld: een virtueel netwerk deployen met AVM kost een fractie van de code die je vanaf nul zou schrijven. De module handelt de subnetconfiguratie, NSG-associaties, diagnostische instellingen, resource locks en RBAC-toewijzingen af via goed gedocumenteerde parameters. Je focust op de waarden specifiek voor je omgeving in plaats van de resource-definitie boilerplate.'
        },
        code: {
          language: 'bicep',
          code: `// Example: Using an AVM module for a Virtual Network
module virtualNetwork 'br/public:avm/res/network/virtual-network:0.5.0' = {
  name: 'vnet-production'
  params: {
    name: 'vnet-prod-westeurope-001'
    location: 'westeurope'
    addressPrefixes: ['10.0.0.0/16']
    subnets: [
      {
        name: 'snet-app'
        addressPrefix: '10.0.1.0/24'
        networkSecurityGroupResourceId: nsg.outputs.resourceId
      }
      {
        name: 'snet-data'
        addressPrefix: '10.0.2.0/24'
        networkSecurityGroupResourceId: nsgData.outputs.resourceId
      }
    ]
    diagnosticSettings: [
      {
        workspaceResourceId: logAnalytics.outputs.resourceId
      }
    ]
    tags: tags
  }
}`
        }
      },
      {
        title: {
          en: 'Telemetry, Versioning, and Contributing',
          nl: 'Telemetrie, Versiebeheer en Bijdragen'
        },
        content: {
          en: 'AVM modules include an opt-out telemetry mechanism that reports module usage to Microsoft. This telemetry sends the module name and version — no resource names, subscription IDs, or other identifying data. Microsoft uses this to prioritize which modules to invest in and to understand adoption patterns. You can disable it by setting the enableTelemetry parameter to false on any module. The versioning strategy follows strict semantic versioning: patch versions for bug fixes, minor versions for new features that are backward compatible, and major versions for breaking changes. Each module\'s changelog documents exactly what changed in each version. Contributing to AVM is open — the repositories are public on GitHub, and Microsoft accepts community pull requests. However, contributions must pass the full test suite and follow the AVM specification for interfaces, documentation, and code style. The contribution guide is detailed but worth following if you want to add a module for a resource that is not yet covered.',
          nl: 'AVM-modules bevatten een opt-out telemetriemechanisme dat modulegebruik rapporteert aan Microsoft. Deze telemetrie stuurt de modulenaam en versie — geen resourcenamen, subscriptie-ID\'s of andere identificerende data. Microsoft gebruikt dit om te prioriteren in welke modules te investeren en om adoptiepatronen te begrijpen. Je kunt het uitschakelen door de enableTelemetry-parameter op false te zetten bij elke module. De versiebeheerstrategie volgt strikte semantische versiebeheer: patchversies voor bug fixes, minorversies voor nieuwe features die backward compatible zijn, en majorversies voor breaking changes. De changelog van elke module documenteert precies wat er in elke versie veranderde. Bijdragen aan AVM staat open — de repositories zijn publiek op GitHub, en Microsoft accepteert community pull requests. Echter, bijdragen moeten de volledige testsuite doorlopen en de AVM-specificatie volgen voor interfaces, documentatie en codestijl. De bijdragegids is gedetailleerd maar de moeite waard om te volgen als je een module wilt toevoegen voor een resource die nog niet gedekt is.'
        }
      }
    ],
    conclusion: {
      en: 'Azure Verified Modules bring something the IaC ecosystem has needed for a long time: a curated, tested, and consistently designed set of modules backed by the cloud provider itself. They will not replace your custom modules for organization-specific patterns, but they dramatically reduce the amount of boilerplate you write for standard Azure resources. If you are still maintaining your own virtual network, key vault, or storage account modules, evaluate whether AVM can replace them — you will get ongoing updates, tested releases, and a community of contributors maintaining the code alongside you. Start by replacing one module in a non-production environment, validate it meets your requirements, and expand from there.',
      nl: 'Azure Verified Modules brengen iets dat het IaC-ecosysteem al lang nodig had: een gecureerde, geteste en consistent ontworpen set modules ondersteund door de cloudprovider zelf. Ze zullen je aangepaste modules voor organisatiespecifieke patronen niet vervangen, maar ze verminderen drastisch de hoeveelheid boilerplate die je schrijft voor standaard Azure-resources. Als je nog steeds je eigen virtuele netwerk-, key vault- of storage account-modules onderhoudt, evalueer dan of AVM ze kan vervangen — je krijgt doorlopende updates, geteste releases en een community van bijdragers die de code samen met jou onderhouden. Begin met het vervangen van één module in een niet-productieomgeving, valideer dat het aan je eisen voldoet, en breid van daaruit uit.'
    }
  }
};
