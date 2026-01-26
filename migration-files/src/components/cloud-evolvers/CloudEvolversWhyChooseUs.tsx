import React from 'react';
import { Users, GraduationCap, Award, CheckCircle, Cloud, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from '@/utils/i18n';

interface CloudEvolversWhyChooseUsProps {
  t: ReturnType<typeof getTranslations>;
}

export function CloudEvolversWhyChooseUs({ t }: CloudEvolversWhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-slate-900/20 backdrop-blur-sm border-b border-slate-600/30 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-base bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Why We're Different
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t.training?.cloudEvolvers?.whyChooseUs || 'Why Choose Cloud Evolvers'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.training?.cloudEvolvers?.whyChooseUsDesc || 'We combine deep technical expertise with practical experience to deliver training that truly transforms your team\'s capabilities'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-emerald-900/10 to-emerald-800/5 hover:from-emerald-900/20 hover:to-emerald-800/10 border border-emerald-500/20 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-teal-900" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-emerald-100">
              {t.training?.cloudEvolvers?.expertTraining || 'MCT-Led Training'}
            </h3>
            <p className="text-emerald-200/80 text-sm leading-relaxed">
              {t.training?.cloudEvolvers?.expertTrainingDesc || 'Learn from Microsoft Certified Trainers (MCT) with real-world experience'}
            </p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-emerald-800/10 to-teal-900/5 hover:from-emerald-800/20 hover:to-teal-900/10 border border-emerald-500/20 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-500 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg shadow-emerald-600/25 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-teal-900" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-emerald-100">
              Hands-on Learning
            </h3>
            <p className="text-emerald-200/80 text-sm leading-relaxed">
              Practical labs and real-world scenarios to reinforce learning and build confidence
            </p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-teal-900/10 to-teal-800/5 hover:from-teal-900/20 hover:to-teal-800/10 border border-teal-500/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-teal-900" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-teal-100">
              Certification Ready
            </h3>
            <p className="text-teal-200/80 text-sm leading-relaxed">
              Structured curriculum aligned with Microsoft certification requirements and exam objectives
            </p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-teal-800/10 to-emerald-900/5 hover:from-teal-800/20 hover:to-emerald-900/10 border border-teal-500/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-teal-600 to-emerald-500 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg shadow-teal-600/25 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-teal-900" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-teal-100">
              Flexible Scheduling
            </h3>
            <p className="text-teal-200/80 text-sm leading-relaxed">
              Various training formats including virtual, on-site, and self-paced options to fit your schedule
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
