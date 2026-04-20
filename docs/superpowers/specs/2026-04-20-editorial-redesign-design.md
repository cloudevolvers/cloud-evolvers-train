# Editorial Redesign — Design Spec

**Date:** 2026-04-20
**Source:** Claude Design handoff bundle "Cloud Evolvers" (Mjjq8hcqwxoiaazB8eVVtw), extracted to `/tmp/cloud-evolvers-design/`
**Scope:** Full public-page redesign adopting the design bundle's warm-editorial visual system, adapted to brand-navy and `cloudevolvers.com`'s real constraints.
**Delivery:** One feature branch (`feature/editorial-redesign`) in a git worktree, deployed to `test.cloudevolvers.com`, merged only after visual approval.

## Goals

1. Adopt the design bundle's typography rhythm and editorial layout across all public pages.
2. Remove every source of fake or fabricated content the bundle introduces (stats, instructors, testimonials, prices).
3. Preserve the site's existing i18n (EN/NL), live pricing (D1 catalog API), blog theme toggle, and admin routes.
4. Keep `BackgroundIcons` but soften them so they read as background texture under the new editorial type, not as the primary visual.
5. Ship behind a preview deploy, verify visually, then merge.

## Non-goals

- Redesigning admin pages (`/admin/*`).
- Restructuring legal pages (`/privacy-policy`, `/terms-of-service`, `/cookie-policy`) — they get the new header/footer/type only.
- Site-wide dark mode. Light mode only; blog keeps its existing toggle.
- Multiple accent swatches / runtime Tweaks panel from the mockup.
- Adopting the skill-assessment quiz from the mockup (fake recommendation logic).
- Adopting the mockup's pricing estimator or volume-discount logic.

## Visual system

### Typography

Google Fonts: `Instrument Serif` (regular + italic) + `Space Grotesk` (300–700) + `JetBrains Mono` (400, 500).

Global classes added to `src/index.css`:

```css
.display        { font-family: 'Instrument Serif', ui-serif, Georgia, serif; font-weight: 400; letter-spacing: -0.015em; line-height: 1; }
.display-italic { font-family: 'Instrument Serif', ui-serif, Georgia, serif; font-weight: 400; font-style: italic; letter-spacing: -0.01em; }
.eyebrow        { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 500; }
.lede           { font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 19px; line-height: 1.5; letter-spacing: -0.005em; }
.num            { font-family: 'Instrument Serif', ui-serif, Georgia, serif; font-weight: 400; letter-spacing: -0.02em; }
```

Tailwind `tailwind.config.js` extends `fontFamily` so existing utility-class usage keeps working:
```js
fontFamily: {
  serif:  ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
  sans:   ['"Space Grotesk"', 'system-ui', 'sans-serif'],
  mono:   ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
}
```

Default `body` font flips from whatever-is-current to `Space Grotesk`.

### Color tokens

CSS custom properties added to `:root` in `src/index.css`. Values map the bundle's token system onto the existing brand-navy palette (memory: `feedback_design_direction.md`).

```
--bg         brand paper (cool off-white; light blue-gray)
--bg-2       subtle fill (cards-on-bg)
--bg-3       deeper fill
--ink        brand navy ink (primary text)
--ink-2      secondary text
--ink-3      muted / captions
--rule       border / divider
--card       #ffffff
--accent         brand navy
--accent-deep    darker navy (hover)
--accent-soft    pale navy tint (backgrounds, gradients)
--ok / --warn    status colors (kept from current system)
--shadow     0 1px 0 rgba(11,22,48,.04), 0 8px 24px -12px rgba(11,22,48,.18)
```

Exact hex/oklch values are tuned during implementation to match existing brand-navy in `tailwind.config.js`. Dark mode tokens are **not** defined at `:root`; the blog page scopes its own.

### Component primitives

New directory: `src/components/editorial/`. Each file ≤ 100 lines.

