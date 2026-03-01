import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ArticleHeader } from "@/components/content/article-header";
import { MDXContent } from "@/components/mdx/mdx-content";
import { ShareButtons } from "@/components/content/share-buttons";
import { RelatedPosts } from "@/components/content/related-posts";
import { ReadingProgress } from "@/components/content/reading-progress";
import { TagList } from "@/components/content/tag-list";
import { TableOfContents } from "@/components/content/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { buildTutorialJsonLd } from "@/lib/seo";
import {
  getAllTutorials,
  getTutorialBySlug,
  getRelatedPosts,
} from "@/lib/content";
import { siteConfig } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTutorials().map((post) => ({ slug: post.slugAsParams }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getTutorialBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/tutorials/${post.slugAsParams}`,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function TutorialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getTutorialBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.tags);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={buildTutorialJsonLd({
          title: post.title,
          description: post.description,
          date: post.date,
          author: post.author,
          url: `${siteConfig.url}/tutorials/${post.slugAsParams}`,
          image: post.image,
          difficulty: post.difficulty,
        })}
      />
      <ArticleHeader
        title={post.title}
        date={post.date}
        author={post.author}
        readingTime={post.readingTime}
        contentType="tutorials"
        difficulty={post.difficulty}
        estimatedTime={post.estimatedTime}
        image={post.image}
      />
      <section className="bg-reading py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              {/* Prerequisites */}
              {post.prerequisites.length > 0 && (
                <div className="mb-8 rounded-lg border border-stone-200 bg-white p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-text-dark-secondary">
                    Prerequisites
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {post.prerequisites.map((prereq) => (
                      <li
                        key={prereq}
                        className="flex items-start gap-2 text-sm text-text-dark"
                      >
                        <span className="mt-0.5 text-primary">&#10003;</span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {post.techStack.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {post.techStack.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Repo link */}
              {post.repo && (
                <div className="mb-8">
                  <a
                    href={post.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-text-dark transition-colors hover:border-primary hover:text-primary"
                  >
                    <span>GitHub Repository</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              )}

              <MDXContent code={post.body} />

              <div className="mt-8 border-t border-stone-200 pt-6">
                <TagList tags={post.tags} />
              </div>
              <div className="mt-6">
                <ShareButtons
                  title={post.title}
                  slug={`tutorials/${post.slugAsParams}`}
                />
              </div>
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <TableOfContents toc={post.toc} />
            </aside>
          </div>
          {/* Mobile TOC */}
          <div className="mt-4 lg:hidden">
            <TableOfContents toc={post.toc} />
          </div>
        </Container>
      </section>
      <RelatedPosts posts={related} />
    </>
  );
}
