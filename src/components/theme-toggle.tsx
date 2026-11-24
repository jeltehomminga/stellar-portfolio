"use client"

import { useSyncExternalStore } from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "theme"
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)")

/** The theme actually on screen: an explicit choice, else the OS preference. */
const resolvedTheme = (): Theme => {
  const chosen = document.documentElement.dataset.theme
  if (chosen === "light" || chosen === "dark") return chosen
  return darkQuery().matches ? "dark" : "light"
}

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  const query = darkQuery()
  query.addEventListener("change", onChange)
  return () => {
    observer.disconnect()
    query.removeEventListener("change", onChange)
  }
}

const applyTheme = (next: Theme) => {
  const systemTheme: Theme = darkQuery().matches ? "dark" : "light"
  const root = document.documentElement
  try {
    // Choosing what the OS already uses clears the override, so the site
    // keeps following the system from then on.
    if (next === systemTheme) {
      localStorage.removeItem(STORAGE_KEY)
      delete root.dataset.theme
    } else {
      localStorage.setItem(STORAGE_KEY, next)
      root.dataset.theme = next
    }
  } catch {
    root.dataset.theme = next
  }
}

export const ThemeToggle = () => {
  // null on the server: the icon is chosen by CSS, so nothing depends on it.
  const theme = useSyncExternalStore(subscribe, resolvedTheme, () => null)
  const isDark = theme === "dark"

  const toggle = () => {
    const next: Theme = resolvedTheme() === "dark" ? "light" : "dark"
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(() => applyTheme(next))
    } else {
      applyTheme(next)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={theme === null ? undefined : isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="-m-2 grid size-9 sm:-m-2.5 sm:size-10 place-items-center rounded-[var(--radius)] text-ink-muted transition-colors duration-150 hover:text-ink"
    >
      <svg className="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
      </svg>
      <svg className="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
      </svg>
    </button>
  )
}
