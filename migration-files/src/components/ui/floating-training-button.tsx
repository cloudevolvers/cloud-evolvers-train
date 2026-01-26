'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { isCloudEvolvers } from '@/lib/brand-config';

/**
 * Floating Training Button
 * Provides quick access to training section from anywhere on the site
 * Only shows for Cloud Evolvers brand
 */
export function FloatingTrainingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);

  useEffect(() => {
    // Check if Cloud Evolvers brand after hydration
    setIsCloudEvolveBrand(isCloudEvolvers());
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Only show for Cloud Evolvers
  if (!isCloudEvolveBrand || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/training">
        <Button
          size="lg"
          className={`
            bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 
            text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full
            ${isHovered ? 'scale-110 px-6' : 'scale-100 px-4'}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <GraduationCap className="h-5 w-5" />
          <span className={`ml-2 transition-all duration-300 ${isHovered ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 overflow-hidden'}`}>
            Training
          </span>
        </Button>
      </Link>
    </div>
  );
}
