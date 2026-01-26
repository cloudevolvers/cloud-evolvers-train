import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-fundamentals',
  slug: 'azure-fundamentals',
  title: 'Azure Fundamentals (AZ-900)',
  description: 'Build foundational knowledge of Azure cloud services and core concepts',
  content: 'Comprehensive fundamentals training covering Azure core services, security, privacy, compliance, and pricing.',
  category: 'Azure',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic knowledge of computing concepts'],
  learningObjectives: [
    'Describe cloud computing concepts',
    'Describe Azure core services and solutions',
    'Describe Azure security, privacy, compliance, and trust'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Azure Solutions Expert'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Fundamentals', 'Cloud', 'AZ-900'],
  featured: true,
  certification: { available: true, name: 'AZ-900' },
  maxParticipants: 15,
  icon: 'Cloud'
};

export default function AzureFundamentalsContent() {
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
          This comprehensive Azure Fundamentals training provides a solid foundation for understanding Microsoft Azure cloud services. 
          Designed for beginners, this course covers all the essential concepts needed to start working with Azure confidently.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          What You'll Learn
        </h3>
        <p className="text-muted-foreground mb-3">
          During this comprehensive training, you'll gain practical knowledge of:
        </p>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Azure Core Services:</span>
              <span className="text-muted-foreground"> Compute, networking, storage, and databases</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Azure Solutions:</span>
              <span className="text-muted-foreground"> IoT, AI, machine learning, and serverless computing</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Azure Management Tools:</span>
              <span className="text-muted-foreground"> Portal, CLI, PowerShell, and ARM templates</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Security & Compliance:</span>
              <span className="text-muted-foreground"> Identity management, security center, and governance</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Pricing & Support:</span>
              <span className="text-muted-foreground"> Cost management, service level agreements, and support options</span>
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
              <div className="text-sm text-muted-foreground font-medium">2 days intensive</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Group Size</div>
              <div className="text-sm text-muted-foreground font-medium">Max 15 participants</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Certification</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-900 preparation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Course Modules</h3>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 1: Cloud Concepts</h4>
            <p className="text-muted-foreground font-medium text-sm">Understanding cloud computing principles, deployment models, and service types</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 2: Core Azure Services</h4>
            <p className="text-muted-foreground font-medium text-sm">Compute, networking, storage, and database services overview</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 3: Security & Compliance</h4>
            <p className="text-muted-foreground font-medium text-sm">Azure security features, identity management, and compliance frameworks</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 4: Pricing & Support</h4>
            <p className="text-muted-foreground font-medium text-sm">Cost management, pricing models, and Azure support options</p>
          </div>
        </div>
      </section>
    </div>
  );
}
