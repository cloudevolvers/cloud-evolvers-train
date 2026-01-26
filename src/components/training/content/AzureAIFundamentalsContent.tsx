import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Brain, Robot, Eye, Waveform } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-ai-fundamentals',
  slug: 'azure-ai-fundamentals',
  title: 'Azure AI Fundamentals (AI-900)',
  description: 'Introduction to artificial intelligence concepts and Azure AI services',
  category: 'AI & Machine Learning',
  level: 'Beginner',
  duration: { days: 2, hours: 16 },
  price: { amount: 895, currency: 'EUR' },
  featured: true,
  icon: 'Brain',
  
  learningObjectives: [
    'Understand fundamental AI concepts and terminology',
    'Explore Azure AI services and capabilities',
    'Learn computer vision and image analysis',
    'Discover natural language processing features',
    'Implement conversational AI solutions',
    'Apply responsible AI principles and practices'
  ],
  
  prerequisites: [
    'Basic understanding of cloud computing',
    'General familiarity with Azure services',
    'No prior AI or machine learning experience required',
    'High school level mathematics'
  ],
  
  targetAudience: [
    'Business stakeholders',
    'Solution architects',
    'Developers new to AI',
    'AI-900 certification candidates'
  ],
  
  certification: { 
    available: true,
    examCode: 'AI-900',
    examName: 'Microsoft Azure AI Fundamentals'
  },
  tags: ['AI-900', 'AI', 'Machine Learning', 'Cognitive Services', 'Azure'],
  maxParticipants: 15,
  
  instructor: {
    name: 'AI Solutions Expert',
    title: 'Microsoft Certified Trainer',
    experience: '7+ years',
    certifications: ['AI-900', 'AI-102', 'DP-100', 'AI-050']
  }
};

export default function AzureAIFundamentalsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-purple-950/20 via-pink-950/20 to-purple-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg">
              <Brain className="h-8 w-8" />
            </div>
            <div>
              <div className="text-purple-400 font-medium">Beginner Level</div>
              <div className="text-sm text-muted-foreground font-medium">AI-900 Fundamentals</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure AI
            <span className="text-purple-400 block">Fundamentals</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Introduction to artificial intelligence concepts and Azure AI services. Perfect for beginners wanting to understand AI capabilities and prepare for the AI-900 certification.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">2 Days</div>
                <div className="text-sm text-muted-foreground font-medium">Foundation Course</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Max 15</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">AI-900</div>
                <div className="text-sm text-muted-foreground font-medium">Certification</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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
        <div className="space-y-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-950/20 p-2 rounded-lg">
                <Brain className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">AI Concepts & Principles</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Introduction to artificial intelligence</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Machine learning fundamentals</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Responsible AI principles</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> AI ethics and fairness</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-950/20 p-2 rounded-lg">
                <Eye className="text-pink-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Computer Vision</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Image classification and object detection</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Optical Character Recognition (OCR)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Face detection and recognition</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Custom Vision service</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-950/20 p-2 rounded-lg">
                <Waveform className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Natural Language Processing</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Text analytics and sentiment analysis</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Language understanding (LUIS)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Text translation services</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Speech recognition and synthesis</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-950/20 p-2 rounded-lg">
                <Robot className="text-indigo-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Conversational AI</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Bot Service fundamentals</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> QnA Maker service</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Chatbot design principles</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Multi-channel bot deployment</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Prerequisites & Target Audience */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.section 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-white font-bold">Prerequisites</h2>
          <div className="grid gap-4">
            {trainingMetadata.prerequisites.map((prereq, index) => (
              <div key={index} className="bg-pink-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-pink-400 h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{prereq}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-white font-bold">Target Audience</h2>
          <div className="grid gap-4">
            {trainingMetadata.targetAudience.map((audience, index) => (
              <div key={index} className="bg-purple-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-purple-400 h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
