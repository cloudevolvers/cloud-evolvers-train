'use client';

import { useState, useEffect } from 'react';
import { getBrandConfig, isHDRDisplay, isCloudEvolvers } from '@/lib/brand-config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/**
 * Comprehensive color debug component to diagnose brand/color issues
 * Only shows in development or DTA environments
 */
export default function ColorDiagnostic() {
  const [isClient, setIsClient] = useState(false);
  const [diagnosticInfo, setDiagnosticInfo] = useState<any>({});
  const [visible, setVisible] = useState(false);

  // Only show in development or DTA environments
  const isDev = process.env.NODE_ENV === 'development';
  const isDTA = process.env.NEXT_PUBLIC_IS_DTA === 'true';
  const shouldShow = isDev || isDTA;

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const info = {
        // Environment detection
        nodeEnv: process.env.NODE_ENV,
        publicCloudEvolvers: process.env.NEXT_PUBLIC_CLOUD_EVOLVERS,
        
        // Browser info
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        
        // Display capabilities
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        pixelRatio: window.devicePixelRatio,
        
        // Color gamut support
        hasP3: window.matchMedia('(color-gamut: p3)').matches,
        hasRec2020: window.matchMedia('(color-gamut: rec2020)').matches,
        hasSRGB: window.matchMedia('(color-gamut: srgb)').matches,
        
        // Dynamic range
        hasHighDynamic: window.matchMedia('(dynamic-range: high)').matches,
        hasStandardDynamic: window.matchMedia('(dynamic-range: standard)').matches,
        
        // Theme detection
        prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
        prefersLight: window.matchMedia('(prefers-color-scheme: light)').matches,
        prefersContrast: window.matchMedia('(prefers-contrast: high)').matches,
        prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        
        // CSS support
        supportsP3: CSS?.supports?.('color', 'color(display-p3 1 1 1)') || false,
        supportsHsl: CSS?.supports?.('color', 'hsl(0 0% 0%)') || false,
        supportsOklch: CSS?.supports?.('color', 'oklch(0.5 0.2 180)') || false,
        
        // LocalStorage brand override
        localStorageBrand: null as string | null,
        
        // Brand detection results
        isCloudEvolversDetected: isCloudEvolvers(),
        brandConfig: getBrandConfig(),
        isHDRDetected: isHDRDisplay(),
        
        // Computed styles check
        computedStyles: null as any
      };
      
      try {
        info.localStorageBrand = localStorage.getItem('dev-brand-override');
      } catch (e) {
        info.localStorageBrand = 'Error accessing localStorage';
      }
      
      // Check computed styles on a test element
      try {
        const testDiv = document.createElement('div');
        testDiv.className = 'bg-blue-500 text-white';
        testDiv.style.visibility = 'hidden';
        testDiv.style.position = 'absolute';
        document.body.appendChild(testDiv);
        
        const computedStyle = window.getComputedStyle(testDiv);
        info.computedStyles = {
          backgroundColor: computedStyle.backgroundColor,
          color: computedStyle.color,
        };
        
        document.body.removeChild(testDiv);
      } catch (e) {
        info.computedStyles = 'Error checking computed styles';
      }
      
      setDiagnosticInfo(info);
    }
  }, []);

  const copyToClipboard = () => {
    const text = JSON.stringify(diagnosticInfo, null, 2);
    navigator.clipboard.writeText(text).then(() => {
      alert('Diagnostic info copied to clipboard!');
    });
  };

  // Don't render in production unless it's a DTA environment
  if (!shouldShow) {
    return null;
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!visible && (
        <Button 
          onClick={() => setVisible(true)}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          🔍 Color Debug
        </Button>
      )}
      
      {visible && (
        <Card className="w-96 max-h-96 overflow-y-auto bg-slate-900/95 border-slate-700 text-white backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm">Color Diagnostic Info</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setVisible(false)}
                className="text-white hover:bg-slate-700"
              >
                ✕
              </Button>
            </div>
            <CardDescription className="text-slate-400">
              Debug info for color issues between computers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Brand Status */}
            <div>
              <h4 className="font-semibold text-xs mb-2">Brand Detection</h4>
              <div className="space-y-1 text-xs">
                <div>Environment: <Badge variant={diagnosticInfo.publicCloudEvolvers === '1' ? 'default' : 'secondary'}>
                  {diagnosticInfo.publicCloudEvolvers || 'undefined'}
                </Badge></div>
                <div>LocalStorage: <code className="bg-slate-800 px-1 rounded">{diagnosticInfo.localStorageBrand || 'null'}</code></div>
                <div>Detected Brand: <Badge variant={diagnosticInfo.isCloudEvolversDetected ? 'default' : 'secondary'}>
                  {diagnosticInfo.brandConfig?.name}
                </Badge></div>
                <div>Colors: <code className="bg-slate-800 px-1 rounded text-xs">{diagnosticInfo.brandConfig?.colors?.primary}</code></div>
              </div>
            </div>

            {/* Display Capabilities */}
            <div>
              <h4 className="font-semibold text-xs mb-2">Display Info</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div>HDR: {diagnosticInfo.hasHighDynamic ? '✅' : '❌'}</div>
                <div>P3: {diagnosticInfo.hasP3 ? '✅' : '❌'}</div>
                <div>Rec2020: {diagnosticInfo.hasRec2020 ? '✅' : '❌'}</div>
                <div>sRGB: {diagnosticInfo.hasSRGB ? '✅' : '❌'}</div>
                <div>Color Depth: {diagnosticInfo.colorDepth}</div>
                <div>Pixel Ratio: {diagnosticInfo.pixelRatio}x</div>
              </div>
            </div>

            {/* Browser Info */}
            <div>
              <h4 className="font-semibold text-xs mb-2">Browser</h4>
              <div className="text-xs space-y-1">
                <div>Platform: <code className="bg-slate-800 px-1 rounded">{diagnosticInfo.platform}</code></div>
                <div>Vendor: <code className="bg-slate-800 px-1 rounded">{diagnosticInfo.vendor}</code></div>
                <div>Dark Mode: {diagnosticInfo.prefersDark ? '✅' : '❌'}</div>
              </div>
            </div>

            {/* CSS Support */}
            <div>
              <h4 className="font-semibold text-xs mb-2">CSS Support</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div>P3: {diagnosticInfo.supportsP3 ? '✅' : '❌'}</div>
                <div>HSL: {diagnosticInfo.supportsHsl ? '✅' : '❌'}</div>
                <div>OKLCH: {diagnosticInfo.supportsOklch ? '✅' : '❌'}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={copyToClipboard}
                className="bg-blue-600 hover:bg-blue-700 text-xs"
              >
                📋 Copy Info
              </Button>
              <Button 
                size="sm" 
                onClick={() => window.location.reload()}
                className="bg-green-600 hover:bg-green-700 text-xs"
              >
                🔄 Refresh
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
