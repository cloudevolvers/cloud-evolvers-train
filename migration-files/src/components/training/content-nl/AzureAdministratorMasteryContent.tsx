import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Server, Shield, Settings } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-administrator-mastery',
  slug: 'azure-administrator-mastery',
  title: 'Azure Administrator Associate (AZ-104)',
  description: 'Beheers Azure infrastructuur beheer en word een Azure Administrator Associate',
  content: 'Uitgebreide training voor Azure infrastructuur beheer, resource management, beveiliging en monitoring.',
  category: 'Azure',
  subcategory: 'Administrator',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: [
    'Azure Fundamentals (AZ-900) certificering of equivalent kennis',
    'Ervaring met PowerShell of Azure CLI',
    'Basiskennis van netwerken en operating systems'
  ],
  learningObjectives: [
    'Azure subscriptions en resources beheren',
    'Azure storage en virtual networking implementeren',
    'Azure Virtual Machines implementeren en beheren',
    'Azure identiteiten en governance configureren',
    'Azure monitoring en backup oplossingen implementeren'
  ],
  instructor: {
    id: 'azure-admin-expert',
    name: 'Azure Administrator Expert',
    title: 'Microsoft Certified Trainer & Azure MVP'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Administrator', 'AZ-104', 'Infrastructure'],
  featured: true,
  certification: { available: true, name: 'AZ-104' },
  maxParticipants: 12
};

