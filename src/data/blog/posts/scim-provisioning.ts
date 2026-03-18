import type { BlogPost } from '../types';

export const scimProvisioningPost: BlogPost = {
  id: 'scim-provisioning-entra-id',
  title: {
    en: 'SCIM Provisioning in Entra ID: How Automatic User Provisioning Actually Works',
    nl: 'SCIM Provisioning in Entra ID: Hoe Automatische Gebruikersprovisioning Echt Werkt'
  },
  description: {
    en: 'A deep dive into SCIM 2.0 provisioning with Microsoft Entra ID — sync cycles, attribute mappings, scoping filters, quarantine states, and how to troubleshoot common failures.',
    nl: 'Een diepgaande blik op SCIM 2.0 provisioning met Microsoft Entra ID — sync-cycli, attribuutmappings, scoping filters, quarantine-states en hoe je veelvoorkomende fouten oplost.'
  },
  date: '2026-03-17',
  author: 'Falk Krahl',
  tags: ['Entra ID', 'SCIM', 'Provisioning', 'Identity', 'Automation'],
  image: '/images/unsplash/identity-access-management.jpg',
  excerpt: {
    en: 'Entra ID provisioning uses the SCIM 2.0 protocol to push identity data to third-party apps. Here is how the sync engine works, what breaks, and how to fix it.',
    nl: 'Entra ID provisioning gebruikt het SCIM 2.0-protocol om identiteitsgegevens naar externe apps te pushen. Zo werkt de sync-engine, wat er misgaat en hoe je het oplost.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'Manual user account creation across SaaS applications does not scale. Microsoft Entra ID supports automatic provisioning through the SCIM 2.0 protocol (RFC 7644), which gives you a standardized REST API for creating, updating, and deleting user accounts in target systems. The provisioning service is not a simple directory sync — it is an event-driven engine with its own scheduling, retry logic, and failure isolation. Understanding how it actually works saves you hours of debugging when provisioning does not behave as expected.',
      nl: 'Handmatige gebruikersaanmaak over SaaS-applicaties schaalt niet. Microsoft Entra ID ondersteunt automatische provisioning via het SCIM 2.0-protocol (RFC 7644), dat je een gestandaardiseerde REST API biedt voor het aanmaken, bijwerken en verwijderen van gebruikersaccounts in doelsystemen. De provisioning-service is geen simpele directory-sync — het is een event-driven engine met eigen scheduling, retry-logica en foutisolatie. Begrijpen hoe het daadwerkelijk werkt bespaart je uren debugging wanneer provisioning niet doet wat je verwacht.'
    },
    sections: [
      {
        title: {
          en: 'The SCIM 2.0 Protocol and Entra ID\'s Provisioning Engine',
          nl: 'Het SCIM 2.0-protocol en de Provisioning Engine van Entra ID'
        },
        content: {
          en: 'SCIM (System for Cross-domain Identity Management) defines two core endpoints: /Users and /Groups. The target application exposes these endpoints, and Entra ID acts as the SCIM client that sends HTTP requests to them. During an initial cycle, Entra queries all users and groups in the target to build a baseline. Subsequent incremental cycles run every 40 minutes and only process changes detected since the last watermark. On-demand provisioning lets you trigger a single-user sync from the portal without waiting for the next cycle. For on-premises applications that do not expose a public SCIM endpoint, Microsoft provides the Entra provisioning agent — a lightweight Windows service you install in your network that creates an outbound connection to the Entra provisioning service, so no inbound firewall rules are needed.',
          nl: 'SCIM (System for Cross-domain Identity Management) definieert twee kern-endpoints: /Users en /Groups. De doelapplicatie stelt deze endpoints beschikbaar en Entra ID fungeert als de SCIM-client die HTTP-verzoeken ernaar stuurt. Tijdens een initiële cyclus bevraagt Entra alle gebruikers en groepen in het doelsysteem om een baseline op te bouwen. Daaropvolgende incrementele cycli draaien elke 40 minuten en verwerken alleen wijzigingen die zijn gedetecteerd sinds het laatste watermark. On-demand provisioning laat je een sync voor één gebruiker triggeren vanuit de portal zonder te wachten op de volgende cyclus. Voor on-premises applicaties die geen publiek SCIM-endpoint hebben, biedt Microsoft de Entra provisioning agent — een lichtgewicht Windows-service die je in je netwerk installeert en die een uitgaande verbinding maakt naar de Entra provisioning-service, zodat er geen inkomende firewallregels nodig zijn.'
        }
      },
      {
        title: {
          en: 'Required Attributes and the SCIM User Payload',
          nl: 'Vereiste Attributen en de SCIM User Payload'
        },
        content: {
          en: 'Every SCIM user resource must include a userName that is unique within the target system. Entra ID also sends externalId (mapped to the objectId by default), displayName, and active status. The attribute mapping configuration determines which Entra directory attributes map to which SCIM attributes. You can use direct mappings (1:1), constant values, or expression-based transformations using functions like SingleAppRoleAssignment(), Join(), Mid(), and Switch(). A common pitfall: if your target application requires an email in the userName field but your mapping sends the userPrincipalName, provisioning will succeed but users cannot log in because the identifier does not match what they expect.',
          nl: 'Elke SCIM-gebruikersresource moet een userName bevatten die uniek is binnen het doelsysteem. Entra ID stuurt ook externalId (standaard gemapt naar het objectId), displayName en active-status. De attribuutmapping-configuratie bepaalt welke Entra directory-attributen naar welke SCIM-attributen worden gemapt. Je kunt directe mappings (1:1), constante waarden of expressie-gebaseerde transformaties gebruiken met functies zoals SingleAppRoleAssignment(), Join(), Mid() en Switch(). Een veelvoorkomende valkuil: als je doelapplicatie een e-mail vereist in het userName-veld maar je mapping het userPrincipalName stuurt, slaagt provisioning maar kunnen gebruikers niet inloggen omdat de identifier niet overeenkomt met wat ze verwachten.'
        },
        code: {
          language: 'json',
          code: `{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "externalId": "a]1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "userName": "j.smith@contoso.com",
  "active": true,
  "displayName": "Jane Smith",
  "name": {
    "givenName": "Jane",
    "familyName": "Smith"
  },
  "emails": [
    {
      "value": "j.smith@contoso.com",
      "type": "work",
      "primary": true
    }
  ],
  "title": "Cloud Engineer",
  "department": "IT Operations"
}`
        }
      },
      {
        title: {
          en: 'Scoping Filters and Assignment-Based Provisioning',
          nl: 'Scoping Filters en Op Toewijzing Gebaseerde Provisioning'
        },
        content: {
          en: 'By default, Entra ID provisions only users and groups that are assigned to the enterprise application. You can switch to "Sync all users and groups" but this is rarely what you want in production — it increases cycle time and may provision accounts you did not intend. Scoping filters let you add additional conditions: only provision users where department equals "Engineering", or where the accountEnabled attribute is true. Filters support operators like EQUALS, NOT EQUALS, IS TRUE, IS FALSE, IS NOT NULL, and CONTAINS. Multiple filter groups are evaluated with OR logic; clauses within a group use AND logic. One detail that catches people: scoping filters are evaluated after attribute mapping, so the filter references the mapped SCIM attribute names, not the Entra source attributes.',
          nl: 'Standaard provisioneert Entra ID alleen gebruikers en groepen die zijn toegewezen aan de enterprise-applicatie. Je kunt overschakelen naar "Alle gebruikers en groepen synchroniseren" maar dit is zelden wat je wilt in productie — het verhoogt de cyclustijd en kan accounts provisioneren die je niet bedoelde. Scoping filters laten je extra condities toevoegen: alleen gebruikers provisioneren waar afdeling gelijk is aan "Engineering", of waar het accountEnabled-attribuut waar is. Filters ondersteunen operators zoals EQUALS, NOT EQUALS, IS TRUE, IS FALSE, IS NOT NULL en CONTAINS. Meerdere filtergroepen worden geëvalueerd met OR-logica; clausules binnen een groep gebruiken AND-logica. Een detail dat mensen verrast: scoping filters worden geëvalueerd na attribuutmapping, dus het filter verwijst naar de gemapte SCIM-attribuutnamen, niet de Entra-bronattributen.'
        }
      },
      {
        title: {
          en: 'Quarantine State and Common Provisioning Failures',
          nl: 'Quarantine-state en Veelvoorkomende Provisioning Fouten'
        },
        content: {
          en: 'When the provisioning service encounters a high error rate, it enters quarantine. In quarantine, the cycle frequency drops from every 40 minutes to once per day, which protects the target system from being hammered with failing requests. Common causes: the SCIM endpoint returns repeated 401/403 errors (expired credentials or rotated secrets), the target returns 409 Conflict because a user with that userName already exists, or a required attribute like externalId is missing from the mapping. Duplicate attribute errors (matching userName or email) are by far the most frequent issue. The fix is to either pre-match existing accounts using the matching attribute configuration or clean up duplicates in the target system. Provisioning logs in the Entra portal show the exact HTTP request and response for each operation, which makes debugging straightforward once you know where to look.',
          nl: 'Wanneer de provisioning-service een hoog foutpercentage tegenkomt, gaat het in quarantine. In quarantine daalt de cyclusfrequentie van elke 40 minuten naar eenmaal per dag, wat het doelsysteem beschermt tegen een stortvloed van falende verzoeken. Veelvoorkomende oorzaken: het SCIM-endpoint retourneert herhaaldelijk 401/403-fouten (verlopen credentials of geroteerde secrets), het doelsysteem retourneert 409 Conflict omdat een gebruiker met die userName al bestaat, of een vereist attribuut zoals externalId ontbreekt in de mapping. Dubbele attribuutfouten (overeenkomende userName of e-mail) zijn veruit het meest voorkomende probleem. De oplossing is om bestaande accounts vooraf te matchen met de matching-attribuutconfiguratie of duplicaten in het doelsysteem op te schonen. Provisioning logs in de Entra-portal tonen het exacte HTTP-verzoek en -antwoord voor elke operatie, wat debugging eenvoudig maakt zodra je weet waar je moet kijken.'
        }
      },
      {
        title: {
          en: 'Monitoring and Troubleshooting with Provisioning Logs',
          nl: 'Monitoring en Troubleshooting met Provisioning Logs'
        },
        content: {
          en: 'Provisioning logs are available in the Entra portal under Enterprise Applications > Provisioning > Provisioning logs. Each log entry shows the source user, the action taken (Create, Update, Disable, Delete), the target system response code, and the full attribute payload that was sent. You can filter by status (Success, Failure, Skipped), date range, and identity. For programmatic access, use the Microsoft Graph provisioningObjectSummary API at /auditLogs/provisioning. Set up Azure Monitor diagnostic settings to stream provisioning logs to a Log Analytics workspace for long-term retention and alerting. A practical alert to configure: trigger a notification when the provisioning job enters quarantine, so you catch credential expiry or endpoint issues before they block all user lifecycle operations.',
          nl: 'Provisioning logs zijn beschikbaar in de Entra-portal onder Enterprise Applications > Provisioning > Provisioning logs. Elke logvermelding toont de brongebruiker, de uitgevoerde actie (Create, Update, Disable, Delete), de responsecode van het doelsysteem en de volledige attribuut-payload die is verzonden. Je kunt filteren op status (Success, Failure, Skipped), datumbereik en identiteit. Voor programmatische toegang gebruik je de Microsoft Graph provisioningObjectSummary API op /auditLogs/provisioning. Stel Azure Monitor diagnostische instellingen in om provisioning logs te streamen naar een Log Analytics-workspace voor langetermijnopslag en alerting. Een praktisch alert om te configureren: trigger een notificatie wanneer de provisioningtaak in quarantine gaat, zodat je credential-verlopen of endpoint-problemen opvangt voordat ze alle gebruikerscyclus-operaties blokkeren.'
        }
      }
    ],
    conclusion: {
      en: 'SCIM provisioning in Entra ID is robust once configured correctly, but the initial setup has enough moving parts — attribute mappings, scoping filters, matching rules — that things go wrong in predictable ways. Check your provisioning logs regularly, set up quarantine alerts, and test with on-demand provisioning before enabling the full sync cycle. The 40-minute incremental cycle handles most scenarios, but understanding the underlying SCIM protocol helps you diagnose issues that the portal error messages do not explain clearly.',
      nl: 'SCIM provisioning in Entra ID is robuust zodra het correct is geconfigureerd, maar de initiële setup heeft genoeg bewegende delen — attribuutmappings, scoping filters, matchingregels — dat dingen op voorspelbare manieren misgaan. Controleer je provisioning logs regelmatig, stel quarantine-alerts in en test met on-demand provisioning voordat je de volledige sync-cyclus activeert. De 40-minuten incrementele cyclus dekt de meeste scenario\'s, maar begrip van het onderliggende SCIM-protocol helpt je bij het diagnosticeren van problemen die de foutmeldingen in de portal niet duidelijk uitleggen.'
    }
  }
};
