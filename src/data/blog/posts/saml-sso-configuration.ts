import type { BlogPost } from '../types';

export const samlSsoConfigurationPost: BlogPost = {
  id: 'saml-sso-configuration-entra-id',
  title: {
    en: 'SAML SSO in Entra ID: Configuration, Claims, and Troubleshooting',
    nl: 'SAML SSO in Entra ID: Configuratie, Claims en Probleemoplossing'
  },
  description: {
    en: 'A practical walkthrough of configuring SAML-based single sign-on in Microsoft Entra ID, including claim transformations, certificate management, and fixing the most common SSO errors.',
    nl: 'Een praktische walkthrough van het configureren van SAML-gebaseerde single sign-on in Microsoft Entra ID, inclusief claimtransformaties, certificaatbeheer en het oplossen van de meest voorkomende SSO-fouten.'
  },
  date: '2026-03-12',
  author: 'Yair Knijn',
  tags: ['Entra ID', 'SAML', 'SSO', 'Identity', 'Federation'],
  image: '/images/unsplash/azure-security-center.jpg',
  excerpt: {
    en: 'SAML SSO configuration in Entra ID involves more than filling in URLs. Here is what actually matters: claim rules, certificate rollover, and the errors you will inevitably hit.',
    nl: 'SAML SSO-configuratie in Entra ID is meer dan URL\'s invullen. Dit is wat er echt toe doet: claimregels, certificaatrollover en de fouten die je onvermijdelijk tegenkomt.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'SAML is not going anywhere. Yes, newer apps default to OpenID Connect, but ServiceNow, Salesforce, SAP, and plenty of other enterprise platforms still need SAML 2.0. Entra ID handles it well. The basic setup is quick — fill in three URLs and you are done. The tricky part is everything else: getting the NameID format right, writing claim transformations that actually work, and not forgetting about certificate expiry until SSO breaks at 2 AM.',
      nl: 'SAML gaat nergens heen. Ja, nieuwere apps kiezen standaard voor OpenID Connect, maar ServiceNow, Salesforce, SAP en tal van andere enterprise-platforms hebben nog steeds SAML 2.0 nodig. Entra ID doet dat prima. De basisconfiguratie is snel — drie URL\'s invullen en klaar. Het lastige zit in de rest: het NameID-formaat goed krijgen, claimtransformaties schrijven die daadwerkelijk werken, en niet pas aan certificaatverlopen denken als SSO om 2 uur \'s nachts kapotgaat.'
    },
    sections: [
      {
        title: {
          en: 'SP-Initiated vs IdP-Initiated Flows',
          nl: 'SP-Initiated vs IdP-Initiated Flows'
        },
        content: {
          en: 'In an SP-initiated flow, the user starts at the service provider (e.g., app.example.com), gets redirected to Entra ID with an AuthnRequest, authenticates, and is sent back with a SAML Response containing the assertion. This is the standard and more secure flow. In an IdP-initiated flow, the user starts at myapps.microsoft.com (or the My Apps portal), clicks the app tile, and Entra ID sends an unsolicited SAML Response to the app\'s Assertion Consumer Service (ACS) URL. IdP-initiated flows are convenient but carry a higher risk of replay attacks because there is no request-bound InResponseTo field to validate. When configuring SAML in Entra ID, you set three core URLs: the Identifier (Entity ID) — a globally unique URI that identifies your app to Entra, the Reply URL (ACS URL) — where Entra sends the SAML Response, and the Sign-on URL — where Entra redirects for SP-initiated login.',
          nl: 'In een SP-initiated flow begint de gebruiker bij de service provider (bijv. app.example.com), wordt doorgestuurd naar Entra ID met een AuthnRequest, authenticeert zich en wordt teruggestuurd met een SAML Response met de assertion. Dit is de standaard en veiligere flow. In een IdP-initiated flow begint de gebruiker bij myapps.microsoft.com (of het My Apps-portaal), klikt op de app-tegel en Entra ID stuurt een ongevraagde SAML Response naar de Assertion Consumer Service (ACS) URL van de app. IdP-initiated flows zijn handig maar brengen een hoger risico op replay-aanvallen met zich mee omdat er geen request-gebonden InResponseTo-veld is om te valideren. Bij het configureren van SAML in Entra ID stel je drie kern-URL\'s in: de Identifier (Entity ID) — een globaal unieke URI die je app identificeert bij Entra, de Reply URL (ACS URL) — waar Entra de SAML Response naartoe stuurt, en de Sign-on URL — waar Entra doorverwijst voor SP-initiated login.'
        }
      },
      {
        title: {
          en: 'SAML Signing Certificates and Rollover',
          nl: 'SAML-ondertekeningscertificaten en Rollover'
        },
        content: {
          en: 'Entra ID signs every SAML assertion with an X.509 certificate. New enterprise applications get a certificate valid for 3 years by default. Entra sends notification emails to the addresses configured on the app registration starting 60 days before expiry. To roll over, you create a new certificate in the Entra portal (SAML Signing Certificate section), download it, upload the new certificate to the service provider, then set the new certificate as active in Entra. The critical order matters: update the SP first, then activate in Entra. If you activate the new cert before the SP trusts it, SSO breaks immediately for all users. You can also configure whether Entra signs the entire SAML Response, just the Assertion, or both. Most SPs expect a signed assertion at minimum. If you see signature validation errors, check that the SP has the current certificate thumbprint and that the signing option matches what the SP expects.',
          nl: 'Entra ID ondertekent elke SAML-assertion met een X.509-certificaat. Nieuwe enterprise-applicaties krijgen standaard een certificaat dat 3 jaar geldig is. Entra stuurt notificatie-e-mails naar de adressen die geconfigureerd zijn op de app-registratie, startend 60 dagen voor verloop. Om te rollover maak je een nieuw certificaat aan in de Entra-portal (SAML Signing Certificate-sectie), download je het, upload je het nieuwe certificaat naar de service provider en stel je het nieuwe certificaat als actief in Entra in. De kritische volgorde is belangrijk: werk de SP eerst bij, activeer dan pas in Entra. Als je het nieuwe certificaat activeert voordat de SP het vertrouwt, breekt SSO onmiddellijk voor alle gebruikers. Je kunt ook configureren of Entra de volledige SAML Response ondertekent, alleen de Assertion, of beide. De meeste SP\'s verwachten minimaal een ondertekende assertion. Als je handtekeningvalidatiefouten ziet, controleer dan of de SP de huidige certificaat-thumbprint heeft en of de ondertekeningsoptie overeenkomt met wat de SP verwacht.'
        }
      },
      {
        title: {
          en: 'Claim Rules and Transformations',
          nl: 'Claimregels en Transformaties'
        },
        content: {
          en: 'The NameID claim is the most important — it tells the SP who the user is. Common formats are emailAddress (urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress) and persistent (opaque, stable identifier). Beyond NameID, you can add additional claims like group membership, department, or custom attributes. Entra supports transformation functions: Join() concatenates values with a separator, Contains() checks for substring matches and returns different values, RegExReplace() applies regex patterns, and ToLower()/ToUpper() normalizes casing. For group claims, you can emit them as sAMAccountName (for synced groups), group object IDs, or the display name. Watch the token size: if you emit all group memberships for a user in 50+ groups, the SAML assertion can exceed the SP\'s size limit. Use group filtering to restrict claims to groups assigned to the application.',
          nl: 'De NameID-claim is het belangrijkst — het vertelt de SP wie de gebruiker is. Veelgebruikte formaten zijn emailAddress (urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress) en persistent (ondoorzichtig, stabiel identifier). Naast NameID kun je extra claims toevoegen zoals groepslidmaatschap, afdeling of custom attributen. Entra ondersteunt transformatiefuncties: Join() voegt waarden samen met een scheidingsteken, Contains() controleert op substring-matches en retourneert verschillende waarden, RegExReplace() past regex-patronen toe en ToLower()/ToUpper() normaliseert hoofdlettergebruik. Voor groepsclaims kun je ze uitzenden als sAMAccountName (voor gesynchroniseerde groepen), groep-object-ID\'s of de weergavenaam. Let op de tokengrootte: als je alle groepslidmaatschappen voor een gebruiker in 50+ groepen uitstuurt, kan de SAML-assertion de groottelimiet van de SP overschrijden. Gebruik groepsfiltering om claims te beperken tot groepen die aan de applicatie zijn toegewezen.'
        },
        code: {
          language: 'xml',
          code: `<saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_a]1b2c3d4" IssueInstant="2026-03-12T10:30:00Z" Version="2.0">
  <saml:Issuer>https://sts.windows.net/{tenant-id}/</saml:Issuer>
  <saml:Subject>
    <saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">
      j.smith@contoso.com
    </saml:NameID>
    <saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
      <saml:SubjectConfirmationData
        InResponseTo="_request123"
        NotOnOrAfter="2026-03-12T10:35:00Z"
        Recipient="https://app.example.com/sso/saml" />
    </saml:SubjectConfirmation>
  </saml:Subject>
  <saml:AttributeStatement>
    <saml:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname">
      <saml:AttributeValue>Jane</saml:AttributeValue>
    </saml:Attribute>
    <saml:Attribute Name="http://schemas.microsoft.com/ws/2008/06/identity/claims/groups">
      <saml:AttributeValue>engineering-team</saml:AttributeValue>
    </saml:Attribute>
  </saml:AttributeStatement>
</saml:Assertion>`
        }
      },
      {
        title: {
          en: 'Testing and Debugging SSO',
          nl: 'SSO Testen en Debuggen'
        },
        content: {
          en: 'Entra ID provides a built-in test panel in the SAML configuration blade — click "Test this application" to initiate an SP-initiated flow and see any errors inline. For deeper inspection, install the SAML-tracer browser extension (available for Firefox and Chrome) to capture the raw SAML Request and Response as they pass through the browser. You can then base64-decode the assertion to verify claim values, NameID format, and signature details. The most frequent errors you will encounter: AADSTS75011 means the authentication method in the request does not match what Entra supports — usually the SP is requesting a specific AuthnContextClassRef that Entra does not honor. AADSTS50105 means the user is not assigned to the application — either assign the user directly or add them to a group that is assigned. Certificate expiry causes a generic signature validation error on the SP side, not an Entra error code, so check the certificate expiry date in the Entra portal if SSO suddenly breaks without any Entra-side error.',
          nl: 'Entra ID biedt een ingebouwd testpaneel in de SAML-configuratieblade — klik op "Test this application" om een SP-initiated flow te starten en eventuele fouten inline te zien. Voor diepere inspectie installeer je de SAML-tracer browserextensie (beschikbaar voor Firefox en Chrome) om het ruwe SAML Request en Response vast te leggen terwijl ze door de browser gaan. Je kunt dan de assertion base64-decoderen om claimwaarden, NameID-formaat en handtekeningdetails te verifiëren. De meest voorkomende fouten die je tegenkomt: AADSTS75011 betekent dat de authenticatiemethode in het verzoek niet overeenkomt met wat Entra ondersteunt — meestal vraagt de SP een specifieke AuthnContextClassRef aan die Entra niet honoreert. AADSTS50105 betekent dat de gebruiker niet is toegewezen aan de applicatie — wijs de gebruiker direct toe of voeg ze toe aan een groep die is toegewezen. Certificaatverlopen veroorzaakt een generieke handtekeningvalidatiefout aan de SP-kant, geen Entra-foutcode, dus controleer de certificaatverloopdatum in de Entra-portal als SSO plotseling breekt zonder een fout aan de Entra-kant.'
        }
      }
    ],
    conclusion: {
      en: 'Once SAML SSO works in Entra ID, it tends to just keep working. The problems happen during setup and during certificate rollover. Two things that will save you hours: install SAML-tracer in your browser now, and put a calendar reminder 90 days before every SAML certificate expires. And test with real user accounts, not just your admin. Admin accounts have a habit of working when nothing else does.',
      nl: 'Als SAML SSO eenmaal werkt in Entra ID, blijft het gewoon doordraaien. De problemen ontstaan tijdens de setup en bij certificaatrollover. Twee dingen die je uren besparen: installeer SAML-tracer nu in je browser, en zet een agendaherinnering 90 dagen voor elke SAML-certificaatvervaldatum. En test met echte gebruikersaccounts, niet alleen je admin. Admin-accounts hebben de neiging te werken terwijl niets anders dat doet.'
    }
  }
};
