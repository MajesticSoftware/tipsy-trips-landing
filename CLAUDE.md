# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Tipsy Trips landing page - a static marketing website for an upcoming mobile app (Spring 2026) that helps users discover happy hour specials in Baltimore. Pure vanilla HTML/CSS/JavaScript with Vercel deployment.

## Architecture
- **Static Site**: No build process, framework, or package manager
- **Single Page**: All content in index.html (353 lines)
- **Vanilla Stack**: Pure HTML, CSS (1266 lines), JavaScript (320 lines)
- **Deployment**: Vercel static hosting with automatic deployments on push

## Development Commands
```bash
# Run locally (choose one):
python3 -m http.server 8000
npx serve
# Or open index.html directly in browser

# Deploy:
git push  # Auto-deploys via Vercel
```

## Key Files
- `index.html` - Complete landing page structure
- `styles.css` - Comprehensive styling with CSS variables design system
- `script.js` - All interactions (nav, animations, pricing toggle)
- `IMG_1396 3.jpg` - Logo image
- `Screen Option.png` - App mockup

## CSS Architecture
- CSS Variables for design system (colors, spacing, shadows)
- BEM-like naming convention
- Mobile-first responsive design
- Organized by section with clear comments

## JavaScript Features
- Mobile navigation toggle
- Navbar hide/show on scroll
- Smooth scrolling
- Intersection Observer animations
- Membership pricing toggle (monthly/annual)
- Notification system setup

## Adding Features
- **New sections**: Add to index.html between existing sections
- **Styling**: Add to appropriate section in styles.css
- **Interactions**: Add to script.js with existing patterns
- **Images**: Place in root directory

## Important Patterns
- All event listeners are in script.js DOMContentLoaded
- Animations use Intersection Observer for performance
- CSS animations use keyframes and transitions
- Mobile menu uses class toggle pattern
- Smooth scroll uses native behavior with fallback