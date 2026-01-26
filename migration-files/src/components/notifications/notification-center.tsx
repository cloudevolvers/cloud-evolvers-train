'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bell, X, CheckCircle2, AlertTriangle, Info, Zap,
  Server, Database, Shield, TrendingUp
} from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
  timestamp: Date;
  isRead: boolean;
  category: 'system' | 'security' | 'performance' | 'transfer';
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'System Health Excellent',
      message: 'All systems are running optimally with 99.8% uptime maintained.',
      type: 'success',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      isRead: false,
      category: 'system'
    },
    {
      id: '2',
      title: 'Large File Transfer Complete',
      message: 'enterprise-backup-2024.tar.gz (1.2TB) transfer completed successfully.',
      type: 'success',
      timestamp: new Date(Date.now() - 600000), // 10 minutes ago
      isRead: false,
      category: 'transfer'
    },
    {
      id: '3',
      title: 'Performance Optimization Applied',
      message: 'Azure cost optimization recommendations have been implemented, saving 24% this quarter.',
      type: 'info',
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      isRead: true,
      category: 'performance'
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  // Simulate new notifications
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every 10 seconds
        const newNotifications = [
          {
            title: 'Security Scan Complete',
            message: 'Weekly security scan completed. No vulnerabilities detected.',
            type: 'success' as const,
            category: 'security' as const
          },
          {
            title: 'Database Performance Alert',
            message: 'Database response time increased to 47ms. Consider optimization.',
            type: 'warning' as const,
            category: 'performance' as const
          },
          {
            title: 'New File Transfer Started',
            message: 'User initiated transfer: quarterly-reports-Q4.zip (245MB)',
            type: 'info' as const,
            category: 'transfer' as const
          },
          {
            title: 'System Update Available',
            message: 'Azure monitoring agent update available. Scheduled for maintenance window.',
            type: 'info' as const,
            category: 'system' as const
          }
        ];

        const randomNotification = newNotifications[Math.floor(Math.random() * newNotifications.length)];
        
        setNotifications(prev => [
          {
            id: Date.now().toString(),
            ...randomNotification,
            timestamp: new Date(),
            isRead: false
          },
          ...prev.slice(0, 9) // Keep only 10 most recent
        ]);
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: string, category: string) => {
    if (type === 'success') return <CheckCircle2 className="h-4 w-4 text-green-400" />;
    if (type === 'warning') return <AlertTriangle className="h-4 w-4 text-amber-400" />;
    if (type === 'error') return <X className="h-4 w-4 text-red-400" />;
    
    // Info type - choose icon based on category
    switch (category) {
      case 'system': return <Server className="h-4 w-4 text-blue-400" />;
      case 'security': return <Shield className="h-4 w-4 text-purple-400" />;
      case 'performance': return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'transfer': return <Database className="h-4 w-4 text-cyan-400" />;
      default: return <Info className="h-4 w-4 text-blue-400" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-l-green-500 bg-green-500/5';
      case 'warning': return 'border-l-amber-500 bg-amber-500/5';
      case 'error': return 'border-l-red-500 bg-red-500/5';
      default: return 'border-l-blue-500 bg-blue-500/5';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-blue-500/10"
      >
        <Bell className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 hover:bg-red-500 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </Badge>
        )}
      </Button>

      {/* Notification Panel */}
      {isOpen && (
        <Card className="absolute right-0 top-12 w-96 max-h-96 bg-blue-950/95 backdrop-blur-sm border-blue-500/20 z-50 shadow-2xl">
          <div className="p-4 border-b border-blue-500/20">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Notifications</h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllAsRead}
                    className="text-xs text-blue-400 hover:text-blue-300 h-auto p-1"
                  >
                    Mark all read
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-1 h-auto"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-400">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No notifications</p>
              </div>
            ) : (
              <div className="space-y-1 p-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border-l-2 cursor-pointer transition-all hover:bg-blue-500/5 ${
                      getNotificationColor(notification.type)
                    } ${!notification.isRead ? 'bg-blue-500/10' : ''}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getNotificationIcon(notification.type, notification.category)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <p className={`text-sm font-medium ${!notification.isRead ? 'text-white' : 'text-gray-300'}`}>
                            {notification.title}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                            className="p-0 h-auto ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-3 w-3 text-gray-400 hover:text-white" />
                          </Button>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          <Badge variant="outline" className="text-xs capitalize">
                            {notification.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
