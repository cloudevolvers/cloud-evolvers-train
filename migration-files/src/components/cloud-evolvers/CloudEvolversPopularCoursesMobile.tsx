import React from 'react';
import { GraduationCap, Cloud, Users, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from '@/utils/i18n';

interface CloudEvolversPopularCoursesMobileProps {
  t: ReturnType<typeof getTranslations>;
}

export function CloudEvolversPopularCoursesMobile({ t }: CloudEvolversPopularCoursesMobileProps) {
  return (
    <section className="md:hidden bg-gradient-to-br from-emerald-900/10 via-teal-900/10 to-emerald-900/10 backdrop-blur-sm border-b border-emerald-500/20 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 text-base bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Most Popular
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t.training?.cloudEvolvers?.popularCourses || 'Popular Training Courses'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Comprehensive Microsoft certification programs designed for career advancement.
          </p>
          <p className="text-base text-emerald-400 font-semibold mb-8">
            19+ courses available including Azure, Microsoft 365, Security, AI & Data
          </p>
          <Link href="/training">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-emerald-500/25">
              <GraduationCap className="mr-2 h-6 w-6" />
              View All 19+ Courses
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Azure Fundamentals */}
          <div className="group bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 backdrop-blur-md rounded-lg p-6 border border-emerald-400/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-emerald-100">Azure Fundamentals</h3>
                <p className="text-sm text-emerald-200/80">AZ-900</p>
              </div>
            </div>
            <p className="text-emerald-100/80 text-sm mb-4 leading-relaxed">
              Learn cloud concepts, Azure services, workloads, security, privacy, pricing, and support.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-emerald-300 font-semibold">1 Day</span>
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
                Beginner
              </Badge>
            </div>
          </div>

          {/* Azure Administrator */}
          <div className="group bg-gradient-to-br from-teal-900/20 via-emerald-900/20 to-teal-900/20 backdrop-blur-md rounded-lg p-6 border border-teal-400/30 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-teal-100">Azure Administrator</h3>
                <p className="text-sm text-teal-200/80">AZ-104</p>
              </div>
            </div>
            <p className="text-teal-100/80 text-sm mb-4 leading-relaxed">
              Manage Azure identities, governance, storage, compute, and virtual networks.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-teal-300 font-semibold">4 Days</span>
              <Badge variant="secondary" className="bg-teal-500/20 text-teal-100 border-teal-400/30">
                Intermediate
              </Badge>
            </div>
          </div>

          {/* Microsoft 365 Fundamentals */}
          <div className="group bg-gradient-to-br from-emerald-800/20 via-teal-800/20 to-emerald-800/20 backdrop-blur-md rounded-lg p-6 border border-emerald-400/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-emerald-100">Microsoft 365 Fundamentals</h3>
                <p className="text-sm text-emerald-200/80">MS-900</p>
              </div>
            </div>
            <p className="text-emerald-100/80 text-sm mb-4 leading-relaxed">
              Understand Microsoft 365 services, security, compliance, privacy, and trust.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-emerald-300 font-semibold">1 Day</span>
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
                Beginner
              </Badge>
            </div>
          </div>

          {/* Azure Solutions Architect */}
          <div className="group bg-gradient-to-br from-teal-800/20 via-emerald-800/20 to-teal-800/20 backdrop-blur-md rounded-lg p-6 border border-teal-400/30 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-lg shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-teal-100">Azure Solutions Architect</h3>
                <p className="text-sm text-teal-200/80">AZ-305</p>
              </div>
            </div>
            <p className="text-teal-100/80 text-sm mb-4 leading-relaxed">
              Design identity, governance, monitoring, business continuity, and infrastructure solutions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-teal-300 font-semibold">4 Days</span>
              <Badge variant="secondary" className="bg-teal-500/20 text-teal-100 border-teal-400/30">
                Advanced
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
