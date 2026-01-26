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
      mctCertified: "MCT Gecertificeerd",
      logoAlt: "Cloud Evolvers Logo",
      backgroundLogoAlt: "Cloud Evolvers Achtergrond"
    },
    constructionBanner: {
      defaultMessage: "🚧 Platform in actieve ontwikkeling - Nieuwe functies en verbeteringen komen binnenkort!",
      dismissLabel: "Sluit ontwikkelingsbanner"
    },
    hero: heroNl,
    training: trainingNl,
    services: servicesNl,
    trust: trustNl,
    footer: footerNl,
    blog: blogNl,
    servicesPage: {
      title: "Onze Diensten",
      subtitle: "Uitgebreide cloud engineering en consultancy diensten om uw organisatie te helpen slagen in de digitale transformatie reis.",
      moreFeatures: "+{count} meer",
      contact: {
        title: "Klaar om te Beginnen?",
        description: "Neem vandaag contact met ons op om te bespreken hoe onze diensten uw organisatie kunnen helpen bij het bereiken van de cloud transformatie doelen.",
        contactUs: "Neem Contact Op",
        viewTraining: "Bekijk Trainingscursussen"
      }
    },
    about: {
      title: "Over Cloud Evolvers",
      subtitle: "Gespecialiseerd Microsoft Certified Training (MCT) en consultancy bedrijf, opgericht in 2023 met meer dan 15 jaar IT ervaring.",
      ourStory: {
        title: "Ons Verhaal",
        content1: "Cloud Evolvers is onderdeel van Spot Cloud, en onze passie voor technologie en automatisering drijft ons om klanten te helpen excelleren in het Microsoft ecosysteem.",
        content2: "Onze oprichter, Yaïr Knijn, heeft een passie voor technologie gekoesterd sinds zijn kindertijd, met meer dan 15 jaar ervaring met Microsoft technologieën en cloud oplossingen.",
        whySpotCloud: "Waarom Spot Cloud?",
        spotCloudExplanation: "De naam Spot Cloud komt van onze liefde voor honden, specifiek Dalmatiërs. Net zoals de vlekken van een Dalmatiër uniek zijn, leveren wij unieke cloud oplossingen aan onze klanten."
      },
      ourMission: {
        title: "Onze Missie",
        content: "Wij bieden end-to-end implementaties en training in het Microsoft ecosysteem, gebruikmakend van onze liefde voor automatisering om klanten te helpen hun doelen te bereiken.",
        vision: "Onze Visie",
        visionContent: "Wij geloven in praktische, resultaatgerichte training die direct toepasbaar is op de werkplek. Door onze uitgebreide ervaring met Azure implementaties kunnen wij training aanbieden die verder gaat dan theorie - wij delen praktijkervaringen en best practices."
      },
      specialties: {
        title: "Onze Specialiteiten",
        items: [
          {
            title: "Microsoft Certified Training",
            description: "Azure en Microsoft 365 trainingsprogramma's"
          },
          {
            title: "End-to-end Implementaties",
            description: "Complete Microsoft stack oplossingen"
          },
          {
            title: "Automatisering",
            description: "Efficiëntie door intelligente automatisering"
          },
          {
            title: "Consultancy",
            description: "Strategisch advies voor cloud transformatie"
          }
        ]
      },
      team: {
        title: "Ons Team",
        founder: {
          name: "Yaïr Knijn",
          role: "Oprichter & CEO",
          description: "Meer dan 15 jaar ervaring met Microsoft technologieën en cloud oplossingen. Passie voor technologie sinds kindertijd, nu Microsoft Certified Trainer."
        }
      },
      contact: {
        title: "Neem Contact Op",
        description: "Klaar om uw cloud carrière te bevorderen? Neem contact met ons op om meer te leren over onze trainingsprogramma's.",
        email: "training@cloudevolvers.com"
      }
    },
    error: {
      applicationError: "Applicatie Fout",
      developmentError: "Development Fout Opgevangen",
      developmentMode: "Development Modus",
      somethingWentWrong: "Er is iets misgegaan",
      errorDetailsForDebugging: "Fout Details voor Debugging",
      unknownErrorOccurred: "Onbekende fout opgetreden",
      errorInformation: "Fout Informatie",
      message: "Bericht",
      stackTrace: "Stack Trace",
      developmentTips: "Development Tips",
      checkConsole: "Controleer de browser console voor meer fout details",
      lookForSyntax: "Zoek naar syntax fouten of ontbrekende imports in de stack trace",
      verifyComponents: "Verifieer dat alle componenten correct geëxporteerd/geïmporteerd zijn",
      checkProps: "Controleer of vereiste props ontbreken of undefined zijn",
      tryAgain: "Opnieuw Proberen",
      reloadPage: "Pagina Herladen",
      errorDescription: "Er is iets onverwachts gebeurd tijdens het uitvoeren van de applicatie. Probeer de pagina te vernieuwen of neem contact op met ondersteuning als het probleem aanhoudt.",
      devErrorDescription: "De applicatie heeft een fout ondervonden tijdens development. Controleer de details hieronder en uw browser console voor meer informatie."
    },
    contact: {
      title: "Neem Contact Met Ons Op",
      description: "Ontdek hoe Cloud Evolvers uw Azure-reis kan versnellen met op maat gemaakte trainingen en services.",
      contactInformation: "Contactgegevens",
      emailUs: "E-mail Ons",
      emailDescription: "Voor trainingsvragen en cursusinformatie",
      callUs: "Bel Ons",
      callSchedule: "Ma-Vr, 09:00 - 17:00 CET",
      ourReach: "Ons Bereik",
      reachDescription: "Klanten door heel Europa",
      locations: "Nederland • België • UK",
      availability: "Op afstand & ter plaatse",
      whyChooseUs: "Waarom Kiezen voor Ons?",
      expertGuidance: "Expert Advies",
      expertDescription: "Persoonlijke begeleiding van Microsoft gecertificeerde trainers",
      flexibleScheduling: "Flexibele Planning",
      flexibleDescription: "Plan uw consultatie op een moment dat uitkomt",
      tailoredSolutions: "Oplossingen op Maat",
      tailoredDescription: "Krijg aanbevelingen die passen bij uw specifieke behoeften",
      microsoftCertified: "Microsoft Gecertificeerd",
      mctTrainers: "MCT & Azure Expert trainers",
      contactForm: "Contact Formulier",
      formDescription: "Vul het formulier in en we nemen binnen 24 uur contact met u op",
      back: "Terug",
      defaultServiceTitle: "Azure Services Contact"
    },
    form: {
      registerInterest: "Registreer Uw Interesse",
      contactUs: "Contact Ons",
      fullName: "Volledige Naam",
      email: "E-mailadres",
      interestedTraining: "Geïnteresseerde Training (Optioneel)",
      preferredDates: "Voorkeurdatums (Optioneel)",
      preferredDatesDesc: "Voeg een of meer voorkeurdatums toe voor uw consultatie. U kunt specifieke datums selecteren, kiezen op weeknummer, of tijdsperiodes beschrijven.",
      addPreferredDate: "Voorkeurdatum Toevoegen",
      addAnotherDate: "Nog een Datum Optie Toevoegen",
      additionalInfo: "Aanvullende Informatie (Optioneel)",
      additionalInfoPlaceholder: "Vertel ons over uw doelen, teamgrootte, specifieke vereisten, of eventuele vragen...",
      scheduleConsultation: "Bericht Versturen",
      scheduling: "Plannen...",
      connectionError: "Verbindingsfout. Controleer uw internetverbinding en probeer opnieuw.",
      submitError: "Kan verzoek niet indienen. Probeer opnieuw.",
      submissionSuccess: "Trainingaanvraag succesvol ingediend!",
      contactWithin24h: "We nemen binnen 24 uur contact met u op.",
      inquirySubmitted: "Aanvraag Ingediend!",
      thankYou: "Bedankt voor uw interesse in",
      contactWithin24hDetails: "We nemen binnen 24 uur contact met u op om uw trainingsbehoeften te bespreken.",
      submitAnother: "Nog een Aanvraag Indienen"
    },
    trainingDetail: {
      title: "Training Details",
      comingSoon: "Training details voor {slug} komen binnenkort!",
      underDevelopment: {
        title: "🚧 In Ontwikkeling",
        description: "We werken aan gedetailleerde trainingspagina's met uitgebreide cursusinformatie, leerdoelen, vereisten en inschrijvingsopties."
      },
      goBack: "← Ga Terug",
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
        hours: "uren"
      }
    },
    trainingOverview: {
      title: "Training Cursussen",
      subtitle: "Ontdek onze uitgebreide collectie Microsoft Azure, Microsoft 365 en Power Platform training cursussen. Filter op categorie, niveau of zoek om de perfecte cursus voor uw leerreis te vinden.",
      totalCourses: "Totaal Cursussen",
      category: "Categorie",
      allCategories: "Alle Categorieën",
      level: "Niveau",
      allLevels: "Alle Niveaus",
      sortBy: "Sorteren Op",
      titleAZ: "Titel (A-Z)",
      difficultyLevel: "Moeilijkheidsgraad",
      duration: "Duur",
      featuredOnly: "Alleen Uitgelicht",
      featured: "Uitgelicht",
      showingCourses: "{filtered} van {total} cursussen weergegeven",
      viewCourseDetails: "Bekijk Cursus Details",
      searchPlaceholder: "Zoek cursussen..."
    },
    trainingSection: {
      title: "Microsoft Trainingsprogramma's",
      subtitle: "Ontwikkel uw vaardigheden met onze uitgebreide Microsoft certificeringstrainingen",
      exploreAll: "Bekijk Alle Trainingen"
    },
    popularCourses: {
      courses: [
        {
          id: 'az-900',
          code: 'AZ-900',
          title: 'Azure Fundamentals',
          description: 'Bouw basiskennis op van cloudservices en hoe deze worden geleverd met Microsoft Azure',
          level: 'Beginner',
          duration: '2 dagen',
          category: 'Cloud Fundamentals',
          highlights: [
            'Beschrijf cloud computing concepten',
            'Beschrijf Azure core services en oplossingen',
            'Beschrijf Azure beveiliging, privacy, compliance en vertrouwen'
          ]
        },
        {
          id: 'az-104',
          code: 'AZ-104',
          title: 'Azure Administrator Associate',
          description: 'Beheers Azure administratie vaardigheden voor het beheren van cloud infrastructuur en resources',
          level: 'Intermediate',
          duration: '4 dagen',
          category: 'Cloud Fundamentals',
          highlights: [
            'Beheer Azure identiteiten en governance',
            'Implementeer en beheer storage oplossingen',
            'Deploy en beheer Azure compute resources'
          ]
        },
        {
          id: 'az-204',
          code: 'AZ-204',
          title: 'Azure Developer Associate',
          description: 'Ontwikkel cloud oplossingen en applicaties op het Microsoft Azure platform',
          level: 'Intermediate',
          duration: '4 dagen',
          category: 'Cloud Development',
          highlights: [
            'Ontwikkel Azure compute oplossingen',
            'Ontwikkel voor Azure storage',
            'Implementeer Azure beveiliging',
            'Monitor, troubleshoot en optimaliseer oplossingen'
          ]
        }
      ]
    }
  }
} as const;