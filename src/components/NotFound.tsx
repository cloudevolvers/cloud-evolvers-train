import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { useTranslations } from '@/hooks/use-translations';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';

export function NotFound() {
  const { t, isDutch } = useTranslations();

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)] flex items-center">
      <Wrap>
        <div className="py-24 sm:py-32 max-w-3xl">
          <Eyebrow accent>404</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02]">
            {t.notFound?.pageNotFound || (isDutch ? 'Pagina niet gevonden' : 'Page not found')}
          </Display>
          <Lede className="mt-7">
            {t.notFound?.description ||
              (isDutch
                ? 'De pagina die je zoekt bestaat niet of is verplaatst.'
                : 'The page you are looking for does not exist or has moved.')}
          </Lede>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <EdButton to="/" variant="primary" size="lg">
              {t.notFound?.backToHome || (isDutch ? 'Terug naar home' : 'Back home')}
              <ArrowRight className="w-4 h-4" />
            </EdButton>
            <EdButton to="/training" variant="ghost" size="lg">
              {t.notFound?.browseTraining || (isDutch ? 'Bekijk trainingen' : 'Browse training')}
            </EdButton>
          </div>

          <div className="mt-16 pt-10 border-t border-[color:var(--ed-rule)]">
            <Eyebrow>
              {t.notFound?.lookingForSomething ||
                (isDutch ? 'Zoek je iets specifieks' : 'Looking for something specific')}
            </Eyebrow>
            <ul className="mt-5 space-y-2 text-[15px]">
              <li>
                <Link
                  to="/training/azure-fundamentals"
                  className="text-[color:var(--ed-ink)] hover:text-[color:var(--ed-accent)] underline-offset-4 hover:underline"
                >
                  Azure Fundamentals (AZ-900)
                </Link>
              </li>
              <li>
                <Link
                  to="/training/azure-administrator"
                  className="text-[color:var(--ed-ink)] hover:text-[color:var(--ed-accent)] underline-offset-4 hover:underline"
                >
                  Azure Administrator (AZ-104)
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[color:var(--ed-ink)] hover:text-[color:var(--ed-accent)] underline-offset-4 hover:underline"
                >
                  {t.notFound?.ourServices || (isDutch ? 'Onze diensten' : 'Our services')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export default NotFound;
