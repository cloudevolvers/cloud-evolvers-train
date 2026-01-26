# xEvolve Website

A modern Next.js 15 website with integrated Express backend, featuring a clean content management system and Azure integration capabilities.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs both Next.js frontend and Express backend)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

### **Clean Public Folder Content Management**
```
public/
├── blog/
│   ├── images/          # Blog post images - served at /blog/images/
│   └── *.md             # Blog posts in Markdown
├── showcase/            # Showcase images - served at /showcase/
├── services/            # Service images - served at /services/
└── icons/               # Icons library - served at /icons/
```

### **Application Structure**
```
src/
├── app/                 # Next.js 15 App Router pages
│   ├── admin/          # Admin portal for content management
│   └── api/            # Next.js API routes
├── components/         # React components
├── lib/               # Utilities and services
└── types/            # TypeScript type definitions

routes/                # Express backend routes (loaded at /backend)
backend/              # Backend services and utilities
```

## � **Translation System**

The website supports Dutch (nl) and English (en) with the following setup:

### **Translation Files**
- English: `src/locales/en.json`
- Dutch: `src/locales/nl.json`

### **Usage in Components**
```tsx
import { getTranslations, SupportedLang } from '@/utils/i18n';

// Client-side language detection
let lang: SupportedLang = 'en';
if (typeof window !== 'undefined') {
  lang = (localStorage.getItem('lang') as SupportedLang) ||
    (document.cookie.match(/NEXT_LOCALE=(nl|en)/)?.[1] as SupportedLang) ||
    (navigator.language.startsWith('nl') ? 'nl' : 'en');
}
const t = getTranslations(lang);

// Use translations
<h1>{t.home.heroTitle}</h1>
```

### **Content Translation**
- **Blog Posts**: Store Dutch posts in `public/blog/nl/` and English in `public/blog/`
- **Services**: Use language-specific JSON files in `public/services/nl/` and `public/services/en/`
- **Language Toggle**: Use `LanguageToggle` component to switch languages

### **Translation Guidelines for Copilot**
When creating or editing content, follow these translation guidelines:

1. **Blog Posts**: 
   - English posts go in `public/blog/`
   - Dutch posts go in `public/blog/nl/`
   - Ensure every English post has a Dutch equivalent
   - Use Dutch terminology: "Azure" stays "Azure", but "Cloud Engineering" becomes "Cloud Engineering"

2. **Services Content**:
   - English services in `public/services/en/`
   - Dutch services in `public/services/nl/`
   - Translate service descriptions, features, and content thoroughly

3. **UI Components**:
   - All user-facing text should use translation keys from `src/locales/`
   - No hardcoded strings in components - use `t.section.key` format
   - Service names in header/navigation should be translatable

4. **Translation Keys**:
   - Add new translation keys to both `src/locales/en.json` and `src/locales/nl.json`
   - Use descriptive key names: `header.serviceNames.azureMonitoring`
   - Dutch company context: Use "wij" (we), "ons" (our), "Nederlandse" (Dutch) when appropriate

### **Server-Side Language Detection**
```tsx
// In API routes, get language from headers or query params
const lang = searchParams.get('lang') || 
  request.headers.get('accept-language')?.includes('nl') ? 'nl' : 'en';
```

## �🎯 **Image & Content Management**

This project uses a **clean public folder approach** for content management:

### **How It Works:**
- **Blog Posts**: Write Markdown files in `public/blog/`
- **Images**: Add images to `public/blog/images/`, `public/showcase/`, etc.
- **Commit & Deploy**: Everything is version-controlled and deployed together
- **No Database**: Static content management with Git workflow

### **URL Structure:**
- Blog images: `/blog/images/filename.jpg`
- Showcase: `/showcase/filename.jpg` 
- Services: `/services/filename.jpg`
- Icons: `/icons/filename.jpg`

### **Benefits:**
- ✅ **Simple Deployment** - No external storage dependencies
- ✅ **Version Control** - Images and content committed together
- ✅ **Fast Serving** - Direct static file serving by Next.js
- ✅ **Clean URLs** - No complex API endpoints for static content
- ✅ **Optional Azure** - Can upgrade to Blob Storage when needed

