# The Recherche — therecherche.co.uk

**Bespoke fitted wardrobes, kitchens & storage solutions website**

## Tech Stack
- **Framework**: Next.js 14.2.15 (App Router)
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14 + custom CSS variables
- **Fonts**: Scto Grotesk A (display), Merlo (body) — loaded via next/font/google (Inter fallback)
- **Deployment**: Vercel (analytics + speed insights)
- **SEO**: next-seo, custom JsonLd, sitemap.xml/robots.txt via API routes, llms.txt

## Project Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout with Header, Footer, fonts, metadata
│   ├── page.tsx             # Home page (Hero, Portfolio, BrandStory, LocalDesigners, HomeVisit, Collections)
│   ├── globals.css          # MANNA design tokens + Tailwind layers
│   ├── api/
│   │   ├── sitemap/route.ts # Dynamic sitemap.xml
│   │   └── robots/route.ts  # Dynamic robots.txt
│   ├── fitted-wardrobes/
│   ├── sliding-wardrobe-doors/
│   ├── walk-in-wardrobes/
│   ├── kitchens/
│   ├── home-office-storage/
│   ├── other-rooms/
│   ├── guides/
│   ├── contact/
│   ├── portfolio/
│   ├── faq/
│   ├── showrooms/
│   ├── service/
│   │   ├── design/
│   │   ├── installation/
│   │   ├── manufacturing/
│   │   └── guarantee/
│   ├── details/
│   │   ├── colours/
│   │   ├── styles/
│   │   ├── handles/
│   │   ├── accessories/
│   │   └── lighting/
│   ├── areas/
│   │   ├── london/
│   │   ├── south-east/
│   │   ├── south-west/
│   │   └── oxford/
│   ├── brochure/
│   ├── reviews/
│   ├── collections/
│   │   ├── hartford/
│   │   ├── kavanagh/
│   │   ├── butler/
│   │   ├── devine/
│   │   ├── harrington/
│   │   └── summerville/
│   ├── media-tv-units/
│   ├── home-libraries/
│   ├── boot-rooms/
│   ├── utility-rooms/
│   ├── bedroom-storage/
│   └── midlands-north/
│   └── scotland/
├── components/
│   ├── Header.tsx           # Navigation + mega dropdowns
│   ├── Footer.tsx           # 4-column links, showrooms, trust badge, legal
│   ├── Hero.tsx             # 3-column contact sheet + display marker + CTAs
│   ├── Portfolio.tsx        # 6-project grid (3 cols) with category/title/subtitle
│   ├── BrandStory.tsx
│   ├── LocalDesigners.tsx
│   ├── HomeVisit.tsx
│   ├── Collections.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── JsonLd.tsx           # Schema.org structured data
public/
├── llms.txt                 # AI agent discovery
└── robots.txt               # Static robots (also dynamic via API)
```

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## MANNA Design System (globals.css)

### Color Tokens (CSS Variables)
| Token | Light | Dark |
|-------|-------|------|
| `--color-bone` | `#f2edde` | `#1a1612` |
| `--color-rust` | `#af6446` | `#8b4f3a` |
| `--color-ink` | `#000000` | `#ffffff` |
| `--surface-bone-canvas` | `#f2edde` | `#1a1612` |
| `--surface-rust-panel` | `#af6446` | `#8b4f3a` |

### Typography
| Token | Value |
|-------|-------|
| `--font-display` | `'Scto Grotesk A', 'Space Grotesk', system-ui, sans-serif` |
| `--font-body` | `'Merlo', 'Inter', system-ui, sans-serif` |
| `--text-caption` | `14px` / `1.29` |
| `--text-body-sm` | `16px` / `1.5` |
| `--text-subheading` | `26px` / `1.23` |
| `--text-display` | `60px` / `1.29` |

### Spacing
| Token | Value |
|-------|-------|
| `--space-10` | `10px` |
| `--space-12` | `12px` |
| `--space-20` | `20px` |
| `--space-60` | `60px` |
| `--section-gap` | `60px` |
| `--element-gap` | `12px` |

