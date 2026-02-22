import type { Metadata } from "next"
import { Lilita_One, Nunito, Fira_Code } from "next/font/google"
import "./globals.css"
import { OceanWaves } from "@/components/ocean-waves"
import { FloatingEmoji } from "@/components/floating-emoji"
import { ToastSystem } from "@/components/toast-system"
import { CursorTrail } from "@/components/cursor-trail"
import { ScrollRevealInit } from "@/components/scroll-reveal-init"

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jelte Homminga — Senior React & Expo Engineer · Bali",
  description:
    "Senior product-focused React, React Native & Expo engineer. AI-augmented development with Cursor & Claude. Based in Bali, shipping for European enterprise.",
  openGraph: {
    title: "Jelte Homminga — Senior React & Expo Engineer",
    description:
      "Senior product-focused React, React Native & Expo engineer. AI-augmented development with Cursor & Claude. Based in Bali, shipping for European enterprise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelte Homminga — Senior React & Expo Engineer",
    description:
      "Senior product-focused React, React Native & Expo engineer. Based in Bali, shipping for European enterprise.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${lilitaOne.variable} ${nunito.variable} ${firaCode.variable}`}
      >
        <OceanWaves />
        <FloatingEmoji />
        <ToastSystem />
        {children}
        <ScrollRevealInit />
        <CursorTrail />
      </body>
    </html>
  )
}
