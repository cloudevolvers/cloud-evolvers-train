import { useState, useEffect } from 'react';

/**
 * Hook for optimized image preloading with lazy loading support
 */
export function useImagePreloader(src: string, shouldLoad: boolean = true) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!shouldLoad || !src) return;

    let isCancelled = false;
    const img = new Image();

    img.onload = () => {
      if (!isCancelled) {
        setLoaded(true);
        setError(false);
      }
    };

    img.onerror = () => {
      if (!isCancelled) {
        setError(true);
        setLoaded(false);
      }
    };

    // Start loading
    img.src = src;

    return () => {
      isCancelled = true;
    };
  }, [src, shouldLoad]);

  return { loaded, error };
}
