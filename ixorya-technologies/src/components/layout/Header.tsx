"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const link = (href: string) =>
    `rounded px-3 py-2 text-sm transition-colors ${active(href) ? "text-cyan" : "text-silver hover:text-white"}`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-2">
          <Image src={site.symbol} alt="" width={36} height={36} className="rounded-full" priority />
          <span className="font-semibold tracking-wide text-silver">{site.short.toUpperCase()}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className={link(n.href)} aria-current={active(n.href) ? "page" : undefined}>{n.label}</Link>
          ))}
          <Link href="/contact" className="ml-3 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">Let&apos;s Talk</Link>
        </nav>
        <button className="rounded p-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-dark px-4 py-3 md:hidden">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`block ${link(n.href)}`}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
