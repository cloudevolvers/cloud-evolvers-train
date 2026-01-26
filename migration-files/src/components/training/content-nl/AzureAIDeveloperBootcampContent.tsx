import React from 'react';
import { CheckCircle, Brain, Cpu, Code2, Target, BookOpen, Award, Users, Lightbulb } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-ai-developer-bootcamp',
  slug: 'azure-ai-developer-bootcamp',
  title: 'Azure AI Developer Bootcamp',
  description: 'Intensieve bootcamp voor het ontwikkelen van AI-oplossingen met Azure',
  content: 'Praktische AI-ontwikkelingsbootcamp met focus op het bouwen van intelligente applicaties met Azure AI-services.',
  category: 'Azure',
  subcategory: 'Artificial Intelligence',
  difficulty: 'Intermediate' as const,
  duration: { days: 3, format: 'dagen' },
  prerequisites: ['Programmeerervaring', 'Basis AI-kennis', 'Azure-fundamenten'],
  learningObjectives: [
    'AI-applicaties ontwikkelen met Azure Cognitive Services',
    'Machine Learning-modellen implementeren',
    'Chatbots en conversationele AI bouwen'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1395, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'AI', 'Development', 'Bootcamp'],
  featured: false,
  certification: { available: false },
  maxParticipants: 15
};

export default function AzureAIDeveloperBootcampContent() {
  return (
    <div className="space-y-6">
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Bootcamp Overzicht
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Duik diep in Azure AI-ontwikkeling met deze intensieve 3-dagen bootcamp. Leer praktisch hoe je 
          intelligente applicaties bouwt met Azure Cognitive Services, Machine Learning en Bot Framework.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          AI-ontwikkelingsvaardigheden
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Brain className="h-4 w-4 text-blue-600" />
              Cognitive Services
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Computer Vision en Custom Vision</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Text Analytics en Language Understanding</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Speech Services en Translator</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-green-600" />
              Machine Learning
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure ML Studio en Automated ML</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Model deployment en monitoring</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-purple-600" />
              Bot Development
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Bot Framework en Bot Service</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">QnA Maker en conversationele flows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Bootcamp Voordelen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Intensieve Praktijk</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              3 dagen vol hands-on labs en praktische AI-projecten.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Real-world Projecten</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Bouw daadwerkelijk functionerende AI-applicaties tijdens de training.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Programmeerervaring in Python of C#</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basis Azure-kennis</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Interesse in AI en machine learning</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}