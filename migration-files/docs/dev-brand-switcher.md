# Development Brand Switcher

## 🔧 Quick Brand Switching in Development

The brand switcher provides an easy way to test both xEvolve and Cloud Evolvers brands during development without restarting the server or modifying environment variables.

## 📍 Location

The brand switcher toggle appears in the header, only visible when `NODE_ENV=development`.

**Position**: Right side of header, between Desktop Navigation and Language Toggle

## 🎛️ How It Works

### Visual Design
- **Toggle Switch**: Modern switch component with brand colors
- **Brand Icons**: 
  - ⚡ Zap icon for xEvolve (blue)
  - 🎓 GraduationCap icon for Cloud Evolvers (emerald)
- **Labels**: "xEvolve" and "Cloud Evolvers" with color states

### Functionality
1. **URL Parameter Control**: Adds `?brand=cloud-evolvers` to URL
2. **Local Storage**: Remembers preference across page refreshes
3. **Instant Switching**: Page reloads with new brand applied
4. **Development Only**: Automatically hidden in production

## 🚀 Usage

### Switch to Cloud Evolvers
1. Toggle the switch to the right (emerald position)
2. Page reloads showing Cloud Evolvers branding
3. URL updates to `?brand=cloud-evolvers`

### Switch to xEvolve
1. Toggle the switch to the left (blue position)
2. Page reloads showing xEvolve branding
3. URL parameter removed

### Manual URL Control
You can also manually add URL parameters:
```
# Cloud Evolvers
http://localhost:4000?brand=cloud-evolvers

# xEvolve (default)
http://localhost:4000
```

## 🔒 Production Safety

The brand switcher is completely hidden in production builds:
- ✅ No visual elements appear
- ✅ No JavaScript bundle size impact
- ✅ No performance overhead
- ✅ Production uses only environment variables

## 🛠️ Technical Implementation

### Files Modified
- `src/components/dev/brand-switcher.tsx` - New switcher component
- `src/lib/brand-config.ts` - Added URL parameter detection
- `src/components/site-header.tsx` - Added switcher to header

### Detection Logic
```typescript
// Priority order:
1. URL parameter (?brand=cloud-evolvers)
2. Environment variable (NEXT_PUBLIC_CLOUD_EVOLVERS=1)
3. Default to xEvolve
```

### State Management
- **URL Parameters**: Primary method for brand switching
- **Local Storage**: Remembers developer preference
- **Page Reload**: Ensures complete brand switching

## 🎯 Benefits

- ⚡ **Instant Testing**: No server restarts needed
- 🔄 **Easy Switching**: One-click toggle between brands
- 💾 **Persistent**: Remembers your choice
- 🚫 **Production Safe**: Completely hidden in production
- 🎨 **Visual Feedback**: Clear indication of current brand

## 🧪 Testing Scenarios

### Header Navigation
- Switch and verify navigation changes (Services ↔ Training)
- Check logo and color scheme updates
- Test responsive behavior with scrolling

### Homepage Content
- Verify homepage content switches correctly
- Check footer changes (xEvolve partnership section)
- Validate color themes and branding

### Navigation Flow
- Test all internal links work correctly
- Verify training vs services pages load properly
- Check contact forms and CTAs
