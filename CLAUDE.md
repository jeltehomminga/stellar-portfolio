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

## Project Status (Feb 2026)

**Live at [stellar-web.dev](https://stellar-web.dev)** — deployed on Vercel.

Lighthouse scores:
- Desktop: **100 / 100 / 100 / 100**
- Mobile: **92 / 100 / 100 / 100**

### Tech Stack
- **Next.js 16.1.6** (Turbopack, App Router)
- **React 19.2.3**
- **TypeScript 5**
- **Tailwind CSS 4** with shadcn/ui + Base UI
- **Vercel** (deployment, analytics, speed insights)
- Fonts: Lilita One (headings), Nunito (body) — via `next/font`

### Component Architecture
All sections are Server Components except where JS interactivity is needed:

| Component | Type | Purpose |
|-----------|------|---------|
| `hero.tsx` | Server | Hero section with title, badge, CTAs, caricature image, toast badges |
| `hero-parallax.tsx` | Client | Mouse-tracking parallax on hero image (desktop only) |
| `about.tsx` | Server | Bio, highlight cards |
| `tech-stack.tsx` | Server | Grouped tech pills by competence area |
| `philosophy.tsx` | Server | 6 engineering philosophy cards |
| `projects.tsx` | Server | Project showcase cards |
| `now.tsx` | Server | Current focus items |
| `experience.tsx` | Server | Career timeline + fun facts |
| `contact.tsx` | Server | Contact section with CTAs |
| `navigation.tsx` | Client | Sticky nav with mobile hamburger |
| `footer.tsx` | Server | Footer with links |
| `ocean-waves.tsx` | Server | CSS-animated SVG waves (fixed bottom) |
| `client-extras.tsx` | Client | Lazy wrapper for non-critical JS (dynamic imports, ssr: false) |
| `floating-emoji.tsx` | Client | Decorative emoji scattered along page edges |
| `toast-system.tsx` | Client | Slide-in toast notifications ("Coffee break", "Claude says hi") |
| `cursor-trail.tsx` | Client | Konami code Easter egg (padel ball cursor trail) |
| `scroll-reveal-init.tsx` | Client | IntersectionObserver for scroll reveal animations |

### Key Files
- `src/app/layout.tsx` — Root layout, font config, structured data, ASCII console art
- `src/app/page.tsx` — Single-page layout composing all sections
- `src/app/globals.css` — Design tokens, animations, wave CSS, scroll reveal
- `src/app/opengraph-image.tsx` — Dynamic OG image (3 rotating variants per deploy)
- `src/app/twitter-image.tsx` — Same as OG with Twitter card dimensions
- `next.config.ts` — Image optimization, inlineCss experiment
- `public/images/hero-caricature.jpg` — AI-generated caricature (1024x1536, JPEG)
- `public/images/hero-caricature-og.png` — Smaller version for OG images (267x400, PNG)

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
    qualities: [60, 75],  // Must explicitly list allowed quality values in Next.js 16
  },
  experimental: {
    inlineCss: true,  // Inlines CSS to eliminate render-blocking stylesheet requests
  },
}
```

```typescript
// Font config — display: "swap" + adjustFontFallback is the winning combo
const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
  display: "swap",           // Render text immediately, swap when font loads
  adjustFontFallback: true,  // Generate size-matched fallback to minimize CLS
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

Jelte wants a **confident but not too bold** tone.

### Current Title & Headline
```
AI-first Frontend Engineer
Building high-performance consumer apps at scale.
Based in Bali. Shipping enterprise-grade systems for European markets.
```

### 4 Differentiators
1. **Remote-First Senior** — Dutch engineer in Bali, delivering for European enterprise
2. **Architecture-Level** — SSR strategy, caching layers, CI/CD, auth — beyond components
3. **Mobile Modernization** — RN → Expo migrations, EAS workflows, build cost optimization
4. **AI-Augmented Dev** — Cursor, Claude, Copilot — AI as a core part of the workflow

