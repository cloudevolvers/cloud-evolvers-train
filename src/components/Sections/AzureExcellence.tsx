import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/hooks/use-translations";
import {
  Shield,
  Certificate,
  Users,
  Cloud,
  Lightning,
  CheckCircle,
  Buildings,
  Medal,
  ArrowRight,
} from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function AzureExcellence() {
  const { t } = useTranslations();
  const a = t.azureExcellence;

  const stats = [
    { icon: Certificate, value: "15+", label: a?.certifications || 'Certifications' },
    { icon: Medal, value: "MCT", label: a?.certified || 'Certified' },
    { icon: Shield, value: "Expert", label: a?.mctLed || 'MCT Led' },
    { icon: Users, value: "100%", label: a?.expertSupport || 'Expert Support' },
  ];

  const popularTrainings = [
    { code: 'AZ-900', name: 'Azure Fundamentals', slug: 'azure-fundamentals' },
    { code: 'AZ-104', name: 'Azure Administrator', slug: 'azure-administrator' },
    { code: 'MS-900', name: 'Microsoft 365 Fundamentals', slug: 'microsoft-365-fundamentals' },
    { code: 'SC-900', name: 'Security Fundamentals', slug: 'security-compliance-identity-fundamentals' },
  ];

  const excellenceCards = [
    {
      icon: Cloud,
      title: a?.whatIs || 'What is Azure Excellence?',
      description: a?.whatIsDesc || 'Azure Excellence means complete mastery of the Microsoft Azure platform. From fundamental cloud concepts to advanced enterprise architectures, our MCT-certified trainers guide you through every step of your Azure journey.',
      items: [
        a?.handsOnLabs || 'Hands-on Azure labs',
        a?.realWorldScenarios || 'Real-world scenarios',
        a?.personalGuidance || 'Personal guidance',
      ],
    },
    {
      icon: Buildings,
      title: a?.msStackExpertise || 'Microsoft Stack Expertise',
      description: a?.msStackDesc || 'Our expertise spans the complete Microsoft stack. From Azure infrastructure and Microsoft 365 to Power Platform and development tools - we provide integrated solutions that advance your organization.',
      items: [
        a?.completeMsEcosystem || 'Complete Microsoft ecosystem',
        a?.integrationExpertise || 'Integration expertise',
        a?.enterpriseArchitectures || 'Enterprise architectures',
      ],
    },
    {
      icon: Lightning,
      title: a?.whyCE || 'Why Cloud Evolvers Excellence?',
      description: a?.whyCEDesc || 'Our unique approach combines Microsoft Certified Trainer expertise with practice-oriented methodologies. We ensure not only knowledge transfer, but also practical application in your work environment.',
      items: [
        a?.mctCertifiedTrainers || 'MCT-certified trainers',
        a?.practiceOrientedCases || 'Practice-oriented cases',
        a?.personalAttention || 'Personal attention',
      ],
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <div className="text-center space-y-6">
        <Badge variant="outline" className="px-4 py-2 text-sm font-semibold bg-neutral-500/5 dark:bg-white/5 border-border text-muted-foreground">
          <Certificate className="h-4 w-4 mr-2" weight="duotone" />
          {a?.badge || 'Azure and Microsoft Stack Excellence'}
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
          {a?.heading || 'Trainings led by Microsoft Certified Trainers'}
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {a?.remoteNote || 'Remote training and consultancy are available worldwide, with on-site options for international clients when needed.'}
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Badge variant="secondary" className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border-border text-foreground">
            <div className="flex items-center gap-2">
              <img src="/flags/nl.svg" alt="Netherlands" className="w-4 h-4 rounded-sm" />
              <img src="/flags/be.svg" alt="Belgium" className="w-4 h-4 rounded-sm" />
              <img src="/flags/lu.svg" alt="Luxembourg" className="w-4 h-4 rounded-sm" />
              <span className="font-semibold text-sm">BENELUX</span>
            </div>
          </Badge>
          <span className="text-muted-foreground text-sm">&</span>
          <Badge variant="secondary" className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border-border text-foreground">
            <div className="flex items-center gap-2">
              <img src="/flags/gb.svg" alt="United Kingdom" className="w-4 h-4 rounded-sm" />
              <span className="font-semibold text-sm">{a?.uk || 'UK'}</span>
            </div>
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="bg-card border-border hover:border-foreground/20 transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/10">
                  <stat.icon className="h-6 w-6 text-foreground/70" weight="duotone" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Popular Trainings */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {a?.popularTitle || 'Popular Trainings'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {a?.popularSubtitle || 'A selection of our most requested Microsoft trainings'}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {popularTrainings.map((training, i) => (
            <motion.div
              key={training.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <Link to={`/training/${training.slug}`}>
                <Card className="h-full bg-card border-border hover:border-foreground/20 hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <CardContent className="p-5 text-center">
                    <Badge className="mb-3 bg-foreground text-background border-0 text-sm font-bold px-3 py-1">
                      {training.code}
                    </Badge>
                    <p className="text-xs text-muted-foreground leading-tight font-medium group-hover:text-foreground transition-colors">
                      {training.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Excellence Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {excellenceCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full bg-card border-border hover:border-foreground/20 transition-all duration-200">
              <CardContent className="p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-100 dark:bg-white/10 shrink-0">
                    <card.icon className="h-6 w-6 text-foreground/70" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight pt-1">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="space-y-2.5 pt-1">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" weight="fill" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-bold text-foreground">
          {a?.whyChooseTitle || 'Why Choose Our Azure Excellence Program?'}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {a?.whyChooseDesc || "Our comprehensive Azure and Microsoft Stack Excellence program is designed to elevate your technical expertise and career prospects. With hands-on labs, real-world case studies, and guidance from Microsoft Certified Trainers, you'll gain the skills needed to excel in today's cloud-first world."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/training">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black">
              {a?.exploreTrainings || 'Explore Trainings'} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted/50">
              {a?.contactUs || 'Contact Us'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
