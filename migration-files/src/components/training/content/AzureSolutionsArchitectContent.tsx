import React from 'react';
import { CheckCircle, Shield, Building, Layers, Target, BookOpen, Award, Users, Clock, Zap, Database } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-solutions-architect',
  slug: 'azure-solutions-architect',
  title: 'Azure Solutions Architect Expert (AZ-305)',
  description: 'Design and implement solutions that run on Microsoft Azure',
  content: 'Advanced Azure architecture training covering design patterns, security, and scalability.',
  category: 'Azure',
  subcategory: 'Architecture',
  difficulty: 'Advanced' as const,
  duration: { days: 5, format: 'days' },
  prerequisites: ['AZ-104 certification', 'Experience with Azure services', 'Understanding of networking and security'],
  learningObjectives: [
    'Design monitoring and logging solutions',
    'Design authentication and authorization solutions', 
    'Design governance and compliance solutions',
    'Design solutions for backup and disaster recovery',
    'Design for high availability and scalability'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1995, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Architecture', 'Expert', 'AZ-305'],
  featured: true,
  certification: { available: true, name: 'AZ-305' },
  maxParticipants: 8
};

export default function AzureSolutionsArchitectContent() {
  return (
    <div className="space-y-6">
      {/* Course Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Course Overview
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Transform into an Azure Solutions Architect! This advanced 5-day program teaches you to design enterprise-grade 
          Azure solutions that scale, perform, and secure mission-critical workloads. Prepare for the AZ-305 certification 
          while mastering advanced architecture patterns.
        </p>
      </section>

      {/* Architecture Mastery */}
      <section>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
            <Building className="h-5 w-5" />
            Architecture Mastery
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Enterprise-scale solution design and implementation</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">High availability and disaster recovery architecture</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Cost optimization and governance at scale</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Security and compliance by design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architecture Domains */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Core Architecture Domains
        </h3>
        
        <div className="space-y-6">
          {/* Identity, Governance, and Monitoring */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Design Identity, Governance, and Monitoring Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Enterprise Identity Architecture:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hybrid identity, B2B, B2C scenarios</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Governance Frameworks:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Resource organization, policy enforcement</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Monitoring Strategies:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Comprehensive observability design</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Cost Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Enterprise cost optimization and governance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Compliance Architecture:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Meeting regulatory requirements at scale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Storage Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Database className="h-4 w-4 text-green-600" />
              Design Data Storage Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Storage Architecture Patterns:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Choosing optimal storage solutions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Database Solutions:</span>
                  <span className="text-slate-700 dark:text-slate-300"> SQL, NoSQL, and hybrid database architectures</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Integration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> ETL/ELT pipelines and real-time processing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Security:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Encryption, access control, and data governance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Backup and Recovery:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Enterprise data protection strategies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Continuity Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-orange-600" />
              Design Business Continuity Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">High Availability Design:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-region and multi-zone architectures</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Disaster Recovery Planning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> RTO/RPO requirements and solutions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Backup Strategies:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Comprehensive backup and restore architectures</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Site Recovery:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Cross-region replication and failover</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Business Impact Analysis:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Risk assessment and mitigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Architecture Projects */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Real-World Architecture Projects</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="text-blue-900 dark:text-blue-200 font-semibold mb-3 flex items-center gap-2">
              <Building className="h-4 w-4" />
              Global E-Commerce Platform
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-medium text-blue-800 dark:text-blue-300 text-sm">Scale:</span>
                <span className="text-blue-700 dark:text-blue-400 text-sm">50M+ users, 99.99% uptime</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-blue-800 dark:text-blue-300 text-sm">Architecture:</span>
                <span className="text-blue-700 dark:text-blue-400 text-sm">Multi-region, auto-scaling, CDN</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-blue-800 dark:text-blue-300 text-sm">Security:</span>
                <span className="text-blue-700 dark:text-blue-400 text-sm">PCI DSS compliance, fraud detection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-blue-800 dark:text-blue-300 text-sm">Performance:</span>
                <span className="text-blue-700 dark:text-blue-400 text-sm">Sub-second response times</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="text-green-900 dark:text-green-200 font-semibold mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Healthcare Data Platform
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-medium text-green-800 dark:text-green-300 text-sm">Compliance:</span>
                <span className="text-green-700 dark:text-green-400 text-sm">HIPAA, real-time processing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-green-800 dark:text-green-300 text-sm">Architecture:</span>
                <span className="text-green-700 dark:text-green-400 text-sm">Event-driven, microservices</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-green-800 dark:text-green-300 text-sm">Security:</span>
                <span className="text-green-700 dark:text-green-400 text-sm">Zero Trust, data encryption</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-green-800 dark:text-green-300 text-sm">Integration:</span>
                <span className="text-green-700 dark:text-green-400 text-sm">Legacy systems, IoT devices</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h4 className="text-yellow-900 dark:text-yellow-200 font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Financial Services Platform
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-medium text-yellow-800 dark:text-yellow-300 text-sm">Requirements:</span>
                <span className="text-yellow-700 dark:text-yellow-400 text-sm">Regulatory compliance, low latency</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-yellow-800 dark:text-yellow-300 text-sm">Architecture:</span>
                <span className="text-yellow-700 dark:text-yellow-400 text-sm">Hybrid cloud, disaster recovery</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-yellow-800 dark:text-yellow-300 text-sm">Security:</span>
                <span className="text-yellow-700 dark:text-yellow-400 text-sm">Advanced threat protection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-yellow-800 dark:text-yellow-300 text-sm">Performance:</span>
                <span className="text-yellow-700 dark:text-yellow-400 text-sm">Millisecond trading systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Training Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Award className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">AZ-305 Certification:</span>
                <span className="text-slate-700 dark:text-slate-300"> Prepare for Azure Solutions Architect Expert</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Expert Instruction:</span>
                <span className="text-slate-700 dark:text-slate-300"> Learn from Microsoft Certified Trainers</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Intensive Program:</span>
                <span className="text-slate-700 dark:text-slate-300"> 5 days of comprehensive architecture training</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Building className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Real-World Projects:</span>
                <span className="text-slate-700 dark:text-slate-300"> Work on enterprise architecture scenarios</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Architecture Patterns:</span>
                <span className="text-slate-700 dark:text-slate-300"> Master proven design patterns and best practices</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Security Focus:</span>
                <span className="text-slate-700 dark:text-slate-300"> Zero Trust and enterprise security architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
