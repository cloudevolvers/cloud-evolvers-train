import type { BlogPost } from '../types';

export const aksNetworkPoliciesPost: BlogPost = {
  id: 'aks-network-policies-zero-trust',
  title: {
    en: 'AKS Network Policies: Implementing Zero Trust Security with Cilium',
    nl: 'AKS Network Policies: Zero Trust Security Implementeren met Cilium'
  },
  description: {
    en: 'Master Kubernetes network policies in AKS using Azure CNI Powered by Cilium for Layer 7 filtering, FQDN-based policies, and microsegmentation',
    nl: 'Beheers Kubernetes network policies in AKS met Azure CNI Powered by Cilium voor Layer 7 filtering, FQDN-gebaseerde policies en microsegmentatie'
  },
  date: '2025-12-03',
  author: 'Falk Krahl',
  tags: ['AKS', 'Kubernetes', 'Security', 'Cilium', 'Zero Trust', 'Networking'],
  image: '/images/pexels/pexels-kubernetes-containers.jpg',
  excerpt: {
    en: 'Kubernetes allows all pod-to-pod traffic by default. Learn how to implement Zero Trust network security in AKS using advanced network policies with Cilium for Layer 7 protection.',
    nl: 'Kubernetes staat standaard al het pod-to-pod verkeer toe. Leer hoe je Zero Trust netwerkbeveiliging implementeert in AKS met geavanceerde network policies met Cilium voor Layer 7 bescherming.'
  },
  category: {
    en: 'Kubernetes & Containers',
    nl: 'Kubernetes & Containers'
  },
  readTime: 16,
  content: {
    introduction: {
      en: 'By default, Kubernetes operates as a flat network where all pods can communicate freely with each other. This unrestricted connectivity poses significant security risks as applications scale. Imagine deploying multiple microservices handling sensitive data - without restrictions, any compromised pod could access unauthorized data or disrupt services. Network Policies in AKS, especially with Azure CNI Powered by Cilium, provide the fine-grained control needed for Zero Trust security.',
      nl: 'Standaard werkt Kubernetes als een plat netwerk waar alle pods vrij met elkaar kunnen communiceren. Deze onbeperkte connectiviteit vormt aanzienlijke beveiligingsrisico\'s naarmate applicaties schalen. Stel je voor dat je meerdere microservices deployt die gevoelige data verwerken - zonder beperkingen kan elke gecompromitteerde pod ongeautoriseerde data benaderen of services verstoren. Network Policies in AKS, vooral met Azure CNI Powered by Cilium, bieden de fijnmazige controle die nodig is voor Zero Trust beveiliging.'
    },
    sections: [
      {
        title: {
          en: 'Understanding Kubernetes Network Policies',
          nl: 'Kubernetes Network Policies Begrijpen'
        },
        content: {
          en: 'Network Policies are Kubernetes resources that control traffic flow between pods and external services. They provide fine-grained control at the namespace level using pod selectors (which pods the policy applies to), ingress rules (allowed incoming connections), and egress rules (allowed outgoing connections). Traditional policies operate at Layer 3/4 (IP and TCP/UDP), but Cilium extends this to Layer 7 for application-level control.',
          nl: 'Network Policies zijn Kubernetes resources die verkeer controleren tussen pods en externe services. Ze bieden fijnmazige controle op namespace-niveau met pod selectors (op welke pods de policy van toepassing is), ingress rules (toegestane inkomende verbindingen) en egress rules (toegestane uitgaande verbindingen). Traditionele policies werken op Layer 3/4 (IP en TCP/UDP), maar Cilium breidt dit uit naar Layer 7 voor application-level controle.'
        }
      },
      {
        title: {
          en: 'Enabling Azure CNI Powered by Cilium',
          nl: 'Azure CNI Powered by Cilium Inschakelen'
        },
        content: {
          en: 'Azure CNI Powered by Cilium brings eBPF-based networking to AKS with advanced features like FQDN filtering, Layer 7 policies, and enhanced observability through Hubble. To create an AKS cluster with Cilium, use the --network-plugin azure and --network-plugin-mode overlay flags, then enable the Advanced Container Networking Services (ACNS) add-on.',
          nl: 'Azure CNI Powered by Cilium brengt eBPF-gebaseerde networking naar AKS met geavanceerde functies zoals FQDN-filtering, Layer 7 policies en verbeterde observability via Hubble. Om een AKS-cluster met Cilium te maken, gebruik de --network-plugin azure en --network-plugin-mode overlay flags, en schakel dan de Advanced Container Networking Services (ACNS) add-on in.'
        },
        code: {
          language: 'bash',
          code: `# Create AKS cluster with Azure CNI Powered by Cilium
az aks create \\
  --resource-group myResourceGroup \\
  --name myAKSCluster \\
  --network-plugin azure \\
  --network-plugin-mode overlay \\
  --pod-cidr 192.168.0.0/16

# Enable Advanced Container Networking Services on existing cluster
az aks update \\
  --resource-group myResourceGroup \\
  --name myAKSCluster \\
  --enable-acns`
        }
      },
      {
        title: {
          en: 'Default Deny Policies',
          nl: 'Default Deny Policies'
        },
        content: {
          en: 'The foundation of Zero Trust networking is denying all traffic by default, then explicitly allowing required communication. Create default deny policies for both ingress and egress in each namespace. This ensures that only explicitly permitted traffic flows between pods, reducing your attack surface dramatically.',
          nl: 'De basis van Zero Trust networking is standaard al het verkeer weigeren, en dan expliciet vereiste communicatie toestaan. Maak default deny policies voor zowel ingress als egress in elke namespace. Dit zorgt ervoor dat alleen expliciet toegestaan verkeer stroomt tussen pods, waardoor je aanvalsoppervlak dramatisch wordt verkleind.'
        },
        code: {
          language: 'yaml',
          code: `# Default deny all ingress and egress
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress`
        }
      },
      {
        title: {
          en: 'FQDN-Based Egress Policies',
          nl: 'FQDN-Gebaseerde Egress Policies'
        },
        content: {
          en: 'Traditional network policies use IP addresses, which is problematic in dynamic environments where IPs frequently change. Cilium FQDN filtering lets you define policies using domain names. This is essential for controlling egress to external APIs - you can allow traffic only to specific domains like api.stripe.com or graph.microsoft.com rather than managing IP ranges.',
          nl: 'Traditionele network policies gebruiken IP-adressen, wat problematisch is in dynamische omgevingen waar IPs vaak veranderen. Cilium FQDN-filtering laat je policies definiëren met domeinnamen. Dit is essentieel voor het controleren van egress naar externe API\'s - je kunt verkeer alleen toestaan naar specifieke domeinen zoals api.stripe.com of graph.microsoft.com in plaats van IP-ranges te beheren.'
        }
      },
      {
        title: {
          en: 'Layer 7 (Application Layer) Policies',
          nl: 'Layer 7 (Application Layer) Policies'
        },
        content: {
          en: 'As modern applications rely heavily on APIs, Layer 3/4 policies are insufficient. Cilium Layer 7 policies let you filter based on HTTP methods, paths, and headers. For example, you can allow GET requests to /api/products but deny DELETE requests to the same endpoint. This provides API-level security without application code changes.',
          nl: 'Omdat moderne applicaties sterk afhankelijk zijn van API\'s, zijn Layer 3/4 policies onvoldoende. Cilium Layer 7 policies laten je filteren op basis van HTTP-methoden, paden en headers. Bijvoorbeeld, je kunt GET-requests naar /api/products toestaan maar DELETE-requests naar hetzelfde endpoint weigeren. Dit biedt API-level beveiliging zonder applicatiecode-wijzigingen.'
        }
      },
      {
        title: {
          en: 'Observability with Hubble',
          nl: 'Observability met Hubble'
        },
        content: {
          en: 'Before implementing network policies, you need visibility into how workloads communicate. Cilium Hubble provides real-time network flow visibility. Use the Hubble UI to visualize pod-to-pod traffic patterns, identify which services need to communicate, and detect policy violations. This visibility is crucial for designing effective policies without breaking application functionality.',
          nl: 'Voordat je network policies implementeert, heb je zichtbaarheid nodig in hoe workloads communiceren. Cilium Hubble biedt real-time netwerkstroom-zichtbaarheid. Gebruik de Hubble UI om pod-to-pod verkeerspatronen te visualiseren, te identificeren welke services moeten communiceren, en policy-schendingen te detecteren. Deze zichtbaarheid is cruciaal voor het ontwerpen van effectieve policies zonder applicatiefunctionaliteit te breken.'
        }
      },
      {
        title: {
          en: 'Microsegmentation Best Practices',
          nl: 'Microsegmentatie Best Practices'
        },
        content: {
          en: 'Organize workloads into security zones (frontend, backend, database) and apply the principle of least privilege. Use consistent labeling strategies - labels are stable identifiers that remain consistent even as pods restart. Define policies at the namespace level first, then add pod-specific policies for sensitive workloads. Regularly review and update policies as application architectures evolve.',
          nl: 'Organiseer workloads in beveiligingszones (frontend, backend, database) en pas het principe van minste privilege toe. Gebruik consistente labeling-strategieën - labels zijn stabiele identifiers die consistent blijven zelfs als pods herstarten. Definieer policies eerst op namespace-niveau, voeg dan pod-specifieke policies toe voor gevoelige workloads. Review en update policies regelmatig naarmate applicatie-architecturen evolueren.'
        }
      },
      {
        title: {
          en: 'Securing a Multi-Tier Application',
          nl: 'Een Multi-Tier Applicatie Beveiligen'
        },
        content: {
          en: 'Consider a typical web application with frontend, backend API, and database. Step 1: Apply labels (app: frontend, app: backend, app: database). Step 2: Create default deny policies. Step 3: Allow frontend to backend on port 8080. Step 4: Allow backend to database on port 5432. Step 5: Allow backend egress to external payment gateway. Test thoroughly before production deployment.',
          nl: 'Overweeg een typische webapplicatie met frontend, backend API en database. Stap 1: Pas labels toe (app: frontend, app: backend, app: database). Stap 2: Maak default deny policies. Stap 3: Sta frontend naar backend toe op poort 8080. Stap 4: Sta backend naar database toe op poort 5432. Stap 5: Sta backend egress naar externe payment gateway toe. Test grondig voor productie-deployment.'
        }
      }
    ],
    conclusion: {
      en: 'Network policies are fundamental to Kubernetes security. With Azure CNI Powered by Cilium, you get advanced capabilities like FQDN filtering and Layer 7 policies that go far beyond traditional IP-based rules. Start with visibility using Hubble, implement default deny policies, then gradually add allow rules based on observed traffic patterns. This layered approach ensures robust Zero Trust security for your AKS workloads.',
      nl: 'Network policies zijn fundamenteel voor Kubernetes-beveiliging. Met Azure CNI Powered by Cilium krijg je geavanceerde mogelijkheden zoals FQDN-filtering en Layer 7 policies die veel verder gaan dan traditionele IP-gebaseerde regels. Begin met zichtbaarheid via Hubble, implementeer default deny policies, en voeg dan geleidelijk allow rules toe op basis van geobserveerde verkeerspatronen. Deze gelaagde aanpak zorgt voor robuuste Zero Trust beveiliging voor je AKS-workloads.'
    }
  }
};
