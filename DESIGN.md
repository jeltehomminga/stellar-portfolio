# stellar-web.dev — Design System (Editorial)

Status: **draft, awaiting type pairing choice** (see §2). Replaces the Tropical theme.

## 1. Brief in one line

A freelance senior frontend & mobile engineer's site that reads like a well-kept notebook: quiet,
specific, and fast. The work and the writing are the decoration.

- **Audience:** engineering managers, CTOs and agency leads hiring a senior contractor; developers arriving from a blog post.
- **Primary job:** in 10 seconds, show who Jelte is, what he's shipped, and how to reach him. Then let the case studies and posts do the convincing.
- **Positioning:** Senior Frontend & Mobile Engineer (Next.js, React Native, Expo). AI is how he works (Claude Code, agents), not a product feature he sells. Never claim shipped AI features.
- **References:** leerob.com, paco.me. Single column, generous whitespace, type-led.

## 2. Typography

Pick one pairing (specimens: `/specimen`, light and dark side by side):

| Option | Headings | UI / body | Long-form prose | Code |
| --- | --- | --- | --- | --- |
| A | Newsreader 400 | IBM Plex Sans | IBM Plex Sans | JetBrains Mono |
| B | Instrument Sans 500 | Instrument Sans | Instrument Sans | JetBrains Mono |
| **C (recommended)** | Schibsted Grotesk 600 | Schibsted Grotesk | Source Serif 4 | JetBrains Mono |

Why C: the homepage reads crisp and engineered, and blog posts read like a publication. The blog is
the proof of the AI-first workflow, so it gets the more literary face. A is lovely but "cream paper +
serif display" is currently the most common AI-generated look. B is the safest and the least distinct.

All loaded through `next/font` with `display: "swap"` and `adjustFontFallback: true` (keeps CLS at 0,
same as today). Only the weights we use are loaded. Mono is loaded with `preload: false` (blog only).

### Scale

Base 16px. Steps follow a ~1.25 ratio; display uses `clamp()`.

| Token | Size / line-height | Weight | Use |
| --- | --- | --- | --- |
| `display` | clamp(2.125rem, 1.6rem + 2.4vw, 2.75rem) / 1.1 | heading weight | Hero H1 only |
| `title` | clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem) / 1.2 | heading weight | Blog post H1 |
| `h2` | 1.5rem / 1.25 | heading weight | Section headings, prose H2 |
| `h3` | 1.125rem / 1.4 | 600 | Case study titles, post titles in lists, prose H3 |
| `body` | 1.0625rem (17px) / 1.65 | 400 | Homepage body |
| `prose` | 1.1875rem (19px) / 1.7 serif, or 17px / 1.7 sans | 400 | Blog post body |
| `small` | 0.875rem / 1.5 | 400 | Dates, captions, meta |
| `code` | 0.875rem / 1.6 | 400 | Code blocks; inline code 0.88em |

Rules
- Heading tracking: −0.02em at display/title, −0.01em at h2. Body: 0.
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.
- Numbers in dates and year ranges use `font-variant-numeric: tabular-nums` (in the body face, not mono).
- Measure: homepage text ≤ 62ch, blog prose 65ch.
- Sentence case everywhere. No all-caps labels, no eyebrows above headings.

## 3. Colour

Near-monochrome, one accent derived from the old `--ocean-deep`. Defined as CSS custom properties on
`:root`, swapped under `prefers-color-scheme: dark` and `[data-theme="dark"]`.

| Token | Light | Dark | Use | Contrast on paper (L / D) |
| --- | --- | --- | --- | --- |
| `--paper` | `#faf9f6` | `#141516` | Page background (faint warm nod to the old sand) | — |
| `--paper-raised` | `#f2f0eb` | `#1c1d1f` | Code blocks, photo placeholder | — |
| `--ink` | `#1c1b19` | `#ecebe7` | Headings, body | 16.4 / 15.3 |
| `--ink-muted` | `#63605a` | `#a3a09a` | Secondary text, descriptions | 6.0 / 7.0 |
| `--ink-faint` | `#74706a` | `#7f7c76` | Dates, captions (on `--paper` only) | 4.7 / 4.4 |
| `--rule` | `#e4e1da` | `#2a2b2c` | Hairlines, borders | decorative |
| `--accent` | `#065563` | `#7cc0ca` | Links, focus ring, primary button | 8.0 / 8.9 |
| `--accent-ink` | `#ffffff` | `#141516` | Text on accent | 8.4 / 8.9 |

