import type {
  WithContext,
  Organization,
  WebSite,
  NewsArticle,
  TechArticle,
} from "schema-dts";
import { siteConfig } from "@/lib/constants";

type JsonLdEntry = WithContext<Organization | WebSite | NewsArticle | TechArticle>;

export function buildJsonLd(): JsonLdEntry[] {
  const organization: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
  };

  const webSite: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return [organization, webSite];
}

interface ArticleJsonLdParams {
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
  image?: string;
  section: string;
}

export function buildArticleJsonLd(
  params: ArticleJsonLdParams,
): WithContext<NewsArticle> {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.date,
    dateModified: params.date,
    image: params.image ?? `${siteConfig.url}/og-default.png`,
    author: {
      "@type": "Person",
      name: params.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    articleSection: params.section,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

interface TutorialJsonLdParams {
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
  image?: string;
  difficulty?: string;
}

export function buildTutorialJsonLd(
  params: TutorialJsonLdParams,
): WithContext<TechArticle> {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.date,
    dateModified: params.date,
    image: params.image ?? `${siteConfig.url}/og-default.png`,
    author: {
      "@type": "Person",
      name: params.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    proficiencyLevel: params.difficulty ?? "Beginner",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}
