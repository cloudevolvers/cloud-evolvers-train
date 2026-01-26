import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBrandConfig } from '@/lib/brand-config';
import BlogPostClient from './BlogPostClient';

// Fix params typing to match Next.js 15.2.0 convention
interface BlogPostPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}

// Fetch a single blog post - using robust URL handling with intelligent language detection
async function getBlogPost(slug: string, requestedLang: string = 'en') {
  try {
    // Add timestamp to prevent caching
    const timestamp = Date.now();
    
    // For server-side fetches in Next.js, we need to use the correct host
    const { headers } = await import('next/headers');
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:8084';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    
    // Smart language detection based on slug patterns
    let lang = requestedLang;
    
    // Check if this looks like a Dutch slug (contains Dutch words or patterns)
    const dutchPatterns = [
      /wanneer/i, /waarom/i, /winnen/i, /voor/i, /gebruiken/i, /vermijden/i,
      /kostenoptimalisatie/i, /uitschakelen/i, /besparen/i, /diepgaande/i,
      /volledige/i, /handleiding/i, /gids/i, /tussen/i, /verschil/i
    ];
    
    const isDutchSlug = dutchPatterns.some(pattern => pattern.test(slug));
    
    // If it looks like a Dutch slug but no language specified, try Dutch first
    if (isDutchSlug && requestedLang === 'en') {
      lang = 'nl';
      console.log(`[BLOG] Detected Dutch slug pattern, trying Dutch first for: ${slug}`);
    }
    
    const apiUrl = `${baseUrl}/api/blog/${slug}?lang=${lang}&t=${timestamp}`;
    console.log(`[BLOG] Fetching blog post with slug "${slug}" and language "${lang}" from:`, apiUrl);
    
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    
    if (!response.ok) {
      console.error(`[BLOG] Failed to fetch blog post: ${response.status}`);
      if (response.status === 404) {
        console.log(`[BLOG] Post not found for slug: "${slug}", language: "${lang}"`);
        // If we tried Dutch but it was originally requested in English, try English
        if (lang === 'nl' && requestedLang === 'en') {
          console.log(`[BLOG] Retrying with English language...`);
          return await getBlogPost(slug, 'en');
        }
        // If we tried English but detected Dutch patterns, try Dutch
        if (lang === 'en' && isDutchSlug) {
          console.log(`[BLOG] Retrying with Dutch language...`);
          return await getBlogPost(slug, 'nl');
        }
        return null;
      }
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`[BLOG] Successfully fetched post:`, data?.success ? 'success' : 'direct format');
    
    // Handle admin-style response format
    return data.success && data.post 
      ? data.post
      : (data.id ? data : null);
      
  } catch (error) {
    console.error(`[BLOG] Error fetching blog post by slug ${slug}:`, error);
    return null;
  }
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  try {
    // In Next.js 15.2.0, params and searchParams are Promises and need to be awaited
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const slug = resolvedParams.slug;
    const lang = resolvedSearchParams.lang || 'en';
    
    console.log(`[BLOG] Rendering blog post page for slug: "${slug}", language: "${lang}"`);
    
    const post = await getBlogPost(slug, lang);
    
    if (!post) {
      console.log(`[BLOG] Post not found for slug: "${slug}", language: "${lang}"`);
      notFound();
    }

    return <BlogPostClient post={post} />;
  } catch (error) {
    console.error(`[BLOG] Error rendering blog post:`, error);
    notFound();
  }
}

export async function generateMetadata({ params, searchParams }: BlogPostPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const slug = resolvedParams.slug;
    const lang = resolvedSearchParams.lang || 'en';
    
    const post = await getBlogPost(slug, lang);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found'
      };
    }
    
    const brandConfig = getBrandConfig();
    const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
    const brandTitle = isCloudEvolvers ? 'Cloud Evolvers' : 'xEvolve';
    const brandDescription = isCloudEvolvers 
      ? 'Expert Azure insights and certification guidance from Microsoft Certified Trainers'
      : 'Read this insightful article on xEvolve';
    
    return {
      title: `${post.title} | ${brandTitle}`,
      description: post.excerpt || post.description || brandDescription,
      openGraph: {
        type: 'article',
        title: post.title,
        description: post.excerpt || post.description || undefined,
        images: [
          {
            url: post.image || '/images/blog/default-blog-image.jpg',
            alt: post.imageAlt || post.title
          }
        ]
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    const brandConfig = getBrandConfig();
    const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
    const brandTitle = isCloudEvolvers ? 'Cloud Evolvers' : 'xEvolve';
    
    return {
      title: `Blog Post - ${brandTitle}`,
      description: 'Read insightful articles on Azure and cloud management'
    };
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; // Make sure we have fresh data