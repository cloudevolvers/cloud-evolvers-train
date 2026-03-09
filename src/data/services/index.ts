import type { AllServicesTranslations } from '../../types/services';

export const allServices: AllServicesTranslations = {
  'cloud-management': {
    en: {
      id: 'cloud-management',
      title: 'Cloud Management',
      slug: 'cloud-management',
      description: 'Expert management of your Azure infrastructure with 24/7 monitoring and support.',
      icon: 'Cloud',
      features: ['Resource optimization', 'Cost monitoring', 'Performance tuning', 'Infrastructure as Code'],
      sections: [
        {
          title: 'What We Offer',
          items: [
            { title: '24/7 Monitoring and Support', description: 'Continuous monitoring of your infrastructure with rapid response to incidents' },
            { title: 'Cost Optimization', description: 'Regular reviews and recommendations to reduce cloud spending' },
            { title: 'Performance Tuning', description: 'Optimization of resources for maximum performance' },
            { title: 'Infrastructure as Code', description: 'Implementation of IaC practices for scalable and consistent deployments' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Contact us today to learn how our Cloud Management services can transform your Azure experience.',
      isPublished: true,
      publishedAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      order: 1,
    },
    nl: {
      id: 'cloud-management',
      title: 'Cloud Beheer',
      slug: 'cloud-management',
      description: 'Deskundig beheer van uw Azure infrastructuur met 24/7 monitoring en ondersteuning.',
      icon: 'Cloud',
      features: ['Resource optimalisatie', 'Kosten monitoring', 'Prestatie optimalisatie', 'Infrastructure as Code'],
      sections: [
        {
          title: 'Wat Wij Bieden',
          items: [
            { title: '24/7 Monitoring en Ondersteuning', description: 'Continue monitoring van uw infrastructuur met snelle reactie op incidenten' },
            { title: 'Kosten Optimalisatie', description: 'Regelmatige reviews en aanbevelingen om cloud uitgaven te verlagen' },
            { title: 'Prestatie Optimalisatie', description: 'Optimalisatie van resources voor maximale prestaties' },
            { title: 'Infrastructure as Code', description: 'Implementatie van IaC praktijken voor schaalbare en consistente deployments' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Neem vandaag nog contact met ons op om te ontdekken hoe onze Cloud Beheer services uw Azure ervaring kunnen transformeren.',
      isPublished: true,
      publishedAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      order: 1,
    },
  },
  'azure-monitoring': {
    en: {
      id: 'azure-monitoring',
      title: 'Azure Monitoring',
      slug: 'azure-monitoring',
      description: 'Real-time visibility into your Azure resources with custom dashboards and alerts',
      icon: 'LineChart',
      features: ['24/7 resource monitoring', 'Custom alert configurations', 'Performance analytics', 'Resource usage trends'],
      sections: [
        {
          title: 'Comprehensive Resource Monitoring',
          description: 'Our 24/7 monitoring solution keeps a constant watch on your Azure resources, tracking performance metrics, availability, and critical events. We identify anomalies and respond quickly to maintain optimal system health.',
        },
        {
          title: 'Custom Alert Configuration',
          description: 'We work with you to design and implement tailored alert systems that notify the right people at the right time. Our alert configurations are fine-tuned to minimize false positives while ensuring critical issues never go unnoticed.',
        },
        {
          title: 'Performance Analytics',
          description: 'Our advanced analytics tools transform monitoring data into actionable insights. We help you understand performance patterns, identify bottlenecks, and make data-driven decisions to improve your Azure infrastructure.',
        },
        {
          title: 'Resource Usage Trends',
          description: 'Track resource utilization over time to identify growth patterns, seasonal variations, and optimization opportunities. Our trend analysis helps with capacity planning and cost management.',
        },
      ],
      benefits: [
        { title: 'Proactive Issue Prevention', description: 'Identify and address potential problems before they affect your services' },
        { title: 'Improved System Reliability', description: 'Ensure consistent performance and minimize downtime' },
        { title: 'Optimized Resource Allocation', description: 'Make informed decisions about resource scaling based on actual usage data' },
        { title: 'Cost Control', description: 'Identify underutilized resources and opportunities for consolidation' },
        { title: 'Enhanced Security Posture', description: 'Monitor for unusual activity patterns that may indicate security threats' },
      ],
      closingText: 'Contact us today to learn how our Azure Monitoring services can enhance the visibility, performance, and reliability of your cloud infrastructure.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2024-04-10T00:00:00Z',
      order: 2,
    },
    nl: {
      id: 'azure-monitoring',
      title: 'Azure Monitoring',
      slug: 'azure-monitoring',
      description: 'Real-time zichtbaarheid van uw Azure resources met aangepaste dashboards en alerts',
      icon: 'LineChart',
      features: ['24/7 resource monitoring', 'Aangepaste alert configuraties', 'Prestatie analytics', 'Resource gebruiks trends'],
      sections: [
        {
          title: 'Uitgebreide Resource Monitoring',
          description: 'Onze 24/7 monitoring oplossing houdt constant uw Azure resources in de gaten, en volgt prestatie metrics, beschikbaarheid en kritieke gebeurtenissen. We identificeren afwijkingen en reageren snel om optimale systeemgezondheid te behouden.',
        },
        {
          title: 'Aangepaste Alert Configuratie',
          description: 'We werken samen met u om op maat gemaakte alert systemen te ontwerpen en implementeren die de juiste mensen op het juiste moment informeren. Onze alert configuraties zijn fijn afgesteld om valse alarmen te minimaliseren terwijl kritieke problemen nooit onopgemerkt blijven.',
        },
        {
          title: 'Prestatie Analytics',
          description: 'Onze geavanceerde analytics tools transformeren monitoring data in bruikbare inzichten. We helpen u prestatie patronen te begrijpen, knelpunten te identificeren en data-gedreven beslissingen te nemen om uw Azure infrastructuur te verbeteren.',
        },
        {
          title: 'Resource Gebruiks Trends',
          description: 'Volg resource gebruik over tijd om groei patronen, seizoensvariaties en optimalisatie mogelijkheden te identificeren. Onze trend analyse helpt bij capaciteitsplanning en kostenbeheer.',
        },
      ],
      benefits: [
        { title: 'Proactieve Probleem Preventie', description: 'Identificeer en behandel potentiële problemen voordat ze uw services beïnvloeden' },
        { title: 'Verbeterde Systeem Betrouwbaarheid', description: 'Zorg voor consistente prestaties en minimaliseer downtime' },
        { title: 'Geoptimaliseerde Resource Toewijzing', description: 'Neem geïnformeerde beslissingen over resource scaling gebaseerd op werkelijk gebruiksdata' },
        { title: 'Kostenbeheersing', description: 'Identificeer onderbenuttte resources en mogelijkheden voor consolidatie' },
        { title: 'Verbeterde Beveiliging', description: 'Monitor voor ongebruikelijke activiteit patronen die kunnen wijzen op beveiligingsdreigingen' },
      ],
      closingText: 'Neem vandaag nog contact met ons op om te leren hoe onze Azure Monitoring services de zichtbaarheid, prestaties en betrouwbaarheid van uw cloud infrastructuur kunnen verbeteren.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2024-04-10T00:00:00Z',
      order: 2,
    },
  },
  'security-compliance': {
    en: {
      id: 'security-compliance',
      title: 'Security & Compliance',
      slug: 'security-compliance',
      description: 'Comprehensive security management and compliance monitoring for your Azure environment.',
      icon: 'Shield',
      features: ['Threat detection', 'Compliance frameworks', 'Security assessments', 'Zero Trust implementation'],
      sections: [
        {
          title: 'Our Approach',
          description: 'We help organizations implement robust security practices and maintain compliance with industry standards and regulations. Our security experts conduct thorough assessments, implement protective measures, and provide continuous monitoring to safeguard your cloud environment.',
        },
        {
          title: 'Key Services',
          items: [
            { title: 'Threat Detection and Response', description: 'Advanced monitoring and swift response to security incidents' },
            { title: 'Compliance Management', description: 'Implementation and maintenance of compliance frameworks' },
            { title: 'Security Assessments', description: 'Regular evaluation of your security posture' },
            { title: 'Zero Trust Architecture', description: 'Implementation of modern security principles' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Secure your Azure environment today with our expert security services.',
      isPublished: true,
      publishedAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
      order: 2,
    },
    nl: {
      id: 'security-compliance',
      title: 'Beveiliging & Compliance',
      slug: 'security-compliance',
      description: 'Uitgebreid beveiligingsbeheer en compliance monitoring voor uw Azure omgeving.',
      icon: 'Shield',
      features: ['Dreigingsdetectie', 'Compliance frameworks', 'Beveiligingsassessments', 'Zero Trust implementatie'],
      sections: [
        {
          title: 'Onze Aanpak',
          description: 'We helpen organisaties om robuuste beveiligingspraktijken te implementeren en compliance te behouden met industrie standaarden en regelgeving. Onze beveiligingsexperts voeren grondige assessments uit, implementeren beschermende maatregelen en bieden continue monitoring om uw cloud omgeving te beveiligen.',
        },
        {
          title: 'Belangrijkste Services',
          items: [
            { title: 'Dreigingsdetectie en Response', description: 'Geavanceerde monitoring en snelle reactie op beveiligingsincidenten' },
            { title: 'Compliance Beheer', description: 'Implementatie en onderhoud van compliance frameworks' },
            { title: 'Beveiligingsassessments', description: 'Regelmatige evaluatie van uw beveiligingspositie' },
            { title: 'Zero Trust Architectuur', description: 'Implementatie van moderne beveiligingsprincipes' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Beveilig uw Azure omgeving vandaag nog met onze expert beveiligingsservices.',
      isPublished: true,
      publishedAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
      order: 2,
    },
  },
  'cost-optimization': {
    en: {
      id: 'cost-optimization',
      title: 'Cost Optimization',
      slug: 'cost-optimization',
      description: 'Identify savings opportunities and optimize your Azure spending',
      icon: 'PiggyBank',
      features: ['Spending analysis', 'Resource right-sizing', 'Reservation recommendations', 'Budget forecasting'],
      sections: [
        {
          title: 'Comprehensive Spending Analysis',
          description: 'Our detailed analysis provides complete visibility into your Azure expenditure across subscriptions, resource groups, and services. We identify spending patterns, anomalies, and trends to understand where your cloud budget is going.',
        },
        {
          title: 'Resource Right-sizing Recommendations',
          description: 'Many organizations overprovision cloud resources to ensure performance. Our experts analyze resource usage patterns to recommend optimal configurations that maintain performance while reducing costs.',
        },
        {
          title: 'Reservation and Commitment Recommendations',
          description: "We identify opportunities to leverage Azure's discount options such as Reserved Instances and Savings Plans based on your historical usage patterns, potentially saving 40-70% compared to pay-as-you-go pricing.",
        },
        {
          title: 'Budget Forecasting',
          description: 'Our advanced forecasting tools predict future Azure spending based on historical patterns and planned workloads, enabling proactive budget management and preventing unexpected cost overruns.',
        },
      ],
      benefits: [
        { title: 'Immediate Cost Reduction', description: 'Identify and eliminate waste quickly to see fast ROI' },
        { title: 'Long-term Savings Strategy', description: 'Develop sustainable cost management practices' },
        { title: 'Enhanced Visibility', description: 'Gain clarity on exactly where and how your cloud budget is spent' },
        { title: 'Optimized Resource Utilization', description: "Ensure you're getting maximum value from every Azure resource" },
        { title: 'Budget Predictability', description: 'Avoid unexpected billing surprises with accurate forecasting' },
      ],
      closingText: "Whether you're facing rapid cloud cost increases or simply want to ensure you're using your Azure budget efficiently, our Cost Optimization service delivers measurable savings while maintaining or improving your cloud infrastructure performance. Contact us today for a complimentary cost assessment to see how much you could save.",
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2024-04-10T00:00:00Z',
      order: 3,
    },
    nl: {
      id: 'cost-optimization',
      title: 'Kosten Optimalisatie',
      slug: 'cost-optimization',
      description: 'Identificeer besparingsmogelijkheden en optimaliseer uw Azure uitgaven',
      icon: 'PiggyBank',
      features: ['Uitgaven analyse', 'Resource right-sizing', 'Reservering aanbevelingen', 'Budget voorspelling'],
      sections: [
        {
          title: 'Uitgebreide Uitgaven Analyse',
          description: 'Onze gedetailleerde analyse biedt volledige zichtbaarheid van uw Azure uitgaven over abonnementen, resource groepen en services. We identificeren uitgavenpatronen, anomalieën en trends om te begrijpen waar uw cloud budget naartoe gaat.',
        },
        {
          title: 'Resource Right-sizing Aanbevelingen',
          description: 'Vele organisaties over-provisioneren cloud resources om prestaties te garanderen. Onze experts analyseren resource gebruik patronen om optimale configuraties aan te bevelen die prestaties behouden terwijl kosten worden gereduceerd.',
        },
        {
          title: 'Reservering en Commitment Aanbevelingen',
          description: "We identificeren mogelijkheden om Azure's kortingsopties zoals Reserved Instances en Savings Plans te benutten gebaseerd op uw historische gebruikspatronen, met mogelijke besparingen van 40-70% vergeleken met pay-as-you-go prijzen.",
        },
        {
          title: 'Budget Voorspelling',
          description: 'Onze geavanceerde voorspelling tools voorspellen toekomstige Azure uitgaven gebaseerd op historische patronen en geplande workloads, wat proactief budgetbeheer mogelijk maakt en onverwachte kostenoverschrijdingen voorkomt.',
        },
      ],
      benefits: [
        { title: 'Directe Kostenreductie', description: 'Identificeer en elimineer verspilling snel voor snelle ROI' },
        { title: 'Lange-termijn Besparingsstrategie', description: 'Ontwikkel duurzame kostenbeheer praktijken' },
        { title: 'Verbeterde Zichtbaarheid', description: 'Krijg duidelijkheid over precies waar en hoe uw cloud budget wordt besteed' },
        { title: 'Geoptimaliseerd Resource Gebruik', description: 'Zorg ervoor dat u maximale waarde krijgt uit elke Azure resource' },
        { title: 'Budget Voorspelbaarheid', description: 'Vermijd onverwachte factuurverrassingen met nauwkeurige voorspellingen' },
      ],
      closingText: 'Of u nu te maken heeft met snelle cloud kostenstijgingen of gewoon wilt zorgen dat u uw Azure budget efficiënt gebruikt, onze Kosten Optimalisatie service levert meetbare besparingen terwijl uw cloud infrastructuur prestaties behouden of verbeterd worden. Neem vandaag nog contact met ons op voor een gratis kosten assessment om te zien hoeveel u zou kunnen besparen.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2024-04-10T00:00:00Z',
      order: 3,
    },
  },
  'enterprise-file-transfer': {
    en: {
      id: 'enterprise-file-transfer',
      title: 'Enterprise File Transfer',
      slug: 'enterprise-file-transfer',
      description: 'Secure, reliable file sharing for businesses with advanced security and controls',
      icon: 'FileTransfer',
      features: ['End-to-end encryption', 'Granular access controls', 'Transfer automation', 'Detailed audit logs'],
      sections: [
        {
          title: 'End-to-End Encryption',
          description: 'Protect your data both in transit and at rest with military-grade encryption. Our solution ensures that only authorized recipients can access your files, maintaining confidentiality throughout the entire transfer process.',
        },
        {
          title: 'Granular Access Controls',
          description: "Define precisely who can access, view, edit, or share specific files and folders. Our role-based permission system gives you complete control over your data, allowing you to tailor access levels to meet your organization's needs.",
        },
        {
          title: 'Transfer Automation',
          description: 'Streamline your workflows with automated file transfers. Schedule recurring transfers, set up conditional transfers based on triggers, and integrate with your existing business processes to save time and reduce manual errors.',
        },
        {
          title: 'Detailed Audit Logs',
          description: 'Maintain comprehensive records of all file activities with our detailed audit logging system. Track who accessed files, when they were accessed, and what actions were performed, enabling you to demonstrate compliance and investigate any security concerns.',
        },
      ],
      benefits: [
        { title: 'Enhanced Security', description: 'Protect sensitive information with advanced security features' },
        { title: 'Improved Compliance', description: 'Meet regulatory requirements with comprehensive audit trails and security controls' },
        { title: 'Increased Efficiency', description: 'Automate routine file transfers and streamline business processes' },
        { title: 'Reduced Risk', description: 'Minimize the chance of data leaks with controlled sharing capabilities' },
        { title: 'Scalable Solution', description: 'Handle everything from occasional transfers to high-volume enterprise needs' },
      ],
      closingText: 'Whether you need to securely share financial documents, collaborate on sensitive projects, or automate file exchanges with business partners, our Enterprise File Transfer solution provides the tools you need to do so securely and efficiently. Contact us today to discover how our Enterprise File Transfer service can strengthen your data security while improving operational efficiency.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2024-04-10T00:00:00Z',
      order: 3,
    },
    nl: {
      id: 'enterprise-file-transfer',
      title: 'Enterprise Bestandsoverdracht',
      slug: 'enterprise-file-transfer',
      description: 'Veilige, betrouwbare bestandsdeling voor bedrijven met geavanceerde beveiliging en controles',
      icon: 'FileTransfer',
      features: ['End-to-end encryptie', 'Granulaire toegangscontroles', 'Transfer automatisering', 'Gedetailleerde audit logs'],
      sections: [
        {
          title: 'End-to-End Encryptie',
          description: 'Bescherm uw data zowel tijdens transport als in rust met militaire-grade encryptie. Onze oplossing zorgt ervoor dat alleen geautoriseerde ontvangers toegang hebben tot uw bestanden, en behoudt vertrouwelijkheid gedurende het hele overdracht proces.',
        },
        {
          title: 'Granulaire Toegangscontroles',
          description: 'Definieer precies wie specifieke bestanden en mappen kan benaderen, bekijken, bewerken of delen. Ons op rollen gebaseerde permissie systeem geeft u volledige controle over uw data, waardoor u toegangsniveaus kunt afstemmen op de behoeften van uw organisatie.',
        },
        {
          title: 'Transfer Automatisering',
          description: 'Stroomijn uw workflows met geautomatiseerde bestandsoverdrachten. Plan terugkerende overdrachten, stel conditionele overdrachten in gebaseerd op triggers, en integreer met uw bestaande bedrijfsprocessen om tijd te besparen en handmatige fouten te verminderen.',
        },
        {
          title: 'Gedetailleerde Audit Logs',
          description: 'Houd uitgebreide records bij van alle bestandsactiviteiten met ons gedetailleerde audit logging systeem. Volg wie bestanden heeft benaderd, wanneer ze werden benaderd, en welke acties werden uitgevoerd, waardoor u compliance kunt demonstreren en beveiligingsproblemen kunt onderzoeken.',
        },
      ],
      benefits: [
        { title: 'Verbeterde Beveiliging', description: 'Bescherm gevoelige informatie met geavanceerde beveiligingsfuncties' },
        { title: 'Verbeterde Compliance', description: 'Voldoe aan regelgevingseisen met uitgebreide audit trails en beveiligingscontroles' },
        { title: 'Verhoogde Efficiëntie', description: 'Automatiseer routine bestandsoverdrachten en stroomijn bedrijfsprocessen' },
        { title: 'Verminderd Risico', description: 'Minimaliseer de kans op data lekken met gecontroleerde deelmogelijkheden' },
        { title: 'Schaalbare Oplossing', description: 'Behandel alles van incidentele overdrachten tot enterprise behoeften met hoog volume' },
      ],
      closingText: 'Of u nu veilig financiële documenten moet delen, moet samenwerken aan gevoelige projecten, of bestandsuitwisselingen met zakenpartners moet automatiseren, onze Enterprise Bestandsoverdracht oplossing biedt de tools die u nodig heeft om dit veilig en efficiënt te doen. Neem vandaag nog contact met ons op om te ontdekken hoe onze Enterprise Bestandsoverdracht service uw databeveiliging kan versterken terwijl operationele efficiëntie wordt verbeterd.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2024-04-10T00:00:00Z',
      order: 3,
    },
  },
  'microsoft-365-copilot': {
    en: {
      id: 'microsoft-365-copilot',
      title: 'Microsoft 365 Copilot',
      slug: 'microsoft-365-copilot',
      description: 'Maximize productivity with AI-powered assistance across Microsoft 365.',
      icon: 'Bot',
      features: ['AI-powered assistance', 'Productivity optimization', 'Integration with Microsoft 365', 'User training and support'],
      sections: [
        {
          title: 'What is Microsoft 365 Copilot?',
          description: "Microsoft 365 Copilot combines the power of large language models (LLMs) with your organization's data in Microsoft Graph and Microsoft 365 apps to transform the way you work. It acts as an intelligent assistant that helps users create, communicate, and understand information faster and more effectively.",
        },
        {
          title: 'Our Copilot Implementation Services',
          items: [
            { title: 'Readiness Assessment', description: "Evaluate your organization's technical and data environment for Copilot integration" },
            { title: 'Implementation Planning', description: 'Develop a strategic implementation plan customized to your business needs' },
            { title: 'User Training', description: 'Comprehensive training programs to ensure adoption and maximize productivity benefits' },
            { title: 'Integration Support', description: 'Technical assistance with integrating Copilot across your Microsoft 365 environment' },
            { title: 'Content Optimization', description: 'Guidance on optimizing your content and data to get the most out of Copilot' },
          ],
        },
        {
          title: 'Microsoft 365 Copilot Training',
          items: [
            { title: 'Executive Leadership Sessions', description: 'Strategic overview of AI transformation for decision makers' },
            { title: 'Power User Bootcamps', description: 'Advanced techniques for maximizing Copilot across all applications' },
            { title: 'End-User Workshops', description: 'Hands-on training for everyday productivity scenarios' },
            { title: 'Custom Training Modules', description: 'Tailored content specific to your industry and use cases' },
            { title: 'Adoption Strategy', description: 'Change management and user engagement methodologies' },
          ],
        },
        {
          title: 'Microsoft 365 Suite Training',
          items: [
            { title: 'Teams Collaboration Mastery', description: 'Advanced collaboration techniques and best practices' },
            { title: 'SharePoint & OneDrive Optimization', description: 'Document management and workflow automation' },
            { title: 'Power Platform Fundamentals', description: 'Power Apps, Power Automate, and workflow automation training' },
            { title: 'Security & Compliance Training', description: 'Data protection and regulatory compliance best practices' },
          ],
        },
        {
          title: 'Azure Cloud Training',
          items: [
            { title: 'Azure Fundamentals', description: 'Introduction to cloud concepts and Azure services' },
            { title: 'Azure DevOps & CI/CD', description: 'Modern development and deployment practices' },
            { title: 'Azure Security & Governance', description: 'Cloud security frameworks and compliance management' },
            { title: 'Azure AI & Machine Learning', description: 'Implementing AI solutions in the cloud' },
            { title: 'Azure Data & Analytics', description: 'Azure Synapse, Data Factory, and analytics solutions' },
          ],
        },
        {
          title: 'Training Delivery Methods',
          items: [
            { title: 'In-Person Workshops', description: 'On-site training at your location' },
            { title: 'Virtual Classrooms', description: 'Live, interactive online training sessions' },
            { title: 'Self-Paced Learning', description: 'Access to our comprehensive online learning platform' },
            { title: 'Hybrid Programs', description: 'Combination of in-person and virtual training components' },
          ],
        },
      ],
      benefits: [
        { title: 'Enhanced Productivity', description: 'Automate routine tasks and streamline workflows' },
        { title: 'Improved Content Quality', description: 'Generate high-quality content in Word, PowerPoint, and Outlook' },
        { title: 'Better Data Insights', description: 'Extract meaningful insights from your organizational data' },
        { title: 'Reduced Cognitive Load', description: 'Simplify complex tasks and reduce information overload' },
        { title: 'Seamless Integration', description: 'Works within your existing Microsoft 365 applications' },
      ],
      closingText: "Contact us today to learn how Microsoft 365 Copilot can transform your organization's productivity.",
      isPublished: true,
      publishedAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z',
      order: 3,
    },
    nl: {
      id: 'microsoft-365-copilot',
      title: 'Microsoft 365 Copilot',
      slug: 'microsoft-365-copilot',
      description: 'Maximize productivity with AI-powered assistance across Microsoft 365.',
      icon: 'Bot',
      features: ['AI-powered assistance', 'Productivity optimization', 'Integration with Microsoft 365', 'User training and support'],
      sections: [
        {
          title: 'What is Microsoft 365 Copilot?',
          description: "Microsoft 365 Copilot combines the power of large language models (LLMs) with your organization's data in Microsoft Graph and Microsoft 365 apps to transform the way you work. It acts as an intelligent assistant that helps users create, communicate, and understand information faster and more effectively.",
        },
        {
          title: 'Our Copilot Implementation Services',
          items: [
            { title: 'Readiness Assessment', description: "Evaluate your organization's technical and data environment for Copilot integration" },
            { title: 'Implementation Planning', description: 'Develop a strategic implementation plan customized to your business needs' },
            { title: 'User Training', description: 'Comprehensive training programs to ensure adoption and maximize productivity benefits' },
            { title: 'Integration Support', description: 'Technical assistance with integrating Copilot across your Microsoft 365 environment' },
            { title: 'Content Optimization', description: 'Guidance on optimizing your content and data to get the most out of Copilot' },
          ],
        },
        {
          title: 'Microsoft 365 Copilot Training',
          items: [
            { title: 'Executive Leadership Sessions', description: 'Strategic overview of AI transformation for decision makers' },
            { title: 'Power User Bootcamps', description: 'Advanced techniques for maximizing Copilot across all applications' },
            { title: 'End-User Workshops', description: 'Hands-on training for everyday productivity scenarios' },
            { title: 'Custom Training Modules', description: 'Tailored content specific to your industry and use cases' },
            { title: 'Adoption Strategy', description: 'Change management and user engagement methodologies' },
          ],
        },
        {
          title: 'Microsoft 365 Suite Training',
          items: [
            { title: 'Teams Collaboration Mastery', description: 'Advanced collaboration techniques and best practices' },
            { title: 'SharePoint & OneDrive Optimization', description: 'Document management and workflow automation' },
            { title: 'Power Platform Fundamentals', description: 'Power Apps, Power Automate, and workflow automation training' },
            { title: 'Security & Compliance Training', description: 'Data protection and regulatory compliance best practices' },
          ],
        },
        {
          title: 'Azure Cloud Training',
          items: [
            { title: 'Azure Fundamentals', description: 'Introduction to cloud concepts and Azure services' },
            { title: 'Azure DevOps & CI/CD', description: 'Modern development and deployment practices' },
            { title: 'Azure Security & Governance', description: 'Cloud security frameworks and compliance management' },
            { title: 'Azure AI & Machine Learning', description: 'Implementing AI solutions in the cloud' },
            { title: 'Azure Data & Analytics', description: 'Azure Synapse, Data Factory, and analytics solutions' },
          ],
        },
        {
          title: 'Training Delivery Methods',
          items: [
            { title: 'In-Person Workshops', description: 'On-site training at your location' },
            { title: 'Virtual Classrooms', description: 'Live, interactive online training sessions' },
            { title: 'Self-Paced Learning', description: 'Access to our comprehensive online learning platform' },
            { title: 'Hybrid Programs', description: 'Combination of in-person and virtual training components' },
          ],
        },
      ],
      benefits: [
        { title: 'Enhanced Productivity', description: 'Automate routine tasks and streamline workflows' },
        { title: 'Improved Content Quality', description: 'Generate high-quality content in Word, PowerPoint, and Outlook' },
        { title: 'Better Data Insights', description: 'Extract meaningful insights from your organizational data' },
        { title: 'Reduced Cognitive Load', description: 'Simplify complex tasks and reduce information overload' },
        { title: 'Seamless Integration', description: 'Works within your existing Microsoft 365 applications' },
      ],
      closingText: "Contact us today to learn how Microsoft 365 Copilot can transform your organization's productivity.",
      isPublished: true,
      publishedAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z',
      order: 3,
    },
  },
  'cloud-engineering': {
    en: {
      id: 'cloud-engineering',
      title: 'Cloud Engineering',
      slug: 'cloud-engineering',
      description: 'Expert cloud engineering services to design, build, and optimize your Azure infrastructure.',
      icon: 'Network',
      features: ['Architecture design', 'Implementation', 'Migration services', 'Performance optimization'],
      sections: [
        {
          title: 'Our Cloud Engineering Approach',
          description: "We follow a comprehensive, methodical approach to cloud engineering that ensures scalable, secure, and efficient solutions. Our team combines deep Azure technical expertise with strategic business understanding to deliver infrastructure that supports your organization's goals.",
        },
        {
          title: 'Architecture Design',
          items: [
            { title: 'Solution Architecture', description: 'Custom-designed Azure solutions aligned with your business requirements' },
            { title: 'Reference Architectures', description: 'Proven design patterns adapted to your unique needs' },
            { title: 'Architecture Reviews', description: 'Expert assessment of existing cloud implementations' },
          ],
        },
        {
          title: 'Implementation',
          items: [
            { title: 'Infrastructure Deployment', description: 'Efficient and reliable deployment of Azure resources' },
            { title: 'Automation', description: 'CI/CD pipeline setup and Infrastructure as Code implementation' },
            { title: 'Configuration Management', description: 'Consistent, version-controlled configuration practices' },
          ],
        },
        {
          title: 'Migration Services',
          items: [
            { title: 'Migration Strategy', description: 'Comprehensive planning for smooth transitions to Azure' },
            { title: 'Workload Assessment', description: 'Detailed analysis of applications for migration readiness' },
            { title: 'Migration Execution', description: 'Skilled teams to execute migrations with minimal disruption' },
          ],
        },
        {
          title: 'Performance Optimization',
          items: [
            { title: 'Resource Tuning', description: 'Fine-tuning of Azure resources for optimal performance' },
            { title: 'Cost Optimization', description: 'Strategies to reduce waste and maximize cloud investment value' },
            { title: 'Monitoring Implementation', description: 'Comprehensive monitoring solutions for visibility and alerts' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Contact us today to discuss how our Cloud Engineering services can help you build a robust, efficient Azure infrastructure.',
      isPublished: true,
      publishedAt: '2024-01-04T00:00:00Z',
      updatedAt: '2024-01-04T00:00:00Z',
      order: 4,
    },
    nl: {
      id: 'cloud-engineering',
      title: 'Cloud Engineering',
      slug: 'cloud-engineering',
      description: 'Expert cloud engineering services om uw Azure infrastructuur te ontwerpen, bouwen en optimaliseren.',
      icon: 'Network',
      features: ['Architectuur ontwerp', 'Implementatie', 'Migratie services', 'Prestatie optimalisatie'],
      sections: [
        {
          title: 'Onze Cloud Engineering Aanpak',
          description: 'We volgen een uitgebreide, methodische aanpak voor cloud engineering die schaalbare, veilige en efficiënte oplossingen garandeert. Ons team combineert diepe Azure technische expertise met strategisch zakelijk begrip om infrastructuur te leveren die uw organisatiedoelen ondersteunt.',
        },
        {
          title: 'Architectuur Ontwerp',
          items: [
            { title: 'Oplossing Architectuur', description: 'Op maat ontworpen Azure oplossingen afgestemd op uw bedrijfsvereisten' },
            { title: 'Referentie Architecturen', description: 'Bewezen ontwerp patronen aangepast aan uw unieke behoeften' },
            { title: 'Architectuur Reviews', description: 'Expert beoordeling van bestaande cloud implementaties' },
          ],
        },
        {
          title: 'Implementatie',
          items: [
            { title: 'Infrastructuur Deployment', description: 'Efficiënte en betrouwbare deployment van Azure resources' },
            { title: 'Automatisering', description: 'CI/CD pipeline setup en Infrastructure as Code implementatie' },
            { title: 'Configuratie Beheer', description: 'Consistente, versie-gecontroleerde configuratie praktijken' },
          ],
        },
        {
          title: 'Migratie Services',
          items: [
            { title: 'Migratie Strategie', description: 'Uitgebreide planning voor soepele overgangen naar Azure' },
            { title: 'Workload Assessment', description: 'Gedetailleerde analyse van applicaties voor migratie gereedheid' },
            { title: 'Migratie Uitvoering', description: 'Bekwame teams om migraties uit te voeren met minimale verstoring' },
          ],
        },
        {
          title: 'Prestatie Optimalisatie',
          items: [
            { title: 'Resource Tuning', description: 'Fijnafstemming van Azure resources voor optimale prestaties' },
            { title: 'Kosten Optimalisatie', description: 'Strategieën om verspilling te verminderen en cloud investering waarde te maximaliseren' },
            { title: 'Monitoring Implementatie', description: 'Uitgebreide monitoring oplossingen voor zichtbaarheid en alerts' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Neem vandaag nog contact met ons op om te bespreken hoe onze Cloud Engineering services u kunnen helpen bij het bouwen van een robuuste, efficiënte Azure infrastructuur.',
      isPublished: true,
      publishedAt: '2024-01-04T00:00:00Z',
      updatedAt: '2024-01-04T00:00:00Z',
      order: 4,
    },
  },
  'infrastructure-as-code': {
    en: {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Automate infrastructure provisioning and management with code.',
      icon: 'Code',
      features: ['Automated provisioning', 'Configuration management', 'Version control', 'Error reduction'],
      sections: [
        {
          title: 'What is Infrastructure as Code?',
          description: 'Infrastructure as Code is the practice of managing and provisioning infrastructure through machine-readable definition files rather than manual processes. This approach brings software development principles to infrastructure management, allowing for versioning, testing, and consistent deployments.',
        },
        {
          title: 'Terraform Implementation',
          items: [
            { title: 'Terraform Architecture', description: 'Design scalable and modular Terraform code structures' },
            { title: 'State Management', description: 'Implement secure and reliable state management practices' },
            { title: 'Module Development', description: 'Create reusable Terraform modules for your organization' },
          ],
        },
        {
          title: 'Bicep/ARM Template Development',
          items: [
            { title: 'Template Design', description: 'Create efficient, parameterized Azure Resource Manager templates' },
            { title: 'Bicep Migration', description: 'Convert existing ARM templates to the more readable Bicep format' },
            { title: 'Best Practices', description: 'Implement security and operational excellence in your templates' },
          ],
        },
        {
          title: 'CI/CD Pipeline Integration',
          items: [
            { title: 'Automated Testing', description: 'Implement infrastructure testing in your deployment pipelines' },
            { title: 'Approval Workflows', description: 'Design governance processes for infrastructure changes' },
            { title: 'Pipeline Design', description: 'Create efficient deployment pipelines for infrastructure' },
          ],
        },
        {
          title: 'Training and Knowledge Transfer',
          items: [
            { title: 'Team Workshops', description: 'Train your team on IaC best practices' },
            { title: 'Documentation', description: 'Create comprehensive documentation for your IaC implementation' },
            { title: 'Mentoring', description: 'Provide ongoing support and guidance for your team' },
          ],
        },
      ],
      benefits: [
        { title: 'Consistency', description: 'Eliminate configuration drift and ensure consistent environments' },
        { title: 'Speed', description: 'Accelerate provisioning and reduce manual tasks' },
        { title: 'Reliability', description: 'Reduce human error through automation' },
        { title: 'Documentation', description: 'Self-documenting infrastructure through code' },
        { title: 'Version Control', description: 'Track changes and implement proper governance' },
        { title: 'Cost Control', description: 'Better visibility and management of cloud resources' },
      ],
      closingText: 'Contact us today to start your Infrastructure as Code journey.',
      isPublished: true,
      publishedAt: '2024-01-05T00:00:00Z',
      updatedAt: '2024-01-05T00:00:00Z',
      order: 5,
    },
    nl: {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Automatiseer infrastructuur provisioning en beheer met code.',
      icon: 'Code',
      features: ['Geautomatiseerde provisioning', 'Configuratie beheer', 'Versie controle', 'Fout reductie'],
      sections: [
        {
          title: 'Wat is Infrastructure as Code?',
          description: 'Infrastructure as Code is de praktijk van het beheren en provisioneren van infrastructuur door middel van machine-leesbare definitie bestanden in plaats van handmatige processen. Deze aanpak brengt software ontwikkeling principes naar infrastructuur beheer, waardoor versioning, testing en consistente deployments mogelijk worden.',
        },
        {
          title: 'Terraform Implementatie',
          items: [
            { title: 'Terraform Architectuur', description: 'Ontwerp schaalbare en modulaire Terraform code structuren' },
            { title: 'State Beheer', description: 'Implementeer veilige en betrouwbare state beheer praktijken' },
            { title: 'Module Ontwikkeling', description: 'Creëer herbruikbare Terraform modules voor uw organisatie' },
          ],
        },
        {
          title: 'Bicep/ARM Template Ontwikkeling',
          items: [
            { title: 'Template Ontwerp', description: 'Creëer efficiënte, geparametriseerde Azure Resource Manager templates' },
            { title: 'Bicep Migratie', description: 'Converteer bestaande ARM templates naar het meer leesbare Bicep formaat' },
            { title: 'Best Practices', description: 'Implementeer beveiliging en operational excellence in uw templates' },
          ],
        },
        {
          title: 'CI/CD Pipeline Integratie',
          items: [
            { title: 'Geautomatiseerd Testen', description: 'Implementeer infrastructuur testing in uw deployment pipelines' },
            { title: 'Goedkeuring Workflows', description: 'Ontwerp governance processen voor infrastructuur wijzigingen' },
            { title: 'Pipeline Ontwerp', description: 'Creëer efficiënte deployment pipelines voor infrastructuur' },
          ],
        },
        {
          title: 'Training en Kennisoverdracht',
          items: [
            { title: 'Team Workshops', description: 'Train uw team in IaC best practices' },
            { title: 'Documentatie', description: 'Creëer uitgebreide documentatie voor uw IaC implementatie' },
            { title: 'Mentoring', description: 'Bied voortdurende ondersteuning en begeleiding voor uw team' },
          ],
        },
      ],
      benefits: [
        { title: 'Consistentie', description: 'Elimineer configuratie drift en zorg voor consistente omgevingen' },
        { title: 'Snelheid', description: 'Versnel provisioning en verminder handmatige taken' },
        { title: 'Betrouwbaarheid', description: 'Verminder menselijke fouten door automatisering' },
        { title: 'Documentatie', description: 'Zelf-documenterende infrastructuur door code' },
        { title: 'Versie Controle', description: 'Volg wijzigingen en implementeer juiste governance' },
        { title: 'Kosten Controle', description: 'Betere zichtbaarheid en beheer van cloud resources' },
      ],
      closingText: 'Neem vandaag nog contact met ons op om uw Infrastructure as Code reis te starten.',
      isPublished: true,
      publishedAt: '2024-01-05T00:00:00Z',
      updatedAt: '2024-01-05T00:00:00Z',
      order: 5,
    },
  },
  'ai-engineering': {
    en: {
      id: 'ai-engineering',
      title: 'AI Engineering & Consultancy',
      slug: 'ai-engineering',
      description: 'Build and deploy advanced AI solutions in your Azure environment.',
      icon: 'Cpu',
      features: ['AI solution design', 'Model development', 'Deployment and monitoring', 'Business value analysis'],
      sections: [
        {
          title: 'Our AI Expertise',
          description: 'We specialize in helping organizations implement practical AI solutions that solve real business problems. Our team combines deep technical knowledge of Azure AI services with business acumen to ensure your AI investments deliver meaningful returns.',
        },
        {
          title: 'Azure OpenAI Integration',
          items: [
            { title: 'Custom GPT Implementation', description: 'Develop tailored solutions using Azure OpenAI' },
            { title: 'Prompt Engineering', description: 'Create effective prompts for optimal AI responses' },
            { title: 'Content Filtering', description: 'Implement appropriate content controls' },
            { title: 'Integration Architecture', description: 'Design robust, scalable systems that incorporate Azure OpenAI' },
          ],
        },
        {
          title: 'Custom AI Models',
          items: [
            { title: 'Machine Learning Solutions', description: 'Develop custom machine learning models for your specific needs' },
            { title: 'Model Training', description: 'Train models on your business data for specialized tasks' },
            { title: 'Performance Optimization', description: 'Fine-tune models for speed and accuracy' },
            { title: 'Azure ML Pipeline Development', description: 'Create end-to-end ML pipelines for continuous training' },
          ],
        },
        {
          title: 'AI-Powered Analytics',
          items: [
            { title: 'Predictive Analytics', description: 'Implement forecasting and trend analysis' },
            { title: 'Text Analytics', description: 'Extract insights from unstructured text data' },
            { title: 'Computer Vision Solutions', description: 'Process and analyze images and video' },
            { title: 'Anomaly Detection', description: 'Identify patterns and outliers in your data' },
          ],
        },
        {
          title: 'Responsible AI Implementation',
          items: [
            { title: 'Ethical AI Guidelines', description: 'Develop frameworks for responsible AI use' },
            { title: 'Bias Detection', description: 'Identify and mitigate bias in AI systems' },
            { title: 'Transparency Tools', description: 'Implement solutions for AI explainability' },
            { title: 'Governance Frameworks', description: 'Create processes for ongoing AI governance' },
          ],
        },
      ],
      benefits: [
        { title: 'Pragmatic Approach', description: 'Focus on practical solutions that deliver measurable business value' },
        { title: 'Azure-Native Expertise', description: "Deep expertise in Azure's AI services and platform capabilities" },
        { title: 'Cross-Domain Knowledge', description: 'Industry experience across healthcare, finance, manufacturing, and more' },
        { title: 'End-to-End Support', description: 'From strategy and planning to implementation and ongoing management' },
      ],
      closingText: 'Contact us today to explore how AI can transform your business processes and create new opportunities.',
      isPublished: true,
      publishedAt: '2024-01-06T00:00:00Z',
      updatedAt: '2024-01-06T00:00:00Z',
      order: 6,
    },
    nl: {
      id: 'ai-engineering',
      title: 'AI Engineering & Consultancy',
      slug: 'ai-engineering',
      description: 'Bouw en deploy geavanceerde AI oplossingen in uw Azure omgeving.',
      icon: 'Cpu',
      features: ['AI oplossing ontwerp', 'Model ontwikkeling', 'Deployment en monitoring', 'Business waarde analyse'],
      sections: [
        {
          title: 'Onze AI Expertise',
          description: 'We specialiseren ons in het helpen van organisaties bij het implementeren van praktische AI oplossingen die echte bedrijfsproblemen oplossen. Ons team combineert diepe technische kennis van Azure AI services met zakelijk inzicht om ervoor te zorgen dat uw AI investeringen zinvolle resultaten leveren.',
        },
        {
          title: 'Azure OpenAI Integratie',
          items: [
            { title: 'Custom GPT Implementatie', description: 'Ontwikkel op maat gemaakte oplossingen met Azure OpenAI' },
            { title: 'Prompt Engineering', description: 'Creëer effectieve prompts voor optimale AI responses' },
            { title: 'Content Filtering', description: 'Implementeer juiste content controles' },
            { title: 'Integratie Architectuur', description: 'Ontwerp robuuste, schaalbare systemen die Azure OpenAI incorporeren' },
          ],
        },
        {
          title: 'Custom AI Models',
          items: [
            { title: 'Machine Learning Oplossingen', description: 'Ontwikkel custom machine learning modellen voor uw specifieke behoeften' },
            { title: 'Model Training', description: 'Train modellen op uw bedrijfsdata voor gespecialiseerde taken' },
            { title: 'Prestatie Optimalisatie', description: 'Stel modellen af voor snelheid en nauwkeurigheid' },
            { title: 'Azure ML Pipeline Ontwikkeling', description: 'Creëer end-to-end ML pipelines voor continue training' },
          ],
        },
        {
          title: 'AI-Powered Analytics',
          items: [
            { title: 'Predictieve Analytics', description: 'Implementeer voorspelling en trend analyse' },
            { title: 'Text Analytics', description: 'Extraheer inzichten uit ongestructureerde tekstdata' },
            { title: 'Computer Vision Oplossingen', description: 'Verwerk en analyseer afbeeldingen en video' },
            { title: 'Anomaly Detection', description: 'Identificeer patronen en uitschieters in uw data' },
          ],
        },
        {
          title: 'Verantwoorde AI Implementatie',
          items: [
            { title: 'Ethische AI Richtlijnen', description: 'Ontwikkel frameworks voor verantwoord AI gebruik' },
            { title: 'Bias Detectie', description: 'Identificeer en verminder bias in AI systemen' },
            { title: 'Transparantie Tools', description: 'Implementeer oplossingen voor AI verklaarbaar te maken' },
            { title: 'Governance Frameworks', description: 'Creëer processen voor voortdurende AI governance' },
          ],
        },
      ],
      benefits: [
        { title: 'Pragmatische Aanpak', description: 'Focus op praktische oplossingen die meetbare bedrijfswaarde leveren' },
        { title: 'Azure-Native Expertise', description: "Diepe expertise in Azure's AI services en platform mogelijkheden" },
        { title: 'Cross-Domain Kennis', description: 'Industrie ervaring in gezondheidszorg, financiën, productie en meer' },
        { title: 'End-to-End Ondersteuning', description: 'Van strategie en planning tot implementatie en voortdurend beheer' },
      ],
      closingText: 'Neem vandaag nog contact met ons op om te verkennen hoe AI uw bedrijfsprocessen kan transformeren en nieuwe kansen kan creëren.',
      isPublished: true,
      publishedAt: '2024-01-06T00:00:00Z',
      updatedAt: '2024-01-06T00:00:00Z',
      order: 6,
    },
  },
  'network-engineering': {
    en: {
      id: 'network-engineering',
      title: 'Azure Network Engineering',
      slug: 'network-engineering',
      description: 'Design and implement robust networking solutions in Azure.',
      icon: 'Graph',
      features: ['Network design', 'Implementation', 'Security management', 'Performance optimization'],
      sections: [
        {
          title: 'Our Network Engineering Expertise',
          description: 'Our Azure network engineers design and implement sophisticated networking solutions that form the backbone of your cloud infrastructure. We focus on security, performance, and reliability while ensuring your network architecture aligns with your business requirements and technical constraints.',
        },
        {
          title: 'Network Architecture Design',
          items: [
            { title: 'Hub-and-Spoke Topology', description: 'Design efficient hub-and-spoke network architectures' },
            { title: 'Landing Zone Implementation', description: 'Create secure and compliant Azure landing zones' },
            { title: 'Hybrid Connectivity', description: 'Establish reliable connections between on-premises and Azure environments' },
            { title: 'Multi-Region Networks', description: 'Design resilient architectures across Azure regions' },
          ],
        },
        {
          title: 'Connectivity Solutions',
          items: [
            { title: 'Azure ExpressRoute', description: 'Implement private, high-bandwidth connections to Azure' },
            { title: 'VPN Configuration', description: 'Set up site-to-site and point-to-site VPN solutions' },
            { title: 'Virtual WAN', description: 'Configure global transit networks for distributed environments' },
            { title: 'Azure Front Door', description: 'Implement global load balancing and application acceleration' },
          ],
        },
        {
          title: 'Network Security',
          items: [
            { title: 'Network Security Groups', description: 'Configure and manage NSG rules and policies' },
            { title: 'Azure Firewall', description: 'Deploy and configure Azure Firewall for enhanced network protection' },
            { title: 'DDoS Protection', description: 'Implement Azure DDoS Protection for network layer defense' },
            { title: 'Private Link', description: 'Secure access to PaaS services through private endpoints' },
          ],
        },
        {
          title: 'Performance Optimization',
          items: [
            { title: 'Load Balancing', description: 'Configure Azure Load Balancer for optimal traffic distribution' },
            { title: 'Application Gateway', description: 'Implement layer 7 load balancing with WAF capabilities' },
            { title: 'Traffic Manager', description: 'Optimize global traffic routing for multi-region applications' },
            { title: 'Network Monitoring', description: 'Set up comprehensive network monitoring and alerting' },
          ],
        },
      ],
      benefits: [
        { title: 'Security-First Approach', description: 'Networks designed with security as a foundational principle' },
        { title: 'Scalability', description: 'Infrastructure that grows with your business needs' },
        { title: 'Performance', description: 'Optimized throughput and reduced latency' },
        { title: 'Cost Efficiency', description: 'Balanced designs that control costs without compromising quality' },
        { title: 'Operational Excellence', description: 'Well-documented and maintainable network architectures' },
      ],
      closingText: 'Contact us today to discuss your Azure networking needs.',
      isPublished: true,
      publishedAt: '2024-01-07T00:00:00Z',
      updatedAt: '2024-01-07T00:00:00Z',
      order: 7,
    },
    nl: {
      id: 'network-engineering',
      title: 'Azure Network Engineering',
      slug: 'network-engineering',
      description: 'Ontwerp en implementeer robuuste netwerk oplossingen in Azure.',
      icon: 'Graph',
      features: ['Netwerk ontwerp', 'Implementatie', 'Beveiliging beheer', 'Prestatie optimalisatie'],
      sections: [
        {
          title: 'Onze Network Engineering Expertise',
          description: 'Onze Azure netwerk engineers ontwerpen en implementeren geavanceerde netwerk oplossingen die de ruggengraat vormen van uw cloud infrastructuur. We focussen op beveiliging, prestaties en betrouwbaarheid terwijl we ervoor zorgen dat uw netwerk architectuur aansluit bij uw bedrijfsvereisten en technische beperkingen.',
        },
        {
          title: 'Netwerk Architectuur Ontwerp',
          items: [
            { title: 'Hub-and-Spoke Topologie', description: 'Ontwerp efficiënte hub-and-spoke netwerk architecturen' },
            { title: 'Landing Zone Implementatie', description: 'Creëer veilige en compliant Azure landing zones' },
            { title: 'Hybride Connectiviteit', description: 'Vestig betrouwbare verbindingen tussen on-premises en Azure omgevingen' },
            { title: 'Multi-Region Netwerken', description: "Ontwerp veerkrachtige architecturen over Azure regio's" },
          ],
        },
        {
          title: 'Connectiviteit Oplossingen',
          items: [
            { title: 'Azure ExpressRoute', description: 'Implementeer private, high-bandwidth verbindingen naar Azure' },
            { title: 'VPN Configuratie', description: 'Stel site-to-site en point-to-site VPN oplossingen op' },
            { title: 'Virtual WAN', description: 'Configureer globale transit netwerken voor gedistribueerde omgevingen' },
            { title: 'Azure Front Door', description: 'Implementeer globale load balancing en applicatie acceleratie' },
          ],
        },
        {
          title: 'Netwerk Beveiliging',
          items: [
            { title: 'Network Security Groups', description: 'Configureer en beheer NSG regels en policies' },
            { title: 'Azure Firewall', description: 'Deploy en configureer Azure Firewall voor verbeterde netwerk bescherming' },
            { title: 'DDoS Bescherming', description: 'Implementeer Azure DDoS Protection voor netwerk laag verdediging' },
            { title: 'Private Link', description: 'Veilige toegang tot PaaS services door private endpoints' },
          ],
        },
        {
          title: 'Prestatie Optimalisatie',
          items: [
            { title: 'Load Balancing', description: 'Configureer Azure Load Balancer voor optimale traffic distributie' },
            { title: 'Application Gateway', description: 'Implementeer layer 7 load balancing met WAF mogelijkheden' },
            { title: 'Traffic Manager', description: 'Optimaliseer globale traffic routing voor multi-region applicaties' },
            { title: 'Netwerk Monitoring', description: 'Stel uitgebreide netwerk monitoring en alerting op' },
          ],
        },
      ],
      benefits: [
        { title: 'Security-First Aanpak', description: 'Netwerken ontworpen met beveiliging als fundamenteel principe' },
        { title: 'Schaalbaarheid', description: 'Infrastructuur die groeit met uw bedrijfsbehoeften' },
        { title: 'Prestaties', description: 'Geoptimaliseerde doorvoer en verminderde latency' },
        { title: 'Kostenefficiëntie', description: 'Gebalanceerde ontwerpen die kosten beheersen zonder kwaliteit te compromitteren' },
        { title: 'Operationele Excellentie', description: 'Goed gedocumenteerde en onderhoudbare netwerk architecturen' },
      ],
      closingText: 'Neem vandaag nog contact met ons op om uw Azure netwerk behoeften te bespreken.',
      isPublished: true,
      publishedAt: '2024-01-07T00:00:00Z',
      updatedAt: '2024-01-07T00:00:00Z',
      order: 7,
    },
  },
};

export function getAllServices(language: 'en' | 'nl' = 'en') {
  return Object.values(allServices).map(service => service[language]).filter(s => s.isPublished);
}

export function getServiceBySlug(slug: string, language: 'en' | 'nl' = 'en') {
  const service = allServices[slug];
  return service ? service[language] : null;
}

export function getServicesCount() {
  return Object.keys(allServices).length;
}

export function getFeaturedServices(language: 'en' | 'nl' = 'en', limit: number = 6) {
  return getAllServices(language).sort((a, b) => a.order - b.order).slice(0, limit);
}
