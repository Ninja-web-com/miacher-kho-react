# Miacher Kho Camping & Nature Retreat

Modern React rewrite of the premium multi-page website for Miacher Kho Camping & Nature Retreat  
**Location:** Nagar Valley, Gilgit-Baltistan, Pakistan

## Stack

- Vite + React 19 + TypeScript
- React Router
- Tailwind CSS v4 (exact brand colors)
- Font Awesome + Google Fonts (Playfair Display + Inter)

## Changes from original static site

- Completely removed Packages page, navigation, and all related CTAs
- Removed “Plan Your Trip” as a primary nav concept
- Added new **Services** page (`/services`) combining Stay options + Experiences + Support
- Clean component architecture
- Central CONFIG for WhatsApp / phone / email / maps
- Mobile sticky booking bar retained
- Same cinematic, honest brand voice

## Navigation

Home · About · Stay · Services · Gallery · Location · Reviews · Contact  
(Best Time & FAQ accessible from mobile menu)

## Quick start

```bash
npm install
npm run dev
```

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages).  
Build command: `npm run build`  
Publish directory: `dist`

## Configuration

Edit `src/lib/config.ts` to update WhatsApp number, phone, email and maps link.

## Notes for Owner

- Replace Unsplash placeholders with real Miacher Kho photography
- Update rates and seasonal info with accurate data
- Add real guest reviews only
- Confirm travel/access details before publishing
