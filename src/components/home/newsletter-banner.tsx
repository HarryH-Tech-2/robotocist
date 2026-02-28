import Link from "next/link";
import { Container } from "@/components/ui/container";

export function NewsletterBanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stay ahead of the curve
          </h2>
          <p className="mt-3 text-white/80">
            Get the latest AI and robotics news delivered to your inbox weekly.
            No spam, unsubscribe anytime.
          </p>
          <Link
            href="/newsletter"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </Container>
    </section>
  );
}
