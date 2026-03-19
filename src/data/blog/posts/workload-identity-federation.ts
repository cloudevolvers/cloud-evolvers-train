import type { BlogPost } from '../types';

export const workloadIdentityFederationPost: BlogPost = {
  id: 'workload-identity-federation-entra-id',
  title: {
    en: 'Workload Identity Federation: Eliminating Secrets in CI/CD Pipelines',
    nl: 'Workload Identity Federation: Secrets Elimineren in CI/CD Pipelines'
  },
  description: {
    en: 'How workload identity federation replaces client secrets in CI/CD with token exchange — setup for GitHub Actions, Azure DevOps, and AKS with practical configuration details.',
    nl: 'Hoe workload identity federation client secrets in CI/CD vervangt door token exchange — setup voor GitHub Actions, Azure DevOps en AKS met praktische configuratiedetails.'
  },
  date: '2026-02-28',
  author: 'Yair Knijn',
  tags: ['Entra ID', 'Workload Identity', 'GitHub Actions', 'DevOps', 'Security'],
  image: '/images/unsplash/ci-cd-pipeline-automation.jpg',
  excerpt: {
    en: 'Client secrets in pipelines expire, leak, and create rotation headaches. Workload identity federation replaces them with token exchange — no stored credentials, no expiry to manage.',
    nl: 'Client secrets in pipelines verlopen, lekken en creeren rotatiehoofdpijn. Workload identity federation vervangt ze door token exchange — geen opgeslagen credentials, geen verloop om te beheren.'
  },
  category: {
    en: 'Azure Security',
    nl: 'Azure Beveiliging'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'Every CI/CD pipeline that deploys to Azure needs an identity. Traditionally, that meant creating an app registration, generating a client secret, storing it in your pipeline\'s secret store, and setting a calendar reminder to rotate it before it expires. In practice, secrets get shared across repos, rotation gets forgotten, and expired credentials break production deployments on a Friday afternoon. Workload identity federation eliminates this entire class of problems by letting external identity providers — GitHub, Azure DevOps, any OIDC-compliant provider — exchange their own tokens for Entra ID access tokens. No secrets stored, no expiry to track.',
      nl: 'Elke CI/CD-pipeline die naar Azure deployt heeft een identiteit nodig. Traditioneel betekende dat een app-registratie aanmaken, een client secret genereren, het opslaan in de secret store van je pipeline en een agendaherinnering instellen om het te roteren voordat het verloopt. In de praktijk worden secrets gedeeld over repo\'s, wordt rotatie vergeten en breken verlopen credentials productie-deployments op een vrijdagmiddag. Workload identity federation elimineert deze hele categorie problemen door externe identity providers — GitHub, Azure DevOps, elke OIDC-compatibele provider — hun eigen tokens te laten uitwisselen voor Entra ID access tokens. Geen opgeslagen secrets, geen verloop om bij te houden.'
    },
    sections: [
      {
        title: {
          en: 'How Token Exchange Works',
          nl: 'Hoe Token Exchange Werkt'
        },
        content: {
          en: 'The flow has three participants: the external identity provider (e.g., GitHub\'s OIDC provider), Microsoft Entra ID, and the target Azure resource. When your GitHub Actions workflow runs, GitHub issues a short-lived OIDC token that includes claims about the workflow — the repository, branch, environment, and actor. Your workflow sends this token to Entra ID\'s token endpoint along with the app registration\'s client ID. Entra ID validates the token against the federated identity credential you configured: it checks the issuer (must match the external IdP), the subject (must match the subject claim pattern you defined), and the audience (defaults to api://AzureADTokenExchange). If everything validates, Entra issues an access token scoped to the Azure resources your app registration has permissions for. The entire exchange happens over HTTPS without any stored secret involved.',
          nl: 'De flow heeft drie deelnemers: de externe identity provider (bijv. GitHub\'s OIDC-provider), Microsoft Entra ID en de doel-Azure-resource. Wanneer je GitHub Actions workflow draait, geeft GitHub een kortlevend OIDC-token uit met claims over de workflow — de repository, branch, omgeving en actor. Je workflow stuurt dit token naar Entra ID\'s token-endpoint samen met het client ID van de app-registratie. Entra ID valideert het token tegen de federated identity credential die je hebt geconfigureerd: het controleert de issuer (moet overeenkomen met de externe IdP), het subject (moet overeenkomen met het subject claim-patroon dat je hebt gedefinieerd) en de audience (standaard api://AzureADTokenExchange). Als alles valideert, geeft Entra een access token uit dat is gescoped naar de Azure-resources waarvoor je app-registratie permissies heeft. De hele uitwisseling vindt plaats over HTTPS zonder enige opgeslagen secret.'
        }
      },
      {
        title: {
          en: 'Setting Up Federated Credentials for GitHub Actions',
          nl: 'Federated Credentials Instellen voor GitHub Actions'
        },
        content: {
          en: 'A federated identity credential has three key fields: issuer, subject, and audience. For GitHub Actions, the issuer is https://token.actions.githubusercontent.com. The subject follows the pattern repo:{owner}/{repo}:ref:refs/heads/{branch} for branch-based filtering, or repo:{owner}/{repo}:environment:{name} for environment-based filtering. The audience is api://AzureADTokenExchange. Subject matching is case-sensitive — repo:MyOrg/my-repo is different from repo:myorg/my-repo, and GitHub normalizes organization names to lowercase, so always use lowercase. You can also use repo:{owner}/{repo}:pull_request for PR workflows. Each app registration supports a maximum of 20 federated identity credentials, which means you need to plan your subject patterns carefully if you have many repos or branches. For organizations with more than 20 repos deploying to Azure, consider using a subject pattern per environment rather than per branch, or use separate app registrations per team.',
          nl: 'Een federated identity credential heeft drie kernvelden: issuer, subject en audience. Voor GitHub Actions is de issuer https://token.actions.githubusercontent.com. Het subject volgt het patroon repo:{owner}/{repo}:ref:refs/heads/{branch} voor branch-gebaseerde filtering, of repo:{owner}/{repo}:environment:{name} voor omgevingsgebaseerde filtering. De audience is api://AzureADTokenExchange. Subject-matching is hoofdlettergevoelig — repo:MyOrg/my-repo verschilt van repo:myorg/my-repo, en GitHub normaliseert organisatienamen naar kleine letters, dus gebruik altijd kleine letters. Je kunt ook repo:{owner}/{repo}:pull_request gebruiken voor PR-workflows. Elke app-registratie ondersteunt maximaal 20 federated identity credentials, wat betekent dat je je subject-patronen zorgvuldig moet plannen als je veel repo\'s of branches hebt. Voor organisaties met meer dan 20 repo\'s die naar Azure deployen, overweeg een subject-patroon per omgeving in plaats van per branch, of gebruik aparte app-registraties per team.'
        },
        code: {
          language: 'yaml',
          code: `name: Deploy to Azure
on:
  push:
    branches: [main]

permissions:
  id-token: write   # Required for requesting the OIDC token
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Azure Login with OIDC
        uses: azure/login@v2
        with:
          client-id: \${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: \${{ secrets.AZURE_TENANT_ID }}
          subscription-id: \${{ secrets.AZURE_SUBSCRIPTION_ID }}
          # No client-secret needed — uses workload identity federation

      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v3
        with:
          app-name: my-web-app
          package: ./dist`
        }
      },
      {
        title: {
          en: 'Azure DevOps and Kubernetes (AKS) Scenarios',
          nl: 'Azure DevOps en Kubernetes (AKS) Scenario\'s'
        },
        content: {
          en: 'Azure DevOps supports workload identity federation natively through service connections. When creating a new Azure Resource Manager service connection, select "Workload Identity Federation (automatic)" and DevOps creates the app registration, federated credential, and role assignment for you. The issuer for Azure DevOps is https://vstoken.dev.azure.com/{organization-id}, and the subject is sc://{org}/{project}/{service-connection-name}. For AKS, workload identity federation connects Kubernetes service accounts to Entra identities. You create a user-assigned managed identity, add a federated credential with the AKS OIDC issuer URL (found at az aks show --query oidcIssuerProfile.issuerUrl), and set the subject to system:serviceaccount:{namespace}:{service-account-name}. In your pod spec, annotate the service account with azure.workload.identity/client-id and add the azure.workload.identity/use: "true" label. The AKS mutating webhook then injects the required environment variables and projected token volume into your pods automatically.',
          nl: 'Azure DevOps ondersteunt workload identity federation native via service connections. Bij het aanmaken van een nieuwe Azure Resource Manager service connection selecteer je "Workload Identity Federation (automatic)" en DevOps maakt de app-registratie, federated credential en roltoewijzing voor je aan. De issuer voor Azure DevOps is https://vstoken.dev.azure.com/{organization-id}, en het subject is sc://{org}/{project}/{service-connection-name}. Voor AKS verbindt workload identity federation Kubernetes service accounts met Entra-identiteiten. Je maakt een user-assigned managed identity aan, voegt een federated credential toe met de AKS OIDC-issuer URL (te vinden via az aks show --query oidcIssuerProfile.issuerUrl) en stelt het subject in op system:serviceaccount:{namespace}:{service-account-name}. In je pod-spec annoteer je het service account met azure.workload.identity/client-id en voeg je het azure.workload.identity/use: "true" label toe. De AKS mutating webhook injecteert dan automatisch de vereiste omgevingsvariabelen en projected token volume in je pods.'
        }
      },
      {
        title: {
          en: 'Limitations and Practical Considerations',
          nl: 'Beperkingen en Praktische Overwegingen'
        },
        content: {
          en: 'The 20 federated credential limit per app registration is the constraint you will hit first. Each unique subject pattern counts as one credential. If you have 15 repositories each needing branch and environment-based access, that is already 30+ credentials and you need multiple app registrations. Subject claim matching is exact string comparison with no wildcard support — you cannot use repo:myorg/* to match all repos. The audience field defaults to api://AzureADTokenExchange and should generally not be changed unless the external IdP requires a specific audience value. Token exchange adds latency to your pipeline — typically 1-3 seconds per exchange, which is negligible for deployment workflows but worth considering for high-frequency automation. Finally, not all Azure SDKs support workload identity federation out of the box. Ensure your SDK version supports the WorkloadIdentityCredential class from the Azure Identity library (available in .NET, Java, Python, JavaScript, and Go).',
          nl: 'De limiet van 20 federated credentials per app-registratie is de beperking die je als eerste raakt. Elk uniek subject-patroon telt als één credential. Als je 15 repositories hebt die elk branch- en omgevingsgebaseerde toegang nodig hebben, zijn dat al 30+ credentials en heb je meerdere app-registraties nodig. Subject claim matching is exacte stringvergelijking zonder wildcard-ondersteuning — je kunt niet repo:myorg/* gebruiken om alle repo\'s te matchen. Het audience-veld staat standaard op api://AzureADTokenExchange en moet over het algemeen niet worden gewijzigd tenzij de externe IdP een specifieke audience-waarde vereist. Token exchange voegt latency toe aan je pipeline — doorgaans 1-3 seconden per exchange, wat verwaarloosbaar is voor deployment-workflows maar het overwegen waard voor hoogfrequente automatisering. Tot slot ondersteunen niet alle Azure SDK\'s workload identity federation standaard. Zorg dat je SDK-versie de WorkloadIdentityCredential-klasse van de Azure Identity-bibliotheek ondersteunt (beschikbaar in .NET, Java, Python, JavaScript en Go).'
        }
      }
    ],
    conclusion: {
      en: 'Workload identity federation is one of those improvements that makes you wonder why it took so long. No secrets to rotate, no credentials to leak, and the setup is straightforward for the major CI/CD platforms. Start with GitHub Actions or Azure DevOps service connections where the tooling is most mature, then expand to AKS workload identity for your Kubernetes workloads. The 20-credential limit requires some planning for large organizations, but it is a manageable constraint compared to the operational overhead of secret rotation across dozens of pipelines.',
      nl: 'Workload identity federation is een van die verbeteringen waarbij je je afvraagt waarom het zo lang duurde. Geen secrets om te roteren, geen credentials om te lekken, en de setup is eenvoudig voor de grote CI/CD-platforms. Begin met GitHub Actions of Azure DevOps service connections waar de tooling het meest volwassen is, breid dan uit naar AKS workload identity voor je Kubernetes-workloads. De 20-credential limiet vereist enige planning voor grote organisaties, maar het is een beheersbare beperking vergeleken met de operationele overhead van secret-rotatie over tientallen pipelines.'
    }
  }
};
