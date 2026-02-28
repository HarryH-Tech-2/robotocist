"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  id: string;
  title?: string;
}

export function YouTubeEmbed({ id, title = "YouTube video" }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <div className="my-6 overflow-hidden rounded-lg">
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg">
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className={cn(
          "group relative block w-full cursor-pointer",
          "aspect-video overflow-hidden bg-black"
        )}
        aria-label={`Play video: ${title}`}
      >
        {/* Thumbnail */}
        <img
          src={thumbnailUrl}
          alt={`Thumbnail for ${title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full",
              "bg-red-600 text-white shadow-lg",
              "transition-transform duration-300 group-hover:scale-110"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
        </div>

        {/* Title bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
          <p className="text-left text-sm font-medium text-white">{title}</p>
        </div>
      </button>
    </div>
  );
}
