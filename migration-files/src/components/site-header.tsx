"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Zap, Cloud, Shield, Bot, Network, Cpu, Code, Globe, Menu, X, FileUp, LineChart, PiggyBank, Sparkles, ArrowRight, GraduationCap, BookOpen, Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageToggle from "@/components/LanguageToggle";
import { getTranslations, SupportedLang } from '@/utils/i18n';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';
import BrandSwitcher from '@/components/dev/brand-switcher';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lang, setLang] = useState<SupportedLang>('en');
  const [isClient, setIsClient] = useState(false);
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pathname = usePathname();
  
  // Get brand configuration - hydration safe
  const brandConfig = getBrandConfig();
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);
  
  // Initialize brand after hydration
  useEffect(() => {
    setIsCloudEvolveBrand(isCloudEvolvers());
  }, []);

  // Enhanced scroll handling - banner shows when scrolling up, hides when scrolling down
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (!ticking.current) {
      requestAnimationFrame(() => {
        const scrollingUp = currentScrollY < lastScrollY.current;
        const atTop = currentScrollY < 50;
        
        setIsScrollingUp(scrollingUp);
        
        // Always show banner when at top or scrolling up
        // Hide banner when scrolling down and past threshold
        if (atTop || scrollingUp) {
          setBannerVisible(true);
        } else if (!scrollingUp && currentScrollY > 100) {
          setBannerVisible(false);
        }

        // Set scrolled state for header styling
        setScrolled(currentScrollY > 20);
        
        lastScrollY.current = Math.max(0, currentScrollY);
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, []);

  // Detect language from cookie on client side with proper SSR handling
  useEffect(() => {
    const detectedLang = (localStorage.getItem('lang') as SupportedLang) ||
      (document.cookie.match(/NEXT_LOCALE=(nl|en)/)?.[1] as SupportedLang) ||
      (navigator.language.startsWith('nl') ? 'nl' : 'en');
    setLang(detectedLang);
    setIsClient(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  
  const t = getTranslations(isClient ? lang : 'en');

  // Return a loading state during hydration to prevent mismatch
  if (!isClient) {
    return <div className="h-0" />; // Return minimal element during SSR
  }

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      {/* Enhanced MCT Training Banner - Only show for Cloud Evolvers */}
      {isCloudEvolveBrand && (
        <div 
          className={cn(
            "fixed top-0 left-0 right-0 z-[300] transition-all duration-500 ease-in-out transform",
            bannerVisible 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-full opacity-0"
          )}
        >
          <div className={`bg-gradient-to-r ${brandConfig.colors.primary} text-white shadow-lg`} suppressHydrationWarning>
            <div className="container max-w-7xl mx-auto px-4 py-2">
              <div className="flex items-center justify-between gap-2 md:gap-4">
                {/* Enhanced Banner Content */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm flex-shrink-0">
                    <GraduationCap className="h-3.5 w-3.5 text-white/80" />
                  </div>
                  <div className="min-w-0 flex-1" suppressHydrationWarning>
                    <div className="font-bold text-sm md:text-base text-center lg:text-left">
                      <span className="hidden sm:inline">{t.cloudEvolversExtended?.onlyMicrosoftCertifiedTrainersShort || "🎓 Only Microsoft Certified Trainers (MCT) - Azure & Microsoft Stack Excellence"}</span>
                      <span className="sm:hidden">{t.cloudEvolversExtended?.onlyMCTTrainersShort || "🎓 Only MCT Trainers"}</span>
                    </div>
                    <div className="text-xs text-white/80 hidden md:block text-center lg:text-left">
                      {t.cloudEvolversExtended?.expertLedTrainingWithExperience || "Expert-led training with real-world Azure experience"}
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <Link href="/training">
                    <Button 
                      size="sm" 
                      className="bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-xs px-3 py-1.5 h-auto"
                    >
                      {t.header?.viewCourses || 'View Courses'} <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="sm:hidden flex-shrink-0">
                  <Link href="/training">
                    <Button size="sm" className="bg-white/15 hover:bg-white/25 text-white text-xs px-2 py-1 h-auto">
                      Courses
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header - positioned below banner when banner is visible */}
      <header 
        className={cn(
          "fixed left-0 right-0 w-full backdrop-blur-md shadow-lg z-[200] transition-all duration-500",
          (bannerVisible && isCloudEvolveBrand) ? "top-[56px]" : "top-0",
          // Theme-aware header background
          "bg-white/95 dark:bg-slate-900/95",
          "border-b border-gray-200/50 dark:border-slate-700/50"
        )}
      >
        <div className={cn(
          "container max-w-7xl mx-auto px-4 transition-all duration-500",
          scrolled ? "py-1" : "py-2.5"
        )}>
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "min-h-[36px]" : "min-h-[40px]"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <div className={cn(
                "rounded-xl shadow-lg transition-all duration-500 overflow-hidden",
                "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700",
                "border border-gray-300/50 dark:border-slate-600/50",
                scrolled ? "p-1" : "p-1.5"
              )}>
                <img 
                  src={isCloudEvolveBrand ? "/cloudevolvers-logo/logo/vector/logo.svg" : "/xevolve-logo/vector/logo.svg"} 
                  alt={brandConfig.name}
                  className={cn("transition-all duration-500", scrolled ? "h-6 w-6" : "h-8 w-8")}
                />
              </div>
              <div className="hidden sm:block">
                <div className={cn(
                  "font-bold tracking-tight transition-all duration-500",
                  "text-gray-900 dark:text-white",
                  scrolled ? "text-lg" : "text-xl"
                )}>
                  {brandConfig.name}
                </div>
                <div className={cn(
                  "font-medium transition-all duration-500",
                  "text-gray-600 dark:text-slate-300",
                  scrolled ? "text-xs -mt-0.5" : "text-xs -mt-0.5"
                )}>
                  {isCloudEvolveBrand 
                    ? (t.header?.trainingBannerSubtitle || brandConfig.tagline)
                    : brandConfig.tagline
                  }
                </div>
              </div>
            </Link>

            {/* Services Navigation - Multi-line Layout with single-line items */}
            <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
              {isCloudEvolveBrand ? (
                // Cloud Evolvers: Training + Key Services navigation
                !scrolled ? (
                  // Two-row layout: Training + Services when not scrolled
                  <div className="flex flex-col items-center justify-center gap-2 max-w-4xl">
                    {/* Training Row */}
                    <div className="flex items-center justify-center gap-x-6">
                      <Link href="/training" className={`flex items-center gap-1.5 text-gray-800 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <GraduationCap className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="text-sm font-medium whitespace-nowrap">{t.header?.allTraining}</span>
                      </Link>
                      <Link href="/training?category=Azure" className={`flex items-center gap-1.5 text-gray-800 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <Cloud className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="text-sm font-medium whitespace-nowrap">{t.header?.azureTraining}</span>
                      </Link>
                      <Link href="/training?category=Microsoft%20365" className={`flex items-center gap-1.5 text-gray-800 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <Building className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="text-sm font-medium whitespace-nowrap">{t.header?.microsoft365}</span>
                      </Link>
                      <Link href="/training?category=Security" className={`flex items-center gap-1.5 text-gray-800 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <Shield className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="text-sm font-medium whitespace-nowrap">{t.header?.security}</span>
                      </Link>
                    </div>
                    {/* Services Row */}
                    <div className="flex items-center justify-center gap-x-6 text-xs">
                      <Link href="/services/azure-monitoring" className={`flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <LineChart className="h-3.5 w-3.5 text-gray-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="font-medium whitespace-nowrap">{t.header?.azureMonitoring}</span>
                      </Link>
                      <Link href="/services/cloud-management" className={`flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <Cloud className="h-3.5 w-3.5 text-gray-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="font-medium whitespace-nowrap">{t.header?.cloudManagement}</span>
                      </Link>
                      <Link href="/services/infrastructure-as-code" className={`flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <Code className="h-3.5 w-3.5 text-gray-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="font-medium whitespace-nowrap">{t.header?.infrastructureAsCode}</span>
                      </Link>
                      <Link href="/services/cost-optimization" className={`flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group`}>
                        <PiggyBank className="h-3.5 w-3.5 text-gray-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                        <span className="font-medium whitespace-nowrap">{t.header?.costOptimization}</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  // Compact training + services when scrolled
                  <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-slate-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300/50 dark:border-slate-600/30">
                    <Link href="/training" className="flex items-center gap-1 text-gray-800 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                      <GraduationCap className="h-3 w-3 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                      <span className="text-xs font-medium whitespace-nowrap">Training</span>
                    </Link>
                    <div className="w-px h-2.5 bg-gray-400/50 dark:bg-slate-600/50" />
                    <Link href="/services/azure-monitoring" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                      <LineChart className="h-3 w-3 text-gray-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                      <span className="text-xs font-medium whitespace-nowrap">Monitoring</span>
                    </Link>
                    <div className="w-px h-2.5 bg-gray-400/50 dark:bg-slate-600/50" />
                    <Link href="/services/cloud-management" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                      <Cloud className="h-3 w-3 text-gray-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                      <span className="text-xs font-medium whitespace-nowrap">Cloud</span>
                    </Link>
                  </div>
                )
              ) : (
                // xEvolve: SaaS Azure app - keep center area clean for focused experience
                <div></div>
              )}
            </div>

            {/* Right side - Navigation and CTA */}
            <div className="flex items-center gap-3">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                <Link href="/blog">
                  <Button 
                    size={scrolled ? "sm" : "sm"} 
                    className={cn(
                      "text-white shadow-lg transition-all duration-500",
                      isCloudEvolveBrand 
                        ? `bg-gradient-to-r ${brandConfig.colors.secondary} hover:opacity-90` 
                        : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
                      scrolled ? "text-xs px-2 py-1" : ""
                    )}
                  >
                    <BookOpen className={cn("mr-1 transition-all duration-500", scrolled ? "h-3 w-3" : "h-4 w-4")} />
                    Blog
                  </Button>
                </Link>
                {!isCloudEvolveBrand && (
                  <Link href="/showcase">
                    <Button 
                      variant="ghost" 
                      size={scrolled ? "sm" : "sm"} 
                      className={cn(
                        "transition-all duration-500",
                        "text-gray-700 dark:text-gray-200",
                        "hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-500/10",
                        scrolled ? "text-xs px-2 py-1" : ""
                      )}
                    >
                      {t.header?.showcase || 'Showcase'}
                    </Button>
                  </Link>
                )}
                {isCloudEvolveBrand && (
                  <Link href="/training">
                    <Button 
                      size={scrolled ? "sm" : "sm"} 
                      className={cn(
                        "text-white shadow-lg transition-all duration-500",
                        `bg-gradient-to-r ${brandConfig.colors.primary} hover:opacity-90`,
                        scrolled ? "text-xs px-2 py-1" : ""
                      )}
                    >
                      <GraduationCap className={cn("mr-1 transition-all duration-500", scrolled ? "h-3 w-3" : "h-4 w-4")} />
                      {t.header?.training || 'Training'}
                    </Button>
                  </Link>
                )}
                <Link href="/contact">
                  <Button 
                    size={scrolled ? "sm" : "sm"} 
                    className={cn(
                      "text-white transition-all duration-500",
                      isCloudEvolveBrand 
                        ? `${brandConfig.colors.accent} hover:bg-opacity-80` 
                        : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
                      scrolled ? "text-xs px-2 py-1" : ""
                    )}
                  >
                    {t.header?.getStarted || 'Get Started'}
                  </Button>
                </Link>
              </div>
              
              {/* Development Brand Switcher */}
              <BrandSwitcher />
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Language Toggle */}
              <div className="ml-2">
                <LanguageToggle />
              </div>
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "lg:hidden transition-colors",
                  "text-gray-700 dark:text-gray-200",
                  "hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white"
                )}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={cn(
              "lg:hidden mt-4 pt-4 transition-colors",
              "border-t border-gray-200 dark:border-slate-700"
            )}>
              <nav className="space-y-2">
                <Link href="/blog" className="block">
                  <Button variant="ghost" className={cn(
                    "w-full justify-start transition-colors",
                    "text-gray-700 dark:text-gray-200",
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    "hover:bg-blue-50 dark:hover:bg-blue-500/10"
                  )}>
                    Blog
                  </Button>
                </Link>
                {!isCloudEvolveBrand && (
                  <Link href="/showcase" className="block">
                    <Button variant="ghost" className={cn(
                      "w-full justify-start transition-colors",
                      "text-gray-700 dark:text-gray-200",
                      "hover:text-blue-600 dark:hover:text-blue-400",
                      "hover:bg-blue-50 dark:hover:bg-blue-500/10"
                    )}>
                      {t.header?.showcase || 'Showcase'}
                    </Button>
                  </Link>
                )}
                {isCloudEvolveBrand && (
                  <Link href="/training" className="block">
                    <Button className={`w-full justify-start bg-gradient-to-r ${brandConfig.colors.primary} text-white`}>
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {t.header?.training || 'Training'}
                    </Button>
                  </Link>
                )}
                <Link href="/contact" className="block">
                  <Button className={cn(
                    "w-full justify-start text-white",
                    isCloudEvolveBrand 
                      ? `${brandConfig.colors.accent} hover:bg-opacity-80` 
                      : "bg-blue-600 hover:bg-blue-700"
                  )}>
                    {t.header?.getStarted || 'Get Started'}
                  </Button>
                </Link>
                
                {/* Mobile Services */}
                {isCloudEvolveBrand && (
                  <div className={cn(
                    "pt-4 mt-4 transition-colors",
                    "border-t border-gray-200 dark:border-slate-700"
                  )}>
                    <h3 className={cn(
                      "text-sm font-medium mb-3",
                      "text-gray-600 dark:text-slate-300"
                    )}>Training Categories</h3>
                    <div className="grid grid-cols-1 gap-1">
                      <Link href="/training" className={cn(
                        "flex items-center gap-3 p-2 rounded-md transition-colors",
                        "text-gray-700 dark:text-gray-200",
                        "hover:bg-gray-100 dark:hover:bg-slate-700"
                      )}>
                        <GraduationCap className={cn(
                          "h-4 w-4 transition-colors",
                          "text-gray-500 dark:text-gray-400"
                        )} />
                        <span className="text-sm">{t.header?.allTraining}</span>
                      </Link>
                      <Link href="/training?category=Azure" className={cn(
                        "flex items-center gap-3 p-2 rounded-md transition-colors",
                        "text-gray-700 dark:text-gray-200",
                        "hover:bg-gray-100 dark:hover:bg-slate-700"
                      )}>
                        <Cloud className={cn(
                          "h-4 w-4 transition-colors",
                          "text-gray-500 dark:text-gray-400"
                        )} />
                        <span className="text-sm">{t.header?.azureTraining}</span>
                      </Link>
                      <Link href="/training?category=Microsoft%20365" className={cn(
                        "flex items-center gap-3 p-2 rounded-md transition-colors",
                        "text-gray-700 dark:text-gray-200",
                        "hover:bg-gray-100 dark:hover:bg-slate-700"
                      )}>
                        <Building className={cn(
                          "h-4 w-4 transition-colors",
                          "text-gray-500 dark:text-gray-400"
                        )} />
                        <span className="text-sm">{t.header?.microsoft365}</span>
                      </Link>
                      <Link href="/training?category=Security" className={cn(
                        "flex items-center gap-3 p-2 rounded-md transition-colors",
                        "text-gray-700 dark:text-gray-200",
                        "hover:bg-gray-100 dark:hover:bg-slate-700"
                      )}>
                        <Shield className={cn(
                          "h-4 w-4 transition-colors",
                          "text-gray-500 dark:text-gray-400"
                        )} />
                        <span className="text-sm">{t.header?.security}</span>
                      </Link>
                      <Link href="/training?category=Power%20Platform" className={cn(
                        "flex items-center gap-3 p-2 rounded-md transition-colors",
                        "text-gray-700 dark:text-gray-200",
                        "hover:bg-gray-100 dark:hover:bg-slate-700"
                      )}>
                        <Globe className={cn(
                          "h-4 w-4 transition-colors",
                          "text-gray-500 dark:text-gray-400"
                        )} />
                        <span className="text-sm">{t.header?.powerPlatform}</span>
                      </Link>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default SiteHeader;
