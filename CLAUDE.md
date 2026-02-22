# Stellar Web Development — Portfolio Project

## Claude Code Handoff — Full Context

### Owner
**Jelte Homminga** — Senior React & Expo Engineer, based in Bali, Indonesia.
- Company: **Stellar Web Development** (formerly Jellyhead Web Dev)
- GitHub: [jeltehomminga](https://github.com/jeltehomminga)
- LinkedIn: [jeltehomminga](https://linkedin.com/in/jeltehomminga)
- Stack: TypeScript, React, Next.js (App Router), React Native, Expo
- Email: jelte@stellarwebdev.com (placeholder — confirm with Jelte)

---

## Project Status

### Current Deliverable
Single-file HTML prototype: `index.html` (~600KB, includes base64-embedded caricature image)
- Fully working tropical-themed portfolio
- Ready to be ported into a Next.js App Router project

### What Exists from Previous Work (not in repo yet)
In an earlier chat, a full Next.js project with 3 switchable themes was built:
1. **Minimal Pro** — Swiss editorial, wireframe shapes, grain texture
2. **Tropical Fun** — The current focus, Bali vibes
3. **Cyberpunk** — Neural network mesh, neon

The current `index.html` is a complete rebuild of the Tropical theme with much better positioning and content strategy. The other themes haven't been updated yet.

---

## Positioning & Brand Strategy

Jelte wants a **confident but not too bold** tone. Key positioning decisions:

### Title & Headline
```
Senior React & Expo Engineer
Building high-performance consumer apps at scale.
Based in Bali. Shipping enterprise-grade systems for European markets.
```

### 4 Differentiators (shown as cards below hero)
1. 🌍 **Remote-First Senior** — Dutch engineer in Bali, delivering for European enterprise
2. ⚡ **Architecture-Level** — SSR strategy, caching layers, CI/CD, auth — beyond components
3. 📱 **Mobile Modernization** — RN → Expo migrations, EAS workflows, build cost optimization
4. 🤖 **AI-Augmented Dev** — Cursor, Claude, Copilot — AI as a core part of the workflow

### Key Messaging Rules
- **DO**: Emphasize architecture thinking, enterprise scale, AI-augmented workflow
- **DO**: Mention specific technical decisions (dual-layer caching, Auth0 multi-app, SSR strategy)
- **DON'T**: Use "passionate developer", "love coding", or generic freelancer language
- **DON'T**: List tech as a flat wall of badges — group by competence area

---

## Content Structure (Sections)

### 1. Hero
- "Available for projects" badge (green dot animation)
- H1: "Senior React & **Expo** Engineer"
- Positioning subtitle
- Architecture-level description mentioning AI (Cursor + Claude)
- CTAs: "See my work →" / "Get in touch"
- Caricature image (tropical Bali scene with padel racket, React logos, Bug!/Fix ASAP!/Shipped! toast notifications)
- 4 differentiator cards below

### 2. About
- Founder of Stellar Web Development
- 7+ years experience
- Business analyst background (Vattenfall) → Ironhack bootcamp → Developer
- AI-first workflow (Cursor IDE, Claude for architecture & code review)
- Highlight cards: Based in Bali, 7+ Years, AI-First Workflow, EU Enterprise

### 3. Tech Stack (grouped by competence)
| Group | Primary | Secondary |
|-------|---------|-----------|
| Frontend Architecture | Next.js App Router, React 19, TypeScript | TanStack Query, Suspense, SSR/Server Actions, MUI 5, Framer Motion, Tailwind |
| Mobile | React Native, Expo SDK 54+, EAS Workflows | Expo Router, NativeWind v5, OTA Strategy, Build Fingerprinting |
| AI Tooling *(purple accent)* | Cursor IDE, Claude (Anthropic), GitHub Copilot | AI Code Review, Prompt Engineering, Claude Code, v0/Bolt |
| DevOps & Infra | Azure DevOps | AKS, Redis, Auth0, GrowthBook, Imperva WAF, CI/CD |
| Quality & Testing | Vitest, React Testing Library | MSW, TypeScript Strictness, Functional Style, Storybook |

### 4. Engineering Philosophy (6 cards)
1. 🎯 **Performance > Trends** — Core Web Vitals over Twitter hype
2. 🔒 **Deterministic Systems** — Strict types, no unnecessary mocking
3. 🪶 **Minimize Complexity** — Every abstraction earns its place
4. 💸 **Cost Awareness** — Build credits, cold starts, cache headers
5. 🤖 **AI as a Multiplier** *(purple accent)* — Cursor and Claude as accelerants
6. 🚀 **Ship, Don't Debate** — Strong opinions, loosely held. 80% solution → iterate

### 5. Projects
1. **MyLuminus Portal** (Enterprise · Belgian Energy)
   - Customer-facing energy portal
   - Dual-layer caching (HTTP + Redis + React Query)
   - Auth0 multi-app sessions
   - SSR with Next.js App Router
   - GrowthBook feature flags
   - Deployed on AKS
   - Stack: Next.js, React 19, TypeScript, TanStack Query, Redis, Auth0, Azure

2. **School App** (Mobile · Education)
   - Bali school app — schedules, reports, communication
   - Migrated from RN CLI to Expo
   - EAS build optimization, OTA updates, fingerprint-based build reuse
   - Stack: React Native, Expo, TypeScript, EAS, Firebase

3. **Stellar Web Development** (Freelance Studio)
   - Own studio, AI-augmented workflow
   - Stack: Next.js, React Native, TypeScript, Cursor, Claude

### 6. Now (Current Focus)
1. 🤖 AI-Augmented Development — *Core focus*
2. 📱 Expo Modernization — *Active*
3. ⚛️ React 19 & Server Components — *Exploring*
4. 🏸 Padel & Side Projects — *Side project*

### 7. Experience Timeline
1. **2021 — Present**: Founder & Senior Developer, Stellar Web Development, Bali
2. **2019 — 2021**: Freelance Frontend Developer, Luminus, Belgium (remote)
3. **2011 — 2019**: IT Business Analyst → Developer, Vattenfall, Netherlands

### 8. Fun Facts
- 🏸 Padel addict — racket always at the café
- ☕ Espresso tuning is the other craft
- 🥥 Coconut water: the debugging drink
- 🤖 Claude is my favorite pair programmer

### 9. Contact
- Email, GitHub, LinkedIn links
- CTA: "Need a senior frontend engineer who thinks about architecture, performance, and ships with AI-powered velocity?"

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
- **Code**: Fira Code (Google Fonts) — monospace

### Visual Elements
- **Cards**: `rgba(255,253,248,0.90)` background, `1.5px` border, `20px` radius, hover lift
- **AI elements**: Purple accent color (`--ai-purple`) for AI-related cards, pills, borders
- **Floating emoji**: 🌴🥥☕🌺🏝️🏸🌊 scattered along edges, scrolls with page, `opacity: 0.12-0.16`
- **Toast notifications**: Decorative "Bug!", "Fix ASAP!", "Shipped!" near hero image + animated toasts that pop in while browsing (also "☕ Coffee break", "🤖 Claude says hi")
- **Ocean waves**: SVG waves at bottom of viewport (3 layers, different speeds)
- **Section alternating backgrounds**: `--sand` / `--sand-warm`

### Animations & Interactions
- Scroll reveal via IntersectionObserver
- Tech stack pills stagger animation
- Hero image parallax on mouse move (desktop only)
- Toast notification system (timed + random interval)
- **Easter eggs**:
  - Konami code → padel ball cursor trail
  - Typing "coffee" → coffee toast
  - Typing "claude" → Claude toast

### Responsive Breakpoints
- `900px`: Differentiator grid → 2 columns
- `768px`: Hero → single column (image on top), nav → hamburger menu
- `600px`: Stack groups, now grid, projects → single column
- `400px`: Differentiators → single column

---

## Next Steps / TODO

### Phase 1: Port to Next.js
- [ ] Init Next.js 15 App Router project with TypeScript
- [ ] Extract the caricature image from base64 → `/public/images/hero-caricature.webp`
- [ ] Break `index.html` into components:
  - `Hero.tsx` (badge, title, subtitle, CTAs, image with toast floats, differentiator cards)
  - `About.tsx`
  - `TechStack.tsx` (stack groups with pills)
  - `Philosophy.tsx` (philosophy cards)
  - `Projects.tsx` (project cards)
  - `Now.tsx` (now cards with status tags)
  - `Experience.tsx` (timeline + fun facts)
  - `Contact.tsx`
  - `Navigation.tsx` (with mobile toggle)
  - `FloatingEmoji.tsx` (client component — needs JS for resize + random timing)
  - `OceanWaves.tsx`
  - `ToastSystem.tsx` (client component)
- [ ] Move CSS to Tailwind or CSS Modules (Jelte prefers Tailwind)
- [ ] Use `next/font` for Lilita One, Nunito, Fira Code
- [ ] Optimize with `next/image` for hero caricature

### Phase 2: Theme System
- [ ] Implement theme switching (Tropical / Minimal Pro / Cyberpunk)
- [ ] CSS variables per theme, toggled via context/state
- [ ] Theme switcher UI in nav

### Phase 3: Polish
- [ ] Add real project screenshots/links
- [ ] Contact form (could use Resend, Formspree, or server action)
- [ ] SEO metadata (Open Graph, Twitter cards)
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Lighthouse audit → performance optimization
- [ ] Deploy to Vercel

### Phase 4: Nice to Have
- [ ] Blog section (MDX)
- [ ] Dark mode variant of each theme
- [ ] Page transitions (Framer Motion or View Transitions API)
- [ ] Palm tree decorations on edges (tried SVG in v3, didn't look good — consider using actual illustrated PNGs or a talented illustrator)

---

## Important Notes for Claude Code
- The `index.html` file is ~600KB because the caricature is base64-embedded. First thing to do is extract that image.
- Jelte uses **Cursor** as his IDE, so the project should work well with Cursor's AI features.
- The AI-augmented development angle is a major differentiator — it should be prominent throughout.
- Company name is **Stellar Web Development**, NOT Jellyhead.
- Jelte's background as a **business analyst** is intentional context — it's why he thinks about product, not just code.
- The "Now" section should be easy to update (consider making it data-driven from a simple JSON/MDX file).
- All tropical emoji floaters should scroll WITH the page, not stay fixed.
