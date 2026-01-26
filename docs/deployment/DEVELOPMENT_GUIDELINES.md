# 🚀 Development Guidelines for Cloud Evolvers Training

## 📋 Important Development Rules

### ⚠️ **CRITICAL: NO FAKE DATA**
- **NEVER** use fake/random data in production components
- **AVOID** Math.random() for displaying stats, prices, ratings, or progress
- **DO NOT** show enrollment numbers, ratings, or pricing unless real data is available
- All displayed statistics must be real or clearly marked as placeholders during development

### 🎨 **UI/UX Best Practices**

#### Card Layouts
- Use `auto-rows-fr` for consistent card heights in grid layouts
- Ensure proper spacing with `gap-3` or `gap-4` for readability
- Use `flex flex-col` for cards to ensure content fills available space
- Add `min-w-0` and `truncate` classes to prevent text overflow

#### Component Structure
- Always use `motion.div` wrappers for animations
- Implement proper loading states and error boundaries
- Use semantic HTML elements and proper ARIA labels
- Maintain consistent spacing with Tailwind utility classes

#### Blog Cards Alignment
```tsx
// ✅ Good - Proper card alignment
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 auto-rows-fr">
  <motion.div className="flex">
    <Card className="w-full flex flex-col">
      <CardContent className="flex flex-col h-full">
        {/* Content with proper spacing */}
      </CardContent>
    </Card>
  </motion.div>
</div>

// ❌ Bad - Inconsistent heights and overlapping
<div className="grid gap-4">
  <Card className="h-auto">
    {/* Content without proper flex structure */}
  </Card>
</div>
```

### 📊 **Data Handling**

#### Real Data vs Placeholders
```tsx
// ✅ Good - Real data or clear placeholders
const courseStats = {
  enrollments: course.realEnrollments || null, // Show only if real
  rating: course.actualRating || null,
  price: course.confirmedPrice || null
};

// ❌ Bad - Fake random data
const fakeStats = {
  enrollments: Math.floor(Math.random() * 100) + 50,
  rating: Math.random() * 2 + 3,
  price: Math.floor(Math.random() * 500) + 300
};
```

#### Course Information Display
- Only show course codes, names, and descriptions that are confirmed
- Duration and level information must be accurate
- Highlights should be real course benefits, not placeholder text

### 🔧 **Technical Standards**

#### TypeScript Usage
- Always define proper interfaces for data structures
- Use strict type checking for all components
- Implement proper error handling for API calls

#### Performance Optimization
- Use `motion` components judiciously to avoid performance issues
- Implement proper lazy loading for large datasets
- Optimize images and assets for web delivery

#### Accessibility
- Ensure all interactive elements have proper focus states
- Use semantic HTML and ARIA labels
- Maintain proper color contrast ratios
- Test with keyboard navigation

### 🚀 **Deployment Checklist**

Before any deployment:
- [ ] Remove all fake/random data
- [ ] Verify all statistics are real or hidden
- [ ] Test responsive design on multiple screen sizes
- [ ] Validate all links and navigation
- [ ] Check for console errors and warnings
- [ ] Ensure proper loading states
- [ ] Test accessibility with screen readers

### 📝 **Code Review Requirements**

All pull requests must:
- Include screenshots of UI changes
- Document any new components or significant changes
- Pass TypeScript compilation without errors
- Have no fake data in production components
- Include proper error handling
- Follow established naming conventions

### 🎯 **Component Quality Standards**

#### Animation Guidelines
- Use consistent timing functions (ease-in-out, duration: 0.3)
- Avoid excessive animations that may cause motion sickness
- Implement proper stagger delays for list animations
- Test animations on lower-end devices

#### Responsive Design
- Mobile-first approach with progressive enhancement
- Test on actual devices, not just browser dev tools
- Ensure touch targets are at least 44px
- Optimize for various screen orientations

---

**Remember**: Quality over speed. Always prioritize user experience and data accuracy over flashy features with fake information.
