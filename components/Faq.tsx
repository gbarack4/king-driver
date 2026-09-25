"use client";

import { useState } from "react";

const questions = [
  {
    title: "How much does a driving lesson cost?",
    answer:
      "Prices vary by instructor, suburb and transmission. Enter your pick-up location to compare current prices before booking.",
  },
  {
    title: "Can I choose my own instructor?",
    answer:
      "Yes. You can compare instructor profiles, cars, ratings, prices and available times before choosing.",
  },
  {
    title: "Can I change or reschedule a lesson?",
    answer:
      "Yes. Eligible bookings can be managed from your learner account in a few simple steps.",
  },
  {
    title: "Do you offer automatic and manual lessons?",
    answer:
      "Yes. Use the transmission filter to find instructors offering automatic or manual lessons near you.",
  },
  {
    title: "How do I book a driving lesson?",
    answer:
      "Enter your pick-up location, compare instructors, pick a time that suits you and confirm online. No phone calls needed.",
  },
  {
    title: "What areas do you cover?",
    answer:
      "Drivecab instructors are available across Australia’s capital cities and many surrounding suburbs. Search your address to see who is nearby.",
  },
  {
    title: "Can I change instructors later?",
    answer:
      "Yes. You can switch to another instructor at any time if you want a different teaching style, car or schedule.",
  },
  {
    title: "How long is a driving lesson?",
    answer:
      "Most lessons are around one hour, though some instructors also offer longer sessions. Lesson length is shown before you book.",
  },
  {
    title: "Do I need my own car?",
    answer:
      "No. You learn in your instructor’s dual-control car, so you do not need to provide a vehicle for lessons.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div>
        <span className="eyebrow">Common questions</span>
        <h2>Everything you need to know.</h2>
        <p>Can’t find your answer? Our friendly support team is ready to help.</p>
      </div>
      <div className="accordion">
        {questions.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={question.title}
              className={`accordion-item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {question.title}
                <span aria-hidden="true">+</span>
              </button>
              <div
                className="accordion-panel"
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
              >
                <div className="accordion-panel-inner">
                  <p>{question.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
