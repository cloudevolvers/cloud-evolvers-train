"use client";
import { ImageProvider } from "@/lib/image-context";
import { LanguageProvider } from "@/contexts/LanguageContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ImageProvider>
        {children}
      </ImageProvider>
    </LanguageProvider>
  );
}
