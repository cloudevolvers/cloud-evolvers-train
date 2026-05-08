import type { ExamSet } from '../types'

export const az900: ExamSet = {
  examCode: 'AZ-900',
  examName: 'Azure Fundamentals',
  description:
    'Diez preguntas de práctica al nivel del examen oficial AZ-900. Conceptos de cloud, arquitectura de Azure, servicios principales, seguridad, governance y precios.',
  ceCourseSlug: 'azure-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'az900-1',
      topic: 'Cloud Concepts',
      question:
        'Una empresa quiere pagar solo por el compute que realmente usa y poder escalar la capacidad por minuto. ¿Qué característica del cloud describe mejor este requisito?',
      options: [
        { id: 'a', text: 'Consumption-based pricing.' },
        { id: 'b', text: 'High availability.' },
        { id: 'c', text: 'Disaster recovery.' },
        { id: 'd', text: 'Fault tolerance.' },
      ],
      correctId: 'a',
      explanation:
        'El consumption-based pricing (pay-as-you-go) cobra solo el uso real, normalmente por minuto o por segundo. La high availability se refiere al uptime, no al modelo de costos.',
    },
    {
      id: 'az900-2',
      topic: 'Cloud Models',
      question:
        'Un equipo de desarrollo quiere ejecutar una aplicación web sin gestionar las VMs subyacentes, los parches del OS ni la configuración del web server. ¿Qué modelo de servicio encaja?',
      options: [
        { id: 'a', text: 'Infrastructure as a Service (IaaS).' },
        { id: 'b', text: 'Datacenter on-premises.' },
        { id: 'c', text: 'Platform as a Service (PaaS).' },
        { id: 'd', text: 'Hosting en colocation.' },
      ],
      correctId: 'c',
      explanation:
        'El PaaS entrega una plataforma de runtime en la que Microsoft se ocupa del OS, el patching y el web server. En IaaS sigues administrando el OS y el web server tú mismo.',
    },
    {
      id: 'az900-3',
      topic: 'Azure Architecture',
      question:
        '¿Cuál de estas afirmaciones sobre regiones de Azure y availability zones es correcta?',
      options: [
        { id: 'a', text: 'Una availability zone siempre contiene al menos tres regiones.' },
        {
          id: 'b',
          text: 'Una availability zone es un datacenter físicamente separado dentro de una región, con energía, refrigeración y red propias.',
        },
        { id: 'c', text: 'Las availability zones existen solo en Azure Government, no en regiones públicas.' },
        { id: 'd', text: 'Cada región tiene exactamente dos availability zones.' },
      ],
      correctId: 'b',
      explanation:
        'Una availability zone es un datacenter físicamente independiente dentro de una región, con su propia energía, refrigeración y red. No todas las regiones tienen zonas y la cantidad varía (suele ser tres).',
    },
    {
      id: 'az900-4',
      topic: 'Azure Services',
      question:
        'Necesitas guardar varios cientos de millones de archivos de video e imagen no estructurados al menor costo de almacenamiento. ¿Qué servicio eliges?',
      options: [
        { id: 'a', text: 'Azure SQL Database.' },
        { id: 'b', text: 'Azure Files.' },
        { id: 'c', text: 'Azure Cosmos DB.' },
        { id: 'd', text: 'Azure Blob Storage.' },
      ],
      correctId: 'd',
      explanation:
        'Blob Storage está pensado para grandes volúmenes de datos no estructurados como medios y ofrece el menor precio por GB. Azure Files entrega shares SMB y NFS a un costo por GB más alto.',
    },
    {
      id: 'az900-5',
      topic: 'Identity',
      question:
        '¿Qué servicio de Azure usas para gestionar cuentas de usuario y single sign-on en aplicaciones cloud?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID.' },
        { id: 'b', text: 'Azure Key Vault.' },
        { id: 'c', text: 'Azure Monitor.' },
        { id: 'd', text: 'Azure Policy.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Entra ID (antes Azure Active Directory) es el servicio de identidad para autenticación y SSO. Key Vault administra secrets y certificados, no cuentas de usuario.',
    },
    {
      id: 'az900-6',
      topic: 'Governance',
      question:
        'Un equipo de compliance quiere forzar que todos los nuevos storage accounts en una subscription se creen únicamente en West Europe. ¿Qué servicio encaja?',
      options: [
        { id: 'a', text: 'Azure Blueprints.' },
        { id: 'b', text: 'Microsoft Defender for Cloud.' },
        { id: 'c', text: 'Azure Policy.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Policy evalúa y bloquea recursos que no cumplan una regla, por ejemplo una región permitida. Defender for Cloud se centra en la security posture, no en reglas de deployment.',
    },
    {
      id: 'az900-7',
      topic: 'Pricing',
      question:
        '¿Qué herramienta entrega una estimación mensual para una combinación de recursos de Azure antes de crearlos?',
      options: [
        { id: 'a', text: 'Azure Pricing Calculator.' },
        { id: 'b', text: 'Azure Cost Management.' },
        { id: 'c', text: 'Azure Advisor.' },
        { id: 'd', text: 'Total Cost of Ownership Calculator.' },
      ],
      correctId: 'a',
      explanation:
        'La Pricing Calculator estima el costo de recursos aún no desplegados. Cost Management muestra el consumo real de recursos existentes. La TCO Calculator compara cloud y on-premises.',
    },
    {
      id: 'az900-8',
      topic: 'Networking',
      question:
        '¿Qué servicio conecta una red on-premises con Azure mediante un enlace privado y dedicado, sin pasar por internet pública?',
      options: [
        { id: 'a', text: 'VPN Gateway con point-to-site.' },
        { id: 'b', text: 'Azure ExpressRoute.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure Bastion.' },
      ],
      correctId: 'b',
      explanation:
        'ExpressRoute provee un enlace privado a través de un partner de telecom; el tráfico no pasa por internet pública. Un VPN Gateway cifra tráfico que sí viaja por internet pública.',
    },
    {
      id: 'az900-9',
      topic: 'Security',
      question:
        'En el shared responsibility model, ¿qué responsabilidad recae siempre en el cliente, sin importar el modelo (IaaS, PaaS o SaaS)?',
      options: [
        { id: 'a', text: 'El patching del OS host.' },
        { id: 'b', text: 'La operación de los datacenters físicos.' },
        { id: 'c', text: 'La protección de datos, cuentas y endpoints.' },
        { id: 'd', text: 'El mantenimiento de la plataforma de virtualización.' },
      ],
      correctId: 'c',
      explanation:
        'Los datos, identidades y endpoints siempre quedan a cargo del cliente. Microsoft mantiene siempre la capa física y la plataforma de virtualización.',
    },
    {
      id: 'az900-10',
      topic: 'SLAs and Lifecycle',
      question:
        'Un recurso aparece en Azure como "Preview". ¿Qué implica eso para el service level agreement?',
      options: [
        { id: 'a', text: 'La preview obtiene el mismo SLA del 99,9% que la general availability.' },
        { id: 'b', text: 'Las funciones en preview reciben un SLA reforzado porque pueden ser inestables.' },
        { id: 'c', text: 'El SLA solo aplica con un plan de soporte Premium.' },
        { id: 'd', text: 'Las previews no están cubiertas por un SLA financiero y no son para producción.' },
      ],
      correctId: 'd',
      explanation:
        'Los servicios en preview no tienen SLA financiero y Microsoft desaconseja su uso en producción. El SLA estándar aplica a partir de la general availability.',
    },
  ],
}
