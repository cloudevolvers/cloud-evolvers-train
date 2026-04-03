import type { BlogPost } from '../types';

export const azureProvisionedFileSharesPost: BlogPost = {
  id: 'azure-provisioned-file-shares-bicep',
  title: {
    en: 'Deploy Azure File Share Provisioned with Bicep: Performance Guaranteed',
    nl: 'Azure File Share Provisioned Deployen met Bicep: Prestaties Gegarandeerd'
  },
  description: {
    en: 'Learn how to deploy Azure Files with provisioned model using Bicep for predictable performance and consistent IOPS in your cloud workloads',
    nl: 'Leer hoe je Azure Files met provisioned model deployt via Bicep voor voorspelbare prestaties en consistente IOPS in je cloud workloads'
  },
  date: '2025-06-09',
  author: 'Yair Knijn',
  tags: ['Azure Files', 'Bicep', 'Infrastructure as Code', 'Storage', 'Performance'],
  image: '/images/pexels/pexels-cloud-computing-servers.jpg',
  excerpt: {
    en: 'Azure Files Provisioned model offers guaranteed IOPS and throughput, making it ideal for performance-critical workloads. This guide walks through deploying it with Bicep.',
    nl: 'Het Azure Files Provisioned-model biedt gegarandeerde IOPS en doorvoer, ideaal voor prestatie-kritische workloads. Deze gids laat zien hoe je het deployt met Bicep.'
  },
  category: {
    en: 'Infrastructure as Code',
    nl: 'Infrastructure as Code'
  },
  readTime: 10,
  content: {
    introduction: {
      en: 'Azure Files now has a provisioned model for premium shares. Instead of tying your IOPS to storage capacity (and hoping for the best), you pick the exact IOPS and throughput you need and Azure guarantees it. You pay whether you use it or not — that\'s the trade-off — but your database or VDI workload gets consistent performance instead of mysterious slowdowns during peak hours. Here\'s how to deploy one with Bicep.',
      nl: 'Azure Files heeft nu een provisioned model voor premium shares. In plaats van je IOPS te koppelen aan opslagcapaciteit (en het beste te hopen), kies je de exacte IOPS en doorvoer die je nodig hebt en Azure garandeert het. Je betaalt of je het gebruikt of niet — dat is de afweging — maar je database of VDI-workload krijgt consistente prestaties in plaats van mysterieuze vertragingen tijdens piekuren. Hier is hoe je er een deployt met Bicep.'
    },
    sections: [
      {
        title: {
          en: 'Understanding Provisioned vs Pay-as-you-go',
          nl: 'Provisioned vs Pay-as-you-go Begrijpen'
        },
        content: {
          en: 'The pay-as-you-go model scales IOPS with storage capacity, which can lead to unpredictable performance. Provisioned model lets you specify exact IOPS and bandwidth requirements, ensuring consistent performance for workloads that need it. You pay for reserved capacity whether you use it or not, but you get guaranteed performance.',
          nl: 'Het pay-as-you-go model schaalt IOPS met opslagcapaciteit, wat kan leiden tot onvoorspelbare prestaties. Het Provisioned-model laat je exacte IOPS- en bandbreedtevereisten specificeren, wat consistente prestaties garandeert voor workloads die het nodig hebben. Je betaalt voor gereserveerde capaciteit of je het gebruikt of niet, maar je krijgt gegarandeerde prestaties.'
        }
      },
      {
        title: {
          en: 'Bicep Deployment Template',
          nl: 'Bicep Deployment Template'
        },
        content: {
          en: 'Here is a complete Bicep template for deploying a provisioned file share with custom IOPS and bandwidth settings:',
          nl: 'Hier is een complete Bicep template voor het deployen van een provisioned file share met aangepaste IOPS- en bandbreedte-instellingen:'
        },
        code: {
          language: 'bicep',
          code: `param location string = resourceGroup().location
param storageAccountName string = 'stpremiumfiles\${uniqueString(resourceGroup().id)}'
param shareName string = 'provisioned-share'
param provisionedIops int = 3000
param provisionedBandwidthMibps int = 125

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  location: location
  sku: { name: 'Premium_LRS' }
  kind: 'FileStorage'
  properties: {
    minimumTlsVersion: 'TLS1_2'
    supportsHttpsTrafficOnly: true
  }
}

resource fileService 'Microsoft.Storage/storageAccounts/fileServices@2023-01-01' = {
  parent: storageAccount
  name: 'default'
}

resource fileShare 'Microsoft.Storage/storageAccounts/fileServices/shares@2023-01-01' = {
  parent: fileService
  name: shareName
  properties: {
    shareQuota: 100
    enabledProtocols: 'SMB'
    provisionedIops: provisionedIops
    provisionedBandwidthMibps: provisionedBandwidthMibps
  }
}`
        }
      },
      {
        title: {
          en: 'Sizing Your Provisioned Share',
          nl: 'Je Provisioned Share Dimensioneren'
        },
        content: {
          en: 'Calculate your IOPS and bandwidth needs based on workload characteristics. For virtual desktops, plan for 10-50 IOPS per user. Database workloads may need 5,000+ IOPS. Monitor your existing workloads before sizing to avoid over-provisioning.',
          nl: 'Bereken je IOPS- en bandbreedtebehoeften op basis van workloadkenmerken. Plan voor virtuele desktops 10-50 IOPS per gebruiker. Database workloads kunnen 5.000+ IOPS nodig hebben. Monitor je bestaande workloads vóór het dimensioneren om over-provisioning te voorkomen.'
        }
      },
      {
        title: {
          en: 'Cost Optimization Tips',
          nl: 'Kostenoptimalisatietips'
        },
        content: {
          en: 'Right-size your provisioned capacity based on actual usage patterns. Use Azure Monitor to track IOPS consumption and adjust provisioning. Consider reserved capacity for predictable workloads to save up to 36% compared to pay-as-you-go pricing.',
          nl: 'Dimensioneer je provisioned capaciteit op basis van daadwerkelijke gebruikspatronen. Gebruik Azure Monitor om IOPS-verbruik te volgen en provisioning aan te passen. Overweeg gereserveerde capaciteit voor voorspelbare workloads om tot 36% te besparen vergeleken met pay-as-you-go prijzen.'
        }
      }
    ],
    conclusion: {
      en: 'The provisioned model costs more than pay-as-you-go when you\'re not using the full capacity. But for workloads where inconsistent IOPS means angry users or failed jobs, the predictability is worth it. Deploy it with Bicep so it\'s versioned and repeatable. Monitor your actual IOPS consumption with Azure Monitor after a week or two, then right-size. Don\'t guess — measure first, then commit to a provisioning level.',
      nl: 'Het provisioned model kost meer dan pay-as-you-go als je de volledige capaciteit niet benut. Maar voor workloads waar inconsistente IOPS boze gebruikers of gefaalde jobs betekent, is de voorspelbaarheid het waard. Deploy het met Bicep zodat het versiebeheerd en herhaalbaar is. Monitor je werkelijke IOPS-verbruik met Azure Monitor na een week of twee en pas dan de grootte aan. Gok niet — meet eerst, dan pas committen aan een provisioning-niveau.'
    }
  }
};
