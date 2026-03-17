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
