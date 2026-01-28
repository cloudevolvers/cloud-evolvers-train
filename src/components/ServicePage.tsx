import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";
import { ArrowLeft, CheckCircle, Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { allServices } from "@/data/services";
import type { Service } from "@/types/services";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceIcon } from "@/utils/service-icons";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatureCard } from "@/components/services/ServiceFeatureCard";

interface ServicePageProps {
  serviceId?: string;
}

export function ServicePage({ serviceId: propServiceId }: ServicePageProps) {
  const { serviceId: paramServiceId } = useParams<{ serviceId: string }>();
  const serviceId = propServiceId || paramServiceId;
  const { language } = useTranslations();
  const navigate = useNavigate();

  if (!serviceId || !allServices[serviceId as keyof typeof allServices]) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Button onClick={() => navigate('/services')}>
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const service: Service = allServices[serviceId as keyof typeof allServices][language];
  const IconComponent = getServiceIcon(service.icon);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-background">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/8 to-violet-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/8 via-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => navigate('/services')}
                >
                  <ArrowLeft size={16} className="mr-2" />
                  {language === 'nl' ? 'Terug naar Services' : 'Back to Services'}
                </Button>
              </motion.div>

              {/* Main Hero Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <ServiceHero icon={IconComponent} title={service.title} description={service.description} language={language} />
                </div>
                <div className="lg:col-span-2">
                  <ServiceFeatureCard features={service.features} title={language === 'nl' ? 'Belangrijkste functies' : 'Key Features'} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <div
                      className="prose prose-lg prose-slate dark:prose-invert max-w-none
                        prose-headings:text-foreground prose-headings:font-bold prose-h1:hidden
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-primary prose-h2:border-b prose-h2:border-border prose-h2:pb-3
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground
                        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
                        prose-li:text-muted-foreground prose-li:my-2 prose-ul:my-5 prose-ul:pl-0 prose-ul:list-none prose-ul:space-y-2
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        [&_li]:relative [&_li]:pl-6
                        [&_li:before]:content-['✓'] [&_li:before]:absolute [&_li:before]:left-0 [&_li:before]:text-emerald-500 [&_li:before]:font-bold"
                      dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Card className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-violet-500/5 border-blue-500/20 backdrop-blur-sm shadow-2xl overflow-hidden">
                  <CardContent className="p-10 lg:p-14 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-2xl mb-6">
                      <CheckCircle size={32} className="text-blue-500" weight="duotone" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground font-bold mb-4">
                      {language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to Get Started?'}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                      {language === 'nl' ? 'Neem contact met ons op voor een persoonlijk gesprek over uw behoeften.' : 'Contact us for a personalized consultation about your needs.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg" onClick={() => navigate('/contact')}>
                        <Phone size={18} className="mr-2" />
                        {language === 'nl' ? 'Neem contact op' : 'Contact Us'}
                      </Button>
                      <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted/50" onClick={() => navigate('/services')}>
                        {language === 'nl' ? 'Bekijk alle services' : 'View All Services'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}