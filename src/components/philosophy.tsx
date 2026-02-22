import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const philosophies = [
  {
    icon: "🎯",
    title: "Performance > Trends",
    desc: "I optimize for Core Web Vitals and real-world load times, not whatever's trending on Twitter this week.",
  },
  {
    icon: "🔒",
    title: "Deterministic Systems",
    desc: "Strict types, predictable behavior, no unnecessary mocking. If a test passes, it should mean something.",
  },
  {
    icon: "🪶",
    title: "Minimize Complexity",
    desc: "Every abstraction layer should earn its place. Simpler systems survive longer in production.",
  },
  {
    icon: "💸",
    title: "Cost Awareness",
    desc: "Build credits, cold starts, cache headers. Good engineering doesn't ignore the bill.",
  },
  {
    icon: "🤖",
    title: "AI as a Multiplier",
    desc: "Cursor and Claude aren't replacements — they're accelerants. I use AI to think faster, review better, and ship more.",
    isAi: true,
  },
  {
    icon: "🚀",
    title: "Ship, Don't Debate",
    desc: "Strong opinions, loosely held. Ship the 80% solution and iterate — don't perfect-architecture your way to zero output.",
  },
]

export const Philosophy = () => (
  <section id="philosophy" className="relative z-[1] bg-sand px-8 py-24 lg:px-12 lg:py-28">
    <div className="mx-auto max-w-[1440px]">
      <ScrollReveal>
        <div className="mb-10">
          <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-ocean-deep">
            Engineering Philosophy
          </div>
          <p className="mt-2 max-w-[600px] text-base leading-relaxed text-text-mid">
            Not just what I use — how I think about building software.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 lg:gap-5">
          {philosophies.map((phil) => (
            <Card
              key={phil.title}
              className={cn(
                "group relative overflow-hidden border-[1.5px] transition-all duration-[350ms] hover:-translate-y-1 hover:border-ocean hover:shadow-[0_8px_40px_rgba(6,85,99,0.08)]",
                phil.isAi && "border-ai-purple/15 hover:border-ai-purple"
              )}
            >
              {/* Top accent bar */}
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  phil.isAi
                    ? "bg-gradient-to-r from-ai-purple to-ai-purple-light"
                    : "bg-gradient-to-r from-ocean to-palm"
                )}
              />
              <CardContent className="p-5 lg:p-6">
                <div className="mb-2 text-[1.5rem]">{phil.icon}</div>
                <div
                  className={cn(
                    "mb-1.5 text-[0.92rem] font-extrabold text-ocean-deep",
                    phil.isAi && "text-ai-purple"
                  )}
                >
                  {phil.title}
                </div>
                <div className="text-[0.85rem] leading-[1.6] text-text-mid">
                  {phil.desc}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
)
