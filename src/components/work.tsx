import { Section } from "@/components/section"

type CaseStudy = {
  title: string
  context: string
  problem: string
  approach: string
  outcome: string
  links: { href: string; label: string }[]
}

const caseStudies: CaseStudy[] = [
  {
    title: "My Luminus",
    context: "Customer portal for Luminus, a Belgian energy supplier. 2021 to now.",
    problem:
      "Customers manage their energy contracts and invoices across several apps that share one login. It has to stay fast under production traffic and keep sessions in sync.",
    approach:
      "Dual-layer caching (HTTP and Redis, with TanStack Query on the client), Auth0 sessions shared across apps, server rendering with the Next.js App Router, a Storybook component library, and the Next.js boilerplate new apps start from.",
    outcome:
      "Voted Product of the Year 2026 in Belgium, with 8.2/10 user satisfaction and a 96% recommendation rate.",
    links: [
      {
        href: "https://press.luminus.be/my-luminus-bekroond-tot-gekozen-product-van-het-jaar-2026",
        label: "Press release (Dutch)",
      },
    ],
  },
  {
    title: "School app: React Native CLI to Expo",
    context: "Mobile app for Empathy School in Bali: schedules, reports and parent communication.",
    problem:
      "The app ran on the bare React Native CLI, so every change, however small, meant a manual native build and a new store release.",
    approach:
      "Migrated the app to Expo with EAS Build, fingerprint-based build reuse and over-the-air updates.",
    outcome:
      "Native builds now run only when native code changes. JavaScript fixes reach users as OTA updates, without waiting on a store review.",
    links: [{ href: "https://github.com/jeltehomminga/empathySchool", label: "Source on GitHub" }],
  },
  {
    title: "CourtScout",
    context: "A padel court finder for Bali. Built for myself, used every day.",
    problem:
      "Finding a free padel court meant opening Playtomic and checking each club, one day at a time.",
    approach:
      "Prototyped in v0, then rebuilt it properly: the generated UI split into typed components, strict TypeScript, 20+ Vitest tests, shareable URL state with nuqs, and a PWA.",
    outcome:
      "A production PWA at courtscout.app with Lighthouse scores of 99, 96, 100 and 100. Open source.",
    links: [
      { href: "https://courtscout.app", label: "courtscout.app" },
      { href: "/blog/courtscout-from-v0-to-production", label: "How I built it" },
    ],
  },
]

const rows = [
  ["Problem", "problem"],
  ["What I did", "approach"],
  ["Outcome", "outcome"],
] as const

export const Work = () => (
  <Section id="work" title="Selected work">
    <div className="space-y-14">
      {caseStudies.map((study) => (
        <article key={study.title}>
          <h3 className="text-h3 font-semibold">{study.title}</h3>
          <p className="mt-1 text-ink-muted">{study.context}</p>
          <dl className="mt-5 space-y-4 sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-x-6 sm:gap-y-4 sm:space-y-0">
            {rows.map(([label, key]) => (
              <div key={key} className="sm:contents">
                <dt className="text-small font-medium text-ink-faint sm:pt-0.5">{label}</dt>
                <dd className="mt-0.5 max-w-[62ch] sm:mt-0">{study[key]}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 sm:pl-[calc(7.5rem+1.5rem)]">
            {study.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
)
