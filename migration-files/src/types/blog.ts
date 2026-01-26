/**
 * Represents a blog post in the system
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
  };
  date: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  publishedAt: string;
  featured?: boolean; // Add the missing featured property as optional
  description?: string; // Adding this as it's used in page.tsx
  lang?: string; // Language of the post (e.g., 'en', 'nl')
  
  // Fallback content properties for language support
  fallbackContent?: boolean; // Indicates this post is shown as fallback (e.g., English post in Dutch view)
  originalLang?: string; // Original language of the post when used as fallback
  requestedLang?: string; // Language that was requested (when different from originalLang)
  translatedSlugs?: { [lang: string]: string }; // Mapping of language codes to translated slugs
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export const defaultCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Azure Security',
    slug: 'azure-security',
    description: 'Articles about securing your Azure environment'
  },
  {
    id: '2',
    name: 'Identity',
    slug: 'identity',
    description: 'Authentication, authorization, and identity management in Azure'
  },
  {
    id: '3',
    name: 'API Management',
    slug: 'api-management',
    description: 'Best practices and guidance for API Management in Azure'
  },
  {
    id: '4',
    name: 'DevOps',
    slug: 'devops',
    description: 'DevOps practices and tools for Azure'
  }
];