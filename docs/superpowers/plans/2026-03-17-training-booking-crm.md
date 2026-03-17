# Training Booking System & CRM Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a training booking system with scheduling API, capacity tracking, CRM contacts, email notifications, and "Why Cloud Evolvers" content to the cloud-evolvers-train website.

**Architecture:** Cloudflare D1 tables (contacts, training_sessions, enrollments) in the existing `PRICING_DB` database, Cloudflare Pages Functions for the API, React components for the frontend. Emails via existing MS Graph integration.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Cloudflare Pages Functions, Cloudflare D1, Microsoft Graph API, Framer Motion, Phosphor Icons, shadcn/ui.

**Spec:** `docs/superpowers/specs/2026-03-17-training-booking-crm-design.md`

---

## File Structure

### New files to create:
```
functions/api/training-sessions.ts          — Public GET: list sessions with spots remaining
functions/api/training-sessions/[id].ts     — Public GET: single session detail
functions/api/enrollments.ts                — Public POST: create enrollment
functions/api/admin/training-sessions.ts    — Admin GET/POST: list/create sessions
functions/api/admin/training-sessions/[id].ts — Admin PUT: update session
functions/api/admin/enrollments.ts          — Admin GET: list enrollments
functions/api/admin/enrollments/[id].ts     — Admin PATCH: update enrollment status
functions/api/admin/contacts.ts             — Admin GET: list contacts
functions/api/_lib/auth.ts                  — Shared admin auth helper
functions/api/_lib/cors.ts                  — Shared CORS headers
functions/api/_lib/email.ts                 — MS Graph email helper (extracted from submit-consultation)
functions/api/_lib/db-types.ts              — D1 row types
migrations/0001-booking-tables.sql          — D1 migration: create tables
migrations/0002-seed-sessions.sql           — D1 seed: September AZ-104 + AZ-305

src/components/training/WhyCloudEvolvers.tsx — "Why train with us?" section
src/components/training/TrainingBadges.tsx    — Highlight badges (labs, lunch, personal attention)
src/components/training/SessionPicker.tsx     — Available dates selector for booking form
src/components/admin/BookingDashboard.tsx     — Admin: sessions, enrollments, contacts tabs
src/hooks/use-training-sessions.ts           — React hook: fetch sessions by course slug
```

### Files to modify:
```
src/pages/training/TrainingOverviewPage.tsx  — Add WhyCloudEvolvers section
src/pages/training/TrainingDetailPage.tsx    — Add TrainingBadges + pass sessions to booking form
src/components/training/TrainingBookingForm.tsx — Replace preferred-date with SessionPicker, wire to API
src/App.tsx                                  — Add /admin/bookings route
```

---

## Chunk 1: Database & Shared API Utilities

### Task 1: D1 Migration — Create Tables

**Files:**
- Create: `migrations/0001-booking-tables.sql`

- [ ] **Step 1: Write the migration SQL**

```sql
-- migrations/0001-booking-tables.sql
-- Training Booking System tables for cloud-evolvers-pricing D1 database

CREATE TABLE IF NOT EXISTS contacts (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  company TEXT,
  source TEXT NOT NULL DEFAULT 'website_booking',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS training_sessions (
  id TEXT PRIMARY KEY,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  max_participants INTEGER NOT NULL DEFAULT 15,
  location TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  price INTEGER,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS enrollments (
  id TEXT PRIMARY KEY,
  contact_id TEXT NOT NULL REFERENCES contacts(id),
  session_id TEXT NOT NULL REFERENCES training_sessions(id),
  status TEXT NOT NULL DEFAULT 'confirmed',
  dietary_requirements TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(contact_id, session_id)
);

CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_training_sessions_course ON training_sessions(course_slug);
CREATE INDEX IF NOT EXISTS idx_training_sessions_status ON training_sessions(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_session ON enrollments(session_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_contact ON enrollments(contact_id);

-- Auto-update updated_at on modifications
CREATE TRIGGER IF NOT EXISTS trg_contacts_updated_at
  AFTER UPDATE ON contacts
  BEGIN UPDATE contacts SET updated_at = datetime('now') WHERE id = NEW.id; END;

CREATE TRIGGER IF NOT EXISTS trg_training_sessions_updated_at
  AFTER UPDATE ON training_sessions
  BEGIN UPDATE training_sessions SET updated_at = datetime('now') WHERE id = NEW.id; END;

CREATE TRIGGER IF NOT EXISTS trg_enrollments_updated_at
  AFTER UPDATE ON enrollments
  BEGIN UPDATE enrollments SET updated_at = datetime('now') WHERE id = NEW.id; END;
```

- [ ] **Step 2: Apply migration to local D1**

Run: `cd /home/falk/cloud-evolvers-train && wrangler d1 execute cloud-evolvers-pricing --file=migrations/0001-booking-tables.sql --local`

Expected: Tables created successfully.

- [ ] **Step 3: Commit**

```bash
git add migrations/0001-booking-tables.sql
git commit -m "feat: add D1 migration for booking tables (contacts, training_sessions, enrollments)"
```

---

### Task 2: D1 Seed Data — September Sessions

**Files:**
- Create: `migrations/0002-seed-sessions.sql`

- [ ] **Step 1: Write the seed SQL**

```sql
-- migrations/0002-seed-sessions.sql
-- Seed September 2026 training sessions for AZ-104 and AZ-305

INSERT OR IGNORE INTO training_sessions (id, course_slug, course_name, start_date, end_date, max_participants, location, status, price)
VALUES
  ('sess-az104-sep2026', 'azure-administrator', 'Azure Administrator Associate (AZ-104)', '2026-09-15', '2026-09-17', 15, 'Amsterdam', 'open', 179500),
  ('sess-az305-sep2026', 'azure-solutions-architect', 'Azure Solutions Architect Expert (AZ-305)', '2026-09-22', '2026-09-25', 15, 'Amsterdam', 'open', 179500);
```

- [ ] **Step 2: Apply seed to local D1**

