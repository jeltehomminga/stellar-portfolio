"use client"

import dynamic from "next/dynamic"

const FloatingEmoji = dynamic(
  () => import("@/components/floating-emoji").then((m) => m.FloatingEmoji),
  { ssr: false }
)
const ToastSystem = dynamic(
  () => import("@/components/toast-system").then((m) => m.ToastSystem),
  { ssr: false }
)
const CursorTrail = dynamic(
  () => import("@/components/cursor-trail").then((m) => m.CursorTrail),
  { ssr: false }
)
const ScrollRevealInit = dynamic(
  () =>
    import("@/components/scroll-reveal-init").then((m) => m.ScrollRevealInit),
  { ssr: false }
)

export const ClientExtras = () => (
  <>
    <FloatingEmoji />
    <ToastSystem />
    <ScrollRevealInit />
    <CursorTrail />
  </>
)
