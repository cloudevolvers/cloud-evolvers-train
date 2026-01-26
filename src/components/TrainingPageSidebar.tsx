import React from 'react';
import { motion } from 'framer-motion';
import { Users, Certificate, Target, CheckCircle, Tag } from '@phosphor-icons/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import type { Training } from '@/types/training';

interface TrainingPageSidebarProps {
  training: Training;
  language: 'en' | 'nl';
}

export function TrainingPageSidebar({ training, language }: TrainingPageSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Learning Objectives */}
      {training.learningObjectives?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl relative overflow-hidden group">
            {/* Animated progress bar like home page */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"></div>
            <motion.div
              className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-primary to-accent"
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent rounded-full"></div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Target size={18} />
                </div>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {language === 'nl' ? 'Leerdoelen' : 'Learning Objectives'}
                </span>
              </h3>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-3">
                {training.learningObjectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10 group hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle size={12} className="text-primary" weight="fill" />
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-foreground">{objective}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Prerequisites */}
      {training.prerequisites?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-accent/5 to-transparent rounded-full"></div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                  {language === 'nl' ? 'Vereisten' : 'Prerequisites'}
                </span>
              </h3>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-3">
                {training.prerequisites.map((prerequisite, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-lg border border-accent/10 group hover:bg-gradient-to-r hover:from-accent/10 hover:to-secondary/10 transition-all duration-300"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle size={12} className="text-accent" weight="fill" />
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-foreground">{prerequisite}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Expert-Led Training */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full"></div>
          <CardHeader className="p-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                <Users size={18} />
              </div>
              <span className="text-foreground font-bold">
                {language === 'nl' ? 'Expert-Led Training' : 'Expert-Led Training'}
              </span>
            </h3>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5 rounded-lg border border-secondary/10">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center">
                <Users size={20} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{training.instructor.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{training.instructor.title}</p>
                {training.instructor.specialties && (
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-medium">
                      {language === 'nl' ? 'Specialiteiten:' : 'Specialties:'}
                    </span> {training.instructor.specialties.join(', ')}
                  </p>
                )}
              </div>
            </div>
            {training.instructor.bio && (
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-medium">
                {training.instructor.bio}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Certification */}
      {training.certification?.available && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-green-600 to-emerald-600 text-white relative">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-full"></div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Certificate size={18} className="text-white" />
                </div>
                <span className="text-white font-bold">
                  {language === 'nl' ? 'Certificering' : 'Certification'}
                </span>
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 p-6 pt-0">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold mb-2 text-white">{training.certification.name}</h4>
                {training.certification.examCode && (
                  <p className="text-sm text-white/90 mb-2">
                    <span className="font-medium">
                      {language === 'nl' ? 'Examen Code:' : 'Exam Code:'}
                    </span> <span className="font-mono font-bold">{training.certification.examCode}</span>
                  </p>
                )}
                <p className="text-xs text-white/80 font-medium leading-relaxed">
                  {language === 'nl' 
                    ? 'Deze training bereidt je voor op de officiële Microsoft certificering.'
                    : 'This training prepares you for the official Microsoft certification.'
                  }
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white">
                <Certificate size={16} />
                <span className="font-medium">
                  {training.certification.provider || 'Microsoft'} {language === 'nl' ? 'Officiële Certificering' : 'Official Certification'}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Quick Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent rounded-full"></div>
          <CardHeader className="p-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Target size={18} />
              </div>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {language === 'nl' ? 'Snel Overzicht' : 'Quick Facts'}
              </span>
            </h3>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-foreground">
                {language === 'nl' ? 'Niveau:' : 'Level:'}
              </span>
              <Badge className={`bg-red-900/30 text-red-300' font-medium`}>
                {training.level}
              </Badge>
            </div>
            <Separator />
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-foreground">
                {language === 'nl' ? 'Categorie:' : 'Category:'}
              </span>
              <span className="text-sm text-muted-foreground font-medium">{training.category}</span>
            </div>
            <Separator />
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-foreground">
                {language === 'nl' ? 'Modules:' : 'Modules:'}
              </span>
              <span className="text-sm text-muted-foreground font-medium">{training.modules?.length || 0}</span>
            </div>
            <Separator />
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-foreground">
                {language === 'nl' ? 'Max Deelnemers:' : 'Max Participants:'}
              </span>
              <span className="text-sm text-muted-foreground font-medium">{training.maxParticipants || 12}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Course Modules Preview */}
      {training.modules?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-accent/5 to-transparent rounded-full"></div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Certificate size={18} />
                </div>
                <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                  {language === 'nl' ? 'Cursus Modules' : 'Course Modules'}
                </span>
              </h3>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              {training.modules.slice(0, 4).map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                  className="border-l-4 border-l-accent pl-4 py-3 bg-gradient-to-r from-accent/5 to-transparent rounded-r-lg hover:from-accent/10 transition-all duration-300"
                >
                  <h4 className="font-semibold text-sm mb-2 text-foreground">{module.title}</h4>
                  <div className="text-xs text-muted-foreground font-medium">
                    {module.topics.length} {language === 'nl' ? 'onderwerpen' : 'topics'}
                  </div>
                </motion.div>
              ))}
              {training.modules.length > 4 && (
                <div className="text-xs text-muted-foreground text-center pt-2 font-medium">
                  +{training.modules.length - 4} {language === 'nl' ? 'meer modules' : 'more modules'}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Tags */}
      {training.tags?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full"></div>
            <CardHeader className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Tag size={18} />
                </div>
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  {language === 'nl' ? 'Tags' : 'Tags'}
                </span>
              </h3>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                {training.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
