export function DotPattern({ className = "", opacity = 0.5 }: { className?: string; opacity?: number }) {
    return (
        <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
            <svg
                className="absolute inset-0 h-full w-full opacity-[var(--opacity)]"
                style={{ "--opacity": opacity } as React.CSSProperties}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="dot-pattern"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                        patternTransform="translate(0 0)"
                    >
                        <circle cx="1" cy="1" r="1" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
            {/* Radial fade mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
        </div>
    );
}
