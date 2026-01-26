import { motion } from "framer-motion";


interface PageBackgroundLayoutProps {
  children: React.ReactNode;
  iconOpacity?: number;
}

export function PageBackgroundLayout({ children, iconOpacity = 35 }: PageBackgroundLayoutProps) {
  // Comprehensive icon set for the entire page - Green/Teal Theme
  return (
    <div className="relative min-h-screen">
      {/* Global Background Effects - Clean */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}