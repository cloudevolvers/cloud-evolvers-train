import { useEffect, useState } from 'react';

export interface CatalogItem {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: string;
  subcategory?: string;
  difficulty: string;
  tags?: string[];
  duration_days: number;
  certification?: string | null;
  certificationName?: string | null;
  featured: boolean;
  price_cents?: number | null;
  delivery_mode?: string | null;
  retired?: string | null;
  url: string;
  updatedAt?: string;
}

interface CatalogResponse {
  provider: { slug: string; name: string; website: string; description?: string };
  catalog: CatalogItem[];
}

export function useCatalog() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/catalog');
        if (!res.ok) throw new Error('catalog fetch failed');
        const data = (await res.json()) as CatalogResponse;
        if (!cancelled) setItems(data.catalog.filter((c) => !c.retired));
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'unknown');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { items, loading, error };
}

export function formatPrice(cents: number | null | undefined, lang: 'en' | 'nl' = 'en') {
  if (cents == null) return null;
  const eur = cents / 100;
  const locale = lang === 'nl' ? 'nl-NL' : 'en-IE';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(eur);
}
