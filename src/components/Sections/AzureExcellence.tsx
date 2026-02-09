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
  const { t } = useTranslations();
  const a = t.azureExcellence;

  const stats = [
    { icon: Certificate, value: "15+", label: a?.certifications || 'Certifications', colorClass: "text-blue-500", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/20" },
    { icon: Trophy, value: "MCT", label: a?.certified || 'Certified', colorClass: "text-amber-500", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/20" },
    { icon: Medal, value: "Expert", label: a?.mctLed || 'MCT Led', colorClass: "text-emerald-500", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/20" },
    { icon: Users, value: "100%", label: a?.expertSupport || 'Expert Support', colorClass: "text-violet-500", bgClass: "bg-violet-500/10", borderClass: "border-violet-500/20" }
  ];

  const popularTrainings = [
    { code: 'AZ-900', name: 'Azure Fundamentals' },
    { code: 'AZ-104', name: 'Azure Administrator' },
    { code: 'MS-900', name: 'Microsoft 365 Fundamentals' },
    { code: 'SC-900', name: 'Security Fundamentals' }
  ];

  const excellenceCards = [
    {
      icon: Cloud, iconBg: "bg-blue-500/10", iconColor: "text-blue-500",
      title: a?.whatIs || 'What is Azure Excellence?',
      description: a?.whatIsDesc || 'Azure Excellence means complete mastery of the Microsoft Azure platform. From fundamental cloud concepts to advanced enterprise architectures, our MCT-certified trainers guide you through every step of your Azure journey.',
      items: [
        { icon: CheckCircle, text: a?.handsOnLabs || 'Hands-on Azure labs' },
        { icon: CheckCircle, text: a?.realWorldScenarios || 'Real-world scenarios' },
        { icon: CheckCircle, text: a?.personalGuidance || 'Personal guidance' }
      ],
      itemColor: "text-emerald-500"
    },
    {
      icon: Buildings, iconBg: "bg-violet-500/10", iconColor: "text-violet-500",
      title: a?.msStackExpertise || 'Microsoft Stack Expertise',
      description: a?.msStackDesc || 'Our expertise spans the complete Microsoft stack. From Azure infrastructure and Microsoft 365 to Power Platform and development tools - we provide integrated solutions that advance your organization.',
      items: [
        { icon: Star, text: a?.completeMsEcosystem || 'Complete Microsoft ecosystem' },
        { icon: Star, text: a?.integrationExpertise || 'Integration expertise' },
        { icon: Star, text: a?.enterpriseArchitectures || 'Enterprise architectures' }
      ],
      itemColor: "text-amber-500"
    },
    {
      icon: Lightning, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500",
      title: a?.whyCE || 'Why Cloud Evolvers Excellence?',
      description: a?.whyCEDesc || 'Our unique approach combines Microsoft Certified Trainer expertise with practice-oriented methodologies. We ensure not only knowledge transfer, but also practical application in your work environment.',
      items: [
        { icon: Shield, text: a?.mctCertifiedTrainers || 'MCT-certified trainers' },
        { icon: Shield, text: a?.practiceOrientedCases || 'Practice-oriented cases' },
        { icon: Shield, text: a?.personalAttention || 'Personal attention' }
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
            {a?.badge || 'Azure and Microsoft Stack Excellence'}
            <Trophy className="h-4 w-4 ml-2 text-amber-500" weight="duotone" />
          </Badge>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {a?.heading || 'Trainings led by Microsoft Certified Trainers'}
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
          <span className="text-muted-foreground">{a?.and || 'and'}</span>
          <Badge variant="secondary" className="px-4 py-2 bg-blue-500/5 border-blue-500/20">
            <div className="flex items-center gap-2">
              <img src="/flags/gb.svg" alt="United Kingdom" className="w-5 h-5 rounded-sm" />
              <span className="font-semibold text-blue-500">{a?.uk || 'UK'}</span>
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
          {a?.remoteNote || 'Remote training and consultancy are available worldwide, with on-site options for international clients when needed.'}
        </motion.p>
      </div>

      {/* Popular Trainings */}
      <PopularTrainings
        trainings={popularTrainings}
        title={a?.popularTitle || 'Popular Trainings'}
        subtitle={a?.popularSubtitle || 'A selection of our most requested Microsoft trainings'}
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
