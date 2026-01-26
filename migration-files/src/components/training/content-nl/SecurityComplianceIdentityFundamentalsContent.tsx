import React from 'react';
import { CheckCircle, Shield, Lock, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'security-compliance-identity-fundamentals',
  slug: 'security-compliance-identity-fundamentals',
  title: 'Security, Compliance & Identity Fundamentals (SC-900)',
  description: 'Fundamenten van beveiliging, compliance en identiteit in Microsoft-omgevingen',
  content: 'Basistraining over beveiligingsconcepten, compliance-vereisten en identity management.',
  category: 'Security',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 1, format: 'dag' },
  prerequisites: ['Basiskennis IT-concepten'],
  learningObjectives: [
    'Beveiligingsconcepten begrijpen',
    'Compliance-principes leren',
    'Identity management-fundamenten'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 495, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Security', 'Compliance', 'SC-900', 'Fundamentals'],
  featured: false,
  certification: { available: true, name: 'SC-900' },
  maxParticipants: 20
};

export default function SecurityComplianceIdentityFundamentalsContent() {
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
          Leer de fundamenten van beveiliging, compliance en identiteit. Deze training biedt een stevige basis 
          voor het begrijpen van moderne beveiligingsconcepten en Microsoft-beveiligingsoplossingen.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Beveiligingsfundamenten
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Beveiligingsconcepten en -methodologieën</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Compliance en governance-principes</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Identity en access management-basis</span>
          </div>
        </div>
      </section>
    </div>
  );
}