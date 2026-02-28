export const siteConfig = {
  name: "Robotocist",
  url: "https://www.robotocist.com",
  description:
    "Your source for AI and robotics news, in-depth articles, and hands-on tutorials. Stay ahead of the automation revolution.",
  author: "Robotocist Team",
  email: "hello@robotocist.com",
  links: {
    twitter: "https://x.com/robotocist",
    github: "https://github.com/robotocist",
    rss: "/feed.xml",
  },
} as const;

export const navLinks = [
  { label: "News", href: "/news" },
  { label: "Articles", href: "/articles" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "About", href: "/about" },
] as const;
