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
