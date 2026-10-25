import type { Metadata } from "next";
import { services } from "@/data/services";
export const metadata: Metadata = { title: "Services" };
export default function Services() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-silver">Services</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <section key={s.title} className="rounded-lg border border-white/10 bg-dark p-6">
            <h2 className="text-xl font-semibold text-silver">{s.title}</h2>
            <p className="mt-2 text-muted">{s.description}</p>
            <ul className="mt-3 list-inside list-disc text-sm text-silver">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </section>
        ))}
      </div>
    </div>
  );
}
