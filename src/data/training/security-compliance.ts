import type { TrainingTranslations } from '../../types/training';

// Security and Compliance Courses
export const securityComplianceCourses: TrainingTranslations = {
  'azure-security-engineer': {
    en: {
      id: 'azure-security-engineer',
      slug: 'azure-security-engineer',
      code: 'AZ-500',
      title: 'Azure Security Engineer Associate',
      description: 'Implement security controls and threat protection on Azure',
      category: 'Security & Compliance',
      level: 'Intermediate',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Comprehensive security training focusing on implementing security controls and threat protection, managing identity and access, and securing data, applications, and networks in Azure.',
      
      learningObjectives: [
        'Manage identity and access',
        'Implement platform protection',
        'Secure data and applications',
        'Manage security operations'
      ],
      
      prerequisites: [
        'AZ-104 certification or equivalent experience',
        'Experience with security best practices',
        'Understanding of Azure services',
        'Knowledge of PowerShell and Azure CLI'
      ],
      
      targetAudience: [
        'Security Engineers',
        'Cloud Security Specialists',
        'Compliance Officers',
        'Risk Management Professionals'
      ],
      
      certification: {
        available: true,
        name: 'Azure Security Engineer Associate',
        examCode: 'AZ-500',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Manage Identity and Access',
          topics: [
            'Azure Active Directory',
            'Multi-factor authentication',
            'Privileged Identity Management',
            'Conditional Access',
            'Identity Protection'
          ]
        },
        {
          title: 'Implement Platform Protection',
          topics: [
            'Perimeter security',
            'Network security',
            'Host security',
            'Container security',
            'Key Vault management'
          ]
        },
        {
          title: 'Secure Data and Applications',
          topics: [
            'Data classification and protection',
            'Application security',
            'Storage security',
            'Database security',
            'Key management'
          ]
        },
        {
          title: 'Manage Security Operations',
          topics: [
            'Azure Security Center',
            'Azure Sentinel',
            'Threat intelligence',
            'Incident response',
            'Security monitoring'
          ]
        }
      ],
      
      highlights: [
        'Hands-on security implementation labs',
        'Real-world threat scenarios',
        'Security best practices and frameworks',
        'Compliance and governance strategies',
        'Preparation for AZ-500 certification'
      ],
      
      instructor: {
        id: 'security-expert-instructor',
        name: 'Maria Santos',
        title: 'Senior Security Engineer & Compliance Specialist',
        bio: 'Cybersecurity expert with 12+ years in cloud security and compliance',
        certifications: ['Azure Security Engineer Associate', 'CISSP', 'CISM'],
        specialties: ['Cloud Security', 'Identity Management', 'Compliance', 'Threat Detection']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['Azure', 'Security', 'AZ-500', 'Compliance', 'Identity'],
      
      isPublished: true,
      publishedAt: '2024-02-25T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 5
    },
    nl: {
      id: 'azure-security-engineer',
      slug: 'azure-security-engineer',
      code: 'AZ-500',
      title: 'Azure Security Engineer Associate',
      description: 'Implementeer security controls en threat protection op Azure',
      category: 'Security & Compliance',
      level: 'Intermediate',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Uitgebreide security training gericht op het implementeren van security controls en threat protection, beheren van identity en access, en beveiligen van data, applicaties en netwerken in Azure.',
      
      learningObjectives: [
        'Beheer identity en access',
        'Implementeer platform protection',
        'Beveilig data en applicaties',
        'Beheer security operations'
      ],
      
      prerequisites: [
        'AZ-104 certificering of gelijkwaardige ervaring',
        'Ervaring met security best practices',
        'Begrip van Azure services',
        'Kennis van PowerShell en Azure CLI'
      ],
      
      targetAudience: [
        'Security Engineers',
        'Cloud Security Specialists',
        'Compliance Officers',
        'Risk Management Professionals'
      ],
      
      certification: {
        available: true,
        name: 'Azure Security Engineer Associate',
        examCode: 'AZ-500',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Beheer Identity en Access',
          topics: [
            'Azure Active Directory',
            'Multi-factor authentication',
            'Privileged Identity Management',
            'Conditional Access',
            'Identity Protection'
          ]
        },
        {
          title: 'Implementeer Platform Protection',
          topics: [
            'Perimeter security',
            'Network security',
            'Host security',
            'Container security',
            'Key Vault management'
          ]
        },
        {
          title: 'Beveilig Data en Applicaties',
          topics: [
            'Data classificatie en protection',
            'Applicatie security',
            'Storage security',
            'Database security',
            'Key management'
          ]
        },
        {
          title: 'Beheer Security Operations',
          topics: [
            'Azure Security Center',
            'Azure Sentinel',
            'Threat intelligence',
            'Incident response',
            'Security monitoring'
          ]
        }
      ],
      
      highlights: [
        'Hands-on security implementatie labs',
        'Real-world threat scenario\'s',
        'Security best practices en frameworks',
        'Compliance en governance strategieën',
        'Voorbereiding voor AZ-500 certificering'
      ],
      
      instructor: {
        id: 'security-expert-instructor',
        name: 'Maria Santos',
        title: 'Senior Security Engineer & Compliance Specialist',
        bio: 'Cybersecurity expert met 12+ jaar ervaring in cloud security en compliance',
        certifications: ['Azure Security Engineer Associate', 'CISSP', 'CISM'],
        specialties: ['Cloud Security', 'Identity Management', 'Compliance', 'Threat Detection']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 12,
      featured: true,
      tags: ['Azure', 'Security', 'AZ-500', 'Compliance', 'Identity'],
      
      isPublished: true,
      publishedAt: '2024-02-25T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 5
    }
  },
  'security-compliance-identity-fundamentals': {
    en: {
      id: 'security-compliance-identity-fundamentals',
      slug: 'security-compliance-identity-fundamentals',
      code: 'SC-900',
      title: 'Security, Compliance, and Identity Fundamentals',
      description: 'Foundation concepts of security, compliance, and identity across Microsoft services',
      category: 'Security & Compliance',
      level: 'Beginner',
      duration: { days: 2, format: 'days' },
      price: { amount: 895, currency: 'EUR' },
      
      overview: 'Fundamental training covering security, compliance, and identity concepts and solutions across Microsoft cloud services. Perfect for business users, IT professionals, and students new to security concepts.',
      
      learningObjectives: [
        'Describe the concepts of security, compliance, and identity',
        'Describe the capabilities of Microsoft identity and access management solutions',
        'Describe the capabilities of Microsoft security solutions',
        'Describe the capabilities of Microsoft compliance solutions'
      ],
      
      prerequisites: [
        'General understanding of networking and cloud computing concepts',
        'General IT knowledge or experience',
        'No specific technical prerequisites required'
      ],
      
      targetAudience: [
        'Business decision makers',
        'IT professionals new to security',
        'Compliance and risk management professionals',
        'Students exploring security careers'
      ],
      
      certification: {
        available: true,
        name: 'Security, Compliance, and Identity Fundamentals',
        examCode: 'SC-900',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Security and Compliance Concepts',
          topics: [
            'Shared responsibility model',
            'Defense in depth',
            'Zero Trust model',
            'Encryption and hashing',
            'Compliance concepts'
          ]
        },
        {
          title: 'Identity and Access Management',
          topics: [
            'Identity concepts',
            'Azure Active Directory',
            'Authentication methods',
            'Multi-factor authentication',
            'Conditional Access'
          ]
        },
        {
          title: 'Microsoft Security Solutions',
          topics: [
            'Azure Security Center',
            'Azure Sentinel',
            'Microsoft 365 Defender',
            'Microsoft Cloud App Security',
            'Azure Key Vault'
          ]
        },
        {
          title: 'Microsoft Compliance Solutions',
          topics: [
            'Microsoft 365 compliance center',
            'Information protection',
            'Data loss prevention',
            'Audit and eDiscovery',
            'Resource governance'
          ]
        }
      ],
      
      highlights: [
        'Comprehensive security fundamentals overview',
        'No technical prerequisites required',
        'Real-world security scenarios',
        'Microsoft security ecosystem understanding',
        'Preparation for SC-900 certification'
      ],
      
      instructor: {
        id: 'security-fundamentals-instructor',
        name: 'James Parker',
        title: 'Security Consultant & Microsoft Certified Trainer',
        bio: 'Security professional with 10+ years in information security and compliance',
        certifications: ['Security, Compliance, and Identity Fundamentals', 'CISSP'],
        specialties: ['Security Fundamentals', 'Compliance', 'Risk Management']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 15,
      featured: false,
      tags: ['Security', 'Compliance', 'Identity', 'SC-900', 'Fundamentals'],
      
      isPublished: true,
      publishedAt: '2024-04-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 11
    },
    nl: {
      id: 'security-compliance-identity-fundamentals',
      slug: 'security-compliance-identity-fundamentals',
      code: 'SC-900',
      title: 'Security, Compliance, en Identity Fundamentals',
      description: 'Basis concepten van security, compliance en identity in Microsoft services',
      category: 'Security & Compliance',
      level: 'Beginner',
      duration: { days: 2, format: 'days' },
      price: { amount: 895, currency: 'EUR' },
      
      overview: 'Fundamentele training die security, compliance en identity concepten en oplossingen in Microsoft cloud services behandelt. Perfect voor business gebruikers, IT professionals en iedereen die nieuw is bij security concepten.',
      
      learningObjectives: [
        'Beschrijf de concepten van security, compliance en identity',
        'Beschrijf de mogelijkheden van Microsoft identity en access management oplossingen',
        'Beschrijf de mogelijkheden van Microsoft security oplossingen',
        'Beschrijf de mogelijkheden van Microsoft compliance oplossingen'
      ],
      
      prerequisites: [
        'Algemeen begrip van networking en cloud computing concepten',
        'Algemene IT kennis of ervaring',
        'Geen specifieke technische vereisten'
      ],
      
      targetAudience: [
        'Business besluitvormers',
        'IT professionals nieuw bij security',
        'Compliance en risk management professionals',
        'Professionals die security carrières verkennen'
      ],
      
      certification: {
        available: true,
        name: 'Security, Compliance, and Identity Fundamentals',
        examCode: 'SC-900',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Security en Compliance Concepten',
          topics: [
            'Shared responsibility model',
            'Defense in depth',
            'Zero Trust model',
            'Encryption en hashing',
            'Compliance concepten'
          ]
        },
        {
          title: 'Identity en Access Management',
          topics: [
            'Identity concepten',
            'Azure Active Directory',
            'Authentication methods',
            'Multi-factor authentication',
            'Conditional Access'
          ]
        },
        {
          title: 'Microsoft Security Oplossingen',
          topics: [
            'Azure Security Center',
            'Azure Sentinel',
            'Microsoft 365 Defender',
            'Microsoft Cloud App Security',
            'Azure Key Vault'
          ]
        },
        {
          title: 'Microsoft Compliance Oplossingen',
          topics: [
            'Microsoft 365 compliance center',
            'Information protection',
            'Data loss prevention',
            'Audit en eDiscovery',
            'Resource governance'
          ]
        }
      ],
      
      highlights: [
        'Uitgebreid security fundamentals overzicht',
        'Geen technische vereisten nodig',
        'Real-world security scenario\'s',
        'Microsoft security ecosysteem begrip',
        'Voorbereiding voor SC-900 certificering'
      ],
      
      instructor: {
        id: 'security-fundamentals-instructor',
        name: 'James Parker',
        title: 'Security Consultant & Microsoft Certified Trainer',
        bio: 'Security professional met 10+ jaar ervaring in information security en compliance',
        certifications: ['Security, Compliance, and Identity Fundamentals', 'CISSP'],
        specialties: ['Security Fundamentals', 'Compliance', 'Risk Management']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 15,
      featured: false,
      tags: ['Security', 'Compliance', 'Identity', 'SC-900', 'Fundamentals'],
      
      isPublished: true,
      publishedAt: '2024-04-01T08:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
      order: 11
    }
  },

  'security-operations-analyst': {
    en: {
      id: 'security-operations-analyst',
      slug: 'security-operations-analyst',
      code: 'SC-200',
      title: 'Security Operations Analyst',
      description: 'Investigate, respond to, and hunt for threats using Microsoft Sentinel, Microsoft Defender XDR, and Security Copilot',
      category: 'Security & Compliance',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Comprehensive training for security professionals who mitigate organizational risk by rapidly remediating active attacks, advising on threat protection improvements, and investigating threats across cloud and on-premises environments.',
      
      learningObjectives: [
        'Manage a security operations environment',
        'Configure protections and detections',
        'Manage incident response with Microsoft Defender XDR',
        'Investigate and respond using Microsoft Sentinel',
        'Hunt for threats using KQL and advanced analytics',
        'Implement and use Microsoft Security Copilot'
      ],
      
      prerequisites: [
        'Fundamental understanding of Microsoft 365',
        'Basic knowledge of Azure services',
        'Understanding of security concepts',
        'Familiarity with Windows and Linux operating systems'
      ],
      
      targetAudience: [
        'Security Operations Analysts',
        'SOC Analysts',
        'Security Engineers',
        'Threat Intelligence Analysts',
        'Incident Responders'
      ],
      
      certification: {
        available: true,
        name: 'Security Operations Analyst Associate',
        examCode: 'SC-200',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Manage Security Operations Environment',
          topics: [
            'Configure Microsoft Defender XDR',
            'Manage assets and environments',
            'Design Microsoft Sentinel workspace',
            'Ingest data sources to Sentinel',
            'Configure automated investigation'
          ]
        },
        {
          title: 'Configure Protections and Detections',
          topics: [
            'Configure protections in Defender',
            'Configure custom detection rules',
            'Manage alerts and suppression',
            'Configure analytics rules in Sentinel',
            'Implement behavioral analytics'
          ]
        },
        {
          title: 'Manage Incident Response',
          topics: [
            'Respond to alerts in Defender portal',
            'Investigate device timelines',
            'Respond to Defender for Endpoint alerts',
            'Investigate Microsoft 365 activities',
            'Respond to incidents in Sentinel'
          ]
        },
        {
          title: 'Implement Microsoft Security Copilot',
          topics: [
            'Create and use promptbooks',
            'Manage sources and plugins',
            'Implement connectors',
            'Identify threats using Copilot',
            'Investigate incidents with AI'
          ]
        },
        {
          title: 'Hunt for Threats',
          topics: [
            'Hunt using KQL in Defender XDR',
            'Interpret threat analytics',
            'Create custom hunting queries',
            'Manage threat indicators',
            'Analyze attack vector coverage (MITRE ATT&CK)'
          ]
        },
        {
          title: 'Advanced Sentinel Operations',
          topics: [
            'Create hunting queries',
            'Use hunting bookmarks',
            'Create and configure workbooks',
            'Manage archived log data',
            'Create and monitor search jobs'
          ]
        }
      ],
      
      highlights: [
        'Hands-on with Microsoft Sentinel',
        'Real-world incident response scenarios',
        'Advanced threat hunting with KQL',
        'Microsoft Security Copilot integration',
        'SC-200 exam preparation'
      ],
      
      instructor: {
        id: 'soc-expert-instructor',
        name: 'Michael Torres',
        title: 'Security Operations Lead',
        bio: 'SOC manager with 10+ years experience in security operations and incident response',
        certifications: ['SC-200', 'SC-300', 'AZ-500', 'CISSP'],
        specialties: ['Security Operations', 'Threat Hunting', 'Incident Response', 'Microsoft Sentinel']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 16,
      featured: true,
      tags: ['SC-200', 'Security', 'Microsoft Sentinel', 'Defender XDR', 'Threat Hunting', 'SOC'],
      
      isPublished: true,
      publishedAt: '2024-11-18T08:00:00Z',
      updatedAt: '2024-11-18T08:00:00Z',
      order: 12
    },
    nl: {
      id: 'security-operations-analyst',
      slug: 'security-operations-analyst',
      code: 'SC-200',
      title: 'Security Operations Analyst',
      description: 'Onderzoek, reageer en hunt voor bedreigingen met Microsoft Sentinel, Microsoft Defender XDR en Security Copilot',
      category: 'Security & Compliance',
      level: 'Advanced',
      duration: { days: 4, format: 'days' },
      price: { amount: 1595, currency: 'EUR' },
      
      overview: 'Uitgebreide training voor security professionals die organisatierisico\'s verminderen door snel actieve aanvallen te verhelpen, te adviseren over verbeteringen in threat protection, en bedreigingen te onderzoeken in cloud en on-premises omgevingen.',
      
      learningObjectives: [
        'Beheer een security operations omgeving',
        'Configureer protections en detections',
        'Beheer incident response met Microsoft Defender XDR',
        'Onderzoek en reageer met Microsoft Sentinel',
        'Hunt voor bedreigingen met KQL en geavanceerde analytics',
        'Implementeer en gebruik Microsoft Security Copilot'
      ],
      
      prerequisites: [
        'Fundamenteel begrip van Microsoft 365',
        'Basiskennis van Azure services',
        'Begrip van security concepten',
        'Bekendheid met Windows en Linux operating systems'
      ],
      
      targetAudience: [
        'Security Operations Analysts',
        'SOC Analysts',
        'Security Engineers',
        'Threat Intelligence Analysts',
        'Incident Responders'
      ],
      
      certification: {
        available: true,
        name: 'Security Operations Analyst Associate',
        examCode: 'SC-200',
        provider: 'Microsoft'
      },
      
      modules: [
        {
          title: 'Beheer Security Operations Omgeving',
          topics: [
            'Configureer Microsoft Defender XDR',
            'Beheer assets en environments',
            'Ontwerp Microsoft Sentinel workspace',
            'Ingest data sources naar Sentinel',
            'Configureer automated investigation'
          ]
        },
        {
          title: 'Configureer Protections en Detections',
          topics: [
            'Configureer protections in Defender',
            'Configureer custom detection rules',
            'Beheer alerts en suppression',
            'Configureer analytics rules in Sentinel',
            'Implementeer behavioral analytics'
          ]
        },
        {
          title: 'Beheer Incident Response',
          topics: [
            'Reageer op alerts in Defender portal',
            'Onderzoek device timelines',
            'Reageer op Defender for Endpoint alerts',
            'Onderzoek Microsoft 365 activiteiten',
            'Reageer op incidents in Sentinel'
          ]
        },
        {
          title: 'Implementeer Microsoft Security Copilot',
          topics: [
            'Creëer en gebruik promptbooks',
            'Beheer sources en plugins',
            'Implementeer connectors',
            'Identificeer bedreigingen met Copilot',
            'Onderzoek incidents met AI'
          ]
        },
        {
          title: 'Hunt voor Bedreigingen',
          topics: [
            'Hunt met KQL in Defender XDR',
            'Interpreteer threat analytics',
            'Creëer custom hunting queries',
            'Beheer threat indicators',
            'Analyseer attack vector coverage (MITRE ATT&CK)'
          ]
        },
        {
          title: 'Geavanceerde Sentinel Operations',
          topics: [
            'Creëer hunting queries',
            'Gebruik hunting bookmarks',
            'Creëer en configureer workbooks',
            'Beheer archived log data',
            'Creëer en monitor search jobs'
          ]
        }
      ],
      
      highlights: [
        'Hands-on met Microsoft Sentinel',
        'Real-world incident response scenario\'s',
        'Geavanceerde threat hunting met KQL',
        'Microsoft Security Copilot integratie',
        'SC-200 examen voorbereiding'
      ],
      
      instructor: {
        id: 'soc-expert-instructor',
        name: 'Michael Torres',
        title: 'Security Operations Lead',
        bio: 'SOC manager met 10+ jaar ervaring in security operations en incident response',
        certifications: ['SC-200', 'SC-300', 'AZ-500', 'CISSP'],
        specialties: ['Security Operations', 'Threat Hunting', 'Incident Response', 'Microsoft Sentinel']
      },
      
      deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
      maxParticipants: 16,
      featured: true,
      tags: ['SC-200', 'Security', 'Microsoft Sentinel', 'Defender XDR', 'Threat Hunting', 'SOC'],
      
      isPublished: true,
      publishedAt: '2024-11-18T08:00:00Z',
      updatedAt: '2024-11-18T08:00:00Z',
      order: 12
    }
  }
};
