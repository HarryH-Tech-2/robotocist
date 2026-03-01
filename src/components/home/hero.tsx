import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ParticleField } from "./particle-field";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-950 py-24 sm:py-32 lg:py-40">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-accent)_0%,_transparent_50%)] opacity-[0.05]" />

      {/* Particle effect */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI &amp; Robotics
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            The future is{" "}
            <span className="animate-gradient bg-gradient-to-r from-primary via-accent to-primary-light bg-[length:200%_auto] bg-clip-text text-transparent">
              autonomous
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl lg:text-2xl">
            News, in-depth articles, and hands-on tutorials covering artificial
            intelligence, robotics, and the automation revolution.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/articles"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-primary px-8 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">Read Articles</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-surface-600 bg-surface-800/50 px-8 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-surface-700"
            >
              Browse Tutorials
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-surface-700/50 pt-8">
            <div>
              <p className="text-2xl font-bold text-text-primary sm:text-3xl">50+</p>
              <p className="mt-1 text-sm text-text-muted">Articles &amp; Tutorials</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary sm:text-3xl">10k+</p>
              <p className="mt-1 text-sm text-text-muted">Monthly Readers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary sm:text-3xl">100%</p>
              <p className="mt-1 text-sm text-text-muted">Free &amp; Open</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
