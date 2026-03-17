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
