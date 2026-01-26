"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, TestTube, Monitor, Zap, FileText, CheckCircle, Chrome, Terminal } from 'lucide-react';
import Link from 'next/link';

interface TestCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  testCount: number;
  status: "Active" | "Stable" | "Development";
}

const PlaywrightTestingFrameworkPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'execution'>('overview');

  const testCategories: TestCategory[] = [
    {
      id: 'marketing-screenshots',
      name: 'Marketing Screenshots',
      description: 'Automated high-quality screenshots at multiple resolutions (720p, 1080p, 1440p) for marketing materials.',
      icon: Monitor,
      testCount: 25,
      status: 'Active'
    },
    {
      id: 'functional-testing',
      name: 'Functional E2E Testing',
      description: 'Comprehensive end-to-end testing covering user flows, authentication, and feature integration.',
      icon: TestTube,
      testCount: 50,
      status: 'Active'
    },
    {
      id: 'file-management',
      name: 'File Management Tests',
      description: 'Specialized test suite for Azure file transfer, connection management, and storage integration.',
      icon: FileText,
      testCount: 35,
      status: 'Stable'
    },
    {
      id: 'admin-panel',
      name: 'Admin Panel Testing',
      description: 'Authentication-protected admin functionality testing with role-based access validation.',
      icon: CheckCircle,
      testCount: 20,
      status: 'Active'
    }
  ];

  const architectureFeatures = [
    {
      category: "Test Organization",
      features: [
        "Dynamic test discovery from file structure",
        "Category-based test organization (functional, marketing, debug)",
        "Independent test execution with proper cleanup",
        "Parallel execution support for faster feedback",
        "Environment-aware configuration management"
      ]
    },
    {
      category: "Authentication & State Management",
      features: [
        "Persistent authentication state storage",
        "Local and SSO authentication strategies",
        "Session management with automatic refresh",
        "Role-based test execution (admin/user)",
        "Cross-test state isolation"
      ]
    },
    {
      category: "Infrastructure & Reporting",
      features: [
        "Chrome-only execution for consistency",
        "Random port allocation (3700-3999) to avoid conflicts",
        "Timestamped reports with automatic cleanup",
        "HTML, JSON, and CSV report generation",
        "VS Code Simple Browser integration for WSL"
      ]
    }
  ];

  const testingFeatures = [
    {
      title: "Dynamic Test Discovery",
      description: "Automatically discovers and categorizes tests based on file structure",
      details: [
        "Scans playwright-v2/tests/ directory recursively",
        "Supports marketing/, functional/, debug/, setup/ categories",
        "Generates npm scripts dynamically for all test files",
        "Interactive test selection with category filtering",
        "Real-time test inventory updates"
      ]
    },
    {
      title: "Advanced Screenshot Generation",
      description: "Professional-grade screenshot capture for marketing and documentation",
      details: [
        "Multi-resolution capture: 720p, 1080p, 1440p",
        "Consolidated timestamp storage system",
        "Full-page screenshots with proper authentication",
        "Automatic cleanup maintaining 20 most recent sessions",
        "Symlink to latest screenshots for easy access"
      ]
    },
    {
      title: "Comprehensive Authentication Testing",
      description: "Multiple authentication strategies with session persistence",
      details: [
        "Local admin authentication (admin/q credentials)",
        "Azure AD SSO integration testing",
        "Stored authentication state between test runs",
        "Authentication debugging with detailed logs",
        "Break-glass authentication for emergency access"
      ]
    }
  ];

  const executionModes = [
    {
      mode: "Interactive Mode",
      command: "npm run playwright",
      description: "Dynamic test selection with category-based filtering",
      features: [
        "Real-time test discovery",
        "Category selection (marketing, functional, debug)",
        "Individual test selection",
        "Browser mode selection (headless/headed/debug)",
        "Live progress monitoring"
      ]
    },
    {
      mode: "Category-Specific",
      command: "npm run playwright:functional",
      description: "Run all tests in a specific category",
      features: [
        "Functional E2E tests",
        "Marketing screenshot generation",
        "Debug and troubleshooting tests",
        "Setup and configuration tests",
        "Parallel execution within category"
      ]
    },
    {
      mode: "Feature-Specific",
      command: "npm run playwright:login",
      description: "Target specific functionality or feature",
      features: [
        "Login authentication flows",
        "Admin panel functionality",
        "File transfer operations",
        "API dashboard features",
        "User management workflows"
      ]
    }
  ];

  const technicalDetails = [
    {
      component: "Test Framework Architecture",
      specifications: [
        "Chrome Desktop only - ensures consistent rendering",
        "TypeScript-based test development with full type safety",
        "Page Object Model pattern for maintainable tests",
        "Fixture-based setup and teardown for test isolation",
        "Custom utilities for authentication and navigation"
      ]
    },
    {
      component: "Reporting and Artifacts",
      specifications: [
        "HTML reports with interactive test explorer",
        "JSON reports for CI/CD integration",
        "CSV exports for data analysis",
        "Screenshot evidence for test verification",
        "Trace files for debugging failed tests"
      ]
    },
    {
      component: "Environment Integration",
      specifications: [
        "Dynamic port detection and allocation",
        "Environment variable management",
        "URL resolution for different deployment scenarios",
        "WSL compatibility with VS Code Simple Browser",
        "CI/CD pipeline integration ready"
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
              <Badge variant="secondary">Playwright V2</Badge>
              <Badge variant="outline">Chrome Only</Badge>
              <Badge variant="outline">Dynamic Discovery</Badge>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <TestTube className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Playwright V2 Testing Framework
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                Advanced E2E testing platform with dynamic discovery, multi-resolution screenshots, and comprehensive authentication testing
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="https://github.com/xevolve-ai/xevolve-app/tree/main/playwright-v2" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/xevolve-ai/xevolve-app/blob/main/playwright-v2/README.md" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Documentation
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
              { id: 'execution', label: 'Execution' }
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
            {/* Test Categories Grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Test Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testCategories.map((category) => (
                  <Card key={category.id} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <category.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant={category.status === 'Active' ? 'default' : 'secondary'}>
                              {category.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {category.testCount} tests
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Testing Framework Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">130+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Total Test Cases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Screenshot Resolutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Auto</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Test Discovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">100%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Chrome Compatibility</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Framework Architecture</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {architectureFeatures.map((category, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Architecture */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Chrome className="h-5 w-5" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalDetails.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{section.component}</h4>
                      <div className="grid gap-2">
                        {section.specifications.map((spec, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{spec}</span>
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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Advanced Testing Features</h2>
              <div className="space-y-6">
                {testingFeatures.map((feature, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Directory Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Test Organization Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono">
{`playwright-v2/
├── tests/
│   ├── functional/          # E2E feature tests
│   │   ├── admin-panel.spec.ts
│   │   ├── user-profile.spec.ts
│   │   └── file/           # File management tests
│   │       ├── file-navigation.spec.ts
│   │       ├── connection-management.spec.ts
│   │       └── azure-integration.spec.ts
│   ├── marketing-v2/       # Screenshot generation
│   │   ├── admin-panel.spec.ts
│   │   ├── api-dashboard.spec.ts
│   │   └── sso-auth.spec.ts
│   ├── debug/              # Debugging utilities
│   └── setup/              # Setup and configuration
├── utils/                  # Shared utilities
│   ├── auth-utils.ts
│   ├── navigation-utils.ts
│   └── screenshot-utils.ts
├── config/                 # Configuration files
│   └── playwright.config.ts
└── scripts/                # Execution scripts
    └── run-interactive.ts`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'execution' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Execution Modes</h2>
              <div className="space-y-6">
                {executionModes.map((mode, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{mode.mode}</CardTitle>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{mode.description}</p>
                        </div>
                        <Badge variant="outline">
                          <Terminal className="h-3 w-3 mr-1" />
                          {mode.command}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {mode.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Command Reference */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Command Reference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <h4 className="font-semibold text-sm">Primary Commands</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                        <code className="font-mono text-blue-600 dark:text-blue-400 min-w-0">npm run playwright</code>
                        <span className="text-slate-600 dark:text-slate-300">Interactive test selection</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                        <code className="font-mono text-blue-600 dark:text-blue-400 min-w-0">npm run marketing</code>
                        <span className="text-slate-600 dark:text-slate-300">Generate marketing screenshots</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                        <code className="font-mono text-blue-600 dark:text-blue-400 min-w-0">npm run functional</code>
                        <span className="text-slate-600 dark:text-slate-300">Run functional E2E tests</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <h4 className="font-semibold text-sm">Management Commands</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                        <code className="font-mono text-green-600 dark:text-green-400 min-w-0">npm run playwright:cleanup</code>
                        <span className="text-slate-600 dark:text-slate-300">Clean old reports (keeps 20 latest)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                        <code className="font-mono text-green-600 dark:text-green-400 min-w-0">npm run playwright:reports</code>
                        <span className="text-slate-600 dark:text-slate-300">List all available reports</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                        <code className="font-mono text-green-600 dark:text-green-400 min-w-0">npm run playwright:open-report</code>
                        <span className="text-slate-600 dark:text-slate-300">Open latest HTML report</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Structure */}
            <Card>
              <CardHeader>
                <CardTitle>Report and Artifact Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono">
{`.local/reports/playwright/DD-MM-YYYY_HH-MM-SS/
├── html-report/            # Interactive HTML report
├── json-report/            # Machine-readable results
├── marketing-screenshots/  # High-resolution captures
│   ├── admin_dashboard_720p.png
│   ├── admin_dashboard_1080p.png
│   └── admin_dashboard_1440p.png
├── test-results/          # Individual test artifacts
└── traces/                # Debug traces for failed tests`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaywrightTestingFrameworkPage;
