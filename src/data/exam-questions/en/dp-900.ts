import type { ExamSet } from '../types'

export const dp900: ExamSet = {
  examCode: 'DP-900',
  examName: 'Azure Data Fundamentals',
  description:
    'One hundred practice questions at the level of the official DP-900 exam. Core data concepts, relational data, non-relational data, modern analytics on Azure.',
  ceCourseSlug: 'azure-data-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-data-fundamentals',
  ceCoursePriceCents: null,
  questions: [
    // ── Core Data Concepts (dp900-1 to dp900-25) ──────────────────────────
    {
      id: 'dp900-1',
      topic: 'Core Data Concepts',
      question:
        'A social-media platform stores user posts as JSON documents where each post can have a different set of optional fields such as location, media type, and hashtags. Which data format best describes this structure?',
      options: [
        { id: 'a', text: 'Semi-structured data where the schema is flexible and embedded in the data.' },
        { id: 'b', text: 'Structured data stored in a fixed relational schema.' },
        { id: 'c', text: 'Unstructured data with no organisational properties whatsoever.' },
        { id: 'd', text: 'Transactional data organised into normalised third-normal-form tables.' },
      ],
      correctId: 'a',
      explanation:
        'JSON documents are semi-structured: they have some organisation (key-value pairs, arrays) but the schema is flexible and embedded in the data itself rather than enforced by a fixed external schema. Structured data lives in rigid relational tables, and unstructured data (images, audio) has no inherent schema at all.',
    },
    {
      id: 'dp900-2',
      topic: 'Core Data Concepts',
      question:
        'A retail bank must guarantee that every fund transfer either completes fully or rolls back completely, leaving accounts in a consistent state. Which workload type is designed to enforce this requirement?',
      options: [
        { id: 'a', text: 'Analytical workload using a dedicated SQL data warehouse.' },
        { id: 'b', text: 'Batch processing workload scheduled to run nightly.' },
        { id: 'c', text: 'Online Transactional Processing (OLTP) workload with ACID transaction support.' },
        { id: 'd', text: 'Stream processing workload consuming an event hub.' },
      ],
      correctId: 'c',
      explanation:
        'OLTP systems are built for high-volume, short-duration operations that require ACID (Atomicity, Consistency, Isolation, Durability) guarantees. Analytical and batch workloads prioritise throughput and historical query performance, not per-row consistency guarantees.',
    },
    {
      id: 'dp900-3',
      topic: 'Core Data Concepts',
      question:
        'A data engineer is asked to describe the difference between batch and streaming data processing. Which statement is accurate?',
      options: [
        { id: 'a', text: 'Batch processing operates on data as it arrives, producing results with sub-second latency.' },
        { id: 'b', text: 'Streaming processing collects data over a period and then processes the whole set at once.' },
        { id: 'c', text: 'Batch and streaming produce identical latency profiles and are interchangeable for all scenarios.' },
        { id: 'd', text: 'Batch processing collects data over a period and processes it as a group, while streaming processes data continuously as it arrives.' },
      ],
      correctId: 'd',
      explanation:
        'Batch processing accumulates data and processes it together on a schedule; streaming processes each event (or micro-batch) as it arrives for near-real-time results. The two approaches have very different latency and throughput trade-offs.',
    },
    {
      id: 'dp900-4',
      topic: 'Core Data Concepts',
      question:
        'A company stores satellite imagery files averaging 2 GB each. Which data classification applies, and what is the typical Azure storage solution?',
      options: [
        { id: 'a', text: 'Unstructured data stored in Azure Blob Storage.' },
        { id: 'b', text: 'Structured data stored in Azure SQL Database.' },
        { id: 'c', text: 'Semi-structured data stored in Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Transactional data stored in Azure Database for PostgreSQL Flexible Server.' },
      ],
      correctId: 'a',
      explanation:
        'Satellite imagery files have no inherent schema and are therefore unstructured. Azure Blob Storage is the standard Azure service for storing large binary objects at scale. Cosmos DB and relational databases are designed for structured or semi-structured data, not raw binary files.',
    },
    {
      id: 'dp900-5',
      topic: 'Core Data Concepts',
      question:
        'An organisation wants to run complex historical queries across five years of sales data to identify trends. The queries scan billions of rows and do not update individual records. Which workload type is the right fit?',
      options: [
        { id: 'a', text: 'Online Transactional Processing (OLTP).' },
        { id: 'b', text: 'Key-value caching.' },
        { id: 'c', text: 'Graph processing.' },
        { id: 'd', text: 'Online Analytical Processing (OLAP).' },
      ],
      correctId: 'd',
      explanation:
        'OLAP systems are optimised for large-scale analytical queries that read many rows and compute aggregates. OLTP systems handle high volumes of small read-write transactions. Key-value caching and graph processing address different data access patterns entirely.',
    },
    {
      id: 'dp900-6',
      topic: 'Core Data Concepts',
      question:
        'Which role is primarily responsible for designing and implementing data pipelines that move and transform data between source systems and analytical stores?',
      options: [
        { id: 'a', text: 'Database Administrator.' },
        { id: 'b', text: 'Data Analyst.' },
        { id: 'c', text: 'Data Engineer.' },
        { id: 'd', text: 'Security Administrator.' },
      ],
      correctId: 'c',
      explanation:
        'A Data Engineer builds and maintains the pipelines (ETL/ELT) that collect, transform, and deliver data. A Database Administrator focuses on availability, performance, and security of databases. A Data Analyst queries and visualises data to derive business insights.',
    },
    {
      id: 'dp900-7',
      topic: 'Core Data Concepts',
      question:
        'A Database Administrator is responsible for a production Azure SQL Database instance. Which task falls outside their typical scope?',
      options: [
        { id: 'a', text: 'Building Power BI reports to present sales KPIs to executives.' },
        { id: 'b', text: 'Configuring automated backups and point-in-time restore.' },
        { id: 'c', text: 'Managing logins and granting database permissions.' },
        { id: 'd', text: 'Monitoring query performance and tuning indexes.' },
      ],
      correctId: 'a',
      explanation:
        'Building business-intelligence reports is the domain of a Data Analyst, not a Database Administrator. DBAs focus on availability, backup, security, and query performance for the database engine itself.',
    },
    {
      id: 'dp900-8',
      topic: 'Core Data Concepts',
      question:
        'A company ingests IoT sensor readings every second from 10,000 devices and must detect anomalies within two seconds of their occurrence. Which processing approach fits this requirement?',
      options: [
        { id: 'a', text: 'Nightly batch processing using Azure Data Factory.' },
        { id: 'b', text: 'Weekly scheduled Spark jobs in Microsoft Fabric.' },
        { id: 'c', text: 'Real-time stream processing using Azure Stream Analytics.' },
        { id: 'd', text: 'Daily OLAP queries against an Azure Synapse Analytics dedicated SQL pool.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Stream Analytics processes continuous event streams with sub-second latency, making it suitable for real-time anomaly detection. Batch and scheduled jobs introduce delays incompatible with a two-second detection requirement.',
    },
    {
      id: 'dp900-9',
      topic: 'Core Data Concepts',
      question:
        'Which file format is columnar, supports predicate pushdown, and is widely used as the open storage format within Microsoft Fabric OneLake tables?',
      options: [
        { id: 'a', text: 'CSV.' },
        { id: 'b', text: 'Delta Parquet (Delta Lake).' },
        { id: 'c', text: 'JSON.' },
        { id: 'd', text: 'AVRO.' },
      ],
      correctId: 'b',
      explanation:
        'Microsoft Fabric stores tabular data in Delta Parquet (Delta Lake) format in OneLake. Delta Lake adds ACID transactions and versioning on top of columnar Parquet files. CSV and JSON are row-based text formats not optimised for analytical queries.',
    },
    {
      id: 'dp900-10',
      topic: 'Core Data Concepts',
      question:
        'A data analyst is asked to explain the difference between a data lake and a data warehouse. Which statement is correct?',
      options: [
        { id: 'a', text: 'A data lake stores raw data in any format at low cost, while a data warehouse stores structured, processed data optimised for SQL analytics.' },
        { id: 'b', text: 'A data lake stores only structured data in predefined schemas, while a data warehouse can hold any file format.' },
        { id: 'c', text: 'A data warehouse and a data lake are the same thing with different marketing names.' },
        { id: 'd', text: 'A data lake requires schema-on-write, while a data warehouse uses schema-on-read.' },
      ],
      correctId: 'a',
      explanation:
        'A data lake accepts raw data in any format (schema-on-read) at low storage cost. A data warehouse applies a predefined schema (schema-on-write) and organises data for efficient SQL querying. The two are complementary, not interchangeable.',
    },
    {
      id: 'dp900-11',
      topic: 'Core Data Concepts',
      question:
        'An e-commerce website records each customer order as a separate transaction and must ensure that a payment and the corresponding inventory reduction either both succeed or both fail. Which property of ACID transactions covers this?',
      options: [
        { id: 'a', text: 'Consistency.' },
        { id: 'b', text: 'Isolation.' },
        { id: 'c', text: 'Durability.' },
        { id: 'd', text: 'Atomicity.' },
      ],
      correctId: 'd',
      explanation:
        'Atomicity guarantees that all operations within a transaction succeed together or are all rolled back. Consistency ensures data rules are maintained; Isolation keeps concurrent transactions separate; Durability guarantees committed transactions survive failures.',
    },
    {
      id: 'dp900-12',
      topic: 'Core Data Concepts',
      question:
        'A business intelligence team uses a star schema with a central fact table containing sales measures and several dimension tables for product, customer, and date. Which workload type does this schema design represent?',
      options: [
        { id: 'a', text: 'OLAP optimised for analytical aggregations.' },
        { id: 'b', text: 'OLTP optimised for fast row-level inserts.' },
        { id: 'c', text: 'NoSQL document store optimised for variable-schema data.' },
        { id: 'd', text: 'Key-value store optimised for sub-millisecond lookups.' },
      ],
      correctId: 'a',
      explanation:
        'Star schema is a dimensional modelling pattern used in OLAP data warehouses to support fast analytical aggregations. OLTP databases use normalised schemas to minimise data duplication for high-volume transactional updates.',
    },
    {
      id: 'dp900-13',
      topic: 'Core Data Concepts',
      question:
        'A data engineer needs to describe the three stages of a typical data ingestion and processing pipeline. Which sequence is correct?',
      options: [
        { id: 'a', text: 'Ingest → Transform → Store.' },
        { id: 'b', text: 'Store → Transform → Ingest.' },
        { id: 'c', text: 'Transform → Ingest → Store.' },
        { id: 'd', text: 'Ingest → Store → Transform.' },
      ],
      correctId: 'a',
      explanation:
        'The standard pipeline flow is: Ingest (collect raw data from sources), Transform (clean, enrich, aggregate), Store (load into the target analytical store). Some ELT patterns load first and transform in place, but Ingest → Transform → Store describes the logical ETL order.',
    },
    {
      id: 'dp900-14',
      topic: 'Core Data Concepts',
      question:
        'A healthcare company needs to store medical imaging files (DICOM) that are each around 500 MB. Which Azure storage type is most appropriate?',
      options: [
        { id: 'a', text: 'Azure Table Storage.' },
        { id: 'b', text: 'Azure Queue Storage.' },
        { id: 'c', text: 'Azure Blob Storage.' },
        { id: 'd', text: 'Azure Files.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Blob Storage is designed for massive unstructured binary objects, making it the right choice for large DICOM files. Table Storage is a NoSQL key-value store, Queue Storage is a messaging service, and Azure Files provides SMB/NFS file shares.',
    },
    {
      id: 'dp900-15',
      topic: 'Core Data Concepts',
      question:
        'A data analyst needs to present monthly revenue figures to the board in an interactive visual that lets executives drill into regional breakdown. Which tool is purpose-built for this in the Microsoft stack?',
      options: [
        { id: 'a', text: 'Azure Data Studio.' },
        { id: 'b', text: 'SQL Server Management Studio (SSMS).' },
        { id: 'c', text: 'Azure Data Factory.' },
        { id: 'd', text: 'Microsoft Power BI.' },
      ],
      correctId: 'd',
      explanation:
        'Power BI is Microsoft\'s business-intelligence tool for creating interactive reports, dashboards, and visuals. Azure Data Studio and SSMS are query and database-management tools, and Azure Data Factory is an orchestration and data-movement service.',
    },
    {
      id: 'dp900-16',
      topic: 'Core Data Concepts',
      question:
        'A startup stores customer preference data as simple key-value pairs where the key is a customer ID and the value is a JSON blob of preferences. Which storage category best describes this pattern?',
      options: [
        { id: 'a', text: 'Relational (structured).' },
        { id: 'b', text: 'Graph.' },
        { id: 'c', text: 'Non-relational (NoSQL).' },
        { id: 'd', text: 'Time-series.' },
      ],
      correctId: 'c',
      explanation:
        'Key-value stores are a category of non-relational (NoSQL) databases. The data has no fixed schema enforced by the store. Relational databases require a defined table schema, and graph databases are optimised for highly connected relationship data.',
    },
    {
      id: 'dp900-17',
      topic: 'Core Data Concepts',
      question:
        'A logistics company tracks package movements over time and needs to run analytics that calculate the average transit time per route over the last 30 days. Which workload category best describes this use case?',
      options: [
        { id: 'a', text: 'Message queuing workload.' },
        { id: 'b', text: 'OLTP workload.' },
        { id: 'c', text: 'Graph traversal workload.' },
        { id: 'd', text: 'Analytical workload.' },
      ],
      correctId: 'd',
      explanation:
        'Calculating averages across 30 days of historical data is an analytical (OLAP) use case. OLTP handles transactional updates to individual records, queuing handles asynchronous messaging, and graph traversal handles relationship navigation.',
    },
    {
      id: 'dp900-18',
      topic: 'Core Data Concepts',
      question:
        'An engineering team asks which role is responsible for ensuring a SQL database meets its SLA availability targets, performing routine index maintenance, and auditing access logs.',
      options: [
        { id: 'a', text: 'Database Administrator.' },
        { id: 'b', text: 'Data Analyst.' },
        { id: 'c', text: 'Data Scientist.' },
        { id: 'd', text: 'Data Engineer.' },
      ],
      correctId: 'a',
      explanation:
        'Database Administrators own availability, performance tuning, index maintenance, backup, and security auditing of database systems. Data Engineers build pipelines; Data Analysts produce reports; Data Scientists build predictive models.',
    },
    {
      id: 'dp900-19',
      topic: 'Core Data Concepts',
      question:
        'A media streaming service ingests clickstream events from millions of users simultaneously. The events need to be buffered and then consumed by multiple downstream processors. Which Azure service is designed for this high-throughput event ingestion pattern?',
      options: [
        { id: 'a', text: 'Azure Queue Storage.' },
        { id: 'b', text: 'Azure Event Hubs.' },
        { id: 'c', text: 'Azure Blob Storage.' },
        { id: 'd', text: 'Azure Service Bus.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Event Hubs is a big-data streaming platform built for high-throughput event ingestion from millions of sources, supporting multiple consumer groups reading the same stream. Queue Storage and Service Bus are designed for smaller-scale message queuing, not petabyte-scale event streaming.',
    },
    {
      id: 'dp900-20',
      topic: 'Core Data Concepts',
      question:
        'A company tracks website visits in a CSV file with columns for timestamp, user ID, and page URL. Which data classification applies?',
      options: [
        { id: 'a', text: 'Unstructured data.' },
        { id: 'b', text: 'Semi-structured data.' },
        { id: 'c', text: 'Binary large object (BLOB) data.' },
        { id: 'd', text: 'Structured data.' },
      ],
      correctId: 'd',
      explanation:
        'A CSV file with fixed, named columns has a defined schema applied at the file level, making it structured data. Semi-structured data (JSON, XML) has a flexible schema embedded in the data itself. Unstructured data has no schema at all.',
    },
    {
      id: 'dp900-21',
      topic: 'Core Data Concepts',
      question:
        'Which Azure tool provides a unified query editor, notebook environment, and source-control integration that a data engineer uses to query both SQL and Spark data sources on Windows, macOS, and Linux?',
      options: [
        { id: 'a', text: 'Azure Data Studio.' },
        { id: 'b', text: 'SQL Server Management Studio (SSMS).' },
        { id: 'c', text: 'Power BI Desktop.' },
        { id: 'd', text: 'Azure Monitor.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Data Studio is a cross-platform tool with a notebook interface, SQL and Spark support, and built-in source control. SSMS is Windows-only and SQL-centric. Power BI Desktop is for report authoring, and Azure Monitor is for observability.',
    },
    {
      id: 'dp900-22',
      topic: 'Core Data Concepts',
      question:
        'A data pipeline runs every night at 2 AM to load the previous day\'s transactions into a data warehouse. Which processing model does this represent?',
      options: [
        { id: 'a', text: 'Streaming processing.' },
        { id: 'b', text: 'Event-driven processing.' },
        { id: 'c', text: 'Real-time processing.' },
        { id: 'd', text: 'Batch processing.' },
      ],
      correctId: 'd',
      explanation:
        'A scheduled nightly job that processes accumulated data is batch processing. Streaming and real-time processing operate continuously on data as it arrives, not on a fixed schedule.',
    },
    {
      id: 'dp900-23',
      topic: 'Core Data Concepts',
      question:
        'A financial services firm asks which Azure service is a fully managed relational database suitable for migrating an on-premises SQL Server workload with minimal code changes and without managing the underlying VM.',
      options: [
        { id: 'a', text: 'SQL Server on Azure Virtual Machines.' },
        { id: 'b', text: 'Azure SQL Database.' },
        { id: 'c', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Azure Synapse Analytics dedicated SQL pool.' },
      ],
      correctId: 'b',
      explanation:
        'Azure SQL Database is a fully managed PaaS service with no VM management overhead, providing high compatibility with SQL Server. SQL on VMs (IaaS) requires OS and VM management. Cosmos DB is NoSQL, and Synapse dedicated pools are optimised for data warehousing, not OLTP migration.',
    },
    {
      id: 'dp900-24',
      topic: 'Core Data Concepts',
      question:
        'A data analyst spends most of her time querying data, building reports in Power BI, and presenting insights to business stakeholders. Which data role does this describe?',
      options: [
        { id: 'a', text: 'Data Engineer.' },
        { id: 'b', text: 'Database Administrator.' },
        { id: 'c', text: 'Data Scientist.' },
        { id: 'd', text: 'Data Analyst.' },
      ],
      correctId: 'd',
      explanation:
        'A Data Analyst focuses on querying existing data stores and building visualisations and reports to support business decisions. A Data Engineer builds the pipelines that deliver the data; a Data Scientist applies statistical and machine-learning models to the data.',
    },
    {
      id: 'dp900-25',
      topic: 'Core Data Concepts',
      question:
        'An application stores XML configuration files where each file has a defined tag structure but the set of elements can differ between files. Which data type classification applies?',
      options: [
        { id: 'a', text: 'Structured data.' },
        { id: 'b', text: 'Semi-structured data.' },
        { id: 'c', text: 'Unstructured data.' },
        { id: 'd', text: 'Binary data.' },
      ],
      correctId: 'b',
      explanation:
        'XML has inherent structure (tags, hierarchy) but the schema is flexible and embedded within the document, which is the definition of semi-structured data. Structured data uses an externally defined, rigid schema such as a relational table.',
    },

    // ── Relational Data on Azure (dp900-26 to dp900-45) ───────────────────
    {
      id: 'dp900-26',
      topic: 'Relational Data on Azure',
      question:
        'A startup is building a small SaaS application with unpredictable traffic. They want the database to auto-pause when idle and auto-scale compute without managing vCores. Which Azure SQL Database option meets this requirement?',
      options: [
        { id: 'a', text: 'Azure SQL Database Serverless compute tier.' },
        { id: 'b', text: 'Azure SQL Database General Purpose with DTU pricing.' },
        { id: 'c', text: 'Azure SQL Database Hyperscale provisioned compute.' },
        { id: 'd', text: 'SQL Server on Azure Virtual Machines.' },
      ],
      correctId: 'a',
      explanation:
        'The Serverless compute tier automatically scales compute based on workload demand and pauses when the database is idle, billing only for storage during paused periods. Hyperscale provisioned compute does not auto-pause. DTU pricing is a fixed provisioned model. SQL on VMs requires manual management.',
    },
    {
      id: 'dp900-27',
      topic: 'Relational Data on Azure',
      question:
        'A company runs 50 small Azure SQL databases with highly variable usage patterns. They want to share a pool of compute resources and reduce the total cost compared to provisioning each database individually. Which deployment model should they use?',
      options: [
        { id: 'a', text: 'Azure SQL Database Hyperscale service tier.' },
        { id: 'b', text: 'Azure SQL Managed Instance.' },
        { id: 'c', text: 'Azure SQL Database Elastic Pool.' },
        { id: 'd', text: 'SQL Server on Azure Virtual Machines.' },
      ],
      correctId: 'c',
      explanation:
        'Elastic Pools allow multiple Azure SQL databases to share a pooled set of compute and storage resources, which reduces cost when databases have variable and complementary usage patterns. Hyperscale, Managed Instance, and SQL on VMs are all single-database or single-instance models.',
    },
    {
      id: 'dp900-28',
      topic: 'Relational Data on Azure',
      question:
        'An enterprise application on-premises uses SQL Server Agent Jobs, cross-database queries, and CLR integration. The team wants to lift-and-shift to Azure with the fewest application changes. Which service offers the highest compatibility?',
      options: [
        { id: 'a', text: 'Azure SQL Database single database.' },
        { id: 'b', text: 'Azure SQL Managed Instance.' },
        { id: 'c', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Azure Database for PostgreSQL Flexible Server.' },
      ],
      correctId: 'b',
      explanation:
        'Azure SQL Managed Instance provides near-100% SQL Server compatibility, including SQL Agent, cross-database queries, and CLR integration. Azure SQL Database single database does not support SQL Agent or cross-database queries. Cosmos DB is NoSQL and PostgreSQL uses a different engine.',
    },
    {
      id: 'dp900-29',
      topic: 'Relational Data on Azure',
      question:
        'A team is designing a relational database and wants to eliminate data redundancy so that a customer\'s address is stored in only one place. Which design principle achieves this?',
      options: [
        { id: 'a', text: 'Normalization.' },
        { id: 'b', text: 'Denormalization.' },
        { id: 'c', text: 'Sharding.' },
        { id: 'd', text: 'Partitioning.' },
      ],
      correctId: 'a',
      explanation:
        'Normalization is the process of organising a database to reduce redundancy and improve data integrity, typically by splitting tables and using foreign key relationships. Denormalization deliberately introduces redundancy to improve read query performance.',
    },
    {
      id: 'dp900-30',
      topic: 'Relational Data on Azure',
      question:
        'A developer writes a T-SQL query to retrieve the names and email addresses of all customers who have placed an order in the last 90 days. Which SQL statement starts this query?',
      options: [
        { id: 'a', text: 'INSERT INTO Customers' },
        { id: 'b', text: 'UPDATE Customers SET' },
        { id: 'c', text: 'SELECT Name, Email FROM Customers' },
        { id: 'd', text: 'DELETE FROM Customers' },
      ],
      correctId: 'c',
      explanation:
        'SELECT is the T-SQL statement for retrieving data from a table. INSERT adds new rows, UPDATE modifies existing rows, and DELETE removes rows. Only SELECT is used for read queries.',
    },
    {
      id: 'dp900-31',
      topic: 'Relational Data on Azure',
      question:
        'A DBA wants to speed up queries that filter a large Orders table by CustomerID without scanning every row. Which database object should they create?',
      options: [
        { id: 'a', text: 'A view.' },
        { id: 'b', text: 'A stored procedure.' },
        { id: 'c', text: 'A foreign key constraint.' },
        { id: 'd', text: 'An index on CustomerID.' },
      ],
      correctId: 'd',
      explanation:
        'An index on CustomerID allows the database engine to locate matching rows directly without a full table scan, dramatically improving filter query performance. Views are virtual tables for query simplification, stored procedures encapsulate logic, and foreign keys enforce referential integrity.',
    },
    {
      id: 'dp900-32',
      topic: 'Relational Data on Azure',
      question:
        'A developer needs to encapsulate multi-step order-processing logic in the database so that applications call a single named routine without embedding the SQL logic in application code. Which database object does this?',
      options: [
        { id: 'a', text: 'A stored procedure.' },
        { id: 'b', text: 'An index.' },
        { id: 'c', text: 'A view.' },
        { id: 'd', text: 'A foreign key.' },
      ],
      correctId: 'a',
      explanation:
        'A stored procedure is a named, compiled block of T-SQL that can be called by applications, hiding the implementation details and allowing logic reuse. Views expose a virtual table; indexes improve lookup speed; foreign keys enforce referential integrity.',
    },
    {
      id: 'dp900-33',
      topic: 'Relational Data on Azure',
      question:
        'An Azure Database for PostgreSQL Flexible Server instance is running version 16. A developer asks whether they can also choose the Single Server deployment model for new workloads.',
      options: [
        { id: 'a', text: 'Yes, Single Server and Flexible Server are both available for all new deployments.' },
        { id: 'b', text: 'Single Server is available only in specific Azure regions for new deployments.' },
        { id: 'c', text: 'Single Server supports higher PostgreSQL versions than Flexible Server.' },
        { id: 'd', text: 'No, Azure Database for PostgreSQL Single Server was retired and only Flexible Server is available for new deployments.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Database for PostgreSQL Single Server was retired in March 2025. All new deployments use Flexible Server, which provides greater control, zone-redundant high availability, and support for the latest PostgreSQL versions.',
    },
    {
      id: 'dp900-34',
      topic: 'Relational Data on Azure',
      question:
        'A database needs a virtual table that simplifies a complex join across Orders, Customers, and Products tables so that developers query the virtual table instead of writing the join each time. Which database object achieves this?',
      options: [
        { id: 'a', text: 'A stored procedure.' },
        { id: 'b', text: 'A view.' },
        { id: 'c', text: 'An index.' },
        { id: 'd', text: 'A trigger.' },
      ],
      correctId: 'b',
      explanation:
        'A view is a saved SQL query exposed as a virtual table. Querying the view abstracts the underlying join complexity from developers. Stored procedures execute logic; indexes accelerate data retrieval; triggers fire automatically on data changes.',
    },
    {
      id: 'dp900-35',
      topic: 'Relational Data on Azure',
      question:
        'A company runs an Azure SQL Database that holds 90 TB of data and continues to grow. The team needs rapid scaling of storage and read replicas without downtime. Which service tier supports up to 128 TB and read scale-out replicas?',
      options: [
        { id: 'a', text: 'Hyperscale.' },
        { id: 'b', text: 'Business Critical.' },
        { id: 'c', text: 'General Purpose.' },
        { id: 'd', text: 'Standard (DTU).' },
      ],
      correctId: 'a',
      explanation:
        'The Hyperscale service tier supports up to 128 TB of storage and allows rapid provisioning of multiple read-only replicas for read scale-out. General Purpose and Business Critical top out at 4 TB and 16 TB respectively. The DTU model has lower storage limits.',
    },
    {
      id: 'dp900-36',
      topic: 'Relational Data on Azure',
      question:
        'A developer uses the T-SQL statement INSERT INTO Products (Name, Price) VALUES (\'Widget\', 9.99). What does this statement do?',
      options: [
        { id: 'a', text: 'It retrieves all products named Widget.' },
        { id: 'b', text: 'It updates the price of a product named Widget.' },
        { id: 'c', text: 'It adds a new row to the Products table with the specified name and price.' },
        { id: 'd', text: 'It deletes the product named Widget from the table.' },
      ],
      correctId: 'c',
      explanation:
        'INSERT INTO adds a new row to the specified table with the given column values. SELECT retrieves rows, UPDATE modifies existing rows, and DELETE removes rows.',
    },
    {
      id: 'dp900-37',
      topic: 'Relational Data on Azure',
      question:
        'A development team is choosing between Azure Database for MySQL Flexible Server and Azure Database for PostgreSQL Flexible Server. Which statement correctly describes both services?',
      options: [
        { id: 'a', text: 'Both are IaaS services where the customer manages the operating system.' },
        { id: 'b', text: 'Both are fully managed PaaS relational database services that support zone-redundant high availability.' },
        { id: 'c', text: 'Both require the customer to apply database engine patches manually.' },
        { id: 'd', text: 'MySQL Flexible Server supports PostgreSQL syntax while PostgreSQL Flexible Server supports MySQL syntax.' },
      ],
      correctId: 'b',
      explanation:
        'Both Azure Database for MySQL Flexible Server and Azure Database for PostgreSQL Flexible Server are fully managed PaaS services that include automated backups, patching, and zone-redundant HA options. Neither requires the customer to manage the OS or apply engine patches manually.',
    },
    {
      id: 'dp900-38',
      topic: 'Relational Data on Azure',
      question:
        'A DBA is asked to explain what a primary key does in a relational table. Which answer is correct?',
      options: [
        { id: 'a', text: 'It creates a link between two tables to enforce referential integrity.' },
        { id: 'b', text: 'It uniquely identifies each row in the table and does not allow NULL values.' },
        { id: 'c', text: 'It creates a sorted index to speed up range queries.' },
        { id: 'd', text: 'It stores computed values derived from other columns.' },
      ],
      correctId: 'b',
      explanation:
        'A primary key is a column or combination of columns that uniquely identifies every row and cannot contain NULL values. Foreign keys link tables. Clustered indexes sort data but are a separate concept. Computed columns derive values from other columns.',
    },
    {
      id: 'dp900-39',
      topic: 'Relational Data on Azure',
      question:
        'A company wants to connect to their Azure SQL Database using SSMS from a Windows desktop. Which authentication method uses the correct current Microsoft identity service name?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID authentication.' },
        { id: 'b', text: 'Azure Active Directory (Azure AD) authentication.' },
        { id: 'c', text: 'SQL authentication using a password stored in the application.' },
        { id: 'd', text: 'Windows Integrated Authentication using local AD credentials.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Entra ID (formerly Azure AD) is the correct current name for the cloud identity service and represents modern best practice for database authentication. The option labelled "Azure Active Directory" uses the retired legacy name. SQL auth with a stored password is less secure.',
    },
    {
      id: 'dp900-40',
      topic: 'Relational Data on Azure',
      question:
        'A company runs a mission-critical on-premises SQL Server workload that uses SQL Server Agent Jobs, Database Mail, and cross-database queries. They want to move to Azure PaaS with the highest lift-and-shift compatibility. Which Azure option is most appropriate?',
      options: [
        { id: 'a', text: 'Azure SQL Database single database.' },
        { id: 'b', text: 'Azure SQL Managed Instance with vCore purchasing model.' },
        { id: 'c', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Azure Database for MySQL Flexible Server.' },
      ],
      correctId: 'b',
      explanation:
        'Azure SQL Managed Instance is a fully managed PaaS instance with near-full SQL Server engine compatibility, including SQL Agent, Database Mail, Service Broker, and cross-database queries. Single database does not support these features. Cosmos DB and MySQL are different engines entirely.',
    },
    {
      id: 'dp900-41',
      topic: 'Relational Data on Azure',
      question:
        'A T-SQL developer needs to change the price of a product in the Products table where ProductID is 42 to 19.99. Which SQL statement does this?',
      options: [
        { id: 'a', text: 'SELECT Price FROM Products WHERE ProductID = 42.' },
        { id: 'b', text: 'DELETE FROM Products WHERE ProductID = 42.' },
        { id: 'c', text: 'INSERT INTO Products (Price) VALUES (19.99) WHERE ProductID = 42.' },
        { id: 'd', text: 'UPDATE Products SET Price = 19.99 WHERE ProductID = 42.' },
      ],
      correctId: 'd',
      explanation:
        'UPDATE … SET … WHERE is the correct T-SQL pattern for modifying an existing row. SELECT reads data, DELETE removes rows, and INSERT (which has no WHERE clause in standard SQL) adds new rows.',
    },
    {
      id: 'dp900-42',
      topic: 'Relational Data on Azure',
      question:
        'A developer is considering SQL Server on Azure Virtual Machines instead of Azure SQL Database. Which scenario justifies the IaaS choice?',
      options: [
        { id: 'a', text: 'The application only uses standard ANSI SQL and has no special OS-level dependencies.' },
        { id: 'b', text: 'The team wants Microsoft to manage OS patches, backups, and HA automatically.' },
        { id: 'c', text: 'The application requires a specific OS-level configuration or a SQL Server feature not available in PaaS.' },
        { id: 'd', text: 'The workload needs automatic compute scaling provided by the serverless tier.' },
      ],
      correctId: 'c',
      explanation:
        'SQL on Azure VMs (IaaS) is justified when the workload requires OS-level access, specific SQL Server features not available in PaaS, or third-party software that must be co-located. When none of these apply, PaaS is preferred for lower management overhead.',
    },
    {
      id: 'dp900-43',
      topic: 'Relational Data on Azure',
      question:
        'A relational database has an Orders table and a Customers table. A foreign key constraint links Orders.CustomerID to Customers.CustomerID. What does this constraint enforce?',
      options: [
        { id: 'a', text: 'It ensures every CustomerID in the Orders table corresponds to an existing CustomerID in the Customers table.' },
        { id: 'b', text: 'It creates an index on CustomerID to speed up join queries.' },
        { id: 'c', text: 'It prevents two orders from sharing the same CustomerID.' },
        { id: 'd', text: 'It encrypts the CustomerID column in both tables.' },
      ],
      correctId: 'a',
      explanation:
        'A foreign key enforces referential integrity: every value in the referencing column must match a value in the referenced primary key column. This prevents orphan records. It does not automatically create an index, enforce uniqueness in the child table, or encrypt data.',
    },
    {
      id: 'dp900-44',
      topic: 'Relational Data on Azure',
      question:
        'A development team queries their Azure SQL Database using a graphical tool that runs on Windows, macOS, and Linux, provides an IntelliSense editor and notebook support. Which tool are they using?',
      options: [
        { id: 'a', text: 'Azure Data Studio.' },
        { id: 'b', text: 'Power BI Desktop.' },
        { id: 'c', text: 'SQL Server Management Studio (SSMS).' },
        { id: 'd', text: 'Azure Storage Explorer.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Data Studio is a cross-platform (Windows, macOS, Linux) query and management tool that supports SQL Server, Azure SQL, and other data sources, with notebooks and IntelliSense. SSMS is Windows-only. Power BI Desktop is for report authoring. Storage Explorer is for browsing Azure Storage accounts.',
    },
    {
      id: 'dp900-45',
      topic: 'Relational Data on Azure',
      question:
        'A DBA sets up automatic backups with geo-redundant storage for an Azure SQL Database. Which availability feature does this primarily protect against?',
      options: [
        { id: 'a', text: 'Slow query performance caused by missing indexes.' },
        { id: 'b', text: 'Unauthorised access by external users.' },
        { id: 'c', text: 'Excessive DTU consumption during peak hours.' },
        { id: 'd', text: 'Data loss due to accidental deletion or regional outage, enabling point-in-time restore.' },
      ],
      correctId: 'd',
      explanation:
        'Automated backups with geo-redundant storage allow point-in-time restore to recover from data loss caused by accidental deletion, corruption, or a regional Azure outage. Index tuning addresses performance, access control addresses security, and DTU limits address compute overload.',
    },

    // ── Non-Relational Data on Azure (dp900-46 to dp900-60) ───────────────
    {
      id: 'dp900-46',
      topic: 'Non-Relational Data on Azure',
      question:
        'A company is migrating a legacy MongoDB application to Azure with minimal code changes. Which Azure Cosmos DB API should they choose?',
      options: [
        { id: 'a', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'b', text: 'Azure Cosmos DB for MongoDB.' },
        { id: 'c', text: 'Azure Cosmos DB for Apache Cassandra.' },
        { id: 'd', text: 'Azure Cosmos DB for Apache Gremlin.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Cosmos DB for MongoDB is wire-protocol compatible with MongoDB, so existing MongoDB drivers and queries work with minimal changes. The NoSQL API uses a proprietary SDK, Cassandra uses CQL, and Gremlin is for graph data.',
    },
    {
      id: 'dp900-47',
      topic: 'Non-Relational Data on Azure',
      question:
        'A social-network application models relationships between users as nodes and edges in a graph, and needs to traverse multi-hop relationships efficiently. Which Azure Cosmos DB API is designed for this use case?',
      options: [
        { id: 'a', text: 'Azure Cosmos DB for Table.' },
        { id: 'b', text: 'Azure Cosmos DB for Apache Cassandra.' },
        { id: 'c', text: 'Azure Cosmos DB for Apache Gremlin.' },
        { id: 'd', text: 'Azure Cosmos DB for NoSQL.' },
      ],
      correctId: 'c',
      explanation:
        'The Gremlin API is built for graph data models where data is represented as nodes and edges and relationships are traversed using the Gremlin query language. Table and Cassandra APIs are for wide-column or key-value data, and NoSQL is for JSON documents.',
    },
    {
      id: 'dp900-48',
      topic: 'Non-Relational Data on Azure',
      question:
        'An IoT application using Azure Cosmos DB for NoSQL is experiencing hot-partition performance issues. The current partition key is DeviceType, which has only five distinct values across millions of devices. What should the team change?',
      options: [
        { id: 'a', text: 'Switch to the Table API to avoid partition keys.' },
        { id: 'b', text: 'Choose a partition key with high cardinality such as DeviceID to distribute load evenly.' },
        { id: 'c', text: 'Reduce the number of Request Units (RU/s) provisioned.' },
        { id: 'd', text: 'Enable strong consistency to eliminate hot partitions.' },
      ],
      correctId: 'b',
      explanation:
        'A good partition key has high cardinality so that data and requests are distributed evenly across logical partitions. DeviceType with five values concentrates all traffic on five partitions. DeviceID spreads load across millions of partitions. Reducing RU/s or changing consistency does not fix data skew.',
    },
    {
      id: 'dp900-49',
      topic: 'Non-Relational Data on Azure',
      question:
        'A globally distributed application uses Azure Cosmos DB. The team needs reads to always reflect the most recent committed write, regardless of the region handling the request. Which consistency level provides this guarantee?',
      options: [
        { id: 'a', text: 'Eventual.' },
        { id: 'b', text: 'Session.' },
        { id: 'c', text: 'Bounded staleness.' },
        { id: 'd', text: 'Strong.' },
      ],
      correctId: 'd',
      explanation:
        'Strong consistency guarantees linearizability: reads always return the most recent committed write. It has higher latency and lower availability trade-offs than weaker levels. Session consistency guarantees reads reflect the current client\'s own writes. Eventual provides the highest availability with no freshness guarantee.',
    },
    {
      id: 'dp900-50',
      topic: 'Non-Relational Data on Azure',
      question:
        'A development team is migrating an Apache Cassandra application with CQL (Cassandra Query Language) queries to Azure. They want to continue using CQL without rewriting queries. Which Cosmos DB API should they choose?',
      options: [
        { id: 'a', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'b', text: 'Azure Cosmos DB for MongoDB.' },
        { id: 'c', text: 'Azure Cosmos DB for Apache Cassandra.' },
        { id: 'd', text: 'Azure Cosmos DB for Apache Gremlin.' },
      ],
      correctId: 'c',
      explanation:
        'The Cassandra API is wire-protocol compatible with Apache Cassandra and supports CQL, so existing drivers and queries work without rewriting. The NoSQL API uses a proprietary SDK, MongoDB uses MQL, and Gremlin uses a graph traversal language.',
    },
    {
      id: 'dp900-51',
      topic: 'Non-Relational Data on Azure',
      question:
        'An existing application uses Azure Table Storage. The team wants a service with higher throughput, global distribution, automatic indexing of all properties, and multi-region SLAs while keeping the same table/entity programming model. Which service should they choose?',
      options: [
        { id: 'a', text: 'Azure Blob Storage.' },
        { id: 'b', text: 'Azure Cache for Redis.' },
        { id: 'c', text: 'Azure SQL Database.' },
        { id: 'd', text: 'Azure Cosmos DB for Table.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Cosmos DB for Table is wire-protocol compatible with Azure Table Storage but adds global distribution, automatic indexing, single-digit millisecond latency SLAs, and elastic scalability. Existing Table Storage SDKs work with minimal or no code changes.',
    },
    {
      id: 'dp900-52',
      topic: 'Non-Relational Data on Azure',
      question:
        'A gaming company stores each user\'s session state as JSON, with reads and writes happening thousands of times per second. They need in-memory caching with sub-millisecond latency. Which Azure service is best for this scenario?',
      options: [
        { id: 'a', text: 'Azure Cache for Redis.' },
        { id: 'b', text: 'Azure Table Storage.' },
        { id: 'c', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Azure Blob Storage.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Cache for Redis is an in-memory data store that delivers sub-millisecond latency for caching session state and frequently accessed data. Cosmos DB offers single-digit millisecond latency at scale but is a persistent store, not an in-memory cache. Table and Blob Storage are disk-based.',
    },
    {
      id: 'dp900-53',
      topic: 'Non-Relational Data on Azure',
      question:
        'A data architect needs to store large volumes of unstructured log files that are written once and read rarely. Cost efficiency is the priority. Which Azure Blob Storage access tier should they use?',
      options: [
        { id: 'a', text: 'Hot tier.' },
        { id: 'b', text: 'Cool tier.' },
        { id: 'c', text: 'Cold tier.' },
        { id: 'd', text: 'Archive tier.' },
      ],
      correctId: 'd',
      explanation:
        'The Archive tier has the lowest storage cost and is designed for data that is rarely accessed and can tolerate retrieval times measured in hours. Hot is for frequently accessed data, Cool for infrequently accessed data with 30-day minimum retention, and Cold is for data with a 90-day minimum.',
    },
    {
      id: 'dp900-54',
      topic: 'Non-Relational Data on Azure',
      question:
        'A team building a microservices application wants to decouple services using Azure Storage so that one service posts work items and another picks them up asynchronously. Which Azure Storage service supports this pattern?',
      options: [
        { id: 'a', text: 'Azure Blob Storage.' },
        { id: 'b', text: 'Azure Table Storage.' },
        { id: 'c', text: 'Azure Queue Storage.' },
        { id: 'd', text: 'Azure Files.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Queue Storage is designed for decoupled asynchronous messaging between application components. Blob Storage holds binary objects, Table Storage is a NoSQL key-value store, and Azure Files provides managed SMB/NFS file shares.',
    },
    {
      id: 'dp900-55',
      topic: 'Non-Relational Data on Azure',
      question:
        'Azure Cosmos DB charges for read and write operations using a currency called RU/s. What does a Request Unit (RU) represent?',
      options: [
        { id: 'a', text: 'The cost per GB of storage consumed per second.' },
        { id: 'b', text: 'A normalised unit of compute representing CPU, memory, and IOPS consumed by a database operation.' },
        { id: 'c', text: 'The number of replicas across which data is written.' },
        { id: 'd', text: 'The network bandwidth consumed by a single document read.' },
      ],
      correctId: 'b',
      explanation:
        'An RU (Request Unit) is a normalised measure that abstracts CPU, memory, and IOPS into a single unit. Provisioned throughput (RU/s) controls how many operations Cosmos DB can serve per second. It is not a storage, replica, or network-only metric.',
    },
    {
      id: 'dp900-56',
      topic: 'Non-Relational Data on Azure',
      question:
        'A team needs to share configuration files between Azure virtual machines using a fully managed file-share accessible via SMB protocol. Which Azure Storage service should they use?',
      options: [
        { id: 'a', text: 'Azure Files.' },
        { id: 'b', text: 'Azure Queue Storage.' },
        { id: 'c', text: 'Azure Table Storage.' },
        { id: 'd', text: 'Azure Blob Storage.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Files provides fully managed cloud file shares accessible via SMB (and NFS) protocol, suitable for lifting on-premises file shares to the cloud or sharing configuration data across VMs. Blob Storage is for objects; Queue is for messaging; Table is for NoSQL key-value data.',
    },
    {
      id: 'dp900-57',
      topic: 'Non-Relational Data on Azure',
      question:
        'Azure Cosmos DB for NoSQL stores data as JSON documents in containers. What is the equivalent terminology for a container in the Cosmos DB for MongoDB API?',
      options: [
        { id: 'a', text: 'Table.' },
        { id: 'b', text: 'Keyspace.' },
        { id: 'c', text: 'Collection.' },
        { id: 'd', text: 'Graph.' },
      ],
      correctId: 'c',
      explanation:
        'In the MongoDB API, what Cosmos DB calls a container is referred to as a Collection, matching MongoDB terminology. In the Table API it is a Table; in the Cassandra API it is a Table within a Keyspace; in the Gremlin API it is a Graph.',
    },
    {
      id: 'dp900-58',
      topic: 'Non-Relational Data on Azure',
      question:
        'A team needs a Cosmos DB consistency level so that reads within a single client session always reflect that session\'s own writes, while offering better read availability than Strong. Which consistency level should they configure?',
      options: [
        { id: 'a', text: 'Strong.' },
        { id: 'b', text: 'Session.' },
        { id: 'c', text: 'Eventual.' },
        { id: 'd', text: 'Consistent prefix.' },
      ],
      correctId: 'b',
      explanation:
        'Session consistency is the default and most widely used level in Cosmos DB. It guarantees that within a single client session, reads reflect all previous writes made by that session. Strong guarantees all clients see the same view; Eventual offers no freshness guarantee.',
    },
    {
      id: 'dp900-59',
      topic: 'Non-Relational Data on Azure',
      question:
        'A developer is choosing between Azure Blob Storage and Azure Table Storage. Which statement correctly distinguishes the two?',
      options: [
        { id: 'a', text: 'Blob Storage is optimised for large unstructured binary objects; Table Storage is a NoSQL key-value store for semi-structured data.' },
        { id: 'b', text: 'Table Storage is for binary objects; Blob Storage is for structured tabular data.' },
        { id: 'c', text: 'Both services store data in the same format and are interchangeable.' },
        { id: 'd', text: 'Blob Storage requires a schema; Table Storage stores data without any keys.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Blob Storage is designed for large unstructured files (images, videos, logs). Azure Table Storage is a NoSQL key-value store (partition key + row key) for semi-structured data. They serve different data access patterns and are not interchangeable.',
    },
    {
      id: 'dp900-60',
      topic: 'Non-Relational Data on Azure',
      question:
        'A team migrates a Cassandra application to Azure Cosmos DB for Apache Cassandra. What is the largest operational advantage over running a self-managed Apache Cassandra cluster?',
      options: [
        { id: 'a', text: 'The Cassandra API requires zero configuration of partition keys.' },
        { id: 'b', text: 'Cosmos DB manages infrastructure, backups, and global distribution automatically, removing cluster administration overhead.' },
        { id: 'c', text: 'The Cassandra API supports more consistency levels than native Cassandra.' },
        { id: 'd', text: 'The Cassandra API enables schema-less data storage with no row key required.' },
      ],
      correctId: 'b',
      explanation:
        'The main advantage of a managed service like Cosmos DB is elimination of cluster administration: no node provisioning, patch management, or manual backup setup. Global distribution and elastic scale are built-in. Partition keys are still required, and the set of consistency levels differs rather than expands.',
    },

    // ── Analytics Workloads on Azure (dp900-61 to dp900-100) ──────────────
    {
      id: 'dp900-61',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data engineering team is evaluating Microsoft Fabric. Which component acts as the single, unified logical data lake that underpins all Fabric workloads?',
      options: [
        { id: 'a', text: 'OneLake.' },
        { id: 'b', text: 'Microsoft Fabric Lakehouse.' },
        { id: 'c', text: 'Azure Data Lake Storage Gen2.' },
        { id: 'd', text: 'Fabric Eventhouse.' },
      ],
      correctId: 'a',
      explanation:
        'OneLake is the unified, organisation-wide logical data lake built into every Microsoft Fabric tenant. It underpins all Fabric workloads including Lakehouse, Warehouse, Real-Time Intelligence, and Power BI. A Lakehouse is a Fabric item that organises data within OneLake, not the storage layer itself.',
    },
    {
      id: 'dp900-62',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data engineering team needs to store structured and unstructured data, run both Spark transformations and SQL queries against the same data, and use a medallion (bronze/silver/gold) architecture. Which Microsoft Fabric item is designed for this pattern?',
      options: [
        { id: 'a', text: 'Fabric Data Warehouse.' },
        { id: 'b', text: 'Fabric Eventhouse.' },
        { id: 'c', text: 'Fabric Lakehouse.' },
        { id: 'd', text: 'Azure Synapse Analytics serverless SQL pool.' },
      ],
      correctId: 'c',
      explanation:
        'A Fabric Lakehouse stores data as Delta Parquet files in OneLake and provides both a Spark engine for data engineering and a SQL analytics endpoint for T-SQL queries. It is the primary item for the medallion architecture. The Warehouse is SQL-only and structured; Eventhouse handles real-time streaming data.',
    },
    {
      id: 'dp900-63',
      topic: 'Analytics Workloads on Azure',
      question:
        'A BI team needs a high-performance, fully managed SQL analytics engine within Microsoft Fabric that supports full T-SQL including stored procedures, views, and DML statements on structured data. Which Fabric item should they use?',
      options: [
        { id: 'a', text: 'Fabric Lakehouse.' },
        { id: 'b', text: 'Fabric Eventhouse.' },
        { id: 'c', text: 'Azure Synapse Analytics Spark pool.' },
        { id: 'd', text: 'Fabric Data Warehouse.' },
      ],
      correctId: 'd',
      explanation:
        'Fabric Data Warehouse is a fully managed SQL-based analytics store with complete T-SQL support, including stored procedures, views, and DML. It is designed for structured relational analytics. The Lakehouse SQL analytics endpoint is read-only via T-SQL; Eventhouse is for real-time event data.',
    },
    {
      id: 'dp900-64',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company uses Azure Data Factory to move data from an on-premises SQL Server database to an Azure Data Lake every night. Which top-level ADF concept defines the sequence of copy and transformation steps?',
      options: [
        { id: 'a', text: 'Linked service.' },
        { id: 'b', text: 'Dataset.' },
        { id: 'c', text: 'Pipeline.' },
        { id: 'd', text: 'Integration runtime.' },
      ],
      correctId: 'c',
      explanation:
        'A Pipeline in Azure Data Factory is a logical grouping of activities that perform a unit of work, such as copying and transforming data. Linked services define connections to data stores; datasets describe data structures; integration runtimes provide the compute infrastructure for activities.',
    },
    {
      id: 'dp900-65',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data team uses Azure Synapse Analytics and needs to query Parquet files directly in Azure Data Lake Storage without loading data into a dedicated pool first. Which Synapse feature enables this pay-per-query approach?',
      options: [
        { id: 'a', text: 'Azure Synapse dedicated SQL pool.' },
        { id: 'b', text: 'Azure Synapse Spark pool.' },
        { id: 'c', text: 'Azure Synapse serverless SQL pool.' },
        { id: 'd', text: 'Azure Synapse Link for Azure Cosmos DB.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Synapse serverless SQL pool uses T-SQL to query files (Parquet, CSV, Delta) directly in the data lake without loading data, billing only for data processed. Dedicated SQL pools require pre-loaded data and provisioned DWUs. Spark pools run distributed Python/Scala/R jobs.',
    },
    {
      id: 'dp900-66',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data analyst builds a Power BI report connected to a centralised data model that defines measures, hierarchies, and relationships used across multiple reports in the organisation. What is this central data model called in Power BI as of 2023?',
      options: [
        { id: 'a', text: 'A Power BI semantic model.' },
        { id: 'b', text: 'A Power BI dataset.' },
        { id: 'c', text: 'A Power BI dataflow.' },
        { id: 'd', text: 'A Power BI paginated report.' },
      ],
      correctId: 'a',
      explanation:
        'As of 2023, Power BI renamed "dataset" to "semantic model" to better reflect its purpose as the reusable layer containing measures, hierarchies, and relationships. "Dataset" is the legacy term. Dataflows are data preparation artefacts; paginated reports are pixel-perfect printable reports.',
    },
    {
      id: 'dp900-67',
      topic: 'Analytics Workloads on Azure',
      question:
        'A compliance team needs a Power BI report that renders a precise, printable invoice-style document with exact pixel layout, supports multi-page output for thousands of rows, and can be exported to PDF with full fidelity. Which Power BI artefact type meets this requirement?',
      options: [
        { id: 'a', text: 'A Power BI paginated report.' },
        { id: 'b', text: 'A standard Power BI interactive report.' },
        { id: 'c', text: 'A Power BI dashboard.' },
        { id: 'd', text: 'A Power BI dataflow.' },
      ],
      correctId: 'a',
      explanation:
        'Power BI paginated reports (RDL-based) are designed for pixel-perfect, print-ready documents that can span many pages, unlike standard interactive reports which are limited in page count and layout control. Dashboards are single-page collections of pinned visuals. Dataflows are ETL artefacts, not reports.',
    },
    {
      id: 'dp900-68',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company needs to run large-scale Apache Spark workloads for machine learning and collaborative data engineering with notebooks, using a cloud-managed Spark service on Azure that is separate from Microsoft Fabric. Which service should they choose?',
      options: [
        { id: 'a', text: 'Azure Stream Analytics.' },
        { id: 'b', text: 'Azure Databricks.' },
        { id: 'c', text: 'Azure Data Factory.' },
        { id: 'd', text: 'Azure SQL Managed Instance.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Databricks is a fully managed Apache Spark platform optimised for data engineering, machine learning, and collaborative notebook-based analytics. Stream Analytics is for real-time streaming SQL queries; Data Factory orchestrates pipelines; SQL Managed Instance is a relational database service.',
    },
    {
      id: 'dp900-69',
      topic: 'Analytics Workloads on Azure',
      question:
        'A manager asks what distinguishes a Power BI dashboard from a Power BI report. Which statement is accurate?',
      options: [
        { id: 'a', text: 'Dashboards support cross-filtering between visuals; reports do not.' },
        { id: 'b', text: 'Reports are always published to the web; dashboards remain private.' },
        { id: 'c', text: 'Dashboards support paginated pixel-perfect output; reports do not.' },
        { id: 'd', text: 'Dashboards are single-page views of pinned tiles from multiple sources; reports are multi-page, interactive documents connected to a single semantic model.' },
      ],
      correctId: 'd',
      explanation:
        'A Power BI dashboard is a single-page canvas of pinned tiles pulled from multiple reports or semantic models. Reports are multi-page interactive documents connected to one semantic model with filtering and drill-through capabilities. Cross-filtering works in reports, not dashboards.',
    },
    {
      id: 'dp900-70',
      topic: 'Analytics Workloads on Azure',
      question:
        'A team uses Azure Stream Analytics to count website page views in five-minute non-overlapping windows aligned to the clock, with each event counted in exactly one window. Which window type achieves this?',
      options: [
        { id: 'a', text: 'Tumbling window.' },
        { id: 'b', text: 'Hopping window.' },
        { id: 'c', text: 'Sliding window.' },
        { id: 'd', text: 'Session window.' },
      ],
      correctId: 'a',
      explanation:
        'A tumbling window divides time into equal, non-overlapping segments aligned to a fixed start, and each event belongs to exactly one window. A hopping window allows overlap. A session window adapts to activity gaps. A sliding window emits on every event.',
    },
    {
      id: 'dp900-71',
      topic: 'Analytics Workloads on Azure',
      question:
        'A Microsoft Fabric workspace uses Real-Time Intelligence to ingest, store, and query high-volume time-series telemetry from thousands of sensors using KQL. Which Fabric item stores the real-time data?',
      options: [
        { id: 'a', text: 'Fabric Lakehouse.' },
        { id: 'b', text: 'Fabric Data Warehouse.' },
        { id: 'c', text: 'OneLake shortcut.' },
        { id: 'd', text: 'Fabric Eventhouse.' },
      ],
      correctId: 'd',
      explanation:
        'The Eventhouse is the Fabric Real-Time Intelligence item that stores high-volume streaming and time-series data and supports KQL for near-real-time queries. Lakehouse and Warehouse are batch-oriented analytical stores. A OneLake shortcut is a pointer to external data, not a storage item.',
    },
    {
      id: 'dp900-72',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data engineer is comparing Azure Data Factory (standalone) with Data Factory in Microsoft Fabric. Which statement is accurate?',
      options: [
        { id: 'a', text: 'Data Factory in Fabric replaces standalone Azure Data Factory entirely; standalone ADF is retired.' },
        { id: 'b', text: 'Data Factory in Fabric provides pipeline and dataflow capabilities within the Fabric workspace; standalone Azure Data Factory remains a separate Azure service for complex enterprise integration.' },
        { id: 'c', text: 'Data Factory in Fabric only supports Azure data sources; standalone ADF supports on-premises sources.' },
        { id: 'd', text: 'The two services are identical in every feature and can always be used interchangeably.' },
      ],
      correctId: 'b',
      explanation:
        'Data Factory in Microsoft Fabric is the data integration experience within Fabric, covering pipelines and dataflows for Fabric workloads. Standalone Azure Data Factory is a separate, mature service with a broader feature set including SSIS integration and extensive connector coverage. They coexist and are not interchangeable in all scenarios.',
    },
    {
      id: 'dp900-73',
      topic: 'Analytics Workloads on Azure',
      question:
        'A streaming analytics solution must calculate a rolling five-minute average where a new result is produced every minute, meaning each event can appear in multiple windows. Which Azure Stream Analytics window type should be used?',
      options: [
        { id: 'a', text: 'Tumbling window.' },
        { id: 'b', text: 'Hopping window.' },
        { id: 'c', text: 'Session window.' },
        { id: 'd', text: 'Snapshot window.' },
      ],
      correctId: 'b',
      explanation:
        'A hopping window has a fixed size and a hop interval smaller than the window size, so windows overlap and each event can appear in multiple windows. This is the right model for a rolling average. A tumbling window does not overlap; a session window adapts to data gaps; a snapshot window groups events with the same timestamp.',
    },
    {
      id: 'dp900-74',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company currently uses Azure Synapse Analytics for data warehousing. Microsoft has recommended they evaluate Microsoft Fabric as a future direction. What is the primary reason Fabric is being positioned as the preferred platform for new workloads?',
      options: [
        { id: 'a', text: 'Fabric is cheaper in all scenarios than Synapse Analytics.' },
        { id: 'b', text: 'Synapse Analytics is being retired in 2024.' },
        { id: 'c', text: 'Fabric supports only NoSQL workloads, whereas Synapse supports only SQL.' },
        { id: 'd', text: 'Fabric provides a unified SaaS analytics platform with OneLake at its core, eliminating the need to manage separate storage and compute services.' },
      ],
      correctId: 'd',
      explanation:
        'Microsoft Fabric is positioned as a unified SaaS analytics platform where all experiences (Lakehouse, Warehouse, Real-Time Intelligence, Power BI) share OneLake storage and a single tenant, reducing the integration overhead of combining multiple separate Azure services. Synapse Analytics remains available and is not retired.',
    },
    {
      id: 'dp900-75',
      topic: 'Analytics Workloads on Azure',
      question:
        'A business analyst needs to create a bar chart in Power BI that shows total revenue by product category. The revenue measure is defined in the semantic model. Which Power BI concept does the analyst drag onto the visual field wells?',
      options: [
        { id: 'a', text: 'Report pages and bookmarks.' },
        { id: 'b', text: 'Semantic model fields (dimensions and measures).' },
        { id: 'c', text: 'Dataset refresh schedules.' },
        { id: 'd', text: 'Power BI gateway connections.' },
      ],
      correctId: 'b',
      explanation:
        'Power BI reports are built by dragging fields from the semantic model (dimensions for categories, measures for aggregated values) into visual field wells. Report pages and bookmarks control navigation; refresh schedules keep data current; gateways connect on-premises sources.',
    },
    {
      id: 'dp900-76',
      topic: 'Analytics Workloads on Azure',
      question:
        'A Fabric Lakehouse organises data into bronze, silver, and gold layers. What is the primary purpose of the gold layer in a medallion architecture?',
      options: [
        { id: 'a', text: 'To store archived data that is no longer actively used.' },
        { id: 'b', text: 'To store raw, unprocessed data as it arrives from source systems.' },
        { id: 'c', text: 'To store business-ready, aggregated data optimised for reporting and analytics.' },
        { id: 'd', text: 'To store validated and cleansed data ready for further refinement.' },
      ],
      correctId: 'c',
      explanation:
        'In the medallion architecture, the gold layer contains curated, business-ready data, often aggregated or joined, that feeds BI reports and analytical queries. Bronze holds raw ingested data; silver holds validated and cleansed data. There is no dedicated archive layer in the standard medallion pattern.',
    },
    {
      id: 'dp900-77',
      topic: 'Analytics Workloads on Azure',
      question:
        'An Azure Synapse Analytics workspace has both a dedicated SQL pool and a serverless SQL pool. A data engineer needs to load 5 TB of historical data and serve fast, concurrent SQL queries from a BI tool with consistent performance. Which pool type is most appropriate?',
      options: [
        { id: 'a', text: 'Dedicated SQL pool, because it provides reserved compute for consistent, high-throughput SQL analytics.' },
        { id: 'b', text: 'Serverless SQL pool, because it bills per query and requires no pre-provisioning.' },
        { id: 'c', text: 'Spark pool, because it supports SQL queries via Spark SQL.' },
        { id: 'd', text: 'Serverless SQL pool, because it supports DML statements for loading data.' },
      ],
      correctId: 'a',
      explanation:
        'Dedicated SQL pools provide pre-provisioned, reserved compute for consistent performance at scale and are designed for high-throughput data warehousing with loaded data. Serverless SQL pools are pay-per-query and query files in the lake without loading them, which is not optimal for consistent concurrent BI queries. Spark pools are not T-SQL-first.',
    },
    {
      id: 'dp900-78',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data pipeline built in Azure Data Factory needs to move data from an on-premises Oracle database to Azure Data Lake Storage. Which ADF component provides the self-hosted compute environment that can access the on-premises network?',
      options: [
        { id: 'a', text: 'Linked service.' },
        { id: 'b', text: 'Dataset.' },
        { id: 'c', text: 'Self-hosted Integration Runtime.' },
        { id: 'd', text: 'Managed Virtual Network.' },
      ],
      correctId: 'c',
      explanation:
        'A Self-hosted Integration Runtime is installed on an on-premises or private-network machine and enables ADF to connect to data stores not directly accessible from the internet. Linked services define connections; datasets describe data structures; Managed VNet is for securing cloud-to-cloud network traffic.',
    },
    {
      id: 'dp900-79',
      topic: 'Analytics Workloads on Azure',
      question:
        'Which Microsoft Fabric workload experience allows a data scientist to train and deploy machine learning models using Python notebooks and experiment tracking within the Fabric workspace?',
      options: [
        { id: 'a', text: 'Fabric Data Engineering.' },
        { id: 'b', text: 'Fabric Data Factory.' },
        { id: 'c', text: 'Fabric Real-Time Intelligence.' },
        { id: 'd', text: 'Fabric Data Science.' },
      ],
      correctId: 'd',
      explanation:
        'Fabric Data Science provides notebooks, ML experiments, and model tracking integrated with OneLake for training and deploying machine learning models. Data Engineering handles Spark-based data transformations; Data Factory handles pipelines and dataflows; Real-Time Intelligence handles streaming analytics.',
    },
    {
      id: 'dp900-80',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company wants to implement a real-time analytics solution in Microsoft Fabric that ingests, processes, and visualises streaming event data with low latency using KQL queries and automatic data indexing. Which Fabric experience covers this end-to-end?',
      options: [
        { id: 'a', text: 'Fabric Real-Time Intelligence with Eventstreams and Eventhouse.' },
        { id: 'b', text: 'Fabric Data Engineering with Delta tables.' },
        { id: 'c', text: 'Fabric Data Warehouse with streaming inserts.' },
        { id: 'd', text: 'Azure Synapse Analytics Spark Streaming.' },
      ],
      correctId: 'a',
      explanation:
        'Fabric Real-Time Intelligence combines Eventstreams (real-time ingestion routing) and Eventhouse (KQL-based storage and analytics) to deliver an end-to-end real-time analytics solution within the Fabric workspace. Delta tables in the Lakehouse and the Warehouse are batch-oriented analytical stores.',
    },
    {
      id: 'dp900-81',
      topic: 'Analytics Workloads on Azure',
      question:
        'A Power BI designer wants to make data from the semantic model available to end users through a curated app distributed across the organisation so that users do not need access to the underlying workspace. Which Power BI distribution method achieves this?',
      options: [
        { id: 'a', text: 'Sharing the workspace directly with all users.' },
        { id: 'b', text: 'Publishing a Power BI App from the workspace.' },
        { id: 'c', text: 'Exporting the report to PDF and emailing it.' },
        { id: 'd', text: 'Pinning report visuals to SharePoint.' },
      ],
      correctId: 'b',
      explanation:
        'A Power BI App packages reports and dashboards from a workspace into a curated experience that can be distributed to users without granting them workspace access. Sharing the workspace grants full workspace access. PDF export is static and not self-service. SharePoint embedding does not package a managed app.',
    },
    {
      id: 'dp900-82',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data engineer needs to transform data at scale using PySpark notebooks in an Azure Synapse Analytics workspace without managing a Spark cluster directly. Which pool type in Synapse provides on-demand Spark compute?',
      options: [
        { id: 'a', text: 'Azure Synapse dedicated SQL pool.' },
        { id: 'b', text: 'Azure Synapse serverless SQL pool.' },
        { id: 'c', text: 'Azure Synapse Apache Spark pool.' },
        { id: 'd', text: 'Azure HDInsight Hadoop cluster.' },
      ],
      correctId: 'c',
      explanation:
        'An Apache Spark pool in Azure Synapse Analytics provides on-demand, auto-scaling Spark compute for notebook-based data engineering and data science. Dedicated and serverless SQL pools use T-SQL. HDInsight is a separate IaaS-style managed cluster service, not part of Synapse.',
    },
    {
      id: 'dp900-83',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company uses Azure Event Hubs to ingest telemetry from vehicles. A Stream Analytics job reads from Event Hubs, calculates metrics, and writes results to Power BI for live dashboards. Which component role does Azure Event Hubs play in this architecture?',
      options: [
        { id: 'a', text: 'A batch data store for archiving historical telemetry.' },
        { id: 'b', text: 'A stream processing engine that applies windowing functions.' },
        { id: 'c', text: 'A visualisation layer for real-time dashboards.' },
        { id: 'd', text: 'A high-throughput event ingestion and buffering service (event broker).' },
      ],
      correctId: 'd',
      explanation:
        'Azure Event Hubs acts as an event broker (message bus) that ingests millions of events per second, buffers them, and allows multiple downstream consumers to read from the same stream. Stream Analytics performs the processing; Power BI provides the visualisation.',
    },
    {
      id: 'dp900-84',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data team is designing an ELT pipeline in Microsoft Fabric. In ELT, where does the transformation step occur compared to a traditional ETL pattern?',
      options: [
        { id: 'a', text: 'ELT transforms data before loading it into the destination store, like ETL.' },
        { id: 'b', text: 'ELT loads raw data into the destination store first and then transforms it in place using the destination compute.' },
        { id: 'c', text: 'ELT skips the transformation step entirely and loads raw data without modification.' },
        { id: 'd', text: 'ELT requires an on-premises staging area before transformation can happen.' },
      ],
      correctId: 'b',
      explanation:
        'In ELT, raw data is loaded into the destination store (such as a Fabric Lakehouse) first, and transformation happens inside the store using its own compute (Spark or SQL). This is the opposite of ETL, where data is transformed in a separate engine before being loaded into the destination.',
    },
    {
      id: 'dp900-85',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data analyst uses Power BI Desktop and clicks a bar for the West region on a bar chart. All other visuals on the page immediately filter to show only West data. Which Power BI feature is this?',
      options: [
        { id: 'a', text: 'Drill-through.' },
        { id: 'b', text: 'Bookmarks.' },
        { id: 'c', text: 'Cross-filtering.' },
        { id: 'd', text: 'Row-level security.' },
      ],
      correctId: 'c',
      explanation:
        'Cross-filtering (cross-highlighting) is the default Power BI behaviour where selecting a data point in one visual automatically filters or highlights related data in other visuals on the same report page. Drill-through navigates to a detail page; bookmarks capture a saved view state; row-level security restricts data access per user.',
    },
    {
      id: 'dp900-86',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company runs Azure Synapse Analytics alongside Microsoft Fabric. The data architect says Synapse is "being deprioritised for new analytics workloads." Which statement accurately describes the relationship between the two?',
      options: [
        { id: 'a', text: 'Azure Synapse Analytics has been retired and customers must migrate to Fabric immediately.' },
        { id: 'b', text: 'Azure Synapse Analytics remains a supported Azure service, but Microsoft is steering customers toward Fabric for new unified analytics workloads.' },
        { id: 'c', text: 'Fabric is only for Power BI; Synapse is for all data engineering workloads.' },
        { id: 'd', text: 'Synapse dedicated SQL pools have been replaced by Fabric Eventhouse.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Synapse Analytics is a fully supported Azure service with no retirement announced. Microsoft is positioning Microsoft Fabric as the preferred platform for new analytics workloads because of its unified SaaS model, but existing Synapse investments remain valid. Fabric Warehouse, not Eventhouse, is the successor to dedicated SQL pool analytics.',
    },
    {
      id: 'dp900-87',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company uses Azure Data Factory to orchestrate a nightly pipeline that copies data from Azure SQL Database to an Azure Data Lake and then triggers a Databricks notebook for transformation. Which activity type in ADF triggers the Databricks notebook?',
      options: [
        { id: 'a', text: 'Copy activity.' },
        { id: 'b', text: 'Control activity (If Condition).' },
        { id: 'c', text: 'Linked service.' },
        { id: 'd', text: 'Data transformation activity (Azure Databricks Notebook activity).' },
      ],
      correctId: 'd',
      explanation:
        'Azure Data Factory supports data transformation activities including an Azure Databricks Notebook activity that runs a notebook on an Azure Databricks cluster. Copy activity moves data; control activities (If, For Each, Wait) manage pipeline flow; linked services define connections, not execute compute.',
    },
    {
      id: 'dp900-88',
      topic: 'Analytics Workloads on Azure',
      question:
        'A team needs OneLake to provide virtual access to data stored in Azure Data Lake Storage Gen2 without copying the data. Which Fabric feature enables this zero-copy access?',
      options: [
        { id: 'a', text: 'Fabric Mirroring.' },
        { id: 'b', text: 'OneLake Shortcuts.' },
        { id: 'c', text: 'Fabric Eventstreams.' },
        { id: 'd', text: 'Azure Data Factory Copy activity.' },
      ],
      correctId: 'b',
      explanation:
        'OneLake Shortcuts create embedded references to data in external storage systems (ADLS Gen2, Amazon S3, GCS) without copying the data, making it appear as part of the local OneLake namespace. Mirroring replicates database data into Fabric; Eventstreams handle real-time ingestion; Copy activity physically moves data.',
    },
    {
      id: 'dp900-89',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data engineering team builds a pipeline in Microsoft Fabric Data Factory. They want to transform data using a visual, code-free mapping interface that runs on Spark. Which Fabric feature provides this?',
      options: [
        { id: 'a', text: 'Fabric Notebooks (PySpark).' },
        { id: 'b', text: 'Fabric Lakehouse SQL analytics endpoint.' },
        { id: 'c', text: 'Azure Stream Analytics job.' },
        { id: 'd', text: 'Fabric Dataflows Gen2.' },
      ],
      correctId: 'd',
      explanation:
        'Fabric Dataflows Gen2 provide a visual, code-free ETL/ELT authoring experience (Power Query) that executes on Spark at scale. Notebooks require writing code; the SQL analytics endpoint is for querying, not transforming; Stream Analytics is for real-time event streams, not batch data preparation.',
    },
    {
      id: 'dp900-90',
      topic: 'Analytics Workloads on Azure',
      question:
        'A Power BI administrator is asked to explain the difference between a Power BI report and a Power BI dashboard. Which response is correct?',
      options: [
        { id: 'a', text: 'Dashboards can have multiple pages; reports are always single-page.' },
        { id: 'b', text: 'Reports and dashboards are identical; the names are interchangeable.' },
        { id: 'c', text: 'Dashboards support full cross-filtering; reports do not support any filtering.' },
        { id: 'd', text: 'A report can have multiple pages; a dashboard is always a single page of pinned tiles from one or more sources.' },
      ],
      correctId: 'd',
      explanation:
        'Power BI reports are multi-page interactive documents where filtering and drill-through work across visuals on a page. Dashboards are always a single page assembled from tiles pinned from multiple reports or semantic models, with no native cross-filtering. The two artefacts serve different purposes.',
    },
    {
      id: 'dp900-91',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data analyst creates a DAX measure in Power BI to calculate year-over-year revenue growth. Where is this measure stored?',
      options: [
        { id: 'a', text: 'In the Azure SQL Database source table.' },
        { id: 'b', text: 'In the semantic model\'s data model.' },
        { id: 'c', text: 'In the Power BI report (.pbix) file\'s visual layer.' },
        { id: 'd', text: 'In the Power BI gateway.' },
      ],
      correctId: 'b',
      explanation:
        'DAX measures are defined and stored in the semantic model\'s data model layer. They are reusable across all reports that connect to that semantic model. The visual layer renders the measure\'s results but does not store the definition; the source database stores raw data, not DAX logic.',
    },
    {
      id: 'dp900-92',
      topic: 'Analytics Workloads on Azure',
      question:
        'A streaming pipeline uses Azure Event Hubs as the source and Azure Stream Analytics to process events. The job must count events per sensor ID in five-minute non-overlapping windows and write results to Azure Cosmos DB. Which Stream Analytics clause defines the time window?',
      options: [
        { id: 'a', text: 'PARTITION BY SensorID.' },
        { id: 'b', text: 'ORDER BY EventTime DESC.' },
        { id: 'c', text: 'HAVING COUNT(*) > 0.' },
        { id: 'd', text: 'GROUP BY SensorID, TumblingWindow(minute, 5).' },
      ],
      correctId: 'd',
      explanation:
        'Azure Stream Analytics window functions are used in the GROUP BY clause. TumblingWindow(minute, 5) creates a five-minute non-overlapping window. PARTITION BY distributes workload across parallel cores; ORDER BY sorts results; HAVING filters aggregated results but does not define the time window.',
    },
    {
      id: 'dp900-93',
      topic: 'Analytics Workloads on Azure',
      question:
        'A Microsoft Fabric deployment needs to make data from an Amazon S3 bucket appear as part of the Fabric workspace without copying the data to OneLake. Which Fabric feature provides this?',
      options: [
        { id: 'a', text: 'Fabric Mirroring for Amazon S3.' },
        { id: 'b', text: 'OneLake Shortcut to Amazon S3.' },
        { id: 'c', text: 'Azure Data Factory Copy activity to Fabric Lakehouse.' },
        { id: 'd', text: 'Fabric Eventstream with S3 source connector.' },
      ],
      correctId: 'b',
      explanation:
        'OneLake Shortcuts support Amazon S3 as an external storage target, allowing data to appear as part of the Fabric namespace without copying. Mirroring replicates database data (not object storage); Copy activity physically moves data; Eventstreams handle real-time event ingestion, not static object storage.',
    },
    {
      id: 'dp900-94',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data architect is selecting between Azure Synapse Analytics dedicated SQL pool and Microsoft Fabric Data Warehouse for a new data warehousing project. Which statement correctly identifies a key architectural difference?',
      options: [
        { id: 'a', text: 'Fabric Data Warehouse uses separate storage accounts per workspace; Synapse uses OneLake.' },
        { id: 'b', text: 'Fabric Data Warehouse is built on OneLake and is a SaaS service; Synapse dedicated SQL pool is a separately provisioned service requiring DWU management.' },
        { id: 'c', text: 'Synapse dedicated SQL pool supports open Delta format; Fabric Data Warehouse does not.' },
        { id: 'd', text: 'Fabric Data Warehouse does not support T-SQL; Synapse dedicated SQL pool does.' },
      ],
      correctId: 'b',
      explanation:
        'Fabric Data Warehouse is a SaaS offering backed by OneLake with no DWU provisioning; Microsoft manages the compute. Synapse dedicated SQL pool requires provisioning DWUs and separate storage management. Both support T-SQL and open Delta format for interoperability.',
    },
    {
      id: 'dp900-95',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data team runs Azure Databricks notebooks to perform feature engineering for machine learning, then writes the output to Delta Lake tables. Which Azure service provides managed Apache Spark clusters with collaborative notebooks and MLflow integration for this workflow?',
      options: [
        { id: 'a', text: 'Azure Data Factory.' },
        { id: 'b', text: 'Azure Synapse Analytics serverless SQL pool.' },
        { id: 'c', text: 'Azure Databricks.' },
        { id: 'd', text: 'Azure Stream Analytics.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Databricks provides managed Apache Spark with collaborative notebooks, auto-scaling clusters, MLflow for experiment tracking, and native Delta Lake support. ADF orchestrates pipelines but does not run Spark notebooks natively. Synapse serverless SQL is T-SQL-based. Stream Analytics is for streaming SQL, not ML.',
    },
    {
      id: 'dp900-96',
      topic: 'Analytics Workloads on Azure',
      question:
        'A Power BI designer schedules a data refresh so that the semantic model updates automatically from an Azure SQL Database source every morning. The database is behind a firewall with no public endpoint. What component is required?',
      options: [
        { id: 'a', text: 'A Power BI on-premises data gateway.' },
        { id: 'b', text: 'An Azure Data Factory pipeline.' },
        { id: 'c', text: 'A Power BI paginated report.' },
        { id: 'd', text: 'A Fabric Lakehouse.' },
      ],
      correctId: 'a',
      explanation:
        'A Power BI on-premises data gateway (or VNet gateway) is required to connect the Power BI service to data sources that are not publicly accessible, acting as a bridge between the cloud service and the protected network. ADF pipelines do not configure Power BI refresh connectivity; paginated reports and Lakehouses are not gateway substitutes.',
    },
    {
      id: 'dp900-97',
      topic: 'Analytics Workloads on Azure',
      question:
        'An analytics engineer is building a data pipeline that needs to identify all records in an Azure SQL Database source that have changed since the last pipeline run, rather than copying the entire table each time. Which data ingestion pattern does this describe?',
      options: [
        { id: 'a', text: 'Full load.' },
        { id: 'b', text: 'Schema-on-read.' },
        { id: 'c', text: 'Incremental load (Change Data Capture).' },
        { id: 'd', text: 'Lambda architecture.' },
      ],
      correctId: 'c',
      explanation:
        'Incremental load (often implemented with Change Data Capture) copies only the rows that have been inserted, updated, or deleted since the last run, reducing data volume and pipeline run time. A full load copies the entire source table every time, which is inefficient for large tables.',
    },
    {
      id: 'dp900-98',
      topic: 'Analytics Workloads on Azure',
      question:
        'A data team uses Microsoft Fabric and wants Power BI reports to query Lakehouse Delta tables directly from OneLake without importing data into a semantic model, achieving zero data duplication and fresh results. Which Power BI connectivity mode enables this?',
      options: [
        { id: 'a', text: 'Import mode.' },
        { id: 'b', text: 'DirectQuery mode.' },
        { id: 'c', text: 'Direct Lake mode.' },
        { id: 'd', text: 'Live connection to Azure Analysis Services.' },
      ],
      correctId: 'c',
      explanation:
        'Direct Lake mode is a Fabric-specific connectivity mode where Power BI reads Delta Parquet files directly from OneLake without importing data or sending queries to a SQL endpoint, combining the performance of Import mode with the freshness of DirectQuery. Import copies data; DirectQuery sends queries to the source engine.',
    },
    {
      id: 'dp900-99',
      topic: 'Analytics Workloads on Azure',
      question:
        'A company asks which Azure service is purpose-built for enterprise-scale interactive analytics using Apache Spark, offers Delta Live Tables for pipeline reliability, and integrates with Unity Catalog for data governance.',
      options: [
        { id: 'a', text: 'Azure Synapse Analytics Apache Spark pool.' },
        { id: 'b', text: 'Azure HDInsight.' },
        { id: 'c', text: 'Azure Databricks.' },
        { id: 'd', text: 'Microsoft Fabric Data Engineering.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Databricks offers Delta Live Tables (declarative ETL pipelines with quality controls), Unity Catalog (unified data governance across workspaces), and optimised Spark runtimes as enterprise-differentiated features. Synapse Spark pools and Fabric Data Engineering provide Spark but do not include Delta Live Tables or Unity Catalog.',
    },
    {
      id: 'dp900-100',
      topic: 'Analytics Workloads on Azure',
      question:
        'A newly hired data analyst asks which combination of Microsoft services represents a complete modern analytics workflow: ingest streaming events, store and transform data, and visualise results in interactive reports.',
      options: [
        { id: 'a', text: 'Azure SQL Database → Azure Table Storage → Azure Files → Excel.' },
        { id: 'b', text: 'Azure Blob Storage → Azure Queue Storage → Azure Cosmos DB for NoSQL → SSMS.' },
        { id: 'c', text: 'Azure Data Factory → Azure Cache for Redis → SQL Server on VMs → SSRS.' },
        { id: 'd', text: 'Azure Event Hubs → Azure Stream Analytics → Microsoft Fabric Lakehouse → Power BI.' },
      ],
      correctId: 'd',
      explanation:
        'A representative modern analytics stack uses Event Hubs for high-throughput event ingestion, Stream Analytics for real-time processing, a Fabric Lakehouse for storage and transformation, and Power BI for interactive visualisation. The other options mix services that do not form a coherent analytics pipeline.',
    },
  ],
}
