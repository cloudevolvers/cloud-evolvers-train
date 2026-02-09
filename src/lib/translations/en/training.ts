export default {
  title: "Microsoft Training Programs",
  subtitle: "Expert-designed professional training for your career development",
  overview: {
    title: "Professional Training Courses",
    subtitle: "Master Microsoft technologies with our comprehensive training programs. From Azure cloud fundamentals to advanced AI development, find the perfect course that aligns with your career goals.",
    stats: {
      totalCourses: "Total Courses",
      featuredCourses: "Featured Courses",
      withCertification: "With Certification",
      categories: "Categories"
    },
    filters: {
      all: "All",
      search: "Search courses...",
      category: "Category",
      level: "Level",
      featuredOnly: "Featured Only",
      sortBy: "Sort by",
      sortOptions: {
        title: "Title",
        level: "Level",
        duration: "Duration"
      }
    },
    loadingText: "Loading training courses..."
  },
  popular: {
    title: "Popular Courses",
    badge: "Most Chosen",
    courses: [
      {
        code: "AZ-104",
        name: "Azure Administrator Associate",
        level: "Advanced",
        duration: "4 days",
        description: "Master Azure administration and complete resource management. Learn to manage identities, governance, storage, compute, and virtual networks in Azure.",
        highlights: ["Manage virtual machines & containers", "Configure storage & networking", "Implement monitoring & backup", "Azure Active Directory integration"]
      },
      {
        code: "AZ-900",
        name: "Azure Fundamentals",
        level: "Beginner",
        duration: "2 days",
        description: "Perfect introduction to Azure cloud concepts and services. Build foundational knowledge for cloud computing and Microsoft Azure.",
        highlights: ["Cloud computing concepts", "Azure core services", "Security & compliance", "Pricing models & support"]
      },
      {
        code: "AZ-305",
        name: "Azure Solutions Architect Expert",
        level: "Expert",
        duration: "5 days",
        description: "Design scalable and secure enterprise Azure solutions. Master advanced architectural patterns and best practices for complex environments.",
        highlights: ["Solution architecture design", "Security & governance strategies", "Cost optimization", "Migration & modernization"]
      },
      {
        code: "MS-102",
        name: "Microsoft 365 Administrator Expert",
        level: "Expert",
        duration: "5 days",
        description: "Complete Microsoft 365 administration and security management. Implement and manage Microsoft 365 workloads and applications.",
        highlights: ["Identity & access management", "Teams & SharePoint admin", "Security & compliance", "Device & app management"]
      },
      {
        code: "AZ-204",
        name: "Azure Developer Associate",
        level: "Advanced",
        duration: "4 days",
        description: "Develop cloud solutions on Microsoft Azure. Build end-to-end solutions using Azure compute, storage, and security services.",
        highlights: ["Azure compute solutions", "Azure storage development", "Security implementation", "Monitoring & optimization"]
      },
      {
        code: "AZ-500",
        name: "Azure Security Engineer Associate",
        level: "Advanced",
        duration: "4 days",
        description: "Implement comprehensive Azure security controls. Secure identities, protect data, configure security tools, and respond to threats.",
        highlights: ["Identity & access security", "Platform protection", "Data & application security", "Security operations"]
      },
      {
        code: "MS-900",
        name: "Microsoft 365 Fundamentals",
        level: "Beginner",
        duration: "1 day",
        description: "Introduction to Microsoft 365 productivity and collaboration services. Understand cloud concepts and Microsoft 365 core services.",
        highlights: ["M365 core services", "Security & compliance", "Pricing & licensing", "Support options"]
      },
      {
        code: "PL-900",
        name: "Power Platform Fundamentals",
        level: "Beginner",
        duration: "2 days",
        description: "Get started with Microsoft Power Platform. Learn Power BI, Power Apps, Power Automate, and Power Virtual Agents fundamentals.",
        highlights: ["Power BI analytics", "Power Apps development", "Power Automate workflows", "Power Virtual Agents"]
      },
      {
        code: "SC-900",
        name: "Security, Compliance & Identity Fundamentals",
        level: "Beginner",
        duration: "1 day",
        description: "Build foundational knowledge of security, compliance, and identity concepts across Microsoft cloud services.",
        highlights: ["Security concepts", "Identity & access management", "Compliance solutions", "Risk management"]
      },
      {
        code: "AZ-400",
        name: "Azure DevOps Engineer Expert",
        level: "Expert",
        duration: "5 days",
        description: "Design and implement DevOps practices. Configure and manage source control, facilitate communication, and implement continuous integration.",
        highlights: ["DevOps strategy", "Source control", "Continuous integration", "Infrastructure as code"]
      }
    ]
  },
  azure: {
    title: "Azure Certifications",
    subtitle: "Complete Azure learning path from fundamentals to expert level",
    courses: [
      { code: "AZ-900", name: "Azure Fundamentals", level: "Beginner" },
      { code: "AZ-104", name: "Azure Administrator Associate", level: "Advanced" },
      { code: "AZ-204", name: "Azure Developer Associate", level: "Advanced" },
      { code: "AZ-305", name: "Azure Solutions Architect Expert", level: "Expert" },
      { code: "AZ-500", name: "Azure Security Engineer Associate", level: "Advanced" },
      { code: "AZ-400", name: "Azure DevOps Engineer Expert", level: "Expert" },
      { code: "AZ-700", name: "Azure Network Engineer Associate", level: "Advanced" },
      { code: "AI-102", name: "Azure AI Engineer Associate", level: "Advanced" },
      { code: "DP-100", name: "Azure Data Scientist Associate", level: "Advanced" },
      { code: "DP-203", name: "Azure Data Engineer Associate", level: "Advanced" }
    ],
    moreText: "+15 additional Azure certifications available"
  },
  microsoft365: {
    title: "Microsoft 365 & Power Platform",
    subtitle: "Modern workplace and low-code solutions",
    courses: [
      { code: "MS-900", name: "Microsoft 365 Fundamentals", level: "Beginner" },
      { code: "MS-102", name: "Microsoft 365 Administrator Expert", level: "Expert" },
      { code: "MS-500", name: "Microsoft 365 Security Administrator", level: "Advanced" },
      { code: "MS-700", name: "Managing Microsoft Teams", level: "Advanced" },
      { code: "Custom", name: "Microsoft 365 Copilot Mastery", level: "Advanced" },
      { code: "PL-900", name: "Power Platform Fundamentals", level: "Beginner" },
      { code: "PL-300", name: "Power BI Data Analyst Associate", level: "Advanced" },
      { code: "PL-400", name: "Power Platform Developer Associate", level: "Advanced" },
      { code: "Custom", name: "Power Platform Automation Bootcamp", level: "Advanced" },
      { code: "SC-900", name: "Security, Compliance & Identity Fundamentals", level: "Beginner" }
    ]
  },
  detail: {
    backToTraining: 'Back to Training',
    readyToTransform: 'Ready to transform your cloud skills?',
    joinProfessionals: 'Join thousands of professionals who have mastered {title}',
    duration: 'Duration',
    investment: 'Investment',
    specialOffer: 'Special Offer',
    intensiveTraining: 'Intensive Training',
    contactForPricing: 'Contact for pricing',
    daysSingle: 'day',
    daysPlural: 'days',
    groupSize: 'Group Size',
    minParticipants: 'Minimum 6 participants',
    startLearningJourney: 'Start your learning journey',
    formDescription: 'Ready to advance your cloud expertise? Book your training and join professionals mastering Azure.',
    notFound: 'Training Not Found',
    notFoundDescription: 'The training course you are looking for could not be found.',
  },
  courseCard: {
    featured: "Featured",
    new: "New",
    viewCourseDetails: "View Course Details",
    showingResults: "Showing {count} of {total} courses",
    searchResults: "for \"{term}\""
  },
  courses: {
    "azure-administrator-mastery": {
      title: "Azure Administrator Mastery (AZ-104)",
      description: "Master advanced Azure administration with comprehensive resource management skills"
    },
    "azure-fundamentals": {
      title: "Azure Fundamentals (AZ-900)",
      description: "Build foundational knowledge of Azure cloud services and core concepts"
    },
    "azure-developer": {
      title: "Azure Developer Associate (AZ-204)",
      description: "Develop cloud solutions on Microsoft Azure with end-to-end solutions"
    },
    "azure-solutions-architect": {
      title: "Azure Solutions Architect Expert (AZ-305)",
      description: "Design scalable and secure enterprise Azure solutions"
    },
    "azure-security-engineer": {
      title: "Azure Security Engineer Associate (AZ-500)",
      description: "Implement comprehensive Azure security controls and secure identities"
    },
    "microsoft-365-fundamentals": {
      title: "Microsoft 365 Fundamentals (MS-900)",
      description: "Build foundational knowledge of Microsoft 365 cloud productivity services"
    },
    "power-platform-fundamentals": {
      title: "Power Platform Fundamentals (PL-900)",
      description: "Learn the fundamentals of Microsoft Power Platform for business automation"
    },
    "azure-ai-fundamentals": {
      title: "Azure AI Fundamentals (AI-900)",
      description: "Explore the fundamentals of artificial intelligence in Azure"
    },
    "azure-devops-engineer": {
      title: "Azure DevOps Engineer Expert (AZ-400)",
      description: "Implement DevOps practices for continuous integration and deployment"
    },
    "azure-network-engineer": {
      title: "Azure Network Engineer Associate (AZ-700)",
      description: "Design and implement Azure networking solutions"
    },
    "azure-virtual-desktop": {
      title: "Azure Virtual Desktop Specialty (AZ-140)",
      description: "Implement and manage Azure Virtual Desktop environments"
    },
    "power-platform-automation": {
      title: "Power Platform Developer Associate (PL-400)",
      description: "Develop advanced automation solutions with Power Platform"
    },
    "security-compliance-identity-fundamentals": {
      title: "Security, Compliance & Identity Fundamentals (SC-900)",
      description: "Learn the fundamentals of security and compliance in Microsoft cloud"
    },
    "microsoft-365-copilot-mastery": {
      title: "Microsoft 365 Copilot Mastery",
      description: "Master Microsoft 365 Copilot for maximum productivity"
    },
    "azure-ai-developer-bootcamp": {
      title: "Azure AI Developer Bootcamp",
      description: "Intensive training for AI development on Azure platform"
    },
    "azure-security-fundamentals": {
      title: "Azure Security Fundamentals",
      description: "Fundamental security concepts for Azure cloud environments"
    },
    "azure-iot-developer": {
      title: "Azure IoT Developer Specialty (AZ-220)",
      description: "Develop IoT solutions with Azure IoT services"
    },
    "azure-ai-developer": {
      title: "Azure AI Developer Associate (AI-102)",
      description: "Build AI solutions with Azure Cognitive Services"
    },
    "microsoft-365-security-administrator": {
      title: "Microsoft 365 Security Administrator Associate (MS-500)",
      description: "Implement security and compliance in Microsoft 365"
    },
    "microsoft-365-identity-access-administrator": {
      title: "Microsoft 365 Identity and Access Administrator Associate (MS-500)",
      description: "Manage identity and access in Microsoft 365 environments"
    },
    "teams-advanced-administration": {
      title: "Teams Advanced Administration",
      description: "Advanced administration of Microsoft Teams environments"
    },
    "azure-stack-hub": {
      title: "Azure Stack Hub",
      description: "Implement and manage Azure Stack Hub hybrid cloud solutions"
    },
    "azure-support-engineer": {
      title: "Azure Support Engineer",
      description: "Professional support and troubleshooting for Azure"
    },
    "windows-server-hybrid-administrator": {
      title: "Windows Server Hybrid Administrator Associate (AZ-800)",
      description: "Administer Windows Server in hybrid environments"
    },
    "windows-server-hybrid-infrastructure": {
      title: "Windows Server Hybrid Infrastructure",
      description: "Implement hybrid infrastructure with Windows Server"
    }
  },
  excellence: {
    title: "Azure & Microsoft Stack Excellence",
    subtitle: "Professional training designed by experts for your career development in Azure and Microsoft technologies",
    cta: "Discover Azure & Microsoft Excellence",
    ctaDescription: "Transform your career with our Azure and Microsoft Stack expertise"
  },
  realWorldExperience: {
    title: "Real-World Experience",
    subtitle: "Every module builds on actual Azure projects from our consulting practice",
    features: {
      actualProjects: {
        title: "Actual Azure Projects",
        description: "Every module builds on actual Azure projects from our consulting practice",
        icon: "briefcase"
      },
      flexibleScheduling: {
        title: "Flexible Scheduling",
        description: "Sessions scheduled for European time zones with same-day recordings available",
        icon: "calendar"
      },
      continuousImprovement: {
        title: "Continuous Improvement",
        description: "Continuously updated with the latest Azure developments and best practices",
        icon: "trending-up"
      },
      transparentOutcomes: {
        title: "Transparent Outcomes",
        description: "We track certification success rates and provide realistic completion timelines",
        icon: "target"
      }
    }
  },
  grid: {
    keyTopics: "Key Topics",
    duration: "Duration",
    available: "Available"
  }
}
