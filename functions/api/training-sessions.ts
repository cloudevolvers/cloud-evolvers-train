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
