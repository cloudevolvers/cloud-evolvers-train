"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Shield, Zap, Download, Code, Bug, TestTube, Target, Users, Settings } from 'lucide-react';
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

export default function QualityAssuranceExcellencePage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'financial'>('overview');

  const metrics: Metric[] = [
    {
      label: "Bug Reduction",
      value: "95%",
      trend: "Production defects eliminated",
      icon: Bug,
      color: "text-green-500"
    },
    {
      label: "Support Tickets",
      value: "80% fewer",
      trend: "Customer support reduction",
      icon: Users,
      color: "text-blue-500"
    },
    {
      label: "Test Coverage",
      value: "98%",
      trend: "Automated test coverage",
      icon: Target,
      color: "text-purple-500"
    },
    {
      label: "Deployment Confidence",
      value: "100%",
      trend: "Release reliability score",
      icon: Shield,
      color: "text-orange-500"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      date: "Q1 2023",
      title: "Quality Crisis Identified",
      description: "Production bugs increasing, customer satisfaction declining, manual testing bottlenecks",
      status: "problem"
    },
    {
      date: "Q2 2023",
      title: "Playwright v2 Framework Deployed",
      description: "Advanced testing framework implementation with comprehensive automation strategy",
      status: "progress"
    },
    {
      date: "Q3 2023",
      title: "Quality Excellence Achieved",
      description: "95% bug reduction achieved, automated testing integrated into CI/CD pipeline",
      status: "success"
    },
    {
      date: "Q4 2023",
      title: "Sustained Quality Leadership",
      description: "Zero critical production issues, 98% test coverage maintained, customer satisfaction soared",
      status: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
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
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Quality Engineering
              </Badge>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                Testing Excellence
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quality Assurance 
              <span className="text-indigo-400"> Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              How our advanced testing framework with Playwright v2 reduced production bugs by 95% 
              and decreased support tickets by 80%, improving customer satisfaction and reducing costs.
            </p>
            <div className="flex gap-3">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                View Testing Dashboard
              </Button>
              <Button variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
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
            className={currentView === 'overview' ? 'bg-indigo-600' : ''}
          >
            Executive Overview
          </Button>
          <Button 
            variant={currentView === 'technical' ? 'default' : 'outline'}
            onClick={() => setCurrentView('technical')}
            className={currentView === 'technical' ? 'bg-indigo-600' : ''}
          >
            Technical Implementation
          </Button>
          <Button 
            variant={currentView === 'financial' ? 'default' : 'outline'}
            onClick={() => setCurrentView('financial')}
            className={currentView === 'financial' ? 'bg-indigo-600' : ''}
          >
            Financial Impact
          </Button>
        </div>

        {/* Overview Content */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            {/* Live Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Live Quality Dashboard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Testing</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <TestTube className="h-6 w-6 text-indigo-400 mb-2" />
                      <div className="text-2xl font-bold text-white">2,847</div>
                      <div className="text-sm text-gray-400">Tests executed today</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Target className="h-6 w-6 text-green-400 mb-2" />
                      <div className="text-2xl font-bold text-white">98.3%</div>
                      <div className="text-sm text-gray-400">Test coverage</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Bug className="h-6 w-6 text-purple-400 mb-2" />
                      <div className="text-2xl font-bold text-white">0</div>
                      <div className="text-sm text-gray-400">Critical bugs this month</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Shield className="h-6 w-6 text-orange-400 mb-2" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-400">Release confidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Quality Transformation Timeline</CardTitle>
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
                          <span className="text-sm font-medium text-indigo-300">{item.date}</span>
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
                  The Quality Crisis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  A rapidly scaling fintech company was experiencing an alarming increase in production 
                  bugs, with manual testing processes unable to keep pace with development velocity. 
                  Customer satisfaction was declining, support costs were escalating, and the development 
                  team was losing confidence in their releases.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">47</div>
                    <div className="text-sm text-red-300">Production bugs/month</div>
                    <div className="text-xs text-gray-400">Critical and high severity</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">35%</div>
                    <div className="text-sm text-red-300">Test coverage</div>
                    <div className="text-xs text-gray-400">Manual testing only</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">€125k</div>
                    <div className="text-sm text-red-300">Annual support costs</div>
                    <div className="text-xs text-gray-400">Due to quality issues</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="bg-indigo-950/30 border-indigo-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-indigo-300">
                  <CheckCircle className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We implemented a comprehensive quality assurance framework built on Playwright v2, 
                  featuring advanced automated testing, visual regression detection, and AI-powered 
                  test generation. The solution integrates seamlessly with their CI/CD pipeline 
                  to ensure every release meets the highest quality standards.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-indigo-300 mb-3">Key Features Deployed</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Comprehensive test automation framework
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Visual regression testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        API and integration testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Performance and load testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        AI-powered test generation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-300 mb-3">Business Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Bug className="h-4 w-4 text-green-400" />
                        95% reduction in production bugs
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-400" />
                        80% fewer support tickets
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-green-400" />
                        98% automated test coverage
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        100% deployment confidence
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        Customer satisfaction improved
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
                    <h4 className="font-semibold text-indigo-300 mb-3">Testing Framework</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Playwright v2 Core</div>
                        <div className="text-sm text-gray-400">Cross-browser automated testing with advanced features</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Visual Testing Engine</div>
                        <div className="text-sm text-gray-400">Pixel-perfect screenshot comparison and regression detection</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">AI Test Generator</div>
                        <div className="text-sm text-gray-400">Intelligent test case generation from user interactions</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">CI/CD Integration</div>
                        <div className="text-sm text-gray-400">Seamless pipeline integration with Azure DevOps</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-300 mb-3">Quality Assurance Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Multi-browser compatibility testing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Mobile responsive testing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Accessibility compliance validation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Performance benchmarking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Security vulnerability scanning</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Comprehensive reporting dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Metrics */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Quality Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/30">
                    <div className="text-3xl font-bold text-green-400 mb-2">2,847</div>
                    <div className="text-sm text-green-300 mb-1">Tests Executed Daily</div>
                    <div className="text-xs text-gray-400">Fully automated testing</div>
                  </div>
                  <div className="bg-indigo-950/30 rounded-lg p-4 border border-indigo-500/30">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">98.3%</div>
                    <div className="text-sm text-indigo-300 mb-1">Test Coverage</div>
                    <div className="text-xs text-gray-400">Code and functional coverage</div>
                  </div>
                  <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2.3min</div>
                    <div className="text-sm text-purple-300 mb-1">Average Test Runtime</div>
                    <div className="text-xs text-gray-400">Full regression suite</div>
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
            <Card className="bg-indigo-950/30 border-indigo-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-indigo-300">
                  <DollarSign className="h-6 w-6" />
                  Return on Investment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-indigo-300 mb-4">Annual Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Reduced support costs</span>
                        <span className="font-semibold text-indigo-400">€100,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Bug fix development time</span>
                        <span className="font-semibold text-indigo-400">€85,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Manual testing elimination</span>
                        <span className="font-semibold text-indigo-400">€65,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Faster release cycles</span>
                        <span className="font-semibold text-indigo-400">€120,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-indigo-300">Total Annual Savings</span>
                        <span className="text-indigo-400">€370,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-300 mb-4">Implementation Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Framework development</span>
                        <span className="font-semibold text-gray-300">€95,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Team training and setup</span>
                        <span className="font-semibold text-gray-300">€35,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-indigo-500/20">
                        <span className="text-gray-300">Annual maintenance and tools</span>
                        <span className="font-semibold text-gray-300">€28,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg border-t border-indigo-500/30 pt-3">
                        <span className="text-indigo-300">Net Annual Benefit</span>
                        <span className="text-indigo-400">€212,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Summary */}
                <div className="bg-indigo-900/20 rounded-lg p-6 border border-indigo-500/30 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-400 mb-2">285%</div>
                    <div className="text-lg text-indigo-300 mb-1">Return on Investment</div>
                    <div className="text-sm text-gray-400">Payback period: 7.4 months</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Quote */}
            <Card className="bg-indigo-950/30 border-indigo-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl text-indigo-300 mb-4">"</div>
                  <blockquote className="text-xl text-gray-300 mb-6 italic">
                    The transformation in our software quality has been remarkable. We've gone from 
                    dreading releases to having complete confidence in every deployment. Our customers 
                    notice the difference, and our development team can focus on innovation instead 
                    of firefighting. The ROI speaks for itself.
                  </blockquote>
                  <div className="border-t border-indigo-500/30 pt-4">
                    <div className="font-semibold text-white">David Chen</div>
                    <div className="text-sm text-indigo-300">VP of Engineering, FinTech Innovations Ltd</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border-indigo-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve Quality Excellence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join industry leaders who have already transformed their software quality 
              and achieved significant cost savings with our advanced testing frameworks.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Download className="h-4 w-4 mr-2" />
                Download Full Case Study
              </Button>
              <Button variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
                Schedule Quality Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
