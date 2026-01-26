import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with Tailwind's class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a throttled function that limits how often a function can be called
 * @param fn The function to throttle
 * @param delay The minimum time between function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 100
) {
  let lastCall = 0;
  return function(...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
}

/**
 * Creates a debounced function that delays invoking the function until after
 * the specified wait time has elapsed since the last time it was invoked
 * @param fn The function to debounce
 * @param delay The delay in milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Optimized version of window.requestAnimationFrame for smooth animations
 */
export function rafThrottle<T extends (...args: any[]) => any>(fn: T) {
  let scheduled = false;
  return function(...args: Parameters<T>) {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => {
        fn(...args);
        scheduled = false;
      });
    }
  };
}

/**
 * Creates a highly optimized scroll handler using requestAnimationFrame
 * for better scroll performance than throttle/debounce
 */
export function createScrollHandler<T extends (...args: any[]) => any>(
  callback: T
) {
  let ticking = false;
  return function(...args: Parameters<T>) {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
}

/**
 * Optimized version of Intersection Observer setup
 * @param callback Function to call when intersection changes
 * @param options IntersectionObserver options
 * @returns IntersectionObserver instance
 */
export function createIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => callback(entry));
  }, {
    rootMargin: '200px',
    threshold: 0,
    ...options
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function truncate(str: string, length: number) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Load data from localStorage with fallback to default
export function loadFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  
  const saved = localStorage.getItem(key);
  if (!saved) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error(`Error loading ${key} from storage:`, error);
    return defaultValue;
  }
}

// Save data to localStorage
export function saveToStorage<T>(key: string, data: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving ${key} to storage:`, error);
    return false;
  }
}

// Enhanced safe localStorage access
export function safeLocalStorage() {
  const isBrowser = typeof window !== 'undefined';
  
  return {
    getItem: (key: string): string | null => {
      if (!isBrowser) return null;
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error(`Error reading ${key} from localStorage:`, error);
        return null;
      }
    },
    
    setItem: (key: string, value: string): boolean => {
      if (!isBrowser) return false;
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.error(`Error writing ${key} to localStorage:`, error);
        return false;
      }
    },
    
    removeItem: (key: string): boolean => {
      if (!isBrowser) return false;
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error(`Error removing ${key} from localStorage:`, error);
        return false;
      }
    }
  };
}

/**
 * Normalizes an image URL/path to ensure it points to the correct backend endpoint if necessary.
 * @param imagePath The original image path or URL from the data source.
 * @param section The section the image belongs to ('blog', 'service', 'showcase').
 * @param defaultImage The default image path to return if the input is empty.
 * @returns The normalized image URL.
 */
export function normalizeImageUrl(
  imagePath: string | undefined | null,
  section: 'blog' | 'service' | 'showcase',
  defaultImage: string
): string {
  if (!imagePath) {
    return defaultImage;
  }

  // If it's already a full URL, return it.
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // If it already starts with /backend/, assume it's correct.
  if (imagePath.startsWith('/backend/')) {
    return imagePath;
  }

  // If it starts with /images/, assume it's a legacy path or a public asset.
  if (imagePath.startsWith('/images/')) {
    return imagePath;
  }

  // If it's just a filename (doesn't start with /), construct the backend URL.
  if (!imagePath.startsWith('/')) {
    const sectionPathMap = {
      blog: 'blog-images',
      service: 'service-images',
      showcase: 'showcase-images',
    };
    const urlSectionPath = sectionPathMap[section] || section; // Fallback to section name
    return `/backend/images/${urlSectionPath}/file/${imagePath}`;
  }

  // Otherwise, return the path as is (might be an absolute path like /some-other-image.jpg).
  return imagePath;
}