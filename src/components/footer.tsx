export const Footer = () => (
  <footer className="relative z-[2] border-t-[1.5px] border-border bg-sand-warm px-8 py-6 pb-20 text-center text-[0.75rem] text-text-mid">
    <p>
      Built with ☕, 🤖, and 🥥 in Bali · © {new Date().getFullYear()} Stellar
      Web Development
    </p>
    <p className="mt-1">
      <a
        href="https://github.com/jeltehomminga"
        className="font-bold text-ocean no-underline hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      {" · "}
      <a
        href="https://linkedin.com/in/jeltehomminga"
        className="font-bold text-ocean no-underline hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </p>
  </footer>
)
