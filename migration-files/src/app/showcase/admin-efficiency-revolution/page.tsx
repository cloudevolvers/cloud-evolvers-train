"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Shield, Zap, Download, Settings, Clock, Users, Monitor, BarChart3, Workflow } from 'lucide-react';
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

export default function AdminEfficiencyRevolutionPage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'financial'>('overview');

  const metrics: Metric[] = [
    {
      label: "Time Savings",
      value: "60%",
      trend: "Administrative overhead reduction",
      icon: Clock,
      color: "text-green-500"
    },
    {
      label: "Automated Tasks",
      value: "85%",
      trend: "Previously manual processes",
      icon: Workflow,
      color: "text-blue-500"
    },
    {
      label: "Error Reduction",
      value: "90%",
      trend: "Human error elimination",
      icon: Shield,
      color: "text-purple-500"
    },
    {
      label: "Team Satisfaction",
      value: "95%",
      trend: "Staff engagement scores",
      icon: Users,
      color: "text-orange-500"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      date: "Q3 2023",
      title: "Administrative Burden Assessment",
      description: "IT team spending 70% of time on routine maintenance, leaving little time for strategic initiatives",
      status: "problem"
    },
    {
      date: "Q4 2023",
      title: "Unified Dashboard Design",
      description: "xEvolve unified admin dashboard solution designed with automation at its core",
      status: "progress"
    },
    {
      date: "Q1 2024",
      title: "Phased Implementation",
      description: "Gradual rollout with team training and workflow optimization",
      status: "success"
    },
    {
      date: "Q2 2024",
      title: "Transformation Complete",
      description: "60% time savings achieved, team now focuses on innovation and strategic projects",
      status: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
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
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Productivity Enhancement
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Administration
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Administrative Efficiency 
              <span className="text-purple-400"> Revolution</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              How our unified admin dashboard reduced administrative overhead by 60%, 
              enabling IT teams to focus on strategic initiatives rather than routine maintenance tasks.
            </p>
            <div className="flex gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Dashboard Demo
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
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
            className={currentView === 'overview' ? 'bg-purple-600' : ''}
          >
            Executive Overview
          </Button>
          <Button 
            variant={currentView === 'technical' ? 'default' : 'outline'}
            onClick={() => setCurrentView('technical')}
            className={currentView === 'technical' ? 'bg-purple-600' : ''}
          >
            Technical Implementation
          </Button>
          <Button 
            variant={currentView === 'financial' ? 'default' : 'outline'}
            onClick={() => setCurrentView('financial')}
            className={currentView === 'financial' ? 'bg-purple-600' : ''}
          >
            Financial Impact
          </Button>
        </div>

        {/* Overview Content */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            {/* Live Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Live Unified Admin Dashboard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Real-time</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Settings className="h-6 w-6 text-purple-400 mb-2" />
                      <div className="text-2xl font-bold text-white">247</div>
                      <div className="text-sm text-gray-400">Automated tasks today</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Monitor className="h-6 w-6 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-white">12</div>
                      <div className="text-sm text-gray-400">Systems monitored</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <BarChart3 className="h-6 w-6 text-green-400 mb-2" />
                      <div className="text-2xl font-bold text-white">99.8%</div>
                      <div className="text-sm text-gray-400">Task success rate</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Clock className="h-6 w-6 text-orange-400 mb-2" />
                      <div className="text-2xl font-bold text-white">4.2h</div>
                      <div className="text-sm text-gray-400">Time saved today</div>
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
                          <span className="text-sm font-medium text-purple-300">{item.date}</span>
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
                  The Administrative Challenge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  A rapidly growing technology company found their IT team overwhelmed with routine 
                  administrative tasks, spending 70% of their time on manual maintenance activities. 
                  This left little time for strategic initiatives, innovation, and business-critical projects 
                  that could drive competitive advantage.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">70%</div>
                    <div className="text-sm text-red-300">Time on routine tasks</div>
                    <div className="text-xs text-gray-400">vs strategic initiatives</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">85</div>
                    <div className="text-sm text-red-300">Manual processes</div>
                    <div className="text-xs text-gray-400">Error-prone and time-consuming</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-2">45%</div>
                    <div className="text-sm text-red-300">Staff satisfaction</div>
                    <div className="text-xs text-gray-400">Due to repetitive work</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="bg-purple-950/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-300">
                  <CheckCircle className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We designed and implemented a unified admin dashboard that centralizes all 
                  administrative functions into a single, intelligent interface. The solution 
                  automates routine tasks, provides predictive insights, and enables the IT team 
                  to focus on high-value strategic work that drives business growth.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">Key Features Deployed</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Automated workflow orchestration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Intelligent alerting and notifications
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Real-time system monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Predictive maintenance capabilities
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Unified reporting and analytics
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">Business Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        60% administrative time savings
                      </li>
                      <li className="flex items-center gap-2">
                        <Workflow className="h-4 w-4 text-green-400" />
                        85% of tasks now automated
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        90% reduction in human errors
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-400" />
                        95% team satisfaction scores
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-green-400" />
                        Strategic initiative focus enabled
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
                    <h4 className="font-semibold text-purple-300 mb-3">Dashboard Components</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Unified Control Center</div>
                        <div className="text-sm text-gray-400">Single pane of glass for all administrative functions</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Automation Engine</div>
                        <div className="text-sm text-gray-400">PowerShell and Azure Logic Apps integration</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Real-time Monitoring</div>
                        <div className="text-sm text-gray-400">Live system health and performance tracking</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Analytics Platform</div>
                        <div className="text-sm text-gray-400">Predictive insights and trend analysis</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">Automation Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Scheduled maintenance workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Automated backup verification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Self-healing system responses</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Intelligent alert routing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Automated reporting generation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Predictive failure detection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Efficiency Metrics */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Efficiency Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-3xl font-bold text-purple-400 mb-2">4.2h</div>
                    <div className="text-sm text-purple-300 mb-1">Daily Time Savings</div>
                    <div className="text-xs text-gray-400">Per team member average</div>
                  </div>
                  <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-3xl font-bold text-blue-400 mb-2">247</div>
                    <div className="text-sm text-blue-300 mb-1">Tasks Automated</div>
                    <div className="text-xs text-gray-400">Daily automation execution</div>
                  </div>
                  <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/30">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                    <div className="text-sm text-green-300 mb-1">Success Rate</div>
                    <div className="text-xs text-gray-400">Automated task completion</div>
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
            <Card className="bg-purple-950/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-300">
                  <DollarSign className="h-6 w-6" />
                  Return on Investment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-4">Annual Value Creation</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">IT staff productivity gains</span>
                        <span className="font-semibold text-purple-400">€285,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">Reduced system downtime</span>
                        <span className="font-semibold text-purple-400">€125,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">Error reduction savings</span>
                        <span className="font-semibold text-purple-400">€85,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">Strategic initiative acceleration</span>
                        <span className="font-semibold text-purple-400">€150,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-purple-300">Total Annual Value</span>
                        <span className="text-purple-400">€645,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-4">Implementation Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">Dashboard development</span>
                        <span className="font-semibold text-gray-300">€120,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">Automation setup and training</span>
                        <span className="font-semibold text-gray-300">€65,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                        <span className="text-gray-300">Annual maintenance and hosting</span>
                        <span className="font-semibold text-gray-300">€45,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg border-t border-purple-500/30 pt-3">
                        <span className="text-purple-300">Net Annual Benefit</span>
                        <span className="text-purple-400">€415,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Summary */}
                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/30 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">348%</div>
                    <div className="text-lg text-purple-300 mb-1">Return on Investment</div>
                    <div className="text-sm text-gray-400">Payback period: 5.4 months</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Quote */}
            <Card className="bg-purple-950/30 border-purple-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl text-purple-300 mb-4">"</div>
                  <blockquote className="text-xl text-gray-300 mb-6 italic">
                    This transformation has been revolutionary for our IT department. We've gone from 
                    being reactive firefighters to proactive innovators. Our team is now focused on 
                    strategic initiatives that directly impact our competitive advantage and growth.
                  </blockquote>
                  <div className="border-t border-purple-500/30 pt-4">
                    <div className="font-semibold text-white">Emma Rodriguez</div>
                    <div className="text-sm text-purple-300">Head of IT Operations, Tech Innovation Corp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 border-purple-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Revolutionize Your Administrative Efficiency?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join innovative organizations who have already transformed their IT operations 
              and freed their teams to focus on strategic initiatives that drive business growth.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Download Full Case Study
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
                Schedule Dashboard Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
