import React from 'react';
import { CheckCircle, Headphones, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-support-engineer',
  slug: 'azure-support-engineer',
  title: 'Azure Support Engineer Specialist',
  description: 'Troubleshoot en los Azure-problemen op als support engineer',
  content: 'Gespecialiseerde training voor Azure support engineers om complexe technische problemen op te lossen.',
  category: 'Azure',
  subcategory: 'Support',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Azure-ervaring', 'Troubleshooting-vaardigheden', 'Technische ondersteuning-ervaring'],
  learningObjectives: [
    'Azure-problemen diagnosticeren en oplossen',
    'Klanten technisch ondersteunen',
    'Escalatieprocedures toepassen'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Support', 'Troubleshooting'],
  featured: false,
  certification: { available: false },
  maxParticipants: 15
};

export default function AzureSupportEngineerContent() {
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
          Word een expert Azure Support Engineer. Deze training behandelt geavanceerde troubleshooting-technieken, 
          klantcommunicatie en probleemoplossingsstrategieën voor Azure-omgevingen.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Support Vaardigheden
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Geavanceerde troubleshooting-methodologieën</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Azure diagnostic tools en monitoring</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Klantcommunicatie en casebeheer</span>
          </div>
        </div>
      </section>
    </div>
  );
}