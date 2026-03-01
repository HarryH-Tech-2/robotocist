import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { formatDate } from "@/lib/utils";
import type { ContentType, Difficulty } from "@/types";

interface ArticleHeaderProps {
  title: string;
  date: string;
  author: string;
  readingTime: number;
  contentType: ContentType;
  category?: string;
  difficulty?: Difficulty;
  estimatedTime?: string;
  image?: string;
}

const typeLabels: Record<ContentType, string> = {
  news: "News",
  articles: "Article",
  tutorials: "Tutorial",
};

export function ArticleHeader({
  title,
  date,
  author,
  readingTime,
  contentType,
  category,
  difficulty,
  estimatedTime,
  image,
}: ArticleHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-surface-900 pb-16 pt-12">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-15 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/80 via-surface-900/90 to-surface-900" />
        </div>
      )}
      <Container className="relative max-w-4xl">
        <div className="flex items-center gap-3">
          <Badge variant="accent">{typeLabels[contentType]}</Badge>
          {category && <Badge variant="primary">{category}</Badge>}
          {difficulty && (
            <Badge variant={difficulty}>{difficulty}</Badge>
          )}
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
          <span>By {author}</span>
          <span className="text-surface-600">&middot;</span>
          <time>{formatDate(date)}</time>
          <span className="text-surface-600">&middot;</span>
          <span>{readingTime} min read</span>
          {estimatedTime && (
            <>
              <span className="text-surface-600">&middot;</span>
              <span>{estimatedTime} to complete</span>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
