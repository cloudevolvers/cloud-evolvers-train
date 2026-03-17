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
