import type { BlogPost } from '../types';

export const claimsMappingPoliciesPost: BlogPost = {
  id: 'claims-mapping-policies-entra-id',
  title: {
    en: 'Claims Mapping Policies in Entra ID: Beyond Basic Token Configuration',
    nl: 'Claims Mapping Policies in Entra ID: Voorbij Basis Token Configuratie'
  },
  description: {
    en: 'How to use claims mapping policies in Microsoft Entra ID when optional claims are not enough — Graph API setup, transformation types, group claim filtering, and known limitations.',
    nl: 'Hoe je claims mapping policies in Microsoft Entra ID gebruikt wanneer optional claims niet genoeg zijn — Graph API-setup, transformatietypen, groepsclaim-filtering en bekende beperkingen.'
  },
  date: '2026-03-06',
  author: 'Yair Knijn',
  tags: ['Entra ID', 'Claims', 'Tokens', 'SAML', 'OIDC'],
  image: '/images/unsplash/compliance-governance-audit.jpg',
  excerpt: {
    en: 'Optional claims cover simple cases. When you need conditional logic, string transformations, or group filtering in your tokens, claims mapping policies are the tool — but they come with caveats.',
    nl: 'Optional claims dekken simpele gevallen. Wanneer je conditionele logica, stringtransformaties of groepsfiltering in je tokens nodig hebt, zijn claims mapping policies het instrument — maar ze komen met kanttekeningen.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Entra ID has two ways to customize what goes into your tokens. Optional claims — configured in the app manifest — cover the simple stuff: add email, add groups, done. But the moment you need conditional logic ("emit this claim only if the user is in department X") or string transformations, optional claims can\'t help you. That\'s where claims mapping policies come in. You define them through Microsoft Graph or PowerShell, they support transformations and conditional emission, and they attach to service principals, not app registrations. That last part trips people up constantly.',
      nl: 'Entra ID heeft twee manieren om aan te passen wat er in je tokens komt. Optional claims — geconfigureerd in het app-manifest — dekken het simpele werk: email toevoegen, groups toevoegen, klaar. Maar zodra je conditionele logica nodig hebt ("geef deze claim alleen als de gebruiker in afdeling X zit") of stringtransformaties, kunnen optional claims je niet helpen. Daar komen claims mapping policies om de hoek kijken. Je definieert ze via Microsoft Graph of PowerShell, ze ondersteunen transformaties en conditionele uitgifte, en ze koppelen aan service principals, niet aan app-registraties. Dat laatste deel laat mensen continu struikelen.'
    },
    sections: [
      {
        title: {
          en: 'Optional Claims vs Claims Mapping Policies',
          nl: 'Optional Claims vs Claims Mapping Policies'
        },
        content: {
          en: 'Optional claims are configured in the app registration manifest under the optionalClaims property. You pick from a predefined list (email, groups, upn, sid, etc.) and they get added to ID tokens, access tokens, or SAML tokens. No transformation, no conditional logic — just include or exclude. Claims mapping policies go further. You define a ClaimsSchema that specifies source attributes and output claim names, and optionally a ClaimsTransformation section with transformation pipelines. A single policy can be assigned to multiple service principals, making it reusable. However, there is a critical prerequisite: the service principal must have the acceptMappedClaims property set to true. For single-tenant applications, you set this in the app manifest. For multi-tenant applications, you need a custom signing key on the service principal instead, because acceptMappedClaims does not work for multi-tenant apps as a security measure.',
          nl: 'Optional claims worden geconfigureerd in het app-registratiemanifest onder de optionalClaims-property. Je kiest uit een voorgedefinieerde lijst (email, groups, upn, sid, etc.) en ze worden toegevoegd aan ID-tokens, access-tokens of SAML-tokens. Geen transformatie, geen conditionele logica — alleen opnemen of uitsluiten. Claims mapping policies gaan verder. Je definieert een ClaimsSchema dat bronattributen en output-claimnamen specificeert, en optioneel een ClaimsTransformation-sectie met transformatiepipelines. Een enkel beleid kan aan meerdere service principals worden toegewezen, waardoor het herbruikbaar is. Er is echter een kritische voorwaarde: de service principal moet de acceptMappedClaims-property op true hebben staan. Voor single-tenant applicaties stel je dit in het app-manifest in. Voor multi-tenant applicaties heb je in plaats daarvan een custom signing key op de service principal nodig, omdat acceptMappedClaims niet werkt voor multi-tenant apps als beveiligingsmaatregel.'
        }
      },
      {
        title: {
          en: 'Creating a Claims Mapping Policy with Microsoft Graph',
          nl: 'Een Claims Mapping Policy Aanmaken met Microsoft Graph'
        },
        content: {
          en: 'You create a claims mapping policy by POSTing to /policies/claimsMappingPolicies in Microsoft Graph. The policy definition is a JSON array serialized as a string inside the definition property. The ClaimsSchema array defines individual claim mappings: each entry has a Source (user, application, resource, or transformation), an ID (the source attribute name), and a JwtClaimType or SamlClaimType (the output claim name). After creating the policy, you assign it to a service principal by POSTing to /servicePrincipals/{id}/claimsMappingPolicies. One common mistake: creating the policy and forgetting to assign it. The policy exists but nothing changes in the tokens until it is linked to a service principal.',
          nl: 'Je maakt een claims mapping policy door te POSTen naar /policies/claimsMappingPolicies in Microsoft Graph. De beleidsdefinitie is een JSON-array geserialiseerd als string in de definition-property. De ClaimsSchema-array definieert individuele claimmappings: elk element heeft een Source (user, application, resource of transformation), een ID (de bronattribuutnaam) en een JwtClaimType of SamlClaimType (de output-claimnaam). Na het aanmaken van het beleid wijs je het toe aan een service principal door te POSTen naar /servicePrincipals/{id}/claimsMappingPolicies. Een veelgemaakte fout: het beleid aanmaken en vergeten het toe te wijzen. Het beleid bestaat maar er verandert niets in de tokens totdat het is gekoppeld aan een service principal.'
        },
        code: {
          language: 'json',
          code: `{
  "definition": [
    "{\\"ClaimsMappingPolicy\\":{\\"Version\\":1,\\"IncludeBasicClaimSet\\":\\"true\\",\\"ClaimsSchema\\":[{\\"Source\\":\\"user\\",\\"ID\\":\\"employeeid\\",\\"JwtClaimType\\":\\"employee_id\\"},{\\"Source\\":\\"user\\",\\"ID\\":\\"department\\",\\"JwtClaimType\\":\\"dept\\"},{\\"Source\\":\\"user\\",\\"ID\\":\\"onpremisessamaccountname\\",\\"JwtClaimType\\":\\"samaccount\\"}]}}"
  ],
  "displayName": "EmployeeClaimsPolicy",
  "isOrganizationDefault": false
}`
        }
      },
      {
        title: {
          en: 'Transformation Types and Pipelines',
          nl: 'Transformatietypen en Pipelines'
        },
        content: {
          en: 'Claims transformations let you modify attribute values before emitting them. Each transformation has an input, an output, and a TransformationMethod. The supported methods: CreateStringFromClaims builds a string from multiple claim values with a configurable separator. Join concatenates two strings. RegexReplace applies a regex pattern and substitution. ToLower and ToUpper change casing. Contains checks if a string contains a substring and outputs one value if true, another if false — useful for conditional claims like "if department contains \'Engineering\' emit role=developer, else emit role=viewer". Transformations can be chained: the output of one becomes the input of the next. You reference transformations in ClaimsSchema by setting Source to "transformation" and the ID to the transformation output claim name. Keep your transformation pipelines short and test them — debugging a chain of three or four transformations from token output alone is tedious.',
          nl: 'Claimstransformaties laten je attribuutwaarden wijzigen voordat ze worden uitgegeven. Elke transformatie heeft een input, een output en een TransformationMethod. De ondersteunde methoden: CreateStringFromClaims bouwt een string op uit meerdere claimwaarden met een configureerbaar scheidingsteken. Join voegt twee strings samen. RegexReplace past een regex-patroon en substitutie toe. ToLower en ToUpper veranderen hoofdlettergebruik. Contains controleert of een string een substring bevat en geeft één waarde uit als waar, een andere als onwaar — handig voor conditionele claims zoals "als afdeling \'Engineering\' bevat, emit role=developer, anders emit role=viewer". Transformaties kunnen worden geschakeld: de output van de ene wordt de input van de volgende. Je verwijst naar transformaties in ClaimsSchema door Source op "transformation" te zetten en het ID op de transformatie-output-claimnaam. Houd je transformatiepipelines kort en test ze — het debuggen van een keten van drie of vier transformaties vanuit alleen tokenoutput is omslachtig.'
        }
      },
      {
        title: {
          en: 'Group Claims and Token Size Management',
          nl: 'Groepsclaims en Tokenmaat Beheer'
        },
        content: {
          en: 'Emitting group memberships in tokens is a frequent requirement but comes with a practical constraint: SAML tokens have a 150-group limit before Entra switches to emitting a groups overage claim (a URL pointing to the Graph API). JWT tokens hit the overage at 200 groups. For users with many group memberships, this means your application receives a link instead of actual group data and must call Graph to resolve it. Three strategies to manage this: first, configure the app to emit only groups assigned to the application rather than all group memberships. Second, use security groups instead of distribution lists and keep group structures flat. Third, consider emitting application roles instead of groups — roles are defined on the app registration and assigned to users or groups, and they always appear in the token without overage issues. For synced environments, you can emit the on-premises sAMAccountName or the onPremisesGroupSID attribute instead of object IDs, which makes the claims immediately usable by legacy on-premises applications.',
          nl: 'Het uitzenden van groepslidmaatschappen in tokens is een veelvoorkomende vereiste maar komt met een praktische beperking: SAML-tokens hebben een limiet van 150 groepen voordat Entra overschakelt naar het uitzenden van een groups overage claim (een URL die naar de Graph API wijst). JWT-tokens bereiken de overage bij 200 groepen. Voor gebruikers met veel groepslidmaatschappen betekent dit dat je applicatie een link ontvangt in plaats van daadwerkelijke groepsgegevens en Graph moet aanroepen om ze op te lossen. Drie strategieën om dit te beheren: ten eerste, configureer de app om alleen groepen uit te zenden die aan de applicatie zijn toegewezen in plaats van alle groepslidmaatschappen. Ten tweede, gebruik beveiligingsgroepen in plaats van distributielijsten en houd groepsstructuren plat. Ten derde, overweeg applicatierollen uit te zenden in plaats van groepen — rollen worden gedefinieerd op de app-registratie en toegewezen aan gebruikers of groepen, en ze verschijnen altijd in het token zonder overage-problemen. Voor gesynchroniseerde omgevingen kun je het on-premises sAMAccountName- of het onPremisesGroupSID-attribuut uitzenden in plaats van object-ID\'s, wat de claims direct bruikbaar maakt voor legacy on-premises applicaties.'
        }
      },
      {
        title: {
          en: 'Limitations and Gotchas',
          nl: 'Beperkingen en Valkuilen'
        },
        content: {
          en: 'Claims mapping policies have several limitations worth knowing upfront. They do not work with the implicit grant flow in MSAL.js — if your SPA uses implicit flow (which you should migrate away from anyway), the policy is silently ignored. Custom signing keys are required for multi-tenant apps, and configuring them is a separate Graph API operation that is not well-documented. Policies are cached, so changes can take up to an hour to take effect, or you need to trigger a new token request with a fresh login (not a cached token). There is no "test" mode — you create the policy, assign it, and inspect the resulting token at jwt.ms. If a claims mapping policy and optional claims conflict on the same claim name, the behavior is undefined and varies depending on the token type. Stick to one mechanism per claim to avoid surprises.',
          nl: 'Claims mapping policies hebben diverse beperkingen die je van tevoren moet kennen. Ze werken niet met de implicit grant flow in MSAL.js — als je SPA implicit flow gebruikt (waar je sowieso vanaf moet migreren), wordt het beleid stilzwijgend genegeerd. Custom signing keys zijn vereist voor multi-tenant apps, en het configureren ervan is een aparte Graph API-operatie die niet goed gedocumenteerd is. Policies worden gecachet, dus wijzigingen kunnen tot een uur duren om effect te hebben, of je moet een nieuw tokenverzoek triggeren met een verse login (niet een gecachet token). Er is geen "test"-modus — je maakt het beleid, wijst het toe en inspecteert het resulterende token op jwt.ms. Als een claims mapping policy en optional claims conflicteren op dezelfde claimnaam, is het gedrag ongedefinieerd en varieert het afhankelijk van het tokentype. Gebruik één mechanisme per claim om verrassingen te voorkomen.'
        }
      }
    ],
    conclusion: {
      en: 'Claims mapping policies sit in an awkward middle ground: more powerful than optional claims, but fiddly to debug and poorly documented in places. They\'re the right tool when you need transformations, conditional emission, or group filtering that the app manifest can\'t do. The workflow is always the same: set acceptMappedClaims (or add a custom signing key for multi-tenant apps), create the policy via Graph, assign it to the service principal, then check the token at jwt.ms. Two things to remember: they don\'t work with implicit flow, and never mix optional claims and policy claims on the same attribute — the behavior is unpredictable.',
      nl: 'Claims mapping policies zitten in een ongemakkelijk tussengebied: krachtiger dan optional claims, maar lastig te debuggen en op plekken slecht gedocumenteerd. Ze zijn het juiste gereedschap wanneer je transformaties, conditionele uitgifte of groepsfiltering nodig hebt die het app-manifest niet aankan. De workflow is altijd hetzelfde: stel acceptMappedClaims in (of voeg een custom signing key toe voor multi-tenant apps), maak het beleid aan via Graph, wijs het toe aan de service principal, en controleer het token op jwt.ms. Twee dingen om te onthouden: ze werken niet met implicit flow, en meng nooit optional claims en beleidsclaims op hetzelfde attribuut — het gedrag is onvoorspelbaar.'
    }
  }
};
