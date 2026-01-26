import React from 'react';
import { CheckCircle, Brain, Zap, Eye, MessageSquare, Target, BookOpen, Award, Users, Bot } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-ai-fundamentals',
  slug: 'azure-ai-fundamentals',
  title: 'Azure AI Fundamentals (AI-900)',
  description: 'Discover artificial intelligence concepts and Azure AI services',
  content: 'Foundational AI training covering machine learning, computer vision, natural language processing, and conversational AI.',
  category: 'Azure',
  subcategory: 'Artificial Intelligence',
  difficulty: 'Beginner' as const,
  duration: { days: 1, format: 'day' },
  prerequisites: ['Basic computing knowledge'],
  learningObjectives: [
    'Describe artificial intelligence workloads',
    'Describe fundamental principles of machine learning',
    'Describe features of computer vision and NLP workloads'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 495, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'AI', 'Fundamentals', 'AI-900'],
  featured: false,
  certification: { available: true, name: 'AI-900' },
  maxParticipants: 20
};

export default function AzureAIFundamentalsContent() {
  return (
    <div className="space-y-6">
      {/* Course Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Course Overview
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Discover the world of artificial intelligence with Azure! This foundational course introduces AI concepts, 
          machine learning principles, and Azure AI services. Perfect for beginners looking to understand AI capabilities.
        </p>
      </section>

      {/* AI Fundamentals */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          AI Fundamentals You'll Master
        </h3>
        
        <div className="space-y-4">
          {/* AI Workloads */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-600" />
              AI Workloads & Concepts
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Machine Learning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Supervised, unsupervised, and reinforcement learning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Anomaly Detection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Identifying unusual patterns in data</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Predictive Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Forecasting and trend analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Computer Vision */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-green-600" />
              Computer Vision Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Image Classification:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Identifying objects and scenes in images</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Optical Character Recognition:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Extracting text from images</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Face Detection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Identifying faces and facial features</span>
                </div>
              </div>
            </div>
          </div>

          {/* Natural Language Processing */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              Natural Language Processing
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Text Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Sentiment analysis and key phrase extraction</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Language Understanding:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Intent recognition and entity extraction</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Translation:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-language text and speech translation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conversational AI */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4 text-purple-600" />
              Conversational AI
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Bot Framework:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Building conversational interfaces</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">QnA Maker:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Creating question and answer bots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Training Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Certification Preparation</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Complete preparation for the AI-900 Azure AI Fundamentals certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Hands-on Experience</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Practical labs with Azure Cognitive Services and AI tools.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Recognition</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Globally recognized Microsoft certification credential.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Foundation</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Build a solid foundation for AI and machine learning careers.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Prerequisites</h3>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basic understanding of computing concepts</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Interest in artificial intelligence and machine learning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">No prior AI experience required</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
