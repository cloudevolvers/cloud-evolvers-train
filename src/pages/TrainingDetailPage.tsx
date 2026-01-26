import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Spinner } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/hooks/use-translation';
import { TrainingRenderer } from '@/components/content/TrainingRenderer';
import { loadTrainingBySlug } from '@/content/loader';
import type { TrainingJSON } from '@/content/types';

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [language] = useLanguage();
  const [training, setTraining] = useState<TrainingJSON | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const t = useTranslation();

  useEffect(() => {
    const loadTraining = async () => {
      if (!slug) {
        setError('No training slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const trainingData = await loadTrainingBySlug(slug);

        if (!trainingData) {
          setError('Training not found');
        } else {
          setTraining(trainingData);
        }
      } catch (err) {
        console.error('Error loading training:', err);
        setError('Failed to load training data');
      } finally {
        setLoading(false);
      }
    };

    loadTraining();
  }, [slug]);

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-slate-50/30 to-white dark:from-slate-900/10 dark:via-background dark:to-blue-900/10">
        <div className="container max-w-[90rem] mx-auto px-6 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <Spinner className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="text-muted-foreground">Loading training details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-slate-50/30 to-white dark:from-slate-900/10 dark:via-background dark:to-blue-900/10">
        <div className="container max-w-[90rem] mx-auto px-6 py-8">
          <div className="text-center space-y-6">
            <div className="bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Training Not Found</h1>
              <p className="text-muted-foreground mb-6">{error}</p>
            </div>
            <Link to={`/${language}/training`}>
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Training Overview
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle no training found
  if (!training) {
    return <Navigate to={`/${language}/training`} replace />;
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-slate-50/30 to-white dark:from-slate-900/10 dark:via-background dark:to-blue-900/10">
      <div className="container max-w-[90rem] mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            to={`/${language}/training`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.training?.title || 'Back to Training'}
          </Link>
        </motion.div>

        {/* Training Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TrainingRenderer
            data={training}
            language={language || 'en'}
            preview={false}
          />
        </motion.div>

        {/* Related Trainings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="bg-card/60 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t.training?.title || 'Explore More Trainings'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t.training?.subtitle || 'Discover other training courses that might interest you.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/${language}/training`}>
                  <Button variant="outline">
                    View All Trainings
                  </Button>
                </Link>
                <Link to={`/${language}/contact`}>
                  <Button>
                    Get Training Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
