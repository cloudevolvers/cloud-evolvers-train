'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, TrendingUp, CheckCircle2, Shield, PiggyBank, 
  Cpu, HardDrive, Zap, Activity, Clock, ArrowUpRight,
  ArrowDownRight, Users, Database
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  borderColor: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
}

export function RealTimeInsights() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      id: 'system-health',
      label: 'System Health',
      value: 99.8,
      unit: '%',
      icon: CheckCircle2,
      color: 'text-green-400',
      bgColor: 'from-green-950/40 to-green-900/30',
      borderColor: 'border-green-500/20',
      trend: 'stable',
      trendValue: 0.1
    },
    {
      id: 'cpu-usage',
      label: 'CPU Usage',
      value: 23.4,
      unit: '%',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'from-blue-950/40 to-blue-900/30',
      borderColor: 'border-blue-500/20',
      trend: 'down',
      trendValue: 2.1
    },
    {
      id: 'memory-usage',
      label: 'Memory Usage',
      value: 67.2,
      unit: '%',
      icon: HardDrive,
      color: 'text-amber-400',
      bgColor: 'from-amber-950/40 to-amber-900/30',
      borderColor: 'border-amber-500/20',
      trend: 'up',
      trendValue: 1.5
    },
    {
      id: 'active-users',
      label: 'Active Users',
      value: 1247,
      unit: '',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'from-purple-950/40 to-purple-900/30',
      borderColor: 'border-purple-500/20',
      trend: 'up',
      trendValue: 3.2
    },
    {
      id: 'response-time',
      label: 'Avg Response',
      value: 124,
      unit: 'ms',
      icon: Clock,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-950/40 to-cyan-900/30',
      borderColor: 'border-cyan-500/20',
      trend: 'down',
      trendValue: 8
    },
    {
      id: 'throughput',
      label: 'Throughput',
      value: 2847,
      unit: 'req/min',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'from-orange-950/40 to-orange-900/30',
      borderColor: 'border-orange-500/20',
      trend: 'up',
      trendValue: 124
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        let newValue = metric.value;
        let newTrend = metric.trend;
        
        // Generate realistic fluctuations based on metric type
        switch (metric.id) {
          case 'system-health':
            newValue = Math.max(98.5, Math.min(100, metric.value + (Math.random() - 0.5) * 0.1));
            break;
          case 'cpu-usage':
            newValue = Math.max(15, Math.min(85, metric.value + (Math.random() - 0.5) * 3));
            break;
          case 'memory-usage':
            newValue = Math.max(50, Math.min(90, metric.value + (Math.random() - 0.5) * 2));
            break;
          case 'active-users':
            newValue = Math.max(800, Math.min(2000, metric.value + Math.floor((Math.random() - 0.5) * 50)));
            break;
          case 'response-time':
            newValue = Math.max(80, Math.min(300, metric.value + (Math.random() - 0.5) * 20));
            break;
          case 'throughput':
            newValue = Math.max(2000, Math.min(4000, metric.value + Math.floor((Math.random() - 0.5) * 200)));
            break;
        }
        
        // Update trend based on value change
        const change = newValue - metric.value;
        if (change > 0.5) newTrend = 'up';
        else if (change < -0.5) newTrend = 'down';
        else newTrend = 'stable';
        
        return {
          ...metric,
          value: newValue,
          trend: newTrend,
          trendValue: Math.abs(change)
        };
      }));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="h-3 w-3 text-green-400" />;
      case 'down':
        return <ArrowDownRight className="h-3 w-3 text-red-400" />;
      default:
        return <Activity className="h-3 w-3 text-gray-400" />;
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable', metricId: string) => {
    // For some metrics, 'up' is bad (CPU, memory, response time)
    const inverseTrendMetrics = ['cpu-usage', 'memory-usage', 'response-time'];
    const isInverse = inverseTrendMetrics.includes(metricId);
    
    if (trend === 'stable') return 'text-gray-400';
    
    if (isInverse) {
      return trend === 'up' ? 'text-red-400' : 'text-green-400';
    } else {
      return trend === 'up' ? 'text-green-400' : 'text-red-400';
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '' && value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    if (unit === 'req/min' && value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value % 1 === 0 ? value.toString() : value.toFixed(1);
  };

  return (
    <div className="space-y-2 4xl:space-y-3 5xl:space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-blue-500/20 rounded-lg">
          <BarChart3 className="h-4 w-4 4xl:h-5 4xl:w-5 5xl:h-6 5xl:w-6 text-blue-400" />
        </div>
        <h2 className="text-sm 4xl:text-base 5xl:text-lg 6xl:text-xl font-bold">
          Live Operations Dashboard
        </h2>
        <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 animate-pulse ml-auto text-xs">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-ping"></div>
          Live
        </Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 4xl:gap-3 5xl:gap-4">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <Card 
              key={metric.id}
              className={`bg-gradient-to-br ${metric.bgColor} border ${metric.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-lg group`}
            >
              <CardContent className="p-2 4xl:p-3 5xl:p-4">
                <div className="flex items-start justify-between mb-2 min-h-[1rem]">
                  <div className="flex items-center gap-1.5 flex-1 min-w-0 pr-1">
                    <IconComponent className={`h-3 w-3 4xl:h-4 4xl:w-4 ${metric.color} group-hover:scale-110 transition-transform flex-shrink-0`} />
                    <span className="text-xs text-white/70 truncate leading-tight">{metric.label}</span>
                  </div>
                  <div className="flex-shrink-0">
                    {getTrendIcon(metric.trend)}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm 4xl:text-base 5xl:text-lg font-bold text-white transition-all duration-300 leading-none">
                    {formatValue(metric.value, metric.unit)}{metric.unit}
                  </div>
                  
                  <div className="flex items-center justify-between gap-1 min-h-[0.75rem]">
                    <span className={`text-xs ${getTrendColor(metric.trend, metric.id)} transition-colors flex-shrink-0 leading-tight`}>
                      {metric.trend === 'stable' ? 'Stable' : 
                       `${metric.trend === 'up' ? '+' : '-'}${formatValue(metric.trendValue, metric.unit)}${metric.unit}`}
                    </span>
                    
                    {/* Progress bar for percentage values */}
                    {metric.unit === '%' && (
                      <div className="w-12 4xl:w-14 5xl:w-16 flex-shrink-0">
                        <Progress 
                          value={metric.value} 
                          className="h-1 4xl:h-1.5" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Summary Stats */}
      <div className="bg-gradient-to-r from-blue-950/40 to-purple-950/40 rounded-lg p-2 4xl:p-3 5xl:p-4 border border-blue-500/20">
        <h3 className="text-xs 4xl:text-sm 5xl:text-base font-medium text-white mb-2 4xl:mb-3">
          System Overview
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 4xl:gap-3 5xl:gap-4">
          <div className="text-center">
            <div className="text-sm 4xl:text-base 5xl:text-lg font-bold text-green-400">24/7</div>
            <div className="text-xs text-white/70">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-sm 4xl:text-base 5xl:text-lg font-bold text-blue-400">15.2TB</div>
            <div className="text-xs text-white/70">Data Processed</div>
          </div>
          <div className="text-center">
            <div className="text-sm 4xl:text-base 5xl:text-lg font-bold text-purple-400">A+</div>
            <div className="text-xs text-white/70">Security Score</div>
          </div>
          <div className="text-center">
            <div className="text-sm 4xl:text-base 5xl:text-lg font-bold text-amber-400">24%</div>
            <div className="text-xs text-white/70">Cost Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
