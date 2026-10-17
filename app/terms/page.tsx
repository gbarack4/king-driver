import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "The terms that apply when you use Drivecab to find instructors and book driving lessons or test packages online.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Terms & conditions"
      lead="These terms explain how Drivecab Driving School works when you book a lesson or test package."
      updated="18 October 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        Drivecab Driving School (“Drivecab”) provides driving lessons and test
        packages in Australia. The website is operated at{" "}
        <a href="https://drivecab.pro">drivecab.pro</a>. You can browse
        instructors and complete bookings online at
        drivecab.driveinstructor.pro.
      </p>

      <h2>2. Using this website</h2>
      <p>
        By using Drivecab you agree to these terms. You must be at least 16
        years old, or using the site with a parent or guardian if you are
        younger and booking a lesson. Keep your account details accurate and
        do not share your login.
      </p>

      <h2>3. Instructors</h2>
      <p>
        Drivecab instructors teach your lessons for the school. You can compare
        instructor profiles, cars, reviews and available times before you
        book. Lesson and package prices are set by Drivecab Driving School,
        not by individual instructors, and are shown before you confirm.
      </p>

      <h2>4. Bookings and payment</h2>
      <p>
        When you book, you enter a contract with Drivecab Driving School for
        that lesson or test package. Payment is taken when you confirm, using
        the checkout on the booking site. The price you see is the school
        price. We do not add hidden booking fees on top.
      </p>

      <h2>5. Changes and cancellations</h2>
      <p>
        Eligible bookings can be changed or cancelled from your learner
        account, subject to Drivecab’s notice period. If you miss a lesson or
        cancel too late, Drivecab’s cancellation rules apply. Test-day
        packages are available where the school offers that service in your
        area.
      </p>
      <p>
        If your instructor cancels a lesson, the lesson value is returned to
        your Drivecab account as credit so you can book another time. You do
        not lose that lesson.
      </p>

      <h2>6. Refunds</h2>
      <p>
        Lesson credit is refundable in full within 14 days of purchase. After
        that, unused credit stays in your account to book another lesson.
      </p>
      <p>
        If you are not happy with the service, you have 14 days from the
        lesson or purchase to request a full refund. Contact us through the{" "}
        <a href="/contact">contact page</a> and we will process it.
      </p>
      <p>
        Refunds are paid back to the original payment method where possible.
        Instructor cancellations are credited to your account first so you
        can rebook; you can still ask for a cash refund of that credit within
        14 days of purchase.
      </p>

      <h2>7. Your responsibilities</h2>
      <p>
        You must hold a valid learner licence (or other licence required for
        the lesson) and follow road rules during lessons. Tell your instructor
        about medical conditions or restrictions that affect driving. Dual
        control in the car does not remove your duty to drive safely.
      </p>

      <h2>8. Website content</h2>
      <p>
        We aim to keep instructor profiles, reviews, prices and times up to
        date, but availability can change. Drivecab may update these terms;
        the latest version will always be on this page.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms? Email us through the{" "}
        <a href="/contact">contact page</a> or see our{" "}
        <a href="/privacy">privacy policy</a>.
      </p>
    </LegalPage>
  );
}
