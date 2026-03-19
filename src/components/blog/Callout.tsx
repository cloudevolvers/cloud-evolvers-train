interface CalloutProps {
  type: 'info' | 'warning';
  title: string;
  children: React.ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  if (type === 'warning') {
    return (
      <aside
        className="bg-[hsl(40_30%_96%)] border border-[hsl(40_20%_88%)] border-l-[3px] border-l-[hsl(40_40%_50%)] dark:bg-[hsl(40_8%_11%)] dark:border-[hsl(40_10%_20%)] dark:border-l-[hsl(40_30%_50%)] rounded-md px-5 py-4"
      >
        <div className="text-[hsl(40_40%_40%)] dark:text-[hsl(40_30%_60%)] text-[11px] uppercase tracking-[1px] font-semibold mb-1.5">
          {title}
        </div>
        <div className="text-[hsl(40_15%_35%)] dark:text-[hsl(40_10%_65%)] text-sm leading-relaxed">
          {children}
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="bg-muted/40 border border-border/60 border-l-[3px] border-l-foreground/30 rounded-md px-5 py-4"
    >
      <div className="text-foreground/60 text-[11px] uppercase tracking-[1px] font-semibold mb-1.5">
        {title}
      </div>
      <div className="text-foreground/75 text-sm leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
