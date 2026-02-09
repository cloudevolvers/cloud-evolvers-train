import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { loadTrainingBySlug } from '@/content/loader';
import { getTrainingPriceDisplay, isPromotionalPricingActive } from '@/lib/pricing';
import TrainingDetailHeader from '@/components/training/TrainingDetailHeader';
import TrainingDetailContent from '@/components/training/TrainingDetailContent';
import TrainingDetailSidebar from '@/components/training/TrainingDetailSidebar';
import TrainingBookingForm from '@/components/training/TrainingBookingForm';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/use-translations';
import type { TrainingJSON } from '@/content/types';
import { BackgroundIcons } from '@/components/BackgroundIcons';

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguageContext();
  const { t } = useTranslations();
  const [training, setTraining] = useState<TrainingJSON | null>(null);
  const [loading, setLoading] = useState(true);

  if (!slug) {
    return <Navigate to="/training" replace />;
  }

  // Scroll to top when page loads or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Load JSON training data (newer system only)
  useEffect(() => {
    const loadTraining = async () => {
      try {
        setLoading(true);
        const trainingData = await loadTrainingBySlug(slug, language);
        setTraining(trainingData);
      } catch (error) {
        console.warn(`No training found for slug: ${slug}, language: ${language}`, error);
        setTraining(null);
      } finally {
        setLoading(false);
      }
    };

    loadTraining();
  }, [slug, language]); // Add language dependency

  if (loading) {
    return (
      <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background relative overflow-hidden">
        {/* Background matching home page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-slate-500/5 to-blue-500/5 dark:from-blue-500/5 dark:via-slate-500/5 dark:to-blue-500/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/3 to-slate-400/3 via-transparent dark:from-blue-400/3 dark:to-slate-400/3" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-300/2 to-blue-300/2 dark:via-slate-300/3 dark:to-blue-300/3" />
          <div className="opacity-10 absolute inset-0 flex items-center justify-center">
            <img
              src="/cloudevolvers-hero-logo.png"
              alt="Cloud Evolvers Background"
              className="w-96 h-96 object-contain"
            />
          </div>
          <div className="from-background/65 via-background/45 to-background/65 absolute inset-0 bg-gradient-to-br" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/60 to-accent/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/60 to-primary/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-secondary/60 to-primary/40 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
              <p className="text-muted-foreground">Loading training details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If training not found, show 404 page
  if (!loading && !training) {
    return (
      <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="from-blue-500/15 via-slate-500/15 to-blue-500/15 absolute inset-0 bg-gradient-to-br" />
          <div className="from-blue-400/12 to-slate-400/12 absolute inset-0 bg-gradient-to-tr via-transparent" />
          <div className="via-slate-300/8 to-blue-300/8 absolute inset-0 bg-gradient-to-bl from-transparent" />
          <div className="opacity-10 absolute inset-0 flex items-center justify-center">
            <img
              src="/cloudevolvers-hero-logo.png"
              alt="Cloud Evolvers Background"
              className="w-96 h-96 object-contain"
            />
          </div>
          <div className="from-background/65 via-background/45 to-background/65 absolute inset-0 bg-gradient-to-br" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t.training?.detail?.notFound || 'Training Not Found'}</h1>
            <p className="text-muted-foreground mb-8">{t.training?.detail?.notFoundDescription || 'The training course you are looking for could not be found.'}</p>
            <Button
              onClick={() => window.location.href = '/training'}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.training?.detail?.backToTraining || 'Back to Training'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Get current pricing with discount (for JSON training data)
  const priceInfo = training ? getTrainingPriceDisplay(slug, training.price?.amount) : null;
  const isPromotionActive = isPromotionalPricingActive();

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-gradient-to-br from-white via-slate-50/30 to-white dark:from-slate-950 dark:via-slate-900/20 dark:to-slate-950 relative overflow-hidden">
      {/* Beautiful hero background with logo pattern - matching home page exactly */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-slate-500/5 to-blue-500/5 dark:from-blue-500/5 dark:via-slate-500/5 dark:to-blue-500/5" />
        {/* Additional blue gradient layers for more vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/3 to-slate-400/3 via-transparent dark:from-blue-400/3 dark:to-slate-400/3" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-300/2 to-blue-300/2 dark:via-slate-300/3 dark:to-blue-300/3" />
        {/* Large hero logo as background */}
        <div className="opacity-10 absolute inset-0 flex items-center justify-center">
          <img
            src="/cloudevolvers-hero-logo.png"
            alt="Cloud Evolvers Background"
            className="w-96 h-96 object-contain"
          />
        </div>
        {/* Gradient overlay */}
        <div className="from-background/65 via-background/45 to-background/65 absolute inset-0 bg-gradient-to-br" />
      </div>

      {/* Interactive background elements - matching home page */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/60 to-accent/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/60 to-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-secondary/60 to-primary/40 rounded-full blur-3xl"></div>
      </div>

      {/* Floating background icons - matching home page */}
      <BackgroundIcons variant="training" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="hover:bg-muted/80 dark:hover:bg-muted/50 text-foreground transition-all duration-200 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.training?.detail?.backToTraining || 'Back to Training'}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-12 max-w-[1600px] mx-auto">
          {/* Main Content */}
          <div className="xl:col-span-3">
            <TrainingDetailHeader
              training={training}
              priceInfo={priceInfo}
              isPromotionActive={isPromotionActive}
            />
            <TrainingDetailContent
              training={training}
              TrainingContentComponent={null}
            />
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1">
            <TrainingDetailSidebar training={training} />
          </div>
        </div>

        {/* Enhanced Booking Form Section */}
        <motion.div
          id="booking-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-500 rounded-full opacity-30"></div>
            <div className="absolute -bottom-1 left-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-40"></div>

            <Card className="relative shadow-2xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-lg border border-white/10 dark:border-white/5 overflow-hidden">
              {/* Enhanced header with modern card design - matching UI aesthetics */}
              <CardHeader className="bg-gradient-to-br from-primary/95 via-primary to-primary/90 text-primary-foreground relative overflow-hidden p-8 xl:p-10">
                {/* Subtle background decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/3 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg">
                      <Calendar className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl xl:text-4xl font-bold mb-3 leading-tight">
                        {t.training.detail.readyToTransform}
                      </CardTitle>
                    </div>
                  </div>

                  {/* Enhanced info cards with better spacing and design */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-white/80 uppercase tracking-wide">{t.training.detail.duration}</span>
                      </div>
                      <p className="text-lg font-bold text-white">
                        {(() => {
                          const days = training?.duration?.days || 4; // fallback to 4 days
                          return `${days} ${days === 1 ? t.training.detail.daysSingle : t.training.detail.daysPlural} ${t.training.detail.intensiveTraining}`;
                        })()}
                      </p>
                    </div>

                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-sky-300 rounded-full"></div>
                        <span className="text-sm font-medium text-white/80 uppercase tracking-wide">{t.training.detail.investment}</span>
                      </div>
                      <p className="text-lg font-bold text-white">
                        {priceInfo?.displayText || t.training.detail.contactForPricing}
                      </p>
                    </div>

                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
                        <span className="text-sm font-medium text-white/80 uppercase tracking-wide">{t.training?.detail?.groupSize || 'Group Size'}</span>
                      </div>
                      <p className="text-lg font-bold text-white">
                        {t.training?.detail?.minParticipants || 'Minimum 6 participants'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              {/* Enhanced content section with better spacing */}
              <CardContent className="p-10 xl:p-12 bg-gradient-to-br from-card/90 to-card/70 relative">
                {/* Subtle background pattern */}
                <div className="opacity-5 absolute inset-0">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23059669" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046 8.954-20 20-20v20H20z"/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-10 text-center">
                    <h3 className="text-2xl xl:text-3xl font-bold text-foreground mb-4 leading-tight">{t.training.detail.startLearningJourney}</h3>
                    <p className="text-muted-foreground text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed">
                      {t.training.detail.formDescription}
                    </p>
                  </div>

                  <TrainingBookingForm
                    training={training}
                    priceInfo={priceInfo}
                    isPromotionActive={isPromotionActive}
                    language={language}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
