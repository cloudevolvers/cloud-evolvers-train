"use client";

import React from 'react';
import { ApiKeyProvider } from "@/lib/api-key-context";
import { ImageProvider } from "@/lib/image-context";
import AdminHeader from "@/components/admin/admin-header";

/**
 * Admin layout component - layout with header for image management
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApiKeyProvider>
      <ImageProvider>
        <div className="min-h-screen bg-background">
          <AdminHeader />
          <main className="container mx-auto py-6 px-4 md:px-6 pt-20">
            {children}
          </main>
        </div>
      </ImageProvider>
    </ApiKeyProvider>
  );
}