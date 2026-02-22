"use client"

import { useEffect } from "react"

export const ScrollRevealInit = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: "50px 0px 0px 0px" }
    )

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el)
      })
    }

    // Initial pass after a frame to ensure DOM is ready
    requestAnimationFrame(observeAll)

    // Watch for dynamically added .reveal elements
    const mutationObserver = new MutationObserver(observeAll)
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
