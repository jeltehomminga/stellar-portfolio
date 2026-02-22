import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export const ScrollReveal = ({ children, className, delay }: ScrollRevealProps) => (
  <div
    className={cn("reveal", className)}
    style={delay ? { transitionDelay: `${delay}s` } : undefined}
  >
    {children}
  </div>
)
