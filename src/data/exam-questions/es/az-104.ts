import type { ExamSet } from '../types'

export const az104: ExamSet = {
  examCode: 'AZ-104',
  examName: 'Azure Administrator Associate',
  description:
    'Diez preguntas de escenario al nivel del AZ-104. Identity, governance, storage, compute, virtual networking, monitoring y backup.',
  ceCourseSlug: 'azure-administrator',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-administrator',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az104-1',
      topic: 'Identity',
      question:
        'Tienes un Microsoft Entra tenant con 800 usuarios. La pertenencia a grupos debe administrarse de forma automática a partir del atributo "department". ¿Qué configuras?',
      options: [
        { id: 'a', text: 'Una distribution list dinámica en Exchange Online.' },
        { id: 'b', text: 'Una administrative unit con asignaciones manuales.' },
        { id: 'c', text: 'Un dynamic group con una membership rule sobre el atributo department.' },
        { id: 'd', text: 'Conditional Access con group filtering.' },
      ],
      correctId: 'c',
      explanation:
        'Los dynamic groups en Entra ID usan una rule expression para resolver la membership desde los atributos de usuario. Las distribution lists son un mecanismo de correo, no de autorización.',
    },
    {
      id: 'az104-2',
      topic: 'Governance',
      question:
        'Quieres evitar que se elimine por error un resource group, pero los recursos dentro siguen pudiéndose modificar. ¿Qué lock aplicas?',
      options: [
        { id: 'a', text: 'CanNotDelete sobre el resource group.' },
        { id: 'b', text: 'ReadOnly sobre el resource group.' },
        { id: 'c', text: 'CanNotDelete a nivel de subscription.' },
        { id: 'd', text: 'Azure Policy con efecto deny sobre las acciones delete.' },
      ],
      correctId: 'a',
      explanation:
        'Un lock CanNotDelete sobre el resource group bloquea el borrado pero permite updates. ReadOnly también bloquearía cambios, lo que aquí no se desea.',
    },
    {
      id: 'az104-3',
      topic: 'Storage',
      question:
        'Usas un storage account general-purpose v2. Un archivo de log deja de leerse a los 30 días pero debe conservarse otros tres años para auditoría. ¿Cómo reduces el costo sin perder datos?',
      options: [
        { id: 'a', text: 'Moverlo manualmente a otro storage account en una región más barata.' },
        { id: 'b', text: 'Desactivar soft delete en el container.' },
        { id: 'c', text: 'Cambiar el account de GRS a LRS.' },
        {
          id: 'd',
          text: 'Configurar una Lifecycle Management policy que mueva los blobs a Cool a los 30 días y a Archive a los 90.',
        },
      ],
      correctId: 'd',
      explanation:
        'Lifecycle Management automatiza las transiciones de tier según last-modified o last-access. Desactivar soft delete no reduce costo y aumenta el riesgo.',
    },
    {
      id: 'az104-4',
      topic: 'Compute',
      question:
        'Tienes una VM Windows con un data disk que quieres reemplazar por una managed disk más grande, sin perder datos. ¿Cuál es el enfoque correcto?',
      options: [
        { id: 'a', text: 'Cambiar la VM a una SKU con más storage y reiniciar.' },
        {
          id: 'b',
          text: 'Detener y deallocar la VM, ampliar la managed disk existente y extender el volumen en el OS.',
        },
        { id: 'c', text: 'Eliminar la disk y volver a crearla desde un snapshot.' },
        { id: 'd', text: 'Montar un share de Azure Files con una nueva letra de unidad.' },
      ],
      correctId: 'b',
      explanation:
        'Ampliar una managed disk preserva los datos; luego se extiende el volumen en Disk Management o con diskpart. Cambiar el SKU de la VM no modifica el tamaño del data disk.',
    },
    {
      id: 'az104-5',
      topic: 'Networking',
      question:
        'Dos VNets en la misma región necesitan hablar entre sí en privado y con baja latencia. ¿Qué opción eliges?',
      options: [
        { id: 'a', text: 'Una VPN site-to-site entre ambos VNets.' },
        { id: 'b', text: 'Un Application Gateway en cada VNet.' },
        { id: 'c', text: 'VNet peering entre los dos VNets.' },
        { id: 'd', text: 'Un Azure Front Door con un origin en cada VNet.' },
      ],
      correctId: 'c',
      explanation:
        'VNet peering enruta el tráfico de forma privada por el backbone de Microsoft con baja latencia. Una VPN entre VNets de la misma región añade overhead innecesario.',
    },
    {
      id: 'az104-6',
      topic: 'Networking',
      question:
        'Una VM solo puede recibir el puerto 443 desde internet, pero puede salir a cualquier puerto. ¿Qué configuración de NSG es correcta?',
      options: [
        {
          id: 'a',
          text: 'Una inbound rule que permita TCP 443 con prioridad mayor que la default DenyAllInbound; las reglas outbound se dejan por defecto.',
        },
        { id: 'b', text: 'Una outbound rule que bloquee todos los puertos excepto 443.' },
        { id: 'c', text: 'Una inbound rule que permita todos los puertos y outbound rules que bloqueen todo.' },
        { id: 'd', text: 'Para esta configuración es obligatorio Azure Firewall.' },
      ],
      correctId: 'a',
      explanation:
        'Las defaults del NSG ya bloquean todo el tráfico inbound salvo VNet y load balancer; basta con añadir una allow rule para 443 con prioridad menor que 65500. En outbound, AllowInternetOutbound ya permite todo.',
    },
    {
      id: 'az104-7',
      topic: 'Backup',
      question:
        'Hay que configurar backups diarios para 50 VMs de producción con retención de 30 días. ¿Cuál es la opción más adecuada?',
      options: [
        { id: 'a', text: 'Programar snapshots con Azure CLI dentro de un runbook.' },
        { id: 'b', text: 'Azure Backup con un Recovery Services Vault y una backup policy de 30 días.' },
        { id: 'c', text: 'Azure Site Recovery con replication continua.' },
        { id: 'd', text: 'Snapshots de storage account desde el portal.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup con un Recovery Services Vault es la opción nativa y administrada para backups de VMs con retención flexible. Site Recovery está pensado para disaster recovery, no para backup point-in-time.',
    },
    {
      id: 'az104-8',
      topic: 'Monitoring',
      question:
        'Quieres una alerta cuando el CPU de una VM supere el 85% en promedio durante cinco minutos. ¿Qué combinación configuras?',
      options: [
        { id: 'a', text: 'Una diagnostic setting hacia un storage account con 7 días de retención.' },
        { id: 'b', text: 'Un Service Health alert.' },
        {
          id: 'c',
          text: 'Una metric alert sobre Percentage CPU con threshold 85, aggregation Average, periodo 5 minutos, conectada a una action group.',
        },
        { id: 'd', text: 'Un Activity Log alert sobre la operación "VirtualMachines/start".' },
      ],
      correctId: 'c',
      explanation:
        'Las metric alerts evalúan telemetría numérica como Percentage CPU. Los Activity Log alerts vigilan eventos de control-plane, no métricas de rendimiento.',
    },
    {
      id: 'az104-9',
      topic: 'RBAC',
      question:
        'Un desarrollador debe poder reiniciar VMs en un resource group, pero no crearlas, eliminarlas ni redeployarlas. ¿Qué enfoque sigue least privilege?',
      options: [
        { id: 'a', text: 'Asignar Owner sobre el resource group.' },
        { id: 'b', text: 'Asignar Contributor sobre la subscription.' },
        { id: 'c', text: 'Asignar Reader sobre la subscription.' },
        {
          id: 'd',
          text: 'Crear una custom role con solo Microsoft.Compute/virtualMachines/restart/action y asignarla en el resource group.',
        },
      ],
      correctId: 'd',
      explanation:
        'Una custom role limitada a la acción restart entrega exactamente los derechos necesarios y nada más. Owner y Contributor son demasiado amplios; Reader no permite acciones.',
    },
    {
      id: 'az104-10',
      topic: 'Storage',
      question:
        'Tienes que dar a un partner externo acceso de solo lectura a un blob específico durante 24 horas, sin compartir un account key. ¿Qué enfoque corresponde?',
      options: [
        { id: 'a', text: 'Un service SAS con permiso read y expiry de 24 horas.' },
        { id: 'b', text: 'Hacer el account legible de forma anónima con "Allow Blob anonymous access".' },
        { id: 'c', text: 'Entregar la storage account key de forma temporal y luego rotarla.' },
        { id: 'd', text: 'Agregar al partner a un Entra group y asignarle la rol Storage Blob Data Reader.' },
      ],
      correctId: 'a',
      explanation:
        'Un service SAS otorga acceso acotado y temporal con permisos y expiry explícitos, sin exponer el account key. El acceso anónimo es demasiado amplio y RBAC requiere una identidad Entra.',
    },
  ],
}
