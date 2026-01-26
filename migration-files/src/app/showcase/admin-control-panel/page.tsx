"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Shield, Users, Settings, Database, Monitor, Lock, Terminal } from 'lucide-react';
import Link from 'next/link';

interface AdminFeature {
  id: string;
  name: string;
  description: string;
  icon: any;
  status: "Active" | "Development" | "Planned";
  techStack: string[];
}

const AdminControlPanelPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'security'>('overview');

  const adminFeatures: AdminFeature[] = [
    {
      id: 'user-management',
      name: 'User Management System',
      description: 'Complete user lifecycle management with role-based access control, authentication providers, and audit logging.',
      icon: Users,
      status: 'Active',
      techStack: ['NextAuth.js', 'Azure AD', 'TypeScript', 'Role-based permissions']
    },
    {
      id: 'api-config',
      name: 'API Configuration Manager',
      description: 'Dynamic API monitoring configuration with auto-generation from Azure APIM and manual override capabilities.',
      icon: Settings,
      status: 'Active',
      techStack: ['Next.js API Routes', 'Azure SDK', 'JSON Schema', 'Version control']
    },
    {
      id: 'environment-control',
      name: 'Environment Configuration',
      description: 'Production-grade environment variable management with validation and secure storage.',
      icon: Database,
      status: 'Active',
      techStack: ['Environment validation', 'Secure storage', 'Configuration versioning']
    },
    {
      id: 'feature-toggles',
      name: 'Global Feature Toggle System',
      description: 'Real-time feature flag management for controlling application functionality across all users.',
      icon: Monitor,
      status: 'Active',
      techStack: ['Real-time updates', 'User preferences', 'Global settings', 'Admin control']
    }
  ];

  const architectureComponents = [
    {
      category: "Authentication & Authorization",
      components: [
        "NextAuth.js with Azure AD integration",
        "Deterministic user ID generation (email-based)",
        "Role-based access control (admin/user)",
        "Session management with JWT tokens",
        "Multi-provider authentication support"
      ]
    },
    {
      category: "Configuration Management",
      components: [
        "Dynamic API configuration auto-generation",
        "Environment variable validation system",
        "Configuration versioning with timestamps",
        "Rollback capabilities for configurations",
        "JSON schema-based validation"
      ]
    },
    {
      category: "Security Implementation",
      components: [
        "Production/development mode detection",
        "Secure cookie handling (HttpOnly, SameSite)",
        "CSRF protection with middleware",
        "Admin-only endpoint protection",
        "Audit logging for sensitive operations"
      ]
    }
  ];

  const securityFeatures = [
    {
      title: "Authentication Security",
      features: [
        "Azure AD SSO integration with enterprise directory",
        "Deterministic user ID generation preventing identity conflicts",
        "Session token validation with automatic refresh",
        "Multi-factor authentication support via Azure AD",
        "Break-glass admin credentials for emergency access"
      ]
    },
    {
      title: "Authorization Controls",
      features: [
        "Role-based access control with admin/user separation",
        "Endpoint-level permission validation",
        "Dynamic feature toggle permissions",
        "Resource-level access controls",
        "Audit trail for all admin actions"
      ]
    },
    {
      title: "Production Security",
      features: [
        "Environment-aware security settings",
        "Secure cookie configuration for HTTPS",
        "CORS protection with dynamic origins",
        "Rate limiting on sensitive endpoints",
        "Security headers and CSP implementation"
      ]
    }
  ];

  const implementationDetails = [
    {
      component: "User Management API",
      endpoints: [
        "GET /api/users - List all users with pagination",
        "POST /api/users - Create new user with validation",
        "PUT /api/users/[id] - Update user profile and roles",
        "DELETE /api/users/[id] - Safe user deletion with cleanup",
        "GET /api/users/[id]/logs - User activity audit logs"
      ]
    },
    {
      component: "Configuration Management",
      endpoints: [
        "GET /api/admin/config - Retrieve current configuration",
        "POST /api/admin/config - Update configuration with validation",
        "GET /api/admin/config/versions - List configuration history",
        "POST /api/admin/config/rollback - Rollback to previous version",
        "GET /api/admin/env - Environment variable management"
      ]
    },
    {
      component: "Feature Toggle System",
      endpoints: [
        "GET /api/admin/features - Global feature settings",
        "POST /api/admin/features - Update feature flags",
        "GET /api/users/[id]/preferences - User preferences",
        "POST /api/users/[id]/preferences - Update user settings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/showcase">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Showcase
              </Button>
            </Link>
            <div className="flex gap-2">
              <Badge variant="secondary">Enterprise Admin</Badge>
              <Badge variant="outline">Next.js 15</Badge>
              <Badge variant="outline">TypeScript</Badge>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Unified Admin Control Panel
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                Enterprise-grade administration system with user management, configuration control, and security oversight
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="https://github.com/xevolve-ai/xevolve-app/tree/main/src/app/admin" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/admin" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'features', label: 'Features' },
              { id: 'security', label: 'Security' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Admin Features Grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Core Administration Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {adminFeatures.map((feature) => (
                  <Card key={feature.id} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.name}</CardTitle>
                          <Badge 
                            variant={feature.status === 'Active' ? 'default' : 'secondary'}
                            className="mt-1"
                          >
                            {feature.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.techStack.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Administration Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">100%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">User Lifecycle Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">Real-time</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Configuration Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">15+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Admin API Endpoints</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Audit Logging</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">System Architecture</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {architectureComponents.map((category, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.components.map((component, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Implementation Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  API Implementation Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {implementationDetails.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{section.component}</h4>
                      <div className="grid gap-2">
                        {section.endpoints.map((endpoint, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded">
                            <code className="text-xs font-mono text-blue-600 dark:text-blue-400 flex-shrink-0">
                              {endpoint.split(' ')[0]}
                            </code>
                            <span className="text-sm text-slate-600 dark:text-slate-300">
                              {endpoint.split(' ').slice(1).join(' ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Administrative Features</h2>
              
              {/* User Management */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Management System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">User Operations</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-sm">Create users with role assignment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-sm">Password reset and management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-sm">Real-time user status updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-sm">Bulk user operations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Audit & Security</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-sm">Login activity tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-sm">Role change audit logs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-sm">Session management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-sm">Storage usage monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Configuration Management */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Configuration Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">API Configuration</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-sm">Auto-generation from Azure APIM</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-sm">Manual configuration overrides</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-sm">Health URL customization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-sm">Configuration validation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Environment Control</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-sm">Environment variable management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-sm">Configuration versioning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-sm">Rollback capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-sm">Secure credential storage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Security Implementation</h2>
              <div className="grid gap-6">
                {securityFeatures.map((category, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="h-5 w-5" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Security Technical Details */}
            <Card>
              <CardHeader>
                <CardTitle>Security Technical Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Authentication Flow</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-blue-600 dark:text-blue-400">1. Azure AD SSO</code>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">Enterprise directory integration</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-blue-600 dark:text-blue-400">2. Token Validation</code>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">JWT verification with NextAuth.js</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-blue-600 dark:text-blue-400">3. Role Assignment</code>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">Dynamic role-based permissions</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Production Security</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-green-600 dark:text-green-400">Secure Cookies</code>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">HttpOnly, SameSite, Secure flags</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-green-600 dark:text-green-400">CSRF Protection</code>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">Middleware-based request validation</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-green-600 dark:text-green-400">Audit Logging</code>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">Complete action traceability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminControlPanelPage;
