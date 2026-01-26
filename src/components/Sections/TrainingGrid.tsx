import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/use-translations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Gear, Code, Shield, Globe, Buildings, Star } from '@phosphor-icons/react';
import { extendedTrainingCourses, allColorMappings } from '@/data/extended-training-courses';

// Azure and Microsoft Stack Excellence courses
const azureExcellenceCourses = [
  {
    code: "AZ-900",
    name: "Azure Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Start your Azure journey with cloud fundamentals and core services. Learn about Azure architecture, pricing models, and essential services that form the foundation of cloud computing.",
    category: "Azure Fundamentals",
    icon: Cloud,
    color: "blue",
    popular: true,
    highlights: ["Cloud concepts", "Core Azure services", "Security & compliance", "Pricing & support"]
  },
  {
    code: "AZ-104",
    name: "Azure Administrator",
    level: "Intermediate",
    duration: "4 days",
    description: "Master Azure administration and infrastructure management. Configure virtual machines, storage, networking, and implement monitoring solutions for enterprise environments.",
    category: "Azure Administration",
    icon: Gear,
    color: "sky",
    popular: true,
    highlights: ["Virtual machines", "Storage solutions", "Virtual networking", "Monitoring & backup"]
  },
  {
    code: "AZ-204",
    name: "Azure Developer",
    level: "Intermediate",
    duration: "4 days",
    description: "Build and deploy scalable applications on the Azure platform. Learn about Azure Functions, App Services, and integrate with databases and storage solutions.",
    category: "Azure Development",
    icon: Code,
    color: "orange",
    popular: true,
    highlights: ["Azure Functions", "App Services", "Database integration", "DevOps practices"]
  },
  {
    code: "AZ-305",
    name: "Azure Solutions Architect",
    level: "Advanced",
    duration: "5 days",
    description: "Design enterprise-scale Azure solutions and architectures. Master complex scenarios including hybrid cloud, disaster recovery, and multi-region deployments.",
    category: "Azure Architecture",
    icon: Buildings,
    color: "purple",
    highlights: ["Solution design", "Hybrid architectures", "Security strategies", "Cost optimization"]
  },
  {
    code: "AZ-500",
    name: "Azure Security Engineer",
    level: "Advanced",
    duration: "4 days",
    description: "Implement comprehensive security controls and threat protection in Azure environments. Learn identity management, data protection, and security monitoring.",
    category: "Azure Security",
    icon: Shield,
    color: "red",
    highlights: ["Identity management", "Data protection", "Security monitoring", "Threat detection"]
  },
  {
    code: "AZ-400",
    name: "Azure DevOps Engineer",
    level: "Advanced",
    duration: "4 days",
    description: "Master DevOps practices with Azure DevOps services. Implement CI/CD pipelines, infrastructure as code, and monitoring strategies for modern application delivery.",
    category: "Azure DevOps",
    icon: Code,
    color: "cyan",
    highlights: ["CI/CD pipelines", "Infrastructure as code", "Release management", "Monitoring strategies"]
  },
  {
    code: "AI-102",
    name: "Azure AI Engineer",
    level: "Advanced",
    duration: "4 days",
    description: "Build intelligent applications with Azure AI services. Learn computer vision, natural language processing, and machine learning integration for enterprise solutions.",
    category: "Azure AI",
    icon: Cloud,
    color: "violet",
    highlights: ["Computer vision", "Natural language processing", "Machine learning", "Cognitive services"]
  },
  {
    code: "DP-900",
    name: "Azure Data Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Explore data concepts and Azure data services. Learn about relational and non-relational data, analytics workloads, and data governance in the cloud.",
    category: "Azure Data",
    icon: Buildings,
    color: "teal",
    highlights: ["Data concepts", "Azure data services", "Analytics workloads", "Data governance"]
  },
  {
    code: "MS-102",
    name: "Microsoft 365 Administrator",
    level: "Intermediate",
    duration: "5 days",
    description: "Manage Microsoft 365 tenant and enterprise services. Configure Exchange Online, SharePoint, Teams, and implement security policies across the platform.",
    category: "Microsoft 365",
    icon: Globe,
    color: "indigo",
    highlights: ["Exchange Online", "SharePoint", "Teams administration", "Security policies"]
  },
  {
    code: "PL-900",
    name: "Power Platform Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Discover the Power Platform ecosystem. Learn Power Apps, Power Automate, Power BI, and Power Virtual Agents to create business solutions without code.",
    category: "Power Platform",
    icon: Gear,
    color: "amber",
    highlights: ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"]
  },
  {
    code: "SC-900",
    name: "Security, Compliance & Identity",
    level: "Beginner",
    duration: "2 days",
    description: "Understand Microsoft security, compliance, and identity fundamentals. Learn about Zero Trust, compliance management, and identity protection strategies.",
    category: "Security & Compliance",
    icon: Shield,
    color: "red",
    highlights: ["Zero Trust", "Compliance management", "Identity protection", "Risk assessment"]
  },
  {
    code: "AZ-700",
    name: "Azure Network Engineer",
    level: "Advanced",
    duration: "4 days",
    description: "Design and implement Azure networking solutions. Master virtual networks, hybrid connectivity, network security, and application delivery services.",
    category: "Azure Networking",
    icon: Globe,
    color: "blue",
    popular: true,
    highlights: ["Virtual networks", "Hybrid connectivity", "Network security", "Load balancing"]
  },
  // Add extended training courses for more variety
  ...extendedTrainingCourses
];

