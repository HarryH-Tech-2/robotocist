import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import type { Difficulty } from "@/types";

interface Tutorial {
  slugAsParams: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  estimatedTime?: string;
  techStack: string[];
  image?: string;
}

export function LatestTutorials({ tutorials }: { tutorials: Tutorial[] }) {
  if (tutorials.length === 0) return null;

  return (
    <section className="bg-reading py-16 sm:py-20">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">
              Latest Tutorials
            </h2>
            <p className="mt-2 text-text-dark-secondary">
              Hands-on guides with working code for every skill level
            </p>
          </div>
          <Link
            href="/tutorials"
            className="hidden text-sm font-semibold text-primary hover:text-primary-dark sm:block"
          >
            View all tutorials &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slugAsParams}
              href={`/tutorials/${tutorial.slugAsParams}`}
              className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1"
            >
              {tutorial.image && (
                <div className="relative h-40 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={tutorial.image}
                    alt={tutorial.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Badge variant={tutorial.difficulty}>
                    {tutorial.difficulty}
                  </Badge>
                  {tutorial.estimatedTime && (
                    <span className="text-xs text-text-muted">
                      {tutorial.estimatedTime}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-bold text-text-dark group-hover:text-primary transition-colors line-clamp-2">
                  {tutorial.title}
                </h3>
                <p className="mt-2 text-sm text-text-dark-secondary line-clamp-2">
                  {tutorial.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tutorial.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-text-dark-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/tutorials"
          className="mt-6 block text-center text-sm font-semibold text-primary hover:text-primary-dark sm:hidden"
        >
          View all tutorials &rarr;
        </Link>
      </Container>
    </section>
  );
}
