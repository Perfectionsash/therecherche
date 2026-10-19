# TheRecherche.co.uk - Design Direction

## Design Philosophy: "Workshop to Home"

The visual identity emerges from the subject matter itself: British bespoke joinery. Not "luxury" as a marketing term, but luxury as the visible evidence of craft—visible grain, hand-fitted joints, the patina of materials that age honestly. The design should feel like stepping into a well-run workshop that happens to produce museum-quality work.

---

## Color: Material-Derived Palette

**Core Principle**: Colors pulled from the workshop and the materials, not from a branding exercise.

```css
/* Base - The workshop walls and timber */
--color-charcoal: #0D0D0D;           /* Near-black, soot/stain */
--color-dark-oak: #1C1815;           /* Aged oak heartwood */
--color-mid-timber: #3D332D;         /* Mid-tone walnut */
--color-warm-grey: #6B635C;          /* Stone dust, dried clay */
--color-chalk: #D4D0C8;              /* Chalk lines, pencil marks */
--color-paper: #F5F3F0;              /* Unbleached paper, raw linen */
--color-white: #FFFFFF;              /* Clean highlight only */

/* Accent - The materials that catch light */
--color-brass: #C9A86B;              /* Unlacquered brass hardware */
--color-brass-dim: #A88B52;          /* Aged/patinated brass */
--color-steel: #8B9196;              /* Brushed stainless, hinges */
--color-terracotta: #B86B4A;         /* Fired clay, used SPARINGLY for primary CTAs only */

/* Semantic - Derived from above */
--color-focus: var(--color-brass);
--color-error: var(--color-terracotta);
--color-success: #5D7B5D;            /* Sage - workshop plants */
```

**Usage Rules**:
- **Charcoal/Dark Oak** = Primary backgrounds (hero, footer, alternating sections)
- **Paper/Chalk** = Content backgrounds (article bodies, form areas)
- **Brass** = Interactive focus states, key UI accents, metallic detail
- **Terracotta** = ONLY primary CTA buttons (one per view max)
- **Steel** = Secondary buttons, form borders, subtle rules
- **Never** use terracotta as a decorative wash, gradient, or background

---

## Typography: One Family, Two Personalities

**Typeface**: **Fraunces** (variable: opsz, wght, SOFT, WONK) — a serif designed for display but readable at text sizes, with optical sizes that shift character from text to headline. Feels editorial, crafted, slightly idiosyncratic—like the work itself.

```css
/* Display - Fraunces at large optical sizes */
--font-display: 'Fraunces', Georgia, serif;
--display-weight: 300 400 500 600;    /* Variable, use 300 for hero, 500 for section heads */
--display-opsz: 96;                   /* Optical size for headlines */

/* Body - Fraunces at text optical size, or fallback to system UI for speed */
--font-body: 'Fraunces', system-ui, serif;
--body-opsz: 16;                      /* Optical size for body */
--body-weight: 400;                   /* Regular only - no bold in body */
--body-line-height: 1.7;              /* Generous for serif readability */

/* UI Labels/Meta - System sans for clear distinction at small sizes */
--font-ui: 'DM Sans', system-ui, sans-serif;
--ui-weight: 400 500;
--ui-letter-spacing: 0.08em;          /* Tracked out for labels */
```

**Scale** (clamped fluid, mobile → desktop):
```css
--text-xs: clamp(0.6875rem, 0.65rem + 0.19vw, 0.75rem);      /* 11-12px - meta, captions */
--text-sm: clamp(0.8125rem, 0.77rem + 0.21vw, 0.875rem);     /* 13-14px - body small */
--text-base: clamp(0.9375rem, 0.88rem + 0.29vw, 1rem);       /* 15-16px - body */
--text-lg: clamp(1.0625rem, 0.98rem + 0.41vw, 1.125rem);     /* 17-18px - intro/lead */
--text-xl: clamp(1.25rem, 1.12rem + 0.65vw, 1.5rem);         /* 20-24px - subheads */
--text-2xl: clamp(1.75rem, 1.5rem + 1.25vw, 2.25rem);        /* 28-36px - section titles */
--text-3xl: clamp(2.5rem, 2rem + 2.5vw, 3.5rem);             /* 40-56px - page titles */
--text-4xl: clamp(3.5rem, 2.5rem + 5vw, 6rem);               /* 56-96px - home hero only */
```

