import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Zap } from 'lucide-react';

export const trainingMetadata = {
  id: 'power-platform-fundamentals',
  slug: 'power-platform-fundamentals',
  title: 'Power Platform Fundamentals (PL-900)',
  description: 'Learn to build business applications with Microsoft Power Platform',
  content: 'Introduction to Power Apps, Power BI, Power Automate, and Power Virtual Agents for citizen development.',
  category: 'PowerPlatform',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: [
    'Basic understanding of business processes',
    'Familiarity with Microsoft 365 applications'
  ],
  learningObjectives: [
    'Describe the business value of Power Platform',
    'Identify core components of Power Platform',
    'Create basic Power Apps applications',
    'Build automated flows with Power Automate'
  ],
  instructor: {
    id: 'power-platform-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Power Platform Expert'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Power Platform', 'PL-900', 'Low-Code', 'Automation'],
  featured: false,
  certification: { available: true, name: 'PL-900' },
  maxParticipants: 15,
  icon: 'Zap'
};

export default function PowerPlatformFundamentalsContent() {
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
          This Power Platform Fundamentals training introduces the low-code/no-code approach to building business solutions. 
          Learn how to leverage Power Apps, Power BI, Power Automate, and Power Virtual Agents to create powerful business 
          applications without traditional programming.
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
              <span className="font-semibold text-foreground">Power Apps:</span>
              <span className="text-muted-foreground"> Canvas and model-driven app development, data connections</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Power BI:</span>
              <span className="text-muted-foreground"> Data visualization, dashboards, and business intelligence</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Power Automate:</span>
              <span className="text-muted-foreground"> Workflow automation, business process automation</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Power Virtual Agents:</span>
              <span className="text-muted-foreground"> Chatbot creation and conversational AI solutions</span>
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
              <div className="text-sm text-muted-foreground font-medium">2 days</div>
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
              <div className="text-sm text-muted-foreground font-medium">PL-900 preparation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Course Modules</h3>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 1: Introduction to Power Platform</h4>
            <p className="text-muted-foreground font-medium text-sm">Business value, components overview, and citizen development concepts</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 2: Power BI Fundamentals</h4>
            <p className="text-muted-foreground font-medium text-sm">Data visualization, report creation, and dashboard development</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 3: Power Apps Development</h4>
            <p className="text-muted-foreground font-medium text-sm">Canvas apps, model-driven apps, and data integration</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 4: Power Automate and Virtual Agents</h4>
            <p className="text-muted-foreground font-medium text-sm">Workflow automation and chatbot development</p>
          </div>
        </div>
      </section>
    </div>
  );
}
