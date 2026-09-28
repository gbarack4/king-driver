import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Brand />
          <p>
            Drivecab helps learner drivers across Australia find local, qualified
            instructors they can trust. Compare real reviews, cars, prices and live
            availability, then book a lesson online in minutes. Whether you need
            your first hour, a refresher, or test-day practice, we make it simple
            to get on the road with confidence.
          </p>
        </div>
        <div>
          <h4>Learn to drive</h4>
          <a href="/book">Find instructors</a>
          <a href="/driving-lessons">Driving lessons</a>
          <a href="/driving-lessons/test-brisbane">Test packages</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="/contact">Contact us</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
      <div className="copyright">
        © 2026 Drivecab Driving School
        <nav className="footer-social" aria-label="Social media">
          <a
            href="https://www.instagram.com/drivecab/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/drivecab"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.2 8.5V6.8c0-.7.5-1 1.2-1h1.6V3h-2.6C11.8 3 11 5 11 6.7v1.8H9v2.8h2V21h3.2v-9.7h2.2l.4-2.8h-2.6z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@drivecab"
            aria-label="TikTok"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.2 3v2.4c1.4 1.1 3.1 1.7 4.8 1.8v2.6c-1.6 0-3.2-.5-4.8-1.4v6.3A6.2 6.2 0 1 1 9.2 8.6v2.7a3.6 3.6 0 1 0 2.6 3.4V3h2.4z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
