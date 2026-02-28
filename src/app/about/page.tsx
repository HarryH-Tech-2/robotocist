import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Robotocist — your source for AI and robotics news, articles, and tutorials.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface-900 pb-12 pt-12">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            About Robotocist
          </h1>
        </Container>
      </section>

      <section className="bg-reading py-12">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              Robotocist exists to make AI and robotics accessible to everyone.
              We believe the convergence of artificial intelligence and physical
              robotics will be the defining technological shift of the coming
              decade — and we want to help you understand, learn from, and
              participate in that revolution.
            </p>

            <h2>What We Cover</h2>
            <p>
              We publish three types of content:
            </p>
            <ul>
              <li>
                <strong>News</strong> — Breaking stories and updates from the
                world of AI, robotics, and automation. We track the companies,
                research labs, and open-source projects pushing the boundaries.
              </li>
              <li>
                <strong>Articles</strong> — In-depth analysis, opinion pieces,
                and expert interviews. We go beyond the headlines to explore what
                matters and why.
              </li>
              <li>
                <strong>Tutorials</strong> — Hands-on guides for builders. From
                ROS 2 basics to reinforcement learning pipelines, our tutorials
                help you go from concept to working code.
              </li>
            </ul>

            <h2>Who We Are</h2>
            <p>
              We&apos;re a team of engineers, researchers, and writers passionate
              about the intersection of AI and the physical world. Our
              contributors have backgrounds spanning robotics research, machine
              learning engineering, embedded systems, and technical writing.
            </p>

            <h2>Get in Touch</h2>
            <p>
              Have a story tip, want to contribute, or just want to say hello?
              Reach out at{" "}
              <a href="mailto:hello@robotocist.com">hello@robotocist.com</a> or
              find us on{" "}
              <a
                href="https://x.com/robotocist"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter/X
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
