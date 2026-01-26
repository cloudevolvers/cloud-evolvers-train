"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Shield, Zap, Download, Upload, Clock, Users, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Metric {
  label: string;
  value: string;
  trend: string;
  icon: any;
  color: string;
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: 'problem' | 'progress' | 'success';
}

export default function FileTransferTransformationPage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'financial'>('overview');

  const metrics: Metric[] = [
    {
      label: "Cost Reduction",
      value: "70%",
      trend: "vs previous solution",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      label: "Security Incidents",
      value: "0",
      trend: "Zero breaches since deployment",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      label: "Transfer Speed",
      value: "300% faster",
      trend: "Average file transfer",
      icon: Zap,
      color: "text-purple-500"
    },
    {
      label: "Compliance Score",
      value: "100%",
      trend: "Industry standards met",
      icon: CheckCircle,
      color: "text-orange-500"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      date: "Q4 2023",
      title: "Legacy System Assessment",
      description: "Client paying €180k annually for third-party file transfer solution with security concerns",
      status: "problem"
    },
    {
      date: "Q1 2024",
      title: "xEvolve Solution Design",
      description: "Custom Azure-integrated file transfer system designed with enterprise security",
      status: "progress"
    },
    {
      date: "Q2 2024",
      title: "Seamless Migration",
      description: "Zero-downtime migration completed with full user training and adoption",
      status: "success"
    },
    {
      date: "Q3 2024",
      title: "Continuous Excellence",
      description: "€126,000 annual savings achieved with enhanced security and performance",
      status: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="container mx-auto px-6 py-12 relative">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/showcase">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Showcase
              </Button>
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Enterprise Solution
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                File Management
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise File Transfer 
              <span className="text-emerald-400"> Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              How we replaced expensive third-party solutions with our secure, Azure-integrated 
              file transfer system, reducing costs by 70% while improving security and compliance.
            </p>
            <div className="flex gap-3">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                View Technical Details
              </Button>
              <Button variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.trend}</div>
                  </div>
                </div>
                <h3 className="text-gray-300 font-medium">{metric.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <Button 
            variant={currentView === 'overview' ? 'default' : 'outline'}
            onClick={() => setCurrentView('overview')}
            className={currentView === 'overview' ? 'bg-emerald-600' : ''}
          >
            Executive Overview
          </Button>
          <Button 
            variant={currentView === 'technical' ? 'default' : 'outline'}
            onClick={() => setCurrentView('technical')}
            className={currentView === 'technical' ? 'bg-emerald-600' : ''}
          >
            Technical Implementation
          </Button>
          <Button 
            variant={currentView === 'financial' ? 'default' : 'outline'}
            onClick={() => setCurrentView('financial')}
            className={currentView === 'financial' ? 'bg-emerald-600' : ''}
          >
            Financial Impact
          </Button>
        </div>

        {/* Overview Content */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            {/* Live Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Live File Transfer Dashboard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Upload className="h-6 w-6 text-emerald-400 mb-2" />
                      <div className="text-2xl font-bold text-white">1,247</div>
                      <div className="text-sm text-gray-400">Files transferred today</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Shield className="h-6 w-6 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-400">Security compliance</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Clock className="h-6 w-6 text-purple-400 mb-2" />
                      <div className="text-2xl font-bold text-white">2.4TB</div>
                      <div className="text-sm text-gray-400">Data transferred today</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Users className="h-6 w-6 text-orange-400 mb-2" />
                      <div className="text-2xl font-bold text-white">450</div>
                      <div className="text-sm text-gray-400">Active users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Transformation Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        item.status === 'problem' ? 'bg-red-500' :
                        item.status === 'progress' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-medium text-emerald-300">{item.date}</span>
                          <span className="text-white font-semibold">{item.title}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* The Challenge */}
            <Card className="bg-red-950/30 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-red-300">
                  <AlertTriangle className="h-6 w-6" />
                  The Business Challenge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  A global manufacturing company was spending €180,000 annually on a third-party 
                  file transfer solution that was becoming a security liability and operational 
                  bottleneck. The system lacked modern security features, had poor integration 
                  with their Azure infrastructure, and was restricting their digital transformation goals.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">€180k</div>
                    <div className="text-sm text-red-300">Annual licensing costs</div>
                    <div className="text-xs text-gray-400">Plus maintenance and support</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">3x</div>
                    <div className="text-sm text-red-300">Slower transfers</div>
                    <div className="text-xs text-gray-400">Compared to modern solutions</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">15</div>
                    <div className="text-sm text-red-300">Security vulnerabilities</div>
                    <div className="text-xs text-gray-400">Identified in audit</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="bg-emerald-950/30 border-emerald-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-emerald-300">
                  <CheckCircle className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We designed and implemented a comprehensive Azure-native file transfer solution 
                  that not only replaced the expensive third-party system but exceeded its capabilities 
                  in every measure. The solution integrates seamlessly with their existing Azure infrastructure 
                  and provides enterprise-grade security, compliance, and performance.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-3">Key Features Deployed</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Enterprise-grade file encryption
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Azure AD integration and SSO
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Automated compliance reporting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Real-time transfer monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Advanced user permissions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-3">Business Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        70% cost reduction achieved
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        Zero security incidents
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-green-400" />
                        300% faster file transfers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        100% compliance standards met
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-400" />
                        Enhanced user experience
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Technical Content */}
        {currentView === 'technical' && (
          <div className="space-y-8">
            {/* Technical Architecture */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Technical Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-3">Infrastructure Components</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Azure Blob Storage</div>
                        <div className="text-sm text-gray-400">Secure, scalable file storage with geo-redundancy</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Azure Front Door</div>
                        <div className="text-sm text-gray-400">Global load balancing and CDN acceleration</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Azure Key Vault</div>
                        <div className="text-sm text-gray-400">Enterprise encryption key management</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Azure Monitor</div>
                        <div className="text-sm text-gray-400">Comprehensive logging and analytics</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-3">Security Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <LockKeyhole className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">AES-256 encryption at rest and in transit</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Azure AD integration with MFA</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Role-based access control (RBAC)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Compliance with ISO 27001, SOC 2</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Advanced threat protection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Automated security scanning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Performance Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-950/30 rounded-lg p-4 border border-emerald-500/30">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">300%</div>
                    <div className="text-sm text-emerald-300 mb-1">Faster Transfers</div>
                    <div className="text-xs text-gray-400">Average improvement vs legacy system</div>
                  </div>
                  <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-sm text-blue-300 mb-1">System Uptime</div>
                    <div className="text-xs text-gray-400">24/7 availability achieved</div>
                  </div>
                  <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2.4TB</div>
                    <div className="text-sm text-purple-300 mb-1">Daily Data Volume</div>
                    <div className="text-xs text-gray-400">Peak transfer capacity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Financial Content */}
        {currentView === 'financial' && (
          <div className="space-y-8">
            {/* ROI Analysis */}
            <Card className="bg-emerald-950/30 border-emerald-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-emerald-300">
                  <DollarSign className="h-6 w-6" />
                  Return on Investment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-4">Annual Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">Legacy system licensing</span>
                        <span className="font-semibold text-emerald-400">€180,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">Maintenance and support</span>
                        <span className="font-semibold text-emerald-400">€25,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">Security compliance costs</span>
                        <span className="font-semibold text-emerald-400">€15,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">IT productivity gains</span>
                        <span className="font-semibold text-emerald-400">€35,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-emerald-300">Total Annual Savings</span>
                        <span className="text-emerald-400">€255,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-4">Implementation Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">Development and deployment</span>
                        <span className="font-semibold text-gray-300">€85,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">Migration and training</span>
                        <span className="font-semibold text-gray-300">€25,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                        <span className="text-gray-300">Annual Azure infrastructure</span>
                        <span className="font-semibold text-gray-300">€54,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg border-t border-emerald-500/30 pt-3">
                        <span className="text-emerald-300">Net Annual Savings</span>
                        <span className="text-emerald-400">€126,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Summary */}
                <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-500/30 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">232%</div>
                    <div className="text-lg text-emerald-300 mb-1">Return on Investment</div>
                    <div className="text-sm text-gray-400">Payback period: 10.5 months</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Quote */}
            <Card className="bg-emerald-950/30 border-emerald-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl text-emerald-300 mb-4">"</div>
                  <blockquote className="text-xl text-gray-300 mb-6 italic">
                    The transformation exceeded all our expectations. We're not just saving money - 
                    we've gained a competitive advantage with faster, more secure file transfers 
                    that scale with our business. The ROI was evident within the first year.
                  </blockquote>
                  <div className="border-t border-emerald-500/30 pt-4">
                    <div className="font-semibold text-white">Marcus van der Berg</div>
                    <div className="text-sm text-emerald-300">CTO, Global Manufacturing Corporation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 border-emerald-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your File Transfer Infrastructure?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading enterprises who have already reduced costs, enhanced security, 
              and improved performance with our Azure-native file transfer solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Download className="h-4 w-4 mr-2" />
                Download Full Case Study
              </Button>
              <Button variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
