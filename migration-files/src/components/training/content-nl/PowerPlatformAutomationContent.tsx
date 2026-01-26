import React from 'react';
import { CheckCircle, Workflow, Zap, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'power-platform-automation',
  slug: 'power-platform-automation',
  title: 'Power Platform Automation Specialist',
  description: 'Automatiseer bedrijfsprocessen met Power Platform',
  content: 'Gespecialiseerde training voor het bouwen van geavanceerde automatiseringsoplossingen met Power Automate en Power Apps.',
  category: 'Power Platform',
  subcategory: 'Automation',
  difficulty: 'Intermediate' as const,
  duration: { days: 3, format: 'dagen' },
  prerequisites: ['Power Platform-basiskennis', 'Bedrijfsprocesservaring'],
  learningObjectives: [
    'Complexe Power Automate-flows ontwerpen',
    'Power Apps-integratie met automatisering',
    'Governance en monitoring implementeren'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1395, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Power Platform', 'Automation', 'Power Automate'],
  featured: false,
  certification: { available: false },
  maxParticipants: 15
};

export default function PowerPlatformAutomationContent() {
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
          Beheers geavanceerde automatisering met Power Platform. Leer complexe bedrijfsprocessen automatiseren 
          en integreren met Power Automate, Power Apps en andere Microsoft services.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Automatiseringsvaardigheden
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Workflow className="h-4 w-4 text-blue-600" />
              Geavanceerde Flows
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Complexe trigger- en actiepatronen</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Error handling en retry-mechanismen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}