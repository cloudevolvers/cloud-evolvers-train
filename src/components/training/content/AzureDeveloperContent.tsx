import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Code } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-developer',
  slug: 'azure-developer',
  title: 'Azure Developer Associate (AZ-204)',
  description: 'Develop cloud solutions and applications on Microsoft Azure platform',
  content: 'Advanced training covering Azure development, APIs, serverless computing, data storage, and security.',
  category: 'Azure',
  subcategory: 'Development',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: [
    'Programming experience in C#, Java, Python, or Node.js',
    'Azure Fundamentals knowledge',
    'Experience with REST APIs and JSON'
  ],
  learningObjectives: [
    'Develop Azure compute solutions',
    'Develop for Azure storage',
    'Implement Azure security in solutions',
    'Monitor, troubleshoot, and optimize solutions',
    'Connect to and consume Azure services'
  ],
  instructor: {
    id: 'azure-dev-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Azure Development Expert'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Developer', 'AZ-204', 'Programming'],
  featured: true,
  certification: { available: true, name: 'AZ-204' },
  maxParticipants: 10,
  icon: 'Code'
};

export default function AzureDeveloperContent() {
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
          This comprehensive Azure Developer Associate training prepares developers to build, test, and maintain cloud applications 
          and services on Microsoft Azure. Master the skills needed to implement Azure solutions using various programming languages 
          and development tools.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          What You'll Learn
        </h3>
        <p className="text-muted-foreground mb-3">
          Build expertise in Azure development with hands-on experience:
        </p>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Compute Solutions:</span>
              <span className="text-muted-foreground"> Azure Functions, App Services, Container Instances, and AKS</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Storage Development:</span>
              <span className="text-muted-foreground"> Blob storage, Cosmos DB, SQL Database, and caching solutions</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Security Implementation:</span>
              <span className="text-muted-foreground"> Azure AD, Key Vault, Managed Identity, and secure coding practices</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Monitoring & Optimization:</span>
              <span className="text-muted-foreground"> Application Insights, performance tuning, and troubleshooting</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Azure Services Integration:</span>
              <span className="text-muted-foreground"> API Management, Service Bus, Event Grid, and Logic Apps</span>
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
              <div className="text-sm text-muted-foreground font-medium">AZ-204 preparation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Course Modules</h3>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 1: Develop Azure Compute Solutions</h4>
            <p className="text-muted-foreground font-medium text-sm">Azure Functions, App Services, containers, and serverless architectures</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 2: Develop for Azure Storage</h4>
            <p className="text-muted-foreground font-medium text-sm">Blob storage, Cosmos DB, Azure SQL, and data access patterns</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 3: Implement Azure Security</h4>
            <p className="text-muted-foreground font-medium text-sm">Authentication, authorization, Key Vault, and secure coding practices</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 4: Monitor and Optimize Solutions</h4>
            <p className="text-muted-foreground font-medium text-sm">Application Insights, monitoring, logging, and performance optimization</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 5: Connect to Azure Services</h4>
            <p className="text-muted-foreground font-medium text-sm">API Management, messaging services, and event-driven architectures</p>
          </div>
        </div>
      </section>
    </div>
  );
}
