import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  collapsed?: boolean;
}

export function CodeBlock({
  code,
  language,
  title,
  collapsed: initialCollapsed = false,
}: CodeBlockProps) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [copied, setCopied] = useState(false);

  function handleCopy(e: React.MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!title) {
    return (
      <div className="border border-border rounded-lg overflow-hidden relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs z-10"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <div className="bg-muted/30 px-4 py-4 overflow-x-auto">
          <code className="text-foreground/80 text-[13px] font-mono leading-relaxed whitespace-pre">
            {code}
          </code>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div
        className="bg-muted/50 border-b border-border px-4 py-2.5 flex items-center justify-between cursor-pointer"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <div className="flex items-center">
          <span className="text-muted-foreground text-xs mr-2">
            {collapsed ? "\u25B6" : "\u25BC"}
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-muted text-muted-foreground text-[10px] px-2 py-0.5 rounded font-mono">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      {!collapsed && (
        <div className="bg-muted/30 px-4 py-4 overflow-x-auto">
          <code className="text-foreground/80 text-[13px] font-mono leading-relaxed whitespace-pre">
            {code}
          </code>
        </div>
      )}
    </div>
  );
}
