import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Certificate,
  ArrowRight,
  Sparkle,
} from '@phosphor-icons/react';
import { categoryImages, levelColors } from './constants';
import type { CombinedTraining } from './types';

interface TrainingCardProps {
  training: CombinedTraining;
  getTranslatedCourse: (training: CombinedTraining) => { title: string; description: string };
  formatDuration: (duration: { days: number; hours: number }) => string;
  t: any;
}

export function TrainingCard({ training, getTranslatedCourse, formatDuration, t }: TrainingCardProps) {
  const headerImage = categoryImages[training.category] || categoryImages['Azure'];

  return (
    <Link to={`/training/${training.slug}`} className="h-full block group">
      <Card className="h-full overflow-hidden transition-colors border-border hover:border-primary/40 bg-card">
        {/* Category header image */}
        <div className="h-28 relative overflow-hidden">
          <img
            src={headerImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <span className="absolute bottom-2 left-4 text-xs text-muted-foreground">
            {training.category}
          </span>
        </div>

        <CardContent className="p-4 pt-3 flex flex-col h-[calc(100%-7rem)]">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-2">
            {training.featured && (
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