### Border Radius
**Everything is 0px** — brutalist, no rounded corners:
- `--radius-images: 0px`
- `--radius-containers: 0px`
- `--radius-buttons: 0px`
- Global `* { border-radius: 0 !important }`

### Component Classes (Tailwind @layer components)
| Class | Purpose |
|-------|---------|
| `.section-bone` | Bone background section, 60px padding |
| `.section-rust` | Rust background section, 60px padding |
| `.display-marker` | Monumental section label (60px display font) |
| `.subheading` | 26px display font, weight 300 |
| `.body-text` | 16px body font |
| `.caption` | 14px body font |
| `.photo-frame` | Hairline border, overflow hidden, 0 radius |
| `.image-row` | 3-col CSS grid, gap 0, full-width contact sheet |
| `.image-row-2` | 2-col variant |
| `.link-plain` | Underlined text link, hover opacity 0.6 |
| `.content-container` | Max-width 800px, centered, 20px padding |
| `.section-wayfinding` | Display word anchored to edge |

### Utility Classes
| Class | Maps to |
|-------|---------|
| `.bg-bone` | `var(--surface-bone-canvas)` |
| `.bg-rust` | `var(--surface-rust-panel)` |
| `.text-ink` | `var(--color-ink)` |
| `.border-ink` | `var(--color-ink)` |
| `.font-display` | `var(--font-display)` |
| `.font-body` | `var(--font-body)` |
| `.rounded-none` | `border-radius: 0` |

## Image Strategy
- **Hero images**: `/hero-wardrobe-1.jpg`, `/hero-wardrobe-2.jpg`, `/hero-wardrobe-3.jpg` (85vh min-height)
- **Portfolio images**: `/project-1.jpg` through `/project-6.jpg` (50vh min-height)
- **Note**: Images not in `/public` — likely served from external CDN or iwardrobes.co.uk assets
- **next.config.js**: `remotePatterns: [{ protocol: 'https', hostname: '**' }]` allows any HTTPS hostname
- **Formats**: AVIF, WebP (configured in next.config.js)

## SEO & Structured Data
- **JsonLd.tsx**: Renders Organization, LocalBusiness, Product schemas
- **Sitemap**: Dynamic `/api/sitemap` → `/sitemap.xml` (rewrite)
- **Robots**: Dynamic `/api/robots` → `/robots.txt` (rewrite)
- **llms.txt**: Static in `/public` for AI discovery
- **Metadata**: Per-page + root layout defaults
- **OG/Twitter**: Configured with `/og-image.jpg` (needs to exist)

## Key Features
1. **Zero-radius brutalist aesthetic** — all corners sharp
2. **Contact sheet image grids** — CSS grid, no gaps, full-bleed
3. **Display marker wayfinding** — monumental section labels
4. **Dual-theme (light/dark)** via CSS variables + `prefers-color-scheme`
5. **Mega dropdown navigation** — 3-column desktop dropdowns
6. **Accessibility**: ARIA labels, semantic HTML, focus-visible outlines, skip links
7. **Vercel Analytics + Speed Insights** integrated

## iwardrobes.co.uk Image Migration
The user mentioned copying images from iwardrobes.co.uk. Current references:
- Hero: `hero-wardrobe-1/2/3.jpg`
- Portfolio: `project-1.jpg` through `project-6.jpg`
- These are referenced as root-relative paths (`/image.jpg`)
- Next.js image config allows any HTTPS hostname for remote images

## Next Steps / Known Gaps
- [ ] Add actual image files to public/ or configure CDN
- [ ] Create `/og-image.jpg` for social sharing
- [ ] Create `/favicon.ico`, `/favicon-16x16.png`, `/apple-touch-icon.png`, `/site.webmanifest`
- [ ] Replace placeholder phone/address in schemas
- [ ] Add Google site verification code
- [ ] Build out individual page components (many routes exist but components may be stubs)