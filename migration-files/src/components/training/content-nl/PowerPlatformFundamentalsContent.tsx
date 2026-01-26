import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Zap, Workflow, BarChart3, Lightbulb } from 'lucide-react';

export const trainingMetadata = {
  id: 'power-platform-fundamentals',
  slug: 'power-platform-fundamentals',
  title: 'Power Platform Fundamentals (PL-900)',
  description: 'Ontdek de kracht van Microsoft Power Platform voor low-code/no-code oplossingen',
  content: 'Uitgebreide fundamentals training over Power Platform componenten: Power Apps, Power Automate, Power BI en Power Virtual Agents.',
  category: 'Power Platform',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'dagen' },
  prerequisites: ['Basiskennis van Microsoft 365 services', 'Begrip van business processen'],
  learningObjectives: [
    'Power Platform componenten en mogelijkheden beschrijven',
    'Business waarde van Power Platform oplossingen identificeren',
    'Power Apps, Power Automate, Power BI en Power Virtual Agents gebruiken',
    'Connectiviteit tussen Power Platform en Microsoft 365 begrijpen'
  ],
  instructor: {
    id: 'power-platform-expert',
    name: 'Power Platform Expert',
    title: 'Microsoft Certified Trainer & Power Platform MVP'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Power Platform', 'Power Apps', 'Power Automate', 'Power BI', 'PL-900'],
  featured: true,
  certification: { available: true, name: 'PL-900' },
  maxParticipants: 15
};

