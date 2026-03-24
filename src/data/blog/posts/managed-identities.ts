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
  author: 'Yair Knijn',
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
      en: 'Stop putting connection strings and secrets in your code. Seriously. Managed Identities in Azure give your apps an identity in Microsoft Entra ID so they can authenticate to other Azure services without any credentials stored anywhere. No keys in environment variables, no secrets in Key Vault references that someone forgets to rotate. Azure handles the credential lifecycle for you. There are two types — system-assigned and user-assigned — and picking the wrong one creates headaches down the road.',
      nl: 'Stop met connection strings en secrets in je code zetten. Echt. Managed Identities in Azure geven je apps een identiteit in Microsoft Entra ID zodat ze kunnen authenticeren bij andere Azure-services zonder dat er ergens credentials opgeslagen staan. Geen keys in omgevingsvariabelen, geen secrets in Key Vault-referenties die iemand vergeet te roteren. Azure beheert de credential-lifecycle voor je. Er zijn twee types — system-assigned en user-assigned — en de verkeerde kiezen levert later hoofdpijn op.'
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
      en: 'Quick rule of thumb: use system-assigned when the identity belongs to one resource and should die with it. Use user-assigned when multiple resources share the same permissions, or when you need to set up RBAC before the resource exists. Either way, use DefaultAzureCredential in your code so it works in both local dev and production. And delete any connection strings you have lying around — they are a breach waiting to happen.',
      nl: 'Vuistregel: gebruik system-assigned als de identiteit bij een resource hoort en ermee moet verdwijnen. Gebruik user-assigned als meerdere resources dezelfde rechten delen, of als je RBAC moet instellen voordat de resource bestaat. Gebruik in beide gevallen DefaultAzureCredential in je code zodat het werkt in zowel lokale dev als productie. En gooi die connection strings weg die je nog hebt liggen — dat is een breach die op je wacht.'
    }
  }
};
