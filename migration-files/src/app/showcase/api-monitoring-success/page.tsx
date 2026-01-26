"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle,
  Users,
  Target,
  ArrowLeft,
  BarChart3,
  Zap,
  Monitor
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Metric {
  label: string;
  value: string;
  trend: string;
  icon: any;
  color: string;
}

export default function ApiMonitoringSuccessPage() {
  const [currentView, setCurrentView] = useState<'overview' | 'technical' | 'financial'>('overview');

  const metrics: Metric[] = [
    {
      label: "Cost Savings",
      value: "€50,000",
      trend: "Prevented downtime costs",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      label: "Uptime Achievement",
      value: "99.9%",
      trend: "vs 97.2% before",
      icon: TrendingUp,
      color: "text-blue-500"
    },
    {
      label: "Response Time",
      value: "60% faster",
      trend: "Average API response",
      icon: Zap,
      color: "text-purple-500"
    },
    {
      label: "Early Detection",
      value: "95%",
      trend: "Issues caught before impact",
      icon: Shield,
      color: "text-orange-500"
    }
  ];

  const timeline = [
    {
      date: "Q1 2024",
      title: "Challenge Identified",
      description: "Client experiencing frequent API outages costing €15k per hour",
      status: "problem"
    },
    {
      date: "Q2 2024",
      title: "Solution Deployed",
      description: "xEvolve API Dashboard implemented with real-time monitoring",
      status: "progress"
    },
    {
      date: "Q3 2024",
      title: "First Major Save",
      description: "Prevented critical outage affecting 10,000+ users",
      status: "success"
    },
    {
      date: "Q4 2024",
      title: "Continuous Success",
      description: "99.9% uptime maintained, multiple incidents prevented",
      status: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-800/30 to-purple-800/30 border-b border-blue-500/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/showcase">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Showcase
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Success Story
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Platform
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                API Monitoring 
                <span className="text-blue-400"> Success Story</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                How intelligent API monitoring prevented a critical system outage, 
                saving €50,000 in downtime costs and maintaining 99.9% uptime for a Fortune 500 client.
              </p>
              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Technical Details
                </Button>
                <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                  Download Case Study
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Live Dashboard Preview</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <Monitor className="h-6 w-6 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-gray-400">Monitoring</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <BarChart3 className="h-6 w-6 text-green-400 mb-2" />
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-2 mb-8">
          {[
            { key: 'overview', label: 'Business Overview', icon: Target },
            { key: 'technical', label: 'Technical Solution', icon: Monitor },
            { key: 'financial', label: 'Financial Impact', icon: DollarSign }
          ].map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant={currentView === key ? "default" : "ghost"}
              onClick={() => setCurrentView(key as any)}
              className={`flex items-center gap-2 ${
                currentView === key 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`h-8 w-8 ${metric.color}`} />
                    <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
                      Impact
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {metric.trend}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Sections */}
        {currentView === 'overview' && (
          <div className="space-y-8">
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
                  Our Fortune 500 client was experiencing critical system outages due to API failures, 
                  with each hour of downtime costing approximately €15,000 in lost revenue and 
                  productivity. The existing monitoring solution provided limited visibility and 
                  often detected issues after significant business impact had already occurred.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-1">€180k</div>
                    <div className="text-sm text-red-300">Annual downtime costs</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-1">97.2%</div>
                    <div className="text-sm text-red-300">Previous uptime</div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400 mb-1">12 min</div>
                    <div className="text-sm text-red-300">Average detection time</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Solution */}
            <Card className="bg-blue-950/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-300">
                  <CheckCircle className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We implemented the xEvolve API Dashboard with advanced monitoring capabilities, 
                  predictive analytics, and real-time alerting. The solution provides comprehensive 
                  visibility into API health, performance metrics, and potential issues before they 
                  impact business operations.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-3">Key Features Deployed</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Real-time API health monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Predictive failure detection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Automated alert escalation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Performance analytics dashboard
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-3">Business Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        99.9% uptime achievement
                      </li>
                      <li className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-400" />
                        €50,000 in prevented losses
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-400" />
                        60% faster issue resolution
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-400" />
                        Improved customer satisfaction
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-gray-800/30 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Implementation Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-4 h-4 rounded-full ${
                          item.status === 'problem' ? 'bg-red-500' :
                          item.status === 'progress' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm text-gray-400">{item.date}</span>
                          <span className="font-semibold text-white">{item.title}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

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
                        <div className="font-medium text-white">Real-time API Health Checks</div>
                        <div className="text-sm text-gray-400">Continuous endpoint monitoring with sub-second response time tracking</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Predictive Analytics Engine</div>
                        <div className="text-sm text-gray-400">ML-powered failure prediction based on performance patterns</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                        <div className="font-medium text-white">Automated Alert System</div>
                        <div className="text-sm text-gray-400">Multi-channel notifications with escalation workflows</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-3">Key Technical Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">99.9% uptime SLA monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Sub-second response time tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Automated failover detection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Custom threshold configuration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">Historical performance analytics</span>
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
                  <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/30">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-sm text-green-300 mb-1">System Uptime</div>
                    <div className="text-xs text-gray-400">vs 97.2% before implementation</div>
                  </div>
                  <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-3xl font-bold text-blue-400 mb-2">30s</div>
                    <div className="text-sm text-blue-300 mb-1">Alert Response Time</div>
                    <div className="text-xs text-gray-400">vs 12 minutes previously</div>
                  </div>
                  <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                    <div className="text-sm text-purple-300 mb-1">Issues Detected Early</div>
                    <div className="text-xs text-gray-400">Before customer impact</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'financial' && (
          <div className="space-y-8">
            {/* ROI Analysis */}
            <Card className="bg-green-950/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-300">
                  <DollarSign className="h-6 w-6" />
                  Return on Investment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-4">Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-green-500/20">
                        <span className="text-gray-300">Prevented downtime costs</span>
                        <span className="font-semibold text-green-400">€50,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-green-500/20">
                        <span className="text-gray-300">Reduced support overhead</span>
                        <span className="font-semibold text-green-400">€15,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-green-500/20">
                        <span className="text-gray-300">Improved efficiency</span>
                        <span className="font-semibold text-green-400">€25,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-green-300">Total Annual Savings</span>
                        <span className="text-green-400">€90,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-300 mb-4">Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-green-500/20">
                        <span className="text-gray-300">Initial implementation</span>
                        <span className="font-semibold text-gray-300">€25,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-green-500/20">
                        <span className="text-gray-300">Annual licensing</span>
                        <span className="font-semibold text-gray-300">€12,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-green-500/20">
                        <span className="text-gray-300">Training & support</span>
                        <span className="font-semibold text-gray-300">€8,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-gray-300">Total Annual Cost</span>
                        <span className="text-gray-300">€20,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-900/30 rounded-lg p-6 border border-green-500/50 mt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">350%</div>
                    <div className="text-lg text-green-300 mb-1">Return on Investment</div>
                    <div className="text-sm text-gray-400">Payback period: 3.3 months</div>
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
                    The xEvolve API monitoring solution has transformed our operational reliability. 
                    We've not only prevented significant financial losses but also improved our 
                    customer satisfaction scores dramatically. This investment paid for itself 
                    within the first quarter.
                  </blockquote>
                  <div className="border-t border-blue-500/30 pt-4">
                    <div className="font-semibold text-white">Sarah Mitchell</div>
                    <div className="text-sm text-blue-300">CTO, Fortune 500 Manufacturing Company</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 border-blue-500/30 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your API Monitoring?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading enterprises who have already improved their uptime, reduced costs, 
              and enhanced customer satisfaction with our intelligent monitoring solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                Download Detailed Case Study
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
