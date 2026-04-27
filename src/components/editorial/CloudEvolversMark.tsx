interface CloudEvolversMarkProps {
  className?: string;
  size?: number;
}

/**
 * Cloud Evolvers brand mark: purple cloud with a black mountain peaking through,
 * topped with a small gold flag. Inline SVG, transparent background, brand-color
 * matched. Replaces the cream-background PNG that clashed with the white header.
 */
export function CloudEvolversMark({ className, size = 32 }: CloudEvolversMarkProps) {
  return (
    <svg
      role="img"
      aria-label="Cloud Evolvers"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloud */}
      <path
        d="M21 22c-4.4 0-8 3.4-8 7.5 0 4.1 3.6 7.5 8 7.5h22c4.4 0 8-3.4 8-7.5 0-4.1-3.6-7.5-8-7.5-1 0-2 .2-2.9.5C38.7 19 35.5 17 32 17c-5 0-9.2 3.4-10.6 7.9-.1 0-.3-.4-.4-.4z"
        fill="#7c3aed"
      />
      {/* Mountain (peaks through the cloud) */}
      <path
        d="M10 52L32 16l22 36H10z"
        fill="#0c0a09"
      />
      {/* Flag pole */}
      <line x1="32" y1="9" x2="32" y2="20" stroke="#0c0a09" strokeWidth="1.5" />
      {/* Flag */}
      <path d="M32.5 9.5L40 12l-7.5 2.5z" fill="#fbbf24" />
    </svg>
  );
}
