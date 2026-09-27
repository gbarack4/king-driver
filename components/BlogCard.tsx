import type { Post } from "@/lib/posts";

function BlogCover({ cover, tape }: { cover: Post["cover"]; tape: string }) {
  return (
    <div className={`blog-cover blog-cover-${cover}`}>
      <span className="blog-tape">{tape}</span>
      {cover === "hours" ? (
        <svg className="blog-art" viewBox="0 0 160 180" aria-hidden="true">
          <rect x="38" y="18" width="84" height="118" rx="6" fill="#3b6cff" />
          <rect x="46" y="8" width="68" height="16" rx="4" fill="#ffbc00" />
          <rect x="52" y="42" width="56" height="8" rx="2" fill="#e8eeff" />
          <rect x="52" y="58" width="56" height="8" rx="2" fill="#e8eeff" />
          <path
            d="M58 84h12v12H58zm22 2.2 8.2 8.2 16.6-16.6 5.2 5.2-21.8 21.8L53 91.2z"
            fill="#fff"
          />
          <circle cx="56" cy="148" r="10" fill="#ffbc00" />
          <circle cx="104" cy="148" r="10" fill="#ffbc00" />
        </svg>
      ) : cover === "guide" ? (
        <svg className="blog-art" viewBox="0 0 160 180" aria-hidden="true">
          <rect x="34" y="28" width="92" height="112" rx="8" fill="#fff" />
          <rect x="46" y="44" width="68" height="8" rx="2" fill="#d6dbe6" />
          <rect x="46" y="62" width="52" height="8" rx="2" fill="#d6dbe6" />
          <rect x="46" y="80" width="60" height="8" rx="2" fill="#d6dbe6" />
          <circle cx="80" cy="118" r="16" fill="#ffbc00" />
          <path d="M73 118.5 77.5 123l10-12" fill="none" stroke="#000" strokeWidth="3" />
        </svg>
      ) : (
        <svg className="blog-art" viewBox="0 0 160 180" aria-hidden="true">
          <rect x="28" y="48" width="104" height="64" rx="12" fill="#fff" />
          <rect x="40" y="64" width="48" height="10" rx="3" fill="#111" />
          <rect x="40" y="82" width="80" height="8" rx="2" fill="#d6dbe6" />
          <circle cx="52" cy="128" r="12" fill="#ffbc00" />
          <circle cx="108" cy="128" r="12" fill="#ffbc00" />
        </svg>
      )}
    </div>
  );
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <a className="blog-card" href={`/blog/${post.slug}`}>
      <BlogCover cover={post.cover} tape={post.tape} />
      <div className="blog-card-body">
        <time>{post.date}</time>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </a>
  );
}
