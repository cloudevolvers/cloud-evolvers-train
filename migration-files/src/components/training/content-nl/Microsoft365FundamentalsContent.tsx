import React from 'react';
import { CheckCircle, Users, Shield, Cloud, MessageSquare, Target, BookOpen, Award, Building, Zap } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-fundamentals',
  slug: 'microsoft-365-fundamentals',
  title: 'Microsoft 365 Fundamentals (MS-900)',
  description: 'Beheers Microsoft 365 cloud productiviteit en samenwerking fundamentals',
  content: 'Uitgebreide fundamentals training over Microsoft 365 services, beveiliging, compliance en prijsstelling.',
  category: 'Microsoft 365',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'dagen' },
  prerequisites: ['Basisbegrip van cloud computing concepten'],
  learningObjectives: [
    'Microsoft 365 kernservices en concepten beschrijven',
    'Beveiliging, compliance, privacy en vertrouwen beschrijven',
    'Microsoft 365 prijsstelling en ondersteuning beschrijven'
  ],
  instructor: {
    id: 'microsoft-expert',
    name: 'Microsoft 365 Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Fundamentals', 'M365', 'MS-900'],
  featured: true,
  certification: { available: true, name: 'MS-900' },
  maxParticipants: 15
};

export default function Microsoft365FundamentalsContent() {
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
          Ontdek de kracht van Microsoft 365! Deze fundamentele cursus behandelt productiviteitsservices, beveiligingsfeatures, 
          compliance mogelijkheden en ondersteuningsopties. Perfect voor IT professionals en business besluitvormers.
        </p>
      </section>

      {/* Core Services */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Cloud className="h-4 w-4 text-blue-600" />
          Microsoft 365 Kernservices
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Productiviteit & Samenwerking</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Microsoft Teams - chat, calls, meetings</li>
              <li>• SharePoint - documentbeheer en samenwerking</li>
              <li>• OneDrive - persoonlijke cloudopslag</li>
              <li>• Office apps - Word, Excel, PowerPoint, Outlook</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Business Applicaties</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Power Platform - low-code solutions</li>
              <li>• Microsoft Viva - employee experience</li>
              <li>• Yammer - enterprise social networking</li>
              <li>• Microsoft Stream - video platform</li>
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
          In deze tweedaagse training ontwikkel je expertise in:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Microsoft 365 Services:</span>
              <span className="text-slate-700 dark:text-slate-300"> Office 365, Teams, SharePoint, OneDrive, Exchange Online</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Identity & Access:</span>
              <span className="text-slate-700 dark:text-slate-300"> Azure Active Directory, multi-factor authentication, conditional access</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Beveiliging & Compliance:</span>
              <span className="text-slate-700 dark:text-slate-300"> Microsoft Defender, Purview, compliance center, data governance</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Licenties & Prijzen:</span>
              <span className="text-slate-700 dark:text-slate-300"> Microsoft 365 plannen, licentiemodellen en kostenoptimalisatie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Training Format</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Interactieve Workshops</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Hands-on ervaring met Microsoft 365 apps en services in real-world scenario's.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building className="h-4 w-4 text-orange-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Praktijkvoorbeelden</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Leer van echte organisatie use cases en implementatie best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>• Basiskennis van cloud computing concepten</li>
            <li>• Ervaring met Windows en Office applicaties</li>
            <li>• Begrip van netwerk- en beveiligingsfundamentals is helpend</li>
            <li>• Geen eerdere Microsoft 365 ervaring vereist</li>
          </ul>
        </div>
      </section>

      {/* Security & Compliance Focus */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Shield className="h-4 w-4 text-red-600" />
          Beveiliging & Compliance Focus
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Beveiligingsservices:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Microsoft Defender voor Office 365</li>
              <li>• Azure Active Directory Identity Protection</li>
              <li>• Microsoft Cloud App Security</li>
              <li>• Advanced Threat Protection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Compliance Tools:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Microsoft Purview compliance portal</li>
              <li>• Data Loss Prevention (DLP)</li>
              <li>• eDiscovery en Legal Hold</li>
              <li>• Retention policies en labels</li>
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
            Deze training bereidt je voor op het <strong>Microsoft 365 Fundamentals (MS-900)</strong> certificatie examen.
          </p>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>• Officiële Microsoft Learning Path</li>
            <li>• Praktische labs en scenario-oefeningen</li>
            <li>• MS-900 examen voucher inbegrepen</li>
            <li>• Post-training examen ondersteuning</li>
          </ul>
        </div>
      </section>

      {/* Course Outline */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Cursus Programma</h3>
        
        <div className="space-y-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 1: Microsoft 365 Services & Concepten
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Microsoft 365 ecosystem overzicht</li>
              <li>• Office 365 productiviteit apps (Word, Excel, PowerPoint, Outlook)</li>
              <li>• Microsoft Teams voor samenwerking en communicatie</li>
              <li>• SharePoint Online voor content management</li>
              <li>• OneDrive for Business voor file storage</li>
              <li>• Exchange Online voor email en calendering</li>
              <li>• Hands-on labs: Microsoft 365 portal verkenning</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 2: Beveiliging, Compliance & Management
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure Active Directory fundamentals</li>
              <li>• Identity & access management concepten</li>
              <li>• Microsoft 365 beveiligingsservices overzicht</li>
              <li>• Microsoft Purview compliance oplossingen</li>
              <li>• Data governance en protection strategieën</li>
              <li>• Microsoft 365 licenties en prijsmodellen</li>
              <li>• Service Level Agreements en support opties</li>
              <li>• Hands-on labs: Security & compliance configuratie</li>
              <li>• Examen voorbereiding en review</li>
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
              <li>• IT professionals die Microsoft 365 willen implementeren</li>
              <li>• System administrators transitioning naar cloud</li>
              <li>• Business stakeholders evaluating Microsoft 365</li>
              <li>• Consultants die Microsoft 365 adviseren</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Functierollen:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Microsoft 365 Administrator</li>
              <li>• IT Helpdesk Specialist</li>
              <li>• Business Analyst</li>
              <li>• Project Manager</li>
              <li>• Technical Sales Representative</li>
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
            <span className="text-slate-700 dark:text-slate-300">Officiële Microsoft Learning materiaal</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Microsoft 365 tenant toegang voor labs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">MS-900 examen voucher</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Digitaal certificaat van deelname</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">90 dagen Microsoft 365 trial licentie</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">30 dagen post-training ondersteuning</span>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vervolgstappen</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Na je MS-900 certificering, specialiseer je verder met deze advanced trainings:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>• MS-102: Microsoft 365 Administrator</div>
            <div>• MS-500: Microsoft 365 Security Administrator</div>
            <div>• MS-101: Microsoft 365 Mobility and Security</div>
            <div>• PL-300: Microsoft Power BI Data Analyst</div>
          </div>
        </div>
      </section>
    </div>
  );
}