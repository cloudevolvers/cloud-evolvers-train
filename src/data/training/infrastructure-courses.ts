import type { TrainingTranslations } from '../../types/training';

// Infrastructure and Windows Server Courses
export const infrastructureCourses: TrainingTranslations = {
  'windows-server-hybrid-infrastructure': {
    en: {
      id: 'windows-server-hybrid-infrastructure',
      slug: 'windows-server-hybrid-infrastructure',
      code: 'AZ-801',
      title: 'Windows Server Hybrid Infrastructure',
      description: 'Configure Windows Server services in hybrid environments',
      category: 'Infrastructure',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Advanced training focusing on configuring and managing Windows Server hybrid infrastructure. Learn to implement and manage on-premises and hybrid solutions such as identity, management, compute, networking, and storage.',
      
      learningObjectives: [
        'Configure Windows Server in hybrid environments',
        'Manage identity services in hybrid scenarios',
        'Implement and manage compute and storage',
        'Configure advanced networking services',
        'Monitor and troubleshoot hybrid infrastructure'
      ],
      
      prerequisites: [
        'Significant experience with Windows Server administration',
        'Understanding of networking concepts',
        'Familiarity with Active Directory and Azure AD',
        'Knowledge of PowerShell scripting'
      ],
      
      targetAudience: [
        'Windows Server Administrators',
        'Hybrid Infrastructure Engineers',
        'System Administrators',
        'Infrastructure Architects'
      ],
      
      certification: {
        available: true,
        name: 'Windows Server Hybrid Administrator Associate',
        examCode: 'AZ-801',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Hybrid Identity Services',
          topics: [
            'Azure AD Connect deployment and configuration',
            'Password writeback and self-service password reset',
            'Hybrid authentication methods',
            'Azure AD Connect Health monitoring',
            'Troubleshooting synchronization issues'
          ]
        },
        {
          title: 'Compute and Storage in Hybrid',
          topics: [
            'Windows Admin Center deployment',
            'Azure Arc for servers',
            'Storage Spaces Direct configuration',
            'Storage Replica implementation',
            'Backup and disaster recovery'
          ]
        },
        {
          title: 'Hybrid Networking',
          topics: [
            'DNS in hybrid environments',
            'VPN and ExpressRoute connectivity',
            'Network Load Balancing',
            'Software Defined Networking',
            'Network security implementation'
          ]
        },
        {
          title: 'Container and Virtual Infrastructure',
          topics: [
            'Windows containers on Server',
            'Hyper-V configuration and management',
            'VM migration strategies',
            'Azure Stack HCI integration',
            'Kubernetes on Windows Server'
          ]
        },
        {
          title: 'Monitoring and Maintenance',
          topics: [
            'Azure Monitor integration',
            'Performance monitoring and tuning',
            'Update management strategies',
            'Security compliance monitoring',
            'Disaster recovery testing'
          ]
        }
      ],
      
      highlights: [
        'Extensive hands-on hybrid scenarios',
        'Real-world enterprise implementations',
        'Advanced troubleshooting techniques',
        'Best practices for hybrid architecture',
        'Preparation for AZ-801 certification'
      ],
      
      instructor: {
        id: 'windows-expert-instructor',
        name: 'Steven Miller',
        title: 'Senior Infrastructure Architect & Windows Server Expert',
        bio: 'Infrastructure architect with 15+ years in Windows Server and hybrid solutions',
        certifications: ['Windows Server Hybrid Administrator Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Windows Server', 'Hybrid Infrastructure', 'Active Directory', 'Azure Integration']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Windows Server', 'Hybrid', 'AZ-801', 'Infrastructure', 'Enterprise'],
      
      isPublished: true,
      publishedAt: '2024-05-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 18
    },
    nl: {
      id: 'windows-server-hybrid-infrastructure',
      slug: 'windows-server-hybrid-infrastructure',
      code: 'AZ-801',
      title: 'Windows Server Hybrid Infrastructure',
      description: 'Configureer Windows Server services in hybride omgevingen',
      category: 'Infrastructure',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Geavanceerde training gericht op het configureren en beheren van Windows Server hybride infrastructuur. Leer on-premises en hybride oplossingen implementeren en beheren zoals identity, management, compute, networking en storage.',
      
      learningObjectives: [
        'Configureer Windows Server in hybride omgevingen',
        'Beheer identity services in hybride scenario\'s',
        'Implementeer en beheer compute en storage',
        'Configureer geavanceerde networking services',
        'Monitor en troubleshoot hybride infrastructuur'
      ],
      
      prerequisites: [
        'Aanzienlijke ervaring met Windows Server administratie',
        'Begrip van networking concepten',
        'Vertrouwdheid met Active Directory en Azure AD',
        'Kennis van PowerShell scripting'
      ],
      
      targetAudience: [
        'Windows Server Administrators',
        'Hybrid Infrastructure Engineers',
        'Systeem Administrators',
        'Infrastructure Architects'
      ],
      
      certification: {
        available: true,
        name: 'Windows Server Hybrid Administrator Associate',
        examCode: 'AZ-801',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Hybride Identity Services',
          topics: [
            'Azure AD Connect deployment en configuratie',
            'Password writeback en self-service password reset',
            'Hybride authentication methods',
            'Azure AD Connect Health monitoring',
            'Troubleshooting synchronization issues'
          ]
        },
        {
          title: 'Compute en Storage in Hybride',
          topics: [
            'Windows Admin Center deployment',
            'Azure Arc voor servers',
            'Storage Spaces Direct configuratie',
            'Storage Replica implementatie',
            'Backup en disaster recovery'
          ]
        },
        {
          title: 'Hybride Networking',
          topics: [
            'DNS in hybride omgevingen',
            'VPN en ExpressRoute connectivity',
            'Network Load Balancing',
            'Software Defined Networking',
            'Network security implementatie'
          ]
        },
        {
          title: 'Container en Virtual Infrastructure',
          topics: [
            'Windows containers op Server',
            'Hyper-V configuratie en management',
            'VM migratie strategieën',
            'Azure Stack HCI integratie',
            'Kubernetes op Windows Server'
          ]
        },
        {
          title: 'Monitoring en Maintenance',
          topics: [
            'Azure Monitor integratie',
            'Performance monitoring en tuning',
            'Update management strategieën',
            'Security compliance monitoring',
            'Disaster recovery testing'
          ]
        }
      ],
      
      highlights: [
        'Uitgebreide hands-on hybride scenario\'s',
        'Real-world enterprise implementaties',
        'Geavanceerde troubleshooting technieken',
        'Best practices voor hybride architectuur',
        'Voorbereiding voor AZ-801 certificering'
      ],
      
      instructor: {
        id: 'windows-expert-instructor',
        name: 'Steven Miller',
        title: 'Senior Infrastructure Architect & Windows Server Expert',
        bio: 'Infrastructure architect met 15+ jaar ervaring in Windows Server en hybride oplossingen',
        certifications: ['Windows Server Hybrid Administrator Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Windows Server', 'Hybrid Infrastructure', 'Active Directory', 'Azure Integration']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Windows Server', 'Hybrid', 'AZ-801', 'Infrastructure', 'Enterprise'],
      
      isPublished: true,
      publishedAt: '2024-05-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 18
    }
  },
  'windows-server-hybrid-administrator': {
    en: {
      id: 'windows-server-hybrid-administrator',
      slug: 'windows-server-hybrid-administrator',
      title: 'Windows Server Hybrid Administrator',
      description: 'Administer Windows Server in hybrid cloud environments',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1295, currency: 'EUR' },
      
      overview: 'Comprehensive training for administering Windows Server workloads in hybrid environments. Learn to manage Windows Server workloads using on-premises, hybrid, and cloud technologies.',
      
      learningObjectives: [
        'Deploy and manage Windows Server in hybrid environments',
        'Manage Windows Server workloads and services',
        'Implement security and compliance',
        'Monitor and troubleshoot Windows Server',
        'Plan migration and upgrade strategies'
      ],
      
      prerequisites: [
        'Experience with Windows Server administration',
        'Understanding of Active Directory concepts',
        'Basic knowledge of Azure services',
        'Familiarity with PowerShell'
      ],
      
      targetAudience: [
        'Windows Server Administrators',
        'System Administrators',
        'IT Infrastructure Professionals',
        'Cloud Migration Specialists'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Windows Server Deployment',
          topics: [
            'Windows Server installation methods',
            'Server Core and Desktop Experience',
            'Windows Admin Center setup',
            'Remote management configuration',
            'Initial server configuration'
          ]
        },
        {
          title: 'Identity and Access Management',
          topics: [
            'Active Directory Domain Services',
            'Group Policy management',
            'Certificate Services',
            'Azure AD integration',
            'Hybrid identity scenarios'
          ]
        },
        {
          title: 'Network Services and Storage',
          topics: [
            'DHCP and DNS configuration',
            'Network Policy Server',
            'File and Storage Services',
            'DFS and BranchCache',
            'iSCSI and Storage Spaces'
          ]
        },
        {
          title: 'Virtualization and Containers',
          topics: [
            'Hyper-V role configuration',
            'Virtual machine management',
            'Windows containers',
            'Docker on Windows Server',
            'Container orchestration basics'
          ]
        },
        {
          title: 'Security and Maintenance',
          topics: [
            'Windows Defender integration',
            'Update management',
            'Backup and recovery',
            'Performance monitoring',
            'Troubleshooting common issues'
          ]
        }
      ],
      
      highlights: [
        'Practical Windows Server administration',
        'Hybrid cloud integration scenarios',
        'Security hardening techniques',
        'Automation with PowerShell',
        'Real-world troubleshooting'
      ],
      
      instructor: {
        id: 'windows-admin-instructor',
        name: 'Rachel Green',
        title: 'Windows Server Specialist & IT Infrastructure Consultant',
        bio: 'IT infrastructure specialist with 10+ years in Windows Server environments',
        certifications: ['Windows Server Hybrid Administrator Associate', 'Azure Administrator Associate'],
        specialties: ['Windows Server', 'Active Directory', 'Group Policy', 'PowerShell Automation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Windows Server', 'Administration', 'Hybrid', 'Infrastructure', 'PowerShell'],
      
      isPublished: true,
      publishedAt: '2024-06-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 19
    },
    nl: {
      id: 'windows-server-hybrid-administrator',
      slug: 'windows-server-hybrid-administrator',
      title: 'Windows Server Hybrid Administrator',
      description: 'Administreer Windows Server in hybride cloud omgevingen',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1295, currency: 'EUR' },
      
      overview: 'Uitgebreide training voor het administreren van Windows Server workloads in hybride omgevingen. Leer Windows Server workloads beheren met on-premises, hybride en cloud technologieën.',
      
      learningObjectives: [
        'Deploy en beheer Windows Server in hybride omgevingen',
        'Beheer Windows Server workloads en services',
        'Implementeer security en compliance',
        'Monitor en troubleshoot Windows Server',
        'Plan migratie en upgrade strategieën'
      ],
      
      prerequisites: [
        'Ervaring met Windows Server administratie',
        'Begrip van Active Directory concepten',
        'Basiskennis van Azure services',
        'Vertrouwdheid met PowerShell'
      ],
      
      targetAudience: [
        'Windows Server Administrators',
        'Systeem Administrators',
        'IT Infrastructure Professionals',
        'Cloud Migration Specialists'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Windows Server Deployment',
          topics: [
            'Windows Server installatie methoden',
            'Server Core en Desktop Experience',
            'Windows Admin Center setup',
            'Remote management configuratie',
            'Initiële server configuratie'
          ]
        },
        {
          title: 'Identity en Access Management',
          topics: [
            'Active Directory Domain Services',
            'Group Policy management',
            'Certificate Services',
            'Azure AD integratie',
            'Hybride identity scenario\'s'
          ]
        },
        {
          title: 'Network Services en Storage',
          topics: [
            'DHCP en DNS configuratie',
            'Network Policy Server',
            'File en Storage Services',
            'DFS en BranchCache',
            'iSCSI en Storage Spaces'
          ]
        },
        {
          title: 'Virtualisatie en Containers',
          topics: [
            'Hyper-V role configuratie',
            'Virtual machine management',
            'Windows containers',
            'Docker op Windows Server',
            'Container orchestration basics'
          ]
        },
        {
          title: 'Security en Maintenance',
          topics: [
            'Windows Defender integratie',
            'Update management',
            'Backup en recovery',
            'Performance monitoring',
            'Troubleshooting veelvoorkomende issues'
          ]
        }
      ],
      
      highlights: [
        'Praktische Windows Server administratie',
        'Hybride cloud integratie scenario\'s',
        'Security hardening technieken',
        'Automatisering met PowerShell',
        'Real-world troubleshooting'
      ],
      
      instructor: {
        id: 'windows-admin-instructor',
        name: 'Rachel Green',
        title: 'Windows Server Specialist & IT Infrastructure Consultant',
        bio: 'IT infrastructure specialist met 10+ jaar ervaring in Windows Server omgevingen',
        certifications: ['Windows Server Hybrid Administrator Associate', 'Azure Administrator Associate'],
        specialties: ['Windows Server', 'Active Directory', 'Group Policy', 'PowerShell Automation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Windows Server', 'Administration', 'Hybrid', 'Infrastructure', 'PowerShell'],
      
      isPublished: true,
      publishedAt: '2024-06-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 19
    }
  },
  'azure-stack-hub': {
    en: {
      id: 'azure-stack-hub',
      slug: 'azure-stack-hub',
      code: 'AZ-600',
      title: 'Azure Stack Hub Operator',
      description: 'Configure and operate Azure Stack Hub environments',
      category: 'Infrastructure',
      level: 'Advanced',
      duration: { days: 3, format: 'days' },
      price: { amount: 1495, currency: 'EUR' },
      
      overview: 'Specialized training for Azure Stack Hub operators. Learn to provide cloud services from your own datacenter using Azure Stack Hub. Cover deployment, configuration, management, and troubleshooting of Azure Stack Hub infrastructure.',
      
      learningObjectives: [
        'Provide services to and for Azure Stack Hub',
        'Implement data center integration for Azure Stack Hub',
        'Manage identity and access for Azure Stack Hub',
        'Manage infrastructure for Azure Stack Hub'
      ],
      
      prerequisites: [
        'Experience with Azure services and portal',
        'Understanding of virtualization and networking',
        'Knowledge of PowerShell and Azure Resource Manager',
        'Experience with Windows Server and Hyper-V'
      ],
      
      targetAudience: [
        'Azure Stack Hub Operators',
        'Cloud Infrastructure Engineers',
        'Datacenter Administrators',
        'Hybrid Cloud Specialists'
      ],
      
      certification: {
        available: true,
        name: 'Azure Stack Hub Operator Associate',
        examCode: 'AZ-600',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Azure Stack Hub Services',
          topics: [
            'Infrastructure as a Service (IaaS) offerings',
            'Platform as a Service (PaaS) offerings',
            'Service planning and quotas',
            'Marketplace management',
            'Usage and billing reporting'
          ]
        },
        {
          title: 'Data Center Integration',
          topics: [
            'Network integration planning',
            'DNS forwarding configuration',
            'Identity integration scenarios',
            'Certificate management',
            'Firewall integration'
          ]
        },
        {
          title: 'Identity and Access Management',
          topics: [
            'Multi-tenant scenarios',
            'User and service principal management',
            'Role-based access control',
            'Guest directory management',
            'Federation with external identity providers'
          ]
        },
        {
          title: 'Infrastructure Management',
          topics: [
            'Region and capacity management',
            'Infrastructure backup and recovery',
            'Update management',
            'Performance monitoring and alerts',
            'Log collection and analysis'
          ]
        },
        {
          title: 'Troubleshooting and Support',
          topics: [
            'Diagnostic tools and techniques',
            'Common infrastructure issues',
            'Performance optimization',
            'Support case management',
            'Disaster recovery procedures'
          ]
        }
      ],
      
      highlights: [
        'Hands-on Azure Stack Hub administration',
        'Real-world hybrid cloud scenarios',
        'Infrastructure troubleshooting techniques',
        'Multi-tenant environment management',
        'Preparation for AZ-600 certification'
      ],
      
      instructor: {
        id: 'azure-stack-instructor',
        name: 'Daniel Wilson',
        title: 'Azure Stack Hub Architect & Hybrid Cloud Specialist',
        bio: 'Hybrid cloud architect with 8+ years in Azure Stack Hub implementations',
        certifications: ['Azure Stack Hub Operator Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Azure Stack Hub', 'Hybrid Cloud', 'Datacenter Integration', 'Infrastructure Management']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 8,
      featured: false,
      tags: ['Azure Stack Hub', 'AZ-600', 'Hybrid Cloud', 'Infrastructure', 'Datacenter'],
      
      isPublished: true,
      publishedAt: '2024-06-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 20
    },
    nl: {
      id: 'azure-stack-hub',
      slug: 'azure-stack-hub',
      code: 'AZ-600',
      title: 'Azure Stack Hub Operator',
      description: 'Configureer en beheer Azure Stack Hub omgevingen',
      category: 'Infrastructure',
      level: 'Advanced',
      duration: { days: 3, format: 'days' },
      price: { amount: 1495, currency: 'EUR' },
      
      overview: 'Gespecialiseerde training voor Azure Stack Hub operators. Leer cloud services leveren vanuit je eigen datacenter met Azure Stack Hub. Behandelt deployment, configuratie, management en troubleshooting van Azure Stack Hub infrastructuur.',
      
      learningObjectives: [
        'Lever services voor en met Azure Stack Hub',
        'Implementeer datacenter integratie voor Azure Stack Hub',
        'Beheer identity en access voor Azure Stack Hub',
        'Beheer infrastructuur voor Azure Stack Hub'
      ],
      
      prerequisites: [
        'Ervaring met Azure services en portal',
        'Begrip van virtualisatie en networking',
        'Kennis van PowerShell en Azure Resource Manager',
        'Ervaring met Windows Server en Hyper-V'
      ],
      
      targetAudience: [
        'Azure Stack Hub Operators',
        'Cloud Infrastructure Engineers',
        'Datacenter Administrators',
        'Hybrid Cloud Specialists'
      ],
      
      certification: {
        available: true,
        name: 'Azure Stack Hub Operator Associate',
        examCode: 'AZ-600',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Azure Stack Hub Services',
          topics: [
            'Infrastructure as a Service (IaaS) aanbod',
            'Platform as a Service (PaaS) aanbod',
            'Service planning en quotas',
            'Marketplace management',
            'Usage en billing reporting'
          ]
        },
        {
          title: 'Data Center Integratie',
          topics: [
            'Network integratie planning',
            'DNS forwarding configuratie',
            'Identity integratie scenario\'s',
            'Certificate management',
            'Firewall integratie'
          ]
        },
        {
          title: 'Identity en Access Management',
          topics: [
            'Multi-tenant scenario\'s',
            'User en service principal management',
            'Role-based access control',
            'Guest directory management',
            'Federation met externe identity providers'
          ]
        },
        {
          title: 'Infrastructure Management',
          topics: [
            'Region en capacity management',
            'Infrastructure backup en recovery',
            'Update management',
            'Performance monitoring en alerts',
            'Log collection en analyse'
          ]
        },
        {
          title: 'Troubleshooting en Support',
          topics: [
            'Diagnostic tools en technieken',
            'Veelvoorkomende infrastructure issues',
            'Performance optimalisatie',
            'Support case management',
            'Disaster recovery procedures'
          ]
        }
      ],
      
      highlights: [
        'Hands-on Azure Stack Hub administratie',
        'Real-world hybride cloud scenario\'s',
        'Infrastructure troubleshooting technieken',
        'Multi-tenant omgeving management',
        'Voorbereiding voor AZ-600 certificering'
      ],
      
      instructor: {
        id: 'azure-stack-instructor',
        name: 'Daniel Wilson',
        title: 'Azure Stack Hub Architect & Hybrid Cloud Specialist',
        bio: 'Hybride cloud architect met 8+ jaar ervaring in Azure Stack Hub implementaties',
        certifications: ['Azure Stack Hub Operator Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Azure Stack Hub', 'Hybrid Cloud', 'Datacenter Integration', 'Infrastructure Management']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 8,
      featured: false,
      tags: ['Azure Stack Hub', 'AZ-600', 'Hybrid Cloud', 'Infrastructure', 'Datacenter'],
      
      isPublished: true,
      publishedAt: '2024-06-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 20
    }
  },
  'azure-support-engineer': {
    en: {
      id: 'azure-support-engineer',
      slug: 'azure-support-engineer',
      code: 'AZ-720',
      title: 'Azure Support Engineer',
      description: 'Troubleshoot Microsoft Azure solutions with advanced support techniques',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Comprehensive training for Azure support engineers and professionals who troubleshoot Azure solutions. Learn advanced troubleshooting techniques, support methodologies, and tools for resolving complex Azure issues.',
      
      learningObjectives: [
        'Troubleshoot Azure connectivity issues',
        'Troubleshoot virtual machines and Azure App Service',
        'Troubleshoot Azure storage and data services',
        'Troubleshoot Azure identity and security',
        'Use advanced troubleshooting tools and techniques'
      ],
      
      prerequisites: [
        'AZ-104 certification or equivalent experience',
        'Experience troubleshooting Azure issues',
        'Understanding of Azure services architecture',
        'Knowledge of networking and security concepts'
      ],
      
      targetAudience: [
        'Azure Support Engineers',
        'Cloud Support Specialists',
        'Azure Administrators',
        'Technical Support Professionals'
      ],
      
      certification: {
        available: true,
        name: 'Azure Support Engineer Specialty',
        examCode: 'AZ-720',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Azure Connectivity Troubleshooting',
          topics: [
            'VNet connectivity issues',
            'ExpressRoute troubleshooting',
            'VPN Gateway problems',
            'DNS resolution issues',
            'Network Security Group conflicts'
          ]
        },
        {
          title: 'Compute Services Troubleshooting',
          topics: [
            'Virtual machine boot issues',
            'Performance and resource problems',
            'App Service deployment issues',
            'Container and AKS troubleshooting',
            'Function App execution problems'
          ]
        },
        {
          title: 'Storage and Data Services',
          topics: [
            'Storage account access issues',
            'Blob storage performance problems',
            'Database connectivity issues',
            'Cosmos DB troubleshooting',
            'Data migration problems'
          ]
        },
        {
          title: 'Identity and Security Issues',
          topics: [
            'Authentication failures',
            'RBAC permission problems',
            'Key Vault access issues',
            'Conditional Access troubleshooting',
            'Multi-factor authentication problems'
          ]
        },
        {
          title: 'Advanced Troubleshooting Tools',
          topics: [
            'Azure Monitor and Log Analytics',
            'Network Watcher tools',
            'Resource Health analysis',
            'Support ticket management',
            'Escalation procedures'
          ]
        }
      ],
      
      highlights: [
        'Real-world troubleshooting scenarios',
        'Advanced diagnostic tools and techniques',
        'Systematic problem-solving methodologies',
        'Case study analysis and resolution',
        'Preparation for AZ-720 certification'
      ],
      
      instructor: {
        id: 'support-expert-instructor',
        name: 'Amanda Foster',
        title: 'Senior Azure Support Engineer & Technical Specialist',
        bio: 'Azure support specialist with 8+ years resolving complex cloud issues',
        certifications: ['Azure Support Engineer Specialty', 'Azure Administrator Associate'],
        specialties: ['Azure Troubleshooting', 'Technical Support', 'Incident Resolution', 'Performance Optimization']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Azure', 'Support', 'AZ-720', 'Troubleshooting', 'Technical Support'],
      
      isPublished: true,
      publishedAt: '2024-07-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 21
    },
    nl: {
      id: 'azure-support-engineer',
      slug: 'azure-support-engineer',
      code: 'AZ-720',
      title: 'Azure Support Engineer',
      description: 'Troubleshoot Microsoft Azure oplossingen met geavanceerde support technieken',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Uitgebreide training voor Azure support engineers en professionals die Azure oplossingen troubleshooten. Leer geavanceerde troubleshooting technieken, support methodologieën en tools voor het oplossen van complexe Azure issues.',
      
      learningObjectives: [
        'Troubleshoot Azure connectivity issues',
        'Troubleshoot virtual machines en Azure App Service',
        'Troubleshoot Azure storage en data services',
        'Troubleshoot Azure identity en security',
        'Gebruik geavanceerde troubleshooting tools en technieken'
      ],
      
      prerequisites: [
        'AZ-104 certificering of gelijkwaardige ervaring',
        'Ervaring met troubleshooting Azure issues',
        'Begrip van Azure services architectuur',
        'Kennis van networking en security concepten'
      ],
      
      targetAudience: [
        'Azure Support Engineers',
        'Cloud Support Specialists',
        'Azure Administrators',
        'Technical Support Professionals'
      ],
      
      certification: {
        available: true,
        name: 'Azure Support Engineer Specialty',
        examCode: 'AZ-720',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Azure Connectivity Troubleshooting',
          topics: [
            'VNet connectivity issues',
            'ExpressRoute troubleshooting',
            'VPN Gateway problemen',
            'DNS resolution issues',
            'Network Security Group conflicten'
          ]
        },
        {
          title: 'Compute Services Troubleshooting',
          topics: [
            'Virtual machine boot issues',
            'Performance en resource problemen',
            'App Service deployment issues',
            'Container en AKS troubleshooting',
            'Function App execution problemen'
          ]
        },
        {
          title: 'Storage en Data Services',
          topics: [
            'Storage account access issues',
            'Blob storage performance problemen',
            'Database connectivity issues',
            'Cosmos DB troubleshooting',
            'Data migration problemen'
          ]
        },
        {
          title: 'Identity en Security Issues',
          topics: [
            'Authentication failures',
            'RBAC permission problemen',
            'Key Vault access issues',
            'Conditional Access troubleshooting',
            'Multi-factor authentication problemen'
          ]
        },
        {
          title: 'Geavanceerde Troubleshooting Tools',
          topics: [
            'Azure Monitor en Log Analytics',
            'Network Watcher tools',
            'Resource Health analyse',
            'Support ticket management',
            'Escalation procedures'
          ]
        }
      ],
      
      highlights: [
        'Real-world troubleshooting scenario\'s',
        'Geavanceerde diagnostic tools en technieken',
        'Systematische problem-solving methodologieën',
        'Case study analyse en resolutie',
        'Voorbereiding voor AZ-720 certificering'
      ],
      
      instructor: {
        id: 'support-expert-instructor',
        name: 'Amanda Foster',
        title: 'Senior Azure Support Engineer & Technical Specialist',
        bio: 'Azure support specialist met 8+ jaar ervaring in het oplossen van complexe cloud issues',
        certifications: ['Azure Support Engineer Specialty', 'Azure Administrator Associate'],
        specialties: ['Azure Troubleshooting', 'Technical Support', 'Incident Resolution', 'Performance Optimization']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Azure', 'Support', 'AZ-720', 'Troubleshooting', 'Technical Support'],
      
      isPublished: true,
      publishedAt: '2024-07-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 21
    }
  }
};
