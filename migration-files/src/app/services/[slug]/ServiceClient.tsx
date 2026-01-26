'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Service } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/i18n';

interface ServiceClientProps {
  initialService: Service | null;
  slug: string;
}

export default function ServiceClient({ initialService, slug }: ServiceClientProps) {
  const [service, setService] = useState<Service | null>(initialService);
  const [loading, setLoading] = useState<boolean>(!initialService);
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');

  useEffect(() => {
    // Only fetch if we don't have initial data
    if (!initialService) {
      const loadService = async () => {
        try {
          setLoading(true);
          console.log(`Fetching service data for slug: ${slug}`);
          
          const response = await fetch(`/backend/services/${slug}`, {
            // Add cache: 'no-store' to prevent stale cache issues in production
            cache: 'no-store'
          });
          
          if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`);
            throw new Error(`Failed to fetch service: ${response.status}`);
          }
          
          const data = await response.json();
          console.log(`Received service data:`, data);
          
          if (data.success && data.service) {
            setService(data.service);
          } else {
            console.error('Invalid API response format:', data);
            throw new Error('Invalid response format');
          }
        } catch (error) {
          console.error('Error loading service:', error);
          setService(null);
        } finally {
          setLoading(false);
        }
      };
      loadService();
    }
  }, [initialService, slug]);

  if (loading) {
    return <div className="container mx-auto py-12">Loading service details...</div>;
  }

  if (!service) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {!isClient ? 'Terug naar Home' : t.navigation.backToHome}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Handle arrays or strings for features and benefits
  const features = Array.isArray(service.features) 
    ? service.features 
    : [
        "24/7 monitoring and support",
        "Detailed analytics and reporting",
        "Expert consultation",
        "Customized solutions"
      ];
  
  const benefits = Array.isArray((service as Service & { benefits?: string[] }).benefits) 
    ? (service as Service & { benefits?: string[] }).benefits 
    : [
        "Cost optimization",
        "Improved performance",
        "Enhanced security",
        "Reduced complexity"
      ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {!isClient ? 'Terug naar Home' : t.navigation.backToHome}
      </Link>
      
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-8 bg-blue-900/20">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>

        {/* Features and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {Array.isArray(features) && features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{typeof feature === 'string' ? feature : (feature as any).title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-3">
              {Array.isArray(benefits) && benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{typeof benefit === 'string' ? benefit : (benefit as any).title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: service.content || '' }} />

        {/* CTA Section */}
        <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today to learn how our {service.title} services can help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/showcase">
              <Button size="lg" variant="outline">
                View Showcase
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
