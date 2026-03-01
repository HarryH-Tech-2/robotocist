import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { ArticleCard } from "@/components/content/article-card";
import { getAllNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI & Robotics News — Breaking Stories, Launches & Industry Updates",
  description:
    "Stay updated with breaking AI and robotics news. Coverage of product launches, research breakthroughs, partnerships, and industry developments from top companies and labs.",
};

export default function NewsPage() {
  const allNews = getAllNews();

  return (
    <>
      <section className="bg-surface-900 pb-12 pt-12">
        <Container>
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            News
          </h1>
          <p className="mt-2 text-text-secondary">
            The latest from AI, robotics, and automation
          </p>
        </Container>
      </section>

      <section className="bg-reading py-12">
        <Container>
          <Suspense>
            {allNews.length === 0 ? (
              <p className="text-center text-text-dark-secondary">
                No news articles yet. Check back soon!
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {allNews.map((item) => (
                  <ArticleCard
                    key={item.slug}
                    href={`/news/${item.slugAsParams}`}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    readingTime={item.readingTime}
                    tags={item.tags}
                    badge={item.breaking ? "Breaking" : undefined}
                    badgeVariant={item.breaking ? "advanced" : "primary"}
                    meta={item.source}
                    image={item.image}
                  />
                ))}
              </div>
            )}
          </Suspense>
        </Container>
      </section>
    </>
  );
}
