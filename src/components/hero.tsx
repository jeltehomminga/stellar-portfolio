export const Hero = () => (
  <section aria-labelledby="hero-title" className="hero-fade pt-12 sm:pt-20">
    <h1 id="hero-title" className="text-display font-semibold">
      Senior frontend and mobile engineer for teams shipping Next.js and React
      Native at scale.
    </h1>
    <div className="mt-6 max-w-[62ch] space-y-4 text-ink-muted">
      <p>
        Core contributor to My Luminus, voted Product of the Year 2026 in
        Belgium. I work on the parts that decide whether an app stays fast and
        easy to ship: rendering strategy, caching, auth and release pipelines.
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
    <p className="mt-6">Open to new freelance projects.</p>
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
      <a
        href="mailto:stellarweb.bali@gmail.com"
        className="inline-flex min-h-10 items-center rounded-[var(--radius)] bg-accent px-4 font-medium text-accent-ink no-underline transition-opacity hover:opacity-90"
      >
        Email me
      </a>
      <a href="https://www.linkedin.com/in/jeltehomminga" className="link">
        LinkedIn
      </a>
    </div>
  </section>
)
