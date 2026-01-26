# Cloud Evolvers Training - Homepage Elements Guide

## 🎯 Purpose
This guide explains the different elements on the Cloud Evolvers Training homepage to help distinguish between content types and avoid confusion with news sections.

## 📱 Homepage Structure Overview

The homepage is organized in the following order from top to bottom:

1. **Header Navigation**
2. **Hero Section** 
3. **Services Section**
4. **Blog Section** (Optional - controlled by environment)
5. **Footer**

## 🎨 Element Types and Purposes

### 1. Hero Section (`src/components/Sections/Hero.tsx`)
**Purpose**: Main landing area with core messaging
- **Azure Excellence Component**: Core value proposition and expertise showcase
- **Popular Courses**: Quick access to featured training courses
- **CTA Buttons**: Primary action buttons for training and services
- **Background**: Animated gradients and visual effects

**NOT News**: This is static content about our expertise and offerings

### 2. Services Section (`src/components/Sections/ServicesSection.tsx`)
**Purpose**: Display our core service offerings
- **Azure Consulting**: Professional consulting services
- **Training Programs**: Educational course offerings
- **Support Services**: Ongoing support and maintenance
- **Migration Services**: Cloud migration expertise

**NOT News**: These are permanent service descriptions

### 3. Blog Section (`src/components/Sections/BlogSection.tsx`)
**Purpose**: Latest insights and educational content
- **Coming Soon State**: Shows preview cards when no blog posts exist
- **Published Posts**: Displays actual blog articles when available
- **Language Support**: Full Dutch/English translation support
- **Environment Control**: Can be hidden via `NO_BLOG` environment variable

**This IS Content/News**: Blog posts are the actual news/article content

### 4. Popular Courses Section (`src/components/Sections/PopularCoursesSection.tsx`)
**Purpose**: Showcase featured training courses
- **Course Listings**: Display available training programs
- **Quick Enrollment**: Direct links to course registration
- **Skill Level Indicators**: Beginner, Intermediate, Advanced
- **Duration Information**: Course length and time commitment

**NOT News**: These are course catalogs, not news articles

## 🔧 Environment Variable Controls

### Blog Section Control
```bash
# To hide blog section completely
NO_BLOG=true

# To show blog section (default)
NO_BLOG=false
# or simply omit the variable
```

### Other Environment Variables
```bash
# Construction banner
VITE_SHOW_CONSTRUCTION_BANNER=false

# Blog construction state
VITE_BLOG_UNDER_CONSTRUCTION=true
```

## 🌐 Language Support

All homepage elements support both Dutch and English:

- **Dutch**: `nl` language code
- **English**: `en` language code (default)
- **Switching**: Automatic based on user preference
- **Fallback**: Defaults to English if translation missing

## 📝 Content vs News Distinction

### ✅ Static Content Elements (NOT News)
- Hero section messaging
- Service descriptions  
- Course catalog listings
- Company information
- Contact details

### 📰 Dynamic Content Elements (IS News/Articles)
- Blog posts
- Article previews
- Latest insights
- Educational content updates
- Industry news

## 🚀 How to Add New Elements

### 1. Create Component
```tsx
// src/components/Sections/NewSection.tsx
export function NewSection() {
  // Component implementation
}
```

### 2. Export from Sections
```tsx
// src/components/Sections.tsx
export { NewSection } from './Sections/NewSection';
```

### 3. Add to Homepage
```tsx
// src/App.tsx
function HomePage() {
  return (
    <>
      <Hero />
      <NewSection />
      <ServicesSection />
    </>
  );
}
```

## 🎨 Design Guidelines

### Consistency Rules
1. **Color Scheme**: Use primary, secondary, and accent colors consistently
2. **Typography**: Follow established heading hierarchy (h1, h2, h3)
3. **Spacing**: Use consistent padding and margins (Tailwind classes)
4. **Animations**: Framer Motion for smooth transitions
5. **Icons**: Phosphor Icons for consistency

### Responsive Design
- **Mobile First**: Start with mobile design
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Grid System**: CSS Grid and Flexbox
- **Images**: Responsive with proper loading states

## 🔍 Testing Guidelines

### Visual Testing
1. Check all breakpoints (mobile, tablet, desktop)
2. Verify dark/light mode compatibility
3. Test language switching functionality
4. Validate animation performance

### Functional Testing
1. Environment variable toggles work correctly
2. Navigation links function properly
3. Form submissions work
4. Loading states display correctly

## 📞 Need Help?

If you're unsure about:
- Whether content should be in blog vs static sections
- How to implement new homepage elements
- Environment variable configuration
- Language support implementation

Contact the development team or create an issue with detailed questions.

## 🔗 Related Documentation

- [README.md](../README.md) - Main project documentation
- [Translation Guide](../docs/DUTCH_TRANSLATION_GUIDELINES.md) - Language support
- [Component Guidelines](../docs/DEVELOPMENT_GUIDELINES.md) - Development standards
