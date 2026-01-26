import type { Metadata, Viewport } from 'next'; // Import Viewport
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ClientProviders } from '@/components/providers/client-providers';
import { FloatingTrainingButton } from '@/components/ui/floating-training-button';
import { getBrandConfig } from '@/lib/brand-config';
import ColorDiagnostic from '@/components/dev/color-diagnostic';
import PageTitle from '@/components/page-title';

// Initialize the font with display: swap for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

// Get brand configuration for metadata
const brandConfig = getBrandConfig();

export const metadata: Metadata = {
  title: `${brandConfig.name} - Expert Microsoft & Azure Training & Services`,
  description: brandConfig.description,
  icons: {
    icon: [
      { url: '/icon', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [ // Example theme color setup
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add key performance optimizations for rendering */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Optimize rendering of scrollable content */
          .scroll-content {
            contain: content;
            content-visibility: auto;
            contain-intrinsic-size: auto 1000px; /* Provide size hint to browser */
          }
          
          /* Optimize large lists */
          .virtual-list {
            content-visibility: auto;
            contain-intrinsic-size: auto 5000px;
          }
          
          /* Hardware acceleration for elements that animate */
          .hw-accelerated {
            transform: translateZ(0);
            will-change: transform;
            backface-visibility: hidden;
          }
          
          /* Reduce animations for users who prefer reduced motion */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
          
          /* Optimize paint performance */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* 4K and Ultra-wide optimizations */
          @media (min-width: 1920px) {
            body {
              font-size: 16px;
              line-height: 1.6;
            }
          }
          
          @media (min-width: 2560px) {
            body {
              font-size: 18px;
              line-height: 1.7;
            }
          }
          
          @media (min-width: 3840px) {
            body {
              font-size: 20px;
              line-height: 1.8;
            }
          }
        `}} />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ClientProviders>
            <>
              <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/90">
                <SiteHeader />
                <PageTitle />
                <div className="flex-grow min-h-[calc(100vh-4rem)] pt-0">
                  <main className="w-full scroll-content">
                    {children}
                  </main>
                </div>
                <SiteFooter />
                <FloatingTrainingButton />
                <ColorDiagnostic />
              </div>
            </>
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}