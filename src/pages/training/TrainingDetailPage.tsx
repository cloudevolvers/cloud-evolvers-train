import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CurrencyEur, ArrowRight } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { loadTrainingBySlug } from '@/content/loader';
import { getTrainingPriceDisplay, isPromotionalPricingActive } from '@/lib/pricing';
import { isProduction } from '@/lib/version';
import TrainingDetailHeader from '@/components/training/TrainingDetailHeader';
import TrainingDetailContent from '@/components/training/TrainingDetailContent';
import TrainingDetailSidebar from '@/components/training/TrainingDetailSidebar';
import TrainingBookingForm from '@/components/training/TrainingBookingForm';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/use-translations';
import type { TrainingJSON } from '@/content/types';
import { courseImages, defaultCourseImage } from '@/components/training/overview/constants';

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguageContext();
  const { t } = useTranslations();
  const [training, setTraining] = useState<TrainingJSON | null>(null);
  const [loading, setLoading] = useState(true);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  if (!slug) {
    return <Navigate to="/training" replace />;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

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
  }, [slug, language]);

  // Show sticky CTA bar when header scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, [training]);

  const heroImage = courseImages[slug] || defaultCourseImage;

  if (loading) {
    return (
      <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
              <p className="text-muted-foreground">{t.training?.detail?.loading || 'Loading training details...'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!loading && !training) {
    return (
      <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
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

  const priceInfo = training ? getTrainingPriceDisplay(slug, training.price?.amount) : null;
  const isPromotionActive = isPromotionalPricingActive();

  const showDevPrice = !isProduction() && (!training?.price?.amount || priceInfo?.isFallbackPrice);
  const priceDisplay = showDevPrice
    ? 'DEV'
    : isPromotionActive && priceInfo?.hasDiscount
      ? priceInfo.formattedFinalPrice
      : `€${training?.price?.amount || 'TBD'}`;

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background relative overflow-hidden">
      {/* Sticky CTA Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[65px] left-0 right-0 z-[9998] bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 max-w-[1600px] mx-auto">
                <div className="flex items-center gap-3 min-w-0">
                  <h2 className="font-bold text-foreground text-sm sm:text-base truncate">
                    {training?.title}
                  </h2>
                  <span className="hidden sm:inline-flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md flex-shrink-0">
                    {training?.duration?.days} {(training?.duration?.days || 0) === 1 ? (t.training?.detail?.daysSingle || 'day') : (t.training?.detail?.daysPlural || 'days')}
                  </span>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {priceDisplay}
                  </span>
                  <a
                    href="#booking-form"
                    className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 text-sm shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    <Calendar className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.training?.detail?.inquireAboutTraining || 'Inquire'}</span>
                    <span className="sm:hidden">Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Course hero image */}
      <div className="absolute inset-x-0 top-0 h-72 sm:h-80 md:h-96">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="hover:bg-muted/80 text-foreground -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.training?.detail?.backToTraining || 'Back to Training'}
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-12 max-w-[1600px] mx-auto">
          {/* Main Content */}
          <div className="xl:col-span-3">
            <div ref={headerRef}>
              <TrainingDetailHeader
                training={training}
                priceInfo={priceInfo}
                isPromotionActive={isPromotionActive}
              />
            </div>
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

        {/* Booking Form Section */}
        <div
          id="booking-form"
          className="mt-16 max-w-5xl mx-auto scroll-mt-20"
        >
          <Card className="shadow-2xl bg-card border border-border/50 overflow-hidden">
            {/* Booking header - emerald themed for conversion */}
            <CardHeader className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 dark:from-emerald-700 dark:via-emerald-800 dark:to-emerald-900 text-white p-8 xl:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="p-3 bg-white/15 rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl xl:text-3xl font-bold leading-tight text-white">
                    {t.training.detail.readyToTransform}
                  </CardTitle>
                  <p className="text-emerald-100/80 mt-1 text-sm">
                    {t.training.detail.formDescription}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                  <span className="text-xs font-medium text-emerald-100/70 uppercase tracking-wide block mb-1">{t.training.detail.duration}</span>
                  <p className="text-base font-bold text-white">
                    {(() => {
                      const days = training?.duration?.days || 4;
                      return `${days} ${days === 1 ? t.training.detail.daysSingle : t.training.detail.daysPlural} ${t.training.detail.intensiveTraining}`;
                    })()}
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                  <span className="text-xs font-medium text-emerald-100/70 uppercase tracking-wide block mb-1">{t.training.detail.investment}</span>
                  <p className="text-xl font-extrabold text-white">
                    {priceDisplay}
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                  <span className="text-xs font-medium text-emerald-100/70 uppercase tracking-wide block mb-1">{t.training?.detail?.groupSize || 'Group Size'}</span>
                  <p className="text-base font-bold text-white">
                    {t.training?.detail?.minParticipants || 'Minimum 6 participants'}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 xl:p-10">
              <div className="mb-8 text-center">
                <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-2">{t.training.detail.startLearningJourney}</h3>
              </div>

              <TrainingBookingForm
                training={training}
                priceInfo={priceInfo}
                isPromotionActive={isPromotionActive}
                language={language}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
