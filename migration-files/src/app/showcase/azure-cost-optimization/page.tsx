"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Shield, Zap, Download, Cloud, BarChart3, TrendingDown, Database, Settings } from 'lucide-react';
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

export default function AzureCostOptimizationPage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'financial'>('overview');

  const metrics: Metric[] = [
    {
      label: "Annual Savings",
      value: "€120,000",
      trend: "Cloud infrastructure costs",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      label: "Performance Gain",
      value: "40%",
      trend: "System performance improvement",
      icon: Zap,
      color: "text-blue-500"
    },
    {
      label: "Storage Optimization",
      value: "65%",
      trend: "Storage efficiency increase",
      icon: Database,
      color: "text-purple-500"
    },
    {
      label: "Reporting Accuracy",
      value: "99%",
      trend: "Real-time cost visibility",
      icon: BarChart3,
      color: "text-orange-500"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      date: "Q1 2023",
      title: "Cost Explosion Discovery",
      description: "Azure spending increased 240% year-over-year with poor visibility into cost drivers",
      status: "problem"
    },
    {
      date: "Q2 2023",
      title: "Intelligent Monitoring Deployment",
      description: "xEvolve Azure cost optimization solution implemented with real-time analytics",
      status: "progress"
    },
    {
      date: "Q3 2023",
      title: "Automated Optimization Active",
      description: "Smart scaling and resource optimization reducing waste by 45%",
      status: "success"
    },
    {
      date: "Q4 2023",
      title: "Sustained Excellence",
      description: "€120,000 annual savings achieved with enhanced performance and reliability",
      status: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
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
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Azure Optimization
              </Badge>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                Cost Management
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Azure Cost Optimization 
              <span className="text-blue-400"> Success Story</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              How intelligent Azure storage monitoring and optimization reduced cloud infrastructure 
              costs by €120,000 annually while improving performance and reliability.
            </p>
            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View Cost Dashboard
              </Button>
              <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
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
            className={currentView === 'overview' ? 'bg-blue-600' : ''}
          >
            Executive Overview
          </Button>
          <Button 
            variant={currentView === 'technical' ? 'default' : 'outline'}
            onClick={() => setCurrentView('technical')}
            className={currentView === 'technical' ? 'bg-blue-600' : ''}
          >
            Technical Implementation
          </Button>
          <Button 
            variant={currentView === 'financial' ? 'default' : 'outline'}
            onClick={() => setCurrentView('financial')}
            className={currentView === 'financial' ? 'bg-blue-600' : ''}
          >
            Financial Impact
          </Button>
        </div>

        {/* Overview Content */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            {/* Live Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Live Azure Cost Dashboard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Optimizing</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <TrendingDown className="h-6 w-6 text-green-400 mb-2" />
                      <div className="text-2xl font-bold text-white">€8,247</div>
                      <div className="text-sm text-gray-400">Monthly Azure spend</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Database className="h-6 w-6 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-white">2.8TB</div>
                      <div className="text-sm text-gray-400">Storage optimized</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <BarChart3 className="h-6 w-6 text-purple-400 mb-2" />
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-sm text-gray-400">Resources optimized</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Cloud className="h-6 w-6 text-orange-400 mb-2" />
                      <div className="text-2xl font-bold text-white">€10.2k</div>
                      <div className="text-sm text-gray-400">Saved this month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Optimization Timeline</CardTitle>
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
                          <span className="text-sm font-medium text-blue-300">{item.date}</span>
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
                  The Cost Crisis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  A growing SaaS company experienced an explosive 240% increase in Azure costs within 
                  12 months due to rapid scaling without proper cost governance. Resources were 
                  provisioned ad-hoc, storage was accumulating inefficiently, and there was no 
                  visibility into cost drivers or optimization opportunities.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">240%</div>
                    <div className="text-sm text-red-300">Cost increase</div>
                    <div className="text-xs text-gray-400">Year-over-year growth</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">€18k</div>
                    <div className="text-sm text-red-300">Monthly Azure bill</div>
                    <div className="text-xs text-gray-400">Without optimization</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">65%</div>
                    <div className="text-sm text-red-300">Waste identified</div>
                    <div className="text-xs text-gray-400">Unused or oversized resources</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="bg-blue-950/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-300">
                  <CheckCircle className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We implemented an intelligent Azure cost optimization platform that provides 
                  real-time visibility, automated resource scaling, and predictive cost management. 
                  The solution continuously monitors usage patterns and automatically optimizes 
                  resources while maintaining performance and reliability standards.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-3">Key Features Deployed</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Real-time cost monitoring and alerting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Automated resource right-sizing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Storage lifecycle management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Predictive cost forecasting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Automated shutdown policies
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-3">Business Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-green-400" />
                        €120,000 annual cost reduction
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-green-400" />
                        40% performance improvement
                      </li>
                      <li className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-green-400" />
                        65% storage optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-green-400" />
                        99% reporting accuracy
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        Enhanced cost governance
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
                    <h4 className="font-semibold text-blue-300 mb-3">Monitoring Stack</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Azure Cost Management APIs</div>
                        <div className="text-sm text-gray-400">Real-time cost and usage data collection</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Azure Monitor Integration</div>
                        <div className="text-sm text-gray-400">Performance metrics and resource utilization</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Machine Learning Analytics</div>
                        <div className="text-sm text-gray-400">Predictive cost modeling and anomaly detection</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Automated Response Engine</div>
                        <div className="text-sm text-gray-400">Resource scaling and optimization actions</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-3">Optimization Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Intelligent VM right-sizing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Storage tier optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Reserved instance recommendations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Automated resource tagging</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Cost allocation and chargeback</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Budget enforcement policies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Optimization Results */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Optimization Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/30">
                    <div className="text-3xl font-bold text-green-400 mb-2">€10.2k</div>
                    <div className="text-sm text-green-300 mb-1">Monthly Savings</div>
                    <div className="text-xs text-gray-400">vs previous baseline</div>
                  </div>
                  <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2.8TB</div>
                    <div className="text-sm text-blue-300 mb-1">Storage Optimized</div>
                    <div className="text-xs text-gray-400">Cold storage migration</div>
                  </div>
                  <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
                    <div className="text-sm text-purple-300 mb-1">Resources Right-sized</div>
                    <div className="text-xs text-gray-400">VMs and databases</div>
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
            <Card className="bg-blue-950/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-300">
                  <DollarSign className="h-6 w-6" />
                  Return on Investment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-4">Annual Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Resource right-sizing</span>
                        <span className="font-semibold text-blue-400">€65,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Storage optimization</span>
                        <span className="font-semibold text-blue-400">€35,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Reserved instance savings</span>
                        <span className="font-semibold text-blue-400">€25,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Automated scaling efficiency</span>
                        <span className="font-semibold text-blue-400">€28,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-blue-300">Total Annual Savings</span>
                        <span className="text-blue-400">€153,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-4">Implementation Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Platform development</span>
                        <span className="font-semibold text-gray-300">€45,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Integration and setup</span>
                        <span className="font-semibold text-gray-300">€15,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                        <span className="text-gray-300">Annual platform costs</span>
                        <span className="font-semibold text-gray-300">€18,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg border-t border-blue-500/30 pt-3">
                        <span className="text-blue-300">Net Annual Savings</span>
                        <span className="text-blue-400">€120,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Summary */}
                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">567%</div>
                    <div className="text-lg text-blue-300 mb-1">Return on Investment</div>
                    <div className="text-sm text-gray-400">Payback period: 4.7 months</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Quote */}
            <Card className="bg-blue-950/30 border-blue-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl text-blue-300 mb-4">"</div>
                  <blockquote className="text-xl text-gray-300 mb-6 italic">
                    The cost optimization solution has been transformational for our business. 
                    We're not just saving money - we're gaining financial predictability and 
                    the confidence to scale knowing our costs are under control. The ROI 
                    exceeded our most optimistic projections.
                  </blockquote>
                  <div className="border-t border-blue-500/30 pt-4">
                    <div className="font-semibold text-white">Thomas Andersson</div>
                    <div className="text-sm text-blue-300">CFO, Nordic SaaS Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 border-blue-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Azure Costs?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join forward-thinking organizations who have already achieved significant cost savings 
              while improving performance with our intelligent Azure optimization solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download Full Case Study
              </Button>
              <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                Get Cost Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
