export interface Course {
  slug: string; title: string; description: string; audience: string;
  beginnerFriendly: boolean; topics: string[]; prerequisites: string;
}
export const courses: Course[] = [
  { slug: "coding-for-kids", title: "Coding for Kids", description: "Age-appropriate activities that build curiosity and logical thinking.", audience: "Kids", beginnerFriendly: true, topics: ["Computers and programs", "Algorithms", "Logical thinking", "Simple problem-solving"], prerequisites: "None" },
  { slug: "programming-fundamentals", title: "Programming Fundamentals", description: "Core ideas every programmer uses, taught step by step.", audience: "Students and beginners", beginnerFriendly: true, topics: ["Variables", "Data types", "Conditionals", "Loops", "Functions"], prerequisites: "None" },
  { slug: "python-for-beginners", title: "Python for Beginners", description: "Start programming in Python with practical exercises.", audience: "Students and beginners", beginnerFriendly: true, topics: ["Python syntax", "Lists and strings", "Reusable code", "Small projects"], prerequisites: "Programming Fundamentals is helpful" },
  { slug: "web-development-fundamentals", title: "Web Development Fundamentals", description: "Build interactive, responsive webpages.", audience: "Students and beginners", beginnerFriendly: true, topics: ["HTML", "CSS", "JavaScript", "Responsive layouts"], prerequisites: "Basic computer skills" },
];
