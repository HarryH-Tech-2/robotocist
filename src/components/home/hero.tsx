import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative bg-surface-900 py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950/50 to-surface-900" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            AI &amp; Robotics
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            The future is{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              autonomous
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            News, in-depth articles, and hands-on tutorials covering artificial
            intelligence, robotics, and the automation revolution.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/articles"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Read Articles
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-surface-600 px-8 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-700"
            >
              Browse Tutorials
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