**Typographic Rules**:
- No all-caps labels (use tracked UI font at text-sm instead)
- No colored single words in headlines
- No eyebrow labels above headings
- Headlines set in Fraunces Display (opsz 96, weight 300-400) — light, wide, breathing
- Body text in Fraunces Text (opsz 16, weight 400) — readable, generous leading
- Max line length: 70ch (serif) / 65ch (UI font)
- Quotation marks: curly, hanging where possible

---

## Layout: Asymmetric Editorial Grid

**Concept**: "The Drawing Board" — content arranged like a maker's sketches pinned to a board. Not a rigid card grid. Hierarchy through scale and position, not uniform containers.

```
DESKTOP (≥1200px)          TABLET (768-1199px)         MOBILE (<768px)
┌─────────────────────┐    ┌──────────────────┐       ┌─────────────┐
│  HERO               │    │  HERO            │       │  HERO       │
│  [IMG 60%] [TXT 40%]│    │  [IMG] [TXT]     │       │  [IMG]      │
│                     │    │                  │       │  [TXT]      │
├─────────────────────┤    ├──────────────────┤       ├─────────────┤
│  FEATURED PROJECTS  │    │  FEATURED        │       │  FEATURED   │
│  ┌──┐ ┌──┐ ┌──┐     │    │  ┌──┐ ┌──┐       │       │  ┌──┐       │
│  │  │ │  │ │  │     │    │  │  │ │  │       │       │  │  │       │
│  │LG│ │MD│ │SM│     │    │  │LG│ │LG│       │       │  │LG│       │
│  └──┘ └──┘ └──┘     │    │  └──┘ └──┘       │       │  └──┘       │
├─────────────────────┤    ├──────────────────┤       ├─────────────┤
│  PROCESS            │    │  PROCESS         │       │  PROCESS    │
│  [NUM] [STEP 1]     │    │  [NUM] [STEP 1]  │       │  [NUM]      │
│  [NUM] [STEP 2]     │    │  [NUM] [STEP 2]  │       │  [STEP 1]   │
│  [NUM] [STEP 3]     │    │  [NUM] [STEP 3]  │       │  [NUM]      │
└─────────────────────┘    └──────────────────┘       │  [STEP 2]   │
                                                       └─────────────┘
```

**Grid System**:
- 12-column base, but **break the grid** for hero images, full-bleed project photography
- Content max-width: 72ch (≈1152px at base size) for text, full-bleed for images
- Asymmetric columns: 7/5, 8/4, 6/6 — chosen per section for visual tension
- Whitespace as active element: 64px-128px section gaps on desktop, 40px-64px mobile

---

## Visual Structure: Information, Not Decoration

| Element | Purpose | Treatment |
|---------|---------|-----------|
| **Numbered Steps** | Only for actual sequences (Design Journey: 5 phases) | Fraunces Display, 120pt, 15% opacity, brass on dark / charcoal on light |
| **Rules/Lines** | Separate related groups, not decorate | 1px steel, or brass for active/primary |
| **Borders** | Only on interactive elements (buttons, inputs, cards with hover) | 1px steel default, brass focus |
| **Shadows** | ONLY for true elevation (modals, dropdowns, sticky header) | `0 4px 24px rgba(13,13,13,0.12)` — no card shadows |
| **Background Images** | Full-bleed, content-relevant, never decorative patterns | Project photography only |
| **Gradients** | Never as decoration. Only: hero overlay (charcoal → transparent) for text legibility | Single directional, subtle |

---

## Motion: One Orchestrated Moment

**Page Load**: Single staggered entrance — hero image reveals (scale 1.02 → 1), headline fades up (opacity 0→1, translateY 16→0), CTA fades up 100ms later. Total: 600ms. **No other entrance animations.**

**Interactions**:
- Button hover: brass border → brass background, text to charcoal (150ms ease-out)
- Image hover: subtle scale 1.015 (300ms ease-out) — reveals detail on hover
- Nav mega-menu: fade + slide down 8px (200ms)
- Form validation: inline, immediate, no toast
- Lightbox: fade backdrop (200ms) + scale image (300ms spring)

