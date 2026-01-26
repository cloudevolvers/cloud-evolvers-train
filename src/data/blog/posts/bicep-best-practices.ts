import type { BlogPost } from '../types';

export const bicepBestPracticesPost: BlogPost = {
  id: 'bicep-best-practices',
  title: {
    en: 'Bicep Best Practices for Azure Infrastructure',
    nl: 'Bicep Best Practices voor Azure Infrastructuur'
  },
  description: {
    en: 'Learn essential Bicep best practices for writing maintainable, secure, and efficient Infrastructure as Code for Azure.',
    nl: 'Leer essentiële Bicep best practices voor het schrijven van onderhoudbare, veilige en efficiënte Infrastructure as Code voor Azure.'
  },
  date: '2025-05-20',
  author: 'Falk Krahl',
  tags: ['Azure', 'Bicep', 'IaC', 'DevOps', 'Best Practices'],
  image: '/images/pexels/pexels-infrastructure-as-code.jpg',
  excerpt: {
    en: 'Master Bicep with these proven best practices covering modularity, naming conventions, security, and deployment strategies.',
    nl: 'Beheers Bicep met deze bewezen best practices over modulariteit, naamgevingsconventies, beveiliging en deployment-strategieën.'
  },
  category: {
    en: 'Infrastructure',
    nl: 'Infrastructuur'
  },
  readTime: 10,
  content: {
    introduction: {
      en: 'Bicep is the recommended domain-specific language (DSL) for deploying Azure resources. Following best practices ensures your infrastructure code is maintainable, secure, and scalable.',
      nl: 'Bicep is de aanbevolen domain-specific language (DSL) voor het deployen van Azure resources. Het volgen van best practices zorgt ervoor dat je infrastructuurcode onderhoudbaar, veilig en schaalbaar is.'
    },
    sections: [
      {
        title: {
          en: 'Use Modules for Reusability',
          nl: 'Gebruik Modules voor Herbruikbaarheid'
        },
        content: {
          en: 'Break down complex deployments into reusable modules. Each module should have a single responsibility. Use the Azure Verified Modules registry when available for common patterns like storage accounts, key vaults, and networking.',
          nl: 'Splits complexe deployments op in herbruikbare modules. Elke module moet één verantwoordelijkheid hebben. Gebruik de Azure Verified Modules registry wanneer beschikbaar voor veelvoorkomende patronen zoals storage accounts, key vaults en networking.'
        }
      },
      {
        title: {
          en: 'Parameter and Variable Naming',
          nl: 'Parameter en Variabele Naamgeving'
        },
        content: {
          en: 'Use camelCase for parameters and variables. Be descriptive but concise. Include type constraints and allowed values where appropriate. Add @description decorators for documentation.',
          nl: 'Gebruik camelCase voor parameters en variabelen. Wees beschrijvend maar beknopt. Voeg type-constraints en toegestane waarden toe waar gepast. Voeg @description decorators toe voor documentatie.'
        }
      },
      {
        title: {
          en: 'Security Best Practices',
          nl: 'Security Best Practices'
        },
        content: {
          en: 'Never hardcode secrets - use Key Vault references or secure parameters. Enable diagnostic settings for all resources. Use managed identities instead of service principals with secrets. Apply least privilege RBAC assignments.',
          nl: 'Hardcode nooit secrets - gebruik Key Vault references of secure parameters. Schakel diagnostic settings in voor alle resources. Gebruik managed identities in plaats van service principals met secrets. Pas least privilege RBAC-toewijzingen toe.'
        }
      },
      {
        title: {
          en: 'Deployment Strategies',
          nl: 'Deployment Strategieën'
        },
        content: {
          en: 'Use what-if deployments to preview changes before applying. Implement CI/CD pipelines for consistent deployments. Consider using deployment stacks for lifecycle management. Test modules independently before integration.',
          nl: 'Gebruik what-if deployments om wijzigingen te previewan voordat je ze toepast. Implementeer CI/CD pipelines voor consistente deployments. Overweeg deployment stacks te gebruiken voor lifecycle management. Test modules onafhankelijk voordat je integreert.'
        }
      }
    ],
    conclusion: {
      en: 'Following these Bicep best practices will help you build robust, maintainable infrastructure code. Start with small modules and gradually build up your library of reusable components.',
      nl: 'Het volgen van deze Bicep best practices helpt je robuuste, onderhoudbare infrastructuurcode te bouwen. Begin met kleine modules en bouw geleidelijk je bibliotheek van herbruikbare componenten op.'
    }
  }
};
