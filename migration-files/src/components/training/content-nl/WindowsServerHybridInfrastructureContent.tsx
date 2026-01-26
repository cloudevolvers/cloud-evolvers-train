import React from 'react';
import { CheckCircle, Building, Network, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'windows-server-hybrid-infrastructure',
  slug: 'windows-server-hybrid-infrastructure',
  title: 'Windows Server Hybrid Infrastructure (AZ-801)',
  description: 'Implementeer Windows Server hybride infrastructuur',
  content: 'Geavanceerde infrastructuurtraining voor het implementeren van hybride Windows Server-oplossingen.',
  category: 'Windows Server',
  subcategory: 'Infrastructure',
  difficulty: 'Advanced' as const,
  duration: { days: 5, format: 'dagen' },
  prerequisites: ['AZ-800 certificering', 'Windows Server-expertise'],
  learningObjectives: [
    'Hybride infrastructuur ontwerpen',
    'High availability implementeren',
    'Disaster recovery plannen'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1995, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Windows Server', 'Infrastructure', 'AZ-801'],
  featured: false,
  certification: { available: true, name: 'AZ-801' },
  maxParticipants: 12
};

export default function WindowsServerHybridInfrastructureContent() {
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
          Implementeer geavanceerde Windows Server hybride infrastructuur. Deze training behandelt 
          complexe infrastructuurscenario's en enterprise-architectuurpatterns.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Infrastructuurvaardigheden
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Failover clustering en load balancing</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Disaster recovery en backup-strategieën</span>
          </div>
        </div>
      </section>
    </div>
  );
}