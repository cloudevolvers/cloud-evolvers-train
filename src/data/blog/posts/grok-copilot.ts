import type { BlogPost } from '../types';

export const grokCopilotPost: BlogPost = {
  id: 'grok-in-github-copilot',
  title: {
    en: 'Grok Code Fast 1 is rolling out in public preview for GitHub Copilot',
    nl: 'Grok Code Fast 1 komt beschikbaar in openbare preview voor GitHub Copilot'
  },
  description: {
    en: 'Grok, the fast code search and navigation tool, is now available in public preview for all GitHub Copilot users!',
    nl: 'Grok, de snelle code zoek- en navigatietool, is nu beschikbaar in openbare preview voor alle GitHub Copilot gebruikers!'
  },
  date: '2025-08-26',
  author: 'GitHub Team',
  tags: ['Copilot', 'Grok', 'AI', 'Productivity'],
  image: '/images/unsplash/laptop-coding-modern.jpg',
  excerpt: {
    en: 'Grok, the fast code search and navigation tool, is now available in public preview for all GitHub Copilot users!',
    nl: 'Grok, de snelle code zoek- en navigatietool, is nu beschikbaar in openbare preview voor alle GitHub Copilot gebruikers!'
  },
  category: {
    en: 'AI Tools',
    nl: 'AI Tools'
  },
  readTime: 5,
  content: {
    introduction: {
      en: "GitHub just shipped Grok Code Fast 1 in public preview for all Copilot users. It is a code search and navigation tool that actually understands your codebase — not just string matching, but semantic search that knows what functions do, how types connect, and where definitions live. If you have ever wasted twenty minutes grep-ing through a massive repo trying to find where something is called, this is built for you.",
      nl: "GitHub heeft net Grok Code Fast 1 uitgebracht in public preview voor alle Copilot-gebruikers. Het is een code-zoek- en navigatietool die je codebase daadwerkelijk begrijpt — niet alleen string matching, maar semantisch zoeken dat weet wat functies doen, hoe types samenhangen en waar definities staan. Als je ooit twintig minuten hebt verspild aan grep-en door een enorme repo om te vinden waar iets wordt aangeroepen, dan is dit voor jou gemaakt."
    },
    sections: [
      {
        title: {
          en: 'What is Grok?',
          nl: 'Wat is Grok?'
        },
        content: {
          en: 'Grok leverages AI to provide lightning-fast, semantic code search, deep code navigation, AI-powered explanations, and seamless integration with GitHub Copilot.',
          nl: 'Grok maakt gebruik van AI om bliksemsnelle, semantische code zoeken, diepe code navigatie, AI-aangedreven uitleg en naadloze integratie met GitHub Copilot te bieden.'
        }
      },
      {
        title: {
          en: 'How to Access Grok',
          nl: 'Hoe krijg je toegang tot Grok'
        },
        content: {
          en: "If you're a GitHub Copilot user, you can try Grok right now: Open your repository on GitHub.com, use the new search bar or press `/` to start searching with Grok, and explore code, jump to definitions, and get instant answers.",
          nl: "Als je een GitHub Copilot gebruiker bent, kun je Grok nu proberen: Open je repository op GitHub.com, gebruik de nieuwe zoekbalk of druk op `/` om te beginnen met zoeken met Grok, en verken code, spring naar definities, en krijg directe antwoorden."
        }
      },
      {
        title: {
          en: 'Why is this exciting?',
          nl: 'Waarom is dit spannend?'
        },
        content: {
          en: 'Grok brings a new level of productivity to developers by making it easier to quickly find relevant code, understand unfamiliar codebases, navigate large projects, and accelerate onboarding and code reviews.',
          nl: 'Grok brengt een nieuw niveau van productiviteit naar ontwikkelaars door het gemakkelijker te maken om snel relevante code te vinden, onbekende codebases te begrijpen, grote projecten te navigeren, en onboarding en code reviews te versnellen.'
        }
      },
      {
        title: {
          en: 'Learn More',
          nl: 'Leer Meer'
        },
        content: {
          en: 'Check out the official GitHub changelog and Grok documentation to learn more about all the features and capabilities available.',
          nl: 'Bekijk de officiële GitHub changelog en Grok documentatie om meer te leren over alle beschikbare functies en mogelijkheden.'
        }
      }
    ],
    conclusion: {
      en: 'Grok is still in preview, so expect rough edges. But if code search has been a pain point for your team — especially on large repos — it is worth spending ten minutes with it. Open a repo on GitHub.com, hit "/" and see how it handles your codebase. The AI-powered explanations alone save time during code reviews and onboarding.',
      nl: 'Grok zit nog in preview, dus verwacht hier en daar een ruwe rand. Maar als code zoeken een pijnpunt is voor je team — vooral bij grote repos — is het de moeite waard om er tien minuten mee te spelen. Open een repo op GitHub.com, druk op "/" en kijk hoe het je codebase aanpakt. De AI-uitleg alleen al scheelt tijd bij code reviews en onboarding.'
    }
  }
};
