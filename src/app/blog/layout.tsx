import { Source_Serif_4, JetBrains_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

// Long-form faces load only on blog routes.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
  adjustFontFallback: true,
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
})

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={`${sourceSerif.variable} ${jetbrains.variable}`}>
    <SiteHeader current="writing" />
    <main id="main" className="mx-auto max-w-[42rem] px-6 sm:px-8">
      {children}
    </main>
    <Footer />
  </div>
)

export default BlogLayout
