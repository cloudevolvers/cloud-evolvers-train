import { useState, useEffect } from 'react';

export function DebugViewport() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewport({ width, height });

      // Determine breakpoint based on Tailwind config
      if (width >= 3840) setBreakpoint('7xl (3840px+ - 4K UHD)');
      else if (width >= 3440) setBreakpoint('6xl (3440px+ - Ultra-wide)');
      else if (width >= 2560) setBreakpoint('5xl (2560px+ - 4K Wide)');
      else if (width >= 1920) setBreakpoint('4xl (1920px+ - 4K/Ultra HD)');
      else if (width >= 1600) setBreakpoint('3xl (1600px+ - QHD/WQHD)');
      else if (width >= 1536) setBreakpoint('2xl (1536px+)');
      else if (width >= 1280) setBreakpoint('xl (1280px+)');
      else if (width >= 1024) setBreakpoint('lg (1024px+)');
      else if (width >= 768) setBreakpoint('md (768px+)');
      else if (width >= 640) setBreakpoint('sm (640px+)');
      else setBreakpoint('base (<640px)');
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="px-4 py-3 bg-black/80 text-white rounded-lg text-sm font-mono border border-gray-600 backdrop-blur-sm">
        <div><strong>🖥️ VIEWPORT DEBUG</strong></div>
        <div>Size: <strong>{viewport.width} × {viewport.height}</strong></div>
        <div>BP: <strong>{breakpoint}</strong></div>
        <div className="mt-2 text-xs text-gray-300">
          <div>Icons optimized for:</div>
          <div>• 3xl+ (1600px+): Enhanced coverage</div>
          <div>• 4xl+ (1920px+): Dense coverage</div>
          <div>• 5xl+ (2560px+): Ultra coverage</div>
          <div>• 6xl+ (3440px+): Max coverage</div>
          <div>• 7xl+ (3840px+): Full 4K coverage</div>
        </div>
      </div>
    </div>
  );
}
