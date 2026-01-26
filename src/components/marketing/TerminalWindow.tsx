import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Terminal } from "lucide-react";

const TYPING_DELAY = 50;
const LINE_DELAY = 500;

interface TerminalProps {
    className?: string;
}

export function TerminalWindow({ className }: TerminalProps) {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const commands = [
        "> az login --scope subscription",
        "Authenticating with Azure CLI...",
        "> az account set --subscription 'Production-01'",
        "> az group create --name 'rg-cloud-evolvers' --location 'westeurope'",
        "Resource group 'rg-cloud-evolvers' created successfully.",
        "> az train --module 'AZ-104' --start",
        "Initializing Training Module: Azure Administrator...",
        "Loading interactive labs... [OK]",
        "Starting simulation environment... [OK]",
        "Welcome to Cloud Evolvers. Your journey starts now."
    ];

    useEffect(() => {
        if (currentLineIndex >= commands.length) {
            setIsTyping(false);
            return;
        }

        const currentLine = commands[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setLines(prev => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = "";
                    }
                    newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
                    return newLines;
                });
                setCurrentCharIndex(prev => prev + 1);
            }, TYPING_DELAY);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
                if (currentLineIndex < commands.length - 1) {
                    setLines(prev => [...prev, ""]);
                }
            }, LINE_DELAY);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, commands]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]/90 backdrop-blur-md shadow-2xl ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground font-mono">
                    <Terminal className="w-3 h-3" />
                    <span>bash — 80x24</span>
                </div>
                <div className="w-8" />
            </div>

            {/* Content */}
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[400px]">
                {lines.map((line, index) => (
                    <div key={index} className="mb-2">
                        {line.startsWith(">") ? (
                            <div className="text-blue-400 font-bold">
                                <span className="mr-2 text-pink-500">$</span>
                                {line.substring(2)}
                            </div>
                        ) : (
                            <div className={`${line.includes("[OK]") ? "text-green-400" : "text-gray-400"}`}>
                                {line}
                            </div>
                        )}
                    </div>
                ))}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-blue-500 ml-1 align-middle"
                    />
                )}
            </div>
        </motion.div>
    );
}
