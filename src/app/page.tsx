import { Hero } from "@/components/home/hero";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { LatestNews } from "@/components/home/latest-news";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { NewsletterBanner } from "@/components/home/newsletter-banner";
import { getFeaturedArticles, getAllNews } from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedArticles().slice(0, 3);
  const latestNews = getAllNews().slice(0, 5);

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featured} />
      <LatestNews items={latestNews} />
      <CategoryShowcase />
      <NewsletterBanner />
    </>
  );
}