Run: `cd /home/falk/cloud-evolvers-train && wrangler d1 execute cloud-evolvers-pricing --file=migrations/0002-seed-sessions.sql --local`

Expected: 2 rows inserted.

- [ ] **Step 3: Commit**

```bash
git add migrations/0002-seed-sessions.sql
git commit -m "feat: seed September 2026 AZ-104 and AZ-305 training sessions"
```

---

### Task 3: Shared API Utilities

**Files:**
- Create: `functions/api/_lib/cors.ts`
- Create: `functions/api/_lib/auth.ts`
- Create: `functions/api/_lib/db-types.ts`

- [ ] **Step 1: Create CORS helper**

```typescript
// functions/api/_lib/cors.ts
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key, x-admin-password',
};

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

export function optionsResponse(): Response {
  return new Response(null, { headers: corsHeaders });
}
```

- [ ] **Step 2: Create admin auth helper**

```typescript
// functions/api/_lib/auth.ts
// Matches existing pattern from functions/api/pricing/admin.ts

interface AuthEnv {
  FORM_API_KEY: string;
  ADMIN_PASSWORD: string;
}

export function authenticateAdmin(request: Request, env: AuthEnv): { ok: boolean; error?: string } {
  const apiKey = request.headers.get('x-api-key');
  const adminPassword = request.headers.get('x-admin-password');

  if (!apiKey || apiKey !== env.FORM_API_KEY) {
    return { ok: false, error: 'Invalid API key' };
  }
  if (!adminPassword || adminPassword !== env.ADMIN_PASSWORD) {
    return { ok: false, error: 'Invalid admin password' };
  }
  return { ok: true };
}
```

- [ ] **Step 3: Create D1 row types**

```typescript
// functions/api/_lib/db-types.ts

export interface ContactRow {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface TrainingSessionRow {
  id: string;
  course_slug: string;
  course_name: string;
  start_date: string;
  end_date: string;
  max_participants: number;
  location: string;
  status: string;
  price: number | null;
  created_at: string;
  updated_at: string;
}

export interface EnrollmentRow {
  id: string;
  contact_id: string;
  session_id: string;
  status: string;
  dietary_requirements: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookingEnv {
  PRICING_DB: D1Database;
  FORM_API_KEY: string;
  ADMIN_PASSWORD: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}
```

- [ ] **Step 4: Commit**

```bash
git add functions/api/_lib/
git commit -m "feat: add shared API utilities (CORS, auth, D1 types) for booking system"
```

---

### Task 4: Email Helper (extracted from submit-consultation pattern)

**Files:**
- Create: `functions/api/_lib/email.ts`

- [ ] **Step 1: Create the email helper**

```typescript
// functions/api/_lib/email.ts
// Extracted from functions/api/submit-consultation.ts pattern

interface EmailEnv {
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}

interface EmailOptions {
  to: string[];
  subject: string;
  htmlBody: string;
  replyTo?: { address: string; name: string };
}

async function getGraphToken(env: EmailEnv): Promise<string | null> {
  try {
    const response = await fetch(
      `https://login.microsoftonline.com/${env.EMAIL_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: env.EMAIL_CLIENT_ID,
          client_secret: env.EMAIL_CLIENT_SECRET,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    );
    if (!response.ok) {
      console.error('Graph token error:', await response.text());
      return null;
    }
    const data = await response.json() as { access_token: string };
    return data.access_token;
  } catch (err) {
    console.error('Graph token fetch failed:', err);
    return null;
  }
}

export async function sendEmail(env: EmailEnv, options: EmailOptions): Promise<boolean> {
  const token = await getGraphToken(env);
  if (!token) return false;

  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${env.EMAIL_SENDER_ADDRESS}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: options.subject,
            body: { contentType: 'HTML', content: options.htmlBody },
            toRecipients: options.to.map((addr) => ({
              emailAddress: { address: addr },
            })),
            ...(options.replyTo
              ? { replyTo: [{ emailAddress: options.replyTo }] }
              : {}),
          },
        }),
      }
    );
    if (!response.ok) {
      console.error('Send email failed:', await response.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('Send email exception:', err);
    return false;
  }
}

