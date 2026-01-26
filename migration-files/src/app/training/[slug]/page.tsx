"use client";

import { useState, useEffect, ComponentType } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Users, 
  GraduationCap,
  Award,
  Calendar,
  Phone,
  CheckCircle,
  BookOpen,
  ArrowLeft,
  Star,
  Target,
  List,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import TrainingInquiryForm from '@/components/training/TrainingInquiryForm';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { getTrainingContent } from '@/components/training/content';
import { getTrainingContent as getDutchTrainingContent } from '@/components/training/content-nl';
import { getTranslations, SupportedLang } from '@/utils/i18n';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';

interface Training {
  id: string;
  slug: string;
  title: string;
  description: {
    en: string;
    nl: string;
  } | string;
  content: string;
  category: string;
  subcategory?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: {
    days: number;
    format: string;
  };
  prerequisites: {
    en: string[];
    nl: string[];
  } | string[];
  learningObjectives: {
    en: string[];
    nl: string[];
  } | string[];
  instructor: {
    id: string;
    name: string;
    title: string;
  };
  image: string;
  imageAlt?: string;
  price: {
    amount: number;
    currency: string;
  };
  schedule: {
    available: boolean;
    nextSession?: string;
  };
  tags: string[];
  featured: boolean;
  certification: {
    available: boolean;
    name?: string;
  };
  maxParticipants?: number;
}

// Helper functions to get localized content
const getLocalizedDescription = (description: { en: string; nl: string } | string, lang: SupportedLang): string => {
  if (typeof description === 'string') return description;
  return description[lang] || description.en || '';
};

const getLocalizedPrerequisites = (prerequisites: { en: string[]; nl: string[] } | string[], lang: SupportedLang): string[] => {
  if (Array.isArray(prerequisites)) return prerequisites;
  return prerequisites[lang] || prerequisites.en || [];
};

const getLocalizedLearningObjectives = (objectives: { en: string[]; nl: string[] } | string[], lang: SupportedLang): string[] => {
  if (Array.isArray(objectives)) return objectives;
  return objectives[lang] || objectives.en || [];
};

