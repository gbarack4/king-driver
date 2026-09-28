import type { MetadataRoute } from "next";
import { lessonPages } from "@/lib/lesson-pages";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/driving-lessons`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/book`, changeFrequency: "weekly", priority: 0.8 },
    ...lessonPages.map((page) => ({
      url: `${SITE_URL}/driving-lessons/${page.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
