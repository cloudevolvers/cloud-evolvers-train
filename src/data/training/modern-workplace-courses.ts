import type { TrainingTranslations } from '../../types/training';

// Modern Workplace & Microsoft 365 Courses
export const modernWorkplaceCourses: TrainingTranslations = {
  'microsoft-365-fundamentals': {
    en: {
      id: 'microsoft-365-fundamentals',
      slug: 'microsoft-365-fundamentals',
      code: 'MS-900',
      title: 'Microsoft 365 Fundamentals',
      description: 'Learn the fundamentals of Microsoft 365 cloud services and productivity solutions',
      category: 'Microsoft 365',
      level: 'Beginner',
      duration: { days: 1, format: 'days' },
      price: { amount: 695, currency: 'EUR' },
      
      overview: 'Introduction to Microsoft 365 productivity and teamwork solutions. Learn about cloud concepts, core Microsoft 365 services, security, compliance, privacy, and trust in Microsoft 365. Perfect for anyone evaluating cloud services.',
      
      learningObjectives: [
        'Describe cloud concepts and Microsoft 365 core services',
        'Describe security, compliance, privacy, and trust in Microsoft 365',
        'Describe Microsoft 365 pricing and support options',
        'Understand productivity and teamwork solutions',
        'Explore collaboration and mobility features'
      ],
      
      prerequisites: [
        'Basic understanding of IT concepts',
        'General knowledge of networking concepts',
        'Familiarity with cloud computing basics',
        'No prior Microsoft 365 experience required'
      ],
      
      targetAudience: [
        'Business decision makers',
        'IT administrators new to Microsoft 365',
        'Users wanting to learn about Microsoft 365 features',
        'Students preparing for MS-900 certification'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Fundamentals',
        examCode: 'MS-900',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Microsoft 365 Productivity and Teamwork Solutions',
          topics: [
            'Microsoft 365 productivity solutions',
            'Microsoft Office 365 ProPlus',
            'Collaboration with Microsoft Teams',
            'Business productivity with SharePoint',
            'Business intelligence with Power BI'
          ]
        },
        {
          title: 'Microsoft 365 Business Management Solutions',
          topics: [
            'Device and app management with Microsoft 365',
            'Windows 10 in Microsoft 365',
            'Enterprise mobility and security',
            'Workplace Analytics insights',
            'Microsoft 365 Analytics and reporting'
          ]
        },
        {
          title: 'Microsoft 365 Security and Compliance',
          topics: [
            'Identity and access management',
            'Threat protection in Microsoft 365',
            'Cloud security with Azure AD',
            'Information protection and governance',
            'Compliance solutions overview'
          ]
        },
        {
          title: 'Microsoft 365 Pricing and Support',
          topics: [
            'Microsoft 365 subscription options',
            'Licensing and billing models',
            'Support options and service level agreements',
            'Microsoft 365 service updates',
            'Migration and adoption planning'
          ]
        }
      ],
      
      highlights: [
        'Complete overview of Microsoft 365 ecosystem',
        'Hands-on exploration of key services',
        'Real-world business scenarios',
        'Decision-making guidance for organizations',
        'Preparation for MS-900 certification'
      ],
      
      instructor: {
        id: 'm365-fundamentals-instructor',
        name: 'Sarah Johnson',
        title: 'Microsoft 365 Specialist & Modern Workplace Consultant',
        bio: 'Modern workplace consultant with 8+ years in Microsoft 365 implementations',
        certifications: ['Microsoft 365 Certified: Fundamentals', 'Microsoft 365 Certified: Enterprise Administrator Expert'],
        specialties: ['Microsoft 365', 'Modern Workplace', 'Digital Transformation', 'User Adoption']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 20,
      featured: true,
      tags: ['Microsoft 365', 'MS-900', 'Fundamentals', 'Office 365', 'Cloud Productivity'],
      
      isPublished: true,
      publishedAt: '2024-03-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 22
    },
    nl: {
      id: 'microsoft-365-fundamentals',
      slug: 'microsoft-365-fundamentals',
      code: 'MS-900',
      title: 'Microsoft 365 Fundamentals',
      description: 'Leer de fundamenten van Microsoft 365 cloud services en productiviteitsoplossingen',
      category: 'Microsoft 365',
      level: 'Beginner',
      duration: { days: 1, format: 'days' },
      price: { amount: 695, currency: 'EUR' },
      
      overview: 'Introductie tot Microsoft 365 productiviteit en teamwork oplossingen. Leer over cloud concepten, kern Microsoft 365 services, security, compliance, privacy en trust in Microsoft 365. Perfect voor iedereen die cloud services evalueert.',
      
      learningObjectives: [
        'Beschrijf cloud concepten en Microsoft 365 kern services',
        'Beschrijf security, compliance, privacy en trust in Microsoft 365',
        'Beschrijf Microsoft 365 pricing en support opties',
        'Begrijp productiviteit en teamwork oplossingen',
        'Verken collaboration en mobility features'
      ],
      
      prerequisites: [
        'Basiskennis van IT concepten',
        'Algemene kennis van networking concepten',
        'Vertrouwdheid met cloud computing basics',
        'Geen eerdere Microsoft 365 ervaring vereist'
      ],
      
      targetAudience: [
        'Business decision makers',
        'IT administrators nieuw bij Microsoft 365',
        'Gebruikers die Microsoft 365 features willen leren',
        'Professionals die zich voorbereiden op MS-900 certificering'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Fundamentals',
        examCode: 'MS-900',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Microsoft 365 Productiviteit en Teamwork Oplossingen',
          topics: [
            'Microsoft 365 productiviteitsoplossingen',
            'Microsoft Office 365 ProPlus',
            'Samenwerking met Microsoft Teams',
            'Bedrijfsproductiviteit met SharePoint',
            'Business intelligence met Power BI'
          ]
        },
        {
          title: 'Microsoft 365 Business Management Oplossingen',
          topics: [
            'Device en app management met Microsoft 365',
            'Windows 10 in Microsoft 365',
            'Enterprise mobility en security',
            'Workplace Analytics insights',
            'Microsoft 365 Analytics en reporting'
          ]
        },
        {
          title: 'Microsoft 365 Security en Compliance',
          topics: [
            'Identity en access management',
            'Threat protection in Microsoft 365',
            'Cloud security met Azure AD',
            'Information protection en governance',
            'Compliance oplossingen overzicht'
          ]
        },
        {
          title: 'Microsoft 365 Pricing en Support',
          topics: [
            'Microsoft 365 abonnement opties',
            'Licensing en billing modellen',
            'Support opties en service level agreements',
            'Microsoft 365 service updates',
            'Migratie en adoption planning'
          ]
        }
      ],
      
      highlights: [
        'Compleet overzicht van Microsoft 365 ecosysteem',
        'Hands-on verkenning van belangrijke services',
        'Real-world business scenario\'s',
        'Decision-making begeleiding voor organisaties',
        'Voorbereiding voor MS-900 certificering'
      ],
      
      instructor: {
        id: 'm365-fundamentals-instructor',
        name: 'Sarah Johnson',
        title: 'Microsoft 365 Specialist & Modern Workplace Consultant',
        bio: 'Modern workplace consultant met 8+ jaar ervaring in Microsoft 365 implementaties',
        certifications: ['Microsoft 365 Certified: Fundamentals', 'Microsoft 365 Certified: Enterprise Administrator Expert'],
        specialties: ['Microsoft 365', 'Modern Workplace', 'Digital Transformation', 'User Adoption']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 20,
      featured: true,
      tags: ['Microsoft 365', 'MS-900', 'Fundamentals', 'Office 365', 'Cloud Productivity'],
      
      isPublished: true,
      publishedAt: '2024-03-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 22
    }
  },
  'microsoft-365-security': {
    en: {
      id: 'microsoft-365-security',
      slug: 'microsoft-365-security',
      code: 'MS-500',
      title: 'Microsoft 365 Security Administration',
      description: 'Implement and manage security and threat protection in Microsoft 365',
      category: 'Security & Compliance',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1695, currency: 'EUR' },
      
      overview: 'Advanced training on Microsoft 365 Security Administration. Learn to secure Microsoft 365 deployment, implement advanced threat protection, manage security governance, and respond to threats. Essential for security professionals working with Microsoft 365.',
      
      learningObjectives: [
        'Implement and manage identity and access',
        'Implement and manage threat protection',
        'Implement and manage information protection',
        'Manage governance and compliance features',
        'Configure and analyze security reports'
      ],
      
      prerequisites: [
        'MS-900 Microsoft 365 Fundamentals certification',
        'Experience with Microsoft 365 workloads',
        'Understanding of security concepts and principles',
        'Knowledge of PowerShell and Azure AD'
      ],
      
      targetAudience: [
        'Microsoft 365 Security Administrators',
        'Security Engineers',
        'Information Security Analysts',
        'Compliance Administrators'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Security Administrator Associate',
        examCode: 'MS-500',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Identity and Access Management',
          topics: [
            'Azure AD identity protection',
            'Multi-factor authentication implementation',
            'Conditional access policies',
            'Privileged identity management',
            'Identity governance and lifecycle'
          ]
        },
        {
          title: 'Threat Protection Implementation',
          topics: [
            'Microsoft Defender for Office 365',
            'Safe Attachments and Safe Links',
            'Anti-phishing and anti-malware policies',
            'Microsoft Cloud App Security',
            'Attack simulation and training'
          ]
        },
        {
          title: 'Information Protection and Governance',
          topics: [
            'Data loss prevention policies',
            'Sensitivity labels and classification',
            'Rights management and encryption',
            'Retention policies and legal holds',
            'eDiscovery and content search'
          ]
        },
        {
          title: 'Compliance and Risk Management',
          topics: [
            'Compliance center management',
            'Audit log search and analysis',
            'Communication compliance',
            'Insider risk management',
            'Data governance strategies'
          ]
        },
        {
          title: 'Security Monitoring and Response',
          topics: [
            'Security and compliance center',
            'Incident response procedures',
            'Security score improvement',
            'Threat investigation tools',
            'Security reporting and analytics'
          ]
        }
      ],
      
      highlights: [
        'Comprehensive security implementation',
        'Advanced threat protection techniques',
        'Real-world security scenarios',
        'Compliance and governance best practices',
        'Preparation for MS-500 certification'
      ],
      
      instructor: {
        id: 'm365-security-instructor',
        name: 'Michael Chen',
        title: 'Microsoft 365 Security Expert & Cybersecurity Specialist',
        bio: 'Cybersecurity specialist with 10+ years in Microsoft 365 security implementations',
        certifications: ['Microsoft 365 Certified: Security Administrator Associate', 'Azure Security Engineer Associate'],
        specialties: ['Microsoft 365 Security', 'Threat Protection', 'Information Protection', 'Compliance']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: true,
      tags: ['Microsoft 365', 'MS-500', 'Security', 'Compliance', 'Threat Protection'],
      
      isPublished: true,
      publishedAt: '2024-04-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 23
    },
    nl: {
      id: 'microsoft-365-security',
      slug: 'microsoft-365-security',
      code: 'MS-500',
      title: 'Microsoft 365 Security Administration',
      description: 'Implementeer en beheer security en threat protection in Microsoft 365',
      category: 'Security & Compliance',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1695, currency: 'EUR' },
      
      overview: 'Geavanceerde training over Microsoft 365 Security Administration. Leer Microsoft 365 deployment beveiligen, geavanceerde threat protection implementeren, security governance beheren en reageren op bedreigingen. Essentieel voor security professionals die met Microsoft 365 werken.',
      
      learningObjectives: [
        'Implementeer en beheer identity en access',
        'Implementeer en beheer threat protection',
        'Implementeer en beheer information protection',
        'Beheer governance en compliance features',
        'Configureer en analyseer security reports'
      ],
      
      prerequisites: [
        'MS-900 Microsoft 365 Fundamentals certificering',
        'Ervaring met Microsoft 365 workloads',
        'Begrip van security concepten en principes',
        'Kennis van PowerShell en Azure AD'
      ],
      
      targetAudience: [
        'Microsoft 365 Security Administrators',
        'Security Engineers',
        'Information Security Analysts',
        'Compliance Administrators'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Security Administrator Associate',
        examCode: 'MS-500',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Identity en Access Management',
          topics: [
            'Azure AD identity protection',
            'Multi-factor authentication implementatie',
            'Conditional access policies',
            'Privileged identity management',
            'Identity governance en lifecycle'
          ]
        },
        {
          title: 'Threat Protection Implementatie',
          topics: [
            'Microsoft Defender for Office 365',
            'Safe Attachments en Safe Links',
            'Anti-phishing en anti-malware policies',
            'Microsoft Cloud App Security',
            'Attack simulation en training'
          ]
        },
        {
          title: 'Information Protection en Governance',
          topics: [
            'Data loss prevention policies',
            'Sensitivity labels en classification',
            'Rights management en encryption',
            'Retention policies en legal holds',
            'eDiscovery en content search'
          ]
        },
        {
          title: 'Compliance en Risk Management',
          topics: [
            'Compliance center management',
            'Audit log search en analyse',
            'Communication compliance',
            'Insider risk management',
            'Data governance strategieën'
          ]
        },
        {
          title: 'Security Monitoring en Response',
          topics: [
            'Security en compliance center',
            'Incident response procedures',
            'Security score verbetering',
            'Threat investigation tools',
            'Security reporting en analytics'
          ]
        }
      ],
      
      highlights: [
        'Uitgebreide security implementatie',
        'Geavanceerde threat protection technieken',
        'Real-world security scenario\'s',
        'Compliance en governance best practices',
        'Voorbereiding voor MS-500 certificering'
      ],
      
      instructor: {
        id: 'm365-security-instructor',
        name: 'Michael Chen',
        title: 'Microsoft 365 Security Expert & Cybersecurity Specialist',
        bio: 'Cybersecurity specialist met 10+ jaar ervaring in Microsoft 365 security implementaties',
        certifications: ['Microsoft 365 Certified: Security Administrator Associate', 'Azure Security Engineer Associate'],
        specialties: ['Microsoft 365 Security', 'Threat Protection', 'Information Protection', 'Compliance']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: true,
      tags: ['Microsoft 365', 'MS-500', 'Security', 'Compliance', 'Threat Protection'],
      
      isPublished: true,
      publishedAt: '2024-04-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 23
    }
  },
  'microsoft-copilot-mastery': {
    en: {
      id: 'microsoft-copilot-mastery',
      slug: 'microsoft-copilot-mastery',
      title: 'Microsoft Copilot for Microsoft 365 Mastery',
      description: 'Master AI-powered productivity with Microsoft Copilot across Microsoft 365 applications',
      category: 'AI & Machine Learning',
      level: 'Intermediate',
      duration: { days: 2, format: 'days' },
      price: { amount: 995, currency: 'EUR' },
      
      overview: 'Comprehensive training on Microsoft Copilot for Microsoft 365. Learn to leverage AI-powered assistance across Word, Excel, PowerPoint, Outlook, Teams, and more. Transform your productivity with intelligent automation and content generation.',
      
      learningObjectives: [
        'Master Copilot features across Microsoft 365 applications',
        'Create effective prompts for AI-powered assistance',
        'Automate content creation and data analysis',
        'Enhance collaboration with AI-powered insights',
        'Implement best practices for AI productivity tools'
      ],
      
      prerequisites: [
        'Basic proficiency with Microsoft 365 applications',
        'Familiarity with Word, Excel, PowerPoint, and Teams',
        'Understanding of business productivity workflows',
        'No AI or programming experience required'
      ],
      
      targetAudience: [
        'Business professionals and knowledge workers',
        'Microsoft 365 power users',
        'Team leaders and project managers',
        'Content creators and analysts'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Copilot Fundamentals and Setup',
          topics: [
            'Introduction to Microsoft Copilot for Microsoft 365',
            'Accessing Copilot across applications',
            'Understanding AI prompt engineering',
            'Privacy and security considerations',
            'Best practices for AI-human collaboration'
          ]
        },
        {
          title: 'Copilot in Word and Content Creation',
          topics: [
            'Generating and refining documents',
            'Content summarization and rewriting',
            'Creative writing assistance',
            'Research and citation support',
            'Document formatting and structure'
          ]
        },
        {
          title: 'Copilot in Excel and Data Analysis',
          topics: [
            'Formula generation and explanation',
            'Data analysis and insights',
            'Chart and visualization creation',
            'Pattern recognition in datasets',
            'Automated data cleaning and formatting'
          ]
        },
        {
          title: 'Copilot in PowerPoint and Presentations',
          topics: [
            'Slide design and content generation',
            'Presentation outline creation',
            'Visual storytelling with AI',
            'Speaker notes and talking points',
            'Brand-consistent design automation'
          ]
        },
        {
          title: 'Copilot in Outlook, Teams, and Collaboration',
          topics: [
            'Email composition and response optimization',
            'Meeting summarization and action items',
            'Team chat enhancement and insights',
            'Calendar management assistance',
            'Cross-application productivity workflows'
          ]
        }
      ],
      
      highlights: [
        'Hands-on practice with real business scenarios',
        'Advanced prompt engineering techniques',
        'Cross-application productivity workflows',
        'AI ethics and responsible usage',
        'Productivity measurement and ROI assessment'
      ],
      
      instructor: {
        id: 'copilot-mastery-instructor',
        name: 'Lisa Anderson',
        title: 'Microsoft 365 AI Specialist & Productivity Expert',
        bio: 'AI productivity expert with 6+ years in Microsoft 365 and emerging AI technologies',
        certifications: ['Microsoft 365 Certified: Enterprise Administrator Expert', 'Microsoft Certified: Azure AI Engineer Associate'],
        specialties: ['Microsoft Copilot', 'AI Productivity', 'Prompt Engineering', 'Digital Transformation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['Microsoft Copilot', 'AI', 'Productivity', 'Microsoft 365', 'Automation'],
      
      isPublished: true,
      publishedAt: '2024-05-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 24
    },
    nl: {
      id: 'microsoft-copilot-mastery',
      slug: 'microsoft-copilot-mastery',
      title: 'Microsoft Copilot for Microsoft 365 Mastery',
      description: 'Beheers AI-aangedreven productiviteit met Microsoft Copilot in Microsoft 365 applicaties',
      category: 'AI & Machine Learning',
      level: 'Intermediate',
      duration: { days: 2, format: 'days' },
      price: { amount: 995, currency: 'EUR' },
      
      overview: 'Uitgebreide training over Microsoft Copilot voor Microsoft 365. Leer AI-aangedreven assistentie gebruiken in Word, Excel, PowerPoint, Outlook, Teams en meer. Transformeer je productiviteit met intelligente automatisering en content generatie.',
      
      learningObjectives: [
        'Beheers Copilot features in Microsoft 365 applicaties',
        'Creëer effectieve prompts voor AI-aangedreven assistentie',
        'Automatiseer content creatie en data analyse',
        'Verbeter samenwerking met AI-aangedreven insights',
        'Implementeer best practices voor AI productiviteitstools'
      ],
      
      prerequisites: [
        'Basis vaardigheid met Microsoft 365 applicaties',
        'Vertrouwdheid met Word, Excel, PowerPoint en Teams',
        'Begrip van bedrijfsproductiviteit workflows',
        'Geen AI of programmeerervaring vereist'
      ],
      
      targetAudience: [
        'Bedrijfsprofessionals en knowledge workers',
        'Microsoft 365 power users',
        'Team leaders en project managers',
        'Content creators en analisten'
      ],
      
      certification: {
        available: false,
        name: '',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Copilot Fundamentals en Setup',
          topics: [
            'Introductie tot Microsoft Copilot voor Microsoft 365',
            'Toegang tot Copilot in applicaties',
            'Begrip van AI prompt engineering',
            'Privacy en security overwegingen',
            'Best practices voor AI-menselijke samenwerking'
          ]
        },
        {
          title: 'Copilot in Word en Content Creation',
          topics: [
            'Genereren en verfijnen van documenten',
            'Content samenvatting en herschrijven',
            'Creatieve schrijfassistentie',
            'Research en citatie ondersteuning',
            'Document formatting en structuur'
          ]
        },
        {
          title: 'Copilot in Excel en Data Analysis',
          topics: [
            'Formula generatie en uitleg',
            'Data analyse en insights',
            'Chart en visualisatie creatie',
            'Patroonherkenning in datasets',
            'Geautomatiseerde data cleaning en formatting'
          ]
        },
        {
          title: 'Copilot in PowerPoint en Presentations',
          topics: [
            'Slide design en content generatie',
            'Presentatie outline creatie',
            'Visual storytelling met AI',
            'Speaker notes en talking points',
            'Brand-consistente design automatisering'
          ]
        },
        {
          title: 'Copilot in Outlook, Teams en Collaboration',
          topics: [
            'Email compositie en response optimalisatie',
            'Meeting samenvatting en action items',
            'Team chat verbetering en insights',
            'Calendar management assistentie',
            'Cross-applicatie productiviteitsworkflows'
          ]
        }
      ],
      
      highlights: [
        'Hands-on oefening met echte bedrijfsscenario\'s',
        'Geavanceerde prompt engineering technieken',
        'Cross-applicatie productiviteitsworkflows',
        'AI ethiek en verantwoord gebruik',
        'Productiviteitsmeting en ROI assessment'
      ],
      
      instructor: {
        id: 'copilot-mastery-instructor',
        name: 'Lisa Anderson',
        title: 'Microsoft 365 AI Specialist & Productivity Expert',
        bio: 'AI productiviteitsexpert met 6+ jaar ervaring in Microsoft 365 en emerging AI technologieën',
        certifications: ['Microsoft 365 Certified: Enterprise Administrator Expert', 'Microsoft Certified: Azure AI Engineer Associate'],
        specialties: ['Microsoft Copilot', 'AI Productivity', 'Prompt Engineering', 'Digital Transformation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['Microsoft Copilot', 'AI', 'Productivity', 'Microsoft 365', 'Automation'],
      
      isPublished: true,
      publishedAt: '2024-05-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 24
    }
  },
  'microsoft-teams-administration': {
    en: {
      id: 'microsoft-teams-administration',
      slug: 'microsoft-teams-administration',
      code: 'MS-700',
      title: 'Managing Microsoft Teams',
      description: 'Plan, deploy, configure, and manage Microsoft Teams to focus on efficient and effective collaboration',
      category: 'Microsoft 365',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Comprehensive training for Microsoft Teams administrators. Learn to plan, deploy, and manage Teams environments including calling, meetings, chat, collaboration, and Teams integration with other Microsoft 365 workloads.',
      
      learningObjectives: [
        'Plan and configure Microsoft Teams environments',
        'Manage chat, teams, channels, and apps',
        'Plan and configure audio conferencing and calling',
        'Monitor and troubleshoot Microsoft Teams',
        'Implement governance and compliance for Teams'
      ],
      
      prerequisites: [
        'Understanding of Microsoft 365 fundamentals',
        'Experience with Microsoft Teams as an end user',
        'Basic knowledge of PowerShell',
        'Understanding of networking concepts for UC workloads'
      ],
      
      targetAudience: [
        'Microsoft Teams Administrators',
        'Microsoft 365 Administrators',
        'UC Engineers and Architects',
        'Collaboration Platform Administrators'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Teams Administrator Associate',
        examCode: 'MS-700',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Microsoft Teams Environment Planning',
          topics: [
            'Teams architecture and components',
            'Licensing requirements and planning',
            'Network requirements and optimization',
            'Identity and authentication planning',
            'Governance and compliance planning'
          ]
        },
        {
          title: 'Teams and Channels Management',
          topics: [
            'Teams creation and management policies',
            'Channel types and configuration',
            'Guest access and external sharing',
            'Teams templates and policies',
            'Team lifecycle management'
          ]
        },
        {
          title: 'Apps and Integrations',
          topics: [
            'App store and custom apps',
            'App permission and setup policies',
            'Connectors and bots configuration',
            'Power Platform integration',
            'Third-party app management'
          ]
        },
        {
          title: 'Calling and Meeting Features',
          topics: [
            'Audio conferencing setup',
            'Direct routing configuration',
            'Phone system implementation',
            'Meeting policies and settings',
            'Room systems and devices'
          ]
        },
        {
          title: 'Monitoring and Troubleshooting',
          topics: [
            'Call quality dashboard',
            'Teams analytics and reporting',
            'Network connectivity testing',
            'Common issues troubleshooting',
            'Support tools and diagnostics'
          ]
        }
      ],
      
      highlights: [
        'Complete Teams administration coverage',
        'Real-world deployment scenarios',
        'Voice and calling implementation',
        'Governance and security best practices',
        'Preparation for MS-700 certification'
      ],
      
      instructor: {
        id: 'teams-admin-instructor',
        name: 'David Rodriguez',
        title: 'Microsoft Teams Expert & UC Solutions Architect',
        bio: 'UC solutions architect with 12+ years in Microsoft collaboration technologies',
        certifications: ['Microsoft 365 Certified: Teams Administrator Associate', 'Microsoft 365 Certified: Enterprise Administrator Expert'],
        specialties: ['Microsoft Teams', 'Voice Solutions', 'Collaboration Governance', 'UC Architecture']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Microsoft Teams', 'MS-700', 'Collaboration', 'Voice', 'Administration'],
      
      isPublished: true,
      publishedAt: '2024-04-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 25
    },
    nl: {
      id: 'microsoft-teams-administration',
      slug: 'microsoft-teams-administration',
      code: 'MS-700',
      title: 'Managing Microsoft Teams',
      description: 'Plan, implementeer, configureer en beheer Microsoft Teams voor efficiënte en effectieve samenwerking',
      category: 'Microsoft 365',
      level: 'Intermediate',
      duration: { days: 3, format: 'days' },
      price: { amount: 1395, currency: 'EUR' },
      
      overview: 'Uitgebreide training voor Microsoft Teams administrators. Leer Teams omgevingen plannen, implementeren en beheren inclusief calling, meetings, chat, samenwerking en Teams integratie met andere Microsoft 365 workloads.',
      
      learningObjectives: [
        'Plan en configureer Microsoft Teams omgevingen',
        'Beheer chat, teams, channels en apps',
        'Plan en configureer audio conferencing en calling',
        'Monitor en troubleshoot Microsoft Teams',
        'Implementeer governance en compliance voor Teams'
      ],
      
      prerequisites: [
        'Begrip van Microsoft 365 fundamentals',
        'Ervaring met Microsoft Teams als eindgebruiker',
        'Basiskennis van PowerShell',
        'Begrip van networking concepten voor UC workloads'
      ],
      
      targetAudience: [
        'Microsoft Teams Administrators',
        'Microsoft 365 Administrators',
        'UC Engineers en Architects',
        'Collaboration Platform Administrators'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Teams Administrator Associate',
        examCode: 'MS-700',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Microsoft Teams Environment Planning',
          topics: [
            'Teams architectuur en componenten',
            'Licensing requirements en planning',
            'Network requirements en optimalisatie',
            'Identity en authentication planning',
            'Governance en compliance planning'
          ]
        },
        {
          title: 'Teams en Channels Management',
          topics: [
            'Teams creation en management policies',
            'Channel types en configuratie',
            'Guest access en external sharing',
            'Teams templates en policies',
            'Team lifecycle management'
          ]
        },
        {
          title: 'Apps en Integrations',
          topics: [
            'App store en custom apps',
            'App permission en setup policies',
            'Connectors en bots configuratie',
            'Power Platform integratie',
            'Third-party app management'
          ]
        },
        {
          title: 'Calling en Meeting Features',
          topics: [
            'Audio conferencing setup',
            'Direct routing configuratie',
            'Phone system implementatie',
            'Meeting policies en settings',
            'Room systems en devices'
          ]
        },
        {
          title: 'Monitoring en Troubleshooting',
          topics: [
            'Call quality dashboard',
            'Teams analytics en reporting',
            'Network connectivity testing',
            'Veelvoorkomende issues troubleshooting',
            'Support tools en diagnostics'
          ]
        }
      ],
      
      highlights: [
        'Complete Teams administratie dekking',
        'Real-world deployment scenario\'s',
        'Voice en calling implementatie',
        'Governance en security best practices',
        'Voorbereiding voor MS-700 certificering'
      ],
      
      instructor: {
        id: 'teams-admin-instructor',
        name: 'David Rodriguez',
        title: 'Microsoft Teams Expert & UC Solutions Architect',
        bio: 'UC solutions architect met 12+ jaar ervaring in Microsoft collaboration technologieën',
        certifications: ['Microsoft 365 Certified: Teams Administrator Associate', 'Microsoft 365 Certified: Enterprise Administrator Expert'],
        specialties: ['Microsoft Teams', 'Voice Solutions', 'Collaboration Governance', 'UC Architecture']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: false,
      tags: ['Microsoft Teams', 'MS-700', 'Collaboration', 'Voice', 'Administration'],
      
      isPublished: true,
      publishedAt: '2024-04-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 25
    }
  },
  'microsoft-365-identity-access': {
    en: {
      id: 'microsoft-365-identity-access',
      slug: 'microsoft-365-identity-access',
      code: 'SC-300',
      title: 'Microsoft Identity and Access Administrator',
      description: 'Design, implement, and operate identity and access management systems using Azure AD',
      category: 'Security & Compliance',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Advanced training for identity and access administrators. Learn to implement and manage Azure AD identity solutions, including authentication, authorization, identity governance, and access management for Microsoft 365 and hybrid environments.',
      
      learningObjectives: [
        'Implement identity management solutions',
        'Implement authentication and access management',
        'Implement access management for apps',
        'Plan and implement identity governance strategy'
      ],
      
      prerequisites: [
        'Experience with identity and access management concepts',
        'Understanding of Azure AD fundamentals',
        'Knowledge of Microsoft 365 security features',
        'Familiarity with PowerShell and Microsoft Graph'
      ],
      
      targetAudience: [
        'Identity and Access Administrators',
        'Security Engineers',
        'Azure AD Specialists',
        'Microsoft 365 Security Administrators'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: Identity and Access Administrator Associate',
        examCode: 'SC-300',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Identity Management Solutions',
          topics: [
            'Azure AD tenant configuration',
            'Custom domains and branding',
            'User and group management',
            'Device management and compliance',
            'Hybrid identity with Azure AD Connect'
          ]
        },
        {
          title: 'Authentication and Access Management',
          topics: [
            'Multi-factor authentication implementation',
            'Self-service password reset',
            'Authentication methods and policies',
            'Conditional access policies',
            'Sign-in risk and user risk policies'
          ]
        },
        {
          title: 'Application Access Management',
          topics: [
            'Enterprise application integration',
            'Single sign-on configuration',
            'Application proxy for on-premises apps',
            'API permissions and consent',
            'App registration and management'
          ]
        },
        {
          title: 'Privileged Identity Management',
          topics: [
            'PIM for Azure AD roles',
            'PIM for Azure resources',
            'Access reviews and certifications',
            'Just-in-time access',
            'Privileged access workstations'
          ]
        },
        {
          title: 'Identity Governance and Compliance',
          topics: [
            'Entitlement management',
            'Access packages and policies',
            'Identity lifecycle management',
            'Terms of use and privacy',
            'Compliance reporting and monitoring'
          ]
        }
      ],
      
      highlights: [
        'Advanced identity governance techniques',
        'Zero Trust architecture implementation',
        'Privileged access management',
        'Hybrid identity best practices',
        'Preparation for SC-300 certification'
      ],
      
      instructor: {
        id: 'identity-expert-instructor',
        name: 'Jennifer Martinez',
        title: 'Identity & Access Management Expert & Security Architect',
        bio: 'Identity security architect with 9+ years in Azure AD and identity governance',
        certifications: ['Microsoft Certified: Identity and Access Administrator Associate', 'Microsoft Certified: Security, Compliance, and Identity Fundamentals'],
        specialties: ['Azure AD', 'Identity Governance', 'Privileged Access', 'Zero Trust']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure AD', 'SC-300', 'Identity', 'Access Management', 'Security'],
      
      isPublished: true,
      publishedAt: '2024-05-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 26
    },
    nl: {
      id: 'microsoft-365-identity-access',
      slug: 'microsoft-365-identity-access',
      code: 'SC-300',
      title: 'Microsoft Identity and Access Administrator',
      description: 'Ontwerp, implementeer en beheer identity en access management systemen met Azure AD',
      category: 'Security & Compliance',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Geavanceerde training voor identity en access administrators. Leer Azure AD identity oplossingen implementeren en beheren, inclusief authentication, authorization, identity governance en access management voor Microsoft 365 en hybride omgevingen.',
      
      learningObjectives: [
        'Implementeer identity management oplossingen',
        'Implementeer authentication en access management',
        'Implementeer access management voor apps',
        'Plan en implementeer identity governance strategie'
      ],
      
      prerequisites: [
        'Ervaring met identity en access management concepten',
        'Begrip van Azure AD fundamentals',
        'Kennis van Microsoft 365 security features',
        'Vertrouwdheid met PowerShell en Microsoft Graph'
      ],
      
      targetAudience: [
        'Identity en Access Administrators',
        'Security Engineers',
        'Azure AD Specialists',
        'Microsoft 365 Security Administrators'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft Certified: Identity and Access Administrator Associate',
        examCode: 'SC-300',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Identity Management Oplossingen',
          topics: [
            'Azure AD tenant configuratie',
            'Custom domains en branding',
            'User en group management',
            'Device management en compliance',
            'Hybride identity met Azure AD Connect'
          ]
        },
        {
          title: 'Authentication en Access Management',
          topics: [
            'Multi-factor authentication implementatie',
            'Self-service password reset',
            'Authentication methods en policies',
            'Conditional access policies',
            'Sign-in risk en user risk policies'
          ]
        },
        {
          title: 'Application Access Management',
          topics: [
            'Enterprise application integratie',
            'Single sign-on configuratie',
            'Application proxy voor on-premises apps',
            'API permissions en consent',
            'App registration en management'
          ]
        },
        {
          title: 'Privileged Identity Management',
          topics: [
            'PIM voor Azure AD roles',
            'PIM voor Azure resources',
            'Access reviews en certifications',
            'Just-in-time access',
            'Privileged access workstations'
          ]
        },
        {
          title: 'Identity Governance en Compliance',
          topics: [
            'Entitlement management',
            'Access packages en policies',
            'Identity lifecycle management',
            'Terms of use en privacy',
            'Compliance reporting en monitoring'
          ]
        }
      ],
      
      highlights: [
        'Geavanceerde identity governance technieken',
        'Zero Trust architectuur implementatie',
        'Privileged access management',
        'Hybride identity best practices',
        'Voorbereiding voor SC-300 certificering'
      ],
      
      instructor: {
        id: 'identity-expert-instructor',
        name: 'Jennifer Martinez',
        title: 'Identity & Access Management Expert & Security Architect',
        bio: 'Identity security architect met 9+ jaar ervaring in Azure AD en identity governance',
        certifications: ['Microsoft Certified: Identity and Access Administrator Associate', 'Microsoft Certified: Security, Compliance, and Identity Fundamentals'],
        specialties: ['Azure AD', 'Identity Governance', 'Privileged Access', 'Zero Trust']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 10,
      featured: false,
      tags: ['Azure AD', 'SC-300', 'Identity', 'Access Management', 'Security'],
      
      isPublished: true,
      publishedAt: '2024-05-15T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 26
    }
  },

  'microsoft-365-administrator': {
    en: {
      id: 'microsoft-365-administrator',
      slug: 'microsoft-365-administrator',
      code: 'MS-102',
      title: 'Microsoft 365 Administrator',
      description: 'Expert-level training for deploying, configuring, and managing Microsoft 365 tenant with integrated security and compliance',
      category: 'Microsoft 365',
      level: 'Expert',
      duration: { days: 5, format: 'days' },
      price: { amount: 2495, currency: 'EUR' },
      
      overview: 'Comprehensive expert-level training for Microsoft 365 Administrators who deploy, configure, secure, manage, and monitor services in a Microsoft 365 tenant. This advanced course covers tenant implementation, identity and access, security threats, compliance solutions, and endpoint management.',
      
      learningObjectives: [
        'Deploy and configure Microsoft 365 tenant',
        'Manage Entra identity and synchronization',
        'Implement Microsoft Defender XDR security',
        'Manage Microsoft Purview compliance',
        'Manage organizational settings and subscriptions',
        'Implement cloud-only and hybrid identity models'
      ],
      
      prerequisites: [
        'Microsoft 365 Certified: Endpoint Administrator Associate, OR',
        'Microsoft 365 Certified: Messaging Administrator Associate, OR',
        'Microsoft 365 Certified: Teams Administrator Associate, OR',
        'Microsoft Certified: Identity and Access Administrator Associate, OR',
        'Microsoft Certified: Information Protection and Compliance Administrator Associate',
        'Experience with Microsoft 365 workloads',
        'Understanding of DNS, networking, and Active Directory'
      ],
      
      targetAudience: [
        'Microsoft 365 Administrators',
        'Enterprise Administrators',
        'Cloud Architects',
        'IT Professionals managing M365 environments',
        'Experienced admins seeking expert certification'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Administrator Expert',
        examCode: 'MS-102',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Deploy and Configure Microsoft 365 Tenant',
          topics: [
            'Configure organizational settings',
            'Manage tenant subscriptions and licenses',
            'Plan and implement Microsoft 365 domains',
            'Configure client connectivity',
            'Monitor Microsoft 365 health and services',
            'Configure data retention and recovery'
          ]
        },
        {
          title: 'Implement and Manage Entra Identity',
          topics: [
            'Configure user and group accounts',
            'Manage external identities',
            'Implement Microsoft Entra Connect',
            'Implement password management',
            'Configure authentication methods',
            'Plan identity governance'
          ]
        },
        {
          title: 'Manage Access and Authentication',
          topics: [
            'Plan and implement Conditional Access',
            'Manage device authentication',
            'Configure multi-factor authentication',
            'Monitor authentication using sign-in logs',
            'Implement passwordless authentication',
            'Troubleshoot authentication issues'
          ]
        },
        {
          title: 'Implement Microsoft Defender XDR',
          topics: [
            'Manage Microsoft Defender for Endpoint',
            'Implement Microsoft Defender for Office 365',
            'Configure Microsoft Defender for Identity',
            'Manage Microsoft Defender for Cloud Apps',
            'Monitor and investigate security threats',
            'Respond to security incidents'
          ]
        },
        {
          title: 'Manage Microsoft Purview Compliance',
          topics: [
            'Implement information protection',
            'Configure data loss prevention (DLP)',
            'Manage retention policies and labels',
            'Implement insider risk management',
            'Manage eDiscovery and content search',
            'Configure compliance policies'
          ]
        },
        {
          title: 'Advanced Tenant Management',
          topics: [
            'Plan tenant migrations and upgrades',
            'Implement Microsoft 365 Apps deployment',
            'Monitor and troubleshoot service health',
            'Manage organizational settings',
            'Implement audit and reporting',
            'Optimize tenant performance'
          ]
        }
      ],
      
      highlights: [
        'Expert-level Microsoft 365 administration',
        'Comprehensive tenant deployment strategies',
        'Integrated security and compliance',
        'Hands-on with Defender XDR and Purview',
        'MS-102 exam preparation',
        'Replaces legacy MS-100 and MS-101 exams'
      ],
      
      instructor: {
        id: 'm365-expert-instructor',
        name: 'Alexandra Chen',
        title: 'Microsoft 365 Enterprise Architect',
        bio: 'M365 enterprise architect with 12+ years experience deploying and managing large-scale cloud environments',
        certifications: ['MS-102', 'MS-500', 'SC-300', 'SC-400', 'AZ-305'],
        specialties: ['Microsoft 365 Administration', 'Tenant Architecture', 'Security Design', 'Compliance Implementation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['MS-102', 'Microsoft 365', 'Entra ID', 'Defender XDR', 'Purview', 'Administrator Expert'],
      
      isPublished: true,
      publishedAt: '2024-11-18T08:00:00Z',
      updatedAt: '2024-11-18T08:00:00Z',
      order: 27
    },
    nl: {
      id: 'microsoft-365-administrator',
      slug: 'microsoft-365-administrator',
      code: 'MS-102',
      title: 'Microsoft 365 Administrator',
      description: 'Expert-level training voor het deployen, configureren en beheren van Microsoft 365 tenant met geïntegreerde security en compliance',
      category: 'Microsoft 365',
      level: 'Expert',
      duration: { days: 5, format: 'days' },
      price: { amount: 2495, currency: 'EUR' },
      
      overview: 'Uitgebreide expert-level training voor Microsoft 365 Administrators die services deployen, configureren, beveiligen, beheren en monitoren in een Microsoft 365 tenant. Deze geavanceerde cursus behandelt tenant implementatie, identity en access, security threats, compliance oplossingen, en endpoint management.',
      
      learningObjectives: [
        'Deploy en configureer Microsoft 365 tenant',
        'Beheer Entra identity en synchronization',
        'Implementeer Microsoft Defender XDR security',
        'Beheer Microsoft Purview compliance',
        'Beheer organizational settings en subscriptions',
        'Implementeer cloud-only en hybrid identity models'
      ],
      
      prerequisites: [
        'Microsoft 365 Certified: Endpoint Administrator Associate, OF',
        'Microsoft 365 Certified: Messaging Administrator Associate, OF',
        'Microsoft 365 Certified: Teams Administrator Associate, OF',
        'Microsoft Certified: Identity and Access Administrator Associate, OF',
        'Microsoft Certified: Information Protection and Compliance Administrator Associate',
        'Ervaring met Microsoft 365 workloads',
        'Begrip van DNS, networking, en Active Directory'
      ],
      
      targetAudience: [
        'Microsoft 365 Administrators',
        'Enterprise Administrators',
        'Cloud Architects',
        'IT Professionals die M365 omgevingen beheren',
        'Ervaren admins die expert certificering zoeken'
      ],
      
      certification: {
        available: true,
        name: 'Microsoft 365 Certified: Administrator Expert',
        examCode: 'MS-102',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Deploy en Configureer Microsoft 365 Tenant',
          topics: [
            'Configureer organizational settings',
            'Beheer tenant subscriptions en licenses',
            'Plan en implementeer Microsoft 365 domains',
            'Configureer client connectivity',
            'Monitor Microsoft 365 health en services',
            'Configureer data retention en recovery'
          ]
        },
        {
          title: 'Implementeer en Beheer Entra Identity',
          topics: [
            'Configureer user en group accounts',
            'Beheer external identities',
            'Implementeer Microsoft Entra Connect',
            'Implementeer password management',
            'Configureer authentication methods',
            'Plan identity governance'
          ]
        },
        {
          title: 'Beheer Access en Authentication',
          topics: [
            'Plan en implementeer Conditional Access',
            'Beheer device authentication',
            'Configureer multi-factor authentication',
            'Monitor authentication met sign-in logs',
            'Implementeer passwordless authentication',
            'Troubleshoot authentication issues'
          ]
        },
        {
          title: 'Implementeer Microsoft Defender XDR',
          topics: [
            'Beheer Microsoft Defender for Endpoint',
            'Implementeer Microsoft Defender for Office 365',
            'Configureer Microsoft Defender for Identity',
            'Beheer Microsoft Defender for Cloud Apps',
            'Monitor en onderzoek security threats',
            'Reageer op security incidents'
          ]
        },
        {
          title: 'Beheer Microsoft Purview Compliance',
          topics: [
            'Implementeer information protection',
            'Configureer data loss prevention (DLP)',
            'Beheer retention policies en labels',
            'Implementeer insider risk management',
            'Beheer eDiscovery en content search',
            'Configureer compliance policies'
          ]
        },
        {
          title: 'Geavanceerd Tenant Management',
          topics: [
            'Plan tenant migrations en upgrades',
            'Implementeer Microsoft 365 Apps deployment',
            'Monitor en troubleshoot service health',
            'Beheer organizational settings',
            'Implementeer audit en reporting',
            'Optimaliseer tenant performance'
          ]
        }
      ],
      
      highlights: [
        'Expert-level Microsoft 365 administration',
        'Uitgebreide tenant deployment strategieën',
        'Geïntegreerde security en compliance',
        'Hands-on met Defender XDR en Purview',
        'MS-102 examen voorbereiding',
        'Vervangt legacy MS-100 en MS-101 examens'
      ],
      
      instructor: {
        id: 'm365-expert-instructor',
        name: 'Alexandra Chen',
        title: 'Microsoft 365 Enterprise Architect',
        bio: 'M365 enterprise architect met 12+ jaar ervaring in het deployen en beheren van large-scale cloud environments',
        certifications: ['MS-102', 'MS-500', 'SC-300', 'SC-400', 'AZ-305'],
        specialties: ['Microsoft 365 Administration', 'Tenant Architecture', 'Security Design', 'Compliance Implementation']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['MS-102', 'Microsoft 365', 'Entra ID', 'Defender XDR', 'Purview', 'Administrator Expert'],
      
      isPublished: true,
      publishedAt: '2024-11-18T08:00:00Z',
      updatedAt: '2024-11-18T08:00:00Z',
      order: 27
    }
  }
};
