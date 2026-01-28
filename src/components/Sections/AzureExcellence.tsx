import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/hooks/use-translations";
import {
  Shield,
  Trophy,
  Certificate,
  Users,
  Cloud,
  Lightning,
  Star,
  CheckCircle,
  Buildings,
  Medal
} from "@phosphor-icons/react";
import { StatCard } from "@/components/services/StatCard";
import { ExcellenceCard } from "@/components/services/ExcellenceCard";
import { PopularTrainings } from "@/components/services/PopularTrainings";

export function AzureExcellence() {
  const { language } = useTranslations();

  const stats = [
    { icon: Certificate, value: "15+", label: language === 'nl' ? 'Certificeringen' : 'Certifications', colorClass: "text-blue-500", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/20" },
    { icon: Trophy, value: "MCT", label: language === 'nl' ? 'Gecertificeerd' : 'Certified', colorClass: "text-amber-500", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/20" },
    { icon: Medal, value: "Expert", label: language === 'nl' ? 'MCT Geleid' : 'MCT Led', colorClass: "text-emerald-500", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/20" },
    { icon: Users, value: "100%", label: language === 'nl' ? 'Expert Ondersteuning' : 'Expert Support', colorClass: "text-violet-500", bgClass: "bg-violet-500/10", borderClass: "border-violet-500/20" }
  ];

  const popularTrainings = [
    { code: 'AZ-900', name: language === 'nl' ? 'Azure Fundamentals' : 'Azure Fundamentals' },
    { code: 'AZ-104', name: language === 'nl' ? 'Azure Administrator' : 'Azure Administrator' },
    { code: 'MS-900', name: language === 'nl' ? 'Microsoft 365 Fundamentals' : 'Microsoft 365 Fundamentals' },
    { code: 'SC-900', name: language === 'nl' ? 'Security Fundamentals' : 'Security Fundamentals' }
  ];

  const excellenceCards = [
    {
      icon: Cloud, iconBg: "bg-blue-500/10", iconColor: "text-blue-500",
      title: language === 'nl' ? 'Wat is Azure Excellence?' : 'What is Azure Excellence?',
      description: language === 'nl'
        ? 'Azure Excellence betekent complete beheersing van het Microsoft Azure-platform. Van fundamentele cloud concepten tot geavanceerde enterprise architecturen, onze MCT-gecertificeerde trainers begeleiden je door elke stap van je Azure-reis.'
        : 'Azure Excellence means complete mastery of the Microsoft Azure platform. From fundamental cloud concepts to advanced enterprise architectures, our MCT-certified trainers guide you through every step of your Azure journey.',
      items: [
        { icon: CheckCircle, text: language === 'nl' ? 'Hands-on Azure labs' : 'Hands-on Azure labs' },
        { icon: CheckCircle, text: language === 'nl' ? 'Real-world scenarios' : 'Real-world scenarios' },
        { icon: CheckCircle, text: language === 'nl' ? 'Persoonlijke begeleiding' : 'Personal guidance' }
      ],
      itemColor: "text-emerald-500"
    },
    {
      icon: Buildings, iconBg: "bg-violet-500/10", iconColor: "text-violet-500",
      title: language === 'nl' ? 'Microsoft Stack Expertise' : 'Microsoft Stack Expertise',
      description: language === 'nl'
        ? 'Onze expertise strekt zich uit over de complete Microsoft-stack. Van Azure infrastructure en Microsoft 365 tot Power Platform en ontwikkeltools - wij bieden geïntegreerde oplossingen die je organisatie vooruit helpen.'
        : 'Our expertise spans the complete Microsoft stack. From Azure infrastructure and Microsoft 365 to Power Platform and development tools - we provide integrated solutions that advance your organization.',
      items: [
        { icon: Star, text: language === 'nl' ? 'Complete Microsoft-ecosysteem' : 'Complete Microsoft ecosystem' },
        { icon: Star, text: language === 'nl' ? 'Integratie-expertise' : 'Integration expertise' },
        { icon: Star, text: language === 'nl' ? 'Enterprise architecturen' : 'Enterprise architectures' }
      ],
      itemColor: "text-amber-500"
    },
    {
      icon: Lightning, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500",
      title: language === 'nl' ? 'Waarom Cloud Evolvers Excellence?' : 'Why Cloud Evolvers Excellence?',
      description: language === 'nl'
        ? 'Onze unieke aanpak combineert Microsoft Certified Trainer expertise met praktijkgerichte methodieken. Wij zorgen niet alleen voor kennisoverdracht, maar ook voor praktische toepassing in jouw werkomgeving.'
        : 'Our unique approach combines Microsoft Certified Trainer expertise with practice-oriented methodologies. We ensure not only knowledge transfer, but also practical application in your work environment.',
      items: [
        { icon: Shield, text: language === 'nl' ? 'MCT-gecertificeerde trainers' : 'MCT-certified trainers' },
        { icon: Shield, text: language === 'nl' ? 'Praktijkgerichte cases' : 'Practice-oriented cases' },
        { icon: Shield, text: language === 'nl' ? 'Persoonlijke aandacht' : 'Personal attention' }
      ],
      itemColor: "text-blue-500"
    }
  ];

  return (
    <motion.div
      className="relative space-y-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Header Section */}
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3"
        >
          <Badge variant="outline" className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400 backdrop-blur-sm">
            <Shield className="h-4 w-4 mr-2" weight="duotone" />
            {language === 'nl' ? 'Azure en Microsoft Stack Excellence' : 'Azure and Microsoft Stack Excellence'}
            <Trophy className="h-4 w-4 ml-2 text-amber-500" weight="duotone" />
          </Badge>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {language === 'nl' ? 'Trainings led by Microsoft Certified Trainers' : 'Trainings led by Microsoft Certified Trainers'}
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Badge variant="secondary" className="px-4 py-2 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2">
              <img src="/flags/nl.svg" alt="Netherlands" className="w-5 h-5 rounded-sm" />
              <img src="/flags/be.svg" alt="Belgium" className="w-5 h-5 rounded-sm" />
              <img src="/flags/lu.svg" alt="Luxembourg" className="w-5 h-5 rounded-sm" />
              <span className="font-semibold text-primary ml-1">BENELUX</span>
            </div>
          </Badge>
          <span className="text-muted-foreground">{language === 'nl' ? 'en' : 'and'}</span>
          <Badge variant="secondary" className="px-4 py-2 bg-blue-500/5 border-blue-500/20">
            <div className="flex items-center gap-2">
              <img src="/flags/gb.svg" alt="United Kingdom" className="w-5 h-5 rounded-sm" />
              <span className="font-semibold text-blue-500">{language === 'nl' ? 'VK' : 'UK'}</span>
            </div>
          </Badge>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {language === 'nl'
            ? 'Remote training en consultancy zijn wereldwijd beschikbaar, met on-site opties voor internationale klanten wanneer nodig.'
            : 'Remote training and consultancy are available worldwide, with on-site options for international clients when needed.'}
        </motion.p>
      </div>

      {/* Popular Trainings */}
      <PopularTrainings
        trainings={popularTrainings}
        title={language === 'nl' ? 'Populaire Trainingen' : 'Popular Trainings'}
        subtitle={language === 'nl' ? 'Een selectie van onze meest gevraagde Microsoft trainingen' : 'A selection of our most requested Microsoft trainings'}
      />

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} index={index} />
        ))}
      </motion.div>

      {/* Excellence Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {excellenceCards.map((card, index) => (
          <ExcellenceCard key={index} {...card} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
