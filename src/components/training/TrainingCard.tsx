import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Clock,
  Certificate,
  Users,
  Sparkle,
  Target
} from '@phosphor-icons/react';
import type { TrainingMetadata } from '@/components/training/content/index';

interface TrainingCardProps {
  training: TrainingMetadata & { isJsonBased?: boolean };
  index: number;
  categoryIcon: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
    bgColor: string;
  };
  levelColors: Record<string, string>;
  formatDuration: (duration: { days: number; hours: number }) => string;
  getTranslatedCourse: (training: TrainingMetadata) => { title: string; description: string };
  t?: any; // Translation object
}

/**
 * TrainingCard - Reusable training course card component
 * Displays course information with consistent blue theme styling
 */
export function TrainingCard({
  training,
  index,
  categoryIcon,
  levelColors,
  formatDuration,
  getTranslatedCourse,
  t
}: TrainingCardProps) {
  const CategoryIcon = categoryIcon.icon;
  const translatedCourse = getTranslatedCourse(training);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 backdrop-blur-sm bg-card/80 border-white/20 hover:border-blue-300/50">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className={`p-3 rounded-xl ${categoryIcon.bgColor} ${categoryIcon.color} shadow-sm`}>
                <CategoryIcon size={24} />
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {training.featured && (
                <Badge className="inline-flex items-center justify-center text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-sm">
                  <Sparkle size={12} className="mr-1 flex-shrink-0" />
                  <span className="leading-none">{t?.training?.overview?.courseCard?.featured || 'Featured'}</span>
                </Badge>
              )}
              {training.isJsonBased && (
                <Badge className="inline-flex items-center justify-center text-xs bg-gradient-to-r from-blue-400 to-sky-500 text-white border-0 shadow-sm">
                  <Target size={12} className="mr-1 flex-shrink-0" />
                  <span className="leading-none">{t?.training?.overview?.courseCard?.new || 'New'}</span>
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {translatedCourse.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              {translatedCourse.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="font-medium">{formatDuration(training.duration)}</span>
              </div>
              <Badge className={`${levelColors[training.level]} border shadow-sm`}>
                {training.level}
              </Badge>
            </div>

            <div className="text-sm">
              <span className="font-medium text-foreground">{training.category}</span>
            </div>

            {training.certification?.available && (
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <Certificate size={14} />
                <span className="font-medium">{training.certification.examCode}</span>
              </div>
            )}

            {training.targetAudience && training.targetAudience.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users size={14} className="text-sky-500 dark:text-sky-400" />
                <span className="line-clamp-1">{training.targetAudience.slice(0, 2).join(', ')}</span>
              </div>
            )}
          </div>

          {/* Action */}
          <Link 
            to={`/training/${training.slug}`} 
            className="mt-auto" 
            onClick={() => console.log('🔗 Navigating to:', training.slug, training.title)}
          >
            <Button className="w-full group/btn bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              {t?.training?.overview?.courseCard?.viewCourseDetails || 'View Course Details'}
              <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
