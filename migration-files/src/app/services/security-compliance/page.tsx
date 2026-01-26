import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Security & Compliance - xEvolve Services',
    description: 'Comprehensive security management and compliance monitoring for your Azure environment. Threat detection, compliance frameworks, and security assessments.',
  };
}

interface SecurityCompliancePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SecurityCompliancePage({ searchParams }: SecurityCompliancePageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'security-compliance',
    title: t.header.serviceNames.securityCompliance,
    description: t.services.descriptions.securityCompliance,
    icon: 'Shield',
    features: t.services.features.securityCompliance,
    order: 5
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Beveiliging & Compliance</h1>
            <p>
              Onze Security & Compliance service biedt uitgebreide bescherming voor uw Azure-omgeving 
              en helpt u beveiligingsrisico's te identificeren en te beperken terwijl u voldoet aan 
              regelgevingsvereisten.
            </p>

            <h2>Onze Security & Compliance Services</h2>

            <h3>Bedreigingsdetectie</h3>
            <p>
              We implementeren geavanceerde bedreigingsdetectiesystemen die real-time monitoring bieden 
              van uw Azure-omgeving. Onze systemen identificeren verdachte activiteiten, potentiële 
              beveiligingsinbreuken en afwijkend gedrag om uw infrastructuur te beschermen.
            </p>

            <h3>Compliance Frameworks</h3>
            <p>
              We helpen u te voldoen aan industriestandaarden en regelgevingsvereisten zoals GDPR, 
              ISO 27001, SOC 2, en andere relevante frameworks. Onze expertise zorgt ervoor dat uw 
              Azure-omgeving voldoet aan alle toepasselijke compliance vereisten.
            </p>

            <h3>Beveiligingsbeoordelingen</h3>
            <p>
              Regelmatige beveiligingsbeoordelingen identificeren kwetsbaarheden en gebieden voor 
              verbetering in uw Azure-infrastructuur. We voeren diepgaande analyses uit en bieden 
              praktische aanbevelingen om uw beveiligingspositie te versterken.
            </p>

            <h3>Zero Trust Implementatie</h3>
            <p>
              We implementeren Zero Trust beveiligingsmodellen die uitgaan van het principe "vertrouw 
              niemand, verifieer alles". Deze aanpak biedt maximale beveiliging door elke toegangspoging 
              te valideren, ongeacht de locatie of identiteit van de gebruiker.
            </p>

            <h2>Voordelen van Onze Security & Compliance Services</h2>
            <ul>
              <li><strong>Uitgebreide Beveiliging</strong>: Meerlagige beveiligingsmaatregelen beschermen tegen diverse bedreigingen</li>
              <li><strong>Compliance Zekerheid</strong>: Voldoe aan alle relevante regelgevings- en industrievereisten</li>
              <li><strong>Proactieve Bewaking</strong>: 24/7 monitoring identificeert en reageert op bedreigingen voordat ze schade aanrichten</li>
              <li><strong>Risicobeheer</strong>: Systematische benadering van beveiligingsrisico's en hun beperking</li>
              <li><strong>Vertrouwen van Stakeholders</strong>: Toon uw toewijding aan beveiliging en compliance aan klanten en partners</li>
            </ul>

            <h2>Onze Beveiligingsaanpak</h2>
            <p>
              We beginnen met een uitgebreide beveiligingsbeoordeling van uw huidige Azure-omgeving, 
              identificeren kwetsbaarheden en ontwikkelen een op maat gemaakte beveiligingsstrategie. 
              Vervolgens implementeren we de noodzakelijke beveiligingsmaatregelen en zorgen voor 
              continue monitoring en verbetering.
            </p>

            <p>
              Neem contact met ons op om te leren hoe onze Security & Compliance services uw Azure-omgeving 
              kunnen beveiligen en u kunnen helpen voldoen aan alle relevante vereisten.
            </p>
          </>
        ) : (
          <>
            <h1>Security & Compliance</h1>
            <p>
              Our Security & Compliance service provides comprehensive protection for your Azure environment, 
              helping you identify and mitigate security risks while ensuring adherence to regulatory requirements.
            </p>

            <h2>Our Security & Compliance Services</h2>

            <h3>Threat Detection</h3>
            <p>
              We implement advanced threat detection systems that provide real-time monitoring of your Azure 
              environment. Our systems identify suspicious activities, potential security breaches, and 
              anomalous behavior to protect your infrastructure.
            </p>

            <h3>Compliance Frameworks</h3>
            <p>
              We help you meet industry standards and regulatory requirements such as GDPR, ISO 27001, 
              SOC 2, and other relevant frameworks. Our expertise ensures your Azure environment complies 
              with all applicable compliance requirements.
            </p>

            <h3>Security Assessments</h3>
            <p>
              Regular security assessments identify vulnerabilities and areas for improvement in your Azure 
              infrastructure. We conduct thorough analysis and provide actionable recommendations to strengthen 
              your security posture.
            </p>

            <h3>Zero Trust Implementation</h3>
            <p>
              We implement Zero Trust security models that operate on the principle of "never trust, always verify". 
              This approach provides maximum security by validating every access attempt, regardless of user 
              location or identity.
            </p>

            <h2>Benefits of Our Security & Compliance Services</h2>
            <ul>
              <li><strong>Comprehensive Protection</strong>: Multi-layered security measures protect against diverse threats</li>
              <li><strong>Compliance Assurance</strong>: Meet all relevant regulatory and industry requirements</li>
              <li><strong>Proactive Monitoring</strong>: 24/7 monitoring identifies and responds to threats before they cause damage</li>
              <li><strong>Risk Management</strong>: Systematic approach to security risks and their mitigation</li>
              <li><strong>Stakeholder Confidence</strong>: Demonstrate your commitment to security and compliance to customers and partners</li>
            </ul>

            <h2>Our Security Approach</h2>
            <p>
              We start with a comprehensive security assessment of your current Azure environment, identify 
              vulnerabilities, and develop a tailored security strategy. We then implement necessary security 
              measures and ensure continuous monitoring and improvement.
            </p>

            <p>
              Contact us today to learn how our Security & Compliance services can secure your Azure environment 
              and help you meet all relevant requirements.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
