import type { ExamSet } from '../types'

export const az204: ExamSet = {
  examCode: 'AZ-204',
  examName: 'Azure Developer Associate',
  description:
    'One hundred practice questions at the level of the official AZ-204 exam. Develop Azure compute solutions, Azure storage, implement Azure security, monitor and optimise solutions, and connect to and consume Azure services and third-party services.',
  ceCourseSlug: 'azure-developer',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-developer',
  ceCoursePriceCents: null,
  questions: [
    {
      id: 'az204-1',
      topic: 'Develop Azure compute solutions',
      question:
        "Your Azure Functions app on the Consumption plan must respond within 200 ms after a long idle period, but users keep hitting cold starts on the first request of the morning. Which change addresses cold start without leaving a serverless billing model?",
      options: [
        { id: 'a', text: 'Switch to the Functions Premium plan and enable a minimum of pre-warmed instances.' },
        { id: 'b', text: 'Increase the functionTimeout setting in host.json.' },
        { id: 'c', text: 'Set WEBSITE_RUN_FROM_PACKAGE to 0 to keep files on the local disk.' },
        { id: 'd', text: 'Enable Always On in the Configuration blade of the Consumption plan.' },
      ],
      correctId: 'a',
      explanation:
        "The Functions Premium plan supports pre-warmed instances that stay ready, which removes cold start while keeping per-execution scaling. Always On is not available on Consumption, and increasing functionTimeout does not change start latency.",
    },
    {
      id: 'az204-2',
      topic: 'Develop for Azure storage',
      question:
        "You design an Azure Cosmos DB container for chat messages. Reads are almost always for a single tenant at a time, write volume is high, and one tenant must not exceed the RU/s of another. Which partition key fits best?",
      options: [
        { id: 'a', text: 'createdAt (ISO timestamp).' },
        { id: 'b', text: 'tenantId.' },
        { id: 'c', text: 'messageId (a GUID).' },
        { id: 'd', text: 'A constant value so all data lives in one partition.' },
      ],
      correctId: 'b',
      explanation:
        "Using tenantId keeps each tenant on its own logical partition, so reads stay single-partition and a hot tenant cannot starve another. A GUID spreads writes well but kills the per-tenant read pattern, and a timestamp creates a hot partition for current writes.",
    },
    {
      id: 'az204-3',
      topic: 'Implement Azure security',
      question:
        "An Azure App Service web app must read a connection string from Azure Key Vault without storing any credentials in code or configuration. What is the recommended setup?",
      options: [
        { id: 'a', text: 'Store the Key Vault access token in an app setting and refresh it nightly with a function.' },
        { id: 'b', text: 'Embed a service principal client secret in appsettings.json.' },
        { id: 'c', text: 'Enable system-assigned Managed Identity on the web app, grant it the Key Vault Secrets User role, and use a Key Vault reference in app settings.' },
        { id: 'd', text: 'Issue a SAS token from the Key Vault.' },
      ],
      correctId: 'c',
      explanation:
        "Managed Identity removes credential handling and Key Vault references in App Service inject the secret at runtime. SAS tokens do not exist for Key Vault, and storing a token or client secret defeats the goal.",
    },
    {
      id: 'az204-4',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You want a custom metric in Application Insights that tracks the number of items added to a shopping cart per minute on a high-traffic site. Which API call records this efficiently?",
      options: [
        { id: 'a', text: 'TelemetryClient.TrackTrace with a severity level.' },
        { id: 'b', text: 'TelemetryClient.TrackEvent for every cart add.' },
        { id: 'c', text: 'TelemetryClient.TrackException on every cart add.' },
        { id: 'd', text: 'TelemetryClient.GetMetric("CartAdds").TrackValue(1).' },
      ],
      correctId: 'd',
      explanation:
        "GetMetric returns a pre-aggregated metric that sends to Application Insights at one-minute intervals, which scales well for high-volume counters. TrackEvent fires one telemetry item per call and is heavier for raw counts.",
    },
    {
      id: 'az204-5',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An order service publishes events to multiple consumers (warehouse, billing, analytics) with at-least-once delivery and filtering by event type. The team wants a fully managed pub/sub service with HTTP webhooks and no polling. Which service fits best?",
      options: [
        { id: 'a', text: 'Azure Event Grid.' },
        { id: 'b', text: 'Azure Service Bus queue.' },
        { id: 'c', text: 'Azure Event Hubs.' },
        { id: 'd', text: 'Azure Storage Queue.' },
      ],
      correctId: 'a',
      explanation:
        "Event Grid is built for discrete events with topic and subscription filters and pushes to HTTP webhooks. Event Hubs targets high-throughput telemetry streams, and Service Bus queues are point-to-point.",
    },
    {
      id: 'az204-6',
      topic: 'Develop Azure compute solutions',
      question:
        "You need a long-running workflow that calls three HTTP APIs in sequence, where each call may take minutes. The orchestration must survive worker restarts. Which Durable Functions pattern fits?",
      options: [
        { id: 'a', text: 'A timer-triggered function that polls a database table.' },
        { id: 'b', text: 'Function chaining using an orchestrator function with await on each activity.' },
        { id: 'c', text: 'Fan-out/fan-in with Task.WhenAll.' },
        { id: 'd', text: 'Singleton actor with manual checkpoint to Blob Storage.' },
      ],
      correctId: 'b',
      explanation:
        "Function chaining is the canonical sequential pattern in Durable Functions and the orchestrator state is checkpointed to storage, so it resumes after a restart. Fan-out/fan-in is for parallel work, not sequential dependencies.",
    },
    {
      id: 'az204-7',
      topic: 'Develop for Azure storage',
      question:
        "A blob container stores monthly archive files that are written once and read maybe twice per year. You want to minimise storage cost while still allowing on-demand reads. Which access tier fits?",
      options: [
        { id: 'a', text: 'Hot tier.' },
        { id: 'b', text: 'Premium tier.' },
        { id: 'c', text: 'Cold tier.' },
        { id: 'd', text: 'Archive tier.' },
      ],
      correctId: 'c',
      explanation:
        "The Cold tier is priced below Cool with online retrieval, so reads return immediately at the lowest online cost. Archive is cheaper for storage but requires rehydration of up to 15 hours, which breaks on-demand reads.",
    },
    {
      id: 'az204-8',
      topic: 'Implement Azure security',
      question:
        "Your single-page app written in React uses MSAL.js to call a custom Web API protected by Microsoft Entra ID. Which OAuth 2.0 flow should the SPA use?",
      options: [
        { id: 'a', text: 'Resource Owner Password Credentials.' },
        { id: 'b', text: 'Client Credentials.' },
        { id: 'c', text: 'Implicit Grant.' },
        { id: 'd', text: 'Authorization Code with PKCE.' },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Entra ID requires SPAs to use the Authorization Code flow with PKCE; Implicit Grant is deprecated for SPAs. Client Credentials is for daemons with no signed-in user.",
    },
    {
      id: 'az204-9',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure API Management policy must reject requests that arrive at more than 100 calls per minute per subscription key and respond with HTTP 429. Which inbound policy do you use?",
      options: [
        { id: 'a', text: 'rate-limit-by-key with calls=100 and renewal-period=60.' },
        { id: 'b', text: 'quota with calls=100 and renewal-period=60.' },
        { id: 'c', text: 'check-header for X-RateLimit-Remaining.' },
        { id: 'd', text: 'set-backend-service to a queue.' },
      ],
      correctId: 'a',
      explanation:
        "rate-limit-by-key counts calls in a sliding window and returns 429 once the threshold is reached. quota is for long-period accumulation (typically per-month) and does not replace rate-limit.",
    },
    {
      id: 'az204-10',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "An e-commerce site shows the same product catalog to every visitor and queries SQL on every page render. You want to lower SQL load and serve catalog reads in single-digit milliseconds. Which Azure Cache for Redis pattern fits?",
      options: [
        { id: 'a', text: 'Write-around cache populated by a queue trigger only.' },
        { id: 'b', text: 'Cache-aside pattern with TTL on the cached items.' },
        { id: 'c', text: 'Replicate the SQL database across regions.' },
        { id: 'd', text: 'Session state cache with sliding expiration.' },
      ],
      correctId: 'b',
      explanation:
        "Cache-aside (lazy loading) populates Redis on first miss and serves later reads from cache, with TTL bounding staleness. Session state is unrelated to a public catalog and SQL replication does not reduce per-request latency.",
    },
    {
      id: 'az204-11',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure App Service deployment slot named staging holds the next release. You want a feature-flag app setting that stays attached to staging when the slots swap. Where do you mark it?",
      options: [
        { id: 'a', text: 'Add it to web.config in the repository.' },
        { id: 'b', text: 'Define it in host.json under extensions.' },
        { id: 'c', text: 'Tick "Deployment slot setting" on the application setting in the Configuration blade.' },
        { id: 'd', text: 'Set it as an environment variable on the production slot only.' },
      ],
      correctId: 'c',
      explanation:
        "Slot-sticky settings stay with the slot during a swap when the deployment slot setting checkbox is on. web.config and host.json travel with code and would move during a swap, defeating the goal.",
    },
    {
      id: 'az204-12',
      topic: 'Develop for Azure storage',
      question:
        "Your application writes financial events to Azure Cosmos DB and the business demands that reads always return the latest committed write. Which consistency level should you use?",
      options: [
        { id: 'a', text: 'Eventual.' },
        { id: 'b', text: 'Session.' },
        { id: 'c', text: 'Consistent prefix.' },
        { id: 'd', text: 'Strong.' },
      ],
      correctId: 'd',
      explanation:
        "Strong consistency guarantees a linearisable view, so reads always see the latest committed write. Session only guarantees consistency within a single client session, which is weaker than the requirement.",
    },
    {
      id: 'az204-13',
      topic: 'Implement Azure security',
      question:
        "Two Azure Container Apps in the same environment must call each other using a shared workload identity. Which identity model lets several apps share one identity?",
      options: [
        { id: 'a', text: 'A user-assigned Managed Identity attached to both apps.' },
        { id: 'b', text: 'Two separate system-assigned Managed Identities, one per app.' },
        { id: 'c', text: 'A service principal with a shared client secret.' },
        { id: 'd', text: 'A storage account SAS token.' },
      ],
      correctId: 'a',
      explanation:
        "User-assigned identities are standalone resources that can attach to multiple workloads, which lets several apps share a role assignment. System-assigned identities are tied to one resource and cannot be shared.",
    },
    {
      id: 'az204-14',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "A telemetry pipeline ingests one million IoT messages per minute and lets multiple consumer groups replay events for the past seven days. Which service is purpose-built for this pattern?",
      options: [
        { id: 'a', text: 'Azure Service Bus topic.' },
        { id: 'b', text: 'Azure Event Hubs.' },
        { id: 'c', text: 'Azure Event Grid.' },
        { id: 'd', text: 'Azure Storage Queue.' },
      ],
      correctId: 'b',
      explanation:
        "Event Hubs handles million-events-per-second streams with consumer groups and a configurable retention window for replay. Service Bus topics are for ordered messaging at much lower throughput.",
    },
    {
      id: 'az204-15',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You instrument a Node.js Web App with the Application Insights SDK. Live metrics work, but no dependency tracking appears for outbound HTTP calls. What is the most likely cause?",
      options: [
        { id: 'a', text: 'The connection string is wrong.' },
        { id: 'b', text: 'The App Service plan is too small.' },
        { id: 'c', text: 'Auto-collection of HTTP dependencies is disabled in the SDK setup.' },
        { id: 'd', text: 'Sampling is set to zero.' },
      ],
      correctId: 'c',
      explanation:
        "Live metrics use a separate channel and can work even when standard collectors are off. The fact that dependency tracking is missing while live metrics works points at the dependency auto-collector being turned off in setupAsync.",
    },
    {
      id: 'az204-16',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure Functions endpoint must run only when a message arrives in an Azure Service Bus queue and must scale on the queue depth. Which trigger should you use?",
      options: [
        { id: 'a', text: 'HTTP trigger that polls the queue.' },
        { id: 'b', text: 'Timer trigger that reads the queue every minute.' },
        { id: 'c', text: 'EventGridTrigger subscribed to the namespace.' },
        { id: 'd', text: 'ServiceBusTrigger bound to the queue.' },
      ],
      correctId: 'd',
      explanation:
        "ServiceBusTrigger gives event-driven scaling on the queue length under the Consumption and Premium plans. A timer wastes invocations and adds latency, and an HTTP trigger does not react to queue messages.",
    },
    {
      id: 'az204-17',
      topic: 'Develop for Azure storage',
      question:
        "You upload large blobs of about 10 GB and need fault-tolerant uploads that resume if the network drops. Which approach should the SDK use?",
      options: [
        { id: 'a', text: 'Block-blob upload using staged blocks plus PutBlockList.' },
        { id: 'b', text: 'Single PutBlob call with retry on failure.' },
        { id: 'c', text: 'Append blob with one append per file.' },
        { id: 'd', text: 'Page blob with random writes.' },
      ],
      correctId: 'a',
      explanation:
        "Staged blocks let the client upload in parallel and resume failed blocks before committing with PutBlockList. PutBlob has a per-call size limit and offers no resume on failure.",
    },
    {
      id: 'az204-18',
      topic: 'Implement Azure security',
      question:
        "An API protected by Microsoft Entra ID returns HTTP 401 with WWW-Authenticate: Bearer error=insufficient_scope. What should the client do?",
      options: [
        { id: 'a', text: 'Refresh the access token using the refresh token without changes.' },
        { id: 'b', text: 'Request a new access token with the additional scope listed in the error.' },
        { id: 'c', text: 'Send the same token over a TLS 1.3 connection.' },
        { id: 'd', text: 'Switch to the Client Credentials flow.' },
      ],
      correctId: 'b',
      explanation:
        "insufficient_scope means the token does not contain the required scope, so the client must acquire a fresh token that includes it. Refreshing without changing the requested scopes returns the same scope set.",
    },
    {
      id: 'az204-19',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure API Management product must validate JWTs issued by Microsoft Entra ID and reject requests without the role admin in the token. Which inbound policy is correct?",
      options: [
        { id: 'a', text: 'check-header X-Roles equals admin.' },
        { id: 'b', text: 'rate-limit by user role.' },
        { id: 'c', text: 'validate-jwt with a required-claims block on the roles claim.' },
        { id: 'd', text: 'set-method to POST.' },
      ],
      correctId: 'c',
      explanation:
        "validate-jwt verifies the signature against the OpenID metadata and can require specific claim values, including the roles claim. Header checks are bypassable and do not validate the signing key.",
    },
    {
      id: 'az204-20',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "A static website served from Blob Storage has long load times for users far from the storage region. Which managed service caches the assets at the edge with the least configuration?",
      options: [
        { id: 'a', text: 'Azure Application Gateway WAF v2.' },
        { id: 'b', text: 'A second storage account in another region.' },
        { id: 'c', text: 'Azure Traffic Manager weighted profile.' },
        { id: 'd', text: 'Azure Front Door with caching enabled.' },
      ],
      correctId: 'd',
      explanation:
        "Front Door caches static content at Microsoft edge sites and routes by latency. Traffic Manager only does DNS routing and never caches, and a second storage account requires manual replication.",
    },
    {
      id: 'az204-21',
      topic: 'Develop Azure compute solutions',
      question:
        "Your Azure Container Apps environment must run a worker that scales from zero when there are messages in an Azure Storage Queue. Which scaler should you configure?",
      options: [
        { id: 'a', text: 'Custom KEDA scaler for azure-queue with the queueLength threshold.' },
        { id: 'b', text: 'HTTP scaler with concurrent requests.' },
        { id: 'c', text: 'CPU scaler at 70 percent.' },
        { id: 'd', text: 'Manual scaling with a fixed instance count.' },
      ],
      correctId: 'a',
      explanation:
        "Container Apps uses KEDA scalers and the azure-queue scaler scales replicas based on queue length, including from zero. CPU and HTTP scalers cannot scale from zero on a worker that has no inbound HTTP traffic.",
    },
    {
      id: 'az204-22',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB returns HTTP 429 (RequestRateTooLarge) under bursty load on a container set at 4000 RU/s. The SDK runs with default retry settings. What is the right first response?",
      options: [
        { id: 'a', text: 'Switch the consistency level from Session to Strong.' },
        { id: 'b', text: 'Increase the SDK retry options to honour the x-ms-retry-after-ms hint and consider raising throughput.' },
        { id: 'c', text: 'Disable indexing on the container.' },
        { id: 'd', text: 'Move to a single-partition container.' },
      ],
      correctId: 'b',
      explanation:
        "The SDK retries on 429 if you raise MaxRetryAttempts and MaxRetryWaitTime, and Cosmos DB returns a wait hint per response. Strong consistency raises RU cost and would worsen the issue.",
    },
    {
      id: 'az204-23',
      topic: 'Implement Azure security',
      question:
        "An ASP.NET Core Web API uses Microsoft.Identity.Web to validate Microsoft Entra ID tokens. You want to require the scope orders.read on a controller method. Which attribute is correct?",
      options: [
        { id: 'a', text: '[Authorize(Roles = "orders.read")].' },
        { id: 'b', text: '[Authorize(Policy = "orders.read")] without any policy registration.' },
        { id: 'c', text: '[Authorize] with [RequiredScope("orders.read")] from Microsoft.Identity.Web.' },
        { id: 'd', text: '[AllowAnonymous] with manual claims check.' },
      ],
      correctId: 'c',
      explanation:
        "RequiredScope from Microsoft.Identity.Web checks the scp claim against the listed scope. Roles maps to the roles claim, which is for app roles or app-permissions, not delegated scopes.",
    },
    {
      id: 'az204-24',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "Two services must exchange messages with strict ordering per customer (FIFO). Which Azure Service Bus feature do you use?",
      options: [
        { id: 'a', text: 'Auto-forwarding from queue to topic.' },
        { id: 'b', text: 'Duplicate detection on the queue.' },
        { id: 'c', text: 'Dead-letter queue.' },
        { id: 'd', text: 'Sessions on a queue with the customerId as the session id.' },
      ],
      correctId: 'd',
      explanation:
        "Sessions guarantee FIFO ordering inside a session id, so per-customer ordering is preserved. Duplicate detection drops repeats but does not order messages.",
    },
    {
      id: 'az204-25',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You want to release a feature behind a flag, enable it for 5 percent of users, and turn it off without redeploying. Which Azure service do you use?",
      options: [
        { id: 'a', text: 'Azure App Configuration with feature flags and the targeting filter.' },
        { id: 'b', text: 'Azure Key Vault with a secret named featureFlag.' },
        { id: 'c', text: 'Azure DevOps variable groups.' },
        { id: 'd', text: 'Azure Storage table with a row per user.' },
      ],
      correctId: 'a',
      explanation:
        "App Configuration has first-class feature flags, including targeting filters for percentage rollouts that flip live without a redeploy. Key Vault stores secrets but has no flag semantics.",
    },
    {
      id: 'az204-26',
      topic: 'Develop Azure compute solutions',
      question:
        "Which file in an Azure Functions project sets host-level concurrency for queue-triggered functions?",
      options: [
        { id: 'a', text: 'local.settings.json.' },
        { id: 'b', text: 'host.json under extensions.queues.batchSize.' },
        { id: 'c', text: 'function.json bindings array.' },
        { id: 'd', text: 'Program.cs in the FunctionsHostBuilder.' },
      ],
      correctId: 'b',
      explanation:
        "host.json holds runtime-wide settings for triggers, including queues.batchSize and newBatchThreshold. local.settings.json holds connection strings for local development only.",
    },
    {
      id: 'az204-27',
      topic: 'Develop for Azure storage',
      question:
        "A blob lifecycle management rule must move blobs to the archive tier 90 days after last modification. Which JSON action expresses this?",
      options: [
        { id: 'a', text: '"baseBlob": { "delete": { "daysAfterCreationGreaterThan": 90 } }.' },
        { id: 'b', text: '"snapshot": { "tierToHot": { "daysAfterModificationGreaterThan": 90 } }.' },
        { id: 'c', text: '"baseBlob": { "tierToArchive": { "daysAfterModificationGreaterThan": 90 } }.' },
        { id: 'd', text: '"version": { "tierToCool": { "daysAfterCreationGreaterThan": 90 } }.' },
      ],
      correctId: 'c',
      explanation:
        "tierToArchive on baseBlob with daysAfterModificationGreaterThan=90 archives current blobs after that age. The other options either delete, cool, or apply only to versions or snapshots.",
    },
    {
      id: 'az204-28',
      topic: 'Implement Azure security',
      question:
        "A daemon service running on a VM in the same Azure subscription must call Microsoft Graph as itself, with no signed-in user. Which credential type fits?",
      options: [
        { id: 'a', text: 'A user account password supplied at runtime.' },
        { id: 'b', text: 'A device code flow.' },
        { id: 'c', text: 'A SAS token from a storage account.' },
        { id: 'd', text: 'A Managed Identity used through DefaultAzureCredential.' },
      ],
      correctId: 'd',
      explanation:
        "DefaultAzureCredential picks up the VM Managed Identity and acquires a Microsoft Graph token without a stored secret. Device code is interactive, which a daemon cannot drive.",
    },
    {
      id: 'az204-29',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure API Management gateway must transform the backend response from XML to JSON before returning it to the client. Which outbound policy is correct?",
      options: [
        { id: 'a', text: 'xml-to-json.' },
        { id: 'b', text: 'rewrite-uri.' },
        { id: 'c', text: 'forward-request.' },
        { id: 'd', text: 'set-method to POST.' },
      ],
      correctId: 'a',
      explanation:
        "xml-to-json converts response payloads from XML to JSON with configurable mapping. rewrite-uri changes the request URL and forward-request sends the request to the backend.",
    },
    {
      id: 'az204-30',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "A dependency tracked in Application Insights shows duration but no result code. The dependency calls Azure Cosmos DB through the SDK. What is the most common cause?",
      options: [
        { id: 'a', text: 'Sampling drops result codes only.' },
        { id: 'b', text: 'The Cosmos DB SDK reports a custom dependency type that does not always populate ResultCode.' },
        { id: 'c', text: 'The Application Insights resource is in a different region.' },
        { id: 'd', text: 'The connection string lacks the IngestionEndpoint key.' },
      ],
      correctId: 'b',
      explanation:
        "The Cosmos DB SDK reports its own dependency telemetry without a numeric HTTP result code, so the field can be empty by design. Sampling reduces the count but does not strip individual fields.",
    },
    {
      id: 'az204-31',
      topic: 'Develop Azure compute solutions',
      question:
        "You deploy an Azure Container App with two revisions and want 90 percent of traffic on revision 1 and 10 percent on revision 2 for canary testing. Which mode and setting do you use?",
      options: [
        { id: 'a', text: 'Single revision mode and roll forward to revision 2.' },
        { id: 'b', text: 'Two separate container apps behind Azure Front Door.' },
        { id: 'c', text: 'Multiple revisions mode with traffic split 90/10 between the two revisions.' },
        { id: 'd', text: 'Multiple revisions mode with 100/0 and toggle daily.' },
      ],
      correctId: 'c',
      explanation:
        "Multiple revisions mode keeps both revisions live and routes a fixed percentage to each. Single revision mode replaces the previous one and gives no canary path.",
    },
    {
      id: 'az204-32',
      topic: 'Develop for Azure storage',
      question:
        "An Azure Cosmos DB query SELECT * FROM c WHERE c.email = @e shows high RU charge across many partitions. The container is partitioned by tenantId. Which change cuts RU charge most?",
      options: [
        { id: 'a', text: 'Switch consistency to Eventual.' },
        { id: 'b', text: 'Disable indexing on email.' },
        { id: 'c', text: 'Use the NoSQL EXISTS keyword.' },
        { id: 'd', text: 'Add tenantId to the query (or set the PartitionKey on the request).' },
      ],
      correctId: 'd',
      explanation:
        "Including the partition key turns a fan-out cross-partition query into a single-partition query and cuts RU charge sharply. Lowering consistency does not save RU cost on cross-partition reads.",
    },
    {
      id: 'az204-33',
      topic: 'Implement Azure security',
      question:
        "Your microservice stores a TLS certificate in Azure Key Vault. The service must download a fresh copy whenever the certificate is rotated, with no manual restart. Which feature do you use?",
      options: [
        { id: 'a', text: 'Event Grid system topic on Microsoft.KeyVault that triggers a refresh on a CertificateNewVersionCreated event.' },
        { id: 'b', text: 'A timer-triggered function that polls the certificate URL daily.' },
        { id: 'c', text: 'Azure Front Door TLS profile.' },
        { id: 'd', text: 'Manual download after each rotation.' },
      ],
      correctId: 'a',
      explanation:
        "Key Vault publishes events such as CertificateNewVersionCreated to Event Grid; subscribing the service lets it react in seconds. Polling daily misses the immediate refresh and adds load.",
    },
    {
      id: 'az204-34',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure Service Bus queue receives messages that occasionally fail processing. After ten retries the message must move to a hold queue for inspection without blocking the main queue. Which feature handles this?",
      options: [
        { id: 'a', text: 'Auto-forwarding to a backup namespace.' },
        { id: 'b', text: 'Sessions with sliding window.' },
        { id: 'c', text: 'Duplicate detection.' },
        { id: 'd', text: 'The built-in dead-letter sub-queue, which Service Bus moves messages to after MaxDeliveryCount.' },
      ],
      correctId: 'd',
      explanation:
        "Service Bus exposes a dead-letter sub-queue per queue or subscription, and messages move there once they exceed MaxDeliveryCount. Auto-forwarding chains queues and topics together but is not the failure handler.",
    },
    {
      id: 'az204-35',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You want a KQL query that returns the 95th percentile of request duration over the last hour for an Application Insights resource. Which expression returns it?",
      options: [
        { id: 'a', text: "exceptions | top 10 by timestamp." },
        { id: 'b', text: "requests | where timestamp > now()-1d | summarize avg(duration)." },
        { id: 'c', text: "requests | where timestamp > ago(1h) | summarize percentile(duration, 95)." },
        { id: 'd', text: "traces | summarize count() by severityLevel." },
      ],
      correctId: 'c',
      explanation:
        "percentile(duration, 95) is the KQL function for the 95th percentile, scoped by the where clause to the last hour. avg returns the mean, not a percentile.",
    },
    {
      id: 'az204-36',
      topic: 'Develop Azure compute solutions',
      question:
        "You want continuous deployment from a GitHub repo to an Azure App Service slot, with the build running in App Service itself. Which feature handles this?",
      options: [
        { id: 'a', text: 'Manual ZIP deploy via Kudu.' },
        { id: 'b', text: 'FTP deployment.' },
        { id: 'c', text: 'Azure DevOps classic release pipelines only.' },
        { id: 'd', text: 'App Service Deployment Center connected to the GitHub repo.' },
      ],
      correctId: 'd',
      explanation:
        "Deployment Center wires a GitHub repository to a slot and generates a workflow that builds and deploys on each push. Kudu and FTP are manual paths with no continuous trigger.",
    },
    {
      id: 'az204-37',
      topic: 'Develop for Azure storage',
      question:
        "An SDK call to a Blob container fails with HTTP 403 AuthenticationFailed. Server logs show the request was signed with a SAS token. Which check is most likely the cause?",
      options: [
        { id: 'a', text: 'The SAS expiry has passed or the signed permissions do not include the requested operation.' },
        { id: 'b', text: 'The blob is in the archive tier.' },
        { id: 'c', text: 'Geo-replication is paused.' },
        { id: 'd', text: 'The container is set to private.' },
      ],
      correctId: 'a',
      explanation:
        "AuthenticationFailed on a SAS-signed request points at expiry or insufficient signed permissions (sp). Archive tier returns its own status code, and private containers still accept valid SAS.",
    },
    {
      id: 'az204-38',
      topic: 'Implement Azure security',
      question:
        "You enable system-assigned Managed Identity on an Azure Function and grant it the Storage Blob Data Reader role on a storage account. The function still gets a 403 when reading blobs immediately after. What is the most likely cause?",
      options: [
        { id: 'a', text: 'Managed Identity does not work with storage.' },
        { id: 'b', text: 'Microsoft Entra role assignments take a few minutes to propagate, so the request ran too soon.' },
        { id: 'c', text: 'You must store the identity client id in app settings called AZURE_TENANT_ID.' },
        { id: 'd', text: 'The Function plan must be Premium.' },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Entra role propagation can take up to several minutes, so a freshly assigned role often returns 403 on the first calls. Managed Identity supports storage and works on every plan.",
    },
    {
      id: 'az204-39',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Event Grid system topic on a storage account fires BlobCreated events to a webhook. To prevent stale events from being processed twice, the webhook must deduplicate. Which envelope property is unique per event?",
      options: [
        { id: 'a', text: 'eventTime.' },
        { id: 'b', text: 'subject.' },
        { id: 'c', text: 'id.' },
        { id: 'd', text: 'topic.' },
      ],
      correctId: 'c',
      explanation:
        "Each Event Grid envelope has a unique id that the consumer can record to detect duplicates. eventTime is not unique because two events can arrive in the same millisecond.",
    },
    {
      id: 'az204-40',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You want to reduce Application Insights ingestion cost on a chatty service while keeping accurate response time percentiles. Which feature should you turn on?",
      options: [
        { id: 'a', text: 'Daily cap set to zero.' },
        { id: 'b', text: 'Disable telemetry collection on weekends.' },
        { id: 'c', text: 'Switch to a free tier.' },
        { id: 'd', text: 'Adaptive sampling.' },
      ],
      correctId: 'd',
      explanation:
        "Adaptive sampling drops a fraction of events while preserving statistical aggregates, so percentiles stay accurate. A daily cap of zero stops ingestion entirely and there is no Free tier for Application Insights.",
    },
    {
      id: 'az204-41',
      topic: 'Develop Azure compute solutions',
      question:
        "Your Azure Function reads from an Azure Service Bus queue that sometimes contains poison messages. You want each message to retry five times before going to the dead-letter queue. Where do you set this?",
      options: [
        { id: 'a', text: 'On the queue itself, MaxDeliveryCount = 5.' },
        { id: 'b', text: 'In host.json under extensions.serviceBus.maxAutoLockRenewalDuration.' },
        { id: 'c', text: 'In function.json with retryCount property.' },
        { id: 'd', text: 'In the connection string under DeliveryAttempts.' },
      ],
      correctId: 'a',
      explanation:
        "MaxDeliveryCount is a property of the Azure Service Bus queue and controls how many times a message is delivered before dead-lettering. host.json controls runtime concurrency, not delivery counts.",
    },
    {
      id: 'az204-42',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB change feed must drive a downstream search index update. Which compute option ingests the change feed with the lowest operational overhead?",
      options: [
        { id: 'a', text: 'A self-hosted polling worker on a VM.' },
        { id: 'b', text: 'An Azure Functions Cosmos DB trigger using the change feed processor.' },
        { id: 'c', text: 'Logic Apps with manual polling.' },
        { id: 'd', text: 'Azure Batch jobs.' },
      ],
      correctId: 'b',
      explanation:
        "The Cosmos DB trigger in Azure Functions wraps the change feed processor with checkpointing and lease management, so you only write the handler. A VM-based worker means you maintain leases and scaling yourself.",
    },
    {
      id: 'az204-43',
      topic: 'Implement Azure security',
      question:
        "An ASP.NET Core API uses Azure.Identity DefaultAzureCredential. In production it runs on Azure App Service with system-assigned Managed Identity, in development it runs locally. Which credential does it use locally without code changes?",
      options: [
        { id: 'a', text: 'A hardcoded service principal client secret.' },
        { id: 'b', text: 'Anonymous credential.' },
        { id: 'c', text: 'Azure CLI credential (az login) or Visual Studio credential.' },
        { id: 'd', text: 'Workload identity federation only.' },
      ],
      correctId: 'c',
      explanation:
        "DefaultAzureCredential walks a chain that includes EnvironmentCredential, ManagedIdentityCredential, AzureCliCredential, and Visual Studio credentials, so a developer signed in with az login is picked up automatically. No client secret is required.",
    },
    {
      id: 'az204-44',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "A REST client calls Azure Cosmos DB directly and receives x-ms-request-charge: 12.4 in the response. What does the value mean?",
      options: [
        { id: 'a', text: 'Latency of the call in milliseconds.' },
        { id: 'b', text: 'Number of items returned by the query.' },
        { id: 'c', text: 'Cost in cents.' },
        { id: 'd', text: 'Request units consumed by the operation.' },
      ],
      correctId: 'd',
      explanation:
        "x-ms-request-charge is the RU cost of the operation in the response header and helps you tune queries for throughput. Latency is reported as x-ms-request-duration-ms.",
    },
    {
      id: 'az204-45',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "Azure Front Door routes traffic to two App Service origins. You want sticky sessions so each user keeps hitting the same origin during a session. Which Front Door setting controls this?",
      options: [
        { id: 'a', text: 'Session affinity on the front door endpoint.' },
        { id: 'b', text: 'Caching policy with high TTL.' },
        { id: 'c', text: 'WAF rule set.' },
        { id: 'd', text: 'Custom domain with HTTPS only.' },
      ],
      correctId: 'a',
      explanation:
        "Session affinity sets a cookie that pins a client to the chosen origin for the session. Caching policy controls cache TTL, not stickiness.",
    },
    {
      id: 'az204-46',
      topic: 'Develop Azure compute solutions',
      question:
        "Which command builds and pushes a container image to Azure Container Registry without a local Docker daemon?",
      options: [
        { id: 'a', text: 'docker build && docker push.' },
        { id: 'b', text: 'az acr build --registry myacr --image app:1.0 .' },
        { id: 'c', text: 'az container create --image app:1.0.' },
        { id: 'd', text: 'kubectl apply -f deployment.yaml.' },
      ],
      correctId: 'b',
      explanation:
        "az acr build runs the build inside Azure Container Registry Tasks, so no local Docker daemon is required. docker build needs a local daemon, and az container create deploys an existing image.",
    },
    {
      id: 'az204-47',
      topic: 'Develop for Azure storage',
      question:
        "Blob immutable storage is required so that audit logs cannot be modified or deleted for seven years. Which feature do you enable?",
      options: [
        { id: 'a', text: 'Soft delete with seven-year retention.' },
        { id: 'b', text: 'Customer-managed keys with rotation.' },
        { id: 'c', text: 'Time-based retention policy in locked state on the container.' },
        { id: 'd', text: 'Read-access geo-redundant storage.' },
      ],
      correctId: 'c',
      explanation:
        "Immutable storage policies create a WORM container; once the policy is locked, blobs cannot be modified or deleted before the retention interval. Soft delete only delays deletion and can be turned off.",
    },
    {
      id: 'az204-48',
      topic: 'Implement Azure security',
      question:
        "Your application caches Microsoft Entra ID tokens with MSAL. To improve performance and reduce 429 responses from the identity platform, where should the cache live in a multi-instance Web App?",
      options: [
        { id: 'a', text: 'In a static dictionary in process memory.' },
        { id: 'b', text: 'In a cookie on the client.' },
        { id: 'c', text: 'In a temp file on the local disk.' },
        { id: 'd', text: 'A distributed cache (for example Azure Cache for Redis) shared by all instances.' },
      ],
      correctId: 'd',
      explanation:
        "MSAL supports a distributed token cache backed by Redis or SQL so all instances reuse the same cached tokens. In-process memory means each instance hits the token endpoint independently.",
    },
    {
      id: 'az204-49',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "You need ten clients to share an Azure Service Bus subscription so each message is processed by exactly one of them. Which Service Bus arrangement fits?",
      options: [
        { id: 'a', text: 'A topic with one subscription that all ten clients receive from.' },
        { id: 'b', text: 'A topic with ten subscriptions, one per client.' },
        { id: 'c', text: 'Ten queues, one per client, with manual routing.' },
        { id: 'd', text: 'An Event Hub with ten consumer groups.' },
      ],
      correctId: 'a',
      explanation:
        "When several receivers share one subscription, Azure Service Bus delivers each message to only one of them (competing consumers). Ten subscriptions would deliver each message ten times.",
    },
    {
      id: 'az204-50',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "An Azure App Service app reports HTTP 502.5 from the Functions Host on cold start. Where do you find the failure detail?",
      options: [
        { id: 'a', text: 'Application Map in Application Insights.' },
        { id: 'b', text: 'Diagnose and solve problems plus the eventlog entries from the Functions runtime.' },
        { id: 'c', text: 'The Resource Graph explorer.' },
        { id: 'd', text: 'Cost Management.' },
      ],
      correctId: 'b',
      explanation:
        "Diagnose and solve problems shows process failures and the runtime event log captures the host startup error. Application Map plots dependencies but does not surface a 502.5 startup error.",
    },
    {
      id: 'az204-51',
      topic: 'Develop Azure compute solutions',
      question:
        "Two functions in the same Azure Functions app share a static HttpClient created in a constructor. Under heavy load you see SocketException errors. What is the recommended fix?",
      options: [
        { id: 'a', text: 'Create a new HttpClient inside each function call.' },
        { id: 'b', text: 'Share one HttpClient as a non-static field.' },
        { id: 'c', text: 'Inject IHttpClientFactory and use it to create named clients.' },
        { id: 'd', text: 'Switch to WebRequest.' },
      ],
      correctId: 'c',
      explanation:
        "IHttpClientFactory pools handlers and rotates them to avoid socket exhaustion, which is the documented pattern for Azure Functions and ASP.NET Core. Creating a new HttpClient per call leaks sockets in TIME_WAIT.",
    },
    {
      id: 'az204-52',
      topic: 'Develop for Azure storage',
      question:
        "Your application reads blobs from a private container and you want to give a partner read-only access for the next 24 hours without sharing the storage account key. Which option fits?",
      options: [
        { id: 'a', text: 'A SAS token with sp=racwdl.' },
        { id: 'b', text: 'A connection string mailed to the partner.' },
        { id: 'c', text: 'Make the container public.' },
        { id: 'd', text: 'A user delegation SAS signed by Microsoft Entra ID with sp=r.' },
      ],
      correctId: 'd',
      explanation:
        "User delegation SAS is signed with a Microsoft Entra ID key, scoped to read, and expires automatically; it does not require the storage account key. sp=racwdl grants write and delete, which fails the read-only goal.",
    },
    {
      id: 'az204-53',
      topic: 'Implement Azure security',
      question:
        "You configure a Web App with both system-assigned and user-assigned Managed Identities. Your code calls new DefaultAzureCredential(). Which behaviour applies?",
      options: [
        { id: 'a', text: 'You must specify ManagedIdentityClientId, otherwise the call fails or behaves ambiguously.' },
        { id: 'b', text: 'The user-assigned identity is picked at random.' },
        { id: 'c', text: 'A new identity is generated on the fly.' },
        { id: 'd', text: 'The system-assigned identity is always picked first.' },
      ],
      correctId: 'a',
      explanation:
        "When more than one identity is attached, DefaultAzureCredential cannot pick on its own; you must set the ManagedIdentityClientId option (or AZURE_CLIENT_ID). Otherwise behaviour is ambiguous.",
    },
    {
      id: 'az204-54',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "Azure Event Hubs partition assignment must be deterministic so all messages for a given device land on the same partition. Which producer setting controls this?",
      options: [
        { id: 'a', text: 'Capture enabled.' },
        { id: 'b', text: 'PartitionKey set to the device id when sending.' },
        { id: 'c', text: 'Random partition assignment.' },
        { id: 'd', text: 'Auto-inflate.' },
      ],
      correctId: 'b',
      explanation:
        "PartitionKey is hashed by Event Hubs and routes messages with the same key to the same partition, which preserves per-device order. Capture writes to storage and is unrelated to routing.",
    },
    {
      id: 'az204-55',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You enable Snapshot Debugger on an Azure App Service app to capture exceptions. Where do you view the captured stack and locals?",
      options: [
        { id: 'a', text: 'The Activity Log of the resource group.' },
        { id: 'b', text: 'The Cost Management dashboard.' },
        { id: 'c', text: 'The Snapshots tab in the Application Insights Failures blade or in Visual Studio.' },
        { id: 'd', text: 'Azure Storage Explorer.' },
      ],
      correctId: 'c',
      explanation:
        "Snapshot Debugger feeds into Application Insights Failures and exposes a debug snapshot link that opens in Visual Studio. The activity log records management plane events, not snapshots.",
    },
    {
      id: 'az204-56',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure App Service plan must run only Windows containers and must autoscale by CPU between two and ten instances. Which combination is valid?",
      options: [
        { id: 'a', text: 'Free F1 plan with Windows containers.' },
        { id: 'b', text: 'Consumption Functions plan with Windows containers.' },
        { id: 'c', text: 'Static Web Apps Free.' },
        { id: 'd', text: 'Premium V3 plan with Windows containers and an autoscale rule.' },
      ],
      correctId: 'd',
      explanation:
        "Windows containers on App Service are supported on Premium V3 plans, which also support autoscale rules. The Free plan does not support containers and the Consumption plan is for Functions only.",
    },
    {
      id: 'az204-57',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB stored procedures run inside which scope?",
      options: [
        { id: 'a', text: 'A single logical partition of one container.' },
        { id: 'b', text: 'Across all containers in the database.' },
        { id: 'c', text: 'A single physical machine.' },
        { id: 'd', text: 'Across all regions of the account.' },
      ],
      correctId: 'a',
      explanation:
        "Stored procedures execute against one logical partition (specified by the partition key when called) and operate within a transaction in that partition. They cannot span multiple partitions.",
    },
    {
      id: 'az204-58',
      topic: 'Implement Azure security',
      question:
        "Which Microsoft Entra ID feature lets a multi-tenant SaaS application receive a token that names the calling tenant in the iss claim?",
      options: [
        { id: 'a', text: 'B2B guest invitation only.' },
        { id: 'b', text: 'A multi-tenant app registration with the common or organizations endpoint.' },
        { id: 'c', text: 'Conditional Access only.' },
        { id: 'd', text: 'A locked-down single-tenant app.' },
      ],
      correctId: 'b',
      explanation:
        "Registering the app as multi-tenant and using common or organizations lets users from any tenant sign in, with the iss claim containing the tenant id. A single-tenant app rejects external tenants.",
    },
    {
      id: 'az204-59',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "A REST API published in Azure API Management must enforce a quota of 10000 calls per subscription per month. Which policy expresses this?",
      options: [
        { id: 'a', text: '<rate-limit calls="10000" renewal-period="2592000" />.' },
        { id: 'b', text: '<set-method id="GET" />.' },
        { id: 'c', text: '<quota calls="10000" renewal-period="2592000" />.' },
        { id: 'd', text: '<choose><when condition="@(false)" /></choose>.' },
      ],
      correctId: 'c',
      explanation:
        "quota tracks long-period accumulated calls per subscription with renewal-period in seconds (2592000 is 30 days). rate-limit is for short-window throttling and is not designed for monthly quotas.",
    },
    {
      id: 'az204-60',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You want every request to your API to flow as a single distributed trace across the Web App, the Function it calls, and the SQL it queries. What is the minimum step?",
      options: [
        { id: 'a', text: 'Manually pass an x-correlation-id header.' },
        { id: 'b', text: 'Turn on Azure Front Door access logs.' },
        { id: 'c', text: 'Use Azure Service Bus sessions on every call.' },
        { id: 'd', text: 'Enable the Application Insights SDK on every component using the same connection string.' },
      ],
      correctId: 'd',
      explanation:
        "When each component reports to the same Application Insights resource, the SDK propagates W3C Trace-Context headers automatically, which produces a single distributed trace. Manual headers are a fallback when an SDK is not in use.",
    },
    {
      id: 'az204-61',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure Function with an HTTP trigger needs to allow only requests from a known set of front-end origins. Which configuration fits?",
      options: [
        { id: 'a', text: 'CORS allowed origins set on the Function App, listing the front-end domains.' },
        { id: 'b', text: 'A network security group on the Function App.' },
        { id: 'c', text: 'Azure Front Door WAF rule that adds Access-Control-Allow-Origin.' },
        { id: 'd', text: 'Azure DDoS Protection Standard.' },
      ],
      correctId: 'a',
      explanation:
        "CORS on the Function App tells the browser whether the origin may read the response. NSGs do not act on per-origin browser checks and DDoS Protection is not an origin filter.",
    },
    {
      id: 'az204-62',
      topic: 'Develop for Azure storage',
      question:
        "Which Azure Cosmos DB feature gives multi-region writes with a per-region endpoint and built-in conflict resolution?",
      options: [
        { id: 'a', text: 'Read-only secondary regions.' },
        { id: 'b', text: 'Multi-region writes (active-active) with last-writer-wins or custom resolution.' },
        { id: 'c', text: 'Single-region account with manual failover.' },
        { id: 'd', text: 'Azure Cache for Redis Geo replication.' },
      ],
      correctId: 'b',
      explanation:
        "Multi-region writes let any region accept writes; Cosmos DB resolves conflicts with last-writer-wins or a stored procedure. A single-region account with failover is active-passive only.",
    },
    {
      id: 'az204-63',
      topic: 'Implement Azure security',
      question:
        "Microsoft Entra ID issues an access token that contains the appid claim and not the upn claim. What does this tell you about how the token was acquired?",
      options: [
        { id: 'a', text: 'It was issued via the Authorization Code flow on behalf of a user.' },
        { id: 'b', text: 'It is a refresh token.' },
        { id: 'c', text: 'It was issued via the Client Credentials flow on behalf of an application.' },
        { id: 'd', text: 'It is an ID token.' },
      ],
      correctId: 'c',
      explanation:
        "App-only tokens (Client Credentials) carry appid and idtyp=app, with no user claims. Tokens for signed-in users include upn or preferred_username.",
    },
    {
      id: 'az204-64',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure Event Grid subscription points at an HTTP webhook. Which built-in retry behaviour applies if the webhook returns 503?",
      options: [
        { id: 'a', text: 'No retries; the message is dropped.' },
        { id: 'b', text: 'Three immediate retries, then move to a Service Bus queue.' },
        { id: 'c', text: 'Retries only for HTTP 500, never for 503.' },
        { id: 'd', text: 'Exponential back-off retries up to 24 hours by default, with optional dead-letter to a storage account.' },
      ],
      correctId: 'd',
      explanation:
        "Event Grid retries with exponential back-off for up to 24 hours by default and supports dead-lettering to a storage account. 503 is treated as a retryable failure.",
    },
    {
      id: 'az204-65',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "Application Insights alerts must page an on-call engineer when the failed request rate is above 5 per minute for 10 minutes. Which alert type fits?",
      options: [
        { id: 'a', text: 'Log search alert (KQL) on requests with a frequency of 1 minute and an evaluation window of 10 minutes.' },
        { id: 'b', text: 'Activity log alert.' },
        { id: 'c', text: 'Metric alert with dynamic thresholds only.' },
        { id: 'd', text: 'Service Health alert.' },
      ],
      correctId: 'a',
      explanation:
        "A log search alert runs a KQL query at a fixed frequency over a sliding window and fires on the result. Activity log alerts fire on management events, and Service Health alerts fire on Microsoft incidents.",
    },
    {
      id: 'az204-66',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure Container Apps job must run nightly at 02:00 UTC and finish before 03:00 UTC. Which trigger type fits?",
      options: [
        { id: 'a', text: 'Manual trigger.' },
        { id: 'b', text: 'Scheduled trigger with a cron expression.' },
        { id: 'c', text: 'Event trigger on Service Bus.' },
        { id: 'd', text: 'HTTP trigger with a webhook.' },
      ],
      correctId: 'b',
      explanation:
        "Scheduled jobs in Azure Container Apps take a cron expression that runs the workload at a fixed time. Manual jobs require external invocation, and event triggers respond to messages, not the clock.",
    },
    {
      id: 'az204-67',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB in Bicep: which property controls the data partition strategy on a SQL API container?",
      options: [
        { id: 'a', text: 'resource.properties.options.throughput.' },
        { id: 'b', text: 'resource.location.' },
        { id: 'c', text: 'resource.properties.resource.partitionKey.' },
        { id: 'd', text: 'resource.tags.' },
      ],
      correctId: 'c',
      explanation:
        "The container resource has properties.resource.partitionKey with paths and kind. options.throughput sets RU/s, not the partition strategy.",
    },
    {
      id: 'az204-68',
      topic: 'Implement Azure security',
      question:
        "You bring an existing certificate into Azure Key Vault and need the App Service binding to update automatically when the certificate is rotated. Which feature handles this?",
      options: [
        { id: 'a', text: 'App Service Managed Certificates only.' },
        { id: 'b', text: 'Certificate transparency logs.' },
        { id: 'c', text: 'Manual upload of the PFX into TLS settings.' },
        { id: 'd', text: 'Azure Key Vault certificates referenced by an App Service certificate binding.' },
      ],
      correctId: 'd',
      explanation:
        "App Service binds to the certificate via Azure Key Vault and refreshes the binding when a new version is created. Manual PFX upload requires you to renew by hand.",
    },
    {
      id: 'az204-69',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "The Azure API Management Developer portal must allow self-service sign-up via Microsoft Entra ID. Which identity provider should you configure?",
      options: [
        { id: 'a', text: 'Microsoft Entra ID identity provider in the Developer portal settings.' },
        { id: 'b', text: 'Username and password only.' },
        { id: 'c', text: 'Service principal with client secret.' },
        { id: 'd', text: 'Storage account SAS.' },
      ],
      correctId: 'a',
      explanation:
        "Azure API Management Developer portal supports several identity providers; the Microsoft Entra ID provider links sign-ups to a tenant. SAS tokens are for storage and are not identity providers.",
    },
    {
      id: 'az204-70',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "An Azure App Service slot performs slow with high response time during deploy. You want a smoke test against the slot before the swap finishes. Which feature does this?",
      options: [
        { id: 'a', text: 'Auto-heal.' },
        { id: 'b', text: 'Application Initialization (warm-up) with custom paths defined per slot.' },
        { id: 'c', text: 'TLS 1.3 enforcement.' },
        { id: 'd', text: 'IP restrictions.' },
      ],
      correctId: 'b',
      explanation:
        "App Service slot warm-up calls the configured initialization paths so caches and routes are ready before the swap completes. Auto-heal restarts unhealthy instances but does not warm them.",
    },
    {
      id: 'az204-71',
      topic: 'Develop Azure compute solutions',
      question:
        "Your Azure Functions app on the Consumption plan reads from an Azure Service Bus queue with high message rates. The function host scales out only to a small number of instances. Which app setting tunes target-based scaling sensitivity?",
      options: [
        { id: 'a', text: 'WEBSITE_RUN_FROM_PACKAGE.' },
        { id: 'b', text: 'FUNCTIONS_WORKER_RUNTIME.' },
        { id: 'c', text: 'maxConcurrentCalls or maxConcurrentSessions in host.json (which feeds target-based scaling).' },
        { id: 'd', text: 'WEBSITE_TIME_ZONE.' },
      ],
      correctId: 'c',
      explanation:
        "Service Bus target-based scaling uses the host.json values for maxConcurrentCalls (and maxConcurrentSessions for sessions) to compute the desired instance count from queue depth. WEBSITE_RUN_FROM_PACKAGE is unrelated to scaling.",
    },
    {
      id: 'az204-72',
      topic: 'Develop for Azure storage',
      question:
        "Which Azure Cosmos DB API supports Gremlin graph queries?",
      options: [
        { id: 'a', text: 'Core (SQL) API.' },
        { id: 'b', text: 'API for MongoDB.' },
        { id: 'c', text: 'API for Cassandra.' },
        { id: 'd', text: 'API for Apache Gremlin.' },
      ],
      correctId: 'd',
      explanation:
        "Azure Cosmos DB exposes a Gremlin endpoint as the API for Apache Gremlin. The other APIs use their own query language (SQL, MQL, CQL).",
    },
    {
      id: 'az204-73',
      topic: 'Implement Azure security',
      question:
        "You want to grant a developer permission to read but not delete blobs in one container. Which Microsoft Entra ID role assignment is the most specific fit?",
      options: [
        { id: 'a', text: 'Storage Blob Data Reader on the container scope.' },
        { id: 'b', text: 'Owner on the storage account.' },
        { id: 'c', text: 'Storage Blob Data Owner on the storage account.' },
        { id: 'd', text: 'Reader on the resource group.' },
      ],
      correctId: 'a',
      explanation:
        "Storage Blob Data Reader granted at container scope follows least privilege and only allows read. Owner grants delete and Reader on the resource group does not grant data plane access.",
    },
    {
      id: 'az204-74',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "A producer must send a message that is processed only after 30 minutes. Which Azure Service Bus feature handles this without a polling worker?",
      options: [
        { id: 'a', text: 'Auto-forwarding.' },
        { id: 'b', text: 'Scheduled message with ScheduledEnqueueTime set 30 minutes in the future.' },
        { id: 'c', text: 'Sessions.' },
        { id: 'd', text: 'Duplicate detection.' },
      ],
      correctId: 'b',
      explanation:
        "Azure Service Bus supports scheduled messages where the broker holds the message until the scheduled time. Sessions are for ordering and duplicate detection drops repeats.",
    },
    {
      id: 'az204-75',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "You want a single dashboard that shows CPU, memory, and request rate across an Azure App Service plan and the Azure Functions app it hosts. Which tool builds this?",
      options: [
        { id: 'a', text: 'Power BI free workspace.' },
        { id: 'b', text: 'Cost Management report.' },
        { id: 'c', text: 'Azure Workbooks (or pinned charts on an Azure Dashboard) using Azure Monitor metrics.' },
        { id: 'd', text: 'Service Health.' },
      ],
      correctId: 'c',
      explanation:
        "Azure Workbooks combine metrics and logs from multiple resources in one report, and dashboards pin those views together. Cost Management focuses on spend, not telemetry.",
    },
    {
      id: 'az204-76',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure Function written in Python uses bindings declared in function.json. You want to bind an output to an Azure Cosmos DB container. Which type value should you use?",
      options: [
        { id: 'a', text: 'queue.' },
        { id: 'b', text: 'eventHub.' },
        { id: 'c', text: 'sql.' },
        { id: 'd', text: 'cosmosDB.' },
      ],
      correctId: 'd',
      explanation:
        "The Cosmos DB output binding has type cosmosDB with direction out. queue and eventHub bind to other services and sql is a separate binding for Azure SQL.",
    },
    {
      id: 'az204-77',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB query optimisation: which property in the indexing policy lets you skip indexing high-cardinality fields the application never filters on?",
      options: [
        { id: 'a', text: 'excludedPaths.' },
        { id: 'b', text: 'compositeIndexes.' },
        { id: 'c', text: 'spatialIndexes.' },
        { id: 'd', text: 'indexingMode set to none.' },
      ],
      correctId: 'a',
      explanation:
        "excludedPaths trims the index size by skipping selected paths, which lowers write RU cost. indexingMode=none skips everything and breaks any query that filters by index.",
    },
    {
      id: 'az204-78',
      topic: 'Implement Azure security',
      question:
        "An application registered in Microsoft Entra ID needs delegated access to Microsoft Graph for user.read. Where do you grant admin consent in a multi-tenant scenario?",
      options: [
        { id: 'a', text: 'The publishing tenant only.' },
        { id: 'b', text: 'Each tenant where the app is used; an admin must grant consent for that tenant.' },
        { id: 'c', text: 'Microsoft itself, via support ticket.' },
        { id: 'd', text: 'No consent needed for delegated permissions.' },
      ],
      correctId: 'b',
      explanation:
        "Each customer tenant must grant admin consent for the app to receive its delegated permissions. The publisher cannot grant consent on behalf of customer tenants.",
    },
    {
      id: 'az204-79',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "Azure API Management caches GET responses based on the URL and the Authorization header. Which inbound and outbound policy pair achieves this?",
      options: [
        { id: 'a', text: 'rate-limit-by-key plus quota.' },
        { id: 'b', text: 'set-backend-service plus rewrite-uri.' },
        { id: 'c', text: 'cache-lookup with vary-by-header=Authorization, plus cache-store in the outbound section.' },
        { id: 'd', text: 'validate-jwt plus return-response.' },
      ],
      correctId: 'c',
      explanation:
        "cache-lookup checks the cache by URL and any vary-by headers, and cache-store fills the cache after the response. rate-limit policies enforce throttling, not caching.",
    },
    {
      id: 'az204-80',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "Azure Cache for Redis must be highly available with automatic failover across availability zones. Which tier supports this?",
      options: [
        { id: 'a', text: 'Basic.' },
        { id: 'b', text: 'Standard.' },
        { id: 'c', text: 'Free.' },
        { id: 'd', text: 'Premium with zone redundancy enabled.' },
      ],
      correctId: 'd',
      explanation:
        "Premium supports zone redundancy and automatic failover. Basic is single-node with no replication, and Standard replicates within a region without spanning zones.",
    },
    {
      id: 'az204-81',
      topic: 'Develop Azure compute solutions',
      question:
        "An AKS deployment uses Workload Identity that maps a Kubernetes service account to a Microsoft Entra ID identity. Which annotation links the Kubernetes service account to the Entra ID identity?",
      options: [
        { id: 'a', text: 'azure.workload.identity/client-id on the service account.' },
        { id: 'b', text: 'kubernetes.io/service-account.name on the pod.' },
        { id: 'c', text: 'aks.azure.com/managed-by on the namespace.' },
        { id: 'd', text: 'rbac.authorization.k8s.io/autoupdate on the cluster role.' },
      ],
      correctId: 'a',
      explanation:
        "AKS Workload Identity uses the azure.workload.identity/client-id annotation on the service account to bind it to a federated Entra ID app. The other annotations are unrelated to identity federation.",
    },
    {
      id: 'az204-82',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB Time-to-Live: setting DefaultTimeToLive to -1 at the container level means what?",
      options: [
        { id: 'a', text: 'Items expire immediately on creation.' },
        { id: 'b', text: 'Items never expire by default, but per-item ttl values are honoured.' },
        { id: 'c', text: 'TTL is disabled and per-item ttl is ignored.' },
        { id: 'd', text: 'Items expire after 1 second.' },
      ],
      correctId: 'b',
      explanation:
        "DefaultTimeToLive = -1 leaves TTL on but does not set a default expiry, so an item only expires when its own ttl property is set. Setting DefaultTimeToLive to null disables TTL entirely.",
    },
    {
      id: 'az204-83',
      topic: 'Implement Azure security',
      question:
        "You want to log every read and write to a sensitive Azure Key Vault. Which Diagnostic setting category captures this?",
      options: [
        { id: 'a', text: 'Activity Log only.' },
        { id: 'b', text: 'Microsoft Defender for Cloud secure score.' },
        { id: 'c', text: 'AuditEvent diagnostic logs sent to a Log Analytics workspace or storage account.' },
        { id: 'd', text: 'Cost analysis tags.' },
      ],
      correctId: 'c',
      explanation:
        "Azure Key Vault publishes the AuditEvent log category through Diagnostic settings, which records every data plane access. Activity Log only covers control-plane operations.",
    },
    {
      id: 'az204-84',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure Event Hub captures every message to a storage account. The capture file format defaults to which type?",
      options: [
        { id: 'a', text: 'CSV.' },
        { id: 'b', text: 'Parquet.' },
        { id: 'c', text: 'JSON Lines.' },
        { id: 'd', text: 'Avro.' },
      ],
      correctId: 'd',
      explanation:
        "Event Hubs Capture writes Avro files by default, which preserves schema and supports efficient downstream processing in Stream Analytics and Synapse. CSV is not a Capture format.",
    },
    {
      id: 'az204-85',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "An Application Insights query joins requests with dependencies on operation_Id to find slow downstream calls. Which operator gives you that join?",
      options: [
        { id: 'a', text: "join kind=inner on operation_Id." },
        { id: 'b', text: "union with no key." },
        { id: 'c', text: "summarize by operation_Id." },
        { id: 'd', text: "render piechart." },
      ],
      correctId: 'a',
      explanation:
        "join kind=inner correlates events on operation_Id, which is the W3C trace id propagated by the SDK. union appends without joining and summarize aggregates without correlation.",
    },
    {
      id: 'az204-86',
      topic: 'Develop Azure compute solutions',
      question:
        "A Bicep template deploys an Azure App Service plan and a Web App, but you want the Web App to wait until the plan is created. How is ordering handled in Bicep?",
      options: [
        { id: 'a', text: 'Set parallel = false on the deployment.' },
        { id: 'b', text: 'Bicep usually infers dependsOn from a symbolic reference; you can declare it explicitly when no reference exists.' },
        { id: 'c', text: 'sku.tier on the plan controls ordering.' },
        { id: 'd', text: 'azureRM.copy must be set to sequential.' },
      ],
      correctId: 'b',
      explanation:
        "Bicep usually infers dependsOn from a symbolic reference; you can declare it explicitly when no reference exists. There is no parallel = false flag in Bicep.",
    },
    {
      id: 'az204-87',
      topic: 'Develop for Azure storage',
      question:
        "Blob change feed must drive an audit pipeline. Where does Azure Storage write the change feed itself?",
      options: [
        { id: 'a', text: 'A queue in the same storage account.' },
        { id: 'b', text: 'A separate storage account.' },
        { id: 'c', text: 'A system container named $blobchangefeed in the same storage account.' },
        { id: 'd', text: 'Azure Cosmos DB.' },
      ],
      correctId: 'c',
      explanation:
        "Blob change feed lives in the system container $blobchangefeed and stores ordered records as Avro. It is not a queue and does not auto-mirror to a different account.",
    },
    {
      id: 'az204-88',
      topic: 'Implement Azure security',
      question:
        "An ASP.NET Core app authenticates users with Microsoft Entra ID and calls a downstream Web API on behalf of the user. Which OAuth flow does this require between the app and the API?",
      options: [
        { id: 'a', text: 'Resource Owner Password Credentials.' },
        { id: 'b', text: 'Device code flow.' },
        { id: 'c', text: 'Client Credentials with shared key.' },
        { id: 'd', text: 'On-behalf-of (OBO) flow.' },
      ],
      correctId: 'd',
      explanation:
        "The On-behalf-of flow exchanges the inbound user token for a downstream token while keeping the user identity. Client Credentials would call as the app and lose the user context.",
    },
    {
      id: 'az204-89',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure API Management instance must route requests for orders.example.com to a backend in Azure and for legacy.example.com to a backend in AWS. Which approach is cleanest?",
      options: [
        { id: 'a', text: 'Two named backends and a set-backend-service policy keyed on the Host header.' },
        { id: 'b', text: 'Two separate API Management instances.' },
        { id: 'c', text: 'One backend with a hardcoded URL.' },
        { id: 'd', text: 'Manually edit DNS for each call.' },
      ],
      correctId: 'a',
      explanation:
        "Named backends plus set-backend-service inside a choose policy let one APIM instance route by host. Two instances doubles cost and a hardcoded URL cannot multiplex per host.",
    },
    {
      id: 'az204-90',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "Application Insights live metrics show your service at 70 percent failed requests, but the Failures blade shows almost none over the last hour. What is the most likely explanation?",
      options: [
        { id: 'a', text: 'Failures only count exceptions, never HTTP status codes.' },
        { id: 'b', text: 'Live metrics is unsampled and short-window, while the Failures blade is sampled and aggregated over a longer window.' },
        { id: 'c', text: 'The connection string is wrong.' },
        { id: 'd', text: 'The app is running on a Free tier.' },
      ],
      correctId: 'b',
      explanation:
        "Live metrics is a separate, unsampled stream and the Failures blade aggregates sampled persisted telemetry over the time picker, so a recent spike may not show as a high percentage. The connection string would suppress both.",
    },
    {
      id: 'az204-91',
      topic: 'Develop Azure compute solutions',
      question:
        "A long-running Durable Function pattern needs to wait for an external approval that may take days. Which Durable Functions feature suits this?",
      options: [
        { id: 'a', text: 'Eternal orchestrations with TimerTrigger.' },
        { id: 'b', text: 'Singleton entity with locks.' },
        { id: 'c', text: 'External events: WaitForExternalEvent inside the orchestrator.' },
        { id: 'd', text: 'Sub-orchestrations only.' },
      ],
      correctId: 'c',
      explanation:
        "WaitForExternalEvent suspends the orchestrator until an event (sent via RaiseEventAsync) arrives, which can take seconds or days. Eternal orchestrations are continuous loops, not event waits.",
    },
    {
      id: 'az204-92',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB SQL API: which client configuration reduces latency on reads from a globally distributed account?",
      options: [
        { id: 'a', text: 'SetSamplingRate on the SDK.' },
        { id: 'b', text: 'Disable retry on throttling.' },
        { id: 'c', text: 'Use Gateway mode and disable Direct mode.' },
        { id: 'd', text: 'PreferredLocations or ApplicationRegion set on the client to route to the closest region.' },
      ],
      correctId: 'd',
      explanation:
        "Setting PreferredLocations or ApplicationRegion routes reads to the nearest region the account replicates to. Direct mode is usually faster than Gateway, so disabling Direct would slow things down.",
    },
    {
      id: 'az204-93',
      topic: 'Implement Azure security',
      question:
        "Your Web App must call Azure SQL Database with a Microsoft Entra ID Managed Identity instead of a SQL user and password. Which connection string fragment is correct?",
      options: [
        { id: 'a', text: 'Authentication=Active Directory Default.' },
        { id: 'b', text: 'Integrated Security=True.' },
        { id: 'c', text: 'TrustServerCertificate=True only.' },
        { id: 'd', text: 'Persist Security Info=True.' },
      ],
      correctId: 'a',
      explanation:
        "Authentication=Active Directory Default in SqlClient walks DefaultAzureCredential, which finds the Managed Identity and obtains a token. Integrated Security uses Windows authentication, which is not the same.",
    },
    {
      id: 'az204-94',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "An Azure Service Bus client must process messages with peek-lock semantics so that a failed handler does not delete the message. Which API call removes the message after a successful handler?",
      options: [
        { id: 'a', text: 'AbandonMessageAsync.' },
        { id: 'b', text: 'CompleteMessageAsync.' },
        { id: 'c', text: 'DeadLetterMessageAsync.' },
        { id: 'd', text: 'DeferMessageAsync.' },
      ],
      correctId: 'b',
      explanation:
        "CompleteMessageAsync removes the locked message from the queue. Abandon releases the lock so the message reappears, and DeadLetter sends it to the DLQ.",
    },
    {
      id: 'az204-95',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "An Azure App Service has cold start issues for the first request after a deploy. You want App Service to call /warmup before sending live traffic to the new instance. Where do you configure this?",
      options: [
        { id: 'a', text: 'host.json under extensions.warmup.' },
        { id: 'b', text: 'function.json with a warmup trigger.' },
        { id: 'c', text: 'web.config or applicationHost.xdt with applicationInitialization paths.' },
        { id: 'd', text: 'A KQL alert.' },
      ],
      correctId: 'c',
      explanation:
        "App Service Application Initialization runs the configured paths against a new worker until it returns 200 before routing traffic. host.json is for Functions runtime extensions, not App Service warm-up.",
    },
    {
      id: 'az204-96',
      topic: 'Develop Azure compute solutions',
      question:
        "An Azure Functions C# class is decorated with [FunctionName(\"OrderProcessor\")] and a queueTrigger. The function logs to ILogger. Which approach is the recommended way to receive the logger?",
      options: [
        { id: 'a', text: 'A static field assigned at startup.' },
        { id: 'b', text: 'Console.WriteLine only.' },
        { id: 'c', text: 'A custom singleton from app settings.' },
        { id: 'd', text: 'ILogger injected by the runtime through dependency injection or as a method parameter.' },
      ],
      correctId: 'd',
      explanation:
        "Azure Functions exposes ILogger via DI in the isolated worker model and via a method parameter in the in-process model, which captures category and scope correctly. Console.WriteLine bypasses the structured pipeline.",
    },
    {
      id: 'az204-97',
      topic: 'Develop for Azure storage',
      question:
        "Azure Cosmos DB transactions across multiple items must include rollback on failure. Which feature satisfies this within a single logical partition?",
      options: [
        { id: 'a', text: 'Transactional batch (TransactionalBatch in the SDK).' },
        { id: 'b', text: 'Two-phase commit across regions.' },
        { id: 'c', text: 'Bulk import with retries.' },
        { id: 'd', text: 'Stored procedure with no batch wrapper.' },
      ],
      correctId: 'a',
      explanation:
        "TransactionalBatch executes a list of operations in one logical partition atomically and rolls back on any failure. Bulk import is for throughput and does not give all-or-nothing semantics.",
    },
    {
      id: 'az204-98',
      topic: 'Implement Azure security',
      question:
        "Microsoft Entra ID Continuous Access Evaluation (CAE) lets a resource provider revoke a token before it expires. Which client behaviour does CAE require?",
      options: [
        { id: 'a', text: 'Always treat 401 with claims challenge as a terminal error.' },
        { id: 'b', text: 'Handle the WWW-Authenticate claims challenge by re-acquiring a token from Microsoft Entra ID.' },
        { id: 'c', text: 'Cache tokens for 24 hours regardless of the response.' },
        { id: 'd', text: 'Disable token caching entirely.' },
      ],
      correctId: 'b',
      explanation:
        "CAE-enabled clients must follow the claims challenge in the 401 response and request a fresh token with the new claims. Treating the 401 as terminal breaks normal sign-in.",
    },
    {
      id: 'az204-99',
      topic: 'Connect to and consume Azure services and third-party services',
      question:
        "Azure API Management lets you mock a backend so consumers can develop against a fake response while the real API is built. Which policy enables this?",
      options: [
        { id: 'a', text: 'set-backend-service to localhost.' },
        { id: 'b', text: 'rate-limit calls=0.' },
        { id: 'c', text: 'mock-response with a status code and example body.' },
        { id: 'd', text: 'forward-request with timeout=0.' },
      ],
      correctId: 'c',
      explanation:
        "mock-response returns the example response defined in the operation, with no call to a backend. set-backend-service to localhost would only fail because there is nothing to call.",
    },
    {
      id: 'az204-100',
      topic: 'Monitor, troubleshoot, and optimise Azure solutions',
      question:
        "A team wants Azure Monitor to scale an Azure App Service plan out when CPU is above 75 percent for 10 minutes and back in when CPU is under 30 percent for 15 minutes. Which configuration achieves this?",
      options: [
        { id: 'a', text: 'A single autoscale rule with both conditions in one rule.' },
        { id: 'b', text: 'Schedule-based scaling at fixed times.' },
        { id: 'c', text: 'Manual scaling each morning.' },
        { id: 'd', text: 'A profile with a scale-out rule (CPU > 75 percent for 10 min) and a scale-in rule (CPU < 30 percent for 15 min) on the App Service plan.' },
      ],
      correctId: 'd',
      explanation:
        "Autoscale profiles take separate rules for scale-out and scale-in with their own thresholds and cooldowns. A single rule cannot express both conditions, and schedule-based scaling does not react to CPU.",
    },
  ],
}
