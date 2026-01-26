'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/i18n';
import { getBrandConfig } from '@/lib/brand-config';
import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface AboutContent {
  title: string;
  heroImage: string;
  content: string;
  team: TeamMember[];
  meta: {
    description: string;
    updatedAt: string;
  };
}

// Server-side data fetching
async function getAboutContent(): Promise<AboutContent> {
  // Default content as fallback
  const defaultContent = {
    title: 'About xEvolve',
    heroImage: '',
    content: `
      <p>xEvolve is a cloud consultancy bringing Microsoft stack experience to businesses across Europe.</p>
      <p>We focus on practical implementations that solve real business challenges using Azure and Microsoft technologies.</p>
    `,
    team: [] as TeamMember[],
    meta: {
      description: 'Learn more about xEvolve, our team, and our approach to Microsoft Azure cloud consulting.',
      updatedAt: new Date().toISOString()
    }
  };

  try {
    // Use absolute URL based on environment
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
      : process.env.BACKEND_URL || '';
    
    const res = await fetch(`${baseUrl}/backend/about`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: { 'Cache-Control': 'no-cache' }
    });
    
    if (!res.ok) {
      console.error(`Failed to load about content: ${res.status}`);
      return defaultContent;
    }
    
    return await res.json();
  } catch (error) {
    console.error('Failed to load about content:', error);
    return defaultContent;
  }
}

export default function AboutPage() {
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');
  const [aboutContent, setAboutContent] = useState<any>(null);
  const brandConfig = getBrandConfig();
  const contactEmail = brandConfig.contactEmail;

  useEffect(() => {
    getAboutContent().then(setAboutContent);
  }, []);

  if (!aboutContent) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {!isClient ? 'Terug naar Home' : t.navigation.backToHome}
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{aboutContent.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {aboutContent.meta.description}
        </p>
      </div>
      
      {aboutContent.heroImage && (
        <div className="relative w-full h-64 md:h-80 mb-12 rounded-xl overflow-hidden">
          <Image
            src={aboutContent.heroImage}
            alt="xEvolve team"
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div 
        className="prose prose-lg dark:prose-invert max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: aboutContent.content }}
      />
      
      {aboutContent.team && aboutContent.team.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {brandConfig.name === 'Cloud Evolvers' && lang === 'nl' ? t.about?.ourTeam || 'Ons Team' : 'Our Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.team.map((member, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                {member.image ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className={`h-48 flex items-center justify-center bg-gradient-to-r ${brandConfig.colors.primary}/20`}>
                    <Users className={`h-16 w-16 text-gradient-to-r ${brandConfig.colors.primary}/30`} />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className={`bg-gradient-to-r ${brandConfig.colors.primary} bg-clip-text text-transparent font-medium`}>
                    {member.role}
                  </p>
                  <p className="text-sm mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="border-t border-border pt-8 mt-12">
        <h2 className="text-2xl font-bold mb-6">
          {brandConfig.name === 'Cloud Evolvers' && lang === 'nl' ? t.about?.getInTouch || 'Neem Contact Op' : t.about?.getInTouch || 'Get In Touch'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              {brandConfig.name === 'Cloud Evolvers' && lang === 'nl' 
                ? t.about?.interestedInTraining || 'Geïnteresseerd in samenwerking? Vragen over onze trainingen en services?'
                : t.about?.interestedInWorking || 'Interested in working with us? Have questions about our services?'
              }
            </p>
            <Button asChild className={`bg-gradient-to-r ${brandConfig.colors.primary} hover:opacity-90 text-white`}>
              <Link href="/contact">
                {brandConfig.name === 'Cloud Evolvers' && lang === 'nl' ? t.about?.contactUs || 'Contact' : t.about?.contactUs || 'Contact Us'}
              </Link>
            </Button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className={`h-5 w-5 bg-gradient-to-r ${brandConfig.colors.primary} bg-clip-text text-transparent`} />
              <span>{contactEmail}</span>
            </div>
            <div className="flex gap-3 mt-4">
              <Link href="#" className={`bg-gradient-to-r ${brandConfig.colors.primary} bg-clip-text text-transparent hover:opacity-75`}>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className={`bg-gradient-to-r ${brandConfig.colors.primary} bg-clip-text text-transparent hover:opacity-75`}>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground text-center mt-16">
        {brandConfig.name === 'Cloud Evolvers' && lang === 'nl' ? t.about?.lastUpdated || 'Laatst bijgewerkt: ' : t.about?.lastUpdated || 'Last updated: '}
        {new Date(aboutContent.meta.updatedAt).toLocaleDateString()}
      </div>
    </div>
  );
}
