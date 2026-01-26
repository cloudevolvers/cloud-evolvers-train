import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Clock, 
  Users, 
  Certificate, 
  Target, 
  BookOpen, 
  CheckCircle, 
  Star,
  Calendar,
  MapPin,
  ArrowRight
} from '@phosphor-icons/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import type { Training } from '../types/training';
import { getTrainingPriceDisplay, isPromotionalPricingActive } from '@/lib/pricing';

interface TrainingDetailViewProps {
  training: Training;
  onClose: () => void;
  language?: 'en' | 'nl';
}

export default function TrainingDetailView({ 
  training, 
  onClose, 
  language = 'en' 
}: TrainingDetailViewProps) {
  const priceInfo = getTrainingPriceDisplay(training.slug, training.price?.amount);
  const isPromotionActive = isPromotionalPricingActive();
  const getDifficultyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'advanced': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'expert': return 'bg-green-200 text-green-900 border-green-300';
      default: return 'bg-green-50 text-green-700 border-green-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Azure Cloud': return 'bg-green-500';
      case 'Microsoft 365': return 'bg-emerald-500';
      case 'Power Platform': return 'bg-teal-500';
      case 'Security & Compliance': return 'bg-green-600';
      case 'Developer Tools': return 'bg-emerald-600';
      case 'Windows Server': return 'bg-teal-600';
      case 'AI & Machine Learning': return 'bg-green-700';
      default: return 'bg-green-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${getCategoryColor(training.category)} px-6 py-4 text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {training.code && (
                  <Badge className="bg-white/20 text-white border-white/30 font-mono font-bold">
                    {training.code}
                  </Badge>
                )}
                <Badge className={`${getDifficultyColor(training.level)} border`}>
                  {training.level}
                </Badge>
              </div>
              <h1 className="text-2xl font-bold mb-2">{training.title}</h1>
              <p className="text-white/90 leading-relaxed">{training.description}</p>
              
              <div className="flex items-center gap-6 mt-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-sm">
                    {training.duration?.days || 0} {language === 'nl' ? 'dagen' : 'days'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span className="text-sm">
                    {language === 'nl' ? 'Max' : 'Max'} {training.maxParticipants} {language === 'nl' ? 'deelnemers' : 'participants'}
                  </span>
                </div>
                {training.price && (
                  <div className="flex items-center gap-2">
                    {isPromotionActive && priceInfo.hasDiscount ? (
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-400">
                          {priceInfo.formattedFinalPrice}
                        </span>
                        <span className="text-xs text-white/70">/day/person</span>
                        <span className="text-sm line-through text-white/60">
                          {priceInfo.formattedOriginalPrice}
                        </span>
                        <Badge className="bg-red-500 text-white text-xs">
                          {priceInfo.formattedDiscount}
                        </Badge>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold">
                          €{training.price.amount.toLocaleString()}
                        </span>
                        <span className="text-xs text-white/70">/day/person</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2"
            >
              <X size={20} />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="p-6 space-y-8">
            
            {/* Overview */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                {language === 'nl' ? 'Cursus Overzicht' : 'Course Overview'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {training.overview}
              </p>
            </section>

            {/* Key Highlights */}
            <section>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star size={18} className="text-accent" />
                {language === 'nl' ? 'Hoogtepunten' : 'Key Highlights'}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {training.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10"
                  >
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" weight="fill" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Learning Objectives */}
            <section>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target size={18} className="text-accent" />
                {language === 'nl' ? 'Leerdoelen' : 'Learning Objectives'}
              </h3>
              <div className="space-y-2">
                {training.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'nl' ? 'Vereisten' : 'Prerequisites'}
              </h3>
              <div className="bg-amber-900/20 border-amber-800 rounded-lg p-4">
                <ul className="space-y-1">
                  {training.prerequisites.map((prereq, index) => (
                    <li key={index} className="text-amber-200">
                      • {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Course Modules */}
            <section>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'nl' ? 'Cursus Modules' : 'Course Modules'}
              </h3>
              <div className="space-y-4">
                {training.modules.map((module, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3">{module.title}</h4>
                      <div className="space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Target Audience */}
            <section>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'nl' ? 'Doelgroep' : 'Target Audience'}
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {training.targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={14} className="text-primary" />
                    <span className="text-sm">{audience}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certification */}
            {training.certification?.available && (
              <section>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Certificate size={18} className="text-amber-600" />
                  {language === 'nl' ? 'Certificering' : 'Certification'}
                </h3>
                <div className="from-amber-900/20 to-orange-900/20 border-amber-800 bg-gradient-to-r rounded-lg p-4">
                  <p className="mb-2">
                    {language === 'nl' ? 'Deze training bereidt je voor op de' : 'This training prepares you for the'} <strong>{training.certification.name} ({training.certification.examCode})</strong> {language === 'nl' ? 'certificering.' : 'certification.'}
                  </p>
                  <div className="text-amber-300 flex items-center gap-2">
                    <Certificate size={16} />
                    <span className="text-sm font-medium">{training.certification.provider} {language === 'nl' ? 'Officiële Certificering' : 'Official Certification'}</span>
                  </div>
                </div>
              </section>
            )}

            {/* Instructor */}
            <section>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'nl' ? 'Instructeur' : 'Instructor'}
              </h3>
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{training.instructor.name}</h4>
                  <p className="text-sm text-muted-foreground">{training.instructor.title}</p>
                  {training.instructor.specialties && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === 'nl' ? 'Specialiteiten:' : 'Specialties:'} {training.instructor.specialties.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-muted/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{language === 'nl' ? 'Beschikbaar' : 'Available'}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{training.deliveryMethods.join(', ')}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onClose}>
              {language === 'nl' ? 'Sluiten' : 'Close'}
            </Button>
            <Button className="flex items-center gap-2">
              <span>{language === 'nl' ? 'Meer Info' : 'More Info'}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
