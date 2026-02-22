import type { Metadata } from "next"
import { Lilita_One, Nunito, Fira_Code } from "next/font/google"
import "./globals.css"
import { OceanWaves } from "@/components/ocean-waves"
import { FloatingEmoji } from "@/components/floating-emoji"
import { ToastSystem } from "@/components/toast-system"
import { CursorTrail } from "@/components/cursor-trail"
import { ScrollRevealInit } from "@/components/scroll-reveal-init"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  metadataBase: new URL("https://stellar-web.dev"),
  title: "Jelte Homminga — Senior React & Expo Engineer · Bali",
  description:
    "Senior product-focused React, React Native & Expo engineer. AI-augmented development with Cursor & Claude. Based in Bali, shipping for European enterprise.",
  openGraph: {
    title: "Jelte Homminga — Senior React & Expo Engineer",
    description:
      "Senior product-focused React, React Native & Expo engineer. AI-augmented development with Cursor & Claude. Based in Bali, shipping for European enterprise.",
    type: "website",
    url: "https://stellar-web.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelte Homminga — Senior React & Expo Engineer",
    description:
      "Senior product-focused React, React Native & Expo engineer. Based in Bali, shipping for European enterprise.",
  },
  alternates: {
    canonical: "https://stellar-web.dev",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jelte Homminga",
  jobTitle: "Senior React & Expo Engineer",
  url: "https://stellar-web.dev",
  sameAs: [
    "https://github.com/jeltehomminga",
    "https://linkedin.com/in/jeltehomminga",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Stellar Web Development",
    url: "https://stellar-web.dev",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "TypeScript",
    "AI-augmented development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bali",
    addressCountry: "ID",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${lilitaOne.variable} ${nunito.variable} ${firaCode.variable}`}
      >
        <a
          href="#about"
          className="fixed left-2 top-2 z-[999] -translate-y-16 rounded-lg bg-ocean px-4 py-2 text-sm font-bold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <OceanWaves />
        <FloatingEmoji />
        <ToastSystem />
        {children}
        <ScrollRevealInit />
        <CursorTrail />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
