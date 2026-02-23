import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroParallax } from "@/components/hero-parallax"

const differentiators = [
  {
    icon: "🌍",
    label: "Remote-First Senior",
    sub: "Dutch engineer in Bali, delivering for EU enterprise",
  },
  {
    icon: "⚡",
    label: "Architecture-Level",
    sub: "SSR, caching, CI/CD, auth — beyond components",
  },
  {
    icon: "📱",
    label: "Mobile Modernization",
    sub: "RN → Expo, EAS workflows, build optimization",
  },
  {
    icon: "🤖",
    label: "AI-Augmented Dev",
    sub: "Cursor, Claude, Copilot — AI as core workflow",
    isAi: true,
  },
]

export const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 pt-24 pb-12 lg:px-12"
    style={{
      background:
        "radial-gradient(ellipse at 25% 8%, rgba(135,206,235,0.15) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(12,138,158,0.06) 0%, transparent 40%), linear-gradient(180deg, var(--sand) 0%, var(--sand-warm) 100%)",
    }}
  >
    <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
      {/* Hero top: text + image */}
      <div className="mb-14 grid items-center gap-6 max-md:grid-cols-1 max-md:text-center md:gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up max-md:contents">
          {/* Title only — on mobile this appears above the image */}
          <h1 className="animate-fade-up-2 mb-3 font-heading text-[clamp(2.4rem,5vw,4rem)] leading-[1.08] text-ocean-deep max-md:order-1 max-md:text-center">
            AI-first <span className="text-sunset">Frontend</span>
            <br />
            Engineer
          </h1>

          {/* Everything else — on mobile this appears below the image */}
          <div className="max-md:order-3 max-md:text-center">
            <Badge className="animate-fade-up-1 mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-ocean to-ocean-light px-4 py-1.5 text-sm font-bold text-white">
              <span className="size-[8px] rounded-full bg-sunset" style={{ animation: "blink 2s ease-in-out infinite" }} />
              Available for projects
            </Badge>
            <p className="animate-fade-up-3 mb-4 text-lg font-bold leading-relaxed text-ocean">
              Building high-performance consumer apps at scale.
              <br />
              Based in Bali. Shipping enterprise-grade systems for European
              markets.
            </p>
            <p className="animate-fade-up-4 mb-8 max-w-[540px] text-base leading-[1.7] text-text-mid max-md:mx-auto">
              Core contributor to the My Luminus energy platform. I bring
              architecture-level thinking to frontend and mobile — from SSR caching
              strategies to React Native modernization. Powered by AI-augmented
              workflows with Cursor and Claude Code.
            </p>
            <div className="animate-fade-up-5 flex flex-wrap gap-3 max-md:justify-center">
              <Button
                nativeButton={false}
                render={<a href="#projects" />}
                className="rounded-full bg-gradient-to-br from-ocean to-ocean-deep px-7 py-3 text-[0.95rem] font-extrabold text-white shadow-[0_4px_20px_rgba(6,85,99,0.25)] transition-all duration-[350ms] hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(6,85,99,0.35)]"
              >
                See my work →
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<a href="#contact" />}
                className="rounded-full border-2 border-ocean bg-transparent px-7 py-3 text-[0.95rem] font-extrabold text-ocean-deep transition-all duration-[350ms] hover:-translate-y-[3px] hover:bg-ocean hover:text-white"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        <HeroParallax className="max-md:order-2">
          <div className="relative mx-auto max-w-[400px] max-md:max-w-[280px]">
            <div className="overflow-hidden rounded-[20px] shadow-[0_16px_50px_rgba(6,85,99,0.18),0_3px_10px_rgba(0,0,0,0.06)] transition-transform duration-[350ms] hover:rotate-0 hover:scale-[1.02] md:rotate-[1.5deg]">
              <Image
                src="/images/hero-caricature.jpg"
                alt="Jelte Homminga — caricature in Bali with padel racket, React logos, and developer toast notifications"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 280px, 400px"
                quality={60}
                priority
                fetchPriority="high"
                className="block w-full"
              />
            </div>
            {/* Toast floats */}
            <span
              className="absolute top-[6%] -right-4 z-[3] flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-3.5 py-2 text-sm font-extrabold text-palm shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-md:-right-0.5 max-md:top-[4%] max-md:px-2.5 max-md:py-1.5 max-md:text-xs"
              style={{ animation: "toastBob 3s ease-in-out infinite" }}
            >
              💯 Lighthouse 100
            </span>
            <span
              className="absolute top-[28%] -left-6 z-[3] flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-3.5 py-2 text-sm font-extrabold text-ocean shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-md:-left-1 max-md:px-2.5 max-md:py-1.5 max-md:text-xs"
              style={{
                animation: "toastBob 3s ease-in-out infinite",
                animationDelay: "-0.8s",
              }}
            >
              🚀 Shipped!
            </span>
            <span
              className="absolute top-1/2 -right-5 z-[3] flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-3.5 py-2 text-sm font-extrabold text-lava shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-md:-right-0.5 max-md:px-2.5 max-md:py-1.5 max-md:text-xs"
              style={{
                animation: "toastBob 3s ease-in-out infinite",
                animationDelay: "-1.5s",
              }}
            >
              ⚠️ Bug!
            </span>
            <span
              className="absolute bottom-[22%] -left-8 z-[3] flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-3.5 py-2 text-sm font-extrabold text-palm-dark shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-md:-left-1 max-md:bottom-[18%] max-md:px-2.5 max-md:py-1.5 max-md:text-xs"
              style={{
                animation: "toastBob 3s ease-in-out infinite",
                animationDelay: "-2s",
              }}
            >
              A11y 100%
            </span>
            <span
              className="absolute bottom-[6%] -right-3 z-[3] flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-3.5 py-2 text-sm font-extrabold text-sunset shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-md:-right-0.5 max-md:bottom-[4%] max-md:px-2.5 max-md:py-1.5 max-md:text-xs"
              style={{
                animation: "toastBob 3s ease-in-out infinite",
                animationDelay: "-2.8s",
              }}
            >
              CWV all green
            </span>
          </div>
        </HeroParallax>
      </div>

      {/* Differentiator cards */}
      <div className="animate-fade-up-6 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[400px]:mx-auto max-[400px]:max-w-[300px] max-[400px]:grid-cols-1">
        {differentiators.map((diff) => (
          <Card
            key={diff.label}
            className={cn(
              "border-[1.5px] bg-card py-4 text-center transition-all duration-[350ms] hover:-translate-y-[3px] hover:border-ocean hover:shadow-[0_8px_40px_rgba(6,85,99,0.08)]",
              diff.isAi &&
                "border-ai-purple/20 hover:border-ai-purple hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]"
            )}
          >
            <CardContent className="p-5">
              <div className="mb-1.5 text-[1.6rem]">{diff.icon}</div>
              <div
                className={cn(
                  "text-[0.85rem] font-extrabold leading-tight text-ocean-deep",
                  diff.isAi && "text-ai-purple"
                )}
              >
                {diff.label}
              </div>
              <div className="mt-1 text-[0.75rem] leading-snug text-text-mid">
                {diff.sub}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)
