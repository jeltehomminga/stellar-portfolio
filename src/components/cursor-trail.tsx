"use client"

import { useEffect, useRef } from "react"

export const CursorTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sequence: string[] = []
    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

    const handleKeyDown = (event: KeyboardEvent) => {
      sequence.push(event.key.length === 1 ? event.key.toLowerCase() : event.key)
      if (sequence.length > 10) sequence.shift()
      if (sequence.toString() === konami.toString()) {
        document.body.classList.toggle("trail-active")
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (trailRef.current) {
        trailRef.current.style.left = `${event.clientX - 5}px`
        trailRef.current.style.top = `${event.clientY - 5}px`
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={trailRef} className="cursor-trail" />
}
