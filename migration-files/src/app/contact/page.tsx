'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from '@/components/homepage/ContactForm';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [brandConfig, setBrandConfig] = useState(getBrandConfig());
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setBrandConfig(getBrandConfig());
    setIsCloudEvolveBrand(isCloudEvolvers());
    setIsClient(true);
    
    // Update document title dynamically
    document.title = isCloudEvolvers() ? 'Contact Cloud Evolvers' : 'Contact Us - xEvolve';
  }, []);

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || brandConfig.contactEmail;
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '06-34272027';

  return (
    <div className="container mx-auto py-12 px-4 md:px-6" suppressHydrationWarning>
      <Link href="/" className={`inline-flex items-center mb-6 text-sm ${
        isClient && isCloudEvolveBrand 
          ? 'text-emerald-500 hover:text-emerald-600' 
          : 'text-blue-500 hover:text-blue-600'
      }`}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {isCloudEvolveBrand ? 'Contact Cloud Evolvers' : 'Contact Us'}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {isCloudEvolveBrand 
            ? "Ready to advance your cloud skills? We'd love to discuss your training needs and help you achieve your goals."
            : "Have questions or want to learn more about our services? We'd love to hear from you."
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <Card className={`backdrop-blur-sm p-6 flex flex-col items-center text-center ${
          isClient && isCloudEvolveBrand 
            ? 'bg-emerald-900/20 border border-emerald-500/30' 
            : 'bg-blue-900/20 border border-blue-500/30'
        }`}>
          <Mail className={`h-10 w-10 mb-4 ${
            isClient && isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'
          }`} />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-muted-foreground mb-4">
            {isCloudEvolveBrand ? 'For training inquiries and course information' : 'For general inquiries and support'}
          </p>
          <a href={`mailto:${contactEmail}`} className={`hover:underline ${
            isClient && isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'
          }`}>{contactEmail}</a>
        </Card>
        
        <Card className={`backdrop-blur-sm p-6 flex flex-col items-center text-center ${
          isClient && isCloudEvolveBrand 
            ? 'bg-emerald-900/20 border border-emerald-500/30' 
            : 'bg-blue-900/20 border border-blue-500/30'
        }`}>
          <Phone className={`h-10 w-10 mb-4 ${
            isClient && isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'
          }`} />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-muted-foreground mb-4">Mon-Fri, 9:00 AM - 5:00 PM CET</p>
          <a href={`tel:${contactPhone.replace(/-/g, '')}`} className={`hover:underline ${
            isClient && isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'
          }`}>{contactPhone}</a>
        </Card>
        
        <Card className={`backdrop-blur-sm p-6 flex flex-col items-center text-center ${
          isClient && isCloudEvolveBrand 
            ? 'bg-emerald-900/20 border border-emerald-500/30' 
            : 'bg-blue-900/20 border border-blue-500/30'
        }`}>
          <MapPin className={`h-10 w-10 mb-4 ${
            isClient && isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'
          }`} />
          <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
          <p className="text-muted-foreground mb-4">Serving clients across Europe</p>
          <address className={`not-italic ${
            isClient && isCloudEvolveBrand ? 'text-emerald-500' : 'text-blue-500'
          }`}>
            Netherlands • Belgium • UK<br />
            Remote & On-site Available
          </address>
        </Card>
      </div>
      
      <div className={`max-w-3xl mx-auto backdrop-blur-sm rounded-lg p-6 ${
        isClient && isCloudEvolveBrand 
          ? 'bg-emerald-900/20 border border-emerald-500/30' 
          : 'bg-blue-900/20 border border-blue-500/30'
      }`}>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <ContactForm />
      </div>
    </div>
  );
}
