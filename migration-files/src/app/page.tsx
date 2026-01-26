'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Loader2, GraduationCap, Zap, FileUp, MonitorCheck, ArrowRight, Shield, Gauge, Cloud, CheckCircle } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { cn } from "@/lib/utils";

import BlogPostsList from '@/components/homepage/BlogPostsList';
import ContactForm from '@/components/homepage/ContactForm';
import RefreshButton from '@/components/refresh-button';
import { HomeShowcaseSection } from './page-home-showcase';
import { UnifiedDashboardSection } from './page-unified-dashboard-compact';
import { getTranslations, SupportedLang } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';
import { CloudEvolversHome } from './page-cloud-evolvers';

export default function Home() {
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en'); // Changed from 'nl' to 'en' to match LanguageContext default
  
  // Get brand configuration (hydration-safe)
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(() => {
    return process.env.NEXT_PUBLIC_CLOUD_EVOLVERS === '1';
  });
  const [brandConfig, setBrandConfig] = useState(getBrandConfig());
  const [cloudEvolversSettings, setCloudEvolversSettings] = useState<any>(null);

  // Handle brand detection after hydration
  useEffect(() => {
    const isCloudEvolvers = getBrandConfig().name === 'Cloud Evolvers';
    setIsCloudEvolveBrand(isCloudEvolvers);
    setBrandConfig(getBrandConfig());

    // Fetch Cloud Evolvers settings if needed (for non-text settings like images, rotation, etc.)
    if (isCloudEvolvers) {
      fetch('/api/cloudevolvers/settings')
        .then(res => res.json())
        .then(data => setCloudEvolversSettings(data))
        .catch(err => console.error('Failed to load Cloud Evolvers settings:', err));
    }
  }, []);

  const settings = isCloudEvolveBrand ? {
    // Always use client-side translations for text content
    heroImages: cloudEvolversSettings?.heroImages || ['/cloudevolvers-logo/logo/vector/logo.svg'],
    currentHeroIndex: cloudEvolversSettings?.currentHeroIndex || 0,
    heroTitle: t.training?.cloudEvolvers?.heroTitle || 'Master <span class="text-emerald-500">Azure</span> & <span class="text-emerald-500">Microsoft 365</span> with Expert Training',
    heroSubtitle: t.training?.cloudEvolvers?.heroSubtitle || 'Cloud Evolvers delivers world-class Azure and Microsoft 365 training programs led by Microsoft Certified Trainers (MCT), plus comprehensive Azure consulting services to accelerate your cloud expertise and business growth.',
    ctaButtonText: t.training?.cloudEvolvers?.ctaButtonText || 'Explore Training',
    ctaButtonLink: t.training?.cloudEvolvers?.ctaButtonLink || '/training',
    heroRotationEnabled: cloudEvolversSettings?.heroRotationEnabled || false,
    heroRotationInterval: cloudEvolversSettings?.heroRotationInterval || 5000
  } : {
    heroTitle: 'Expert Microsoft & Azure Training & Services',
    heroSubtitle: 'Complete Azure consulting, training, and file transfer solutions. Built for enterprise scale with expert-led training and comprehensive Azure services.',
    ctaButtonText: 'Explore Services',
    ctaButtonLink: '#services'
  };

  const [loading, setLoading] = useState(false);
  const [renderTime, setRenderTime] = useState<string | null>(null);

  useEffect(() => {
    setRenderTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      {/* Dev tools */}
      {process.env.NODE_ENV === 'development' && renderTime && (
        <>
          <RefreshButton />
          <div className="fixed top-4 right-4 z-50 text-xs bg-black/70 text-white px-2 py-1 rounded">
            Last rendered: {renderTime}
          </div>
        </>
      )}

      {/* Conditional brand rendering */}
      <div suppressHydrationWarning>
        {isCloudEvolveBrand ? (
          <CloudEvolversHome settings={settings} t={t} isClient={isClient} lang={lang} />
        ) : (
          <>
            {/* Hero Section - File Transfer Focus */}
            <section className={cn(
              "backdrop-blur-sm border-b shadow-lg pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 lg:pb-16 transition-colors",
              "bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-indigo-900/40",
              "dark:bg-gradient-to-br dark:from-blue-950/80 dark:via-blue-900/60 dark:to-indigo-900/40",
              "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
              "border-blue-500/30 dark:border-blue-500/30 border-blue-200",
              "shadow-blue-900/10 dark:shadow-blue-900/10 shadow-blue-200/20"
            )}>
              <div className="container max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">
                <div className="text-center mb-12">
                  <Badge variant="secondary" className={cn(
                    "mb-6 text-base transition-colors",
                    "bg-blue-500/10 dark:bg-blue-500/10 bg-blue-100",
                    "text-blue-300 dark:text-blue-300 text-blue-700",
                    "border-blue-500/30 dark:border-blue-500/30 border-blue-300"
                  )}>
                    Enterprise File Transfer SaaS
                  </Badge>
                  <h1 
                    className={cn(
                      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}
                    dangerouslySetInnerHTML={{ 
                      __html: settings.heroTitle
                    }}
                  />
                  <p className={cn(
                    "text-lg lg:text-xl xl:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto transition-colors",
                    "text-slate-300 dark:text-slate-300 text-slate-700"
                  )}>
                    {settings.heroSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 justify-center">
                    <Link href={settings.ctaButtonLink}>
                      <Button size="lg" className={cn(
                        "text-lg xl:text-xl px-8 xl:px-12 py-3 xl:py-4 transition-colors",
                        "bg-blue-600 dark:bg-blue-600 bg-blue-700",
                        "hover:bg-blue-700 dark:hover:bg-blue-700 hover:bg-blue-800",
                        "text-white"
                      )}>
                        <FileUp className="h-5 w-5 mr-2" />
                        {settings.ctaButtonText}
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Core Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <div className={cn(
                    "backdrop-blur-sm rounded-lg p-6 border transition-colors",
                    "bg-blue-950/40 dark:bg-blue-950/40 bg-blue-50/80",
                    "border-blue-500/20 dark:border-blue-500/20 border-blue-200"
                  )}>
                    <FileUp className="h-8 w-8 text-blue-400 dark:text-blue-400 text-blue-600 mb-4" />
                    <h3 className={cn(
                      "text-xl font-semibold mb-2 transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}>Enterprise File Transfer</h3>
                    <p className={cn(
                      "transition-colors",
                      "text-slate-300 dark:text-slate-300 text-slate-700"
                    )}>Secure, high-speed file transfers with enterprise-grade encryption and access controls.</p>
                  </div>
                  <div className={cn(
                    "backdrop-blur-sm rounded-lg p-6 border transition-colors",
                    "bg-blue-950/40 dark:bg-blue-950/40 bg-blue-50/80",
                    "border-blue-500/20 dark:border-blue-500/20 border-blue-200"
                  )}>
                    <Shield className="h-8 w-8 text-blue-400 dark:text-blue-400 text-blue-600 mb-4" />
                    <h3 className={cn(
                      "text-xl font-semibold mb-2 transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}>Military-Grade Security</h3>
                    <p className={cn(
                      "transition-colors",
                      "text-slate-300 dark:text-slate-300 text-slate-700"
                    )}>End-to-end encryption, compliance frameworks, and advanced threat protection.</p>
                  </div>
                  <div className={cn(
                    "backdrop-blur-sm rounded-lg p-6 border transition-colors",
                    "bg-blue-950/40 dark:bg-blue-950/40 bg-blue-50/80",
                    "border-blue-500/20 dark:border-blue-500/20 border-blue-200"
                  )}>
                    <Gauge className="h-8 w-8 text-blue-400 dark:text-blue-400 text-blue-600 mb-4" />
                    <h3 className={cn(
                      "text-xl font-semibold mb-2 transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}>High Performance</h3>
                    <p className={cn(
                      "transition-colors",
                      "text-slate-300 dark:text-slate-300 text-slate-700"
                    )}>Optimized transfer speeds with enterprise-grade reliability and uptime.</p>
                  </div>
                  <div className={cn(
                    "backdrop-blur-sm rounded-lg p-6 border transition-colors",
                    "bg-blue-950/40 dark:bg-blue-950/40 bg-blue-50/80",
                    "border-blue-500/20 dark:border-blue-500/20 border-blue-200"
                  )}>
                    <MonitorCheck className="h-8 w-8 text-blue-400 dark:text-blue-400 text-blue-600 mb-4" />
                    <h3 className={cn(
                      "text-xl font-semibold mb-2 transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}>Azure API Monitoring</h3>
                    <p className={cn(
                      "transition-colors",
                      "text-slate-300 dark:text-slate-300 text-slate-700"
                    )}>Bonus feature: Complete Azure API monitoring and analytics dashboard.</p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className={cn(
                      "text-3xl font-bold mb-6 transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}>Why Choose xEvolve File Transfer?</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 dark:text-green-400 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className={cn(
                            "font-semibold transition-colors",
                            "text-white dark:text-white text-slate-900"
                          )}>Enterprise Scale</h4>
                          <p className={cn(
                            "transition-colors",
                            "text-slate-300 dark:text-slate-300 text-slate-700"
                          )}>Handle large file transfers with high-volume API processing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 dark:text-green-400 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className={cn(
                            "font-semibold transition-colors",
                            "text-white dark:text-white text-slate-900"
                          )}>Zero Trust Security</h4>
                          <p className={cn(
                            "transition-colors",
                            "text-slate-300 dark:text-slate-300 text-slate-700"
                          )}>Complete audit trails and granular access controls</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 dark:text-green-400 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className={cn(
                            "font-semibold transition-colors",
                            "text-white dark:text-white text-slate-900"
                          )}>Azure Native</h4>
                          <p className={cn(
                            "transition-colors",
                            "text-slate-300 dark:text-slate-300 text-slate-700"
                          )}>Built on Azure with native integrations and compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 dark:text-green-400 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className={cn(
                            "font-semibold transition-colors",
                            "text-white dark:text-white text-slate-900"
                          )}>Bonus API Monitoring</h4>
                          <p className={cn(
                            "transition-colors",
                            "text-slate-300 dark:text-slate-300 text-slate-700"
                          )}>Complete Azure API monitoring dashboard included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cn(
                    "rounded-lg p-8 border transition-colors",
                    "bg-gradient-to-br from-blue-950/60 to-indigo-950/40",
                    "dark:bg-gradient-to-br dark:from-blue-950/60 dark:to-indigo-950/40",
                    "bg-gradient-to-br from-blue-100 to-indigo-100",
                    "border-blue-500/20 dark:border-blue-500/20 border-blue-200"
                  )}>
                    <h3 className={cn(
                      "text-2xl font-bold mb-4 transition-colors",
                      "text-white dark:text-white text-slate-900"
                    )}>Live Platform Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 text-blue-600">99.9%</div>
                        <div className={cn(
                          "text-sm transition-colors",
                          "text-slate-300 dark:text-slate-300 text-slate-600"
                        )}>Uptime SLA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 text-blue-600">AES-256</div>
                        <div className={cn(
                          "text-sm transition-colors",
                          "text-slate-300 dark:text-slate-300 text-slate-600"
                        )}>Encryption</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 text-blue-600">24/7</div>
                        <div className={cn(
                          "text-sm transition-colors",
                          "text-slate-300 dark:text-slate-300 text-slate-600"
                        )}>Monitoring</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 text-blue-600">SOC 2</div>
                        <div className={cn(
                          "text-sm transition-colors",
                          "text-slate-300 dark:text-slate-300 text-slate-600"
                        )}>Compliant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Live Dashboard Section */}
            <section className={cn(
              "backdrop-blur-sm border-b shadow-lg py-8 lg:py-12 transition-colors",
              "bg-slate-900/20 dark:bg-slate-900/20 bg-slate-100/50",
              "border-slate-600/30 dark:border-slate-600/30 border-slate-300",
              "shadow-slate-900/10 dark:shadow-slate-900/10 shadow-slate-200/20"
            )}>
              <div className="container max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">
                <div className="text-center mb-8">
                  <h2 className={cn(
                    "text-3xl lg:text-4xl font-bold mb-4 transition-colors",
                    "text-white dark:text-white text-slate-900"
                  )}>Live Platform Dashboard</h2>
                  <p className={cn(
                    "text-lg max-w-3xl mx-auto transition-colors",
                    "text-slate-300 dark:text-slate-300 text-slate-700"
                  )}>
                    Real-time insights into your file transfers and API monitoring. See the platform in action.
                  </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Live Dashboard */}
                  <div>
                    <UnifiedDashboardSection />
                  </div>
                  
                  {/* Showcase */}
                  <div>
                    <Suspense fallback={
                      <div className="flex justify-center items-center min-h-[200px]">
                        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                        <span className={cn(
                          "ml-2 text-sm transition-colors",
                          "text-slate-300 dark:text-slate-300 text-slate-600"
                        )}>Loading showcase...</span>
                      </div>
                    }>
                      <HomeShowcaseSection />
                    </Suspense>
                  </div>
                </div>
              </div>
            </section>

            {/* Blog Section - Mobile only */}
            <section className={cn(
              "lg:hidden border-b py-6 transition-colors",
              "bg-gradient-to-br from-slate-900 via-blue-900/50 to-indigo-900/40",
              "dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900/50 dark:to-indigo-900/40",
              "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
              "border-blue-500/30 dark:border-blue-500/30 border-blue-200"
            )}>
              <div className="container mx-auto px-4">
                <div className="max-w-sm sm:max-w-md mx-auto">
                  <div className={cn(
                    "relative min-h-[500px] rounded-lg overflow-hidden shadow-2xl transition-colors",
                    "bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/50",
                    "dark:bg-gradient-to-br dark:from-slate-900/80 dark:via-blue-900/60 dark:to-indigo-900/50",
                    "bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-50/90"
                  )}>
                    <div className="relative z-10 p-4 sm:p-6">
                      <div className="text-center mb-6">
                        <div className="flex justify-center mb-4">
                          <div className="relative">
                            <div className={cn(
                              "p-3 rounded-full shadow-lg transition-colors",
                              "bg-gradient-to-r from-slate-600 to-blue-600",
                              "dark:bg-gradient-to-r dark:from-slate-600 dark:to-blue-600",
                              "bg-gradient-to-r from-blue-500 to-indigo-500"
                            )}>
                              <BookOpen className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <h2 className={cn(
                          "text-xl sm:text-2xl font-bold mb-3 transition-colors",
                          "bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent",
                          "dark:bg-gradient-to-r dark:from-white dark:via-slate-100 dark:to-blue-200 dark:bg-clip-text dark:text-transparent",
                          "bg-gradient-to-r from-slate-800 via-slate-900 to-blue-800 bg-clip-text text-transparent"
                        )}>
                          Expert Insights
                        </h2>
                        <p className={cn(
                          "text-sm sm:text-base mb-6 leading-relaxed transition-colors",
                          "text-slate-300 dark:text-slate-300 text-slate-600"
                        )}>
                          Latest updates and insights
                        </p>
                      </div>
                      <div className="flex-1">
                        <Suspense fallback={
                          <div className="flex justify-center items-center py-8">
                            <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                          </div>
                        }>
                          <BlogPostsList limit={4} isHomepage={true} useCompactLayout={true} />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact section */}
            <section id="contact" className="bg-blue-900/20 backdrop-blur-sm py-8 lg:py-12">
              <div className="container max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Free Trial</h2>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Ready to transform your file transfer infrastructure? Get started with our enterprise platform today.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-blue-500/30">
                  <ContactForm />
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}