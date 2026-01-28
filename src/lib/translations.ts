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
    constructionBanner: {
      defaultMessage: "🚧 Platform under active development - New features and improvements coming soon!",
      dismissLabel: "Dismiss construction banner"
    },
    hero: heroEn,
    training: trainingEn,
    services: servicesEn,
    trust: trustEn,
    footer: footerEn,
    blog: blogEn,
    servicesPage: {
      title: "Our Services",
      subtitle: "Comprehensive cloud engineering and consulting services to help your organization succeed in the digital transformation journey.",
      moreFeatures: "+{count} more",
      contact: {
        title: "Ready to Get Started?",
        description: "Contact us today to discuss how our services can help your organization achieve its cloud transformation goals.",
        contactUs: "Contact Us",
        viewTraining: "View Training Courses"
      }
    },
    about: {
      title: "About Cloud Evolvers",
      subtitle: "Specialized Microsoft Certified Training (MCT) and consulting company, founded in 2023 with over 15 years of IT experience.",
      ourStory: {
        title: "Our Story",
        content1: "Cloud Evolvers is part of Spot Cloud, and our passion for technology and automation drives us to help customers excel in the Microsoft ecosystem.",
        content2: "Our founder, Yaïr Knijn, has nurtured a passion for technology since his childhood, bringing over 15 years of experience with Microsoft technologies and cloud solutions.",
        whySpotCloud: "Why Spot Cloud?",
        spotCloudExplanation: "The name Spot Cloud stems from our love for dogs, specifically Dalmatians. Just like a Dalmatian's spots are unique, we deliver unique cloud solutions to our customers."
      },
      ourMission: {
        title: "Our Mission",
        content: "We provide end-to-end implementations and training in the Microsoft ecosystem, using our love for automation to help customers achieve their goals.",
        vision: "Our Vision",
        visionContent: "We believe in practical, results-oriented training that is immediately applicable in the workplace. Through our extensive experience with Azure implementations, we can offer training that goes beyond theory - we share real-world experiences and best practices."
      },
      specialties: {
        title: "Our Specialties",
        items: [
          {
            title: "Microsoft Certified Training",
            description: "Azure and Microsoft 365 training programs"
          },
          {
            title: "End-to-end Implementations",
            description: "Complete Microsoft stack solutions"
          },
          {
            title: "Automation",
            description: "Efficiency through intelligent automation"
          },
          {
            title: "Consultancy",
            description: "Strategic advice for cloud transformation"
          }
        ]
      },
      team: {
        title: "Our Team",
        founder: {
          name: "Yaïr Knijn",
          role: "Founder & CEO",
          description: "Over 15 years of experience with Microsoft technologies and cloud solutions. Passion for technology since childhood, now Microsoft Certified Trainer."
        }
      },
      contact: {
        title: "Get In Touch",
        description: "Ready to advance your cloud career? Contact us to learn more about our training programs.",
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
      title: "Get In Touch With Us",
      description: "Discover how Cloud Evolvers can accelerate your Azure journey with tailored training and services.",
      contactInformation: "Contact Information",
      emailUs: "Email Us",
      emailDescription: "For training inquiries and course information",
      callUs: "Call Us",
      callSchedule: "Mon-Fri, 9:00 AM - 5:00 PM CET",
      ourReach: "Our Reach",
      reachDescription: "Serving clients across Europe",
      locations: "Netherlands • Belgium • UK",
      availability: "Remote & On-site Available",
      whyChooseUs: "Why Choose Us?",
      expertGuidance: "Expert Guidance",
      expertDescription: "Personal guidance from Microsoft certified trainers",
      flexibleScheduling: "Flexible Scheduling",
      flexibleDescription: "Schedule your consultation at a time that works for you",
      tailoredSolutions: "Tailored Solutions",
      tailoredDescription: "Get recommendations that fit your specific needs",
      microsoftCertified: "Microsoft Certified",
      mctTrainers: "MCT & Azure Expert trainers",
      contactForm: "Contact Form",
      formDescription: "Fill out the form and we'll get back to you within 24 hours",
      back: "Back",
      defaultServiceTitle: "Azure Services Contact"
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
      title: "Training Courses",
      subtitle: "Discover our comprehensive collection of Microsoft Azure, Microsoft 365, and Power Platform training courses. Filter by category, level, or search to find the perfect course for your learning journey.",
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
    trainingSection: {
      title: "Microsoft Training Programs",
      subtitle: "Advance your career with our comprehensive Microsoft certification training programs",
      exploreAll: "Explore All Training Programs"
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
    }
  },
  nl: {
    nav: navNl,
    language: languageNl,
    header: {
      mctCertified: "MCT-gecertificeerd",
      logoAlt: "Cloud Evolvers Logo",
      backgroundLogoAlt: "Cloud Evolvers achtergrond"
    },
    constructionBanner: {
      defaultMessage: "🚧 Platform in ontwikkeling – Nieuwe functies en verbeteringen volgen binnenkort!",
      dismissLabel: "Banner sluiten"
    },
    hero: heroNl,
    training: trainingNl,
    services: servicesNl,
    trust: trustNl,
    footer: footerNl,
    blog: blogNl,
    servicesPage: {
      title: "Onze diensten",
      subtitle: "Uitgebreide cloud engineering- en consultancydiensten om uw organisatie te helpen slagen in de digitale transformatie.",
      moreFeatures: "+{count} meer",
      contact: {
        title: "Klaar om te beginnen?",
        description: "Neem vandaag nog contact met ons op om te bespreken hoe onze diensten uw organisatie kunnen helpen bij het bereiken van uw cloudtransformatiedoelen.",
        contactUs: "Neem contact op",
        viewTraining: "Bekijk trainingen"
      }
    },
    about: {
      title: "Over Cloud Evolvers",
      subtitle: "Gespecialiseerd Microsoft Certified Training (MCT) en consultancybedrijf, opgericht in 2023 met meer dan 15 jaar IT-ervaring.",
      ourStory: {
        title: "Ons verhaal",
        content1: "Cloud Evolvers maakt deel uit van Spot Cloud. Onze passie voor technologie en automatisering drijft ons om klanten te helpen excelleren in het Microsoft-ecosysteem.",
        content2: "Onze oprichter, Yaïr Knijn, koestert al vanaf zijn kindertijd een passie voor technologie en heeft meer dan 15 jaar ervaring met Microsoft-technologieën en cloudoplossingen.",
        whySpotCloud: "Waarom Spot Cloud?",
        spotCloudExplanation: "De naam Spot Cloud komt van onze liefde voor honden, in het bijzonder Dalmatiërs. Net zoals de vlekken van een Dalmatiër uniek zijn, leveren wij unieke cloudoplossingen aan onze klanten."
      },
      ourMission: {
        title: "Onze missie",
        content: "Wij bieden end-to-end implementaties en trainingen in het Microsoft-ecosysteem, waarbij we onze passie voor automatisering inzetten om klanten te helpen hun doelen te bereiken.",
        vision: "Onze visie",
        visionContent: "Wij geloven in praktische, resultaatgerichte trainingen die direct toepasbaar zijn op de werkvloer. Dankzij onze uitgebreide ervaring met Azure-implementaties kunnen wij trainingen aanbieden die verder gaan dan theorie – wij delen praktijkervaringen en best practices."
      },
      specialties: {
        title: "Onze specialiteiten",
        items: [
          {
            title: "Microsoft Certified Training",
            description: "Azure- en Microsoft 365-trainingsprogramma's"
          },
          {
            title: "End-to-end implementaties",
            description: "Complete Microsoft Stack-oplossingen"
          },
          {
            title: "Automatisering",
            description: "Efficiëntie door intelligente automatisering"
          },
          {
            title: "Consultancy",
            description: "Strategisch advies voor cloudtransformatie"
          }
        ]
      },
      team: {
        title: "Ons team",
        founder: {
          name: "Yaïr Knijn",
          role: "Oprichter & CEO",
          description: "Meer dan 15 jaar ervaring met Microsoft-technologieën en cloudoplossingen. Passie voor technologie sinds zijn kindertijd, nu Microsoft Certified Trainer."
        }
      },
      contact: {
        title: "Neem contact op",
        description: "Klaar om uw cloudcarrière een impuls te geven? Neem contact met ons op voor meer informatie over onze trainingsprogramma's.",
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
      title: "Neem contact met ons op",
      description: "Ontdek hoe Cloud Evolvers uw Azure-traject kan versnellen met op maat gemaakte trainingen en diensten.",
      contactInformation: "Contactgegevens",
      emailUs: "E-mail ons",
      emailDescription: "Voor vragen over trainingen en cursusinformatie",
      callUs: "Bel ons",
      callSchedule: "Ma–vr, 09:00–17:00 CET",
      ourReach: "Ons bereik",
      reachDescription: "Klanten door heel Europa",
      locations: "Nederland • België • VK",
      availability: "Op afstand & op locatie",
      whyChooseUs: "Waarom kiezen voor ons?",
      expertGuidance: "Deskundig advies",
      expertDescription: "Persoonlijke begeleiding van Microsoft-gecertificeerde trainers",
      flexibleScheduling: "Flexibele planning",
      flexibleDescription: "Plan uw gesprek op een moment dat u uitkomt",
      tailoredSolutions: "Oplossingen op maat",
      tailoredDescription: "Ontvang aanbevelingen die aansluiten bij uw specifieke behoeften",
      microsoftCertified: "Microsoft-gecertificeerd",
      mctTrainers: "MCT- & Azure Expert-trainers",
      contactForm: "Contactformulier",
      formDescription: "Vul het formulier in en wij nemen binnen 24 uur contact met u op",
      back: "Terug",
      defaultServiceTitle: "Azure Services – Contact"
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
      title: "Trainingscursussen",
      subtitle: "Ontdek onze uitgebreide collectie Microsoft Azure-, Microsoft 365- en Power Platform-trainingen. Filter op categorie, niveau of zoek om de perfecte cursus voor uw leertraject te vinden.",
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
    trainingSection: {
      title: "Microsoft-trainingsprogramma's",
      subtitle: "Ontwikkel uw vaardigheden met onze uitgebreide Microsoft-certificeringstrainingen",
      exploreAll: "Bekijk alle trainingen"
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
    }
  }
} as const;