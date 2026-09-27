import { featuredPosts } from "@/lib/posts";
import { BlogCard } from "./BlogCard";

export function Blog() {
  return (
    <section className="blog" id="blog">
      <span className="eyebrow">Learner Blog</span>
      <h2>Everything you need to know to learn to drive</h2>
      <a className="blog-all" href="/blog">
        All articles <span aria-hidden="true">→</span>
      </a>
      <div className="blog-row">
        {featuredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
