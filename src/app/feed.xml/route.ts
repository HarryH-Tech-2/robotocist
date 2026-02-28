import { Feed } from "feed";
import { getAllNews, getAllArticles, getAllTutorials } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export async function GET() {
  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: "en",
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.name}`,
    author: {
      name: siteConfig.author,
      email: siteConfig.email,
      link: siteConfig.url,
    },
  });

  const allPosts = [
    ...getAllNews().map((p) => ({
      ...p,
      type: "news" as const,
    })),
    ...getAllArticles().map((p) => ({
      ...p,
      type: "articles" as const,
    })),
    ...getAllTutorials().map((p) => ({
      ...p,
      type: "tutorials" as const,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50);

  for (const post of allPosts) {
    feed.addItem({
      title: post.title,
      id: `${siteConfig.url}/${post.type}/${post.slugAsParams}`,
      link: `${siteConfig.url}/${post.type}/${post.slugAsParams}`,
      description: post.description,
      date: new Date(post.date),
      author: [{ name: post.author }],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
