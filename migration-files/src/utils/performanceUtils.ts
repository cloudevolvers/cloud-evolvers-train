/**
 * Performance monitoring utilities for scroll optimization
 */

export class ScrollPerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 0;
  private scrollCount = 0;
  private totalScrollTime = 0;

  startScrollMeasurement() {
    this.scrollCount = 0;
    this.totalScrollTime = 0;
  }

  measureScrollEvent() {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      this.scrollCount++;
      this.totalScrollTime += (end - start);
    };
  }

  measureFPS() {
    const now = performance.now();
    this.frameCount++;
    
    if (now >= this.lastTime + 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;
    }
    
    requestAnimationFrame(() => this.measureFPS());
    return this.fps;
  }

  getScrollPerformanceStats() {
    return {
      averageScrollTime: this.scrollCount > 0 ? this.totalScrollTime / this.scrollCount : 0,
      scrollEventCount: this.scrollCount,
      totalScrollTime: this.totalScrollTime,
      currentFPS: this.fps
    };
  }

  logPerformanceStats() {
    const stats = this.getScrollPerformanceStats();
    console.log('Scroll Performance Stats:', {
      ...stats,
      isOptimal: stats.averageScrollTime < 16 && stats.currentFPS >= 55
    });
  }
}

// Performance optimization utilities
export const PerformanceUtils = {
  // Debounce function optimized for scroll events
  debounceScroll: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  },

  // Throttle function using requestAnimationFrame
  throttleRAF: <T extends (...args: any[]) => any>(
    func: T
  ): ((...args: Parameters<T>) => void) => {
    let ticking = false;
    return (...args: Parameters<T>) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          func.apply(null, args);
          ticking = false;
        });
        ticking = true;
      }
    };
  },

  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Optimize for different device types
  getDeviceOptimizations: () => {
    if (typeof window === 'undefined') return { isLowEnd: false, isMobile: false };
    
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const connection = (navigator as any).connection;
    const isLowEnd = connection ? (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' || 
      connection.saveData
    ) : false;

    return { isLowEnd, isMobile };
  }
};
