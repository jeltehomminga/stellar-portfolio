import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/blog", label: "Writing", id: "writing" },
  { href: "/#about", label: "About", id: "about" },
] as const

type SiteHeaderProps = {
  current?: (typeof links)[number]["id"]
}

export const SiteHeader = ({ current }: SiteHeaderProps) => (
  <header className="mx-auto flex max-w-[42rem] flex-wrap items-center justify-between gap-x-3 gap-y-2 px-6 pt-8 pb-4 sm:px-8 sm:pt-10">
    <Link href="/" className="shrink-0 font-medium whitespace-nowrap text-ink no-underline">
      Jelte Homminga
    </Link>
    <div className="flex items-center gap-3 sm:gap-5">
      <nav aria-label="Main">
        <ul className="flex gap-3 text-[0.9375rem] sm:gap-5">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="link-quiet -my-2 inline-block py-2"
                aria-current={current === link.id ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  </header>
)
