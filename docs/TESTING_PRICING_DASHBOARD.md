# 🧪 Admin Pricing Dashboard - Testing Guide

## Pre-Testing Checklist

### Environment Setup
- [x] Node.js and npm installed
- [x] Dependencies installed (`npm install`)
- [x] Development server running (`npm run dev`)
- [x] Azure Functions registered and running
- [x] Browser open to `http://localhost:4286/admin`

### API Functions Available
- [x] GET `/api/pricing` - Fetch all pricing data
- [x] POST `/api/pricing/course` - Update individual course price
- [x] POST `/api/pricing/promotion` - Update promotion
- [x] POST `/api/pricing/sync` - Bulk sync all data
- [x] POST `/api/pricing/seed` - Reset to defaults

## Test Scenarios

### 1. Authentication Test

**Test 1.1: Login with Correct Password**
```
Steps:
1. Navigate to http://localhost:4286/admin
2. Enter password: "loganislove"
3. Click "Login"

Expected Result:
✅ Success message appears
✅ Dashboard loads with all components
✅ Admin controls are visible
```

**Test 1.2: Login with Incorrect Password**
```
Steps:
1. Navigate to http://localhost:4286/admin
2. Enter password: "wrongpassword"
3. Click "Login"

Expected Result:
✅ Error message: "Invalid password"
✅ Input field is cleared
✅ Dashboard does not load
```

### 2. Dashboard UI Test

**Test 2.1: Statistics Cards**
```
Verify:
✅ Total Courses card shows correct count (50+)
✅ Average Price card shows calculated average
✅ Promotion Status shows current state
✅ Preview Courses shows 0 or selected count
✅ All cards have proper icons and styling
```

**Test 2.2: Navigation Elements**
```
Verify:
✅ "Home" button navigates to /
✅ "Show/Hide Preview" button toggles
✅ "Sync to Azure" button is visible
✅ "Seed Default Data" button is visible
```

### 3. Price Management Test

**Test 3.1: Update Individual Price**
```
Steps:
1. Find any course in the grid
2. Change price value (e.g., 690 → 799)
3. Click save button (💾)

Expected Result:
✅ Success message appears
✅ Price is updated in localStorage
✅ Card shows "Default" badge if different
✅ No page reload required
```

**Test 3.2: Search Functionality**
```
Steps:
1. Type "azure" in search box
2. Observe filtered results

Expected Result:
✅ Only Azure courses are displayed
✅ Count updates dynamically
✅ Categories show filtered courses
```

**Test 3.3: Category vs All View**
```
Steps:
1. Click "Show All" button
2. Observe layout change
3. Click "Show Categories" button

Expected Result:
✅ All view shows flat grid
✅ Category view shows organized sections
✅ Toggle works smoothly
✅ Course counts are accurate
```

### 4. Promotion Management Test

**Test 4.1: Enable Promotion**
```
Steps:
1. Scroll to Promotion Settings
2. Toggle "Enable Promotional Discount" ON
3. Verify badge shows "ACTIVE"

Expected Result:
✅ Switch turns on
✅ Green "ACTIVE" badge appears
✅ No errors in console
```

**Test 4.2: Update Promotion Details**
```
Steps:
1. Set discount percentage to 25
2. Enter reason: "Spring Sale"
3. Set valid until date: 2025-12-31
4. Click "Update Promotion"

Expected Result:
✅ Success message appears
✅ Data is saved to localStorage
✅ Preview reflects changes
```

**Test 4.3: Disable Promotion**
```
Steps:
1. Toggle "Enable Promotional Discount" OFF
2. Click "Update Promotion"

Expected Result:
✅ Promotion deactivates
✅ Preview shows no discounts
✅ ACTIVE badge disappears
```

### 5. Preview Functionality Test

