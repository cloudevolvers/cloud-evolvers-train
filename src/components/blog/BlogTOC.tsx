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
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  const allEntries = [
    ...sections,
    { id: conclusionId, title: conclusionLabel },
  ];

  useEffect(() => {
    const ids = [
      ...sections.map((s) => s.id),
      conclusionId,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { threshold: 0, rootMargin: "-20% 0px -70% 0px" },
    );

    const elements: Element[] = [];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      for (const el of elements) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, [sections, conclusionId]);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        setProgress(Math.min(100, Math.max(0, pct)));
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav className="sticky top-28">
      <p className="text-muted-foreground/50 text-[10px] uppercase tracking-[1.5px] font-semibold mb-4">
        On this page
      </p>

      <ul className="space-y-0">
        {allEntries.map((entry) => {
          const isActive = activeId === entry.id;
          return (
            <li key={entry.id}>
              <button
                onClick={() => scrollTo(entry.id)}
                className={`text-[13px] py-1 block text-left transition-colors ${
                  isActive
                    ? "text-foreground font-medium border-l-2 border-foreground pl-3"
                    : "text-muted-foreground border-l-2 border-transparent pl-3 hover:text-foreground/80"
                }`}
              >
                {entry.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="bg-muted h-0.5 rounded-full mt-6">
        <div
          className="bg-foreground/40 h-full rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
