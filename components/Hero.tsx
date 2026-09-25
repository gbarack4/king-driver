import { BookingForm } from "./BookingForm";
import { RotatingWord } from "./RotatingWord";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            Driving lessons in{" "}
            <RotatingWord
              words={[
                "Brisbane",
                "Sydney",
                "Melbourne",
                "Perth",
                "Adelaide",
                "Hobart",
                "Darwin",
                "Canberra",
              ]}
            />
          </span>
          <h1>Find a driving instructor who’s right for you.</h1>
          <p>
            Compare trusted local instructors, real reviews and live availability.
            Book your next lesson online in minutes.
          </p>
          <div className="rating">
            <svg
              className="google-logo"
              viewBox="0 0 24 24"
              aria-label="Google"
              role="img"
            >
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="stars hero-stars" aria-label="5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <svg key={index} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.6 14.2 10h6.8l-5.5 4 2.1 6.4L12 16.6 6.4 20.4 8.5 14 3 10h6.8z" />
                </svg>
              ))}
            </span>
            <strong>4.9</strong>
            <span>from 2,400+ learner reviews</span>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
