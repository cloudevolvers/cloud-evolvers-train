import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-fundamentals',
  slug: 'azure-fundamentals',
  title: 'Azure Fundamentals (AZ-900)',
  description: 'Bouw fundamentele kennis van Azure cloud services en kernconcepten',
  content: 'Uitgebreide fundamentals training over Azure kernservices, beveiliging, privacy, compliance en prijsstelling.',
  category: 'Azure',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'dagen' },
  prerequisites: ['Basiskennis van computerconcepten'],
  learningObjectives: [
    'Cloud computing concepten beschrijven',
    'Azure kernservices en oplossingen beschrijven',
    'Azure beveiliging, privacy, compliance en vertrouwen beschrijven'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Fundamentals', 'Cloud', 'AZ-900'],
  featured: true,
  certification: { available: true, name: 'AZ-900' },
  maxParticipants: 15
};

export default function AzureFundamentalsContent() {
  return (
    <div className="space-y-6">
      {/* Course Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Cursus Overzicht
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Deze uitgebreide Azure Fundamentals training biedt een solide basis voor het begrijpen van Microsoft Azure cloud services. 
          Ontworpen voor beginners, behandelt deze cursus alle essentiële concepten die nodig zijn om met vertrouwen te beginnen met Azure.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Wat Je Leert
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Tijdens deze tweedaagse training krijg je praktische kennis van:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Kernservices:</span>
              <span className="text-slate-700 dark:text-slate-300"> Compute, netwerken, opslag en databases</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Oplossingen:</span>
              <span className="text-slate-700 dark:text-slate-300"> IoT, AI, machine learning en serverless computing</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Beheertools:</span>
              <span className="text-slate-700 dark:text-slate-300"> Portal, CLI, PowerShell en ARM templates</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Beveiliging & Compliance:</span>
              <span className="text-slate-700 dark:text-slate-300"> Identiteitsbeheer, beveiligingscentrum en governance</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Prijzen & Ondersteuning:</span>
              <span className="text-slate-700 dark:text-slate-300"> Kostenbeheer, service level agreements en ondersteuningsopties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Training Format</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Klaslokaal Training</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Interactieve sessies met hands-on labs en real-world scenario's in onze moderne trainingsruimte.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Flexibel Schema</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              2-daagse intensieve training met pauzes voor vragen en praktische oefeningen.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>• Basiskennis van computerconcepten en terminologie</li>
            <li>• Ervaring met Windows of Linux besturingssystemen</li>
            <li>• Begrip van netwerkfundamentals is helpend maar niet vereist</li>
            <li>• Geen eerdere cloud ervaring vereist</li>
          </ul>
        </div>
      </section>

      {/* Certification */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Certificering
        </h3>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            Deze training bereidt je voor op het <strong>Microsoft Azure Fundamentals (AZ-900)</strong> certificatie examen.
          </p>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>• Officiële Microsoft curriculum</li>
            <li>• Praktijkoefeningen en mock examens</li>
            <li>• Examen voucher inbegrepen</li>
            <li>• 30 dagen ondersteuning na de training</li>
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Wat is Inbegrepen</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Officiële Microsoft trainingsmateriaal</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Hands-on lab toegang gedurende 6 maanden</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">AZ-900 examen voucher</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Digitaal certificaat van deelname</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Lunch en refreshments</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">30 dagen post-training ondersteuning</span>
          </div>
        </div>
      </section>

      {/* Course Outline */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Cursus Programma</h3>
        
        <div className="space-y-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 1: Cloud Concepten & Azure Kernservices
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Cloud computing concepten en voordelen</li>
              <li>• Azure architectuur en services overzicht</li>
              <li>• Azure compute services (VMs, App Service, Functions)</li>
              <li>• Azure netwerk services (VNet, Load Balancer, VPN Gateway)</li>
              <li>• Azure storage oplossingen (Blob, File, Queue, Table)</li>
              <li>• Hands-on labs: Azure Portal verkenning</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 2: Azure Management, Beveiliging & Compliance
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure databases (SQL Database, Cosmos DB)</li>
              <li>• Azure AI en Machine Learning services</li>
              <li>• Azure beveiligingstools en -features</li>
              <li>• Identity en access management (Azure AD)</li>
              <li>• Azure governance en compliance</li>
              <li>• Azure kostenbeheer en Service Level Agreements</li>
              <li>• Hands-on labs: Azure resources deployment</li>
              <li>• Examen voorbereiding en mock test</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Voor Wie Is Deze Training</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Ideaal voor:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• IT professionals die willen migreren naar de cloud</li>
              <li>• Developers die Azure services willen gebruiken</li>
              <li>• Business stakeholders die cloud strategieën evalueren</li>
              <li>• Students die een carrière in cloud computing ambiëren</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Rollen:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• System Administrators</li>
              <li>• Solution Architects</li>
              <li>• IT Managers</li>
              <li>• Cloud Engineers</li>
              <li>• Technical Sales Professionals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vervolgstappen</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Na het behalen van je AZ-900 certificering, overweeg deze gespecialiseerde trainings:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>• AZ-104: Azure Administrator Associate</div>
            <div>• AZ-204: Azure Developer Associate</div>
            <div>• AZ-305: Azure Solutions Architect Expert</div>
            <div>• AZ-500: Azure Security Engineer Associate</div>
          </div>
        </div>
      </section>
    </div>
  );
}