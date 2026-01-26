'use client';

import { useEffect, useState } from 'react';

export default function RenderTimestamp({ initialTime }: { initialTime: string }) {
  const [renderTime, setRenderTime] = useState(initialTime);
  
  useEffect(() => {
    // Update the render time when component mounts on client
    setRenderTime(new Date().toLocaleTimeString());
  }, []);
  
  return (
    <div className="fixed top-4 right-4 z-50 text-xs bg-black/70 text-white px-2 py-1 rounded">
      Last rendered: {renderTime}
    </div>
  );
}
