import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { nowItems } from "@/data/now"

const tagStyles = {
  ai: "bg-ai-purple/12 text-ai-purple",
  active: "bg-palm/12 text-palm-dark",
  exploring: "bg-sunset/12 text-sunset",
} as const

export const Now = () => (
  <section id="now" className="relative z-[1] bg-sand px-8 py-24 lg:px-12 lg:py-28">
    <div className="mx-auto max-w-[1440px]">
      <ScrollReveal>
        <div className="mb-10">
          <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-ocean-deep">
            What I&apos;m Doing Now
          </div>
          <p className="mt-2 max-w-[600px] text-base leading-relaxed text-text-mid">
            Current focus — what&apos;s on my desk and in my head right now.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 lg:gap-5">
          {nowItems.map((item) => (
            <Card
              key={item.title}
              className="border-[1.5px] transition-all duration-[350ms] hover:-translate-y-[3px] hover:border-sunset hover:shadow-[0_8px_40px_rgba(6,85,99,0.08)]"
            >
              <CardContent className="flex items-start gap-4 p-5 lg:p-6">
                <div
                  className={cn(
                    "grid size-[44px] shrink-0 place-items-center rounded-[12px] text-xl",
                    item.iconBg
                  )}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.9rem] font-extrabold text-ocean-deep">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[0.82rem] leading-normal text-text-mid">
                    {item.desc}
                  </div>
                  <span
                    className={cn(
                      "mt-2 inline-block rounded-[10px] px-2.5 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider",
                      tagStyles[item.tagType]
                    )}
                  >
                    {item.tag}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
)
