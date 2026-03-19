import type { BlogPost } from '../types';

export const appRegistrationsVsEnterpriseAppsPost: BlogPost = {
  id: 'app-registrations-vs-enterprise-applications',
  title: {
    en: 'App Registrations vs Enterprise Applications in Microsoft Entra ID',
    nl: 'App Registrations vs Enterprise Applications in Microsoft Entra ID'
  },
  description: {
    en: 'Understand the difference between App Registrations and Enterprise Applications in Microsoft Entra ID and when to use each.',
    nl: 'Begrijp het verschil tussen App Registrations en Enterprise Applications in Microsoft Entra ID en wanneer elk te gebruiken.'
  },
  date: '2025-04-25',
  author: 'Yair Knijn',
  tags: ['Azure', 'Entra ID', 'Identity', 'Apps', 'Authentication'],
  image: '/images/pexels/pexels-cyber-security-concept.jpg',
  excerpt: {
    en: 'Clarifying the often-confused relationship between App Registrations and Enterprise Applications, with practical examples.',
    nl: 'Verduidelijking van de vaak verwarrende relatie tussen App Registrations en Enterprise Applications, met praktische voorbeelden.'
  },
  category: {
    en: 'Identity',
    nl: 'Identiteit'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'You delete an Enterprise Application and your multi-tenant app breaks in a customer\'s tenant. You change a redirect URI on the Enterprise Application blade and nothing happens. You search for your app in Entra ID and find it in two different places with different settings. Sound familiar? The split between App Registrations and Enterprise Applications trips up even experienced Azure admins, because the Entra portal shows them as separate things without making the relationship obvious. Once you get the mental model right, it clicks. Here is the short version.',
      nl: 'Je verwijdert een Enterprise Application en je multi-tenant app werkt niet meer in de tenant van een klant. Je wijzigt een redirect URI op het Enterprise Application-blad en er gebeurt niets. Je zoekt je app in Entra ID en vindt hem op twee verschillende plekken met verschillende instellingen. Herkenbaar? De splitsing tussen App Registrations en Enterprise Applications laat zelfs ervaren Azure-admins struikelen, omdat de Entra-portal ze als aparte dingen toont zonder de relatie duidelijk te maken. Zodra het mentale model klopt, valt alles op z\'n plek. Hier is de korte versie.'
    },
    sections: [
      {
        title: {
          en: 'What is an App Registration?',
          nl: 'Wat is een App Registration?'
        },
        content: {
          en: 'An App Registration is the global definition of your application. It defines what permissions the app can request, what credentials it uses, and what redirect URIs are valid. Think of it as the blueprint or template for your application.',
          nl: 'Een App Registration is de globale definitie van je applicatie. Het definieert welke permissies de app kan aanvragen, welke credentials het gebruikt en welke redirect URIs geldig zijn. Zie het als de blauwdruk of template voor je applicatie.'
        }
      },
      {
        title: {
          en: 'What is an Enterprise Application?',
          nl: 'Wat is een Enterprise Application?'
        },
        content: {
          en: 'An Enterprise Application (Service Principal) is the local instance of an app in a specific tenant. It represents how the app is configured in YOUR organization - user assignments, conditional access policies, SSO settings, and granted permissions.',
          nl: 'Een Enterprise Application (Service Principal) is de lokale instantie van een app in een specifieke tenant. Het vertegenwoordigt hoe de app is geconfigureerd in JOUW organisatie - gebruikerstoewijzingen, conditional access policies, SSO-instellingen en verleende permissies.'
        }
      },
      {
        title: {
          en: 'The Relationship',
          nl: 'De Relatie'
        },
        content: {
          en: 'When you create an App Registration, an Enterprise Application is automatically created in the same tenant. For multi-tenant apps, an Enterprise Application is created in each tenant when users first consent. One App Registration can have many Enterprise Applications across different tenants.',
          nl: 'Wanneer je een App Registration maakt, wordt automatisch een Enterprise Application aangemaakt in dezelfde tenant. Voor multi-tenant apps wordt een Enterprise Application aangemaakt in elke tenant wanneer gebruikers voor het eerst consent geven. Eén App Registration kan veel Enterprise Applications hebben over verschillende tenants.'
        }
      },
      {
        title: {
          en: 'Practical Implications',
          nl: 'Praktische Implicaties'
        },
        content: {
          en: 'Configure API permissions and credentials in App Registration. Manage user access and consent in Enterprise Application. Delete the App Registration to remove the app globally. Delete the Enterprise Application to remove it from one tenant only.',
          nl: 'Configureer API-permissies en credentials in App Registration. Beheer gebruikerstoegang en consent in Enterprise Application. Verwijder de App Registration om de app globaal te verwijderen. Verwijder de Enterprise Application om het alleen uit één tenant te verwijderen.'
        }
      }
    ],
    conclusion: {
      en: 'The rule of thumb: App Registration is your app\'s blueprint — credentials, API permissions, redirect URIs go here. Enterprise Application (Service Principal) is the local instance in a specific tenant — user assignments, conditional access, SSO config go here. Delete the App Registration and you kill it everywhere. Delete the Enterprise Application and you only remove it from that one tenant. Stick that on a post-it note and save yourself some future headaches.',
      nl: 'De vuistregel: App Registration is de blauwdruk van je app — credentials, API-permissies en redirect URI\'s stel je hier in. Enterprise Application (Service Principal) is de lokale instantie in een specifieke tenant — gebruikerstoewijzingen, conditional access en SSO-config stel je hier in. Verwijder de App Registration en je schakelt het overal uit. Verwijder de Enterprise Application en je haalt het alleen uit die ene tenant. Plak dat op een post-it en bespaar jezelf wat toekomstige hoofdpijn.'
    }
  }
};
