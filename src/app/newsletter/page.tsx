import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the Robotocist newsletter for weekly AI and robotics updates delivered to your inbox.",
};

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-surface-900 py-20">
        <Container className="max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Stay in the Loop
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Get a weekly digest of the most important AI and robotics news,
            articles, and tutorials — delivered straight to your inbox.
          </p>
        </Container>
      </section>

      <section className="bg-reading py-16">
        <Container className="max-w-lg">
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-text-dark">
              Subscribe to our newsletter
            </h2>
            <p className="mt-2 text-sm text-text-dark-secondary">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h3 className="text-lg font-bold text-text-dark">
              What you&apos;ll get:
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Weekly AI & Robotics Roundup",
                  desc: "The most important stories, curated and summarized so you don't miss a beat.",
                },
                {
                  title: "New Tutorial Alerts",
                  desc: "Be the first to know when we publish hands-on guides and learning resources.",
                },
                {
                  title: "Industry Insights",
                  desc: "Analysis and commentary you won't find anywhere else.",
                },
                {
                  title: "Early Access",
                  desc: "Subscribers get early access to our in-depth reports and exclusive content.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <div>
                    <p className="font-semibold text-text-dark">{item.title}</p>
                    <p className="text-sm text-text-dark-secondary">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
