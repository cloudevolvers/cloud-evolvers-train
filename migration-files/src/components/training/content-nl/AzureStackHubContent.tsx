import React from 'react';
import { CheckCircle, Server, Cloud, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-stack-hub',
  slug: 'azure-stack-hub',
  title: 'Azure Stack Hub Operator',
  description: 'Beheer Azure Stack Hub hybride cloud-infrastructuur',
  content: 'Gespecialiseerde training voor het beheren van Azure Stack Hub-infrastructuur in hybride cloud-omgevingen.',
  category: 'Azure',
  subcategory: 'Hybrid Cloud',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Azure-ervaring', 'Datacenterkennis', 'Hybride cloud-concepten'],
  learningObjectives: [
    'Azure Stack Hub implementeren en configureren',
    'Hybride cloud-services beheren',
    'Monitoring en troubleshooting'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1895, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Stack Hub', 'Hybrid Cloud'],
  featured: false,
  certification: { available: false },
  maxParticipants: 10
};

export default function AzureStackHubContent() {
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
          Beheers Azure Stack Hub voor hybride cloud-implementaties. Leer hoe je Azure-services 
          on-premises implementeert en beheert met Azure Stack Hub.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Stack Hub Vaardigheden
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Azure Stack Hub-implementatie en -configuratie</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Hybride cloud-integratie en -beheer</span>
          </div>
        </div>
      </section>
    </div>
  );
}