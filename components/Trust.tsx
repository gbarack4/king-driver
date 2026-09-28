const points = [
  {
    title: "Verified ratings & reviews",
    copy: "Read recent learner reviews and pick an instructor with a consistently strong track record.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4.5 14.2 10h5.8l-4.7 3.4 1.8 5.6L12 15.6 6.9 19l1.8-5.6L4 10h5.8z" />
      </svg>
    ),
  },
  {
    title: "Accredited instructors",
    copy: "Learn with qualified, insured instructors. Check their credentials on the profile before you book.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3.8 19 7v5.4c0 4.2-2.8 7.4-7 8.8-4.2-1.4-7-4.6-7-8.8V7l7-3.2z" />
        <path d="m9.2 12.2 1.9 1.9 3.8-4" />
      </svg>
    ),
  },
  {
    title: "Dual-control cars",
    copy: "See the car you will learn in, including make and transmission, so you know what to expect.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 16h14l-1.6-5.2A2 2 0 0 0 15.5 9.5h-7A2 2 0 0 0 6.6 10.8L5 16z" />
        <circle cx="7.5" cy="16.5" r="1.4" />
        <circle cx="16.5" cy="16.5" r="1.4" />
        <path d="M8 9.5 9.2 6.8h5.6L16 9.5" />
      </svg>
    ),
  },
  {
    title: "Your instructor, your call",
    copy: "Not the right fit? Switch instructors online and keep your lessons moving — no phone calls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.1" />
        <path d="M5.6 19c.8-3.1 3.1-4.8 6.4-4.8s5.6 1.7 6.4 4.8" />
      </svg>
    ),
  },
];

export function Trust() {
  return (
    <section className="trust" id="trust">
      <span className="eyebrow">Confidence built in</span>
      <h2>Book driving lessons with confidence.</h2>
      <p className="lead">Choose an instructor you can trust.</p>
      <div className="trust-grid">
        {points.map((point) => (
          <article key={point.title}>
            <span>{point.icon}</span>
            <h3>{point.title}</h3>
            <p>{point.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
