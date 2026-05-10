const DASHBOARD_API_URL =
  import.meta.env.VITE_DASHBOARD_API_URL ||
  'https://dashboard-api-prod.reactor-servers.workers.dev';

const PRODUCT_SLUG = 'cloud-evolvers';

type Metadata = Record<string, string | number | boolean | null | undefined>;

export function trackPortfolioEvent(eventName: string, metadata: Metadata = {}) {
  if (typeof window === 'undefined') return;
  const attribution = getPortfolioAttribution();

  const payload = {
    productSlug: PRODUCT_SLUG,
    eventName,
    source: 'cloud-evolvers-web',
    path: window.location.pathname,
    url: window.location.href,
    referrer: document.referrer || undefined,
    visitorId: attribution.visitorId,
    sessionId: attribution.sessionId,
    occurredAt: Math.floor(Date.now() / 1000),
    metadata,
  };

  void fetch(`${DASHBOARD_API_URL}/api/events/collect`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

export function getPortfolioAttribution() {
  if (typeof window === 'undefined') return {};
  return {
    visitorId: getOrCreateId('cloud-evolvers:visitor-id', localStorage),
    sessionId: getOrCreateId('cloud-evolvers:session-id', sessionStorage),
  };
}

function getOrCreateId(key: string, storage: Storage): string {
  try {
    const existing = storage.getItem(key);
    if (existing) return existing;

    const id = typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : fallbackId();
    storage.setItem(key, id);
    return id;
  } catch {
    return fallbackId();
  }
}

function fallbackId(): string {
  const bytes = new Uint32Array(2);
  if (typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  }
  return `ce-${Date.now().toString(36)}-${Array.from(bytes, (value) => value.toString(36)).join('')}`;
}
