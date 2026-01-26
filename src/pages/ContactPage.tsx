import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, Users, Calendar, ChatCircle, EnvelopeSimple, Phone, MapPin, ShareNetwork, Sparkle } from '@phosphor-icons/react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/hooks/use-translation';
import TrainingConsultationForm from '@/components/TrainingConsultationForm';
import { DotPattern } from "@/components/ui/dot-pattern";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [language] = useLanguage();
  const t = useTranslation();

  // Animation Ref
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  // Robust fallback for contact data
  const contactT = t?.contact || {
    title: 'Start Your Cloud Journey',
    description: 'Schedule a free consultation with our Architects.',
    contactInformation: 'Contact Information',
    emailUs: 'Email Us',
    callUs: 'Call Us',
    ourReach: 'Our Reach',
    locations: 'Netherlands, Belgium & DACH',
    whyChooseUs: 'Why Choose Us?',
    expertGuidance: 'Expert Guidance',
    expertDescription: 'Direct access to MCTs',
    flexibleScheduling: 'Flexible Scheduling',
    flexibleDescription: 'Online or On-site',
    tailoredSolutions: 'Tailored Solutions',
    tailoredDescription: 'Customized Curriculums',
    microsoftCertified: 'Microsoft Certified Trainers',
    mctTrainers: 'Elite Certified Experts',
    contactForm: 'Contact Form',
    formDescription: 'Fill out the form and we\'ll get back to you within 24 hours',
  };

  // Get service parameter from URL if provided
  const serviceParam = searchParams.get('service');
  const trainingTitle = serviceParam || (language === 'nl' ? 'Azure Services Contact' : 'Azure Services Contact');

  const benefits = [
    {
      icon: Users,
      title: contactT.expertGuidance,
      description: contactT.expertDescription
    },
    {
      icon: Calendar,
      title: contactT.flexibleScheduling,
      description: contactT.flexibleDescription
    },
    {
      icon: ChatCircle,
      title: contactT.tailoredSolutions,
      description: contactT.tailoredDescription
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <DotPattern className="opacity-10 text-blue-500/20" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">

        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6">
              <Sparkle className="w-4 h-4" />
              Let's Connect
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
              {contactT.title}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Whether you need enterprise training, consulting, or just have a question, our team is ready to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Info & Benefits */}
            <div className="lg:col-span-5 space-y-8">

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 lg:p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <ShareNetwork className="text-blue-500" size={24} />
                  {contactT.contactInformation}
                </h2>

                <div className="space-y-6">
                  <a href="mailto:training@cloudevolvers.com" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <EnvelopeSimple size={24} className="text-blue-600 dark:text-blue-400" weight="fill" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contactT.emailUs}</div>
                      <div className="font-medium text-foreground group-hover:text-blue-500 transition-colors">training@cloudevolvers.com</div>
                    </div>
                  </a>

                  <a href="tel:+31634272027" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <Phone size={24} className="text-green-600 dark:text-green-400" weight="fill" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contactT.callUs}</div>
                      <div className="font-medium text-foreground group-hover:text-green-500 transition-colors">+31 6-34272027</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-purple-600 dark:text-purple-400" weight="fill" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contactT.ourReach}</div>
                      <div className="font-medium text-foreground">{contactT.locations}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits / MCT Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/5 to-purple-900/5 border border-blue-500/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <CheckCircle size={24} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{contactT.microsoftCertified}</div>
                    <div className="text-sm text-blue-500 dark:text-blue-300">Official Training Partner</div>
                  </div>
                </div>
                <div className="space-y-4 pl-2">
                  {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Icon size={16} className="text-blue-500" />
                        <span>{benefit.title}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                  {/* The Form Component needs to support dark mode styles or we wrap it in a dark context */}
                  <div className="w-full">
                    <TrainingConsultationForm
                      language={language || 'en'}
                      trainingTitle={trainingTitle}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
