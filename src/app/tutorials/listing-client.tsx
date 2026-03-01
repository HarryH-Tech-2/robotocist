"use client";

import { useSearchParams } from "next/navigation";
import { ArticleCard } from "@/components/content/article-card";
import { CategoryFilter } from "@/components/content/category-filter";
import type { Difficulty } from "@/types";

const difficulties = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

interface Tutorial {
  slug: string;
  slugAsParams: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags: string[];
  difficulty: Difficulty;
  estimatedTime?: string;
  techStack: string[];
  image?: string;
}

export function TutorialListingClient({
  tutorials,
}: {
  tutorials: Tutorial[];
}) {
  const searchParams = useSearchParams();
  const activeDifficulty = searchParams.get("difficulty") || "";

  const filtered = activeDifficulty
    ? tutorials.filter((t) => t.difficulty === activeDifficulty)
    : tutorials;

  return (
    <>
      <div className="mb-8">
        <CategoryFilter categories={difficulties} paramName="difficulty" />
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-text-dark-secondary">
          No tutorials found. Check back soon!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tutorial) => (
            <ArticleCard
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slugAsParams}`}
              title={tutorial.title}
              description={tutorial.description}
              date={tutorial.date}
              readingTime={tutorial.readingTime}
              tags={tutorial.techStack}
              badge={tutorial.difficulty}
              badgeVariant={tutorial.difficulty}
              meta={tutorial.estimatedTime}
              image={tutorial.image}
            />
          ))}
        </div>
      )}
    </>
  );
}