export default function PowerPlatformFundamentalsContent() {
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
          Ontdek de kracht van Microsoft Power Platform! Deze fundamentele cursus laat je kennismaken met 
          low-code/no-code oplossingen die iedereen in staat stellen om krachtige business applicaties, 
          workflows en data visualisaties te creëren zonder uitgebreide programmeerkennis.
        </p>
      </section>

      {/* Power Platform Components */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-600" />
          Power Platform Componenten
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Power Apps</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Bouw custom business applicaties zonder code
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Canvas apps voor mobiel en desktop</li>
              <li>• Model-driven apps voor complexe data</li>
              <li>• Portal apps voor externe gebruikers</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Power Automate</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Automatiseer workflows tussen apps en services
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Cloud flows voor automatisering</li>
              <li>• Desktop flows voor RPA</li>
              <li>• Business process flows</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Power BI</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Transformeer data naar actionable insights
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Interactive dashboards & reports</li>
              <li>• Data modeling & transformatie</li>
              <li>• Self-service analytics</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-orange-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Power Virtual Agents</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Bouw intelligente chatbots zonder AI kennis
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <li>• No-code bot development</li>
              <li>• Natural language processing</li>
              <li>• Multi-channel deployment</li>
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
          In deze tweedaagse praktische training ontwikkel je vaardigheden in:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Power Apps Development:</span>
              <span className="text-slate-700 dark:text-slate-300"> Canvas en model-driven apps bouwen, data sources connecteren, UI design</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Workflow Automation:</span>
              <span className="text-slate-700 dark:text-slate-300"> Power Automate flows, triggers, actions, connectors en error handling</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Data Visualization:</span>
              <span className="text-slate-700 dark:text-slate-300"> Power BI reports, dashboards, data modeling en DAX basics</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Chatbot Creation:</span>
              <span className="text-slate-700 dark:text-slate-300"> Power Virtual Agents bot design, topics, entities en deployment</span>
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
              <span className="font-semibold text-slate-900 dark:text-slate-100">Hands-on Workshop</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              80% praktische oefeningen. Bouw echte oplossingen tijdens de training met begeleiding van experts.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Business Scenarios</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Leer aan de hand van realistische business cases en implementatie voorbeelden.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>• Basiskennis van Microsoft 365 services (SharePoint, Teams, Excel)</li>
            <li>• Begrip van business processen en workflow concepten</li>
            <li>• Ervaring met data manipulatie in Excel is helpend</li>
            <li>• Geen programmeerervaring vereist (low-code/no-code focus)</li>
            <li>• Laptop met moderne browser voor hands-on labs</li>
          </ul>
        </div>
      </section>

      {/* Course Outline */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Cursus Programma</h3>
        
        <div className="space-y-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 1: Power Apps & Power Automate
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Power Platform overzicht en business waarde</li>
              <li>• Power Apps introduction - Canvas vs Model-driven</li>
              <li>• Je eerste Canvas app bouwen (hands-on)</li>
              <li>• Data sources en connectors configureren</li>
              <li>• Power Automate fundamentals</li>
              <li>• Cloud flows maken voor automatisering</li>
              <li>• Integration tussen Power Apps en Power Automate</li>
              <li>• <strong>Project:</strong> Expense approval app met workflow</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 2: Power BI & Power Virtual Agents
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Power BI introduction en architectuur</li>
              <li>• Data bronnen connecteren en transformeren</li>
              <li>• Reports en visualisaties maken</li>
              <li>• Dashboards samenstellen en delen</li>
              <li>• Power Virtual Agents overzicht</li>
              <li>• Chatbot topics en dialogen ontwerpen</li>
              <li>• Bot integratie met andere Power Platform services</li>
              <li>• <strong>Project:</strong> Complete business solution met alle componenten</li>
              <li>• Examen voorbereiding en best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Business Waarde</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Voor Organisaties:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Snellere time-to-market voor business oplossingen</li>
              <li>• Lagere ontwikkelkosten door citizen development</li>
              <li>• Verhoogde productiviteit door procesautomatisering</li>
              <li>• Betere data-driven besluitvorming</li>
              <li>• Democratisering van app development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Voor Professionals:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Nieuwe vaardigheden in digitale transformatie</li>
              <li>• Mogelijkheid om business problemen zelf op te lossen</li>
              <li>• Verhoogde employability in moderne werkplekken</li>
              <li>• Gateway naar advanced Microsoft 365 expertise</li>
              <li>• Fundament voor Power Platform specialisatie</li>
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
            Deze training bereidt je voor op het <strong>Microsoft Power Platform Fundamentals (PL-900)</strong> examen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Examen Info:</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• 40-60 vragen in 85 minuten</li>
                <li>• Score van 700+ vereist (uit 1000)</li>
                <li>• Multiple choice en scenario-based vragen</li>
                <li>• Focus op business waarde en functionaliteit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Training Voordelen:</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• PL-900 examen voucher inbegrepen</li>
                <li>• Hands-on ervaring met alle componenten</li>
                <li>• Real-world projecten en use cases</li>
                <li>• 30 dagen post-training ondersteuning</li>
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
            <span className="text-slate-700 dark:text-slate-300">Power Platform developer environment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Alle hands-on lab bestanden en templates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">PL-900 examen voucher (€99 waarde)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Power Platform best practices guide</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Sample apps en workflows voor inspiratie</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">30 dagen email ondersteuning</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Lunch en refreshments</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Certificaat van deelname</span>
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
              <li>• Business professionals die processen willen automatiseren</li>
              <li>• IT professionals nieuwe in Power Platform</li>
              <li>• Citizen developers die eigen oplossingen willen bouwen</li>
              <li>• Consultants die Power Platform willen adviseren</li>
              <li>• Managers die digitale transformatie leiden</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Functierollen:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Business Analyst</li>
              <li>• Process Analyst</li>
              <li>• Functional Consultant</li>
              <li>• Power Platform Developer</li>
              <li>• Citizen Developer</li>
              <li>• Project Manager</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Praktische Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Power Apps Voorbeelden:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Expense reporting en approval apps</li>
              <li>• Asset management en tracking</li>
              <li>• Customer feedback en survey tools</li>
              <li>• Inventory management systemen</li>
              <li>• Employee onboarding portals</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Power Automate Scenarios:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Document approval workflows</li>
              <li>• Email notifications en reminders</li>
              <li>• Data synchronization tussen systemen</li>
              <li>• Social media monitoring en response</li>
              <li>• Invoice processing automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vervolgstappen</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Na je PL-900 certificering, specialiseer je verder met deze role-based trainings:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>• PL-100: Power Platform App Maker</div>
            <div>• PL-200: Power Platform Functional Consultant</div>
            <div>• PL-400: Power Platform Developer</div>
            <div>• PL-300: Power BI Data Analyst</div>
          </div>
        </div>
      </section>
    </div>
  );
}