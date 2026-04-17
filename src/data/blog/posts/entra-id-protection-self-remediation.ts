import type { BlogPost } from '../types';

export const entraIdProtectionSelfRemediationPost: BlogPost = {
  id: 'entra-id-protection-self-remediation',
  title: {
    en: 'Entra ID Protection: Automatic Self-Remediation for Risky Sign-Ins Hits GA',
    nl: 'Entra ID Protection: automatische self-remediation voor risicovolle sign-ins is GA'
  },
  description: {
    en: 'Adaptive risk remediation in Entra ID Protection now lets passwordless and password-based users recover from a risky sign-in without a help-desk ticket. Here is how to roll it out without losing visibility.',
    nl: 'Adaptive risk remediation in Entra ID Protection laat passwordless en password-gebruikers nu herstellen van een risicovolle sign-in zonder helpdesk-ticket. Zo rol je het uit zonder zicht kwijt te raken.'
  },
  date: '2026-04-09',
  author: 'Yair Knijn',
  tags: ['Microsoft Entra', 'Identity Protection', 'Passwordless', 'Conditional Access', 'Security'],
  image: '/images/pexels/pexels-cyber-security-concept.jpg',
  excerpt: {
    en: 'The friction of "sign-in flagged risky → user calls help desk → help desk resets" was the last big argument against passwordless rollouts at scale. With self-remediation GA, that argument loses most of its weight.',
    nl: 'De wrijving van "sign-in als risicovol gemarkeerd → gebruiker belt helpdesk → helpdesk reset" was het laatste grote argument tegen passwordless-uitrol op schaal. Met self-remediation GA verliest dat argument het grootste deel van zijn gewicht.'
  },
  category: {
    en: 'Identity & Security',
    nl: 'Identity & Security'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Entra ID Protection now supports automatic self-remediation across all authentication methods — both passwordless and the ones that still use passwords — generally available since April 2026. The change is small in the docs and big in operations: when a user hits a risky-sign-in flag, they can now resolve it themselves through a stronger MFA challenge or passkey ceremony, without a help-desk ticket. For organizations that have been blocked on rolling out passwordless because of the support overhead, this is the unlock.',
      nl: 'Entra ID Protection ondersteunt nu automatische self-remediation voor alle authenticatie-methoden — passwordless en de varianten die nog wachtwoorden gebruiken — algemeen beschikbaar sinds april 2026. De verandering is klein in de docs en groot in operations: als een gebruiker een risky-sign-in-flag raakt, kan hij of zij dat nu zelf oplossen via een sterkere MFA-challenge of passkey-ceremonie, zonder helpdesk-ticket. Voor organisaties die op passwordless-uitrol stilstonden door de support-overhead is dit de ontgrendeling.'
    },
    sections: [
      {
        title: {
          en: 'What changed and what stayed the same',
          nl: 'Wat is veranderd en wat is hetzelfde gebleven'
        },
        content: {
          en: 'The risk detection engine is unchanged: same signals (impossible travel, anonymous IP, leaked credentials, atypical location, password spray patterns) fed by the same telemetry. What is new is the remediation path. Previously, password-based users could self-remediate by changing their password, while passwordless users hit a wall and had to call IT. Now both paths exist for both populations: a strong MFA challenge proves it is actually them, the risk is cleared, and the audit trail records who did what.',
          nl: 'De risico-detectie-engine is ongewijzigd: dezelfde signalen (impossible travel, anonymous IP, gelekte credentials, atypische locatie, password spray-patronen) gevoed door dezelfde telemetrie. Wat nieuw is, is het remediation-pad. Vroeger konden password-gebruikers zelf remediëren door hun wachtwoord te wijzigen, passwordless-gebruikers liepen tegen een muur en moesten IT bellen. Nu bestaan beide paden voor beide populaties: een sterke MFA-challenge bewijst dat het inderdaad de gebruiker is, het risico wordt opgeruimd en de audit trail legt vast wie wat deed.'
        }
      },
      {
        title: {
          en: 'How to enable it without surprises',
          nl: 'Hoe je het aanzet zonder verrassingen'
        },
        content: {
          en: 'Self-remediation is wired into your existing risk-based Conditional Access policies. If you have a policy that requires MFA on sign-in risk medium or above, the self-remediation flow already activates when the user satisfies the MFA challenge with a strong method. The trap to avoid: weak MFA methods (SMS, voice call) do not count as strong-enough remediation for high-risk events. Either upgrade your tenant to require Authenticator or passkeys, or accept that high-risk events still page IT.',
          nl: 'Self-remediation is ingebouwd in je bestaande risk-based Conditional Access-policies. Heb je een policy die MFA vereist op sign-in risk medium of hoger, dan activeert de self-remediation flow al zodra de gebruiker de MFA-challenge met een sterke methode voltooit. De val om te vermijden: zwakke MFA-methoden (SMS, voice call) tellen niet als sterk genoeg voor high-risk events. Upgrade je tenant naar Authenticator of passkeys vereisen, of accepteer dat high-risk events nog steeds bij IT terechtkomen.'
        },
        code: {
          language: 'json',
          code: `// Conditional Access policy snippet — risk-based with strong MFA required
{
  "displayName": "CA: Risky sign-in requires strong MFA",
  "conditions": {
    "signInRiskLevels": ["medium", "high"],
    "users": { "includeUsers": ["All"] }
  },
  "grantControls": {
    "operator": "AND",
    "builtInControls": ["mfa"],
    "authenticationStrength": {
      "id": "phishing-resistant"
    }
  }
}`
        }
      },
      {
        title: {
          en: 'What the help desk metrics will show',
          nl: 'Wat de helpdesk-metrics zullen tonen'
        },
        content: {
          en: 'Expect a measurable drop in identity-related tickets within the first month — most teams report 30 to 60 percent fewer help-desk calls for "I cannot sign in". The risky-sign-in events themselves do not decrease (the engine is unchanged), but the manual handling does. Track this through your ITSM tool with a tag on identity-related tickets so you have a baseline before and after — that data is useful for the next budget conversation.',
          nl: 'Verwacht een meetbare daling in identity-gerelateerde tickets in de eerste maand — de meeste teams melden 30 tot 60 procent minder helpdesk-calls voor "ik kan niet inloggen". De risky-sign-in events zelf nemen niet af (de engine is ongewijzigd), maar de handmatige afhandeling wel. Volg dit in je ITSM-tool met een tag op identity-gerelateerde tickets zodat je een baseline hebt voor en na — die data is nuttig voor het volgende budgetgesprek.'
        }
      },
      {
        title: {
          en: 'When you still want a human in the loop',
          nl: 'Wanneer je toch een mens in de loop wilt'
        },
        content: {
          en: 'Self-remediation is not the right answer for every event. Privileged accounts, accounts in scope for SOC investigation, and accounts with confirmed compromise from a parallel signal (Defender for Identity, third-party SIEM correlation) should still hit a human. Use Conditional Access exclusions or a dedicated policy for these populations — same mechanism, opposite outcome. The new feature does not force one model on you.',
          nl: 'Self-remediation is niet het juiste antwoord voor elk event. Privileged accounts, accounts in scope voor SOC-onderzoek en accounts met bevestigde compromittering uit een parallel signaal (Defender for Identity, third-party SIEM-correlatie) moeten nog steeds bij een mens terechtkomen. Gebruik Conditional Access-exclusies of een aparte policy voor deze populaties — zelfde mechanisme, tegenovergesteld resultaat. De nieuwe feature dwingt geen één-model-voor-iedereen af.'
        }
      }
    ],
    conclusion: {
      en: 'Self-remediation GA removes the last operational excuse for staying on password-based MFA. Audit your Conditional Access policies for authentication strength, exclude your privileged accounts from automatic remediation, and tag your help-desk tickets so you can prove the impact in the first quarter. Most identity teams will save real budget here — and the security posture goes up at the same time, which is a rare combination.',
      nl: 'Self-remediation GA neemt het laatste operationele excuus weg om op password-based MFA te blijven. Audit je Conditional Access-policies op authentication strength, sluit je privileged accounts uit van automatische remediation, en tag je helpdesk-tickets zodat je de impact in het eerste kwartaal kunt aantonen. De meeste identity-teams besparen hier echt budget — en de security-posture gaat tegelijk omhoog, wat een zeldzame combinatie is.'
    }
  }
};
