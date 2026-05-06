interface CloudEvolversMarkProps {
  className?: string;
  size?: number;
}

/**
 * Cloud Evolvers brand mark. Renders the polished raster mark
 * (purple cloud, black mountain with snowcap, gold flag at the peak).
 * Wordmark is rendered separately by the surrounding component.
 */
export function CloudEvolversMark({ className, size = 32 }: CloudEvolversMarkProps) {
  return (
    <img
      src="/cloudevolvers-logo-mountain.png"
      alt="Cloud Evolvers"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
