import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, User, Envelope, Phone, Building, PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ErrorMessage } from './ui/error-message';
import { useNotification } from '@/hooks/use-notification';
import type { Training } from '@/types/training';

interface TrainingBookingFormProps {
  training: Training;
  selectedDate: Date | null;
  onClose: () => void;
  language: 'en' | 'nl';
}

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  experience: string;
  dietary: string;
  accessibility: string;
  notes: string;
  newsletter: boolean;
  terms: boolean;
}

export function TrainingBookingForm({ training, selectedDate, onClose, language }: TrainingBookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: 'beginner',
    dietary: '',
    accessibility: '',
    notes: '',
    newsletter: false,
    terms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { notification, hideNotification, showApiError, showSuccess } = useNotification();

  const handleInputChange = (field: keyof BookingFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Import GraphService dynamically
      const { GraphService } = await import('../services/graph-service');

      // Send training booking email via Graph API
      const bookingMessage = `
New Training Booking Request

Training Details:
- Course: ${training.title}
- Date: ${selectedDate?.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}

Participant Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company || 'Not specified'}
- Position: ${formData.position || 'Not specified'}
- Experience Level: ${formData.experience}

Additional Information:
${formData.dietary ? `- Dietary Requirements: ${formData.dietary}` : ''}
${formData.accessibility ? `- Accessibility Needs: ${formData.accessibility}` : ''}
${formData.notes ? `- Notes: ${formData.notes}` : ''}

Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}
      `;

      await GraphService.sendContactEmail({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        training: training.title,
        message: bookingMessage,
        language: language
      });

      console.log('Training booking submitted successfully via Microsoft Graph');
      
      setIsSubmitted(true);
      showSuccess(
        language === 'nl' ? 'Boeking Verzonden!' : 'Booking Submitted!',
        language === 'nl' 
          ? 'Uw trainingsboeking is verzonden. We nemen binnen 24 uur contact met u op.'
          : 'Your training booking has been submitted. We will contact you within 24 hours.'
      );
    } catch (error) {
      console.error('Booking submission failed:', error);
      showApiError(error, language);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.terms;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-green-900/10 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-400" weight="fill" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">
            {language === 'nl' ? 'Aanmelding Gelukt!' : 'Registration Successful!'}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {language === 'nl' 
              ? `Je aanmelding voor "${training.title}" is ontvangen. Je ontvangt binnen enkele minuten een bevestigingsmail.`
              : `Your registration for "${training.title}" has been received. You'll receive a confirmation email within minutes.`
            }
          </p>
          
          <Button onClick={onClose} className="w-full">
            {language === 'nl' ? 'Sluiten' : 'Close'}
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      {/* Error/Success Notification */}
      <ErrorMessage
        type={notification.type}
        title={notification.title}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
        autoClose={notification.type === 'success'}
        autoCloseDelay={4000}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-green-900/10 rounded-2xl shadow-2xl max-w-2xl max-h-[90vh] w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-600 text-white p-6 relative">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {language === 'nl' ? 'Training Aanmelden' : 'Register for Training'}
              </h2>
              <p className="text-white/90">{training.title}</p>
              {selectedDate && (
                <div className="flex items-center gap-2 mt-2 text-white/80">
                  <Calendar size={16} />
                  <span className="text-sm">
                    {selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X size={20} />
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'nl' ? 'Voornaam' : 'First Name'} *
                </label>
                <Input
                  value={formData.firstName}
                  onChange={e => handleInputChange('firstName', e.target.value)}
                  placeholder={language === 'nl' ? 'Je voornaam' : 'Your first name'}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'nl' ? 'Achternaam' : 'Last Name'} *
                </label>
                <Input
                  value={formData.lastName}
                  onChange={e => handleInputChange('lastName', e.target.value)}
                  placeholder={language === 'nl' ? 'Je achternaam' : 'Your last name'}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'nl' ? 'E-mail' : 'Email'} *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  placeholder={language === 'nl' ? 'je@bedrijf.nl' : 'your@company.com'}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'nl' ? 'Telefoon' : 'Phone'}
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  placeholder={language === 'nl' ? '+31 6 12345678' : '+31 6 12345678'}
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'nl' ? 'Bedrijf' : 'Company'}
                </label>
                <Input
                  value={formData.company}
                  onChange={e => handleInputChange('company', e.target.value)}
                  placeholder={language === 'nl' ? 'Je bedrijfsnaam' : 'Your company name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'nl' ? 'Functie' : 'Position'}
                </label>
                <Input
                  value={formData.position}
                  onChange={e => handleInputChange('position', e.target.value)}
                  placeholder={language === 'nl' ? 'Je functietitel' : 'Your job title'}
                />
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Ervaring met dit onderwerp' : 'Experience with this topic'}
              </label>
              <Select value={formData.experience} onValueChange={value => handleInputChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">{language === 'nl' ? 'Beginner' : 'Beginner'}</SelectItem>
                  <SelectItem value="intermediate">{language === 'nl' ? 'Gemiddeld' : 'Intermediate'}</SelectItem>
                  <SelectItem value="advanced">{language === 'nl' ? 'Gevorderd' : 'Advanced'}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Dieetwensen' : 'Dietary Requirements'}
              </label>
              <Input
                value={formData.dietary}
                onChange={e => handleInputChange('dietary', e.target.value)}
                placeholder={language === 'nl' ? 'Bijv. vegetarisch, allergieën' : 'E.g. vegetarian, allergies'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Toegankelijkheidswensen' : 'Accessibility Requirements'}
              </label>
              <Input
                value={formData.accessibility}
                onChange={e => handleInputChange('accessibility', e.target.value)}
                placeholder={language === 'nl' ? 'Bijv. rolstoel toegankelijk' : 'E.g. wheelchair accessible'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Aanvullende opmerkingen' : 'Additional Notes'}
              </label>
              <Textarea
                value={formData.notes}
                onChange={e => handleInputChange('notes', e.target.value)}
                placeholder={language === 'nl' ? 'Vragen of opmerkingen...' : 'Questions or comments...'}
                rows={3}
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={checked => handleInputChange('newsletter', !!checked)}
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  {language === 'nl' 
                    ? 'Ik wil op de hoogte blijven van nieuwe trainingen en updates'
                    : 'I want to stay informed about new trainings and updates'
                  }
                </label>
              </div>
              
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={checked => handleInputChange('terms', !!checked)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  {language === 'nl' 
                    ? 'Ik ga akkoord met de algemene voorwaarden en het privacy beleid *'
                    : 'I agree to the terms and conditions and privacy policy *'
                  }
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                {language === 'nl' ? 'Annuleren' : 'Cancel'}
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="flex-1 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {language === 'nl' ? 'Bezig...' : 'Submitting...'}
                  </>
                ) : (
                  <>
                    <PaperPlaneTilt size={16} />
                    {language === 'nl' ? 'Aanmelden' : 'Register'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
}
