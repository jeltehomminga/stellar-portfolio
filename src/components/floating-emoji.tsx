"use client"

import { useEffect, useRef } from "react"

const floaters = [
  { emoji: "🌴", top: "2%", left: "4%", size: "2.4rem", opacity: 0.16 },
  { emoji: "🥥", top: "6%", right: "5%", size: "1.8rem", opacity: 0.13 },
  { emoji: "☕", top: "12%", left: "88%", size: "2rem", opacity: 0.14 },
  { emoji: "🌺", top: "18%", left: "3%", size: "1.6rem", opacity: 0.12 },
  { emoji: "🏝️", top: "24%", right: "4%", size: "2.2rem", opacity: 0.15 },
  { emoji: "🏸", top: "30%", left: "6%", size: "1.7rem", opacity: 0.13 },
  { emoji: "🌊", top: "36%", right: "3%", size: "1.5rem", opacity: 0.11 },
  { emoji: "☕", top: "42%", left: "2%", size: "2rem", opacity: 0.14 },
  { emoji: "🌴", top: "48%", right: "6%", size: "2.3rem", opacity: 0.16 },
  { emoji: "🥥", top: "54%", left: "5%", size: "1.6rem", opacity: 0.12 },
  { emoji: "🌺", top: "60%", right: "4%", size: "1.8rem", opacity: 0.14 },
  { emoji: "🏸", top: "66%", left: "3%", size: "2rem", opacity: 0.15 },
  { emoji: "🌊", top: "72%", right: "5%", size: "1.5rem", opacity: 0.11 },
  { emoji: "🌴", top: "78%", left: "7%", size: "2.2rem", opacity: 0.16 },
  { emoji: "☕", top: "84%", right: "3%", size: "1.7rem", opacity: 0.13 },
  { emoji: "🥥", top: "90%", left: "4%", size: "1.9rem", opacity: 0.14 },
  { emoji: "🏝️", top: "95%", right: "6%", size: "2rem", opacity: 0.12 },
]

export const FloatingEmoji = () => {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeFloaters = () => {
      if (wrapRef.current) {
        wrapRef.current.style.height = `${document.documentElement.scrollHeight}px`
      }
    }

    resizeFloaters()
    window.addEventListener("resize", resizeFloaters)
    const observer = new MutationObserver(resizeFloaters)
    observer.observe(document.body, { childList: true, subtree: true })
    const timeout = setTimeout(resizeFloaters, 1000)

    // Randomize floater animations
    wrapRef.current?.querySelectorAll<HTMLElement>(".floater").forEach((el) => {
      el.style.animationDuration = `${18 + Math.random() * 14}s`
      el.style.animationDelay = `${-Math.random() * 20}s`
    })

    return () => {
      window.removeEventListener("resize", resizeFloaters)
      observer.disconnect()
      clearTimeout(timeout)
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
