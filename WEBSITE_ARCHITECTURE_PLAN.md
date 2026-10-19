# TheRecherche.co.uk - Website Architecture Plan

## Project Overview
- **Domain**: therecherche.co.uk
- **Focus**: Bespoke kitchens & fitted wardrobes (full home joinery)
- **Design Reference**: tomhowley.co.uk (luxury, editorial, image-led)
- **Content Source**: iwardrobes.co.uk (existing content to humanize & adapt)
- **Tech Stack**: Next.js 14+ (App Router), React 18, TypeScript, Tailwind CSS
- **Hosting**: Vercel (connected to GitHub)
- **Images**: Kitchen/wardrobe portfolio images available on request

---

## 1. Site Structure (Information Architecture)

### Primary Navigation
```
Home
├── Kitchens
│   ├── Portfolio / Gallery
│   ├── Design Process
│   ├── Materials & Finishes
│   └── Appliances
├── Wardrobes
│   ├── Portfolio / Gallery
│   ├── Design Process
│   ├── Internal Systems
│   └── Door Styles & Finishes
├── Other Joinery
│   ├── Media Walls
│   ├── Home Offices
│   ├── Utility Rooms
│   └── Boot Rooms
├── Inspiration
│   ├── Real Homes / Case Studies
│   ├── Journal / Blog
│   └── Design Guides
├── About
│   ├── Our Story
│   ├── Craftsmanship
│   ├── Sustainability
│   └── Team
└── Contact
    ├── Enquiry Form
    └── Brochure Request
```

### Key Pages & Templates

| Page | Template Type | Priority |
|------|---------------|----------|
| Home | Unique (Hero + Featured Sections) | P0 |
| Kitchen Portfolio | Grid/Filterable Gallery | P0 |
| Wardrobe Portfolio | Grid/Filterable Gallery | P0 |
| Kitchen Single Project | Long-form Case Study | P0 |
| Wardrobe Single Project | Long-form Case Study | P0 |
| Design Process (Kitchens) | Step-by-step Process | P1 |
| Design Process (Wardrobes) | Step-by-step Process | P1 |
| Materials & Finishes | Swatch Library + Specs | P1 |
| Real Homes / Case Studies | Masonry Grid + Detail | P1 |
| Journal / Blog | Article List + Single | P2 |
| About Us | Story + Values + Team | P1 |
| Contact / Enquiry | Form + Map + FAQ | P0 |
| Brochure Request | Lead Capture Form | P1 |

---

## 2. Component Architecture

### Global Components
```
Layout
├── Header (sticky, mega-nav for Kitchens/Wardrobes)
├── Footer (newsletter, links, social, contact)
├── Cookie Banner
└── SEO Metadata Provider

UI Primitives (shadcn/ui + custom)
├── Button (primary, outline, ghost, arrow variants)
├── Card (project, blog, testimonial)
├── Image (optimized, blur placeholder, lightbox)
├── Carousel/Slider (hero, gallery, testimonials)
├── Accordion (FAQ, process steps)
├── Tabs (finishes, specifications)
├── Form (enquiry, brochure, booking)
├── Modal (lightbox, video, enquiry success)
├── Toast/Notification
└── Loading Skeletons
```

### Section Components (Composable)
```
Hero Sections
├── HomeHero (full-screen, background image, headline, CTA)
├── CategoryHero (kitchens/wardrobes/other - filtered)
├── ProjectHero (single project - hero image + meta)
└── ArticleHero (blog/guide - image + category + date)

Content Sections
├── ImageGrid (masonry, uniform, featured)
├── ImageTextAlternating (process steps, features)
├── SplitContent (50/50 image + copy)
├── StatsBar (projects completed, years)
├── TestimonialCarousel (client quotes + project link)
├── LogoCloud (partners, appliances, certifications)
├── CTASection (brochure, contact)
├── ProcessTimeline (horizontal/vertical steps)
├── FinishSwatches (color/material selector)
└── BlogPreview (latest 3-6 posts)

Forms
├── EnquiryForm (multi-step: type → details → contact)
├── BrochureRequestForm (simple: name, email, address)
├── BookingForm (custom calendar, consultation booking)
└── NewsletterSignup (footer + exit intent)
```

