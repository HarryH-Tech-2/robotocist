import type { MetadataRoute } from "next";
import { getAllNews, getAllArticles, getAllTutorials } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const newsPages: MetadataRoute.Sitemap = getAllNews().map((post) => ({
    url: `${baseUrl}/news/${post.slugAsParams}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = getAllArticles().map((post) => ({
    url: `${baseUrl}/articles/${post.slugAsParams}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tutorialPages: MetadataRoute.Sitemap = getAllTutorials().map(
    (post) => ({
      url: `${baseUrl}/tutorials/${post.slugAsParams}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...newsPages, ...articlePages, ...tutorialPages];
}
