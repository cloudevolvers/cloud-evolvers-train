import type { TrainingTranslations } from '../../types/training';

// Azure Administration and Infrastructure Courses
export const azureAdministrationCourses: TrainingTranslations = {
  'azure-administrator': {
    en: {
      id: 'azure-administrator',
      slug: 'azure-administrator',
      code: 'AZ-104',
      title: 'Azure Administrator Associate',
      description: 'Master Azure administration with comprehensive resource management skills',
      category: 'Azure Administration',
      level: 'Intermediate',
      duration: { days: 4, format: 'days' },
      price: { amount: 1495, currency: 'EUR' },
      
      overview: 'Comprehensive Azure administrator training covering identity, governance, storage, compute, and networking. Learn to manage Azure subscriptions, secure identities, administer the infrastructure, configure virtual networking, connect Azure and on-premises sites, manage network traffic, implement storage solutions, create and scale virtual machines, implement web apps and containers, backup and share data, and monitor your solution.',
      
      learningObjectives: [
        'Manage Azure identities and governance',
        'Implement and manage storage solutions',
        'Deploy and manage Azure compute resources',
        'Configure and manage virtual networking',
        'Monitor and backup Azure resources'
      ],
      
      prerequisites: [
        'AZ-900 certification or equivalent knowledge',
        'Experience with PowerShell or Azure CLI',
        'Understanding of networking concepts',
        'Basic knowledge of virtualization concepts'
      ],
      
      targetAudience: [
        'Azure Administrators',
        'System Administrators',
        'Cloud Engineers',
        'Infrastructure Specialists'
      ],
      
      certification: {
        available: true,
        name: 'Azure Administrator Associate',
        examCode: 'AZ-104',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Manage Azure Identities and Governance',
          topics: [
            'Azure Active Directory',
            'Users and groups',
            'Azure role-based access control (RBAC)',
            'Azure Policy',
            'Resource groups and subscriptions'
          ]
        },
        {
          title: 'Implement and Manage Storage',
          topics: [
            'Storage accounts',
            'Blob storage',
            'Azure Files',
            'Storage security',
            'Data archiving and retention'
          ]
        },
        {
          title: 'Deploy and Manage Azure Compute Resources',
          topics: [
            'Virtual machines',
            'VM availability and scaling',
            'Azure App Service',
            'Container instances',
            'Azure Kubernetes Service (AKS)'
          ]
        },
        {
          title: 'Configure and Manage Virtual Networking',
          topics: [
            'Virtual networks and subnets',
            'Network security groups',
            'Azure Firewall',
            'VPN Gateway',
            'Azure Load Balancer'
          ]
        },
        {
          title: 'Monitor and Backup Azure Resources',
          topics: [
            'Azure Monitor',
            'Log Analytics',
            'Azure Backup',
            'Azure Site Recovery',
            'Cost management and billing'
          ]
        }
      ],
      
      highlights: [
        'Extensive hands-on labs with Azure portal and CLI',
        'Real-world scenarios and troubleshooting',
        'Best practices for Azure resource management',
        'Preparation for AZ-104 certification exam',
        'Access to Azure sandbox environment'
      ],
      
      instructor: {
        id: 'azure-admin-instructor',
        name: 'Michael Rodriguez',
        title: 'Senior Azure Infrastructure Specialist',
        bio: 'Microsoft Certified Trainer with 12+ years in cloud infrastructure',
        certifications: ['Azure Administrator Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Azure Administration', 'Infrastructure Management', 'Cloud Governance']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['Azure', 'Administration', 'AZ-104', 'Infrastructure', 'Governance'],
      
      isPublished: true,
      publishedAt: '2024-01-20T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 2
    },
    nl: {
      id: 'azure-administrator',
      slug: 'azure-administrator',
      code: 'AZ-104',
      title: 'Azure Administrator Associate',
      description: 'Beheers Azure administratie met uitgebreide resource management vaardigheden',
      category: 'Azure Administration',
      level: 'Intermediate',
      duration: { days: 4, format: 'days' },
      price: { amount: 1495, currency: 'EUR' },
      
      overview: 'Uitgebreide Azure administrator training die identity, governance, storage, compute en networking behandelt. Leer Azure subscriptions beheren, identities beveiligen, infrastructuur administreren, virtuele netwerken configureren, Azure en on-premises sites verbinden, netwerkverkeer beheren, storage oplossingen implementeren, virtuele machines creëren en schalen, web apps en containers implementeren, data backuppen en delen, en je oplossing monitoren.',
      
      learningObjectives: [
        'Beheer Azure identities en governance',
        'Implementeer en beheer storage oplossingen',
        'Deploy en beheer Azure compute resources',
        'Configureer en beheer virtuele netwerken',
        'Monitor en backup Azure resources'
      ],
      
      prerequisites: [
        'AZ-900 certificering of gelijkwaardige kennis',
        'Ervaring met PowerShell of Azure CLI',
        'Begrip van networking concepten',
        'Basiskennis van virtualisatie concepten'
      ],
      
      targetAudience: [
        'Azure Administrators',
        'Systeem Administrators',
        'Cloud Engineers',
        'Infrastructure Specialists'
      ],
      
      certification: {
        available: true,
        name: 'Azure Administrator Associate',
        examCode: 'AZ-104',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Beheer Azure Identities en Governance',
          topics: [
            'Azure Active Directory',
            'Gebruikers en groepen',
            'Azure role-based access control (RBAC)',
            'Azure Policy',
            'Resource groups en subscriptions'
          ]
        },
        {
          title: 'Implementeer en Beheer Storage',
          topics: [
            'Storage accounts',
            'Blob storage',
            'Azure Files',
            'Storage beveiliging',
            'Data archivering en retentie'
          ]
        },
        {
          title: 'Deploy en Beheer Azure Compute Resources',
          topics: [
            'Virtuele machines',
            'VM beschikbaarheid en schaling',
            'Azure App Service',
            'Container instances',
            'Azure Kubernetes Service (AKS)'
          ]
        },
        {
          title: 'Configureer en Beheer Virtual Networking',
          topics: [
            'Virtuele netwerken en subnets',
            'Network security groups',
            'Azure Firewall',
            'VPN Gateway',
            'Azure Load Balancer'
          ]
        },
        {
          title: 'Monitor en Backup Azure Resources',
          topics: [
            'Azure Monitor',
            'Log Analytics',
            'Azure Backup',
            'Azure Site Recovery',
            'Cost management en billing'
          ]
        }
      ],
      
      highlights: [
        'Uitgebreide hands-on labs met Azure portal en CLI',
        'Real-world scenario\'s en troubleshooting',
        'Best practices voor Azure resource management',
        'Voorbereiding voor AZ-104 certificeringsexamen',
        'Toegang tot Azure sandbox omgeving'
      ],
      
      instructor: {
        id: 'azure-admin-instructor',
        name: 'Michael Rodriguez',
        title: 'Senior Azure Infrastructure Specialist',
        bio: 'Microsoft Certified Trainer met 12+ jaar ervaring in cloud infrastructuur',
        certifications: ['Azure Administrator Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Azure Administration', 'Infrastructure Management', 'Cloud Governance']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['Azure', 'Administration', 'AZ-104', 'Infrastructure', 'Governance'],
      
      isPublished: true,
      publishedAt: '2024-01-20T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 2
    }
  },
  'azure-network-engineer': {
    en: {
      id: 'azure-network-engineer',
      slug: 'azure-network-engineer',
      code: 'AZ-700',
      title: 'Azure Network Engineer Associate',
      description: 'Design, implement, and manage Azure networking solutions',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1295, currency: 'EUR' },
      
      overview: 'Comprehensive networking training focusing on Azure network infrastructure. Learn to design, implement, manage, and monitor network solutions in Azure including virtual networks, hybrid connections, load balancing, network security, and private connectivity.',
      
      learningObjectives: [
        'Design and implement core networking infrastructure',
        'Design and implement routing and load balancing',
        'Secure and monitor network solutions',
        'Design and implement Private access to Azure Services'
      ],
      
      prerequisites: [
        'AZ-104 certification or equivalent experience',
        'Strong understanding of networking concepts',
        'Experience with Azure networking services',
        'Knowledge of on-premises networking technologies'
      ],
      
      targetAudience: [
        'Network Engineers',
        'Azure Network Administrators',
        'Infrastructure Architects',
        'Cloud Network Specialists'
      ],
      
      certification: {
        available: true,
        name: 'Azure Network Engineer Associate',
        examCode: 'AZ-700',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Design and Implement Core Networking Infrastructure',
          topics: [
            'Virtual networks and subnets',
            'Public and private IP addressing',
            'Name resolution',
            'Virtual network connectivity',
            'Routing'
          ]
        },
        {
          title: 'Design and Implement Routing',
          topics: [
            'Route tables and user-defined routes',
            'Border Gateway Protocol',
            'Azure Route Server',
            'Network Virtual Appliances',
            'Service chaining'
          ]
        },
        {
          title: 'Secure and Monitor Networks',
          topics: [
            'Network Security Groups',
            'Azure Firewall',
            'Web Application Firewall',
            'Azure Monitor for networks',
            'Network troubleshooting'
          ]
        },
        {
          title: 'Design and Implement Private Access',
          topics: [
            'Private endpoints',
            'Private Link services',
            'Service endpoints',
            'Private DNS zones',
            'Application Gateway'
          ]
        }
      ],
      
      highlights: [
        'Advanced networking scenarios and troubleshooting',
        'Hands-on labs with complex network topologies',
        'Best practices for network security and performance',
        'Preparation for AZ-700 certification',
        'Real-world case studies and implementations'
      ],
      
      instructor: {
        id: 'network-expert-instructor',
        name: 'David Kim',
        title: 'Senior Network Architect & Azure Specialist',
        bio: 'Network architect with 15+ years experience in enterprise networking',
        certifications: ['Azure Network Engineer Associate', 'CCNP Enterprise'],
        specialties: ['Azure Networking', 'Hybrid Connectivity', 'Network Security']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure', 'Networking', 'AZ-700', 'Infrastructure', 'Security'],
      
      isPublished: true,
      publishedAt: '2024-03-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 8
    },
    nl: {
      id: 'azure-network-engineer',
      slug: 'azure-network-engineer',
      code: 'AZ-700',
      title: 'Azure Network Engineer Associate',
      description: 'Ontwerp, implementeer en beheer Azure networking oplossingen',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1295, currency: 'EUR' },
      
      overview: 'Uitgebreide networking training gericht op Azure network infrastructuur. Leer het ontwerpen, implementeren, beheren en monitoren van network oplossingen in Azure inclusief virtuele netwerken, hybride verbindingen, load balancing, network beveiliging en private connectivity.',
      
      learningObjectives: [
        'Ontwerp en implementeer kern networking infrastructuur',
        'Ontwerp en implementeer routing en load balancing',
        'Beveilig en monitor network oplossingen',
        'Ontwerp en implementeer Private toegang tot Azure Services'
      ],
      
      prerequisites: [
        'AZ-104 certificering of gelijkwaardige ervaring',
        'Sterk begrip van networking concepten',
        'Ervaring met Azure networking services',
        'Kennis van on-premises networking technologieën'
      ],
      
      targetAudience: [
        'Network Engineers',
        'Azure Network Administrators',
        'Infrastructure Architects',
        'Cloud Network Specialists'
      ],
      
      certification: {
        available: true,
        name: 'Azure Network Engineer Associate',
        examCode: 'AZ-700',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Ontwerp en Implementeer Kern Networking Infrastructuur',
          topics: [
            'Virtuele netwerken en subnets',
            'Public en private IP adressering',
            'Name resolution',
            'Virtual network connectivity',
            'Routing'
          ]
        },
        {
          title: 'Ontwerp en Implementeer Routing',
          topics: [
            'Route tables en user-defined routes',
            'Border Gateway Protocol',
            'Azure Route Server',
            'Network Virtual Appliances',
            'Service chaining'
          ]
        },
        {
          title: 'Beveilig en Monitor Networks',
          topics: [
            'Network Security Groups',
            'Azure Firewall',
            'Web Application Firewall',
            'Azure Monitor voor networks',
            'Network troubleshooting'
          ]
        },
        {
          title: 'Ontwerp en Implementeer Private Access',
          topics: [
            'Private endpoints',
            'Private Link services',
            'Service endpoints',
            'Private DNS zones',
            'Application Gateway'
          ]
        }
      ],
      
      highlights: [
        'Geavanceerde networking scenario\'s en troubleshooting',
        'Hands-on labs met complexe network topologieën',
        'Best practices voor network beveiliging en performance',
        'Voorbereiding voor AZ-700 certificering',
        'Real-world case studies en implementaties'
      ],
      
      instructor: {
        id: 'network-expert-instructor',
        name: 'David Kim',
        title: 'Senior Network Architect & Azure Specialist',
        bio: 'Network architect met 15+ jaar ervaring in enterprise networking',
        certifications: ['Azure Network Engineer Associate', 'CCNP Enterprise'],
        specialties: ['Azure Networking', 'Hybrid Connectivity', 'Network Security']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure', 'Networking', 'AZ-700', 'Infrastructure', 'Security'],
      
      isPublished: true,
      publishedAt: '2024-03-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 8
    }
  }
};
