const links = [
  { href: "mailto:stellarweb.bali@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/jeltehomminga", label: "LinkedIn" },
  { href: "https://github.com/jeltehomminga", label: "GitHub" },
]

export const Footer = () => (
  <footer className="mx-auto mt-24 max-w-[42rem] px-6 pb-12 sm:px-8">
    <div className="flex flex-col gap-3 border-t border-rule pt-6 text-small text-ink-faint sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} Stellar Web Development</p>
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="link-quiet">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)
