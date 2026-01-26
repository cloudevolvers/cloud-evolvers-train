'use client';

import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

export default function RefreshButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => window.location.reload()}
        className="bg-slate-800 text-white hover:bg-slate-700 border-slate-600"
      >
        <RefreshCw className="h-4 w-4 mr-2" />
        Force Refresh
      </Button>
    </div>
  );
}
