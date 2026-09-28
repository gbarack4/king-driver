const stats = [
  {
    label: "18,000+ lessons delivered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19c.8-3.2 3.2-5 6.5-5s5.7 1.8 6.5 5" />
      </svg>
    ),
  },
  {
    label: "120+ trusted instructors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20s-7-4.2-7-9.2A4.2 4.2 0 0 1 12 7.5a4.2 4.2 0 0 1 7 3.3c0 5-7 9.2-7 9.2z" />
      </svg>
    ),
  },
  {
    label: "Lessons in every capital city",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-6.5-5.4-6.5-10A6.5 6.5 0 0 1 12 4.5a6.5 6.5 0 0 1 6.5 6.5c0 4.6-6.5 10-6.5 10z" />
        <circle cx="12" cy="11" r="2.1" />
      </svg>
    ),
  },
  {
    label: "4.9 rating from 2,400+ learners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 4.5 14.2 10h5.8l-4.7 3.4 1.8 5.6L12 15.6 6.9 19l1.8-5.6L4 10h5.8z" />
      </svg>
    ),
  },
  {
    label: "Clear prices before you book",
    laptopOnly: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="9.5" r="5" />
        <path d="M9.2 13.8 8 20l4-2.2L16 20l-1.2-6.2" />
      </svg>
    ),
  },
  {
    label: "Easy to change your lesson time",
    laptopOnly: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4.5" y="5.5" width="15" height="14" rx="2" />
        <path d="M8 4v3M16 4v3M4.5 10h15M10 15.2l1.5 1.5 3.2-3.2" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="feature" id="how">
      <div className="feature-copy">
        <span className="eyebrow">Made for learners</span>
        <h2>The simple way to book driving lessons across Australia.</h2>
        <div className="how-stats">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={stat.laptopOnly ? "how-stat-laptop" : undefined}
            >
              {stat.icon}
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