- `Eyebrow.tsx` — mono uppercase label (`<span>` with `.eyebrow` class).
- `Display.tsx` / `DisplayItalic.tsx` — serif heading components with size prop.
- `Lede.tsx` — oversized paragraph with `max-width` prop.
- `Button.tsx` — variants: `primary` (ink fill), `ghost` (outline + card bg), `accent` (navy fill); sizes: `sm` / `md` / `lg`; accepts `href` (renders `<a>`) or `onClick` (renders `<button>`).
- `StatBlock.tsx` — left-ruled serif number + mono label.
- `Card.tsx` — white, 1px rule, `--shadow`, 14px radius.
- `SectionHead.tsx` — two-column grid: eyebrow + title on left, body on right (collapses to stacked on mobile).
- `Wrap.tsx` / `WrapNarrow.tsx` — 1280px / 980px max-width with 40px gutters.

Existing `src/components/ui/` (shadcn) stays for admin pages. Marketing components migrate to the editorial primitives.

### BackgroundIcons

Kept. Modifications:
- Opacity dropped (target `opacity-[0.06]`–`opacity-[0.10]`, tuned visually).
- `z-index` confirmed behind content; no changes there.
- Color tokens swapped to reference `--ink-3` / `--rule` so icons tint with theme rather than fighting the navy accent.

## Page-by-page treatment

### Homepage (`/`)

Ordered sections:

1. **Hero** — two-column, `1.15fr 1fr` grid on desktop, stacked on mobile.
   - Left: eyebrow row ("Microsoft Certified Training Partner" · rule · "Est. 2019"), display headline using the design's wording, lede, two CTAs (`primary`: "Plan a cohort" → `/contact`, `ghost`: "Sign up as an individual" → `/training`).
   - Right: placeholder photo slot (existing stock imagery from `public/images/`), plus a live "Upcoming cohorts" card that calls the public catalog API and shows the next 3 featured courses with their real `nextCohort` date (or "Contact us" if none).
   - Hero stat row from the mockup is **removed** (stats were fake).

2. **TrustStrip** — 4-column: MCT Partner · Cohort-based (8–16 seats) · Outcome reporting · Retake covered. Copy is factual; no numbers.

3. **Programs preview** — 3 featured courses pulled from catalog API, rendered with the new card primitive: mono code · serif title · mono duration · API-driven price (or "Contact us" fallback).

4. **Enterprise panel** — section background uses dark navy as a design device (single-section color block, not a page-level dark mode). L&D value props + a labeled illustrative reporting mock. Mock data uses obviously-placeholder labels ("Team A / B / C") and is captioned "Example dashboard" so no viewer reads it as real metrics.

5. **Why Cloud Evolvers** — replaces the fake "Outcomes" stats section. Editorial copy: MCT-certified instructors, live cohort delivery, exam retake covered, operating since 2019. No fabricated numbers.

6. **CTA footer strip** — "Plan a cohort" + "Browse all certifications".

**Stripped from the bundle:** fake stats in hero meta row, fake outcomes (92% / 3,400 / 240 / 11 days), placeholder testimonials, skill quiz, fake instructor cards.

### About (`/about`)

- Display headline, lede.
- Editorial narrative using `SectionHead` rhythm.
- Founder card component (photo slot + bio slot), rendered empty-state until real content lands. Until then: a single paragraph stating the company story.

### Contact (`/contact`)

- Display headline, lede.
- Form restyled with mono `eyebrow` labels, ink primary button.
- Office info side panel (address, email, hours) using `Eyebrow` + `serif` rhythm.

### Services overview (`/services`)

- Display headline, lede, `SectionHead` intro.
- 9 service cards in a 3-column grid (1-col mobile, 2-col tablet).
- Each card: eyebrow (service category) · serif title · body · "Learn more →" in mono.

### Service sub-pages (9 pages)

Shared shell:
1. Hero: eyebrow + display headline + lede.
2. Two or three `SectionHead`-led feature sections pulling existing copy.
3. Bottom CTA band: "Talk to us" ghost button + primary contact CTA.

Files affected: all 9 components in `src/pages/services/`.

### Training overview (`/training`)

- Display headline, lede.
- Filter row: Track (Azure / M365 / Security / All) · Level (Fundamentals / Associate / Expert / All) · search input.
- Grid of course cards in new style. Prices come from catalog API (existing behavior preserved). "Contact us" when no session.
- No hardcoded prices anywhere.

### Training detail (`/training/:slug`)

Layout matches the bundle's `course.jsx` pattern:
- Left (main): eyebrow (code) · display title · lede (outcome) · topic list · what's included · (optional) week-by-week outline if data present.
- Right (sticky): enrollment card with cohort radio picker populated from catalog API, price display (API or "Contact us"), primary CTA.
- Does not invent data the API doesn't return.

