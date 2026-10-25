import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { navItems } from "@/data/navigation";
import { site } from "@/lib/site";

async function Year() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Image src={site.logo} alt={`${site.name} logo`} width={140} height={140} className="rounded-lg" />
          <p className="mt-4 max-w-sm text-sm text-muted">{site.description}</p>
          <p className="mt-2 text-sm text-cyan">{site.tagline}</p>
        </div>
        <ul className="space-y-2 text-sm md:justify-self-end">
          {navItems.map((n) => (<li key={n.href}><Link href={n.href} className="text-silver hover:text-cyan">{n.label}</Link></li>))}
        </ul>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-muted">© <Suspense fallback=""><Year /></Suspense> {site.name}</p>
    </footer>
  );
}
