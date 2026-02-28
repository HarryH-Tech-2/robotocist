"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (!preRef.current) return;

    const text = preRef.current.textContent || "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative my-6">
      <button
        onClick={handleCopy}
        className={cn(
          "absolute right-3 top-3 z-10 rounded-md border px-2 py-1 text-xs font-medium transition-all",
          "opacity-0 group-hover:opacity-100 focus:opacity-100",
          copied
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90"
        )}
        aria-label={copied ? "Copied" : "Copy code to clipboard"}
      >
        {copied ? (
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Copy
          </span>
        )}
      </button>
      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto rounded-lg border border-white/10 bg-[#0d1117] p-4 text-sm leading-relaxed",
          className
        )}
      >
        {children}
      </pre>
    </div>
  );
}
