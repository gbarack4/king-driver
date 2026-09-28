import { BOOK_URL } from "@/lib/lesson-pages";

const included = [
  "Pick-up from home or an address you choose",
  "A warm-up lesson on the test route",
  "A dual-control car for the test",
  "Drop-off home after the test, pass or not",
];

export function TestPackage() {
  return (
    <section className="test-pack" id="test-package">
      <div className="test-pack-inner">
        <div className="test-pack-copy">
          <span className="eyebrow">Driving test package</span>
          <h2>Driving test? One less thing to worry about.</h2>
          <p>
            Book a full test day — pick-up, a warm-up on the route, and your
            instructor’s dual-control car. One booking, one price.
          </p>
          <a className="test-pack-btn" href={BOOK_URL}>
            Book a test package
          </a>
          <small>
            Available with instructors who offer test-day support. Check
            coverage when you search.
          </small>
        </div>
        <article className="test-pack-card">
          <header>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="3.2" />
                <path d="M8 14.5h8l1.2 6.2H6.8L8 14.5z" />
              </svg>
            </span>
            <strong>What’s included</strong>
          </header>
          <ul>
            {included.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
