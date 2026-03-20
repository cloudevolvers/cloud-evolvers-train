import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getBuildInfo, getVersionString } from '../lib/version';
import { Heart, MapPin, Star, PaperPlaneTilt, CheckCircle, WarningCircle, Envelope, Phone, WhatsappLogo } from '@phosphor-icons/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';
import { useLanguageContext } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const buildInfo = getBuildInfo();
  const { t } = useTranslations();
  const { language } = useLanguageContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'footer-contact-form',
          language
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <footer className="bg-background border-t border-border py-12 relative z-10">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">

          {/* Contact Info & Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.footer?.contact || 'Contact'}</h3>
              <div className="space-y-3 text-gray-600">
                <a
                  href="mailto:training@cloudevolvers.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Envelope className="w-4 h-4" />
                  training@cloudevolvers.com
                </a>
                <a
                  href="tel:+31634272027"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +31 6 34272027
                </a>
                <a
                  href="https://wa.me/31634272027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-600 transition-colors"
                >
                  <WhatsappLogo className="w-4 h-4" weight="fill" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.footer?.legal || 'Legal'}</h3>
              <div className="space-y-2">
                <Link
                  to="/privacy-policy"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.footer?.privacyPolicy || 'Privacy Policy'}
                </Link>
                <Link
                  to="/terms-of-service"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.footer?.termsOfService || 'Terms of Service'}
                </Link>
                <Link
                  to="/cookie-policy"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.footer?.cookiePolicy || 'Cookie Policy'}
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2 pt-6 lg:pt-0 border-t border-border lg:border-t-0">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Envelope className="w-5 h-5 text-muted-foreground" />
              {t.footer?.getInTouch || 'Get in Touch'}
            </h3>

            {submitStatus === 'success' ? (
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600" weight="fill" />
                <div>
                  <p className="font-medium text-green-800">{t.footer?.messageSent || 'Message Sent!'}</p>
                  <p className="text-sm text-green-600">{t.footer?.messageSuccess || "We'll get back to you within 24 hours."}</p>
                </div>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200 mb-4">
                <WarningCircle className="w-6 h-6 text-red-600" weight="fill" />
                <div>
                  <p className="font-medium text-red-800">{t.footer?.somethingWentWrong || 'Something went wrong'}</p>
                  <p className="text-sm text-red-600">{t.footer?.tryAgainOrEmail || 'Please try again or email us directly.'}</p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder={t.footer?.yourName || 'Your Name'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white border-gray-300"
                required
              />
              <Input
                type="email"
                placeholder={t.footer?.yourEmail || 'Your Email'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white border-gray-300"
                required
              />
              <Textarea
                placeholder={t.footer?.howCanWeHelp || 'How can we help you?'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="sm:col-span-2 bg-white border-gray-300 min-h-[80px]"
                required
              />
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full sm:w-auto bg-black hover:bg-black/90 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.footer?.sending || 'Sending...'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <PaperPlaneTilt className="w-4 h-4" weight="fill" />
                      {t.footer?.sendMessage || 'Send Message'}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="text-gray-600 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-red-500" />
              <span>© {new Date().getFullYear()} Spot Cloud B.V. (Cloud Evolvers). {t.footer?.rights || 'All rights reserved.'}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-emerald-600" />
              <span>{t.footer?.madeInNetherlands || 'Proudly made in the Netherlands.'}</span>
            </div>

            {/* Build Info (hidden in production, visible when text selected) */}
            <div className={`flex items-center gap-2 mt-1 ${buildInfo.environment === 'production'
              ? 'text-gray-100 selection:text-gray-800 selection:bg-gray-300'
              : 'text-gray-600'}`}>
              <Star size={12} className={buildInfo.environment === 'production'
                ? 'text-gray-100'
                : 'text-yellow-500'} />
              <span className="font-mono text-xs">
                {getVersionString()} • Built {buildInfo.buildDay} {buildInfo.buildDate} @ {buildInfo.buildTime}
              </span>
              {buildInfo.environment !== 'production' && (
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full border border-yellow-300 text-xs">
                  {buildInfo.environment.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
