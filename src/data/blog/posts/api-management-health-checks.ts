import type { BlogPost } from '../types';

export const apiManagementHealthChecksPost: BlogPost = {
  id: 'api-management-health-checks',
  title: {
    en: 'Implementing Health Checks in Azure API Management',
    nl: 'Health Checks Implementeren in Azure API Management'
  },
  description: {
    en: 'Learn how to implement comprehensive health checks and monitoring for your APIs in Azure API Management.',
    nl: 'Leer hoe je uitgebreide health checks en monitoring implementeert voor je APIs in Azure API Management.'
  },
  date: '2025-04-15',
  author: 'Yair Knijn',
  tags: ['Azure', 'API Management', 'Monitoring', 'DevOps', 'Health Checks'],
  image: '/images/unsplash/api-integration.jpg',
  excerpt: {
    en: 'A practical guide to implementing health endpoints, backend probing, and monitoring strategies in APIM.',
    nl: 'Een praktische gids voor het implementeren van health endpoints, backend probing en monitoring-strategieën in APIM.'
  },
  category: {
    en: 'API Development',
    nl: 'API-Ontwikkeling'
  },
  readTime: 9,
  content: {
    introduction: {
      en: 'Your API gateway says it is healthy. Your backend database has been down for ten minutes. Users are getting 500s. The built-in APIM status endpoint only checks if the gateway process is running — it tells you nothing about whether your actual APIs work. You need health checks that go deeper: probing backends, verifying database connections, and checking downstream dependencies. APIM has the pieces for this, but you have to wire them up yourself.',
      nl: 'Je API-gateway zegt dat hij gezond is. Je backend-database is al tien minuten down. Gebruikers krijgen 500-errors. Het ingebouwde APIM-statusendpoint controleert alleen of het gatewayproces draait — het zegt niets over of je daadwerkelijke API\'s werken. Je hebt health checks nodig die dieper gaan: backends pollen, databaseverbindingen verifiëren, en downstream-afhankelijkheden controleren. APIM heeft de onderdelen hiervoor, maar je moet ze zelf aan elkaar knopen.'
    },
    sections: [
      {
        title: {
          en: 'Built-in Health Probe',
          nl: 'Ingebouwde Health Probe'
        },
        content: {
          en: 'APIM provides a built-in status endpoint at /status-0123456789abcdef. This checks the gateway health but not individual APIs. Use it for basic load balancer health checks and availability monitoring.',
          nl: 'APIM biedt een ingebouwd status endpoint op /status-0123456789abcdef. Dit controleert de gateway-gezondheid maar niet individuele APIs. Gebruik het voor basis load balancer health checks en beschikbaarheidsmonitoring.'
        }
      },
      {
        title: {
          en: 'Custom Health Endpoints',
          nl: 'Custom Health Endpoints'
        },
        content: {
          en: 'Create custom health check APIs that verify backend connectivity, database connections, and dependent services. Use policies to aggregate health status from multiple sources and return a unified response.',
          nl: 'Maak custom health check APIs die backend-connectiviteit, database-verbindingen en afhankelijke services verifiëren. Gebruik policies om health status van meerdere bronnen te aggregeren en een uniforme response terug te geven.'
        }
      },
      {
        title: {
          en: 'Backend Health Probing',
          nl: 'Backend Health Probing'
        },
        content: {
          en: 'Configure backend entities with health probes to automatically detect and route around unhealthy backends. Set appropriate intervals and thresholds based on your SLA requirements.',
          nl: 'Configureer backend entities met health probes om automatisch ongezonde backends te detecteren en eromheen te routeren. Stel geschikte intervallen en drempels in op basis van je SLA-vereisten.'
        }
      },
      {
        title: {
          en: 'Monitoring and Alerting',
          nl: 'Monitoring en Alerting'
        },
        content: {
          en: 'Integrate with Azure Monitor for comprehensive monitoring. Set up alerts for error rates, latency spikes, and availability drops. Use Application Insights for detailed request tracing and diagnostics.',
          nl: 'Integreer met Azure Monitor voor uitgebreide monitoring. Stel alerts in voor foutpercentages, latency-pieken en beschikbaarheidsdalingen. Gebruik Application Insights voor gedetailleerde request tracing en diagnostics.'
        }
      }
    ],
    conclusion: {
      en: 'The built-in /status endpoint is a starting point, not an answer. Pair it with custom health APIs that actually test your backends, configure backend entity probes with sensible intervals, and hook everything into Azure Monitor with alerts that fire before your users notice. It is not glamorous work, but the difference between "we caught it in 30 seconds" and "a customer called to tell us" is usually one well-configured health check.',
      nl: 'Het ingebouwde /status-endpoint is een beginpunt, geen oplossing. Combineer het met custom health API\'s die je backends daadwerkelijk testen, configureer backend entity probes met verstandige intervallen, en koppel alles aan Azure Monitor met alerts die afgaan voordat je gebruikers het merken. Het is geen glamoureus werk, maar het verschil tussen "we hadden het binnen 30 seconden door" en "een klant belde om het te melden" is meestal één goed geconfigureerde health check.'
    }
  }
};
