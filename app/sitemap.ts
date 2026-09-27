import type { MetadataRoute } from "next";
import { lessonPages } from "@/lib/lesson-pages";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://drivecab.com.au";

  return [
    { url: origin, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/driving-lessons`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${origin}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${origin}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${origin}/book`, changeFrequency: "weekly", priority: 0.8 },
    ...lessonPages.map((page) => ({
      url: `${origin}/driving-lessons/${page.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...posts.map((post) => ({
      url: `${origin}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
