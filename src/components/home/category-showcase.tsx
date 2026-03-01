import Link from "next/link";
import { Container } from "@/components/ui/container";

const categories = [
  {
    title: "Robotics",
    description: "Hardware, humanoids, drones, and industrial automation",
    href: "/articles?category=robotics",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 text-blue-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    count: "15+ articles",
  },
  {
    title: "Artificial Intelligence",
    description: "LLMs, computer vision, NLP, and foundation models",
    href: "/articles?category=ai",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/10 text-purple-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    count: "20+ articles",
  },
  {
    title: "Machine Learning",
    description: "Training techniques, RL, frameworks, and research papers",
    href: "/articles?category=machine-learning",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500/10 text-green-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-5.5m3 5.5v-5.5m3 5.5v-5.5" />
      </svg>
    ),
    count: "12+ articles",
  },
  {
    title: "Automation",
    description: "Smart factories, cobots, digital twins, and Industry 4.0",
    href: "/articles?category=automation",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconBg: "bg-orange-500/10 text-orange-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m12.04 12.571l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    count: "8+ articles",
  },
  {
    title: "Tutorials",
    description: "Hands-on guides from beginner to advanced level",
    href: "/tutorials",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    count: "10+ guides",
  },
  {
    title: "Opinion & Interviews",
    description: "Expert perspectives on AI ethics, policy, and industry trends",
    href: "/articles?category=opinion",
    gradient: "from-rose-500/20 to-red-500/20",
    iconBg: "bg-rose-500/10 text-rose-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    count: "5+ pieces",
  },
];

export function CategoryShowcase() {
  return (
    <section className="relative overflow-hidden bg-surface-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent)_0%,_transparent_50%)] opacity-[0.04]" />
      <Container className="relative">
        <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl">
          Explore Topics
        </h2>
        <p className="mt-2 text-center text-text-secondary">
          Deep dives into the technologies shaping the future
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-xl border border-surface-700 bg-surface-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface-700/80 hover:-translate-y-0.5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${cat.iconBg}`}>
                  {cat.icon}
                </div>
                <h3 className="mt-4 font-bold text-text-primary group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {cat.description}
                </p>
                <p className="mt-3 text-xs font-medium text-text-muted">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
