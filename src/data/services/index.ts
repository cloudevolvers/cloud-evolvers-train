import type { AllServicesTranslations } from '../../types/services';

export const allServices: AllServicesTranslations = {
  'cloud-management': {
    en: {
      id: 'cloud-management',
      title: 'Cloud Management',
      slug: 'cloud-management',
      description: 'Proactive management of your Azure cloud environment — from FinOps and governance to 24/7 operational support.',
      icon: 'Cloud',
      image: '/images/services/cloud-management.jpg',
      imageCredit: 'Brett Sayles / Pexels',
      features: ['Resource optimization', 'Cost monitoring', 'Performance tuning', 'Infrastructure as Code'],
      sections: [
        {
          title: 'What We Offer',
          items: [
            { title: '24/7 Monitoring and Support', description: 'Continuous monitoring of your infrastructure with rapid response to incidents' },
            { title: 'Cost Optimization', description: 'Regular reviews and recommendations to reduce cloud spending' },
            { title: 'Performance Tuning', description: 'Optimization of resources for maximum performance' },
            { title: 'Infrastructure as Code', description: 'Implementation of IaC practices for scalable and consistent deployments' },
            { title: 'Azure Arc & Multi-Cloud Governance', description: 'Extend Azure management to hybrid and multi-cloud resources with Azure Arc for unified governance' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Want help running an Azure environment without burning your weekends on tickets? Get in touch and we will scope what your team actually needs.',
      isPublished: true,
      publishedAt: '2024-01-01T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 1,
    },
    nl: {
      id: 'cloud-management',
      title: 'Cloud Beheer',
      slug: 'cloud-management',
      description: 'Proactief beheer van uw Azure cloud omgeving — van FinOps en governance tot 24/7 operationele ondersteuning.',
      icon: 'Cloud',
      image: '/images/services/cloud-management.jpg',
      imageCredit: 'Brett Sayles / Pexels',
      features: ['Resource optimalisatie', 'Kosten monitoring', 'Prestatie optimalisatie', 'Infrastructure as Code'],
      sections: [
        {
          title: 'Wat Wij Bieden',
          items: [
            { title: '24/7 Monitoring en Ondersteuning', description: 'Continue monitoring van uw infrastructuur met snelle reactie op incidenten' },
            { title: 'Kosten Optimalisatie', description: 'Regelmatige reviews en aanbevelingen om cloud uitgaven te verlagen' },
            { title: 'Prestatie Optimalisatie', description: 'Optimalisatie van resources voor maximale prestaties' },
            { title: 'Infrastructure as Code', description: 'Implementatie van IaC praktijken voor schaalbare en consistente deployments' },
            { title: 'Azure Arc & Multi-Cloud Governance', description: 'Breid Azure beheer uit naar hybride en multi-cloud resources met Azure Arc voor uniforme governance' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Hulp nodig bij het draaien van een Azure-omgeving zonder elk weekend in tickets te verdwijnen? Neem contact op, dan scopen we wat jullie team echt nodig heeft.',
      isPublished: true,
      publishedAt: '2024-01-01T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
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
      image: '/images/services/azure-monitoring.jpg',
      imageCredit: 'Lukas Blazek / Pexels',
      features: ['24/7 resource monitoring', 'Custom alert configurations', 'Performance analytics', 'Resource usage trends'],
      sections: [
        {
          title: 'Resource monitoring that pages the right people',
          description: 'We set up Azure Monitor, Log Analytics, and Application Insights so the metrics that matter — availability, latency, errors — show up where your team already works. No noisy dashboards, no alert fatigue.',
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
        {
          title: 'AI-Driven Observability',
          description: 'Leverage Azure Monitor\'s AI-powered insights and AIOps capabilities to automatically detect anomalies, correlate alerts, and reduce mean time to resolution. With integration into Microsoft Copilot for Azure, your operations team gets intelligent recommendations in natural language.',
        },
      ],
      benefits: [
        { title: 'Proactive Issue Prevention', description: 'Identify and address potential problems before they affect your services' },
        { title: 'Improved System Reliability', description: 'Ensure consistent performance and minimize downtime' },
        { title: 'Optimized Resource Allocation', description: 'Make informed decisions about resource scaling based on actual usage data' },
        { title: 'Cost Control', description: 'Identify underutilized resources and opportunities for consolidation' },
        { title: 'Enhanced Security Posture', description: 'Monitor for unusual activity patterns that may indicate security threats' },
      ],
      closingText: 'Need eyes on what your Azure environment is actually doing? Drop us a note and we will help you stand up monitoring that pages the right people.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 2,
    },
    nl: {
      id: 'azure-monitoring',
      title: 'Azure Monitoring',
      slug: 'azure-monitoring',
      description: 'Real-time zichtbaarheid van uw Azure resources met aangepaste dashboards en alerts',
      icon: 'LineChart',
      image: '/images/services/azure-monitoring.jpg',
      imageCredit: 'Lukas Blazek / Pexels',
      features: ['24/7 resource monitoring', 'Aangepaste alert configuraties', 'Prestatie analytics', 'Resource gebruiks trends'],
      sections: [
        {
          title: 'Resource monitoring die de juiste mensen pingt',
          description: 'We zetten Azure Monitor, Log Analytics en Application Insights zo op dat de metrics die ertoe doen — beschikbaarheid, latency, errors — daar landen waar jullie team al werkt. Geen ruis, geen alert fatigue.',
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
        {
          title: 'AI-Gedreven Observability',
          description: 'Benut Azure Monitor\'s AI-aangedreven inzichten en AIOps mogelijkheden om automatisch anomalieën te detecteren, alerts te correleren en de gemiddelde hersteltijd te verkorten. Met integratie in Microsoft Copilot voor Azure krijgt uw operationeel team intelligente aanbevelingen in natuurlijke taal.',
        },
      ],
      benefits: [
        { title: 'Proactieve Probleem Preventie', description: 'Identificeer en behandel potentiële problemen voordat ze uw services beïnvloeden' },
        { title: 'Verbeterde Systeem Betrouwbaarheid', description: 'Zorg voor consistente prestaties en minimaliseer downtime' },
        { title: 'Geoptimaliseerde Resource Toewijzing', description: 'Neem geïnformeerde beslissingen over resource scaling gebaseerd op werkelijk gebruiksdata' },
        { title: 'Kostenbeheersing', description: 'Identificeer onderbenuttte resources en mogelijkheden voor consolidatie' },
        { title: 'Verbeterde Beveiliging', description: 'Monitor voor ongebruikelijke activiteit patronen die kunnen wijzen op beveiligingsdreigingen' },
      ],
      closingText: 'Wil je echt zicht krijgen op wat jullie Azure-omgeving doet? Stuur een bericht en we helpen monitoring op te zetten die de juiste mensen pingt.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 2,
    },
  },
  'security-compliance': {
    en: {
      id: 'security-compliance',
      title: 'Security & Compliance',
      slug: 'security-compliance',
      description: 'End-to-end security for your Azure environment — from Zero Trust architecture and Microsoft Sentinel SIEM to NIS2 and DORA compliance readiness.',
      icon: 'Shield',
      image: '/images/services/security-compliance.jpg',
      imageCredit: 'Dan Nelson / Pexels',
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
            { title: 'NIS2 & DORA Compliance', description: 'Prepare for EU NIS2 and DORA regulatory requirements with comprehensive compliance assessments and implementation' },
            { title: 'Microsoft Sentinel & Copilot for Security', description: 'Deploy AI-powered SIEM/SOAR with Microsoft Sentinel and accelerate threat investigation using Copilot for Security' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Working on NIS2, DORA, or just want a second pair of eyes on your Azure security posture? Send a note and we will set up a call.',
      isPublished: true,
      publishedAt: '2024-01-02T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 2,
    },
    nl: {
      id: 'security-compliance',
      title: 'Beveiliging & Compliance',
      slug: 'security-compliance',
      description: 'End-to-end beveiliging voor uw Azure omgeving — van Zero Trust architectuur en Microsoft Sentinel SIEM tot NIS2 en DORA compliance gereedheid.',
      icon: 'Shield',
      image: '/images/services/security-compliance.jpg',
      imageCredit: 'Dan Nelson / Pexels',
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
            { title: 'NIS2 & DORA Compliance', description: 'Bereid u voor op de EU NIS2 en DORA regelgeving met uitgebreide compliance assessments en implementatie' },
            { title: 'Microsoft Sentinel & Copilot for Security', description: 'Implementeer AI-aangedreven SIEM/SOAR met Microsoft Sentinel en versnel dreigingsonderzoek met Copilot for Security' },
          ],
        },
      ],
      benefits: [],
      closingText: 'Bezig met NIS2, DORA, of gewoon een second opinion nodig op jullie Azure-security? Stuur een bericht, dan plannen we een gesprek.',
      isPublished: true,
      publishedAt: '2024-01-02T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 2,
    },
  },
  'cost-optimization': {
    en: {
      id: 'cost-optimization',
      title: 'Cost Optimization',
      slug: 'cost-optimization',
      description: 'Find what is actually driving your Azure bill — right-size resources, claim reservations, and set up alerts before the next surprise invoice.',
      icon: 'PiggyBank',
      image: '/images/services/cost-optimization.jpg',
      imageCredit: 'Negative Space / Pexels',
      features: ['Spending analysis', 'Resource right-sizing', 'Reservation recommendations', 'Budget forecasting'],
      sections: [
        {
          title: 'Where your Azure bill actually goes',
          description: 'We pull cost data across subscriptions, resource groups, and tags to show what is driving the bill — not at the service level, but at the workload level. Most reviews surface 20-40% of spend that nobody owns.',
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
        {
          title: 'FinOps & Cloud Financial Management',
          description: 'We help you adopt FinOps practices across your organization, combining Azure Cost Management, Microsoft Cost Optimization workbook, and custom dashboards to create a culture of cloud financial accountability. From chargeback models to showback reporting, we build the financial visibility your teams need.',
        },
      ],
      benefits: [
        { title: 'Immediate Cost Reduction', description: 'Identify and eliminate waste quickly to see fast ROI' },
        { title: 'Long-term Savings Strategy', description: 'Develop sustainable cost management practices' },
        { title: 'Enhanced Visibility', description: 'Gain clarity on exactly where and how your cloud budget is spent' },
        { title: 'Optimized Resource Utilization', description: "Ensure you're getting maximum value from every Azure resource" },
        { title: 'Budget Predictability', description: 'Avoid unexpected billing surprises with accurate forecasting' },
      ],
      closingText: "Azure bill creeping up faster than your usage? Send the invoice and we will tell you within a week where the real savings are.",
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 3,
    },
    nl: {
      id: 'cost-optimization',
      title: 'Kosten Optimalisatie',
      slug: 'cost-optimization',
      description: 'Vind wat jullie Azure-rekening echt drijft — right-size resources, claim reservations en zet alerts op voor de volgende verrassingsfactuur.',
      icon: 'PiggyBank',
      image: '/images/services/cost-optimization.jpg',
      imageCredit: 'Negative Space / Pexels',
      features: ['Uitgaven analyse', 'Resource right-sizing', 'Reservering aanbevelingen', 'Budget voorspelling'],
      sections: [
        {
          title: 'Waar jullie Azure-rekening écht naartoe gaat',
          description: 'We trekken kostendata over subscriptions, resource groups en tags om te laten zien wat de rekening drijft — niet op service-niveau, maar per workload. De meeste reviews leggen 20-40% bloot waar niemand eigenaar van is.',
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
        {
          title: 'FinOps & Cloud Financieel Management',
          description: 'We helpen u FinOps praktijken te adopteren in uw organisatie, door Azure Cost Management, Microsoft Cost Optimization workbook en aangepaste dashboards te combineren om een cultuur van cloud financiële verantwoordelijkheid te creëren. Van chargeback modellen tot showback rapportage, wij bouwen de financiële zichtbaarheid die uw teams nodig hebben.',
        },
      ],
      benefits: [
        { title: 'Directe Kostenreductie', description: 'Identificeer en elimineer verspilling snel voor snelle ROI' },
        { title: 'Lange-termijn Besparingsstrategie', description: 'Ontwikkel duurzame kostenbeheer praktijken' },
        { title: 'Verbeterde Zichtbaarheid', description: 'Krijg duidelijkheid over precies waar en hoe uw cloud budget wordt besteed' },
        { title: 'Geoptimaliseerd Resource Gebruik', description: 'Zorg ervoor dat u maximale waarde krijgt uit elke Azure resource' },
        { title: 'Budget Voorspelbaarheid', description: 'Vermijd onverwachte factuurverrassingen met nauwkeurige voorspellingen' },
      ],
      closingText: 'Stijgt jullie Azure-rekening sneller dan jullie gebruik? Stuur de factuur op, dan vertellen we binnen een week waar de echte besparingen zitten.',
      isPublished: true,
      publishedAt: '2024-04-10T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 3,
    },
  },
  'microsoft-365-copilot': {
    en: {
      id: 'microsoft-365-copilot',
      title: 'Microsoft 365 Copilot',
      slug: 'microsoft-365-copilot',
      description: 'Microsoft 365 Copilot rollout, governance, and adoption work — from licensing decisions and tenant readiness to user training and Copilot Studio agents.',
      icon: 'Bot',
      image: '/images/services/microsoft-365-copilot.jpg',
      imageCredit: 'Matheus Bertelli / Pexels',
      features: ['AI-powered assistance', 'Productivity optimization', 'Integration with Microsoft 365', 'User training and support'],
      sections: [
        {
          title: 'What we do with Copilot',
          description: "Two things, mostly. First: rollout work — licensing, tenant readiness, the data governance and DLP checks that have to happen before you turn it on. Second: adoption — training power users, building usage patterns that stick, and writing prompts that match how your team actually works.",
        },
        {
          title: 'Our Copilot Implementation Services',
          items: [
            { title: 'Readiness Assessment', description: "Evaluate your organization's technical and data environment for Copilot integration" },
            { title: 'Implementation Planning', description: 'Develop a strategic implementation plan customized to your business needs' },
            { title: 'User Training', description: 'Comprehensive training programs to ensure adoption and maximize productivity benefits' },
            { title: 'Integration Support', description: 'Technical assistance with integrating Copilot across your Microsoft 365 environment' },
            { title: 'Content Optimization', description: 'Guidance on optimizing your content and data to get the most out of Copilot' },
            { title: 'Copilot Studio & Custom Agents', description: 'Build custom Copilot agents and plugins using Copilot Studio to automate domain-specific workflows' },
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
      closingText: "Rolling out Microsoft 365 Copilot and not sure where to start, what to govern, or how to train people? Send a quick note and we will walk through it together.",
      isPublished: true,
      publishedAt: '2024-01-03T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 3,
    },
    nl: {
      id: 'microsoft-365-copilot',
      title: 'Microsoft 365 Copilot',
      slug: 'microsoft-365-copilot',
      description: 'Microsoft 365 Copilot uitrol, governance en adoptie — van licentiekeuzes en tenant-readiness tot gebruikerstraining en Copilot Studio agents.',
      icon: 'Bot',
      image: '/images/services/microsoft-365-copilot.jpg',
      imageCredit: 'Matheus Bertelli / Pexels',
      features: ['AI-powered assistance', 'Productivity optimization', 'Integration with Microsoft 365', 'User training and support'],
      sections: [
        {
          title: 'What we do with Copilot',
          description: "Two things, mostly. First: rollout work — licensing, tenant readiness, the data governance and DLP checks that have to happen before you turn it on. Second: adoption — training power users, building usage patterns that stick, and writing prompts that match how your team actually works.",
        },
        {
          title: 'Our Copilot Implementation Services',
          items: [
            { title: 'Readiness Assessment', description: "Evaluate your organization's technical and data environment for Copilot integration" },
            { title: 'Implementation Planning', description: 'Develop a strategic implementation plan customized to your business needs' },
            { title: 'User Training', description: 'Comprehensive training programs to ensure adoption and maximize productivity benefits' },
            { title: 'Integration Support', description: 'Technical assistance with integrating Copilot across your Microsoft 365 environment' },
            { title: 'Content Optimization', description: 'Guidance on optimizing your content and data to get the most out of Copilot' },
            { title: 'Copilot Studio & Custom Agents', description: 'Bouw aangepaste Copilot agents en plugins met Copilot Studio om domeinspecifieke workflows te automatiseren' },
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
      closingText: 'Microsoft 365 Copilot uitrollen en niet zeker waar te beginnen, wat te governen, of hoe mensen op te leiden? Stuur een bericht, dan lopen we het samen door.',
      isPublished: true,
      publishedAt: '2024-01-03T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 3,
    },
  },
  'cloud-engineering': {
    en: {
      id: 'cloud-engineering',
      title: 'Cloud Engineering',
      slug: 'cloud-engineering',
      description: 'Hands-on Azure platform work: landing zones, migrations, automation, and the architecture decisions that come with running it in production.',
      icon: 'Network',
      image: '/images/services/cloud-engineering.jpg',
      imageCredit: 'Christina Morillo / Pexels',
      features: ['Architecture design', 'Implementation', 'Migration services', 'Performance optimization'],
      sections: [
        {
          title: 'How we actually engage',
          description: "We start with what you have running. Whether that is a brand-new tenant or a five-year-old environment full of click-deployed VMs, we work in increments — landing zone first, then governance, then automation. No big-bang rebuilds.",
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
      closingText: 'Building or rebuilding your Azure landing zone? Send us the current state and we will come back with concrete next steps.',
      isPublished: true,
      publishedAt: '2024-01-04T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 4,
    },
    nl: {
      id: 'cloud-engineering',
      title: 'Cloud Engineering',
      slug: 'cloud-engineering',
      description: 'Hands-on Azure platform-werk: landing zones, migraties, automatisering en de architectuurkeuzes die horen bij draaien in productie.',
      icon: 'Network',
      image: '/images/services/cloud-engineering.jpg',
      imageCredit: 'Christina Morillo / Pexels',
      features: ['Architectuur ontwerp', 'Implementatie', 'Migratie services', 'Prestatie optimalisatie'],
      sections: [
        {
          title: 'Hoe we daadwerkelijk werken',
          description: 'We beginnen bij wat er nu draait. Of dat nu een gloednieuwe tenant is of een vijf jaar oude omgeving vol click-deployed VM\'s — we werken in stappen: eerst landing zone, dan governance, dan automatisering. Geen big-bang herbouw.',
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
      closingText: 'Bezig met (her)bouwen van jullie Azure landing zone? Stuur de huidige situatie, dan komen we terug met concrete volgende stappen.',
      isPublished: true,
      publishedAt: '2024-01-04T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 4,
    },
  },
  'infrastructure-as-code': {
    en: {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Move your Azure environment off click-ops and into Bicep, Terraform, or OpenTofu. We help teams adopt IaC without rewriting everything from scratch.',
      icon: 'Code',
      image: '/images/services/infrastructure-as-code.jpg',
      imageCredit: 'Markus Spiske / Pexels',
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
          title: 'Bicep Development',
          description: 'Azure Bicep is a domain-specific language for deploying Azure resources declaratively. It provides a cleaner syntax than ARM templates while compiling directly to ARM JSON, making it the native IaC choice for Azure environments.',
          items: [
            { title: 'Bicep Template Design', description: 'Create efficient, type-safe Azure resource definitions with Bicep\'s concise syntax' },
            { title: 'ARM to Bicep Migration', description: 'Convert existing ARM JSON templates to the more readable and maintainable Bicep format' },
            { title: 'Module Libraries', description: 'Build reusable Bicep module registries for consistent resource provisioning across teams' },
            { title: 'Parameter Files & Environments', description: 'Manage multi-environment deployments with structured parameter files and conditional logic' },
          ],
        },
        {
          title: 'OpenTofu',
          description: 'OpenTofu is the open-source fork of Terraform, maintained by the Linux Foundation. We help organizations adopt OpenTofu for vendor-neutral, community-driven infrastructure management across any cloud provider.',
          items: [
            { title: 'OpenTofu Migration', description: 'Seamlessly transition existing Terraform configurations to OpenTofu with zero downtime' },
            { title: 'Multi-Cloud Provisioning', description: 'Manage Azure, AWS, and GCP resources from a single OpenTofu configuration' },
            { title: 'State Encryption', description: 'Leverage OpenTofu\'s native state encryption for enhanced security of sensitive infrastructure data' },
            { title: 'Provider Development', description: 'Build and customize OpenTofu providers for internal platforms and third-party services' },
          ],
        },
        {
          title: 'AI-Assisted IaC',
          description: 'Leverage GitHub Copilot and Azure AI to accelerate IaC development. We help teams adopt AI pair-programming for Terraform, Bicep, and OpenTofu — reducing boilerplate, catching misconfigurations early, and speeding up infrastructure reviews.',
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
            { title: 'Team Workshops', description: 'Train your team on IaC best practices across Terraform, Bicep, and OpenTofu' },
            { title: 'Documentation', description: 'Create comprehensive documentation for your IaC implementation' },
            { title: 'Mentoring', description: 'Provide ongoing support and guidance for your team' },
          ],
        },
      ],
      benefits: [
        { title: 'Consistency', description: 'Eliminate configuration drift and ensure consistent environments' },
        { title: 'Speed', description: 'Accelerate provisioning and reduce manual tasks' },
        { title: 'Reliability', description: 'Reduce human error through automation' },
        { title: 'Vendor Flexibility', description: 'Choose the right IaC tool for each scenario - Terraform, Bicep, or OpenTofu' },
        { title: 'Documentation', description: 'Self-documenting infrastructure through code' },
        { title: 'Version Control', description: 'Track changes and implement proper governance' },
        { title: 'Cost Control', description: 'Better visibility and management of cloud resources' },
      ],
      closingText: 'Tired of click-ops? Send us your current Azure environment and we will help your team move it into Bicep, Terraform, or OpenTofu — without a six-month rewrite.',
      isPublished: true,
      publishedAt: '2024-01-05T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 5,
    },
    nl: {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Haal jullie Azure-omgeving uit click-ops en breng het naar Bicep, Terraform of OpenTofu. We helpen teams IaC te adopteren zonder alles te herschrijven.',
      icon: 'Code',
      image: '/images/services/infrastructure-as-code.jpg',
      imageCredit: 'Markus Spiske / Pexels',
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
          title: 'Bicep Ontwikkeling',
          description: 'Azure Bicep is een domeinspecifieke taal voor het declaratief deployen van Azure resources. Het biedt een schonere syntax dan ARM templates en compileert direct naar ARM JSON, waardoor het de native IaC keuze is voor Azure omgevingen.',
          items: [
            { title: 'Bicep Template Ontwerp', description: 'Creëer efficiënte, type-safe Azure resource definities met Bicep\'s beknopte syntax' },
            { title: 'ARM naar Bicep Migratie', description: 'Converteer bestaande ARM JSON templates naar het meer leesbare en onderhoudbare Bicep formaat' },
            { title: 'Module Bibliotheken', description: 'Bouw herbruikbare Bicep module registries voor consistente resource provisioning over teams' },
            { title: 'Parameter Bestanden & Omgevingen', description: 'Beheer multi-omgeving deployments met gestructureerde parameter bestanden en conditionele logica' },
          ],
        },
        {
          title: 'OpenTofu',
          description: 'OpenTofu is de open-source fork van Terraform, onderhouden door de Linux Foundation. Wij helpen organisaties OpenTofu te adopteren voor leveranciersonafhankelijk, community-gedreven infrastructuur beheer over elke cloud provider.',
          items: [
            { title: 'OpenTofu Migratie', description: 'Naadloos bestaande Terraform configuraties overzetten naar OpenTofu zonder downtime' },
            { title: 'Multi-Cloud Provisioning', description: 'Beheer Azure, AWS en GCP resources vanuit één enkele OpenTofu configuratie' },
            { title: 'State Encryptie', description: 'Benut OpenTofu\'s native state encryptie voor verbeterde beveiliging van gevoelige infrastructuur data' },
            { title: 'Provider Ontwikkeling', description: 'Bouw en pas OpenTofu providers aan voor interne platforms en externe services' },
          ],
        },
        {
          title: 'AI-Ondersteunde IaC',
          description: 'Benut GitHub Copilot en Azure AI om IaC-ontwikkeling te versnellen. We helpen teams AI pair-programming te adopteren voor Terraform, Bicep en OpenTofu — minder boilerplate, vroege detectie van misconfiguraties en snellere infrastructure reviews.',
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
            { title: 'Team Workshops', description: 'Train uw team in IaC best practices voor Terraform, Bicep en OpenTofu' },
            { title: 'Documentatie', description: 'Creëer uitgebreide documentatie voor uw IaC implementatie' },
            { title: 'Mentoring', description: 'Bied voortdurende ondersteuning en begeleiding voor uw team' },
          ],
        },
      ],
      benefits: [
        { title: 'Consistentie', description: 'Elimineer configuratie drift en zorg voor consistente omgevingen' },
        { title: 'Snelheid', description: 'Versnel provisioning en verminder handmatige taken' },
        { title: 'Betrouwbaarheid', description: 'Verminder menselijke fouten door automatisering' },
        { title: 'Leverancier Flexibiliteit', description: 'Kies de juiste IaC tool voor elk scenario - Terraform, Bicep of OpenTofu' },
        { title: 'Documentatie', description: 'Zelf-documenterende infrastructuur door code' },
        { title: 'Versie Controle', description: 'Volg wijzigingen en implementeer juiste governance' },
        { title: 'Kosten Controle', description: 'Betere zichtbaarheid en beheer van cloud resources' },
      ],
      closingText: 'Klaar met click-ops? Stuur jullie huidige Azure-omgeving op, dan helpen we jullie team het naar Bicep, Terraform of OpenTofu te brengen — zonder een herschrijfproject van zes maanden.',
      isPublished: true,
      publishedAt: '2024-01-05T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 5,
    },
  },
  'ai-engineering': {
    en: {
      id: 'ai-engineering',
      title: 'AI Engineering & Consultancy',
      slug: 'ai-engineering',
      description: 'Azure OpenAI work, RAG over your own data, AI agents, and the governance to keep it all auditable. We build the boring parts so the AI parts actually ship.',
      icon: 'Cpu',
      image: '/images/services/ai-engineering.jpg',
      imageCredit: 'Pavel Danilyuk / Pexels',
      features: ['AI solution design', 'Model development', 'Deployment and monitoring', 'Business value analysis'],
      sections: [
        {
          title: 'How we approach AI work',
          description: 'Most AI projects fail not because the model is wrong, but because the data is messy and nobody owns the result. We start with the use case and the data — if either does not hold up, we will tell you before you spend on Azure OpenAI.',
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
          title: 'RAG & Knowledge Systems',
          items: [
            { title: 'Retrieval-Augmented Generation', description: 'Build enterprise RAG solutions using Azure AI Search, Azure OpenAI, and your proprietary data sources' },
            { title: 'AI Agent Architectures', description: 'Design and deploy autonomous AI agents using frameworks like Semantic Kernel and AutoGen for complex multi-step workflows' },
            { title: 'Vector Databases & Embeddings', description: 'Implement efficient vector search with Azure AI Search or Cosmos DB for MongoDB vCore for semantic retrieval at scale' },
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
      closingText: 'Have an AI use case in mind but not sure if it actually works on your data? Send us the use case and we will tell you what is realistic — and what is hype.',
      isPublished: true,
      publishedAt: '2024-01-06T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 6,
    },
    nl: {
      id: 'ai-engineering',
      title: 'AI Engineering & Consultancy',
      slug: 'ai-engineering',
      description: 'Azure OpenAI-werk, RAG op je eigen data, AI-agents en de governance om alles auditable te houden. We bouwen de saaie onderdelen zodat de AI-onderdelen ook echt live gaan.',
      icon: 'Cpu',
      image: '/images/services/ai-engineering.jpg',
      imageCredit: 'Pavel Danilyuk / Pexels',
      features: ['AI oplossing ontwerp', 'Model ontwikkeling', 'Deployment en monitoring', 'Business waarde analyse'],
      sections: [
        {
          title: 'Hoe we AI-werk aanpakken',
          description: 'De meeste AI-projecten falen niet omdat het model verkeerd is, maar omdat de data rommelig is en niemand eigenaar is van het resultaat. We beginnen bij de use case en de data — houdt een van die twee geen stand, dan zeggen we het voordat je geld uitgeeft aan Azure OpenAI.',
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
          title: 'RAG & Kennissystemen',
          items: [
            { title: 'Retrieval-Augmented Generation', description: 'Bouw enterprise RAG-oplossingen met Azure AI Search, Azure OpenAI en uw eigen databronnen' },
            { title: 'AI Agent Architecturen', description: 'Ontwerp en deploy autonome AI-agents met frameworks zoals Semantic Kernel en AutoGen voor complexe meerstaps workflows' },
            { title: 'Vector Databases & Embeddings', description: 'Implementeer efficiënte vectorzoekopdrachten met Azure AI Search of Cosmos DB voor MongoDB vCore voor semantisch ophalen op schaal' },
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
      closingText: 'Een AI-use case in gedachten maar niet zeker of het echt werkt op jullie data? Stuur de use case op, dan vertellen we wat realistisch is — en wat hype.',
      isPublished: true,
      publishedAt: '2024-01-06T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 6,
    },
  },
  'network-engineering': {
    en: {
      id: 'network-engineering',
      title: 'Azure Network Engineering',
      slug: 'network-engineering',
      description: 'Hub-and-spoke design, ExpressRoute, private endpoints, Azure Firewall, and the routing fixes that come with real production environments.',
      icon: 'Graph',
      image: '/images/services/network-engineering.jpg',
      imageCredit: 'Brett Sayles / Pexels',
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
            { title: 'Azure Private 5G Core', description: 'Deploy private 5G/LTE networks for IoT and edge computing scenarios using Azure Private MEC' },
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
      closingText: 'Designing a hub-and-spoke, ExpressRoute setup, or just trying to get private endpoints working without rebuilding everything? Drop us a note.',
      isPublished: true,
      publishedAt: '2024-01-07T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
      order: 7,
    },
    nl: {
      id: 'network-engineering',
      title: 'Azure Network Engineering',
      slug: 'network-engineering',
      description: 'Hub-and-spoke ontwerp, ExpressRoute, private endpoints, Azure Firewall, en de routing-fixes die horen bij echte productieomgevingen.',
      icon: 'Graph',
      image: '/images/services/network-engineering.jpg',
      imageCredit: 'Brett Sayles / Pexels',
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
            { title: 'Azure Private 5G Core', description: 'Deploy private 5G/LTE netwerken voor IoT en edge computing scenario\'s met Azure Private MEC' },
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
      closingText: 'Hub-and-spoke ontwerpen, ExpressRoute opzetten, of gewoon private endpoints werkend krijgen zonder alles te verbouwen? Stuur een bericht.',
      isPublished: true,
      publishedAt: '2024-01-07T00:00:00Z',
      updatedAt: '2026-03-17T00:00:00Z',
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
