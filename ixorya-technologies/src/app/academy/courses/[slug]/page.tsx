import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return courses.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = courses.find((x) => x.slug === slug);
  return c ? { title: c.title, description: c.description } : {};
}
export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const c = courses.find((x) => x.slug === slug);
  if (!c) notFound();
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/academy/courses" className="text-sm text-cyan hover:underline">← All courses</Link>
      <h1 className="mt-4 text-4xl font-semibold text-silver">{c.title}</h1>
      <p className="mt-3 text-muted">{c.description}</p>
      <h2 className="mt-8 text-xl font-semibold text-silver">Topics</h2>
      <ul className="mt-2 list-inside list-disc text-silver">{c.topics.map((t) => <li key={t}>{t}</li>)}</ul>
      <h2 className="mt-8 text-xl font-semibold text-silver">Prerequisites</h2>
      <p className="mt-2 text-muted">{c.prerequisites}</p>
      <p className="mt-8 text-muted">Contact us for course details.</p>
    </div>
  );
}
