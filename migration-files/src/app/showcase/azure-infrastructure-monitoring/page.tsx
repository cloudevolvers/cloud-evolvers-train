"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Activity, BarChart3, TrendingUp, AlertTriangle, CloudIcon, Database, Search, Zap } from 'lucide-react';
import Link from 'next/link';

interface MonitoringMetric {
  id: string;
  name: string;
  description: string;
  icon: any;
  queryType: "KQL" | "REST API" | "Azure SDK";
  status: "Active" | "Development";
}

const AzureInfrastructureMonitoringPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'kql' | 'integration'>('overview');

  const monitoringMetrics: MonitoringMetric[] = [
    {
      id: 'api-gateway-logs',
      name: 'API Gateway Monitoring',
      description: 'Real-time Azure API Management Gateway logs with response code analysis and traffic patterns.',
      icon: BarChart3,
      queryType: 'KQL',
      status: 'Active'
    },
    {
      id: 'azure-resources',
      name: 'Resource Discovery',
      description: 'Dynamic Azure subscription and resource group discovery with permission validation.',
      icon: CloudIcon,
      queryType: 'Azure SDK',
      status: 'Active'
    },
    {
      id: 'log-analytics',
      name: 'Log Analytics Workspace',
      description: 'Centralized logging with custom KQL queries for application and infrastructure monitoring.',
      icon: Database,
      queryType: 'KQL',
      status: 'Active'
    },
    {
      id: 'authentication-debug',
      name: 'Azure Authentication Debug',
      description: 'Comprehensive Azure AD token analysis and permission validation for troubleshooting.',
      icon: AlertTriangle,
      queryType: 'REST API',
      status: 'Active'
    }
  ];

  const azureServices = [
    {
      category: "Monitoring & Analytics",
      services: [
        "Azure Monitor - Central monitoring platform",
        "Log Analytics Workspace - Centralized log collection",
        "Azure API Management - Gateway monitoring",
        "Application Insights - Performance monitoring",
        "Azure Resource Manager - Resource management"
      ]
    },
    {
      category: "Authentication & Security",
      services: [
        "Azure AD (Entra ID) - Identity management",
        "Service Principal - Service authentication",
        "Managed Identity - Azure resource authentication",
        "Role-Based Access Control (RBAC) - Permission management",
        "Azure Key Vault - Secure credential storage"
      ]
    },
    {
      category: "Data & Storage",
      services: [
        "Azure Storage Accounts - File and blob storage",
        "Azure SQL Database - Relational data storage",
        "Azure Cosmos DB - NoSQL document storage",
        "Azure Data Factory - Data integration",
        "Azure Service Bus - Message queuing"
      ]
    }
  ];

  const kqlQueries = [
    {
      title: "API Gateway Traffic Analysis",
      description: "Monitor API request patterns and response codes",
      query: `AzureDiagnostics
| where Category == "GatewayLogs"
| where TimeGenerated > ago(24h)
| where apiId_s in ('api1','api2','api3')
| extend responseCode = toint(responseCode_d)
| summarize
    total = count(),
    count2XX = countif(responseCode >= 200 and responseCode < 300),
    count4XX = countif(responseCode >= 400 and responseCode < 500),
    count5XX = countif(responseCode >= 500),
    avgResponseTimeMs = avg(DurationMs)
  by apiId_s
| order by total desc`
    },
    {
      title: "Error Rate Monitoring",
      description: "Track error patterns and high-frequency failures",
      query: `ApiManagementGatewayLogs
| where TimeGenerated >= ago(1h)
| where ResponseCode >= 400
| summarize 
    errorCount = count(),
    distinctErrors = dcount(ResponseCode),
    errorRate = count() * 100.0 / toscalar(
      ApiManagementGatewayLogs 
      | where TimeGenerated >= ago(1h) 
      | count
    )
| extend AlertLevel = case(
    errorRate > 10, "Critical",
    errorRate > 5, "Warning", 
    "Normal"
  )`
    },
    {
      title: "Performance Trend Analysis",
      description: "Track response time trends and performance degradation",
      query: `AzureDiagnostics
| where Category == "GatewayLogs"
| where TimeGenerated > ago(7d)
| extend responseTime = todouble(DurationMs)
| summarize 
    avgResponseTime = avg(responseTime),
    p95ResponseTime = percentile(responseTime, 95),
    requestCount = count()
  by bin(TimeGenerated, 1h), apiId_s
| order by TimeGenerated desc`
    }
  ];

  const integrationDetails = [
    {
      component: "Azure Monitor Integration",
      features: [
        "LogsQueryClient with service principal authentication",
        "Managed Identity support for production environments",
        "Custom KQL query execution and result parsing",
        "Real-time log streaming and alerting",
        "Cross-workspace query capabilities"
      ]
    },
    {
      component: "Azure Resource Management",
      features: [
        "Azure SDK integration for resource discovery",
        "Subscription and resource group enumeration",
        "Storage account discovery and validation",
        "Permission testing and access verification",
        "Dynamic resource status monitoring"
      ]
    },
    {
      component: "Authentication & Security",
      features: [
        "Azure AD token validation and analysis",
        "JWT scope and role extraction",
        "Permission mapping and access control",
        "Multi-tenant authentication support",
        "Break-glass authentication for emergencies"
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
              <Badge variant="secondary">Azure Integration</Badge>
              <Badge variant="outline">KQL Queries</Badge>
              <Badge variant="outline">Real-time Monitoring</Badge>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Azure Infrastructure Monitoring
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                Comprehensive Azure monitoring with KQL analytics, resource discovery, and real-time infrastructure insights
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="https://github.com/xevolve-ai/xevolve-app/tree/main/src/app/api/api-dashboard" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/api-dashboard" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Dashboard
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
              { id: 'kql', label: 'KQL Queries' },
              { id: 'integration', label: 'Integration' }
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
            {/* Monitoring Metrics Grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Infrastructure Monitoring Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {monitoringMetrics.map((metric) => (
                  <Card key={metric.id} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <metric.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{metric.name}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant={metric.status === 'Active' ? 'default' : 'secondary'}>
                              {metric.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {metric.queryType}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Monitoring Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">15+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Azure Services Monitored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">Real-time</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Log Analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Custom KQL Queries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Infrastructure Monitoring</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Azure Services Architecture</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {azureServices.map((category, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Architecture Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudIcon className="h-5 w-5" />
                  Monitoring Data Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3">
                      <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Data Collection</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Azure services send logs and metrics to Log Analytics Workspace via diagnostic settings
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg mb-3">
                      <Search className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Query Processing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Custom KQL queries analyze data in real-time with LogsQueryClient SDK integration
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3">
                      <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Visualization</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Real-time dashboards display metrics, trends, and alerts with interactive charts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'kql' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">KQL Query Examples</h2>
              <div className="space-y-6">
                {kqlQueries.map((query, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{query.title}</CardTitle>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{query.description}</p>
                        </div>
                        <Badge variant="outline">KQL</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                          {query.query}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* KQL Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Advanced KQL Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Query Optimization</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-sm">Parallel query execution for performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-sm">Time range optimization for large datasets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-sm">Dynamic filtering based on configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-sm">Result caching and pagination support</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Analytics Capabilities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm">Statistical analysis with percentiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm">Time-series analysis and trending</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm">Anomaly detection and alerting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm">Cross-service correlation analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'integration' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Azure SDK Integration</h2>
              <div className="space-y-6">
                {integrationDetails.map((integration, index) => (
                  <Card key={index} className="border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-lg">{integration.component}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {integration.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Implementation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Technical Implementation Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Authentication Methods</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-blue-600 dark:text-blue-400 text-sm">Service Principal</code>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                          Development: ClientSecretCredential with tenant/client/secret
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-blue-600 dark:text-blue-400 text-sm">Managed Identity</code>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                          Production: ManagedIdentityCredential with UAMI
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-blue-600 dark:text-blue-400 text-sm">Azure AD Integration</code>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                          User authentication via NextAuth with Azure provider
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">SDK Components</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-green-600 dark:text-green-400 text-sm">@azure/monitor-query</code>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                          LogsQueryClient for KQL execution and result processing
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-green-600 dark:text-green-400 text-sm">@azure/identity</code>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                          Authentication credentials and token management
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <code className="text-green-600 dark:text-green-400 text-sm">@azure/arm-resources</code>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                          Resource management and discovery capabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Endpoints */}
            <Card>
              <CardHeader>
                <CardTitle>Monitoring API Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400 flex-shrink-0">GET</code>
                    <span className="text-sm font-mono">/api/api-dashboard/overall-api-count</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">- Aggregate API statistics</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400 flex-shrink-0">GET</code>
                    <span className="text-sm font-mono">/api/api-dashboard/traffic-trend</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">- Time-series traffic analysis</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400 flex-shrink-0">GET</code>
                    <span className="text-sm font-mono">/api/api-dashboard/health-checks</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">- Service health monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400 flex-shrink-0">GET</code>
                    <span className="text-sm font-mono">/api/azure-storage/storage-accounts</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">- Azure resource discovery</span>
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

export default AzureInfrastructureMonitoringPage;
