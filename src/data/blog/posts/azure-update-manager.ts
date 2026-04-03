import type { BlogPost } from '../types';

export const azureUpdateManagerPost: BlogPost = {
  id: 'azure-update-manager-vm-patching',
  title: {
    en: 'Azure Update Manager: Automate VM Patching at Scale',
    nl: 'Azure Update Manager: Automatiseer VM Patching op Schaal'
  },
  description: {
    en: 'Learn how to use Azure Update Manager to automate patching for Windows and Linux VMs across subscriptions with maintenance windows and compliance reporting',
    nl: 'Leer hoe je Azure Update Manager gebruikt om patching voor Windows en Linux VMs te automatiseren over subscriptions met maintenance windows en compliance reporting'
  },
  date: '2025-06-06',
  author: 'Yair Knijn',
  tags: ['Azure Update Manager', 'VM Patching', 'Automation', 'Security', 'Compliance'],
  image: '/images/pexels/pexels-modern-server-room.jpg',
  excerpt: {
    en: 'Azure Update Manager replaces Azure Automation Update Management with a native, agentless solution for patching Azure and Arc-enabled machines at scale.',
    nl: 'Azure Update Manager vervangt Azure Automation Update Management met een native, agentless oplossing voor het patchen van Azure en Arc-enabled machines op schaal.'
  },
  category: {
    en: 'Infrastructure & Operations',
    nl: 'Infrastructuur & Operaties'
  },
  readTime: 10,
  content: {
    introduction: {
      en: 'Nobody enjoys patching VMs. But unpatched VMs are how breaches happen, so you do it anyway. The old Azure Automation Update Management worked, sort of — it required a Log Analytics workspace, had quirky scheduling, and didn\'t handle Arc-enabled servers well. Azure Update Manager replaces all of that. It\'s native to ARM, works with both Azure VMs and Arc-enabled servers, handles Windows and Linux, and gives you one dashboard for patch compliance across everything.',
      nl: 'Niemand vindt het leuk om VM\'s te patchen. Maar niet-gepatchte VM\'s zijn hoe inbreuken gebeuren, dus je doet het toch. Het oude Azure Automation Update Management werkte, min of meer — het vereiste een Log Analytics workspace, had eigenaardige scheduling en ging niet goed om met Arc-enabled servers. Azure Update Manager vervangt dat allemaal. Het is native in ARM, werkt met zowel Azure VM\'s als Arc-enabled servers, ondersteunt Windows en Linux, en geeft je één dashboard voor patch compliance over alles.'
    },
    sections: [
      {
        title: {
          en: 'Key Benefits Over Legacy Update Management',
          nl: 'Belangrijkste Voordelen Over Legacy Update Management'
        },
        content: {
          en: 'Azure Update Manager offers several improvements: no Log Analytics workspace required, native Azure Resource Manager integration, dynamic scoping with Azure Resource Graph queries, support for both Azure VMs and Arc-enabled servers, and built-in maintenance configurations.',
          nl: 'Azure Update Manager biedt verschillende verbeteringen: geen Log Analytics workspace vereist, native Azure Resource Manager integratie, dynamic scoping met Azure Resource Graph queries, ondersteuning voor zowel Azure VMs als Arc-enabled servers, en ingebouwde maintenanceconfiguraties.'
        }
      },
      {
        title: {
          en: 'Setting Up Maintenance Configurations',
          nl: 'Maintenanceconfiguraties Instellen'
        },
        content: {
          en: 'Maintenance configurations define when and how updates are applied. Create configurations for different environment tiers (dev, staging, production) with appropriate maintenance windows. Use dynamic scopes to automatically include new machines based on tags or resource groups.',
          nl: 'Maintenanceconfiguraties definiëren wanneer en hoe updates worden toegepast. Maak configuraties voor verschillende omgevings-tiers (dev, staging, productie) met passende maintenance windows. Gebruik dynamic scopes om automatisch nieuwe machines op te nemen op basis van tags of resource groups.'
        },
        code: {
          language: 'bash',
          code: `# Create a maintenance configuration
az maintenance configuration create \\
  --resource-group rg-update-manager \\
  --name mc-production-weekly \\
  --location westeurope \\
  --maintenance-scope InGuestPatch \\
  --recur-every Week \\
  --start-date-time "2025-06-15 02:00" \\
  --duration "03:00" \\
  --time-zone "W. Europe Standard Time" \\
  --reboot-setting IfRequired \\
  --extension-properties '{"InGuestPatchMode":"User"}'`
        }
      },
      {
        title: {
          en: 'Dynamic Scoping with Azure Resource Graph',
          nl: 'Dynamic Scoping met Azure Resource Graph'
        },
        content: {
          en: 'Use Azure Resource Graph queries to dynamically target machines for updates. This ensures newly deployed VMs automatically get included in your patching schedule based on their tags or properties, without manual configuration.',
          nl: 'Gebruik Azure Resource Graph queries om dynamisch machines voor updates te targeten. Dit zorgt ervoor dat nieuw gedeployde VM\'s automatisch worden opgenomen in je patching schedule op basis van hun tags of properties, zonder handmatige configuratie.'
        }
      },
      {
        title: {
          en: 'Compliance Reporting and Alerting',
          nl: 'Compliance Reporting en Alerting'
        },
        content: {
          en: 'Monitor patch compliance across your estate using Azure Update Manager built-in reports. Set up alerts for machines that miss maintenance windows or have critical updates pending for too long. Export compliance data to Azure Monitor workbooks for executive dashboards.',
          nl: 'Monitor patch compliance over je estate met Azure Update Manager ingebouwde rapporten. Stel alerts in voor machines die maintenance windows missen of te lang kritieke updates pending hebben. Exporteer compliance data naar Azure Monitor workbooks voor executive dashboards.'
        }
      },
      {
        title: {
          en: 'Pre and Post Update Scripts',
          nl: 'Pre- en Post-Update Scripts'
        },
        content: {
          en: 'Run custom scripts before and after patching using Azure Update Manager pre/post events. Use pre-scripts to gracefully stop services or create snapshots. Use post-scripts to verify application health and restart services.',
          nl: 'Voer custom scripts uit voor en na patching met Azure Update Manager pre/post events. Gebruik pre-scripts om services gracefully te stoppen of snapshots te maken. Gebruik post-scripts om applicatie-health te verifiëren en services te herstarten.'
        }
      }
    ],
    conclusion: {
      en: 'If you\'re still on the old Azure Automation Update Management, migrate. Azure Update Manager drops the Log Analytics dependency, adds dynamic scoping so new VMs get patched automatically, and the compliance reporting is actually usable. Set up your maintenance windows per environment tier, add pre/post scripts to snapshot before patching, and set alerts for machines that fall behind. Patching will never be exciting, but it can at least be automatic.',
      nl: 'Als je nog op het oude Azure Automation Update Management zit, migreer. Azure Update Manager laat de Log Analytics-afhankelijkheid vallen, voegt dynamic scoping toe zodat nieuwe VM\'s automatisch gepatcht worden, en de compliance-rapportage is daadwerkelijk bruikbaar. Stel je maintenance windows in per omgevingstier, voeg pre/post scripts toe om snapshots te maken voor patching, en stel alerts in voor machines die achterlopen. Patching wordt nooit spannend, maar het kan tenminste automatisch.'
    }
  }
};
