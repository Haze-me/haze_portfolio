# HazeTech: company portfolio and client acquisition website

React, Vite, Tailwind CSS, React Router, Framer Motion and Lucide icons. Frontend only.
Fonts (Inter and Manrope) are bundled through Fontsource.

## Run it

Built and tested with Node 24. Use a current Node LTS release.

```powershell
cd "C:\Users\harry\Desktop\My Portfolio"
```

```powershell
npm install
```

```powershell
npm run dev
```

Open http://localhost:5173 (if that port is busy, Vite prints the one it used).

| Command | What it does |
|---|---|
| `npm run build` | Production build into `dist/`, plus per-page SEO files, sitemap and robots.txt |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint |
| `npm test` | Tests for filtering, validation, enquiries and content data |

## Before you publish

- [ ] Send yourself a test enquiry through the contact form and check it arrives (Formspree address is set).
- [ ] Replace the project screenshots in `public/projects/` with larger ones (1600px wide or more) when you can.
- [ ] Review every line of copy (About, services, FAQ). It should match what you actually offer.
- [ ] Deploy and connect the domains (below), then check every address.

## Connect the contact form (Formspree)

1. Create an account at https://formspree.io using the email that should receive enquiries.
2. Create a form and copy its address (`https://formspree.io/f/...`).
3. Paste it into `FORMSPREE_ENDPOINT` in `src/config/site.js` (it is not a secret), or set
   `VITE_FORM_ENDPOINT` in Vercel's environment variables. Rebuild or redeploy.
4. Send a test enquiry and check that it arrives, including the spam folder. If sending fails, look at
   the form's spam protection (CAPTCHA) and allowed-domain settings in Formspree.

Check Formspree's current monthly limit and privacy terms, and add a privacy notice to the site.
Until the address is set, visitors send the prepared message themselves by email or WhatsApp.

## Domains and Vercel

| Address | Purpose | In Vercel |
|---|---|---|
| `hazetech.online` | HazeTech portfolio | Add to this project as the main domain |
| `www.hazetech.online` | Redirects to `hazetech.online` | Add to the same project |
| `demo.hazetech.online` | PrimeNest demo | Add to the same project |
| `app.hazetech.online` | Future web applications | Nothing yet |
| `api.hazetech.online` | Future backend APIs | Nothing yet |

1. Put the project in a Git repository and import it into Vercel (framework: Vite, build command
   `npm run build`, output folder `dist`).
2. In the project's domain settings, add the three live addresses **before** sharing any of them.
   The main site redirects demo visitors to `demo.hazetech.online`, so that address must work.
3. At your domain registrar, create exactly the DNS records Vercel shows for each address.
   Keep any existing email (MX) records.
4. Do not create `app` or `api` records until there is something to host there.

Vercel's free Hobby plan is meant for non-commercial use. Check its current terms; a company website
may need a paid plan.

One app serves both sites and picks the pages by address (`src/utils/domains.js`). Locally the demo
is at `/demo/primenest`; to preview the subdomain behaviour, open `http://demo.localhost:5173`.

## Where to edit

| Content | File |
|---|---|
| Company name, contact details, domains, form address | `src/config/site.js` |
| Services | `src/data/services.js` |
| Prices and conditions | `src/data/pricing.js` (check `faqs.js` and `seo.js`, which also quote prices) |
| Projects | `src/data/projects.js` |
| FAQ | `src/data/faqs.js` |
| Page titles and descriptions | `src/data/seo.js` |
| Demo listings and photos | `src/data/demo/` |
| Colours and fonts | `src/styles/index.css` |
| Logo | `src/components/layout/Logo.jsx`, `LogoMark.jsx`, `public/favicon.svg` |

Structure: `components/`, `pages/`, `layouts/`, `data/`, `hooks/`, `utils/`, `styles/`, `config/`.
Static files (screenshots, sharing image) go in `public/`.

## What needs a backend or third-party service

**Contact form.** Delivery uses Formspree (above). It receives a JSON POST with `fullName`,
`businessName`, `email`, `phone`, `projectType`, `budget`, `description`, `contactMethod` and
`_subject`. The site only says "sent" after a successful response; on failure it offers email and
WhatsApp. To use your own API later, change the address; the code is `submitEnquiry` in
`src/utils/enquiry.js`. Your own API must validate input and limit spam. Never put a secret key in a
`VITE_` variable.

**WhatsApp.** Uses wa.me links; no API needed. `src/config/site.js` has two numbers: `whatsapp`
(portfolio) and `demoWhatsapp` (PrimeNest). Use digits only, with the country code. If a number is
empty or a placeholder, the sender has to pick a chat, so the enquiry would not reach you.

**PrimeNest demo.** All data is fictional and held in files. Its enquiry forms send and store nothing.
There is **no admin dashboard** in the demo; a real one (listed in the Real Estate package) needs a
backend with sign-in, a database and image uploads.

**Demo photos** are hotlinked from Unsplash's image CDN, so they need internet access and depend on
that service. A fallback shows if one fails. To self-host, download them into `public/demo/` and
change `imageUrl` in `src/data/demo/images.js`. Never present them as real stock to a client.

**Analytics** is not installed. Choose a provider, and consider consent requirements, before adding it.

## SEO

`npm run build` writes an HTML file per main page with its own title, description, canonical and Open
Graph tags, so link previews work without JavaScript. The page **body** is still rendered by
JavaScript. Demo pages are `noindex`, and Vercel also sends a noindex header on the demo address.

Known limit: a shared link to the **root** of `demo.hazetech.online` may preview with HazeTech's
title and image, because the same `index.html` serves both addresses. Visitors still see PrimeNest.

`vercel.json` handles clean addresses and redirects. It has not been tested on a live deployment.
Unknown addresses show the in-app 404 page but return HTTP 200.
