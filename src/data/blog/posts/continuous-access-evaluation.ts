import type { BlogPost } from '../types';

export const continuousAccessEvaluationPost: BlogPost = {
  id: 'continuous-access-evaluation-entra-id',
  title: {
    en: 'Continuous Access Evaluation: Near Real-Time Token Revocation in Entra ID',
    nl: 'Continuous Access Evaluation: Bijna Real-Time Token Intrekking in Entra ID'
  },
  description: {
    en: 'How Continuous Access Evaluation closes the token lifetime gap — critical events, claims challenges, long-lived tokens, and what CAE does and does not cover.',
    nl: 'Hoe Continuous Access Evaluation de token-levensduurkloof dicht — kritieke events, claims challenges, langlevende tokens en wat CAE wel en niet dekt.'
  },
  date: '2026-02-20',
  author: 'Yair Knijn',
  tags: ['Entra ID', 'CAE', 'Security', 'Conditional Access', 'Zero Trust'],
  image: '/images/unsplash/zero-trust-security-model.jpg',
  excerpt: {
    en: 'Disabling a user account used to take up to an hour to actually block access. Continuous Access Evaluation makes it near-instant for supported Microsoft 365 services.',
    nl: 'Het uitschakelen van een gebruikersaccount duurde voorheen tot een uur voordat de toegang daadwerkelijk geblokkeerd was. Continuous Access Evaluation maakt het bijna direct voor ondersteunde Microsoft 365-services.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'In the standard OAuth 2.0 model, once a client receives an access token, it can use that token until it expires — typically one hour. If you disable a user account, change their password, or revoke their sessions, the existing access token remains valid until its natural expiry. For security incidents, that one-hour window is unacceptable. Continuous Access Evaluation (CAE) addresses this by creating a communication channel between Entra ID and resource providers like Exchange Online and SharePoint Online. When a critical security event occurs, the resource provider is notified and can reject the token immediately, rather than waiting for expiry.',
      nl: 'In het standaard OAuth 2.0-model kan een client, zodra het een access token heeft ontvangen, dat token gebruiken totdat het verloopt — doorgaans één uur. Als je een gebruikersaccount uitschakelt, het wachtwoord wijzigt of de sessies intrekt, blijft het bestaande access token geldig tot het natuurlijk verloopt. Voor beveiligingsincidenten is dat venster van één uur onacceptabel. Continuous Access Evaluation (CAE) pakt dit aan door een communicatiekanaal te creëren tussen Entra ID en resource providers zoals Exchange Online en SharePoint Online. Wanneer een kritiek beveiligingsevent optreedt, wordt de resource provider genotificeerd en kan het het token onmiddellijk weigeren, in plaats van te wachten op verloop.'
    },
    sections: [
      {
        title: {
          en: 'Critical Event Evaluation',
          nl: 'Kritieke Event Evaluatie'
        },
        content: {
          en: 'CAE responds to a specific set of critical events that Entra ID pushes to resource providers. When a user account is disabled or deleted, the resource provider is notified within minutes and rejects subsequent requests with that token. Password change and password reset events trigger the same near-instant revocation. When an admin explicitly revokes all refresh tokens for a user (via the Entra portal or Graph API\'s revokeSignInSessions), CAE-aware resource providers invalidate existing access tokens. MFA registration changes — such as a user adding or removing an authentication method — are also propagated. Finally, if Entra ID Identity Protection detects a high-risk user event (like credentials found in a breach database), the resource provider can force re-authentication. The key phrase is "near real-time" rather than "instant" — propagation typically takes 1 to 15 minutes depending on the event type and the resource provider\'s polling interval.',
          nl: 'CAE reageert op een specifieke set kritieke events die Entra ID naar resource providers pusht. Wanneer een gebruikersaccount wordt uitgeschakeld of verwijderd, wordt de resource provider binnen minuten genotificeerd en weigert het daaropvolgende verzoeken met dat token. Wachtwoordwijziging- en wachtwoordreset-events triggeren dezelfde bijna directe intrekking. Wanneer een beheerder expliciet alle refresh tokens voor een gebruiker intrekt (via de Entra-portal of Graph API\'s revokeSignInSessions), ongeldig maken CAE-bewuste resource providers bestaande access tokens. MFA-registratiewijzigingen — zoals een gebruiker die een authenticatiemethode toevoegt of verwijdert — worden ook doorgegeven. Tot slot, als Entra ID Identity Protection een hoog-risico gebruikersevent detecteert (zoals credentials gevonden in een inbreukdatabase), kan de resource provider herauthenticatie afdwingen. De kernterm is "bijna real-time" in plaats van "direct" — propagatie duurt doorgaans 1 tot 15 minuten afhankelijk van het eventtype en het polling-interval van de resource provider.'
        }
      },
      {
        title: {
          en: 'Conditional Access Policy Evaluation and IP Enforcement',
          nl: 'Conditional Access Beleid Evaluatie en IP-handhaving'
        },
        content: {
          en: 'Beyond critical events, CAE enables near real-time enforcement of location-based Conditional Access policies. In the traditional model, a user could authenticate from a trusted office IP, receive a token, then move to an untrusted network and continue using the token for its remaining lifetime. With CAE, resource providers evaluate the client\'s IP address on each request and compare it against the named locations defined in your Conditional Access policies. If the IP changes to an untrusted location, the resource provider returns a 401 with a claims challenge, forcing the client to re-authenticate through Entra ID, which then re-evaluates all Conditional Access policies. This is particularly important for organizations that rely on IP-based trust boundaries — VPN disconnections or network changes are caught in near real-time instead of after the token expires.',
          nl: 'Naast kritieke events maakt CAE bijna real-time handhaving van locatiegebaseerde Conditional Access-beleidsregels mogelijk. In het traditionele model kon een gebruiker authenticeren vanaf een vertrouwd kantoor-IP, een token ontvangen en vervolgens naar een onvertrouwd netwerk verhuizen en het token blijven gebruiken voor de resterende levensduur. Met CAE evalueren resource providers het IP-adres van de client bij elk verzoek en vergelijken het met de benoemde locaties die in je Conditional Access-beleidsregels zijn gedefinieerd. Als het IP wijzigt naar een onvertrouwde locatie, retourneert de resource provider een 401 met een claims challenge, waardoor de client gedwongen wordt opnieuw te authenticeren via Entra ID, dat vervolgens alle Conditional Access-beleidsregels opnieuw evalueert. Dit is bijzonder belangrijk voor organisaties die vertrouwen op IP-gebaseerde vertrouwensgrenzen — VPN-verbroken verbindingen of netwerkwijzigingen worden bijna real-time opgevangen in plaats van na tokenverloop.'
        }
      },
      {
        title: {
          en: 'Long-Lived Tokens and the Claims Challenge Mechanism',
          nl: 'Langlevende Tokens en het Claims Challenge Mechanisme'
        },
        content: {
          en: 'CAE-enabled access tokens have extended lifetimes of up to 28 hours, compared to the default 60-75 minutes. This sounds counterintuitive — longer-lived tokens seem less secure. But because CAE provides continuous validation, the longer lifetime reduces the frequency of token refresh calls without sacrificing security. The mechanism that makes this work is the claims challenge. When a resource provider determines that a token should no longer be valid (due to a critical event or policy change), it returns an HTTP 401 response with a WWW-Authenticate header containing a claims parameter. The MSAL client library detects this claims challenge, bypasses its token cache, and requests a new token from Entra ID with the additional claims requirement. If the user can satisfy the re-authentication (e.g., they still have valid credentials and meet Conditional Access requirements), they get a new token seamlessly. If not — because their account was disabled or their password was changed — authentication fails. Your application code must use MSAL and handle the claims challenge response; raw HTTP token requests will not trigger this flow automatically.',
          nl: 'CAE-ingeschakelde access tokens hebben verlengde levensduren van maximaal 28 uur, vergeleken met de standaard 60-75 minuten. Dit klinkt contra-intuïtief — langlevende tokens lijken minder veilig. Maar omdat CAE continue validatie biedt, vermindert de langere levensduur de frequentie van token refresh-aanroepen zonder beveiliging op te offeren. Het mechanisme dat dit mogelijk maakt is de claims challenge. Wanneer een resource provider bepaalt dat een token niet langer geldig zou moeten zijn (vanwege een kritiek event of beleidswijziging), retourneert het een HTTP 401-respons met een WWW-Authenticate header die een claims-parameter bevat. De MSAL-clientbibliotheek detecteert deze claims challenge, omzeilt de tokencache en vraagt een nieuw token aan bij Entra ID met de aanvullende claims-vereiste. Als de gebruiker aan de herauthenticatie kan voldoen (bijv. ze hebben nog geldige credentials en voldoen aan Conditional Access-vereisten), krijgen ze naadloos een nieuw token. Zo niet — omdat hun account is uitgeschakeld of hun wachtwoord is gewijzigd — faalt de authenticatie. Je applicatiecode moet MSAL gebruiken en de claims challenge-respons afhandelen; ruwe HTTP-tokenverzoeken triggeren deze flow niet automatisch.'
        }
      },
      {
        title: {
          en: 'Supported Services and What CAE Does Not Cover',
          nl: 'Ondersteunde Services en Wat CAE Niet Dekt'
        },
        content: {
          en: 'CAE is currently supported by Exchange Online, SharePoint Online, Teams, and Microsoft Graph. These are the resource providers that participate in the bidirectional channel with Entra ID. Third-party applications and custom APIs do not benefit from CAE unless they implement the claims challenge protocol themselves. Several scenarios have delayed or no CAE enforcement: group membership changes can take up to one day to propagate because Entra does not emit a critical event for every group change. Guest (B2B) users are not supported — CAE only works for member users in the home tenant. If you use coauthoring in SharePoint or Office apps, active sessions have a grace period of up to 10 minutes after a critical event to allow saving work before access is revoked. Shared computer activation scenarios in Microsoft 365 Apps also have delayed enforcement. CAE has two enforcement modes: Standard (default) enables critical event evaluation; Strict mode adds IP-based Conditional Access enforcement. Strict mode requires that all client applications support CAE — enabling it with legacy clients that do not handle claims challenges will result in access failures.',
          nl: 'CAE wordt momenteel ondersteund door Exchange Online, SharePoint Online, Teams en Microsoft Graph. Dit zijn de resource providers die deelnemen aan het bidirectionele kanaal met Entra ID. Applicaties van derden en custom API\'s profiteren niet van CAE tenzij ze het claims challenge-protocol zelf implementeren. Diverse scenario\'s hebben vertraagde of geen CAE-handhaving: groepslidmaatschapswijzigingen kunnen tot één dag duren om te propageren omdat Entra geen kritiek event uitstuurt voor elke groepswijziging. Gastgebruikers (B2B) worden niet ondersteund — CAE werkt alleen voor lidgebruikers in de thuistenant. Als je co-authoring gebruikt in SharePoint of Office-apps, hebben actieve sessies een respijtperiode van maximaal 10 minuten na een kritiek event om werk op te slaan voordat toegang wordt ingetrokken. Gedeelde computeractiveringsscenario\'s in Microsoft 365 Apps hebben ook vertraagde handhaving. CAE heeft twee handhavingsmodi: Standard (standaard) activeert kritieke event-evaluatie; Strict modus voegt IP-gebaseerde Conditional Access-handhaving toe. Strict modus vereist dat alle clientapplicaties CAE ondersteunen — het inschakelen met legacy clients die geen claims challenges afhandelen resulteert in toegangsfouten.'
        }
      },
      {
        title: {
          en: 'Enabling CAE and Verifying It Works',
          nl: 'CAE Inschakelen en Verifiëren dat het Werkt'
        },
        content: {
          en: 'CAE is enabled by default for tenants with Entra ID P1 or P2 licensing — you do not need to turn it on. However, you can disable it per Conditional Access policy by setting the session control "Customize continuous access evaluation" to Disabled. To verify CAE is active for a specific sign-in, check the Entra sign-in logs. Look for the "Is CAE Token" column or filter on it — CAE-enabled sign-ins show "True" in this field. You can also decode the access token at jwt.ms and look for the xms_cc claim with a value of "cp1" (client supports claims challenge protocol version 1). If this claim is absent, the client did not advertise CAE support and received a standard short-lived token. For testing critical event enforcement, disable a test user account, wait 2-5 minutes, then verify that existing sessions to Exchange Online or SharePoint Online are terminated. If the session persists beyond 15 minutes, check that the application is a CAE-supported resource and the client supports claims challenges.',
          nl: 'CAE is standaard ingeschakeld voor tenants met Entra ID P1- of P2-licenties — je hoeft het niet aan te zetten. Je kunt het echter per Conditional Access-beleid uitschakelen door de sessiebeheerinstelling "Customize continuous access evaluation" op Disabled te zetten. Om te verifiëren dat CAE actief is voor een specifieke aanmelding, controleer je de Entra sign-in logs. Zoek naar de kolom "Is CAE Token" of filter erop — CAE-ingeschakelde aanmeldingen tonen "True" in dit veld. Je kunt ook het access token decoderen op jwt.ms en zoeken naar de xms_cc-claim met de waarde "cp1" (client ondersteunt claims challenge protocol versie 1). Als deze claim ontbreekt, heeft de client geen CAE-ondersteuning geadverteerd en een standaard kortlevend token ontvangen. Voor het testen van kritieke event-handhaving schakel je een testgebruikersaccount uit, wacht je 2-5 minuten en verifieer je dat bestaande sessies naar Exchange Online of SharePoint Online worden beëindigd. Als de sessie langer dan 15 minuten aanhoudt, controleer dan of de applicatie een CAE-ondersteunde resource is en of de client claims challenges ondersteunt.'
        }
      }
    ],
    conclusion: {
      en: 'CAE is one of the most impactful security improvements in Entra ID because it addresses a fundamental weakness in OAuth token-based authentication: the gap between a security event and its enforcement. For the supported Microsoft 365 services, critical events like account disablement and password changes are enforced in minutes rather than waiting up to an hour. The trade-off — longer-lived tokens, MSAL dependency, limited third-party support — is manageable for most organizations. Verify CAE is active in your sign-in logs and consider enabling Strict mode if your client ecosystem fully supports claims challenges.',
      nl: 'CAE is een van de meest impactvolle beveiligingsverbeteringen in Entra ID omdat het een fundamentele zwakte in OAuth token-gebaseerde authenticatie aanpakt: de kloof tussen een beveiligingsevent en de handhaving ervan. Voor de ondersteunde Microsoft 365-services worden kritieke events zoals accountuitschakeling en wachtwoordwijzigingen in minuten afgedwongen in plaats van tot een uur te wachten. De afweging — langlevende tokens, MSAL-afhankelijkheid, beperkte ondersteuning van derden — is beheersbaar voor de meeste organisaties. Verifieer dat CAE actief is in je sign-in logs en overweeg Strict modus in te schakelen als je clientecosysteem claims challenges volledig ondersteunt.'
    }
  }
};
