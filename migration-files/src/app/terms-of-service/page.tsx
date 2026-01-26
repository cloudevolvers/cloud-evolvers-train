'use client';

import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/i18n';

export default function TermsOfServicePage() {
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {!isClient ? 'Terug naar Home' : t.navigation.backToHome}
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using xEvolve services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
        </p>
        
        <h2>2. Description of Services</h2>
        <p>
          xEvolve provides cloud management and optimization services for Microsoft Azure environments. Our services include but are not limited to cloud management, security compliance, AI engineering, and infrastructure solutions.
        </p>
        
        <h2>3. User Obligations</h2>
        <p>
          You agree to provide accurate, current, and complete information as required for using our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
        
        <h2>4. Intellectual Property Rights</h2>
        <p>
          All content, features, and functionality within the xEvolve services, including but not limited to text, graphics, logos, and code are the exclusive property of xEvolve or its licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        
        <h2>5. Data Protection and GDPR Compliance</h2>
        <p>
          We are committed to protecting your personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR). For details on how we collect, use, and protect your data, please refer to our <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
        </p>
        
        <h2>6. Right to Access and Data Portability</h2>
        <p>
          In accordance with GDPR, you have the right to access, correct, or delete your personal data that we process. You may also request to receive your personal data in a structured, commonly used, machine-readable format.
        </p>
        
        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, xEvolve shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, resulting from your use of our services.
        </p>
        
        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. We will provide notice of any material changes through our website or by other means. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
        </p>
        
        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law principles.
        </p>
        
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@xevolve.io" className="text-blue-500 hover:underline">legal@xevolve.io</a>.
        </p>
      </div>
    </div>
  );
}
