import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  User,
  Envelope,
  Buildings,
  Phone,
  Calendar,
  CaretDown,
  CaretUp,
  PaperPlaneTilt,
  CheckCircle,
  WarningCircle,
  Briefcase,
  GraduationCap,
  NotePencil
} from '@phosphor-icons/react';
import { useNotification } from '@/hooks/use-notification';
import type { Language } from '@/contexts/LanguageContext';

interface TrainingBookingFormProps {
  training: any;
  priceInfo?: any;
  isPromotionActive?: boolean;
  language: Language;
}

export default function TrainingBookingForm({ training, priceInfo, isPromotionActive, language }: TrainingBookingFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { notification, hideNotification, showApiError, showSuccess } = useNotification();
  
  // Translations
  const texts = {
    en: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Company',
      position: 'Position/Role',
      experience: 'Experience Level',
      preferredDate: 'Preferred Training Date/Period',
      dietary: 'Dietary Requirements',
      accessibility: 'Accessibility Needs',
      notes: 'Additional Notes',
      newsletter: 'Subscribe to our newsletter for training updates and cloud technology insights',
      terms: 'I agree to the Terms of Service and Privacy Policy',
      showMore: 'Add More Information',
      showLess: 'Show Less Information',
      submit: 'Submit Training Inquiry',
      submitting: 'Submitting...',
      success: 'Inquiry Submitted!',
      successMessage: 'Thank you for your interest in "{title}". We\'ll contact you within 24 hours to discuss your training needs.',
      submitAnother: 'Submit Another Inquiry',
      placeholders: {
        firstName: 'Enter your first name',
        lastName: 'Enter your last name',
        email: 'Enter your email address',
        phone: 'Enter your phone number',
        company: 'Enter your company name',
        position: 'Enter your position',
        preferredDate: 'e.g., Next month, Q2 2024, As soon as possible',
        dietary: 'Any dietary restrictions',
        accessibility: 'Any accessibility requirements',
        notes: 'Any additional information or specific questions about the training'
      },
      experienceLevels: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert'
      }
    },
    nl: {
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      company: 'Bedrijf',
      position: 'Functie/Rol',
      experience: 'Ervaringsniveau',
      preferredDate: 'Gewenste Trainingsdatum/Periode',
      dietary: 'Dieetwensen',
      accessibility: 'Toegankelijkheidsbehoeften',
      notes: 'Aanvullende Opmerkingen',
      newsletter: 'Abonneer op onze nieuwsbrief voor training-updates en cloud technologie inzichten',
      terms: 'Ik ga akkoord met de Algemene Voorwaarden en Privacybeleid',
      showMore: 'Meer Informatie Toevoegen',
      showLess: 'Minder Informatie Tonen',
      submit: 'Training Aanvraag Versturen',
      submitting: 'Versturen...',
      success: 'Aanvraag Verstuurd!',
      successMessage: 'Bedankt voor uw interesse in "{title}". We nemen binnen 24 uur contact met u op om uw trainingsbehoeften te bespreken.',
      submitAnother: 'Nog een Aanvraag Versturen',
      placeholders: {
        firstName: 'Voer uw voornaam in',
        lastName: 'Voer uw achternaam in',
        email: 'Voer uw e-mailadres in',
        phone: 'Voer uw telefoonnummer in',
        company: 'Voer uw bedrijfsnaam in',
        position: 'Voer uw functie in',
        preferredDate: 'bijv., Volgende maand, Q2 2024, Zo snel mogelijk',
        dietary: 'Eventuele dieetbeperkingen',
        accessibility: 'Eventuele toegankelijkheidsvereisten',
        notes: 'Eventuele aanvullende informatie of specifieke vragen over de training'
      },
      experienceLevels: {
        beginner: 'Beginner',
        intermediate: 'Gemiddeld',
        advanced: 'Gevorderd',
        expert: 'Expert'
      }
    }
  };

  const t = texts[language];
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: 'beginner',
    preferredDate: '',
    dietary: '',
    accessibility: '',
    notes: '',
    newsletter: false,
    terms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isBasicFormValid = formData.firstName.trim() && formData.lastName.trim() && formData.email.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isBasicFormValid) {
      showApiError('Please complete required fields.');
      return;
    }

    setIsSubmitting(true);
    hideNotification();
    
    try {
      // Submit to the consultation API endpoint (matches Azure Function name)
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || '',
          training: training?.title || 'General Inquiry',
          trainingLevel: formData.experience,
          preferredDates: formData.preferredDate ? [formData.preferredDate] : [],
          message: [
            formData.company ? `Company: ${formData.company}` : '',
            formData.position ? `Position: ${formData.position}` : '',
            formData.dietary ? `Dietary: ${formData.dietary}` : '',
            formData.accessibility ? `Accessibility: ${formData.accessibility}` : '',
            formData.notes || '',
            formData.newsletter ? 'Newsletter: Subscribed' : ''
          ].filter(Boolean).join('\n') || 'Training inquiry from detail page',
          language: language
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      setIsSuccess(true);
      showSuccess('Training inquiry submitted successfully!', 'We\'ll contact you within 24 hours.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        experience: 'beginner',
        preferredDate: '',
        dietary: '',
        accessibility: '',
        notes: '',
        newsletter: false,
        terms: false,
      });
      setIsExpanded(false);
      
    } catch (error: any) {
      showApiError(error.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-500/10">
          <CheckCircle className="h-10 w-10 text-green-500" weight="fill" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{t.success}</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          {t.successMessage.replace('{title}', training?.title || 'the training')}
        </p>
        <Button 
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="px-8"
        >
          {t.submitAnother}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Notification */}
      <AnimatePresence>
        {notification?.isVisible && notification.type === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <div className="flex items-start gap-3">
              <WarningCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" weight="fill" />
              <div>
                <p className="font-medium text-red-600 dark:text-red-400">{notification.title}</p>
                <p className="text-sm text-red-600/80 dark:text-red-400/80">{notification.message}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Personal Information - Row 1: Name fields */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <User className="h-4 w-4 text-blue-500" weight="duotone" />
            {t.firstName}
            <span className="text-red-500">*</span>
          </label>
          <Input
            required
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            placeholder={t.placeholders.firstName}
            className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <User className="h-4 w-4 text-blue-500" weight="duotone" />
            {t.lastName}
            <span className="text-red-500">*</span>
          </label>
          <Input
            required
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            placeholder={t.placeholders.lastName}
            className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
          />
        </div>
      </motion.div>

      {/* Row 2: Email and Company */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Envelope className="h-4 w-4 text-blue-500" weight="duotone" />
            {t.email}
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder={t.placeholders.email}
            className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Buildings className="h-4 w-4 text-blue-500" weight="duotone" />
            {t.company}
          </label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            placeholder={t.placeholders.company}
            className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
          />
        </div>
      </motion.div>

      {/* Show More/Less Button */}
      <motion.div 
        className="flex justify-center py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-8 py-3 h-auto border-2 border-dashed border-blue-400/40 hover:border-solid hover:border-blue-500 transition-all duration-300 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30 hover:from-blue-100 hover:to-sky-100 dark:hover:from-blue-900/40 dark:hover:to-sky-900/40 text-blue-600 dark:text-blue-400 font-medium rounded-xl shadow-sm hover:shadow-md"
        >
          {isExpanded ? (
            <>
              <CaretUp className="h-5 w-5" weight="bold" />
              <span>{t.showLess}</span>
            </>
          ) : (
            <>
              <CaretDown className="h-5 w-5" weight="bold" />
              <span>{t.showMore}</span>
            </>
          )}
        </Button>
      </motion.div>

      {/* Expandable Additional Fields */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5 overflow-hidden"
          >
            {/* Phone and Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Phone className="h-4 w-4 text-blue-500" weight="duotone" />
                  {t.phone}
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder={t.placeholders.phone}
                  className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Briefcase className="h-4 w-4 text-blue-500" weight="duotone" />
                  {t.position}
                </label>
                <Input
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  placeholder={t.placeholders.position}
                  className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <GraduationCap className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.experience}
              </label>
              <Select 
                value={formData.experience} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
              >
                <SelectTrigger className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600">
                  <SelectItem value="beginner">{t.experienceLevels.beginner}</SelectItem>
                  <SelectItem value="intermediate">{t.experienceLevels.intermediate}</SelectItem>
                  <SelectItem value="advanced">{t.experienceLevels.advanced}</SelectItem>
                  <SelectItem value="expert">{t.experienceLevels.expert}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Calendar className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.preferredDate}
              </label>
              <Input
                value={formData.preferredDate}
                onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                placeholder={t.placeholders.preferredDate}
                className="h-11 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <NotePencil className="h-4 w-4 text-blue-500" weight="duotone" />
                {t.notes}
              </label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder={t.placeholders.notes}
                rows={3}
                className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all resize-none"
              />
            </div>

            {/* Newsletter Subscription */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: !!checked }))}
                className="mt-0.5"
              />
              <label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                {t.newsletter}
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.div
        className="pt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting || !isBasicFormValid}
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none rounded-xl"
          size="lg"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span>{t.submitting}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <PaperPlaneTilt className="h-6 w-6" weight="fill" />
              <span>{t.submit}</span>
            </div>
          )}
        </Button>
      </motion.div>
    </form>
  );
}
