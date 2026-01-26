import React from 'react';
import { GraduationCap, Cloud, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { getTranslations } from '@/utils/i18n';

interface CloudEvolversCoursesProps {
  t: ReturnType<typeof getTranslations>;
}

export function CloudEvolversCourses({ t }: CloudEvolversCoursesProps) {
  return (
    <div className="col-span-1 h-full">
      <div className="cloud-evolvers-courses-section cloud-evolvers-section-content bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 backdrop-blur-md rounded-lg p-4 lg:p-6 border border-emerald-400/30 shadow-xl h-full">
        
        {/* Header Section */}
        <div className="text-center mb-4 flex-shrink-0">
          <Badge variant="secondary" className="mb-3 text-xs bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
            Most Popular
          </Badge>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t.training?.cloudEvolvers?.popularCourses || 'Popular Training Courses'}
          </h2>
          <p className="text-xs lg:text-sm text-emerald-100/80 mb-2 leading-relaxed">
            Microsoft certification programs for career advancement.
          </p>
        </div>

        {/* Courses Content - Middle Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-3">
            
            {/* Azure Fundamentals */}
            <div className="group bg-gradient-to-r from-emerald-800/40 to-emerald-700/30 rounded-lg p-4 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-emerald-100">{t.training?.cloudEvolvers?.courseTitles?.azureFundamentals || 'Azure Fundamentals'}</h3>
                    <span className="px-2.5 py-1 bg-emerald-500/30 text-emerald-200 rounded-md text-sm font-bold border border-emerald-400/40 shadow-sm">AZ-900</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-emerald-200/90 bg-emerald-600/20 px-2 py-0.5 rounded">1 Day</span>
                    <span className="text-xs text-emerald-200/90 bg-emerald-600/20 px-2 py-0.5 rounded">Beginner</span>
                  </div>
                  <p className="text-xs text-emerald-300/80 leading-tight">Master cloud concepts, core Azure services, and security fundamentals.</p>
                </div>
              </div>
            </div>

            {/* Azure Solutions Architect */}
            <div className="group bg-gradient-to-r from-emerald-800/40 to-emerald-700/30 rounded-lg p-4 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-emerald-100">{t.training?.cloudEvolvers?.courseTitles?.azureSolutionsArchitect || 'Azure Solutions Architect'}</h3>
                    <span className="px-2.5 py-1 bg-teal-500/30 text-teal-200 rounded-md text-sm font-bold border border-teal-400/40 shadow-sm">AZ-305</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-emerald-200/90 bg-emerald-600/20 px-2 py-0.5 rounded">4 Days</span>
                    <span className="text-xs text-emerald-200/90 bg-emerald-600/20 px-2 py-0.5 rounded">Advanced</span>
                  </div>
                  <p className="text-xs text-emerald-300/80 leading-tight">Design scalable Azure solutions including compute, network, and storage.</p>
                </div>
              </div>
            </div>

            {/* Azure Security Engineer */}
            <div className="group bg-gradient-to-r from-emerald-800/40 to-emerald-700/30 rounded-lg p-4 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-emerald-100">{t.training?.cloudEvolvers?.courseTitles?.azureSecurityEngineer || 'Azure Security Engineer'}</h3>
                    <span className="px-2.5 py-1 bg-emerald-600/30 text-emerald-200 rounded-md text-sm font-bold border border-emerald-400/40 shadow-sm">AZ-500</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-emerald-200/90 bg-emerald-600/20 px-2 py-0.5 rounded">4 Days</span>
                    <span className="text-xs text-emerald-200/90 bg-emerald-600/20 px-2 py-0.5 rounded">Advanced</span>
                  </div>
                  <p className="text-xs text-emerald-300/80 leading-tight">Implement security controls, threat protection, and identity management.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section - Footer */}
        <div className="mt-4 flex-shrink-0">
          <div className="text-center bg-gradient-to-r from-emerald-600/20 to-teal-600/15 rounded-lg p-3 border border-emerald-400/20 border-dashed mb-4">
            <p className="text-xs text-emerald-200/80 font-medium mb-1">
              + 16 more certification courses available
            </p>
            <p className="text-xs text-emerald-300/70 leading-tight">
              Power Platform, AI & Data, Microsoft 365, Teams administration, and specialized Azure workloads.
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/training">
              <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold px-4 py-2 text-xs shadow-lg shadow-emerald-500/25">
                <GraduationCap className="mr-2 h-3 w-3" />
                View All 19+ Courses
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