export function enrollmentAdminEmailHtml(params: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  courseName: string;
  dates: string;
  location: string;
  dietary?: string;
  status: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;">
        <tr><td align="center" style="padding-bottom:24px;">
          <span style="color:#fff;font-size:18px;font-weight:bold;">Cloud Evolvers</span>
        </td></tr>
        <tr><td style="background:#fff;border-radius:16px;overflow:hidden;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#10b981;padding:24px 32px;">
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.8);font-size:13px;text-transform:uppercase;">New Enrollment</p>
              <h1 style="margin:0;color:#fff;font-size:22px;">${params.courseName}</h1>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:24px 32px;">
              <p style="margin:0 0 16px;"><strong>${params.name}</strong> (${params.status})</p>
              <p style="margin:0 0 8px;color:#64748b;font-size:14px;">Email: <a href="mailto:${params.email}">${params.email}</a></p>
              ${params.phone ? `<p style="margin:0 0 8px;color:#64748b;font-size:14px;">Phone: ${params.phone}</p>` : ''}
              ${params.company ? `<p style="margin:0 0 8px;color:#64748b;font-size:14px;">Company: ${params.company}</p>` : ''}
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;">
              <p style="margin:0 0 8px;font-size:14px;">Dates: <strong>${params.dates}</strong></p>
              <p style="margin:0 0 8px;font-size:14px;">Location: <strong>${params.location}</strong></p>
              ${params.dietary ? `<p style="margin:0 0 8px;font-size:14px;">Dietary: ${params.dietary}</p>` : ''}
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function enrollmentConfirmationEmailHtml(params: {
  firstName: string;
  courseName: string;
  dates: string;
  location: string;
  status: string;
}): string {
  const isWaitlisted = params.status === 'waitlisted';
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;">
        <tr><td align="center" style="padding-bottom:24px;">
          <span style="color:#fff;font-size:18px;font-weight:bold;">Cloud Evolvers</span>
        </td></tr>
        <tr><td style="background:#fff;border-radius:16px;overflow:hidden;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:${isWaitlisted ? '#f59e0b' : '#10b981'};padding:24px 32px;">
              <h1 style="margin:0;color:#fff;font-size:22px;">
                ${isWaitlisted ? 'You\'re on the Waitlist' : 'You\'re Registered!'}
              </h1>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:24px 32px;">
              <p style="margin:0 0 16px;font-size:16px;">Hi ${params.firstName},</p>
              <p style="margin:0 0 16px;font-size:14px;color:#334155;">
                ${isWaitlisted
                  ? `You've been added to the waitlist for <strong>${params.courseName}</strong>. We'll notify you as soon as a spot opens up.`
                  : `You're confirmed for <strong>${params.courseName}</strong>!`}
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:8px;margin:16px 0;">
                <tr><td style="padding:16px;">
                  <p style="margin:0 0 8px;font-size:14px;"><strong>Dates:</strong> ${params.dates}</p>
                  <p style="margin:0 0 8px;font-size:14px;"><strong>Location:</strong> ${params.location}</p>
                  <p style="margin:0;font-size:14px;"><strong>Lunch:</strong> Included</p>
                </td></tr>
              </table>
              ${!isWaitlisted ? `
              <p style="margin:16px 0 0;font-size:14px;color:#334155;">
                <strong>What to expect:</strong> Extensive hands-on labs with real-world scenarios, personal attention in a small group (max 15), and lunch is on us. Just bring your laptop and enthusiasm!
              </p>` : ''}
              <p style="margin:16px 0 0;font-size:13px;color:#94a3b8;">
                Questions? Reply to this email or contact us at yair@cloudevolvers.com
              </p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td align="center" style="padding:16px 0 0;">
          <p style="margin:0;color:#64748b;font-size:12px;">cloudevolvers.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
```

- [ ] **Step 2: Commit**

```bash
git add functions/api/_lib/email.ts
git commit -m "feat: add email helper with enrollment notification templates"
```

---

## Chunk 2: Public API Endpoints

### Task 5: GET /api/training-sessions

**Files:**
- Create: `functions/api/training-sessions.ts`

- [ ] **Step 1: Create the endpoint**

```typescript
// functions/api/training-sessions.ts
import type { BookingEnv } from './_lib/db-types';
import { jsonResponse, optionsResponse } from './_lib/cors';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestGet: PagesFunction<BookingEnv> = async ({ request, env }) => {
  try {
    const url = new URL(request.url);
    const courseFilter = url.searchParams.get('course');

    let query = `
      SELECT
        s.id, s.course_slug, s.course_name, s.start_date, s.end_date,
        s.max_participants, s.location, s.status, s.price,
        s.max_participants - COALESCE(ec.confirmed_count, 0) AS spots_remaining
      FROM training_sessions s
      LEFT JOIN (
        SELECT session_id, COUNT(*) AS confirmed_count
        FROM enrollments WHERE status = 'confirmed'
        GROUP BY session_id
      ) ec ON ec.session_id = s.id
      WHERE s.status IN ('open', 'full')
        AND s.end_date >= date('now')
    `;
    const params: string[] = [];

    if (courseFilter) {
      query += ' AND s.course_slug = ?';
      params.push(courseFilter);
    }
    query += ' ORDER BY s.start_date ASC';

    const result = await env.PRICING_DB.prepare(query).bind(...params).all();

    const sessions = (result.results || []).map((row: any) => ({
      id: row.id,
      courseSlug: row.course_slug,
      courseName: row.course_name,
      startDate: row.start_date,
      endDate: row.end_date,
      maxParticipants: row.max_participants,
      location: row.location,
      status: row.status,
      price: row.price,
      spotsRemaining: Math.max(0, row.spots_remaining),
    }));

    return jsonResponse({ sessions });
  } catch (err) {
    console.error('Error fetching training sessions:', err);
    return jsonResponse({ error: 'Internal Server Error' }, 500);
  }
};
```

- [ ] **Step 2: Test locally**

Run: `cd /home/falk/cloud-evolvers-train && wrangler pages dev dist --local --d1=PRICING_DB`

Then in another terminal: `curl http://localhost:8788/api/training-sessions`

Expected: JSON with the two seeded sessions, 15 spots remaining each.

- [ ] **Step 3: Commit**

```bash
git add functions/api/training-sessions.ts
git commit -m "feat: add GET /api/training-sessions endpoint with capacity tracking"
```

---

### Task 6: GET /api/training-sessions/[id]

**Files:**
- Create: `functions/api/training-sessions/[id].ts`

- [ ] **Step 1: Create the endpoint**

```typescript
// functions/api/training-sessions/[id].ts
import type { BookingEnv } from '../_lib/db-types';
import { jsonResponse, optionsResponse } from '../_lib/cors';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestGet: PagesFunction<BookingEnv> = async ({ params, env }) => {
  try {
    const sessionId = params.id as string;

    const row: any = await env.PRICING_DB.prepare(`
      SELECT
        s.*,
        s.max_participants - COALESCE(ec.confirmed_count, 0) AS spots_remaining
      FROM training_sessions s
      LEFT JOIN (
        SELECT session_id, COUNT(*) AS confirmed_count
        FROM enrollments WHERE status = 'confirmed'
        GROUP BY session_id
      ) ec ON ec.session_id = s.id
      WHERE s.id = ?
    `).bind(sessionId).first();

    if (!row) {
      return jsonResponse({ error: 'Session not found' }, 404);
    }

    return jsonResponse({
      session: {
        id: row.id,
        courseSlug: row.course_slug,
        courseName: row.course_name,
        startDate: row.start_date,
        endDate: row.end_date,
        maxParticipants: row.max_participants,
        location: row.location,
        status: row.status,
        price: row.price,
        spotsRemaining: Math.max(0, row.spots_remaining),
      },
    });
  } catch (err) {
    console.error('Error fetching session:', err);
    return jsonResponse({ error: 'Internal Server Error' }, 500);
  }
};
```

- [ ] **Step 2: Commit**

```bash
git add functions/api/training-sessions/
git commit -m "feat: add GET /api/training-sessions/[id] endpoint"
```

---

### Task 7: POST /api/enrollments

**Files:**
- Create: `functions/api/enrollments.ts`

- [ ] **Step 1: Create the enrollment endpoint**

```typescript
// functions/api/enrollments.ts
import type { BookingEnv } from './_lib/db-types';
import { jsonResponse, optionsResponse } from './_lib/cors';
import {
  sendEmail,
  enrollmentAdminEmailHtml,
  enrollmentConfirmationEmailHtml,
} from './_lib/email';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestPost: PagesFunction<BookingEnv> = async ({ request, env }) => {
  try {
    // Validate API key (same pattern as submit-consultation.ts)
    const apiKey = request.headers.get('x-api-key');
    if (!apiKey || apiKey !== env.FORM_API_KEY) {
      return jsonResponse({ error: 'Unauthorized', details: 'Invalid API key' }, 401);
    }

    const body = await request.json() as {
      sessionId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      company?: string;
      dietaryRequirements?: string;
      notes?: string;
    };

    // Validate required fields
    if (!body.sessionId || !body.firstName || !body.lastName || !body.email) {
      return jsonResponse({ error: 'Missing required fields: sessionId, firstName, lastName, email' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return jsonResponse({ error: 'Invalid email format' }, 400);
    }

    // Verify session exists and is open
    const session: any = await env.PRICING_DB.prepare(
      'SELECT * FROM training_sessions WHERE id = ? AND status IN (\'open\', \'full\')'
    ).bind(body.sessionId).first();

    if (!session) {
      return jsonResponse({ error: 'Session not found or not available' }, 404);
    }

    // Upsert contact (create or update on email match)
    const now = new Date().toISOString();
    const contactId = crypto.randomUUID();
    const email = body.email.toLowerCase().trim();

    await env.PRICING_DB.prepare(`
      INSERT INTO contacts (id, first_name, last_name, email, phone, company, source, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, 'website_booking', ?, ?)
      ON CONFLICT(email) DO UPDATE SET
        first_name = excluded.first_name,
        last_name = excluded.last_name,
        phone = COALESCE(excluded.phone, contacts.phone),
        company = COALESCE(excluded.company, contacts.company),
        updated_at = excluded.updated_at
    `).bind(contactId, body.firstName.trim(), body.lastName.trim(), email, body.phone || null, body.company || null, now, now).run();

    // Get the actual contact ID (might be existing)
    const contact: any = await env.PRICING_DB.prepare(
      'SELECT id FROM contacts WHERE email = ?'
    ).bind(email).first();

    if (!contact) {
      return jsonResponse({ error: 'Failed to create contact' }, 500);
    }

    // Atomic enrollment insert with capacity check
    const enrollmentId = crypto.randomUUID();
    try {
      await env.PRICING_DB.prepare(`
        INSERT INTO enrollments (id, contact_id, session_id, status, dietary_requirements, notes, created_at, updated_at)
        VALUES (?, ?, ?,
          CASE WHEN (SELECT COUNT(*) FROM enrollments WHERE session_id = ? AND status = 'confirmed') < ?
          THEN 'confirmed' ELSE 'waitlisted' END,
          ?, ?, ?, ?)
      `).bind(
        enrollmentId, contact.id, body.sessionId,
        body.sessionId, session.max_participants,
        body.dietaryRequirements || null, body.notes || null, now, now
      ).run();
    } catch (err: any) {
      if (err.message?.includes('UNIQUE constraint failed')) {
        return jsonResponse({ error: 'Already enrolled in this session' }, 409);
      }
      throw err;
    }

    // Get the enrollment status
    const enrollment: any = await env.PRICING_DB.prepare(
      'SELECT id, status FROM enrollments WHERE id = ?'
    ).bind(enrollmentId).first();

    // Update session status to "full" if needed
    const confirmedCount: any = await env.PRICING_DB.prepare(
      'SELECT COUNT(*) as cnt FROM enrollments WHERE session_id = ? AND status = \'confirmed\''
    ).bind(body.sessionId).first();

    if (confirmedCount && confirmedCount.cnt >= session.max_participants && session.status !== 'full') {
      await env.PRICING_DB.prepare(
        'UPDATE training_sessions SET status = \'full\', updated_at = ? WHERE id = ?'
      ).bind(now, body.sessionId).run();
    }

    // Send emails (best-effort)
    const dateStr = `${session.start_date} — ${session.end_date}`;
    let emailSent = false;

    try {
      const [adminSent, confirmSent] = await Promise.all([
        sendEmail(env, {
          to: ['yair@cloudevolvers.com', 'training@cloudevolvers.com'],
          subject: `New enrollment: ${body.firstName} ${body.lastName} — ${session.course_name} (${dateStr})`,
          htmlBody: enrollmentAdminEmailHtml({
            name: `${body.firstName} ${body.lastName}`,
            email,
            phone: body.phone,
            company: body.company,
            courseName: session.course_name,
            dates: dateStr,
            location: session.location,
            dietary: body.dietaryRequirements,
            status: enrollment.status,
          }),
        }),
        sendEmail(env, {
          to: [email],
          subject: enrollment.status === 'waitlisted'
            ? `Waitlisted: ${session.course_name}`
            : `You're registered for ${session.course_name}!`,
          htmlBody: enrollmentConfirmationEmailHtml({
            firstName: body.firstName,
            courseName: session.course_name,
            dates: dateStr,
            location: session.location,
            status: enrollment.status,
          }),
          replyTo: { address: 'yair@cloudevolvers.com', name: 'Yair Knijn' },
        }),
      ]);
      emailSent = adminSent && confirmSent;
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr);
    }

    return jsonResponse({
      enrollment: { id: enrollment.id, status: enrollment.status },
      contact: { id: contact.id },
      emailSent,
    }, 201);
  } catch (err) {
    console.error('Enrollment error:', err);
    return jsonResponse({ error: 'Internal Server Error' }, 500);
  }
};
```

- [ ] **Step 2: Test locally**

Run: `curl -X POST http://localhost:8788/api/enrollments -H 'Content-Type: application/json' -d '{"sessionId":"sess-az104-sep2026","firstName":"Test","lastName":"User","email":"test@example.com"}'`

