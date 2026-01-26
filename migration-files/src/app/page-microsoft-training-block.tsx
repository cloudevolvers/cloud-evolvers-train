"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight, BookOpen, Award, Users, CheckCircle, Zap, Star, Sparkles, TrendingUp } from 'lucide-react';
import { getTranslations } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBrandConfig } from '@/lib/brand-config';

/**
 * Enhanced Microsoft Training Block
 *
 * Modern, visually appealing training showcase with improved UI
 * Features animations, gradients, and better visual hierarchy
 * Brand-aware styling with dynamic training counts
 */
export function MicrosoftTrainingBlock() {
  // Use the language context
  const { language: lang, isClient } = useLanguage();
  
  const t = getTranslations(lang || 'en');
  
  // Brand configuration
  const [brandConfig, setBrandConfig] = useState(getBrandConfig());
  const [trainingCount, setTrainingCount] = useState(14); // Default fallback
  
  useEffect(() => {
    setBrandConfig(getBrandConfig());
    
    // Fetch training count dynamically
    const fetchTrainingCount = async () => {
      try {
        const response = await fetch('/api/training');
        if (response.ok) {
          const trainings = await response.json();
          if (Array.isArray(trainings)) {
            setTrainingCount(trainings.length);
          }
        }
      } catch (error) {
        console.error('Error fetching training count:', error);
        // Keep the fallback count
      }
    };
    
    fetchTrainingCount();
  }, []);

  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
  
  // Brand-aware colors
  const primaryColor = isCloudEvolvers ? 'emerald' : 'blue';
  const secondaryColor = isCloudEvolvers ? 'teal' : 'indigo';
  const gradientFrom = isCloudEvolvers ? 'from-emerald-500' : 'from-blue-500';
  const gradientTo = isCloudEvolvers ? 'to-teal-500' : 'to-indigo-500';
  const textColor = isCloudEvolvers ? 'text-emerald-300' : 'text-blue-300';
  const bgGradient = isCloudEvolvers 
    ? 'from-slate-900 via-emerald-900/50 to-teal-900/40'
    : 'from-slate-900 via-blue-900/50 to-indigo-900/40';

  const azureTrainingAreas = lang === 'nl' ? [
    'Azure Fundamentals (AZ-900)',
    'Azure Administrator (AZ-104)', 
    'Azure Solutions Architect (AZ-305)',
    'Azure Security Engineer (AZ-500)',
    'Azure Developer (AZ-204)',
    'Azure DevOps Engineer (AZ-400)',
    'Azure Network Engineer (AZ-700)',
    'Azure Virtual Desktop (AZ-140)',
    'Azure Bicep & Infrastructure as Code',
    'GitHub Copilot Agent Development',
    'Azure AI Developer Bootcamp',
    'Infrastructure as Code met Terraform',
    'Security Operations Analyst (SC-200)',
    'Security, Compliance & Identity Fundamentals (SC-900)'
  ] : [
    'Azure Fundamentals (AZ-900)',
    'Azure Administrator (AZ-104)', 
    'Azure Solutions Architect (AZ-305)',
    'Azure Security Engineer (AZ-500)',
    'Azure Developer (AZ-204)',
    'Azure DevOps Engineer (AZ-400)',
    'Azure Network Engineer (AZ-700)',
    'Azure Virtual Desktop (AZ-140)',
    'Azure Bicep & Infrastructure as Code',
    'GitHub Copilot Agent Development',
    'Azure AI Developer Bootcamp',
    'Infrastructure as Code with Terraform',
    'Security Operations Analyst (SC-200)',
    'Security, Compliance & Identity Fundamentals (SC-900)'
  ];

  const microsoftTrainingAreas = lang === 'nl' ? [
    'Microsoft 365 Fundamentals (MS-900)',
    'Microsoft 365 Administrator Expert (MS-102)',
    'Microsoft 365 Copilot Beheersing',
    'Teams Geavanceerd Beheer (MS-700)',
    'Power Platform Fundamentals (PL-900)', 
    'Power Platform Automatisering Bootcamp',
    'Power BI Data Analyst (PL-300)',
    'Power Apps Developer (PL-400)',
    'Power Automate RPA Developer (PL-500)'
  ] : [
    'Microsoft 365 Fundamentals (MS-900)',
    'Microsoft 365 Administrator Expert (MS-102)',
    'Microsoft 365 Copilot Mastery',
    'Teams Advanced Administration (MS-700)',
    'Power Platform Fundamentals (PL-900)', 
    'Power Platform Automation Bootcamp',
    'Power BI Data Analyst (PL-300)',
    'Power Apps Developer (PL-400)',
    'Power Automate RPA Developer (PL-500)'
  ];

  return (
    <div className={`relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-gradient-to-br ${bgGradient} rounded-lg md:rounded-xl overflow-hidden shadow-2xl`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-8 left-8 w-20 md:w-32 h-20 md:h-32 bg-${primaryColor}-500/10 rounded-full blur-xl animate-pulse`}></div>
        <div className={`absolute top-24 right-16 w-16 md:w-24 h-16 md:h-24 bg-${secondaryColor}-500/10 rounded-full blur-lg animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-16 left-24 w-24 md:w-40 h-24 md:h-40 bg-${primaryColor}-500/5 rounded-full blur-2xl animate-pulse delay-500`}></div>
        <div className={`absolute bottom-8 right-8 w-20 md:w-28 h-20 md:h-28 bg-${secondaryColor}-500/10 rounded-full blur-xl animate-pulse delay-700`}></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 h-full flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} blur-lg opacity-50 rounded-full`}></div>
              <div className={`relative p-3 md:p-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full shadow-lg`}>
                <Bot className="h-8 w-8 md:h-12 md:w-12 text-white" />
              </div>
            </div>
          </div>
          {/* Title and subtitle now translatable */}
          <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white via-${primaryColor}-100 to-${secondaryColor}-200 bg-clip-text text-transparent`}>
            {t.trainingBlock.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {t.trainingBlock.subtitle}
          </p>
          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className={`bg-gradient-to-br from-${primaryColor}-500/20 to-${primaryColor}-600/10 rounded-lg md:rounded-xl p-3 md:p-6 border border-${primaryColor}-400/20 hover:border-${primaryColor}-400/40 transition-colors`}>
                <div className={`text-2xl md:text-3xl font-bold ${textColor} mb-1 md:mb-2`}>{trainingCount}+</div>
                <div className="text-xs md:text-sm text-slate-300 font-medium">{t.trainingBlock.azureCerts}</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className={`bg-gradient-to-br from-${secondaryColor}-500/20 to-${secondaryColor}-600/10 rounded-lg md:rounded-xl p-3 md:p-6 border border-${secondaryColor}-400/20 hover:border-${secondaryColor}-400/40 transition-colors`}>
                <div className={`text-2xl md:text-3xl font-bold ${secondaryColor === 'teal' ? 'text-teal-300' : 'text-indigo-300'} mb-1 md:mb-2`}>10+</div>
                <div className="text-xs md:text-sm text-slate-300 font-medium">{t.trainingBlock.m365Programs}</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 col-span-2 md:col-span-1">
              <div className={`bg-gradient-to-br from-${primaryColor}-600/20 to-${secondaryColor}-500/10 rounded-lg md:rounded-xl p-3 md:p-6 border border-${primaryColor}-400/20 hover:border-${primaryColor}-400/40 transition-colors`}>
                <div className="text-lg md:text-xl font-bold text-emerald-300 mb-1 md:mb-2">MCT</div>
                <div className="text-xs md:text-sm text-slate-300 font-medium">{t.trainingBlock.expertLed}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Training Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Azure Track */}
          <div className="group relative min-w-0">
            <div className={`absolute inset-0 bg-gradient-to-r from-${primaryColor}-500/20 to-${secondaryColor}-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500`}></div>
            <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-8 border border-slate-600/30 hover:border-${primaryColor}-400/50 transition-all duration-300 backdrop-blur-sm`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl shadow-lg`}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{t.trainingBlock.azureTrackTitle}</h4>
                  <p className={`${textColor} font-medium`}>{t.trainingBlock.azureTrackDesc}</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {azureTrainingAreas.slice(0, 6).map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/40 rounded-lg border border-slate-600/30 hover:bg-slate-700/60 transition-colors group/item">
                    <CheckCircle className={`h-4 w-4 text-${primaryColor}-400 flex-shrink-0`} />
                    <span className="text-slate-200 text-sm group-hover/item:text-white transition-colors break-words">{area}</span>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <span className={`text-${primaryColor}-300 text-sm font-medium`}>+{azureTrainingAreas.length - 6} {t.trainingBlock.moreCerts}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>{t.trainingBlock.expertLed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span>{t.trainingBlock.careerAdvancement}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft 365 & Copilot Track */}
          <div className="group relative min-w-0">
            <div className={`absolute inset-0 bg-gradient-to-r from-${secondaryColor}-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500`}></div>
            <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-8 border border-slate-600/30 hover:border-${secondaryColor}-400/50 transition-all duration-300 backdrop-blur-sm`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r from-${secondaryColor}-500 to-purple-500 rounded-xl shadow-lg`}>
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{t.trainingBlock.m365TrackTitle}</h4>
                  <p className={`${secondaryColor === 'teal' ? 'text-teal-300' : 'text-indigo-300'} font-medium`}>{t.trainingBlock.m365TrackDesc}</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {microsoftTrainingAreas.slice(0, 6).map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/40 rounded-lg border border-slate-600/30 hover:bg-slate-700/60 transition-colors group/item">
                    <CheckCircle className={`h-4 w-4 text-${secondaryColor}-400 flex-shrink-0`} />
                    <span className="text-slate-200 text-sm group-hover/item:text-white transition-colors break-words">{area}</span>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <span className={`text-${secondaryColor}-300 text-sm font-medium`}>+{microsoftTrainingAreas.length - 6} {t.trainingBlock.morePrograms}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span>{t.trainingBlock.handsOnLabs}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>{t.trainingBlock.smallClassSizes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600/30 mb-8 backdrop-blur-sm">
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">{t.trainingBlock.benefitsTitle}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center group hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl mb-2 sm:mb-3 group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-colors">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 break-words px-1">{t.trainingBlock.expertInstructors}</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl mb-2 sm:mb-3 group-hover:from-green-500/30 group-hover:to-green-600/20 transition-colors">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 break-words px-1">{t.trainingBlock.certPrep}</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl mb-2 sm:mb-3 group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-colors">
                <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 break-words px-1">{t.trainingBlock.handsOnLabs}</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl mb-2 sm:mb-3 group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-colors">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 mx-auto" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 break-words px-1">{t.trainingBlock.careerSupport}</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <Link href="/training">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:from-${primaryColor}-600 hover:to-${secondaryColor}-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 w-auto max-w-full`}
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
              <span className="break-words">{t.trainingBlock.cta}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 flex-shrink-0" />
            </Button>
          </Link>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4 px-2 break-words">{t.trainingBlock.ctaSub}</p>
        </div>
      </div>
    </div>
  );
}
