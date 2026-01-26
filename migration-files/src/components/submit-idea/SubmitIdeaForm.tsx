"use client";

import { useState } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/i18n';

export default function SubmitIdeaForm() {
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    ideaTitle: "",
    description: "",
    impact: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/submit-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your idea has been submitted successfully! Thank you for your contribution.'
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          category: "",
          ideaTitle: "",
          description: "",
          impact: ""
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Failed to submit your idea. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting idea:', error);
      setSubmitStatus({
        success: false,
        message: 'Network error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t.submitIdea.formLabels.yourName}</label>
          <Input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.submitIdea.formPlaceholders.enterName}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t.submitIdea.formLabels.emailAddress}</label>
          <Input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.submitIdea.formPlaceholders.enterEmail}
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">{t.submitIdea.formLabels.ideaCategory}</label>
        <Select 
          value={formData.category} 
          onValueChange={handleSelectChange}
        >
          <SelectTrigger>
            <SelectValue placeholder={t.submitIdea.formPlaceholders.selectCategory} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="feature">New Feature Request</SelectItem>
            <SelectItem value="improvement">Enhancement/Improvement</SelectItem>
            <SelectItem value="service">New Service Suggestion</SelectItem>
            <SelectItem value="integration">Integration Idea</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">{t.submitIdea.formLabels.ideaTitle}</label>
        <Input 
          name="ideaTitle"
          value={formData.ideaTitle}
          onChange={handleChange}
          placeholder={t.submitIdea.formPlaceholders.enterTitle}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">{t.submitIdea.formLabels.description}</label>
        <Textarea 
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder={t.submitIdea.formPlaceholders.enterDescription}
          className="min-h-40"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">{t.submitIdea.formLabels.potentialImpact}</label>
        <Textarea 
          name="impact"
          value={formData.impact}
          onChange={handleChange}
          placeholder={t.submitIdea.formPlaceholders.enterImpact}
          className="min-h-20"
        />
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
          <Send className="h-4 w-4 mr-2" />
          {isSubmitting ? t.submitIdea.formButtons.submitting : t.submitIdea.formButtons.registerInterest}
        </Button>
      </div>
    </form>
  );
}
