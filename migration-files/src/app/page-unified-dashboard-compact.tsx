import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, FileUp, Network, AlertCircle, CheckCircle2, 
  Clock, TrendingUp, FileText, ArrowUpRight,
  Zap, RefreshCw
} from 'lucide-react';

export function UnifiedDashboardSection() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    totalRequests: 245780,
    successRate: 99.62,
    avgLatency: 124,
    transferSpeed: 125
  });

  // State for the dynamic 1TB file transfer
  const [bigFileTransfer, setBigFileTransfer] = useState({
    progress: 15.2, // Starting at 15.2%
    speed: 285.6,   // MB/s
    eta: 7247,      // seconds remaining
    bytesTransferred: 155.6 // GB transferred
  });

  // Optimize update frequency - reduce from 1.5s to 5s for better performance
  useEffect(() => {
    // Set initial time after mount to avoid hydration mismatch
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Batch state updates for better performance
      setAnimatedStats(prev => ({
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 6) + 2,
        successRate: Math.min(99.99, Math.max(98.5, prev.successRate + (Math.random() - 0.5) * 0.01)),
        avgLatency: Math.max(80, Math.min(250, prev.avgLatency + (Math.random() - 0.5) * 10)),
        transferSpeed: Math.max(80, Math.min(200, prev.transferSpeed + (Math.random() - 0.5) * 5))
      }));

      // Update the big file transfer progress (very slow, realistic for 1TB)
      setBigFileTransfer(prev => {
        const progressIncrement = Math.random() * 0.015 + 0.003; // Even slower for better performance
        const newProgress = Math.min(99.9, prev.progress + progressIncrement);
        const speedVariation = (Math.random() - 0.5) * 20; // Reduced variation for smoother display
        const newSpeed = Math.max(280, Math.min(420, prev.speed + speedVariation));
        
        // Calculate new ETA and bytes transferred for 1TB
        const remainingGB = ((100 - newProgress) / 100) * 1024; // Remaining GB out of 1024GB (1TB)
        const estimatedTimeSeconds = (remainingGB * 1024) / newSpeed; // GB to MB conversion for speed calc
        const bytesTransferred = (newProgress / 100) * 1024; // GB transferred out of 1TB
        
        return {
          progress: newProgress,
          speed: newSpeed,
          eta: estimatedTimeSeconds,
          bytesTransferred: bytesTransferred
        };
      });
    }, 5000); // Increased to 5 seconds for much better performance

    return () => clearInterval(timer);
  }, []);

  // API Management Statistics - Enhanced for enterprise showcase
  const apiStats = {
    total24h: 1245780, // Increased to show enterprise scale
    success24h: 1242856,
    failed24h: 2924,
    avgLatency: 89, // Improved performance
    peakLatency: 456, // Better peak performance
    requestsPerSecond: 14.42, // Much higher throughput
    uptime: 99.96, // Added uptime metric
    topEndpoints: [
      { name: '/api/files/upload', count: 145230, avgTime: 124 },
      { name: '/api/files/download', count: 138920, avgTime: 89 },
      { name: '/api/azure/monitor', count: 98180, avgTime: 156 },
      { name: '/api/auth/validate', count: 82450, avgTime: 45 }
    ]
  };
  
  // File Transfer Statistics - Enhanced for enterprise showcase
  const fileTransferStats = {
    activeTransfers: 28, // More active transfers
    queuedTransfers: 67, // Higher queue showing demand
    completedToday: 3247, // Much higher daily volume
    failedToday: 12, // Lower failure rate
    totalDataTransferred: '12.8TB', // Impressive daily volume
    avgTransferSpeed: '285MB/s', // Much faster speeds
    uptime: 99.98, // Added uptime metric
    recentTransfers: [
      { name: 'enterprise-backup-complete-2024.tar.gz', size: '1.08TB', status: 'in-progress', time: `${bigFileTransfer.progress.toFixed(1)}%`, speed: `${bigFileTransfer.speed.toFixed(1)}MB/s`, isLargeFile: true, eta: bigFileTransfer.eta, bytesTransferred: bigFileTransfer.bytesTransferred },
      { name: 'azure-logs-archive-Q4.zip', size: '2.4GB', status: 'completed', time: '1m ago', speed: '342MB/s' },
      { name: 'enterprise-database-dump.sql', size: '856MB', status: 'completed', time: '2m ago', speed: '289MB/s' },
      { name: 'video-assets-production.tar', size: '4.2GB', status: 'completed', time: '3m ago', speed: '385MB/s' }
    ]
  };

  // Helper functions for transfer status
  function getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'queued': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'failed': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  }

  function getStatusIcon(status: string) {
    switch (status) {
      case 'completed': return <CheckCircle2 className="h-3 w-3" />;
      case 'in-progress': return <RefreshCw className="h-3 w-3 animate-spin" />;
      case 'queued': return <Clock className="h-3 w-3" />;
      case 'failed': return <AlertCircle className="h-3 w-3" />;
      default: return <Clock className="h-3 w-3" />;
    }
  }

  return (
    <div className="dashboard-compact bg-gradient-to-br from-blue-950/40 via-blue-900/30 to-blue-950/40 backdrop-blur-xl rounded-lg p-2 lg:p-3 border border-blue-500/30 shadow-xl shadow-blue-900/20 flex flex-col h-full min-h-[300px] lg:min-h-[350px] dashboard-container dashboard-fast-load">
      {/* Header - Compact */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2 lg:mb-3 layout-stable">
        <h3 className="text-sm lg:text-base xl:text-lg font-semibold flex items-center gap-2">
          <div className="p-1 lg:p-1.5 bg-blue-500/20 rounded-lg">
            <Activity className="h-3 w-3 lg:h-4 lg:w-4 text-blue-400" />
          </div>
          Live SaaS Dashboard
          <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-xs px-1.5 py-0.5 hidden sm:inline-flex">
            Enterprise
          </Badge>
        </h3>
        <div className="flex items-center gap-2 badge-container">
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 animate-pulse text-xs px-1.5 py-0.5 realtime-optimized">
            <div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-ping"></div>
            Live
          </Badge>
          <div className="text-xs text-muted-foreground whitespace-nowrap">
            {currentTime ? currentTime.toLocaleTimeString('en-GB', { 
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            }) : '--:--:--'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 lg:gap-3 flex-grow">
        {/* API Management Section - Compact */}
        <div className="space-y-1 lg:space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs lg:text-sm font-medium flex items-center gap-2">
              <Network className="h-3 w-3 lg:h-4 lg:w-4 text-blue-400" />
              Azure API Monitoring SaaS
            </h4>
            <Badge variant="secondary" className="text-xs px-1.5 py-0.5 whitespace-nowrap">
              24h
            </Badge>
          </div>

          {/* API Stats Cards - Compact Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 lg:gap-2">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-1.5 lg:p-2 rounded-lg border border-blue-700/30 group hover:border-blue-600/50 transition-all">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs text-blue-300">Requests</span>
                <Zap className="h-3 w-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-bold text-white">{(animatedStats.totalRequests / 1000).toFixed(1)}K</div>
              <div className="flex items-center text-xs text-green-400 mt-0.5">
                <ArrowUpRight className="h-2 w-2 mr-1" />
                <span>Live</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-950/60 to-green-900/40 p-1.5 lg:p-2 rounded-lg border border-green-700/30 group hover:border-green-600/50 transition-all">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs text-green-300">Success</span>
                <CheckCircle2 className="h-3 w-3 text-green-400 group-hover:text-green-300 transition-colors" />
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-bold text-white">{animatedStats.successRate.toFixed(2)}%</div>
              <div className="text-xs text-green-300 mt-0.5">Real-time</div>
            </div>

            <div className="bg-gradient-to-br from-amber-950/60 to-amber-900/40 p-1.5 lg:p-2 rounded-lg border border-amber-700/30 group hover:border-amber-600/50 transition-all">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs text-amber-300">Latency</span>
                <Clock className="h-3 w-3 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-bold text-white">{Math.round(animatedStats.avgLatency)}ms</div>
              <div className="text-xs text-amber-400 mt-0.5">Avg: 89ms</div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/60 to-purple-900/40 p-1.5 lg:p-2 rounded-lg border border-purple-700/30 group hover:border-purple-600/50 transition-all">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs text-purple-300">Req/sec</span>
                <TrendingUp className="h-3 w-3 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-bold text-white">{apiStats.requestsPerSecond}</div>
              <div className="text-xs text-purple-300 mt-0.5">Peak: 18.7/s</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/60 to-emerald-900/40 p-1.5 lg:p-2 rounded-lg border border-emerald-700/30 group hover:border-emerald-600/50 transition-all">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs text-emerald-300">Uptime</span>
                <Activity className="h-3 w-3 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-bold text-white">{apiStats.uptime}%</div>
              <div className="text-xs text-emerald-300 mt-0.5">30 days</div>
            </div>
          </div>
        </div>

        {/* File Transfer Section - Compact */}
        <div className="space-y-1 lg:space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs lg:text-sm font-medium flex items-center gap-2">
              <FileUp className="h-3 w-3 lg:h-4 lg:w-4 text-blue-400" />
              Enterprise File Transfer Platform
            </h4>
            <div className="flex gap-1">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs px-1.5 py-0.5">
                {fileTransferStats.activeTransfers} Active
              </Badge>
            </div>
          </div>

          {/* Recent Transfers - Compact */}
          <div className="bg-blue-950/40 rounded-lg p-1.5 lg:p-2 border border-blue-700/20">
            <div className="space-y-1.5">
              {fileTransferStats.recentTransfers.slice(0, 2).map((transfer, idx) => (
                <div key={idx} className={`flex items-center justify-between gap-2 p-1.5 rounded-lg transition-colors ${transfer.isLargeFile ? 'bg-gradient-to-r from-blue-950/50 to-purple-950/50 border border-blue-500/20' : 'bg-blue-950/30 hover:bg-blue-950/50'}`}>
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <FileText className={`h-3 w-3 flex-shrink-0 ${transfer.isLargeFile ? 'text-purple-400' : 'text-blue-400'}`} />
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs font-medium truncate ${transfer.isLargeFile ? 'text-purple-200' : 'text-white'}`} title={transfer.name}>
                        {transfer.name}
                      </p>
                      <span className="text-xs text-muted-foreground">{transfer.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {transfer.status === 'in-progress' && (
                      <div className="w-12 lg:w-16">
                        <Progress value={parseFloat(transfer.time)} className="h-1.5" />
                      </div>
                    )}
                    <Badge className={`text-xs px-2 py-1 ${getStatusColor(transfer.status)}`}>
                      {getStatusIcon(transfer.status)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
