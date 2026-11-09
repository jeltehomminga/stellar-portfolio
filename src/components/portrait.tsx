import fs from "node:fs"
import path from "node:path"
import Image from "next/image"

/**
 * Drop a portrait at public/images/jelte.jpg (4:5, at least 800×1000) and it
 * replaces the placeholder automatically, here and in the OG images.
 */
export const PORTRAIT_SRC = "/images/jelte.jpg"
export const hasPortrait = () =>
  fs.existsSync(path.join(process.cwd(), "public", PORTRAIT_SRC))

export const Portrait = ({ className = "" }: { className?: string }) =>
  hasPortrait() ? (
    <Image
      src={PORTRAIT_SRC}
      alt="Jelte Homminga"
      width={800}
      height={1000}
      sizes="160px"
      quality={75}
      className={`aspect-[4/5] w-full rounded-[var(--radius)] object-cover ${className}`}
    />
  ) : (
    <div
      role="img"
      aria-label="Portrait of Jelte Homminga (coming soon)"
      className={`grid aspect-[4/5] w-full place-items-center rounded-[var(--radius)] bg-paper-raised text-h2 font-semibold text-ink-faint ${className}`}
    >
      JH
    </div>
  )
