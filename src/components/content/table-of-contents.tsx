"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = document.querySelectorAll("h2[id], h3[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  function renderItems(items: TocItem[], depth = 0) {
    return (
      <ul className={cn("space-y-1", depth > 0 && "ml-4 mt-1")}>
        {items.map((item) => {
          const id = item.url.replace("#", "");
          return (
            <li key={item.url}>
              <a
                href={item.url}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded px-2 py-1 text-sm transition-colors",
                  activeId === id
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-text-dark-secondary hover:text-text-dark"
                )}
              >
                {item.title}
              </a>
              {item.items && item.items.length > 0 && renderItems(item.items, depth + 1)}
            </li>
          );
        })}
      </ul>
    );
  }

  if (toc.length === 0) return null;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 flex w-full items-center justify-between rounded-lg border border-stone-200 bg-white p-3 text-sm font-semibold text-text-dark lg:hidden"
      >
        Table of Contents
        <span className="text-text-muted">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Mobile collapsible */}
      {isOpen && (
        <nav className="mb-6 rounded-lg border border-stone-200 bg-white p-4 lg:hidden">
          {renderItems(toc)}
        </nav>
      )}

      {/* Desktop sticky sidebar */}
      <nav className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-lg border border-stone-200 bg-white p-4 lg:block">
        <p className="mb-3 text-sm font-semibold text-text-dark">
          Table of Contents
        </p>
        {renderItems(toc)}
      </nav>
    </>
  );
}
