type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

/** Homepage section: h2 sitting on a hairline, 64px (mobile) / 96px (desktop) rhythm. */
export const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="mt-16 scroll-mt-8 sm:mt-24">
    <h2
      id={`${id}-title`}
      className="mb-8 border-t border-rule pt-6 text-h2 font-semibold"
    >
      {title}
    </h2>
    {children}
  </section>
)
