'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FloatingNavigationProps {
  showScrollTop?: boolean;
  showTrainingButton?: boolean;
  className?: string;
}

/**
 * Floating navigation component for easy access to key actions
 * Provides scroll-to-top and training navigation
 */
export function FloatingNavigation({ 
  showScrollTop = true, 
  showTrainingButton = true,
  className 
}: FloatingNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className={cn("fixed bottom-4 right-4 z-[400] flex flex-col gap-2", className)}>
      {/* Training Button */}
      {showTrainingButton && (
        <Link href="/training">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4"
            aria-label="View Training Courses"
          >
            <GraduationCap className="h-6 w-6" />
          </Button>
        </Link>
      )}
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button 
          onClick={scrollToTop} 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
