import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award, Clock, CheckCircle, BookOpen, Loader2, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MicrosoftTrainingBlock } from './page-microsoft-training-block';
import { ServicesGrid } from './page-services-grid';
import BlogPostsList from '@/components/homepage/BlogPostsList';
import { getTranslations } from '@/utils/i18n';
import { CloudEvolversHero } from '@/components/cloud-evolvers/CloudEvolversHero';
import { CloudEvolversCourses } from '@/components/cloud-evolvers/CloudEvolversCourses';
import { CloudEvolversInsights } from '@/components/cloud-evolvers/CloudEvolversInsights';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: { name: string; title: string };
  publishedAt: string;
  category?: string;
}

interface CloudEvolversHomeProps {
  settings: {
    heroTitle: string;
    heroSubtitle: string;
    ctaButtonText: string;
    ctaButtonLink: string;
  };
  t: ReturnType<typeof getTranslations>;
  isClient: boolean;
  lang: string;
}

export function CloudEvolversHome({ settings, t, isClient, lang }: CloudEvolversHomeProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPagination, setAutoPagination] = useState(true);

  // Fetch blog posts on component mount
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setBlogLoading(true);
        const apiLang = lang || 'en'; // Use the provided language parameter
        const response = await fetch(`/api/blog?limit=9&lang=${apiLang}`); // Get 9 posts for pagination (3 pages of 3)
        if (response.ok) {
          const data = await response.json();
          const posts = data.success && data.posts ? data.posts : [];
          setBlogPosts(posts);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, [isClient, lang]);

  // Auto-pagination effect
  useEffect(() => {
    if (!autoPagination || blogPosts.length === 0) return;

    const postsPerPage = 3;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000); // Change page every 15 seconds

    return () => clearInterval(interval);
  }, [autoPagination, blogPosts.length]);

  // Hero props
  const heroProps = {
    settings,
    t,
    imageLoaded: true,
    imageError: false,
    getCurrentHeroImage: () => '/cloudevolvers-logo/logo/high-res/logo-transparent.png' // Use your new logo as hero image
  };

  // Calculate pagination for insights
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

  // Insights props with pagination
  const insightsProps = {
    t,
    posts: currentPosts, // Show only current page posts (3 at a time)
    loading: blogLoading,
    currentPage,
    totalPages,
    autoPagination,
    onToggleAutoPagination: (enabled: boolean) => setAutoPagination(enabled),
    onPageChange: (page: number) => setCurrentPage(page)
  };

  return (
    <>
      {/* Hero Section with 3-column desktop layout */}
      <section className={cn(
        "backdrop-blur-sm shadow-lg pt-4 md:pt-6 lg:pt-8 pb-6 md:pb-8 lg:pb-12 transition-colors",
        "bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-emerald-900/20 from-emerald-50 via-teal-50 to-emerald-50",
        "border-b border-emerald-500/30 dark:border-emerald-500/30 border-emerald-200",
        "shadow-emerald-900/10 dark:shadow-emerald-900/10 shadow-emerald-200/20"
      )}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          {/* Desktop: 2-column layout - Hero and Popular Courses only */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-stretch lg:min-h-[500px]">
            {/* Hero Section */}
            <div className="lg:col-span-1">
              <CloudEvolversHero {...heroProps} />
            </div>
            
            {/* Popular Courses */}
            <div className="lg:col-span-1">
              <CloudEvolversCourses t={t} />
            </div>
          </div>

          {/* Mobile: Stacked layout - Traditional Hero */}
          <div className="lg:hidden">
            <div className="text-center">
              <Badge variant="secondary" className={cn(
                "mb-6 text-sm transition-colors",
                "bg-emerald-500/10 dark:bg-emerald-500/10 bg-emerald-100",
                "text-emerald-600 dark:text-emerald-600 text-emerald-700",
                "border-emerald-500/20 dark:border-emerald-500/20 border-emerald-300"
              )}>
                {t.training?.cloudEvolvers?.expertTraining || 'MCT-Led Training & Azure Consulting'}
              </Badge>
              <h1 
                className={cn(
                  "text-3xl sm:text-4xl font-bold mb-6 leading-tight transition-colors",
                  "text-white dark:text-white text-slate-900"
                )}
                dangerouslySetInnerHTML={{ __html: settings.heroTitle }}
              />
              <p className={cn(
                "text-lg sm:text-xl mb-8 leading-relaxed transition-colors",
                "text-slate-300 dark:text-slate-300 text-slate-800"
              )}>
                {settings.heroSubtitle}
              </p>

              {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                <div className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
                  "bg-emerald-500/10 dark:bg-emerald-500/10 bg-emerald-100",
                  "border border-emerald-500/20 dark:border-emerald-500/20 border-emerald-300"
                )}>
                  <Award className="h-4 w-4 text-emerald-500 dark:text-emerald-500 text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-600 text-emerald-700">{t.cloudEvolversExtended?.microsoftCertifiedTrainers || "Microsoft Certified Trainers"}</span>
                </div>
                <div className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
                  "bg-teal-500/10 dark:bg-teal-500/10 bg-teal-100",
                  "border border-teal-500/20 dark:border-teal-500/20 border-teal-300"
                )}>
                  <Cloud className="h-4 w-4 text-teal-500 dark:text-teal-500 text-teal-600" />
                  <span className="text-xs font-medium text-teal-600 dark:text-teal-600 text-teal-700">{t.cloudEvolversExtended?.azureExpertise || "Azure Expertise"}</span>
                </div>
                <div className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
                  "bg-emerald-600/10 dark:bg-emerald-600/10 bg-emerald-100",
                  "border border-emerald-600/20 dark:border-emerald-600/20 border-emerald-300"
                )}>
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-600 text-emerald-700" />
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-600 text-emerald-700">{t.training?.cloudEvolvers?.handsOnLearning || "Hands-on Learning"}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <Link href={settings.ctaButtonLink}>
                  <Button size="lg" className={cn(
                    "w-full shadow-lg border-0 transition-all",
                    "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
                    "dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-500 dark:hover:from-emerald-600 dark:hover:to-teal-600",
                    "shadow-emerald-900/25 dark:shadow-emerald-900/25 shadow-emerald-200/25",
                    "text-white"
                  )}>
                    <GraduationCap className="mr-2 h-5 w-5" />
                    {settings.ctaButtonText}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className={cn(
                    "w-full transition-colors",
                    "border-emerald-500 dark:border-emerald-500 border-emerald-600",
                    "text-emerald-700 dark:text-emerald-700 text-emerald-800",
                    "hover:bg-emerald-50 dark:hover:bg-emerald-50 hover:bg-emerald-100",
                    "hover:text-emerald-800 dark:hover:text-emerald-800 hover:text-emerald-900"
                  )}>
                    {t.common?.contactUs || 'Contact Us'}
                  </Button>
                </Link>
              </div>

              {/* Additional Training Info */}
              <div className="text-sm text-muted-foreground mb-8">
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-600 text-emerald-700" />
                    <span className="text-slate-600 dark:text-slate-400 text-slate-800">{t.training?.cloudEvolvers?.mctLedSessions || 'MCT-Led Sessions'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-teal-600 dark:text-teal-600 text-teal-700" />
                    <span className="text-slate-600 dark:text-slate-400 text-slate-800">{t.training?.cloudEvolvers?.handsOnLabs || 'Hands-On Labs'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-emerald-700 dark:text-emerald-700 text-emerald-800" />
                    <span className="text-slate-600 dark:text-slate-400 text-slate-800">{t.training?.cloudEvolvers?.certificationPrep || 'Certification Prep'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Training Courses with Azure Focus */}
      <section className={cn(
        "py-8 md:py-12 lg:py-16 transition-colors",
        "bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900",
        "dark:bg-gradient-to-br dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900",
        "bg-gradient-to-br from-emerald-50 via-teal-50/50 to-emerald-50"
      )}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-colors",
              "text-white dark:text-white text-slate-900"
            )}>
              {t.training?.cloudEvolvers?.popularTrainingCourses || 'Popular Training Courses'}
            </h2>
            <p className={cn(
              "text-lg max-w-3xl mx-auto transition-colors",
              "text-slate-300 dark:text-slate-300 text-slate-800"
            )}>
              {t.training?.cloudEvolvers?.expertLedTrainingDesc || 'Expert-led training designed to accelerate your Azure and Microsoft 365 journey'}
            </p>
          </div>
          
          <MicrosoftTrainingBlock />
        </div>
      </section>

      {/* Featured Services Section */}
      <section className={cn(
        "py-8 md:py-12 lg:py-16 transition-colors",
        "bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900",
        "dark:bg-gradient-to-br dark:from-slate-900 dark:via-emerald-900/30 dark:to-slate-900",
        "bg-gradient-to-br from-teal-50 via-emerald-50/70 to-teal-50"
      )}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="secondary" className={cn(
              "mb-4 transition-colors",
              "bg-emerald-500/10 dark:bg-emerald-500/10 bg-emerald-200/60",
              "text-emerald-600 dark:text-emerald-600 text-emerald-700",
              "border-emerald-500/20 dark:border-emerald-500/20 border-emerald-300/60"
            )}>
              {t.training?.cloudEvolvers?.expertiseAreas || 'Expertise Areas'}
            </Badge>
            <h2 className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-colors",
              "text-white dark:text-white text-slate-900"
            )}>
              {t.cloudEvolversExtended?.comprehensiveServices || "Comprehensive Azure & Cloud Services"}
            </h2>
            <p className={cn(
              "text-lg max-w-3xl mx-auto transition-colors",
              "text-slate-300 dark:text-slate-300 text-slate-800"
            )}>
              {t.training?.cloudEvolvers?.fullSpectrumServices || 'Beyond training, we offer full-spectrum Azure consulting and management services'}
            </p>
          </div>
          
          <ServicesGrid lang={lang as any} />
        </div>
      </section>

      {/* Mobile: Latest Insights - Positioned after services */}
      <section className={cn(
        "lg:hidden py-8 md:py-12 transition-colors",
        "bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900",
        "dark:bg-gradient-to-br dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900",
        "bg-gradient-to-br from-emerald-50 via-teal-50/50 to-emerald-50"
      )}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-emerald-400 dark:text-emerald-400 text-emerald-600" />
              <h3 className={cn(
                "text-xl font-semibold transition-colors",
                "text-white dark:text-white text-slate-900"
              )}>
                {t.training?.cloudEvolvers?.latestInsights || 'Latest Insights'}
              </h3>
            </div>
          </div>
          <React.Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-emerald-500" />
              <span className={cn(
                "ml-2 text-sm transition-colors",
                "text-slate-300 dark:text-slate-300 text-slate-800"
              )}>{t.training?.cloudEvolvers?.loadingBlogPosts || 'Loading blog posts...'}</span>
            </div>
          }>
            <BlogPostsList limit={4} isHomepage={true} useCompactLayout={true} showPagination={true} />
          </React.Suspense>
        </div>
      </section>

      {/* Latest Insights Section for Desktop */}
      <section className={cn(
        "hidden lg:block py-12 md:py-16 transition-colors",
        "bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900",
        "dark:bg-gradient-to-br dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900",
        "bg-gradient-to-br from-emerald-50 via-teal-50/50 to-emerald-50"
      )}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-emerald-400 dark:text-emerald-400 text-emerald-600" />
              <h2 className={cn(
                "text-2xl md:text-3xl font-bold transition-colors",
                "text-white dark:text-white text-slate-900"
              )}>
                {t.training?.cloudEvolvers?.latestInsights || 'Latest Insights'}
              </h2>
            </div>
            <p className={cn(
              "text-lg max-w-3xl mx-auto transition-colors",
              "text-slate-300 dark:text-slate-300 text-slate-800"
            )}>
              Stay updated with the latest Azure and Microsoft 365 insights, tips, and best practices from our experts.
            </p>
          </div>
          <React.Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-emerald-500" />
              <span className={cn(
                "ml-2 text-sm transition-colors",
                "text-slate-300 dark:text-slate-300 text-slate-800"
              )}>{t.training?.cloudEvolvers?.loadingBlogPosts || 'Loading blog posts...'}</span>
            </div>
          }>
            <BlogPostsList limit={6} isHomepage={true} useCompactLayout={false} showPagination={true} />
          </React.Suspense>
        </div>
      </section>

      {/* xEvolve Partnership Section */}
      <section className={cn(
        "backdrop-blur-sm border-b py-16 transition-colors",
        "bg-emerald-900/20 dark:bg-emerald-900/20 bg-emerald-100/50",
        "border-emerald-500/30 dark:border-emerald-500/30 border-emerald-300/50"
      )}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors",
              "text-white dark:text-white text-slate-900"
            )}>
              {t.training?.cloudEvolvers?.xevolvePartnership || 'Powered by Spot Cloud Expertise'}
            </h2>
            <p className={cn(
              "text-lg max-w-3xl mx-auto mb-8 transition-colors",
              "text-slate-400 dark:text-slate-400 text-slate-700"
            )}>
              {t.training?.cloudEvolvers?.xevolvePartnershipDesc || 'Cloud Evolvers is backed by xEvolve\'s deep Azure consulting experience and real-world project insights.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={cn(
                "text-2xl font-semibold mb-6 transition-colors",
                "text-white dark:text-white text-slate-900"
              )}>{t.cloudEvolversExtended?.realWorldExperience || "Real-World Experience"}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className={cn(
                    "transition-colors",
                    "text-slate-400 dark:text-slate-400 text-slate-700"
                  )}>{t.training?.cloudEvolvers?.trainingInformedByImplementations || 'Training informed by actual Azure implementations'}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className={cn(
                    "transition-colors",
                    "text-slate-400 dark:text-slate-400 text-slate-700"
                  )}>{t.training?.cloudEvolvers?.bestPracticesFromMigrations || 'Best practices from enterprise cloud migrations'}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className={cn(
                    "transition-colors",
                    "text-slate-400 dark:text-slate-400 text-slate-700"
                  )}>{t.training?.cloudEvolvers?.commonPitfallsHowToAvoid || 'Common pitfalls and how to avoid them'}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className={cn(
                    "transition-colors",
                    "text-slate-400 dark:text-slate-400 text-slate-700"
                  )}>{t.training?.cloudEvolvers?.industrySpecificScenarios || 'Industry-specific scenarios and solutions'}</p>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "p-8 rounded-lg border transition-colors",
              "bg-emerald-900/30 dark:bg-emerald-900/30 bg-emerald-100/70",
              "border-emerald-500/20 dark:border-emerald-500/20 border-emerald-300/50"
            )}>
              <h3 className={cn(
                "text-xl font-semibold mb-4 transition-colors",
                "text-white dark:text-white text-slate-900"
              )}>{t.cloudEvolversExtended?.needFullServices || "Need Full Azure Services?"}</h3>
              <p className={cn(
                "mb-6 transition-colors",
                "text-slate-400 dark:text-slate-400 text-slate-700"
              )}>
                {t.cloudEvolversExtended?.beyondTrainingAzureManagement || "Beyond training, xEvolve provides comprehensive Azure management, optimization, and consulting services."}
              </p>
              <Link href="/?brand=xevolve">
                <Button className={cn(
                  "transition-colors",
                  "bg-emerald-600 dark:bg-emerald-600 bg-emerald-700",
                  "hover:bg-emerald-700 dark:hover:bg-emerald-700 hover:bg-emerald-800"
                )}>
                  {t.training?.cloudEvolvers?.visitXEvolve || 'Visit xEvolve'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={cn(
        "py-12 md:py-16 lg:py-20 transition-colors",
        "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700",
        "dark:bg-gradient-to-r dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-700",
        "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"
      )}>
        <div className="container max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold mb-6 transition-colors",
            "text-white"
          )}>
            {t.training?.cloudEvolvers?.readyToTransformSkills || 'Ready to Transform Your Cloud Skills?'}
          </h2>
          <p className={cn(
            "text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors",
            "text-emerald-100 dark:text-emerald-100 text-emerald-50"
          )}>
            {t.training?.cloudEvolvers?.joinHundredsProfessionals || 'Join hundreds of professionals who have accelerated their careers with our expert-led Azure training'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/training">
              <Button size="lg" className={cn(
                "shadow-lg transition-colors",
                "bg-white dark:bg-white bg-emerald-50",
                "text-emerald-600 dark:text-emerald-600 text-emerald-700",
                "hover:bg-emerald-50 dark:hover:bg-emerald-50 hover:bg-emerald-100"
              )}>
                <GraduationCap className="mr-2 h-5 w-5" />
                {t.training?.cloudEvolvers?.viewAllTraining || 'View All Training'}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className={cn(
                "transition-colors",
                "border-white dark:border-white border-emerald-100",
                "text-white dark:text-white text-emerald-50",
                "hover:bg-white/10 dark:hover:bg-white/10 hover:bg-emerald-100/20"
              )}>
                {t.common?.contactUs || "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
