import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-surface-950 text-text-secondary">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-xl font-bold">
              <span className="text-text-primary">Robo</span>
              <span className="text-primary">tocist</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Newsletter
            </h3>
            <p className="max-w-xs text-sm leading-relaxed">
              Get the latest AI and robotics insights delivered to your inbox
              every week. No spam, unsubscribe anytime.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
            >
              Subscribe now
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-surface-700 py-6 text-sm text-text-muted sm:flex-row">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.rss}
              className="transition-colors hover:text-text-primary"
            >
              RSS Feed
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
