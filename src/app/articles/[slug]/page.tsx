import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ArticleHeader } from "@/components/content/article-header";
import { MDXContent } from "@/components/mdx/mdx-content";
import { ShareButtons } from "@/components/content/share-buttons";
import { RelatedPosts } from "@/components/content/related-posts";
import { ReadingProgress } from "@/components/content/reading-progress";
import { TagList } from "@/components/content/tag-list";
import { JsonLd } from "@/components/seo/json-ld";
import { buildArticleJsonLd } from "@/lib/seo";
import { getAllArticles, getArticleBySlug, getRelatedPosts } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((post) => ({ slug: post.slugAsParams }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticleBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/articles/${post.slugAsParams}`,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getArticleBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.tags);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={buildArticleJsonLd({
          title: post.title,
          description: post.description,
          date: post.date,
          author: post.author,
          url: `${siteConfig.url}/articles/${post.slugAsParams}`,
          image: post.image,
          section: post.category,
        })}
      />
      <ArticleHeader
        title={post.title}
        date={post.date}
        author={post.author}
        readingTime={post.readingTime}
        contentType="articles"
        category={post.category}
        image={post.image}
      />
      <section className="bg-reading py-12">
        <Container className="max-w-4xl">
          <MDXContent code={post.body} />
          <div className="mt-8 border-t border-stone-200 pt-6">
            <TagList tags={post.tags} />
          </div>
          <div className="mt-6">
            <ShareButtons
              title={post.title}
              slug={`articles/${post.slugAsParams}`}
            />
          </div>
        </Container>
      </section>
      <RelatedPosts posts={related} />
    </>
  );
}
