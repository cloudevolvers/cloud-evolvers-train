import React from 'react';
import { CheckCircle, Bot, Zap, Target, BookOpen, Award, Users, Sparkles } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-copilot-mastery',
  slug: 'microsoft-365-copilot-mastery',
  title: 'Microsoft 365 Copilot Mastery',
  description: 'Beheers Microsoft 365 Copilot voor productiviteitsverbetering',
  content: 'Uitgebreide training over Microsoft 365 Copilot-implementatie, configuratie en optimalisatie voor organisaties.',
  category: 'Microsoft 365',
  subcategory: 'AI & Productivity',
  difficulty: 'Intermediate' as const,
  duration: { days: 2, format: 'dagen' },
  prerequisites: ['Microsoft 365-kennis', 'IT-administratorervaring'],
  learningObjectives: [
    'Copilot implementeren en configureren',
    'AI-productiviteit optimaliseren',
    'Governance en beveiliging beheren'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 995, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Copilot', 'AI', 'Productivity'],
  featured: true,
  certification: { available: false },
  maxParticipants: 20
};

export default function Microsoft365CopilotMasteryContent() {
  return (
    <div className="space-y-6">
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Cursus Overzicht
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Ontdek de kracht van Microsoft 365 Copilot. Deze training leert je hoe je AI-gestuurde productiviteit 
          implementeert, optimaliseert en beheert in je organisatie.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Copilot-vaardigheden
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Copilot Implementatie
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Licentievereisten en -planning</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Rollout-strategieën en change management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Gebruikerstraining en adoptie</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4 text-green-600" />
              AI-productiviteit
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Copilot in Word, Excel, PowerPoint</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Teams en Outlook-integratie</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Power Platform Copilot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Trainingsvoordelen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">AI-productiviteit</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Leer hoe AI de dagelijkse productiviteit kan verbeteren.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Governance</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Best practices voor veilig en effectief Copilot-beheer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}