Expected: 201 with `{ enrollment: { id, status: "confirmed" }, contact: { id }, emailSent: false }` (emailSent false because no Graph creds locally).

- [ ] **Step 3: Commit**

```bash
git add functions/api/enrollments.ts
git commit -m "feat: add POST /api/enrollments with atomic capacity check and email notifications"
```

---

## Chunk 3: Admin API Endpoints

### Task 8: Admin Training Sessions API

**Files:**
- Create: `functions/api/admin/training-sessions.ts`
- Create: `functions/api/admin/training-sessions/[id].ts`

- [ ] **Step 1: Create GET/POST admin sessions endpoint**

```typescript
// functions/api/admin/training-sessions.ts
import type { BookingEnv } from '../_lib/db-types';
import { jsonResponse, optionsResponse } from '../_lib/cors';
import { authenticateAdmin } from '../_lib/auth';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestGet: PagesFunction<BookingEnv> = async ({ request, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse({ error: 'Unauthorized', details: auth.error }, 401);

  const result = await env.PRICING_DB.prepare(`
    SELECT s.*,
      COALESCE(ec.confirmed_count, 0) AS confirmed_count,
      COALESCE(ew.waitlisted_count, 0) AS waitlisted_count
    FROM training_sessions s
    LEFT JOIN (SELECT session_id, COUNT(*) AS confirmed_count FROM enrollments WHERE status = 'confirmed' GROUP BY session_id) ec ON ec.session_id = s.id
    LEFT JOIN (SELECT session_id, COUNT(*) AS waitlisted_count FROM enrollments WHERE status = 'waitlisted' GROUP BY session_id) ew ON ew.session_id = s.id
    ORDER BY s.start_date DESC
  `).all();

  return jsonResponse({ sessions: result.results });
};

export const onRequestPost: PagesFunction<BookingEnv> = async ({ request, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse({ error: 'Unauthorized', details: auth.error }, 401);

  const body = await request.json() as {
    courseSlug: string;
    courseName: string;
    startDate: string;
    endDate: string;
    maxParticipants?: number;
    location: string;
    price?: number;
  };

  if (!body.courseSlug || !body.courseName || !body.startDate || !body.endDate || !body.location) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  await env.PRICING_DB.prepare(`
    INSERT INTO training_sessions (id, course_slug, course_name, start_date, end_date, max_participants, location, status, price, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'open', ?, ?, ?)
  `).bind(id, body.courseSlug, body.courseName, body.startDate, body.endDate, body.maxParticipants || 15, body.location, body.price || null, now, now).run();

  return jsonResponse({ session: { id } }, 201);
};
```

