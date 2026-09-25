"use client";

import { useMemo, useState } from "react";
import { filterInstructors, type InstructorFilter } from "@/lib/instructors";

const filters: { label: string; value: InstructorFilter }[] = [
  { label: "Top rated", value: "all" },
  { label: "Next available", value: "soon" },
  { label: "Automatic", value: "auto" },
  { label: "Manual", value: "manual" },
  { label: "Female instructors", value: "female" },
];

export function Instructors() {
  const [filter, setFilter] = useState<InstructorFilter>("all");
  const visibleInstructors = useMemo(() => filterInstructors(filter), [filter]);

  return (
    <section className="section" id="instructors">
      <div className="section-head">
        <div>
          <span className="eyebrow purple">LOCAL & VERIFIED</span>
          <h2>Popular instructors near Brisbane</h2>
          <p>Compare teaching style, car, transmission and price before you book.</p>
        </div>
        <button className="outline" type="button">
          View all instructors →
        </button>
      </div>
      <div className="filters">
        {filters.map((item) => (
          <button
            key={item.value}
            className={filter === item.value ? "active" : undefined}
            type="button"
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="cards">
        {visibleInstructors.length === 0 ? (
          <p>No instructors match this filter.</p>
        ) : (
          visibleInstructors.map((instructor) => (
            <article className="instructor" key={instructor.name}>
              <div className="photo">
                <span className="available">
                  ● {instructor.soon ? "Available this week" : "Popular choice"}
                </span>
                <div className="avatar">
                  {instructor.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="price">From ${instructor.price}/hr</span>
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3>{instructor.name}</h3>
                  <span>★ {instructor.rating}</span>
                </div>
                <p className="meta">
                  {instructor.type} · {instructor.exp}
                </p>
                <div className="tags">
                  {instructor.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button
                  className="view"
                  type="button"
                  onClick={() => document.querySelector("#booking")?.scrollIntoView()}
                >
                  View profile & availability
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
