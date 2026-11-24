import type { CSSProperties } from "react"

/** Stagger index for the hero's single page-load sequence (see .rise-in). */
const step = (i: number) => ({ "--i": i }) as CSSProperties

export const Hero = () => (
  <section aria-labelledby="hero-title" className="pt-12 sm:pt-20">
    <h1 id="hero-title" className="rise-in text-display font-semibold text-accent" style={step(0)}>
      Senior frontend and mobile engineer for teams shipping Next.js and React
      Native at scale.
    </h1>
    <div className="rise-in mt-6 max-w-[62ch] space-y-4 text-ink-muted" style={step(1)}>
      <p>
        Core contributor to My Luminus, voted Product of the Year 2026 in
        Belgium, from the web portal to the redesigned Expo app. I work on the parts that decide whether an app stays fast and
        easy to ship: rendering strategy, caching, auth, accessibility and release pipelines.
      </p>
      <p>
        Freelance from Bali for European teams, with an AI-first workflow built
        on Claude Code. I{" "}
        <a href="#writing" className="link">
          write about
        </a>{" "}
        what holds up in practice.
      </p>
    </div>
    <p className="rise-in mt-6 flex items-center gap-2.5" style={step(2)}>
      <span className="status-dot" aria-hidden="true" />
      Open to new freelance projects.
    </p>
    <div className="rise-in mt-5 flex flex-wrap items-center gap-x-6 gap-y-3" style={step(3)}>
      <a
        href="mailto:stellarweb.bali@gmail.com"
        className="inline-flex min-h-10 items-center rounded-[var(--radius)] bg-accent px-4 font-medium text-accent-ink no-underline transition-[background-color] duration-150 hover:bg-[color-mix(in_srgb,var(--accent)_88%,var(--ink))]"
      >
        Email me
      </a>
      <a href="https://www.linkedin.com/in/jeltehomminga" className="link">
        LinkedIn
      </a>
    </div>
  </section>
)
