# Cloud Evolvers Training Platform

![Cloud Evolvers Training](https://img.shields.io/badge/Platform-Cloud%20Evolvers%20Training-blue)
![Azure](https://img.shields.io/badge/Azure-Expert%20Level-0078d4)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)

A modern, multilingual training platform specializing in Azure cloud technologies, built with React, TypeScript, and Vite.

## 🌟 Features

### 🎯 Core Platform Features
- **Azure Training Expertise** - Comprehensive Azure certification courses
- **Multilingual Support** - Full Dutch and English language support
- **Modern UI/UX** - Beautiful, responsive design with dark/light mode
- **Professional Services** - Consulting, migration, and support services
- **Interactive Components** - Dynamic course catalog and service showcase

### 🎨 Technical Features
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Phosphor Icons** for consistent iconography
- **Responsive Design** optimized for all devices

## 📁 Project Structure

```
cloud-evolvers-train/
├── 📁 src/
│   ├── 📁 components/           # React components
│   │   ├── 📁 Sections/        # Homepage sections
│   │   │   ├── Hero.tsx        # Main hero section
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── PopularCoursesSection.tsx
│   │   │   └── AzureExcellence.tsx
│   │   ├── 📁 ui/              # Reusable UI components
│   │   └── 📁 admin/           # Admin dashboard components
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 lib/                 # Utility functions
│   ├── 📁 data/                # Static data and content
│   ├── 📁 content/             # Training content and courses
│   └── 📁 pages/               # Route pages
├── 📁 public/                  # Static assets
├── 📁 docs/                    # Documentation
├── 📁 infra/                   # Azure infrastructure (Bicep)
└── 📁 api/                     # Azure Functions API
```

## �️ Component Architecture

### 📋 Main Components Overview
- **Header**: Navigation, branding, language switching (`src/components/Header.tsx`)
- **Hero**: Landing section with CTA (`src/components/Sections/Hero.tsx`)
- **TrainingSection**: Training content orchestrator (`src/components/Sections/TrainingSection.tsx`)
- **ServicesSection**: Service offerings (`src/components/Sections/ServicesSection.tsx`)
- **Footer**: Site footer and links (`src/components/Footer.tsx`)

### 🎯 Architecture Principles
1. **Single Responsibility**: One component, one purpose
2. **No Duplication**: No multiple versions (Hero, HeroNew, HeroOld)
3. **Clear Naming**: Descriptive names without confusing suffixes
4. **Proper Exports**: Barrel exports via `index.ts` files

### 📚 Documentation
- **Complete Guide**: See `.github/COMPONENT_ARCHITECTURE.md`
- **Development Rules**: See `.github/copilot-instructions.md`
- **Debugging Help**: Component responsibility matrix and common issues

## �🏠 Homepage Elements Guide

### 1. 🦸 Hero Section
**Location**: Top of homepage  
**Purpose**: Main value proposition and Azure expertise showcase
- Azure Excellence component with rotating tech icons
- Popular courses quick access
- Primary CTA buttons for training and services
- Dynamic background with gradient effects

### 2. 🛠️ Services Section
**Purpose**: Core service offerings display
- **Azure Consulting** - Expert consulting services
- **Training Programs** - Certification courses
- **Support Services** - Ongoing maintenance
- **Migration Services** - Cloud migration expertise

### 3. 📝 Blog Section (Optional)
**Purpose**: Latest insights and educational content
- Shows "Coming Soon" by default
- Can be hidden via `NO_BLOG=true` environment variable
- Full Dutch/English support
- Will display real blog posts when available

### 4. 🎓 Popular Courses Section
**Purpose**: Featured training courses showcase
- Interactive course cards
- Skill level indicators
- Duration and pricing information
- Direct enrollment links

## 🌐 Language Support

The platform supports both Dutch and English:

### Language Features
- **Automatic Detection** - Based on browser preferences
- **Manual Switching** - Language toggle in header
- **Complete Translation** - All UI elements and content
- **Fallback Support** - Defaults to English if translation missing

### Adding New Translations
```typescript
// src/lib/translations.ts
export const translations = {
  en: {
    hero: {
      title: "English Title"
    }
  },
  nl: {
    hero: {
      title: "Nederlandse Titel"
    }
  }
};
```

## 🔧 Environment Variables

### Required Variables
```bash
# Application
VITE_APP_ENV=production
VITE_APP_NAME=Cloud Evolvers Training

# Azure AD (for contact forms)
VITE_AZURE_AD_CLIENT_ID=your-client-id
VITE_AZURE_AD_TENANT_ID=your-tenant-id

# Email Configuration
VITE_EMAIL_SENDER=your-sender@domain.com
VITE_EMAIL_RECIPIENT=recipient@domain.com
```

### Optional Feature Toggles
```bash
# Hide construction banner
VITE_SHOW_CONSTRUCTION_BANNER=false

# Hide blog section completely
NO_BLOG=true

# Blog under construction mode
VITE_BLOG_UNDER_CONSTRUCTION=true
```

## 🤖 AI-Assisted Development with MCP

This project includes support for the **Model Context Protocol (MCP)**, enabling AI coding assistants to interact with your Vite development server in real-time.

### What is MCP?

MCP allows AI agents to access your application's internals during development, providing:
- 📊 **Module Graph Information** - Real-time insights into your project's dependencies
- 🔍 **Build State Queries** - Access to Vite's build and transformation state
- 🗺️ **Project Structure** - Understanding of your application architecture
- ⚡ **Hot Module Replacement (HMR)** - Context about live updates and changes

### Setup

The `vite-plugin-mcp` is already configured in `vite.config.ts`:

```typescript
import { ViteMcp } from 'vite-plugin-mcp'

export default defineConfig({
  plugins: [
    ViteMcp(), // MCP server plugin
    // ... other plugins
  ],
})
```

### Usage

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **MCP server automatically starts** at `http://localhost:5000/__mcp/sse`

3. **Your AI coding assistant** will automatically detect and connect to the MCP server

4. **Ask your agent** about your application:
   - "What's the structure of my module graph?"
   - "Which components depend on the translations module?"
   - "Show me the HMR boundaries in my application"
   - "What Vite plugins are configured?"

### Benefits for Development

AI agents with MCP access can:
- 🎯 Understand your actual project structure and dependencies
- 🔄 Provide context-aware refactoring suggestions
- 🐛 Debug build issues with full Vite context
- 📦 Suggest optimizations based on your module graph
- ⚡ Understand and work with your HMR configuration

### Configuration

The plugin automatically updates config files for VSCode, Cursor, Windsurf, and Claude Code. You can customize this behavior in `vite.config.ts`:

```typescript
ViteMcp({
  updateConfig: true, // Auto-update editor configs
  updateConfigServerName: 'cloud-evolvers-mcp' // Custom server name
})
```

For more information, see the [vite-plugin-mcp documentation](https://www.npmjs.com/package/vite-plugin-mcp).

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/xevolve-org/cloud-evolvers-train.git
cd cloud-evolvers-train

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
npm run lint         # ESLint checking
```

## 🎨 Styling and Design

### Design System
- **Colors**: Primary (Azure blue), Secondary, Accent colors
- **Typography**: Inter font family with consistent scales
- **Spacing**: Tailwind CSS spacing utilities
- **Components**: Shadcn/ui base components
- **Icons**: Phosphor Icons for consistency

### Dark/Light Mode
The platform automatically respects user system preferences and provides manual toggle functionality.

### Responsive Breakpoints
```css
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X Extra large devices */
```

## 🧪 Testing

### Component Testing
```bash
npm run test         # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

### E2E Testing
```bash
npm run test:e2e     # Run Playwright tests
```

## 🚀 Deployment

### Azure Static Web Apps
The project is configured for Azure Static Web Apps deployment:

```bash
# Deploy using Azure CLI
az staticwebapp create \
  --name cloud-evolvers-train \
  --source https://github.com/xevolve-org/cloud-evolvers-train \
  --location "West Europe" \
  --build-location "dist"
```

### Environment-Specific Builds
- **Development**: Hot reload, debug tools
- **Staging**: Production build with staging APIs
- **Production**: Optimized build with production APIs

## 📚 Content Management

### Training Courses
Courses are managed in `/src/content/training/` as JSON files:

```typescript
// Example course structure
{
  "id": "azure-fundamentals",
  "title": "Azure Fundamentals",
  "description": "Complete introduction to Azure",
  "level": "beginner",
  "duration": "3 days",
  "price": "€1,500"
}
```

### Blog Posts (Future)
Blog content will be managed in `/src/content/blog/` when implemented.

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow TypeScript and React best practices
2. **Components**: Use functional components with hooks
3. **Styling**: Prefer Tailwind CSS utilities
4. **Testing**: Write tests for new features
5. **Documentation**: Update docs for any changes

### Pull Request Process
1. Create feature branch from `main`
2. Make changes with proper commit messages
3. Add/update tests as needed
4. Update documentation
5. Create pull request with description

## 📞 Support

### Getting Help
- **Issues**: Create GitHub issue for bugs/features
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact development team directly

### Common Issues
- **Build Errors**: Check Node.js version and dependencies
- **Environment Variables**: Verify all required variables are set
- **Language Switching**: Ensure translations are complete

## 🔗 Related Resources

- [Azure Documentation](https://docs.microsoft.com/azure/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Credits

Built with ❤️ by the Cloud Evolvers team specializing in Azure training and consulting.

---

**Note**: This platform is continuously evolving. Check the [CHANGELOG.md](CHANGELOG.md) for recent updates and the [roadmap](docs/ROADMAP.md) for planned features.
