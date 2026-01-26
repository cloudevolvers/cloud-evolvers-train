import React from 'react';
import { CheckCircle, Smartphone, Monitor, Target, BookOpen, Award, Users } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-virtual-desktop',
  slug: 'azure-virtual-desktop',
  title: 'Azure Virtual Desktop Specialist',
  description: 'Implementeer en beheer Azure Virtual Desktop-omgevingen',
  content: 'Specialized training voor het implementeren, configureren en beheren van Azure Virtual Desktop-infrastructuur.',
  category: 'Azure',
  subcategory: 'Infrastructure',
  difficulty: 'Intermediate' as const,
  duration: { days: 3, format: 'dagen' },
  prerequisites: ['Windows Server-kennis', 'Azure-basiskennis'],
  learningObjectives: [
    'Azure Virtual Desktop implementeren',
    'Gebruikerssessies en -profielen beheren',
    'Prestaties monitoren en troubleshooten'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1295, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Virtual Desktop', 'Infrastructure'],
  featured: false,
  certification: { available: false },
  maxParticipants: 15
};

export default function AzureVirtualDesktopContent() {
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
          Leer Azure Virtual Desktop implementeren en beheren. Deze training behandelt alle aspecten van 
          moderne desktop virtualisatie in de cloud, van planning tot dagelijks beheer.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Kernvaardigheden
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-blue-600" />
              AVD Implementatie
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Host pools en workspace-configuratie</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Session hosts en image management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Gebruikersprofielen en FSLogix</span>
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
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Praktische Labs</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Hands-on ervaring met Azure Virtual Desktop-implementatie.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Real-world Scenario's</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Praktische uitdagingen uit enterprise-omgevingen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}