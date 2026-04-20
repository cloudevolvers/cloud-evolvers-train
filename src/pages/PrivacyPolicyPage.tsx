import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { useTranslations } from '@/hooks/use-translations';
import { Wrap, Eyebrow, Display } from '@/components/editorial';

export function PrivacyPolicyPage() {
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
            {t.legal?.privacyPolicy || 'Privacy policy'}
          </Display>
          <p className="mt-6 ed-eyebrow text-[color:var(--ed-ink-3)]">
            {t.legal?.lastUpdated || 'Last updated'} {lastUpdated}
          </p>
        </Wrap>
      </section>

      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="max-w-2xl text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] space-y-8">
            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">1. Introduction</h2>
              <p>
                Cloud Evolvers is operated by Spot Cloud B.V., registered in the Netherlands
                under KvK 89708873. We respect your privacy and are committed to protecting
                your personal data. This policy explains how we handle personal data when you
                visit our website and what rights you have under applicable law.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">2. Data we collect</h2>
              <p>We may collect the following categories of personal data:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong className="text-[color:var(--ed-ink)]">Identity data</strong>: name and any identifier you provide in contact forms.</li>
                <li><strong className="text-[color:var(--ed-ink)]">Contact data</strong>: email address, phone number, company name.</li>
                <li><strong className="text-[color:var(--ed-ink)]">Technical data</strong>: IP address, browser type, operating system, device information.</li>
                <li><strong className="text-[color:var(--ed-ink)]">Usage data</strong>: how you navigate the website and interact with its content.</li>
              </ul>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">3. How we use your data</h2>
              <p>We only process personal data when the law allows. The main grounds we rely on are:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Performing a contract we have entered into with you.</li>
                <li>Pursuing our legitimate interests, where these do not override your rights.</li>
                <li>Complying with a legal or regulatory obligation.</li>
              </ul>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">4. Data sharing</h2>
              <p>
                We do not sell your personal data. We may share it with service providers that
                help us run the website and training operations, and with authorities where
                required by law.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">5. Data security</h2>
              <p>
                We keep access to personal data limited to people who need it to do their work,
                and we review our technical and organisational measures on a regular basis.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">6. Cookies</h2>
              <p>
                We use cookies only to maintain session state and improve your experience on
                the site. We do not use tracking or advertising cookies.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">7. Changes to this policy</h2>
              <p>
                When we update this policy, we update the date at the top of the page. For
                material changes, we may post a visible notice on the site.
              </p>
            </div>

            <div className="pt-6 border-t border-[color:var(--ed-rule)]">
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">8. Contact</h2>
              <p>
                Questions about this privacy policy can be sent to{' '}
                <a
                  href="mailto:privacy@cloudevolvers.com"
                  className="text-[color:var(--ed-ink)] underline-offset-4 hover:underline"
                >
                  privacy@cloudevolvers.com
                </a>
                .
              </p>
              <p className="mt-4 font-mono text-[12px] text-[color:var(--ed-ink-3)]">
                Spot Cloud B.V. · KvK 89708873 · {isDutch ? 'Gevestigd in Nederland' : 'Based in the Netherlands'}
              </p>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
