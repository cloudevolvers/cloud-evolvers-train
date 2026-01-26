'use client';

import { useState, useEffect } from 'react';
import { getBrandConfig, getBrandColors, isHDRDisplay } from '@/lib/brand-config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ColorTestPage() {
  const [isClient, setIsClient] = useState(false);
  const [testColors, setTestColors] = useState({
    brand: getBrandConfig(),
    colors: getBrandColors(getBrandConfig()),
    isHDR: false
  });

  useEffect(() => {
    setIsClient(true);
    setTestColors({
      brand: getBrandConfig(),
      colors: getBrandColors(getBrandConfig()),
      isHDR: isHDRDisplay()
    });
  }, []);

  const colorTests = [
    // xEvolve colors
    { name: 'xEvolve Primary', class: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { name: 'xEvolve Secondary', class: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'xEvolve Accent', class: 'bg-blue-600' },
    
    // Cloud Evolvers colors
    { name: 'Cloud Evolvers Primary', class: 'bg-gradient-to-r from-emerald-500 to-teal-500' },
    { name: 'Cloud Evolvers Secondary', class: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { name: 'Cloud Evolvers Accent', class: 'bg-emerald-600' },
    
    // HDR Safe alternatives
    { name: 'HDR xEvolve Primary', class: 'bg-gradient-to-r from-blue-400 to-purple-400' },
    { name: 'HDR Cloud Evolvers Primary', class: 'bg-gradient-to-r from-green-500 to-cyan-600' },
  ];

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Color Test & Debug Page</h1>
        <p className="text-slate-400 mb-4">
          Use this page to compare how colors appear on different computers and browsers.
        </p>
        
        <div className="flex gap-4 mb-6">
          <Badge variant={testColors.brand.name === 'Cloud Evolvers' ? 'default' : 'secondary'}>
            Current Brand: {testColors.brand.name}
          </Badge>
          <Badge variant={testColors.isHDR ? 'default' : 'secondary'}>
            HDR Display: {testColors.isHDR ? 'Yes' : 'No'}
          </Badge>
        </div>
      </div>

      {/* Current Brand Colors */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Brand Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className={`h-20 w-full rounded-lg bg-gradient-to-r ${testColors.colors.primary}`}></div>
              <p className="text-sm font-medium">Primary</p>
              <code className="text-xs bg-slate-800 px-2 py-1 rounded">{testColors.colors.primary}</code>
            </div>
            <div className="space-y-2">
              <div className={`h-20 w-full rounded-lg bg-gradient-to-r ${testColors.colors.secondary}`}></div>
              <p className="text-sm font-medium">Secondary</p>
              <code className="text-xs bg-slate-800 px-2 py-1 rounded">{testColors.colors.secondary}</code>
            </div>
            <div className="space-y-2">
              <div className={`h-20 w-full rounded-lg ${testColors.colors.accent}`}></div>
              <p className="text-sm font-medium">Accent</p>
              <code className="text-xs bg-slate-800 px-2 py-1 rounded">{testColors.colors.accent}</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* All Color Tests */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>All Brand Colors Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colorTests.map((color, index) => (
              <div key={index} className="space-y-2">
                <div className={`h-16 w-full rounded-lg ${color.class}`}></div>
                <p className="text-sm font-medium">{color.name}</p>
                <code className="text-xs bg-slate-800 px-2 py-1 rounded block">{color.class}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Test Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => {
                localStorage.setItem('dev-brand-override', 'cloud-evolvers');
                window.location.reload();
              }}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Switch to Cloud Evolvers
            </Button>
            <Button 
              onClick={() => {
                localStorage.setItem('dev-brand-override', 'xevolve');
                window.location.reload();
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Switch to xEvolve
            </Button>
            <Button 
              onClick={() => {
                localStorage.removeItem('dev-brand-override');
                window.location.reload();
              }}
              variant="outline"
            >
              Clear Override
            </Button>
            <Button 
              onClick={() => {
                const info = {
                  brand: testColors.brand.name,
                  colors: testColors.colors,
                  isHDR: testColors.isHDR,
                  userAgent: navigator.userAgent,
                  colorDepth: screen.colorDepth,
                  pixelRatio: window.devicePixelRatio
                };
                navigator.clipboard.writeText(JSON.stringify(info, null, 2));
                alert('Color info copied to clipboard!');
              }}
              variant="secondary"
            >
              Copy Debug Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
