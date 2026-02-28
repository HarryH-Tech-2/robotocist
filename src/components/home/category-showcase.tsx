import Link from "next/link";
import { Container } from "@/components/ui/container";

const categories = [
  {
    title: "Robotics",
    description: "Hardware, humanoids, drones, and industrial automation",
    href: "/articles?category=robotics",
    icon: "🤖",
  },
  {
    title: "Artificial Intelligence",
    description: "LLMs, computer vision, NLP, and foundation models",
    href: "/articles?category=ai",
    icon: "🧠",
  },
  {
    title: "Machine Learning",
    description: "Training techniques, frameworks, and research papers",
    href: "/articles?category=machine-learning",
    icon: "📊",
  },
  {
    title: "Tutorials",
    description: "Hands-on guides from beginner to advanced",
    href: "/tutorials",
    icon: "📚",
  },
];

export function CategoryShowcase() {
  return (
    <section className="bg-surface-900 py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl">
          Explore Topics
        </h2>
        <p className="mt-2 text-center text-text-secondary">
          Deep dives into the technologies shaping the future
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-xl border border-surface-700 bg-surface-800 p-6 transition-all hover:border-primary/40 hover:bg-surface-700"
            >
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="mt-3 font-bold text-text-primary group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
