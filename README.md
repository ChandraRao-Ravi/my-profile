# Chandra Rao – Personal Site

A single-page, Apple-inspired personal site for **Principal / Senior Mobile Engineer** positioning. It showcases experience across iOS, frontend, platform work, and AI-assisted workflows with a focus on polished UX and recruiter-friendly storytelling

## Features

- Responsive single-page layout with smooth scrolling and reveal-on-scroll animations.
- Themed hero section with metrics, floating highlight cards, and strong positioning statement.
- Case studies for DBS, foodpanda, and platform/security work with quantified impact metrics.
- Shipped apps carousel cards with App Store links and phone mockups.
- Skills grid grouped by mobile/frontend, backend/platform, and quality/leadership expectations.
- Timeline-based career history, awards, and applied AI projects.
- Contact panel with optimized actions (copy email on desktop, native email/call on mobile, plus GitHub and LinkedIn).

## Tech Stack

- HTML5 (semantic, single-page structure with sections for hero, case studies, shipped apps, experience, skills, and contact). 
- CSS3 with custom properties for typography, colors, spacing, and light/dark themes.
- Vanilla JavaScript for:
  - Theme toggle (light/dark with `prefers-color-scheme` support). 
  - IntersectionObserver-based reveal animations.
  - Shipped apps slider (swipe and dot navigation).  
  - Enhanced contact interactions (mobile/desktop-aware email and phone behavior, plus copy-to-clipboard toast). 

## Project Structure

- `index.html` – Main page markup and content.  
- `style-3.css` – Core styling, layout, design tokens, theming, and component styles.  
- `scripts-2.js` – App slider logic, scroll reveal, theme toggle, and small UX enhancements. 
- `assets/` – Profile photo, app screenshots, and other visuals referenced in the layout.

## Running Locally

1. Clone or download the project folder.  
2. Open `index.html` directly in a browser, or serve it with a simple static server:
   - For example: `python -m http.server 8000` and open `http://localhost:8000`.  
3. Test both desktop and mobile (or DevTools responsive mode) to see layout, theme, and contact behavior.

## Customization

- Update profile text, metrics, and case studies directly in `index.html`. 
- Adjust colors, spacing, and radius via CSS custom properties at the top of `style-3.css`. 
- Extend or tweak interactions (e.g., contact toasts, sliders) in `scripts-2.js`. 

## Deployment

This is a static site and can be deployed on any static hosting provider:

- GitHub Pages, Netlify, Vercel, or Cloudflare Pages work without any config.  
- Just upload `index.html`, `style-3.css`, `scripts-2.js`, and the `assets` folder. 
