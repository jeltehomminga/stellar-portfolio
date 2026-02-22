"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type HeroParallaxProps = {
  children: ReactNode
  className?: string
}

export const HeroParallax = ({ children, className }: HeroParallaxProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(min-width: 769px)").matches) return

    const handleMouseMove = (event: MouseEvent) => {
      if (!wrapperRef.current) return
      const imgWrapper = wrapperRef.current.querySelector<HTMLElement>(
        "[data-parallax]"
      )
      if (!imgWrapper) return
      const offsetX = (event.clientX / window.innerWidth - 0.5) * 5
      const offsetY = (event.clientY / window.innerHeight - 0.5) * 5
      imgWrapper.style.transform = `rotate(${1.5 + offsetX * 0.15}deg) translate(${offsetX}px, ${offsetY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={cn("animate-fade-up-2 relative flex justify-center", className)}
    >
      <div data-parallax>{children}</div>
    </div>
  )
}
