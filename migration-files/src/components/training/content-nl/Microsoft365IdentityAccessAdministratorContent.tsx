import React from 'react';
import { CheckCircle, UserCheck, Shield, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-identity-access-administrator',
  slug: 'microsoft-365-identity-access-administrator',
  title: 'Microsoft 365 Identity and Access Administrator (SC-300)',
  description: 'Beheers identiteit en toegang in Microsoft 365',
  content: 'Gespecialiseerde training voor het implementeren en beheren van identity en access management-oplossingen.',
  category: 'Microsoft 365',
  subcategory: 'Identity',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Azure AD-kennis', 'Microsoft 365-ervaring'],
  learningObjectives: [
    'Azure AD implementeren en beheren',
    'Toegangscontrole en governance configureren',
    'Identiteitsbeveiliging optimaliseren'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Identity', 'SC-300'],
  featured: false,
  certification: { available: true, name: 'SC-300' },
  maxParticipants: 12
};

export default function Microsoft365IdentityAccessAdministratorContent() {
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
          Beheers identity en access management in Microsoft 365. Deze geavanceerde training behandelt 
          Azure AD, governance en beveiligingsbest practices.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Identity Management Vaardigheden
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-blue-600" />
              Azure AD Beheer
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Gebruikers- en groepsbeheer</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Hybrid identity configuratie</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}