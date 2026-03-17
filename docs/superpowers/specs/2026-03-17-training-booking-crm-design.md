# Training Booking System & CRM — Design Spec

## Problem

Cloud Evolvers offers professional Azure training but lacks:
- A way for people to browse and sign up for scheduled training sessions
- Messaging that differentiates Cloud Evolvers from competitors (Vijfhart, etc.)
- A CRM to track leads and enrollments
- Capacity management for sessions (max 15 participants)

## Solution

Build a booking and CRM system on Cloudflare (D1 + Workers), enhance training pages with differentiator messaging, and structure data for future Twenty CRM sync.

## Database

Uses the existing D1 database (`cloud-evolvers-pricing`, binding `PRICING_DB`). New tables coexist with `training_pricing` and `service_pricing`.

## Data Model (D1)

### contacts

Mirrors Twenty's contact schema for future sync.

| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, UUID |
| first_name | TEXT | NOT NULL |
| last_name | TEXT | NOT NULL |
| email | TEXT | NOT NULL, UNIQUE |
| phone | TEXT | |
| company | TEXT | |
| source | TEXT | Default "website_booking". Values: "website_booking", "admin_manual", "crm_import" |
| created_at | TEXT | ISO 8601, auto |
| updated_at | TEXT | ISO 8601, auto |

### training_sessions

| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, UUID |
| course_slug | TEXT | NOT NULL, maps to JSON course files. Must match an existing slug from training-json/ |
| course_name | TEXT | NOT NULL, stored at creation time for admin display without frontend resolution |
| start_date | TEXT | NOT NULL, ISO date |
| end_date | TEXT | NOT NULL, ISO date |
| max_participants | INTEGER | NOT NULL, default 15 |
| location | TEXT | NOT NULL |
| status | TEXT | NOT NULL, "open" / "full" / "cancelled" |
| price | INTEGER | Optional, price in EUR cents. Falls back to course JSON price if NULL |
| created_at | TEXT | ISO 8601, auto |
| updated_at | TEXT | ISO 8601, auto |

### enrollments

| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, UUID |
| contact_id | TEXT | NOT NULL, FK contacts(id) |
| session_id | TEXT | NOT NULL, FK training_sessions(id) |
| status | TEXT | NOT NULL, "confirmed" / "waitlisted" / "cancelled" |
| dietary_requirements | TEXT | |
| notes | TEXT | |
| created_at | TEXT | ISO 8601, auto |
| updated_at | TEXT | ISO 8601, auto |

**Constraints**: `UNIQUE(contact_id, session_id)` on enrollments to prevent duplicate signups.

**Capacity logic**: Uses an atomic INSERT to prevent race conditions:
```sql
INSERT INTO enrollments (id, contact_id, session_id, status, ...)
VALUES (?, ?, ?,
  CASE WHEN (SELECT COUNT(*) FROM enrollments WHERE session_id = ? AND status = 'confirmed') < (SELECT max_participants FROM training_sessions WHERE id = ?)
  THEN 'confirmed' ELSE 'waitlisted' END,
  ...);
```
After insert, if the confirmed count now equals max_participants, update session status to "full".

## API Endpoints (Cloudflare Workers)

All in `functions/api/`.

### Public

**GET /api/training-sessions**
- Returns open sessions with spots remaining
- Response: `{ sessions: [{ id, courseSlug, courseName, startDate, endDate, location, spotsRemaining, maxParticipants, status }] }`
- Optional query param: `?course=az-104` to filter by course

**GET /api/training-sessions/[id]**
- Single session with full details and spots remaining

**POST /api/enrollments**
- Body: `{ sessionId, firstName, lastName, email, phone?, company?, dietaryRequirements?, notes? }`
- Creates or updates contact (upsert on email)
- Creates enrollment (confirmed if spots available, waitlisted if full)
- Sends confirmation email to attendee via MS Graph
- Sends notification email to admin (yair@cloudevolvers.com)
- **Email is best-effort**: enrollment persists even if email sending fails. Failure is logged. Response includes `emailSent: boolean` flag.
- Returns: `{ enrollment: { id, status }, contact: { id }, emailSent: boolean }`

