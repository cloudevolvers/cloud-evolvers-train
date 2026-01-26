'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileUp, FileDown, CheckCircle2, Clock, AlertCircle, 
  Pause, Play, X, Zap, HardDrive, Users
} from 'lucide-react';

interface FileTransfer {
  id: string;
  filename: string;
  size: string;
  sizeMB: number;
  progress: number;
  speed: number; // MB/s
  status: 'uploading' | 'downloading' | 'completed' | 'paused' | 'failed' | 'queued';
  eta: number; // seconds
  user: string;
  startTime: Date;
}

export function FileTransferMonitor() {
  const [transfers, setTransfers] = useState<FileTransfer[]>([
    {
      id: '1',
      filename: 'enterprise-backup-2024.tar.gz',
      size: '1.2TB',
      sizeMB: 1200000,
      progress: 67.4,
      speed: 125.6,
      status: 'uploading',
      eta: 2847,
      user: 'admin@company.com',
      startTime: new Date(Date.now() - 3600000) // 1 hour ago
    },
    {
      id: '2',
      filename: 'quarterly-reports.zip',
      size: '156MB',
      sizeMB: 156,
      progress: 100,
      speed: 0,
      status: 'completed',
      eta: 0,
      user: 'finance@company.com',
      startTime: new Date(Date.now() - 300000) // 5 minutes ago
    },
    {
      id: '3',
      filename: 'customer-database-export.sql',
      size: '892MB',
      sizeMB: 892,
      progress: 34.2,
      speed: 78.3,
      status: 'downloading',
      eta: 746,
      user: 'dev@company.com',
      startTime: new Date(Date.now() - 1800000) // 30 minutes ago
    },
    {
      id: '4',
      filename: 'video-conference-recordings.mp4',
      size: '2.4GB',
      sizeMB: 2400,
      progress: 0,
      speed: 0,
      status: 'queued',
      eta: 0,
      user: 'hr@company.com',
      startTime: new Date()
    }
  ]);

  // Simulate real-time progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTransfers(prev => prev.map(transfer => {
        if (transfer.status === 'uploading' || transfer.status === 'downloading') {
          const progressIncrement = (Math.random() * 2) + 0.5; // 0.5-2.5% per second
          const newProgress = Math.min(100, transfer.progress + progressIncrement);
          
          // Simulate speed variations
          const speedVariation = (Math.random() - 0.5) * 20; // ±10 MB/s variation
          const newSpeed = Math.max(10, transfer.speed + speedVariation);
          
          // Calculate new ETA
          const remainingMB = (transfer.sizeMB * (100 - newProgress)) / 100;
          const newEta = remainingMB / newSpeed;
          
          // Mark as completed if progress reaches 100%
          const newStatus = newProgress >= 100 ? 'completed' : transfer.status;
          
          return {
            ...transfer,
            progress: newProgress,
            speed: newStatus === 'completed' ? 0 : newSpeed,
            status: newStatus,
            eta: newStatus === 'completed' ? 0 : newEta
          };
        }
        return transfer;
      }));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploading':
        return <FileUp className="h-4 w-4 text-blue-400" />;
      case 'downloading':
        return <FileDown className="h-4 w-4 text-green-400" />;
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-400" />;
      case 'paused':
        return <Pause className="h-4 w-4 text-amber-400" />;
      case 'failed':
        return <X className="h-4 w-4 text-red-400" />;
      case 'queued':
        return <Clock className="h-4 w-4 text-gray-400" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'uploading':
      case 'downloading':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'completed':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'paused':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'failed':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'queued':
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const formatETA = (seconds: number) => {
    if (seconds <= 0) return '';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const formatSpeed = (speed: number) => {
    if (speed === 0) return '-';
    if (speed >= 1000) {
      return `${(speed / 1000).toFixed(1)} GB/s`;
    }
    return `${speed.toFixed(1)} MB/s`;
  };

  const getElapsedTime = (startTime: Date) => {
    const elapsed = Date.now() - startTime.getTime();
    const minutes = Math.floor(elapsed / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  // Calculate summary stats
  const activeTransfers = transfers.filter(t => t.status === 'uploading' || t.status === 'downloading').length;
  const completedTransfers = transfers.filter(t => t.status === 'completed').length;
  const totalSize = transfers.reduce((sum, t) => sum + t.sizeMB, 0);
  const completedSize = transfers.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.sizeMB, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-purple-500/20 rounded-lg">
          <HardDrive className="h-5 w-5 text-purple-400" />
        </div>
        <h2 className="text-lg 4xl:text-xl 5xl:text-2xl font-bold">File Transfers</h2>
        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 ml-auto">
          {activeTransfers} Active
        </Badge>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <Card className="bg-gradient-to-br from-blue-950/40 to-blue-900/30 border-blue-500/20">
          <CardContent className="p-3 text-center">
            <div className="text-lg 4xl:text-xl font-bold text-white">{activeTransfers}</div>
            <div className="text-xs 4xl:text-sm text-blue-300">Active</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-950/40 to-green-900/30 border-green-500/20">
          <CardContent className="p-3 text-center">
            <div className="text-lg 4xl:text-xl font-bold text-white">{completedTransfers}</div>
            <div className="text-xs 4xl:text-sm text-green-300">Completed</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-950/40 to-purple-900/30 border-purple-500/20">
          <CardContent className="p-3 text-center">
            <div className="text-lg 4xl:text-xl font-bold text-white">
              {(totalSize / 1000).toFixed(1)}GB
            </div>
            <div className="text-xs 4xl:text-sm text-purple-300">Total Size</div>
          </CardContent>
        </Card>
      </div>

      {/* Transfer List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {transfers.map((transfer) => (
          <Card 
            key={transfer.id}
            className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 border-blue-500/20 transition-all duration-300 hover:border-blue-500/40"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {getStatusIcon(transfer.status)}
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white truncate">
                      {transfer.filename}
                    </div>
                    <div className="text-xs text-gray-400">
                      {transfer.size} • {transfer.user}
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className={`text-xs ${getStatusColor(transfer.status)}`}>
                  {transfer.status}
                </Badge>
              </div>

              {/* Progress bar for active transfers */}
              {(transfer.status === 'uploading' || transfer.status === 'downloading') && (
                <div className="mb-2">
                  <Progress 
                    value={transfer.progress} 
                    className="h-2 4xl:h-3" 
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{transfer.progress.toFixed(1)}%</span>
                    <span>
                      {formatSpeed(transfer.speed)} • ETA: {formatETA(transfer.eta)}
                    </span>
                  </div>
                </div>
              )}

              {/* Transfer details */}
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Started: {getElapsedTime(transfer.startTime)} ago</span>
                {transfer.status === 'completed' && (
                  <span className="text-green-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
