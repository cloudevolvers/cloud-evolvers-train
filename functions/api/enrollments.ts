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

    if (!body.sessionId || !body.firstName || !body.lastName || !body.email) {
      return jsonResponse({ error: 'Missing required fields: sessionId, firstName, lastName, email' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return jsonResponse({ error: 'Invalid email format' }, 400);
    }

    const session: any = await env.PRICING_DB.prepare(
      "SELECT * FROM training_sessions WHERE id = ? AND status IN ('open', 'full')"
    ).bind(body.sessionId).first();

    if (!session) {
      return jsonResponse({ error: 'Session not found or not available' }, 404);
    }

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

    const contact: any = await env.PRICING_DB.prepare(
      'SELECT id FROM contacts WHERE email = ?'
    ).bind(email).first();

    if (!contact) {
      return jsonResponse({ error: 'Failed to create contact' }, 500);
    }

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

    const enrollment: any = await env.PRICING_DB.prepare(
      'SELECT id, status FROM enrollments WHERE id = ?'
    ).bind(enrollmentId).first();

    const confirmedCount: any = await env.PRICING_DB.prepare(
      "SELECT COUNT(*) as cnt FROM enrollments WHERE session_id = ? AND status = 'confirmed'"
    ).bind(body.sessionId).first();

    if (confirmedCount && confirmedCount.cnt >= session.max_participants && session.status !== 'full') {
      await env.PRICING_DB.prepare(
        "UPDATE training_sessions SET status = 'full', updated_at = ? WHERE id = ?"
      ).bind(now, body.sessionId).run();
    }

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
