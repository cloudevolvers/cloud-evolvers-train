import React from 'react';
import { CheckCircle, Shield, Key, Target, BookOpen, Award, Users } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-security-administrator',
  slug: 'microsoft-365-security-administrator',
  title: 'Microsoft 365 Security Administrator (MS-500)',
  description: 'Implementeer en beheer Microsoft 365-beveiliging',
  content: 'Uitgebreide beveiligingstraining voor het implementeren en beheren van Microsoft 365-beveiligingsoplossingen.',
  category: 'Microsoft 365',
  subcategory: 'Security',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Microsoft 365-ervaring', 'Beveiligingskennis'],
  learningObjectives: [
    'Microsoft 365-beveiliging implementeren',
    'Dreigingen detecteren en reageren',
    'Informatiebescherming beheren'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Security', 'MS-500'],
  featured: false,
  certification: { available: true, name: 'MS-500' },
  maxParticipants: 12
};

export default function Microsoft365SecurityAdministratorContent() {
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
          Beheers Microsoft 365-beveiliging met deze geavanceerde training. Leer hoe je organisaties beschermt 
          tegen moderne cyberdreigingen met Microsoft 365-beveiligingstools.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Beveiligingsvaardigheden
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Threat Protection
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Microsoft Defender for Office 365</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Advanced Threat Analytics</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Key className="h-4 w-4 text-green-600" />
              Identity & Access
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure AD Premium-functies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Conditionele toegang en MFA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}