### Project-Specific Components
```
Kitchen Components
├── KitchenFilterToolbar (style, layout, color, price)
├── KitchenProjectCard (thumb, name, location, style tags)
├── KitchenDetailGallery (before/after, details, specs)
├── KitchenSpecSheet (appliances, worktops, hardware)
└── AppliancePartnerLogos

Wardrobe Components
├── WardrobeFilterToolbar (type, finish, room, system)
├── WardrobeProjectCard
├── WardrobeDetailGallery
├── InternalSystemDiagram (visual configurator)
└── DoorStyleSelector

Shared Project Components
├── ProjectMeta (location, style, size, duration, budget range)
├── ProjectGallery (lightbox, fullscreen, keyboard nav)
├── ProjectSpecs (materials, appliances, hardware)
├── ProjectTestimonial (client quote + photo)
├── RelatedProjects (3-4 similar projects)
└── ProjectCTA (enquire, brochure, book consultation)
```

---

## 3. Design System (Refined - See DESIGN_DIRECTION.md)

**Full design direction documented in `DESIGN_DIRECTION.md`** — key highlights:

### Color: Material-Derived (Not Brand-Derived)
```css
--color-charcoal: #0D0D0D;           /* Workshop soot */
--color-dark-oak: #1C1815;           /* Aged oak */
--color-warm-grey: #6B635C;          /* Stone dust */
--color-chalk: #D4D0C8;              /* Chalk lines */
--color-paper: #F5F3F0;              /* Raw linen */
--color-brass: #C9A86B;              /* Unlacquered hardware - focus/accent */
--color-terracotta: #B86B4A;         /* Fired clay - PRIMARY CTA ONLY */
```

### Typography: Fraunces Variable (One Family, Two Personalities)
- **Display**: Fraunces opsz=96, weight 300-400 (light, editorial)
- **Body**: Fraunces opsz=16, weight 400 (readable, generous leading)
- **UI Labels**: DM Sans, tracked +0.08em
- No all-caps, no colored single words, no eyebrow labels

### Layout: Asymmetric Editorial Grid ("The Drawing Board")
- Content arranged like maker's sketches — hierarchy through scale/position
- Break the grid for hero imagery, full-bleed photography
- 12-col base but asymmetric splits (7/5, 8/4) per section
- Whitespace as active element (64-128px section gaps)

### Motion: One Orchestrated Moment Only
- Page load: hero reveal (600ms staggered) — nothing else animates on entrance
- Interactions: purposeful (hover scale, focus rings, menu fade)
- Respects `prefers-reduced-motion`

### Components: Distinctive, Not Kit-Like
- Buttons: Primary (brass fill), Secondary (steel border), Ghost (underline)
- Project cards: varying aspect ratios, no shadows, brass rule on hover
- Forms: paper inputs, steel borders, brass focus, terracotta errors

---

## 4. Content Strategy (From iwardrobes.co.uk)

### Content to Migrate & Humanize

| iwardrobes Section | TheRecherche Adaptation | Tone Shift |
|--------------------|-------------------------|------------|
| "About Us" company history | "Our Story" - founder narrative, workshop focus | Corporate → Personal/Heritage |
| Product lists (wardrobes/kitchens) | "Portfolio" - curated projects with stories | Spec-led → Project-led |
| "Our Process" steps | "Design Journey" - 5 phases with imagery | Functional → Experiential |
| Materials/finishes tables | "Material Library" - tactile descriptions + swatches | Technical → Sensory |
| FAQ | "Your Questions" - conversational, grouped by journey | Q&A → Guidance |
| Testimonials | "Real Homes" - full case studies with photos | Quotes → Stories |
| Blog/News | "Journal" - design guides, trends, behind-the-scenes | News → Editorial |

### Voice & Tone Guidelines
- **Voice**: Knowledgeable craftsman, not salesperson
- **Tone**: Warm, confident, quietly authoritative
- **Principles**:
  - Lead with beauty, follow with function
  - Specific over generic ("hand-painted in Farrow & Ball 'Railings'" not "premium finishes")
  - Process transparency builds trust
  - Client voices > marketing claims

---

## 5. Technical Implementation

