export const siteConfig = {
  name: "Robotocist",
  url: "https://www.robotocist.com",
  description:
    "The leading AI and robotics publication — breaking news, expert analysis, and hands-on tutorials for engineers, researchers, and enthusiasts.",
  author: "Robotocist Team",
  email: "hello@robotocist.com",
  links: {
    rss: "/feed.xml",
  },
} as const;

export const navLinks = [
  { label: "News", href: "/news" },
  { label: "Articles", href: "/articles" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "About", href: "/about" },
] as const;