All text pairs pass WCAG AA (≥ 4.5:1). The accent is used for interactive things only, never decoration.

## 4. Layout & spacing

- Single column, left-aligned, `max-width: 42rem` (672px) content; blog prose at 65ch.
- Page gutter: 24px mobile, 32px ≥ 640px.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Section rhythm: 96px between sections on desktop, 64px on mobile. Each section opens with an `h2`
  sitting on a 1px `--rule` hairline.
- Experience and Writing lists use a two-column row (date | content) from 640px up, stacked below.

```
Jelte Homminga                              Work  Writing  About
──────────────────────────────────────────────────────────────
Senior frontend and mobile engineer for
teams shipping Next.js and React Native…    ← display H1
Two sentences of proof.                     ← ink-muted
Open to new freelance projects.             ← availability
[Email me]  LinkedIn                        ← one solid button + text link

── Selected work ────────────────────
My Luminus
  Problem    …
  What I did …
  Outcome    …

── Writing ──────────────────────────
Jul 2026   You might not need an MCP
Jun 2026   Stop screenshotting Figma

── Experience ───────────────────────
2025–now   Freelance · Stellar Web Development
2021–2025  Frontend developer · Luminus

── About ────────────────────────────
[photo]  Short bio. One personality line.
```

## 5. Radius, borders, elevation

- One radius: `6px` for code blocks, images, buttons, the photo. Layout has no radius.
- Borders are 1px `--rule`. No shadows anywhere, no cards around content.

## 6. Motion

- Hover/focus: colour and underline transitions only, 150ms ease-out.
- One page-load moment: the hero fades in (opacity only, 300ms). Nothing else animates on load or scroll.
- `prefers-reduced-motion: reduce` disables all transitions and the fade.
- No transforms on hover (no lift, no scale, no rotate).

## 7. Components

- **Links:** inline links in `--accent` with an underline (1px, offset 3px). On hover the underline
  thickens. Nav links are `--ink-muted`, `--ink` on hover and when current (`aria-current`).
- **Buttons:** at most one solid button per view (accent bg, `--accent-ink` text, 6px radius,
  40px min height). Everything else is a text link. No gradients, no pills, no arrows appended.
- **Focus:** `outline: 2px solid var(--accent); outline-offset: 3px` on every interactive element, via `:focus-visible`.
- **Case study:** `h3` title + optional one-line context, then a definition list with Problem / What I
  did / Outcome. Optional link to the live product or a post.
- **Post list item:** date (small, faint, tabular) + title (h3 weight) + optional one-line description.
- **Code blocks:** `--paper-raised` bg, 1px `--rule` border, 6px radius, 16px padding, horizontal scroll, no line wrap.
- **Images in posts:** full prose width, 6px radius, optional `<figcaption>` in small/faint below.
- **Photo:** real portrait, 4:5, greyscale-neutral background. Placeholder until supplied: `--paper-raised` block with initials.
- **Headings are real headings:** one `h1` per page, `h2` per section, `h3` per item.

## 8. Voice

- Plain, specific, first person. Verbs and outcomes over adjectives.
- Name technologies inside sentences ("moved the app to Expo with EAS Build") rather than in badge walls.
- AI appears as how the work gets done (Claude Code, agents), backed by the blog. Not as a selling adjective.
- One or two personal lines in About (Bali, padel). No jokes in headings.

## 9. Don't

- No emoji anywhere in UI copy. No icons as decoration.
- No Lilita One, Nunito, Inter, Roboto, Geist, or any rounded display face.
- No purple, no second accent, no gradients (text, buttons or backgrounds).
- No cards with hover lift, no shadows, no glassmorphism.
- No floating/bobbing badges, toasts, waves, parallax, or scroll-reveal on every section.
- No rotated images, no caricature or illustrated self-portraits.
- No all-caps eyebrows, no numbered markers unless the content is a sequence, no "→" on every link.
- No mono font for dates or labels. Mono is for code.
- No "passionate", "love coding", "AI-powered" or other generic freelancer language.
- Don't claim AI features shipped to users.

## 10. Kept from the old site

- Konami code → padel-ball cursor trail (hidden, lazy-loaded, no hints in the UI).
- Console banner, rewritten without emoji.
- Server Components everywhere; client JS only for the nav menu and the easter egg.
- `next/font` swap + `adjustFontFallback`, image config, `inlineCss`.