### Next.js 14+ App Router Structure
```
src/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Home
│   │   ├── kitchens/
│   │   │   ├── page.tsx                # Kitchen portfolio
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            # Kitchen project detail
│   │   │   ├── design-process/page.tsx
│   │   │   ├── materials/page.tsx
│   │   │   └── appliances/page.tsx
│   │   ├── wardrobes/
│   │   │   ├── page.tsx                # Wardrobe portfolio
│   │   │   ├── [slug]/page.tsx         # Wardrobe project detail
│   │   │   ├── design-process/page.tsx
│   │   │   ├── internal-systems/page.tsx
│   │   │   └── door-styles/page.tsx
│   │   ├── other-joinery/
│   │   │   ├── page.tsx
│   │   │   ├── media-walls/page.tsx
│   │   │   ├── home-offices/page.tsx
│   │   │   ├── utility-rooms/page.tsx
│   │   │   └── boot-rooms/page.tsx
│   │   ├── inspiration/
│   │   │   ├── page.tsx
│   │   │   ├── real-homes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── journal/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── guides/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/page.tsx
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   ├── craftsmanship/page.tsx
│   │   │   ├── sustainability/page.tsx
│   │   │   └── team/page.tsx
│   │   └── contact/
│   │       ├── page.tsx
│   │       ├── brochure/page.tsx
│   │       └── thank-you/page.tsx
│   ├── api/
│   │   ├── enquiry/route.ts
│   │   ├── brochure/route.ts
│   │   ├── booking/route.ts
│   │   ├── newsletter/route.ts
│   │   └── revalidate/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── loading.tsx
├── components/
│   ├── ui/                 # Primitives (shadcn-based)
│   ├── sections/           # Composable sections
│   ├── projects/           # Kitchen/wardrobe specific
│   ├── forms/              # Form components
│   └── layout/             # Header, Footer, Navigation
├── lib/
│   ├── utils.ts
│   ├── validations.ts      # Zod schemas
│   ├── email.ts            # Nodemailer/Resend
│   ├── cms.ts              # Contentful/Sanity client (if used)
│   └── image.ts            # Cloudinary/Vercel image helpers
├── content/                # MDX/JSON content (if file-based)
│   ├── projects/
│   ├── journal/
│   └── guides/
├── types/
│   ├── project.ts
│   ├── blog.ts
│   └── global.ts
└── styles/
    ├── globals.css
    └── variables.css
```

### Data Strategy

**Option A: File-based (MDX/JSON) - Recommended for v1**
- Projects, blog posts, guides as MDX files in `/content`
- Type-safe with `contentlayer` or custom loader
- Simple, version-controlled, no external dependencies
- Easy to edit locally, preview in Vercel

**Option B: Headless CMS (Contentful/Sanity) - For content team**
- Non-technical editors can update content
- Preview mode support
- Webhooks for revalidation
- Adds complexity & cost

**Recommendation**: Start with Option A (file-based), migrate to CMS if content team grows.

### Image Strategy
- **Source**: Local `/public/images` + user-provided kitchen images
- **Optimization**: Next.js `<Image>` component + `next/image` loader
- **Formats**: AVIF/WebP auto, fallback JPEG
- **Sizes**: Responsive breakpoints (640, 750, 828, 1080, 1200, 1920, 2560)
- **Placeholders**: Blur-data-URL (base64) for LQIP
- **Gallery**: Custom lightbox component (no heavy deps)

### Performance Targets
| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |

### SEO Strategy
- **Metadata**: Dynamic per page via `generateMetadata`
- **Sitemap**: Auto-generated via `next-sitemap`
- **Structured Data**: JSON-LD for Project, Organization, LocalBusiness, Article
- **Open Graph**: Per-page images (project hero images)
- **Robots**: Allow all, disallow `/api/`, `/thank-you/`

---

## 6. Forms & Integrations

### Enquiry Flow
```
User clicks "Start Your Project"
    ↓
Step 1: What are you planning? (Kitchen / Wardrobe / Other / Not sure)
    ↓
Step 2: Project details (room size, style preference, timeline, budget range)
    ↓
Step 3: Contact info (name, email, phone, postcode, preferred contact method)
    ↓
Submit → API → Email to sales + CRM (HubSpot/Pipedrive) + Auto-reply to user
    ↓
Redirect to /thank-you with next steps
```

### Brochure Request
- Simple form: Name, Email, Address, Postcode, Interest (Kitchen/Wardrobe/Both)
- Trigger: Hero CTA, Project pages, Footer, Exit intent
- Fulfillment: PDF download + physical mail (if address provided)

### Showroom Booking
- Calendar integration (Calendly/Cal.com embed or custom)
- Select showroom → date/time → contact details
- Confirmation email + calendar invite + reminder 24h before

### Newsletter
- Provider: Resend/Loops/ConvertKit
- Signup: Footer, blog sidebar, project page CTA, exit intent
- Double opt-in, unsubscribe link
- Segmentation: Kitchen interest, Wardrobe interest, General

---

## 7. Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Next.js 14 + TypeScript + Tailwind setup
- [ ] ESLint, Prettier, Husky, lint-staged
- [ ] Design system (colors, typography, spacing, primitives)
- [ ] Global layout (Header, Footer, Navigation)
- [ ] Image optimization config
- [ ] Vercel preview deployments working

