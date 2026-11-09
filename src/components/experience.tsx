import { Section } from "@/components/section"

const roles = [
  {
    period: "2025 – now",
    role: "Freelance frontend & mobile engineer",
    org: "Stellar Web Development, Bali",
    note: "Consulting for Luminus via Talent-IT. Next.js and React Native apps for international clients.",
  },
  {
    period: "2021 – 2025",
    role: "Frontend developer",
    org: "Luminus via Frontmen, Brussels",
    note: "My Luminus portal: component library, Cypress and Testing Library suites, Next.js boilerplates.",
  },
  {
    period: "2020 – 2021",
    role: "Frontend developer",
    org: "Frontmen, Amsterdam",
    note: "React Native for KLM Health Services. A Next.js healthcare portal for APPO.",
  },
  {
    period: "2019 – 2020",
    role: "React developer",
    org: "De Nationale Hypotheekbond",
    note: "Mortgage platform features in React and Redux.",
  },
  {
    period: "2019",
    role: "Frontend developer",
    org: "DGN",
    note: "First developer role after the Ironhack bootcamp.",
  },
  {
    period: "2008 – 2019",
    role: "Application consultant to developer",
    org: "Nuon (Vattenfall)",
    note: "Process improvement, Siebel CRM and SAP, then the switch to code.",
  },
]

export const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="space-y-6">
      {roles.map((item) => (
        <li key={item.period} className="sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-x-6">
          <p className="tabular text-small text-ink-faint sm:pt-0.5">{item.period}</p>
          <div className="mt-1 sm:mt-0">
            <h3 className="font-semibold">
              {item.role}
              <span className="font-normal text-ink-muted">, {item.org}</span>
            </h3>
            <p className="mt-1 max-w-[62ch] text-ink-muted">{item.note}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
)
