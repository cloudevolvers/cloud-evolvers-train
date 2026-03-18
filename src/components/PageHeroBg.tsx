/**
 * Shared background layer for inner-page hero sections.
 *
 * Renders a subtle network-topology image behind the content with
 * gradient overlays that blend into the page background.
 */
export function PageHeroBg() {
    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <img
                src="/page-bg.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-[0.04] mix-blend-screen dark:opacity-[0.06]"
            />
            {/* Radial glow accents */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(35,82,67,0.08),transparent_50%),radial-gradient(ellipse_at_80%_40%,rgba(38,79,128,0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(35,82,67,0.18),transparent_50%),radial-gradient(ellipse_at_80%_40%,rgba(38,79,128,0.12),transparent_50%)]" />
            {/* Bottom fade into page bg */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
    );
}
