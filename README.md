# Chandra Rao – Personal Site

A single-page, Apple-inspired personal site for **Principal / Senior Mobile Engineer** positioning. It showcases experience across iOS, frontend, platform work, and AI-assisted workflows with a focus on polished UX and recruiter-friendly storytelling. [file:94][file:93]

## Features

- Responsive single-page layout with smooth scrolling and reveal-on-scroll animations. [file:94][file:93]  
- Themed hero section with metrics, floating highlight cards, and strong positioning statement. [file:94][file:93]  
- Case studies for DBS, foodpanda, and platform/security work with quantified impact metrics. [file:94]  
- Shipped apps carousel cards with App Store links and phone mockups. [file:94][file:93]  
- Skills grid grouped by mobile/frontend, backend/platform, and quality/leadership expectations. [file:94]  
- Timeline-based career history, awards, and applied AI projects. [file:94]  
- Contact panel with optimized actions (copy email on desktop, native email/call on mobile, plus GitHub and LinkedIn). [file:94][file:93]

## Tech Stack

- HTML5 (semantic, single-page structure with sections for hero, case studies, shipped apps, experience, skills, and contact). [file:94]  
- CSS3 with custom properties for typography, colors, spacing, and light/dark themes. [file:93]  
- Vanilla JavaScript for:
  - Theme toggle (light/dark with `prefers-color-scheme` support). [file:94][file:93]  
  - IntersectionObserver-based reveal animations. [file:94]  
  - Shipped apps slider (swipe and dot navigation). [file:92][file:93]  
  - Enhanced contact interactions (mobile/desktop-aware email and phone behavior, plus copy-to-clipboard toast). [file:94]

## Project Structure

- `index.html` – Main page markup and content. [file:94]  
- `style-3.css` – Core styling, layout, design tokens, theming, and component styles. [file:93]  
- `scripts-2.js` – App slider logic, scroll reveal, theme toggle, and small UX enhancements. [file:92]  
- `assets/` – Profile photo, app screenshots, and other visuals referenced in the layout. [file:94]

## Running Locally

1. Clone or download the project folder.  
2. Open `index.html` directly in a browser, or serve it with a simple static server:
   - For example: `python -m http.server 8000` and open `http://localhost:8000`.  
3. Test both desktop and mobile (or DevTools responsive mode) to see layout, theme, and contact behavior. [file:94][file:93]

## Customization

- Update profile text, metrics, and case studies directly in `index.html`. [file:94]  
- Adjust colors, spacing, and radius via CSS custom properties at the top of `style-3.css`. [file:93]  
- Extend or tweak interactions (e.g., contact toasts, sliders) in `scripts-2.js`. [file:92]

## Deployment

This is a static site and can be deployed on any static hosting provider:

- GitHub Pages, Netlify, Vercel, or Cloudflare Pages work without any config.  
- Just upload `index.html`, `style-3.css`, `scripts-2.js`, and the `assets` folder. [file:94][file:93]
