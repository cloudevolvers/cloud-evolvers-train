import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Envelope,
  ChatCircle,
  PaperPlaneTilt,
  Plus,
  X,
  Clock,
  GraduationCap,
  WarningCircle,
  CheckCircle,
  Phone
} from '@phosphor-icons/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DatePicker } from './ui/date-picker';
import { extendedTrainingCourses } from '@/data/extended-training-courses';

interface TrainingConsultationFormProps {
  language: 'en' | 'nl';
  trainingTitle: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  training: string;
  preferredDates: string[];
  message: string;
}

export default function TrainingConsultationForm({
  language,
  trainingTitle
}: TrainingConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    training: trainingTitle,
    preferredDates: [],
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string>('');
  const [formError, setFormError] = useState<{
    message: string;
    statusCode?: number;
    details?: string;
  } | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  // Build training options list
  const trainingOptions = [
    { value: 'general', label: language === 'nl' ? 'Algemene Vraag' : 'General Inquiry' },
    { value: 'az-900', label: 'AZ-900: Azure Fundamentals' },
    { value: 'az-104', label: 'AZ-104: Azure Administrator' },
    { value: 'az-204', label: 'AZ-204: Azure Developer' },
    { value: 'az-305', label: 'AZ-305: Azure Solutions Architect' },
    ...extendedTrainingCourses.map(course => ({
      value: course.code.toLowerCase(),
      label: `${course.code}: ${course.name} `
    }))
  ];

  const texts = {
    en: {
      title: 'Register Your Interest',
      subtitle: `Interested in "${trainingTitle}" ? Fill out the form below and we'll get back to you with all the details.`,
      consultationTitle: 'Contact Us',
      consultationSubtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number (Optional)',
      interestedTraining: 'Interested Training (Optional)',
      preferredDates: 'Preferred Dates (Optional)',
      preferredDatesDesc: 'Add one or more preferred dates for your consultation. You can select specific dates, choose by week number, or describe time periods.',
      addPreferredDate: 'Add Preferred Date',
      addAnotherDate: 'Add Another Date Option',
      additionalInfo: 'Additional Information (Optional)',
      additionalInfoPlaceholder: 'Tell us about your goals, team size, specific requirements, or any questions...',
      scheduleConsultation: 'Send Message',
      scheduling: 'Scheduling...'
    },
    nl: {
      title: 'Registreer Uw Interesse',
      subtitle: `Klaar om uw vaardigheden te verbeteren met "${trainingTitle}"? Vul het onderstaande formulier in en we nemen contact met u op met alle details.`,
      consultationTitle: 'Contact Ons',
      consultationSubtitle: 'Vul het formulier in en we nemen binnen 24 uur contact met u op.',
      fullName: 'Volledige Naam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer (Optioneel)',
      interestedTraining: 'Geïnteresseerde Training (Optioneel)',
      preferredDates: 'Voorkeurdatums (Optioneel)',
      preferredDatesDesc: 'Voeg een of meer voorkeurdatums toe voor uw consultatie. U kunt specifieke datums selecteren, kiezen op weeknummer, of tijdsperiodes beschrijven.',
      addPreferredDate: 'Voorkeurdatum Toevoegen',
      addAnotherDate: 'Nog een Datum Optie Toevoegen',
      additionalInfo: 'Aanvullende Informatie (Optioneel)',
      additionalInfoPlaceholder: 'Vertel ons over uw doelen, teamgrootte, specifieke vereisten, of eventuele vragen...',
      scheduleConsultation: 'Bericht Versturen',
      scheduling: 'Plannen...'
    }
  };

  const t = texts[language] || texts['en'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous errors/success
    setFormError(null);
    setFormSuccess(null);

    if (!formData.name || !formData.email) {
      setFormError({
        message: language === 'nl'
          ? 'Vul alle verplichte velden in.'
          : 'Please fill in all required fields.',
        statusCode: 400
      });
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setEmailError(language === 'nl' ? 'Ongeldig e-mailadres' : 'Invalid email address');
      setFormError({
        message: language === 'nl'
          ? 'Voer een geldig e-mailadres in.'
          : 'Please enter a valid email address.',
        statusCode: 400
      });
      return;
    }

    setSubmitting(true);

    try {
      console.log('Form data being submitted:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        training: trainingTitle,
        preferredDates: formData.preferredDates,
        message: formData.message || 'No additional message provided.',
        language: language
      });

      // Send email via Azure Functions API endpoint
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          training: trainingTitle,
          preferredDates: formData.preferredDates,
          message: formData.message || 'No additional message provided.',
          language: language
        })
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch (parseError) {
        responseData = { error: 'Invalid server response' };
      }

      if (!response.ok) {
        setFormError({
          message: responseData.error || `HTTP ${response.status}: ${response.statusText}`,
          statusCode: response.status,
          details: responseData.details
        });
        return;
      }

      console.log('Training consultation form submitted successfully via Azure Functions API');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        training: trainingTitle,
        preferredDates: [],
        message: ''
      });

      setFormSuccess(
        language === 'nl'
          ? 'Bericht verzonden! We hebben uw consultatieverzoek ontvangen en nemen binnen 24 uur contact met u op.'
          : 'Message sent! We received your consultation request and will contact you within 24 hours.'
      );
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      setFormError({
        message: language === 'nl'
          ? 'Verbindingsprobleem. Controleer uw internetverbinding en probeer het opnieuw.'
          : 'Connection error. Please check your internet connection and try again.',
        statusCode: 0,
        details: error instanceof Error ? error.message : 'Network error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));

    // Validate email on change
    if (field === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError(language === 'nl' ? 'Ongeldig e-mailadres' : 'Invalid email address');
      } else {
        setEmailError('');
      }
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Required Fields */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
              <div className="space-y-1.5">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <User className="h-4 w-4 text-blue-500" weight="duotone" />
                  {t.fullName}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  placeholder="John Doe"
                  required
                  disabled={submitting}
                  className="h-10 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 focus-visible:border-blue-600 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all shadow-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Envelope className="h-4 w-4 text-blue-500" weight="duotone" />
                  {t.email}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="john@company.com"
                  required
                  disabled={submitting}
                  aria-invalid={!!emailError}
                  className="h-10 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 focus-visible:border-blue-600 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all shadow-sm"
                />
                {emailError && (
                  <motion.p
                    className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1 font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <WarningCircle className="h-3 w-3" weight="fill" />
                    {emailError}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Phone Number - Optional */}
            <motion.div
              className="space-y-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="+31 6-12345678"
                disabled={submitting}
                className="h-10 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 focus-visible:border-blue-600 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all shadow-sm"
              />
            </motion.div>

            {/* Optional Training Selection */}
            <motion.div
              className="space-y-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="training" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <GraduationCap className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.interestedTraining}
              </Label>
              <Select
                value={formData.training}
                onValueChange={(value) => setFormData({ ...formData, training: value })}
                disabled={submitting}
              >
                <SelectTrigger className="h-10 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm">
                  <SelectValue placeholder={language === 'nl' ? 'Selecteer een training...' : 'Select a training...'} />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 max-h-[300px]">
                  {trainingOptions.map(option => (
                    <SelectItem key={option.value} value={option.label}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Preferred Dates */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Calendar className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.preferredDates}
              </Label>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {t.preferredDatesDesc}
              </p>
              <div className="space-y-2">
                {formData.preferredDates.map((date, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2 items-start"
                  >
                    <div className="flex-1">
                      <DatePicker
                        value={date}
                        onChange={(value) => {
                          const newDates = [...formData.preferredDates];
                          newDates[index] = value;
                          setFormData({ ...formData, preferredDates: newDates });
                        }}
                        placeholder="Choose date, week number, or describe..."
                        disabled={submitting}
                        className="w-full h-10 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 focus-visible:border-green-600 dark:focus-visible:border-green-400 focus-visible:ring-2 focus-visible:ring-green-500/20 transition-all shadow-sm"
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
                        className="h-10 px-3 border hover:bg-destructive/10 transition-all"
                      >
                        <X className="h-4 w-4" weight="bold" />
                      </Button>
                    )}
                  </motion.div>
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
                  className="w-full h-9 border-2 border-dashed border-blue-500/30 hover:border-solid hover:border-blue-500/50 transition-all duration-200 bg-blue-500/5 hover:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                >
                  <Plus className="h-3.5 w-3.5 mr-2" weight="bold" />
                  {formData.preferredDates.length === 0 ? t.addPreferredDate : t.addAnotherDate}
                </Button>
              </div>
            </motion.div>

            {/* Optional Message */}
            <motion.div
              className="space-y-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <ChatCircle className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.additionalInfo}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange('message')}
                placeholder={t.additionalInfoPlaceholder}
                disabled={submitting}
                rows={3}
                className="bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 focus-visible:border-blue-600 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all shadow-sm resize-none"
              />
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                type="submit"
                className="w-full h-12 text-base bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:via-blue-800 hover:to-sky-700 transition-all duration-300 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99]"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t.scheduling}
                  </>
                ) : (
                  <>
                    <PaperPlaneTilt className="h-5 w-5 mr-2" weight="fill" />
                    {t.scheduleConsultation}
                  </>
                )}
              </Button>

              {/* Inline Error Message */}
              {formError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-900/20 border-red-700 mt-3 p-3 rounded-lg"
                >
                  <div className="flex items-start space-x-2">
                    <WarningCircle className="text-red-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-red-200 font-medium">
                        {language === 'nl' ? 'Fout' : 'Error'}
                        {formError.statusCode && formError.statusCode > 0 && (
                          <span className="bg-red-800 ml-2 text-xs px-2 py-0.5 rounded">
                            {formError.statusCode}
                          </span>
                        )}
                      </div>
                      <div className="text-red-300 mt-1">
                        {formError.message}
                      </div>
                      {formError.details && (
                        <div className="text-red-400 mt-1 opacity-75">
                          {formError.details}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Inline Success Message */}
              {formSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-900/20 border-green-700 mt-3 p-3 rounded-lg"
                >
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div className="text-green-200 font-medium">
                      {formSuccess}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
        </form>
    </div>
  );
}
