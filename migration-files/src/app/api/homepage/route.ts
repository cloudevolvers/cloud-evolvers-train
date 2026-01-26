import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Default homepage settings
const defaultSettings = {
  heroImage: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  heroTitle: 'Complete <span class="text-blue-500">Azure</span> & <span class="text-blue-500">Microsoft</span> Insights',
  heroSubtitle: 'xEvolve provides unparalleled visibility and control over your Azure resources, helping you optimize your environment, enhance security, and improve performance across your entire Azure estate.',
  ctaButtonText: 'Contact Us',
  ctaButtonLink: '#contact'
};

export async function GET() {
  try {
    // Return default settings directly since we don't have a backend service for this
    return NextResponse.json(defaultSettings);
  } catch (error) {
    console.error('Error fetching homepage settings:', error);
    return NextResponse.json(defaultSettings);
  }
}
