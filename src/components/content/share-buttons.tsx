"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/${slug}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      label: "Twitter",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: "𝕏",
    },
    {
      label: "LinkedIn",
      href: `https://linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: "in",
    },
    {
      label: "Reddit",
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: "↗",
    },
    {
      label: "Hacker News",
      href: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
      icon: "Y",
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-text-dark-secondary">Share:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.label}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-sm font-bold text-text-dark-secondary transition-colors hover:bg-primary hover:text-white"
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="inline-flex h-9 items-center justify-center rounded-lg bg-stone-100 px-3 text-sm text-text-dark-secondary transition-colors hover:bg-primary hover:text-white"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