- [ ] **Step 2: Create PUT admin session by ID endpoint**

```typescript
// functions/api/admin/training-sessions/[id].ts
import type { BookingEnv } from '../../_lib/db-types';
import { jsonResponse, optionsResponse } from '../../_lib/cors';
import { authenticateAdmin } from '../../_lib/auth';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestPut: PagesFunction<BookingEnv> = async ({ request, params, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse({ error: 'Unauthorized', details: auth.error }, 401);

  const sessionId = params.id as string;
  const body = await request.json() as {
    startDate?: string;
    endDate?: string;
    maxParticipants?: number;
    location?: string;
    status?: string;
    price?: number;
  };

  const existing: any = await env.PRICING_DB.prepare(
    'SELECT * FROM training_sessions WHERE id = ?'
  ).bind(sessionId).first();

  if (!existing) return jsonResponse({ error: 'Session not found' }, 404);

  if (body.status && !['open', 'full', 'cancelled'].includes(body.status)) {
    return jsonResponse({ error: 'Invalid status. Must be: open, full, or cancelled' }, 400);
  }

  const now = new Date().toISOString();

  await env.PRICING_DB.prepare(`
    UPDATE training_sessions SET
      start_date = ?, end_date = ?, max_participants = ?,
      location = ?, status = ?, price = ?, updated_at = ?
    WHERE id = ?
  `).bind(
    body.startDate || existing.start_date,
    body.endDate || existing.end_date,
    body.maxParticipants ?? existing.max_participants,
    body.location || existing.location,
    body.status || existing.status,
    body.price !== undefined ? body.price : existing.price,
    now, sessionId
  ).run();

  // Cascade cancel enrollments if session cancelled
  if (body.status === 'cancelled') {
    await env.PRICING_DB.prepare(`
      UPDATE enrollments SET status = 'cancelled', updated_at = ?
      WHERE session_id = ? AND status != 'cancelled'
    `).bind(now, sessionId).run();
  }

  return jsonResponse({ success: true });
};
```

- [ ] **Step 3: Commit**

```bash
git add functions/api/admin/training-sessions.ts functions/api/admin/training-sessions/
git commit -m "feat: add admin training sessions API (GET, POST, PUT with cascade cancel)"
```

---

### Task 9: Admin Enrollments & Contacts API

**Files:**
- Create: `functions/api/admin/enrollments.ts`
- Create: `functions/api/admin/enrollments/[id].ts`
- Create: `functions/api/admin/contacts.ts`

- [ ] **Step 1: Create admin enrollments endpoints**

