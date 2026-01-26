import type { Metadata, Viewport } from 'next'; // Ensure Viewport is imported

export const metadata: Metadata = {
  title: "Privacy Policy - xEvolve", // Example title
  description: "xEvolve's Privacy Policy", // Example description
  // Remove the 'viewport' property if it exists here
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Add any other viewport settings that were previously in metadata.viewport
};
