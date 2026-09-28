import { BOOK_URL, lessonPages, type LessonPage } from "@/lib/lesson-pages";
import { SITE_URL } from "@/lib/site";

export function LessonLanding({ page }: { page: LessonPage }) {
  return (
    <main className="lesson-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.h1,
            description: page.description,
            areaServed: "Brisbane, Australia",
            provider: {
              "@type": "Organization",
              name: "Drivecab Driving School",
              url: SITE_URL,
            },
            url: `${SITE_URL}/driving-lessons/${page.slug}`,
          }),
        }}
      />
      <section className="lesson-hero">
        <span className="eyebrow">Driving lessons</span>
        <h1>{page.h1}</h1>
        <p className="lead">{page.lead}</p>
        <a className="primary lesson-book" href={BOOK_URL}>
          Book now <span className="booking-arrow">→</span>
        </a>
        <p className="lesson-rating">4.9 from 2,400+ learner reviews</p>
      </section>
      <div className="lesson-body">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <a className="primary lesson-book" href={BOOK_URL}>
          Book now <span className="booking-arrow">→</span>
        </a>
      </div>
      <nav className="lesson-links" aria-label="More driving lesson pages">
        <h2>More driving lessons</h2>
        <ul>
          {lessonPages
            .filter((item) => item.slug !== page.slug)
            .map((item) => (
              <li key={item.slug}>
                <a href={`/driving-lessons/${item.slug}`}>{item.h1}</a>
              </li>
            ))}
        </ul>
      </nav>
    </main>
  );
}
