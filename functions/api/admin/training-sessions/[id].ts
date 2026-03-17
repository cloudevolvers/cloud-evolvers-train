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

  if (body.status === 'cancelled') {
    await env.PRICING_DB.prepare(`
      UPDATE enrollments SET status = 'cancelled', updated_at = ?
      WHERE session_id = ? AND status != 'cancelled'
    `).bind(now, sessionId).run();
  }

  return jsonResponse({ success: true });
};
