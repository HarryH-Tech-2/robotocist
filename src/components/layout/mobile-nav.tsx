"use client";

import Link from "next/link";
import { navLinks } from "@/components/layout/nav-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="border-t border-surface-700 bg-surface-900 md:hidden">
      <Container>
        <nav className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:text-text-primary hover:bg-surface-700"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-surface-700">
            <Button
              href="/newsletter"
              variant="primary"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              Subscribe
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
