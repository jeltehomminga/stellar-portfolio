import { ScrollReveal } from "@/components/scroll-reveal"

const contactLinks = [
  { href: "mailto:jelte@stellarwebdev.com", icon: "✉️", label: "Email" },
  { href: "https://github.com/jeltehomminga", icon: "🐙", label: "GitHub", external: true },
  { href: "https://linkedin.com/in/jeltehomminga", icon: "💼", label: "LinkedIn", external: true },
]

export const Contact = () => (
  <section id="contact" className="relative z-[1] bg-sand px-8 py-24 lg:px-12 lg:py-28">
    <div className="mx-auto max-w-[1440px]">
      <ScrollReveal>
        <div
          className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-ocean-deep to-ocean p-12 text-center text-white lg:p-16"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='white' stroke-opacity='.03' stroke-width='1'/%3E%3C/svg%3E"), linear-gradient(135deg, var(--ocean-deep), var(--ocean))`,
            backgroundSize: "60px, 100%",
          }}
        >
          <h2 className="relative font-heading text-[clamp(1.8rem,3vw,2.4rem)]">
            Let&apos;s build something 🤙
          </h2>
          <p className="relative mx-auto mt-3 mb-8 max-w-[500px] text-base opacity-85">
            Need a senior frontend engineer who thinks about architecture,
            performance, and ships with AI-powered velocity? Let&apos;s talk.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-full border-[1.5px] border-white/18 bg-white/13 px-5 py-2.5 text-[0.88rem] font-bold text-white no-underline backdrop-blur-sm transition-all duration-[350ms] hover:-translate-y-[3px] hover:bg-white hover:text-ocean-deep"
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
