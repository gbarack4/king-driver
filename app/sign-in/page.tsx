import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Drivecab Driving School",
  description: "Sign in to your Drivecab learner account to manage lessons.",
};

export default function SignInPage() {
  return (
    <main className="book-page">
      <iframe
        src="https://embed.driveinstructor.pro/embed/ab1d31aa-3c72-4c92-8e11-6ccbb16b4726/sign-in"
        title="Student sign in"
        style={{
          width: "100%",
          minHeight: "640px",
          border: 0,
          borderRadius: 12,
        }}
        loading="lazy"
        allow="payment *"
      />
    </main>
  );
}
