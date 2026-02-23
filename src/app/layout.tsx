import type { Metadata } from "next"
import { Lilita_One, Nunito } from "next/font/google"
import "./globals.css"
import { OceanWaves } from "@/components/ocean-waves"
import { ClientExtras } from "@/components/client-extras"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
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
        className={`${lilitaOne.variable} ${nunito.variable}`}
      >
        <a
          href="#about"
          className="fixed left-2 top-2 z-[999] -translate-y-16 rounded-lg bg-ocean px-4 py-2 text-sm font-bold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <OceanWaves />
        {children}
        <ClientExtras />
        <script
          dangerouslySetInnerHTML={{
            __html: `
console.log(
  "%c" +
  "\\n" +
  "    ____  _       _ _            \\n" +
  "   / ___|| |_ ___| | | __ _ _ __\\n" +
  "   \\\\___ \\\\| __/ _ \\\\ | |/ _\` | '__|\\n" +
  "    ___) | ||  __/ | | (_| | |  \\n" +
  "   |____/ \\\\__\\\\___|_|_|\\\\__,_|_|  \\n" +
  "                                 \\n" +
  "   🌴 stellar-web.dev            \\n" +
  "   Built by Jelte Homminga       \\n" +
  "   Next.js 16 · React 19 · Bali  \\n" +
  "                                 \\n" +
  "   Try: Konami code, type \\"coffee\\" or \\"claude\\"\\n",
  "color: #0c8a9e; font-family: monospace; font-size: 12px; line-height: 1.4"
);
console.log(
  "%c🤖 AI-augmented with Cursor & Claude%c — because shipping > debating",
  "color: #8b5cf6; font-weight: bold; font-size: 13px",
  "color: #5c4033; font-size: 13px"
);
`,
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
