import type { Metadata, Viewport } from "next"
import { Schibsted_Grotesk } from "next/font/google"
import "./globals.css"
import { ClientExtras } from "@/components/client-extras"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
})

const title = "Jelte Homminga, Senior Frontend & Mobile Engineer"
const description =
  "Freelance senior frontend and mobile engineer: Next.js, React Native and Expo, with an AI-first workflow. Core contributor to My Luminus, Product of the Year 2026."

export const metadata: Metadata = {
  metadataBase: new URL("https://stellar-web.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://stellar-web.dev",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://stellar-web.dev",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#141516" },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jelte Homminga",
  jobTitle: "Senior Frontend & Mobile Engineer",
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
    "Web performance",
    "Accessibility",
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
      <body className={schibsted.variable}>
        <a
          href="#main"
          className="fixed top-2 left-2 z-50 -translate-y-20 rounded-[var(--radius)] bg-accent px-4 py-2 text-small font-medium text-accent-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <ClientExtras />
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%cstellar-web.dev%c\\nBuilt by Jelte Homminga with Next.js and Claude Code.\\nThere is one hidden thing on this site. It involves a famous key sequence.", "font: 600 14px system-ui; color: #065563", "font: 13px system-ui; color: inherit")`,
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
