import { Link } from 'react-router-dom';
import { ArrowLeft, DownloadSimple } from '@phosphor-icons/react';
import { useTranslations } from '@/hooks/use-translations';
import { Wrap, Eyebrow, Display } from '@/components/editorial';

export function TermsOfServicePage() {
  const { t, isDutch } = useTranslations();
  const lastUpdated = new Date('2026-04-20').toLocaleDateString(isDutch ? 'nl-NL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <section className="pt-20 sm:pt-28 pb-10">
        <Wrap>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-[color:var(--ed-ink-3)] hover:text-[color:var(--ed-ink)] mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.legal?.backToHome || (isDutch ? 'Terug naar home' : 'Back to home')}
          </Link>
          <Eyebrow accent>{isDutch ? 'Juridisch' : 'Legal'}</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-2xl">
            {t.legal?.termsOfService || 'Terms of service'}
          </Display>
          <p className="mt-6 ed-eyebrow text-[color:var(--ed-ink-3)]">
            {t.legal?.lastUpdated || 'Last updated'} {lastUpdated}
          </p>
        </Wrap>
      </section>

      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="max-w-2xl space-y-8">
            <div className="bg-[color:var(--ed-bg-2)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
              <Eyebrow>{t.legal?.downloadTerms || 'Download'}</Eyebrow>
              <p className="mt-3 text-[14px] text-[color:var(--ed-ink-2)] leading-relaxed">
                {t.legal?.downloadDescription ||
                  (isDutch
                    ? 'Download het volledige document in je voorkeurstaal.'
                    : 'Download the full document in your preferred language.')}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="/Algemene voorwaardenSpotCloud.pdf"
                  download="SpotCloud-Terms-of-Service-NL.pdf"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] border border-[color:var(--ed-rule)] text-[color:var(--ed-ink)] hover:border-[color:var(--ed-ink)] transition"
                >
                  <DownloadSimple className="w-3.5 h-3.5" />
                  Nederlands
                </a>
                <a
                  href="/documents/terms-of-service-en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] border border-[color:var(--ed-rule)] text-[color:var(--ed-ink)] hover:border-[color:var(--ed-ink)] transition"
                >
                  <DownloadSimple className="w-3.5 h-3.5" />
                  English
                </a>
              </div>
            </div>

            <div className="text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] space-y-8">
              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">1. Acceptance of terms</h2>
                <p>
                  By accessing Cloud Evolvers services, operated by Spot Cloud B.V. (KvK 89708873),
                  you acknowledge that you have read, understood, and agree to be bound by these
                  terms of service. If you do not agree, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">2. Description of services</h2>
                <p>
                  Spot Cloud B.V., operating under the Cloud Evolvers brand, provides Azure and
                  Microsoft 365 training, Microsoft Certified Training (MCT) delivery, and cloud
                  consulting, including implementation, automation, and strategic advisory.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">3. User obligations</h2>
                <p>
                  You agree to provide accurate, current, and complete information. You are
                  responsible for keeping your credentials confidential and for all activity on
                  your account.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">4. Intellectual property</h2>
                <p>
                  All content, features, and course materials are the property of Spot Cloud B.V.
                  or its licensors and are protected by copyright, trademark, and other
                  intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">5. Data protection and GDPR</h2>
                <p>
                  We process personal data in accordance with the GDPR. For details, see our{' '}
                  <Link to="/privacy-policy" className="text-[color:var(--ed-ink)] underline-offset-4 hover:underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">6. Right to access and portability</h2>
                <p>
                  Under the GDPR, you have the right to access, correct, or delete personal data
                  we hold about you, and to receive it in a structured, commonly used,
                  machine-readable format.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">7. Limitation of liability</h2>
                <p>
                  To the fullest extent permitted by law, Spot Cloud B.V. is not liable for
                  indirect, incidental, special, consequential, or punitive damages, including
                  loss of profits, data, or business opportunities, arising from use of our
                  services.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">8. Changes to these terms</h2>
                <p>
                  We may update these terms at any time. Material changes will be posted on the
                  site. Continued use of our services after an update means you accept the
                  updated terms.
                </p>
              </div>

              <div>
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">9. Governing law</h2>
                <p>
                  These terms are governed by the laws of the Netherlands, without regard to
                  conflict of law principles.
                </p>
              </div>

              <div className="pt-6 border-t border-[color:var(--ed-rule)]">
                <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">10. Contact</h2>
                <p>
                  Questions about these terms can be sent to{' '}
                  <a
                    href="mailto:legal@cloudevolvers.com"
                    className="text-[color:var(--ed-ink)] underline-offset-4 hover:underline"
                  >
                    legal@cloudevolvers.com
                  </a>
                  .
                </p>
                <p className="mt-4 font-mono text-[12px] text-[color:var(--ed-ink-3)]">
                  Spot Cloud B.V. · KvK 89708873 · {isDutch ? 'Gevestigd in Nederland' : 'Based in the Netherlands'}
                </p>
              </div>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
