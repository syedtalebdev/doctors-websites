# Dr. Aditya Sharma — Cardiologist Profile Site

Static, single-page profile site for a doctor. Built with **Next.js 15** + **Tailwind CSS**. White theme, professional, fully responsive.

## Sections

1. **Hero** — about the doctor (left) + HD photo (right)
2. **Qualifications** — degrees, training, fellowships
3. **Specialties** — areas of practice
4. **Experience** — career timeline + headline stats
5. **Services** — consultation types and indicative fees
6. **Testimonials** — patient + peer voices
7. **Contact** — clinic address, phone, hours

## Run locally

```bash
bun install      # or: npm install / pnpm install
bun run dev      # → http://localhost:3001
```

## Build

```bash
bun run build
bun run start
```

## Customising for a real doctor

All copy lives in plain text inside [`src/components/`](src/components/) — no CMS or DB.
- Doctor name / qualifications: [`Hero.tsx`](src/components/Hero.tsx) · [`Navbar.tsx`](src/components/Navbar.tsx) · [`layout.tsx`](src/app/layout.tsx)
- Education: [`Qualifications.tsx`](src/components/Qualifications.tsx)
- Practice areas: [`Specialties.tsx`](src/components/Specialties.tsx)
- Career: [`Experience.tsx`](src/components/Experience.tsx)
- Fees: [`Services.tsx`](src/components/Services.tsx)
- Hours / clinic: [`Contact.tsx`](src/components/Contact.tsx)
- Photo: replace the Unsplash URL in [`Hero.tsx`](src/components/Hero.tsx) with your own HD image

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 3.4
- Lucide React icons
- Inter (sans) + Lora (display) — Google Fonts
- Stock photo: Unsplash
