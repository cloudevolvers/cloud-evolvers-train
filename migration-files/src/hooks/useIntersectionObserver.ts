import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for intersection observer
 * Useful for lazy loading, animations, and tracking visibility
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer.current = new IntersectionObserver((observerEntries) => {
        setEntries(observerEntries);
      }, defaultOptions);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const observe = (element: Element | null) => {
    if (element && observer.current) {
      observer.current.observe(element);
    }
  };

  const unobserve = (element: Element | null) => {
    if (element && observer.current) {
      observer.current.unobserve(element);
    }
  };

  const disconnect = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  return { entries, observe, unobserve, disconnect };
}

/**
 * Hook for tracking when an element becomes visible
 */
export function useIsVisible(
  threshold = 0.1,
  rootMargin = '50px'
) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        
        if (visible && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasBeenVisible]);

  return { ref, isVisible, hasBeenVisible };
}