export default function TrainingDetailPage() {
  // Hydration-safe brand detection
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [lang, setLang] = useState<SupportedLang>('en');
  
  // Initialize brand configuration after hydration
  useEffect(() => {
    setIsCloudEvolveBrand(isCloudEvolvers());
    setIsClient(true);
    
    // Language detection (cookie/localStorage or browser)
    if (typeof window !== 'undefined') {
      const detectedLang = (localStorage.getItem('lang') as SupportedLang) ||
        (document.cookie.match(/NEXT_LOCALE=(nl|en)/)?.[1] as SupportedLang) ||
        (navigator.language.startsWith('nl') ? 'nl' : 'en');
      setLang(detectedLang);
    }
  }, []);
  
  const t = getTranslations(lang);

  const params = useParams();
  const [training, setTraining] = useState<Training | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params?.slug && isClient) {
      loadTraining(params.slug as string, lang);
    }
  }, [params?.slug, lang, isClient]);

  const loadTraining = async (slug: string, language: SupportedLang) => {
    try {
      const response = await fetch(`/api/training/${slug}?lang=${language}`);
      if (response.ok) {
        const data = await response.json();
        setTraining(data);
      } else if (response.status === 404) {
        setError('Training not found');
      } else {
        setError('Failed to load training');
      }
    } catch (error) {
      console.error('Error loading training:', error);
      setError('Failed to load training');
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/30 to-slate-50/50 dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700"></div>
          </div>
        </div>
      </div>
    );
  }
  if (error || !training) {
    return (
      <div className={`min-h-screen ${
        isCloudEvolveBrand 
          ? 'bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 dark:from-slate-950 dark:via-emerald-950/30 dark:to-teal-950/50'
          : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/50'
      }`}>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{t.training.noTrainingsFound}</h1>
            <p className="text-muted-foreground mb-6">
              {error || t.training.noTrainingsFoundDesc}
            </p>
            <Button asChild>
              <Link href="/training">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.training.pageTitle}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  // Get localized content
  const localizedDescription = getLocalizedDescription(training.description, lang);
  const localizedPrerequisites = getLocalizedPrerequisites(training.prerequisites, lang);
  const localizedLearningObjectives = getLocalizedLearningObjectives(training.learningObjectives, lang);

  return (
    <div className={`min-h-screen ${
      isCloudEvolveBrand 
        ? 'bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 dark:from-slate-950 dark:via-emerald-950/30 dark:to-teal-950/50'
        : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/50'
    }`}>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className={`absolute inset-0 ${
          isCloudEvolveBrand 
            ? 'bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 dark:from-emerald-950 dark:via-teal-900 dark:to-green-950'
            : 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-blue-950 dark:via-blue-900 dark:to-indigo-950'
        }`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <Link 
              href="/training" 
              className={`inline-flex items-center hover:text-white transition-colors duration-200 mb-6 group ${
                isCloudEvolveBrand ? 'text-emerald-300' : 'text-blue-300'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {t.training.pageTitle}
            </Link>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={`${getDifficultyColor(training.difficulty)} text-white px-3 py-1 text-xs font-medium`}>
                <GraduationCap className="h-3 w-3 mr-1" />
                {t.training[training.difficulty.toLowerCase()] || training.difficulty}
              </Badge>
              <Badge className={`backdrop-blur text-white px-3 py-1 text-xs font-medium ${
                isCloudEvolveBrand ? 'bg-emerald-600/90' : 'bg-blue-600/90'
              }`}>
                <Globe className="h-3 w-3 mr-1" />
                {training.category}
              </Badge>
              {training.certification.available && (
                <Badge className="bg-amber-500/90 backdrop-blur text-amber-900 px-3 py-1 text-xs font-medium">
                  <Award className="h-3 w-3 mr-1" />
                  {t.training.certificationCourses}
                </Badge>
              )}
              <Badge className={`backdrop-blur text-white px-3 py-1 text-xs font-medium ${
                isCloudEvolveBrand ? 'bg-teal-500/90' : 'bg-green-500/90'
              }`}>
                <Star className="h-3 w-3 mr-1" />
                {lang === 'nl' ? 'Expert trainer' : 'Expert-Led'}
              </Badge>
            </div>

            {/* Title and Description */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {training.title}
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 max-w-3xl leading-relaxed ${
              isCloudEvolveBrand ? 'text-emerald-100' : 'text-blue-100'
            }`}>
              {localizedDescription}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center border border-white/20">
                <Clock className={`h-5 w-5 mx-auto mb-2 ${
                  isCloudEvolveBrand ? 'text-emerald-300' : 'text-blue-300'
                }`} />
                <div className="text-xl font-bold text-white">{training.duration.days}</div>
                <div className={`text-xs ${
                  isCloudEvolveBrand ? 'text-emerald-200' : 'text-blue-200'
                }`}>{training.duration.days === 1 ? t.training.day : t.training.days}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center border border-white/20">
                <Users className={`h-5 w-5 mx-auto mb-2 ${
                  isCloudEvolveBrand ? 'text-emerald-300' : 'text-blue-300'
                }`} />
                <div className="text-xl font-bold text-white">{training.maxParticipants}</div>
                <div className={`text-xs ${
                  isCloudEvolveBrand ? 'text-emerald-200' : 'text-blue-200'
                }`}>Max Participants</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center border border-white/20">
                <Target className={`h-5 w-5 mx-auto mb-2 ${
                  isCloudEvolveBrand ? 'text-emerald-300' : 'text-blue-300'
                }`} />
                <div className="text-xl font-bold text-white">{localizedLearningObjectives.length}</div>
                <div className={`text-xs ${
                  isCloudEvolveBrand ? 'text-emerald-200' : 'text-blue-200'
                }`}>Learning Goals</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center border border-white/20">
                {training.price.amount > 0 ? (
                  <>
                    <div className="text-xl font-bold text-green-300">
                      {training.price.currency === 'EUR' ? '€' : training.price.currency === 'USD' ? '$' : training.price.currency}{training.price.amount}
                    </div>
                    <div className={`text-xs ${
                      isCloudEvolveBrand ? 'text-emerald-200' : 'text-blue-200'
                    }`}>Investment</div>
                  </>
                ) : (
                  <>
                    <div className="text-xl font-bold text-green-300">FREE</div>
                    <div className={`text-xs ${
                      isCloudEvolveBrand ? 'text-emerald-200' : 'text-blue-200'
                    }`}>Training</div>
                  </>
                )}
              </div>
            </div>

            {/* Single CTA Button */}
            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  const formElement = document.getElementById('training-contact-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg" 
                className={`text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isCloudEvolveBrand 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {t.training.registerInterest}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Main Content Area */}
          <div className="xl:col-span-3 space-y-6">
            {/* Course Overview */}
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
              <CardHeader className={`text-white p-6 ${
                isCloudEvolveBrand 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              }`}>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <div className="p-2.5 bg-white/20 rounded-xl">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  {t.training.courseOverview}
                </CardTitle>
                <CardDescription className={`text-base mt-1 ${
                  isCloudEvolveBrand ? 'text-emerald-100' : 'text-blue-100'
                }`}>
                  {t.training.courseOverviewDesc}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5">
                {(() => {
                  // Get the appropriate content component based on language
                  let ContentComponent: ComponentType<any> | null = null;
                  if (lang === 'nl') {
                    ContentComponent = getDutchTrainingContent(training.slug);
                  }
                  // Fallback to English if Dutch not available
                  if (!ContentComponent) {
                    ContentComponent = getTrainingContent(training.slug);
                  }
                  
                  if (ContentComponent) {
                    return <ContentComponent />;
                  }
                  return (
                    <div className="prose prose-compact prose-sm max-w-none dark:prose-invert 
                      prose-headings:text-slate-900 dark:prose-headings:text-slate-100 
                      prose-p:text-slate-700 dark:prose-p:text-slate-300 
                      prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
                      <p className="text-slate-700 dark:text-slate-300">
                        {localizedDescription}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
                        {t.training.contentComingSoon}
                      </p>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            {localizedLearningObjectives.length > 0 && (
              <Card className="overflow-hidden shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold">
                    <div className="p-2.5 bg-white/20 rounded-xl">
                      <Target className="h-5 w-5" />
                    </div>
                    {t.training.learningObjectives}
                  </CardTitle>
                  <CardDescription className="text-green-100 mt-1 text-sm">
                    {t.training.learningObjectivesDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid gap-2">
                    {localizedLearningObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-2.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200/50 dark:border-green-800/50 hover:shadow-md transition-all duration-200">
                        <div className="p-1 bg-green-500/10 rounded-full mt-0.5">
                          <CheckCircle className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                        </div>
                        <span className="text-sm leading-tight text-slate-700 dark:text-slate-300">{objective}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Prerequisites */}
            {localizedPrerequisites.length > 0 && (
              <Card className="overflow-hidden shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
                <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-5">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold">
                    <div className="p-2.5 bg-white/20 rounded-xl">
                      <List className="h-5 w-5" />
                    </div>
                    {t.training.prerequisites}
                  </CardTitle>
                  <CardDescription className="text-orange-100 mt-1 text-sm">
                    {t.training.prerequisitesDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid gap-1.5">
                    {localizedPrerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border border-orange-200/50 dark:border-orange-800/50">
                        <Star className="h-3.5 w-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-tight text-slate-700 dark:text-slate-300">{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Enhanced Sidebar */}
          <div className="xl:col-span-1 space-y-4">
            {/* Instructor Card */}
            <Card className="overflow-hidden shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
              <CardHeader className={`text-white p-5 ${
                isCloudEvolveBrand 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600' 
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600'
              }`}>
                <CardTitle className="text-base font-bold">{t.training.expertInstructor}</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isCloudEvolveBrand 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500' 
                      : 'bg-gradient-to-br from-purple-500 to-indigo-500'
                  }`}>
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-base text-slate-900 dark:text-slate-100">{training.instructor.name}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{training.instructor.title}</div>
                  </div>
                </div>
                {training.certification.available && (
                  <>
                    <Separator className="my-3" />
                    <div className="flex items-center gap-2 p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                      <Award className="h-4 w-4 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-800 dark:text-amber-200">{t.training.preparesForCertification}</span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Investment Card */}
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
              <CardHeader className="p-5">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  {training.price.amount > 0 ? t.training.investment : t.training.freeTraining}
                  <Star className="h-4 w-4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                {training.price.amount > 0 ? (
                  <>
                    <div className="text-center bg-white/20 backdrop-blur rounded-xl p-4 border border-white/30">
                      <div className="text-3xl font-bold mb-1">
                        {training.price.currency === 'EUR' ? '€' : training.price.currency === 'USD' ? '$' : training.price.currency}{training.price.amount}
                      </div>
                      <div className="text-green-100 text-sm font-medium">
                        {t.training.perParticipant}
                      </div>
                    </div>
                    {/* Group Pricing Info */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-green-200" />
                        <span className="text-sm font-semibold text-green-100">{t.training.groupPricing}</span>
                      </div>
                      <div className="text-xs text-green-200 leading-relaxed">
                        {t.training.groupPricingNote}
                      </div>
                      <div className="text-xs text-green-300 mt-1 font-medium">
                        {t.training.contactForGroupPricing}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center bg-white/20 backdrop-blur rounded-xl p-4 border border-white/30">
                    <div className="text-3xl font-bold text-green-100 mb-1">{t.training.free}</div>
                    <div className="text-green-200 text-sm">
                      {t.training.noCostTraining}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <p className={`text-sm font-medium ${
                    isCloudEvolveBrand ? 'text-emerald-100' : 'text-blue-100'
                  }`}>
                    Ready to get started? Contact us below for more information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="overflow-hidden shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-5">
                <CardTitle className="text-base font-bold">{t.training.quickFacts}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm">
                    <Clock className="h-3.5 w-3.5" />
                    {t.training.duration}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{training.duration.days} {training.duration.days === 1 ? t.training.day : t.training.days}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {t.training.difficulty}
                  </span>
                  <Badge className={`${getDifficultyColor(training.difficulty)} text-xs px-2 py-1`}>{training.difficulty}</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm">
                    <Users className="h-3.5 w-3.5" />
                    {t.training.maxParticipants}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{training.maxParticipants}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm">
                    <Globe className="h-3.5 w-3.5" />
                    {t.training.category}
                  </span>
                  <Badge variant="outline" className="text-slate-700 dark:text-slate-300 text-xs px-2 py-1">{training.category}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            {training.tags.length > 0 && (
              <Card className="overflow-hidden shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
                <CardHeader className={`text-white p-5 ${
                  isCloudEvolveBrand
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                }`}>
                  <CardTitle className="text-base font-bold">{t.training.relatedTopics}</CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {training.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className={`${
                          isCloudEvolveBrand
                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900/50'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50'
                        } transition-colors cursor-pointer px-2.5 py-1 text-xs`}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Training Contact Form */}
        <div id="training-contact-form" className="mt-8 max-w-4xl mx-auto">
          <Card className={`${isCloudEvolveBrand 
            ? 'bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200/50 dark:border-emerald-800/50'
            : 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50'
          }`}>
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-xl ${isCloudEvolveBrand ? 'bg-emerald-500/10' : 'bg-blue-500/10'}`}>
                  <GraduationCap className={`h-8 w-8 ${isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'}`} />
                </div>
              </div>
              <CardTitle className={`text-3xl font-bold bg-gradient-to-r ${
                isCloudEvolveBrand 
                  ? 'from-emerald-600 to-teal-600 bg-clip-text text-transparent'
                  : 'from-blue-600 to-indigo-600 bg-clip-text text-transparent'
              }`}>
                Register Your Interest
              </CardTitle>
              <CardDescription className="text-lg mt-2 max-w-2xl mx-auto">
                Ready to advance your skills with "{training.title}"? Fill out the form below and we'll get back to you with all the details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ConsultationForm 
                prefilledTraining={training?.title}
                isDialog={false}
                className="border-0 shadow-none bg-transparent"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
