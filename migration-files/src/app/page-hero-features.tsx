import React from 'react';
import { MonitorCheck, FileUp, Shield, Zap } from 'lucide-react';

/**
 * xEvolve SaaS Hero Features Component
 * 
 * Showcases the core capabilities of xEvolve's SaaS applications
 * Focused on Azure monitoring and enterprise file transfer excellence
 */
export function HeroFeatures() {
  const features = [
    {
      icon: MonitorCheck,
      title: 'Azure Monitoring SaaS',
      description: 'Real-time insights, custom alerts, and comprehensive Azure resource monitoring'
    },
    {
      icon: FileUp,
      title: 'Enterprise File Transfer',
      description: 'Secure, high-speed file exchange with enterprise-grade encryption and controls'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Built-in security protocols and compliance frameworks for enterprise requirements'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast transfers and monitoring with 99.9% uptime guaranteed'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 4xl:gap-4 5xl:gap-5 mb-4 4xl:mb-6 5xl:mb-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-3 4xl:p-4 5xl:p-5 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-200 group cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <feature.icon className="h-6 w-6 4xl:h-7 4xl:w-7 5xl:h-8 5xl:w-8 text-slate-300 mb-2 4xl:mb-3 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-200" />
            <h3 className="font-medium text-sm 4xl:text-base 5xl:text-lg mb-2 group-hover:text-white transition-colors duration-200">
              {feature.title}
            </h3>
            <p className="text-xs 4xl:text-sm 5xl:text-base text-muted-foreground leading-tight group-hover:text-slate-200 transition-colors duration-200 line-clamp-2">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
