import { Section } from "@/components/section"
import { Portrait } from "@/components/portrait"

export const About = () => (
  <Section id="about" title="About">
    <div className="grid gap-8 sm:grid-cols-[7.5rem_1fr] sm:gap-x-6">
      <Portrait className="max-w-40 sm:max-w-none" />
      <div className="max-w-[62ch] space-y-4">
        <p>
          I&rsquo;m Jelte, a Dutch frontend and mobile engineer living in Bali.
          I work through my own company, Stellar Web Development, mostly with
          European teams on long-running products.
        </p>
        <p>
          I came to code through a decade in IT at Nuon (Vattenfall), as an
          application consultant on Siebel CRM and SAP, and switched to
          frontend development in 2019. That background is why I start with the
          product question before the technical one.
        </p>
        <p>
          I&rsquo;ve used AI coding tools since TabNine in 2020. Today Claude
          Code and agents do much of the typing, and I spend my time on
          architecture, review and the decisions that need judgement.
        </p>
        <p>
          Off the keyboard I&rsquo;m usually on a padel court, or adjusting the
          grinder for a better espresso.
        </p>
        <p className="text-ink-muted">
          Tools I use most: TypeScript, React, Next.js, React Native, Expo and
          EAS, TanStack Query, Redis, Auth0, Storybook, Cypress, Vitest and
          Claude Code.
        </p>
      </div>
    </div>
  </Section>
)
