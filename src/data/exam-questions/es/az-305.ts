import type { ExamSet } from '../types'

export const az305: ExamSet = {
  examCode: 'AZ-305',
  examName: 'Azure Solutions Architect Expert',
  description:
    'Diez preguntas de arquitectura al nivel del AZ-305. Diseño de identity y governance, elección del data store, business continuity, infraestructura y migración.',
  ceCourseSlug: 'azure-solutions-architect',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-solutions-architect',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az305-1',
      topic: 'Identity Design',
      question:
        'Tras una fusión, una organización tiene dos Microsoft Entra tenants. Los usuarios del tenant A necesitan acceso ocasional a recursos del tenant B sin que IT del tenant B administre cuentas. ¿Qué decisión de diseño encaja?',
      options: [
        { id: 'a', text: 'Fusionar el tenant A y el tenant B en un solo tenant.' },
        { id: 'b', text: 'Cross-tenant access settings con Entra B2B e invitaciones de guest desde el tenant B.' },
        { id: 'c', text: 'Configurar un Active Directory trust entre ambos tenants.' },
        { id: 'd', text: 'Compartir service principals entre los tenants.' },
      ],
      correctId: 'b',
      explanation:
        'Entra B2B con cross-tenant access settings invita a los usuarios como guests; el lifecycle queda en el home tenant. Fusionar tenants no es una operación soportada y exigiría una migración completa.',
    },
    {
      id: 'az305-2',
      topic: 'Data Storage',
      question:
        'Una aplicación global necesita reads por debajo de 10 ms en cinco regiones y debe aceptar writes single-region con failover automático. ¿Qué servicio encaja mejor?',
      options: [
        { id: 'a', text: 'Azure SQL Database single instance con geo-replication.' },
        { id: 'b', text: 'Azure Database for PostgreSQL Flexible Server.' },
        { id: 'c', text: 'Azure Table Storage con RA-GRS.' },
        { id: 'd', text: 'Azure Cosmos DB con multi-region reads y single-region writes.' },
      ],
      correctId: 'd',
      explanation:
        'Cosmos DB ofrece distribución global, multi-region reads bajo 10 ms y failover regional automático. La geo-replication de SQL Database entrega secondaries de solo lectura con mayor latencia.',
    },
    {
      id: 'az305-3',
      topic: 'Business Continuity',
      question:
        'Una aplicación line-of-business sobre una VM de Azure debe alcanzar un RTO de 1 hora y un RPO de 5 minutos, con failover a otra región. ¿Qué servicio encaja?',
      options: [
        { id: 'a', text: 'Azure Site Recovery con cross-region replication.' },
        { id: 'b', text: 'Azure Backup con snapshots diarios.' },
        { id: 'c', text: 'Availability Sets dentro de la misma región.' },
        { id: 'd', text: 'Storage account replication en GRS.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Site Recovery replica de forma continua y alcanza RPOs de minutos y RTOs por debajo de una hora. Azure Backup no logra un RPO de 5 minutos; los Availability Sets no protegen ante caída regional.',
    },
    {
      id: 'az305-4',
      topic: 'Networking',
      question:
        'Una aplicación web sobre varios App Services en dos regiones necesita global load balancing, WAF y SSL offloading en el edge. ¿Qué eliges?',
      options: [
        { id: 'a', text: 'Un Application Gateway con WAF en cada región.' },
        { id: 'b', text: 'Azure Load Balancer Standard.' },
        { id: 'c', text: 'Azure Front Door Premium.' },
        { id: 'd', text: 'Traffic Manager con endpoint monitoring.' },
      ],
      correctId: 'c',
      explanation:
        'Front Door Premium combina global anycast load balancing, WAF y SSL offloading en el edge. Traffic Manager solo hace ruteo DNS, sin WAF ni SSL offloading.',
    },
    {
      id: 'az305-5',
      topic: 'Compute',
      question:
        'Un equipo opera una plataforma de microservicios con más de 40 servicios y necesita auto-scaling, mTLS entre servicios y deployments blue-green. ¿Qué plataforma encaja?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service con un service mesh como Istio o Open Service Mesh.' },
        { id: 'b', text: 'Azure App Service con deployment slots.' },
        { id: 'c', text: 'Azure Container Instances detrás de un Application Gateway.' },
        { id: 'd', text: 'Azure Virtual Machines con IIS y Application Request Routing.' },
      ],
      correctId: 'a',
      explanation:
        'AKS con service mesh cubre escala, mTLS y patterns avanzados de deployment para muchos servicios. App Service funciona con pocos servicios pero no aporta mesh.',
    },
    {
      id: 'az305-6',
      topic: 'Integration',
      question:
        'Un pipeline de procesamiento de pedidos debe absorber picos de 100 000 mensajes por hora, mantener orden dentro de particiones por cliente y soportar consumers en protocolo Apache Kafka. ¿Qué servicio eliges?',
      options: [
        { id: 'a', text: 'Azure Storage Queues.' },
        { id: 'b', text: 'Azure Service Bus Queues en Standard tier.' },
        { id: 'c', text: 'Azure Event Hubs con endpoint Kafka.' },
        { id: 'd', text: 'Azure Logic Apps con un built-in connector.' },
      ],
      correctId: 'c',
      explanation:
        'Event Hubs procesa millones de events, soporta partitions para mantener orden y expone un endpoint Kafka, así los consumers Kafka funcionan sin cambios. Service Bus tiene menor throughput y no habla Kafka.',
    },
    {
      id: 'az305-7',
      topic: 'Migration',
      question:
        'Un cliente opera cientos de VMs VMware on-premises y quiere migrarlas a Azure con downtime mínimo y conservación de IPs cuando sea posible. ¿Qué enfoque encaja?',
      options: [
        { id: 'a', text: 'Crear manualmente nuevas VMs en Azure y copiar datos con robocopy.' },
        { id: 'b', text: 'Azure Migrate con la Server Migration tool y replicación agentless de VMware.' },
        { id: 'c', text: 'Database Migration Service para todo el parque.' },
        { id: 'd', text: 'Storage Sync de todos los discos hacia Azure Files.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Migrate Server Migration replica VMs VMware en agentless y minimiza el downtime en el cutover. Database Migration Service solo cubre bases de datos, no sistemas operativos completos.',
    },
    {
      id: 'az305-8',
      topic: 'Security Design',
      question:
        'Una aplicación PaaS debe leer secrets sin guardar credenciales en código ni en configuración. ¿Qué combinación aplicas?',
      options: [
        {
          id: 'a',
          text: 'Una managed identity system-assigned vinculada al App Service y RBAC sobre un Azure Key Vault.',
        },
        { id: 'b', text: 'Connection strings en Application Settings rotadas a mano.' },
        { id: 'c', text: 'Un service principal con client secret en una environment variable.' },
        { id: 'd', text: 'Un archivo .env local desplegado junto con la aplicación.' },
      ],
      correctId: 'a',
      explanation:
        'Una managed identity se autentica contra Key Vault sin secrets en código ni configuración. Un service principal con client secret solo traslada el problema de gestión de credenciales.',
    },
    {
      id: 'az305-9',
      topic: 'Cost Optimization',
      question:
        'Un workload de producción corre 24/7 con capacidad predecible. ¿Qué modelo de pricing ahorra más frente al pay-as-you-go?',
      options: [
        { id: 'a', text: 'Spot Virtual Machines.' },
        { id: 'b', text: 'Azure Hybrid Benefit por sí solo.' },
        { id: 'c', text: 'Dev/Test pricing.' },
        { id: 'd', text: 'Reserved Instances a 3 años, opcionalmente combinadas con Azure Hybrid Benefit.' },
      ],
      correctId: 'd',
      explanation:
        'Las Reserved Instances a 3 años ahorran hasta un 72% en workloads predecibles y se combinan con Hybrid Benefit. Las Spot VMs no son aptas para producción porque pueden ser desalojadas en cualquier momento.',
    },
    {
      id: 'az305-10',
      topic: 'Governance',
      question:
        'Diseñas una landing zone para una empresa con varias business units y reglas estrictas de naming, tagging y región. ¿Qué combinación entrega esa estructura?',
      options: [
        { id: 'a', text: 'Una sola subscription con tags puestas a mano.' },
        { id: 'b', text: 'Resource locks en cada resource group.' },
        {
          id: 'c',
          text: 'Management Groups por business unit, Azure Policy para las reglas y deployment vía un pattern central de IaC.',
        },
        { id: 'd', text: 'Un Entra tenant separado por cada business unit.' },
      ],
      correctId: 'c',
      explanation:
        'Los Management Groups agrupan subscriptions y permiten que Azure Policy aplique de forma jerárquica, junto con un pattern IaC para deploys repetibles. Un tenant por BU rompe el SSO y es poco habitual.',
    },
  ],
}
