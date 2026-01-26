import type { BlogPost } from '../types';

export const tokenConfigurationPost: BlogPost = {
  id: 'entra-token-configuration-claims',
  title: {
    en: 'Microsoft Entra Token Configuration: Custom Claims and Token Lifetime',
    nl: 'Microsoft Entra Token Configuratie: Custom Claims en Token Lifetime'
  },
  description: {
    en: 'Master token configuration in Microsoft Entra ID - add custom claims, configure optional claims, and manage token lifetime for your applications',
    nl: 'Beheers token configuratie in Microsoft Entra ID - voeg custom claims toe, configureer optional claims en beheer token lifetime voor je applicaties'
  },
  date: '2025-06-07',
  author: 'Falk Krahl',
  tags: ['Microsoft Entra', 'Tokens', 'Claims', 'Authentication', 'OAuth'],
  image: '/images/unsplash/identity-access-management.jpg',
  excerpt: {
    en: 'Configure tokens to include exactly the claims your application needs. Learn about optional claims, custom claims from directory extensions, and token lifetime policies.',
    nl: 'Configureer tokens om precies de claims te bevatten die je applicatie nodig heeft. Leer over optional claims, custom claims van directory extensions en token lifetime policies.'
  },
  category: {
    en: 'Identity & Access',
    nl: 'Identiteit & Toegang'
  },
  readTime: 11,
  content: {
    introduction: {
      en: "When building applications that authenticate with Microsoft Entra ID, you often need more than the default token claims. Perhaps you need the user's employee ID, department, or custom attributes stored in directory extensions. This article covers how to configure token claims, work with optional claims, and manage token lifetime policies.",
      nl: 'Bij het bouwen van applicaties die authenticeren met Microsoft Entra ID, heb je vaak meer nodig dan de standaard token claims. Misschien heb je het employee ID van de gebruiker nodig, de afdeling, of custom attributes opgeslagen in directory extensions. Dit artikel behandelt hoe je token claims configureert, werkt met optional claims en token lifetime policies beheert.'
    },
    sections: [
      {
        title: {
          en: 'Understanding Token Types',
          nl: 'Token Types Begrijpen'
        },
        content: {
          en: 'Microsoft Entra ID issues different token types: ID tokens for user identity information, access tokens for API authorization, and SAML tokens for enterprise SSO. Each token type can have different claim configurations and serves different purposes in your authentication flow.',
          nl: 'Microsoft Entra ID geeft verschillende token types uit: ID tokens voor gebruikersidentiteitsinformatie, access tokens voor API-autorisatie, en SAML tokens voor enterprise SSO. Elk token type kan verschillende claim configuraties hebben en dient verschillende doelen in je authenticatiestroom.'
        }
      },
      {
        title: {
          en: 'Adding Optional Claims',
          nl: 'Optional Claims Toevoegen'
        },
        content: {
          en: 'Optional claims add additional user or tenant information to your tokens. Common optional claims include email, preferred_username, and groups. Configure these in the Azure Portal under App registration > Token configuration.',
          nl: 'Optional claims voegen extra gebruiker- of tenant-informatie toe aan je tokens. Veelgebruikte optional claims zijn email, preferred_username en groups. Configureer deze in de Azure Portal onder App registration > Token configuration.'
        },
        code: {
          language: 'json',
          code: `{
  "optionalClaims": {
    "idToken": [
      { "name": "email", "essential": false },
      { "name": "preferred_username", "essential": false },
      { "name": "groups", "additionalProperties": ["emit_as_roles"] }
    ],
    "accessToken": [
      { "name": "email", "essential": false },
      { "name": "ipaddr", "essential": false }
    ]
  }
}`
        }
      },
      {
        title: {
          en: 'Custom Claims from Directory Extensions',
          nl: 'Custom Claims van Directory Extensions'
        },
        content: {
          en: 'Store custom user attributes as directory extension properties, then emit them as token claims. First, create the extension property using Microsoft Graph, then configure the app registration to include it in tokens.',
          nl: 'Sla custom user attributes op als directory extension properties, en emit ze vervolgens als token claims. Maak eerst de extension property aan met Microsoft Graph, configureer dan de app registration om het in tokens op te nemen.'
        }
      },
      {
        title: {
          en: 'Token Lifetime Policies',
          nl: 'Token Lifetime Policies'
        },
        content: {
          en: 'Control how long tokens remain valid using token lifetime policies. You can configure access token lifetime, refresh token lifetime, and session token lifetime. Shorter lifetimes improve security but may impact user experience. Balance security requirements with usability.',
          nl: 'Beheer hoe lang tokens geldig blijven met token lifetime policies. Je kunt access token lifetime, refresh token lifetime en session token lifetime configureren. Kortere lifetimes verbeteren de beveiliging maar kunnen de gebruikerservaring beïnvloeden. Balanceer beveiligingsvereisten met bruikbaarheid.'
        }
      },
      {
        title: {
          en: 'Troubleshooting Token Issues',
          nl: 'Token Issues Troubleshooten'
        },
        content: {
          en: 'Use jwt.ms to decode and inspect your tokens. Check for missing claims, incorrect audience values, and expired tokens. Enable sign-in logs in Entra ID to track authentication failures and understand why tokens might not work as expected.',
          nl: 'Gebruik jwt.ms om je tokens te decoderen en te inspecteren. Controleer op ontbrekende claims, incorrecte audience values en verlopen tokens. Schakel sign-in logs in Entra ID in om authenticatiefouten te volgen en te begrijpen waarom tokens mogelijk niet werken zoals verwacht.'
        }
      }
    ],
    conclusion: {
      en: 'Proper token configuration ensures your applications receive the identity information they need while maintaining security. Start with minimal claims and add only what your application requires.',
      nl: 'Correcte token configuratie zorgt ervoor dat je applicaties de identiteitsinformatie ontvangen die ze nodig hebben terwijl de beveiliging behouden blijft. Begin met minimale claims en voeg alleen toe wat je applicatie nodig heeft.'
    }
  }
};