## 🔧 **Admin Portal**

Access the admin portal at `/admin` for:
- **Blog Management** - Create and edit blog posts
- **Image Upload** - Upload images to appropriate folders
- **Showcase Management** - Manage showcase content
- **Icons Library** - Upload and organize icons
- **API Monitoring** - Monitor backend services

## ⚙️ **Configuration**

### **Environment Variables**
```bash
# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@xevolve.io
NEXT_PUBLIC_CONTACT_PHONE=06-34272027
NEXT_PUBLIC_PRIVACY_EMAIL=privacy@xevolve.io
NOTIFICATION_EMAIL=info@xevolve.io
TRAINING_INQUIRY_EMAIL=info@xevolve.io

# Basic Configuration
LOCAL_DEV=true
PORT=4000

# Azure Blob Storage (Optional)
# Uncomment to use Azure instead of public folder
# AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
# BLOB_STORAGE_NAME=images
```

### **Storage Options**

#### **Default: Public Folder** (Recommended)
- Images stored in `public/` directories
- Served directly by Next.js
- Perfect for most use cases
- Version controlled with Git

#### **Optional: Azure Blob Storage**
- Set `BLOB_STORAGE_NAME` environment variable
- Automatic container creation
- Enterprise-scale storage
- Fallback to public folder if Azure unavailable

## 🛠 **Development**

### **Tech Stack**
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Express.js (loaded under `/backend` prefix)
- **Content**: Markdown files in public folder
- **Storage**: Public folder + optional Azure Blob Storage

### **Scripts**
```bash
npm run dev          # Development server (both frontend & backend)
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run tests
npm run lint         # Lint code
```

### **Adding Content**

#### **Blog Posts**
1. Create `.md` file in `public/blog/`
2. Add images to `public/blog/images/`
3. Reference images with `/blog/images/filename.jpg`
4. Commit and deploy

#### **Showcase Items**
1. Add images to `public/showcase/`
2. Update showcase data/config
3. Images available at `/showcase/filename.jpg`

## 🌐 **Deployment**

The hybrid architecture runs:
- **Next.js frontend** on the main port
- **Express backend** on `/backend/*` routes
- **Static content** served directly from `public/`

### **Deployment Steps**
1. Build the project: `npm run build`
2. Deploy `public/` folder contents
3. Start the server: `npm start`
4. Both frontend and backend will be available

## 📝 **API Routes**

### **Next.js API Routes** (`/api/*`)
- `/api/images/*` - Image upload, delete, list operations
- `/api/icons/*` - Icons management
- `/api/blog/*` - Blog operations

### **Express Backend Routes** (`/backend/*`)
- Authentication routes
- Health checks
- Legacy integrations
- Background services

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Add content to `public/` folders
4. Commit images and content together
5. Submit a pull request

The clean public folder approach makes collaboration easy - content creators can add blog posts and images directly without complex setup!

## ✅ **Migration Complete!**

This project has been successfully migrated to use the **clean public folder approach**:

### **📁 Content Structure:**
- **✅ Blog Posts**: 5 posts with locally downloaded hero images
- **✅ Showcase Images**: 19 showcase images moved from `.local` to `public/showcase/`
- **✅ Training Materials**: Complete training content with SVG icons
- **✅ Services**: Service definitions and metadata files

### **🖼️ Image Management:**
- All external blog images downloaded and stored locally
- Clean URL structure: `/blog/images/`, `/showcase/`, `/services/`, `/icons/`
- No more external dependencies or broken image links
- Version-controlled images that deploy with the content

### **🚀 Ready for:**
- Easy content creation (write `.md` files, add images, commit)
- Simple deployment (everything is self-contained)
- Team collaboration (content and images version-controlled together)
- Optional Azure Blob Storage upgrade when needed

---

**Built with ❤️ using Next.js 15, TypeScript, and a clean content-first architecture.**
