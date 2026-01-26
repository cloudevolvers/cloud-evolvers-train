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
  author: 'Falk Krahl',
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
      en: 'Azure Files recently introduced the Provisioned model for premium file shares, offering guaranteed IOPS and throughput regardless of usage patterns. Unlike pay-as-you-go, provisioned gives you predictable performance—critical for databases, virtual desktops, and high-performance applications. In this article, we deploy a provisioned file share using Bicep.',
      nl: 'Azure Files heeft recent het Provisioned-model geïntroduceerd voor premium file shares, met gegarandeerde IOPS en doorvoer ongeacht gebruikspatronen. Anders dan pay-as-you-go geeft provisioned je voorspelbare prestaties—cruciaal voor databases, virtuele desktops en high-performance applicaties. In dit artikel deployen we een provisioned file share met Bicep.'
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
          nl: 'Kostenoptimalisatie Tips'
        },
        content: {
          en: 'Right-size your provisioned capacity based on actual usage patterns. Use Azure Monitor to track IOPS consumption and adjust provisioning. Consider reserved capacity for predictable workloads to save up to 36% compared to pay-as-you-go pricing.',
          nl: 'Dimensioneer je provisioned capaciteit op basis van daadwerkelijke gebruikspatronen. Gebruik Azure Monitor om IOPS-verbruik te volgen en provisioning aan te passen. Overweeg gereserveerde capaciteit voor voorspelbare workloads om tot 36% te besparen vergeleken met pay-as-you-go prijzen.'
        }
      }
    ],
    conclusion: {
      en: 'Provisioned Azure Files gives you the performance guarantees needed for demanding workloads. With Bicep, you can deploy and version control your infrastructure while ensuring consistent, predictable file share performance.',
      nl: 'Provisioned Azure Files geeft je de prestatiegaranties die nodig zijn voor veeleisende workloads. Met Bicep kun je je infrastructuur deployen en versiebeheren terwijl je consistente, voorspelbare file share-prestaties waarborgt.'
    }
  }
};
