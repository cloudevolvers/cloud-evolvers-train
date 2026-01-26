'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, TrendingUp, ArrowUpRight, ArrowDownRight, 
  Zap, Users, Database, Server, Globe, Clock,
  CheckCircle2, AlertTriangle, XCircle
} from 'lucide-react';

interface SystemStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  value: string;
  change: number;
  icon: React.ComponentType<any>;
}

export function SystemStatusBoard() {
  const [statuses, setStatuses] = useState<SystemStatus[]>([
    {
      id: 'api-gateway',
      name: 'API Gateway',
      status: 'healthy',
      value: '99.9%',
      change: 0.1,
      icon: Globe
    },
    {
      id: 'database',
      name: 'Database',
      status: 'healthy',
      value: '47ms',
      change: -5,
      icon: Database
    },
    {
      id: 'file-service',
      name: 'File Service',
      status: 'warning',
      value: '94.2%',
      change: -2.1,
      icon: Server
    },
    {
      id: 'active-sessions',
      name: 'Active Sessions',
      status: 'healthy',
      value: '1,247',
      change: 23,
      icon: Users
    }
  ]);

  // Simulate real-time status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStatuses(prev => prev.map(status => {
        // Randomly update some values for demo
        if (Math.random() < 0.3) { // 30% chance to update
          let newValue = status.value;
          let newStatus = status.status;
          let newChange = status.change;

          switch (status.id) {
            case 'api-gateway':
              newChange = (Math.random() - 0.5) * 0.2;
              break;
            case 'database':
              const currentMs = parseInt(status.value);
              const change = Math.floor((Math.random() - 0.5) * 10);
              newValue = `${Math.max(20, currentMs + change)}ms`;
              newChange = change;
              break;
            case 'file-service':
              newChange = (Math.random() - 0.5) * 1.5;
              const currentPercent = parseFloat(status.value);
              const newPercent = Math.max(85, Math.min(99.9, currentPercent + newChange));
              newValue = `${newPercent.toFixed(1)}%`;
              newStatus = newPercent > 95 ? 'healthy' : newPercent > 90 ? 'warning' : 'critical';
              break;
            case 'active-sessions':
              const currentSessions = parseInt(status.value.replace(',', ''));
              const sessionChange = Math.floor((Math.random() - 0.5) * 100);
              newValue = (currentSessions + sessionChange).toLocaleString();
              newChange = sessionChange;
              break;
          }

          return {
            ...status,
            value: newValue,
            status: newStatus,
            change: newChange
          };
        }
        return status;
      }));
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle2 className="h-4 w-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-400" />;
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'from-green-950/40 to-green-900/30 border-green-500/20';
      case 'warning':
        return 'from-amber-950/40 to-amber-900/30 border-amber-500/20';
      case 'critical':
        return 'from-red-950/40 to-red-900/30 border-red-500/20';
      default:
        return 'from-gray-950/40 to-gray-900/30 border-gray-500/20';
    }
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) {
      return <ArrowUpRight className="h-3 w-3 text-green-400" />;
    } else if (change < 0) {
      return <ArrowDownRight className="h-3 w-3 text-red-400" />;
    }
    return <Activity className="h-3 w-3 text-gray-400" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-blue-500/20 rounded-lg">
          <Activity className="h-5 w-5 text-blue-400" />
        </div>
        <h2 className="text-lg 4xl:text-xl 5xl:text-2xl font-bold">System Status</h2>
        <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 animate-pulse ml-auto">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-ping"></div>
          Live
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 4xl:gap-4">
        {statuses.map((status) => {
          const IconComponent = status.icon;
          return (
            <Card 
              key={status.id}
              className={`bg-gradient-to-br ${getStatusColor(status.status)} border transition-all duration-500 hover:scale-105`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">{status.name}</span>
                  </div>
                  {getStatusIcon(status.status)}
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xl 4xl:text-2xl font-bold text-white">
                      {status.value}
                    </div>
                    <div className="flex items-center gap-1 text-xs 4xl:text-sm">
                      {getTrendIcon(status.change)}
                      <span className={status.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {status.change >= 0 ? '+' : ''}{status.change.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className={`text-xs capitalize ${
                      status.status === 'healthy' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                      status.status === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                      'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}
                  >
                    {status.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Overall system health summary */}
      <div className="bg-gradient-to-r from-blue-950/40 to-purple-950/40 rounded-lg p-4 border border-blue-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-white">Overall System Health</h3>
            <p className="text-xs text-gray-400 mt-1">All critical systems operational</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">Operational</span>
            </div>
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
              98.7%
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
