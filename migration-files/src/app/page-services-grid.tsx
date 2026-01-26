import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cloud, Shield, Code, Network, Bot, FileUp, MonitorCheck, CheckCircle, PiggyBank, Globe, Cpu
} from 'lucide-react';
import { getTranslations, SupportedLang } from '@/utils/i18n';
import { getBrandConfig } from '@/lib/brand-config';

interface ServicesGridProps {
  lang: SupportedLang;
}

export function ServicesGrid({ lang }: ServicesGridProps) {
  const t = getTranslations(lang);
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
  
  // Define icon color classes based on brand
  const iconColorClass = isCloudEvolvers ? 'text-emerald-500' : 'text-blue-500';
  
  // Define xEvolve core services - focused exclusively on file transfer platform
  const xEvolveServices = [
    {
      title: t.header.serviceNames.enterpriseFileTransfer,
      slug: 'enterprise-file-transfer',
      icon: <FileUp className={`h-5 w-5 ${iconColorClass}`} />,
      description: t.services.descriptions.fileTransfer,
      features: t.services.features.fileTransfer
    }
  ];
  
  // Define Cloud Evolvers services - comprehensive Azure consulting and training
  const cloudEvolversServices = [
    {
      title: t.header.serviceNames.azureApiMonitoring,
      slug: 'azure-monitoring',
      icon: <MonitorCheck className={`h-5 w-5 ${iconColorClass}`} />,
      description: t.services.descriptions.azureMonitoring,
      features: t.services.features.azureMonitoring
    },
    {
      title: t.header.serviceNames.cloudManagement,
      slug: 'cloud-management',
      icon: <Cloud className={`h-5 w-5 ${iconColorClass}`} />,
      description: t.services.descriptions.cloudManagement,
      features: t.services.features.cloudManagement
    },
    {
      title: t.header.serviceNames.costOptimization,
      slug: 'cost-optimization',
      icon: <PiggyBank className={`h-5 w-5 ${iconColorClass}`} />,
      description: t.services.descriptions.costOptimization,
      features: t.services.features.costOptimization
    },
    {
      title: t.header.serviceNames.securityCompliance,
      slug: 'security-compliance',
      icon: <Shield className={`h-5 w-5 ${iconColorClass}`} />,
      description: lang === 'nl' 
        ? 'Uitgebreide beveiligingsbeheer en compliance monitoring voor uw Azure-omgeving'
        : 'Comprehensive security management and compliance monitoring for your Azure environment',
      features: [
        lang === 'nl' ? 'Bedreigingsdetectie' : 'Threat detection',
        lang === 'nl' ? 'Compliance frameworks' : 'Compliance frameworks', 
        lang === 'nl' ? 'Beveiligingsbeoordelingen' : 'Security assessments',
        lang === 'nl' ? 'Zero Trust implementatie' : 'Zero Trust implementation'
      ]
    },
    {
      title: t.header.serviceNames.enterpriseFileTransfer,
      slug: 'enterprise-file-transfer',
      icon: <FileUp className={`h-5 w-5 ${iconColorClass}`} />,
      description: t.services.descriptions.fileTransfer,
      features: t.services.features.fileTransfer
    },
    {
      title: t.header.serviceNames.cloudEngineering,
      slug: 'cloud-engineering',
      icon: <Network className={`h-5 w-5 ${iconColorClass}`} />,
      description: lang === 'nl' 
        ? 'Expert cloud engineering services om uw Azure-infrastructuur te ontwerpen, bouwen en optimaliseren'
        : 'Expert cloud engineering services to design, build, and optimize your Azure infrastructure',
      features: [
        lang === 'nl' ? 'Architectuur ontwerp' : 'Architecture design',
        lang === 'nl' ? 'Implementatie' : 'Implementation',
        lang === 'nl' ? 'Migratieservices' : 'Migration services',
        lang === 'nl' ? 'Prestatie optimalisatie' : 'Performance optimization'
      ]
    },
    {
      title: t.header.serviceNames.microsoft365Copilot,
      slug: 'microsoft-365-copilot',
      icon: <Bot className={`h-5 w-5 ${iconColorClass}`} />,
      description: lang === 'nl' 
        ? 'Transformeer uw productiviteit met AI-gestuurde Microsoft 365 Copilot implementatie en training'
        : 'Transform your productivity with AI-powered Microsoft 365 Copilot implementation and training',
      features: [
        lang === 'nl' ? 'Copilot implementatie' : 'Copilot implementation',
        lang === 'nl' ? 'AI productiviteit training' : 'AI productivity training',
        lang === 'nl' ? 'Workflow optimalisatie' : 'Workflow optimization',
        lang === 'nl' ? 'Change management' : 'Change management'
      ]
    },
    {
      title: t.header.serviceNames.infrastructureAsCode,
      slug: 'infrastructure-as-code',
      icon: <Code className={`h-5 w-5 ${iconColorClass}`} />,
      description: lang === 'nl' 
        ? 'Automatiseer infrastructuur provisioning en beheer met code'
        : 'Automate infrastructure provisioning and management with code',
      features: [
        lang === 'nl' ? 'Geautomatiseerde provisioning' : 'Automated provisioning',
        lang === 'nl' ? 'Configuratiebeheer' : 'Configuration management',
        lang === 'nl' ? 'Versiecontrole' : 'Version control',
        lang === 'nl' ? 'Foutreductie' : 'Error reduction'
      ]
    },
    {
      title: t.header.serviceNames.networkEngineering,
      slug: 'network-engineering',
      icon: <Globe className={`h-5 w-5 ${iconColorClass}`} />,
      description: lang === 'nl' 
        ? 'Ontwerp en implementeer robuuste netwerkoplossingen in Azure'
        : 'Design and implement robust networking solutions in Azure',
      features: [
        lang === 'nl' ? 'Netwerkontwerp' : 'Network design',
        lang === 'nl' ? 'Implementatie' : 'Implementation',
        lang === 'nl' ? 'Beveiligingsbeheer' : 'Security management',
        lang === 'nl' ? 'Prestatie optimalisatie' : 'Performance optimization'
      ]
    },
    {
      title: t.header.serviceNames.aiEngineering,
      slug: 'ai-engineering',
      icon: <Cpu className={`h-5 w-5 ${iconColorClass}`} />,
      description: lang === 'nl' 
        ? 'Transformeer uw bedrijf met AI-gestuurde oplossingen en consultancy'
        : 'Transform your business with AI-powered solutions and consultancy',
      features: [
        lang === 'nl' ? 'Machine learning implementatie' : 'Machine learning implementation',
        lang === 'nl' ? 'AI strategie' : 'AI strategy',
        lang === 'nl' ? 'Intelligente automatisering' : 'Intelligent automation',
        lang === 'nl' ? 'Data science consulting' : 'Data science consulting'
      ]
    }
  ];

  // Use appropriate services based on brand
  const services = isCloudEvolvers ? cloudEvolversServices : xEvolveServices;
  
  // Define dynamic brand-based colors
  const checkIconClass = isCloudEvolvers ? 'text-emerald-500' : 'text-blue-500';
  const cardBackgroundClass = isCloudEvolvers 
    ? 'bg-slate-800/40 border-slate-600/40 hover:bg-slate-800/60 backdrop-blur-sm' 
    : 'bg-blue-950/30 border-blue-500/30 hover:bg-blue-950/40 backdrop-blur-sm';
  const buttonClass = isCloudEvolvers
    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600';
  
  return (
    <div className="w-full services-no-scroll overflow-hidden">
      <div className={`grid gap-4 lg:gap-6 ${
        isCloudEvolvers 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' 
          : 'grid-cols-1 max-w-2xl mx-auto'
      }`}>
      {/* All Services are now Static and Brand-Aware */}
      {services.map((service, index) => (
        <Card key={`service-${index}`} className={`${cardBackgroundClass} h-full flex flex-col transition-all duration-300 shadow-lg hover:shadow-xl ${
          !isCloudEvolvers ? 'p-6 lg:p-8' : ''
        }`}>
          <CardHeader className={isCloudEvolvers ? "p-3 sm:p-4" : "p-0 mb-6"}>
            <div className={`flex items-center gap-2 mb-3 ${!isCloudEvolvers ? 'justify-center flex-col' : ''}`}>
              <div className={`${!isCloudEvolvers ? 'p-3 bg-blue-500/10 rounded-lg mb-4' : ''}`}>
                {service.icon}
              </div>
              <CardTitle className={`${isCloudEvolvers ? 'text-base sm:text-lg text-white' : 'text-2xl lg:text-3xl font-bold text-center text-white'}`}>
                {service.title}
              </CardTitle>
            </div>
            <CardDescription className={`${
              isCloudEvolvers 
                ? 'text-xs sm:text-sm text-slate-300' 
                : 'text-lg leading-relaxed text-center text-slate-200'
            }`}>
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent className={`flex-grow ${isCloudEvolvers ? 'p-3 sm:p-4' : 'p-0'}`}>
            <ul className={`space-y-3 ${isCloudEvolvers ? 'text-xs sm:text-sm' : 'text-base grid grid-cols-1 md:grid-cols-2 gap-3'}`}>
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className={`h-5 w-5 flex-shrink-0 ${checkIconClass}`} />
                  <span className={`${!isCloudEvolvers ? 'font-medium text-slate-200' : 'text-slate-300'}`}>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className={isCloudEvolvers ? "p-3 sm:p-4" : "p-0 pt-6"}>
            <Link href={`/services/${service.slug}?lang=${lang}`} className="w-full">
              <Button 
                className={`w-full text-white font-semibold ${buttonClass} ${!isCloudEvolvers ? 'text-lg py-3' : ''}`}
              >
                {t.services.learnMore}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
      </div>
    </div>
  );
}
