import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Page not found, Jelte Homminga",
  robots: { index: false },
}

const NotFound = () => (
  <>
    <SiteHeader />
    <main id="main" className="mx-auto max-w-[42rem] px-6 pt-12 sm:px-8 sm:pt-20">
      <p className="tabular text-small text-ink-faint">404</p>
      <h1 className="mt-2 text-title font-semibold text-accent">This page doesn&rsquo;t exist</h1>
      <p className="mt-4 max-w-[62ch] text-ink-muted">
        The link may be old, or the post may have moved. Try the{" "}
        <Link href="/#work" className="link">
          selected work
        </Link>{" "}
        or{" "}
        <Link href="/blog" className="link">
          all writing
        </Link>
        .
      </p>
    </main>
    <Footer />
  </>
)

export default NotFound
