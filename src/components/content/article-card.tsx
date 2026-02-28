import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDateShort } from "@/lib/utils";

interface ArticleCardProps {
  href: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags?: string[];
  badge?: string;
  badgeVariant?: "default" | "primary" | "accent" | "beginner" | "intermediate" | "advanced";
  meta?: string;
}

export function ArticleCard({
  href,
  title,
  description,
  date,
  readingTime,
  tags,
  badge,
  badgeVariant = "primary",
  meta,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
    >
      <div className="flex items-center gap-2">
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        {meta && <span className="text-xs text-text-muted">{meta}</span>}
      </div>
      <h3 className="mt-3 text-lg font-bold text-text-dark group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-dark-secondary line-clamp-3">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center gap-3 text-xs text-text-muted">
        <time>{formatDateShort(date)}</time>
        <span>&middot;</span>
        <span>{readingTime} min read</span>
      </div>
    </Link>
  );
}
