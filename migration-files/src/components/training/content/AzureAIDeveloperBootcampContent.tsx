import React from 'react';
import { CheckCircle, Brain, Zap, Code, Target, BookOpen, Award, Users, Bot } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-ai-developer-bootcamp',
  slug: 'azure-ai-developer-bootcamp',
  title: 'Azure AI Engineer Associate (AI-102)',
  description: 'Build intelligent AI solutions with Azure Cognitive Services and Machine Learning',
  content: 'Comprehensive AI development training covering cognitive services, machine learning, and intelligent applications.',
  category: 'Azure',
  subcategory: 'Artificial Intelligence',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['Programming experience', 'Basic ML understanding'],
  learningObjectives: [
    'Plan and manage Azure Cognitive Services',
    'Implement computer vision solutions',
    'Implement natural language processing solutions'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'AI', 'AI-102', 'Machine Learning'],
  featured: true,
  certification: { available: true, name: 'AI-102' },
  maxParticipants: 8
};

export default function AzureAIDeveloperBootcampContent() {
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
          Accelerate your AI development skills with this intensive bootcamp focused on building intelligent applications using Azure AI services. 
          Learn to integrate machine learning, cognitive services, and AI frameworks into modern applications.
        </p>
      </section>

      {/* AI Development Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          AI Development Skills
        </h3>
        
        <div className="space-y-4">
          {/* Azure Cognitive Services */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-600" />
              Azure Cognitive Services
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">Computer Vision API:</strong> Image analysis, OCR, and object detection</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">Language Understanding (LUIS):</strong> Natural language processing and intent recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">Speech Services:</strong> Speech-to-text, text-to-speech, and translation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">Text Analytics:</strong> Sentiment analysis, key phrase extraction, and entity recognition</span>
              </div>
            </div>
          </div>

          {/* Azure Machine Learning */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4 text-blue-600" />
              Azure Machine Learning
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">ML Studio:</strong> Model development, training, and deployment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">AutoML:</strong> Automated machine learning for rapid prototyping</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">MLOps:</strong> Model versioning, monitoring, and lifecycle management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300"><strong className="font-medium text-slate-900 dark:text-slate-100">Real-time Inference:</strong> Deploying models as web services and containers</span>
              </div>
            </div>
          </div>

          {/* Bot Framework & Conversational AI */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-green-600" />
              Bot Framework & Conversational AI
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Building intelligent chatbots with Bot Framework</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Integrating with Teams, Slack, and other channels</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">QnA Maker for knowledge base automation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Virtual Assistant patterns and best practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on AI Projects */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Code className="h-4 w-4 text-orange-600" />
          Hands-on AI Projects
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Build intelligent applications with real-world AI scenarios:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Develop a document analysis system using Computer Vision</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Create a customer service chatbot with natural language understanding</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Build a recommendation engine using Azure ML</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Implement real-time sentiment analysis for social media</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Deploy AI models to production with monitoring and scaling</span>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-600" />
          Who Should Attend
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Software developers interested in AI and machine learning</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Data scientists wanting to deploy models in Azure</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Solution architects designing AI-powered applications</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Product managers exploring AI capabilities</span>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Prerequisites</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Programming experience with Python or C#</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Basic understanding of REST APIs and web services</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Familiarity with Azure fundamentals (recommended)</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Basic knowledge of machine learning concepts (helpful but not required)</span>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-amber-600" />
          Learning Outcomes
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          By the end of this bootcamp, you'll be able to:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Design and implement AI-powered applications using Azure services</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Build and deploy machine learning models in production</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Create intelligent chatbots and conversational interfaces</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Integrate cognitive services into existing applications</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Understand AI ethics and responsible AI development practices</span>
          </div>
        </div>
      </section>
    </div>
  );
}
