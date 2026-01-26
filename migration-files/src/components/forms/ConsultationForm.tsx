'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from '@/components/ui/calendar';
import { toast } from 'sonner';
import { Send, User, Mail, Calendar, MessageSquare, X, Clock, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { getBrandConfig, isCloudEvolvers } from '@/lib/brand-config';

interface ConsultationFormProps {
  prefilledTraining?: string;
  className?: string;
  triggerButton?: React.ReactNode;
  isDialog?: boolean;
  onClose?: () => void;
}

interface FormData {
  name: string;
  email: string;
  training?: string;
  preferredDates: string[];
  message: string;
}

export default function ConsultationForm({ 
  prefilledTraining, 
  className = '', 
  triggerButton,
  isDialog = true,
  onClose
}: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    training: prefilledTraining || 'none',
    preferredDates: [],
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  // Get brand configuration - hydration safe
  const brandConfig = getBrandConfig();
  const [isCloudEvolveBrand, setIsCloudEvolveBrand] = useState(false);
  
  useEffect(() => {
    setIsCloudEvolveBrand(isCloudEvolvers());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill in your name and email address');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'consultation',
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request');
      }

      toast.success('Consultation request submitted! We\'ll contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        training: prefilledTraining || 'none',
        preferredDates: [],
        message: ''
      });

      // Close dialog if it's a dialog
      if (isDialog) {
        setOpen(false);
      }
      
      // Call onClose if provided
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const FormContent = () => (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Schedule a Consultation
        </CardTitle>
        <CardDescription>
          {isCloudEvolveBrand 
            ? "Ready to start your training journey? Fill out this quick form and we'll schedule a consultation to discuss your learning goals."
            : "Ready to get started? Fill out this quick form and we'll schedule a consultation to discuss your needs."
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Required Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                <User className="h-4 w-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder="John Doe"
                required
                disabled={submitting}
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="john@company.com"
                required
                disabled={submitting}
                className="h-10"
              />
            </div>
          </div>

          {/* Optional Training Selection */}
          <div className="space-y-2">
            <Label htmlFor="training" className="text-sm font-medium">Interested Training (Optional)</Label>
            <Select 
              value={formData.training} 
              onValueChange={handleSelectChange('training')}
              disabled={submitting}
            >
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Select a training course..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No specific training</SelectItem>
                <SelectItem value="azure-fundamentals">Azure Fundamentals (AZ-900)</SelectItem>
                <SelectItem value="azure-administrator">Azure Administrator (AZ-104)</SelectItem>
                <SelectItem value="azure-developer">Azure Developer (AZ-204)</SelectItem>
                <SelectItem value="azure-devops-engineer">Azure DevOps Engineer (AZ-400)</SelectItem>
                <SelectItem value="azure-solutions-architect">Azure Solutions Architect (AZ-305)</SelectItem>
                <SelectItem value="azure-security-fundamentals">Azure Security Fundamentals</SelectItem>
                <SelectItem value="azure-network-engineer">Azure Network Engineer (AZ-700)</SelectItem>
                <SelectItem value="azure-bicep-fundamentals">Azure Bicep Fundamentals</SelectItem>
                <SelectItem value="infrastructure-as-code">Infrastructure as Code</SelectItem>
                <SelectItem value="github-copilot-agents">GitHub Copilot Agents</SelectItem>
                <SelectItem value="microsoft-365-copilot-mastery">Microsoft 365 Copilot</SelectItem>
                <SelectItem value="power-platform-automation">Power Platform Automation</SelectItem>
                <SelectItem value="teams-advanced-administration">Teams Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Optional Preferred Dates */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-base font-medium">
              <Calendar className="h-4 w-4" />
              Preferred Dates (Optional)
            </Label>
            <p className="text-sm text-muted-foreground">
              Add one or more preferred dates for your consultation. You can select specific dates, choose by week number, or describe time periods.
            </p>
            <div className="space-y-3">
              {formData.preferredDates.map((date, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <div className="flex-1">
                    <DatePicker
                      value={date}
                      onChange={(value) => {
                        const newDates = [...formData.preferredDates];
                        newDates[index] = value;
                        setFormData({ ...formData, preferredDates: newDates });
                      }}
                      placeholder="Choose date, week number, or describe your preference..."
                      disabled={submitting}
                      className="w-full"
                    />
                  </div>
                  {formData.preferredDates.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newDates = formData.preferredDates.filter((_, i) => i !== index);
                        setFormData({ ...formData, preferredDates: newDates });
                      }}
                      disabled={submitting}
                      className="h-10 px-3"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              
              {/* Add Date Button */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData({ 
                    ...formData, 
                    preferredDates: [...formData.preferredDates, ''] 
                  });
                }}
                disabled={submitting}
                className="w-full border-dashed hover:border-solid transition-all duration-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                {formData.preferredDates.length === 0 ? 'Add Preferred Date' : 'Add Another Date Option'}
              </Button>
            </div>
          </div>

          {/* Optional Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Additional Information (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange('message')}
              placeholder="Tell us about your goals, team size, specific requirements, or any questions..."
              rows={4}
              disabled={submitting}
              className="resize-none"
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className={`w-full h-11 ${isCloudEvolveBrand 
                ? 'bg-emerald-600 hover:bg-emerald-700' 
                : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Scheduling...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  if (isDialog) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {triggerButton || (
            <Button className={isCloudEvolveBrand 
              ? 'bg-emerald-600 hover:bg-emerald-700' 
              : 'bg-blue-600 hover:bg-blue-700'
            }>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Consultation
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Schedule a Consultation</DialogTitle>
            <DialogDescription>
              Let's discuss how we can help you achieve your training and cloud objectives.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <FormContent />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return <FormContent />;
}
