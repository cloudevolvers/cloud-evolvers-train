"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Upload, Download, Cloud, HardDrive, Activity, Settings, FileText, Zap } from 'lucide-react';
import Link from 'next/link';

interface TransferDemo {
  id: string;
  name: string;
  size: string;
  progress: number;
  speed: string;
  status: 'uploading' | 'downloading' | 'queued' | 'completed';
}

export default function FileManagementSystemPage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'features'>('overview');
  
  const [transfers] = useState<TransferDemo[]>([
    {
      id: '1',
      name: 'enterprise-backup.tar.gz',
      size: '1.2TB',
      progress: 67,
      speed: '125MB/s',
      status: 'uploading'
    },
    {
      id: '2',
      name: 'quarterly-reports.zip',
      size: '156MB',
      progress: 100,
      speed: '0MB/s',
      status: 'completed'
    },
    {
      id: '3',
      name: 'customer-data.sql',
      size: '892MB',
      progress: 34,
      speed: '78MB/s',
      status: 'downloading'
    }
  ]);

  const capabilities = [
    {
      icon: Upload,
      title: "Local File Upload",
      description: "Drag & drop interface with FormData handling",
      technical: "React dropzone with multipart/form-data processing"
    },
    {
      icon: Cloud,
      title: "Azure Storage Integration",
      description: "Native Blob and File Share support",
      technical: "Azure SDK with credential management and discovery"
    },
    {
      icon: Download,
      title: "Remote Transfers",
      description: "Server-to-server file operations",
      technical: "Express backend with streaming and progress tracking"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Live progress tracking and status updates",
      technical: "WebSocket-like polling with job queue management"
    }
  ];

  const storageTypes = [
    { name: "Azure Blob Storage", support: "Full", features: ["Container management", "Direct upload", "Streaming downloads"] },
    { name: "Azure File Shares", support: "Full", features: ["Directory browsing", "File operations", "Share management"] },
    { name: "Local System", support: "Full", features: ["Drag & drop", "Multiple files", "Progress tracking"] },
    { name: "Remote Servers", support: "Planned", features: ["FTP/SFTP", "SSH", "Network drives"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-teal-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="relative container mx-auto px-6 py-12">
          <Link href="/showcase" className="inline-flex items-center gap-2 text-green-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Showcase
          </Link>
          
          <div className="flex gap-3 mb-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              File Management
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Azure Integration
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Real-time Processing
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise File Management
            <span className="text-green-400"> System</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 max-w-3xl">
            Full-stack file transfer system with Azure Storage integration, real-time monitoring, 
            and multi-protocol support. Handles local uploads, remote transfers, and Azure Blob/File Share operations.
          </p>
          
          <div className="flex gap-3">
            <Button className="bg-green-600 hover:bg-green-700">
              <ExternalLink className="h-4 w-4 mr-2" />
              Try File Manager
            </Button>
            <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/10">
              <Github className="h-4 w-4 mr-2" />
              View Implementation
            </Button>
          </div>
        </div>
      </div>

      {/* Live Transfer Demo */}
      <div className="container mx-auto px-6 py-12">
        <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl border border-green-500/30 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Live Transfer Monitor</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Active Transfers</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {transfers.map((transfer) => (
                <div key={transfer.id} className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-400" />
                      <span className="font-medium text-white">{transfer.name}</span>
                      <span className="text-sm text-gray-400">({transfer.size})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        transfer.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        transfer.status === 'uploading' ? 'bg-blue-500/20 text-blue-400' :
                        transfer.status === 'downloading' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {transfer.status}
                      </span>
                      {transfer.status !== 'completed' && transfer.status !== 'queued' && (
                        <span className="text-sm text-gray-400">{transfer.speed}</span>
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${transfer.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs text-gray-400">{transfer.progress}% complete</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Cloud className="h-8 w-8 text-green-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">Native</div>
                  <div className="text-sm text-gray-400">Azure SDK</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Storage Integration</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-blue-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">Real-time</div>
                  <div className="text-sm text-gray-400">Progress</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Monitoring</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Upload className="h-8 w-8 text-purple-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">Multi</div>
                  <div className="text-sm text-gray-400">Protocol</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Transfer Methods</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <HardDrive className="h-8 w-8 text-orange-500" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">Unlimited</div>
                  <div className="text-sm text-gray-400">File size</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">Scalability</h3>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <Button 
            variant={currentView === 'overview' ? 'default' : 'outline'}
            onClick={() => setCurrentView('overview')}
            className={currentView === 'overview' ? 'bg-green-600' : ''}
          >
            System Overview
          </Button>
          <Button 
            variant={currentView === 'technical' ? 'default' : 'outline'}
            onClick={() => setCurrentView('technical')}
            className={currentView === 'technical' ? 'bg-green-600' : ''}
          >
            Technical Implementation
          </Button>
          <Button 
            variant={currentView === 'features' ? 'default' : 'outline'}
            onClick={() => setCurrentView('features')}
            className={currentView === 'features' ? 'bg-green-600' : ''}
          >
            Feature Details
          </Button>
        </div>

        {/* Overview Content */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            {/* Core Capabilities */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Core System Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <capability.icon className="h-8 w-8 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{capability.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{capability.description}</p>
                        <p className="text-green-300 text-xs font-mono">{capability.technical}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Storage Support Matrix */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Storage Support Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {storageTypes.map((storage, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">{storage.name}</h4>
                        <Badge className={storage.support === 'Full' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}>
                          {storage.support}
                        </Badge>
                      </div>
                      <ul className="space-y-1">
                        {storage.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Technical Content */}
        {currentView === 'technical' && (
          <div className="space-y-8">
            {/* Architecture */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">System Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-4">Frontend Components</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <Upload className="h-4 w-4 text-green-400 mt-1" />
                        React dropzone with TypeScript types
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="h-4 w-4 text-green-400 mt-1" />
                        Real-time progress tracking hooks
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-green-400 mt-1" />
                        File browser with directory navigation
                      </li>
                      <li className="flex items-start gap-2">
                        <Settings className="h-4 w-4 text-green-400 mt-1" />
                        Connection management interface
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-300 mb-4">Backend Services</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <Cloud className="h-4 w-4 text-green-400 mt-1" />
                        Azure Storage SDK integration
                      </li>
                      <li className="flex items-start gap-2">
                        <HardDrive className="h-4 w-4 text-green-400 mt-1" />
                        Express.js file transfer endpoints
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="h-4 w-4 text-green-400 mt-1" />
                        Job queue with status tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 text-green-400 mt-1" />
                        Streaming upload/download handlers
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Implementation */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Key Implementation Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-300 mb-3">Azure Storage Integration</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-green-400">// Azure SDK setup with multiple auth methods</div>
                    <div>const credential = isProduction</div>
                    <div>  ? new ManagedIdentityCredential()</div>
                    <div>  : new ClientSecretCredential(tenantId, clientId, secret);</div>
                    <div className="mt-2">const blobServiceClient = new BlobServiceClient(accountUrl, credential);</div>
                    <div>const fileServiceClient = new ShareServiceClient(accountUrl, credential);</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-300 mb-3">File Transfer Pipeline</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-green-400">// Multi-protocol transfer handling</div>
                    <div>const transferPipeline = &#123;</div>
                    <div>  localToAzure: handleFormDataUpload,</div>
                    <div>  azureToLocal: handleStreamDownload,</div>
                    <div>  azureToAzure: handleDirectTransfer,</div>
                    <div>  progress: trackTransferProgress</div>
                    <div>&#125;;</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Features Content */}
        {currentView === 'features' && (
          <div className="space-y-8">
            {/* Feature Breakdown */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Detailed Feature Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="font-semibold text-green-300 mb-4">File Upload Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-white">Drag & Drop Interface</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Multiple file selection</li>
                        <li>• Visual upload zones</li>
                        <li>• File type validation</li>
                        <li>• Size limit enforcement</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-white">Progress Tracking</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Real-time progress bars</li>
                        <li>• Transfer speed monitoring</li>
                        <li>• ETA calculations</li>
                        <li>• Error handling & retry</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-300 mb-4">Azure Storage Operations</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-white">Blob Storage</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Container management</li>
                        <li>• Block blob uploads</li>
                        <li>• Metadata handling</li>
                        <li>• Access tier management</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-white">File Shares</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Directory browsing</li>
                        <li>• File operations (CRUD)</li>
                        <li>• Share quota management</li>
                        <li>• Permission handling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-300 mb-4">Transfer Management</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-white mb-2">Job Queue</h5>
                        <ul className="space-y-1 text-xs text-gray-300">
                          <li>• Background processing</li>
                          <li>• Priority handling</li>
                          <li>• Retry mechanisms</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-2">Status Tracking</h5>
                        <ul className="space-y-1 text-xs text-gray-300">
                          <li>• Real-time updates</li>
                          <li>• Error logging</li>
                          <li>• Completion callbacks</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-2">Monitoring</h5>
                        <ul className="space-y-1 text-xs text-gray-300">
                          <li>• Transfer analytics</li>
                          <li>• Performance metrics</li>
                          <li>• Usage statistics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-green-800/30 to-teal-800/30 border-green-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Enterprise File Management?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our file management system demonstrates production-ready Azure integration 
              with real-time monitoring and multi-protocol transfer capabilities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Try File Manager
              </Button>
              <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/10">
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
