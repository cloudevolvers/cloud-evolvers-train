'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { GraduationCap, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Development-only brand switcher toggle
 * Only visible when NODE_ENV is development or in DTA environments
 * 
 * Note: This switcher only affects client-side components. The favicon generation
 * runs on Edge runtime and only responds to the NEXT_PUBLIC_CLOUD_EVOLVERS 
 * environment variable. To test Cloud Evolvers favicon, set:
 * NEXT_PUBLIC_CLOUD_EVOLVERS=1 npm run dev
 */
export default function BrandSwitcher() {
  const [isCloudEvolvers, setIsCloudEvolvers] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only show in development or DTA environments
  const isDev = process.env.NODE_ENV === 'development';
  const isDTA = process.env.NEXT_PUBLIC_IS_DTA === 'true';
  const shouldShow = isDev || isDTA;

  useEffect(() => {
    setMounted(true);
    // Check current brand state from localStorage only
    const storedBrand = localStorage.getItem('dev-brand-override');
    
    if (storedBrand === 'cloud-evolvers') {
      setIsCloudEvolvers(true);
    }
  }, []);

  const handleBrandSwitch = (checked: boolean) => {
    setIsCloudEvolvers(checked);
    
    // Store preference in localStorage
    localStorage.setItem('dev-brand-override', checked ? 'cloud-evolvers' : 'xevolve');
    
    // Emit custom event for same-tab brand changes
    window.dispatchEvent(new CustomEvent('brandChanged'));
    
    // Reload to switch brand
    window.location.reload();
  };

  // Don't render in production (unless DTA) or before mount
  if (!shouldShow || !mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-600/30">
      <div className="flex items-center gap-2">
        <Zap className={cn(
          "h-4 w-4 transition-colors",
          !isCloudEvolvers ? "text-blue-400" : "text-slate-400"
        )} />
        <Label 
          htmlFor="brand-switch" 
          className={cn(
            "text-xs font-medium cursor-pointer transition-colors",
            !isCloudEvolvers ? "text-blue-200" : "text-slate-400"
          )}
        >
          xEvolve
        </Label>
      </div>
      
      <Switch
        id="brand-switch"
        checked={isCloudEvolvers}
        onCheckedChange={handleBrandSwitch}
        className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-blue-500"
      />
      
      <div className="flex items-center gap-2">
        <Label 
          htmlFor="brand-switch" 
          className={cn(
            "text-xs font-medium cursor-pointer transition-colors",
            isCloudEvolvers ? "text-emerald-200" : "text-slate-400"
          )}
        >
          Cloud Evolvers
        </Label>
        <GraduationCap className={cn(
          "h-4 w-4 transition-colors",
          isCloudEvolvers ? "text-emerald-400" : "text-slate-400"
        )} />
      </div>
    </div>
  );
}
