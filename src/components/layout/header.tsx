"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/layout/nav-links";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/10 bg-surface-950/95 shadow-lg shadow-primary/5 backdrop-blur-xl"
          : "border-b border-surface-700/50 bg-surface-900/95 backdrop-blur supports-[backdrop-filter]:bg-surface-900/80"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-0 text-xl font-bold">
            <span className="text-text-primary transition-colors group-hover:text-primary-light">
              Robo
            </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              tocist
            </span>
            <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-primary opacity-80 transition-transform group-hover:scale-125" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const href = link.href as string;
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute inset-x-1.5 -bottom-[13px] h-[2px] rounded-full bg-gradient-to-r from-primary to-accent" />
                  )}
                  {/* Hover glow */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-lg bg-surface-700 opacity-0 transition-opacity hover:opacity-100 -z-10" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/newsletter"
              className="group relative hidden overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-primary/25 md:inline-flex"
            >
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:text-text-primary hover:bg-surface-700 md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile nav */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
