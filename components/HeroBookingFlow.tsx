"use client";

import { useEffect, useState } from "react";

const steps = ["Location", "Auto", "Date & time"] as const;

export function HeroBookingFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % steps.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="hero-visual" aria-hidden="true">
      <article className="hero-flow">
        <ol className="hero-flow-steps">
          {steps.map((step, index) => (
            <li
              key={step}
              className={
                index === active ? "is-active" : index < active ? "is-done" : ""
              }
            >
              <span>{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="hero-flow-stage">
          <div className={`hero-flow-scene${active === 0 ? " is-active" : ""}`}>
            <label>Search location</label>
            <div className="hero-flow-input">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.3-4.3"
                />
              </svg>
              {active === 0 ? (
                <span className="hero-flow-type">Clayfield QLD</span>
              ) : (
                <span>Clayfield QLD</span>
              )}
            </div>
            <p>Instructors who pick up near you</p>
          </div>

          <div className={`hero-flow-scene${active === 1 ? " is-active" : ""}`}>
            <label>Transmission</label>
            <div className="hero-flow-pills is-pair">
              <span className="is-on">Automatic</span>
              <span>Manual</span>
            </div>
            <p>Auto lessons selected</p>
          </div>

          <div className={`hero-flow-scene${active === 2 ? " is-active" : ""}`}>
            <label>Date and time</label>
            <div className="hero-flow-pills">
              <span>Thu</span>
              <span className="is-on">Fri</span>
              <span>Sat</span>
            </div>
            <div className="hero-flow-pills">
              <span>9:00 am</span>
              <span className="is-on">11:00 am</span>
              <span>2:00 pm</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
