# Ixorya Technologies website

Next.js (App Router), TypeScript, Tailwind CSS v4.

## Run
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build` then `npm start`
- Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`.

## Edit content
- Brand name, tagline, logo paths: `src/lib/site.ts`
- Navigation: `src/data/navigation.ts`
- Services: `src/data/services.ts`
- Academy courses (each needs a unique `slug`): `src/data/courses.ts`
- Logo files: `public/images/` (replace in place, keep file names)

## Not built yet
Contact/enquiry forms and `/api/contact`, About, projects, service detail pages, Academy landing page, sitemap/robots, animations.
