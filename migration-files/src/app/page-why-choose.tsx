import React from 'react';
import { 
  Zap, MonitorCheck, BarChart3, Shield, CloudCog
} from 'lucide-react';

export function WhyChooseSection() {
  return (
    <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 4xl:p-6 5xl:p-8 6xl:p-10 border border-blue-500/30 shadow-lg shadow-blue-900/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5 4xl:mb-6 5xl:mb-8">
        <h2 className="text-xl sm:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl font-bold flex items-center gap-2 4xl:gap-3 5xl:gap-4">
          <Zap className="h-5 w-5 sm:h-6 sm:w-6 4xl:h-7 4xl:w-7 5xl:h-8 5xl:w-8 6xl:h-10 6xl:w-10 text-blue-500" />
          Why Choose xEvolve
        </h2>
        {/* <Badge variant="outline" className="w-fit">Trusted by 500+ Enterprises</Badge> */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4 gap-4 4xl:gap-5 5xl:gap-6 6xl:gap-8">
        {/* First benefit card */}
        <div className="bg-blue-950/30 rounded-lg p-3 4xl:p-4 5xl:p-5 6xl:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200 shadow-sm hover:shadow">
          <div className="flex items-start gap-3 4xl:gap-4 5xl:gap-5">
            <div className="bg-blue-500/20 p-2 4xl:p-3 5xl:p-4 rounded-lg h-fit flex-shrink-0">
              <MonitorCheck className="h-5 w-5 sm:h-6 sm:w-6 4xl:h-7 4xl:w-7 5xl:h-8 5xl:w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium mb-1.5 4xl:mb-2 5xl:mb-3 text-sm 4xl:text-base 5xl:text-lg 6xl:text-xl">Unified Platform</h3>
              <p className="text-sm 4xl:text-base 5xl:text-lg text-muted-foreground">Single dashboard for both Azure monitoring and file transfer—no need for multiple tools. Reduce complexity and streamline operations.</p>
            </div>
          </div>
        </div>
        
        {/* Second benefit card */}
        <div className="bg-blue-950/30 rounded-lg p-3 4xl:p-4 5xl:p-5 6xl:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200 shadow-sm hover:shadow">
          <div className="flex items-start gap-3 4xl:gap-4 5xl:gap-5">
            <div className="bg-blue-500/20 p-2 4xl:p-3 5xl:p-4 rounded-lg h-fit flex-shrink-0">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 4xl:h-7 4xl:w-7 5xl:h-8 5xl:w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium mb-1.5 4xl:mb-2 5xl:mb-3 text-sm 4xl:text-base 5xl:text-lg 6xl:text-xl">Enterprise-Grade Security</h3>
              <p className="text-sm 4xl:text-base 5xl:text-lg text-muted-foreground">End-to-end encryption with FIPS 140-2 compliance. Detailed audit logging and role-based access controls for maximum data protection.</p>
            </div>
          </div>
        </div>
        
        {/* Third benefit card */}
        <div className="bg-blue-950/30 rounded-lg p-3 4xl:p-4 5xl:p-5 6xl:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200 shadow-sm hover:shadow">
          <div className="flex items-start gap-3 4xl:gap-4 5xl:gap-5">
            <div className="bg-blue-500/20 p-2 4xl:p-3 5xl:p-4 rounded-lg h-fit flex-shrink-0">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 4xl:h-7 4xl:w-7 5xl:h-8 5xl:w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium mb-1.5 4xl:mb-2 5xl:mb-3 text-sm 4xl:text-base 5xl:text-lg 6xl:text-xl">Advanced Analytics</h3>
              <p className="text-sm 4xl:text-base 5xl:text-lg text-muted-foreground">AI-powered insights for resource optimization. Predictive analytics for cost forecasting and anomaly detection in real-time.</p>
            </div>
          </div>
        </div>
        
        {/* Fourth benefit card */}
        <div className="bg-blue-950/30 rounded-lg p-3 4xl:p-4 5xl:p-5 6xl:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200 shadow-sm hover:shadow">
          <div className="flex items-start gap-3 4xl:gap-4 5xl:gap-5">
            <div className="bg-blue-500/20 p-2 4xl:p-3 5xl:p-4 rounded-lg h-fit flex-shrink-0">
              <CloudCog className="h-5 w-5 sm:h-6 sm:w-6 4xl:h-7 4xl:w-7 5xl:h-8 5xl:w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium mb-1.5 4xl:mb-2 5xl:mb-3 text-sm 4xl:text-base 5xl:text-lg 6xl:text-xl">Automation & Integration</h3>
              <p className="text-sm 4xl:text-base 5xl:text-lg text-muted-foreground">Create powerful workflows between monitoring alerts and file transfers. Seamless integration with your existing tools via our REST API.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}