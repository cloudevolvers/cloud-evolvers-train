import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { getTranslations, SupportedLang } from '@/utils/i18n';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order: number;
}

interface ServiceLayoutProps {
  service: ServiceData;
  lang: SupportedLang;
  children: ReactNode;
}

export default function ServiceLayout({ service, lang, children }: ServiceLayoutProps) {
  const t = getTranslations(lang);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href={`/?lang=${lang}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.common.backToHome}
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {service.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                {children}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">
                  {lang === 'nl' ? 'Interesse in deze service?' : 'Interested in this service?'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {lang === 'nl' 
                    ? 'Neem contact op voor een gratis consultatie over uw specifieke behoeften.'
                    : 'Get in touch for a free consultation about your specific needs.'
                  }
                </p>
                
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href={`/contact?service=${service.id}&lang=${lang}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      {t.home.ctaButtonText}
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || '+31-6-34272027'}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {lang === 'nl' ? 'Bel ons direct' : 'Call us directly'}
                    </Link>
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">
                    {lang === 'nl' ? 'Gerelateerde services' : 'Related services'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <Link 
                      href={`/services/cloud-management?lang=${lang}`}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.header.serviceNames.cloudManagement}
                    </Link>
                    <Link 
                      href={`/services/cost-optimization?lang=${lang}`}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.header.serviceNames.costOptimization}
                    </Link>
                    <Link 
                      href={`/services/security-compliance?lang=${lang}`}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.header.serviceNames.securityCompliance}
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
