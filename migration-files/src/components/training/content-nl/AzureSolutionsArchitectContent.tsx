import React from 'react';
import { CheckCircle, Cloud, Building2, Award, Target, BookOpen, Users, Settings, Shield } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-solutions-architect',
  slug: 'azure-solutions-architect',
  title: 'Azure Solutions Architect Expert (AZ-305)',
  description: 'Ontwerp enterprise-schaal Azure-architecturen en -oplossingen',
  content: 'Geavanceerde architectuurtraining over het ontwerpen van schaalbare, veilige en kosteneffectieve Azure-oplossingen.',
  category: 'Azure',
  subcategory: 'Architecture',
  difficulty: 'Advanced' as const,
  duration: { days: 5, format: 'dagen' },
  prerequisites: ['AZ-104 certificering', 'Architectuurervaring', 'Enterprise-infrastructuurkennis'],
  learningObjectives: [
    'Enterprise-schaal Azure-architecturen ontwerpen',
    'Beveiliging en compliance implementeren',
    'Kosten optimaliseren en governance toepassen'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 2195, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Architecture', 'AZ-305', 'Enterprise'],
  featured: true,
  certification: { available: true, name: 'AZ-305' },
  maxParticipants: 8
};

export default function AzureSolutionsArchitectContent() {
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
          Beheers het ontwerpen van enterprise-schaal Azure-architecturen. Deze geavanceerde training bereidt je voor 
          op complexe architectuuruitdagingen en de AZ-305 Solutions Architect Expert certificering.
        </p>
      </section>

      {/* Core Architecture Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Kernarchitectuurvaardigheden
        </h3>
        
        <div className="space-y-4">
          {/* Compute Architecture */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-blue-600" />
              Compute Architectuur
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VM Scale Sets:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Auto-scaling en load balancing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Kubernetes Service:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Container-orchestratie en microservices</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Serverless Architecture:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Functions, Logic Apps en Event Grid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Architecture */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-green-600" />
              Data Architectuur
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Lakes & Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Synapse en Data Factory</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Database Strategy:</span>
                  <span className="text-slate-700 dark:text-slate-300"> SQL, NoSQL en multi-model databases</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Security:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Versleuteling, masking en toegangscontrole</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Architecture */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Beveiligingsarchitectuur
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Zero Trust-architectuur en conditionele toegang</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Security Center en Sentinel</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Key Vault en Managed Identity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Trainingsvoordelen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Expert-niveau Certificering</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Bereid je voor op de prestigieuze AZ-305 Azure Solutions Architect Expert certificering.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Architectuur Case Studies</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Real-world enterprise architectuuruitdagingen en -oplossingen.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Kleine Klassen</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Maximaal 8 deelnemers voor intensieve, gepersonaliseerde begeleiding.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Carrière Acceleratie</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Positioneer jezelf voor senior architectuurrollen en technisch leiderschap.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">AZ-104 Azure Administrator certificering of vergelijkbare ervaring</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Minimum 2 jaar ervaring met Azure-infrastructuur</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Enterprise IT-architectuurervaring</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}