### Phase 2: Core Pages (Week 2-3)
- [ ] Home page (Hero, Featured Projects, Process Preview, Testimonials, CTA)
- [ ] Kitchen Portfolio (grid, filters, load more)
- [ ] Wardrobe Portfolio (grid, filters, load more)
- [ ] Project Detail Template (kitchen & wardrobe variants)
- [ ] Contact/Enquiry form + API route

### Phase 3: Content Pages (Week 3-4)
- [ ] Design Process (Kitchens + Wardrobes)
- [ ] Materials & Finishes / Door Styles
- [ ] About (Story, Craftsmanship, Sustainability, Team)
- [ ] Real Homes / Case Studies
- [ ] Journal/Blog (list + single)
- [ ] Booking / Consultation page

### Phase 4: Polish & Launch (Week 4-5)
- [ ] Content migration & humanization from iwardrobes
- [ ] Kitchen/wardrobe images integration
- [ ] Performance optimization (fonts, images, bundles)
- [ ] Accessibility audit (WCAG AA)
- [ ] Cross-browser testing
- [ ] Form testing & email deliverability
- [ ] Analytics (GA4, Clarity/Hotjar)
- [ ] Production deploy + DNS

---

## 8. Content Migration Checklist (from iwardrobes.co.uk)

### High Priority (Launch Blockers)
- [ ] Company story / About Us → Our Story
- [ ] Kitchen portfolio projects (6-8 minimum) → Kitchen Portfolio
- [ ] Wardrobe portfolio projects (6-8 minimum) → Wardrobe Portfolio
- [ ] Design process steps (both) → Design Journey
- [ ] Materials/finishes descriptions → Material Library
- [ ] Contact details + form fields → Contact
- [ ] Testimonials (5-10) → Real Homes/Testimonials

### Medium Priority (Post-Launch)
- [ ] Blog posts → Journal (rewrite top 10)
- [ ] FAQ → Your Questions
- [ ] Team bios → Team
- [ ] Sustainability info → Sustainability
- [ ] Appliance partners → Partners section

### Low Priority (Ongoing)
- [ ] Design guides → Guides
- [ ] Press mentions → As featured in
- [ ] Awards/certifications → Trust signals

---

## 9. Vercel & GitHub Configuration

### Repository Structure
```
therecherche-website/
├── .github/
│   └── workflows/
│       ├── preview.yml      # Deploy preview on PR
│       └── production.yml   # Deploy production on main
├── .vercel/
│   └── project.json
├── public/
│   ├── images/
│   │   ├── projects/
│   │   │   ├── kitchens/
│   │   │   └── wardrobes/
│   │   ├── team/
│   │   └── heroes/
│   └── fonts/
├── src/                    # (as above)
├── content/                # MDX files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── next-sitemap.config.js
└── README.md
```

### Vercel Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm ci`
- **Node Version**: 20.x
- **Environment Variables**:
  - `RESEND_API_KEY` / `SENDGRID_API_KEY`
  - `CRM_WEBHOOK_URL` (HubSpot/Pipedrive)
  - `REVALIDATE_SECRET` (for on-demand ISR)
  - `NEXT_PUBLIC_GA_ID` (GA4)
  - `NEXT_PUBLIC_CLARITY_ID` (optional)

### Git Workflow
- `main` → Production (auto-deploy)
- `staging` → Staging environment (optional)
- Feature branches → Preview deployments
- PR reviews required before merge

---

## 10. Open Questions / Decisions Needed

**Decided:**
1. ✅ **CMS**: File-based (MDX) — content in `/content` as MDX files
2. ✅ **Calendar**: Custom booking system (consultation booking)
3. ✅ **CRM**: Email-only for v1 (no HubSpot/Pipedrive integration yet)

**Remaining:**
4. **Analytics**: GA4 only, or add Clarity/Hotjar?
5. **Search**: Algolia DocSearch for journal/guides? → **No**
6. **Multi-language**: Any Welsh/other language requirements? → **No**
7. **Budget range display**: Show on project cards or hide? → **No**
8. **Virtual consultations**: Offer video call booking? → **No**
9. **3D/AR**: Any configurator/visualizer plans? → **No**
10. **Maintenance**: Who handles content updates post-launch? → **Client + Developer**

---

## 11. Next Steps

1. **Confirm architecture** - Review this plan, adjust priorities
2. **Gather content** - Export all text/images from iwardrobes.co.uk
3. **Collect images** - Request kitchen/wardrobe photography
4. **Set up repo** - Initialize Next.js project on GitHub
5. **Begin Phase 1** - Foundation setup
6. **Weekly check-ins** - Review progress, adjust scope

---

*Document created: 2026-10-15*
*Status: Draft - Awaiting stakeholder review*