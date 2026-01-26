import React from 'react';
import { GraduationCap, Cloud, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { getTranslations } from '@/utils/i18n';

interface CloudEvolversPopularCoursesProps {
  t: ReturnType<typeof getTranslations>;
}

export function CloudEvolversPopularCourses({ t }: CloudEvolversPopularCoursesProps) {
  return (
    <div className="col-span-1">
      <div className="cloud-evolvers-courses-section cloud-evolvers-section-content bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 backdrop-blur-md rounded-lg p-4 lg:p-6 border border-emerald-400/30 shadow-xl">
        <div className="text-center mb-6 flex-shrink-0">
          <Badge variant="secondary" className="mb-3 text-xs bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
            Most Popular
          </Badge>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t.training?.cloudEvolvers?.popularCourses || 'Popular Courses'}
          </h2>
          <p className="text-xs lg:text-sm text-emerald-100/80 mb-4 leading-relaxed">
            Microsoft certification programs for career advancement.
          </p>
        </div>

        {/* Popular Courses Grid - Reduced content to prevent overflow */}
        <div className="cloud-evolvers-courses-list cloud-evolvers-flex-content">
          <div className="grid grid-cols-1 gap-3 flex-1 min-h-0">
            {/* Azure Fundamentals */}
            <div className="group bg-gradient-to-br from-emerald-800/30 to-emerald-700/20 rounded-lg p-3 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-emerald-100 mb-1">Azure Fundamentals</h3>
                  <p className="text-xs text-emerald-200/80 mb-1">AZ-900 • 1 Day • Beginner</p>
                  <p className="text-xs text-emerald-300/70 leading-tight">Master cloud concepts, core Azure services, pricing models, and cloud security fundamentals.</p>
                </div>
              </div>
            </div>

            {/* Azure Solutions Architect */}
            <div className="group bg-gradient-to-br from-emerald-800/30 to-emerald-700/20 rounded-lg p-3 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-emerald-100 mb-1">Azure Solutions Architect</h3>
                  <p className="text-xs text-emerald-200/80 mb-1">AZ-305 • 4 Days • Advanced</p>
                  <p className="text-xs text-emerald-300/70 leading-tight">Design scalable Azure solutions including compute, network, storage, and business continuity.</p>
                </div>
              </div>
            </div>

            {/* Azure Security Engineer */}
            <div className="group bg-gradient-to-br from-emerald-800/30 to-emerald-700/20 rounded-lg p-3 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-emerald-100 mb-1">Azure Security Engineer</h3>
                  <p className="text-xs text-emerald-200/80 mb-1">AZ-500 • 4 Days • Advanced</p>
                  <p className="text-xs text-emerald-300/70 leading-tight">Implement security controls, threat protection, and identity & access management.</p>
                </div>
              </div>
            </div>

            {/* Additional Course Indicator */}
            <div className="group bg-gradient-to-br from-emerald-600/20 to-teal-600/15 rounded-lg p-3 border border-emerald-400/15 border-dashed hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-center">
                <p className="text-xs text-emerald-200/70 font-medium mb-1">
                  + 16 more certification courses available
                </p>
                <p className="text-xs text-emerald-300/60 leading-tight">
                  Power Platform, AI & Data, Microsoft 365, Teams administration, and specialized Azure workloads.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 flex-shrink-0">
          <Link href="/training">
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold px-4 py-2 text-xs shadow-lg shadow-emerald-500/25">
              <GraduationCap className="mr-2 h-3 w-3" />
              View All 19+ Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