### Blog (`/blog`, `/blog/:id`)

- Existing content rendering and dark/light toggle **preserved unchanged**.
- Only typography tokens propagate (post titles pick up `.display` class, body picks up `Space Grotesk`) so the blog feels continuous with the rest of the site.

### Legal pages (`/privacy-policy`, `/terms-of-service`, `/cookie-policy`)

- No structural redesign.
- Inherit new header, new footer, new body type, new color tokens. That's it.

### 404

- Display headline ("Page not found" / localized).
- Eyebrow "404".
- Ink button back to homepage.

### Header / nav (global)

- Sticky, `backdrop-filter: saturate(1.2) blur(10px)`, bottom rule.
- Logo: serif wordmark + two-half-circle mark (`::before` ink bottom half, `::after` accent top half with `mix-blend-mode: multiply`).
- Nav links: `Training` · `Services` · `About` · `Blog` · `Contact`. Active link shows 2px accent underline.
- Right slot: language switcher (EN/NL, existing) + "Sign up" ghost + "Plan a cohort" primary.
- Mobile: hamburger drawer.

### Footer (global)

- Editorial sitemap layout: 3–4 columns with mono column headers.
- Final row: legal links + copyright + company entity ("Spot Cloud B.V., KvK 89708873").

## Preservation requirements

- `LanguageProvider` + `useLanguage` stays. All new copy in the redesign must flow through the EN/NL translation layer. Every new user-facing string added during the redesign gets both EN and NL translations.
- Public catalog API contract unchanged. Pricing and cohort data remain API-driven. No hardcoded prices land in frontend code.
- Admin routes (`/admin`, `/admin/bookings`, `/admin/images`) render inside the new global shell (new Header + Footer) but their page bodies stay on shadcn/ui — no admin UI redesign.
- Blog dark-mode toggle stays functional and scoped to blog pages only.

## Kill list

- Fake instructors, fake testimonials, fake outcome stats — never enter the repo (already absent per PR #67).
- Hardcoded prices / promo-discount logic — any remaining instances found during the redesign get deleted.
- The mockup's `quiz.jsx` / `enroll.jsx` logic — not adopted.
- Any dead animation files tied to `BackgroundIcons` that are no longer imported (per memory `project_background_icons.md`) get deleted if they're truly unreferenced after the redesign.

## Delivery plan

1. Feature branch `feature/editorial-redesign` in a git worktree off `master`.
2. Implementation lands in logical PR-sized chunks inside the single branch (visual system first, then global shell, then homepage, then services, then training, then blog/legal/404). The implementation plan (next step) decomposes this.
3. Preview deploy: every push to the branch publishes to `test.cloudevolvers.com` via the existing Cloudflare Pages config.
4. Verification: `bun run lint` + `bun run build` must pass locally before each push. `gh run watch` for CI. Visual smoke test of the preview URL before requesting user review.
5. User review on `test.cloudevolvers.com`.
6. Squash merge to `master` only after approval.

## Risks and open questions

- **Brand-navy token exact values.** Implementation reads `tailwind.config.js` to find the current navy hex values and derives `--accent` / `--accent-deep` / `--accent-soft` from them. If no tokens exist, a fallback palette is defined in the spec (TBD at implementation — not a blocker).
- **BackgroundIcons interaction with dark navy Enterprise panel.** The panel's section-scoped dark background could clash with the floating icons. Plan: hide icons inside that section via a CSS class on the panel wrapper.
- **Language coverage.** The redesign introduces new copy (eyebrows, CTAs, section labels). If NL translations lag, the page falls back to EN — acceptable per existing behavior but called out here.
- **Blog typography bleed.** Blog has its own theme; the font-family propagation must not break its existing styles. Risk mitigation: test blog page under both themes before merge.

## Success criteria

- Every public page renders in the new editorial style on `test.cloudevolvers.com`.
- No fabricated stats, instructors, or testimonials visible on any page.
- All prices visible on the site come from the catalog API; "Contact us" appears where no session is scheduled.
- Light mode everywhere except blog (blog toggle works).
- `bun run lint` and `bun run build` pass clean.
- Language switcher works; every new string has EN + NL entries.
- User approves the preview visually.
