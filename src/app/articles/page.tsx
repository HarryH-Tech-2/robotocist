import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { ArticleCard } from "@/components/content/article-card";
import { CategoryFilter } from "@/components/content/category-filter";
import { getAllArticles } from "@/lib/content";
import { ArticleListingClient } from "./listing-client";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "In-depth articles on AI, robotics, machine learning, and automation.",
};

const categories = [
  { label: "Robotics", value: "robotics" },
  { label: "AI", value: "ai" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Automation", value: "automation" },
  { label: "Opinion", value: "opinion" },
  { label: "Interview", value: "interview" },
];

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return (
    <>
      <section className="bg-surface-900 pb-12 pt-12">
        <Container>
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Articles
          </h1>
          <p className="mt-2 text-text-secondary">
            Expert analysis and in-depth perspectives
          </p>
        </Container>
      </section>

      <section className="bg-reading py-12">
        <Container>
          <Suspense>
            <ArticleListingClient
              articles={allArticles.map((a) => ({
                slug: a.slug,
                slugAsParams: a.slugAsParams,
                title: a.title,
                description: a.description,
                date: a.date,
                readingTime: a.readingTime,
                tags: a.tags,
                category: a.category,
                featured: a.featured,
              }))}
              categories={categories}
            />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
