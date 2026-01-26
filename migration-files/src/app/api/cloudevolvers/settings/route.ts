import { NextRequest, NextResponse } from 'next/server';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Simple auth check function
async function requireAuth(request: NextRequest) {
  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Bearer ')) {
    return false;
  }
  // Add your JWT verification logic here if needed
  return true;
}

// Default Cloud Evolvers settings (language-aware)
const getDefaultSettings = (lang: SupportedLang = 'en') => {
  const t = getTranslations(lang);
  
  return {
    heroImages: [
      '/cloudevolvers-logo/logo/vector/logo.svg'
    ],
    currentHeroIndex: 0,
    heroTitle: t.training?.cloudEvolvers?.heroTitle || 'Expert <span class="text-emerald-400">Azure Training</span> & <span class="text-teal-400">Certification</span>',
    heroSubtitle: t.training?.cloudEvolvers?.heroSubtitle || 'Master Azure and Microsoft 365 with hands-on training from Microsoft Certified Trainers. Build real-world skills that advance your career.',
    ctaButtonText: t.training?.cloudEvolvers?.ctaButtonText || 'View Training Programs',
    ctaButtonLink: t.training?.cloudEvolvers?.ctaButtonLink || '/training',
    heroRotationEnabled: false,
    heroRotationInterval: 5000 // 5 seconds
  };
};

// In-memory storage for demo purposes
// In production, this should be stored in a database
let currentSettings = { ...getDefaultSettings('en') };

export async function GET(request: NextRequest) {
  try {
    // Extract language parameter
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') as SupportedLang || 'en';
    
    // Return language-specific settings
    const settings = { ...getDefaultSettings(lang), ...currentSettings };
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching Cloud Evolvers settings:', error);
    return NextResponse.json(getDefaultSettings('en'));
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const isAuthenticated = await requireAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Validate required fields
    const { 
      heroImages, 
      currentHeroIndex, 
      heroTitle, 
      heroSubtitle, 
      ctaButtonText, 
      ctaButtonLink,
      heroRotationEnabled,
      heroRotationInterval
    } = body;
    
    if (!heroTitle || !heroSubtitle || !ctaButtonText || !ctaButtonLink) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update settings
    currentSettings = {
      heroImages: Array.isArray(heroImages) ? heroImages : getDefaultSettings('en').heroImages,
      currentHeroIndex: typeof currentHeroIndex === 'number' ? currentHeroIndex : 0,
      heroTitle,
      heroSubtitle,
      ctaButtonText,
      ctaButtonLink,
      heroRotationEnabled: Boolean(heroRotationEnabled),
      heroRotationInterval: heroRotationInterval || getDefaultSettings('en').heroRotationInterval
    };

    return NextResponse.json({
      success: true,
      settings: currentSettings
    });
  } catch (error) {
    console.error('Error updating Cloud Evolvers settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Reset to defaults
  try {
    // Check authentication
    const isAuthenticated = await requireAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    currentSettings = { ...getDefaultSettings('en') };
    
    return NextResponse.json({
      success: true,
      settings: currentSettings,
      message: 'Settings reset to defaults'
    });
  } catch (error) {
    console.error('Error resetting Cloud Evolvers settings:', error);
    return NextResponse.json(
      { error: 'Failed to reset settings' },
      { status: 500 }
    );
  }
}