### Key Messaging Rules
- **DO**: Emphasize architecture thinking, enterprise scale, AI-augmented workflow
- **DO**: Mention specific technical decisions (dual-layer caching, Auth0 multi-app, SSR strategy)
- **DON'T**: Use "passionate developer", "love coding", or generic freelancer language
- **DON'T**: List tech as a flat wall of badges — group by competence area

---

## Design System — Tropical Theme

### Color Palette
```css
--ocean: #0c8a9e;
--ocean-deep: #065563;
--ocean-light: #17c1e8;
--sand: #faf3e0;
--sand-warm: #f5edd5;
--palm: #3a9d5e;
--palm-dark: #1f6b38;
--sunset: #ff6b35;
--sunset-glow: #ffa06b;
--lava: #e63946;
--wood: #8b6d47;
--coffee: #3e2723;
--padel-yellow: #d4e500;
--ai-purple: #8b5cf6;        /* Used for AI-related elements */
--ai-purple-light: #a78bfa;
```

### Typography
- **Headings**: Lilita One (Google Fonts) — chunky, tropical feel
- **Body**: Nunito (Google Fonts) — warm, rounded sans-serif
- **Code**: System monospace (`ui-monospace, monospace`) — Fira Code was removed for performance

### Visual Elements
- **Cards**: frosted glass background, `1.5px` border, `20px` radius, hover lift
- **AI elements**: Purple accent (`--ai-purple`) for AI-related cards, pills, borders
- **Floating emoji**: 🌴🥥☕🌺🏝️🏸🌊 scattered along edges, scrolls with page
- **Toast badges**: Decorative "Bug!", "Fix ASAP!", "Shipped!", "Lighthouse 100", "A11y 100%", "CWV all green" near hero image
- **Slide-in toasts**: Animated notifications that pop in while browsing ("Coffee break", "Claude says hi")
- **Ocean waves**: SVG waves at bottom (3 layers, CSS animation), reduced on mobile
- **Easter eggs**: Konami code → padel ball cursor trail, type "coffee" → toast, type "claude" → toast
- **Console**: ASCII art "Stellar" banner with Easter egg hints

---

## Content Sections

### Sections in order:
1. **Hero** — H1 "AI-first Frontend Engineer", availability badge, CTAs, caricature with toast badges, 4 differentiator cards
2. **About** — Bio, business analyst background, AI-first workflow, highlight cards
3. **Tech Stack** — Grouped by competence area (Frontend Architecture, Mobile, AI Tooling, DevOps, Quality)
4. **Philosophy** — 6 engineering philosophy cards
5. **Projects** — MyLuminus Portal, School App, Stellar Web Development
6. **Now** — Current focus items with status tags
7. **Experience** — Career timeline (Vattenfall → Ironhack → DGN → Nationale Hypotheekbond → Luminus → Stellar)
8. **Fun Facts** — Padel, espresso, coconut water, Claude
9. **Contact** — Email, GitHub, LinkedIn links

---

## Future TODO

### Next priorities
- [ ] Blog section (MDX) — starting with the "how I built my portfolio" post
- [ ] Theme system (Tropical / Minimal Pro / Cyberpunk)
- [ ] Contact form (Resend or server action)
- [ ] Real project screenshots
- [ ] Dark mode variant

### Nice to have
- [ ] Page transitions (View Transitions API)
- [ ] Make "Now" section data-driven (JSON or MDX)
- [ ] Palm tree edge decorations (illustrated PNGs, not SVG)

---

## Important Notes
- Company name is **Stellar Web Development**, NOT Jellyhead
- Jelte's **business analyst** background is intentional — it's why he thinks about product, not just code
- The AI-augmented development angle is a major differentiator — should be prominent throughout
- This portfolio was built entirely with AI tools: Claude (chat on phone for ideation) → Claude Code (for implementation)
- Jelte uses **Cursor** as his IDE
