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
            Book a full test day: pick-up, a warm-up on the route, and your
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="9" r="5.2" />
                <path d="m9 13.8-.9 7.2 3.9-2.2 3.9 2.2-.9-7.2" />
              </svg>
            </span>
            <strong>What’s included</strong>
          </header>
          <ul>
            {included.map((item) => (
              <li key={item}>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fff3b0" />
                    <path
                      d="M7.2 12.3 10.4 15.5 16.8 8.6"
                      fill="none"
                      stroke="#171523"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
