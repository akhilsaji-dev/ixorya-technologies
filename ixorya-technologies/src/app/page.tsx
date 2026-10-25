import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/lib/site";

const btn = "rounded-md px-5 py-3 text-sm font-medium transition";
export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-silver sm:text-5xl">Engineering Digital Experiences. Automating the Future.</h1>
            <p className="mt-5 max-w-xl text-muted">{site.name} transforms ideas into powerful software, modern websites, and intelligent AI-driven solutions that help businesses grow.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={`${btn} bg-brand text-white hover:bg-blue-500`}>Start Your Project</Link>
              <Link href="/services" className={`${btn} border border-white/20 text-silver hover:border-cyan`}>Explore Our Services</Link>
              <Link href="/academy/courses" className={`${btn} text-cyan hover:underline`}>Learn Programming</Link>
            </div>
          </div>
          <Image src={site.symbol} alt={`${site.short} symbol`} width={480} height={480} priority className="mx-auto w-full max-w-sm rounded-full" />
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-silver">Our Services</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="rounded-lg border border-white/10 bg-dark p-5">
              <h3 className="font-semibold text-silver">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-cyan">{s.features.map((f) => <li key={f} className="rounded border border-cyan/30 px-2 py-1">{f}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-dark">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-silver">Your Coding Journey Starts Here.</h2>
          <p className="mt-3 max-w-2xl text-muted">From your first line of code to building real-world projects, {site.short} Academy helps kids, students, and beginners develop programming skills step by step.</p>
          <Link href="/academy/courses" className={`${btn} mt-6 inline-block bg-brand text-white hover:bg-blue-500`}>View Courses</Link>
        </div>
      </section>
    </>
  );
}
