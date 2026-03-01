import Link from "next/link";
import Image from "next/image";
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
  image?: string;
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
  image,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1"
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-stone-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <div className="p-6">
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
      </div>
    </Link>
  );
}
