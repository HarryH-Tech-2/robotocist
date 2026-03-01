import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface FeaturedPost {
  slug: string;
  slugAsParams: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: number;
  image?: string;
}

export function FeaturedPosts({ posts }: { posts: FeaturedPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-reading py-16 sm:py-20">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">
              Featured Articles
            </h2>
            <p className="mt-2 text-text-dark-secondary">
              In-depth analysis and expert perspectives
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden text-sm font-semibold text-primary hover:text-primary-dark sm:block"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slugAsParams}`}
              className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1"
            >
              {post.image && (
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <Badge variant="primary">{post.category}</Badge>
                <h3 className="mt-3 text-lg font-bold text-text-dark group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-text-dark-secondary line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-text-muted">
                  <time>{formatDate(post.date)}</time>
                  <span>&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
