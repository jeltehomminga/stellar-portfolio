import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const timeline = [
  {
    year: "2025 — Present",
    role: "Frontend Engineer · Web & Mobile",
    company: "Stellar Web Development · Bali, Indonesia",
    desc: "Running my own studio. Consulting for Luminus via Talent-IT, building Next.js and React Native apps with an AI-augmented workflow — Cursor and Claude Code as core tools in the dev process.",
    dotColor: "bg-ocean",
    ringColor: "shadow-[0_0_0_2px_var(--ocean)]",
  },
  {
    year: "2021 — 2025",
    role: "Frontend Developer",
    company: "Luminus · Brussels, Belgium (via Frontmen)",
    desc: "Core contributor to the My Luminus energy platform — \"Product of the Year 2026\" with 8.2/10 user satisfaction. Built component libraries with Storybook, implemented Cypress and testing library suites, designed the Next.js boilerplate repositories.",
    dotColor: "bg-palm",
    ringColor: "shadow-[0_0_0_2px_var(--palm)]",
  },
  {
    year: "2020 — 2021",
    role: "Frontend Developer",
    company: "Frontmen · Amsterdam (KLM Health Services, APPO)",
    desc: "React Native apps for KLM Health Services. Built a healthcare portal for APPO with Next.js and TypeScript — introduced react-query and MSW. Early AI-assisted coding adopter with TabNine.",
    dotColor: "bg-ocean-light",
    ringColor: "shadow-[0_0_0_2px_var(--ocean-light)]",
  },
  {
    year: "2019 — 2020",
    role: "React Developer",
    company: "De Nationale Hypotheekbond · Netherlands",
    desc: "Built mortgage platform features with React, Redux, and Styled Components.",
    dotColor: "bg-sunset-glow",
    ringColor: "shadow-[0_0_0_2px_var(--sunset-glow)]",
  },
  {
    year: "2019",
    role: "Frontend Developer",
    company: "DGN · Netherlands",
    desc: "First developer role after the Ironhack bootcamp. React development for digital government services.",
    dotColor: "bg-palm",
    ringColor: "shadow-[0_0_0_2px_var(--palm)]",
  },
  {
    year: "2008 — 2019",
    role: "Application Consultant → Agile Engineer → Developer",
    company: "Nuon (Vattenfall) · Netherlands",
    desc: "Started as a process improver, grew into application consultant for Siebel CRM and SAP. Completed the Ironhack bootcamp in 2019 to make the switch to frontend development. This business background still shapes how I think about product.",
    dotColor: "bg-sunset",
    ringColor: "shadow-[0_0_0_2px_var(--sunset)]",
  },
]

const funFacts = [
  { icon: "🏸", text: "Padel addict — racket always at the café" },
  { icon: "☕", text: "Espresso tuning is the other craft" },
  { icon: "🥥", text: "Coconut water: the debugging drink" },
  { icon: "🤖", text: "Claude is my favorite pair programmer" },
]

export const Experience = () => (
  <section id="experience" className="relative bg-sand-warm px-8 py-24 lg:px-12 lg:py-28">
    <div className="relative z-[5] mx-auto max-w-[1200px]">
      <ScrollReveal>
        <div className="mb-10">
          <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-ocean-deep">
            Experience
          </div>
          <p className="mt-2 max-w-[600px] text-base leading-relaxed text-text-mid">
            From IT career changer to enterprise frontend engineer — now
            shipping from Bali.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-[3px] bg-gradient-to-b from-ocean via-palm to-sunset" />

          {timeline.map((item) => (
            <div key={item.year} className="relative mb-8">
              {/* Dot */}
              <div
                className={`absolute -left-10 top-1 size-[13px] rounded-full border-[3px] border-sand-warm ${item.dotColor} ${item.ringColor}`}
              />
              <div className="text-[0.78rem] font-extrabold text-ocean">
                {item.year}
              </div>
              <div className="font-heading text-lg text-ocean-deep">
                {item.role}
              </div>
              <div className="text-[0.88rem] font-bold text-text-mid">
                {item.company}
              </div>
              <div className="mt-1.5 text-[0.88rem] leading-relaxed text-text-mid">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {funFacts.map((fact) => (
            <Card
              key={fact.text}
              className="border-[1.5px] text-center transition-all duration-[350ms] hover:-translate-y-[3px] hover:border-sunset hover:shadow-[0_8px_40px_rgba(6,85,99,0.08)]"
            >
              <CardContent className="p-4 lg:p-5">
                <div className="mb-1.5 text-[1.8rem]">{fact.icon}</div>
                <div className="text-[0.85rem] font-bold leading-snug text-text-mid">
                  {fact.text}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
)
