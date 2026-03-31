import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Certificate,
  ArrowRight,
  Sparkle,
  Warning,
} from '@phosphor-icons/react';
import { courseImages, defaultCourseImage, levelColors } from './constants';
import type { CombinedTraining } from './types';

interface TrainingCardProps {
  training: CombinedTraining;
  getTranslatedCourse: (training: CombinedTraining) => { title: string; description: string };
  formatDuration: (duration: { days: number; hours: number }) => string;
  t: any;
  allTrainings?: CombinedTraining[];
}

function getRetirementStatus(retired?: { date: string; successor?: string }) {
  if (!retired) return null;
  const retireDate = new Date(retired.date);
  const now = new Date();
  const isRetired = retireDate <= now;
  const month = retireDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return { isRetired, label: isRetired ? 'Retired' : `Retiring ${month}`, date: retired.date, successor: retired.successor };
}

export function TrainingCard({ training, getTranslatedCourse, formatDuration, t, allTrainings }: TrainingCardProps) {
  const headerImage = courseImages[training.slug] || defaultCourseImage;
  const retirement = getRetirementStatus(training.retired);
  const successorTraining = retirement?.successor && allTrainings?.find(t => t.slug === retirement.successor);

  return (
    <Link to={`/training/${training.slug}`} className="h-full block group">
      <Card className={`h-full overflow-hidden transition-colors border-border hover:border-primary/40 bg-card ${retirement?.isRetired ? 'opacity-75' : ''}`}>
        {/* Category header image */}
        <div className="h-28 relative overflow-hidden">
          <img
            src={headerImage}
            alt=""
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${retirement?.isRetired ? 'grayscale' : ''}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <span className="absolute bottom-2 left-4 text-xs text-muted-foreground">
            {training.category}
          </span>
          {retirement && (
            <Badge className={`absolute top-2 right-2 text-xs ${retirement.isRetired ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-amber-500 text-white hover:bg-amber-600'}`}>
              <Warning size={10} className="mr-1" />
              {retirement.label}
            </Badge>
          )}
        </div>

        <CardContent className="p-4 pt-3 flex flex-col h-[calc(100%-7rem)]">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {training.featured && !retirement?.isRetired && (
              <Badge variant="secondary" className="text-xs">
                <Sparkle size={10} className="mr-1" />
                Featured
              </Badge>
            )}
            {training.certification?.available && (
              <Badge variant="outline" className="text-xs">
                <Certificate size={10} className="mr-1" />
                {training.certification.examCode}
              </Badge>
            )}
          </div>

          {/* Title & description */}
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {getTranslatedCourse(training).title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {getTranslatedCourse(training).description}
          </p>

          {/* Successor link */}
          {successorTraining && (
            <Link
              to={`/training/${successorTraining.slug}`}
              className="text-xs text-primary font-medium mb-3 flex items-center gap-1 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowRight size={12} />
              Replaced by: {successorTraining.certification?.examCode || successorTraining.title}
            </Link>
          )}

          {/* Footer metadata */}
          <div className="flex items-center justify-between text-sm pt-3 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock size={14} />
              <span>{formatDuration(training.duration)}</span>
            </div>
            <Badge className={`${levelColors[training.level]} border`}>
              {training.level}
            </Badge>
          </div>

          {/* View link */}
          <div className="flex items-center gap-1 text-sm text-primary mt-3 font-medium">
            View details
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
