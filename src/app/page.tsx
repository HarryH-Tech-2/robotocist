import { Hero } from "@/components/home/hero";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { LatestNews } from "@/components/home/latest-news";
import { LatestTutorials } from "@/components/home/latest-tutorials";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { NewsletterBanner } from "@/components/home/newsletter-banner";
import {
  getFeaturedArticles,
  getAllNews,
  getAllTutorials,
} from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedArticles().slice(0, 3);
  const latestNews = getAllNews().slice(0, 5);
  const latestTutorials = getAllTutorials()
    .slice(0, 3)
    .map((t) => ({
      slugAsParams: t.slugAsParams,
      title: t.title,
      description: t.description,
      difficulty: t.difficulty,
      estimatedTime: t.estimatedTime,
      techStack: t.techStack,
      image: t.image,
    }));

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featured} />
      <LatestNews items={latestNews} />
      <LatestTutorials tutorials={latestTutorials} />
      <CategoryShowcase />
      <NewsletterBanner />
    </>
  );
}
