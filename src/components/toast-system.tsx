"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

type ToastType = "bug" | "fix" | "ship" | "coffee" | "ai" | "lighthouse" | "tests" | "a11y" | "cwv" | "deployed"

type ToastConfig = {
  id: ToastType
  emoji: string
  text: string
  color: string
  borderColor: string
}

const toastConfigs: ToastConfig[] = [
  { id: "bug", emoji: "⚠️", text: "Bug!", color: "text-lava", borderColor: "border-l-lava" },
  { id: "fix", emoji: "⚠️", text: "Fix ASAP!", color: "text-sunset", borderColor: "border-l-sunset" },
  { id: "ship", emoji: "🚀", text: "Shipped!", color: "text-palm", borderColor: "border-l-palm" },
  { id: "lighthouse", emoji: "💯", text: "Lighthouse 100", color: "text-palm", borderColor: "border-l-palm" },
  { id: "tests", emoji: "✅", text: "All tests pass", color: "text-palm-dark", borderColor: "border-l-palm-dark" },
  { id: "a11y", emoji: "♿", text: "A11y 100%", color: "text-ocean", borderColor: "border-l-ocean" },
  { id: "cwv", emoji: "⚡", text: "CWV all green", color: "text-sunset", borderColor: "border-l-sunset" },
  { id: "deployed", emoji: "🎉", text: "Deployed to prod", color: "text-ocean-deep", borderColor: "border-l-ocean-deep" },
  { id: "coffee", emoji: "☕", text: "Coffee break", color: "text-coffee", borderColor: "border-l-coffee" },
  { id: "ai", emoji: "🤖", text: "Claude says hi", color: "text-ai-purple", borderColor: "border-l-ai-purple" },
]

export const ToastSystem = () => {
  const [activeToast, setActiveToast] = useState<ToastType | null>(null)

  const showToast = useCallback((id: ToastType, duration = 2500) => {
    setActiveToast(id)
    setTimeout(() => setActiveToast(null), duration)
  }, [])

  useEffect(() => {
    // Initial timed toasts
    const timers = [
      setTimeout(() => showToast("bug"), 3000),
      setTimeout(() => showToast("fix"), 5500),
      setTimeout(() => showToast("ship"), 8500),
      setTimeout(() => showToast("lighthouse"), 11000),
      setTimeout(() => showToast("tests"), 14000),
      setTimeout(() => showToast("a11y"), 17000),
      setTimeout(() => showToast("ai"), 20000),
      setTimeout(() => showToast("cwv"), 23000),
      setTimeout(() => showToast("coffee"), 26000),
      setTimeout(() => showToast("deployed"), 29000),
    ]

    // Random recurring toasts
    const allIds: ToastType[] = ["bug", "fix", "ship", "coffee", "ai", "lighthouse", "tests", "a11y", "cwv", "deployed"]
    const interval = setInterval(() => {
      showToast(allIds[Math.floor(Math.random() * allIds.length)], 2000)
    }, 20000)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [showToast])

  // Easter egg: type "coffee" or "claude"
  useEffect(() => {
    let typed = ""
    const handleKeyPress = (event: KeyboardEvent) => {
      typed += event.key
      if (typed.length > 12) typed = typed.slice(-12)
      if (typed.includes("coffee")) {
        showToast("coffee", 4000)
        typed = ""
      }
      if (typed.includes("claude")) {
        showToast("ai", 4000)
        typed = ""
      }
    }
    document.addEventListener("keypress", handleKeyPress)
    return () => document.removeEventListener("keypress", handleKeyPress)
  }, [showToast])

  return (
    <div className="pointer-events-none fixed top-14 right-5 z-[200] flex flex-col gap-2.5">
      {toastConfigs.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "pointer-events-auto flex items-center gap-2.5 rounded-2xl border-l-[4px] bg-white px-5 py-3 text-base font-extrabold shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500",
            "translate-x-[130%] opacity-0",
            toast.color,
            toast.borderColor,
            activeToast === toast.id && "translate-x-0 opacity-100"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xl">{toast.emoji}</span> {toast.text}
        </div>
      ))}
    </div>
  )
}
