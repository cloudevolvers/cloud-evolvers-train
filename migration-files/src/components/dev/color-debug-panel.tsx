"use client";

import { useState, useEffect } from 'react';
import { getBrandConfig, getBrandColors, isHDRDisplay, isCloudEvolvers } from '@/lib/brand-config';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Palette, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Development-only color debug panel
 * Shows current brand colors, HDR detection, and display information
 */
export default function ColorDebugPanel() {
  const [isClient, setIsClient] = useState(false);
  const [displayInfo, setDisplayInfo] = useState({
    isHDR: false,
    hasP3: false,
    hasWideGamut: false,
    colorDepth: 0,
    pixelRatio: 0
  });

  // Only show in development or DTA environments
  const isDev = process.env.NODE_ENV === 'development';
  const isDTA = process.env.NEXT_PUBLIC_IS_DTA === 'true';
  const shouldShow = isDev || isDTA;

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      setDisplayInfo({
        isHDR: window.matchMedia('(dynamic-range: high)').matches,
        hasP3: window.matchMedia('(color-gamut: p3)').matches,
        hasWideGamut: window.matchMedia('(color-gamut: rec2020)').matches,
        colorDepth: screen.colorDepth || 0,
        pixelRatio: window.devicePixelRatio || 0
      });
    }
  }, []);

  if (!shouldShow || !isClient) {
    return null;
  }

  const brandConfig = getBrandConfig();
  const brandColors = getBrandColors(brandConfig);
  const isCloudEvolveBrand = isCloudEvolvers();
  const detectedHDR = isHDRDisplay();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={cn(
        "w-80 backdrop-blur-sm transition-colors",
        "bg-slate-900/95 dark:bg-slate-900/95 bg-white/95",
        "border-slate-700 dark:border-slate-700 border-gray-200",
        "text-white dark:text-white text-gray-900"
      )}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Palette className="h-4 w-4" />
            Color Debug Panel
          </CardTitle>
          <CardDescription className={cn(
            "transition-colors",
            "text-slate-400 dark:text-slate-400 text-gray-500"
          )}>
            Development display information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Brand Information */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={isCloudEvolveBrand ? "default" : "secondary"}>
                {brandConfig.name}
              </Badge>
              {detectedHDR && (
                <Badge variant="outline" className="text-xs">
                  HDR Optimized
                </Badge>
              )}
            </div>
            <div className="text-xs space-y-1">
              <div>Primary: <code className={cn(
                "px-1 rounded transition-colors",
                "bg-slate-800 dark:bg-slate-800 bg-gray-200",
                "text-white dark:text-white text-gray-900"
              )}>{brandColors.primary}</code></div>
              <div>Secondary: <code className={cn(
                "px-1 rounded transition-colors",
                "bg-slate-800 dark:bg-slate-800 bg-gray-200",
                "text-white dark:text-white text-gray-900"
              )}>{brandColors.secondary}</code></div>
              <div>Accent: <code className={cn(
                "px-1 rounded transition-colors",
                "bg-slate-800 dark:bg-slate-800 bg-gray-200",
                "text-white dark:text-white text-gray-900"
              )}>{brandColors.accent}</code></div>
            </div>
          </div>

          {/* Display Capabilities */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Monitor className="h-3 w-3" />
              <span className="text-sm font-medium">Display</span>
            </div>
            <div className={cn(
              "text-xs space-y-1 transition-colors",
              "text-slate-300 dark:text-slate-300 text-gray-600"
            )}>
              <div>HDR: {displayInfo.isHDR ? '✅' : '❌'}</div>
              <div>P3 Color: {displayInfo.hasP3 ? '✅' : '❌'}</div>
              <div>Wide Gamut: {displayInfo.hasWideGamut ? '✅' : '❌'}</div>
              <div>Color Depth: {displayInfo.colorDepth} bit</div>
              <div>Pixel Ratio: {displayInfo.pixelRatio}x</div>
            </div>
          </div>

          {/* Color Preview */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-3 w-3" />
              <span className="text-sm font-medium">Preview</span>
            </div>
            <div className="flex gap-1">
              <div 
                className={`w-6 h-6 rounded bg-gradient-to-r ${brandColors.primary}`} 
                title="Primary Color"
              />
              <div 
                className={`w-6 h-6 rounded bg-gradient-to-r ${brandColors.secondary}`} 
                title="Secondary Color"
              />
              <div 
                className={`w-6 h-6 rounded ${brandColors.accent}`} 
                title="Accent Color"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