**Test 5.1: Show Preview Panel**
```
Steps:
1. Click "Show Preview" button
2. Observe panel animation

Expected Result:
✅ Panel slides down smoothly
✅ Shows 5 default courses
✅ Button changes to "Hide Preview"
✅ Preview count updates in stats
```

**Test 5.2: Select Courses for Preview**
```
Steps:
1. Click eye icon (👁️) on 3 different courses
2. Check preview panel

Expected Result:
✅ Selected courses appear in preview
✅ Preview count updates (3)
✅ Course cards highlight or indicate selection
```

**Test 5.3: Preview with Promotion Active**
```
Steps:
1. Enable 30% promotion
2. Show preview panel
3. Verify pricing display

Expected Result:
✅ Original price shown with strikethrough
✅ Discounted price in green
✅ "-30%" badge displayed
✅ "Save €XXX" calculation correct
✅ Promotion message banner shown
```

**Test 5.4: Preview without Promotion**
```
Steps:
1. Disable promotion
2. Check preview panel

Expected Result:
✅ Only original prices shown
✅ No discount badges
✅ No savings text
✅ No promotion banner
```

### 6. Azure Sync Test

**Test 6.1: Sync to Azure (Success)**
```
Steps:
1. Make several price changes
2. Click "Sync to Azure"
3. Wait for response

Expected Result:
✅ Status shows "Syncing..."
✅ Success message appears
✅ Status shows "Synced" with checkmark
✅ Console shows sync details
```

**Test 6.2: Sync to Azure (Failure)**
```
Steps:
1. Stop Azure Functions (Ctrl+C)
2. Make price changes
3. Click "Sync to Azure"

Expected Result:
✅ Status shows "Syncing..."
✅ Error message appears
✅ Status shows "Failed" with warning
✅ Data still saved in localStorage
✅ Graceful error handling
```

### 7. Data Persistence Test

**Test 7.1: LocalStorage Persistence**
```
Steps:
1. Update 3 course prices
2. Refresh browser (F5)
3. Check prices

Expected Result:
✅ All changes are preserved
✅ Dashboard loads with saved data
✅ No data loss
```

**Test 7.2: Reset to Defaults**
```
Steps:
1. Click "Seed Default Data"
2. Confirm action
3. Verify prices

Expected Result:
✅ All prices reset to 690 (default)
✅ Default promotion restored
✅ Success message shown
✅ Preview reflects defaults
```

### 8. Responsive Design Test

**Test 8.1: Desktop (1920x1080)**
```
Verify:
✅ 4 stat cards in a row
✅ Course grid shows 5 columns (2xl breakpoint)
✅ All elements properly spaced
✅ No horizontal scroll
```

**Test 8.2: Tablet (768x1024)**
```
Verify:
✅ 2 stat cards per row
✅ Course grid shows 3 columns
✅ Navigation elements stack properly
✅ Preview panel responsive
```

**Test 8.3: Mobile (375x667)**
```
Verify:
✅ 1 stat card per row
✅ Course grid shows 1 column
✅ Buttons stack vertically
✅ Text remains readable
✅ Touch targets adequate size
```

### 9. Performance Test

**Test 9.1: Initial Load Time**
```
Measure:
✅ Page load under 2 seconds
✅ No console errors
✅ All assets loaded
✅ Smooth animations
```

**Test 9.2: Price Update Performance**
```
Measure:
✅ Update saves instantly (< 100ms)
✅ No UI lag
✅ Smooth transitions
```

**Test 9.3: Search Performance**
```
Measure:
✅ Filter updates instantly
✅ No typing lag
✅ Results appear immediately
```

### 10. Edge Cases Test

**Test 10.1: Invalid Price Input**
```
Steps:
1. Enter negative price
2. Enter text instead of number
3. Enter extremely large number

Expected Result:
✅ Input validation prevents invalid values
✅ Appropriate error messages
✅ No console errors
```

