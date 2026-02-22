"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Stack" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#projects", label: "Projects" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
]

const brandNamesFull = ["Stellar Web Development", "Jelte Homminga"]
const brandNamesShort = ["Stellar", "Jelte"]

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [brandIndex, setBrandIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % brandNamesFull.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-[100] px-8 py-2.5 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 lg:px-12",
        "border-b-[1.5px] border-ocean/8 bg-sand/72",
        scrolled && "bg-sand/95 shadow-[0_4px_30px_rgba(6,85,99,0.1)]"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1.5 font-heading text-xl text-ocean-deep no-underline transition-transform duration-300 hover:scale-[1.04]"
        >
          <span className="grid size-[30px] -rotate-[5deg] place-items-center rounded-lg bg-gradient-to-br from-ocean to-palm text-xs text-white">
            ✦
          </span>
          <span className="relative h-[1.4em] overflow-hidden md:hidden">
            {brandNamesShort.map((name, index) => (
              <span
                key={name}
                className={cn(
                  "block transition-all duration-500 ease-in-out",
                  index === brandIndex
                    ? "translate-y-0 opacity-100"
                    : "absolute inset-0 -translate-y-full opacity-0"
                )}
              >
                {name}
              </span>
            ))}
          </span>
          <span className="relative hidden h-[1.4em] overflow-hidden md:inline-block">
            {brandNamesFull.map((name, index) => (
              <span
                key={name}
                className={cn(
                  "block transition-all duration-500 ease-in-out",
                  index === brandIndex
                    ? "translate-y-0 opacity-100"
                    : "absolute inset-0 -translate-y-full opacity-0"
                )}
              >
                {name}
              </span>
            ))}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden list-none gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-[0.82rem] font-bold text-ocean-deep no-underline transition-all duration-300 hover:-translate-y-px hover:bg-ocean hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <span className="text-xl text-ocean-deep">☰</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-sand/97 backdrop-blur-xl">
            <nav className="mt-16 flex flex-col gap-1">
              {navLinks.map((link) => (
                <SheetClose key={link.href} nativeButton={false} render={<a href={link.href} />}>
                  <span className="block rounded-full px-4 py-3 text-center text-sm font-bold text-ocean-deep transition-all duration-300 hover:bg-ocean hover:text-white">
                    {link.label}
                  </span>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
