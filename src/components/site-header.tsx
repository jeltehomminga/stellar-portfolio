import Link from "next/link"

const links = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/blog", label: "Writing", id: "writing" },
  { href: "/#about", label: "About", id: "about" },
] as const

type SiteHeaderProps = {
  current?: (typeof links)[number]["id"]
}

export const SiteHeader = ({ current }: SiteHeaderProps) => (
  <header className="mx-auto flex max-w-[42rem] items-baseline justify-between gap-6 px-6 pt-8 pb-4 sm:px-8 sm:pt-10">
    <Link href="/" className="font-medium text-ink no-underline">
      Jelte Homminga
    </Link>
    <nav aria-label="Main">
      <ul className="flex gap-5 text-[0.9375rem]">
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
  </header>
)
