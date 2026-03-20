import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TYPING_DELAY = 45;
const LINE_DELAY = 600;

const commands = [
    { text: "$ az login --tenant cloudevolvers", type: "cmd" as const },
    { text: "> profile: microsoft-training", type: "out" as const },
    { text: "$ azd env get-values", type: "cmd" as const },
    { text: "> DELIVERY=dutch-english", type: "out" as const },
    { text: "> FORMAT=in-company, remote", type: "out" as const },
    { text: "$ az account show --query name -o tsv", type: "cmd" as const },
    { text: "> Cloud Evolvers Training", type: "out" as const },
];

export function TerminalWindow({ className = "" }: { className?: string }) {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (currentLineIndex >= commands.length) {
            setIsTyping(false);
            return;
        }

        const currentLine = commands[currentLineIndex].text;

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => {
                    const next = [...prev];
                    next[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
                    return next;
                });
                setCurrentCharIndex((i) => i + 1);
            }, commands[currentLineIndex].type === "out" ? TYPING_DELAY / 3 : TYPING_DELAY);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex((i) => i + 1);
                setCurrentCharIndex(0);
            }, LINE_DELAY);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`rounded-xl border border-slate-200 bg-white p-4 shadow-md ${className}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    Lab snapshot
                </span>
            </div>

            <div className="mt-4 min-h-[140px] space-y-2 font-mono text-[11px] leading-5">
                {lines.map((line, i) => (
                    <div
                        key={i}
                        className={
                            commands[i]?.type === "cmd"
                                ? "text-slate-800"
                                : "text-slate-400"
                        }
                    >
                        {line}
                    </div>
                ))}
                {isTyping && (
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block h-3.5 w-1.5 translate-y-[1px] bg-slate-400"
                    />
                )}
            </div>
        </motion.div>
    );
}
