"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, BarChart3, Database, Monitor, Zap, Code, Users, Settings, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  icon: any;
  title: string;
  description: string;
  techDetails: string;
}

export default function ApiDashboardPlatformPage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'implementation'>('overview');

  const features: Feature[] = [
    {
      icon: Database,
      title: "Azure Monitor Integration",
      description: "Native Azure SDK integration with KQL queries for real-time API analytics",
      techDetails: "Uses @azure/monitor-query with ClientSecretCredential and ManagedIdentityCredential"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time status distribution, response time trends, and slowest API identification",
      techDetails: "Parallel KQL execution reduces load time by 50%, sub-50ms stats loading"
    },
    {
      icon: Monitor,
      title: "Health Check System",
      description: "Automated health monitoring with detailed diagnostics and response body analysis",
      techDetails: "HTTP, ping, and Azure Resource Health monitoring with fallback strategies"
    },
    {
      icon: Zap,
      title: "Optimized Loading",
      description: "Fast initial load with background data fetching and intelligent caching",
      techDetails: "80% faster perceived load time with independent parallel loading"
    }
  ];

  const techStack = [
    { name: "Next.js 15", purpose: "App Router with server components" },
    { name: "Azure SDK", purpose: "Native Azure Monitor integration" },
    { name: "KQL", purpose: "Log Analytics queries" },
    { name: "TypeScript", purpose: "Type-safe development" },
    { name: "Tailwind CSS", purpose: "Responsive styling" },
    { name: "Recharts", purpose: "Data visualization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="relative container mx-auto px-6 py-12">
          <Link href="/showcase" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Showcase
          </Link>
          
          <div className="flex gap-3 mb-4">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Platform Engineering
            </Badge>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              Azure Native
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Real-time Analytics
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time API Dashboard
            <span className="text-blue-400"> Platform</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 max-w-3xl">
            Production-ready Azure Monitor integration with KQL queries, real-time health checks, 
            and comprehensive performance analytics. Built from the ground up with enterprise scalability in mind.
          </p>
          
          <div className="flex gap-3">
            <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
              <Github className="h-4 w-4 mr-2" />
              View Source Code
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Database className="h-8 w-8 text-blue-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">Real-time</div>
                  <div className="text-sm text-gray-400">Azure Monitor</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">KQL Integration</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-green-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">50ms</div>
                  <div className="text-sm text-gray-400">Load time</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Performance</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Monitor className="h-8 w-8 text-purple-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Monitoring</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Health Checks</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-orange-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">Native</div>
                  <div className="text-sm text-gray-400">Azure SDK</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Integration</h3>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <Button 
            variant={currentView === 'overview' ? 'default' : 'outline'}
            onClick={() => setCurrentView('overview')}
            className={currentView === 'overview' ? 'bg-blue-600' : ''}
          >
            Platform Overview
          </Button>
          <Button 
            variant={currentView === 'technical' ? 'default' : 'outline'}
            onClick={() => setCurrentView('technical')}
            className={currentView === 'technical' ? 'bg-blue-600' : ''}
          >
            Technical Architecture
          </Button>
          <Button 
            variant={currentView === 'implementation' ? 'default' : 'outline'}
            onClick={() => setCurrentView('implementation')}
            className={currentView === 'implementation' ? 'bg-blue-600' : ''}
          >
            Implementation Details
          </Button>
        </div>

        {/* Overview Content */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            {/* Platform Features */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Core Platform Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-8 w-8 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                        <p className="text-blue-300 text-xs font-mono">{feature.techDetails}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Demo Preview */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Live Dashboard Preview</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Live Data</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Total APIs</div>
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-xs text-green-400">All operational</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Avg Response</div>
                    <div className="text-2xl font-bold text-white">124ms</div>
                    <div className="text-xs text-blue-400">Within SLA</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                    <div className="text-2xl font-bold text-white">99.8%</div>
                    <div className="text-xs text-green-400">Target: 99.5%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Technical Content */}
        {currentView === 'technical' && (
          <div className="space-y-8">
            {/* Architecture Overview */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Technical Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-4">Backend Architecture</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <Code className="h-4 w-4 text-green-400 mt-1" />
                        Next.js 15 API routes with App Router
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-4 w-4 text-green-400 mt-1" />
                        Azure Monitor LogsQueryClient integration
                      </li>
                      <li className="flex items-start gap-2">
                        <Settings className="h-4 w-4 text-green-400 mt-1" />
                        Dynamic API configuration management
                      </li>
                      <li className="flex items-start gap-2">
                        <Monitor className="h-4 w-4 text-green-400 mt-1" />
                        Real-time health check orchestration
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-4">Frontend Features</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400 mt-1" />
                        Real-time data visualization with Recharts
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-green-400 mt-1" />
                        Optimized loading with parallel data fetching
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 text-green-400 mt-1" />
                        TypeScript for enterprise-grade reliability
                      </li>
                      <li className="flex items-start gap-2">
                        <Monitor className="h-4 w-4 text-green-400 mt-1" />
                        Dark theme with responsive design
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-4">
                      <div className="font-semibold text-blue-300 mb-1">{tech.name}</div>
                      <div className="text-sm text-gray-400">{tech.purpose}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Implementation Content */}
        {currentView === 'implementation' && (
          <div className="space-y-8">
            {/* Code Examples */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Key Implementation Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-3">Azure Monitor Integration</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-green-400">// Azure SDK setup with credentials</div>
                    <div>const credential = NODE_ENV === 'production'</div>
                    <div>  ? new ManagedIdentityCredential(UAMI_CLIENT_ID)</div>
                    <div>  : new ClientSecretCredential(SPN_TENANT_ID, SPN_CLIENT_ID, SPN_SECRET);</div>
                    <div className="mt-2 text-green-400">// Parallel KQL execution for performance</div>
                    <div>const [overallStats, detailedStats] = await Promise.all([</div>
                    <div>  client.queryWorkspace(WORKSPACE_ID, overallQuery, options),</div>
                    <div>  client.queryWorkspace(WORKSPACE_ID, detailedQuery, options)</div>
                    <div>]);</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-3">Real-time Health Monitoring</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-green-400">// Multi-protocol health checks</div>
                    <div>const healthCheck = await Promise.allSettled([</div>
                    <div>  httpHealthCheck(api.healthUrl),</div>
                    <div>  pingHealthCheck(api.hostname),</div>
                    <div>  azureResourceHealthCheck(api.resourceId)</div>
                    <div>]);</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-3">Performance Optimization</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Reduced initial load time by 80% with optimized data fetching</li>
                    <li>• Implemented background loading for non-critical data</li>
                    <li>• Added intelligent caching for API configurations</li>
                    <li>• Parallel KQL query execution for 50% faster stats loading</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* File Structure */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Project Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div>src/app/api-dashboard/</div>
                  <div>├── components/</div>
                  <div>│   ├── ApiTable.tsx</div>
                  <div>│   ├── StatusCharts.tsx</div>
                  <div>│   └── InfraPanel.tsx</div>
                  <div>├── hooks/</div>
                  <div>│   └── useApiDashboard.ts</div>
                  <div>├── services/</div>
                  <div>│   ├── api-service.ts</div>
                  <div>│   └── stats-service.ts</div>
                  <div>└── utils/</div>
                  <div>    ├── logger.ts</div>
                  <div>    └── timeRangeParser.ts</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 border-blue-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Enterprise-Grade Monitoring?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our API Dashboard platform demonstrates production-ready Azure integration 
              with real-time monitoring capabilities. Built for enterprise scale and reliability.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Explore Live Demo
              </Button>
              <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
