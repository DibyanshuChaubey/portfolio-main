# Dibyanshu Chaubey — Portfolio

A modern, production-ready personal portfolio built with Next.js, focused on:

- Full-stack project showcases
- Professional profile and achievements
- Dedicated **Content Strategy & Audience Growth** proof page
- Real collaboration links, dashboard snapshots, and recognition documents

---

## Live Sections

- `/` — Home introduction, profile photo, social links, and highlights
- `/work` — Deployed project portfolio with live links
- `/profile` — Education, skills, certifications, and achievements
- `/content-growth` — Dedicated growth/creator strategy section with:
	- Audience growth metrics
	- Case study
	- Creative toolkit showcase
	- Instagram work proof
	- Dashboard snapshot slider
	- Collaboration proof links
	- Letter of appreciation
- `/contact` — Contact form and Gmail compose-based outreach flow

---

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Swiper
- React Icons

---

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

---

## Quality Checks

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

---

## Contact / Hire Flow

This portfolio currently uses a Gmail compose flow (no backend mail service):

- **Hire me** button opens Gmail compose with recipient pre-filled
- Contact form generates a pre-filled email (to/subject/body)
- If Gmail web cannot open, fallback behavior is mail client-based

---

## Assets & Content Notes

- Core images and proofs are stored under `public/assets`
- Content growth tool logos are under `public/assets/tools`
- Dashboard snapshots used in slider:
	- `channel_dashboards.jpg`
	- `channel_dashboards2.jpg`
- Recognition document:
	- `LETTER OF APPRECIATION.pdf`

---

## Personalization Tips

To update your profile quickly:

- Edit homepage and profile text in `app/page.jsx` and `app/profile/page.jsx`
- Edit work project data in `app/work/page.jsx`
- Edit content growth proof/collaboration data in `app/content-growth/page.jsx`

---

Built and maintained by Dibyanshu Chaubey.
