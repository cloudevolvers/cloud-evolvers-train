import heroEn from './translations/en/hero.ts';
import navEn from './translations/en/nav.ts';
import languageEn from './translations/en/language.ts';
import trainingEn from './translations/en/training.ts';
import servicesEn from './translations/en/services.ts';
import trustEn from './translations/en/trust.ts';
import footerEn from './translations/en/footer.ts';
import blogEn from './translations/en/blog.ts';

import heroNl from './translations/nl/hero.ts';
import navNl from './translations/nl/nav.ts';
import languageNl from './translations/nl/language.ts';
import trainingNl from './translations/nl/training.ts';
import servicesNl from './translations/nl/services.ts';
import trustNl from './translations/nl/trust.ts';
import footerNl from './translations/nl/footer.ts';
import blogNl from './translations/nl/blog.ts';

export const translations = {
  en: {
    nav: navEn,
    language: languageEn,
    header: {
      mctCertified: "MCT Certified",
      logoAlt: "Cloud Evolvers Logo",
      backgroundLogoAlt: "Cloud Evolvers Background"
    },
    hero: heroEn,
    training: trainingEn,
    services: servicesEn,
    trust: trustEn,
    footer: footerEn,
    blog: blogEn,
    legal: {
      backToHome: "Back to Home",
      lastUpdated: "Last updated:",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      downloadTerms: "Download Terms of Service",
      downloadDescription: "Download the complete Terms of Service document in your preferred language:",
      contactUs: "Contact Us"
    },
    servicesPage: {
      title: "Consulting alongside the training",
      subtitle: "Hands-on Azure and Microsoft 365 work for teams that need help moving past the slides — landing zones, tenant migrations, security hardening, automation. Same trainer leads the engagement.",
      moreFeatures: "+{count} more",
      contact: {
        title: "Want help on a specific project?",
        description: "Tell us what you're working on. We'll come back with a scope, a timeline, and the right person to lead it — usually within a working day.",
        contactUs: "Contact us",
        viewTraining: "Browse training"
      }
    },
    about: {
      title: "About Cloud Evolvers",
      subtitle: "Cloud Evolvers is the training arm of Spot Cloud — a Dutch consultancy built on 15+ years of hands-on Microsoft infrastructure work. We train the people who run Azure and Microsoft 365 in production.",
      ourStory: {
        title: "How we work",
        content1: "Cloud Evolvers is the training brand of Spot Cloud, the company Yaïr founded in 2023. Spot Cloud also does consulting work — Azure landing zones, Microsoft 365 tenant architecture, and automation with Bicep, PowerShell, and Terraform.",
        content2: "Founder Yaïr Knijn has worked with Microsoft technologies for more than 15 years — most of that time hands-on inside Azure environments at Dutch organizations.",
        whySpotCloud: "Why Spot Cloud?",
        spotCloudExplanation: "The name comes from our Dalmatian. Spots are unique, and so is every cloud environment we work with. No two tenants look the same, so no two training programs should either."
      },
      ourMission: {
        title: "Training that starts from operations",
        content: "Every course we run is shaped by actual Azure and Microsoft 365 work — tenant migrations, landing zone builds, security hardening, cost reviews. We teach the decisions teams face when they inherit or scale environments, not just the exam objectives.",
        vision: "Small groups, real labs",
        visionContent: "We cap sessions at 10 participants so everyone gets hands-on time. Labs run in live Azure environments, not sandboxed simulators. Participants walk out with muscle memory, not just notes."
      },
      specialties: {
        title: "What we do",
        items: [
          {
            title: "Microsoft Certified Training",
            description: "Azure and Microsoft 365 certification tracks for IT teams"
          },
          {
            title: "End-to-end Implementations",
            description: "Hands-on Azure platform and M365 tenant work"
          },
          {
            title: "Automation",
            description: "PowerShell, Bicep, and CI/CD pipelines for Azure environments"
          },
          {
            title: "Consultancy",
            description: "Architecture advice for landing zones, governance, and migrations"
          }
        ]
      },
      team: {
        title: "Who's training you",
        founder: {
          name: "Yaïr Knijn",
          role: "Founder & lead trainer",
          description: "Microsoft Certified Trainer with 15+ years working in and around Microsoft cloud — Azure, Microsoft 365, and the platform decisions that come with them."
        }
      },
      contact: {
        title: "Want to talk training?",
        description: "Tell us what your team is working on and we'll suggest the tracks and format that fit.",
        email: "training@cloudevolvers.com"
      }
    },
    error: {
      applicationError: "Application Error",
      developmentError: "Development Error Caught",
      developmentMode: "Development Mode",
      somethingWentWrong: "Something went wrong",
      errorDetailsForDebugging: "Error Details for Debugging",
      unknownErrorOccurred: "Unknown error occurred",
      errorInformation: "Error Information",
      message: "Message",
      stackTrace: "Stack Trace",
      developmentTips: "Development Tips",
      checkConsole: "Check the browser console for additional error details",
      lookForSyntax: "Look for syntax errors or missing imports in the stack trace",
      verifyComponents: "Verify that all components are properly exported/imported",
      checkProps: "Check if any required props are missing or undefined",
      tryAgain: "Try Again",
      reloadPage: "Reload Page",
      errorDescription: "Something unexpected happened while running the application. Please try refreshing the page or contact support if the problem persists.",
      devErrorDescription: "The application encountered an error during development. Check the details below and your browser console for more information."
    },
    contact: {
      title: "Get in touch",
      description: "Booking a course, planning team training, or scoping a consulting engagement — drop us a note and we'll come back to you within a working day.",
      contactInformation: "Contact details",
      emailUs: "Email",
      emailDescription: "For training inquiries and course information",
      callUs: "Call",
      callSchedule: "Mon-Fri, 9:00–17:00 CET",
      ourReach: "Where we work",
      reachDescription: "Clients across the Netherlands and Europe",
      locations: "Netherlands • Belgium • UK",
      availability: "Remote & on-site",
      whyChooseUs: "What you can expect",
      expertGuidance: "Direct access to the trainer",
      expertDescription: "Yaïr replies personally — no SDR layer, no routing.",
      flexibleScheduling: "Remote or on-site",
      flexibleDescription: "Pick the format that works for your team and timezone.",
      tailoredSolutions: "Right-sized scope",
      tailoredDescription: "We'll suggest the smallest course or engagement that solves your problem.",
      microsoftCertified: "Microsoft Certified Trainer",
      mctTrainers: "MCT & active Azure consultant",
      contactForm: "Contact form",
      formDescription: "Fill out the form and we'll get back to you within a working day",
      back: "Back",
      defaultServiceTitle: "Azure services — get in touch",
      letsConnect: "Talk to us",
      pageDescription: "Training, consulting, or just a quick question — drop a note and we'll come back to you within a working day.",
      sendUsMessage: "Send a message",
      officialPartner: "MCT & active Azure consultant"
    },
    form: {
      registerInterest: "Register Your Interest",
      contactUs: "Contact Us",
      fullName: "Full Name",
      email: "Email Address",
      interestedTraining: "Interested Training (Optional)",
      preferredDates: "Preferred Dates (Optional)",
      preferredDatesDesc: "Add one or more preferred dates for your consultation. You can select specific dates, choose by week number, or describe time periods.",
      addPreferredDate: "Add Preferred Date",
      addAnotherDate: "Add Another Date Option",
      additionalInfo: "Additional Information (Optional)",
      additionalInfoPlaceholder: "Tell us about your goals, team size, specific requirements, or any questions...",
      scheduleConsultation: "Send Message",
      scheduling: "Scheduling...",
      connectionError: "Connection error. Please check your internet connection and try again.",
      submitError: "Failed to submit inquiry. Please try again.",
      submissionSuccess: "Training inquiry submitted successfully!",
      contactWithin24h: "We'll contact you within 24 hours.",
      inquirySubmitted: "Inquiry Submitted!",
      thankYou: "Thank you for your interest",
      contactWithin24hDetails: "We'll contact you within 24 hours to discuss your training needs.",
      submitAnother: "Submit Another Inquiry"
    },
    trainingDetail: {
      title: "Training Details",
      comingSoon: "Training details for {slug} are coming soon!",
      underDevelopment: {
        title: "🚧 Under Development",
        description: "We're working on detailed training pages with comprehensive course information, learning objectives, prerequisites, and enrollment options."
      },
      goBack: "← Go Back",
      labels: {
        level: "Level",
        duration: "Duration",
        participants: "Participants",
        maxParticipants: "Max",
        learningObjectives: "Learning Objectives",
        prerequisites: "Prerequisites",
        targetAudience: "Target Audience",
        courseModules: "Course Modules",
        certification: "Certification",
        tags: "Tags",
        day: "Day",
        days: "Days",
        hours: "hours"
      }
    },
    trainingOverview: {
      title: "Training catalog",
      subtitle: "Microsoft Azure, Microsoft 365, and Power Platform courses delivered in Dutch or English, remote or in-company. Filter by track or level to find the right one for your team.",
      totalCourses: "Total Courses",
      category: "Category",
      allCategories: "All Categories",
      level: "Level",
      allLevels: "All Levels",
      sortBy: "Sort By",
      titleAZ: "Title (A-Z)",
      difficultyLevel: "Difficulty Level",
      duration: "Duration",
      featuredOnly: "Featured Only",
      featured: "Featured",
      showingCourses: "Showing {filtered} of {total} courses",
      viewCourseDetails: "View Course Details",
      searchPlaceholder: "Search courses..."
    },
    notFound: {
      pageNotFound: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved to a new location.",
      backToHome: "Back to Home",
      browseTraining: "Browse Training",
      lookingForSomething: "Looking for something specific?",
      ourServices: "Our Services"
    },
    bento: {
      title: "Choose the training track that matches the work in front of you.",
      subtitle: "Most teams come to us for one of these routes: Microsoft fundamentals, Azure operations, architecture, or Microsoft 365 administration.",
      viewAllModules: "View all training",
      explore: "Explore",
      featuredLabel: "Most requested by teams",
      featuredKicker: "Operations track",
      featuredTitle: "AZ-104 for admins who need to run Azure well.",
      featuredDesc: "Identity, networking, storage, governance, and operational decision-making taught through the kind of environment work teams actually inherit.",
      featuredCta: "See the administrator track",
      fundamentalsTitle: "AZ-900 Fundamentals",
      fundamentalsDesc: "For teams that need a clear baseline before they start operating or designing in Azure.",
      architectTitle: "AZ-305 Architecture",
      architectDesc: "For architects shaping landing zones, governance, resilience, and cloud design decisions.",
      securityTitle: "AZ-500 Security",
      securityDesc: "For security and platform teams building identity, posture management, and operational controls.",
      m365Title: "Microsoft 365 Administration",
      m365Desc: "For teams responsible for tenant operations, identity, compliance, and day-to-day Microsoft 365 administration.",
      teamTitle: "In-company Azure sessions",
      teamDesc: "Use the homepage as a route into custom team training: aligned on your roles, your architecture, and the pressure points your teams are dealing with now.",
      teamCta: "Plan a team workshop",
      mctTrainer: "Microsoft Certified Trainer",
      trainerDesc: "More than 15 years delivering Azure and Microsoft 365 work — the workshops cover what teams actually run into around governance, security, and platform operations.",
      founderTitle: "Yaïr leads the training, not a generic content library.",
      founderCta: "Read Yaïr's background"
    },
    pathways: {
      title: "How teams usually train with us",
      subtitle: "We usually help companies align first, build operational depth second, and then move into architecture or security specialisation.",
      cta: "View course",
      stages: [
        {
          id: 'az-900',
          title: 'AZ-900',
          subtitle: 'Start with shared Azure language',
          description: 'Use this track when a broader team needs to understand cloud concepts, Azure basics, and how the platform fits together.',
          slug: 'azure-fundamentals',
          position: 'left'
        },
        {
          id: 'az-104',
          title: 'AZ-104',
          subtitle: 'Build operational depth',
          description: 'Move into identity, governance, networking, compute, and storage when the team is responsible for running Azure day to day.',
          slug: 'azure-administrator',
          position: 'right'
        },
        {
          id: 'az-305',
          title: 'AZ-305',
          subtitle: 'Design for production',
          description: 'Use the architecture route for landing zones, resilience, governance choices, and cloud design tradeoffs across environments.',
          slug: 'azure-solutions-architect',
          position: 'left'
        }
      ],
      bottomCta: "Plan your team's training route"
    },
    trainingSection: {
      title: "Microsoft certification tracks",
      subtitle: "Delivered by an MCT with active Azure consulting practice — every session is shaped by real environment work, not a content library.",
      exploreAll: "View all tracks"
    },
    popularCourses: {
      courses: [
        {
          id: 'az-900',
          code: 'AZ-900',
          title: 'Azure Fundamentals',
          description: 'Build foundational knowledge of cloud services and how they are provided with Microsoft Azure',
          level: 'Beginner',
          duration: '2 days',
          category: 'Cloud Fundamentals',
          highlights: [
            'Describe cloud computing concepts',
            'Describe Azure core services and solutions',
            'Describe Azure security, privacy, compliance and trust'
          ]
        },
        {
          id: 'az-104',
          code: 'AZ-104',
          title: 'Azure Administrator Associate',
          description: 'Master Azure administration skills for managing cloud infrastructure and resources',
          level: 'Intermediate',
          duration: '4 days',
          category: 'Cloud Fundamentals',
          highlights: [
            'Manage Azure identities and governance',
            'Implement and manage storage solutions',
            'Deploy and manage Azure compute resources'
          ]
        },
        {
          id: 'az-204',
          code: 'AZ-204',
          title: 'Azure Developer Associate',
          description: 'Develop cloud solutions and applications on Microsoft Azure platform',
          level: 'Intermediate',
          duration: '4 days',
          category: 'Cloud Development',
          highlights: [
            'Develop Azure compute solutions',
            'Develop for Azure storage',
            'Implement Azure security',
            'Monitor, troubleshoot and optimize solutions'
          ]
        }
      ]
    },
    quiz: {
      az104Readiness: {
        seoTitle: 'AZ-104 Readiness Quiz - Free Azure Administrator Self-Assessment',
        seoDescription: 'Free 12-question AZ-104 readiness quiz covering all five Microsoft Azure Administrator exam domains. Get domain-level feedback on whether you are ready to book.',
        breadcrumbTools: 'Tools',
        breadcrumbQuiz: 'AZ-104 readiness quiz',
        eyebrow: 'Free quiz · 12 questions · ~6 minutes',
        title: 'AZ-104 readiness quiz',
        lede: 'Twelve scenario-style questions across the five Azure Administrator exam domains. We score per domain so you can see exactly where to spend study time before booking the real exam.',
        bullet1: 'Three questions per major domain, weighted to match the real exam blueprint.',
        bullet2: 'Explanations for every answer at the end, not just a score.',
        bullet3: 'No login, no email capture. Runs entirely in your browser.',
        startButton: 'Start quiz',
        questionOf: 'Question {current} of {total}',
        backButton: 'Back',
        nextButton: 'Next',
        seeResults: 'See results',
        resultsEyebrow: 'Results',
        scoreHeading: 'You scored {correct} of {total}',
        byDomain: 'By domain',
        examPortion: 'of exam',
        answerReview: 'Answer review',
        correctLabel: 'Correct:',
        verdictLikelyReady: 'Likely ready',
        verdictClose: 'Close, but exposed',
        verdictNotYet: 'Not yet',
        adviceLikelyReady: 'Score this high in our pretest typically passes the real exam. Book a date and finish weak domains in lab.',
        adviceClose: 'Knowledge is solid but some domains will hurt you. Spend a week per weak domain in hands-on labs before booking.',
        adviceNotYet: 'Booking now risks a failed first attempt. A structured AZ-104 course with labs gets you here in 2 to 4 weeks.',
        seeCourseCta: 'See AZ-104 course',
        retakeButton: 'Retake',
        domainLabels: {
          'identity-governance': 'Identity & governance',
          storage: 'Storage',
          compute: 'Compute',
          networking: 'Networking',
          'monitoring-backup': 'Monitoring & backup',
        },
      },
    },
  },
  nl: {
    nav: navNl,
    language: languageNl,
    header: {
      mctCertified: "MCT-gecertificeerd",
      logoAlt: "Cloud Evolvers Logo",
      backgroundLogoAlt: "Cloud Evolvers achtergrond"
    },
    hero: heroNl,
    training: trainingNl,
    services: servicesNl,
    trust: trustNl,
    footer: footerNl,
    blog: blogNl,
    legal: {
      backToHome: "Terug naar Home",
      lastUpdated: "Laatst bijgewerkt:",
      privacyPolicy: "Privacybeleid",
      termsOfService: "Algemene Voorwaarden",
      cookiePolicy: "Cookiebeleid",
      downloadTerms: "Download Algemene Voorwaarden",
      downloadDescription: "Download het volledige document met de Algemene Voorwaarden in de taal van uw voorkeur:",
      contactUs: "Neem Contact Op"
    },
    servicesPage: {
      title: "Consultancy naast de training",
      subtitle: "Hands-on werk in Azure en Microsoft 365 voor teams die verder willen dan slides — landing zones, tenantmigraties, security hardening, automatisering. Dezelfde trainer leidt het traject.",
      moreFeatures: "+{count} meer",
      contact: {
        title: "Hulp nodig bij een specifiek project?",
        description: "Vertel ons waar je mee bezig bent. We komen terug met een scope, een planning en de juiste persoon om het te leiden — meestal binnen één werkdag.",
        contactUs: "Neem contact op",
        viewTraining: "Bekijk trainingen"
      }
    },
    about: {
      title: "Over Cloud Evolvers",
      subtitle: "Cloud Evolvers is het trainingsmerk van Spot Cloud — een Nederlandse consultancy met 15+ jaar hands-on ervaring in Microsoft-infrastructuur. We trainen de mensen die Azure en Microsoft 365 in productie draaien.",
      ourStory: {
        title: "Hoe we werken",
        content1: "Cloud Evolvers is het trainingsmerk van Spot Cloud, het bedrijf dat Yaïr in 2023 oprichtte. Spot Cloud doet ook consultancywerk — Azure landing zones, Microsoft 365-tenantarchitectuur en automatisering met Bicep, PowerShell en Terraform.",
        content2: "Oprichter Yaïr Knijn werkt al meer dan 15 jaar met Microsoft-technologieën — het grootste deel van die tijd hands-on in Azure-omgevingen bij Nederlandse organisaties.",
        whySpotCloud: "Waarom Spot Cloud?",
        spotCloudExplanation: "De naam komt van onze Dalmatiër. Vlekken zijn uniek, en dat geldt ook voor elke cloudomgeving waarin we werken. Geen twee tenants zijn hetzelfde, dus geen twee trainingsprogramma's zouden dat ook moeten zijn."
      },
      ourMission: {
        title: "Training die uit de praktijk komt",
        content: "Elke cursus wordt gevormd door echt Azure- en Microsoft 365-werk — tenantmigraties, landing zone-builds, security hardening, kostenanalyses. We behandelen de keuzes die teams in de praktijk maken bij het overnemen of opschalen van omgevingen, niet alleen de examenstof.",
        vision: "Kleine groepen, echte labs",
        visionContent: "Sessies hebben maximaal 10 deelnemers, zodat iedereen hands-on aan de slag kan. Labs draaien in live Azure-omgevingen, geen sandbox-simulators. Deelnemers gaan weg met spierwerk in plaats van alleen aantekeningen."
      },
      specialties: {
        title: "Wat we doen",
        items: [
          {
            title: "Microsoft Certified Training",
            description: "Azure- en Microsoft 365-certificeringstrajecten voor IT-teams"
          },
          {
            title: "End-to-end implementaties",
            description: "Hands-on werk aan Azure-platform en M365-tenants"
          },
          {
            title: "Automatisering",
            description: "PowerShell, Bicep en CI/CD-pipelines voor Azure-omgevingen"
          },
          {
            title: "Consultancy",
            description: "Architectuuradvies voor landing zones, governance en migraties"
          }
        ]
      },
      team: {
        title: "Wie geeft de training",
        founder: {
          name: "Yaïr Knijn",
          role: "Oprichter & lead trainer",
          description: "Microsoft Certified Trainer met 15+ jaar ervaring in en rondom Microsoft cloud — Azure, Microsoft 365 en de platformkeuzes die daarbij horen."
        }
      },
      contact: {
        title: "Even sparren over training?",
        description: "Vertel ons waar jullie team mee bezig is, dan stellen we de tracks en het format voor die passen.",
        email: "training@cloudevolvers.com"
      }
    },
    error: {
      applicationError: "Applicatiefout",
      developmentError: "Ontwikkelingsfout opgevangen",
      developmentMode: "Ontwikkelmodus",
      somethingWentWrong: "Er is iets misgegaan",
      errorDetailsForDebugging: "Foutdetails voor debugging",
      unknownErrorOccurred: "Onbekende fout opgetreden",
      errorInformation: "Foutinformatie",
      message: "Bericht",
      stackTrace: "Stack trace",
      developmentTips: "Ontwikkeltips",
      checkConsole: "Controleer de browserconsole voor meer foutdetails",
      lookForSyntax: "Zoek naar syntaxfouten of ontbrekende imports in de stack trace",
      verifyComponents: "Controleer of alle componenten correct zijn geëxporteerd en geïmporteerd",
      checkProps: "Controleer of vereiste props ontbreken of undefined zijn",
      tryAgain: "Opnieuw proberen",
      reloadPage: "Pagina herladen",
      errorDescription: "Er is iets onverwachts gebeurd tijdens het uitvoeren van de applicatie. Probeer de pagina te vernieuwen of neem contact op met de ondersteuning als het probleem aanhoudt.",
      devErrorDescription: "De applicatie heeft een fout ondervonden tijdens de ontwikkeling. Controleer de details hieronder en uw browserconsole voor meer informatie."
    },
    contact: {
      title: "Neem contact op",
      description: "Een cursus boeken, teamtraining plannen of een consultancy-traject scopen — stuur een bericht en we komen binnen één werkdag bij je terug.",
      contactInformation: "Contactgegevens",
      emailUs: "E-mail",
      emailDescription: "Voor vragen over trainingen en cursusinformatie",
      callUs: "Bel ons",
      callSchedule: "Ma–vr, 09:00–17:00 CET",
      ourReach: "Waar we werken",
      reachDescription: "Klanten in Nederland en Europa",
      locations: "Nederland • België • VK",
      availability: "Remote & op locatie",
      whyChooseUs: "Wat je kunt verwachten",
      expertGuidance: "Direct contact met de trainer",
      expertDescription: "Yaïr antwoordt zelf — geen SDR-laag, geen routing.",
      flexibleScheduling: "Remote of op locatie",
      flexibleDescription: "Kies het format dat werkt voor je team en tijdzone.",
      tailoredSolutions: "Passende scope",
      tailoredDescription: "We stellen de kleinste cursus of opdracht voor die jullie probleem oplost.",
      microsoftCertified: "Microsoft Certified Trainer",
      mctTrainers: "MCT & actief Azure-consultant",
      contactForm: "Contactformulier",
      formDescription: "Vul het formulier in en we komen binnen één werkdag bij je terug",
      back: "Terug",
      defaultServiceTitle: "Azure-diensten – contact",
      letsConnect: "Even sparren",
      pageDescription: "Training, consultancy of gewoon een vraag — stuur een bericht en we komen binnen één werkdag bij je terug.",
      sendUsMessage: "Stuur een bericht",
      officialPartner: "MCT & actief Azure-consultant"
    },
    form: {
      registerInterest: "Registreer uw interesse",
      contactUs: "Neem contact op",
      fullName: "Volledige naam",
      email: "E-mailadres",
      interestedTraining: "Training van interesse (optioneel)",
      preferredDates: "Voorkeursdatums (optioneel)",
      preferredDatesDesc: "Voeg een of meer voorkeursdatums toe voor uw gesprek. U kunt specifieke datums selecteren, kiezen op weeknummer of tijdsperiodes beschrijven.",
      addPreferredDate: "Voorkeursdatum toevoegen",
      addAnotherDate: "Nog een datumoptie toevoegen",
      additionalInfo: "Aanvullende informatie (optioneel)",
      additionalInfoPlaceholder: "Vertel ons over uw doelen, teamgrootte, specifieke wensen of eventuele vragen...",
      scheduleConsultation: "Bericht versturen",
      scheduling: "Wordt verzonden...",
      connectionError: "Verbindingsfout. Controleer uw internetverbinding en probeer het opnieuw.",
      submitError: "Verzenden mislukt. Probeer het opnieuw.",
      submissionSuccess: "Trainingsaanvraag succesvol ingediend!",
      contactWithin24h: "Wij nemen binnen 24 uur contact met u op.",
      inquirySubmitted: "Aanvraag ingediend!",
      thankYou: "Bedankt voor uw interesse in",
      contactWithin24hDetails: "Wij nemen binnen 24 uur contact met u op om uw trainingsbehoeften te bespreken.",
      submitAnother: "Nog een aanvraag indienen"
    },
    trainingDetail: {
      title: "Trainingsdetails",
      comingSoon: "Trainingsdetails voor {slug} komen binnenkort!",
      underDevelopment: {
        title: "🚧 In ontwikkeling",
        description: "We werken aan gedetailleerde trainingspagina's met uitgebreide cursusinformatie, leerdoelen, vereisten en inschrijfmogelijkheden."
      },
      goBack: "← Ga terug",
      labels: {
        level: "Niveau",
        duration: "Duur",
        participants: "Deelnemers",
        maxParticipants: "Max",
        learningObjectives: "Leerdoelen",
        prerequisites: "Vereisten",
        targetAudience: "Doelgroep",
        courseModules: "Cursusmodules",
        certification: "Certificering",
        tags: "Tags",
        day: "Dag",
        days: "Dagen",
        hours: "uur"
      }
    },
    trainingOverview: {
      title: "Trainingscatalogus",
      subtitle: "Microsoft Azure-, Microsoft 365- en Power Platform-cursussen, in het Nederlands of Engels, remote of in-company. Filter op track of niveau om de juiste training voor jullie team te vinden.",
      totalCourses: "Totaal aantal cursussen",
      category: "Categorie",
      allCategories: "Alle categorieën",
      level: "Niveau",
      allLevels: "Alle niveaus",
      sortBy: "Sorteren op",
      titleAZ: "Titel (A–Z)",
      difficultyLevel: "Moeilijkheidsgraad",
      duration: "Duur",
      featuredOnly: "Alleen uitgelichte",
      featured: "Uitgelicht",
      showingCourses: "{filtered} van {total} cursussen weergegeven",
      viewCourseDetails: "Bekijk cursusdetails",
      searchPlaceholder: "Zoek cursussen..."
    },
    notFound: {
      pageNotFound: "Pagina Niet Gevonden",
      description: "De pagina die u zoekt bestaat niet of is verplaatst naar een nieuwe locatie.",
      backToHome: "Terug naar Home",
      browseTraining: "Bekijk Trainingen",
      lookingForSomething: "Op zoek naar iets specifieks?",
      ourServices: "Onze Diensten"
    },
    bento: {
      title: "Kies het trainingstraject dat past bij het werk dat nu voor je ligt.",
      subtitle: "De meeste teams komen bij ons voor een van deze routes: Microsoft fundamentals, Azure operations, architectuur of Microsoft 365-administratie.",
      viewAllModules: "Bekijk alle trainingen",
      explore: "Ontdek",
      featuredLabel: "Meest gevraagd door teams",
      featuredKicker: "Operations track",
      featuredTitle: "AZ-104 voor beheerders die Azure echt goed moeten draaien.",
      featuredDesc: "Identity, networking, storage, governance en operationele keuzes uitgelegd via het soort omgevingen dat teams in de praktijk overnemen.",
      featuredCta: "Bekijk het administrator-traject",
      fundamentalsTitle: "AZ-900 Fundamentals",
      fundamentalsDesc: "Voor teams die eerst een heldere basis nodig hebben voordat ze Azure gaan beheren of ontwerpen.",
      architectTitle: "AZ-305 Architectuur",
      architectDesc: "Voor architecten die landing zones, governance, resilience en cloudontwerp moeten vormgeven.",
      securityTitle: "AZ-500 Security",
      securityDesc: "Voor security- en platformteams die identity, posture management en operationele controls opzetten.",
      m365Title: "Microsoft 365 Administration",
      m365Desc: "Voor teams die verantwoordelijk zijn voor tenantbeheer, identity, compliance en dagelijkse Microsoft 365-administratie.",
      teamTitle: "In-company Azure-sessies",
      teamDesc: "Gebruik de homepage als instap naar maatwerk voor teams: afgestemd op jullie rollen, architectuur en de drukpunten waar jullie nu mee zitten.",
      teamCta: "Plan een teamworkshop",
      mctTrainer: "Microsoft Certified Trainer",
      trainerDesc: "Meer dan 15 jaar werk in Azure en Microsoft 365 — de workshops behandelen waar teams in de praktijk tegenaan lopen rond governance, security en platformbeheer.",
      founderTitle: "Yaïr geeft de training zelf, niet een generieke contentbibliotheek.",
      founderCta: "Lees meer over Yaïr"
    },
    pathways: {
      title: "Hoe teams meestal met ons trainen",
      subtitle: "Meestal helpen we bedrijven eerst met een gezamenlijke basis, daarna met operationele diepgang en vervolgens met architectuur of security-specialisatie.",
      cta: "Bekijk training",
      stages: [
        {
          id: 'az-900',
          title: 'AZ-900',
          subtitle: 'Begin met gedeelde Azure-taal',
          description: 'Gebruik dit traject wanneer een breder team cloudconcepten, Azure-basiskennis en het totaalplaatje goed moet begrijpen.',
          slug: 'azure-fundamentals',
          position: 'left'
        },
        {
          id: 'az-104',
          title: 'AZ-104',
          subtitle: 'Bouw operationele diepgang op',
          description: 'Ga verder met identity, governance, networking, compute en storage wanneer het team Azure dagelijks beheert.',
          slug: 'azure-administrator',
          position: 'right'
        },
        {
          id: 'az-305',
          title: 'AZ-305',
          subtitle: 'Ontwerp voor productie',
          description: 'Gebruik de architectuurroute voor landing zones, resilience, governancekeuzes en cloud trade-offs over meerdere omgevingen heen.',
          slug: 'azure-solutions-architect',
          position: 'left'
        }
      ],
      bottomCta: "Plan het trainingspad van je team"
    },
    trainingSection: {
      title: "Microsoft-certificeringstrajecten",
      subtitle: "Gegeven door een MCT met een actieve Azure-consultancypraktijk — elke sessie is gevormd door echt werk in productieomgevingen, geen contentbibliotheek.",
      exploreAll: "Bekijk alle trajecten"
    },
    popularCourses: {
      courses: [
        {
          id: 'az-900',
          code: 'AZ-900',
          title: 'Azure Fundamentals',
          description: 'Bouw basiskennis op over cloudservices en hoe deze worden geleverd met Microsoft Azure',
          level: 'Beginner',
          duration: '2 dagen',
          category: 'Cloud Fundamentals',
          highlights: [
            'Cloud computing-concepten begrijpen',
            'Azure-kernservices en -oplossingen leren kennen',
            'Azure-beveiliging, privacy, compliance en vertrouwen doorgronden'
          ]
        },
        {
          id: 'az-104',
          code: 'AZ-104',
          title: 'Azure Administrator Associate',
          description: 'Beheers Azure-administratievaardigheden voor het beheren van cloudinfrastructuur en -resources',
          level: 'Intermediate',
          duration: '4 dagen',
          category: 'Cloud Fundamentals',
          highlights: [
            'Azure-identiteiten en governance beheren',
            'Storage-oplossingen implementeren en beheren',
            'Azure compute-resources deployen en beheren'
          ]
        },
        {
          id: 'az-204',
          code: 'AZ-204',
          title: 'Azure Developer Associate',
          description: 'Ontwikkel cloudoplossingen en -applicaties op het Microsoft Azure-platform',
          level: 'Intermediate',
          duration: '4 dagen',
          category: 'Cloud Development',
          highlights: [
            'Azure compute-oplossingen ontwikkelen',
            'Ontwikkelen voor Azure Storage',
            'Azure-beveiliging implementeren',
            'Oplossingen monitoren, problemen oplossen en optimaliseren'
          ]
        }
      ]
    },
    quiz: {
      az104Readiness: {
        seoTitle: 'AZ-104 Gereedheidtest - Gratis Azure Administrator Zelfbeoordeling',
        seoDescription: 'Gratis 12-vragen AZ-104 gereedheidtest over alle vijf domeinen van het Microsoft Azure Administrator-examen. Krijg per domein feedback of je klaar bent om te boeken.',
        breadcrumbTools: 'Tools',
        breadcrumbQuiz: 'AZ-104 gereedheidtest',
        eyebrow: 'Gratis quiz · 12 vragen · ~6 minuten',
        title: 'AZ-104 gereedheidtest',
        lede: 'Twaalf scenario-vragen verdeeld over de vijf domeinen van het Azure Administrator-examen. Per domein gescoord zodat je precies ziet waar je nog studietijd in moet steken voor je het echte examen boekt.',
        bullet1: 'Drie vragen per hoofddomein, gewogen op basis van de echte examen-blueprint.',
        bullet2: 'Uitleg bij elk antwoord aan het einde, niet alleen een score.',
        bullet3: 'Geen aanmelding, geen e-mailregistratie. Draait volledig in je browser.',
        startButton: 'Quiz starten',
        questionOf: 'Vraag {current} van {total}',
        backButton: 'Terug',
        nextButton: 'Volgende',
        seeResults: 'Resultaten bekijken',
        resultsEyebrow: 'Resultaten',
        scoreHeading: 'Je scoorde {correct} van {total}',
        byDomain: 'Per domein',
        examPortion: 'van examen',
        answerReview: 'Antwoorden bekijken',
        correctLabel: 'Correct:',
        verdictLikelyReady: 'Waarschijnlijk klaar',
        verdictClose: 'Bijna, maar nog kwetsbaar',
        verdictNotYet: 'Nog niet',
        adviceLikelyReady: 'Kandidaten die hier scoren op onze voortest slagen doorgaans voor het echte examen. Boek een datum en haal de zwakke domeinen bij via een lab.',
        adviceClose: 'De kennis is solide, maar sommige domeinen zullen je punten kosten. Spend een week per zwak domein in hands-on labs voor je boekt.',
        adviceNotYet: 'Nu boeken riskeert een mislukte eerste poging. Een gestructureerde AZ-104-cursus met labs brengt je er in 2 tot 4 weken.',
        seeCourseCta: 'Bekijk AZ-104-cursus',
        retakeButton: 'Opnieuw doen',
        domainLabels: {
          'identity-governance': 'Identity & governance',
          storage: 'Opslag',
          compute: 'Compute',
          networking: 'Netwerken',
          'monitoring-backup': 'Monitoring & backup',
        },
      },
    },
  }
} as const;
