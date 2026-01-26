import { Suspense } from 'react';
import { headers } from 'next/headers';
import BlogList from '@/components/blog/BlogList';
import { getTranslations, SupportedLang } from '@/utils/i18n';
import { getBrandConfig } from '@/lib/brand-config';

export const metadata = {
  title: 'Azure Insights - Cloud Evolvers',
  description: 'Expert Azure insights, training guides, and certification best practices from Microsoft Certified Trainers',
};

// Set the runtime and dynamic options
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; // Ensure we always get fresh data

// Helper to get base URL in production environment
function getBaseUrl() {
  // Check if we're in a browser context or during build time
  const isBrowser = typeof window !== 'undefined';
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  
  // During build time (or if not local dev), ensure we have an absolute URL
  if (!isLocalDev) {
    // Use hostname from env or fallback to a placeholder that will be replaced at runtime
    const hostname = process.env.WEBSITE_HOSTNAME || process.env.VERCEL_URL || 'localhost:3000';
    return `${isBrowser ? window.location.protocol : 'https:'}//` + hostname;
  }
  
  // Otherwise use relative URLs for local development
  return '';
}

// Server component to fetch blog posts - simplified for local development
async function BlogPosts({ lang }: { lang: SupportedLang }) {
  // Get brand configuration first
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
  
  const t = getTranslations(lang);
  
  try {
    console.log('[BLOG] Using language:', lang, 'Cloud Evolvers mode:', isCloudEvolvers);
    
    // Add timestamp to prevent caching
    const timestamp = Date.now();
    const isLocalDev = process.env.LOCAL_DEV === 'true';
    
    let apiUrl: string;
    
    if (isLocalDev) {
      // For local development, get the actual host from headers
      const headersList = await headers();
      const host = headersList.get('host') || 'localhost:8084';
      apiUrl = `http://${host}/api/blog?lang=${lang}&t=${timestamp}`;
    } else {
      // For production, construct absolute URL
      const baseUrl = getBaseUrl();
      apiUrl = `${baseUrl}/api/blog?lang=${lang}&t=${timestamp}`;
    }
    
    console.log('[BLOG] Loading blog posts from:', apiUrl, 'Is local dev:', isLocalDev);
    
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[BLOG] API Error (${response.status}):`, errorText);
      throw new Error(`Failed to load blog posts (${response.status})`);
    }
    
    const data = await response.json();
    console.log('[BLOG] API Response success:', !!data.success, 'Posts count:', data?.posts?.length || 'unknown');
    
    // Handle various response formats - exactly like admin page
    const posts = data.success && data.posts 
      ? data.posts 
      : (Array.isArray(data) ? data : []);
    
    console.log(`[BLOG] Loaded ${posts.length} posts`);
    
    // If we got no posts back, show a message
    if (!posts || posts.length === 0) {
      return (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium">{t.blog.noPosts}</h2>
          <p className="text-muted-foreground mt-2">{t.blog.checkBackLater}</p>
        </div>
      );
    }
    
    // Pass the posts directly to BlogList
    return <BlogList initialPosts={posts} />;
  } catch (error) {
    console.error('[BLOG] Error fetching blog posts:', error);
    
    return (
      <div className="text-center py-12 text-red-500">
        <h2 className="text-xl font-medium">{t.blog.errorLoading}</h2>
        <p className="mt-2">{t.blog.tryAgain}</p>
        <p className="text-sm text-muted-foreground mt-4">
          {error instanceof Error ? error.message : 'Unknown error'}
        </p>
      </div>
    );
  }
}

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Get brand configuration and force language for Cloud Evolvers
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
  
  // Get language from URL parameters first
  const params = await searchParams;
  const urlLang = params?.lang;
  
  // Get language from headers, Cloud Evolvers now supports both languages
  const headersList = await headers();
  const cookieHeader = headersList.get('cookie') || '';
  const langCookie = cookieHeader.match(/NEXT_LOCALE=(nl|en)/)?.[1];
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Determine language - URL param takes priority, then cookie, then accept-language
  let lang: SupportedLang;
  lang = (urlLang || langCookie || (acceptLanguage.includes('nl') ? 'nl' : 'en')) as SupportedLang;

  const t = getTranslations(lang);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto py-16 px-4 md:px-6">
        {/* Hero Section with brand-aware styling */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            isCloudEvolvers 
              ? 'bg-emerald-100/20 text-emerald-200' 
              : 'bg-blue-100/20 text-blue-200'
          }`}>
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              isCloudEvolvers ? 'bg-emerald-400' : 'bg-blue-400'
            }`}></div>
            {isCloudEvolvers ? 'Azure Insights & Training' : t.blog.blogTitle}
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent ${
            isCloudEvolvers
              ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200'
              : 'bg-gradient-to-r from-white via-blue-100 to-indigo-200'
          }`}>
            {isCloudEvolvers ? 'Azure Insights' : 'Our Blog'}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isCloudEvolvers ? 'text-emerald-100/90' : 'text-slate-300'
          }`}>
            {isCloudEvolvers 
              ? 'Technical deep-dives and practical guides from our Azure experts to accelerate your cloud journey and certification goals.'
              : t.blog.blogDescription
            }
          </p>
        </div>
        
        <Suspense 
          fallback={
            <div className="text-center py-20">
              <div className={`inline-flex items-center gap-3 ${
                isCloudEvolvers ? 'text-emerald-300' : 'text-slate-300'
              }`}>
                <div className={`w-6 h-6 border-2 border-t-transparent rounded-full animate-spin ${
                  isCloudEvolvers ? 'border-emerald-400' : 'border-blue-400'
                }`}></div>
                <span className="text-lg">{t.blog.loading}</span>
              </div>
            </div>
          }
        >
          <BlogPosts lang={lang} />
        </Suspense>
      </div>
    </div>
  );
}