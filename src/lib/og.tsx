import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import { join } from "node:path"

export const ogSize = { width: 1200, height: 630 }

const color = {
  paper: "#faf9f6",
  ink: "#1c1b19",
  muted: "#63605a",
  faint: "#74706a",
  rule: "#e4e1da",
  accent: "#065563",
}

const loadFonts = async () => {
  const dir = join(process.cwd(), "src/assets/fonts")
  const [regular, semibold] = await Promise.all([
    readFile(join(dir, "SchibstedGrotesk-400.ttf")),
    readFile(join(dir, "SchibstedGrotesk-600.ttf")),
  ])
  return [
    { name: "Schibsted Grotesk", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Schibsted Grotesk", data: semibold, weight: 600 as const, style: "normal" as const },
  ]
}

// Satori reads image types from magic bytes poorly; pass an explicit data URL.
const loadPortrait = async () => {
  const file = join(process.cwd(), "public/images/jelte.jpg")
  if (!existsSync(file)) return null
  const buffer = await readFile(file)
  const mime = buffer[0] === 0x89 && buffer[1] === 0x50 ? "image/png" : "image/jpeg"
  return `data:${mime};base64,${buffer.toString("base64")}`
}

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      background: color.paper,
      color: color.ink,
      fontFamily: "Schibsted Grotesk",
      padding: "72px 80px",
      borderTop: `8px solid ${color.accent}`,
    }}
  >
    {children}
  </div>
)

export const renderSiteOg = async () => {
  const portrait = await loadPortrait()
  return new ImageResponse(
    (
      <Frame>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>Jelte Homminga</div>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 600, lineHeight: 1.1, letterSpacing: -1.2, maxWidth: portrait ? 700 : 960 }}>
            Senior frontend and mobile engineer for teams shipping Next.js and React Native at scale.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: color.muted }}>stellar-web.dev</div>
        </div>
        {portrait && (
          <div style={{ display: "flex", alignItems: "center", marginLeft: 56 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portrait} alt="" width={288} height={360} style={{ borderRadius: 8, objectFit: "cover" }} />
          </div>
        )}
      </Frame>
    ),
    { ...ogSize, fonts: await loadFonts() },
  )
}

export const renderPostOg = async ({ title, date }: { title: string; date?: string }) =>
  new ImageResponse(
    (
      <Frame>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 28, color: color.muted }}>
            <span style={{ color: color.ink, fontWeight: 600 }}>Jelte Homminga</span>
            <span style={{ marginLeft: 16 }}>Writing</span>
          </div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 56 : 66, fontWeight: 600, lineHeight: 1.1, letterSpacing: -1.2 }}>
            {title}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: color.faint }}>
            <span>{date ?? ""}</span>
            <span>stellar-web.dev</span>
          </div>
        </div>
      </Frame>
    ),
    { ...ogSize, fonts: await loadFonts() },
  )
