# Stellar Web Development — Portfolio Project

## Owner

**Jelte Homminga** — Senior React & Expo Engineer, based in Bali, Indonesia.

- Company: **Stellar Web Development**
- Site: [stellar-web.dev](https://stellar-web.dev)
- GitHub: [jeltehomminga](https://github.com/jeltehomminga)
- LinkedIn: [jeltehomminga](https://linkedin.com/in/jeltehomminga)
- Stack: TypeScript, React, Next.js (App Router), React Native, Expo
- IDE: Cursor (AI-augmented workflow with Claude + Copilot)

---

## Project Status (Nov 2026)

**Live at [stellar-web.dev](https://stellar-web.dev)**, deployed on Vercel (project `stellar-portfolio`, team `jeltehommingas-projects`).

Redesigned in Nov 2026 from the "Tropical" theme to a quiet editorial design (branch `redesign/editorial`).
The design system lives in **`DESIGN.md`**; read it before changing anything visual.

Lighthouse after the redesign (local production build, Lighthouse 13.6):

- Home and blog posts: **100 / 100 / 96 / 100** on mobile and desktop (the 96 is the `/_vercel/*` analytics scripts 404ing locally)
- Mobile home, same machine, before → after: performance 47 → 100, CLS 0.312 → 0, TBT 1.7 s → 50 ms, LCP 3.6 s → 0.8 s

### Tech Stack

- **Next.js 16** (Turbopack, App Router), **React 19**, **TypeScript 5**
- **Tailwind CSS 4** with design tokens in `globals.css` (no component library)
- **MDX** via `next-mdx-remote/rsc`; code highlighting via `rehype-pretty-code` + Shiki (build time, zero client JS)
- **Vercel** (deployment, analytics, speed insights)
- Fonts via `next/font`: Schibsted Grotesk (UI and headings), Source Serif 4 (blog prose), JetBrains Mono (code)

### Component Architecture

Everything is a Server Component except the hidden easter egg.

| Component | Type | Purpose |
| --- | --- | --- |
| `site-header.tsx` | Server | Name + Work / Writing / About links; `current` prop sets `aria-current` |
| `section.tsx` | Server | Homepage section wrapper: h2 on a hairline, consistent rhythm |
| `hero.tsx` | Server | H1 headline, two proof paragraphs, availability, Email + LinkedIn |
| `work.tsx` | Server | Case studies (problem / what I did / outcome) as a `<dl>` |
| `writing.tsx` | Server | Latest 4 posts via `post-list.tsx` |
| `post-list.tsx` | Server | Date + title + description rows (homepage and `/blog`) |
| `experience.tsx` | Server | Compact career list |
| `about.tsx` | Server | Portrait + bio + personality line + tools as plain text |
| `portrait.tsx` | Server | Renders `public/images/jelte.jpg` if present, else an initials placeholder |
| `contact.tsx` | Server | Email, LinkedIn, GitHub |
| `footer.tsx` | Server | Copyright line + links |
| `client-extras.tsx` | Client | Lazy-loads `cursor-trail.tsx` (`ssr: false`) |
| `cursor-trail.tsx` | Client | Konami code → padel-ball cursor trail (hidden easter egg) |
| `blog/mdx-components.tsx` | Server | MDX element map (headings, links, figures + captions, code, tables) |
| `blog/caption.tsx` | Server | Shared `<figcaption>` |
| `blog/theme-grid.tsx`, `blog/lighthouse-comparison.tsx` | Server | Figure components used by the first post |

### Key Files

- `DESIGN.md` — design system: type, tokens (light/dark), spacing, motion, component rules, don'ts
- `src/app/layout.tsx` — root layout, Schibsted Grotesk, metadata, Person JSON-LD, console message
- `src/app/page.tsx` — homepage composition
- `src/app/globals.css` — tokens, type scale, link styles, code block styles, reduced motion
- `src/app/blog/layout.tsx` — loads Source Serif 4 + JetBrains Mono for blog routes only
- `src/lib/og.tsx` — shared OG image renderer (site + per-post); fonts in `src/assets/fonts/`
- `src/app/opengraph-image.tsx`, `twitter-image.tsx`, `blog/[slug]/opengraph-image.tsx` — thin wrappers around `og.tsx`
- `next.config.ts` — image formats/sizes/qualities, `inlineCss`
- `public/images/jelte.jpg` — **to add**: professional portrait, 4:5, at least 800×1000

---

## The Journey — How This Portfolio Was Built

> This section documents the full build process for Jelte's planned blog post about building a portfolio with AI tools. It covers what worked, what didn't, tools used, and lessons learned.

### Phase 1: Claude Chat on Mobile (Ideation & HTML Prototype)

**Tool**: Claude (Anthropic) via mobile app — chatting on the phone from Bali.

Jelte started the entire project by chatting with Claude on his phone. No IDE, no code editor — just a conversation about what his portfolio should look like and say.

**What happened in this phase:**

1. **Positioning & brand strategy** — Through conversation, Jelte and Claude figured out the messaging: "AI-first Frontend Engineer", the 4 differentiators, the confident-but-not-bold tone. Claude helped refine the messaging away from generic freelancer language toward architecture-level positioning.
2. **Content structure** — Decided on all 9 sections, the order, what goes in each one. The "Now" section, engineering philosophy cards, and competence-grouped tech stack all emerged from back-and-forth.
3. **Design system** — The tropical Bali theme with ocean/sand/palm colors, Lilita One + Nunito fonts, floating emoji, toast notifications — all designed conversationally.
4. **Three theme concepts** — Originally designed 3 switchable themes (Minimal Pro, Tropical Fun, Cyberpunk). Focused on Tropical as the primary.
5. **Full HTML prototype** — Claude generated a complete single-file `index.html` (~600KB with base64-embedded caricature). This was a working, responsive, interactive prototype with all sections, animations, and Easter eggs.

**What worked well:**

- Starting on mobile forced focus on decisions and content rather than implementation details
- The conversational approach led to better positioning than sitting in front of a blank IDE
- Having a complete HTML prototype meant the design was validated before any "real" development
- Claude was good at iterating on tone and messaging — went through several rounds

**Lessons learned:**

- A 600KB single-file HTML with base64 images is not a good long-term format, but it's great for prototyping
- Mobile chat is perfect for ideation but limited for code review
- The prototype served as a detailed spec for the Next.js port

### Phase 2: Claude Code — Port to Next.js (The Handover)

**Tool**: Claude Code (CLI) in Cursor IDE

This is where the handover happened — from a phone conversation to a proper development environment. The `CLAUDE.md` file was the bridge: it contained all the context from the mobile chat sessions (positioning, design system, content structure, component breakdown).

**The port process:**

1. `create-next-app` with Next.js 16 (latest), TypeScript, Tailwind CSS 4
2. Added shadcn/ui and Base UI for component primitives
3. Extracted the base64 caricature image to `/public/images/`
4. Broke the HTML into ~18 React components
5. Moved all CSS to Tailwind utility classes + globals.css for animations
6. Set up `next/font` for Google Fonts with optimization
7. Made most sections Server Components, with Client Component wrappers only where needed

**What worked well about the handover:**

- The `CLAUDE.md` file gave Claude Code full context — it didn't need to "discover" the project
- Having a working HTML prototype meant Claude Code could reference specific implementations
- The component breakdown was already planned in the chat phase
- Claude Code's ability to read files, run builds, and iterate was a massive speedup

**Key decisions made during port:**

- Used `max-md:contents` CSS trick to reorder hero elements on mobile (h1 above image, text below) without duplicating markup
- All non-critical client JS (floating emoji, toasts, cursor trail, scroll reveal) loaded via dynamic imports with `ssr: false` through a `ClientExtras` wrapper
- Used `experimental.inlineCss: true` to eliminate CSS from the critical rendering path

### Phase 3: Polish & SEO

**What was added:**

- Dynamic OG images with 3 rotating variants (randomized per deploy):
  - Variant A: "Hero Card" — caricature with gradient background
  - Variant B: "Bold Gradient" — large name with tropical gradient
  - Variant C: "Split Tropical" — half caricature, half text
- Twitter card images (separate dimensions)
- Structured data (JSON-LD) for Person schema
- `robots.ts` and `sitemap.ts`
- Vercel Analytics + Speed Insights
- ASCII art console message with Easter egg hints
- Career text refinements (updated About and Experience sections)

**OG image debugging saga:**

- The hero caricature was a JPEG file with a `.png` extension
- Satori (used by `next/og` ImageResponse) silently failed to render it
- Discovered by checking file magic bytes: `0xFF 0xD8` = JPEG, not PNG
- Fix: converted to real PNG for OG images AND added a `detectMimeType()` helper that reads the first 2 bytes

### Phase 4: Performance Optimization (The Deep Dive)

This is where it got technical and iterative. Started at ~80 mobile Lighthouse, ended at 92.

#### What dragged the score down (and fixes)

**1. CLS 0.311 — THE main culprit (was destroying the mobile score)**

Root cause: `display: "optional"` on fonts. On Slow 4G (Lighthouse's mobile throttle), the custom fonts (especially Lilita One) couldn't load within the ~100ms block period. The browser would:

- Initially reserve space based on the fallback font metrics
- Then either commit to fallback or do a late swap
- The heading font (Lilita One) is chunky and wide — very different from any system font fallback
- This caused the text block below the hero to shift down/up → 0.311 CLS

**Fix**: Changed both fonts to `display: "swap"` with `adjustFontFallback: true`. This means:

- Text renders immediately with a size-adjusted fallback (Next.js generates `size-adjust`, `ascent-override`, `descent-override` CSS)
- When the real font loads, the swap is nearly invisible because metrics match
- CLS went from 0.311 to **0** (zero!)

**What we tried that didn't work for CLS:**

- `display: "optional"` — caused the CLS in the first place
- `display: "optional"` + `preload: true` — font still didn't load fast enough on Slow 4G
- Changing hero from `items-center` to `items-start` on mobile — helped slightly but didn't fix root cause
- Adding `min-height` to hero text container — fragile, font-dependent

**2. Hero image too large**

- Original: JPEG file with `.png` extension → Next.js served it as PNG instead of AVIF/WebP
- Fix: renamed to `.jpg` so the image optimizer could properly transcode
- Added `sizes="(max-width: 768px) 300px, 400px"` for responsive serving
- Added `quality={60}` (required adding `qualities: [60, 75]` to next.config.ts — Next.js 16 only allows explicitly listed quality values)
- Added `560` to `deviceSizes` for better match on 1.75x DPR mobile devices
- Result: image served as AVIF at ~45KB instead of PNG at ~150KB+

**What we tried that didn't work for image:**

- Resizing source from 1024x1536 to 533x800 — made the image look noticeably smaller on screen. The `sizes` prop controls what's served, not the source dimensions
- `quality={65}` — silently fell back to `75` because Next.js 16's default `qualities` allowlist is only `[75]`

**3. Fira Code font causing CLS**

- Was loaded via `next/font` but never actually used in any component
- Even with `display: "optional"` and `preload: false`, it contributed to CLS
- Fix: removed Fira Code entirely, set `--font-mono: ui-monospace, monospace` in CSS

**4. Render-blocking resources**

- Console ASCII art script was in `<head>` — moved to end of `<body>`
- Non-critical client JS was imported directly — wrapped in `ClientExtras` with dynamic imports + `ssr: false`
- Enabled `experimental.inlineCss: true` to eliminate external CSS requests

**5. GPU overhead on mobile**

- Ocean wave animations used `will-change: transform` on all viewports
- Reduced wave height from 80px to 50px on mobile and removed `will-change`
- Added `prefers-reduced-motion` media query for all animations

**6. FloatingEmoji page height feedback loop**

- Component measured `document.documentElement.scrollHeight` to set its wrapper height
- But the wrapper's height was included in `scrollHeight`, creating an infinite growth loop
- Fix: collapse wrapper to `0px` before measuring

#### What we can't fix (framework overhead)

- **Legacy JavaScript polyfills** — 14KB from Next.js, can't remove without ejecting
- **Unused JavaScript** — 47KB of Next.js runtime chunks loaded on every page
- **LCP 2.9s on mobile** — hero image delivery on Slow 4G throttle is the bottleneck; image is already AVIF at q60
- **Speed Index 4.5s** — inherent to Slow 4G simulation

#### Performance config summary

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [560, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    qualities: [60, 75], // Must explicitly list allowed quality values in Next.js 16
  },
  experimental: {
    inlineCss: true, // Inlines CSS to eliminate render-blocking stylesheet requests
  },
}
```

```typescript
// Font config — display: "swap" + adjustFontFallback is the winning combo
const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
  display: "swap", // Render text immediately, swap when font loads
  adjustFontFallback: true, // Generate size-matched fallback to minimize CLS
  preload: true,
})
```

---

## Blog Post Outline (Planned)

Jelte plans to write a blog post about building this portfolio. Target audience: developers starting with AI dev tools like Claude. The post should both inspire and teach.

### Suggested structure:

1. **Intro** — Why build a portfolio in 2026, and why with AI?
2. **Starting on the phone** — How a Claude chat conversation on mobile became the foundation (positioning, design system, content strategy, full HTML prototype)
3. **The handover to Claude Code** — How CLAUDE.md bridged the gap, benefits of the Claude Project feature for keeping context
4. **The port to Next.js** — Component architecture decisions, Server vs Client components, what Claude Code did well
5. **Making it look good** — Design decisions, the tropical theme, Easter eggs, OG images with 3 variants
6. **The performance deep dive** — Lighthouse optimization journey (CLS font swap saga, image format detective work, quality allowlist gotcha, framework overhead realities)
7. **What worked and what didn't** — Honest assessment of AI-assisted development
8. **Key takeaways for devs starting with AI tools**

### Key talking points for the blog:

- AI is great for ideation and content strategy — the mobile chat phase produced better positioning than sitting in front of Figma
- The handover between tools (Claude chat → Claude Code) needs a bridge document (CLAUDE.md)
- Performance optimization still requires human intuition — AI can suggest fixes but debugging CLS requires understanding the browser rendering pipeline
- `display: "optional"` vs `display: "swap"` for web fonts is a nuanced decision that AI got wrong initially
- Next.js 16's `qualities` allowlist is an undocumented gotcha — quality values silently fall back
- The "JPEG with .png extension" bug appeared twice (hero image + OG image) — file extensions lie, magic bytes don't

---

## Positioning & Brand Strategy

Freelance **senior frontend & mobile engineer**. AI is how Jelte works (Claude Code, agents),
not a product feature he sells.

LinkedIn headline (keep the site consistent with it):

```
Senior Frontend & Mobile Engineer · Next.js, React Native & Expo · AI-first workflow · Core contributor to My Luminus (Product of the Year 2026)
```

Site headline (hero H1):

```
Senior frontend and mobile engineer for teams shipping Next.js and React Native at scale.
```

### Messaging rules

- **DO**: lead with shipped work and outcomes (My Luminus, the Expo migration, CourtScout).
- **DO**: name specific technical decisions in sentences (dual-layer caching, Auth0 sessions across apps, EAS fingerprinting).
- **DO**: let the blog prove the AI-first workflow; mention it plainly, once, in the hero and About.
- **DON'T**: claim AI features shipped to users. Never.
- **DON'T**: invent metrics. Only use numbers that are public or that Jelte has confirmed.
- **DON'T**: use "passionate", "love coding", "AI-powered", jokes in headings, or badge walls of tech.
- Tone: confident, plain, first person, sentence case. One or two personal lines (Bali, padel, espresso) in About only.

---

## Design System — Editorial

Full spec in **`DESIGN.md`**. Summary:

- **Type**: Schibsted Grotesk (headings, UI, homepage body), Source Serif 4 (blog prose), JetBrains Mono (code only).
- **Colour**: near-monochrome. Light: paper `#faf9f6`, ink `#1c1b19`, muted `#63605a`, faint `#74706a`, rule `#e4e1da`, accent `#065563` (from the old ocean-deep). Dark mode follows the OS with its own token set; all text pairs pass WCAG AA.
- **Layout**: single column, left-aligned, 42rem max; 7.5rem date/label column on lists from 640px up.
- **Shape**: one 6px radius, 1px hairlines, no shadows, no cards.
- **Motion**: one 400ms opacity fade on the hero; colour/underline transitions on hover; everything off under `prefers-reduced-motion`.
- **Don't**: emoji, gradients, purple, hover lift, floating/bobbing elements, all-caps eyebrows, mono labels, caricatures.

---

## Content Sections

### Homepage, in order

1. **Hero** — H1 headline, two proof paragraphs, "Open to new freelance projects.", Email me (button) + LinkedIn
2. **Selected work** (`#work`) — My Luminus, School app (RN CLI → Expo), CourtScout
3. **Writing** (`#writing`) — latest 4 posts + link to `/blog`
4. **Experience** (`#experience`) — Stellar → Luminus → Frontmen → Nationale Hypotheekbond → DGN → Nuon (Vattenfall)
5. **About** (`#about`) — portrait, bio, personality line, tools as plain text
6. **Contact** (`#contact`) — email, LinkedIn, GitHub

Removed in the redesign: tech-stack pills, philosophy cards, Now section, fun facts, differentiator cards,
floating emoji, toasts, ocean waves, hero parallax, scroll reveal, rotating OG variants.

---

## Future TODO

### Next priorities

- [x] Blog section (MDX)
- [x] Editorial redesign + dark mode (Nov 2026)
- [ ] Add professional portrait at `public/images/jelte.jpg`
- [ ] Confirm or add outcome numbers for the School app case study
- [ ] React Native accessibility blog post
- [ ] Contact form (Resend or server action) — only if email proves insufficient

### Nice to have

- [ ] Page transitions (View Transitions API)
- [ ] RSS feed for the blog

---

## Important Notes

- Company name is **Stellar Web Development**, NOT Jellyhead
- Jelte's **business analyst** background is intentional — it's why he thinks about product, not just code
- The AI-first workflow is how Jelte works, shown through the blog; don't overclaim it on the homepage
- This portfolio was built with AI tools: Claude (chat on phone for ideation) → Claude Code (implementation, and the Nov 2026 redesign)
- Jelte uses **Cursor** as his IDE

---

## Blog Section (MDX)

### Architecture

- **Content**: MDX files in `src/content/blog/` with gray-matter frontmatter
- **Rendering**: `next-mdx-remote/rsc` (Server Component rendering, no client JS)
- **Routes**: `/blog` (listing), `/blog/[slug]` (individual posts via `generateStaticParams`)
- **Layout**: `src/app/blog/layout.tsx` wraps blog pages with SiteHeader + Footer and loads the serif + mono fonts
- **Title**: rendered from frontmatter; a leading `# Title` line in the MDX is stripped to avoid a duplicate h1
- **Code**: fenced blocks are highlighted by Shiki at build time; add a language (e.g. tsx) to the fence for highlighting

### Key Files

| File | Purpose |
|------|---------|
| `src/lib/blog.ts` | `getAllPosts()`, `getPostBySlug()`, `getReadingTime()` |
| `src/components/blog/mdx-components.tsx` | Custom MDX component map (headings, links, images) |
| `src/components/blog/theme-grid.tsx` | 3-column grid for theme concept images |
| `src/components/blog/lighthouse-comparison.tsx` | Side-by-side mobile/desktop Lighthouse scores |
| `src/content/blog/how-i-built-my-portfolio.mdx` | First blog post |
| `public/images/blog/` | Blog images (10 files) |

### Adding a New Blog Post

1. Create `src/content/blog/my-new-post.mdx` with frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2026-03-01"
   description: "Meta description"
   author: "Jelte Homminga"
   tags: ["tag1", "tag2"]
   featured: false
   ---
   ```
2. Add images to `public/images/blog/`
3. The post automatically appears on `/blog` and gets its own page at `/blog/my-new-post`

### Image Handling in MDX

- Standard `![alt](src)` markdown images are mapped to `next/image` via BlogImage component
- Markdown `![alt](src "caption")`: the title (or alt) becomes the figure caption
- Special case: `claude-phone.jpg` renders narrower, centred
- For grids or side-by-side layouts, use JSX components: `<ThemeGrid />`, `<LighthouseComparison />`

### SEO

- Each post generates: title, meta description, OG tags, canonical URL, BlogPosting structured data
- Blog listing and all posts are included in `sitemap.xml`
