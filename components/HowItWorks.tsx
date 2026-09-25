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
];

export function HowItWorks() {
  return (
    <section className="feature" id="how">
      <div className="feature-copy">
        <span className="eyebrow">Made for learners</span>
        <h2>The simple way to book driving lessons across Australia.</h2>
        <div className="how-stats">
          {stats.map((stat) => (
            <article key={stat.label}>
              {stat.icon}
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
