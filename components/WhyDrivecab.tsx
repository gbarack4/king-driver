"use client";

import { useEffect, useState } from "react";

const steps = [
  { title: "Browse instructors" },
  { title: "Book online. No phone calls" },
  { title: "Lesson booked" },
] as const;

export function WhyDrivecab() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % steps.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <section className="why" id="lessons">
      <span className="eyebrow">Why Drivecab</span>
      <h2>Everything you need to learn with confidence.</h2>
      <p className="lead">
        Compare trusted local instructors, book in minutes, and stay in control
        of every lesson.
      </p>

      <div className="why-flow">
        <div className="why-stage" aria-live="polite">
          <article
            className={`why-scene${active === 0 ? " is-active" : ""}`}
            aria-hidden={active !== 0}
          >
            <header className="why-card-head">
              <span>Near you</span>
              <strong>Browse instructors</strong>
            </header>
            <ul className="why-list">
              <li>
                <span className="why-avatar">SM</span>
                <div>
                  <strong>Sam M.</strong>
                  <small>Automatic · 4.9</small>
                </div>
                <em>$75</em>
              </li>
              <li>
                <span className="why-avatar">ML</span>
                <div>
                  <strong>Mia L.</strong>
                  <small>Automatic · 5.0</small>
                </div>
                <em>$72</em>
              </li>
              <li>
                <span className="why-avatar">JT</span>
                <div>
                  <strong>Jordan T.</strong>
                  <small>Manual · 4.8</small>
                </div>
                <em>$70</em>
              </li>
            </ul>
          </article>

          <article
            className={`why-scene${active === 1 ? " is-active" : ""}`}
            aria-hidden={active !== 1}
          >
            <header className="why-card-head">
              <span>Pay and confirm online</span>
              <strong>Book online. No phone calls</strong>
            </header>
            <div className="why-book">
              <p className="why-no-call">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 4.5h3.2l1.2 3.1-2 1.2a11 11 0 0 0 5.8 5.8l1.2-2 3.1 1.2V18a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M5 19 19 5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                No phone calls needed
              </p>
              <div className="why-days">
                <span>Thu</span>
                <span className="is-on">Fri</span>
                <span>Sat</span>
              </div>
              <div className="why-slots">
                <span>9:00 am</span>
                <span className="is-on">11:00 am</span>
                <span>2:00 pm</span>
              </div>
              <span className="why-book-btn">Book this time</span>
            </div>
          </article>

          <article
            className={`why-scene${active === 2 ? " is-active" : ""}`}
            aria-hidden={active !== 2}
          >
            <div className="why-done">
              <span className="why-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M8 12.2 10.6 15 16 9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <strong>Lesson booked</strong>
              <p>Friday 11:00 am · Automatic with Mia L.</p>
            </div>
          </article>
        </div>

        <ol className="why-steps" data-step={active}>
          {steps.map((step, index) => {
            const isActive = index === active;

            return (
            <li key={step.title}>
              <button
                type="button"
                className={`why-step${isActive ? " is-active" : ""}${
                  index < active ? " is-done" : ""
                }`}
                onClick={() => setActive(index)}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="why-step-num">{index + 1}</span>
                <strong>{step.title}</strong>
                <i key={isActive ? active : step.title} className="why-step-bar" />
              </button>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
