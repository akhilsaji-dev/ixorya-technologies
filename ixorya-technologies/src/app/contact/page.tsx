import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold text-silver">Contact</h1>
      <p className="mt-4 text-muted">The enquiry form is not set up yet, so nothing can be submitted from this page.</p>
      {site.email && <p className="mt-4">Email: <a className="text-cyan" href={`mailto:${site.email}`}>{site.email}</a></p>}
    </div>
  );
}
