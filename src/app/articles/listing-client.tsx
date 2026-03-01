"use client";

import { useSearchParams } from "next/navigation";
import { ArticleCard } from "@/components/content/article-card";
import { CategoryFilter } from "@/components/content/category-filter";

interface Article {
  slug: string;
  slugAsParams: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags: string[];
  category: string;
  featured: boolean;
  image?: string;
}

interface ArticleListingClientProps {
  articles: Article[];
  categories: { label: string; value: string }[];
}

export function ArticleListingClient({
  articles,
  categories,
}: ArticleListingClientProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <>
      <div className="mb-8">
        <CategoryFilter categories={categories} />
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-text-dark-secondary">
          No articles found. Check back soon!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard
              key={article.slug}
              href={`/articles/${article.slugAsParams}`}
              title={article.title}
              description={article.description}
              date={article.date}
              readingTime={article.readingTime}
              tags={article.tags}
              badge={article.category}
              badgeVariant="primary"
              image={article.image}
            />
          ))}
        </div>
      )}
    </>
  );
}
