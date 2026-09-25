const benefits = [
  {
    icon: "↻",
    title: "Flexible instructor options",
    copy: "Change instructors anytime and find the teaching style that works best for you.",
  },
  {
    icon: "◴",
    title: "Book online anytime",
    copy: "See live calendars and manage upcoming lessons 24 hours a day.",
  },
  {
    icon: "♢",
    title: "Clear, upfront pricing",
    copy: "Compare lesson prices before you book. No surprises or hidden booking fees.",
  },
  {
    icon: "✓",
    title: "Verified professionals",
    copy: "Learn with qualified, insured instructors who know your local roads.",
  },
];

export function WhyDrivecab() {
  return (
    <section className="why" id="lessons">
      <span className="eyebrow">Why Drivecab</span>
      <h2>Everything you need to learn with confidence.</h2>
      <p className="lead">
        Compare trusted local instructors, book in minutes, and stay in control
        of every lesson.
      </p>
      <div className="benefits">
        {benefits.map((benefit) => (
          <article key={benefit.title}>
            <span>{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
