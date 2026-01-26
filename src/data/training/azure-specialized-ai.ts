import type { TrainingTranslations } from '../../types/training';

// Azure Specialized and AI Courses
export const azureSpecializedCourses: TrainingTranslations = {
  'azure-ai-developer-bootcamp': {
    en: {
      id: 'azure-ai-developer-bootcamp',
      slug: 'azure-ai-developer-bootcamp',
      title: 'Azure AI Developer Bootcamp',
      description: 'Intensive hands-on training for building AI solutions with Azure Cognitive Services',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Intensive bootcamp for developers looking to build sophisticated AI solutions using Azure Cognitive Services, Machine Learning, and AI services. Focus on practical implementation and real-world scenarios.',
      
      learningObjectives: [
        'Build intelligent applications with Azure Cognitive Services',
        'Implement computer vision and natural language processing',
        'Create conversational AI solutions',
        'Deploy and manage AI models in production',
        'Integrate AI services with existing applications'
      ],
      
      prerequisites: [
        'Programming experience (C#, Python, or JavaScript)',
        'Basic understanding of machine learning concepts',
        'Familiarity with Azure services',
        'Experience with REST APIs'
      ],
      
      targetAudience: [
        'Software Developers',
        'AI/ML Engineers',
        'Solution Architects',
        'Data Scientists moving to cloud'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Azure Cognitive Services Overview',
          topics: [
            'Cognitive Services architecture',
            'Service authentication and security',
            'SDK and REST API integration',
            'Multi-service resource management',
            'Cost optimization strategies'
          ]
        },
        {
          title: 'Computer Vision Solutions',
          topics: [
            'Image analysis and classification',
            'Object detection and recognition',
            'Optical Character Recognition (OCR)',
            'Face detection and verification',
            'Custom Vision model training'
          ]
        },
        {
          title: 'Language and Speech Processing',
          topics: [
            'Text analytics and sentiment analysis',
            'Language understanding (LUIS)',
            'Speech-to-text and text-to-speech',
            'Translation services',
            'Custom language models'
          ]
        },
        {
          title: 'Conversational AI and Bots',
          topics: [
            'Bot Framework and Azure Bot Service',
            'QnA Maker integration',
            'Multi-channel deployment',
            'Advanced conversation flows',
            'Bot analytics and optimization'
          ]
        },
        {
          title: 'Production Deployment',
          topics: [
            'Container deployment strategies',
            'Monitoring and logging',
            'Performance optimization',
            'A/B testing for AI models',
            'Continuous integration for AI'
          ]
        }
      ],
      
      highlights: [
        'Intensive hands-on coding sessions',
        'Build 3 complete AI applications',
        'Expert guidance from AI practitioners',
        'Real-world case studies and scenarios',
        'Access to Azure AI development environment'
      ],
      
      instructor: {
        id: 'ai-bootcamp-instructor',
        name: 'Dr. Priya Patel',
        title: 'AI Solutions Architect & Machine Learning Expert',
        bio: 'AI researcher and practitioner with 8+ years in AI solution development',
        certifications: ['Azure AI Engineer Associate', 'Azure Data Scientist Associate'],
        specialties: ['Cognitive Services', 'Machine Learning', 'Computer Vision', 'NLP']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 8,
      featured: false,
      tags: ['Azure', 'AI', 'Machine Learning', 'Cognitive Services', 'Bootcamp'],
      
      isPublished: true,
      publishedAt: '2024-03-10T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 15
    },
    nl: {
      id: 'azure-ai-developer-bootcamp',
      slug: 'azure-ai-developer-bootcamp',
      title: 'Azure AI Developer Bootcamp',
      description: 'Intensieve hands-on training voor het bouwen van AI oplossingen met Azure Cognitive Services',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Intensieve bootcamp voor developers die geavanceerde AI oplossingen willen bouwen met Azure Cognitive Services, Machine Learning en AI services. Focus op praktische implementatie en real-world scenario\'s.',
      
      learningObjectives: [
        'Bouw intelligente applicaties met Azure Cognitive Services',
        'Implementeer computer vision en natural language processing',
        'Creëer conversational AI oplossingen',
        'Deploy en beheer AI modellen in productie',
        'Integreer AI services met bestaande applicaties'
      ],
      
      prerequisites: [
        'Programmeerervaring (C#, Python, of JavaScript)',
        'Basiskennis van machine learning concepten',
        'Vertrouwdheid met Azure services',
        'Ervaring met REST APIs'
      ],
      
      targetAudience: [
        'Software Developers',
        'AI/ML Engineers',
        'Solution Architects',
        'Data Scientists die naar cloud overstappen'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Azure Cognitive Services Overzicht',
          topics: [
            'Cognitive Services architectuur',
            'Service authentication en security',
            'SDK en REST API integratie',
            'Multi-service resource management',
            'Cost optimization strategieën'
          ]
        },
        {
          title: 'Computer Vision Oplossingen',
          topics: [
            'Image analyse en classificatie',
            'Object detectie en herkenning',
            'Optical Character Recognition (OCR)',
            'Face detectie en verificatie',
            'Custom Vision model training'
          ]
        },
        {
          title: 'Taal en Speech Processing',
          topics: [
            'Text analytics en sentiment analyse',
            'Language understanding (LUIS)',
            'Speech-to-text en text-to-speech',
            'Translation services',
            'Custom language models'
          ]
        },
        {
          title: 'Conversational AI en Bots',
          topics: [
            'Bot Framework en Azure Bot Service',
            'QnA Maker integratie',
            'Multi-channel deployment',
            'Geavanceerde conversation flows',
            'Bot analytics en optimalisatie'
          ]
        },
        {
          title: 'Productie Deployment',
          topics: [
            'Container deployment strategieën',
            'Monitoring en logging',
            'Performance optimalisatie',
            'A/B testing voor AI modellen',
            'Continuous integration voor AI'
          ]
        }
      ],
      
      highlights: [
        'Intensieve hands-on coding sessies',
        'Bouw 3 complete AI applicaties',
        'Expert begeleiding van AI practitioners',
        'Real-world case studies en scenario\'s',
        'Toegang tot Azure AI development omgeving'
      ],
      
      instructor: {
        id: 'ai-bootcamp-instructor',
        name: 'Dr. Priya Patel',
        title: 'AI Solutions Architect & Machine Learning Expert',
        bio: 'AI researcher en practitioner met 8+ jaar ervaring in AI oplossing ontwikkeling',
        certifications: ['Azure AI Engineer Associate', 'Azure Data Scientist Associate'],
        specialties: ['Cognitive Services', 'Machine Learning', 'Computer Vision', 'NLP']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 8,
      featured: false,
      tags: ['Azure', 'AI', 'Machine Learning', 'Cognitive Services', 'Bootcamp'],
      
      isPublished: true,
      publishedAt: '2024-03-10T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 15
    }
  },
  'azure-iot-developer': {
    en: {
      id: 'azure-iot-developer',
      slug: 'azure-iot-developer',
      code: 'AZ-220',
      title: 'Azure IoT Developer Specialty',
      description: 'Develop and implement IoT solutions using Azure IoT services',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1695, currency: 'EUR' },
      
      overview: 'Specialized training for implementing and managing Internet of Things (IoT) solutions using Azure IoT Hub, IoT Central, and related services. Learn to develop, deploy, and maintain IoT solutions at scale.',
      
      learningObjectives: [
        'Implement the IoT solution infrastructure',
        'Provision and manage devices',
        'Implement IoT Edge',
        'Implement business integration',
        'Process and manage data',
        'Monitor, troubleshoot, and optimize IoT solutions'
      ],
      
      prerequisites: [
        'Programming experience in an Azure-supported language',
        'Understanding of IoT concepts and protocols',
        'Basic knowledge of Azure services',
        'Experience with cloud development patterns'
      ],
      
      targetAudience: [
        'IoT Developers',
        'Embedded Systems Engineers',
        'Cloud Solution Developers',
        'IoT Solution Architects'
      ],
      
      certification: {
        available: true,
        name: 'Azure IoT Developer Specialty',
        examCode: 'AZ-220',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'IoT Solution Infrastructure',
          topics: [
            'Azure IoT Hub setup and configuration',
            'Device-to-cloud messaging',
            'Cloud-to-device messaging',
            'IoT device lifecycle management',
            'Security and authentication'
          ]
        },
        {
          title: 'Device Provisioning and Management',
          topics: [
            'Device Provisioning Service',
            'Bulk device enrollment',
            'Device twin and direct methods',
            'Device configuration at scale',
            'Firmware updates'
          ]
        },
        {
          title: 'IoT Edge Implementation',
          topics: [
            'IoT Edge runtime and modules',
            'Custom module development',
            'Offline and hybrid scenarios',
            'Edge intelligence and analytics',
            'Container deployment strategies'
          ]
        },
        {
          title: 'Business Integration',
          topics: [
            'Event Grid and Service Bus integration',
            'Logic Apps for IoT workflows',
            'Stream Analytics processing',
            'Power BI integration',
            'Custom business applications'
          ]
        },
        {
          title: 'Data Processing and Analytics',
          topics: [
            'Hot and cold path analytics',
            'Time Series Insights',
            'Azure Digital Twins',
            'Machine learning integration',
            'Predictive maintenance scenarios'
          ]
        }
      ],
      
      highlights: [
        'Hands-on IoT device simulation and management',
        'Real-world industrial IoT scenarios',
        'Edge computing implementation',
        'End-to-end IoT solution development',
        'Preparation for AZ-220 certification'
      ],
      
      instructor: {
        id: 'iot-expert-instructor',
        name: 'Thomas Anderson',
        title: 'IoT Solutions Architect & Edge Computing Specialist',
        bio: 'IoT architect with 10+ years in industrial IoT and edge computing',
        certifications: ['Azure IoT Developer Specialty', 'Azure Solutions Architect Expert'],
        specialties: ['IoT Architecture', 'Edge Computing', 'Industrial IoT', 'Device Management']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure', 'IoT', 'AZ-220', 'Edge Computing', 'Industrial'],
      
      isPublished: true,
      publishedAt: '2024-04-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 16
    },
    nl: {
      id: 'azure-iot-developer',
      slug: 'azure-iot-developer',
      code: 'AZ-220',
      title: 'Azure IoT Developer Specialty',
      description: 'Ontwikkel en implementeer IoT oplossingen met Azure IoT services',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1695, currency: 'EUR' },
      
      overview: 'Gespecialiseerde training voor het implementeren en beheren van Internet of Things (IoT) oplossingen met Azure IoT Hub, IoT Central en gerelateerde services. Leer IoT oplossingen ontwikkelen, deployen en onderhouden op schaal.',
      
      learningObjectives: [
        'Implementeer de IoT oplossing infrastructuur',
        'Provision en beheer devices',
        'Implementeer IoT Edge',
        'Implementeer business integratie',
        'Proces en beheer data',
        'Monitor, troubleshoot en optimaliseer IoT oplossingen'
      ],
      
      prerequisites: [
        'Programmeerervaring in een Azure-ondersteunde taal',
        'Begrip van IoT concepten en protocollen',
        'Basiskennis van Azure services',
        'Ervaring met cloud development patterns'
      ],
      
      targetAudience: [
        'IoT Developers',
        'Embedded Systems Engineers',
        'Cloud Solution Developers',
        'IoT Solution Architects'
      ],
      
      certification: {
        available: true,
        name: 'Azure IoT Developer Specialty',
        examCode: 'AZ-220',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'IoT Oplossing Infrastructuur',
          topics: [
            'Azure IoT Hub setup en configuratie',
            'Device-to-cloud messaging',
            'Cloud-to-device messaging',
            'IoT device lifecycle management',
            'Security en authentication'
          ]
        },
        {
          title: 'Device Provisioning en Management',
          topics: [
            'Device Provisioning Service',
            'Bulk device enrollment',
            'Device twin en direct methods',
            'Device configuratie op schaal',
            'Firmware updates'
          ]
        },
        {
          title: 'IoT Edge Implementatie',
          topics: [
            'IoT Edge runtime en modules',
            'Custom module ontwikkeling',
            'Offline en hybrid scenario\'s',
            'Edge intelligence en analytics',
            'Container deployment strategieën'
          ]
        },
        {
          title: 'Business Integratie',
          topics: [
            'Event Grid en Service Bus integratie',
            'Logic Apps voor IoT workflows',
            'Stream Analytics processing',
            'Power BI integratie',
            'Custom business applicaties'
          ]
        },
        {
          title: 'Data Processing en Analytics',
          topics: [
            'Hot en cold path analytics',
            'Time Series Insights',
            'Azure Digital Twins',
            'Machine learning integratie',
            'Predictive maintenance scenario\'s'
          ]
        }
      ],
      
      highlights: [
        'Hands-on IoT device simulatie en management',
        'Real-world industrial IoT scenario\'s',
        'Edge computing implementatie',
        'End-to-end IoT oplossing ontwikkeling',
        'Voorbereiding voor AZ-220 certificering'
      ],
      
      instructor: {
        id: 'iot-expert-instructor',
        name: 'Thomas Anderson',
        title: 'IoT Solutions Architect & Edge Computing Specialist',
        bio: 'IoT architect met 10+ jaar ervaring in industrial IoT en edge computing',
        certifications: ['Azure IoT Developer Specialty', 'Azure Solutions Architect Expert'],
        specialties: ['IoT Architecture', 'Edge Computing', 'Industrial IoT', 'Device Management']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure', 'IoT', 'AZ-220', 'Edge Computing', 'Industrial'],
      
      isPublished: true,
      publishedAt: '2024-04-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 16
    }
  },
  'azure-virtual-desktop': {
    en: {
      id: 'azure-virtual-desktop',
      slug: 'azure-virtual-desktop',
      title: 'Azure Virtual Desktop Specialist',
      description: 'Deploy and manage virtual desktop infrastructure with Azure Virtual Desktop',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Comprehensive training on Azure Virtual Desktop (AVD) covering deployment, configuration, and management of virtual desktop infrastructure in the cloud. Learn to deliver Windows desktops and applications to any device.',
      
      learningObjectives: [
        'Plan and implement Azure Virtual Desktop infrastructure',
        'Configure and manage host pools and session hosts',
        'Create and manage application groups and workspaces',
        'Implement security and compliance for AVD',
        'Monitor and optimize AVD performance'
      ],
      
      prerequisites: [
        'Understanding of virtualization concepts',
        'Experience with Windows administration',
        'Basic knowledge of Azure services',
        'Familiarity with Active Directory and Azure AD'
      ],
      
      targetAudience: [
        'Desktop Administrators',
        'System Administrators',
        'Infrastructure Engineers',
        'End User Computing Specialists'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'AVD Architecture and Planning',
          topics: [
            'Azure Virtual Desktop components',
            'Licensing requirements',
            'Network requirements and optimization',
            'Identity and security planning',
            'Capacity planning and sizing'
          ]
        },
        {
          title: 'Host Pool Configuration',
          topics: [
            'Personal vs pooled desktops',
            'Session host deployment',
            'Golden image creation and management',
            'Multi-session Windows 10/11',
            'Load balancing algorithms'
          ]
        },
        {
          title: 'Application Management',
          topics: [
            'RemoteApp configuration',
            'Application packaging and deployment',
            'MSIX app attach',
            'FSLogix profile containers',
            'Application layering strategies'
          ]
        },
        {
          title: 'Security and Compliance',
          topics: [
            'Conditional Access policies',
            'Multi-factor authentication',
            'Session recording and monitoring',
            'Data protection and encryption',
            'Compliance reporting'
          ]
        },
        {
          title: 'Monitoring and Optimization',
          topics: [
            'Azure Monitor for AVD',
            'Performance counters and alerts',
            'Cost optimization strategies',
            'Troubleshooting common issues',
            'Scaling automation'
          ]
        }
      ],
      
      highlights: [
        'Complete AVD environment deployment',
        'Real-world desktop virtualization scenarios',
        'Performance optimization techniques',
        'Security best practices implementation',
        'Hands-on troubleshooting exercises'
      ],
      
      instructor: {
        id: 'avd-expert-instructor',
        name: 'Marcus Johnson',
        title: 'Virtual Desktop Infrastructure Specialist',
        bio: 'VDI expert with 12+ years in desktop virtualization and modern workplace',
        certifications: ['Azure Administrator Associate', 'Modern Desktop Administrator Associate'],
        specialties: ['Azure Virtual Desktop', 'VDI', 'Modern Workplace', 'End User Computing']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Azure', 'Virtual Desktop', 'VDI', 'Infrastructure', 'Remote Work'],
      
      isPublished: true,
      publishedAt: '2024-05-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 17
    },
    nl: {
      id: 'azure-virtual-desktop',
      slug: 'azure-virtual-desktop',
      title: 'Azure Virtual Desktop Specialist',
      description: 'Deploy en beheer virtual desktop infrastructuur met Azure Virtual Desktop',
      category: 'Infrastructure',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Uitgebreide training over Azure Virtual Desktop (AVD) die deployment, configuratie en beheer van virtual desktop infrastructuur in de cloud behandelt. Leer Windows desktops en applicaties leveren naar elk apparaat.',
      
      learningObjectives: [
        'Plan en implementeer Azure Virtual Desktop infrastructuur',
        'Configureer en beheer host pools en session hosts',
        'Creëer en beheer application groups en workspaces',
        'Implementeer security en compliance voor AVD',
        'Monitor en optimaliseer AVD performance'
      ],
      
      prerequisites: [
        'Begrip van virtualisatie concepten',
        'Ervaring met Windows administratie',
        'Basiskennis van Azure services',
        'Vertrouwdheid met Active Directory en Azure AD'
      ],
      
      targetAudience: [
        'Desktop Administrators',
        'Systeem Administrators',
        'Infrastructure Engineers',
        'End User Computing Specialists'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'AVD Architectuur en Planning',
          topics: [
            'Azure Virtual Desktop componenten',
            'Licensing vereisten',
            'Network vereisten en optimalisatie',
            'Identity en security planning',
            'Capacity planning en sizing'
          ]
        },
        {
          title: 'Host Pool Configuratie',
          topics: [
            'Personal vs pooled desktops',
            'Session host deployment',
            'Golden image creatie en management',
            'Multi-session Windows 10/11',
            'Load balancing algoritmes'
          ]
        },
        {
          title: 'Applicatie Management',
          topics: [
            'RemoteApp configuratie',
            'Applicatie packaging en deployment',
            'MSIX app attach',
            'FSLogix profile containers',
            'Application layering strategieën'
          ]
        },
        {
          title: 'Security en Compliance',
          topics: [
            'Conditional Access policies',
            'Multi-factor authentication',
            'Session recording en monitoring',
            'Data protection en encryption',
            'Compliance reporting'
          ]
        },
        {
          title: 'Monitoring en Optimalisatie',
          topics: [
            'Azure Monitor voor AVD',
            'Performance counters en alerts',
            'Cost optimization strategieën',
            'Troubleshooting veelvoorkomende issues',
            'Scaling automation'
          ]
        }
      ],
      
      highlights: [
        'Complete AVD omgeving deployment',
        'Real-world desktop virtualisatie scenario\'s',
        'Performance optimalisatie technieken',
        'Security best practices implementatie',
        'Hands-on troubleshooting oefeningen'
      ],
      
      instructor: {
        id: 'avd-expert-instructor',
        name: 'Marcus Johnson',
        title: 'Virtual Desktop Infrastructure Specialist',
        bio: 'VDI expert met 12+ jaar ervaring in desktop virtualisatie en modern workplace',
        certifications: ['Azure Administrator Associate', 'Modern Desktop Administrator Associate'],
        specialties: ['Azure Virtual Desktop', 'VDI', 'Modern Workplace', 'End User Computing']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Azure', 'Virtual Desktop', 'VDI', 'Infrastructure', 'Remote Work'],
      
      isPublished: true,
      publishedAt: '2024-05-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 17
    }
  },

  'azure-ai-engineer': {
    en: {
      id: 'azure-ai-engineer',
      slug: 'azure-ai-engineer',
      code: 'AI-102',
      title: 'Azure AI Engineer Associate',
      description: 'Design and implement Azure AI solutions using Azure AI services, machine learning, and knowledge mining',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Comprehensive training for AI engineers building, managing, and deploying AI solutions on Azure. Learn to leverage Azure AI services, implement computer vision, natural language processing, generative AI, and create intelligent agents.',
      
      learningObjectives: [
        'Plan and manage Azure AI solutions',
        'Implement generative AI solutions with Azure AI Foundry',
        'Create custom agents and agentic workflows',
        'Implement computer vision solutions',
        'Build natural language processing applications',
        'Implement knowledge mining with Azure AI Search'
      ],
      
      prerequisites: [
        'Python or C# programming experience',
        'Understanding of Azure fundamentals',
        'Basic knowledge of machine learning concepts',
        'Experience with REST APIs and SDKs'
      ],
      
      targetAudience: [
        'AI Engineers',
        'Machine Learning Engineers',
        'Software Developers building AI solutions',
        'Data Scientists transitioning to Azure'
      ],
      
      certification: {
        available: true,
        name: 'Azure AI Engineer Associate',
        examCode: 'AI-102',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Plan and Manage Azure AI Solutions',
          topics: [
            'Select appropriate Azure AI services',
            'Plan and deploy Azure AI Foundry',
            'Manage AI models and deployments',
            'Implement responsible AI principles',
            'Monitor and optimize AI solutions'
          ]
        },
        {
          title: 'Implement Generative AI Solutions',
          topics: [
            'Build solutions with Azure AI Foundry',
            'Use Azure OpenAI for content generation',
            'Implement prompt flow solutions',
            'Implement RAG patterns',
            'Optimize generative AI solutions'
          ]
        },
        {
          title: 'Implement Agentic Solutions',
          topics: [
            'Create custom agents with Azure AI Foundry Agent Service',
            'Implement complex workflows with Semantic Kernel',
            'Build multi-agent solutions',
            'Test and deploy agents'
          ]
        },
        {
          title: 'Implement Computer Vision',
          topics: [
            'Analyze images with Azure AI Vision',
            'Implement custom vision models',
            'Extract text from images (OCR)',
            'Analyze videos with Video Indexer',
            'Implement spatial analysis'
          ]
        },
        {
          title: 'Natural Language Processing',
          topics: [
            'Analyze text with Azure AI Language',
            'Implement speech services',
            'Translate text and speech',
            'Create custom language models',
            'Build question answering solutions'
          ]
        },
        {
          title: 'Knowledge Mining Solutions',
          topics: [
            'Implement Azure AI Search',
            'Create indexes and skillsets',
            'Implement custom skills',
            'Extract information with Document Intelligence',
            'Implement semantic search'
          ]
        }
      ],
      
      highlights: [
        'Hands-on with Azure AI Foundry',
        'Build generative AI applications',
        'Create intelligent agents',
        'Real-world AI projects',
        'AI-102 exam preparation'
      ],
      
      instructor: {
        id: 'ai-expert-instructor',
        name: 'Dr. Sarah Chen',
        title: 'Azure AI Solutions Architect',
        bio: 'AI engineer with 8+ years building production AI systems on Azure',
        certifications: ['AI-102', 'AI-900', 'AZ-305', 'DP-100'],
        specialties: ['Azure AI', 'Machine Learning', 'Generative AI', 'Computer Vision']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 16,
      featured: true,
      tags: ['AI-102', 'Azure AI', 'Machine Learning', 'Generative AI', 'Computer Vision', 'NLP'],
      
      isPublished: true,
      publishedAt: '2024-11-18T08:00:00Z',
      updatedAt: '2024-11-18T08:00:00Z',
      order: 18
    },
    nl: {
      id: 'azure-ai-engineer',
      slug: 'azure-ai-engineer',
      code: 'AI-102',
      title: 'Azure AI Engineer Associate',
      description: 'Ontwerp en implementeer Azure AI oplossingen met Azure AI services, machine learning en knowledge mining',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Uitgebreide training voor AI engineers die AI oplossingen bouwen, beheren en implementeren op Azure. Leer Azure AI services gebruiken, computer vision implementeren, natural language processing, generative AI en intelligente agents creëren.',
      
      learningObjectives: [
        'Plan en beheer Azure AI oplossingen',
        'Implementeer generative AI oplossingen met Azure AI Foundry',
        'Creëer custom agents en agentic workflows',
        'Implementeer computer vision oplossingen',
        'Bouw natural language processing applicaties',
        'Implementeer knowledge mining met Azure AI Search'
      ],
      
      prerequisites: [
        'Python of C# programmeerervaring',
        'Begrip van Azure fundamentals',
        'Basiskennis van machine learning concepten',
        'Ervaring met REST APIs en SDKs'
      ],
      
      targetAudience: [
        'AI Engineers',
        'Machine Learning Engineers',
        'Software Developers die AI oplossingen bouwen',
        'Data Scientists die overstappen naar Azure'
      ],
      
      certification: {
        available: true,
        name: 'Azure AI Engineer Associate',
        examCode: 'AI-102',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Plan en Beheer Azure AI Oplossingen',
          topics: [
            'Selecteer geschikte Azure AI services',
            'Plan en deploy Azure AI Foundry',
            'Beheer AI models en deployments',
            'Implementeer responsible AI principes',
            'Monitor en optimaliseer AI oplossingen'
          ]
        },
        {
          title: 'Implementeer Generative AI Oplossingen',
          topics: [
            'Bouw oplossingen met Azure AI Foundry',
            'Gebruik Azure OpenAI voor content generatie',
            'Implementeer prompt flow oplossingen',
            'Implementeer RAG patterns',
            'Optimaliseer generative AI oplossingen'
          ]
        },
        {
          title: 'Implementeer Agentic Oplossingen',
          topics: [
            'Creëer custom agents met Azure AI Foundry Agent Service',
            'Implementeer complexe workflows met Semantic Kernel',
            'Bouw multi-agent oplossingen',
            'Test en deploy agents'
          ]
        },
        {
          title: 'Implementeer Computer Vision',
          topics: [
            'Analyseer images met Azure AI Vision',
            'Implementeer custom vision models',
            'Extract tekst uit images (OCR)',
            'Analyseer videos met Video Indexer',
            'Implementeer spatial analysis'
          ]
        },
        {
          title: 'Natural Language Processing',
          topics: [
            'Analyseer tekst met Azure AI Language',
            'Implementeer speech services',
            'Vertaal tekst en spraak',
            'Creëer custom language models',
            'Bouw question answering oplossingen'
          ]
        },
        {
          title: 'Knowledge Mining Oplossingen',
          topics: [
            'Implementeer Azure AI Search',
            'Creëer indexes en skillsets',
            'Implementeer custom skills',
            'Extract informatie met Document Intelligence',
            'Implementeer semantic search'
          ]
        }
      ],
      
      highlights: [
        'Hands-on met Azure AI Foundry',
        'Bouw generative AI applicaties',
        'Creëer intelligente agents',
        'Real-world AI projecten',
        'AI-102 examen voorbereiding'
      ],
      
      instructor: {
        id: 'ai-expert-instructor',
        name: 'Dr. Sarah Chen',
        title: 'Azure AI Solutions Architect',
        bio: 'AI engineer met 8+ jaar ervaring in het bouwen van productie AI systemen op Azure',
        certifications: ['AI-102', 'AI-900', 'AZ-305', 'DP-100'],
        specialties: ['Azure AI', 'Machine Learning', 'Generative AI', 'Computer Vision']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 16,
      featured: true,
      tags: ['AI-102', 'Azure AI', 'Machine Learning', 'Generative AI', 'Computer Vision', 'NLP'],
      
      isPublished: true,
      publishedAt: '2024-11-18T08:00:00Z',
      updatedAt: '2024-11-18T08:00:00Z',
      order: 18
    }
  },
  
  'copilot-agent-admin-fundamentals': {
    en: {
      id: 'copilot-agent-admin-fundamentals',
      slug: 'copilot-agent-admin-fundamentals',
      code: 'AB-900',
      title: 'Copilot & Agent Administration Fundamentals',
      description: 'Learn to administer Microsoft 365 Copilot and agents, manage licenses, and ensure secure AI adoption',
      category: 'AI & Copilot',
      level: 'Beginner',
      duration: { days: 1, format: 'days' },
      price: { amount: 695, currency: 'EUR' },
      
      overview: 'Foundation course for administrators managing Microsoft 365 Copilot and custom agents. Learn essential administrative tasks, security fundamentals, data protection, and governance for AI-powered productivity tools.',
      
      learningObjectives: [
        'Perform basic administrative tasks for Copilot and agents',
        'Manage Copilot licenses and pay-as-you-go billing',
        'Understand identity and access management for AI tools',
        'Implement data protection and governance for Copilot',
        'Monitor usage, adoption, and performance metrics'
      ],
      
      prerequisites: [
        'Basic understanding of Microsoft 365',
        'Familiarity with admin center navigation',
        'General knowledge of cloud concepts',
        'No coding experience required'
      ],
      
      targetAudience: [
        'Microsoft 365 Administrators',
        'IT Support Staff',
        'Compliance Officers',
        'Business decision makers evaluating Copilot'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: Copilot & Agent Administration Fundamentals',
        examCode: 'AB-900',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Copilot and Agents Overview',
          topics: [
            'Understanding generative AI in Microsoft 365',
            'Copilot capabilities across Microsoft apps',
            'Agent types and use cases',
            'Responsible AI principles',
            'Data security and privacy fundamentals'
          ]
        },
        {
          title: 'Administrative Tasks',
          topics: [
            'Assigning Copilot licenses',
            'Managing pay-as-you-go billing',
            'Configuring user access to agents',
            'Creating and approving agents',
            'Monitoring usage with Copilot Analytics'
          ]
        },
        {
          title: 'Identity and Access Management',
          topics: [
            'Microsoft Entra ID fundamentals',
            'User authentication and authorization',
            'Conditional access policies',
            'Privileged Identity Management basics',
            'Troubleshooting sign-in issues'
          ]
        },
        {
          title: 'Data Protection and Governance',
          topics: [
            'Microsoft Purview for Copilot',
            'Sensitivity labels and data classification',
            'Data Loss Prevention (DLP) for AI',
            'Identifying oversharing risks in SharePoint',
            'Communication compliance monitoring'
          ]
        }
      ],
      
      highlights: [
        'Hands-on Copilot administration experience',
        'Real-world governance scenarios',
        'Security best practices for AI',
        'License and billing management',
        'Prepares for AB-900 certification exam'
      ],
      
      instructor: {
        id: 'copilot-admin-instructor',
        name: 'Dr. Sarah Chen',
        title: 'Microsoft 365 & AI Solutions Architect',
        bio: 'AI governance specialist with 10+ years in Microsoft 365 administration and security',
        certifications: ['Microsoft 365 Certified: Enterprise Administrator Expert', 'Security, Compliance, and Identity Fundamentals'],
        specialties: ['Copilot Administration', 'AI Governance', 'Microsoft 365', 'Compliance']
      },
      
      deliveryMethods: ['Virtual Classroom', 'Self-Paced Online'],
      maxParticipants: 20,
      featured: true,
      tags: ['Copilot', 'AI', 'Microsoft 365', 'Administration', 'Governance'],
      
      isPublished: true,
      publishedAt: '2025-01-15T08:00:00Z',
      updatedAt: '2025-01-15T08:00:00Z',
      order: 18
    },
    nl: {
      id: 'copilot-agent-admin-fundamentals',
      slug: 'copilot-agent-admin-fundamentals',
      code: 'AB-900',
      title: 'Copilot & Agent Administratie Fundamentals',
      description: 'Leer Microsoft 365 Copilot en agents te beheren, licenties toe te wijzen en veilige AI-adoptie te waarborgen',
      category: 'AI & Copilot',
      level: 'Beginner',
      duration: { days: 1, format: 'days' },
      price: { amount: 695, currency: 'EUR' },
      
      overview: 'Basiscursus voor beheerders die Microsoft 365 Copilot en aangepaste agents beheren. Leer essentiële administratieve taken, beveiligingsfundamenten, gegevensbescherming en governance voor AI-gestuurde productiviteitstools.',
      
      learningObjectives: [
        'Basale administratieve taken uitvoeren voor Copilot en agents',
        'Copilot-licenties en pay-as-you-go facturering beheren',
        'Identiteits- en toegangsbeheer voor AI-tools begrijpen',
        'Gegevensbescherming en governance implementeren voor Copilot',
        'Gebruik, adoptie en prestatiemetrics monitoren'
      ],
      
      prerequisites: [
        'Basiskennis van Microsoft 365',
        'Bekendheid met admin center navigatie',
        'Algemene kennis van cloud concepten',
        'Geen programmeerervaring vereist'
      ],
      
      targetAudience: [
        'Microsoft 365 Beheerders',
        'IT Support Medewerkers',
        'Compliance Officers',
        'Zakelijke beslissers die Copilot evalueren'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: Copilot & Agent Administration Fundamentals',
        examCode: 'AB-900',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Copilot en Agents Overzicht',
          topics: [
            'Generatieve AI begrijpen in Microsoft 365',
            'Copilot mogelijkheden in Microsoft apps',
            'Agent types en use cases',
            'Verantwoorde AI principes',
            'Data security en privacy fundamenten'
          ]
        },
        {
          title: 'Administratieve Taken',
          topics: [
            'Copilot licenties toewijzen',
            'Pay-as-you-go facturering beheren',
            'Gebruikerstoegang tot agents configureren',
            'Agents aanmaken en goedkeuren',
            'Gebruik monitoren met Copilot Analytics'
          ]
        },
        {
          title: 'Identiteits- en Toegangsbeheer',
          topics: [
            'Microsoft Entra ID fundamenten',
            'Gebruikersauthenticatie en autorisatie',
            'Conditional access policies',
            'Privileged Identity Management basis',
            'Problemen met inloggen oplossen'
          ]
        },
        {
          title: 'Gegevensbescherming en Governance',
          topics: [
            'Microsoft Purview voor Copilot',
            'Gevoeligheidslabels en dataclassificatie',
            'Data Loss Prevention (DLP) voor AI',
            'Overdelings-risico\'s identificeren in SharePoint',
            'Communicatie compliance monitoring'
          ]
        }
      ],
      
      highlights: [
        'Hands-on Copilot administratie ervaring',
        'Real-world governance scenario\'s',
        'Security best practices voor AI',
        'Licentie- en factureringsbeheer',
        'Bereidt voor op AB-900 certificatie examen'
      ],
      
      instructor: {
        id: 'copilot-admin-instructor',
        name: 'Dr. Sarah Chen',
        title: 'Microsoft 365 & AI Solutions Architect',
        bio: 'AI governance specialist met 10+ jaar ervaring in Microsoft 365 administratie en beveiliging',
        certifications: ['Microsoft 365 Certified: Enterprise Administrator Expert', 'Security, Compliance, and Identity Fundamentals'],
        specialties: ['Copilot Administration', 'AI Governance', 'Microsoft 365', 'Compliance']
      },
      
      deliveryMethods: ['Virtual Classroom', 'Self-Paced Online'],
      maxParticipants: 20,
      featured: true,
      tags: ['Copilot', 'AI', 'Microsoft 365', 'Administratie', 'Governance'],
      
      isPublished: true,
      publishedAt: '2025-01-15T08:00:00Z',
      updatedAt: '2025-01-15T08:00:00Z',
      order: 18
    }
  },
  
  'ai-business-professional': {
    en: {
      id: 'ai-business-professional',
      slug: 'ai-business-professional',
      code: 'AB-730',
      title: 'AI Business Professional',
      description: 'Master generative AI tools like Microsoft 365 Copilot to improve productivity and drive business outcomes',
      category: 'AI & Copilot',
      level: 'Intermediate',
      duration: { days: 2, format: 'days' },
      price: { amount: 895, currency: 'EUR' },
      
      overview: 'Learn to leverage AI-powered productivity tools in daily work without coding. Master prompt engineering, agent creation, and effective use of Microsoft 365 Copilot across apps to enhance business processes and decision-making.',
      
      learningObjectives: [
        'Understand generative AI fundamentals and capabilities',
        'Create effective prompts for AI tools',
        'Build and manage custom Copilot agents',
        'Draft and analyze business content using AI',
        'Apply responsible AI practices in business contexts'
      ],
      
      prerequisites: [
        'Basic understanding of Microsoft 365',
        'Comfortable with Outlook, Word, Teams, PowerPoint, Excel',
        'Experience with common business processes',
        'No technical or coding background required'
      ],
      
      targetAudience: [
        'Business professionals using AI tools',
        'Knowledge workers seeking productivity gains',
        'Team leaders driving AI adoption',
        'Business analysts and consultants'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: AI Business Professional',
        examCode: 'AB-730',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Generative AI Fundamentals',
          topics: [
            'How Copilot works with your data',
            'Context and grounding in AI responses',
            'Chat vs. agent experiences',
            'Copilot features across Microsoft 365 apps',
            'Data protection and privacy'
          ]
        },
        {
          title: 'Responsible AI Practices',
          topics: [
            'Common AI risks: fabrications and bias',
            'Verification steps and citation checks',
            'Protecting sensitive data in prompts',
            'Human review and validation',
            'Mitigating over-reliance on AI'
          ]
        },
        {
          title: 'Prompt Engineering and Management',
          topics: [
            'Creating effective prompts',
            'Selecting appropriate resources to reference',
            'Saving, scheduling, and sharing prompts',
            'Managing conversation history',
            'Using Copilot Pages for collaboration'
          ]
        },
        {
          title: 'Custom Agent Creation',
          topics: [
            'Agent Store vs. creating new agents',
            'Using agent templates',
            'Configuring agent knowledge and instructions',
            'Setting capabilities and suggested prompts',
            'Sharing agents with teams'
          ]
        },
        {
          title: 'Business Content Creation',
          topics: [
            'Drafting documents from prompts',
            'Generating summaries and reports',
            'Using Copilot in meetings',
            'Moving insights between Microsoft 365 apps',
            'Leveraging Researcher and Analyst features'
          ]
        }
      ],
      
      highlights: [
        'Real-world business scenarios and case studies',
        'Hands-on Copilot practice across all M365 apps',
        'Prompt engineering workshop',
        'Custom agent building exercises',
        'Prepares for AB-730 certification exam'
      ],
      
      instructor: {
        id: 'ai-business-instructor',
        name: 'Jennifer Martinez',
        title: 'AI Productivity Strategist',
        bio: 'Business transformation expert specializing in AI adoption and change management',
        certifications: ['Microsoft Certified: AI Business Professional', 'Microsoft 365 Certified: Modern Desktop Administrator'],
        specialties: ['AI Productivity', 'Change Management', 'Business Process Optimization', 'Copilot']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop', 'Self-Paced Online'],
      maxParticipants: 16,
      featured: true,
      tags: ['Copilot', 'AI', 'Productivity', 'Business', 'Prompt Engineering'],
      
      isPublished: true,
      publishedAt: '2025-01-15T08:00:00Z',
      updatedAt: '2025-01-15T08:00:00Z',
      order: 19
    },
    nl: {
      id: 'ai-business-professional',
      slug: 'ai-business-professional',
      code: 'AB-730',
      title: 'AI Business Professional',
      description: 'Beheers generatieve AI-tools zoals Microsoft 365 Copilot om productiviteit te verbeteren en bedrijfsresultaten te behalen',
      category: 'AI & Copilot',
      level: 'Intermediate',
      duration: { days: 2, format: 'days' },
      price: { amount: 895, currency: 'EUR' },
      
      overview: 'Leer AI-gestuurde productiviteitstools te gebruiken in dagelijks werk zonder te programmeren. Beheers prompt engineering, agent creatie en effectief gebruik van Microsoft 365 Copilot in apps om bedrijfsprocessen en besluitvorming te verbeteren.',
      
      learningObjectives: [
        'Generatieve AI fundamenten en mogelijkheden begrijpen',
        'Effectieve prompts creëren voor AI-tools',
        'Aangepaste Copilot agents bouwen en beheren',
        'Zakelijke content opstellen en analyseren met AI',
        'Verantwoorde AI praktijken toepassen in zakelijke context'
      ],
      
      prerequisites: [
        'Basiskennis van Microsoft 365',
        'Ervaring met Outlook, Word, Teams, PowerPoint, Excel',
        'Ervaring met gangbare bedrijfsprocessen',
        'Geen technische of programmeer achtergrond vereist'
      ],
      
      targetAudience: [
        'Zakelijke professionals die AI-tools gebruiken',
        'Kenniswerkers die productiviteitswinst zoeken',
        'Teamleiders die AI-adoptie stimuleren',
        'Business analisten en consultants'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: AI Business Professional',
        examCode: 'AB-730',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Generatieve AI Fundamenten',
          topics: [
            'Hoe Copilot werkt met jouw data',
            'Context en grounding in AI responses',
            'Chat vs. agent ervaringen',
            'Copilot features in Microsoft 365 apps',
            'Gegevensbescherming en privacy'
          ]
        },
        {
          title: 'Verantwoorde AI Praktijken',
          topics: [
            'Veelvoorkomende AI-risico\'s: fabricaties en bias',
            'Verificatiestappen en citaat-checks',
            'Gevoelige data beschermen in prompts',
            'Menselijke review en validatie',
            'Over-reliance op AI tegengaan'
          ]
        },
        {
          title: 'Prompt Engineering en Beheer',
          topics: [
            'Effectieve prompts creëren',
            'Geschikte bronnen selecteren om te refereren',
            'Prompts opslaan, plannen en delen',
            'Conversatiegeschiedenis beheren',
            'Copilot Pages gebruiken voor samenwerking'
          ]
        },
        {
          title: 'Aangepaste Agent Creatie',
          topics: [
            'Agent Store vs. nieuwe agents maken',
            'Agent templates gebruiken',
            'Agent kennis en instructies configureren',
            'Capabilities en voorgestelde prompts instellen',
            'Agents delen met teams'
          ]
        },
        {
          title: 'Zakelijke Content Creatie',
          topics: [
            'Documenten opstellen vanuit prompts',
            'Samenvattingen en rapporten genereren',
            'Copilot gebruiken in vergaderingen',
            'Inzichten verplaatsen tussen Microsoft 365 apps',
            'Researcher en Analyst features gebruiken'
          ]
        }
      ],
      
      highlights: [
        'Real-world zakelijke scenario\'s en case studies',
        'Hands-on Copilot praktijk in alle M365 apps',
        'Prompt engineering workshop',
        'Aangepaste agent bouw oefeningen',
        'Bereidt voor op AB-730 certificatie examen'
      ],
      
      instructor: {
        id: 'ai-business-instructor',
        name: 'Jennifer Martinez',
        title: 'AI Productivity Strategist',
        bio: 'Business transformation expert gespecialiseerd in AI adoptie en change management',
        certifications: ['Microsoft Certified: AI Business Professional', 'Microsoft 365 Certified: Modern Desktop Administrator'],
        specialties: ['AI Productivity', 'Change Management', 'Business Process Optimization', 'Copilot']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop', 'Self-Paced Online'],
      maxParticipants: 16,
      featured: true,
      tags: ['Copilot', 'AI', 'Productiviteit', 'Business', 'Prompt Engineering'],
      
      isPublished: true,
      publishedAt: '2025-01-15T08:00:00Z',
      updatedAt: '2025-01-15T08:00:00Z',
      order: 19
    }
  },
  
  'ai-transformation-leader': {
    en: {
      id: 'ai-transformation-leader',
      slug: 'ai-transformation-leader',
      code: 'AB-731',
      title: 'AI Transformation Leader',
      description: 'Lead organizational AI transformation with strategic vision, responsible practices, and effective adoption strategies',
      category: 'AI & Leadership',
      level: 'Advanced',
      duration: { days: 3, format: 'days' },
      price: { amount: 1295, currency: 'EUR' },
      
      overview: 'Strategic leadership program for executives and managers driving AI adoption. Learn to identify AI opportunities, align investments with business goals, establish governance frameworks, and lead successful AI transformation across organizations.',
      
      learningObjectives: [
        'Identify business value and ROI of generative AI solutions',
        'Develop comprehensive AI adoption and implementation strategies',
        'Establish responsible AI governance and ethics frameworks',
        'Lead organizational change and overcome adoption barriers',
        'Align AI investments with business objectives and outcomes'
      ],
      
      prerequisites: [
        'Leadership or management role',
        'Experience with organizational change management',
        'Familiarity with Microsoft 365 and Azure services',
        'Strategic thinking and business planning experience'
      ],
      
      targetAudience: [
        'Business executives and decision-makers',
        'IT leaders and CIOs',
        'Digital transformation managers',
        'Innovation and strategy directors'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: AI Transformation Leader',
        examCode: 'AB-731',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Business Value of Generative AI',
          topics: [
            'Generative AI vs. traditional AI approaches',
            'Selecting AI solutions for business needs',
            'AI models: fine-tuned vs. pretrained',
            'Cost drivers: tokens and ROI considerations',
            'Identifying challenges: fabrications, bias, reliability',
            'When AI provides business value: scalability and automation'
          ]
        },
        {
          title: 'AI Capabilities and Opportunities',
          topics: [
            'Prompt engineering impact on outcomes',
            'Grounding solutions and RAG architecture',
            'Data quality and representative datasets',
            'Secure AI implementation strategies',
            'Machine learning lifecycle management',
            'Application and data security for AI systems'
          ]
        },
        {
          title: 'Microsoft AI Solutions Strategy',
          topics: [
            'Mapping business processes to Copilot capabilities',
            'Microsoft 365 Copilot vs. Microsoft Copilot',
            'Azure AI services: Vision, Search, Foundry',
            'Microsoft Graph integration',
            'Copilot Studio and extensibility framework',
            'Build vs. buy vs. extend decisions'
          ]
        },
        {
          title: 'Responsible AI Governance',
          topics: [
            'Establishing AI governance principles',
            'Creating an AI council for oversight',
            'Responsible AI standards: fairness, transparency, accountability',
            'Privacy, security, and compliance frameworks',
            'Risk mitigation and safety benefits',
            'Ethics and inclusiveness in AI deployment'
          ]
        },
        {
          title: 'AI Adoption and Change Management',
          topics: [
            'Building adoption teams and champions programs',
            'Identifying and overcoming adoption barriers',
            'License types: pay-as-you-go vs. monthly subscriptions',
            'Impact assessment: data, security, privacy, cost',
            'Measuring adoption success and KPIs',
            'Continuous improvement and iteration strategies'
          ]
        },
        {
          title: 'Implementation Strategy Workshop',
          topics: [
            'Creating organizational AI roadmaps',
            'Aligning AI with business objectives',
            'Resource allocation and budgeting',
            'Stakeholder communication and buy-in',
            'Pilot program design and execution',
            'Scaling AI across the organization'
          ]
        }
      ],
      
      highlights: [
        'Executive-level strategic AI planning',
        'Real organizational transformation case studies',
        'Hands-on AI governance framework development',
        'Interactive adoption strategy workshops',
        'Peer networking with fellow AI leaders',
        'Prepares for AB-731 certification exam'
      ],
      
      instructor: {
        id: 'ai-transformation-instructor',
        name: 'Dr. Michael Thompson',
        title: 'AI Strategy & Transformation Consultant',
        bio: 'Former CIO with 15+ years leading digital transformation and AI adoption in Fortune 500 companies',
        certifications: ['Microsoft Certified: AI Transformation Leader', 'Azure Solutions Architect Expert', 'Change Management Professional'],
        specialties: ['AI Strategy', 'Digital Transformation', 'Change Leadership', 'Business Innovation']
      },
      
      deliveryMethods: ['In-Person Workshop', 'Executive Coaching'],
      maxParticipants: 12,
      featured: true,
      tags: ['AI', 'Leadership', 'Strategy', 'Transformation', 'Governance', 'Change Management'],
      
      isPublished: true,
      publishedAt: '2025-01-15T08:00:00Z',
      updatedAt: '2025-01-15T08:00:00Z',
      order: 20
    },
    nl: {
      id: 'ai-transformation-leader',
      slug: 'ai-transformation-leader',
      code: 'AB-731',
      title: 'AI Transformation Leader',
      description: 'Leid organisatie AI-transformatie met strategische visie, verantwoorde praktijken en effectieve adoptiestrategieën',
      category: 'AI & Leadership',
      level: 'Advanced',
      duration: { days: 3, format: 'days' },
      price: { amount: 1295, currency: 'EUR' },
      
      overview: 'Strategisch leiderschapsprogramma voor executives en managers die AI-adoptie aansturen. Leer AI-kansen te identificeren, investeringen af te stemmen op bedrijfsdoelen, governance frameworks te vestigen en succesvolle AI-transformatie te leiden in organisaties.',
      
      learningObjectives: [
        'Bedrijfswaarde en ROI van generatieve AI-oplossingen identificeren',
        'Uitgebreide AI-adoptie en implementatiestrategieën ontwikkelen',
        'Verantwoorde AI governance en ethiek frameworks vestigen',
        'Organisatieverandering leiden en adoptie-barrières overwinnen',
        'AI-investeringen afstemmen op bedrijfsdoelstellingen en resultaten'
      ],
      
      prerequisites: [
        'Leiderschaps- of managementrol',
        'Ervaring met organisatie change management',
        'Bekendheid met Microsoft 365 en Azure services',
        'Strategisch denken en business planning ervaring'
      ],
      
      targetAudience: [
        'Zakelijke executives en beslissers',
        'IT-leiders en CIO\'s',
        'Digitale transformatie managers',
        'Innovatie en strategie directeuren'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: AI Transformation Leader',
        examCode: 'AB-731',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Bedrijfswaarde van Generatieve AI',
          topics: [
            'Generatieve AI vs. traditionele AI benaderingen',
            'AI-oplossingen selecteren voor bedrijfsbehoeften',
            'AI-modellen: fine-tuned vs. pretrained',
            'Kostendrivers: tokens en ROI overwegingen',
            'Uitdagingen identificeren: fabricaties, bias, betrouwbaarheid',
            'Wanneer AI bedrijfswaarde biedt: schaalbaarheid en automatisering'
          ]
        },
        {
          title: 'AI Mogelijkheden en Kansen',
          topics: [
            'Prompt engineering impact op resultaten',
            'Grounding oplossingen en RAG architectuur',
            'Datakwaliteit en representatieve datasets',
            'Veilige AI implementatie strategieën',
            'Machine learning lifecycle management',
            'Applicatie- en data security voor AI-systemen'
          ]
        },
        {
          title: 'Microsoft AI Solutions Strategie',
          topics: [
            'Bedrijfsprocessen mappen naar Copilot capabilities',
            'Microsoft 365 Copilot vs. Microsoft Copilot',
            'Azure AI services: Vision, Search, Foundry',
            'Microsoft Graph integratie',
            'Copilot Studio en extensibility framework',
            'Bouwen vs. kopen vs. uitbreiden beslissingen'
          ]
        },
        {
          title: 'Verantwoorde AI Governance',
          topics: [
            'AI governance principes vestigen',
            'AI-raad creëren voor toezicht',
            'Verantwoorde AI standaarden: eerlijkheid, transparantie, verantwoordelijkheid',
            'Privacy, security en compliance frameworks',
            'Risico-mitigatie en veiligheidsvoordelen',
            'Ethiek en inclusiviteit in AI deployment'
          ]
        },
        {
          title: 'AI Adoptie en Change Management',
          topics: [
            'Adoptie teams en champions programma\'s bouwen',
            'Adoptie-barrières identificeren en overwinnen',
            'Licentietypes: pay-as-you-go vs. maandelijkse subscripties',
            'Impact assessment: data, security, privacy, kosten',
            'Adoptie succes meten met KPI\'s',
            'Continue verbetering en iteratie strategieën'
          ]
        },
        {
          title: 'Implementatie Strategie Workshop',
          topics: [
            'Organisatie AI roadmaps creëren',
            'AI afstemmen op bedrijfsdoelstellingen',
            'Resource allocatie en budgettering',
            'Stakeholder communicatie en buy-in',
            'Pilot programma design en uitvoering',
            'AI opschalen binnen de organisatie'
          ]
        }
      ],
      
      highlights: [
        'Executive-level strategische AI planning',
        'Echte organisatie transformatie case studies',
        'Hands-on AI governance framework ontwikkeling',
        'Interactieve adoptie strategie workshops',
        'Peer networking met fellow AI-leiders',
        'Bereidt voor op AB-731 certificatie examen'
      ],
      
      instructor: {
        id: 'ai-transformation-instructor',
        name: 'Dr. Michael Thompson',
        title: 'AI Strategy & Transformation Consultant',
        bio: 'Voormalig CIO met 15+ jaar ervaring in het leiden van digitale transformatie en AI-adoptie in Fortune 500 bedrijven',
        certifications: ['Microsoft Certified: AI Transformation Leader', 'Azure Solutions Architect Expert', 'Change Management Professional'],
        specialties: ['AI Strategy', 'Digital Transformation', 'Change Leadership', 'Business Innovation']
      },
      
      deliveryMethods: ['In-Person Workshop', 'Executive Coaching'],
      maxParticipants: 12,
      featured: true,
      tags: ['AI', 'Leiderschap', 'Strategie', 'Transformatie', 'Governance', 'Change Management'],
      
      isPublished: true,
      publishedAt: '2025-01-15T08:00:00Z',
      updatedAt: '2025-01-15T08:00:00Z',
      order: 20
    }
  }
};
