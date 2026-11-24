import fs from "node:fs"
import path from "node:path"
import Image from "next/image"

/**
 * Portrait at public/images/portrait.jpg (4:5; currently 280×350; a larger original
 * would sharpen OG images). Used here and in the OG images; if the file is missing,
 * an initials placeholder is shown.
 *
 * When replacing the photo, give it a NEW filename and update PORTRAIT_SRC: the
 * Next.js/Vercel image optimizer caches by URL, so an overwritten file keeps
 * serving the old image.
 */
export const PORTRAIT_SRC = "/images/portrait.jpg"
export const hasPortrait = () =>
  fs.existsSync(path.join(process.cwd(), "public", PORTRAIT_SRC))

export const Portrait = ({ className = "" }: { className?: string }) =>
  hasPortrait() ? (
    <Image
      src={PORTRAIT_SRC}
      alt="Jelte Homminga"
      width={280}
      height={350}
      sizes="160px"
      quality={75}
      className={`aspect-[4/5] w-full rounded-[var(--radius)] bg-accent-soft object-cover ${className}`}
    />
  ) : (
    <div
      role="img"
      aria-label="Portrait of Jelte Homminga (coming soon)"
      className={`grid aspect-[4/5] w-full place-items-center rounded-[var(--radius)] bg-accent-soft text-h2 font-semibold text-accent ${className}`}
    >
      JH
    </div>
  )
