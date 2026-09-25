import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact us | Drivecab Driving School",
  description:
    "Get in touch with Drivecab for help with bookings, instructors or your learner account.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-wrap">
        <span className="eyebrow">Support</span>
        <h1>Contact us</h1>
        <p className="lead">
          Questions about a booking, your instructor or your account? Send us a
          message and we’ll help you get back on the road.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
