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
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-text-primary"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-text-primary"
                aria-label="View our GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
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
