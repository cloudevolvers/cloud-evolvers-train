import { useEffect, useRef, useCallback, useState, useMemo } from 'react';

/**
 * Optimized scroll hook with better performance for heavy pages
 * Uses passive listeners, RAF throttling, and intersection observer where possible
 */
export function useOptimizedScroll(
  callback: (scrollY: number, direction: 'up' | 'down') => void,
  options: {
    throttle?: number;
    threshold?: number;
    useIntersectionObserver?: boolean;
  } = {}
) {
  const {
    throttle = 16, // ~60fps
    threshold = 10,
    useIntersectionObserver = false
  } = options;

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const lastDirection = useRef<'up' | 'down'>('down');

  const optimizedCallback = useCallback((scrollY: number) => {
    const direction = scrollY > lastScrollY.current ? 'down' : 'up';
    
    // Only trigger if scroll difference is above threshold
    if (Math.abs(scrollY - lastScrollY.current) >= threshold) {
      callback(scrollY, direction);
      lastScrollY.current = scrollY;
      lastDirection.current = direction;
    }
  }, [callback, threshold]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        optimizedCallback(scrollY);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [optimizedCallback]);

  useEffect(() => {
    // Use passive listener for better performance
    const options: AddEventListenerOptions = {
      passive: true,
      capture: false
    };

    window.addEventListener('scroll', handleScroll, options);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return lastDirection.current;
}

/**
 * Hook for lazy loading with intersection observer
 * More efficient than scroll-based lazy loading
 */
export function useLazyLoad(threshold = 0.1, rootMargin = '50px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef || !('IntersectionObserver' in window)) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsVisible(true);
          setIsLoaded(true);
          // Disconnect after loading to save memory
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isLoaded]);

  return { ref, isLoaded, isVisible };
}

/**
 * Hook for virtual scrolling with dynamic item heights
 * More efficient for very large lists
 */
export function useVirtualScrolling<T>(
  items: T[],
  estimatedItemHeight: number,
  containerHeight: number,
  overscan = 3
) {
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeights = useRef<number[]>([]);
  const totalHeight = useRef(0);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    let startIndex = 0;
    let endIndex = items.length - 1;
    let currentHeight = 0;

    // Find start index
    for (let i = 0; i < items.length; i++) {
      const height = itemHeights.current[i] || estimatedItemHeight;
      if (currentHeight + height > scrollTop) {
        startIndex = Math.max(0, i - overscan);
        break;
      }
      currentHeight += height;
    }

    // Find end index
    currentHeight = 0;
    for (let i = startIndex; i < items.length; i++) {
      const height = itemHeights.current[i] || estimatedItemHeight;
      currentHeight += height;
      if (currentHeight > containerHeight) {
        endIndex = Math.min(items.length - 1, i + overscan);
        break;
      }
    }

    return { startIndex, endIndex };
  }, [items.length, scrollTop, containerHeight, estimatedItemHeight, overscan]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.startIndex, visibleRange.endIndex + 1);
  }, [items, visibleRange]);

  const updateItemHeight = useCallback((index: number, height: number) => {
    itemHeights.current[index] = height;
    totalHeight.current = itemHeights.current.reduce((sum, h) => sum + (h || estimatedItemHeight), 0);
  }, [estimatedItemHeight]);

  return {
    visibleItems,
    visibleRange,
    totalHeight: totalHeight.current || items.length * estimatedItemHeight,
    updateItemHeight,
    setScrollTop
  };
}
