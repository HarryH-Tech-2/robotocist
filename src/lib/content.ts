import { news, articles, tutorials } from "../../.velite";

type NewsItem = typeof news[number];
type ArticleItem = typeof articles[number];
type TutorialItem = typeof tutorials[number];

export type { NewsItem, ArticleItem, TutorialItem };

export function getAllNews(): NewsItem[] {
  return [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllArticles(): ArticleItem[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllTutorials(): TutorialItem[] {
  return [...tutorials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((item: NewsItem) => item.slugAsParams === slug);
}

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  return articles.find((item: ArticleItem) => item.slugAsParams === slug);
}

export function getTutorialBySlug(slug: string): TutorialItem | undefined {
  return tutorials.find((item: TutorialItem) => item.slugAsParams === slug);
}

export function getFeaturedArticles(): ArticleItem[] {
  return articles
    .filter((a: ArticleItem) => a.featured)
    .sort(
      (a: ArticleItem, b: ArticleItem) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticlesByCategory(category: string): ArticleItem[] {
  return articles
    .filter((a: ArticleItem) => a.category === category)
    .sort(
      (a: ArticleItem, b: ArticleItem) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getTutorialsByDifficulty(difficulty: string): TutorialItem[] {
  return tutorials
    .filter((t: TutorialItem) => t.difficulty === difficulty)
    .sort(
      (a: TutorialItem, b: TutorialItem) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getLatestPosts(limit = 10) {
  const allPosts = [
    ...news.map((n: NewsItem) => ({ ...n, type: "news" as const })),
    ...articles.map((a: ArticleItem) => ({ ...a, type: "articles" as const })),
    ...tutorials.map((t: TutorialItem) => ({
      ...t,
      type: "tutorials" as const,
    })),
  ];
  return allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  limit = 4
) {
  const allPosts = [
    ...news.map((n: NewsItem) => ({ ...n, type: "news" as const })),
    ...articles.map((a: ArticleItem) => ({ ...a, type: "articles" as const })),
    ...tutorials.map((t: TutorialItem) => ({
      ...t,
      type: "tutorials" as const,
    })),
  ];

  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      ...post,
      score: post.tags.filter((tag: string) => currentTags.includes(tag))
        .length,
    }))
    .filter((post) => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  [...news, ...articles, ...tutorials].forEach(
    (post: { tags: string[] }) => post.tags.forEach((tag) => tags.add(tag))
  );
  return Array.from(tags).sort();
}
