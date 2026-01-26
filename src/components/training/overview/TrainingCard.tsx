import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Users,
  Certificate,
  ArrowRight,
  Sparkle,
  Target
} from '@phosphor-icons/react';
import { categoryIcons, levelColors } from './constants';
import type { CombinedTraining } from './types';

interface TrainingCardProps {
  training: CombinedTraining;
  index: number;
  getTranslatedCourse: (training: CombinedTraining) => { title: string; description: string };
  formatDuration: (duration: { days: number; hours: number }) => string;
  t: any;
}

export function TrainingCard({ training, index, getTranslatedCourse, formatDuration, t }: TrainingCardProps) {
  const categoryInfo = categoryIcons[training.category] || categoryIcons['Azure'];
  const CategoryIcon = categoryInfo.icon;

  return (
    <motion.div
      key={training.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 backdrop-blur-sm bg-card/80 border-border hover:border-blue-500/50">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${categoryInfo.bgColor} ${categoryInfo.color} shadow-sm`}>
                <CategoryIcon size={24} />
              </div>
              <div>
                {training.featured && (
                  <Badge className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-sm">
                    <Sparkle size={12} className="mr-1" />
                    Featured
                  </Badge>
                )}
                {training.isJsonBased && (
                  <Badge className="text-xs bg-gradient-to-r from-blue-400 to-sky-500 text-white border-0 shadow-sm ml-2">
                    <Target size={12} className="mr-1" />
                    New
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {getTranslatedCourse(training).title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              {getTranslatedCourse(training).description}
            </p>
          </div>

          {/* Metadata */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={14} className="text-blue-600 dark:text-blue-400" />
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
                <Users size={14} className="text-sky-600 dark:text-sky-400" />
                <span className="line-clamp-1">{training.targetAudience.slice(0, 2).join(', ')}</span>
              </div>
            )}
          </div>

          {/* Action */}
          <Link to={`/training/${training.slug}`} className="mt-auto">
            <Button className="w-full group/btn bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              View Course Details
              <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
