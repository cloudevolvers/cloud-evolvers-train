import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { useTranslations } from '@/hooks/use-translations';
import { Wrap, Eyebrow, Display } from '@/components/editorial';

export function CookiePolicyPage() {
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
            {t.legal?.cookiePolicy || 'Cookie policy'}
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
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">What cookies are</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website.
                They help the site function and give the owner information about how it is
                used.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">How we use cookies</h2>
              <p>Cloud Evolvers, operated by Spot Cloud B.V. (KvK 89708873), uses cookies for:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong className="text-[color:var(--ed-ink)]">Essential cookies</strong>: required for the site to function, for example remembering that you accepted the notice.</li>
                <li><strong className="text-[color:var(--ed-ink)]">Functional cookies</strong>: remember your language preference and similar settings.</li>
                <li><strong className="text-[color:var(--ed-ink)]">Analytical cookies</strong>: give us anonymous information about how visitors use the site, so we can improve it.</li>
              </ul>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">Types of cookies</h2>
              <ol className="mt-3 space-y-2 list-decimal pl-5">
                <li><strong className="text-[color:var(--ed-ink)]">Session cookies</strong>: expire when you close the browser.</li>
                <li><strong className="text-[color:var(--ed-ink)]">Persistent cookies</strong>: remain on your device until they expire or you delete them.</li>
              </ol>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">Managing cookies</h2>
              <p>
                Your browser lets you control cookies through its settings. You can delete
                cookies, block all cookies, or set preferences for specific sites. Some parts of
                the website may not work correctly if you disable cookies.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">Third-party cookies</h2>
              <p>
                We may use third-party services that set their own cookies. These providers
                have their own policies, which we recommend you review.
              </p>
            </div>

            <div>
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">Changes to this policy</h2>
              <p>
                We may update this policy when technology, regulation, or our practices change.
                Updates appear on this page with a new revision date.
              </p>
            </div>

            <div className="pt-6 border-t border-[color:var(--ed-rule)]">
              <h2 className="ed-display text-[22px] text-[color:var(--ed-ink)] mb-3">Contact</h2>
              <p>
                Questions about this cookie policy can be sent to{' '}
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
