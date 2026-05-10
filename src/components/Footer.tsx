import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Envelope, Phone, WhatsappLogo, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { getBuildInfo, getVersionString } from '../lib/version';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from '@/hooks/use-translations';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { Wrap, EdButton, Eyebrow } from '@/components/editorial';

const Footer: React.FC = () => {
  const buildInfo = getBuildInfo();
  const { t } = useTranslations();
  const { language } = useLanguageContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          source: 'footer-contact-form',
          language,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const valid = form.name.trim() && form.email.trim() && form.message.trim();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--ed-bg-2)] border-t border-[color:var(--ed-rule)] mt-24 relative z-10">
      <Wrap>
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="inline-block" aria-label="Cloud Evolvers — MCT Powered Training and Services">
              <img
                src="/cloudevolvers-logo-with-slogan.png"
                alt="Cloud Evolvers — MCT Powered Training and Services"
                width={220}
                height={220}
                className="block w-[220px] h-auto -ml-3"
              />
            </Link>

            <div className="space-y-2 text-[14px] text-[color:var(--ed-ink-2)]">
              <a
                href="mailto:training@cloudevolvers.com"
                className="flex items-center gap-2 hover:text-[color:var(--ed-ink)]"
              >
                <Envelope className="w-4 h-4" />
                training@cloudevolvers.com
              </a>
              <a
                href="tel:+31634272027"
                className="flex items-center gap-2 hover:text-[color:var(--ed-ink)]"
              >
                <Phone className="w-4 h-4" />
                +31 6 34272027
              </a>
              <a
                href="https://wa.me/31634272027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[color:var(--ed-ink)]"
              >
                <WhatsappLogo className="w-4 h-4" weight="fill" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <Eyebrow>{t.footer?.explore || 'Explore'}</Eyebrow>
            <ul className="mt-4 space-y-2 text-[14px] text-[color:var(--ed-ink-2)]">
              <li><Link to="/training" className="hover:text-[color:var(--ed-ink)]">{t.nav?.training || 'Training'}</Link></li>
              <li><Link to="/services" className="hover:text-[color:var(--ed-ink)]">{t.nav?.services || 'Services'}</Link></li>
              <li><Link to="/blog" className="hover:text-[color:var(--ed-ink)]">{t.nav?.blog || 'Blog'}</Link></li>
              <li><Link to="/about" className="hover:text-[color:var(--ed-ink)]">{t.nav?.about || 'About'}</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--ed-ink)]">{t.nav?.contact || 'Contact'}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <Eyebrow>{t.footer?.legal || 'Legal'}</Eyebrow>
            <ul className="mt-4 space-y-2 text-[14px] text-[color:var(--ed-ink-2)]">
              <li><a href="/help/" className="hover:text-[color:var(--ed-ink)]">Help</a></li>
              <li><a href="/trust/" className="hover:text-[color:var(--ed-ink)]">Trust center</a></li>
              <li><a href="/brand/" className="hover:text-[color:var(--ed-ink)]">Brand</a></li>
              <li><Link to="/privacy-policy" className="hover:text-[color:var(--ed-ink)]">{t.footer?.privacyPolicy || 'Privacy Policy'}</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[color:var(--ed-ink)]">{t.footer?.termsOfService || 'Terms of Service'}</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[color:var(--ed-ink)]">{t.footer?.cookiePolicy || 'Cookie Policy'}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <Eyebrow>{t.footer?.getInTouch || 'Get in touch'}</Eyebrow>
            {status === 'success' ? (
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600" weight="fill" />
                <div>
                  <p className="font-medium text-emerald-800">{t.footer?.messageSent || 'Message sent'}</p>
                  <p className="text-emerald-700">{t.footer?.messageSuccess || "We'll reply within 24 hours."}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-2">
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-sm text-red-800">
                    <WarningCircle className="w-4 h-4" weight="fill" />
                    {t.footer?.somethingWentWrong || 'Something went wrong. Please email us.'}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder={t.footer?.yourName || 'Name'}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-white border-[color:var(--ed-rule)]"
                  />
                  <Input
                    type="email"
                    placeholder={t.footer?.yourEmail || 'Email'}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-white border-[color:var(--ed-rule)]"
                  />
                </div>
                <Textarea
                  placeholder={t.footer?.howCanWeHelp || 'How can we help?'}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="bg-white border-[color:var(--ed-rule)] min-h-[80px]"
                />
                <EdButton
                  variant="primary"
                  size="md"
                  type="submit"
                  disabled={!valid || isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting
                    ? t.footer?.sending || 'Sending…'
                    : t.footer?.sendMessage || 'Send message'}
                </EdButton>
              </form>
            )}
          </div>
        </div>

        <div className="py-6 border-t border-[color:var(--ed-rule)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[color:var(--ed-ink-3)]">
          <span>
            © {year} Spot Cloud B.V. · Cloud Evolvers · KvK 89708873. {t.footer?.rights || 'All rights reserved.'}
          </span>
          <span className="font-mono">
            {getVersionString()} · {buildInfo.buildDate}
            {buildInfo.environment !== 'production' && (
              <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-amber-800">
                {buildInfo.environment.toUpperCase()}
              </span>
            )}
          </span>
        </div>
      </Wrap>
    </footer>
  );
};

export default Footer;
