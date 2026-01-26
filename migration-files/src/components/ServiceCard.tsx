'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import ServiceImage from './ServiceImage';
import ServiceMarkdown from './ServiceMarkdown';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  // Extract excerpt from content if not already provided
  const excerpt = service.excerpt || (service.content 
    ? service.content.substring(0, 150) + (service.content.length > 150 ? '...' : '')
    : service.description);

  // Use name or title for display
  const displayName = service.name || service.title || "Unnamed Service";

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        <ServiceImage service={service} />
      </div>
      <CardHeader>
        <CardTitle>{displayName}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {compact ? (
          <p className="text-sm text-muted-foreground">{excerpt}</p>
        ) : (
          <ServiceMarkdown content={service.content || ''} className="prose-sm" />
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/services/${service.slug}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
