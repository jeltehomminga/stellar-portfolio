"use client"

import dynamic from "next/dynamic"

const CursorTrail = dynamic(
  () => import("@/components/cursor-trail").then((m) => m.CursorTrail),
  { ssr: false }
)

export const ClientExtras = () => <CursorTrail />
