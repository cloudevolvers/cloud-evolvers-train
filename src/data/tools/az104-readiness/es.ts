import type { QuizLangPack } from './types';

export const es: QuizLangPack = {
  lang: 'es',
  htmlLang: 'es',
  ui: {
    seoTitle: 'Test de preparación AZ-104 - Autoevaluación gratuita de Azure Administrator',
    seoDescription:
      'Test de preparación AZ-104 gratuito con 12 preguntas sobre los cinco dominios del examen Microsoft Azure Administrator. Obtén retroalimentación por dominio sobre si estás listo para registrarte.',
    breadcrumbTools: 'Herramientas',
    breadcrumbQuiz: 'Test de preparación AZ-104',
    eyebrow: 'Gratis · 12 preguntas · ~6 minutos',
    title: 'Test de preparación AZ-104',
    lede: 'Doce preguntas de escenario sobre los cinco dominios del examen Azure Administrator. Los resultados se detallan por dominio para que sepas exactamente dónde invertir tiempo de estudio antes de inscribirte.',
    bullet1: 'Tres preguntas por dominio principal, ponderadas según el esquema real del examen.',
    bullet2: 'Explicaciones para cada respuesta al final, no solo una puntuación.',
    bullet3: 'Sin registro, sin captura de correo electrónico. Funciona completamente en tu navegador.',
    startButton: 'Comenzar el test',
    questionOf: 'Pregunta {current} de {total}',
    backButton: 'Atrás',
    nextButton: 'Siguiente',
    seeResults: 'Ver resultados',
    resultsEyebrow: 'Resultados',
    scoreHeading: 'Obtuviste {correct} de {total}',
    byDomain: 'Por dominio',
    examPortion: 'del examen',
    answerReview: 'Revisión de respuestas',
    correctLabel: 'Correcto:',
    verdictLikelyReady: 'Probablemente listo',
    verdictClose: 'Cerca, pero con lagunas',
    verdictNotYet: 'Todavía no',
    adviceLikelyReady:
      'Los candidatos que obtienen esta puntuación en nuestra prueba previa suelen aprobar el examen real. Reserva una fecha y refuerza los dominios débiles en el laboratorio.',
    adviceClose:
      'El conocimiento es sólido pero algunos dominios te costarán puntos. Dedica una semana por dominio débil en laboratorios prácticos antes de inscribirte.',
    adviceNotYet:
      'Inscribirse ahora arriesga un primer intento fallido. Un curso AZ-104 estructurado con laboratorios te llevará allí en 2 a 4 semanas.',
    seeCourseCta: 'Ver curso AZ-104',
    retakeButton: 'Repetir',
    showInEnglish: 'Mostrar en inglés',
    showInLang: 'Mostrar en {lang}',
    languageSwitcherLabel: 'Idioma',
    domainLabels: {
      'identity-governance': 'Identidad y gobernanza',
      storage: 'Almacenamiento',
      compute: 'Proceso',
      networking: 'Redes',
      'monitoring-backup': 'Supervisión y copia de seguridad',
    },
  },
  questions: [
    {
      id: 'q1',
      domain: 'identity-governance',
      question:
        '¿Qué rol de Azure RBAC otorga permiso para administrar todos los recursos de una suscripción, incluida la asignación de roles a otros usuarios, pero no puede administrar Azure AD?',
      options: [
        { id: 'a', text: 'Contributor' },
        { id: 'b', text: 'Owner' },
        { id: 'c', text: 'User Access Administrator' },
        { id: 'd', text: 'Global Administrator' },
      ],
      correctId: 'b',
      explanation:
        'Owner tiene administración completa más asignación de roles dentro del ámbito. Contributor no puede asignar roles. Global Administrator es un rol de Entra ID, no de Azure RBAC.',
    },
    {
      id: 'q2',
      domain: 'identity-governance',
      question:
        'Necesitas aplicar automáticamente una etiqueta a todos los recursos nuevos de un grupo de recursos. ¿Qué característica utilizas?',
      options: [
        { id: 'a', text: 'Resource Lock' },
        { id: 'b', text: 'Azure Policy con efecto modify o append' },
        { id: 'c', text: 'Herencia de grupo de administración' },
        { id: 'd', text: 'Etiquetado manual durante la implementación' },
      ],
      correctId: 'b',
      explanation:
        'Azure Policy con el efecto modify o append puede imponer o agregar automáticamente etiquetas al crear recursos. Los bloqueos impiden cambios, no agregan metadatos.',
    },
    {
      id: 'q3',
      domain: 'identity-governance',
      question:
        'Una alerta de costes debe dispararse cuando el gasto previsto supere el presupuesto. ¿Qué configuras?',
      options: [
        { id: 'a', text: 'Un presupuesto de Cost Management con una condición de alerta de previsión' },
        { id: 'b', text: 'Una alerta de métrica de Azure Monitor sobre TotalCost' },
        { id: 'c', text: 'Una alerta de Service Health' },
        { id: 'd', text: 'Una consulta programada en Log Analytics' },
      ],
      correctId: 'a',
      explanation:
        'Los presupuestos de Cost Management admiten tipos de alertas reales y de previsión. La variante de previsión proyecta el gasto de fin de mes según el ritmo de consumo actual.',
    },
    {
      id: 'q4',
      domain: 'storage',
      question:
        'Una cuenta de almacenamiento contiene un contenedor de blobs que debe ser accesible sin token SAS solo desde un rango de IP corporativo específico. ¿Qué configuración logra esto?',
      options: [
        { id: 'a', text: 'Habilitar el acceso anónimo a blobs en el contenedor' },
        {
          id: 'b',
          text: 'Configurar el firewall de almacenamiento para permitir el rango de IP corporativo y conceder acceso mediante identidad de Entra o clave compartida',
        },
        { id: 'c', text: 'Emitir un token SAS de larga duración' },
        { id: 'd', text: 'Configurar la cuenta de almacenamiento solo con punto de conexión privado' },
      ],
      correctId: 'b',
      explanation:
        'El firewall de almacenamiento más el acceso autenticado (Entra o clave) restringe el acceso al rango de IP manteniendo la autenticación. El acceso anónimo ignora el firewall en algunos escenarios y expone los datos.',
    },
    {
      id: 'q5',
      domain: 'storage',
      question:
        'Necesitas administración del ciclo de vida para mover blobs al nivel de almacenamiento esporádico después de 30 días y archivarlos después de 90 días. ¿Dónde lo configuras?',
      options: [
        { id: 'a', text: 'En cada blob individualmente mediante metadatos' },
        { id: 'b', text: 'En la cuenta de almacenamiento mediante una directiva de administración del ciclo de vida en JSON' },
        { id: 'c', text: 'Mediante Azure Policy en el ámbito de suscripción' },
        { id: 'd', text: 'A través de Defender for Storage' },
      ],
      correctId: 'b',
      explanation:
        'Las directivas de ciclo de vida se definen como reglas JSON en el nivel de cuenta de almacenamiento y se aplican a contenedores y prefijos especificados.',
    },
    {
      id: 'q6',
      domain: 'storage',
      question:
        '¿Qué opción de redundancia conserva tres copias de datos en una sola región y tres copias adicionales en una región emparejada, con acceso de lectura a la región secundaria?',
      options: [
        { id: 'a', text: 'LRS' },
        { id: 'b', text: 'ZRS' },
        { id: 'c', text: 'GRS' },
        { id: 'd', text: 'RA-GRS' },
      ],
      correctId: 'd',
      explanation:
        'RA-GRS agrega acceso de lectura a la región secundaria además de la replicación GRS. GRS replica pero la región secundaria no es directamente legible.',
    },
    {
      id: 'q7',
      domain: 'compute',
      question:
        'Un conjunto de escalado de máquinas virtuales debe escalar cuando la CPU promedio supere el 70 % durante 10 minutos. ¿Qué característica configuras?',
      options: [
        { id: 'a', text: 'Escalado manual' },
        { id: 'b', text: 'Regla de escalado automático personalizada con desencadenador de métrica y ventana de tiempo' },
        { id: 'c', text: 'Availability Set' },
        { id: 'd', text: 'Runbook de Azure Automation' },
      ],
      correctId: 'b',
      explanation:
        'Las reglas de escalado automático usan desencadenadores basados en métricas con tipo de agregación, umbral y ventana de tiempo para agregar o quitar instancias.',
    },
    {
      id: 'q8',
      domain: 'compute',
      question:
        'Necesitas asegurarte de que las máquinas virtuales estén distribuidas entre dominios de actualización y dominios de error dentro de un único centro de datos. ¿Qué usas?',
      options: [
        { id: 'a', text: 'Zonas de disponibilidad' },
        { id: 'b', text: 'Availability Set' },
        { id: 'c', text: 'Proximity Placement Group' },
        { id: 'd', text: 'Par de regiones' },
      ],
      correctId: 'b',
      explanation:
        'Los Availability Sets distribuyen las máquinas virtuales entre dominios de actualización y error en un único centro de datos. Las zonas de disponibilidad abarcan centros de datos dentro de una región.',
    },
    {
      id: 'q9',
      domain: 'compute',
      question:
        'Una implementación de plantilla ARM falla porque un recurso depende de otro que aún no está aprovisionado. ¿Qué propiedad agregas?',
      options: [
        { id: 'a', text: 'condition' },
        { id: 'b', text: 'dependsOn' },
        { id: 'c', text: 'mode: Incremental' },
        { id: 'd', text: 'copy' },
      ],
      correctId: 'b',
      explanation:
        'dependsOn declara un orden explícito entre los recursos durante la implementación.',
    },
    {
      id: 'q10',
      domain: 'networking',
      question:
        'Dos redes virtuales en la misma región deben comunicarse sin pasar por la internet pública, con el tráfico en el backbone de Microsoft. ¿Qué configuras?',
      options: [
        { id: 'a', text: 'Conexión de puerta de enlace VPN' },
        { id: 'b', text: 'Emparejamiento de VNet' },
        { id: 'c', text: 'ExpressRoute' },
        { id: 'd', text: 'Punto de conexión de servicio' },
      ],
      correctId: 'b',
      explanation:
        'El emparejamiento de VNet conecta dos VNets directamente a través del backbone de Microsoft. El emparejamiento en la misma región es la solución más sencilla.',
    },
    {
      id: 'q11',
      domain: 'networking',
      question:
        'Debes permitir el tráfico saliente de una subred solo hacia FQDN específicos y bloquear todo lo demás. ¿Qué servicio lo gestiona?',
      options: [
        { id: 'a', text: 'Network Security Group con reglas de FQDN' },
        { id: 'b', text: 'Azure Firewall con reglas de aplicación' },
        { id: 'c', text: 'Ruta definida por el usuario' },
        { id: 'd', text: 'Etiqueta de servicio' },
      ],
      correctId: 'b',
      explanation:
        'Los NSG filtran por IP/puerto, no por FQDN. Las reglas de aplicación de Azure Firewall admiten el filtrado por FQDN para el tráfico HTTP/S saliente.',
    },
    {
      id: 'q12',
      domain: 'monitoring-backup',
      question:
        'Un disco administrado necesita copias de seguridad diarias conservadas durante 30 días. ¿Qué servicio de Azure usas?',
      options: [
        { id: 'a', text: 'Azure Site Recovery' },
        { id: 'b', text: 'Recovery Services Vault con directiva de Azure Backup' },
        { id: 'c', text: 'Instantánea manual mediante un runbook' },
        { id: 'd', text: 'Eliminación temporal de cuenta de almacenamiento' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup con un Recovery Services Vault proporciona copias de seguridad programadas de discos y máquinas virtuales con directiva de retención. Site Recovery es para replicación y recuperación ante desastres, no para copias de seguridad en un momento dado.',
    },
  ],
};
