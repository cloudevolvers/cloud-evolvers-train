import React from 'react';
import { CheckCircle, Users, MessageSquare, Target, BookOpen, Award, Clock, Settings, Video, Phone } from 'lucide-react';

export const trainingMetadata = {
  id: 'teams-advanced-administration',
  slug: 'teams-advanced-administration',
  title: 'Microsoft Teams Advanced Administration',
  description: 'Beheers geavanceerde Microsoft Teams administratie en governance',
  content: 'Geavanceerde Teams training voor enterprise deployment, security, compliance en advanced features.',
  category: 'Microsoft 365',
  subcategory: 'Teams Administration',
  difficulty: 'Advanced' as const,
  duration: { days: 3, format: 'dagen' },
  prerequisites: [
    'Microsoft 365 Fundamentals (MS-900) of equivalent',
    'Teams basis administratie ervaring',
    'PowerShell basiskennis'
  ],
  learningObjectives: [
    'Enterprise Teams deployment plannen en uitvoeren',
    'Geavanceerde governance en compliance implementeren',
    'Teams Phone System en Direct Routing configureren',
    'Advanced security en data protection',
    'Teams monitoring, troubleshooting en optimization'
  ],
  instructor: {
    id: 'teams-expert',
    name: 'Teams Expert',
    title: 'Microsoft Certified Trainer & Teams MVP'
  },
  price: { amount: 1295, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft Teams', 'Administration', 'Governance', 'Phone System'],
  featured: true,
  certification: { available: false },
  maxParticipants: 12
};

export default function TeamsAdvancedAdministrationContent() {
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
          Beheers Microsoft Teams op enterprise niveau! Deze geavanceerde 3-daagse training is ontworpen voor 
          ervaren Teams administrators die hun organisatie willen optimaliseren met enterprise features, 
          governance, security en advanced telecommunicatie mogelijkheden. Van planning tot implementatie 
          van complexe Teams omgevingen.
        </p>
      </section>

      {/* Advanced Teams Features */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-blue-600" />
          Geavanceerde Teams Functionaliteiten
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Teams Phone System</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Direct Routing configuratie</li>
              <li>• Session Border Controller setup</li>
              <li>• Voice routing policies</li>
              <li>• Emergency calling configuratie</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Governance & Compliance</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Information barriers</li>
              <li>• Retention policies</li>
              <li>• Legal hold & eDiscovery</li>
              <li>• Data Loss Prevention (DLP)</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Video className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Enterprise Meetings</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Teams Rooms deployment</li>
              <li>• Live Events production</li>
              <li>• Cloud Video Interop</li>
              <li>• Meeting room booking systemen</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-orange-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Advanced Security</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Conditional Access voor Teams</li>
              <li>• Multi-factor authentication</li>
              <li>• Guest user management</li>
              <li>• Advanced Threat Protection</li>
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
          In deze 3-daagse geavanceerde training beheers je:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Enterprise Deployment:</span>
              <span className="text-slate-700 dark:text-slate-300"> Teams architectuur, governance model, migration strategies</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Phone System Integration:</span>
              <span className="text-slate-700 dark:text-slate-300"> Direct Routing, SBC configuratie, voice policies, emergency calling</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Advanced Governance:</span>
              <span className="text-slate-700 dark:text-slate-300"> Information barriers, retention, legal hold, compliance center</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Security & Monitoring:</span>
              <span className="text-slate-700 dark:text-slate-300"> Conditional access, threat protection, call analytics, quality monitoring</span>
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
              <span className="font-semibold text-slate-900 dark:text-slate-100">Live Lab Environment</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Hands-on configuratie in dedicated Teams tenant met enterprise features geactiveerd.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Real-world Scenarios</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Enterprise implementatie cases en troubleshooting scenarios uit de praktijk.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>• <strong>Microsoft 365 Fundamentals kennis</strong> (MS-900 of equivalent ervaring)</li>
            <li>• Ervaring met Teams basis administratie (minimaal 6 maanden)</li>
            <li>• PowerShell basiskennis en ervaring met Microsoft 365 admin center</li>
            <li>• Begrip van netwerkfundamentals (TCP/IP, DNS, firewalls)</li>
            <li>• Ervaring met Active Directory en Azure AD</li>
          </ul>
        </div>
      </section>

      {/* Course Outline */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Cursus Programma</h3>
        
        <div className="space-y-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 1: Enterprise Teams Deployment & Governance
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Teams enterprise architectuur en planning</li>
              <li>• Advanced tenant configuratie en policies</li>
              <li>• Teams governance model ontwikkeling</li>
              <li>• Information barriers implementatie</li>
              <li>• Guest user management en external access</li>
              <li>• Teams migration strategies (van Skype for Business)</li>
              <li>• <strong>Labs:</strong> Enterprise tenant setup, governance policies, migration planning</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 2: Teams Phone System & Direct Routing
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Teams Phone System architectuur</li>
              <li>• Session Border Controller (SBC) configuratie</li>
              <li>• Direct Routing setup en troubleshooting</li>
              <li>• Voice routing policies en dial plans</li>
              <li>• Emergency calling configuratie</li>
              <li>• Call Analytics en Call Quality Dashboard</li>
              <li>• Integration met bestaande telephony systemen</li>
              <li>• <strong>Labs:</strong> SBC deployment, voice routing, call flow testing</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 3: Advanced Features, Security & Monitoring
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Teams Rooms deployment en management</li>
              <li>• Live Events en broadcast features</li>
              <li>• Cloud Video Interop configuratie</li>
              <li>• Advanced security configuratie</li>
              <li>• Data Loss Prevention (DLP) voor Teams</li>
              <li>• Retention policies en legal hold</li>
              <li>• Performance monitoring en optimization</li>
              <li>• Troubleshooting advanced scenarios</li>
              <li>• <strong>Labs:</strong> Teams Rooms setup, Live Events, security policies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Features Deep Dive */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Advanced Features Deep Dive</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Phone System Features:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Auto attendants en call queues</li>
              <li>• Music on hold en announcements</li>
              <li>• Call park en transfer scenarios</li>
              <li>• Survivable Branch Appliance (SBA)</li>
              <li>• Location-based routing</li>
              <li>• Analog telephony adapter (ATA) support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Enterprise Meeting Features:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Town halls en webinars</li>
              <li>• Meeting room management</li>
              <li>• Breakout rooms automation</li>
              <li>• Recording policies en retention</li>
              <li>• Third-party meeting room integration</li>
              <li>• Custom meeting backgrounds en branding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Wat is Inbegrepen</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">3 dagen hands-on advanced Teams training</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Enterprise Teams tenant voor labs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">SBC simulator voor Direct Routing labs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">PowerShell scripts en automation tools</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Enterprise deployment templates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Troubleshooting guides en checklists</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">60 dagen post-training consultatie</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Lunch en refreshments alle dagen</span>
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
              <li>• Ervaren Teams administrators</li>
              <li>• Microsoft 365 architects</li>
              <li>• UC engineers transitioning naar Teams</li>
              <li>• IT consultants met Teams focus</li>
              <li>• Projectmanagers voor Teams deployments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Functierollen:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Microsoft Teams Administrator</li>
              <li>• Unified Communications Engineer</li>
              <li>• Microsoft 365 Architect</li>
              <li>• Communication & Collaboration Specialist</li>
              <li>• Senior IT Administrator</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Tools & Technologieën</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Administrative Tools:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Teams Admin Center</li>
              <li>• PowerShell for Teams</li>
              <li>• Microsoft 365 Admin Center</li>
              <li>• Azure Active Directory</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Monitoring & Analytics:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Call Analytics</li>
              <li>• Call Quality Dashboard</li>
              <li>• Network Assessment Tool</li>
              <li>• Teams Usage Reports</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Integration Platforms:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Session Border Controllers</li>
              <li>• Cloud Video Interop</li>
              <li>• Teams Rooms systems</li>
              <li>• Third-party telephony systems</li>
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
              <li>• Succesvolle enterprise Teams implementatie</li>
              <li>• Optimale user experience en productiviteit</li>
              <li>• Compliance en security best practices</li>
              <li>• Kostenbesparing door geïntegreerde communicatie</li>
              <li>• Verminderde complexiteit door single platform</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Voor IT Professionals:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Expert-level Teams administratie skills</li>
              <li>• Advanced troubleshooting capabilities</li>
              <li>• Enterprise deployment expertise</li>
              <li>• Telephony integration kennis</li>
              <li>• Career advancement opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vervolgstappen</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Na deze geavanceerde Teams training, specialiseer je verder met:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>• MS-700: Managing Microsoft Teams</div>
            <div>• Advanced Teams Security Workshop</div>
            <div>• Teams Phone System Specialist Certification</div>
            <div>• Microsoft 365 Certified: Teams Administrator Associate</div>
          </div>
        </div>
      </section>
    </div>
  );
}