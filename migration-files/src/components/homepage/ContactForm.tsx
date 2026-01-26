"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { getTranslations } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';

export default function ContactForm() {
  // Use the language context
  const { language: lang, isClient } = useLanguage();
  
  // Brand configuration
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);
  
  useEffect(() => {
    setIsCloudEvolveBrand(isCloudEvolvers());
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  const t = getTranslations(isClient ? lang : 'en');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: !isClient ? 'Message sent successfully! We\'ll get back to you soon.' : t.form.successContact
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || (!isClient ? 'Failed to send message. Please try again.' : t.form.errorContact)
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        success: false,
        message: !isClient ? 'Network error occurred. Please try again later.' : t.form.networkError
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {submitStatus && (
        <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-500/20' : 'bg-red-500/20'} flex items-start gap-3`}>
          {submitStatus.success ? (
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          )}
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            {!isClient ? 'Full Name *' : t.form.fullName}
          </label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-background border border-input rounded-md" 
            placeholder={!isClient ? 'John Doe' : t.form.placeholderName} 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            {!isClient ? 'Email Address *' : t.form.emailAddress}
          </label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-background border border-input rounded-md" 
            placeholder={!isClient ? 'john@company.com' : t.form.placeholderEmail}
            required 
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="subject">
          {!isClient ? 'Subject' : (t.form.subject || 'Subject')}
        </label>
        <input 
          type="text" 
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-background border border-input rounded-md" 
          placeholder={!isClient ? 'How can we help you?' : (t.form.placeholderSubject || 'How can we help you?')}
          required 
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="message">
          {!isClient ? 'Message *' : t.form.message}
        </label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-background border border-input rounded-md h-32" 
          placeholder={
            !isClient 
              ? 'Please tell us about your needs...' 
              : isCloudEvolveBrand
                ? t.form.placeholderMessage
                : 'Please tell us about your file transfer requirements, security needs, volume expectations, or any questions you have...'
          }
          required
        ></textarea>
      </div>
      <div className="text-center">
        <Button 
          type="submit"
          size="lg" 
          className={`py-6 px-12 ${
            isCloudEvolveBrand 
              ? 'bg-emerald-600 hover:bg-emerald-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? (!isClient ? 'Submitting...' : t.form.submitting) 
            : (!isClient ? 'Send Message' : t.form.registerInterest)
          }
        </Button>
      </div>
    </form>
  );
}
