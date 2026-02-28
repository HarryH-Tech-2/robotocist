import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string; body: string }>(
  data: T
) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
  wordCount: data.body.split(/\s+/g).length,
  readingTime: Math.ceil(data.body.split(/\s+/g).length / 200),
});

const news = defineCollection({
  name: "News",
  pattern: "news/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(200),
      description: s.string().max(500),
      date: s.isodate(),
      tags: s.array(s.string()),
      author: s.string().default("Robotocist Team"),
      image: s.string().optional(),
      source: s.string().optional(),
      sourceUrl: s.string().url().optional(),
      breaking: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const articles = defineCollection({
  name: "Article",
  pattern: "articles/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(200),
      description: s.string().max(500),
      date: s.isodate(),
      tags: s.array(s.string()),
      author: s.string().default("Robotocist Team"),
      image: s.string().optional(),
      category: s.enum([
        "robotics",
        "ai",
        "machine-learning",
        "automation",
        "opinion",
        "interview",
      ]),
      featured: s.boolean().default(false),
      series: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const tutorials = defineCollection({
  name: "Tutorial",
  pattern: "tutorials/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(200),
      description: s.string().max(500),
      date: s.isodate(),
      tags: s.array(s.string()),
      author: s.string().default("Robotocist Team"),
      image: s.string().optional(),
      difficulty: s.enum(["beginner", "intermediate", "advanced"]),
      prerequisites: s.array(s.string()).default([]),
      techStack: s.array(s.string()).default([]),
      estimatedTime: s.string().optional(),
      repo: s.string().url().optional(),
      toc: s.toc(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { news, articles, tutorials },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-default", keepBackground: true }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["anchor"] },
        },
      ],
    ],
  },
});
