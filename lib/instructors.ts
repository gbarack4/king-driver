export type Instructor = {
  name: string;
  rating: string;
  price: number;
  type: "Automatic" | "Manual";
  exp: string;
  tags: string[];
  soon: boolean;
  gender: "male" | "female";
};

export type InstructorFilter = "all" | "soon" | "auto" | "manual" | "female";

export const instructors: Instructor[] = [
  {
    name: "Daniel",
    rating: "5.0 · 89 reviews",
    price: 75,
    type: "Automatic",
    exp: "8 years instructing",
    tags: ["Calm & patient", "Toyota Corolla"],
    soon: true,
    gender: "male",
  },
  {
    name: "Priya",
    rating: "5.0 · 64 reviews",
    price: 79,
    type: "Automatic",
    exp: "6 years instructing",
    tags: ["Test preparation", "Mazda 3"],
    soon: true,
    gender: "female",
  },
  {
    name: "Michael",
    rating: "4.9 · 51 reviews",
    price: 72,
    type: "Manual",
    exp: "11 years instructing",
    tags: ["Manual specialist", "Hyundai i30"],
    soon: false,
    gender: "male",
  },
];

export function filterInstructors(filter: InstructorFilter) {
  return instructors.filter(
    (instructor) =>
      filter === "all" ||
      (filter === "soon" && instructor.soon) ||
      (filter === "auto" && instructor.type === "Automatic") ||
      (filter === "manual" && instructor.type === "Manual") ||
      (filter === "female" && instructor.gender === "female"),
  );
}
