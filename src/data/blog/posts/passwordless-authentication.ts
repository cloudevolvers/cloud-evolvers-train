import type { BlogPost } from '../types';

export const passwordlessAuthenticationPost: BlogPost = {
  id: 'entra-passwordless-authentication-2025',
  title: {
    en: 'Phishing-Resistant Passwordless Authentication in Microsoft Entra ID',
    nl: 'Phishing-Bestendige Passwordless Authenticatie in Microsoft Entra ID'
  },
  description: {
    en: 'Deploy FIDO2 security keys, passkeys, and Windows Hello for Business to eliminate password-based attacks and achieve Zero Trust authentication',
    nl: 'Deploy FIDO2 security keys, passkeys en Windows Hello for Business om wachtwoord-gebaseerde aanvallen te elimineren en Zero Trust authenticatie te bereiken'
  },
  date: '2025-12-05',
  author: 'Yair Knijn',
  tags: ['Microsoft Entra', 'Security', 'Passwordless', 'FIDO2', 'Zero Trust'],
  image: '/images/unsplash/zero-trust-security-model.jpg',
  excerpt: {
    en: 'Passwords are the weakest link in your security chain. Learn how to deploy phishing-resistant passwordless authentication with FIDO2, passkeys, and Windows Hello for Business.',
    nl: 'Wachtwoorden zijn de zwakste schakel in je beveiligingsketen. Leer hoe je phishing-bestendige passwordless authenticatie deployt met FIDO2, passkeys en Windows Hello for Business.'
  },
  category: {
    en: 'Security & Identity',
    nl: 'Beveiliging & Identiteit'
  },
  readTime: 15,
  content: {
    introduction: {
      en: 'Passwords get stolen. That is not a hot take, it is just what happens — password spray, credential stuffing, and phishing are still the top three attack vectors in every breach report. MFA helps, but SMS codes can be SIM-swapped and push notifications can be fatigue-attacked. The real fix is removing passwords entirely. Microsoft Entra ID now supports three phishing-resistant methods: FIDO2 security keys, passkeys in Microsoft Authenticator, and Windows Hello for Business. Here is how to actually deploy them.',
      nl: 'Wachtwoorden worden gestolen. Dat is geen schokkend inzicht, het is gewoon wat er gebeurt — password spray, credential stuffing en phishing staan nog steeds bovenaan in elk breach-rapport. MFA helpt, maar SMS-codes kunnen ge-SIM-swapt worden en push-notificaties kunnen worden aangevallen via notification fatigue. De echte oplossing is wachtwoorden helemaal verwijderen. Microsoft Entra ID ondersteunt nu drie phishing-bestendige methoden: FIDO2 security keys, passkeys in Microsoft Authenticator en Windows Hello for Business. Hier is hoe je ze daadwerkelijk deployt.'
    },
    sections: [
      {
        title: {
          en: 'Why Passwordless Matters',
          nl: 'Waarom Passwordless Belangrijk Is'
        },
        content: {
          en: 'Traditional MFA methods like SMS and voice calls have become inexpensive for attackers to bypass. SIM swapping, SS7 attacks, and social engineering can compromise these methods. Phishing-resistant methods like FIDO2 are cryptographically bound to the legitimate service, making them immune to phishing attacks. Even if a user clicks a malicious link, the credential cannot be used on a fake site because the authentication is bound to the origin domain.',
          nl: 'Traditionele MFA-methoden zoals SMS en spraakoproepen zijn goedkoop geworden voor aanvallers om te omzeilen. SIM-swapping, SS7-aanvallen en social engineering kunnen deze methoden compromitteren. Phishing-bestendige methoden zoals FIDO2 zijn cryptografisch gebonden aan de legitieme service, waardoor ze immuun zijn voor phishing-aanvallen. Zelfs als een gebruiker op een kwaadaardige link klikt, kan de credential niet worden gebruikt op een nepsite omdat de authenticatie gebonden is aan het origin-domein.'
        }
      },
      {
        title: {
          en: 'FIDO2 Security Keys',
          nl: 'FIDO2 Security Keys'
        },
        content: {
          en: 'FIDO2 security keys are physical devices (like YubiKey or Feitian) that provide the strongest form of passwordless authentication. They work across devices and platforms, require physical presence to authenticate, are resistant to phishing and man-in-the-middle attacks, and support multiple protocols (FIDO2, U2F, smart card). To enable FIDO2 in Entra ID, go to Entra admin center > Protection > Authentication methods > Policies, and enable FIDO2 security key.',
          nl: 'FIDO2 security keys zijn fysieke apparaten (zoals YubiKey of Feitian) die de sterkste vorm van passwordless authenticatie bieden. Ze werken over apparaten en platformen heen, vereisen fysieke aanwezigheid om te authenticeren, zijn bestand tegen phishing en man-in-the-middle-aanvallen, en ondersteunen meerdere protocollen (FIDO2, U2F, smart card). Om FIDO2 in Entra ID in te schakelen, ga naar Entra admin center > Protection > Authentication methods > Policies, en schakel FIDO2 security key in.'
        }
      },
      {
        title: {
          en: 'Passkeys in Microsoft Authenticator',
          nl: 'Passkeys in Microsoft Authenticator'
        },
        content: {
          en: 'Passkeys provide FIDO2-level security without requiring a separate hardware device. Microsoft Authenticator now supports device-bound passkeys that are synced securely. Users authenticate with biometrics (fingerprint or face) on their mobile device. This combines convenience with strong security - the private key never leaves the device, and authentication requires both possession of the device and biometric verification.',
          nl: 'Passkeys bieden FIDO2-niveau beveiliging zonder een apart hardware-apparaat te vereisen. Microsoft Authenticator ondersteunt nu device-bound passkeys die veilig worden gesynchroniseerd. Gebruikers authenticeren met biometrie (vingerafdruk of gezicht) op hun mobiele apparaat. Dit combineert gemak met sterke beveiliging - de private key verlaat nooit het apparaat, en authenticatie vereist zowel bezit van het apparaat als biometrische verificatie.'
        },
        code: {
          language: 'powershell',
          code: `# Enable passkeys in Microsoft Authenticator via Graph API
$params = @{
    "@odata.type" = "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodConfiguration"
    state = "enabled"
    featureSettings = @{
        displayAppInformationRequiredState = @{
            state = "enabled"
        }
        displayLocationInformationRequiredState = @{
            state = "enabled"
        }
    }
}
Update-MgPolicyAuthenticationMethodPolicyAuthenticationMethodConfiguration \`
    -AuthenticationMethodConfigurationId "MicrosoftAuthenticator" \`
    -BodyParameter $params`
        }
      },
      {
        title: {
          en: 'Windows Hello for Business',
          nl: 'Windows Hello for Business'
        },
        content: {
          en: 'Windows Hello for Business replaces passwords with strong two-factor authentication on Windows devices. It uses biometric (facial recognition or fingerprint) or PIN authentication backed by asymmetric key pairs. The credential is device-bound - the private key is protected by the devices TPM and never leaves the device. Deploy via Intune or Group Policy for hybrid Azure AD joined or cloud-native devices.',
          nl: 'Windows Hello for Business vervangt wachtwoorden door sterke twee-factor authenticatie op Windows-apparaten. Het gebruikt biometrische (gezichtsherkenning of vingerafdruk) of PIN-authenticatie ondersteund door asymmetrische sleutelparen. De credential is device-bound - de private key wordt beschermd door de TPM van het apparaat en verlaat nooit het apparaat. Deploy via Intune of Group Policy voor hybrid Azure AD joined of cloud-native apparaten.'
        }
      },
      {
        title: {
          en: 'Conditional Access Authentication Strengths',
          nl: 'Conditional Access Authentication Strengths'
        },
        content: {
          en: 'Entra ID Conditional Access now supports authentication strength policies that go beyond simple "require MFA". You can require phishing-resistant MFA specifically, blocking weaker methods. Create a policy that requires authentication strength of "Phishing-resistant MFA" for access to sensitive applications or for privileged users. This ensures only FIDO2, passkeys, or certificate-based auth can satisfy the requirement.',
          nl: 'Entra ID Conditional Access ondersteunt nu authentication strength-policies die verder gaan dan simpele "require MFA". Je kunt specifiek phishing-bestendige MFA vereisen, waardoor zwakkere methoden worden geblokkeerd. Maak een policy die authentication strength van "Phishing-resistant MFA" vereist voor toegang tot gevoelige applicaties of voor privileged users. Dit zorgt ervoor dat alleen FIDO2, passkeys of certificaat-gebaseerde auth aan de vereiste kan voldoen.'
        }
      },
      {
        title: {
          en: 'Migration Strategy',
          nl: 'Migratiestrategie'
        },
        content: {
          en: 'Migrating to passwordless requires careful planning: 1) Start with IT staff and security teams as early adopters, 2) Enable passwordless methods alongside existing authentication, 3) Use Conditional Access to gradually require stronger methods for sensitive apps, 4) Monitor sign-in logs to identify users still relying on passwords, 5) Provide self-service registration for passwordless methods, 6) Eventually disable weaker methods in authentication policies.',
          nl: 'Migreren naar passwordless vereist zorgvuldige planning: 1) Begin met IT-personeel en security-teams als early adopters, 2) Schakel passwordless-methoden in naast bestaande authenticatie, 3) Gebruik Conditional Access om geleidelijk sterkere methoden te vereisen voor gevoelige apps, 4) Monitor sign-in logs om gebruikers te identificeren die nog steeds afhankelijk zijn van wachtwoorden, 5) Bied self-service registratie voor passwordless-methoden, 6) Schakel uiteindelijk zwakkere methoden uit in authenticatie-policies.'
        }
      },
      {
        title: {
          en: 'Temporary Access Pass for Onboarding',
          nl: 'Temporary Access Pass voor Onboarding'
        },
        content: {
          en: 'For users who need to register passwordless credentials but dont have any yet, use Temporary Access Pass (TAP). TAP is a time-limited passcode that satisfies strong authentication requirements, allowing users to onboard passwordless methods. Admins can issue TAP through the Entra admin center or Graph API. Set appropriate lifetime (1-24 hours) and one-time or multi-use based on your scenario.',
          nl: 'Voor gebruikers die passwordless credentials moeten registreren maar er nog geen hebben, gebruik Temporary Access Pass (TAP). TAP is een tijdgelimiteerde toegangscode die voldoet aan sterke authenticatievereisten, waardoor gebruikers passwordless-methoden kunnen onboarden. Admins kunnen TAP uitgeven via het Entra admin center of Graph API. Stel passende levensduur in (1-24 uur) en eenmalig of herbruikbaar gebruik op basis van je scenario.'
        }
      }
    ],
    conclusion: {
      en: 'Microsoft already made MFA mandatory for admin portals. Passwordless is the logical next step — and a better one. Start with your admins and IT team. Give them FIDO2 keys, let them use it for a month, collect feedback. Then roll out passkeys in Microsoft Authenticator to the rest of the organization. Use Conditional Access authentication strength policies to require phishing-resistant methods for sensitive apps. The side benefit nobody talks about: password reset tickets drop to near zero. Your help desk will thank you.',
      nl: 'Microsoft heeft MFA al verplicht gemaakt voor admin portals. Passwordless is de logische volgende stap — en een betere. Begin met je admins en IT-team. Geef ze FIDO2-keys, laat ze het een maand gebruiken, verzamel feedback. Rol daarna passkeys in Microsoft Authenticator uit naar de rest van de organisatie. Gebruik Conditional Access authentication strength-policies om phishing-bestendige methoden te vereisen voor gevoelige apps. Het bijkomende voordeel waar niemand het over heeft: wachtwoord-reset-tickets dalen naar bijna nul. Je helpdesk zal je dankbaar zijn.'
    }
  }
};
