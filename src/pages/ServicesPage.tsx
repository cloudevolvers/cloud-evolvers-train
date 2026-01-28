import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllServices } from '@/data/services';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from '@/hooks/use-translations';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import {
  ArrowRight,
  Star,
  CheckCircle,
  EnvelopeSimple,
  Sparkle,
  GraduationCap
} from '@phosphor-icons/react';
import { getServiceIcon } from '@/utils/service-icons';
import { SEO, PAGE_SEO } from '@/components/SEO';

export default function ServicesPage() {
  const { language } = useTranslations();
  const services = getAllServices(language);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 md:pt-32 relative overflow-hidden bg-gradient-to-br from-background via-background to-background">
      <SEO {...PAGE_SEO.services} />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/8 to-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/8 via-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <BackgroundIcons variant="services" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-[120rem] mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14 lg:mb-18"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <Badge
                    variant="outline"
                    className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
                  >
                    <Star size={14} className="mr-2" weight="fill" />
                    {language === 'nl' ? 'Premium Cloud Services' : 'Premium Cloud Services'}
                  </Badge>
                </motion.div>

                <h1 className="text-foreground font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                  {language === 'nl' ? 'Onze Services' : 'Our Services'}
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
                  {language === 'nl'
                    ? 'Uitgebreide cloud engineering en consulting services om uw organisatie te helpen slagen in de digitale transformatiereis.'
                    : 'Comprehensive cloud engineering and consulting services to help your organization succeed in the digital transformation journey.'}
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {services.map((service, index) => {
                  const IconComponent = getServiceIcon(service.icon);
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="group"
                    >
                      <Card
                        className="bg-card/80 backdrop-blur-sm border-border/50 h-full transition-all duration-300 cursor-pointer hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-xl border border-blue-500/20 shrink-0">
                              <IconComponent size={24} className="text-blue-600 dark:text-blue-400" weight="duotone" />
                            </div>
                            <div className="space-y-2 min-w-0">
                              <CardTitle className="text-foreground text-lg leading-tight">
                                {service.title}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="text-xs px-2 py-0.5 bg-blue-500/5 border-blue-500/20 text-blue-600 dark:text-blue-400"
                              >
                                <Sparkle size={10} className="mr-1" weight="fill" />
                                Premium
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-4">
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                            {service.description}
                          </p>

                          {/* Features as better badges */}
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <Badge
                                key={featureIndex}
                                variant="secondary"
                                className="text-xs py-1 px-2.5 bg-muted/60 text-muted-foreground border-0 font-normal"
                              >
                                <CheckCircle size={10} className="mr-1 text-emerald-500" weight="fill" />
                                {feature}
                              </Badge>
                            ))}
                            {service.features.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs py-1 px-2.5 bg-background/50 text-muted-foreground border-border/50"
                              >
                                +{service.features.length - 3} {language === 'nl' ? 'meer' : 'more'}
                              </Badge>
                            )}
                          </div>

                          {/* CTA */}
                          <div className="pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-primary p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-300"
                            >
                              {language === 'nl' ? 'Meer Informatie' : 'Learn More'}
                              <ArrowRight size={14} className="ml-1.5" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-violet-500/5 border-blue-500/20 backdrop-blur-sm shadow-2xl overflow-hidden">
                  <CardContent className="p-10 lg:p-14 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl mb-6">
                      <CheckCircle size={32} className="text-emerald-500" weight="duotone" />
                    </div>

                    <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-4">
                      {language === 'nl' ? 'Klaar om te Beginnen?' : 'Ready to Get Started?'}
                    </h2>

                    <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                      {language === 'nl'
                        ? 'Neem vandaag nog contact met ons op om te bespreken hoe onze services uw organisatie kunnen helpen bij het behalen van uw cloud transformatiedoelen.'
                        : 'Contact us today to discuss how our services can help your organization achieve its cloud transformation goals.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => navigate('/contact')}
                      >
                        <EnvelopeSimple size={18} className="mr-2" />
                        {language === 'nl' ? 'Neem Contact Op' : 'Contact Us'}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-border text-foreground hover:bg-muted/50"
                        onClick={() => navigate('/training')}
                      >
                        <GraduationCap size={18} className="mr-2" />
                        {language === 'nl' ? 'Bekijk Training Cursussen' : 'View Training Courses'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
