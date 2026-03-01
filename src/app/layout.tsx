import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/lib/constants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { buildJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Robotocist — AI & Robotics News, Expert Articles & Hands-On Tutorials",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "The leading AI and robotics publication. Breaking news, expert analysis, and hands-on tutorials covering artificial intelligence, humanoid robots, machine learning, computer vision, and industrial automation.",
  keywords: [
    "AI",
    "artificial intelligence",
    "robotics",
    "machine learning",
    "humanoid robots",
    "computer vision",
    "ROS 2",
    "automation",
    "deep learning",
    "reinforcement learning",
    "tutorials",
    "robotics news",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Robotocist — AI & Robotics News, Articles & Tutorials",
    description: siteConfig.description,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Robotocist — AI & Robotics Publication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotocist — AI & Robotics Publication",
    description: siteConfig.description,
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <JsonLd data={buildJsonLd()} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
