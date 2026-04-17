import type { BookingEnv } from './_lib/db-types';
import { jsonResponse, optionsResponse } from './_lib/cors';
import { getAllTrainings } from '../../src/data/training-json';

export const onRequestOptions: PagesFunction = async () => optionsResponse();

/**
 * Public catalog endpoint — single source of truth for course metadata
 * consumed by ict-trainingen.com and other platforms.
 *
 * Joins the static catalog (title, description, cert, etc.) with the
 * cheapest upcoming session price from D1.
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

    const priceMap = new Map<string, number>()
    for (const row of priceRows.results || []) {
      priceMap.set((row as { course_slug: string }).course_slug, (row as { min_price: number }).min_price)
    }

    const catalog = trainings
      .filter((t) => !t.retired)
      .map((t) => ({
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
        price_cents: priceMap.has(t.slug) ? Math.round(priceMap.get(t.slug)!) : null,
        url: `https://cloudevolvers.com/training/${t.slug}`,
        updatedAt: t.updatedAt,
      }));

    return jsonResponse({
      provider: {
        slug: 'cloud-evolvers',
        name: 'Cloud Evolvers',
        website: 'https://cloudevolvers.com',
        description: 'Praktijkgerichte Azure-trainingen door Microsoft-gecertificeerde trainers.',
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
