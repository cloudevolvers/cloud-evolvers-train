'use client';

import Link from 'next/link';
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SubmitIdeaForm from "@/components/submit-idea/SubmitIdeaForm";
import { getTranslations } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SubmitIdeaPage() {
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t.submitIdea.backToHome}
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.submitIdea.submitYourIdea}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.submitIdea.pageSubtitle}
        </p>
      </div>
      
      <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-6 w-6 text-blue-500" />
          <h2 className="text-2xl font-bold">{t.submitIdea.whySubmitTitle}</h2>
        </div>
        <p className="mb-4">
          {t.submitIdea.whySubmitIntro}
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>{t.submitIdea.benefit1}</li>
          <li>{t.submitIdea.benefit2}</li>
          <li>{t.submitIdea.benefit3}</li>
          <li>{t.submitIdea.benefit4}</li>
        </ul>
        <p>
          {t.submitIdea.whySubmitOutro}
        </p>
      </div>
      
      <Card className="bg-background/50 border border-border/20">
        <CardHeader>
          <CardTitle>{t.submitIdea.shareYourIdea}</CardTitle>
          <CardDescription>
            {t.submitIdea.shareYourIdeaDesc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmitIdeaForm />
        </CardContent>
      </Card>
      
      <div className="mt-10 text-center">
        <p className="text-muted-foreground">
          {t.submitIdea.thankYouMessage}
        </p>
      </div>
    </div>
  );
}
