import React from 'react';
import { CheckCircle, Shield, Users, Target, BookOpen, Award, Clock, Lock, Eye, Key } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-security-fundamentals',
  slug: 'azure-security-fundamentals',
  title: 'Azure Security Engineer Associate (AZ-500)',
  description: 'Implementeer beveiligingscontroles en threat protection in Azure',
  content: 'Azure beveiliging training over identity management, platform protection en security operations.',
  category: 'Azure',
  subcategory: 'Security',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['AZ-104 of equivalent', 'Basiskennis van beveiligingsfundamentals'],
  learningObjectives: [
    'Identity en access beheren',
    'Platform protection implementeren',
    'Security operations beheren',
    'Data en applicaties beveiligen'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Security', 'AZ-500'],
  featured: true,
  certification: { available: true, name: 'AZ-500' },
  maxParticipants: 10
};

export default function AzureSecurityFundamentalsContent() {
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
          Beveilig je Azure omgeving met vertrouwen! Deze uitgebreide 4-daagse security training behandelt alle essentiële 
          Azure beveiligingsservices, identity management en compliance frameworks die nodig zijn om moderne cloud infrastructuur te beschermen. 
          Bereid je voor op de AZ-500 certificering terwijl je geavanceerde beveiligingsconcepten beheerst.
        </p>
      </section>

      {/* Security Domains */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Shield className="h-4 w-4 text-red-600" />
          Azure Security Domeinen
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Key className="h-4 w-4 text-red-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Identity & Access</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Azure Active Directory security</li>
              <li>• Conditional Access policies</li>
              <li>• Privileged Identity Management</li>
              <li>• Multi-factor authentication</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Platform Protection</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Network security configuration</li>
              <li>• Azure Firewall & Application Gateway</li>
              <li>• Host security & endpoint protection</li>
              <li>• Container & Kubernetes security</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Security Operations</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Azure Security Center & Defender</li>
              <li>• Azure Sentinel SIEM/SOAR</li>
              <li>• Security monitoring & alerting</li>
              <li>• Incident response procedures</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Data & App Security</span>
            </div>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Azure Key Vault management</li>
              <li>• Data encryption & classification</li>
              <li>• Application security best practices</li>
              <li>• DevSecOps integration</li>
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
          In deze 4-daagse intensieve training beheers je:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure AD Security:</span>
              <span className="text-slate-700 dark:text-slate-300"> PIM, Conditional Access, Identity Protection, MFA configuratie</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Network Security:</span>
              <span className="text-slate-700 dark:text-slate-300"> NSGs, Azure Firewall, Application Gateway, DDoS Protection</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Security Monitoring:</span>
              <span className="text-slate-700 dark:text-slate-300"> Azure Security Center, Defender for Cloud, Sentinel SIEM</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Data Protection:</span>
              <span className="text-slate-700 dark:text-slate-300"> Key Vault, encryption at rest/in transit, data classification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Training Format</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-red-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Hands-on Security Labs</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Practical security scenarios met echte Azure omgeving. Configureer security controls en test attack scenarios.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Security Best Practices</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Real-world security case studies en industry best practices. Kleine groepen voor persoonlijke aandacht.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>• <strong>Azure Administrator (AZ-104) certificering</strong> of equivalent praktijkervaring</li>
            <li>• Basiskennis van IT security fundamentals</li>
            <li>• Ervaring met Windows en Linux operating systems</li>
            <li>• Begrip van netwerk security concepten</li>
            <li>• PowerShell en Azure CLI ervaring aanbevolen</li>
          </ul>
        </div>
      </section>

      {/* Course Outline */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Cursus Programma</h3>
        
        <div className="space-y-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 1: Identity & Access Management Security
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure Active Directory security configuratie</li>
              <li>• Multi-Factor Authentication implementatie</li>
              <li>• Conditional Access policies ontwerp</li>
              <li>• Privileged Identity Management (PIM) setup</li>
              <li>• Azure AD Identity Protection</li>
              <li>• Identity Governance & Access Reviews</li>
              <li>• <strong>Labs:</strong> MFA setup, Conditional Access rules, PIM activation</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 2: Platform Protection & Network Security
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Network Security Groups (NSGs) & Application Security Groups</li>
              <li>• Azure Firewall configuratie en policies</li>
              <li>• Application Gateway Web Application Firewall</li>
              <li>• Azure DDoS Protection implementatie</li>
              <li>• VPN en ExpressRoute security</li>
              <li>• Container en Kubernetes security</li>
              <li>• <strong>Labs:</strong> Firewall rules, WAF policies, network segmentation</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 3: Security Operations & Monitoring
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure Security Center & Microsoft Defender for Cloud</li>
              <li>• Azure Sentinel SIEM/SOAR platform</li>
              <li>• Security alerts en incident response</li>
              <li>• Log Analytics en security monitoring</li>
              <li>• Vulnerability assessment en management</li>
              <li>• Security automation en orchestration</li>
              <li>• <strong>Labs:</strong> Sentinel deployment, security playbooks, incident handling</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Dag 4: Data & Application Security
            </h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-4">
              <li>• Azure Key Vault secrets, keys en certificates management</li>
              <li>• Data encryption strategies (at rest & in transit)</li>
              <li>• Azure SQL Database security features</li>
              <li>• Storage account security & encryption</li>
              <li>• Application security best practices</li>
              <li>• DevSecOps en security in CI/CD pipelines</li>
              <li>• Compliance frameworks (ISO 27001, SOC 2, PCI DSS)</li>
              <li>• <strong>Labs:</strong> Key Vault setup, database encryption, app security scanning</li>
              <li>• AZ-500 examen voorbereiding en mock tests</li>
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
            Deze training bereidt je volledig voor op het <strong>Microsoft Azure Security Engineer Associate (AZ-500)</strong> examen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Examen Details:</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• 40-60 vragen in 150 minuten</li>
                <li>• Score van 700+ (uit 1000) vereist</li>
                <li>• Scenario-based questions & labs</li>
                <li>• Focus op praktische security implementatie</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Training Voordelen:</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• AZ-500 examen voucher (€165 waarde)</li>
                <li>• Praktische security labs & scenarios</li>
                <li>• Expert instructeur met security achtergrond</li>
                <li>• 1 gratis herkansingvoucher indien nodig</li>
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
            <span className="text-slate-700 dark:text-slate-300">4 dagen expert-level security training</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Dedicated Azure security lab omgeving</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">AZ-500 examen voucher (€165 waarde)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Azure security best practices guide</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Security tools & scripts collectie</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">90 dagen post-training security consultatie</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Lunch en refreshments alle dagen</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Digitaal security certificaat van deelname</span>
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
              <li>• Azure Administrators die security willen specialiseren</li>
              <li>• Security Engineers transitioning naar cloud</li>
              <li>• DevOps Engineers met security focus</li>
              <li>• IT Security professionals learning Azure</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Functierollen:</h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Azure Security Engineer</li>
              <li>• Cloud Security Architect</li>
              <li>• Security Operations Analyst</li>
              <li>• Cybersecurity Specialist</li>
              <li>• Compliance & Risk Manager</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Tools Covered */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Security Tools & Services</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Identity & Access:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Azure AD Premium P2</li>
              <li>• Conditional Access</li>
              <li>• Privileged Identity Management</li>
              <li>• Identity Protection</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Platform Security:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Azure Security Center</li>
              <li>• Microsoft Defender for Cloud</li>
              <li>• Azure Firewall Premium</li>
              <li>• Application Gateway WAF</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Security Operations:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>• Azure Sentinel</li>
              <li>• Log Analytics</li>
              <li>• Key Vault</li>
              <li>• Security Graph API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vervolgstappen</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Na je AZ-500 certificering, specialiseer je verder met deze expert-level security trainings:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>• SC-200: Security Operations Analyst</div>
            <div>• SC-300: Identity and Access Administrator</div>
            <div>• SC-400: Information Protection Administrator</div>
            <div>• Advanced Azure Security Architecture</div>
          </div>
        </div>
      </section>
    </div>
  );
}