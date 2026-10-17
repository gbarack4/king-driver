import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  lead,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-page">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <p className="legal-updated">Last updated {updated}</p>
      <div className="legal-body">{children}</div>
    </main>
  );
}
