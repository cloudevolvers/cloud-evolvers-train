'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

export default function RefreshButton() {
  const router = useRouter();
  
  const handleRefresh = () => {
    // Force a hard refresh of the page
    if (typeof window !== 'undefined') {
      router.refresh();
      console.log('Forcing page refresh...');
    }
  };
  
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleRefresh}
        className="bg-slate-800 text-white hover:bg-slate-700 border-slate-600"
      >
        <RefreshCw className="h-4 w-4 mr-2" />
        Force Refresh
      </Button>
    </div>
  );
}