```typescript
// functions/api/admin/enrollments.ts
import type { BookingEnv } from '../_lib/db-types';
import { jsonResponse, optionsResponse } from '../_lib/cors';
import { authenticateAdmin } from '../_lib/auth';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestGet: PagesFunction<BookingEnv> = async ({ request, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse({ error: 'Unauthorized', details: auth.error }, 401);

  const url = new URL(request.url);
  const sessionFilter = url.searchParams.get('session');

  let query = `
    SELECT e.*, c.first_name, c.last_name, c.email, c.phone, c.company,
           s.course_name, s.start_date, s.end_date, s.location
    FROM enrollments e
    JOIN contacts c ON c.id = e.contact_id
    JOIN training_sessions s ON s.id = e.session_id
  `;
  const params: string[] = [];

  if (sessionFilter) {
    query += ' WHERE e.session_id = ?';
    params.push(sessionFilter);
  }
  query += ' ORDER BY e.created_at DESC';

  const result = await env.PRICING_DB.prepare(query).bind(...params).all();
  return jsonResponse({ enrollments: result.results });
};
```

- [ ] **Step 2: Create admin enrollment PATCH endpoint**

```typescript
// functions/api/admin/enrollments/[id].ts
import type { BookingEnv } from '../../_lib/db-types';
import { jsonResponse, optionsResponse } from '../../_lib/cors';
import { authenticateAdmin } from '../../_lib/auth';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestPatch: PagesFunction<BookingEnv> = async ({ request, params, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse({ error: 'Unauthorized', details: auth.error }, 401);

  const enrollmentId = params.id as string;
  const body = await request.json() as { status: string };

  if (!body.status || !['confirmed', 'waitlisted', 'cancelled'].includes(body.status)) {
    return jsonResponse({ error: 'Invalid status. Must be: confirmed, waitlisted, or cancelled' }, 400);
  }

  const now = new Date().toISOString();
  const result = await env.PRICING_DB.prepare(
    'UPDATE enrollments SET status = ?, updated_at = ? WHERE id = ?'
  ).bind(body.status, now, enrollmentId).run();

  if (!result.meta.changes) return jsonResponse({ error: 'Enrollment not found' }, 404);

  return jsonResponse({ success: true });
};
```

- [ ] **Step 3: Create admin contacts endpoint**

```typescript
// functions/api/admin/contacts.ts
import type { BookingEnv } from '../_lib/db-types';
import { jsonResponse, optionsResponse } from '../_lib/cors';
import { authenticateAdmin } from '../_lib/auth';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

export const onRequestGet: PagesFunction<BookingEnv> = async ({ request, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse({ error: 'Unauthorized', details: auth.error }, 401);

  const result = await env.PRICING_DB.prepare(`
    SELECT c.*, COALESCE(ec.enrollment_count, 0) AS enrollment_count
    FROM contacts c
    LEFT JOIN (SELECT contact_id, COUNT(*) AS enrollment_count FROM enrollments GROUP BY contact_id) ec ON ec.contact_id = c.id
    ORDER BY c.created_at DESC
  `).all();

  return jsonResponse({ contacts: result.results });
};
```

- [ ] **Step 4: Commit**

```bash
git add functions/api/admin/enrollments.ts functions/api/admin/enrollments/ functions/api/admin/contacts.ts
git commit -m "feat: add admin enrollments (GET, PATCH) and contacts (GET) API endpoints"
```

---

## Chunk 4: Frontend — Content & Booking Enhancements

### Task 10: "Why Cloud Evolvers" Section Component

**Files:**
- Create: `src/components/training/WhyCloudEvolvers.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/training/WhyCloudEvolvers.tsx
import { Flask, ForkKnife, UsersThree, Trophy } from '@phosphor-icons/react';

const differentiators = [
  {
    icon: Flask,
    title: 'Real-World Labs',
    description: 'Learn by doing with extensive hands-on labs built from real production scenarios',
  },
  {
    icon: ForkKnife,
    title: 'Lunch Included',
    description: 'Focus on learning — lunch and refreshments are on us',
  },
  {
    icon: UsersThree,
    title: 'Personal Attention',
    description: 'Maximum 15 participants per session for personalized guidance',
  },
  {
    icon: Trophy,
    title: 'Expert Instructor',
    description: 'Led by Yaïr Knijn, Principal Cloud Architect with hands-on enterprise experience',
  },
];

export default function WhyCloudEvolvers() {
  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Why Train With Us?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We believe the best way to learn cloud technology is by doing it — not watching slides.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.map((item) => (
          <div
            key={item.title}
            className="border border-border rounded-xl p-6 text-center hover:border-foreground/20 transition-colors"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" weight="fill" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

Uses Phosphor Icons to match the existing codebase convention.

- [ ] **Step 2: Commit**

```bash
git add src/components/training/WhyCloudEvolvers.tsx
git commit -m "feat: add WhyCloudEvolvers differentiator section component"
```

---

### Task 11: Training Badges Component

**Files:**
- Create: `src/components/training/TrainingBadges.tsx`

- [ ] **Step 1: Create the badges component**

```tsx
// src/components/training/TrainingBadges.tsx
import { Flask, ForkKnife, UsersThree } from '@phosphor-icons/react';

const badges = [
  { icon: Flask, label: 'Hands-on Labs', color: 'text-blue-600 dark:text-blue-400' },
  { icon: ForkKnife, label: 'Lunch Included', color: 'text-emerald-600 dark:text-emerald-400' },
  { icon: UsersThree, label: 'Max 15 Participants', color: 'text-purple-600 dark:text-purple-400' },
];

export default function TrainingBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground"
        >
          <badge.icon className={`h-4 w-4 ${badge.color}`} weight="fill" />
          {badge.label}
        </span>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/training/TrainingBadges.tsx
git commit -m "feat: add TrainingBadges component (labs, lunch, personal attention)"
```

---

### Task 12: Session Picker & Training Sessions Hook

**Files:**
- Create: `src/hooks/use-training-sessions.ts`
- Create: `src/components/training/SessionPicker.tsx`

- [ ] **Step 1: Create the hook**

```typescript
// src/hooks/use-training-sessions.ts
import { useState, useEffect } from 'react';

export interface TrainingSession {
  id: string;
  courseSlug: string;
  courseName: string;
  startDate: string;
  endDate: string;
  maxParticipants: number;
  location: string;
  status: string;
  price: number | null;
  spotsRemaining: number;
}

