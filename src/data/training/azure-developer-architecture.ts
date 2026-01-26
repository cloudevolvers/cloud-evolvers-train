import type { TrainingTranslations } from '../../types/training';

// Azure Developer and Architecture Courses
export const azureDeveloperArchitectureCourses: TrainingTranslations = {
  'azure-developer': {
    en: {
      id: 'azure-developer',
      slug: 'azure-developer',
      code: 'AZ-204',
      title: 'Azure Developer Associate',
      description: 'Develop cloud solutions with Azure services and tools',
      category: 'Developer Tools',
      level: 'Intermediate',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Comprehensive developer training focusing on building cloud applications and services on Microsoft Azure. Learn to design, build, test, and maintain cloud applications and services, utilizing Azure services for compute, storage, databases, and security.',
      
      learningObjectives: [
        'Develop Azure compute solutions',
        'Develop for Azure storage',
        'Implement Azure security',
        'Monitor, troubleshoot, and optimize Azure solutions',
        'Connect to and consume Azure services and third-party services'
      ],
      
      prerequisites: [
        'Proficiency in Azure-supported programming language (C#, Python, JavaScript, Java)',
        'Experience with Azure services and tools',
        'Understanding of cloud computing concepts',
        'Basic knowledge of REST APIs and HTTP'
      ],
      
      targetAudience: [
        'Cloud Developers',
        'Software Engineers',
        'Application Architects',
        'Full-Stack Developers'
      ],
      
      certification: {
        available: true,
        name: 'Azure Developer Associate',
        examCode: 'AZ-204',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Develop Azure Compute Solutions',
          topics: [
            'Azure Functions and Logic Apps',
            'Azure App Service Web Apps',
            'Container-based solutions',
            'Azure Kubernetes Service',
            'Azure Container Instances'
          ]
        },
        {
          title: 'Develop for Azure Storage',
          topics: [
            'Cosmos DB development',
            'Relational database development',
            'Blob storage solutions',
            'Azure Redis Cache',
            'Azure Search integration'
          ]
        },
        {
          title: 'Implement Azure Security',
          topics: [
            'Authentication and authorization',
            'Azure Key Vault',
            'Managed identities',
            'Microsoft Graph integration',
            'Secure configuration data'
          ]
        },
        {
          title: 'Monitor and Optimize Solutions',
          topics: [
            'Application Insights',
            'Azure Monitor and logging',
            'Performance optimization',
            'Caching strategies',
            'CDN implementation'
          ]
        },
        {
          title: 'Connect to Azure Services',
          topics: [
            'API Management',
            'Event-driven architectures',
            'Message-based solutions',
            'Third-party service integration',
            'Notification services'
          ]
        }
      ],
      
      highlights: [
        'Extensive coding labs and practical exercises',
        'Real-world application development scenarios',
        'Best practices for cloud-native development',
        'CI/CD pipeline implementation',
        'Preparation for AZ-204 certification'
      ],
      
      instructor: {
        id: 'developer-expert-instructor',
        name: 'Jennifer Walsh',
        title: 'Senior Cloud Developer & Solutions Architect',
        bio: 'Full-stack developer with 10+ years in cloud application development',
        certifications: ['Azure Developer Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Cloud Development', 'Microservices', 'DevOps', 'API Design']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: true,
      tags: ['Azure', 'Developer', 'AZ-204', 'Programming', 'Cloud Development'],
      
      isPublished: true,
      publishedAt: '2024-02-10T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 4
    },
    nl: {
      id: 'azure-developer',
      slug: 'azure-developer',
      code: 'AZ-204',
      title: 'Azure Developer Associate',
      description: 'Ontwikkel cloud oplossingen met Azure services en tools',
      category: 'Developer Tools',
      level: 'Intermediate',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Uitgebreide developer training gericht op het bouwen van cloud applicaties en services op Microsoft Azure. Leer cloud applicaties en services ontwerpen, bouwen, testen en onderhouden, waarbij Azure services voor compute, storage, databases en beveiliging worden gebruikt.',
      
      learningObjectives: [
        'Ontwikkel Azure compute oplossingen',
        'Ontwikkel voor Azure storage',
        'Implementeer Azure beveiliging',
        'Monitor, troubleshoot en optimaliseer Azure oplossingen',
        'Verbind met en consumeer Azure services en third-party services'
      ],
      
      prerequisites: [
        'Vaardigheid in Azure-ondersteunde programmeertaal (C#, Python, JavaScript, Java)',
        'Ervaring met Azure services en tools',
        'Begrip van cloud computing concepten',
        'Basiskennis van REST APIs en HTTP'
      ],
      
      targetAudience: [
        'Cloud Developers',
        'Software Engineers',
        'Application Architects',
        'Full-Stack Developers'
      ],
      
      certification: {
        available: true,
        name: 'Azure Developer Associate',
        examCode: 'AZ-204',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Ontwikkel Azure Compute Oplossingen',
          topics: [
            'Azure Functions en Logic Apps',
            'Azure App Service Web Apps',
            'Container-based oplossingen',
            'Azure Kubernetes Service',
            'Azure Container Instances'
          ]
        },
        {
          title: 'Ontwikkel voor Azure Storage',
          topics: [
            'Cosmos DB ontwikkeling',
            'Relational database ontwikkeling',
            'Blob storage oplossingen',
            'Azure Redis Cache',
            'Azure Search integratie'
          ]
        },
        {
          title: 'Implementeer Azure Beveiliging',
          topics: [
            'Authentication en authorization',
            'Azure Key Vault',
            'Managed identities',
            'Microsoft Graph integratie',
            'Secure configuration data'
          ]
        },
        {
          title: 'Monitor en Optimaliseer Oplossingen',
          topics: [
            'Application Insights',
            'Azure Monitor en logging',
            'Performance optimization',
            'Caching strategies',
            'CDN implementatie'
          ]
        },
        {
          title: 'Verbind met Azure Services',
          topics: [
            'API Management',
            'Event-driven architectures',
            'Message-based oplossingen',
            'Third-party service integratie',
            'Notification services'
          ]
        }
      ],
      
      highlights: [
        'Uitgebreide coding labs en praktische oefeningen',
        'Real-world applicatie ontwikkeling scenario\'s',
        'Best practices voor cloud-native ontwikkeling',
        'CI/CD pipeline implementatie',
        'Voorbereiding voor AZ-204 certificering'
      ],
      
      instructor: {
        id: 'developer-expert-instructor',
        name: 'Jennifer Walsh',
        title: 'Senior Cloud Developer & Solutions Architect',
        bio: 'Full-stack developer met 10+ jaar ervaring in cloud applicatie ontwikkeling',
        certifications: ['Azure Developer Associate', 'Azure Solutions Architect Expert'],
        specialties: ['Cloud Development', 'Microservices', 'DevOps', 'API Design']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: true,
      tags: ['Azure', 'Developer', 'AZ-204', 'Programming', 'Cloud Development'],
      
      isPublished: true,
      publishedAt: '2024-02-10T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 4
    }
  },
  'azure-solutions-architect': {
    en: {
      id: 'azure-solutions-architect',
      slug: 'azure-solutions-architect',
      code: 'AZ-305',
      title: 'Azure Solutions Architect Expert',
      description: 'Design enterprise-scale solutions on Microsoft Azure',
      category: 'Azure Architecture',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1795, currency: 'EUR' },
      
      overview: 'Advanced architecture training for designing and implementing solutions on Microsoft Azure. Learn to advise stakeholders and translate business requirements into secure, scalable, and reliable cloud solutions.',
      
      learningObjectives: [
        'Design monitoring solutions',
        'Design identity and access solutions',
        'Design data storage solutions',
        'Design business continuity solutions',
        'Design infrastructure solutions'
      ],
      
      prerequisites: [
        'AZ-104 certification or equivalent experience',
        'Experience with Azure administration',
        'Understanding of governance, security, and compliance',
        'Knowledge of business continuity and disaster recovery'
      ],
      
      targetAudience: [
        'Solutions Architects',
        'Cloud Architects',
        'Technical Leads',
        'Senior Infrastructure Engineers'
      ],
      
      certification: {
        available: true,
        name: 'Azure Solutions Architect Expert',
        examCode: 'AZ-305',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Design Identity and Access Solutions',
          topics: [
            'Identity and access management',
            'Multi-factor authentication',
            'Hybrid identity solutions',
            'Privileged identity management',
            'Azure AD B2B and B2C'
          ]
        },
        {
          title: 'Design Data Storage Solutions',
          topics: [
            'Storage account strategies',
            'Database solutions',
            'Data integration patterns',
            'Non-relational data stores',
            'Data archiving and retention'
          ]
        },
        {
          title: 'Design Business Continuity Solutions',
          topics: [
            'Backup and recovery strategies',
            'Site recovery planning',
            'High availability design',
            'Disaster recovery testing',
            'Azure regions and availability zones'
          ]
        },
        {
          title: 'Design Infrastructure Solutions',
          topics: [
            'Compute provisioning strategies',
            'Application architecture patterns',
            'Migration strategies',
            'Network topology design',
            'Hybrid connectivity'
          ]
        }
      ],
      
      highlights: [
        'Advanced architectural design patterns',
        'Real-world case studies and scenarios',
        'Best practices for enterprise solutions',
        'Cost optimization strategies',
        'Preparation for AZ-305 certification'
      ],
      
      instructor: {
        id: 'architect-expert-instructor',
        name: 'Robert Chen',
        title: 'Principal Cloud Architect & Microsoft MVP',
        bio: 'Enterprise architect with 15+ years designing large-scale cloud solutions',
        certifications: ['Azure Solutions Architect Expert', 'Azure DevOps Engineer Expert'],
        specialties: ['Enterprise Architecture', 'Cloud Strategy', 'Digital Transformation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 8,
      featured: true,
      tags: ['Azure', 'Architecture', 'AZ-305', 'Enterprise', 'Advanced'],
      
      isPublished: true,
      publishedAt: '2024-02-20T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 6
    },
    nl: {
      id: 'azure-solutions-architect',
      slug: 'azure-solutions-architect',
      code: 'AZ-305',
      title: 'Azure Solutions Architect Expert',
      description: 'Ontwerp enterprise-scale oplossingen op Microsoft Azure',
      category: 'Azure Architecture',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1795, currency: 'EUR' },
      
      overview: 'Geavanceerde architectuur training voor het ontwerpen en implementeren van oplossingen op Microsoft Azure. Leer stakeholders adviseren en business requirements vertalen naar veilige, schaalbare en betrouwbare cloud oplossingen.',
      
      learningObjectives: [
        'Ontwerp monitoring oplossingen',
        'Ontwerp identity en access oplossingen',
        'Ontwerp data storage oplossingen',
        'Ontwerp business continuity oplossingen',
        'Ontwerp infrastructuur oplossingen'
      ],
      
      prerequisites: [
        'AZ-104 certificering of gelijkwaardige ervaring',
        'Ervaring met Azure administratie',
        'Begrip van governance, beveiliging en compliance',
        'Kennis van business continuity en disaster recovery'
      ],
      
      targetAudience: [
        'Solutions Architects',
        'Cloud Architects',
        'Technical Leads',
        'Senior Infrastructure Engineers'
      ],
      
      certification: {
        available: true,
        name: 'Azure Solutions Architect Expert',
        examCode: 'AZ-305',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Ontwerp Identity en Access Oplossingen',
          topics: [
            'Identity en access management',
            'Multi-factor authentication',
            'Hybrid identity oplossingen',
            'Privileged identity management',
            'Azure AD B2B en B2C'
          ]
        },
        {
          title: 'Ontwerp Data Storage Oplossingen',
          topics: [
            'Storage account strategieën',
            'Database oplossingen',
            'Data integratie patronen',
            'Non-relational data stores',
            'Data archivering en retentie'
          ]
        },
        {
          title: 'Ontwerp Business Continuity Oplossingen',
          topics: [
            'Backup en recovery strategieën',
            'Site recovery planning',
            'High availability design',
            'Disaster recovery testing',
            'Azure regions en availability zones'
          ]
        },
        {
          title: 'Ontwerp Infrastructuur Oplossingen',
          topics: [
            'Compute provisioning strategieën',
            'Applicatie architectuur patronen',
            'Migratie strategieën',
            'Network topologie design',
            'Hybrid connectivity'
          ]
        }
      ],
      
      highlights: [
        'Geavanceerde architecturale design patterns',
        'Real-world case studies en scenario\'s',
        'Best practices voor enterprise oplossingen',
        'Cost optimization strategieën',
        'Voorbereiding voor AZ-305 certificering'
      ],
      
      instructor: {
        id: 'architect-expert-instructor',
        name: 'Robert Chen',
        title: 'Principal Cloud Architect & Microsoft MVP',
        bio: 'Enterprise architect met 15+ jaar ervaring in het ontwerpen van grootschalige cloud oplossingen',
        certifications: ['Azure Solutions Architect Expert', 'Azure DevOps Engineer Expert'],
        specialties: ['Enterprise Architecture', 'Cloud Strategy', 'Digital Transformation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 8,
      featured: true,
      tags: ['Azure', 'Architecture', 'AZ-305', 'Enterprise', 'Advanced'],
      
      isPublished: true,
      publishedAt: '2024-02-20T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 6
    }
  },
  'azure-devops-engineer': {
    en: {
      id: 'azure-devops-engineer',
      slug: 'azure-devops-engineer',
      code: 'AZ-400',
      title: 'Azure DevOps Engineer Expert',
      description: 'Implement DevOps practices for continuous integration and delivery',
      category: 'Developer Tools',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1695, currency: 'EUR' },
      
      overview: 'Advanced DevOps training focusing on implementing continuous integration, continuous delivery, dependency management, application infrastructure, and compliance and security practices using Azure DevOps and related technologies.',
      
      learningObjectives: [
        'Design and implement DevOps development processes',
        'Design and implement continuous integration',
        'Design and implement continuous delivery',
        'Implement dependency management',
        'Implement application infrastructure',
        'Implement continuous feedback'
      ],
      
      prerequisites: [
        'AZ-104 or AZ-204 certification',
        'Experience with version control systems',
        'Knowledge of Agile practices',
        'Basic understanding of Azure services'
      ],
      
      targetAudience: [
        'DevOps Engineers',
        'Release Engineers',
        'Site Reliability Engineers',
        'Development Team Leads'
      ],
      
      certification: {
        available: true,
        name: 'Azure DevOps Engineer Expert',
        examCode: 'AZ-400',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'DevOps Development Processes',
          topics: [
            'Azure Boards and project management',
            'Source control strategies',
            'Git workflows and branching',
            'Code quality and security',
            'Technical debt management'
          ]
        },
        {
          title: 'Continuous Integration',
          topics: [
            'Azure Pipelines design',
            'Build automation',
            'Testing strategies',
            'Package management',
            'Build agents and pools'
          ]
        },
        {
          title: 'Continuous Delivery and Deployment',
          topics: [
            'Release pipelines',
            'Deployment patterns',
            'Infrastructure as Code',
            'Configuration management',
            'Release gates and approvals'
          ]
        },
        {
          title: 'Monitoring and Feedback',
          topics: [
            'Application monitoring',
            'System feedback loops',
            'Performance optimization',
            'Log analytics',
            'Incident response'
          ]
        }
      ],
      
      highlights: [
        'Hands-on DevOps pipeline implementation',
        'Real-world CI/CD scenarios',
        'Infrastructure as Code best practices',
        'Security integration in DevOps',
        'Preparation for AZ-400 certification'
      ],
      
      instructor: {
        id: 'devops-expert-instructor',
        name: 'Alex Thompson',
        title: 'Senior DevOps Engineer & Cloud Automation Specialist',
        bio: 'DevOps engineer with 12+ years implementing CI/CD and automation',
        certifications: ['Azure DevOps Engineer Expert', 'Azure Solutions Architect Expert'],
        specialties: ['DevOps', 'CI/CD', 'Infrastructure as Code', 'Automation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure', 'DevOps', 'AZ-400', 'CI/CD', 'Automation'],
      
      isPublished: true,
      publishedAt: '2024-03-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 7
    },
    nl: {
      id: 'azure-devops-engineer',
      slug: 'azure-devops-engineer',
      code: 'AZ-400',
      title: 'Azure DevOps Engineer Expert',
      description: 'Implementeer DevOps practices voor continuous integration en delivery',
      category: 'Developer Tools',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1695, currency: 'EUR' },
      
      overview: 'Geavanceerde DevOps training gericht op het implementeren van continuous integration, continuous delivery, dependency management, applicatie infrastructuur en compliance en security practices met Azure DevOps en gerelateerde technologieën.',
      
      learningObjectives: [
        'Ontwerp en implementeer DevOps ontwikkelingsprocessen',
        'Ontwerp en implementeer continuous integration',
        'Ontwerp en implementeer continuous delivery',
        'Implementeer dependency management',
        'Implementeer applicatie infrastructuur',
        'Implementeer continuous feedback'
      ],
      
      prerequisites: [
        'AZ-104 of AZ-204 certificering',
        'Ervaring met version control systems',
        'Kennis van Agile practices',
        'Basiskennis van Azure services'
      ],
      
      targetAudience: [
        'DevOps Engineers',
        'Release Engineers',
        'Site Reliability Engineers',
        'Development Team Leads'
      ],
      
      certification: {
        available: true,
        name: 'Azure DevOps Engineer Expert',
        examCode: 'AZ-400',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'DevOps Ontwikkelingsprocessen',
          topics: [
            'Azure Boards en project management',
            'Source control strategieën',
            'Git workflows en branching',
            'Code quality en security',
            'Technical debt management'
          ]
        },
        {
          title: 'Continuous Integration',
          topics: [
            'Azure Pipelines design',
            'Build automation',
            'Testing strategieën',
            'Package management',
            'Build agents en pools'
          ]
        },
        {
          title: 'Continuous Delivery en Deployment',
          topics: [
            'Release pipelines',
            'Deployment patterns',
            'Infrastructure as Code',
            'Configuration management',
            'Release gates en approvals'
          ]
        },
        {
          title: 'Monitoring en Feedback',
          topics: [
            'Applicatie monitoring',
            'System feedback loops',
            'Performance optimization',
            'Log analytics',
            'Incident response'
          ]
        }
      ],
      
      highlights: [
        'Hands-on DevOps pipeline implementatie',
        'Real-world CI/CD scenario\'s',
        'Infrastructure as Code best practices',
        'Security integratie in DevOps',
        'Voorbereiding voor AZ-400 certificering'
      ],
      
      instructor: {
        id: 'devops-expert-instructor',
        name: 'Alex Thompson',
        title: 'Senior DevOps Engineer & Cloud Automation Specialist',
        bio: 'DevOps engineer met 12+ jaar ervaring in het implementeren van CI/CD en automation',
        certifications: ['Azure DevOps Engineer Expert', 'Azure Solutions Architect Expert'],
        specialties: ['DevOps', 'CI/CD', 'Infrastructure as Code', 'Automation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure', 'DevOps', 'AZ-400', 'CI/CD', 'Automation'],
      
      isPublished: true,
      publishedAt: '2024-03-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 7
    }
  }
};
