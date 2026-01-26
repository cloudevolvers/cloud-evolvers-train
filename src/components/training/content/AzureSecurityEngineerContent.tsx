import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Shield } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-security-engineer',
  slug: 'azure-security-engineer',
  title: 'Azure Security Engineer Associate (AZ-500)',
  description: 'Implement and manage Azure security controls and threat protection',
  content: 'Comprehensive security training covering identity management, platform protection, data security, and operations.',
  category: 'Security',
  subcategory: 'Azure Security',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: [
    'Azure Administrator or Developer experience',
    'Understanding of security concepts and frameworks',
    'Experience with Azure identity and access management'
  ],
  learningObjectives: [
    'Manage identity and access',
    'Implement platform protection',
    'Secure data and applications',
    'Manage security operations'
  ],
  instructor: {
    id: 'azure-security-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Azure Security Expert'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Security', 'AZ-500', 'Cybersecurity'],
  featured: true,
  certification: { available: true, name: 'AZ-500' },
  maxParticipants: 10,
  icon: 'Shield'
};

export default function AzureSecurityEngineerContent() {
  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Course Overview
          </h2>
        </div>
        <p className="text-foreground leading-relaxed mb-4">
          This intensive Azure Security Engineer Associate training prepares security professionals to implement security controls, 
          maintain security posture, and identify and remediate vulnerabilities in Microsoft Azure environments. 
          Learn to secure Azure workloads with industry best practices.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          What You'll Learn
        </h3>
        <p className="text-muted-foreground mb-3">
          Master Azure security implementation and management:
        </p>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Identity & Access Management:</span>
              <span className="text-muted-foreground"> Azure AD, MFA, Conditional Access, and PIM</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Platform Protection:</span>
              <span className="text-muted-foreground"> Network security, endpoint protection, and container security</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Data & Application Security:</span>
              <span className="text-muted-foreground"> Key Vault, encryption, application security, and secure development</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Security Operations:</span>
              <span className="text-muted-foreground"> Azure Sentinel, Security Center, and incident response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Training Format</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Clock className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Duration</div>
              <div className="text-sm text-muted-foreground font-medium">4 days intensive</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Group Size</div>
              <div className="text-sm text-muted-foreground font-medium">Max 10 participants</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Certification</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-500 preparation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Course Modules</h3>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 1: Manage Identity and Access</h4>
            <p className="text-muted-foreground font-medium text-sm">Azure AD, authentication, authorization, and privileged access management</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 2: Implement Platform Protection</h4>
            <p className="text-muted-foreground font-medium text-sm">Network security, host security, and container protection strategies</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 3: Secure Data and Applications</h4>
            <p className="text-muted-foreground font-medium text-sm">Key management, data classification, and application security controls</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 4: Manage Security Operations</h4>
            <p className="text-muted-foreground font-medium text-sm">SIEM, threat detection, incident response, and compliance management</p>
          </div>
        </div>
      </section>
    </div>
  );
}