**Test 10.2: Empty Search**
```
Steps:
1. Clear search box
2. Observe results

Expected Result:
✅ All courses displayed
✅ Categories restored
✅ No errors
```

**Test 10.3: Long Course Names**
```
Verify:
✅ Text truncates properly
✅ Ellipsis shows for overflow
✅ Card maintains height
```

## Browser Compatibility Test

### Chrome/Edge (Chromium)
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Safari
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

## API Integration Test

### Test with Azure Functions Running

**Test API-1: Fetch Pricing**
```bash
curl http://localhost:7076/api/pricing
```

**Test API-2: Update Course Price**
```bash
curl -X POST http://localhost:7076/api/pricing/course \
  -H "Content-Type: application/json" \
  -H "x-functions-key: loganislove" \
  -d '{"courseSlug": "az-900-azure-fundamentals", "price": 799}'
```

**Test API-3: Sync All Data**
```bash
curl -X POST http://localhost:7076/api/pricing/sync \
  -H "Content-Type: application/json" \
  -H "x-functions-key: loganislove" \
  -d '{"basePrices": {...}, "promotion": {...}}'
```

## Test Results Template

```
Test Date: _______________
Tester: _______________
Environment: _______________

Authentication Tests:
[✓/✗] Test 1.1 - Login Success
[✓/✗] Test 1.2 - Login Failure

Dashboard UI Tests:
[✓/✗] Test 2.1 - Statistics Cards
[✓/✗] Test 2.2 - Navigation Elements

Price Management Tests:
[✓/✗] Test 3.1 - Update Individual Price
[✓/✗] Test 3.2 - Search Functionality
[✓/✗] Test 3.3 - Category vs All View

Promotion Management Tests:
[✓/✗] Test 4.1 - Enable Promotion
[✓/✗] Test 4.2 - Update Promotion Details
[✓/✗] Test 4.3 - Disable Promotion

Preview Functionality Tests:
[✓/✗] Test 5.1 - Show Preview Panel
[✓/✗] Test 5.2 - Select Courses
[✓/✗] Test 5.3 - Preview with Promotion
[✓/✗] Test 5.4 - Preview without Promotion

Azure Sync Tests:
[✓/✗] Test 6.1 - Sync Success
[✓/✗] Test 6.2 - Sync Failure

Data Persistence Tests:
[✓/✗] Test 7.1 - LocalStorage Persistence
[✓/✗] Test 7.2 - Reset to Defaults

Responsive Design Tests:
[✓/✗] Test 8.1 - Desktop
[✓/✗] Test 8.2 - Tablet
[✓/✗] Test 8.3 - Mobile

Performance Tests:
[✓/✗] Test 9.1 - Initial Load
[✓/✗] Test 9.2 - Price Update
[✓/✗] Test 9.3 - Search Performance

Edge Cases Tests:
[✓/✗] Test 10.1 - Invalid Input
[✓/✗] Test 10.2 - Empty Search
[✓/✗] Test 10.3 - Long Course Names

Issues Found:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

Overall Status: [PASS/FAIL/NEEDS WORK]
```

## Known Issues & Workarounds

### Issue 1: Azure Functions Not Starting
**Symptom**: API endpoints return 404
**Solution**: Ensure `api/src/index.js` imports pricing functions
```javascript
require('./functions/pricing');
```

### Issue 2: LocalStorage Quota Exceeded
**Symptom**: "QuotaExceededError" in console
**Solution**: Clear old localStorage data or reduce history tracking

### Issue 3: Sync Timeout
**Symptom**: Sync takes too long or times out
**Solution**: Reduce batch size or implement chunked uploads

## Conclusion

This testing guide covers all major functionality of the Admin Pricing Dashboard. Use it to verify that all features work as expected before deploying to production.

**Testing Checklist Complete**: [ ]
**Ready for Production**: [ ]
**Issues Resolved**: [ ]

---

**Last Updated**: 2025-10-11
**Test Version**: 1.0.0
