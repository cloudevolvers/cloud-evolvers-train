import React from 'react';
import { GraduationCap, Users, Award, Cloud, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { getTranslations } from '@/utils/i18n';

interface CloudEvolversHeroProps {
  settings: {
    heroImages?: string[];
    currentHeroIndex?: number;
    heroTitle: string;
    heroSubtitle: string;
    ctaButtonText: string;
    ctaButtonLink: string;
    heroRotationEnabled?: boolean;
    heroRotationInterval?: number;
  };
  t: ReturnType<typeof getTranslations>;
  imageLoaded: boolean;
  imageError: boolean;
  getCurrentHeroImage: () => string;
}

export function CloudEvolversHero({ settings, t, imageLoaded, imageError, getCurrentHeroImage }: CloudEvolversHeroProps) {
  return (
    <div className="col-span-1 h-full">
      <div className="cloud-evolvers-hero-section cloud-evolvers-section-content bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 backdrop-blur-md rounded-lg p-4 lg:p-6 border border-emerald-400/30 shadow-xl h-full">
        {/* Hero Text Content */}
        <div className="text-center mb-4 flex-shrink-0">
          <Badge variant="secondary" className="mb-3 text-xs bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
            {t.training?.cloudEvolvers?.expertTraining || 'MCT-Led Training & Azure Consulting'}
          </Badge>
          <h1 
            className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 leading-tight text-white drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: settings.heroTitle }}
          />
          <p className="text-xs lg:text-sm text-emerald-100/90 mb-4 leading-relaxed drop-shadow-md">
            {settings.heroSubtitle}
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
            <div className="flex items-center gap-1 bg-emerald-500/20 px-2 py-1 rounded-full border border-emerald-400/30 backdrop-blur-sm">
              <Award className="h-3 w-3 text-emerald-200" />
              <span className="text-xs font-medium text-emerald-100">{t.training?.cloudEvolvers?.mctLedShort || 'MCT-Led'}</span>
            </div>
            <div className="flex items-center gap-1 bg-teal-500/20 px-2 py-1 rounded-full border border-teal-400/30 backdrop-blur-sm">
              <GraduationCap className="h-3 w-3 text-teal-200" />
              <span className="text-xs font-medium text-teal-100">{t.training?.cloudEvolvers?.azureExpertShort || 'Azure Expert'}</span>
            </div>
            <div className="flex items-center gap-1 bg-emerald-600/20 px-2 py-1 rounded-full border border-emerald-400/30 backdrop-blur-sm">
              <Cloud className="h-3 w-3 text-emerald-200" />
              <span className="text-xs font-medium text-emerald-100">{t.training?.cloudEvolvers?.realWorldShort || 'Real-World'}</span>
            </div>
          </div>
        </div>

        {/* Hero Image - MIDDLE SECTION */}
        <div className="cloud-evolvers-hero-image cloud-evolvers-flex-content mb-2 flex-grow flex items-center justify-center p-1" style={{ overflow: 'visible' }}>
          <div 
            className="bg-gradient-to-br from-emerald-800/50 to-emerald-700/40 rounded-xl p-4 inline-block max-w-full backdrop-blur-sm"
            style={{ 
              border: '4px solid rgba(52, 211, 153, 0.8)',
              boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.3)',
              position: 'relative',
              zIndex: 10,
              marginTop: '0rem',
              minHeight: '200px', // Reduced from 280px
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              className="rounded-lg overflow-hidden relative min-h-[240px] max-w-[600px] mx-auto flex items-center justify-center bg-gradient-to-br from-white/10 to-emerald-900/20"
              style={{ 
                border: '2px solid rgba(167, 243, 208, 0.6)' 
              }}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/80 to-emerald-900/85 animate-pulse flex items-center justify-center">
                  <Loader2 className="h-6 w-6 text-emerald-400 animate-spin" />
                </div>
              )}
              {!imageError && (
                <img 
                  src={getCurrentHeroImage()}
                  alt="Cloud Training Excellence"
                  className={`block max-w-full h-auto max-h-[200px] object-contain rounded-md transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => {}}
                  onError={() => {}}
                />
              )}
              {imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900 flex items-center justify-center">
                  <div className="text-center text-emerald-100/60">
                    <Cloud className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Cloud Training Excellence</p>
                    <p className="text-xs opacity-80">Professional Azure & Microsoft 365 Education</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section with CTA and Stats */}
        <div className="mt-auto flex-shrink-0">
          <div className="flex flex-col gap-2 justify-center items-center mb-4">
            <Link href={settings.ctaButtonLink}>
              <Button size="sm" className="bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-emerald-900 font-semibold px-4 py-2 text-xs shadow-lg shadow-emerald-500/25 backdrop-blur-sm border border-emerald-300/20">
                <GraduationCap className="mr-2 h-3 w-3" />
                {settings.ctaButtonText}
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="sm" className="border-emerald-300/50 text-emerald-100 hover:bg-emerald-500/20 px-4 py-2 backdrop-blur-sm text-xs">
                <Cloud className="mr-2 h-3 w-3" />
                Consulting Services
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-emerald-400/30">
            <div className="text-center">
              <div className="text-base font-bold text-teal-300 drop-shadow-md">15+</div>
              <div className="text-xs text-teal-200/80">Course Topics</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-emerald-300 drop-shadow-md">🌍 Willing to Travel</div>
              <div className="text-xs text-emerald-200/80">On-site training</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
