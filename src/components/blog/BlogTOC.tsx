import { useEffect, useRef, useState } from "react";

interface BlogTOCProps {
  sections: Array<{ id: string; title: string }>;
  conclusionId: string;
  conclusionLabel: string;
}

export default function BlogTOC({
  sections,
  conclusionId,
  conclusionLabel,
}: BlogTOCProps) {
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  const allEntries = [...sections, { id: conclusionId, title: conclusionLabel }];

  useEffect(() => {
    const ids = [...sections.map((s) => s.id), conclusionId];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { threshold: 0, rootMargin: "-20% 0px -70% 0px" },
    );

    const elements: Element[] = [];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) { observer.observe(el); elements.push(el); }
    }

    return () => { observer.disconnect(); };
  }, [sections, conclusionId]);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? Math.min(100, Math.max(0, (y / h) * 100)) : 0);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <nav className="sticky top-32">
      <p className="text-foreground/30 text-[10px] font-semibold uppercase tracking-[0.18em] mb-5">
        On this page
      </p>

      <ul className="space-y-0.5">
        {allEntries.map((entry) => {
          const active = activeId === entry.id;
          return (
            <li key={entry.id}>
              <button
                onClick={() => document.getElementById(entry.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className={`
                  text-[12.5px] leading-snug py-1.5 block text-left w-full transition-colors duration-150
                  ${active
                    ? "text-foreground font-medium pl-3 border-l-[1.5px] border-foreground"
                    : "text-foreground/40 pl-3 border-l-[1.5px] border-transparent hover:text-foreground/65"
                  }
                `}
              >
                {entry.title}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Progress */}
      <div className="mt-8">
        <div className="h-px bg-border/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-foreground/25 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </nav>
  );
}
