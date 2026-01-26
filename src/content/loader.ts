// Content Loading Utilities for Modular Content System

import type {
  TrainingJSON,
  ServiceJSON,
  BlogJSON,
  ContentLoader,
  ContentType
} from './types';

// Generic content loader factory
export function createContentLoader<T>(
  contentType: ContentType,
  basePath: string
): ContentLoader<T> {
  return {
    async loadBySlug(slug: string): Promise<T | null> {
      try {
        const categoryPath = getCategoryPath(slug, contentType);
        const module = await import(/* @vite-ignore */ `${basePath}/${categoryPath}/${slug}.json`);
        return module.default as T;
      } catch (error) {
        console.error(`Failed to load ${contentType} with slug: ${slug}`, error);
        return null;
      }
    },

    async loadByCategory(category: string): Promise<T[]> {
      try {
        // Load category index
        const indexModule = await import(/* @vite-ignore */ `${basePath}/${category}/index.json`);
        const index = indexModule.default;

        // Load all items in category
        const items = await Promise.all(
          index.items.map(async (slug: string) => {
            try {
              const module = await import(/* @vite-ignore */ `${basePath}/${category}/${slug}.json`);
              return module.default as T;
            } catch (error) {
              console.error(`Failed to load ${contentType}: ${slug}`, error);
              return null;
            }
          })
        );

        return items.filter(item => item !== null);
      } catch (error) {
        console.error(`Failed to load ${contentType} category: ${category}`, error);
        return [];
      }
    },

    async loadAll(): Promise<T[]> {
      try {
        // Load main index
        const indexModule = await import(/* @vite-ignore */ `${basePath}/index.json`);
        const index = indexModule.default;

        // Load all items
        const items = await Promise.all(
          Object.entries(index.categories).map(async ([category, slugs]) => {
            const categoryItems = await Promise.all(
              (slugs as string[]).map(async (slug: string) => {
                try {
                  const module = await import(/* @vite-ignore */ `${basePath}/${category}/${slug}.json`);
                  return module.default as T;
                } catch (error) {
                  console.error(`Failed to load ${contentType}: ${slug}`, error);
                  return null;
                }
              })
            );
            return categoryItems.filter(item => item !== null);
          })
        );

        return items.flat();
      } catch (error) {
        console.error(`Failed to load all ${contentType} items`, error);
        return [];
      }
    },

    async search(query: string): Promise<T[]> {
      const allItems = await this.loadAll();
      const searchTerm = query.toLowerCase();

      return allItems.filter(item => {
        const searchableText = JSON.stringify(item).toLowerCase();
        return searchableText.includes(searchTerm);
      });
    }
  };
}

// Category path resolver
function getCategoryPath(slug: string, contentType: ContentType): string {
  // Training category mapping
  if (contentType === 'training') {
    if (slug.startsWith('az-') || slug.includes('azure')) {
      return 'azure';
    }
    if (slug.startsWith('ms-') || slug.includes('microsoft') || slug.includes('365')) {
      return 'microsoft365';
    }
    if (slug.startsWith('pl-') || slug.includes('power-platform')) {
      return 'power-platform';
    }
    if (slug.includes('security') || slug.includes('compliance')) {
      return 'security';
    }
    return 'azure'; // default
  }

  // Service category mapping
  if (contentType === 'service') {
    if (slug.includes('monitoring') || slug.includes('api')) {
      return 'monitoring';
    }
    if (slug.includes('management') || slug.includes('cloud')) {
      return 'management';
    }
    if (slug.includes('cost') || slug.includes('optimization')) {
      return 'optimization';
    }
    if (slug.includes('security') || slug.includes('compliance')) {
      return 'security';
    }
    return 'management'; // default
  }

  // Blog category mapping
  if (contentType === 'blog') {
    if (slug.includes('azure') || slug.includes('cloud')) {
      return 'azure';
    }
    if (slug.includes('security') || slug.includes('compliance')) {
      return 'security';
    }
    if (slug.includes('best-practice') || slug.includes('guide')) {
      return 'best-practices';
    }
    return 'azure'; // default
  }

  return '';
}

// Specific loaders for each content type
export const trainingLoader = createContentLoader<TrainingJSON>('training', '../data/training-json');
export const serviceLoader = createContentLoader<ServiceJSON>('service', '../data/services');
export const blogLoader = createContentLoader<BlogJSON>('blog', '../data/blogs');

// Utility functions with language support
export async function loadTrainingBySlug(slug: string, language: 'en' | 'nl' = 'en'): Promise<TrainingJSON | null> {
  console.log(`🔍 loadTrainingBySlug called with slug: "${slug}", language: "${language}"`);
  
  // Try language-specific version first (e.g., azure-fundamentals-nl.json)
  if (language === 'nl') {
    try {
      const nlPath = `@/data/training-json/${slug}-nl.json`;
      console.log(`🇳🇱 Attempting to load Dutch version: ${nlPath}`);
      const nlModule = await import(`@/data/training-json/${slug}-nl.json`);
      console.log(`✅ Dutch version loaded successfully:`, nlModule.default?.title);
      if (nlModule.default) return nlModule.default;
    } catch (error) {
      console.log(`❌ No Dutch version found for ${slug}, falling back to English:`, error.message);
    }
  }
  
  // Fallback to English version
  try {
    const enPath = `@/data/training-json/${slug}.json`;
    console.log(`🇬🇧 Loading English version: ${enPath}`);
    const module = await import(`@/data/training-json/${slug}.json`);
    console.log(`✅ English version loaded successfully:`, module.default?.title);
    return module.default;
  } catch (error) {
    console.error(`Failed to load training: ${slug}`, error);
    return null;
  }
}

export async function loadServiceBySlug(slug: string): Promise<ServiceJSON | null> {
  return serviceLoader.loadBySlug(slug);
}

export async function loadBlogBySlug(slug: string): Promise<BlogJSON | null> {
  return blogLoader.loadBySlug(slug);
}

export async function loadAllTrainings(): Promise<TrainingJSON[]> {
  return trainingLoader.loadAll();
}

export async function loadAllServices(): Promise<ServiceJSON[]> {
  return serviceLoader.loadAll();
}

export async function loadAllBlogs(): Promise<BlogJSON[]> {
  return blogLoader.loadAll();
}

// Search functions
export async function searchTrainings(query: string): Promise<TrainingJSON[]> {
  return trainingLoader.search(query);
}

export async function searchServices(query: string): Promise<ServiceJSON[]> {
  return serviceLoader.search(query);
}

export async function searchBlogs(query: string): Promise<BlogJSON[]> {
  return blogLoader.search(query);
}

// Cache for loaded content (optional performance optimization)
const contentCache = new Map<string, any>();

export function getCachedContent<T>(key: string): T | null {
  return contentCache.get(key) || null;
}

export function setCachedContent<T>(key: string, data: T): void {
  contentCache.set(key, data);
}

export function clearContentCache(): void {
  contentCache.clear();
}
