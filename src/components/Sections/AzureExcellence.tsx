import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  Buildings
} from "@phosphor-icons/react";

export function AzureExcellence() {
  const { language } = useTranslations();

  return (
    <motion.div
      className="relative space-y-12 xl:space-y-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >


      {/* Azure Excellence Header */}
      <div className="relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
        >
          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" weight="duotone" />
          <span className="font-semibold text-blue-800 dark:text-blue-200">
            {language === 'nl' ? 'Azure en Microsoft Stack Excellence' : 'Azure and Microsoft Stack Excellence'}
          </span>
          <Trophy className="h-5 w-5 text-amber-500" weight="duotone" />
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {language === 'nl' ? 'Trainings led by Microsoft Certified Trainers' : 'Trainings led by Microsoft Certified Trainers'}
        </motion.h1>        <motion.p
          className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-md mr-2">
            <img src="/flags/nl.svg" alt="Netherlands" className="w-5 h-5" />
            <img src="/flags/be.svg" alt="Belgium" className="w-5 h-5" />
            <img src="/flags/lu.svg" alt="Luxembourg" className="w-5 h-5" />
            BENELUX
          </span>
          {language === 'nl' ? 'en' : 'and'}
          <span className="text-blue-400 inline-flex items-center gap-2 font-semibold bg-blue-500/10 px-3 py-1.5 rounded-md ml-2">
            <img src="/flags/gb.svg" alt="United Kingdom" className="w-5 h-5" />
            {language === 'nl' ? 'VK' : 'UK'}
          </span>
          <br />
          {language === 'nl'
            ? 'Remote training en consultancy zijn wereldwijd beschikbaar, met on-site opties voor internationale klanten wanneer nodig.'
            : 'Remote training and consultancy are available worldwide, with on-site options for international clients when needed.'
          }
        </motion.p>

        {/* Popular Trainings Preview - Visible at First Glance */}
        <motion.div
          className="mt-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
              {language === 'nl' ? 'Populaire Trainingen' : 'Popular Trainings'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === 'nl' ? 'Een selectie van onze meest gevraagde Microsoft trainingen' : 'A selection of our most requested Microsoft trainings'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { code: 'AZ-900', name: language === 'nl' ? 'Azure Fundamentals' : 'Azure Fundamentals' },
              { code: 'AZ-104', name: language === 'nl' ? 'Azure Administrator' : 'Azure Administrator' },
              { code: 'MS-900', name: language === 'nl' ? 'Microsoft 365 Fundamentals' : 'Microsoft 365 Fundamentals' },
              { code: 'SC-900', name: language === 'nl' ? 'Security Fundamentals' : 'Security Fundamentals' }
            ].map((training, idx) => (
              <motion.div
                key={training.code}
                className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
              >
                <div className="font-bold text-blue-700 dark:text-blue-400 text-base mb-2">{training.code}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 leading-tight">{training.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Excellence Statistics */}
      <motion.div
        className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          {
            icon: Certificate,
            value: "15+",
            label: language === 'nl' ? 'Certificeringen' : 'Certifications',
            colorClass: "text-blue-500",
            bgClass: "bg-blue-500/10"
          },
          {
            icon: Trophy,
            value: "MCT",
            label: language === 'nl' ? 'Gecertificeerd' : 'Certified',
            colorClass: "text-yellow-500",
            bgClass: "bg-yellow-500/10"
          },
          {
            icon: Shield,
            value: "MCT",
            label: language === 'nl' ? 'MCT Geleid' : 'MCT Led',
            colorClass: "text-green-500",
            bgClass: "bg-green-500/10"
          },
          {
            icon: Users,
            value: "100%",
            label: language === 'nl' ? 'Expert Ondersteuning' : 'Expert Support',
            colorClass: "text-purple-500",
            bgClass: "bg-purple-500/10"
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="p-6 text-center bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-0 space-y-3">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgClass}`}>
                  <stat.icon className={`h-6 w-6 ${stat.colorClass}`} weight="duotone" />
                </div>
                <div className="space-y-1">
                  <div className="text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Excellence Content Sections */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
        {/* What is Azure Excellence */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-gray-200 dark:border-gray-700 h-full p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === 'nl' ? 'Wat is Azure Excellence?' : 'What is Azure Excellence?'}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {language === 'nl'
                  ? 'Azure Excellence betekent complete beheersing van het Microsoft Azure-platform. Van fundamentele cloud concepten tot geavanceerde enterprise architecturen, onze MCT-gecertificeerde trainers begeleiden je door elke stap van je Azure-reis.'
                  : 'Azure Excellence means complete mastery of the Microsoft Azure platform. From fundamental cloud concepts to advanced enterprise architectures, our MCT-certified trainers guide you through every step of your Azure journey.'
                }
              </p>

              <div className="space-y-2">
                {[
                  language === 'nl' ? 'Hands-on Azure labs' : 'Hands-on Azure labs',
                  language === 'nl' ? 'Real-world scenarios' : 'Real-world scenarios',
                  language === 'nl' ? 'Persoonlijke begeleiding' : 'Personal guidance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" weight="fill" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Microsoft Stack Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-gray-200 dark:border-gray-700 h-full p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <Buildings className="h-6 w-6 text-purple-600 dark:text-purple-400" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === 'nl' ? 'Microsoft Stack Expertise' : 'Microsoft Stack Expertise'}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {language === 'nl'
                  ? 'Onze expertise strekt zich uit over de complete Microsoft-stack. Van Azure infrastructure en Microsoft 365 tot Power Platform en ontwikkeltools - wij bieden geïntegreerde oplossingen die je organisatie vooruit helpen.'
                  : 'Our expertise spans the complete Microsoft stack. From Azure infrastructure and Microsoft 365 to Power Platform and development tools - we provide integrated solutions that advance your organization.'
                }
              </p>

              <div className="space-y-2">
                {[
                  language === 'nl' ? 'Complete Microsoft-ecosysteem' : 'Complete Microsoft ecosystem',
                  language === 'nl' ? 'Integratie-expertise' : 'Integration expertise',
                  language === 'nl' ? 'Enterprise architecturen' : 'Enterprise architectures'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" weight="fill" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why Cloud Evolvers Excellence */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-gray-200 dark:border-gray-700 h-full p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <Lightning className="h-6 w-6 text-green-600 dark:text-green-400" weight="duotone" />
                </div>
                {/* ... rest of content */}
                <h3 className="text-xl font-bold text-foreground">
                  {language === 'nl' ? 'Waarom Cloud Evolvers Excellence?' : 'Why Cloud Evolvers Excellence?'}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {language === 'nl'
                  ? 'Onze unieke aanpak combineert Microsoft Certified Trainer expertise met praktijkgerichte methodieken. Wij zorgen niet alleen voor kennisoverdracht, maar ook voor praktische toepassing in jouw werkomgeving.'
                  : 'Our unique approach combines Microsoft Certified Trainer expertise with practice-oriented methodologies. We ensure not only knowledge transfer, but also practical application in your work environment.'
                }
              </p>

              <div className="space-y-2">
                {[
                  language === 'nl' ? 'MCT-gecertificeerde trainers' : 'MCT-certified trainers',
                  language === 'nl' ? 'Praktijkgerichte cases' : 'Practice-oriented cases',
                  language === 'nl' ? 'Persoonlijke aandacht' : 'Personal attention'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-blue-500" weight="fill" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
