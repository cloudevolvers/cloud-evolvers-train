import type { BlogPost } from '../types';

export const managedIdentitiesPost: BlogPost = {
  id: 'understanding-managed-identities',
  title: {
    en: 'Understanding Service vs. User-Assigned Managed Identities in Azure',
    nl: 'Begrijpen van System- versus User-Assigned Managed Identities in Azure'
  },
  description: {
    en: 'A comprehensive guide to understanding and implementing Managed Identities in Azure for secure, credential-free authentication.',
    nl: 'Een uitgebreide gids voor het begrijpen en implementeren van Managed Identities in Azure voor veilige, credential-vrije authenticatie.'
  },
  date: '2025-06-15',
  author: 'Falk Krahl',
  tags: ['Azure', 'Security', 'Identity', 'Best Practices', 'Managed Identity'],
  image: '/images/unsplash/identity-access-management.jpg',
  excerpt: {
    en: 'Learn the differences between System-Assigned and User-Assigned Managed Identities, when to use each type, and best practices for implementation.',
    nl: 'Leer de verschillen tussen System-Assigned en User-Assigned Managed Identities, wanneer elk type te gebruiken, en best practices voor implementatie.'
  },
  category: {
    en: 'Security',
    nl: 'Beveiliging'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Managed Identities eliminate the need to manage credentials in your code. They provide an automatically managed identity in Microsoft Entra ID for applications to use when connecting to resources that support Microsoft Entra authentication.',
      nl: 'Managed Identities elimineren de noodzaak om referenties in je code te beheren. Ze bieden een automatisch beheerde identiteit in Microsoft Entra ID voor applicaties om te gebruiken bij het verbinden met resources die Microsoft Entra authenticatie ondersteunen.'
    },
    sections: [
      {
        title: {
          en: 'System-Assigned Managed Identity',
          nl: 'System-Assigned Managed Identity'
        },
        content: {
          en: 'System-assigned managed identities are created as part of an Azure resource (like a VM or App Service). They share the lifecycle with the resource - when the resource is deleted, the identity is automatically deleted. Each resource can only have one system-assigned identity.',
          nl: 'System-assigned managed identities worden aangemaakt als onderdeel van een Azure resource (zoals een VM of App Service). Ze delen de levenscyclus met de resource - wanneer de resource wordt verwijderd, wordt de identiteit automatisch verwijderd. Elke resource kan slechts één system-assigned identity hebben.'
        }
      },
      {
        title: {
          en: 'User-Assigned Managed Identity',
          nl: 'User-Assigned Managed Identity'
        },
        content: {
          en: 'User-assigned managed identities are standalone Azure resources. They can be assigned to multiple Azure resources and have an independent lifecycle. This makes them ideal for scenarios where multiple resources need the same permissions or when you need to pre-configure permissions before deploying resources.',
          nl: 'User-assigned managed identities zijn zelfstandige Azure resources. Ze kunnen worden toegewezen aan meerdere Azure resources en hebben een onafhankelijke levenscyclus. Dit maakt ze ideaal voor scenario\'s waar meerdere resources dezelfde permissies nodig hebben of wanneer je permissies vooraf moet configureren voordat je resources deployt.'
        }
      },
      {
        title: {
          en: 'When to Use Which Type',
          nl: 'Wanneer Welk Type Gebruiken'
        },
        content: {
          en: 'Use System-Assigned when: the identity is tightly coupled to a single resource, you want automatic cleanup, or you need simple, isolated permissions. Use User-Assigned when: multiple resources need the same identity, you need to pre-configure permissions, or you want the identity to survive resource recreation.',
          nl: 'Gebruik System-Assigned wanneer: de identiteit nauw gekoppeld is aan één resource, je automatische opruiming wilt, of je eenvoudige, geïsoleerde permissies nodig hebt. Gebruik User-Assigned wanneer: meerdere resources dezelfde identiteit nodig hebben, je permissies vooraf moet configureren, of je wilt dat de identiteit resource-recreatie overleeft.'
        }
      },
      {
        title: {
          en: 'Implementation Best Practices',
          nl: 'Best Practices voor Implementatie'
        },
        content: {
          en: 'Always use DefaultAzureCredential in your code for maximum flexibility. Grant minimum required permissions using RBAC. Monitor identity usage through Microsoft Entra sign-in logs. Consider using User-Assigned identities in production for easier management and troubleshooting.',
          nl: 'Gebruik altijd DefaultAzureCredential in je code voor maximale flexibiliteit. Verleen minimaal vereiste permissies met RBAC. Monitor identity-gebruik via Microsoft Entra sign-in logs. Overweeg User-Assigned identities in productie voor eenvoudiger beheer en troubleshooting.'
        }
      }
    ],
    conclusion: {
      en: 'Managed Identities are a cornerstone of secure Azure development. Understanding when to use each type helps you design more secure and maintainable solutions.',
      nl: 'Managed Identities zijn een hoeksteen van veilige Azure-ontwikkeling. Begrijpen wanneer elk type te gebruiken helpt je veiligere en beter onderhoudbare oplossingen te ontwerpen.'
    }
  }
};
