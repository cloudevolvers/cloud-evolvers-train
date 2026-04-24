import type { BlogPost } from '../types';

export const stackitSovereignCloudDutchTeamsPost: BlogPost = {
  id: 'stackit-sovereign-cloud-dutch-teams',
  title: {
    en: 'STACKIT for Dutch IT teams: what the European sovereign cloud actually is',
    nl: 'STACKIT voor Nederlandse IT-teams: wat de Europese soevereine cloud eigenlijk is'
  },
  description: {
    en: 'STACKIT is the cloud platform run by Schwarz Digits, the IT arm of the Schwarz Group (Lidl, Kaufland). It sits in German datacenters, operates under European law, and is aimed at customers who want a cloud they are certain is not reachable under the US CLOUD Act.',
    nl: 'STACKIT is het cloudplatform van Schwarz Digits, de IT-tak van de Schwarz Groep (Lidl, Kaufland). Het staat in Duitse datacenters, valt onder Europees recht, en richt zich op klanten die zeker willen weten dat hun cloud niet bereikbaar is onder de Amerikaanse CLOUD Act.'
  },
  date: '2026-04-24',
  author: 'Yair Knijn',
  tags: ['STACKIT', 'Sovereign Cloud', 'EU', 'Data Residency', 'Cloud'],
  image: '/images/unsplash/hybrid-cloud-architecture.jpg',
  excerpt: {
    en: 'Most Dutch IT teams have spent the last decade becoming very good at Azure, AWS, and Google Cloud. Then procurement shows up with a question about data sovereignty, the CLOUD Act, NIS2, or DORA, and suddenly the answer "we run on a US hyperscaler" starts costing meetings. STACKIT is one of the credible answers.',
    nl: 'De meeste Nederlandse IT-teams zijn het afgelopen decennium erg goed geworden in Azure, AWS en Google Cloud. Dan komt inkoop langs met een vraag over datasoevereiniteit, de CLOUD Act, NIS2 of DORA, en ineens kost het antwoord "we draaien op een Amerikaanse hyperscaler" meetings. STACKIT is een van de geloofwaardige antwoorden.'
  },
  category: {
    en: 'Cloud & Infrastructure',
    nl: 'Cloud & Infrastructuur'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'STACKIT is the cloud platform operated by Schwarz Digits, the IT division of the Schwarz Group (the parent company of Lidl and Kaufland). It started as the internal cloud for the group itself, scaled to run a lot of retail, logistics, and payment workloads, and then opened up to external customers. Physically it runs in datacenters in Germany and Austria. Legally it is a German company, subject to German and EU law, not US law. That last sentence is the whole reason it gets asked about.',
      nl: 'STACKIT is het cloudplatform van Schwarz Digits, de IT-divisie van de Schwarz Groep (het moederbedrijf van Lidl en Kaufland). Het begon als de interne cloud voor de groep zelf, schaalde naar retail-, logistiek- en betaalworkloads, en ging daarna open voor externe klanten. Fysiek draait het in datacenters in Duitsland en Oostenrijk. Juridisch is het een Duits bedrijf, vallend onder Duits en EU-recht, niet onder Amerikaans recht. Die laatste zin is de hele reden dat er naar gevraagd wordt.'
    },
    sections: [
      {
        title: {
          en: 'Why sovereignty questions show up now',
          nl: 'Waarom soevereiniteitsvragen nu opduiken'
        },
        content: {
          en: 'A few things converged. NIS2 raised the floor on what critical and important entities have to prove about their supply chain, including their cloud providers. DORA did the same for financial services. The EU Data Act added portability obligations that make lock-in a regulatory concern, not a purely commercial one. And the US CLOUD Act, which has been in force since 2018, still allows US authorities to compel US-headquartered providers to hand over customer data regardless of where that data is stored. For a Dutch bank, ministry, healthcare provider, or utility that processes protected data, the question "can a US agency compel disclosure of this data without our knowledge" has moved from academic to procurement-blocking.',
          nl: 'Er kwam een aantal dingen samen. NIS2 tilde de ondergrens op van wat kritieke en belangrijke entiteiten moeten aantonen over hun toeleveringsketen, inclusief hun cloudleveranciers. DORA deed hetzelfde voor financiële dienstverlening. De EU Data Act voegde portabiliteitsverplichtingen toe die lock-in tot een regelgevingsvraagstuk maken, niet alleen een commercieel vraagstuk. En de Amerikaanse CLOUD Act, van kracht sinds 2018, staat Amerikaanse autoriteiten nog steeds toe om in de VS gevestigde providers te dwingen klantdata te overhandigen, ongeacht waar die data staat. Voor een Nederlandse bank, ministerie, zorgaanbieder of nutsbedrijf dat beschermde data verwerkt, is de vraag "kan een Amerikaanse instantie zonder onze medeweten deze data opeisen" verschoven van academisch naar inkoop-blokkerend.'
        }
      },
      {
        title: {
          en: 'What STACKIT gives you in practice',
          nl: 'Wat STACKIT je in de praktijk geeft'
        },
        content: {
          en: 'The service catalog is the usual cloud-building-block set: virtual machines, object storage, a managed Kubernetes service, managed databases (Postgres, MariaDB, and others), load balancing, private networking, and the kind of IAM and observability tooling you expect. It is smaller in surface area than Azure or AWS. There is no equivalent of every managed service you get on a hyperscaler. What it does have, it runs in German or Austrian datacenters with German-contracted operators, and the contractual and operational model is designed so that a US subpoena does not get you anywhere. For most infrastructure workloads (web apps, APIs, batch jobs, Kubernetes platforms, data pipelines that do not require a specific proprietary PaaS) the catalog is enough.',
          nl: 'De servicecatalogus is de gebruikelijke set cloudbouwstenen: virtuele machines, objectopslag, een managed Kubernetes-dienst, managed databases (Postgres, MariaDB en andere), load balancing, private networking, en de IAM- en observability-tooling die je verwacht. Het oppervlak is kleiner dan dat van Azure of AWS. Er is niet voor elke managed service op een hyperscaler een equivalent. Wat het wel heeft, draait in Duitse of Oostenrijkse datacenters met Duits-gecontracteerde operators, en het contract- en operationele model is zo opgezet dat een Amerikaanse dagvaarding je niets oplevert. Voor de meeste infrastructuurworkloads (webapps, APIs, batch jobs, Kubernetes-platformen, data pipelines die geen specifieke proprietary PaaS vereisen) is de catalogus genoeg.'
        }
      },
      {
        title: {
          en: 'When it makes sense versus when Azure is still the answer',
          nl: 'Wanneer het zin heeft en wanneer Azure nog steeds het antwoord is'
        },
        content: {
          en: 'STACKIT is the right answer when the dominant requirement is legal and jurisdictional, and the workload is well-served by standard cloud primitives. Think: a tenant dataset that a regulator has said must stay under EU control, a Kubernetes platform for a public-sector customer, a backup destination for workloads that cannot sit on a US-jurisdiction provider. Azure is still the right answer when you are deep into Microsoft-specific services (Entra ID, M365 integration, Power Platform, Azure OpenAI, Fabric) and the sovereignty story is already handled via Microsoft Cloud for Sovereignty or a bilateral agreement your legal team has accepted. Many Dutch organizations end up with a split: Azure for the Microsoft-anchored stack, STACKIT (or another EU-sovereign option) for the workloads that legal and procurement want firmly inside EU jurisdiction. That is not elegant but it is honest, and it passes the NIS2 supply-chain conversation.',
          nl: 'STACKIT is het juiste antwoord wanneer de dominante vereiste juridisch en jurisdictioneel is, en de workload goed bediend wordt door standaard cloudprimitieven. Denk aan: een tenant-dataset waarvan een toezichthouder heeft gezegd dat die onder EU-controle moet blijven, een Kubernetes-platform voor een publieke sector klant, een backupbestemming voor workloads die niet bij een provider onder Amerikaanse jurisdictie mogen staan. Azure is nog steeds het juiste antwoord wanneer je diep in Microsoft-specifieke diensten zit (Entra ID, M365-integratie, Power Platform, Azure OpenAI, Fabric) en het soevereiniteitsverhaal al afgedekt is via Microsoft Cloud for Sovereignty of een bilaterale afspraak die je legal team heeft geaccepteerd. Veel Nederlandse organisaties komen uit op een splitsing: Azure voor de Microsoft-gebaseerde stack, STACKIT (of een andere EU-soevereine optie) voor de workloads die legal en inkoop stevig binnen EU-jurisdictie willen. Dat is niet elegant, maar het is eerlijk, en het overleeft het NIS2-gesprek over de toeleveringsketen.'
        }
      },
      {
        title: {
          en: 'Getting your team ready',
          nl: 'Je team klaarstomen'
        },
        content: {
          en: 'The learning curve from Azure to STACKIT is real but not steep for engineers who already think in terms of cloud primitives. The mental model carries over: identity, networking, compute, storage, orchestration, observability. The differences sit in the concrete APIs, the console, the IaC providers (STACKIT ships a Terraform provider), and the supporting ecosystem, which is smaller than what you get around Azure. We now run a dedicated STACKIT training track at Cloud Evolvers, sized the same way as our Azure tracks: a short foundations module for people new to the platform, and a deeper hands-on track for teams building production workloads. Dutch or English, remote or at your office. If your organization is staring down a sovereignty requirement and trying to figure out what that actually means for the team, that is the conversation to have first.',
          nl: 'De leercurve van Azure naar STACKIT is echt, maar niet steil voor engineers die al in cloudprimitieven denken. Het mentale model gaat mee: identiteit, netwerken, compute, opslag, orkestratie, observability. De verschillen zitten in de concrete APIs, de console, de IaC-providers (STACKIT levert een Terraform-provider), en het omliggende ecosysteem, dat kleiner is dan wat je rond Azure hebt. We draaien nu een aparte STACKIT-trainingstrack bij Cloud Evolvers, vergelijkbaar opgezet als onze Azure-tracks: een korte foundations-module voor mensen die nieuw zijn op het platform, en een diepere hands-on track voor teams die productieworkloads bouwen. Nederlands of Engels, remote of bij jullie op kantoor. Staat jullie organisatie voor een soevereiniteitsvereiste en proberen jullie uit te zoeken wat dat concreet betekent voor het team, dan is dat het gesprek om eerst te voeren.'
        }
      }
    ],
    conclusion: {
      en: 'STACKIT does not replace Azure for most Dutch IT teams, and that is not what it is trying to do. It answers one specific question very well: where do you put workloads when the legal jurisdiction of the provider is itself the requirement. Over the next two years, more Dutch organizations are going to have that question asked of them by regulators, auditors, or procurement. Having a team that knows what STACKIT is, how it is operated, and how its building blocks differ from Azure is the kind of preparation that takes weeks, not days, so it is worth starting before the next audit.',
      nl: 'STACKIT vervangt Azure niet voor de meeste Nederlandse IT-teams, en dat is ook niet wat het probeert te doen. Het beantwoordt één specifieke vraag heel goed: waar zet je workloads neer als de juridische jurisdictie van de provider zelf de vereiste is. De komende twee jaar gaan meer Nederlandse organisaties die vraag krijgen van toezichthouders, auditors of inkoop. Een team hebben dat weet wat STACKIT is, hoe het beheerd wordt, en hoe de bouwstenen verschillen van Azure, is het soort voorbereiding dat weken kost, geen dagen. Het is de moeite waard om ermee te beginnen voor de volgende audit langskomt.'
    }
  }
};
