import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
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
import { courseImages, defaultCourseImage } from '@/components/training/overview/constants';

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguageContext();
  const { t } = useTranslations();
  const [training, setTraining] = useState<TrainingJSON | null>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background relative overflow-hidden">
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
        <div className="mb-8">
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

        {/* Booking Form Section */}
        <div
          id="booking-form"
          className="mt-16 max-w-5xl mx-auto"
        >
          <Card className="shadow-xl bg-card border border-border/50 overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-8 xl:p-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl xl:text-4xl font-bold leading-tight">
                  {t.training.detail.readyToTransform}
                </CardTitle>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
                <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                  <span className="text-sm font-medium text-white/80 uppercase tracking-wide block mb-1">{t.training.detail.duration}</span>
                  <p className="text-lg font-bold text-white">
                    {(() => {
                      const days = training?.duration?.days || 4;
                      return `${days} ${days === 1 ? t.training.detail.daysSingle : t.training.detail.daysPlural} ${t.training.detail.intensiveTraining}`;
                    })()}
                  </p>
                </div>

                <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                  <span className="text-sm font-medium text-white/80 uppercase tracking-wide block mb-1">{t.training.detail.investment}</span>
                  <p className="text-lg font-bold text-white">
                    {priceInfo?.displayText || t.training.detail.contactForPricing}
                  </p>
                </div>

                <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                  <span className="text-sm font-medium text-white/80 uppercase tracking-wide block mb-1">{t.training?.detail?.groupSize || 'Group Size'}</span>
                  <p className="text-lg font-bold text-white">
                    {t.training?.detail?.minParticipants || 'Minimum 6 participants'}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-10 xl:p-12">
              <div className="mb-10 text-center">
                <h3 className="text-2xl xl:text-3xl font-bold text-foreground mb-4">{t.training.detail.startLearningJourney}</h3>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
