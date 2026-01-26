"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrainingPageSkeleton } from '@/components/ui/skeleton';
import { TrainingIcon } from '@/components/ui/training-icon';
import { useDebounce } from '@/hooks/useDebounce';
import { useIsVisible } from '@/hooks/useIntersectionObserver';
import { useVirtualization } from '@/hooks/useVirtualization';
import { useOptimizedScroll } from '@/hooks/useOptimizedScroll';
import { FloatingNavigation } from '@/components/ui/floating-navigation';
import { 
  Clock, 
  Users, 
  GraduationCap,
  Filter,
  Search,
  Award,
  Calendar,
  Mail,
  Phone,
  CheckCircle,
  BookOpen,
  Globe,
  MapPin,
  Video,
  ChevronDown,
  Monitor,
  Cloud,
  Shield,
  Code,
  Database,
  Zap,
  ArrowUp,
  Bot,
  Grid3X3,
  List,
  GitBranch,
  Settings,
  Building
} from 'lucide-react';
import Link from 'next/link';
import { getTranslations, SupportedLang } from '@/utils/i18n';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';
import ConsultationForm from '@/components/forms/ConsultationForm';

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
  image?: string;
  icon?: string;
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
  certificationOffered?: boolean;
}

interface TrainingCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
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

// Performance optimization: Memoized training card component
const TrainingCard = React.memo(({ training, isCloudEvolveBrand, viewMode = 'grid', t, lang }: { training: Training; isCloudEvolveBrand: boolean; viewMode?: 'grid' | 'list'; t: any; lang: SupportedLang }) => {
  const { ref, hasBeenVisible } = useIsVisible(0.1, '100px');
  
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'azure cloud':
      case 'azure': 
        return <Cloud className="h-4 w-4" />;
      case 'azure security':
      case 'security': 
        return <Shield className="h-4 w-4" />;
      case 'azure development':
      case 'development': 
        return <Code className="h-4 w-4" />;
      case 'microsoft 365':
      case 'office 365': 
        return <Globe className="h-4 w-4" />;
      case 'power platform': 
        return <Zap className="h-4 w-4" />;
      case 'ai development':
      case 'artificial intelligence':
        return <Bot className="h-4 w-4" />;
      default: 
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTrainingIcon = (training: Training) => {
    // If training has a specific icon, use that
    if (training.icon) {
      switch (training.icon) {
        case 'GitBranch':
          return <GitBranch className="h-16 w-16" />;
        case 'Settings':
          return <Settings className="h-16 w-16" />;
        case 'Code':
          return <Code className="h-16 w-16" />;
        case 'Building':
          return <Building className="h-16 w-16" />;
        case 'Cloud':
          return <Cloud className="h-16 w-16" />;
        case 'Shield':
          return <Shield className="h-16 w-16" />;
        case 'Database':
          return <Database className="h-16 w-16" />;
        case 'Network':
          return <Globe className="h-16 w-16" />;
        case 'Bot':
          return <Bot className="h-16 w-16" />;
        default:
          return <BookOpen className="h-16 w-16" />;
      }
    }
    // Fallback to category icon
    return React.cloneElement(getCategoryIcon(training.category), { className: 'h-16 w-16' });
  };

  const getTrainingIconSmall = (training: Training) => {
    // If training has a specific icon, use that
    if (training.icon) {
      switch (training.icon) {
        case 'GitBranch':
          return <GitBranch className="h-12 w-12" />;
        case 'Settings':
          return <Settings className="h-12 w-12" />;
        case 'Code':
          return <Code className="h-12 w-12" />;
        case 'Building':
          return <Building className="h-12 w-12" />;
        case 'Cloud':
          return <Cloud className="h-12 w-12" />;
        case 'Shield':
          return <Shield className="h-12 w-12" />;
        case 'Database':
          return <Database className="h-12 w-12" />;
        case 'Network':
          return <Globe className="h-12 w-12" />;
        case 'Bot':
          return <Bot className="h-12 w-12" />;
        default:
          return <BookOpen className="h-12 w-12" />;
      }
    }
    // Fallback to category icon
    return React.cloneElement(getCategoryIcon(training.category), { className: 'h-12 w-12' });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div ref={ref}>
      <Link href={`/training/${training.slug}`} className="block h-full">
        {viewMode === 'grid' ? (
          <Card className={`group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full cursor-pointer training-card ${
            isCloudEvolveBrand 
              ? 'border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600' 
              : 'border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600'
          }`}>
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden rounded-t-lg">
                {/* Clean icon header */}
                <div className={`relative h-48 w-full flex items-center justify-center ${
                  isCloudEvolveBrand 
                    ? 'bg-emerald-50 dark:bg-emerald-900/20' 
                    : 'bg-blue-50 dark:bg-blue-900/20'
                }`}>
                  <div className={`p-6 rounded-full ${
                    isCloudEvolveBrand 
                      ? 'bg-emerald-100 dark:bg-emerald-800/30 border border-emerald-200 dark:border-emerald-700' 
                      : 'bg-blue-100 dark:bg-blue-800/30 border border-blue-200 dark:border-blue-700'
                  }`}>
                    <div className={`${
                      isCloudEvolveBrand ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {getTrainingIcon(training)}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className={`${getDifficultyColor(training.difficulty)} text-white font-semibold px-3 py-1 shadow-sm`}>
                    {training.difficulty}
                  </Badge>
                  {training.certification?.available && (
                    <Badge className="bg-amber-500 text-white font-semibold px-3 py-1 shadow-sm">
                      <Award className="h-3 w-3 mr-1" />
                      Certification
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge variant="secondary" className={`border font-medium flex items-center gap-1 ${
                    isCloudEvolveBrand 
                      ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700' 
                      : 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700'
                  }`}>
                    {getCategoryIcon(training.category)}
                    {training.category}
                  </Badge>
                </div>
              </div>
            
            <div className="flex flex-col flex-grow">
              <CardHeader className="pb-4 pt-6 px-6">
                <CardTitle className={`text-xl transition-colors duration-300 leading-tight mb-3 line-clamp-2 ${
                  isCloudEvolveBrand 
                    ? 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400' 
                    : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  {training.title}
                </CardTitle>
              <CardDescription className="line-clamp-3 text-base leading-relaxed mb-5">
                {getLocalizedDescription(training.description, lang)}
              </CardDescription>
              
              {/* Key highlights/summary */}
              {getLocalizedLearningObjectives(training.learningObjectives, lang).length > 0 && (
                <div className="mb-5">
                  <h5 className="text-sm font-semibold mb-3 text-muted-foreground">What you'll learn:</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {getLocalizedLearningObjectives(training.learningObjectives, lang).slice(0, 3).map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 mt-1 text-green-500 flex-shrink-0" />
                        <span className="line-clamp-1">{objective}</span>
                      </li>
                    ))}
                    {getLocalizedLearningObjectives(training.learningObjectives, lang).length > 3 && (
                      <li className={`text-xs font-medium ${
                        isCloudEvolveBrand 
                          ? 'text-emerald-600 dark:text-emerald-400' 
                          : 'text-blue-600 dark:text-blue-400'
                      }`}>+{getLocalizedLearningObjectives(training.learningObjectives, lang).length - 3} more objectives</li>
                    )}
                  </ul>
                </div>
              )}
              
              <div className={`flex items-center gap-4 flex-wrap text-sm text-muted-foreground mt-5 pt-4 ${
                isCloudEvolveBrand 
                  ? 'border-t border-emerald-200/50 dark:border-emerald-800/30' 
                  : 'border-t border-border/50'
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`p-1 rounded ${
                    isCloudEvolveBrand ? 'bg-emerald-100/50 dark:bg-emerald-900/30' : 'bg-blue-500/10'
                  }`}>
                    <Clock className={`h-4 w-4 ${
                      isCloudEvolveBrand ? 'text-emerald-700 dark:text-emerald-300' : 'text-blue-500'
                    }`} />
                  </div>
                  <span className="font-medium">{training.duration.days} {training.duration.days === 1 ? t.training.day : t.training.days}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-green-500/10 rounded">
                    <Users className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="font-medium">Max {training.maxParticipants || 12}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-purple-500/10 rounded">
                    <Calendar className="h-4 w-4 text-purple-500" />
                  </div>
                  <span className="font-medium text-sm">{training.instructor.name}</span>
                </div>
              </div>
            </CardHeader>
            
            <div className="flex-grow">
              <CardContent className={`space-y-6 px-6 pb-6 ${
                isCloudEvolveBrand 
                  ? 'bg-white/30 dark:bg-slate-900/30' 
                  : ''
              }`}>
                {/* Prerequisites */}
                {getLocalizedPrerequisites(training.prerequisites, lang).length > 0 && (
                  <div className={`rounded-lg p-4 border ${
                    isCloudEvolveBrand 
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-200/60 dark:border-emerald-800/40' 
                      : 'bg-blue-50/50 dark:bg-blue-950/20'
                  }`}>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <div className={`p-1 rounded ${
                        isCloudEvolveBrand ? 'bg-emerald-100/50 dark:bg-emerald-900/30' : 'bg-blue-500/10'
                      }`}>
                        <CheckCircle className={`h-3 w-3 ${
                          isCloudEvolveBrand ? 'text-emerald-700 dark:text-emerald-300' : 'text-blue-500'
                        }`} />
                      </div>
                      Prerequisites
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {getLocalizedPrerequisites(training.prerequisites, lang).slice(0, 2).map((prereq, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 mt-1 text-green-500 flex-shrink-0" />
                          <span className="line-clamp-1">{prereq}</span>
                        </li>
                      ))}
                      {getLocalizedPrerequisites(training.prerequisites, lang).length > 2 && (
                        <li className={`text-xs font-medium ${
                          isCloudEvolveBrand 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>+{getLocalizedPrerequisites(training.prerequisites, lang).length - 2} more requirements</li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Certification */}
                {training.certification?.available && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <div className="p-1 bg-amber-500/10 rounded">
                        <Award className="h-3 w-3 text-amber-500" />
                      </div>
                      Certification Path
                    </h4>
                    <Badge className="bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/50 hover:bg-amber-500/20 transition-colors">
                      <Award className="h-3 w-3 mr-1" />
                      Prepares for Certification
                    </Badge>
                  </div>
                )}

                {/* Price */}
                <div className={`flex items-center justify-between rounded-lg p-4 border ${
                  isCloudEvolveBrand 
                    ? 'bg-green-50/80 dark:bg-green-950/30 border-green-200/60 dark:border-green-800/40' 
                    : 'bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50'
                }`}>
                  <div>
                    {training.price.amount > 0 ? (
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-2xl text-green-700 dark:text-green-300">
                            €{training.price.amount}
                          </span>
                          <span className="text-sm text-green-600 dark:text-green-400">per person</span>
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                          {t.training.groupPricingNote}
                        </div>
                      </div>
                    ) : (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base px-4 py-2 font-bold">
                        FREE
                      </Badge>
                    )}
                  </div>
                  {training.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 max-w-[140px]">
                      {training.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-background/60">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </div>
            </div>
          </div>
        </Card>
        ) : (
          // List view
          <Card className={`group hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer flex flex-row h-48 training-card ${
            isCloudEvolveBrand 
              ? 'border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600' 
              : 'border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600'
          }`}>
            <div className="flex-shrink-0 w-64">
              <div className="relative h-full overflow-hidden rounded-l-lg">
                <div className={`relative h-full w-full flex items-center justify-center ${
                  isCloudEvolveBrand 
                    ? 'bg-emerald-50 dark:bg-emerald-900/20' 
                    : 'bg-blue-50 dark:bg-blue-900/20'
                }`}>
                  <div className={`p-6 rounded-full ${
                    isCloudEvolveBrand 
                      ? 'bg-emerald-100 dark:bg-emerald-800/30 border border-emerald-200 dark:border-emerald-700' 
                      : 'bg-blue-100 dark:bg-blue-800/30 border border-blue-200 dark:border-blue-700'
                  }`}>
                    <div className={`${
                      isCloudEvolveBrand ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {getTrainingIconSmall(training)}
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 flex gap-1">
                  <Badge className={`${getDifficultyColor(training.difficulty)} text-white text-xs px-2 py-1 shadow-sm`}>
                    {training.difficulty}
                  </Badge>
                  {training.certification?.available && (
                    <Badge className="bg-amber-500 text-white text-xs px-2 py-1 shadow-sm">
                      <Award className="h-3 w-3 mr-1" />
                      Cert
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-4">
                  <CardTitle className={`text-lg transition-colors duration-300 leading-tight mb-2 ${
                    isCloudEvolveBrand 
                      ? 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400' 
                      : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {training.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                    {getLocalizedDescription(training.description, lang)}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className={`text-xs flex items-center gap-1 flex-shrink-0 ${
                  isCloudEvolveBrand 
                    ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700' 
                    : 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                }`}>
                  {getCategoryIcon(training.category)}
                  {training.category}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{training.duration.days} {training.duration.days === 1 ? t.training.day : t.training.days}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>Max {training.maxParticipants || 12}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span className="truncate">{training.instructor.name}</span>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div>
                  {training.price.amount > 0 ? (
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-lg text-green-700 dark:text-green-300">
                          €{training.price.amount}
                        </span>
                        <span className="text-xs text-green-600 dark:text-green-400">per person</span>
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        {t.training.contactForGroupPricing}
                      </div>
                    </div>
                  ) : (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-3 py-1 font-bold">
                      FREE
                    </Badge>
                  )}
                </div>
                {training.tags.length > 0 && (
                  <div className="flex gap-1">
                    {training.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-background/60">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        )}
      </Link>
    </div>
  );
});

TrainingCard.displayName = 'TrainingCard';

// Virtualized Training Grid Component for performance optimization
const VirtualizedTrainingGrid = React.memo(({ trainings, isCloudEvolveBrand, viewMode = 'grid', t, lang }: { trainings: Training[]; isCloudEvolveBrand: boolean; viewMode?: 'grid' | 'list'; t: any; lang: SupportedLang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use virtual scrolling for lists with more than 20 items
  const shouldVirtualize = trainings.length > 20;
  
  const {
    visibleItems,
    totalHeight,
    handleScroll
  } = useVirtualization(shouldVirtualize ? trainings : [], {
    itemHeight: 420, // Estimated height of a training card + gap
    containerHeight: 800,
    overscan: 5,
  });

  if (!shouldVirtualize) {
    // For smaller lists, use regular rendering
    return (
      <div className={`${viewMode === 'grid' 
        ? `grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ${isCloudEvolveBrand ? 'gap-8 md:gap-12' : 'gap-8 md:gap-10'}`
        : `space-y-${isCloudEvolveBrand ? '8' : '6'}`
      }`}>
        {trainings.map((training) => (
          <TrainingCard key={training.id} training={training} isCloudEvolveBrand={isCloudEvolveBrand} viewMode={viewMode} t={t} lang={lang} />
        ))}
      </div>
    );
  }

  // Always use regular rendering to avoid scroll bar issues
  return (
    <div className={`${viewMode === 'grid' 
      ? `grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ${isCloudEvolveBrand ? 'gap-8 md:gap-12' : 'gap-8 md:gap-10'}`
      : `space-y-${isCloudEvolveBrand ? '8' : '6'}`
    }`}>
      {trainings.map((training) => (
        <TrainingCard key={training.id} training={training} isCloudEvolveBrand={isCloudEvolveBrand} viewMode={viewMode} t={t} lang={lang} />
      ))}
    </div>
  );
});

VirtualizedTrainingGrid.displayName = 'VirtualizedTrainingGrid';

export default function TrainingPage() {
  // Contact information from environment variables
  // Get brand configuration with hydration safety
  const brandConfig = getBrandConfig();
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);
  const contactEmail = isCloudEvolveBrand ? brandConfig.trainingEmail : (process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@xevolve.io');
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '06-34272027';

  // Language detection with hydration safety
  const [lang, setLang] = useState<SupportedLang>('en');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    const detectedLang = (localStorage.getItem('lang') as SupportedLang) ||
      (document.cookie.match(/NEXT_LOCALE=(nl|en)/)?.[1] as SupportedLang) ||
      (navigator.language.startsWith('nl') ? 'nl' : 'en');
    setLang(detectedLang);
    setIsClient(true);
    setIsCloudEvolveBrand(isCloudEvolvers());
  }, []);
  
  const t = getTranslations(lang);

  const [trainings, setTrainings] = useState<Training[]>([]);
  const [categories, setCategories] = useState<TrainingCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedDelivery, setSelectedDelivery] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Debounce search term to reduce re-renders and API calls
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (isClient) {
      loadTrainings(lang);
      loadCategories();
    }
  }, [isClient, lang]);

  const loadTrainings = useCallback(async (language: SupportedLang = 'en') => {
    try {
      const response = await fetch(`/api/training?lang=${language}`);
      if (response.ok) {
        const data = await response.json();
        setTrainings(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error loading trainings:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadCategories = useCallback(async () => {
    try {
      const response = await fetch('/api/training/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories || []);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  }, []);

  // Memoize filtered trainings to avoid recalculation on every render
  const filteredTrainings = useMemo(() => {
    return trainings.filter(training => {
      const description = getLocalizedDescription(training.description, lang);
      const matchesSearch = debouncedSearchTerm === '' || 
        training.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        training.tags.some(tag => tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
      
      // Improved category matching to handle subcategories and mappings
      const matchesCategory = selectedCategory === 'all' || (() => {
        const filterCategory = selectedCategory.toLowerCase();
        const trainingCategory = training.category.toLowerCase();
        const trainingSubcategory = (training.subcategory || '').toLowerCase();
        
        // Direct match with category
        if (trainingCategory === filterCategory) {
          return true;
        }
        
        // Handle specific category mappings
        const categoryMatches = {
          'azure-data': () => 
            trainingCategory === 'azure' && 
            (trainingSubcategory.includes('artificial intelligence') || 
             trainingSubcategory.includes('data') ||
             training.tags.some(tag => tag.toLowerCase().includes('ai')) ||
             training.tags.some(tag => tag.toLowerCase().includes('data'))),
          'azure-development': () => 
            trainingCategory === 'azure' && 
            (trainingSubcategory.includes('development') || 
             training.tags.some(tag => tag.toLowerCase().includes('development'))),
          'azure-administration': () => 
            trainingCategory === 'azure' && 
            (trainingSubcategory.includes('administration') || 
             training.tags.some(tag => tag.toLowerCase().includes('admin'))),
          'azure-security': () => 
            trainingCategory === 'azure' && 
            (trainingSubcategory.includes('security') || 
             training.tags.some(tag => tag.toLowerCase().includes('security'))),
          'azure-fundamentals': () => 
            trainingCategory === 'azure' && 
            (trainingSubcategory.includes('fundamentals') || 
             training.tags.some(tag => tag.toLowerCase().includes('fundamentals'))),
          'microsoft-365': () => 
            trainingCategory.includes('microsoft 365') || trainingCategory.includes('office 365')
        };
        
        // Check if there's a specific mapping function for this category
        const matchFunction = categoryMatches[filterCategory];
        return matchFunction ? matchFunction() : false;
      })();
      
      const matchesDifficulty = selectedDifficulty === 'all' || training.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [trainings, debouncedSearchTerm, selectedCategory, selectedDifficulty, lang]);

  // Memoize stats calculations
  const trainingStats = useMemo(() => ({
    totalPrograms: trainings.length,
    categories: categories.length,
    certificationCourses: trainings.filter(t => t.certification?.available).length,
    virtualOptions: trainings.length
  }), [trainings, categories]);

  // Add optimized scroll handling for better performance
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  
  useOptimizedScroll((scrollY: number, direction: 'up' | 'down') => {
    setScrollDirection(direction);
  }, {
    throttle: 16, // 60fps
    threshold: 20,
  });

  // CSS optimization for smooth scrolling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add scroll performance optimizations
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Enable GPU acceleration for transforms and add animations
      const style = document.createElement('style');
      style.innerHTML = `
        .training-card {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .training-card:hover {
          transform: translateZ(0) scale(1.02);
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Custom scrollbar styles - hidden but functional */
        .training-preview-scroll::-webkit-scrollbar {
          display: none;
        }
        .training-preview-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `;
      document.head.appendChild(style);

      // Cleanup
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  if (loading) {
    return <TrainingPageSkeleton />;
  }
  return (
    <div className={`min-h-screen ${
      isCloudEvolveBrand 
        ? 'bg-slate-50 dark:bg-slate-900' 
        : 'bg-background'
    }`}>
      {/* Hero Section - Clean Training Banner */}
      <section className={`relative pt-20 pb-12 ${
        isCloudEvolveBrand 
          ? 'bg-emerald-600 dark:bg-emerald-800' 
          : 'bg-blue-600 dark:bg-blue-800'
      }`}>
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* MCT Badge - Left Aligned */}
          <div className="flex justify-start mb-6">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <Award className="h-4 w-4 mr-2" />
              {isClient ? (lang === 'nl' ? t.training.mctTraining : 'Microsoft Certified Trainer') : 'Microsoft Certified Trainer'}
            </Badge>
          </div>

          <div className="text-center text-white">
            {/* Icon with enhanced glow */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className={`absolute inset-0 blur-2xl opacity-70 rounded-full transition-all duration-500 group-hover:opacity-90 ${
                  isCloudEvolveBrand ? 'bg-emerald-400' : 'bg-blue-400'
                }`}></div>
                <div className={`absolute inset-2 blur-lg opacity-40 rounded-full ${
                  isCloudEvolveBrand ? 'bg-teal-300' : 'bg-indigo-300'
                }`}></div>
                <GraduationCap className={`h-16 w-16 relative z-10 ${
                  isCloudEvolveBrand ? 'text-emerald-300' : 'text-blue-300'
                }`} />
              </div>
            </div>
            
            {/* Title with better gradient */}
            <h1 className={`text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent leading-tight ${
              isCloudEvolveBrand 
                ? 'bg-gradient-to-r from-white via-emerald-200 to-teal-200' 
                : 'bg-gradient-to-r from-white via-blue-200 to-indigo-200'
            }`}>
              {isClient ? t.training.pageTitle : 'Microsoft Stack Training'}
            </h1>
            
            {/* Training type badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory('azure')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
              >
                <Cloud className="h-4 w-4 mr-2" />
                Azure Training
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory('microsoft-365')}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
              >
                <Bot className="h-4 w-4 mr-2" />
                Copilot 365 Training
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory('power-platform')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
              >
                <Zap className="h-4 w-4 mr-2" />
                Power Platform Training
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('voucher');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
              >
                <Award className="h-4 w-4 mr-2" />
                Vouchers + Labs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className={`text-white px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 cursor-pointer ${
                  isCloudEvolveBrand 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                }`}
              >
                <Video className="h-4 w-4 mr-2" />
                All Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className={`${
        isCloudEvolveBrand 
          ? 'bg-gradient-to-b from-emerald-950/20 via-white/10 to-emerald-950/20' 
          : ''
      }`}>
        <div className={`container mx-auto px-6 py-12 max-w-7xl ${
          isCloudEvolveBrand 
            ? 'bg-white/5 dark:bg-slate-900/20 rounded-3xl backdrop-blur-sm' 
            : ''
        }`}>
        {/* Filters */}
        <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className={`p-2 rounded-lg ${
                isCloudEvolveBrand ? 'bg-emerald-100/50 dark:bg-emerald-900/30' : 'bg-blue-500/10'
              }`}>
                <Filter className={`h-5 w-5 ${
                  isCloudEvolveBrand ? 'text-emerald-700 dark:text-emerald-300' : 'text-blue-500'
                }`} />
              </div>
              {t.training.findYourTraining}
            </CardTitle>
            <CardDescription className="text-base">
              {t.training.filterDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="relative group">
                <Search className={`absolute left-3 top-2.5 h-4 w-4 text-muted-foreground transition-colors ${
                  isCloudEvolveBrand ? 'group-hover:text-emerald-700 dark:group-hover:text-emerald-300' : 'group-hover:text-blue-500'
                }`} />
                <Input
                  placeholder={t.training.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-9 h-11 bg-background/50 border-border/50 transition-all duration-300 ${
                    isCloudEvolveBrand ? 'focus:border-emerald-500' : 'focus:border-blue-500'
                  }`}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className={`h-11 bg-background/50 border-border/50 transition-all duration-300 ${
                  isCloudEvolveBrand ? 'focus:border-emerald-500' : 'focus:border-blue-500'
                }`}>
                  <SelectValue placeholder={t.training.allCategories} />
                </SelectTrigger>
                <SelectContent className="max-h-[60vh]">
                  <SelectItem value="all">{t.training.allCategories}</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className={`h-11 bg-background/50 border-border/50 transition-all duration-300 ${
                  isCloudEvolveBrand ? 'focus:border-emerald-500' : 'focus:border-blue-500'
                }`}>
                  <SelectValue placeholder={t.training.allLevels} />
                </SelectTrigger>
                <SelectContent className="max-h-[60vh]">
                  <SelectItem value="all">{t.training.allLevels}</SelectItem>
                  <SelectItem value="Beginner">{t.training.beginner}</SelectItem>
                  <SelectItem value="Intermediate">{t.training.intermediate}</SelectItem>
                  <SelectItem value="Advanced">{t.training.advanced}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDelivery} onValueChange={setSelectedDelivery}>
                <SelectTrigger className={`h-11 bg-background/50 border-border/50 transition-all duration-300 ${
                  isCloudEvolveBrand ? 'focus:border-emerald-500' : 'focus:border-blue-500'
                }`}>
                  <SelectValue placeholder={t.training.allFormats} />
                </SelectTrigger>
                <SelectContent className="max-h-[60vh]">
                  <SelectItem value="all">{t.training.allFormats}</SelectItem>
                  <SelectItem value="Virtual Classroom">{t.training.virtualClassroom}</SelectItem>
                  <SelectItem value="In-Person">{t.training.inPerson}</SelectItem>
                  <SelectItem value="Self-Paced">{t.training.selfPaced}</SelectItem>
                  <SelectItem value="Hybrid">{t.training.hybrid}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex rounded-lg bg-card/80 p-1 border border-border/50">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 ${
                    viewMode === 'grid'
                      ? isCloudEvolveBrand
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'hover:bg-muted text-muted-foreground'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 ${
                    viewMode === 'list'
                      ? isCloudEvolveBrand
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'hover:bg-muted text-muted-foreground'
                  }`}
                >
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-10">
          <Card className={`group hover:shadow-lg transition-all duration-300 ${
            isCloudEvolveBrand 
              ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/30 border-emerald-200/50 dark:border-emerald-800/50'
              : 'bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30 border-blue-200/50 dark:border-blue-800/50'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium mb-1 ${
                    isCloudEvolveBrand 
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-blue-700 dark:text-blue-300'
                  }`}>{t.training.availablePrograms}</p>
                  <p className={`text-3xl font-bold ${
                    isCloudEvolveBrand 
                      ? 'text-emerald-900 dark:text-emerald-100'
                      : 'text-blue-900 dark:text-blue-100'
                  }`}>{trainingStats.totalPrograms}</p>
                  <p className={`text-xs mt-1 ${
                    isCloudEvolveBrand 
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>{t.training.readyToStart}</p>
                </div>
                <div className={`p-3 rounded-xl transition-colors ${
                  isCloudEvolveBrand 
                    ? 'bg-emerald-100/50 dark:bg-emerald-900/30 group-hover:bg-emerald-200/50 dark:group-hover:bg-emerald-800/40'
                    : 'bg-blue-500/10 group-hover:bg-blue-500/20'
                }`}>
                  <BookOpen className={`h-8 w-8 ${
                    isCloudEvolveBrand ? 'text-emerald-700 dark:text-emerald-300' : 'text-blue-500'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/30 border-green-200/50 dark:border-green-800/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">{t.training.trainingCategories}</p>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100">{trainingStats.categories}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">{t.training.specializedTracks}</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/50 dark:to-amber-900/30 border-amber-200/50 dark:border-amber-800/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300 mb-1">{t.training.certificationCourses}</p>
                  <p className="text-3xl font-bold text-amber-900 dark:text-amber-100">{trainingStats.certificationCourses}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">{t.training.careerAdvancing}</p>
                </div>
                <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                  <Award className="h-8 w-8 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className={`group hover:shadow-lg transition-all duration-300 ${
            isCloudEvolveBrand 
              ? 'bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/50 dark:to-teal-900/30 border-teal-200/50 dark:border-teal-800/50'
              : 'bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/30 border-purple-200/50 dark:border-purple-800/50'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium mb-1 ${
                    isCloudEvolveBrand 
                      ? 'text-teal-700 dark:text-teal-300'
                      : 'text-purple-700 dark:text-purple-300'
                  }`}>{t.training.virtualOptions}</p>
                  <p className={`text-3xl font-bold ${
                    isCloudEvolveBrand 
                      ? 'text-teal-900 dark:text-teal-100'
                      : 'text-purple-900 dark:text-purple-100'
                  }`}>
                    {trainingStats.virtualOptions}
                  </p>
                  <p className={`text-xs mt-1 ${
                    isCloudEvolveBrand 
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-purple-600 dark:text-purple-400'
                  }`}>{t.training.trainingPrograms}</p>
                </div>
                <div className={`p-3 rounded-xl transition-colors ${
                  isCloudEvolveBrand 
                    ? 'bg-teal-500/10 group-hover:bg-teal-500/20'
                    : 'bg-purple-500/10 group-hover:bg-purple-500/20'
                }`}>
                  <Video className={`h-8 w-8 ${
                    isCloudEvolveBrand ? 'text-teal-500' : 'text-purple-500'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training List */}
        <div className={`${
          isCloudEvolveBrand 
            ? 'bg-white/90 dark:bg-slate-800/90 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700 shadow-lg' 
            : 'bg-white/90 dark:bg-slate-800/90 rounded-2xl p-8 border border-blue-200 dark:border-blue-700 shadow-lg'
        }`}>
        {filteredTrainings.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t.training.noTrainingsFound}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.training.noTrainingsFoundDesc}
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                  setSelectedDelivery('all');
                }}>
                  {t.training.clearFilters}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <VirtualizedTrainingGrid trainings={filteredTrainings} isCloudEvolveBrand={isCloudEvolveBrand} viewMode={viewMode} t={t} lang={lang} />
        )}
        </div>

        {/* Contact Form Section */}
        <Card className={`mt-20 ${isCloudEvolveBrand 
          ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700'
          : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
        }`}>
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-xl ${
                isCloudEvolveBrand ? 'bg-emerald-100 dark:bg-emerald-800/30' : 'bg-blue-100 dark:bg-blue-800/30'
              }`}>
                <GraduationCap className={`h-8 w-8 ${
                  isCloudEvolveBrand ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'
                }`} />
              </div>
            </div>
            <CardTitle className={`text-3xl font-bold ${
              isCloudEvolveBrand 
                ? 'text-emerald-800 dark:text-emerald-200'
                : 'text-blue-800 dark:text-blue-200'
            }`}>
              {t.training.contactTitle}
            </CardTitle>
            <CardDescription className="text-lg mt-2 max-w-2xl mx-auto">
              {t.training.contactDesc}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <div className={`flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border ${
                isCloudEvolveBrand 
                  ? 'border-emerald-200 dark:border-emerald-700'
                  : 'border-blue-200 dark:border-blue-700'
              }`}>
                <div className={`p-2 rounded-lg ${
                  isCloudEvolveBrand ? 'bg-emerald-100 dark:bg-emerald-800/30' : 'bg-blue-100 dark:bg-blue-800/30'
                }`}>
                  <Mail className={`h-6 w-6 ${
                    isCloudEvolveBrand ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-lg">{t.training.emailUs}</p>
                  <p className={`font-medium ${
                    isCloudEvolveBrand 
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>{contactEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-700">
                <div className="p-2 bg-green-100 dark:bg-green-800/30 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{t.training.callUs}</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">{contactPhone}</p>
                </div>
              </div>
            </div>

            {/* Embedded Consultation Form */}
            <div className="max-w-2xl mx-auto">
              <ConsultationForm 
                isDialog={false}
                className={`border-0 shadow-lg ${isCloudEvolveBrand 
                  ? 'bg-white dark:bg-slate-800' 
                  : 'bg-white dark:bg-slate-800'
                }`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Floating Navigation */}
        <FloatingNavigation 
          showScrollTop={true} 
          showTrainingButton={false} // Don't show training button on training page
        />
        </div>
      </div>
    </div>
  );
}
