import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About Robotocist — AI & Robotics News, Tutorials & Analysis",
  description:
    "Robotocist is the leading publication for AI and robotics professionals. Learn about our mission, team, editorial values, and how we cover the automation revolution.",
};

const stats = [
  { value: "50+", label: "Published Articles" },
  { value: "10k+", label: "Monthly Readers" },
  { value: "6", label: "Topic Categories" },
  { value: "3", label: "Difficulty Levels" },
];

const values = [
  {
    title: "Technical Depth",
    description:
      "We go beyond surface-level coverage. Every article includes code examples, architecture diagrams, or data to back up our analysis.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Practical Focus",
    description:
      "Our tutorials are designed for builders. Every guide includes working code, clear prerequisites, and real-world applications you can deploy.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.08-2.54a1.5 1.5 0 01-.64-2.03l2.44-4.88a1.5 1.5 0 012.03-.64l5.08 2.54a1.5 1.5 0 01.64 2.03l-2.44 4.88a1.5 1.5 0 01-2.03.64z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.8 14.4l-2.4-4.8a1.5 1.5 0 00-2.03-.64" />
      </svg>
    ),
  },
  {
    title: "Open Access",
    description:
      "All our content is free and always will be. We believe knowledge about AI and robotics should be accessible to everyone, not locked behind paywalls.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Community Driven",
    description:
      "We listen to our readers. Our content roadmap is shaped by community feedback, and we welcome contributions from engineers and researchers worldwide.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const topics = [
  {
    name: "Robotics",
    description: "Humanoid robots, drones, industrial automation, surgical robotics, and autonomous vehicles.",
  },
  {
    name: "Artificial Intelligence",
    description: "Large language models, computer vision, NLP, foundation models, and AI safety.",
  },
  {
    name: "Machine Learning",
    description: "Reinforcement learning, neural architectures, training techniques, and ML infrastructure.",
  },
  {
    name: "Automation",
    description: "Smart factories, Industry 4.0, cobots, digital twins, and supply chain optimization.",
  },
  {
    name: "Tutorials",
    description: "Hands-on guides for ROS 2, OpenCV, PyTorch, YOLO, kinematics, and more — from beginner to advanced.",
  },
  {
    name: "Opinion & Interviews",
    description: "Expert perspectives on the future of AI and robotics, ethics, policy, and industry trends.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-surface-900 pb-16 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.05]" />
        <Container className="relative max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Robotocist
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              The leading publication for AI and robotics professionals, researchers, and enthusiasts building the future of intelligent machines.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-surface-700 bg-surface-800/50 p-4 text-center backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-reading py-16">
        <Container className="max-w-4xl">
          <div className="prose prose-lg mx-auto max-w-none">
            <h2>Our Mission</h2>
            <p>
              Robotocist exists to make AI and robotics accessible to everyone.
              We believe the convergence of artificial intelligence and physical
              robotics will be the defining technological shift of the coming
              decade — and we want to help you understand, learn from, and
              participate in that revolution.
            </p>
            <p>
              Whether you&apos;re a seasoned robotics engineer, a machine learning
              researcher, a student just starting out, or simply someone
              fascinated by intelligent machines — we create content for you.
              Every article is written to be both technically rigorous and
              genuinely accessible.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface-900 py-16">
        <Container className="max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl">
            Our Editorial Values
          </h2>
          <p className="mt-2 text-center text-text-secondary">
            The principles that guide everything we publish
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-4 font-bold text-text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Topics we cover */}
      <section className="bg-reading py-16">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">
            What We Cover
          </h2>
          <p className="mt-2 text-text-dark-secondary">
            Comprehensive coverage across the AI and robotics landscape
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-text-dark">{topic.name}</h3>
                <p className="mt-2 text-sm text-text-dark-secondary">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-surface-900 py-16">
        <Container className="max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl">
            Who We Are
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-text-secondary">
            <p>
              We&apos;re a team of engineers, researchers, and writers passionate
              about the intersection of AI and the physical world. Our
              contributors have backgrounds spanning robotics research, machine
              learning engineering, embedded systems, computer vision, and
              technical writing.
            </p>
            <p>
              Our team members have worked at leading robotics labs and
              companies, contributed to open-source frameworks like ROS 2 and
              PyTorch, and published research in top AI and robotics conferences
              including ICRA, IROS, NeurIPS, and CVPR.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-white/80">
            Have a story tip, want to contribute, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@robotocist.com"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Email Us
            </a>
            <Link
              href="/newsletter"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
