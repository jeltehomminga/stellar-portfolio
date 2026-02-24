"use client"

import { useEffect, useRef } from "react"

const floaters = [
  { emoji: "🌴", top: "1%", left: "3%", size: "2.4rem", opacity: 0.16 },
  { emoji: "🥥", top: "5%", right: "4%", size: "1.8rem", opacity: 0.13 },
  { emoji: "☕", top: "9%", right: "3%", size: "2rem", opacity: 0.14 },
  { emoji: "🌺", top: "14%", left: "4%", size: "1.6rem", opacity: 0.12 },
  { emoji: "🏝️", top: "18%", right: "5%", size: "2.2rem", opacity: 0.15 },
  { emoji: "🏸", top: "23%", left: "5%", size: "1.7rem", opacity: 0.13 },
  { emoji: "🌊", top: "27%", right: "3%", size: "1.5rem", opacity: 0.11 },
  { emoji: "☕", top: "32%", left: "3%", size: "2rem", opacity: 0.14 },
  { emoji: "🌴", top: "36%", right: "4%", size: "2.3rem", opacity: 0.16 },
  { emoji: "🥥", top: "41%", left: "5%", size: "1.6rem", opacity: 0.12 },
  { emoji: "🌺", top: "45%", right: "3%", size: "1.8rem", opacity: 0.14 },
  { emoji: "🏸", top: "50%", left: "4%", size: "2rem", opacity: 0.15 },
  { emoji: "🌊", top: "54%", right: "5%", size: "1.5rem", opacity: 0.11 },
  { emoji: "🌴", top: "58%", left: "3%", size: "2.2rem", opacity: 0.16 },
  { emoji: "☕", top: "63%", right: "4%", size: "1.7rem", opacity: 0.13 },
  { emoji: "🥥", top: "67%", left: "5%", size: "1.9rem", opacity: 0.14 },
  { emoji: "🏝️", top: "72%", right: "3%", size: "2rem", opacity: 0.12 },
  { emoji: "🌺", top: "76%", left: "4%", size: "1.6rem", opacity: 0.13 },
  { emoji: "🏸", top: "80%", right: "5%", size: "1.8rem", opacity: 0.15 },
  { emoji: "🌊", top: "84%", left: "3%", size: "1.5rem", opacity: 0.11 },
  { emoji: "🌴", top: "88%", right: "4%", size: "2.1rem", opacity: 0.14 },
  { emoji: "☕", top: "92%", left: "5%", size: "1.7rem", opacity: 0.13 },
  { emoji: "🥥", top: "96%", right: "3%", size: "1.9rem", opacity: 0.12 },
]

export const FloatingEmoji = () => {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeFloaters = () => {
      if (wrapRef.current) {
        // Temporarily collapse to avoid measuring our own height
        wrapRef.current.style.height = "0px"
        wrapRef.current.style.height = `${document.documentElement.scrollHeight}px`
      }
    }

    resizeFloaters()
    window.addEventListener("resize", resizeFloaters)
    // ResizeObserver catches body size changes even without DOM mutations
    // (e.g., images loading, fonts settling, MDX content reflowing)
    const resizeObserver = new ResizeObserver(resizeFloaters)
    resizeObserver.observe(document.body)

    // Randomize floater animations
    wrapRef.current?.querySelectorAll<HTMLElement>(".floater").forEach((el) => {
      el.style.animationDuration = `${18 + Math.random() * 14}s`
      el.style.animationDelay = `${-Math.random() * 20}s`
    })

    return () => {
      window.removeEventListener("resize", resizeFloaters)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute top-0 left-0 z-[3] w-full overflow-hidden"
    >
      {floaters.map((item, index) => (
        <span
          key={index}
          className="floater pointer-events-none absolute leading-none drop-shadow-sm"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            fontSize: item.size,
            opacity: item.opacity,
            animation: `floatY 22s ease-in-out infinite`,
            animationDirection: index % 2 === 0 ? "normal" : "reverse",
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  )
}
