import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Code, Brain, Robot, CloudArrowUp } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-ai-developer-bootcamp',
  slug: 'azure-ai-developer-bootcamp',
  title: 'Azure AI Developer Bootcamp',
  description: 'Intensive bootcamp for building intelligent applications with Azure AI services',
  category: 'Azure AI',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1495, currency: 'EUR' },
  featured: true,
  icon: 'Brain',
  
  learningObjectives: [
    'Design and implement intelligent applications',
    'Integrate multiple Azure AI services',
    'Build conversational AI solutions',
    'Implement computer vision applications',
    'Create natural language processing systems',
    'Deploy AI models at scale'
  ],
  
  prerequisites: [
    'Azure fundamentals knowledge required',
    'Programming experience (Python/C#/.NET)',
    'REST API integration experience',
    'Basic machine learning concepts'
  ],
  
  targetAudience: [
    'Software developers and architects',
    'AI/ML engineers and practitioners',
    'Solution architects with AI focus',
    'Technical leads building AI solutions'
  ],
  
  certification: { available: false },
  tags: ['Azure', 'AI', 'Development', 'Machine Learning', 'Bootcamp'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Azure AI Solutions Expert',
    title: 'Microsoft Certified Azure AI Engineer',
    experience: '8+ years',
    certifications: ['AI-102', 'AZ-900', 'AZ-204', 'AI-900']
  }
};

export default function AzureAIDeveloperBootcampContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="from-green-950/20 via-emerald-950/20 to-teal-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full -translate-y-16 -translate-x-16" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full -translate-y-32 translate-x-32" />
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white shadow-lg">
                <Brain className="h-8 w-8" />
              </div>
              <div>
                <div className="text-green-400 font-medium">Advanced Level</div>
                <h3 className="text-white font-bold mb-2">
                  Azure AI Developer
                </h3>
                <h4 className="text-xl lg:text-2xl font-semibold mb-4">
                  <span className="text-green-400 block">Bootcamp</span>
                </h4>
                <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">
                  Master the art of building intelligent applications with Azure AI services in this intensive 3-day bootcamp.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <Clock className="text-green-400 h-5 w-5" />
                <span className="font-medium">3 Days</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <Users className="text-green-400 h-5 w-5" />
                <span className="font-medium">Max 12 participants</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <Certificate className="text-green-400 h-5 w-5" />
                <span className="font-medium">Certificate of Completion</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Learning Objectives */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white font-bold">Learning Objectives</h2>
        <div className="grid gap-4">
          {trainingMetadata.learningObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{objective}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Modules */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-white font-bold">Course Modules</h2>
        <div className="grid gap-6">
          <div className="from-green-950/20 to-emerald-950/20 border-green-800 p-6 bg-gradient-to-br rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-950/20 p-2 rounded-lg">
                <Brain className="text-green-400 h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Day 1: Azure AI Foundation</h3>
                <div className="grid gap-4 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-500" />
                    <span>Azure Cognitive Services overview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-500" />
                    <span>Computer Vision API integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-500" />
                    <span>Text Analytics and Language Understanding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-500" />
                    <span>Speech Services implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="from-emerald-950/20 to-teal-950/20 border-emerald-800 p-6 bg-gradient-to-br rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-emerald-900/30 p-2 rounded-lg">
                <Robot className="text-emerald-400 h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Day 2: Conversational AI</h3>
                <div className="grid gap-4 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-500" />
                    <span>Bot Framework and Bot Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-500" />
                    <span>Language Understanding (LUIS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-500" />
                    <span>QnA Maker implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-500" />
                    <span>Multi-channel deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="from-teal-950/20 to-green-950/20 border-teal-800 p-6 bg-gradient-to-br rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-teal-900/30 p-2 rounded-lg">
                <CloudArrowUp className="text-teal-400 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Day 3: Advanced Integration & Deployment</h3>
                <div className="grid gap-4 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                    <span>Custom model training and deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                    <span>Azure Machine Learning integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                    <span>Performance optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                    <span>Production deployment strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Target Audience */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-white font-bold">Target Audience</h2>
        <div className="grid gap-4">
          {trainingMetadata.targetAudience.map((audience, index) => (
            <div key={index} className="bg-green-900/20 flex items-start gap-3 p-3 rounded-lg">
              <Users className="text-green-400 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{audience}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
