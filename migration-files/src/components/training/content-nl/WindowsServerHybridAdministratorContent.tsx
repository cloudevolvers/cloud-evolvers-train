import React from 'react';
import { CheckCircle, Server, Cloud, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'windows-server-hybrid-administrator',
  slug: 'windows-server-hybrid-administrator',
  title: 'Windows Server Hybrid Administrator Associate (AZ-800)',
  description: 'Beheer Windows Server in hybride omgevingen',
  content: 'Geavanceerde training voor het beheren van Windows Server-infrastructuur in hybride cloud-omgevingen.',
  category: 'Windows Server',
  subcategory: 'Hybrid Infrastructure',
  difficulty: 'Advanced' as const,
  duration: { days: 5, format: 'dagen' },
  prerequisites: ['Windows Server-ervaring', 'Azure-basiskennis'],
  learningObjectives: [
    'Hybride infrastructuur implementeren',
    'Windows Server-services beheren',
    'Azure Arc voor servers gebruiken'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1995, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Windows Server', 'Hybrid', 'AZ-800'],
  featured: false,
  certification: { available: true, name: 'AZ-800' },
  maxParticipants: 12
};

export default function WindowsServerHybridAdministratorContent() {
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
          Beheers Windows Server in hybride omgevingen. Deze geavanceerde training behandelt het beheer 
          van on-premises en cloud-geïntegreerde Windows Server-infrastructuur.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Hybride Beheervaardigheden
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Server className="h-4 w-4 text-blue-600" />
              Windows Server Beheer
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Active Directory Domain Services</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">DNS, DHCP en netwerkservices</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-green-600" />
              Hybride Integratie
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Arc-enabled servers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure AD Connect en hybrid identity</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}