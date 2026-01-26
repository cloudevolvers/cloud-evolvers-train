import React from 'react';
import { CheckCircle, Network, Shield, Globe, Target, BookOpen, Award, Users, Router } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-network-engineer',
  slug: 'azure-network-engineer',
  title: 'Azure Network Engineer Associate (AZ-700)',
  description: 'Master Azure networking with advanced infrastructure and connectivity solutions',
  content: 'Advanced networking training covering virtual networks, hybrid connectivity, and network security.',
  category: 'Azure',
  subcategory: 'Networking',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-104 or equivalent networking experience'],
  learningObjectives: [
    'Design and implement hybrid networking',
    'Design and implement Azure ExpressRoute',
    'Design and implement network monitoring'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Networking', 'AZ-700', 'Infrastructure'],
  featured: false,
  certification: { available: true, name: 'AZ-700' },
  maxParticipants: 10
};

export default function AzureNetworkEngineerContent() {
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
          Master Azure networking with this comprehensive training covering enterprise-scale network design, implementation, 
          and optimization. Learn to build secure, scalable, and high-performance network infrastructures in Azure.
        </p>
      </section>

      {/* Core Networking Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Core Networking Skills
        </h3>
        
        <div className="space-y-4">
          {/* Virtual Network Design */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Network className="h-4 w-4 text-blue-600" />
              Virtual Network Design
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VNet Architecture:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hub-and-spoke and mesh topologies</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Subnet Planning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Address space design and CIDR allocation</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VNet Peering:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Regional and global connectivity</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">DNS Configuration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure DNS and custom DNS solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Load Balancing & Traffic Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Router className="h-4 w-4 text-green-600" />
              Load Balancing & Traffic Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Load Balancer:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Layer 4 load balancing and health probes</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Application Gateway:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Layer 7 load balancing and WAF</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Traffic Manager:</span>
                  <span className="text-slate-700 dark:text-slate-300"> DNS-based global load balancing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Front Door:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Global application delivery platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Network Security */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-600" />
              Network Security
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Network Security Groups and Application Security Groups</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Firewall and third-party network virtual appliances</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">DDoS Protection Standard and attack mitigation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Private endpoints and service endpoints</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Connectivity */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Globe className="h-4 w-4 text-orange-600" />
          Hybrid Connectivity
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Master enterprise hybrid connectivity scenarios:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Site-to-Site VPN Gateway configuration and management</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">ExpressRoute private connectivity and peering</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Point-to-Site VPN for remote user access</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Virtual WAN for large-scale connectivity</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">BGP routing and custom route tables</span>
          </div>
        </div>
      </section>

      {/* Hands-on Projects */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Hands-on Network Projects</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Build real-world network architectures:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Design enterprise hub-and-spoke network topology</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Implement multi-region disaster recovery networking</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Configure ExpressRoute with redundancy and failover</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Set up comprehensive network monitoring and alerting</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Optimize network performance and troubleshoot issues</span>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-600" />
          Who Should Attend
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Network engineers with traditional networking experience</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Azure administrators expanding into networking</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Solutions architects designing network infrastructure</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">IT professionals preparing for AZ-700 certification</span>
          </div>
        </div>
      </section>

      {/* Certification Path */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-amber-600" />
          Certification Path
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          This training prepares you for the <span className="font-semibold text-slate-900 dark:text-slate-100">AZ-700 Azure Network Engineer Associate</span> certification exam.
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Comprehensive coverage of all exam objectives</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Real-world labs matching exam scenarios</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Practice questions and exam preparation materials</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Expert guidance on networking best practices</span>
          </div>
        </div>
      </section>
    </div>
  );
}
