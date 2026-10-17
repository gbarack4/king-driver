import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Drivecab collects, uses and stores personal information when you browse instructors or book a driving lesson.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Privacy policy"
      lead="This policy explains what personal information Drivecab collects and how we use it."
      updated="18 October 2026"
    >
      <h2>1. The information we collect</h2>
      <p>
        We may collect your name, email address, phone number, suburb or
        postcode, transmission preference, booking dates, and messages you
        send through the contact form. If you create a learner account,
        we also store login details and lesson history.
      </p>

      <h2>2. How we use it</h2>
      <p>
        We use this information to show instructors near you, complete
        bookings, send confirmations, handle support requests, and improve
        the Drivecab website. We do not sell your personal information.
      </p>

      <h2>3. Bookings and instructors</h2>
      <p>
        When you book a lesson, the details needed for that booking are
        shared with the instructor you choose and with our booking partner
        at drivecab.driveinstructor.pro so they can take payment and manage
        the lesson. Instructors only receive what they need to pick you up
        and teach you.
      </p>

      <h2>4. Cookies and analytics</h2>
      <p>
        The site may use cookies or similar tools to keep the website
        working, remember basic preferences, and understand which pages
        people visit. You can control cookies in your browser settings.
      </p>

      <h2>5. Storage and security</h2>
      <p>
        We take reasonable steps to keep personal information secure and
        only keep it for as long as we need it for bookings, support or
        legal reasons. Some data is stored by trusted service providers
        who help us run the website and booking system.
      </p>

      <h2>6. Access and questions</h2>
      <p>
        You can ask to see or update personal information we hold about
        you, or ask us to delete it where we are able to. Contact us
        through the <a href="/contact">contact page</a>. Our{" "}
        <a href="/terms">terms &amp; conditions</a> explain how bookings
        work.
      </p>
    </LegalPage>
  );
}
