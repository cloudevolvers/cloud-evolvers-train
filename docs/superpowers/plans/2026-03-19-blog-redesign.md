# Blog Redesign: TOC Layout, Reading Helpers, Header Reorder

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the blog article view as a left-TOC + content layout with reading helpers (callouts, expandable code blocks, progress bar), reorder the header nav to move Blog left, and create a new Exchange RBAC blog post.

**Architecture:** BlogPostView gets a full rewrite with a 2-column grid (sticky TOC + content column). New sub-components: `BlogTOC`, `CodeBlock`, `Callout`. The BlogSection type gets an optional `callout` field. Header nav reordered in both desktop and mobile. New blog post file for Exchange RBAC.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 4 + @tailwindcss/typography, Framer Motion, Phosphor Icons

---

### Task 1: Move Blog left in header navigation

**Files:**
- Modify: `src/components/Header/HeaderNavigation.tsx:23-54`
- Modify: `src/components/Header/MobileMenu.tsx:28-36`

- [ ] **Step 1: Reorder desktop nav — move Blog after Training**

In `HeaderNavigation.tsx`, change the `navigationItems` array order to:
1. Training
2. Blog
3. Azure Excellence
4. Services
5. About
6. Contact

- [ ] **Step 2: Reorder mobile nav to match**

In `MobileMenu.tsx`, change the `navigationItems` array to match:
1. Home
2. Training
3. Blog
4. Azure Excellence
5. Services
6. About
7. Contact

- [ ] **Step 3: Verify build**

Run: `npx vite build`

- [ ] **Step 4: Commit**

```bash
git add src/components/Header/HeaderNavigation.tsx src/components/Header/MobileMenu.tsx
git commit -m "fix: move Blog left in header nav (after Training)"
```

---

### Task 2: Add callout type to blog data model

**Files:**
- Modify: `src/data/blog/types.ts`

The current `BlogSection` has `code?: { language: string; code: string }`. We need to add a `callout` field for info/warning boxes, and make `code` support expandable blocks with titles.

- [ ] **Step 1: Extend BlogSection type**

Add to `BlogSection` interface in `types.ts`:

```typescript
callout?: {
  type: 'info' | 'warning';
  title: string;
  content: string;
};
```

Update `code` to support expandable titles:

```typescript
code?: {
  language: string;
  code: string;
  title?: string;       // e.g. "List Exchange role group members"
  collapsed?: boolean;  // starts collapsed if true
};
```

- [ ] **Step 2: Update LocalizedBlogPost to match**

The `LocalizedBlogPost` sections type also needs `callout` and updated `code` fields.

- [ ] **Step 3: Commit**

```bash
git add src/data/blog/types.ts
git commit -m "feat: add callout and expandable code fields to blog types"
```

---

### Task 3: Create CodeBlock component

**Files:**
- Create: `src/components/blog/CodeBlock.tsx`

Expandable code block with copy-to-clipboard, language tag, and collapsible state.

- [ ] **Step 1: Write the component**

Props: `{ code: string; language: string; title?: string; collapsed?: boolean }`

Features:
- Toggle expand/collapse via chevron click
- Copy button that copies `code` to clipboard, shows "Copied!" for 2s
- Language badge (e.g. `PowerShell`, `Bash`)
- Monochrome styling using site's CSS vars: `bg-muted`, `border-border`, `text-foreground`
- JetBrains Mono font for code
- Chevron: `▼` expanded, `▶` collapsed

- [ ] **Step 2: Commit**

```bash
git add src/components/blog/CodeBlock.tsx
git commit -m "feat: add CodeBlock component with copy and collapse"
```

---

### Task 4: Create Callout component

**Files:**
- Create: `src/components/blog/Callout.tsx`

Info and warning callout boxes using monochrome palette.

- [ ] **Step 1: Write the component**

Props: `{ type: 'info' | 'warning'; title: string; children: React.ReactNode }`

Styling:
- **info**: `bg-muted/50`, left border `border-foreground/40`, title in `text-foreground/70`
- **warning**: `bg-[hsl(40_8%_10%)]` dark / `bg-[hsl(40_20%_96%)]` light, left border `hsl(40 30% 55%)`, title in warm neutral
- Both: 3px left border, rounded-md, 14-16px padding

- [ ] **Step 2: Commit**

```bash
git add src/components/blog/Callout.tsx
git commit -m "feat: add Callout component (info/warning variants)"
```

---

### Task 5: Create BlogTOC component

**Files:**
- Create: `src/components/blog/BlogTOC.tsx`

Sticky table of contents with active section tracking and reading progress.

- [ ] **Step 1: Write the component**

Props: `{ sections: Array<{ id: string; title: string }>; conclusionLabel: string }`

Features:
- Sticky positioning (`sticky top-28`)
- Active section highlighted with left border `border-foreground` and `text-foreground`
- Inactive sections: `text-muted-foreground` with `border-transparent`
- Click to scroll: `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`
- Uses `IntersectionObserver` to track which section is in view
- Progress bar below TOC: thin line, `bg-muted` track, `bg-foreground/60` fill, width based on scroll percentage
- "On this page" label at top in uppercase, small, muted

