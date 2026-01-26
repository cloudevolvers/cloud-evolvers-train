import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Globe } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-fundamentals',
  slug: 'microsoft-365-fundamentals',
  title: 'Microsoft 365 Fundamentals (MS-900)',
  description: 'Understand Microsoft 365 cloud productivity and collaboration services',
  content: 'Comprehensive overview of Microsoft 365 services, security, compliance, and pricing models.',
  category: 'Microsoft365',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 1, format: 'day' },
  prerequisites: [
    'Basic understanding of cloud computing concepts',
    'Familiarity with productivity applications'
  ],
  learningObjectives: [
    'Describe Microsoft 365 core services and concepts',
    'Explain Microsoft 365 security and compliance capabilities',
    'Describe Microsoft 365 pricing and support'
  ],
  instructor: {
    id: 'm365-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Microsoft 365 Expert'
  },
  price: { amount: 495, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'MS-900', 'Fundamentals', 'Productivity'],
  featured: false,
  certification: { available: true, name: 'MS-900' },
  maxParticipants: 20,
  icon: 'Globe'
};

export default function Microsoft365FundamentalsContent() {
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
          This Microsoft 365 Fundamentals training provides a comprehensive introduction to Microsoft's cloud productivity platform. 
          Learn about the core services, security features, and business value of Microsoft 365 for organizations of all sizes.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          What You'll Learn
        </h3>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Core Services:</span>
              <span className="text-muted-foreground"> Exchange Online, SharePoint, Teams, and OneDrive</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Security & Compliance:</span>
              <span className="text-muted-foreground"> Identity protection, information governance, and compliance features</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Licensing & Pricing:</span>
              <span className="text-muted-foreground"> Subscription models, pricing options, and business value</span>
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
              <div className="text-sm text-muted-foreground font-medium">1 day</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Group Size</div>
              <div className="text-sm text-muted-foreground font-medium">Max 20 participants</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Certification</div>
              <div className="text-sm text-muted-foreground font-medium">MS-900 preparation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Course Modules</h3>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 1: Cloud Concepts and Microsoft 365 Core Services</h4>
            <p className="text-muted-foreground font-medium text-sm">Understanding cloud services and Microsoft 365 productivity applications</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 2: Microsoft 365 Security and Compliance</h4>
            <p className="text-muted-foreground font-medium text-sm">Security features, compliance capabilities, and risk management</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 3: Microsoft 365 Pricing and Support</h4>
            <p className="text-muted-foreground font-medium text-sm">Licensing models, pricing structures, and support options</p>
          </div>
        </div>
      </section>
    </div>
  );
}