export function useTrainingSessions(courseSlug?: string) {
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseSlug) {
      setSessions([]);
      setLoading(false);
      return;
    }

    const fetchSessions = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/training-sessions?course=${encodeURIComponent(courseSlug)}`);
        if (!res.ok) throw new Error('Failed to fetch sessions');
        const data = await res.json();
        setSessions(data.sessions || []);
      } catch (err) {
        console.error('Error fetching sessions:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setSessions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [courseSlug]);

  const refetch = () => {
    if (!courseSlug) return;
    setLoading(true);
    fetch(`/api/training-sessions?course=${encodeURIComponent(courseSlug)}`)
      .then(res => res.json())
      .then(data => setSessions(data.sessions || []))
      .catch(() => setSessions([]))
      .finally(() => setLoading(false));
  };

  return { sessions, loading, error, refetch };
}
```

- [ ] **Step 2: Create the SessionPicker component**

```tsx
// src/components/training/SessionPicker.tsx
import { Calendar, MapPin, Users } from '@phosphor-icons/react';
import type { TrainingSession } from '@/hooks/use-training-sessions';
import { Link } from 'react-router-dom';

interface SessionPickerProps {
  sessions: TrainingSession[];
  loading: boolean;
  selectedSessionId: string | null;
  onSelect: (sessionId: string) => void;
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + 'T00:00:00');
  const e = new Date(end + 'T00:00:00');
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return `${s.toLocaleDateString('en-US', opts)} — ${e.toLocaleDateString('en-US', { ...opts, year: 'numeric' })}`;
}

export default function SessionPicker({ sessions, loading, selectedSessionId, onSelect }: SessionPickerProps) {
  if (loading) {
    return (
      <div className="animate-pulse space-y-3">
        <div className="h-20 bg-muted rounded-xl" />
        <div className="h-20 bg-muted rounded-xl" />
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
        <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-muted-foreground font-medium mb-2">No upcoming dates scheduled</p>
        <p className="text-sm text-muted-foreground mb-4">
          Contact us to request available training dates.
        </p>
        <Link
          to="/contact"
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          Get in touch &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Calendar className="h-4 w-4 text-foreground/70" weight="regular" />
        Select a Training Date
        <span className="text-red-500">*</span>
      </label>
      {sessions.map((session) => {
        const isSelected = selectedSessionId === session.id;
        const isFull = session.spotsRemaining <= 0;
        return (
          <button
            key={session.id}
            type="button"
            onClick={() => onSelect(session.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
              isSelected
                ? 'border-emerald-500 bg-emerald-500/5 ring-2 ring-emerald-500/20'
                : 'border-border hover:border-foreground/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">
                  {formatDateRange(session.startDate, session.endDate)}
                </p>
                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {session.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {isFull ? 'Full' : `${session.spotsRemaining}/${session.maxParticipants} spots left`}
                  </span>
                </div>
              </div>
              {isSelected && (
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            {isFull && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                Session full — selecting this will add you to the waitlist
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/hooks/use-training-sessions.ts src/components/training/SessionPicker.tsx
git commit -m "feat: add useTrainingSessions hook and SessionPicker component"
```

---

### Task 13: Integrate WhyCloudEvolvers into Training Overview Page

**Files:**
- Modify: `src/pages/training/TrainingOverviewPage.tsx`

- [ ] **Step 1: Add WhyCloudEvolvers section after the header, before the filters**

Import at top: `import WhyCloudEvolvers from '@/components/training/WhyCloudEvolvers';`

Insert `<WhyCloudEvolvers />` after the closing `</div>` of the header block (the `<div className="mb-10">` containing the `<h1>` and subtitle) and before the `{/* Filters */}` comment.

- [ ] **Step 2: Verify it renders**

Run: `bun dev` and navigate to `/training`. The "Why Train With Us?" section should appear between the page title and the filter bar.

- [ ] **Step 3: Commit**

```bash
git add src/pages/training/TrainingOverviewPage.tsx
git commit -m "feat: add WhyCloudEvolvers section to training overview page"
```

---

### Task 14: Integrate TrainingBadges into Training Detail Page

**Files:**
- Modify: `src/pages/training/TrainingDetailPage.tsx`

- [ ] **Step 1: Add badges and session data**

Import at top:
```tsx
import TrainingBadges from '@/components/training/TrainingBadges';
import { useTrainingSessions } from '@/hooks/use-training-sessions';
```

Inside the component, after the `useTranslations()` hook, add:
```tsx
const { sessions, loading: sessionsLoading } = useTrainingSessions(slug);
```

Insert `<TrainingBadges />` just after the closing `</div>` of the `<div ref={headerRef}>` block and before the `<TrainingDetailContent ...>` component.

Pass `sessions` and `sessionsLoading` to the `TrainingBookingForm`:
```tsx
<TrainingBookingForm
  training={training}
  priceInfo={priceInfo}
  isPromotionActive={isPromotionActive}
  language={language}
  sessions={sessions}
  sessionsLoading={sessionsLoading}
/>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/training/TrainingDetailPage.tsx
git commit -m "feat: add training badges and session data to training detail page"
```

---

### Task 15: Enhance TrainingBookingForm with SessionPicker

**Files:**
- Modify: `src/components/training/TrainingBookingForm.tsx`

- [ ] **Step 1: Update props interface**

Add to `TrainingBookingFormProps`:
```tsx
sessions?: TrainingSession[];
sessionsLoading?: boolean;
```

Add import:
```tsx
import SessionPicker from '@/components/training/SessionPicker';
import type { TrainingSession } from '@/hooks/use-training-sessions';
```

- [ ] **Step 2: Add session selection state**

In the formData state, replace `preferredDate: ''` with `selectedSessionId: '' as string`.

- [ ] **Step 3: Replace the preferred date field with SessionPicker**

Replace the "Preferred Date" field block (the `<div className="space-y-2">` containing the Calendar icon and `t.preferredDate` label inside the expandable section) with:

