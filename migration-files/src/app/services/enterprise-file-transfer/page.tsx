import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Enterprise File Transfer - xEvolve Services',
    description: 'Secure, reliable file sharing for businesses with advanced security and controls. End-to-end encryption, granular access controls, and detailed audit logs.',
  };
}

interface EnterpriseFileTransferPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function EnterpriseFileTransferPage({ searchParams }: EnterpriseFileTransferPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'enterprise-file-transfer',
    title: t.header.serviceNames.enterpriseFileTransfer,
    description: t.services.descriptions.fileTransfer,
    icon: 'FileTransfer',
    features: t.services.features.fileTransfer,
    order: 4
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Enterprise Bestandsoverdracht</h1>
            <p>
              Onze Enterprise Bestandsoverdracht service biedt veilige, betrouwbare bestandsdeling 
              voor bedrijven met geavanceerde beveiligings- en controlefeatures. Perfect voor 
              organisaties die gevoelige gegevens moeten delen met interne teams, klanten en partners.
            </p>

            <h2>Onze Enterprise Bestandsoverdracht Services</h2>

            <h3>End-to-End Encryptie</h3>
            <p>
              Alle bestanden worden beveiligd met militaire-grade encryptie tijdens transport en opslag. 
              Onze end-to-end encryptie zorgt ervoor dat alleen geautoriseerde ontvangers toegang hebben 
              tot uw gevoelige gegevens, wat maximale bescherming tegen dataschendingen biedt.
            </p>

            <h3>Gedetailleerde Toegangscontroles</h3>
            <p>
              Configureer granulaire toegangsrechten voor verschillende gebruikers en groepen. Bepaal 
              wie bestanden kan bekijken, downloaden, bewerken of delen. Onze flexibele permissiesysteem 
              geeft u volledige controle over wie toegang heeft tot welke informatie.
            </p>

            <h3>Transfer Automatisering</h3>
            <p>
              Automatiseer terugkerende bestandsoverdrachten met onze geavanceerde schedulingsystemen. 
              Stel automatische uploads, downloads en synchronisatie in om tijd te besparen en menselijke 
              fouten te elimineren bij routine bestandsbeheer taken.
            </p>

            <h3>Uitgebreide Audit Logs</h3>
            <p>
              Houd gedetailleerde records bij van alle bestandsactiviteiten met uitgebreide audit logging. 
              Track wie bestanden heeft geupload, gedownload, gedeeld of gewijzigd, met tijdstempels en 
              IP-adressen voor complete traceerbaarheid en compliance rapportage.
            </p>

            <h2>Voordelen van Onze Enterprise Bestandsoverdracht Services</h2>
            <ul>
              <li><strong>Verbeterde Beveiliging</strong>: Militaire-grade encryptie en toegangscontroles beschermen uw gevoelige gegevens</li>
              <li><strong>Compliance Ondersteuning</strong>: Voldoe aan GDPR, HIPAA en andere regelgevingsvereisten</li>
              <li><strong>Verhoogde Productiviteit</strong>: Veilig en efficiënt delen van bestanden verbetert samenwerking</li>
              <li><strong>Kostenbesparingen</strong>: Verminder afhankelijkheid van fysieke media en verouderde systemen</li>
              <li><strong>Schaalbaarheid</strong>: Groei met uw bedrijf zonder beveiligingscompromissen</li>
            </ul>

            <h2>Belangrijke Features</h2>
            <ul>
              <li>Drag-and-drop bestandsupload interface</li>
              <li>Bulkbestandsoverdracht mogelijkheden</li>
              <li>Mobiele apps voor iOS en Android</li>
              <li>Integratie met bestaande bedrijfssystemen</li>
              <li>Real-time notificaties en updates</li>
              <li>Versiecontrole en backup functies</li>
              <li>Aangepaste branding en white-label opties</li>
            </ul>

            <p>
              Neem contact met ons op om te leren hoe onze Enterprise Bestandsoverdracht services 
              uw organisatie kunnen helpen veilig en efficiënt bestanden te delen.
            </p>
          </>
        ) : (
          <>
            <h1>Enterprise File Transfer</h1>
            <p>
              Our Enterprise File Transfer service provides secure, reliable file sharing for businesses 
              with advanced security and control features. Perfect for organizations that need to share 
              sensitive data with internal teams, clients, and partners.
            </p>

            <h2>Our Enterprise File Transfer Services</h2>

            <h3>End-to-End Encryption</h3>
            <p>
              All files are secured with military-grade encryption during transit and at rest. Our 
              end-to-end encryption ensures that only authorized recipients can access your sensitive 
              data, providing maximum protection against data breaches.
            </p>

            <h3>Granular Access Controls</h3>
            <p>
              Configure fine-grained access permissions for different users and groups. Control who can 
              view, download, edit, or share files. Our flexible permission system gives you complete 
              control over who has access to what information.
            </p>

            <h3>Transfer Automation</h3>
            <p>
              Automate recurring file transfers with our advanced scheduling systems. Set up automatic 
              uploads, downloads, and synchronization to save time and eliminate human error in routine 
              file management tasks.
            </p>

            <h3>Detailed Audit Logs</h3>
            <p>
              Maintain detailed records of all file activities with comprehensive audit logging. Track 
              who uploaded, downloaded, shared, or modified files, with timestamps and IP addresses for 
              complete traceability and compliance reporting.
            </p>

            <h2>Benefits of Our Enterprise File Transfer Services</h2>
            <ul>
              <li><strong>Enhanced Security</strong>: Military-grade encryption and access controls protect your sensitive data</li>
              <li><strong>Compliance Support</strong>: Meet GDPR, HIPAA, and other regulatory requirements</li>
              <li><strong>Increased Productivity</strong>: Secure and efficient file sharing improves collaboration</li>
              <li><strong>Cost Savings</strong>: Reduce reliance on physical media and legacy systems</li>
              <li><strong>Scalability</strong>: Grow with your business without compromising security</li>
            </ul>

            <h2>Key Features</h2>
            <ul>
              <li>Drag-and-drop file upload interface</li>
              <li>Bulk file transfer capabilities</li>
              <li>Mobile apps for iOS and Android</li>
              <li>Integration with existing business systems</li>
              <li>Real-time notifications and updates</li>
              <li>Version control and backup features</li>
              <li>Custom branding and white-label options</li>
            </ul>

            <p>
              Contact us today to learn how our Enterprise File Transfer services can help your 
              organization securely and efficiently share files.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
