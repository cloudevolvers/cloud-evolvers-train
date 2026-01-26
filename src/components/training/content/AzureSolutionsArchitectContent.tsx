import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Building } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-solutions-architect',
  slug: 'azure-solutions-architect',
  title: 'Azure Solutions Architect Expert (AZ-305)',
  description: 'Design and architect comprehensive Azure solutions for enterprise workloads',
  content: 'Expert-level training covering Azure architecture design, governance, security, and optimization strategies.',
  category: 'Azure',
  subcategory: 'Architecture',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: [
    'Azure Administrator or Developer Associate certification',
    'Experience with enterprise Azure implementations',
    'Understanding of networking and security concepts'
  ],
  learningObjectives: [
    'Design governance and compute solutions',
    'Design storage and data integration solutions',
    'Design app architecture and authentication',
    'Design network, business continuity, and migration solutions'
  ],
  instructor: {
    id: 'azure-architect-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Azure Solutions Architect Expert'
  },
  price: { amount: 1995, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Architecture', 'AZ-305', 'Expert'],
  featured: true,
  certification: { available: true, name: 'AZ-305' },
  maxParticipants: 8,
  icon: 'Building'
};

export default function AzureSolutionsArchitectContent() {
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
          This advanced Azure Solutions Architect Expert training is designed for experienced professionals who need to design and 
          implement comprehensive Azure solutions. Master the skills to architect secure, scalable, and resilient cloud solutions 
          that meet business and technical requirements.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          What You'll Learn
        </h3>
        <p className="text-muted-foreground mb-3">
          Design enterprise-grade Azure solutions with expert-level skills:
        </p>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Governance Solutions:</span>
              <span className="text-muted-foreground"> Management groups, policies, RBAC, and resource organization</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Compute Architecture:</span>
              <span className="text-muted-foreground"> VM solutions, containers, serverless computing, and HPC</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Storage & Data Integration:</span>
              <span className="text-muted-foreground"> Data lakes, analytics, integration patterns, and hybrid scenarios</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">App Architecture:</span>
              <span className="text-muted-foreground"> Microservices, API management, event-driven architectures</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Network & Security:</span>
              <span className="text-muted-foreground"> Network design, security architecture, and compliance frameworks</span>
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
              <div className="text-sm text-muted-foreground font-medium">Max 8 participants</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold text-foreground">Certification</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-305 preparation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Course Modules</h3>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 1: Design Governance and Compute Solutions</h4>
            <p className="text-muted-foreground font-medium text-sm">Governance strategies, compute architectures, and scalability patterns</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 2: Design Storage and Data Integration Solutions</h4>
            <p className="text-muted-foreground font-medium text-sm">Storage strategies, data integration patterns, and analytics solutions</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 3: Design App Architecture</h4>
            <p className="text-muted-foreground font-medium text-sm">Application patterns, API strategies, and microservices architectures</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 4: Design Authentication and Authorization</h4>
            <p className="text-muted-foreground font-medium text-sm">Identity solutions, access management, and security frameworks</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Module 5: Design Network and Migration Solutions</h4>
            <p className="text-muted-foreground font-medium text-sm">Network architecture, migration strategies, and business continuity</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-3">Architecture Case Studies</h3>
        <div className="p-6 bg-card border border-border rounded-lg">
          <p className="text-muted-foreground text-sm mb-3">
            Real-world architecture scenarios including:
          </p>
          <ul className="text-muted-foreground font-medium text-sm space-y-1">
            <li>• Enterprise cloud migration strategies</li>
            <li>• Multi-region disaster recovery architectures</li>
            <li>• Hybrid identity and connectivity solutions</li>
            <li>• Microservices and containerization patterns</li>
            <li>• Cost optimization and governance frameworks</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