### Admin (x-api-key + x-admin-password protected, matching existing admin pattern)

**GET /api/admin/training-sessions**
- All sessions with enrollment counts

**POST /api/admin/training-sessions**
- Create a new session
- Body: `{ courseSlug, courseName, startDate, endDate, maxParticipants?, location, price? }`

**PUT /api/admin/training-sessions/[id]**
- Update an existing session
- Body: `{ startDate?, endDate?, maxParticipants?, location?, status?, price? }`
- When status set to "cancelled", all non-cancelled enrollments for that session get status "cancelled"

**GET /api/admin/enrollments**
- All enrollments with contact info, filterable by session

**PATCH /api/admin/enrollments/[id]**
- Update enrollment status (e.g., promote waitlisted to confirmed, or cancel)
- Body: `{ status }`

**GET /api/admin/contacts**
- All contacts

## Email Notifications

Reuses existing MS Graph integration (EMAIL_CLIENT_ID, EMAIL_TENANT_ID, EMAIL_SENDER_ADDRESS).

**Admin notification** (to yair@cloudevolvers.com):
- Subject: "New enrollment: [Name] — [Course Name] ([Dates])"
- Body: Contact details, company, dietary requirements

**Attendee confirmation**:
- Subject: "You're registered for [Course Name]!"
- Body: Dates, location, what to expect, lunch is included, contact info for questions

## Content Changes

### "Why Train With Us?" section (training overview page)

A dedicated section with 4 differentiators:

1. **Real-World Labs** — "Learn by doing with extensive hands-on labs built from real production scenarios"
2. **Lunch Included** — "Focus on learning — lunch and refreshments are on us"
3. **Personal Attention** — "Maximum 15 participants per session for personalized guidance"
4. **Expert Instructor** — Yair Knijn, Principal Cloud Architect & Engineer

### Training detail page enhancements

- Highlight badges near the top: labs, lunch, personal attention
- Available dates section showing scheduled sessions with spots remaining
- Enhanced booking form with session date picker

## Enhanced Booking Form

Modifications to existing `TrainingBookingForm`:

- Date selection: radio buttons or cards showing available sessions with "X/15 spots left"
- When no sessions exist: "No upcoming dates — contact us for availability" with link to contact form
- On submit: POST to `/api/enrollments`
- Success state: confirmation message with session details
- Dietary requirements field retained (relevant with lunch included)
- Removes generic "preferred date" free-text field, replaces with actual session selection

## Seed Data

Two sessions for September 2026:

| Course | Slug | Start | End | Days | Location |
|--------|------|-------|-----|------|----------|
| AZ-104: Microsoft Azure Administrator | azure-administrator | 2026-09-15 | 2026-09-17 | 3 | Amsterdam |
| AZ-305: Designing Azure Infrastructure Solutions | azure-solutions-architect | 2026-09-22 | 2026-09-25 | 4 | Amsterdam |

Max participants: 15 each, status: "open".

## Admin Dashboard Extension

Extend existing `/admin` with three new views:

**Sessions tab**: Table of all sessions with course name, dates, enrollment count, status. Button to create new session.

**Enrollments tab**: Table of all enrollments with contact name, email, company, course, session dates, enrollment status. Filter by session.

**Contacts tab**: Table of all contacts with name, email, company, source, enrollment count, created date.

## Migration & Deployment

- D1 migration SQL script for creating tables
- Seed script for September sessions
- Update `wrangler.toml` if needed for new D1 bindings
- Deploy to test environment first via feature branch

## Future: Twenty CRM Sync

The contacts table schema aligns with Twenty's People object:
- first_name, last_name, email, phone, company map directly
- Enrollments and sessions are Cloud Evolvers-specific, stay in D1
- Future sync: a scheduled Worker that pushes new/updated contacts to Twenty's API

## Out of Scope

- Payment processing
- Calendar integration (Google Calendar, Outlook)
- Automated waitlist promotion (manual for now)
- Multi-instructor support
- Dutch translations for new content (follow-up — new UI strings will have EN only initially, NL placeholders added)
- Rate limiting / CAPTCHA on public enrollment endpoint (consider Cloudflare Turnstile in follow-up)
