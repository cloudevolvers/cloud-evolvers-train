# Cloud Evolvers - Azure Training & Services Platform

A comprehensive platform showcasing Cloud Evolvers' Azure training and consulting services with bilingual support (English/Dutch).

**Experience Qualities**:
1. Professional - Clean, corporate design that builds trust and credibility
2. Accessible - Clear navigation and bilingual support for global reach
3. Educational - Content-focused layout that highlights expertise and learning paths

**Complexity Level**: Content Showcase (information-focused)
The platform primarily presents services, training offerings, and company expertise with interactive elements for language switching and course exploration.

## Essential Features

**Bilingual Language Toggle**
- Functionality: Switch between English and Dutch with complete content translation
- Purpose: Serve both international and Dutch markets effectively
- Trigger: Language selector in header
- Progression: Click language → Content updates → State persists
- Success criteria: All content displays correctly in selected language

**Service Showcase**
- Functionality: Display comprehensive Azure services with detailed descriptions
- Purpose: Communicate full range of offerings beyond training
- Trigger: Navigation or scrolling to services section
- Progression: Browse services → View details → Learn more options
- Success criteria: Clear service differentiation and value propositions

**Training Catalog**
- Functionality: Showcase Microsoft certified training courses
- Purpose: Highlight educational offerings and career advancement paths
- Trigger: Navigate to training section
- Progression: View categories → Browse courses → See certification details
- Success criteria: Clear course structure and Microsoft certification emphasis

**Theme Toggle**
- Functionality: Switch between light and dark modes
- Purpose: User preference and modern UX expectations
- Trigger: Theme toggle button
- Progression: Click toggle → Theme switches → Preference saved
- Success criteria: Consistent theming across all components

## Edge Case Handling
- **Missing Translations**: Fallback to English content with indicator
- **Theme Persistence**: Save user preference across sessions
- **Mobile Navigation**: Collapsible menu for smaller screens
- **Long Service Lists**: Grid layout with proper spacing and organization

## Design Direction
The design should feel professional and trustworthy, conveying expertise in enterprise cloud solutions while remaining approachable for learning. Clean, modern interface with strategic use of green theming to reflect growth and innovation.

## Color Selection
Custom palette focused on professional green theme representing growth, technology, and reliability.

- **Primary Color**: Deep Green (oklch(0.4 0.15 150)) - represents expertise and growth
- **Secondary Colors**: Neutral grays for content hierarchy and readability
- **Accent Color**: Bright Green (oklch(0.7 0.2 140)) - for CTAs and highlights
- **Foreground/Background Pairings**: 
  - Background (White): Dark text (oklch(0.15 0 0)) - Ratio 15.3:1 ✓
  - Card (Light Gray): Dark text (oklch(0.15 0 0)) - Ratio 14.8:1 ✓
  - Primary (Deep Green): White text (oklch(0.98 0 0)) - Ratio 8.2:1 ✓
  - Accent (Bright Green): Dark text (oklch(0.15 0 0)) - Ratio 6.1:1 ✓

## Font Selection
Inter font family for clean, professional appearance with excellent readability across all content types.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/48px/tight spacing
  - H2 (Section Headers): Inter Semibold/32px/normal spacing
  - H3 (Service Titles): Inter Medium/24px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Small Text: Inter Regular/14px for metadata

## Animations
Subtle, professional animations that enhance usability without distraction - smooth transitions for theme changes, gentle hover effects on interactive elements.

- **Purposeful Meaning**: Motion reinforces navigation hierarchy and provides feedback
- **Hierarchy of Movement**: Primary actions get priority, secondary elements have subtle effects

## Component Selection
- **Components**: Header with navigation, Card components for services, Badge for certifications, Button variants for CTAs, Tabs for training categories
- **Customizations**: Language selector component, theme toggle with persistence
- **States**: Clear hover and focus states for all interactive elements
- **Icon Selection**: Phosphor icons for consistency - Globe for language, Moon/Sun for theme, various service icons
- **Spacing**: Consistent 8px grid system using Tailwind spacing
- **Mobile**: Collapsible header navigation, stacked card layouts, responsive typography scaling