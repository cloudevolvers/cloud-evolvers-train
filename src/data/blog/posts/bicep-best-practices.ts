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
  author: 'Yair Knijn',
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
      en: 'Bicep is Azure\'s native IaC language, and if you\'re deploying to Azure, it\'s the right default choice over raw ARM templates. But writing Bicep that works is different from writing Bicep that your team can maintain six months later. Most of the pain comes from the same mistakes: everything in one huge file, no naming consistency, secrets in plain text, and no preview before deploying. Here are the practices that actually matter.',
      nl: 'Bicep is Azure\'s native IaC-taal, en als je naar Azure deployt, is het de juiste standaardkeuze boven rauwe ARM-templates. Maar Bicep schrijven die werkt is iets anders dan Bicep schrijven die je team over zes maanden nog kan onderhouden. De meeste pijn komt van dezelfde fouten: alles in één enorm bestand, geen naamgevingsconsistentie, secrets in platte tekst, en geen preview voor het deployen. Dit zijn de praktijken die er echt toe doen.'
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
          nl: 'Deploymentstrategieën'
        },
        content: {
          en: 'Use what-if deployments to preview changes before applying. Implement CI/CD pipelines for consistent deployments. Consider using deployment stacks for lifecycle management. Test modules independently before integration.',
          nl: 'Gebruik what-if deployments om wijzigingen vooraf te bekijken voordat je ze toepast. Implementeer CI/CD pipelines voor consistente deployments. Overweeg deployment stacks te gebruiken voor lifecycle management. Test modules onafhankelijk voordat je integreert.'
        }
      }
    ],
    conclusion: {
      en: 'None of this is complicated on its own. Small modules, clear names, secure parameters, what-if before apply. The hard part is discipline — doing it consistently on every deployment, not just the ones you have time for. Pick one practice you\'re not doing yet, apply it to your next PR, and build from there. Also look at Azure Verified Modules before writing your own — there\'s a good chance someone already built what you need.',
      nl: 'Niets hiervan is op zichzelf ingewikkeld. Kleine modules, duidelijke namen, secure parameters, what-if voor apply. Het moeilijke is discipline — het consequent doen bij elke deployment, niet alleen bij degene waarvoor je tijd hebt. Pak één praktijk die je nog niet toepast, gebruik het bij je volgende PR, en bouw van daaruit. Kijk ook naar Azure Verified Modules voordat je je eigen modules schrijft — de kans is groot dat iemand al heeft gebouwd wat je nodig hebt.'
    }
  }
};