**Respect**: `prefers-reduced-motion` → disable all non-essential motion instantly.

---

## Components: Distinctive, Not Kit-Like

### Buttons
```
Primary (CTA)          Secondary            Ghost (tertiary)
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Start Your Project│  View Portfolio    │  Learn More        │
│ ▸                 │                     │  ▸               │
└──────────────────┘  └──────────────────┘  └──────────────────┘
  Brass bg, charcoal  Steel border,        No border, brass
  text, brass border  charcoal text,       text, underline on
  → hover: fill       hover: brass bg      hover
```

### Project Cards (Portfolio)
- **Not uniform cards** — varying aspect ratios (landscape, portrait, square) matching the photography
- On hover: image scales 1.015, brass rule appears at bottom, project name + location fade in
- No shadow, no border radius (or 2px max — timber joints aren't rounded)
- Click → project detail page (not modal)

### Navigation
- **Desktop**: Horizontal, logo left, categories center (Kitchens, Wardrobes, Other, Showrooms, Journal), CTA right ("Start Your Project")
- **Hover category** → mega-menu with project thumbnails (not just links)
- **Mobile**: Full-screen drawer from right, brass rule at top, categories as stacked list with chevrons

### Forms
- Labels above inputs (not placeholder), UI font, tracked
- Input: paper bg, steel border, brass focus ring (2px offset)
- Error: terracotta border + text, icon left of message
- Submit: primary button, disabled state = 40% opacity

---

## Imagery: The Hero IS the Content

- **No stock photography** — only real project photography, workshop photography, team photography
- **Hero images**: Full-bleed, single project, composed for text overlay (dark right third, or gradient overlay)
- **Project galleries**: 12-20 images per project — hero, context, details, materials, hardware, before/after
- **Aspect ratios**: Mix of 4:5, 3:4, 16:9, 1:1 — dictated by the photography, not forced
- **Treatment**: Slight warmth in shadows, protected highlights, no heavy grading

---

## Writing Voice: The Maker Speaking

| Instead of... | Write... |
|---------------|----------|
| "Premium bespoke kitchens" | "Kitchens made to your measurements, in our workshop" |
| "Our process ensures quality" | "Every joint cut by hand. Every hinge fitted by eye." |
| "Contact us for a quote" | "Tell us about your room. We'll send ideas within a week." |
| "View our portfolio" | "See kitchens we've made for homes like yours" |
| "Book a showroom appointment" | "Visit our workshop. See the timber before you choose it." |

**Principles**:
- Active voice, present tense
- Specific over abstract ("hand-painted in Farrow & Ball 'Railings'" not "premium finishes")
- Process transparency builds trust
- Client language > marketing language
- One job per text element

---

## Accessibility: Baseline Without Announcing It

- Contrast: AAA for text (charcoal on paper = 14:1, brass on charcoal = 7:1)
- Focus: Visible brass ring (2px, 2px offset) on ALL interactive elements
- Semantic HTML: Proper heading hierarchy, landmarks, labels
- Images: Alt text describes the project/room, not "image of kitchen"
- Motion: Respects `prefers-reduced-motion`
- Forms: ARIA live regions for errors, proper label associations

---

## Quality Checklist (Pre-Launch)

- [ ] No warm cream (#F4F1EA) backgrounds
- [ ] No terracotta except primary CTA buttons
- [ ] No all-caps labels
- [ ] No eyebrow labels above headings
- [ ] No numbered markers on non-sequential content
- [ ] No card shadows on static content
- [ ] No scattered fade-up animations
- [ ] No gradient washes as decoration
- [ ] Fraunces variable font loading (opsz, wght axes)
- [ ] Single page-load animation only
- [ ] Focus states visible and brass
- [ ] Line lengths ≤ 70ch
- [ ] Real project photography throughout

---

*This design direction is specific to The Recherche: British bespoke joinery, workshop heritage, material honesty. It would not work for a SaaS dashboard, a fashion brand, or a generic "luxury" site. That is the point.*