- [ ] **Step 2: Commit**

```bash
git add src/components/blog/BlogTOC.tsx
git commit -m "feat: add BlogTOC with active tracking and progress bar"
```

---

### Task 6: Rewrite BlogPostView with TOC layout

**Files:**
- Rewrite: `src/components/BlogPostView.tsx`

Full rewrite using the new sub-components and 2-column grid layout.

- [ ] **Step 1: Write the new BlogPostView**

Layout structure:
```
<div max-w-6xl mx-auto px-6>
  ← All articles (back button)
  <div grid grid-cols-[220px_1fr] gap-12 lg layout>
    <BlogTOC />           ← sticky left column
    <article max-w-[680px]>  ← reading column
      Category · Byline
      <h1> Title
      Tags
      <hr>
      Introduction <p>
      For each section:
        <section id={slug}>
          <h2> Title
          <p> Content
          {callout && <Callout />}
          {code && <CodeBlock />}
          {subsections...}
        </section>
        <hr> between sections (subtle)
      <hr>
      <h2> Conclusion
      <p> Conclusion text
    </article>
  </div>
  Back to articles footer
</div>
```

Key details:
- Generate section IDs from titles: `slugify(getText(section.title))`
- Pass section list to `BlogTOC`
- On mobile (below `lg`): hide TOC, show single column
- Use Tailwind prose classes on `<article>`: `prose prose-neutral dark:prose-invert prose-lg`
- Custom prose overrides: `prose-h2:mt-12 prose-h2:mb-4 prose-p:leading-[1.85] prose-p:mb-6`
- Section dividers: `<hr className="border-border my-10">`

- [ ] **Step 2: Verify build**

Run: `npx vite build`

- [ ] **Step 3: Commit**

```bash
git add src/components/BlogPostView.tsx
git commit -m "feat: rewrite BlogPostView with TOC layout and reading helpers"
```

---

### Task 7: Create Exchange RBAC blog post

**Files:**
- Create: `src/data/blog/posts/exchange-rbac-access-policies.ts`
- Modify: `src/data/blog/index.ts`

- [ ] **Step 1: Write the blog post**

Post details:
- id: `exchange-rbac-access-policies`
- date: `2026-03-20` (not taken)
- author: `Yair Knijn`
- tags: `['Exchange Online', 'RBAC', 'Security', 'PowerShell', 'Microsoft 365']`
- category: `{ en: 'Azure Security', nl: 'Azure Beveiliging' }`
- readTime: 9
- image: `/images/pexels/pexels-artificial-intelligence-robot.jpg`

Sections (5):
1. **Exchange RBAC: How It Actually Works** — role groups, management roles, role assignments, built-in groups (Organization Management, Recipient Management, Help Desk). Use callout: type `info`, explaining that Exchange RBAC is separate from Entra ID roles.
2. **Application Access Policies** — `full_access_as_app` problem, scoping with `New-ApplicationAccessPolicy`. Use callout: type `warning` about default unrestricted access. Include code block: PowerShell to create access policy.
3. **Scoping App-Only Access with Graph** — Mail.Read vs Mail.ReadWrite, application vs delegated permissions, limiting with access policies. Code block: testing with Graph API curl command.
4. **Auditing Current Assignments** — `Get-RoleGroupMember`, `Get-ManagementRoleAssignment`, finding stale admin accounts. Code block: PowerShell audit script (collapsible).
5. **Automation: Scheduled RBAC Reviews** — Azure Automation runbook approach, Logic Apps trigger, exporting assignments to CSV. Code block: full runbook script (collapsible).

Writing tone: direct, conversational, same as the rewritten posts. Not AI slop. Dutch translations natural.

- [ ] **Step 2: Add to blog index**

Add import, named export, and array entry in `src/data/blog/index.ts`.

- [ ] **Step 3: Verify build**

Run: `npx vite build`

- [ ] **Step 4: Commit**

```bash
git add src/data/blog/posts/exchange-rbac-access-policies.ts src/data/blog/index.ts
git commit -m "feat: add Exchange RBAC and access policies blog post"
```

---

### Task 8: Deploy

- [ ] **Step 1: Create branch, push, PR, squash merge**

```bash
git checkout -b feature/blog-toc-redesign
git add -A
git push -u origin feature/blog-toc-redesign
gh pr create --title "feat: blog TOC layout, reading helpers, Exchange RBAC post, header reorder"
gh pr merge --squash
```

- [ ] **Step 2: Verify deploy**

Watch: `gh run list --limit 1 --workflow "Deploy to Cloudflare Pages"`
Then visually verify at `https://cloudevolvers.com/blog`

- [ ] **Step 3: Browser verification**

Navigate to a blog post, verify:
- TOC is visible on desktop, hidden on mobile
- Active section tracking works on scroll
- Code blocks expand/collapse and copy works
- Callout boxes render correctly
- Blog is second item in header nav (after Training)
