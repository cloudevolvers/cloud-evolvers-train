import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";
import { 
  ArrowLeft,
  CheckCircle,
  Clock,
  Star,
  Users,
  Phone
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { allServices } from "@/data/services";
import type { Service } from "@/types/services";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceIcon } from "@/utils/service-icons";

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
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <Header />
        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-white dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30">
      {/* Global Background Effects - Matching Frontpage */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary animated background effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/30 via-green-400/20 to-teal-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-teal-400/25 via-emerald-400/20 to-green-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Additional floating service icons */}
        <motion.div
          className="absolute top-20 right-[20%] text-emerald-500/10"
          animate={{ 
            y: [-10, 10, -10], 
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconComponent size={48} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-[15%] text-green-500/10"
          animate={{ 
            y: [15, -15, 15], 
            rotate: [0, -8, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <CheckCircle size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-[8%] text-teal-500/8"
          animate={{ 
            x: [-5, 5, -5],
            y: [-8, 8, -8], 
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <Star size={36} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-[8%] text-emerald-500/8"
          animate={{ 
            x: [8, -8, 8],
            y: [10, -10, 10], 
            rotate: [0, -12, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        >
          <Users size={32} />
        </motion.div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-24 sm:py-28 lg:py-32">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
            
            {/* Breadcrumb */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                className="text-emerald-400 mb-4"
                onClick={() => navigate('/services')}
              >
                <ArrowLeft size={16} className="mr-2" />
                {language === 'nl' ? 'Terug naar Services' : 'Back to Services'}
              </Button>
            </motion.div>

            {/* Service Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl">
                      <IconComponent size={40} className="text-emerald-400" />
                    </div>
                    <Badge className="text-emerald-300 bg-emerald-500/20 border-emerald-500/30">
                      {language === 'nl' ? 'Premium Service' : 'Premium Service'}
                    </Badge>
                  </div>
                  
                  <h1 className="text-white font-bold leading-tight">
                    {service.title}
                  </h1>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone size={20} className="mr-2" />
                      {language === 'nl' ? 'Contact Opnemen' : 'Get in Touch'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-slate-600 text-white hover:bg-slate-800/50 backdrop-blur-sm"
                      onClick={() => navigate('/training')}
                    >
                      {language === 'nl' ? 'Gerelateerde Training' : 'Related Training'}
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Features Card */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-emerald-400 flex items-center gap-2">
                      <Star size={20} />
                      {language === 'nl' ? 'Belangrijkste Functies' : 'Key Features'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div 
                    className="prose-ul:text-gray-300 max-w-none"
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white font-bold">
                {language === 'nl' 
                  ? 'Klaar om te beginnen?'
                  : 'Ready to Get Started?'}
              </h2>
              <p className="text-gray-300">
                {language === 'nl'
                  ? 'Neem contact met ons op voor een persoonlijk gesprek over uw behoeften.'
                  : 'Contact us for a personalized consultation about your needs.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate('/contact')}
                >
                  <Phone size={20} className="mr-2" />
                  {language === 'nl' ? 'Neem Contact Op' : 'Contact Us'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-600 text-white backdrop-blur-sm"
                  onClick={() => navigate('/services')}
                >
                  {language === 'nl' ? 'Bekijk Alle Services' : 'View All Services'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}