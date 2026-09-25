"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="contact-success" role="status">
        <span aria-hidden="true">✓</span>
        <strong>Message sent</strong>
        <p>Thanks for getting in touch. We’ll get back to you shortly.</p>
        <button type="button" className="contact-again" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Full name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Topic
        <select name="topic" defaultValue="booking">
          <option value="booking">Booking a lesson</option>
          <option value="account">My account</option>
          <option value="instructor">My instructor</option>
          <option value="other">Something else</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
        />
      </label>
      <button className="primary" id="booking" type="submit">
        Send message <span className="booking-arrow">→</span>
      </button>
    </form>
  );
}
