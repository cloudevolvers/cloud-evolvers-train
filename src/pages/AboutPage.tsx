import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Target, Wrench } from "@phosphor-icons/react";
import { useTranslations } from "@/hooks/use-translations";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import { SEO, PAGE_SEO } from "@/components/SEO";

export function AboutPage() {
  const { t, language } = useTranslations();

  const title = language === "nl" ? "Over Cloud Evolvers" : "About Cloud Evolvers";
  const subtitle = language === "nl"
    ? "Gespecialiseerd Microsoft Certified Training (MCT) en consultancy bedrijf, opgericht in 2023 met meer dan 15 jaar IT ervaring."
    : "Specialized Microsoft Certified Training (MCT) and consulting company, founded in 2023 with over 15 years of IT experience.";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/30 to-white dark:from-slate-950 dark:via-slate-900/20 dark:to-slate-950 pt-24 md:pt-28 pb-12 md:pb-16">
      <SEO {...PAGE_SEO.about} />
      {/* Background with floating icons */}
      <div className="absolute inset-0">
        <div className="from-blue-100/20 via-slate-50/15 to-blue-100/20 dark:from-slate-900/20 dark:via-slate-900/25 dark:to-slate-800/20 absolute inset-0 bg-gradient-to-br" />
        <BackgroundIcons variant="default" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-10">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.div
            className="bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-border/40 rounded-2xl p-4 md:p-6 max-w-4xl mx-auto shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm md:text-base text-foreground leading-relaxed font-medium text-center">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-border/40 h-full shadow-xl transition-all duration-300 hover:border-primary/40">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-center mb-4 md:mb-5">
                    <div className="bg-emerald-500/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                      <Users className="text-emerald-600 dark:text-emerald-400 h-5 w-5 md:h-6 md:w-6" weight="duotone" />
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl text-foreground font-bold">
                      {language === "nl" ? "Ons Verhaal" : "Our Story"}
                    </h2>
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      {language === "nl"
                        ? "Cloud Evolvers is onderdeel van Spot Cloud, en onze passie voor technologie en automatisering drijft ons om klanten te helpen excelleren in het Microsoft ecosysteem."
                        : "Cloud Evolvers is part of Spot Cloud, and our passion for technology and automation drives us to help customers excel in the Microsoft ecosystem."}
                    </p>
                    <p className="leading-relaxed">
                      {language === "nl"
                        ? "Onze oprichter, Yaïr Knijn, heeft een passie voor technologie gekoesterd sinds zijn kindertijd, met meer dan 15 jaar ervaring met Microsoft technologieën en cloud oplossingen."
                        : "Our founder, Yaïr Knijn, has nurtured a passion for technology since his childhood, bringing over 15 years of experience with Microsoft technologies and cloud solutions."}
                    </p>
                    <h3 className="text-base md:text-lg text-foreground font-semibold mt-3 md:mt-4">
                      {language === "nl" ? "Waarom Spot Cloud?" : "Why Spot Cloud?"}
                    </h3>
                    <p className="leading-relaxed">
                      {language === "nl"
                        ? "De naam Spot Cloud komt van onze liefde voor honden, specifiek Dalmatiërs. Net zoals de vlekken van een Dalmatiër uniek zijn, leveren wij unieke cloud oplossingen aan onze klanten."
                        : "The name Spot Cloud stems from our love for dogs, specifically Dalmatians. Just like a Dalmatian's spots are unique, we deliver unique cloud solutions to our customers."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-border/40 h-full shadow-xl transition-all duration-300 hover:border-primary/40">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-center mb-4 md:mb-5">
                    <div className="bg-teal-500/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                      <Target className="text-teal-600 dark:text-teal-400 h-5 w-5 md:h-6 md:w-6" weight="duotone" />
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl text-foreground font-bold">
                      {language === "nl" ? "Onze Missie" : "Our Mission"}
                    </h2>
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      {language === "nl"
                        ? "Wij bieden end-to-end implementaties en training in het Microsoft ecosysteem, gebruikmakend van onze liefde voor automatisering om klanten te helpen hun doelen te bereiken."
                        : "We provide end-to-end implementations and training in the Microsoft ecosystem, using our love for automation to help customers achieve their goals."}
                    </p>
                    <h3 className="text-base md:text-lg text-foreground font-semibold mt-3 md:mt-4">
                      {language === "nl" ? "Onze Visie" : "Our Vision"}
                    </h3>
                    <p className="leading-relaxed">
                      {language === "nl"
                        ? "Wij geloven in praktische, resultaatgerichte training die direct toepasbaar is op de werkplek. Door onze uitgebreide ervaring met Azure implementaties kunnen wij training aanbieden die verder gaat dan theorie - wij delen praktijkervaringen en best practices."
                        : "We believe in practical, results-oriented training that is immediately applicable in the workplace. Through our extensive experience with Azure implementations, we can offer training that goes beyond theory - we share real-world experiences and best practices."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Our Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold mb-5 md:mb-6 text-center lg:text-left">
              {language === "nl" ? "Onze Specialiteiten" : "Our Specialties"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                {
                  icon: GraduationCap,
                  title: language === "nl" ? "Microsoft Certified Training" : "Microsoft Certified Training",
                  description: language === "nl" ? "Azure en Microsoft 365 trainingsprogramma's" : "Azure and Microsoft 365 training programs"
                },
                {
                  icon: Wrench,
                  title: language === "nl" ? "End-to-end Implementaties" : "End-to-end Implementations",
                  description: language === "nl" ? "Complete Microsoft stack oplossingen" : "Complete Microsoft stack solutions"
                },
                {
                  icon: Target,
                  title: language === "nl" ? "Automatisering" : "Automation",
                  description: language === "nl" ? "Efficiëntie door intelligente automatisering" : "Efficiency through intelligent automation"
                },
                {
                  icon: Users,
                  title: language === "nl" ? "Consultancy" : "Consultancy",
                  description: language === "nl" ? "Strategisch advies voor cloud transformatie" : "Strategic advice for cloud transformation"
                }
              ].map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-border/40 h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="bg-emerald-500/10 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <specialty.icon className="text-emerald-600 dark:text-emerald-400 h-6 w-6 md:h-7 md:w-7" weight="duotone" />
                      </div>
                      <h3 className="text-sm md:text-base text-foreground font-semibold mb-2">{specialty.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{specialty.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold mb-5 md:mb-6 text-center lg:text-left">
              {language === "nl" ? "Ons Team" : "Our Team"}
            </h2>
            <div className="max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-border/40 shadow-xl transition-all duration-300 overflow-hidden hover:border-primary/40">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Photo Section - 2 columns */}
                    <div className="lg:col-span-2 relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] border-r border-border/20">
                      <img
                        src="/1625557501943.jpg"
                        alt="Yaïr Knijn - Founder & CEO"
                        className="w-full h-full object-cover object-[center_20%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent lg:bg-gradient-to-r lg:from-blue-900/40"></div>
                    </div>

                    {/* Content Section - 3 columns */}
                    <div className="lg:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl lg:text-2xl text-foreground font-bold mb-2">
                        Yaïr Knijn
                      </h3>
                      <p className="text-base md:text-lg text-blue-500 dark:text-blue-400 font-semibold mb-4">
                        {language === "nl" ? "Oprichter & CEO" : "Founder & CEO"}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        {language === "nl"
                          ? "Met meer dan 15 jaar ervaring in de IT-sector, specialiseert Yaïr zich in Azure-cloud infrastructuur en Microsoft 365 oplossingen. Door zijn passie voor kennisdeling en hands-on begeleiding helpt hij bedrijven succesvol met hun digitale transformatie."
                          : "With over 15 years of experience in the IT sector, Yaïr specializes in Azure cloud infrastructure and Microsoft 365 solutions. Through his passion for knowledge sharing and hands-on guidance, he helps companies succeed in their digital transformation."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 inline-flex items-center rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 font-medium">
                          Microsoft Certified Trainer
                        </span>
                        <span className="bg-blue-500/10 border border-blue-500/20 text-blue-500 inline-flex items-center rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 font-medium">
                          Azure Expert
                        </span>
                        <span className="bg-purple-500/10 border border-purple-500/20 text-purple-500 inline-flex items-center rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 font-medium">
                          Cloud Architect
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-blue-500/5 to-primary/5 border-blue-500/20 shadow-xl">
              <CardContent className="p-8 md:p-12 lg:p-16">
                <h2 className="text-foreground font-bold mb-4 text-xl md:text-2xl">
                  {language === "nl" ? "Neem Contact Op" : "Get In Touch"}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  {language === "nl"
                    ? "Klaar om uw cloud reis te beginnen? Neem vandaag nog contact met ons op!"
                    : "Ready to start your cloud journey? Get in touch with us today!"}
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:info@cloudevolvers.com"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 inline-block font-bold transition-all duration-200 px-6 py-3 rounded-lg shadow-md hover:shadow-lg border border-blue-500/20"
                  >
                    info@cloudevolvers.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
