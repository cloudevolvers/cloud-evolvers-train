import type { BlogPost } from '../types';

export const microsoftFabricPost: BlogPost = {
  id: 'microsoft-fabric-unified-analytics',
  title: {
    en: 'Microsoft Fabric: The Unified Analytics Platform Reshaping Data Engineering',
    nl: 'Microsoft Fabric: Het Uniforme Analytics Platform dat Data Engineering Hervormt'
  },
  description: {
    en: 'A deep dive into Microsoft Fabric, the unified analytics platform that consolidates data engineering, data warehousing, real-time analytics, and Power BI under one SaaS experience with OneLake at its core.',
    nl: 'Een diepgaande kijk op Microsoft Fabric, het uniforme analytics platform dat data engineering, data warehousing, real-time analytics en Power BI consolideert onder één SaaS-ervaring met OneLake als kern.'
  },
  date: '2026-03-05',
  author: 'Falk Krahl',
  tags: ['Microsoft Fabric', 'Data Engineering', 'Analytics', 'Azure', 'Power BI'],
  image: '/images/unsplash/business-analytics-dashboard.jpg',
  excerpt: {
    en: 'Microsoft Fabric replaces the fragmented Azure data stack with a unified SaaS platform. OneLake provides a single data lake, while integrated experiences for data engineering, warehousing, and real-time analytics eliminate the need to stitch together separate services.',
    nl: 'Microsoft Fabric vervangt de gefragmenteerde Azure data-stack met een uniform SaaS-platform. OneLake biedt één enkel data lake, terwijl geïntegreerde ervaringen voor data engineering, warehousing en real-time analytics de noodzaak elimineren om afzonderlijke services aan elkaar te koppelen.'
  },
  category: {
    en: 'Cloud Architecture',
    nl: 'Cloud Architectuur'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'If you have spent time building data platforms on Azure, you know the pain: Azure Data Factory for orchestration, Synapse Analytics for warehousing, Data Lake Storage for raw files, Databricks for Spark workloads, and Power BI for reporting. Each service has its own security model, billing structure, and management experience. Microsoft Fabric launched as a GA product to address exactly this fragmentation. It is a single SaaS platform that unifies data movement, data engineering, data warehousing, real-time analytics, data science, and business intelligence. The foundational idea is simple but powerful — one data lake (OneLake), one security model, one billing meter, one governance layer. Here is what this means in practice and whether it lives up to the promise.',
      nl: 'Als je tijd hebt besteed aan het bouwen van dataplatforms op Azure, ken je de pijn: Azure Data Factory voor orkestratie, Synapse Analytics voor warehousing, Data Lake Storage voor ruwe bestanden, Databricks voor Spark-workloads, en Power BI voor rapportage. Elke service heeft zijn eigen beveiligingsmodel, factureringsstructuur en beheerervaring. Microsoft Fabric lanceerde als een GA-product om precies deze fragmentatie aan te pakken. Het is een enkel SaaS-platform dat dataverplaatsing, data engineering, data warehousing, real-time analytics, data science en business intelligence verenigt. Het fundamentele idee is eenvoudig maar krachtig — één data lake (OneLake), één beveiligingsmodel, één factureringsmeter, één governance-laag. Hier is wat dit in de praktijk betekent en of het de belofte waarmaakt.'
    },
    sections: [
      {
        title: {
          en: 'OneLake: The Single Data Lake That Changes Everything',
          nl: 'OneLake: Het Enkele Data Lake Dat Alles Verandert'
        },
        content: {
          en: 'OneLake is the most consequential piece of Microsoft Fabric. Think of it as the OneDrive for data — every Fabric tenant gets exactly one OneLake, and all Fabric workloads read and write to it. The data is stored in open Delta Parquet format, which means any engine that understands Parquet and the Delta Lake protocol can access it directly. No more copying data between services or maintaining separate storage accounts for different workloads. If a data engineer writes a table using a Spark notebook, a data analyst can immediately query it from the SQL analytics endpoint, and a Power BI report can read from the same table without any data movement. OneLake also supports shortcuts — pointers to external data in Azure Data Lake Storage Gen2, Amazon S3, or Google Cloud Storage — so you can integrate existing data without physically moving it. This is particularly useful during migration: you create shortcuts to your existing data lakes and start building Fabric workloads on top, then gradually move the actual data when ready.',
          nl: 'OneLake is het meest ingrijpende onderdeel van Microsoft Fabric. Zie het als de OneDrive voor data — elke Fabric-tenant krijgt precies één OneLake, en alle Fabric-workloads lezen en schrijven ernaar. De data wordt opgeslagen in open Delta Parquet-formaat, wat betekent dat elke engine die Parquet en het Delta Lake-protocol begrijpt er direct toegang toe heeft. Geen data meer kopiëren tussen services of aparte storage accounts onderhouden voor verschillende workloads. Als een data engineer een tabel schrijft met een Spark-notebook, kan een data-analist het onmiddellijk bevragen vanuit het SQL analytics-endpoint, en een Power BI-rapport kan lezen van dezelfde tabel zonder enige dataverplaatsing. OneLake ondersteunt ook shortcuts — verwijzingen naar externe data in Azure Data Lake Storage Gen2, Amazon S3 of Google Cloud Storage — zodat je bestaande data kunt integreren zonder het fysiek te verplaatsen. Dit is bijzonder nuttig tijdens migratie: je maakt shortcuts naar je bestaande data lakes en begint Fabric-workloads bovenop te bouwen, waarna je geleidelijk de daadwerkelijke data verplaatst wanneer je klaar bent.'
        }
      },
      {
        title: {
          en: 'Lakehouses, Warehouses, and the SQL Analytics Endpoint',
          nl: 'Lakehouses, Warehouses en het SQL Analytics Endpoint'
        },
        content: {
          en: 'Fabric offers two primary patterns for structured data: lakehouses and warehouses. A lakehouse stores data in Delta tables on OneLake and provides a SQL analytics endpoint for T-SQL queries — you get the flexibility of a data lake with the query capabilities of a relational database. A warehouse is a full SQL data warehouse with DML support, stored procedures, and cross-database queries, aimed at teams that need a traditional SQL experience. The distinction matters for your architecture: use lakehouses when your data engineers primarily work in Spark and your analysts need SQL read access. Use warehouses when your team writes complex SQL transformations and needs full transactional support. Both share the same OneLake storage, so moving from one pattern to the other does not require data migration. The SQL analytics endpoint auto-generates a read-only SQL layer over any lakehouse table, which means Power BI can connect to it immediately using DirectLake mode — a new connectivity mode that reads directly from Parquet files without importing data into the dataset or sending queries to a SQL endpoint.',
          nl: 'Fabric biedt twee primaire patronen voor gestructureerde data: lakehouses en warehouses. Een lakehouse slaat data op in Delta-tabellen op OneLake en biedt een SQL analytics endpoint voor T-SQL queries — je krijgt de flexibiliteit van een data lake met de querymogelijkheden van een relationele database. Een warehouse is een volledig SQL data warehouse met DML-ondersteuning, stored procedures en cross-database queries, gericht op teams die een traditionele SQL-ervaring nodig hebben. Het onderscheid is belangrijk voor je architectuur: gebruik lakehouses wanneer je data engineers voornamelijk in Spark werken en je analisten SQL-leestoegang nodig hebben. Gebruik warehouses wanneer je team complexe SQL-transformaties schrijft en volledige transactionele ondersteuning nodig heeft. Beide delen dezelfde OneLake-opslag, dus overgaan van het ene patroon naar het andere vereist geen datamigratie. Het SQL analytics endpoint genereert automatisch een alleen-lezen SQL-laag over elke lakehouse-tabel, wat betekent dat Power BI er onmiddellijk verbinding mee kan maken via DirectLake-modus — een nieuwe connectiviteitsmodus die direct leest van Parquet-bestanden zonder data in de dataset te importeren of queries naar een SQL-endpoint te sturen.'
        }
      },
      {
        title: {
          en: 'Real-Time Analytics and Data Activator',
          nl: 'Real-Time Analytics en Data Activator'
        },
        content: {
          en: 'Fabric includes a real-time analytics experience built on the Kusto engine (the same technology behind Azure Data Explorer). You can ingest streaming data from Event Hubs, Kafka, or custom sources into KQL databases and query it with KQL (Kusto Query Language). This is the right tool for IoT telemetry, application logs, clickstream analysis, and any scenario where you need sub-second query performance over billions of records. Data Activator is the alerting and action layer that sits on top of your Fabric data. You define conditions on your data streams or tables — "notify me when order processing latency exceeds 500ms" or "trigger a Power Automate flow when daily revenue drops below threshold" — and Data Activator monitors continuously. It bridges the gap between passive dashboards and active operations, and it works across real-time streams and batch-refreshed datasets. The combination of real-time ingestion, KQL querying, and Data Activator alerting gives you an end-to-end operational analytics pipeline without leaving Fabric.',
          nl: 'Fabric bevat een real-time analytics ervaring gebouwd op de Kusto-engine (dezelfde technologie achter Azure Data Explorer). Je kunt streamingdata van Event Hubs, Kafka of aangepaste bronnen invoeren in KQL-databases en bevragen met KQL (Kusto Query Language). Dit is het juiste gereedschap voor IoT-telemetrie, applicatielogs, clickstream-analyse en elk scenario waar je sub-seconde queryprestaties nodig hebt over miljarden records. Data Activator is de alertering- en actielaag die bovenop je Fabric-data zit. Je definieert voorwaarden op je datastreams of tabellen — "meld me wanneer orderverwerkingslatentie 500ms overschrijdt" of "activeer een Power Automate-flow wanneer dagelijkse omzet onder drempel daalt" — en Data Activator monitort continu. Het overbrugt de kloof tussen passieve dashboards en actieve operaties, en het werkt over real-time streams en batch-vernieuwde datasets. De combinatie van real-time ingestie, KQL-querying en Data Activator-alertering geeft je een end-to-end operationele analytics-pijplijn zonder Fabric te verlaten.'
        }
      },
      {
        title: {
          en: 'Capacity-Based Pricing: A Different Billing Model',
          nl: 'Capacity-Based Pricing: Een Ander Factureringsmodel'
        },
        content: {
          en: 'Fabric uses a capacity-based pricing model that is fundamentally different from the per-service billing you are used to in Azure. You purchase a Fabric capacity (measured in Capacity Units, or CUs) and all workloads — data pipelines, Spark jobs, SQL queries, Power BI refreshes — consume from that shared pool. The advantage is predictability: you know your monthly cost upfront and can right-size the capacity based on usage patterns. The challenge is understanding how different workloads consume CUs, because a Spark job and a SQL query have very different consumption profiles. Fabric provides capacity metrics dashboards that show utilization by workload type, helping you identify which teams or processes consume the most. You can also enable bursting for temporary spikes and set throttling policies to prevent runaway consumption. For organizations currently paying separately for Synapse, Data Factory, Power BI Premium, and storage, the consolidated billing often results in cost savings — but do the math with your actual workload patterns before committing to a capacity tier.',
          nl: 'Fabric gebruikt een capacity-based prijsmodel dat fundamenteel verschilt van de per-service facturering die je gewend bent in Azure. Je koopt een Fabric-capaciteit (gemeten in Capacity Units, of CU\'s) en alle workloads — datapijplijnen, Spark-jobs, SQL-queries, Power BI-vernieuwingen — consumeren uit die gedeelde pool. Het voordeel is voorspelbaarheid: je weet je maandelijkse kosten vooraf en kunt de capaciteit op de juiste grootte instellen op basis van gebruikspatronen. De uitdaging is begrijpen hoe verschillende workloads CU\'s consumeren, omdat een Spark-job en een SQL-query zeer verschillende consumptiprofielen hebben. Fabric biedt capaciteitsmetriek-dashboards die gebruik per workloadtype tonen, waardoor je kunt identificeren welke teams of processen het meest consumeren. Je kunt ook bursting inschakelen voor tijdelijke pieken en throttling-beleid instellen om ongecontroleerd verbruik te voorkomen. Voor organisaties die momenteel apart betalen voor Synapse, Data Factory, Power BI Premium en opslag, resulteert de geconsolideerde facturering vaak in kostenbesparingen — maar doe de berekening met je werkelijke workloadpatronen voordat je je committeert aan een capaciteitstier.'
        }
      },
      {
        title: {
          en: 'Governance with Workspaces and Purview Integration',
          nl: 'Governance met Werkruimten en Purview-Integratie'
        },
        content: {
          en: 'Fabric workspaces are the governance boundary — each workspace has its own access control, data residency settings, and capacity assignment. Teams get their own workspace with role-based access (Admin, Member, Contributor, Viewer) and can share specific items across workspaces using sharing links or data pipelines. Microsoft Purview integrates natively with Fabric for data cataloging, lineage tracking, and sensitivity labeling. Every table, pipeline, and report in Fabric automatically appears in the Purview catalog with lineage showing how data flows from source to report. Sensitivity labels from Microsoft Information Protection apply to Fabric items, so when a dataset is labeled "Confidential," that classification flows through to any downstream reports or exports. For organizations with data governance requirements — and increasingly that means everyone — this built-in lineage and classification eliminates the need to build custom metadata management solutions.',
          nl: 'Fabric-werkruimten zijn de governance-grens — elke werkruimte heeft zijn eigen toegangscontrole, dataresidentie-instellingen en capaciteitstoewijzing. Teams krijgen hun eigen werkruimte met rolgebaseerde toegang (Admin, Member, Contributor, Viewer) en kunnen specifieke items delen over werkruimten via deellinks of datapijplijnen. Microsoft Purview integreert native met Fabric voor datacatalogisering, herkomsttracking en gevoeligheidslabeling. Elke tabel, pijplijn en rapport in Fabric verschijnt automatisch in de Purview-catalogus met herkomst die toont hoe data stroomt van bron naar rapport. Gevoeligheidslabels van Microsoft Information Protection zijn van toepassing op Fabric-items, dus wanneer een dataset is gelabeld als "Vertrouwelijk," stroomt die classificatie door naar alle downstream rapporten of exports. Voor organisaties met data governance-vereisten — en dat betekent steeds meer iedereen — elimineert deze ingebouwde herkomst en classificatie de noodzaak om aangepaste metadata-beheeroplossingen te bouwen.'
        }
      }
    ],
    conclusion: {
      en: 'Microsoft Fabric delivers on its core promise of unification. OneLake eliminates data silos, the integrated experiences reduce context switching, and the capacity-based pricing simplifies cost management. It is not without gaps — advanced MLOps workflows still benefit from dedicated Azure ML or Databricks, and the Spark experience is not as polished as a native Databricks environment. But for organizations looking to consolidate their Azure data stack into a managed platform with strong governance, Fabric is the most compelling option available. If you are starting a new data platform or facing renewal decisions on Synapse and Power BI Premium, Fabric deserves serious evaluation.',
      nl: 'Microsoft Fabric maakt zijn kernbelofte van unificatie waar. OneLake elimineert datasilo\'s, de geïntegreerde ervaringen verminderen contextschakeling, en de capacity-based pricing vereenvoudigt kostenbeheer. Het is niet zonder tekortkomingen — geavanceerde MLOps-workflows profiteren nog steeds van dedicated Azure ML of Databricks, en de Spark-ervaring is niet zo gepolijst als een native Databricks-omgeving. Maar voor organisaties die hun Azure data-stack willen consolideren in een beheerd platform met sterke governance, is Fabric de meest overtuigende optie die beschikbaar is. Als je een nieuw dataplatform start of verlengingsbeslissingen hebt over Synapse en Power BI Premium, verdient Fabric serieuze evaluatie.'
    }
  }
};
