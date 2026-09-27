import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Driving Schools Near Me | Learner Blog | Drivecab",
  description:
    "Guides on driving schools near me, driving schools Brisbane, lesson prices, female instructors, teen and adult lessons, and popular Brisbane lesson deals.",
  keywords: [
    "driving schools near me",
    "driving schools brisbane",
    "driving school brisbane",
    "driving schools near Clayfield QLD",
  ],
};

export default function BlogIndexPage() {
  return (
    <main className="blog-page">
      <span className="eyebrow">Learner Blog</span>
      <h1>Everything you need to know to learn to drive</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
