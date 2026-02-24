"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

type StackItem = {
  label: string
  primary?: boolean
}

type StackGroup = {
  icon: string
  title: string
  items: StackItem[]
  isAi?: boolean
  span2?: boolean
}

const stackGroups: StackGroup[] = [
  {
    icon: "🏗️",
    title: "Frontend Architecture",
    items: [
      { label: "Next.js (App Router)", primary: true },
      { label: "React 19", primary: true },
      { label: "TypeScript", primary: true },
      { label: "TanStack Query" },
      { label: "Suspense Patterns" },
      { label: "SSR / Server Actions" },
      { label: "Material UI 7" },
      { label: "Base UI" },
      { label: "Framer Motion" },
      { label: "Tailwind CSS" },
    ],
  },
  {
    icon: "📱",
    title: "Mobile",
    items: [
      { label: "React Native", primary: true },
      { label: "Expo SDK 54+", primary: true },
      { label: "EAS Workflows", primary: true },
      { label: "Expo Router" },
      { label: "NativeWind v5" },
      { label: "OTA Strategy" },
      { label: "Build Fingerprinting" },
    ],
  },
  {
    icon: "🤖",
    title: "AI Tooling",
    isAi: true,
    items: [
      { label: "Cursor IDE", primary: true },
      { label: "Claude (Anthropic)", primary: true },
      { label: "GitHub Copilot", primary: true },
      { label: "AI Code Review" },
      { label: "Prompt Engineering" },
      { label: "Claude Code" },
      { label: "v0 / Bolt" },
    ],
  },
  {
    icon: "⚙️",
    title: "DevOps & Infra",
    items: [
      { label: "Azure DevOps", primary: true },
      { label: "AKS" },
      { label: "Redis Caching" },
      { label: "Auth0" },
      { label: "GrowthBook" },
      { label: "CI/CD Pipelines" },
    ],
  },
  {
    icon: "✅",
    title: "Quality & Testing",
    span2: true,
    items: [
      { label: "Vitest", primary: true },
      { label: "React Testing Library", primary: true },
      { label: "MSW" },
      { label: "TypeScript Strictness" },
      { label: "Functional Style" },
      { label: "Storybook" },
      { label: "No Snapshot Testing" },
    ],
  },
]

export const TechStack = () => {
  const groupsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = groupsRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>("[data-pill]")
              .forEach((pill, index) => {
                pill.style.opacity = "0"
                pill.style.transform = "translateY(8px) scale(0.95)"
                pill.style.transition = `all 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.025}s`
                requestAnimationFrame(() => {
                  pill.style.opacity = "1"
                  pill.style.transform = "translateY(0) scale(1)"
                })
              })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech" className="relative bg-sand-warm px-8 py-24 lg:px-12 lg:py-28">
      <div className="relative z-[5] mx-auto max-w-[1200px]">
        <ScrollReveal>
          <div className="mb-10">
            <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-ocean-deep">
              Tech Stack
            </div>
            <p className="mt-2 max-w-[600px] text-base leading-relaxed text-text-mid">
              Grouped by competence. These are the tools I reach for — and the
              depth I bring to each.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            ref={groupsRef}
            className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 lg:gap-6"
          >
            {stackGroups.map((group) => (
              <Card
                key={group.title}
                className={cn(
                  "border-[1.5px] transition-all duration-[350ms] hover:border-ocean hover:shadow-[0_8px_40px_rgba(6,85,99,0.08)]",
                  group.isAi &&
                    "border-ai-purple/15 hover:border-ai-purple hover:shadow-[0_8px_40px_rgba(139,92,246,0.1)]",
                  group.span2 && "col-span-2 max-sm:col-span-1"
                )}
              >
                <CardContent className="p-5 lg:p-6">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="text-[1.4rem]">{group.icon}</span>
                    <span
                      className={cn(
                        "font-heading text-lg text-ocean-deep",
                        group.isAi && "text-ai-purple"
                      )}
                    >
                      {group.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item.label}
                        data-pill
                        className={cn(
                          "rounded-full px-3 py-1.5 text-[0.78rem] font-bold transition-all duration-200",
                          group.isAi
                            ? item.primary
                              ? "bg-ai-purple/18 font-extrabold text-ai-purple hover:bg-ai-purple hover:text-white"
                              : "bg-ai-purple/10 text-ai-purple hover:bg-ai-purple hover:text-white"
                            : item.primary
                              ? "bg-ocean/14 font-extrabold text-ocean-deep hover:bg-ocean hover:text-white"
                              : "bg-ocean/6 text-text-mid hover:bg-ocean hover:text-white"
                        )}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
