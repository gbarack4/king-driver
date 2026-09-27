import { Brand } from "./Brand";

export function Header() {
  return (
    <header className="topbar">
      <Brand priority />
      <nav id="nav">
        <a href="/book">Instructors</a>
        <a href="/#how">How it works</a>
        <a href="/#reviews">Reviews</a>
        <a href="/#faq">FAQs</a>
      </nav>
      <div className="nav-actions">
        <a className="signin" href="https://drivecab.driveinstructor.pro/login">
          Sign in
        </a>
      </div>
      <div className="topbar-end">
        <a className="signin" href="https://drivecab.driveinstructor.pro/login">
          Sign in
        </a>
      </div>
    </header>
  );
}
