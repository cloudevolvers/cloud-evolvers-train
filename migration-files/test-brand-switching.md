# Brand Switching Test Guide

This guide helps you test the Cloud Evolvers brand switching functionality.

## 🔧 Development Brand Switcher (NEW!)

**Easy Testing**: In development mode, look for the brand switcher toggle in the header (right side, between navigation and language toggle).

- **Toggle Right**: Switches to Cloud Evolvers (emerald theme)
- **Toggle Left**: Switches to xEvolve (blue theme)
- **Auto-reload**: Page reloads with new brand applied
- **Production Safe**: Only visible in development mode

## Test Setup

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test xEvolve (default) brand:**
   - Open http://localhost:3000
   - Should show xEvolve branding with blue/purple theme
   - Header shows services navigation (Azure Monitoring, File Transfer, etc.)
   - Footer shows xEvolve information

3. **Test Cloud Evolvers brand:**
   - **Method 1**: Use the development toggle in the header ⭐ RECOMMENDED
   - **Method 2**: Set environment variable: `NEXT_PUBLIC_CLOUD_EVOLVERS=1` and restart
   - **Method 3**: Add URL parameter: `http://localhost:3000?brand=cloud-evolvers`
   - Should show Cloud Evolvers branding with emerald/teal theme
   - Header shows training navigation (All Training, Azure Training, etc.)
   - Footer includes xEvolve partnership section

## What to Verify

### Cloud Evolvers Mode (NEXT_PUBLIC_CLOUD_EVOLVERS=1):
- ✅ Logo: GraduationCap icon with emerald gradient
- ✅ Brand name: "Cloud Evolvers"
- ✅ Tagline: "Cloud Training Excellence"
- ✅ Navigation: Training categories instead of services
- ✅ Homepage: Training-focused content
- ✅ Footer: xEvolve partnership section with CTA button
- ✅ Color scheme: Emerald/teal accents

### xEvolve Mode (default):
- ✅ Logo: Zap icon with blue/purple gradient
- ✅ Brand name: "xEvolve"
- ✅ Tagline: "Cloud Excellence Redefined"
- ✅ Navigation: Full services menu
- ✅ Homepage: Services-focused content
- ✅ Footer: Standard xEvolve footer
- ✅ Color scheme: Blue/purple accents

### Responsive Behavior:
- ✅ Header compacts when scrolled (both brands)
- ✅ Navigation items become smaller when scrolled
- ✅ Mobile menu works correctly
- ✅ All training/service links work

## Environment Variable Options

```bash
# Default xEvolve branding
# NEXT_PUBLIC_CLOUD_EVOLVERS=

# Cloud Evolvers branding
NEXT_PUBLIC_CLOUD_EVOLVERS=1
```

## Quick Test Commands

```bash
# Test xEvolve
unset NEXT_PUBLIC_CLOUD_EVOLVERS
npm run dev

# Test Cloud Evolvers
export NEXT_PUBLIC_CLOUD_EVOLVERS=1
npm run dev
```
