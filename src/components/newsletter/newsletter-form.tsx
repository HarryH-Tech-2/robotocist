"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "compact" | "hero";

interface NewsletterFormProps {
  variant?: Variant;
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-lg bg-emerald-500/10 p-4 text-center text-sm font-medium text-emerald-600",
          variant === "hero" && "text-emerald-300 bg-emerald-500/20"
        )}
      >
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-2", variant === "default" && "flex-col sm:flex-row")}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={cn(
          "rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
          variant === "hero"
            ? "flex-1 border-surface-600 bg-surface-800 text-text-primary placeholder:text-text-muted"
            : "flex-1 border-stone-300 bg-white text-text-dark placeholder:text-stone-400"
        )}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "shrink-0 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60",
          variant === "hero"
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary-dark"
        )}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 sm:col-span-full">{message}</p>
      )}
    </form>
  );
}
