import type { Metadata } from "next";
import { BOOK_URL, lessonPages } from "@/lib/lesson-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Driving Lessons | Book an Instructor Near You | Drivecab",
  },
  description:
    "Book driving lessons near you with local instructors. Compare driving lessons in Brisbane, automatic and manual cars, packages and test-day lessons, then book online.",
  keywords: [
    "driving lessons brisbane",
    "book driving lessons brisbane",
    "driving lessons near me",
    "driving instructor near me",
    "driving school brisbane",
  ],
  alternates: { canonical: `${SITE_URL}/driving-lessons` },
  openGraph: {
    title: "Driving Lessons | Book an Instructor Near You | Drivecab",
    description:
      "Compare local instructors and book driving lessons in Brisbane or near you. Automatic, manual, packages and test-day lessons online.",
    type: "website",
  },
};

export default function DrivingLessonsHubPage() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <span className="eyebrow">Driving lessons</span>
        <h1>Driving lessons near you, booked online</h1>
        <p className="lead">
          Compare local instructors, cars and live times. Book driving lessons
          in Brisbane or nearby — no phone calls.
        </p>
        <a className="primary lesson-book" href={BOOK_URL}>
          Book now <span className="booking-arrow">→</span>
        </a>
        <p className="lesson-rating">4.9 from 2,400+ learner reviews</p>
      </section>
      <nav className="lesson-links" aria-label="Driving lesson pages">
        <h2>Browse driving lesson pages</h2>
        <ul>
          {lessonPages.map((page) => (
            <li key={page.slug}>
              <a href={`/driving-lessons/${page.slug}`}>{page.h1}</a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