function getCategoryColors(color: string) {
  return allColorMappings[color] || allColorMappings.blue;
}

function getLevelColors(level: string) {
  switch (level) {
    case 'Beginner': return 'bg-sky-500 text-white';
    case 'Intermediate': return 'bg-orange-500 text-white';
    case 'Advanced': return 'bg-red-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
}

export function TrainingGrid() {
  try {
    const { t, language } = useTranslations();

    return (
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {azureExcellenceCourses.map((course, index) => {
          const categoryColors = getCategoryColors(course.color);
          const IconComponent = course.icon;

          return (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="cursor-pointer group"
            >
              <Card className="h-full overflow-hidden bg-card border border-border/40 group-hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 relative">
                {/* Popular badge */}
                {/* @ts-ignore - popular property is added dynamically to some objects */}
                {course.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-amber-500 text-white px-3 py-1.5 text-xs font-bold shadow-sm">
                      <Star size={12} className="mr-1" weight="fill" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Course header with icon */}
                <div className={`relative h-32 bg-gradient-to-br ${categoryColors.bg} ${categoryColors.border} border-b flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`${categoryColors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={48} weight="duotone" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getLevelColors(course.level)} text-xs px-2 py-1`}>
                      {course.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="font-mono font-bold text-sm px-3 py-1.5 bg-primary/15 text-primary border border-primary/30">
                      {course.code}
                    </Badge>
                    <Badge className={`${categoryColors.text} text-xs px-2 py-1 bg-transparent border ${categoryColors.border}`}>
                      {course.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {course.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course highlights */}
                  {course.highlights && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        {t.training?.grid?.keyTopics || 'Key Topics'}
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {course.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${course.color}-500`} />
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-3 border-t border-border/40">
                    <span>{t.training?.grid?.duration || 'Duration'}: {course.duration}</span>
                    <Badge variant="outline" className="text-xs">
                      {t.training?.grid?.available || 'Available'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    );
  } catch (error) {
    console.error('TrainingGrid Error:', error);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 mb-16">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Azure Fundamentals</h3>
          <p className="text-muted-foreground">Learn the basics of Azure cloud computing</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Azure Administrator</h3>
          <p className="text-muted-foreground">Master Azure administration skills</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Azure Developer</h3>
          <p className="text-muted-foreground">Develop cloud solutions on Azure</p>
        </Card>
      </div>
    );
  }
}
