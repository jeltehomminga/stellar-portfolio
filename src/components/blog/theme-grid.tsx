import Image from "next/image"
import { Caption } from "./caption"

const themes = [
  {
    src: "/images/blog/theme-cyberpunk.png",
    label: "Cyberpunk",
  },
  {
    src: "/images/blog/theme-minimal-pro.png",
    label: "Minimal Pro",
  },
  {
    src: "/images/blog/theme-tropical.png",
    label: "Tropical",
  },
]

export const ThemeGrid = () => (
  <figure className="my-8">
    <div className="grid grid-cols-3 gap-3">
      {themes.map((theme) => (
        <div key={theme.label} className="flex flex-col gap-1.5">
          <div className="relative aspect-[2252/1532] overflow-hidden rounded-[var(--radius)] border border-rule">
            <Image
              src={theme.src}
              alt={`${theme.label} theme concept`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 33vw, 240px"
            />
          </div>
          <span className="font-sans text-small text-ink-faint">
            {theme.label}
          </span>
        </div>
      ))}
    </div>
    <Caption>The three theme concepts generated from Claude chat</Caption>
  </figure>
)
