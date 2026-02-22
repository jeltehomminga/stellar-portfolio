import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

const projects = [
  {
    emoji: "💡",
    gradient: "from-sunset to-lava",
    tag: "Enterprise · Belgian Energy",
    title: "MyLuminus Portal",
    desc: "\"Product of the Year 2026\" — 8.2/10 user satisfaction, 96% recommendation rate. Core contributor since 2021. Dual-layer caching (HTTP + Redis + React Query), Auth0 multi-app sessions, SSR with Next.js App Router, component libraries with Storybook.",
    stack: ["Next.js", "React 19", "TypeScript", "TanStack Query", "Redis", "Auth0", "Storybook", "Cypress"],
  },
  {
    emoji: "🏫",
    gradient: "from-[#1a5276] to-ocean-light",
    tag: "Mobile App · Education",
    title: "School App",
    desc: "Full-featured app for a Bali school — schedules, reports, communication. Migrated from RN CLI to Expo with EAS build optimization, OTA updates, and fingerprint-based build reuse.",
    stack: ["React Native", "Expo", "TypeScript", "EAS", "Firebase"],
  },
  {
    emoji: "✦",
    gradient: "from-ocean-deep to-palm",
    title: "Stellar Web Development",
    tag: "Freelance Studio",
    desc: "My own studio. Modern web and mobile apps for international clients — MVPs to production. AI-augmented workflow with Cursor & Claude for faster delivery and better architecture.",
    stack: ["Next.js", "React Native", "TypeScript", "Cursor", "Claude"],
  },
]

export const Projects = () => (
  <section id="projects" className="relative z-[1] bg-sand-warm px-8 py-24 lg:px-12 lg:py-28">
    <div className="mx-auto max-w-[1440px]">
      <ScrollReveal>
        <div className="mb-10">
          <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-ocean-deep">
            Projects
          </div>
          <p className="mt-2 max-w-[600px] text-base leading-relaxed text-text-mid">
            Real systems, real users, real trade-offs.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={0.1 * (index + 1)} className="h-full">
            <Card className="h-full overflow-hidden border-[1.5px] transition-all duration-[350ms] hover:-translate-y-[5px] hover:border-ocean hover:shadow-[0_16px_60px_rgba(6,85,99,0.16)]">
              <div
                className={`flex h-[170px] items-center justify-center bg-gradient-to-br text-[3rem] ${project.gradient}`}
              >
                {project.emoji}
              </div>
              <CardContent className="p-5 lg:p-6">
                <div className="mb-1.5 text-[0.72rem] font-extrabold uppercase tracking-wider text-ocean">
                  {project.tag}
                </div>
                <div className="mb-2 font-heading text-xl text-ocean-deep">
                  {project.title}
                </div>
                <p className="mb-4 text-[0.88rem] leading-relaxed text-text-mid">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full bg-ocean/7 px-2.5 py-1 text-[0.72rem] font-bold text-ocean-deep"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)
