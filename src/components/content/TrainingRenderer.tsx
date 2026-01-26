// Training Content Renderer Component
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Users,
  Certificate,
  BookOpen,
  CheckCircle,
  Calendar,
  CurrencyEur,
  Star,
  CaretRight,
  Download,
  Link,
  Play,
  FileText
} from '@phosphor-icons/react';
import type { TrainingJSON, ContentRendererProps } from '../../content/types';

export function TrainingRenderer({ data, language = 'en', preview = false }: ContentRendererProps<TrainingJSON>) {
  const formatPrice = (price: TrainingJSON['price']) => {
    const { amount, currency, discount } = price;
    const finalAmount = discount ? amount * (1 - discount.percentage / 100) : amount;

    return (
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-primary">
          €{finalAmount.toLocaleString()}
        </span>
        {discount && (
          <Badge variant="destructive" className="text-xs">
            -{discount.percentage}%
          </Badge>
        )}
        {discount && (
          <span className="text-sm text-muted-foreground line-through">
            €{amount.toLocaleString()}
          </span>
        )}
      </div>
    );
  };

  const formatDuration = (duration: TrainingJSON['duration']) => {
    if (duration.format === 'days') {
      return `${duration.days} day${duration.days > 1 ? 's' : ''}`;
    }
    return `${duration.hours} hour${duration.hours && duration.hours > 1 ? 's' : ''}`;
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="secondary">{data.category}</Badge>
          <Badge variant={
            data.difficulty === 'Beginner' ? 'default' :
            data.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
          }>
            {data.difficulty}
          </Badge>
        </div>

        <h1 className="text-4xl font-bold">{data.title}</h1>
        {data.subtitle && (
          <p className="text-xl text-muted-foreground">{data.subtitle}</p>
        )}

        <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {formatDuration(data.duration)}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Max {data.maxParticipants} participants
          </div>
          {data.certification?.available && (
            <div className="flex items-center gap-1">
              <Certificate className="w-4 h-4" />
              Certification included
            </div>
          )}
        </div>
      </motion.div>

      {/* Price and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-lg p-6 border"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            {formatPrice(data.price)}
            <p className="text-sm text-muted-foreground mt-1">
              per day, per person • {data.schedule.available ? 'Available for booking' : 'Coming soon'}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Syllabus
            </Button>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Book Training
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: data.overview }}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Learning Objectives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>What You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {data.learningObjectives.map((objective, index) => (
                <motion.div
                  key={objective.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{objective.title}</h4>
                    <p className="text-muted-foreground">{objective.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Modules */}
      {data.modules && data.modules.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.modules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{module.title}</h4>
                      {module.duration && (
                        <Badge variant="outline">{module.duration}</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{module.description}</p>
                    {module.content && (
                      <div
                        className="prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: module.content }}
                      />
                    )}
                    {module.topics && module.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {module.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Hands-on Labs */}
      {data.handsOnLabs && data.handsOnLabs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Hands-on Labs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {data.handsOnLabs.map((lab, index) => (
                  <motion.div
                    key={lab.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 border rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{lab.title}</h4>
                      <p className="text-muted-foreground text-sm">{lab.description}</p>
                      {lab.duration && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          {lab.duration}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Instructor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Your Instructor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {data.instructor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{data.instructor.name}</h4>
                <p className="text-primary mb-2">{data.instructor.title}</p>
                {data.instructor.bio && (
                  <p className="text-muted-foreground mb-3">{data.instructor.bio}</p>
                )}
                {data.instructor.expertise && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {data.instructor.expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
                {data.instructor.certifications && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Certificate className="w-4 h-4" />
                    {data.instructor.certifications.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Prerequisites */}
      {data.prerequisites && data.prerequisites.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Target Audience */}
      {data.targetAudience && data.targetAudience.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Who Should Attend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Certification */}
      {data.certification?.available && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Certificate className="w-5 h-5 text-primary" />
                Certification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-semibold">{data.certification.name}</h4>
                {data.certification.examCode && (
                  <p className="text-muted-foreground">
                    Exam Code: {data.certification.examCode}
                  </p>
                )}
                <p className="text-muted-foreground">
                  Provider: {data.certification.provider}
                </p>
                {data.certification.validity && (
                  <p className="text-muted-foreground">
                    Validity: {data.certification.validity}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Resources */}
      {data.resources && data.resources.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {data.resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 border rounded-lg"
                  >
                    <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                      {resource.type === 'video' && <Play className="w-4 h-4" />}
                      {resource.type === 'documentation' && <FileText className="w-4 h-4" />}
                      {resource.type === 'book' && <BookOpen className="w-4 h-4" />}
                      {resource.type === 'course' && <BookOpen className="w-4 h-4" />}
                      {resource.type === 'tool' && <Link className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{resource.title}</h5>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                    {resource.url && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <Link className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="text-center space-y-4"
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join this comprehensive training and take your skills to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Training
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-4 h-4 mr-2" />
                Download Syllabus
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
