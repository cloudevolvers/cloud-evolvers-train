import React from 'react';
import { CheckCircle, Network, Shield, Monitor, Target, BookOpen, Award, Users, Settings } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-network-engineer',
  slug: 'azure-network-engineer',
  title: 'Azure Network Engineer Associate (AZ-700)',
  description: 'Ontwerp, implementeer en beheer Azure-netwerkoplossingen',
  content: 'Uitgebreide netwerktraining over Azure-netwerkinfrastructuur, beveiliging en connectiviteit.',
  category: 'Azure',
  subcategory: 'Networking',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Azure-fundamentskennis', 'Netwerkervaring'],
  learningObjectives: [
    'Azure Virtual Networks ontwerpen en implementeren',
    'Netwerkbeveiliging en -connectiviteit beheren',
    'Netwerkprestaties monitoren en troubleshooten'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Networking', 'AZ-700', 'Infrastructure'],
  featured: false,
  certification: { available: true, name: 'AZ-700' },
  maxParticipants: 12
};

export default function AzureNetworkEngineerContent() {
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
          Beheers Azure-netwerkoplossingen met deze uitgebreide training voor netwerkengineers. Leer complexe 
          netwerkarchitecturen ontwerpen, implementeren en beheren in Microsoft Azure.
        </p>
      </section>

      {/* Core Networking Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Kernnnetwerkvaardigheden
        </h3>
        
        <div className="space-y-4">
          {/* Virtual Networks */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Network className="h-4 w-4 text-blue-600" />
              Azure Virtual Networks
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VNet Ontwerp:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Subnetten, adressering en segmentatie</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VNet Peering:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Regionaal en globaal netwerkconnectiviteit</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Network Security Groups:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Traffic filtering en micro-segmentatie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hybrid Connectivity */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Settings className="h-4 w-4 text-green-600" />
              Hybride Connectiviteit
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VPN Gateway:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Site-to-site en point-to-site verbindingen</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">ExpressRoute:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Private connectiviteit naar Azure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Virtual WAN:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Schaalbare branch-connectiviteit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Load Balancing */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-purple-600" />
              Load Balancing & Traffic Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Load Balancer en Application Gateway</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Traffic Manager en Front Door</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Firewall en WAF</span>
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
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">AZ-700 Certificering</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Volledige voorbereiding op het Azure Network Engineer Associate certificeringsexamen.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Praktische Labs</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Hands-on ervaring met complexe netwerkscenario's en troubleshooting.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Expert Instructie</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Training door gecertificeerde Azure-netwerkspecialisten.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Industriële Expertise</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Real-world networking-uitdagingen en best practices.
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
              <span className="text-slate-700 dark:text-slate-300">Solide kennis van netwerkconcepten (OSI, TCP/IP, DNS)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Azure-fundamentkennis (AZ-900 aanbevolen)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Ervaring met on-premises netwerkinfrastructuur</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}