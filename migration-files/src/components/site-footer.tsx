"use client";

import Link from "next/link";
import { Zap, GraduationCap } from "lucide-react";
import { getTranslations } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBrandConfig, isCloudEvolvers, type BrandConfig } from '@/lib/brand-config';
import { useEffect, useState } from 'react';
import FooterContactForm from '@/components/forms/FooterContactForm';

export function SiteFooter() {
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@xevolve.io';
  
  // Get brand configuration - start with null to prevent hydration mismatch
  const [brandConfig, setBrandConfig] = useState<BrandConfig | null>(null);
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState<boolean | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    // Set brand config after hydration
    setBrandConfig(getBrandConfig());
    setIsCloudEvolveBrand(isCloudEvolvers());
    setIsHydrated(true);
  }, []);
  
  return (
    <footer className={`py-8 sm:py-12 mt-8 sm:mt-12 transition-colors ${
      isHydrated && isCloudEvolveBrand 
        ? 'bg-emerald-950/50 dark:bg-emerald-950/50 bg-emerald-50' 
        : 'bg-blue-950/50 dark:bg-blue-950/50 bg-blue-50'
    }`} suppressHydrationWarning>
      <div className="container mx-auto px-4 md:px-6">
        {/* Company Info - Full width on mobile */}
        <div className="mb-8 pb-6 border-b border-border/40 md:border-none">
          <div className="flex items-center gap-2 mb-4" suppressHydrationWarning>
            {isHydrated ? (
              isCloudEvolveBrand ? (
                <GraduationCap className="h-6 w-6 text-emerald-500 dark:text-emerald-500 text-emerald-600" />
              ) : (
                <Zap className="h-6 w-6 text-blue-500 dark:text-blue-500 text-blue-600" />
              )
            ) : (
              // Default icon during SSR - prevent hydration mismatch
              <Zap className="h-6 w-6 text-blue-500 dark:text-blue-500 text-blue-600" />
            )}
            <div className="flex flex-col">
              <span className="text-xl font-bold">{brandConfig?.name || 'xEvolve'}</span>
              <span className="text-xs text-muted-foreground">
                {brandConfig?.footer?.parentCompany || brandConfig?.footer?.companyName || 'Azure Cloud Solutions'}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground max-w-xs">
            {isHydrated && isCloudEvolveBrand 
              ? (t.training?.cloudEvolvers?.heroSubtitle || 'Expert-Led Cloud Training Solutions')
              : 'Complete control and insights for your Azure estate.'
            }
          </p>
        </div>
        
        {/* Footer Links - 2 columns on mobile, 4 on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {!isCloudEvolveBrand ? (
            // xEvolve footer links
            <>
              <div>
                <h3 className="font-medium mb-3 text-sm sm:text-base">Product</h3>
                <ul className="space-y-3">
                  <li><Link href="#who-are-we" className="text-muted-foreground hover:text-primary text-sm block py-1">Who Are We</Link></li>
                  <li><Link href="/pricing" className="text-muted-foreground hover:text-primary text-sm block py-1">Pricing</Link></li>
                  <li><Link href="/documentation" className="text-muted-foreground hover:text-primary text-sm block py-1">Documentation</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-sm sm:text-base">Company</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm block py-1">About Us</Link></li>
                  <li><Link href="/careers" className="text-muted-foreground hover:text-primary text-sm block py-1">Careers</Link></li>
                  <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm block py-1">Blog</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm block py-1">Contact</Link></li>
                </ul>
              </div>
            </>
          ) : (
            // Cloud Evolvers footer links
            <>
              <div>
                <h3 className="font-medium mb-3 text-sm sm:text-base">Training</h3>
                <ul className="space-y-3">
                  <li><Link href="/training" className="text-muted-foreground hover:text-primary text-sm block py-1">All Courses</Link></li>
                  <li><Link href="/training#azure-fundamentals" className="text-muted-foreground hover:text-primary text-sm block py-1">Azure Fundamentals</Link></li>
                  <li><Link href="/training#azure-administrator" className="text-muted-foreground hover:text-primary text-sm block py-1">Azure Administrator</Link></li>
                  <li><Link href="/training#azure-architect" className="text-muted-foreground hover:text-primary text-sm block py-1">Azure Architect</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-sm sm:text-base">Specializations</h3>
                <ul className="space-y-3">
                  <li><Link href="/training#azure-security" className="text-muted-foreground hover:text-primary text-sm block py-1">Azure Security</Link></li>
                  <li><Link href="/training#azure-bicep" className="text-muted-foreground hover:text-primary text-sm block py-1">Azure Bicep & IaC</Link></li>
                  <li><Link href="/training#copilot-agents" className="text-muted-foreground hover:text-primary text-sm block py-1">GitHub Copilot Agents</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm block py-1">Custom Training</Link></li>
                </ul>
              </div>
            </>
          )}
          
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium mb-3 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-3 md:space-y-3 grid grid-cols-2 md:grid-cols-1 gap-x-4">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm block py-1">{t.footer.privacyPolicy}</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm block py-1">{t.footer.termsOfService}</Link></li>
              <li><Link href="/cookie-policy" className="text-muted-foreground hover:text-primary text-sm block py-1">{t.footer.cookiePolicy}</Link></li>
              {!isCloudEvolveBrand && (
                <li><Link href="/submit-idea" className="text-muted-foreground hover:text-primary text-sm block py-1">{t.footer.submitIdea}</Link></li>
              )}
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium mb-3 text-sm sm:text-base">
              {isCloudEvolveBrand ? 'Get Started' : t.footer.connect}
            </h3>
            {isCloudEvolveBrand ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Ready to advance your cloud career?</p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-sm transition-colors text-emerald-400 dark:text-emerald-400 text-emerald-600 hover:text-emerald-300 dark:hover:text-emerald-300 hover:text-emerald-700">Request Training Info</Link>
                  <Link href="/training" className="block text-sm transition-colors text-emerald-400 dark:text-emerald-400 text-emerald-600 hover:text-emerald-300 dark:hover:text-emerald-300 hover:text-emerald-700">Browse Courses</Link>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Email: training@cloudevolvers.com
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Email: {contactEmail}
                </p>
                <FooterContactForm />
              </div>
            )}
          </div>
        </div>
        
        {/* xEvolve Partnership Section for Cloud Evolvers */}
        {isCloudEvolveBrand && (
          <div className="border-t border-border/40 mt-8 pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 text-white dark:text-white text-gray-900">
                {t.training?.cloudEvolvers?.xevolvePartnership || 'Powered by xEvolve Expertise'}
              </h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                {t.training?.cloudEvolvers?.xevolvePartnershipDesc || 'Cloud Evolvers is backed by xEvolve\'s deep Azure consulting experience and real-world project insights.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a 
                  href="https://xevolve.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Zap className="h-4 w-4" />
                  {t.training?.cloudEvolvers?.visitXEvolve || 'Visit xEvolve for Full Azure Services'}
                </a>
                <span className="text-muted-foreground text-sm">
                  Complete Azure management, monitoring, and optimization
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Copyright */}
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 {brandConfig?.footer?.companyName || 'xEvolve'}. {t.footer.allRightsReserved}
            <span className="block md:inline md:ml-1">Proudly made in the Netherlands.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}