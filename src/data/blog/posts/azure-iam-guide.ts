import type { BlogPost } from '../types';

export const azureIamGuidePost: BlogPost = {
  id: 'azure-iam-comprehensive-guide',
  title: {
    en: 'Azure IAM: A Comprehensive Guide to Identity and Access Management',
    nl: 'Azure IAM: Een Uitgebreide Gids voor Identity en Access Management'
  },
  description: {
    en: 'Master Azure Identity and Access Management with this comprehensive guide covering RBAC, Entra ID, conditional access, and security best practices.',
    nl: 'Beheers Azure Identity en Access Management met deze uitgebreide gids over RBAC, Entra ID, conditional access en security best practices.'
  },
  date: '2025-05-10',
  author: 'Falk Krahl',
  tags: ['Azure', 'Security', 'IAM', 'RBAC', 'Entra ID'],
  image: '/images/unsplash/azure-security-center.jpg',
  excerpt: {
    en: 'A deep dive into Azure IAM covering role-based access control, Microsoft Entra ID integration, and enterprise security patterns.',
    nl: 'Een deep dive in Azure IAM over role-based access control, Microsoft Entra ID integratie en enterprise security patterns.'
  },
  category: {
    en: 'Security',
    nl: 'Beveiliging'
  },
  readTime: 15,
  content: {
    introduction: {
      en: 'Identity and Access Management (IAM) is the foundation of Azure security. This guide covers the essential concepts, components, and best practices for implementing robust IAM in your Azure environment.',
      nl: 'Identity en Access Management (IAM) is de basis van Azure security. Deze gids behandelt de essentiële concepten, componenten en best practices voor het implementeren van robuuste IAM in je Azure-omgeving.'
    },
    sections: [
      {
        title: {
          en: 'Understanding Azure RBAC',
          nl: 'Azure RBAC Begrijpen'
        },
        content: {
          en: 'Role-Based Access Control (RBAC) is the authorization system in Azure. It uses role assignments consisting of a security principal, role definition, and scope. Always follow the principle of least privilege when assigning roles.',
          nl: 'Role-Based Access Control (RBAC) is het autorisatiesysteem in Azure. Het gebruikt role assignments bestaande uit een security principal, role definition en scope. Volg altijd het principe van least privilege bij het toewijzen van roles.'
        }
      },
      {
        title: {
          en: 'Microsoft Entra ID Integration',
          nl: 'Microsoft Entra ID Integratie'
        },
        content: {
          en: 'Microsoft Entra ID (formerly Azure AD) is the cloud identity provider. It handles authentication, provides SSO capabilities, and integrates with on-premises Active Directory through Entra Connect. Understanding the sync process is crucial for hybrid environments.',
          nl: 'Microsoft Entra ID (voorheen Azure AD) is de cloud identity provider. Het handelt authenticatie af, biedt SSO-mogelijkheden en integreert met on-premises Active Directory via Entra Connect. Het begrijpen van het sync-proces is cruciaal voor hybride omgevingen.'
        }
      },
      {
        title: {
          en: 'Conditional Access Policies',
          nl: 'Conditional Access Policies'
        },
        content: {
          en: 'Conditional Access brings signals together to make decisions and enforce organizational policies. Key signals include user or group membership, IP location, device state, application, and real-time risk detection. Start with report-only mode to assess impact.',
          nl: 'Conditional Access brengt signalen samen om beslissingen te nemen en organisatiebeleid af te dwingen. Belangrijke signalen zijn onder andere gebruiker of groepslidmaatschap, IP-locatie, apparaatstatus, applicatie en real-time risicodetectie. Begin met report-only modus om impact te beoordelen.'
        }
      },
      {
        title: {
          en: 'Privileged Identity Management',
          nl: 'Privileged Identity Management'
        },
        content: {
          en: 'PIM provides just-in-time privileged access to Azure resources and Entra ID. It requires users to activate their role assignments for a limited time, providing an audit trail and reducing standing access. Essential for administrative accounts.',
          nl: 'PIM biedt just-in-time privileged access tot Azure resources en Entra ID. Het vereist dat gebruikers hun role assignments voor een beperkte tijd activeren, wat een audit trail biedt en standing access vermindert. Essentieel voor administratieve accounts.'
        }
      }
    ],
    conclusion: {
      en: 'A well-designed IAM strategy is essential for Azure security. Combine RBAC, Conditional Access, and PIM to create a defense-in-depth approach to identity management.',
      nl: 'Een goed ontworpen IAM-strategie is essentieel voor Azure security. Combineer RBAC, Conditional Access en PIM om een defense-in-depth benadering voor identity management te creëren.'
    }
  }
};