```tsx
<SessionPicker
  sessions={sessions || []}
  loading={sessionsLoading || false}
  selectedSessionId={formData.selectedSessionId}
  onSelect={(id) => setFormData(prev => ({ ...prev, selectedSessionId: id }))}
/>
```

Move the SessionPicker ABOVE the expandable section (before the "Show More" button) so it's always visible.

- [ ] **Step 4: Update form submission to use /api/enrollments**

Replace the handleSubmit logic. If a session is selected, POST to `/api/enrollments`. If no sessions exist, fall back to the original `/api/submit-consultation` behavior:

```tsx
const hasSession = formData.selectedSessionId && sessions && sessions.length > 0;

if (hasSession) {
  // Enrollment API for scheduled sessions
  const response = await fetch('/api/enrollments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_FORM_API_KEY,
    },
    body: JSON.stringify({
      sessionId: formData.selectedSessionId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      dietaryRequirements: formData.dietary || undefined,
      notes: formData.notes || undefined,
    }),
  });
  // ... handle response (201 = success)
} else {
  // Fallback to consultation API for courses without scheduled dates
  const response = await fetch('/api/submit-consultation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_FORM_API_KEY,
    },
    body: JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone || '',
      training: training?.title || 'General Inquiry',
      message: formData.notes || 'Training inquiry from detail page',
      language,
    }),
  });
  // ... handle response (200 = success)
}
```

Update validation: require `selectedSessionId` when sessions are available; when no sessions exist, name + email is sufficient.

- [ ] **Step 5: Verify**

Run: `bun dev`, navigate to `/training/azure-administrator`. The booking form should show the September session date card. Selecting it and filling the form should POST to `/api/enrollments`.

- [ ] **Step 6: Commit**

```bash
git add src/components/training/TrainingBookingForm.tsx
git commit -m "feat: enhance booking form with SessionPicker and /api/enrollments integration"
```

---

## Chunk 5: Admin Dashboard & Routing

### Task 16: BookingDashboard Admin Component

**Files:**
- Create: `src/components/admin/BookingDashboard.tsx`

- [ ] **Step 1: Create the admin booking dashboard**

Build a tabbed dashboard matching the existing `PricingDashboard` style with three tabs:

**Sessions tab**: Table showing all training sessions with columns: Course Name, Dates, Location, Enrolled/Max, Status. A "Create Session" form at the top.

**Enrollments tab**: Table showing all enrollments with columns: Name, Email, Company, Course, Dates, Status. Filter dropdown by session. Status change buttons (confirm/cancel/waitlist).

**Contacts tab**: Table showing all contacts with columns: Name, Email, Company, Source, Enrollments, Created.

Use the same auth pattern as PricingDashboard (api key + admin password stored in state, passed as headers). Use the same UI patterns (shadcn Tabs, Card, Badge, Button, Input components). Use the same Phosphor Icons style.

The component should use `fetch()` to call the admin API endpoints with the auth headers.

This is a large component — implement the sessions tab first, then enrollments, then contacts. Each tab is a focused section. Keep under 400 lines by extracting tab content into local components within the same file.

- [ ] **Step 2: Commit**

```bash
git add src/components/admin/BookingDashboard.tsx
git commit -m "feat: add BookingDashboard admin component with sessions, enrollments, contacts tabs"
```

---

### Task 17: Add Admin Route

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add the booking admin route**

Import: `import BookingDashboard from '@/components/admin/BookingDashboard';`

Add route after the existing admin routes (after line 75):
```tsx
<Route path="/admin/bookings" element={<BookingDashboard />} />
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add /admin/bookings route"
```

---

## Chunk 6: Build, Deploy & Verify

### Task 18: Build & Local Test

- [ ] **Step 1: Run TypeScript check**

Run: `cd /home/falk/cloud-evolvers-train && npx tsc --noEmit`

Expected: No errors. Fix any type errors found.

- [ ] **Step 2: Run build**

Run: `cd /home/falk/cloud-evolvers-train && bun run build`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Test locally with wrangler**

Run: `cd /home/falk/cloud-evolvers-train && wrangler pages dev dist --local`

Test:
1. Visit `/training` — WhyCloudEvolvers section visible
2. Visit `/training/azure-administrator` — Badges visible, session picker shows September date
3. Visit `/admin/bookings` — Dashboard loads
4. `curl /api/training-sessions` — Returns 2 sessions
5. Submit a test enrollment through the form

- [ ] **Step 4: Commit any fixes**

---

### Task 19: Apply D1 Migrations to Remote

- [ ] **Step 1: Apply migration to remote D1**

Run: `wrangler d1 execute cloud-evolvers-pricing --file=migrations/0001-booking-tables.sql --remote`

Expected: Tables created on remote D1.

- [ ] **Step 2: Apply seed data to remote D1**

Run: `wrangler d1 execute cloud-evolvers-pricing --file=migrations/0002-seed-sessions.sql --remote`

Expected: 2 session rows inserted.

- [ ] **Step 3: Deploy to test environment**

Push the feature branch and let Cloudflare Pages build the preview deployment. Verify at test.cloudevolvers.com.

---

### Task 20: Final Verification on Test Environment

- [ ] **Step 1: Verify content changes**
- `/training` page shows "Why Train With Us?" section
- Training detail pages show badges (labs, lunch, personal attention)

- [ ] **Step 2: Verify booking flow**
- `/training/azure-administrator` shows September 15-17 session with 15 spots
- `/training/azure-solutions-architect` shows September 22-25 session with 15 spots
- Can complete a test enrollment, receives confirmation

- [ ] **Step 3: Verify admin dashboard**
- `/admin/bookings` — sessions tab shows both sessions
- Enrollments tab shows test enrollment
- Contacts tab shows test contact

- [ ] **Step 4: Verify API endpoints**
- `GET /api/training-sessions` returns both sessions
- `GET /api/training-sessions?course=azure-administrator` returns 1 session
- Admin endpoints work with correct auth headers
