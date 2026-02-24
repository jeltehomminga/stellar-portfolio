import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const highlights = [
  { icon: "🏝️", label: "Based in Bali", value: "Async-first, autonomous workflow" },
  { icon: "⚡", label: "6+ Years Dev", value: "15+ years total in IT" },
  { icon: "🤖", label: "AI-First Workflow", value: "5 years of AI-assisted coding", isAi: true },
  { icon: "🇪🇺", label: "EU Enterprise", value: "Production systems at scale" },
]

export const About = () => (
  <section id="about" className="relative bg-sand px-8 py-24 lg:px-12 lg:py-28">
    <div className="relative z-[5] mx-auto max-w-[1200px]">
      <ScrollReveal>
        <div className="mb-10">
          <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-ocean-deep">
            About Me
          </div>
          <p className="mt-2 max-w-[600px] text-base leading-relaxed text-text-mid">
            From IT career changer to AI-augmented frontend engineer —
            shipping enterprise systems from a Bali beach desk.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid items-start gap-12 max-md:grid-cols-1 md:grid-cols-2 lg:gap-16">
        <ScrollReveal delay={0.1}>
          <div className="text-base leading-[1.8] text-text-mid">
            <p>
              I&apos;m Jelte Homminga, founder of{" "}
              <strong className="text-ocean-deep">
                Stellar Web Development
              </strong>
              , based in Bali, Indonesia. With 6+ years as a professional
              frontend developer — and a decade of IT experience before that — I
              build performant, user-focused applications using TypeScript, React,
              Next.js, and React Native.
            </p>
            <p className="mt-3">
              After a decade in IT at Vattenfall, I completed the Ironhack
              bootcamp in 2019 and went all-in on frontend development. I started
              at DGN and De Nationale Hypotheekbond, built React Native
              apps at KLM Health Services, and became a core contributor to the
              My Luminus energy platform (&ldquo;Product of the Year
              2026&rdquo;) — designing caching strategies and auth flows that
              handle production traffic at scale.
            </p>
            <p className="mt-3">
              I&apos;m an early adopter of AI-powered development — five years of
              experience with AI coding tools, from TabNine in 2020 to{" "}
              <strong className="text-ocean-deep">Cursor</strong> and{" "}
              <strong className="text-ocean-deep">Claude Code</strong> today. Not
              a gimmick, but a genuine multiplier that lets me ship faster and
              think bigger.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((hl) => (
              <Card
                key={hl.label}
                className={cn(
                  "border-[1.5px] transition-all duration-[350ms] hover:-translate-y-[3px] hover:border-ocean hover:shadow-[0_8px_40px_rgba(6,85,99,0.08)]",
                  hl.isAi && "border-ai-purple/15 hover:border-ai-purple"
                )}
              >
                <CardContent className="p-4 lg:p-5">
                  <div className="text-[1.5rem]">{hl.icon}</div>
                  <div className="mt-1.5 text-[0.85rem] font-extrabold text-ocean-deep">
                    {hl.label}
                  </div>
                  <div className="mt-1 text-[0.78rem] text-text-mid">
                    {hl.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
)
