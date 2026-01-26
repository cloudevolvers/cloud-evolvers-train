import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getBuildInfo, getVersionString } from '../lib/version';
import { Heart, MapPin, Star, PaperPlaneTilt, CheckCircle, WarningCircle, Envelope, Phone, WhatsappLogo } from '@phosphor-icons/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const buildInfo = getBuildInfo();
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
          language: 'en'
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

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Envelope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Get in Touch
            </h3>

            {submitStatus === 'success' ? (
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" weight="fill" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-300">Message Sent!</p>
                  <p className="text-sm text-green-600 dark:text-green-400">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 mb-4">
                <WarningCircle className="w-6 h-6 text-red-600 dark:text-red-400" weight="fill" />
                <div>
                  <p className="font-medium text-red-800 dark:text-red-300">Something went wrong</p>
                  <p className="text-sm text-red-600 dark:text-red-400">Please try again or email us directly.</p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600"
                required
              />
              <Textarea
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="sm:col-span-2 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 min-h-[80px]"
                required
              />
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <PaperPlaneTilt className="w-4 h-4" weight="fill" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
              <div className="space-y-3 text-gray-600 dark:text-slate-400">
                <a
                  href="mailto:training@cloudevolvers.com"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Envelope className="w-4 h-4" />
                  training@cloudevolvers.com
                </a>
                <a
                  href="tel:+31634272027"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +31 6 34272027
                </a>
                <a
                  href="https://wa.me/31634272027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  <WhatsappLogo className="w-4 h-4" weight="fill" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  to="/privacy-policy"
                  className="block text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="block text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookie-policy"
                  className="block text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300 dark:border-slate-700">
          <div className="text-gray-600 dark:text-slate-400 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-red-500 dark:text-red-300" />
              <span>© {new Date().getFullYear()} Spot Cloud B.V. (Cloud Evolvers). All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-emerald-600 dark:text-emerald-300" />
              <span>Proudly made in the Netherlands.</span>
            </div>

            {/* Build Info (hidden in production, visible when text selected) */}
            <div className={`flex items-center gap-2 mt-1 ${buildInfo.environment === 'production'
              ? 'text-gray-100 dark:text-slate-900 selection:text-gray-800 selection:bg-gray-300 dark:selection:text-slate-200 dark:selection:bg-slate-600'
              : 'text-gray-600 dark:text-slate-400'}`}>
              <Star size={12} className={buildInfo.environment === 'production'
                ? 'text-gray-100 dark:text-slate-900'
                : 'text-yellow-500 dark:text-yellow-300'} />
              <span className="font-mono text-xs">
                {getVersionString()} • Built {buildInfo.buildDay} {buildInfo.buildDate} @ {buildInfo.buildTime}
              </span>
              {buildInfo.environment !== 'production' && (
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-400/20 dark:text-yellow-200 px-2 py-0.5 rounded-full border border-yellow-300 dark:border-yellow-400/30 text-xs">
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
