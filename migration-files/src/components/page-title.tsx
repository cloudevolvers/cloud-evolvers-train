'use client';

import { useEffect, useState } from 'react';
import { isCloudEvolversBrand } from '@/lib/brand-config';

/**
 * Page title component that displays under the header
 * Shows "Microsoft & Azure Training & Services" ONLY for Cloud Evolvers brand
 */
export default function PageTitle() {
  const [mounted, setMounted] = useState(false);
  const [isCloudEvolvers, setIsCloudEvolvers] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if we're Cloud Evolvers brand
    setIsCloudEvolvers(isCloudEvolversBrand());

    // Listen for brand changes in development
    const handleBrandChange = () => {
      setIsCloudEvolvers(isCloudEvolversBrand());
    };

    window.addEventListener('brandChanged', handleBrandChange);
    window.addEventListener('storage', handleBrandChange);

    return () => {
      window.removeEventListener('brandChanged', handleBrandChange);
      window.removeEventListener('storage', handleBrandChange);
    };
  }, []);

  // Only show for Cloud Evolvers brand
  if (!mounted || !isCloudEvolvers) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-emerald-500/40 via-teal-500/40 to-emerald-500/40 backdrop-blur-sm border-b border-emerald-400/50 shadow-lg shadow-emerald-900/20 relative z-[150] mt-[120px] mb-0">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white drop-shadow-lg">
          Microsoft & Azure Training & Services
        </h1>
      </div>
    </div>
  );
}
