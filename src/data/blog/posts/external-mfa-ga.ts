import type { BlogPost } from '../types';

export const externalMfaGaPost: BlogPost = {
  id: 'external-mfa-ga',
  title: {
    en: 'External MFA Hits GA in Entra ID — Keep Your Existing MFA Provider',
    nl: 'External MFA is GA in Entra ID — behoud je bestaande MFA-provider'
  },
  description: {
    en: 'External Authentication Methods is now generally available under the new name External MFA. Organizations with an existing MFA investment can now satisfy Entra ID MFA requirements without ripping it out.',
    nl: 'External Authentication Methods is nu algemeen beschikbaar onder de nieuwe naam External MFA. Organisaties met een bestaande MFA-investering kunnen nu voldoen aan Entra ID MFA-vereisten zonder die eruit te trekken.'
  },
  date: '2026-04-08',
  author: 'Yair Knijn',
  tags: ['Microsoft Entra', 'MFA', 'Conditional Access', 'Identity', 'Security'],
  image: '/images/pexels/pexels-cyber-security-concept.jpg',
  excerpt: {
    en: 'For years, organizations standardized on Duo, Okta Verify, RSA, or another MFA provider — and rip-and-replace to Microsoft Authenticator was the only way to satisfy Entra MFA enforcement. External MFA GA changes that for real.',
    nl: 'Jarenlang stonden organisaties standaard op Duo, Okta Verify, RSA of een andere MFA-provider — en rip-and-replace naar Microsoft Authenticator was de enige manier om aan Entra MFA-handhaving te voldoen. External MFA GA verandert dat echt.'
  },
  category: {
    en: 'Identity & Security',
    nl: 'Identity & Security'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'External authentication methods in Microsoft Entra ID is now generally available under the new name External MFA. The capability lets your existing MFA provider — Duo, Okta Verify, RSA SecurID, Cisco Secure Access, and others through certified integrations — satisfy Entra ID multi-factor authentication requirements. For organizations that standardized on a non-Microsoft MFA stack years ago, this removes a long-running tension between Entra Conditional Access enforcement and operational reality.',
      nl: 'External authentication methods in Microsoft Entra ID is nu algemeen beschikbaar onder de nieuwe naam External MFA. De capability laat je bestaande MFA-provider — Duo, Okta Verify, RSA SecurID, Cisco Secure Access en anderen via gecertificeerde integraties — voldoen aan Entra ID multi-factor authentication-vereisten. Voor organisaties die jaren geleden op een niet-Microsoft MFA-stack standaardiseerden, neemt dit een lang lopende spanning weg tussen Entra Conditional Access-handhaving en operationele werkelijkheid.'
    },
    sections: [
      {
        title: {
          en: 'What was actually broken before',
          nl: 'Wat was er vroeger echt kapot'
        },
        content: {
          en: 'Until External MFA, organizations using a third-party MFA provider had two options. Option one: federate Active Directory and let the third-party MFA happen on the federation side, accepting the loss of all the modern Entra capabilities (passwordless, Conditional Access policy granularity, ID Protection signals). Option two: rip and replace to Microsoft Authenticator, which often meant retraining tens of thousands of users and decommissioning a working investment. Neither option felt right, so most organizations stalled.',
          nl: 'Tot External MFA hadden organisaties met een third-party MFA-provider twee opties. Optie één: federeer Active Directory en laat third-party MFA gebeuren aan de federatie-kant, met verlies van alle moderne Entra-capabilities (passwordless, Conditional Access policy-granulariteit, ID Protection-signalen). Optie twee: rip-and-replace naar Microsoft Authenticator, wat vaak inhield tienduizenden gebruikers omscholen en een werkende investering uitfaseren. Geen van beide voelde goed, dus de meeste organisaties stagneerden.'
        }
      },
      {
        title: {
          en: 'How External MFA works at runtime',
          nl: 'Hoe External MFA werkt tijdens runtime'
        },
        content: {
          en: 'When a user hits a Conditional Access policy that requires MFA, Entra ID redirects to your configured external provider through a standardized flow. The provider performs the MFA challenge — push notification, hardware token, biometric, whatever you have configured — and returns a signed assertion. Entra ID accepts the assertion as satisfying the MFA requirement and continues the original sign-in. To the user, it looks like a single sign-in flow with their existing MFA app. To the audit log, the External MFA event is recorded with the provider name.',
          nl: 'Wanneer een gebruiker tegen een Conditional Access-policy aanloopt die MFA vereist, redirect Entra ID naar je geconfigureerde externe provider via een gestandaardiseerd flow. De provider voert de MFA-challenge uit — push notification, hardware token, biometric, wat dan ook — en stuurt een getekende assertion terug. Entra ID accepteert de assertion als voldoening aan de MFA-vereiste en zet de oorspronkelijke sign-in voort. Voor de gebruiker ziet het eruit als één sign-in flow met de bestaande MFA-app. In de audit log wordt het External MFA-event geregistreerd met de provider-naam.'
        }
      },
      {
        title: {
          en: 'The strong-authentication caveat',
          nl: 'De sterke-authenticatie-caveat'
        },
        content: {
          en: 'External MFA satisfies the standard MFA requirement, but Entra ID has a separate concept called authentication strength used by some Conditional Access scenarios — phishing-resistant, hardware-backed, certificate-based. Not every external provider implements every strength. Before assuming External MFA solves your scenario, check whether the Conditional Access policies you depend on require a strength your external provider supports. The list of certified providers and their strength claims is published in Entra docs and updated regularly.',
          nl: 'External MFA voldoet aan de standaard MFA-vereiste, maar Entra ID heeft een apart concept genaamd authentication strength dat door sommige Conditional Access-scenarios wordt gebruikt — phishing-resistant, hardware-backed, certificate-based. Niet elke externe provider implementeert elke strength. Controleer voordat je aanneemt dat External MFA jouw scenario oplost of de Conditional Access-policies waar je op leunt een strength vereisen die je externe provider ondersteunt. De lijst met gecertificeerde providers en hun strength-claims staat in Entra-docs en wordt regelmatig bijgewerkt.'
        }
      },
      {
        title: {
          en: 'When to actually use it (and when to migrate anyway)',
          nl: 'Wanneer je het echt gebruikt (en wanneer je toch migreert)'
        },
        content: {
          en: 'Use External MFA when: you have a working third-party MFA investment, your users know it, and the operational cost of switching outweighs the benefit. Migrate to Microsoft Authenticator anyway when: you want passkeys natively integrated with Entra ID Protection, your third-party provider does not support phishing-resistant strength, or your contract renewal makes the financial case obvious. The new option is a permission to stay, not a recommendation to never move.',
          nl: 'Gebruik External MFA als: je een werkende third-party MFA-investering hebt, je gebruikers die kennen, en de operationele kosten van wisselen zwaarder wegen dan de baten. Migreer toch naar Microsoft Authenticator als: je passkeys native geïntegreerd wilt met Entra ID Protection, je third-party provider geen phishing-resistant strength ondersteunt, of je contractverlenging de financiële case voor de hand laat liggen. De nieuwe optie is toestemming om te blijven, geen advies om nooit te bewegen.'
        }
      }
    ],
    conclusion: {
      en: 'External MFA GA solves a real and long-standing pain point for organizations with a non-Microsoft MFA stack. Verify your provider is certified and supports the authentication strengths you need, configure it in the Authentication Methods policy, and you can leave a working MFA investment in place while still enforcing modern Conditional Access. For most enterprise environments, this is one of the more impactful Entra changes of the year.',
      nl: 'External MFA GA lost een echte, lang bestaande pijn op voor organisaties met een niet-Microsoft MFA-stack. Verifieer dat je provider gecertificeerd is en de authentication strengths ondersteunt die je nodig hebt, configureer het in het Authentication Methods-beleid, en je kunt een werkende MFA-investering laten staan terwijl je nog steeds moderne Conditional Access handhaaft. Voor de meeste enterprise-omgevingen is dit een van de impactvollere Entra-veranderingen van het jaar.'
    }
  }
};
