import Link from "next/link";
import { Container } from "@/components/ui/container";

export function NewsletterBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-accent py-16 sm:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stay ahead of the curve
          </h2>
          <p className="mt-3 text-white/80">
            Get the latest AI and robotics news delivered to your inbox weekly.
            Join thousands of engineers and researchers. No spam, unsubscribe anytime.
          </p>
          <Link
            href="/newsletter"
            className="group relative mt-8 inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-8 text-sm font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
          >
            <span className="relative z-10">Subscribe to Newsletter</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
