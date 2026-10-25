import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
export const metadata: Metadata = { title: "Academy Courses" };
export default function Courses() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-silver">Academy Courses</h1>
      <p className="mt-3 text-muted">Contact us for course details.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <article key={c.slug} className="rounded-lg border border-white/10 bg-dark p-6">
            {c.beginnerFriendly && <span className="rounded bg-cyan/10 px-2 py-1 text-xs text-cyan">Beginner-friendly</span>}
            <h2 className="mt-3 text-xl font-semibold text-silver">{c.title}</h2>
            <p className="mt-2 text-sm text-muted">{c.description}</p>
            <p className="mt-2 text-sm text-silver">For: {c.audience}</p>
            <Link href={`/academy/courses/${c.slug}`} className="mt-4 inline-block text-sm text-cyan hover:underline">Course details</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
