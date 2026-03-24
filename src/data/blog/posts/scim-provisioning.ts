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
  author: 'Yair Knijn',
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
      en: 'Creating user accounts by hand across ten SaaS apps does not last. At some point someone gets missed, someone leaves and keeps access for weeks, and the audit report looks ugly. Entra ID fixes this with SCIM 2.0 provisioning (RFC 7644) — a standardized REST API that pushes user lifecycle changes to target apps automatically. Fair warning though: the provisioning engine has its own scheduling, retry logic, and quarantine behavior. It is not a simple sync. Knowing how it actually works under the hood will save you real debugging time.',
      nl: 'Handmatig gebruikersaccounts aanmaken in tien SaaS-apps houdt geen stand. Op een gegeven moment wordt iemand overgeslagen, vertrekt iemand en houdt wekenlang toegang, en het auditrapport ziet er niet fraai uit. Entra ID lost dit op met SCIM 2.0 provisioning (RFC 7644) — een gestandaardiseerde REST API die wijzigingen in de gebruikerslevenscyclus automatisch naar doel-apps pusht. Wees wel gewaarschuwd: de provisioning-engine heeft eigen scheduling, retry-logica en quarantinegedrag. Het is geen simpele sync. Weten hoe het onder de motorkap werkt bespaart je serieuze debugtijd.'
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
      en: 'SCIM provisioning works well once you get through the initial setup. The problem is that initial setup has a lot of places to go wrong: attribute mappings, scoping filters, matching rules. Most failures follow the same patterns though. Set up quarantine alerts so you catch problems early. Use on-demand provisioning to test individual users before turning on the full 40-minute cycle. And check the provisioning logs regularly — they show the exact HTTP requests and responses, which is way more useful than the portal error messages.',
      nl: 'SCIM provisioning werkt goed zodra je door de initigle setup heen bent. Het probleem is dat die initigle setup veel plekken heeft waar het mis kan gaan: attribuutmappings, scoping filters, matchingregels. De meeste fouten volgen echter dezelfde patronen. Stel quarantine-alerts in zodat je problemen vroeg opvangt. Gebruik on-demand provisioning om individuele gebruikers te testen voordat je de volledige 40-minutencyclus aanzet. En controleer de provisioning logs regelmatig — die tonen de exacte HTTP-verzoeken en -antwoorden, wat veel nuttiger is dan de foutmeldingen in de portal.'
    }
  }
};
