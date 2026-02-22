"use client"

import { useEffect, useRef } from "react"

export const CursorTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let sequence: number[] = []
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

    const handleKeyDown = (event: KeyboardEvent) => {
      sequence.push(event.keyCode)
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
