import { Brand } from "./Brand";

export function Header() {
  return (
    <header className="topbar">
      <Brand priority />
      <nav id="nav">
        <a href="/#lessons">Driving lessons</a>
        <a href="/book">Instructors</a>
        <a href="/#how">How it works</a>
        <a href="/#reviews">Reviews</a>
        <a href="/#faq">FAQs</a>
      </nav>
      <div className="nav-actions">
        <a className="text-btn" href="/sign-in">
          Sign in
        </a>
        <a className="primary small" href="/book">
          Book online
        </a>
      </div>
      <div className="topbar-end">
        <a className="signin" href="/sign-in">
          Sign in
        </a>
      </div>
    </header>
  );
}
