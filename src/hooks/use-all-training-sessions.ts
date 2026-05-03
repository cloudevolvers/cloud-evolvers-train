import { useEffect, useState } from 'react';
import type { TrainingSession } from './use-training-sessions';

export interface CourseLowestPrice {
  priceCents: number;
  startDate: string;
}

export function useAllTrainingSessions() {
  const [byCourse, setByCourse] = useState<Record<string, CourseLowestPrice>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const res = await fetch('/api/training-sessions');
        if (!res.ok) throw new Error('failed');
        const data = (await res.json()) as { sessions?: TrainingSession[] };
        const map: Record<string, CourseLowestPrice> = {};
        for (const s of data.sessions ?? []) {
          if (!s.price || s.price <= 0) continue;
          const existing = map[s.courseSlug];
          if (!existing || s.price < existing.priceCents) {
            map[s.courseSlug] = { priceCents: s.price, startDate: s.startDate };
          }
        }
        if (!cancelled) setByCourse(map);
      } catch {
        if (!cancelled) setByCourse({});
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { byCourse, loading };
}

export function formatLowestPrice(
  cents: number,
  language: 'en' | 'nl' = 'en'
): string {
  const locale = language === 'nl' ? 'nl-NL' : 'en-IE';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
