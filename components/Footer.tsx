import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Brand light />
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
          <a href="/#lessons">Driving lessons</a>
          <a href="#">Test packages</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#">Contact us</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
      <div className="copyright">
        © 2026 Drivecab Driving School{" "}
        <span>Built for Australian learner drivers.</span>
      </div>
    </footer>
  );
}