export default function AzureAdministratorMasteryContent() {
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
          Deze intensieve 4-daagse training maakt je klaar voor de Azure Administrator Associate rol. 
          Leer alles over Azure infrastructure management, van virtual machines tot storage, networking, 
          identity management en monitoring. Perfect voor IT professionals die hun Azure skills willen uitbreiden.
        </p>
      </section>

      {/* Key Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Server className="h-4 w-4 text-blue-600" />
          Kernvaardigheden die Je Ontwikkelt
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Server className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Infrastructure Management</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Virtual Machines deployment & management</li>
              <li>• Storage accounts & disk management</li>
              <li>• Virtual networks & subnets</li>
              <li>• Load balancers & application gateways</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Identity & Security</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Azure Active Directory management</li>
              <li>• Role-Based Access Control (RBAC)</li>
              <li>• Azure Policy & governance</li>
              <li>• Network Security Groups</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Monitoring & Automation</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Azure Monitor & Log Analytics</li>
              <li>• Azure Automation & runbooks</li>
              <li>• Azure Backup & Site Recovery</li>
              <li>• ARM Templates & PowerShell</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Wat Je Leert
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Na deze 4-daagse intensieve training beheers je:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Subscriptions & Resource Management:</span>
              <span className="text-slate-700 dark:text-slate-300"> Resource groups, tags, policies, en cost management</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Virtual Machines & Compute:</span>
              <span className="text-slate-700 dark:text-slate-300"> VM deployment, sizing, disks, availability sets, scale sets</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Storage Solutions:</span>
              <span className="text-slate-700 dark:text-slate-300"> Storage accounts, blob storage, file shares, disk storage</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Virtual Networking:</span>
              <span className="text-slate-700 dark:text-slate-300"> VNets, subnets, NSGs, peering, VPN Gateway, ExpressRoute</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Identity & Access Management:</span>
              <span className="text-slate-700 dark:text-slate-300"> Azure AD, users, groups, RBAC, conditional access</span>
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
              <span className="font-semibold text-slate-900 dark:text-slate-100">Hands-on Labs</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              70% praktische oefeningen met echte Azure resources. Elke deelnemer krijgt een persoonlijke lab environment.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Intensive Program</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              4 volle dagen met theorie, praktijk en examen voorbereiding. Kleine groepen voor persoonlijke aandacht.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>• <strong>Azure Fundamentals (AZ-900) certificering</strong> of equivalent praktijkervaring</li>
            <li>• Ervaring met PowerShell, Azure CLI of ARM Templates</li>
            <li>• Basiskennis van Windows/Linux operating systems</li>
            <li>• Begrip van netwerk fundamentals (TCP/IP, DNS, VPN)</li>
            <li>• Minimaal 6 maanden ervaring met Azure services</li>
          </ul>
        </div>
      </section>

      {/* Course Outline */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Cursus Programma</h3>
        
        <div className="space-y-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 1: Azure Identity & Governance
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure Active Directory configuratie</li>
              <li>• Users, groups en administrative units</li>
              <li>• Role-Based Access Control (RBAC) implementatie</li>
              <li>• Azure Policy & Management Groups</li>
              <li>• Subscriptions & resource groups management</li>
              <li>• Cost management & billing</li>
              <li>• <strong>Labs:</strong> AD setup, RBAC configuratie, Policy assignments</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 2: Storage & Virtual Machines
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Storage accounts configuratie en security</li>
              <li>• Blob storage, file shares en queues</li>
              <li>• Virtual Machine deployment strategieën</li>
              <li>• VM sizing, disk types en performance</li>
              <li>• VM availability sets & scale sets</li>
              <li>• Azure Disk Encryption & backup</li>
              <li>• <strong>Labs:</strong> Storage deployment, VM creation, scaling configuratie</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 3: Virtual Networks & Security
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Virtual Network design & implementation</li>
              <li>• Subnets, routing tables & custom routes</li>
              <li>• Network Security Groups (NSGs) & Application Security Groups</li>
              <li>• VNet peering & VPN Gateway configuratie</li>
              <li>• Load Balancer & Application Gateway setup</li>
              <li>• DNS configuratie & private endpoints</li>
              <li>• <strong>Labs:</strong> VNet deployment, NSG rules, load balancing</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 4: Monitoring, Backup & Automation
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure Monitor & Log Analytics Workspaces</li>
              <li>• Metrics, alerts en action groups</li>
              <li>• Azure Backup & Site Recovery</li>
              <li>• Azure Automation accounts & runbooks</li>
              <li>• ARM Templates & Bicep deployment</li>
              <li>• PowerShell for Azure administration</li>
              <li>• Examen voorbereiding & praktijktests</li>
              <li>• <strong>Labs:</strong> Monitoring setup, backup configuratie, automation</li>
            </ul>
          </div>
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
            Deze training bereidt je volledig voor op het <strong>Microsoft Azure Administrator Associate (AZ-104)</strong> examen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Examen Details:</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• 40-60 vragen in 150 minuten</li>
                <li>• Score van 700+ (uit 1000) vereist</li>
                <li>• Mix van multiple choice, case studies, drag & drop</li>
                <li>• Hands-on lab simulaties</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Inbegrepen:</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• AZ-104 examen voucher</li>
                <li>• Officiële Microsoft practice tests</li>
                <li>• Post-training examen coaching</li>
                <li>• 1 gratis herkansingvoucher bij falen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Wat is Inbegrepen</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">4 dagen intensieve hands-on training</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Persoonlijke Azure lab environment ($500 credits)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Officiële Microsoft Learning materialen</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">AZ-104 examen voucher (€165 waarde)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">PowerShell & Azure CLI reference guides</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">90 dagen post-training email ondersteuning</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Lunch en refreshments alle dagen</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Digitaal certificaat van deelname</span>
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
              <li>• Azure Administrators die certificering willen</li>
              <li>• System Administrators transitioning naar Azure</li>
              <li>• Cloud Engineers die expertise willen uitbreiden</li>
              <li>• IT Professionals met Azure fundamentals kennis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Functierollen:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Azure Administrator</li>
              <li>• Cloud Infrastructure Engineer</li>
              <li>• Systems Administrator</li>
              <li>• DevOps Engineer (infrastructure focus)</li>
              <li>• Technical Consultant</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vervolgstappen</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Na je AZ-104 certificering, specialiseer je verder met deze expert-level trainings:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>• AZ-305: Azure Solutions Architect Expert</div>
            <div>• AZ-400: DevOps Engineer Expert</div>
            <div>• AZ-500: Azure Security Engineer Associate</div>
            <div>• AZ-700: Azure Network Engineer Associate</div>
          </div>
        </div>
      </section>
    </div>
  );
}