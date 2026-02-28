import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { formatDateShort } from "@/lib/utils";

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  type: "news" | "articles" | "tutorials";
}

export function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-surface-900 py-16">
      <Container>
        <h2 className="text-2xl font-bold text-text-primary">Related Posts</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.type}/${post.slug.split("/").pop()}`}
              className="group rounded-xl border border-surface-700 bg-surface-800 p-5 transition-all hover:border-primary/40 hover:bg-surface-700"
            >
              <Badge variant="accent">{post.type}</Badge>
              <h3 className="mt-2 font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                {post.description}
              </p>
              <div className="mt-3 text-xs text-text-muted">
                <time>{formatDateShort(post.date)}</time>
                <span className="ml-2">&middot; {post.readingTime} min</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
