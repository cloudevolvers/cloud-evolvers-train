import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, CheckCircle, Clock } from '@phosphor-icons/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface TrainingDetailContentProps {
  training: any;
  TrainingContentComponent: React.ComponentType | null;
}

export default function TrainingDetailContent({ training, TrainingContentComponent }: TrainingDetailContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {TrainingContentComponent ? (
        <Suspense fallback={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }>
          <TrainingContentComponent />
        </Suspense>
      ) : (
        <div className="space-y-8">
          {/* Course Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none"></div>
              <CardContent className="p-5 sm:p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <BookOpen className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Course Overview</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {training.overview || training.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Story Section - Mobile-optimized layout */}
          {training.personalStory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="shadow-2xl bg-gradient-to-br from-amber-50/95 to-orange-50/90 dark:from-amber-950/30 dark:to-orange-950/20 backdrop-blur-sm border-2 border-amber-200/50 dark:border-amber-800/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-orange-500/8 pointer-events-none"></div>
                <CardContent className="p-5 sm:p-8 lg:p-10 relative z-10">
                  {/* Header with badge */}
                  <div className="text-center sm:text-left mb-4 sm:mb-6">
                    <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 bg-gradient-to-r from-amber-400/30 to-orange-400/30 dark:from-amber-600/30 dark:to-orange-600/30 rounded-full border-2 border-amber-400/40 dark:border-amber-600/40 shadow-sm">
                      <span className="text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-200 uppercase tracking-wide">Personal Story</span>
                    </div>
                  </div>
                  {/* Instructor name */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center sm:text-left">{training.personalStory.instructor}</h3>
                  {/* Quote */}
                  <blockquote className="relative bg-white/50 dark:bg-slate-900/30 rounded-xl p-4 sm:p-6">
                    <p className="text-base sm:text-lg lg:text-xl text-foreground/90 dark:text-foreground/80 leading-relaxed italic font-medium">
                      "{training.personalStory.story}"
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Learning Objectives - After Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
              <CardContent className="p-5 sm:p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <Target className="h-5 w-5 sm:h-7 sm:w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Learning Objectives</h3>
                </div>
                <div className="grid gap-3 sm:gap-4">
                  {training.learningObjectives?.map((objective: any, index: number) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-5 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg sm:rounded-xl border border-emerald-500/20"
                    >
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500/20 rounded-md sm:rounded-lg flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {typeof objective === 'string' ? (
                          <span className="text-foreground text-sm sm:text-base lg:text-lg leading-relaxed">{objective}</span>
                        ) : (
                          <>
                            <h4 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">{objective.title}</h4>
                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{objective.description}</p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )) || (
                    <p className="text-muted-foreground text-center py-8">No learning objectives available.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Course Modules - Clean and Professional */}
          {training.modules && training.modules.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
                <CardContent className="p-5 sm:p-6 lg:p-8 relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0">
                      <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Course Modules</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1">Structured curriculum for complete mastery</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:gap-5">
                    {training.modules.map((module: any, index: number) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="group bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-transparent rounded-xl sm:rounded-2xl border-2 border-blue-500/20 overflow-hidden"
                      >
                        <div className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                            <div className="flex items-baseline gap-2 sm:gap-3">
                              <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{index + 1}.</span>
                              <h4 className="font-bold text-foreground text-base sm:text-xl lg:text-2xl leading-tight">{module.title}</h4>
                            </div>
                            {module.duration && (
                              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/30 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full flex-shrink-0 border border-blue-200/50 dark:border-blue-800/50 shadow-sm w-fit">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{module.duration}</span>
                              </div>
                            )}
                          </div>
                          {module.description && (
                            <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{module.description}</p>
                          )}
                          {module.topics && module.topics.length > 0 && (
                            <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                              {module.topics.map((topic: string, topicIndex: number) => (
                                <div key={topicIndex} className="flex items-start gap-2 sm:gap-4 p-2.5 sm:p-3.5 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent rounded-lg sm:rounded-xl border border-blue-200/30 dark:border-blue-800/30">
                                  <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md sm:rounded-lg flex-shrink-0 shadow-md">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                  </div>
                                  <span className="text-foreground leading-relaxed text-sm sm:text-base font-medium">{topic}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
}
