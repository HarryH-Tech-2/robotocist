import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { formatDateShort } from "@/lib/utils";

interface NewsItem {
  slugAsParams: string;
  title: string;
  description: string;
  date: string;
  source?: string;
  breaking: boolean;
  readingTime: number;
}

export function LatestNews({ items }: { items: NewsItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="bg-reading-dark py-16 sm:py-20">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">
              Latest News
            </h2>
            <p className="mt-2 text-text-dark-secondary">
              Breaking stories from the world of AI &amp; robotics
            </p>
          </div>
          <Link
            href="/news"
            className="hidden text-sm font-semibold text-primary hover:text-primary-dark sm:block"
          >
            View all news &rarr;
          </Link>
        </div>
        <div className="mt-8 space-y-4">
          {items.map((item, index) => (
            <Link
              key={item.slugAsParams}
              href={`/news/${item.slugAsParams}`}
              className="group flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-900 text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {item.breaking && (
                    <Badge variant="advanced">
                      <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      Breaking
                    </Badge>
                  )}
                  {item.source && (
                    <span className="text-xs text-text-muted">
                      {item.source}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-bold text-text-dark group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-dark-secondary line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0 text-right text-xs text-text-muted">
                <time>{formatDateShort(item.date)}</time>
                <p className="mt-1">{item.readingTime} min</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/news"
          className="mt-6 block text-center text-sm font-semibold text-primary hover:text-primary-dark sm:hidden"
        >
          View all news &rarr;
        </Link>
      </Container>
    </section>
  );
}
