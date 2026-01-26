import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Brain, Lightbulb, Eye } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-ai-developer',
  slug: 'azure-ai-developer',
  title: 'Azure AI Developer Bootcamp',
  description: 'Build AI-powered applications using Azure AI services and machine learning',
  category: 'AI & Machine Learning',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1695, currency: 'EUR' },
  featured: true,
  icon: 'Brain',
  
  learningObjectives: [
    'Implement Azure Cognitive Services',
    'Build machine learning solutions with Azure ML',
    'Develop conversational AI with Azure Bot Framework',
    'Implement computer vision and natural language processing',
    'Deploy and monitor AI applications',
    'Integrate AI services into applications'
  ],
  
  prerequisites: [
    'Programming experience (Python, C#, or JavaScript)',
    'Understanding of Azure fundamentals',
    'Basic knowledge of machine learning concepts',
    'Experience with REST APIs'
  ],
  
  targetAudience: [
    'Software developers',
    'AI/ML engineers',
    'Data scientists transitioning to Azure',
    'Solution architects implementing AI'
  ],
  
  certification: { available: false, name: 'Bootcamp Certificate' },
  tags: ['Azure', 'AI', 'Machine Learning', 'Cognitive Services'],
  maxParticipants: 10,
  
  instructor: {
    name: 'AI Solutions Expert',
    title: 'Microsoft Certified Trainer',
    experience: '8+ years',
    certifications: ['Azure AI Engineer', 'Data Scientist Associate']
  }
};

export default function AzureAIDeveloperContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-purple-950/20 via-pink-950/20 to-blue-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg">
              <Brain className="h-8 w-8" />
            </div>
            <div>
              <div className="text-purple-400 font-medium">Advanced Bootcamp</div>
              <div className="text-sm text-muted-foreground font-medium">Featured Training</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure AI Developer
            <span className="text-purple-400 block">Bootcamp</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Intensive bootcamp covering Azure AI services, machine learning, cognitive services, and AI application development. Build intelligent applications using cutting-edge Azure AI technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">Intensive Bootcamp</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Max 10</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Certificate</div>
                <div className="text-sm text-muted-foreground font-medium">Completion</div>
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
              <h3 className="text-white font-semibold">Azure Cognitive Services</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Computer Vision and Custom Vision</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Speech Services and Language Understanding</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Text Analytics and Translator</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Face API and Form Recognizer</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-950/20 p-2 rounded-lg">
                <Lightbulb className="text-pink-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Azure Machine Learning</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Machine Learning Studio and Designer</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Automated ML and Custom Models</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Model Training and Deployment</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> MLOps and Model Management</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-950/20 p-2 rounded-lg">
                <Eye className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Conversational AI</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Bot Framework and Bot Service</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Language Understanding (LUIS)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> QnA Maker and Knowledge Base</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Multi-channel Bot Deployment</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-950/20 p-2 rounded-lg">
                <Brain className="text-indigo-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">AI Application Development</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Integrating AI services with applications</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> SDK implementation and REST APIs</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Performance optimization and scaling</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Monitoring and troubleshooting AI solutions</li>
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
              <div key={index} className="bg-amber-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-amber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
