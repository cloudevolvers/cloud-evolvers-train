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
