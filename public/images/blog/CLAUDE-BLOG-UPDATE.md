# Blog Section Implementation — Add to CLAUDE.md

> Paste this section into your project's CLAUDE.md so Claude Code has full context to build the blog.

---

## Blog Section (MDX)

### Status: Ready to implement

The first blog post ("How I Built My Portfolio With AI") has been written and is ready at `public/images/blog/how-i-built-my-portfolio.mdx`. All images are in `public/images/blog/`. The blog section needs to be built in Next.js.

### Implementation Plan

#### 1. Directory Structure

```
src/
  app/
    blog/
      page.tsx                              // Blog listing page
      [slug]/
        page.tsx                            // Individual post page
  content/
    blog/
      how-i-built-my-portfolio.mdx          // Move MDX here from public/images/blog/
```

Move `how-i-built-my-portfolio.mdx` from `public/images/blog/` to `src/content/blog/`.
Keep images in `public/images/blog/` — they're referenced with `/images/blog/` paths in the MDX.

#### 2. MDX Setup

Install dependencies:
```bash
npm install @next/mdx @mdx-js/react @mdx-js/loader
```

Configure in `next.config.ts`:
```typescript
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
```

Or alternatively, use a content layer approach with `gray-matter` for frontmatter parsing and `next-mdx-remote` for rendering:
```bash
npm install next-mdx-remote gray-matter
```

#### 3. Blog Post Frontmatter Schema

```typescript
interface BlogPost {
  title: string;
  date: string;          // ISO date, e.g. "2026-02-23"
  description: string;   // Meta description / preview text
  author: string;
  tags: string[];
  featured: boolean;
  slug: string;          // Generated from filename
}
```

#### 4. Blog Listing Page (`/blog`)

- Show all posts sorted by date (newest first)
- Use card layout consistent with existing project cards
- Show: title, date, description, tags
- Featured posts get visual distinction (e.g., larger card or highlight border)
- Server Component

#### 5. Blog Post Page (`/blog/[slug]`)

- Render MDX content with custom components
- Add reading time estimate
- Add table of contents (optional, can be Phase 2)
- Add back-to-blog link
- Server Component for the page, Client Components only if needed for interactivity

#### 6. Custom MDX Components

Map standard markdown elements to styled components matching the tropical theme:

```typescript
const mdxComponents = {
  h1: (props) => <h1 className="font-lilita text-4xl text-ocean-deep" {...props} />,
  h2: (props) => <h2 className="font-lilita text-2xl text-ocean-deep mt-10 mb-4 pt-6 border-t-2 border-sand-warm" {...props} />,
  h3: (props) => <h3 className="font-nunito text-xl font-bold text-ocean mt-8 mb-3" {...props} />,
  p: (props) => <p className="mb-5 leading-relaxed" {...props} />,
  a: (props) => <a className="text-ocean underline underline-offset-4 decoration-ocean-light hover:text-sunset" {...props} />,
  code: (props) => <code className="font-mono bg-sand-warm px-1.5 py-0.5 rounded text-ai-purple text-sm" {...props} />,
  strong: (props) => <strong className="text-ocean-deep font-bold" {...props} />,
  img: (props) => /* Next.js Image component wrapper — see below */,
}
```

**Important for images:** The MDX contains standard `![alt](src)` image syntax. These should be mapped to a custom component that wraps `next/image` with proper sizing, lazy loading, and the blog's styling (rounded corners, shadow). Some images need special treatment:
- `claude-phone.jpg` — render at 33% width, centered
- Theme images (`theme-cyberpunk.png`, `theme-minimal-pro.png`, `theme-tropical.png`) — render in a 3-column grid with equal height (`object-fit: cover`, `object-position: top`, `aspect-ratio: 2252/1532`)
- `lighthouse-after.png` + `lighthouse-desktop.png` — render side-by-side with "Mobile" and "Desktop" captions
- `portfolio.png` — render with `border: 3px solid var(--ocean-deep)`
- All other images — full width with rounded corners and shadow

#### 7. SEO & Metadata

Each blog post page should generate:
- `<title>` and `<meta description>` from frontmatter
- Open Graph tags (title, description, image)
- Structured data (BlogPosting schema)
- Canonical URL

Blog listing page:
- Title: "Blog — Stellar Web Development"
- Description: "Technical articles about React, Next.js, AI-augmented development, and performance optimization."

#### 8. Navigation Update

Add "Blog" link to the existing navigation component (`navigation.tsx`).

### Blog Images Reference

All images are in `public/images/blog/`:

| Filename | Size | Usage |
|----------|------|-------|
| `portfolio.png` | 898KB | Hero screenshot of live site |
| `claude-phone.jpg` | 120KB | Phone chat screenshot (show small, centered) |
| `theme-cyberpunk.png` | 79KB | Theme concept (3-col grid) |
| `theme-minimal-pro.png` | 300KB | Theme concept (3-col grid) |
| `theme-tropical.png` | 88KB | Theme concept (3-col grid) |
| `projects-sidebar.png` | 31KB | Claude Projects screenshot |
| `lighthouse-before.png` | 15KB | Starting Lighthouse score |
| `pagespeed-insights.png` | 158KB | Mid-optimization PageSpeed |
| `lighthouse-after.png` | 14KB | Final mobile score (98) |
| `lighthouse-desktop.png` | 20KB | Final desktop score (100) |

### Other Files in `public/images/blog/`

| Filename | Purpose |
|----------|---------|
| `how-i-built-my-portfolio.mdx` | **Move to `src/content/blog/`** |
| `how-i-built-my-portfolio-preview.html` | Preview file, can delete after blog is built |
| `linkedin-teaser.md` | LinkedIn post copy, not part of the site |
| `CLAUDE-BLOG-UPDATE.md` | This file — paste into CLAUDE.md, then delete |

### Design Consistency Notes

- Use the same card styling as existing sections (frosted glass, 1.5px border, 20px radius)
- Blog post body max-width: ~720px, centered
- Use `--ai-purple` for code/inline code styling
- Use `--sunset` accent for callout/takeaway blocks
- Tags should use the same pill styling as tech-stack pills
- Follow existing font usage: Lilita One for headings, Nunito for body
