import type { BlogPost } from '../types';

export const securityCopilotGaPost: BlogPost = {
  id: 'microsoft-security-copilot-ga',
  title: {
    en: 'Microsoft Security Copilot: AI-Powered Security Operations in Practice',
    nl: 'Microsoft Security Copilot: AI-Aangedreven Security Operations in de Praktijk'
  },
  description: {
    en: 'A practical look at Microsoft Security Copilot in production — how it integrates with Sentinel, Defender XDR, and Intune, the SCU pricing model, and what it actually does well versus where it falls short',
    nl: 'Een praktische blik op Microsoft Security Copilot in productie — hoe het integreert met Sentinel, Defender XDR en Intune, het SCU-prijsmodel, en wat het daadwerkelijk goed doet versus waar het tekortschiet'
  },
  date: '2026-01-20',
  author: 'Yair Knijn',
  tags: ['Security', 'Copilot', 'AI', 'Microsoft Sentinel', 'SOC'],
  image: '/images/unsplash/threat-detection-monitoring.jpg',
  excerpt: {
    en: 'Microsoft Security Copilot promises to transform SOC operations with AI. After working with it in production environments, here is an honest assessment of what it delivers — from instant KQL generation to incident summarization — and where it still needs human expertise.',
    nl: 'Microsoft Security Copilot belooft SOC-operaties te transformeren met AI. Na ermee te hebben gewerkt in productieomgevingen, volgt hier een eerlijke beoordeling van wat het levert — van directe KQL-generatie tot incidentsamenvatting — en waar het nog menselijke expertise nodig heeft.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 8,
  content: {
    introduction: {
      en: 'Security Copilot went GA in April 2024. The big question: does it actually help in a real SOC, or is it just another AI demo that falls apart in production? We have deployed it across multiple customer environments with Sentinel, Defender XDR, Intune, and Entra ID. The honest answer is somewhere in between. It is genuinely good at incident triage, KQL generation, and threat intel lookups. It is not replacing your Tier 2 analysts. Before you commit SCUs to your budget, you should know exactly where it delivers and where it does not.',
      nl: 'Security Copilot werd GA in april 2024. De grote vraag: helpt het echt in een echte SOC, of is het gewoon weer een AI-demo die in productie uit elkaar valt? We hebben het uitgerold in meerdere klantomgevingen met Sentinel, Defender XDR, Intune en Entra ID. Het eerlijke antwoord zit ergens in het midden. Het is oprecht goed in incidenttriage, KQL-generatie en threat intel-lookups. Het vervangt je Tier 2-analisten niet. Voordat je SCU\'s in je budget opneemt, moet je precies weten waar het levert en waar niet.'
    },
    sections: [
      {
        title: {
          en: 'Integration Across the Microsoft Security Stack',
          nl: 'Integratie Over de Microsoft Security Stack'
        },
        content: {
          en: 'Security Copilot is embedded directly into Microsoft Sentinel, Defender XDR, Intune, and Entra ID — these are not separate tools but contextual AI assistance within the products you already use. In Sentinel, it appears as a copilot pane next to incidents, offering to summarize what happened, suggest investigation steps, and generate KQL queries. In Defender XDR, it can analyze attack chains across endpoints, email, identity, and cloud apps in a unified view. In Intune, it helps interpret device compliance issues and suggests remediation policies. In Entra ID, it can analyze risky sign-ins and explain why a Conditional Access policy blocked a user. The key advantage is that Security Copilot has access to all your Microsoft security data simultaneously — it can correlate a suspicious sign-in in Entra with a malware detection in Defender and an anomalous query in Sentinel to build a complete picture.',
          nl: 'Security Copilot is direct ingebed in Microsoft Sentinel, Defender XDR, Intune en Entra ID — dit zijn geen aparte tools maar contextuele AI-assistentie binnen de producten die je al gebruikt. In Sentinel verschijnt het als een copilot-paneel naast incidenten, met het aanbod om samen te vatten wat er is gebeurd, onderzoeksstappen voor te stellen en KQL-queries te genereren. In Defender XDR kan het aanvalsketens analyseren over endpoints, e-mail, identiteit en cloud-apps in een uniform overzicht. In Intune helpt het bij het interpreteren van apparaatcomplianceproblemen en stelt het herstelbeleid voor. In Entra ID kan het risicovolle aanmeldingen analyseren en uitleggen waarom een Conditional Access-beleid een gebruiker heeft geblokkeerd. Het belangrijkste voordeel is dat Security Copilot tegelijkertijd toegang heeft tot al je Microsoft-beveiligingsdata — het kan een verdachte aanmelding in Entra correleren met een malwaredetectie in Defender en een afwijkende query in Sentinel om een compleet beeld op te bouwen.'
        }
      },
      {
        title: {
          en: 'KQL Generation and Incident Summarization',
          nl: 'KQL-Generatie en Incidentsamenvatting'
        },
        content: {
          en: 'The two killer features in daily SOC work are natural language to KQL translation and incident summarization. For KQL, you describe what you are looking for in plain English — "show me all failed sign-in attempts from IP ranges outside the Netherlands in the last 24 hours" — and Security Copilot generates a working KQL query against your Sentinel workspace. It knows your table schemas and custom columns. For analysts who are not KQL experts, this is transformative. It removes the barrier between knowing what you need to find and being able to query for it. Incident summarization takes a complex, multi-alert incident with dozens of events and produces a readable narrative: what happened, which entities were involved, what the timeline was, and what the potential impact is. A Tier 1 analyst can read this summary and immediately understand whether to escalate. In environments processing hundreds of incidents daily, this alone justifies the investment.',
          nl: 'De twee killer features in het dagelijkse SOC-werk zijn natuurlijke taal naar KQL-vertaling en incidentsamenvatting. Voor KQL beschrijf je wat je zoekt in gewoon Nederlands — "toon me alle mislukte aanmeldpogingen van IP-bereiken buiten Nederland in de laatste 24 uur" — en Security Copilot genereert een werkende KQL-query tegen je Sentinel-workspace. Het kent je tabelschema\'s en aangepaste kolommen. Voor analisten die geen KQL-experts zijn, is dit transformatief. Het haalt de drempel weg tussen weten wat je moet vinden en ernaar kunnen zoeken. Incidentsamenvatting neemt een complex, multi-alert incident met tientallen events en maakt er een leesbaar verhaal van: wat er is gebeurd, welke entiteiten betrokken waren, wat de tijdlijn was en wat de potentiële impact is. Een Tier 1-analist kan deze samenvatting lezen en direct begrijpen of escalatie nodig is. In omgevingen die dagelijks honderden incidenten verwerken, rechtvaardigt dit alleen al de investering.'
        }
      },
      {
        title: {
          en: 'Threat Intelligence and Script Analysis',
          nl: 'Threat Intelligence en Scriptanalyse'
        },
        content: {
          en: 'Security Copilot connects to Microsoft Threat Intelligence to provide context on indicators of compromise. Paste in a suspicious IP address, file hash, or domain, and it returns known associations with threat actors, malware families, and campaigns. More impressively, it can analyze scripts — paste in an obfuscated PowerShell script found on a compromised endpoint and Security Copilot will deobfuscate it, explain what each section does, identify malicious behaviors, and map them to MITRE ATT&CK techniques. This script analysis capability genuinely accelerates malware investigation. What might take a junior analyst thirty minutes of manual deobfuscation takes seconds. The threat intelligence integration also works in reverse — you can ask it to generate hunting queries for specific threat actors or TTPs across your environment.',
          nl: 'Security Copilot verbindt met Microsoft Threat Intelligence om context te bieden over indicators of compromise. Plak een verdacht IP-adres, bestandshash of domein in, en het retourneert bekende associaties met dreigingsactoren, malwarefamilies en campagnes. Nog indrukwekkender is dat het scripts kan analyseren — plak een geobfusceerd PowerShell-script dat is gevonden op een gecompromitteerd endpoint in en Security Copilot zal het deobfusceren, uitleggen wat elke sectie doet, kwaadaardig gedrag identificeren en het mappen naar MITRE ATT&CK-technieken. Deze scriptanalysecapabiliteit versnelt malwareonderzoek daadwerkelijk. Wat een junior analist dertig minuten handmatige deobfuscatie zou kosten, duurt seconden. De threat intelligence-integratie werkt ook omgekeerd — je kunt vragen om hunting queries te genereren voor specifieke dreigingsactoren of TTP\'s in je omgeving.'
        }
      },
      {
        title: {
          en: 'Security Compute Units and Pricing Reality',
          nl: 'Security Compute Units en Prijsrealiteit'
        },
        content: {
          en: 'Security Copilot uses a capacity-based pricing model measured in Security Compute Units (SCUs). You provision SCUs in your Azure subscription, and every prompt, query, and analysis consumes a portion of that capacity. The minimum is one SCU, and you can scale up based on usage. The critical thing to understand is that complex prompts — like analyzing a large incident or deobfuscating a long script — consume more SCUs than simple lookups. Microsoft provides usage monitoring in the Security Copilot dashboard so you can track consumption patterns. Start with a small allocation, monitor actual usage for a month, and right-size from there. Most organizations find that having Security Copilot available on-demand for incident investigation is more cost-effective than running it for every alert. Promptbooks — reusable sequences of prompts for common investigation workflows — help standardize usage and make SCU consumption more predictable across your SOC team.',
          nl: 'Security Copilot gebruikt een capaciteitsgebaseerd prijsmodel gemeten in Security Compute Units (SCU\'s). Je provisioneert SCU\'s in je Azure-abonnement, en elke prompt, query en analyse verbruikt een deel van die capaciteit. Het minimum is één SCU, en je kunt opschalen op basis van gebruik. Het cruciale om te begrijpen is dat complexe prompts — zoals het analyseren van een groot incident of het deobfusceren van een lang script — meer SCU\'s verbruiken dan eenvoudige lookups. Microsoft biedt gebruiksmonitoring in het Security Copilot-dashboard zodat je consumptiepatronen kunt volgen. Begin met een kleine toewijzing, monitor het werkelijke gebruik een maand lang, en pas de grootte aan van daaruit. De meeste organisaties vinden dat Security Copilot on-demand beschikbaar hebben voor incidentonderzoek kosteneffectiever is dan het voor elke alert te draaien. Promptbooks — herbruikbare reeksen van prompts voor veelvoorkomende onderzoeksworkflows — helpen gebruik te standaardiseren en maken SCU-consumptie voorspelbaarder in je SOC-team.'
        }
      },
      {
        title: {
          en: 'Honest Limitations',
          nl: 'Eerlijke Beperkingen'
        },
        content: {
          en: 'Security Copilot is not replacing security analysts — it is augmenting them, and that distinction matters. It occasionally generates incorrect KQL syntax that requires manual fixing. Its incident summaries can miss subtle indicators that an experienced analyst would catch. It works best within the Microsoft ecosystem — if your security stack is split across CrowdStrike, Splunk, and other non-Microsoft tools, the value proposition is weaker because Copilot cannot access that data natively. The AI can confidently present wrong conclusions, so analyst review of its output is not optional. It also requires decent data hygiene in your Sentinel workspace — garbage in, garbage out applies to AI-assisted security just as much as traditional SIEM operations. Treat it as a force multiplier for your existing team, not a replacement for headcount.',
          nl: 'Security Copilot vervangt geen beveiligingsanalisten — het versterkt ze, en dat onderscheid is belangrijk. Het genereert af en toe onjuiste KQL-syntax die handmatige correctie vereist. De incidentsamenvattingen kunnen subtiele indicatoren missen die een ervaren analist wel zou opvangen. Het werkt het beste binnen het Microsoft-ecosysteem — als je beveiligingsstack verdeeld is over CrowdStrike, Splunk en andere niet-Microsoft tools, is de waardepropositie zwakker omdat Copilot die data niet native kan benaderen. De AI kan vol vertrouwen onjuiste conclusies presenteren, dus analisten moeten de output reviewen — dat is niet optioneel. Het vereist ook fatsoenlijke datahygiëne in je Sentinel-werkruimte — garbage in, garbage out geldt voor AI-ondersteunde security net zoveel als voor traditionele SIEM-operaties. Behandel het als een force multiplier voor je bestaande team, niet als vervanging voor personeel.'
        }
      }
    ],
    conclusion: {
      en: 'If your SOC already runs on Microsoft security tooling, Security Copilot is worth the investment. KQL generation and incident summaries save real time every day. Script deobfuscation alone can shave 30 minutes off an investigation. But keep expectations honest. Start with a small SCU allocation. Train your analysts on prompting — bad prompts give bad results. Build promptbooks for your repeat workflows. And never trust the output blindly. Security Copilot makes a good analyst faster. It does not make a missing analyst appear.',
      nl: 'Als je SOC al draait op Microsoft-beveiligingstooling, is Security Copilot de investering waard. KQL-generatie en incidentsamenvattingen besparen elke dag echte tijd. Scriptdeobfuscatie alleen al kan 30 minuten van een onderzoek schelen. Maar houd de verwachtingen eerlijk. Begin met een kleine SCU-toewijzing. Train je analisten in prompting — slechte prompts geven slechte resultaten. Bouw promptbooks voor je terugkerende workflows. En vertrouw de output nooit blindelings. Security Copilot maakt een goede analist sneller. Het laat een ontbrekende analist niet verschijnen.'
    }
  }
};
