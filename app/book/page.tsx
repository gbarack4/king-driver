import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search instructors | Drivecab Driving School",
  description:
    "Compare trusted local driving instructors and book a lesson online with Drivecab.",
};

export default function BookPage() {
  return (
    <main className="book-page">
      <iframe
        src="https://embed.driveinstructor.pro/embed/ab1d31aa-3c72-4c92-8e11-6ccbb16b4726"
        title="Driving school booking site"
        style={{
          width: "100%",
          minHeight: "720px",
          border: 0,
          borderRadius: 12,
        }}
        loading="lazy"
        allow="payment *"
      />
    </main>
  );
}
