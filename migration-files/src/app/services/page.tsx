import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Cloud, Shield, Bot, Network, Cpu, Code, Globe, FileUp, LineChart, CheckCircle, PiggyBank, ArrowLeft
} from 'lucide-react';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Azure Services - xEvolve',
    description: 'Comprehensive Azure cloud solutions and expert training programs to optimize your environment, enhance security, and maximize your Microsoft technology investments.',
  };
}

interface ServicesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const services = [
    {
      title: t.header.serviceNames.azureApiMonitoring,
      slug: 'azure-monitoring',
      icon: <LineChart className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.azureMonitoring,
      features: t.services.features.azureMonitoring,
      category: lang === 'nl' ? 'Monitoring & Analytics' : 'Monitoring & Analytics'
    },
    {
      title: t.header.serviceNames.cloudManagement,
      slug: 'cloud-management',
      icon: <Cloud className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.cloudManagement,
      features: t.services.features.cloudManagement,
      category: lang === 'nl' ? 'Cloud Beheer' : 'Cloud Management'
    },
    {
      title: t.header.serviceNames.costOptimization,
      slug: 'cost-optimization',
      icon: <PiggyBank className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.costOptimization,
      features: t.services.features.costOptimization,
      category: lang === 'nl' ? 'Kostenoptimalisatie' : 'Cost Optimization'
    },
    {
      title: t.header.serviceNames.securityCompliance,
      slug: 'security-compliance',
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.securityCompliance,
      features: t.services.features.securityCompliance,
      category: lang === 'nl' ? 'Beveiliging' : 'Security'
    },
    {
      title: t.header.serviceNames.enterpriseFileTransfer,
      slug: 'enterprise-file-transfer',
      icon: <FileUp className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.fileTransfer,
      features: t.services.features.fileTransfer,
      category: lang === 'nl' ? 'Bestandsoverdracht' : 'File Transfer'
    },
    {
      title: t.header.serviceNames.cloudEngineering,
      slug: 'cloud-engineering',
      icon: <Network className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.cloudEngineering,
      features: t.services.features.cloudEngineering,
      category: lang === 'nl' ? 'Cloud Engineering' : 'Cloud Engineering'
    },
    {
      title: t.header.serviceNames.microsoft365Copilot,
      slug: 'microsoft-365-copilot',
      icon: <Bot className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.copilot,
      features: t.services.features.copilot,
      category: lang === 'nl' ? 'AI & Productiviteit' : 'AI & Productivity'
    },
    {
      title: t.header.serviceNames.infrastructureAsCode,
      slug: 'infrastructure-as-code',
      icon: <Code className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.infrastructureAsCode,
      features: t.services.features.infrastructureAsCode,
      category: lang === 'nl' ? 'Infrastructuur' : 'Infrastructure'
    },
    {
      title: t.header.serviceNames.networkEngineering,
      slug: 'network-engineering',
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.networkEngineering,
      features: t.services.features.networkEngineering,
      category: lang === 'nl' ? 'Netwerk Engineering' : 'Network Engineering'
    },
    {
      title: t.header.serviceNames.aiEngineering,
      slug: 'ai-engineering',
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      description: t.services.descriptions.aiEngineering,
      features: t.services.features.aiEngineering,
      category: lang === 'nl' ? 'AI & Machine Learning' : 'AI & Machine Learning'
    }
  ];

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
            <h1 className="text-4xl font-bold mb-4">{t.services.pageTitle}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t.services.pageDescription}
            </p>
            
            {/* Service Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Shield className="h-3 w-3" />
                {t.services.azureNative}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3" />
                {t.services.securityFirst}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Bot className="h-3 w-3" />
                {t.services.aiPowered}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <FileUp className="h-3 w-3" />
                {t.services.expertTraining}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.slug} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Link href={`/services/${service.slug}?lang=${lang}`} className="w-full">
                  <Button className="w-full">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
