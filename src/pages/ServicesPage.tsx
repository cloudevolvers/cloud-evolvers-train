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
  EnvelopeSimple
} from '@phosphor-icons/react';
import { getServiceIcon } from '@/utils/service-icons';

export default function ServicesPage() {
  const { language } = useTranslations();
  const services = getAllServices(language);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 md:pt-32 relative overflow-hidden bg-gradient-to-br from-white via-slate-50/30 to-white dark:from-slate-950 dark:via-slate-900/20 dark:to-slate-950">
      {/* Global Background Effects - Matching Frontpage */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary animated background effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 via-slate-200/35 to-blue-300/30 dark:from-blue-500/15 dark:via-slate-500/20 dark:to-blue-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-slate-200/30 via-blue-200/25 to-slate-300/25 dark:from-slate-500/15 dark:via-blue-500/12 dark:to-slate-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Use BackgroundIcons component for consistency */}
        <BackgroundIcons variant="services" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-28 lg:py-32">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-[120rem] mx-auto">

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 lg:mb-20"
              >
                <motion.div
                  className="bg-gradient-to-r from-blue-500/10 via-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star size={16} className="text-primary" weight="duotone" />
                  <span className="font-semibold text-primary">{language === 'nl' ? 'Premium Cloud Services' : 'Premium Cloud Services'}</span>
                </motion.div>

                <h1 className="text-foreground font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                  {language === 'nl' ? 'Onze Services' : 'Our Services'}
                </h1>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card
                        className="bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-border/40 h-full transition-all duration-300 cursor-pointer hover:border-primary/40 hover:shadow-xl"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <div className="p-3 bg-blue-500/10 rounded-xl">
                              <IconComponent size={24} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-foreground">{service.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-blue-500 bg-blue-500/10 border-blue-500/20">
                                {feature}
                              </Badge>
                            ))}
                            {service.features.length > 3 && (
                              <Badge variant="outline" className="bg-primary/10 text-muted-foreground border-border">
                                +{service.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary mt-auto self-start p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-300"
                          >
                            {language === 'nl' ? 'Meer Informatie' : 'Learn More'}
                            <ArrowRight size={14} className="ml-1" />
                          </Button>
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
                className="text-center"
              >
                <Card className="bg-gradient-to-br from-blue-500/5 to-primary/5 border-blue-500/20 backdrop-blur-sm shadow-2xl">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <CheckCircle size={24} className="text-blue-500" weight="duotone" />
                      </div>
                      <h2 className="text-foreground font-bold text-xl md:text-2xl">
                        {language === 'nl' ? 'Klaar om te Beginnen?' : 'Ready to Get Started?'}
                      </h2>
                    </div>
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
                        <EnvelopeSimple size={20} className="mr-2" />
                        {language === 'nl' ? 'Neem Contact Op' : 'Contact Us'}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary/40 text-foreground hover:bg-primary/10 backdrop-blur-sm"
                        onClick={() => navigate('/training')}
                      >
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
