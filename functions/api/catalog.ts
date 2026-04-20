import type { BookingEnv } from './_lib/db-types';
import { jsonResponse, optionsResponse } from './_lib/cors';
import { getAllTrainings } from '../../src/data/training-json';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

/**
 * Public catalog endpoint — single source of truth for course metadata
 * consumed by ict-trainingen.com and other platforms.
 *
 * Course metadata lives in the JSON files; real prices come from the
 * training_sessions D1 table. A course is either:
 *   - delivery_mode = "open"       → has a scheduled session, price known
 *   - delivery_mode = "incompany"  → no session, price is group-dependent
 *                                    (honest signal, not a fallback number)
 *
 * Retired courses are still returned as long as the retirement date is in
 * the future; the `retired` field tells consumers to badge them "Legacy".
 */
export const onRequestGet: PagesFunction<BookingEnv> = async ({ env }) => {
  try {
    const trainings = getAllTrainings();

    const priceRows = await env.PRICING_DB.prepare(`
      SELECT course_slug, MIN(price) AS min_price
      FROM training_sessions
      WHERE status = 'open' AND end_date >= date('now')
      GROUP BY course_slug
    `).all();

    const priceMap = new Map<string, number>();
    for (const row of priceRows.results || []) {
      priceMap.set(
        (row as { course_slug: string }).course_slug,
        (row as { min_price: number }).min_price,
      );
    }

    const today = new Date().toISOString().slice(0, 10);

    const catalog = trainings
      // Include retired courses until their retirement date passes —
      // last-cohort visibility + SEO longevity on legacy certs like AI-900.
      .filter((t) => !t.retired || t.retired.date >= today)
      .map((t) => {
        const hasOpenSession = priceMap.has(t.slug);
        const price = hasOpenSession ? Math.round(priceMap.get(t.slug)!) : null;

        return {
          slug: t.slug,
          title: t.title,
          subtitle: t.subtitle,
          description: t.description,
          category: t.category,
          subcategory: t.subcategory,
          difficulty: t.difficulty,
          tags: t.tags,
          duration_days: t.duration.days,
          duration_hours: t.duration.hours,
          learningObjectives: t.learningObjectives?.map((o) => o.title) || [],
          prerequisites: t.prerequisites,
          targetAudience: t.targetAudience,
          certification: t.certification?.examCode || null,
          certificationName: t.certification?.name || null,
          featured: t.featured,
          price_cents: price,
          delivery_mode: hasOpenSession ? 'open' : 'incompany',
          retired: t.retired
            ? { date: t.retired.date, successor: t.retired.successor || null }
            : null,
          url: `https://cloudevolvers.com/training/${t.slug}`,
          updatedAt: t.updatedAt,
        };
      });

    return jsonResponse({
      provider: {
        slug: 'cloud-evolvers',
        name: 'Cloud Evolvers',
        website: 'https://cloudevolvers.com',
        description:
          'Praktijkgerichte Azure-trainingen door Microsoft-gecertificeerde trainers.',
      },
      catalog,
      generated_at: new Date().toISOString(),
      count: catalog.length,
    });
  } catch (err) {
    console.error('Error fetching catalog:', err);
    return jsonResponse({ error: 'Internal Server Error' }, 500);
  }
};
