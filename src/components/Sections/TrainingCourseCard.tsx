import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, Users } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { getTrainingIcon, getCategoryColors, getLevelColors } from './training-section-utils';

export interface TrainingSectionCourse {
  code: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  icon: any;
  popular?: boolean;
  maxParticipants?: number;
  instructor?: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
}

interface TrainingCourseCardProps {
  course: TrainingSectionCourse;
  index: number;
}

export const TrainingCourseCard: React.FC<TrainingCourseCardProps> = ({ course, index }) => {
  const navigate = useNavigate();
  const categoryColors = getCategoryColors(course.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => navigate(`/training/${course.code.toLowerCase()}`)}
      className="cursor-pointer group"
    >
      <Card className="h-full overflow-hidden bg-white dark:bg-slate-800 border border-border/40 group-hover:border-blue-500/40 shadow-sm hover:shadow-xl transition-all duration-300 relative">
        {/* Popular badge */}
        {course.popular && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-amber-500 text-white px-3 py-1.5 text-xs font-bold shadow-sm">
              <Star size={12} className="mr-1" weight="fill" />
              Popular
            </Badge>
          </div>
        )}

        {/* Course header with icon */}
        <div className={`relative h-32 bg-gradient-to-br ${categoryColors.bg} ${categoryColors.border} border-b flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
          <div className={`${categoryColors.icon} group-hover:scale-110 transition-transform duration-300`}>
            {getTrainingIcon(course.icon)}
          </div>
          <div className="absolute top-4 right-4">
            <Badge className={`${getLevelColors(course.level)} text-xs px-2 py-1`}>
              {course.level}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge className={`text-xs px-2 py-1 ${categoryColors.text} bg-transparent border ${categoryColors.border}`}>
              {course.category}
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20">
              {course.code}
            </Badge>
          </div>

          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3">
            {course.description}
          </p>

          {/* Course details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={14} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={14} />
                <span className="font-medium">Max {course.maxParticipants}</span>
              </div>
            </div>
            <div className="text-xs text-green-600 font-medium">
              {course.instructor}
            </div>
          </div>

          {/* Pricing */}
          <div className="border-t border-border/40 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    €{course.discountedPrice.toLocaleString()}
                  </span>
                  <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                    30% OFF
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="line-through">€{course.originalPrice.toLocaleString()}</span>
                  <span className="text-green-600 font-medium">Save €{course.savings}</span>
                </div>
                <span className="text-xs text-muted-foreground">per day, per person</span>
              </div>

              <motion.div
                className="flex items-center gap-2 text-primary font-semibold cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm">View Details</span>
                <ArrowRight size={16} />
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
