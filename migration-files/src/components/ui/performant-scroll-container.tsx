import React, { useRef, useEffect, useState } from 'react';
import { PerformanceUtils, ScrollPerformanceMonitor } from '@/utils/performanceUtils';

interface PerformantScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  onScroll?: (scrollTop: number, direction: 'up' | 'down') => void;
  enablePerformanceMonitoring?: boolean;
}

/**
 * High-performance scroll container with optimizations for large content
 */
export function PerformantScrollContainer({
  children,
  className = '',
  onScroll,
  enablePerformanceMonitoring = false
}: PerformantScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const performanceMonitor = useRef<ScrollPerformanceMonitor | null>(null);
  const [deviceOptimizations, setDeviceOptimizations] = useState({ isLowEnd: false, isMobile: false });

  useEffect(() => {
    setDeviceOptimizations(PerformanceUtils.getDeviceOptimizations());
    
    if (enablePerformanceMonitoring) {
      performanceMonitor.current = new ScrollPerformanceMonitor();
      performanceMonitor.current.measureFPS();
    }
  }, [enablePerformanceMonitoring]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !onScroll) return;

    let lastScrollTop = 0;
    const throttledScroll = deviceOptimizations.isLowEnd 
      ? PerformanceUtils.debounceScroll((scrollTop: number, direction: 'up' | 'down') => {
          onScroll(scrollTop, direction);
        }, 100)
      : PerformanceUtils.throttleRAF((scrollTop: number, direction: 'up' | 'down') => {
          onScroll(scrollTop, direction);
        });

    const handleScroll = (e: Event) => {
      const measureEnd = performanceMonitor.current?.measureScrollEvent();
      
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      
      throttledScroll(scrollTop, direction);
      lastScrollTop = scrollTop;
      
      measureEnd?.();
    };

    // Use passive listener for better performance
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      
      if (enablePerformanceMonitoring && performanceMonitor.current) {
        performanceMonitor.current.logPerformanceStats();
      }
    };
  }, [onScroll, deviceOptimizations.isLowEnd, enablePerformanceMonitoring]);

  const optimizedClassName = [
    className,
    'will-change-scroll',
    deviceOptimizations.isMobile ? 'touch-pan-y' : '',
    PerformanceUtils.prefersReducedMotion() ? 'scroll-smooth-disabled' : 'scroll-smooth',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className={optimizedClassName}
      style={{
        contain: 'layout style paint',
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden',
        WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
        overscrollBehavior: 'contain',
      }}
    >
      {children}
      
      <style jsx>{`
        .scroll-smooth-disabled {
          scroll-behavior: auto !important;
        }
        .touch-pan-y {
          touch-action: pan-y;
        }
      `}</style>
    </div>
  );
}
