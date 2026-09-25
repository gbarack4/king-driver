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
        {questions.map((question, index) => (
          <details
            key={question.title}
            open={openIndex === index}
            onToggle={(event) => {
              if (event.currentTarget.open) {
                setOpenIndex(index);
              }
            }}
          >
            <summary>
              {question.title}
              <span>+</span>
            </summary>
            <p>{question.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
