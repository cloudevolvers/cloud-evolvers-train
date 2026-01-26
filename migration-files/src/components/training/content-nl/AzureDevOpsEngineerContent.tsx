import React from 'react';
import { CheckCircle, GitBranch, Shield, Monitor, Zap, Target, BookOpen, Award, Users, Clock, Building } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-devops-engineer',
  slug: 'azure-devops-engineer',
  title: 'Azure DevOps Engineer Associate (AZ-400)',
  description: 'Beheers DevOps-praktijken en Azure DevOps-services om software-levering te optimaliseren',
  content: 'Uitgebreide DevOps-training over CI/CD, infrastructuur als code en Azure DevOps.',
  category: 'Azure',
  subcategory: 'DevOps',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['AZ-104 of vergelijkbare ervaring', 'Ontwikkel- of operationele ervaring'],
  learningObjectives: [
    'DevOps-ontwikkelingsprocessen implementeren',
    'Continue integratie en levering implementeren',
    'Afhankelijkheidsbeheer en infrastructuur als code implementeren'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'DevOps', 'CI/CD', 'AZ-400'],
  featured: true,
  certification: { available: true, name: 'AZ-400' },
  maxParticipants: 10
};

export default function AzureDevOpsEngineerContent() {
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
          Beheers enterprise DevOps-praktijken met Azure! Dit intensieve 4-dagen programma combineert Microsoft Azure DevOps Services 
          met industriële best practices om enterprise-grade CI/CD-oplossingen te leveren en voor te bereiden op AZ-400 certificering.
        </p>
      </section>

      {/* Training Structure */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          4-Dagen Trainingsstructuur
        </h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Day 1 */}
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Dag 1: DevOps-fundamenten & Broncodebeheer
            </h4>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>• DevOps-principes en -cultuur</li>
              <li>• Azure DevOps Services overzicht</li>
              <li>• Geavanceerde Git-workflows</li>
              <li>• Branch-policies en pull requests</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Dag 2: Continue Integratie & Build-automatisering
            </h4>
            <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
              <li>• YAML pipeline-ontwerp</li>
              <li>• Geautomatiseerde testintegratie</li>
              <li>• Kwaliteitspoorten en beveiligingsscanning</li>
              <li>• Pakketbeheer met Azure Artifacts</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
              <Building className="h-4 w-4" />
              Dag 3: Continue Levering & Infrastructuur als Code
            </h4>
            <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
              <li>• Multi-environment deployment</li>
              <li>• Blue-green & canary deployments</li>
              <li>• ARM templates en Bicep</li>
              <li>• Configuratiebeheer</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Dag 4: DevSecOps & Monitoring
            </h4>
            <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
              <li>• Beveiligingsintegratie (DevSecOps)</li>
              <li>• Application Insights & Azure Monitor</li>
              <li>• Enterprise DevOps-patronen</li>
              <li>• AZ-400 examenvoorbereiding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core DevOps Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Kern DevOps-vaardigheden die je beheerst
        </h3>
        
        <div className="space-y-4">
          {/* CI/CD Pipelines */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-blue-600" />
              CI/CD Pipeline Beheersing
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">YAML Pipelines:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-stage pipeline-ontwerp en -configuratie</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Build Automatisering:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Self-hosted en Microsoft-hosted agents</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Test Integratie:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Geautomatiseerd testen en codedekking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-600" />
              Infrastructuur als Code
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">ARM Templates:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Resource Manager-fundamenten</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Bicep:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Moderne declaratieve syntax voor Azure-resources</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Terraform:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-cloud infrastructuurprovisioning</span>
                </div>
              </div>
            </div>
          </div>

          {/* DevSecOps */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              DevSecOps Integratie
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Security by Design:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Shift-left beveiligingspraktijken</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Kwetsbaarheidsscanning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Container- en afhankelijkheidsscanning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Policy als Code:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Policy-automatisering en compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-green-600" />
              Monitoring & Observability
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Application Insights:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Prestatiemonitoring en diagnostiek</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Monitor:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Infrastructuur- en applicatiemonitoring</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Log Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Query-optimalisatie en aangepaste dashboards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Projects */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Praktische Projecten
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Enterprise E-Commerce Platform</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Multi-regio deployment-setup</li>
              <li>• Microservices CI/CD pipelines</li>
              <li>• Geautomatiseerde beveiligingsscanning</li>
              <li>• Uitgebreide monitoringstack</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Gereguleerde Financiële Applicatie</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• SOX compliance automatisering</li>
              <li>• Onveranderlijke infrastructuur</li>
              <li>• Geavanceerde dreigingsbescherming</li>
              <li>• Auditspoor implementatie</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification Preparation */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          AZ-400 Certificeringsvoorbereiding
        </h3>
        
        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">Volledige Examendekking:</span>
                <span className="text-yellow-800 dark:text-yellow-200"> Alle AZ-400 doelstellingen gekoppeld aan training</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">Praktijkscenario's:</span>
                <span className="text-yellow-800 dark:text-yellow-200"> Praktische oefeningen die overeenkomen met het examenformaat</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">Examenvoucher Inbegrepen:</span>
                <span className="text-yellow-800 dark:text-yellow-200"> Gratis certificeringsexamenpoging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets This Training Apart */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Wat deze training onderscheidt
        </h3>
        
        <div className="grid gap-3 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Users className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Expert Instructie:</span>
              <span className="text-slate-700 dark:text-slate-300"> Geleid door Microsoft Certified DevOps Engineer Associate</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BookOpen className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Praktijkgerichte Focus:</span>
              <span className="text-slate-700 dark:text-slate-300"> Uitgebreide praktische labs met echte scenario's</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Certificeringsondersteuning:</span>
              <span className="text-slate-700 dark:text-slate-300"> Examenvoucher en 90-dagen mentoring</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Kleine Groepen:</span>
              <span className="text-slate-700 dark:text-slate-300"> Maximaal 12 deelnemers voor persoonlijke aandacht</span>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-purple-600" />
          Post-Training Succespacket
        </h3>
        
        <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">AZ-400 Examenvoucher:</span>
                <span className="text-purple-800 dark:text-purple-200"> Gratis certificeringsexamenpoging</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">Implementatieconsulting:</span>
                <span className="text-purple-800 dark:text-purple-200"> 2 uur projectspecifieke begeleiding</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">Resourcebibliotheek:</span>
                <span className="text-purple-800 dark:text-purple-200"> Templates, checklists en referentiemateriaal</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">Expert Community:</span>
                <span className="text-purple-800 dark:text-purple-200"> Toegang tot netwerk van DevOps-professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
            Klaar om de software-levering van uw organisatie te transformeren?
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            Sluit je aan bij onze Azure DevOps Engineer Associate-training en word de katalysator voor enterprise DevOps-succes!
          </p>
        </div>
      </section>
    </div>
  );
}