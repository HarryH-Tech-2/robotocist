import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="bg-surface-900 py-32">
      <Container className="text-center">
        <p className="text-8xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-text-primary">
          Page not found
        </h1>
        <p className="mt-4 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
