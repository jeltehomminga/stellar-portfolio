import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Jelte Homminga — AI-first Frontend Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const c = {
  ocean: "#0c8a9e",
  oceanDeep: "#065563",
  oceanLight: "#17c1e8",
  sand: "#faf3e0",
  sandWarm: "#f5edd5",
  sunset: "#ff6b35",
  palm: "#3a9d5e",
  aiPurple: "#8b5cf6",
  textMid: "#5c4033",
}

const pills = ["React", "Next.js", "Expo", "TypeScript"]

const logo = (sz: number) => (
  <div style={{ width: sz, height: sz, borderRadius: sz * 0.25, background: `linear-gradient(135deg, ${c.ocean}, ${c.palm})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: sz * 0.5, transform: "rotate(-5deg)" }}>
    *
  </div>
)

const bar = (
  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, display: "flex", background: `linear-gradient(90deg, ${c.ocean}, ${c.palm}, ${c.sunset}, ${c.aiPurple})` }} />
)

const title = (fontSize: number, color: string) => (
  <div style={{ fontSize, fontWeight: 900, color, lineHeight: 1.1, display: "flex", flexWrap: "wrap" }}>
    <span>AI-first </span>
    <span style={{ color: c.sunset }}>Frontend </span>
    <span>Engineer</span>
  </div>
)

// A: Hero Card
const variantA = (img: string) => (
  <div style={{ width: "100%", height: "100%", display: "flex", background: `linear-gradient(135deg, ${c.sand}, ${c.sandWarm})`, padding: 60, fontFamily: "system-ui" }}>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingRight: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        {logo(40)}
        <span style={{ fontSize: 18, fontWeight: 800, color: c.oceanDeep }}>Stellar Web Development</span>
      </div>
      <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: c.textMid, marginBottom: 8 }}>Jelte Homminga</div>
      {title(48, c.oceanDeep)}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20, marginBottom: 24 }}>
        {pills.map((t) => (
          <span key={t} style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(12,138,158,0.1)", color: c.ocean, fontSize: 15, fontWeight: 700 }}>{t}</span>
        ))}
        <span style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(139,92,246,0.1)", color: c.aiPurple, fontSize: 15, fontWeight: 700 }}>AI-augmented</span>
      </div>
      <div style={{ display: "flex", fontSize: 16, color: c.textMid }}>Based in Bali - Shipping for EU Enterprise</div>
      <div style={{ display: "flex", marginTop: 24, fontSize: 16, fontWeight: 700, color: c.ocean }}>stellar-web.dev</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 320 }}>
      <div style={{ display: "flex", width: 280, height: 380, borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 50px rgba(6,85,99,0.18)", transform: "rotate(1.5deg)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" width={280} height={380} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
    {bar}
  </div>
)

// B: Bold Gradient
const variantB = () => (
  <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: `linear-gradient(155deg, ${c.oceanDeep}, #043a44, ${c.ocean})`, padding: "60px 80px", fontFamily: "system-ui" }}>
    <div style={{ display: "flex", marginBottom: 28 }}>{logo(56)}</div>
    {title(56, "white")}
    <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: c.oceanLight, marginTop: 8, marginBottom: 28 }}>
      Jelte Homminga - Stellar Web Development
    </div>
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 32 }}>
      {pills.map((t) => (
        <span key={t} style={{ padding: "8px 20px", borderRadius: 24, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: 16, fontWeight: 700, border: "1px solid rgba(255,255,255,0.15)" }}>{t}</span>
      ))}
      <span style={{ padding: "8px 20px", borderRadius: 24, background: "rgba(139,92,246,0.2)", color: "#c4b5fd", fontSize: 16, fontWeight: 700, border: "1px solid rgba(139,92,246,0.3)" }}>AI-augmented</span>
    </div>
    <div style={{ display: "flex", gap: 20, fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
      <span>Bali</span>
      <span>EU Enterprise</span>
      <span>AI-augmented</span>
    </div>
    <div style={{ display: "flex", fontSize: 18, fontWeight: 700, color: c.oceanLight, letterSpacing: 1 }}>stellar-web.dev</div>
    {bar}
  </div>
)

// C: Split Tropical
const variantC = (img: string) => (
  <div style={{ width: "100%", height: "100%", display: "flex", fontFamily: "system-ui" }}>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "55%", background: `linear-gradient(165deg, ${c.oceanDeep}, #043a44)`, padding: "60px 50px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
        {logo(40)}
        <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>Stellar Web Development</span>
      </div>
      <div style={{ display: "flex", fontSize: 20, fontWeight: 700, color: c.oceanLight, marginBottom: 8 }}>Jelte Homminga</div>
      {title(44, "white")}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24, marginBottom: 28 }}>
        {pills.map((t) => (
          <span key={t} style={{ padding: "5px 14px", borderRadius: 16, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 700 }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>Based in Bali - EU Enterprise - AI-augmented</div>
      <div style={{ display: "flex", fontSize: 16, fontWeight: 700, color: c.oceanLight }}>stellar-web.dev</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "45%", background: `linear-gradient(165deg, ${c.sand}, ${c.sandWarm})` }}>
      <div style={{ display: "flex", width: 300, height: 400, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(6,85,99,0.2)", transform: "rotate(2deg)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" width={300} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
    {bar}
  </div>
)

const Image = async () => {
  const imgBuffer = await readFile(join(process.cwd(), "public/images/hero-caricature.png"))
  const imgSrc = `data:image/png;base64,${imgBuffer.toString("base64")}`

  const variants = [
    () => variantA(imgSrc),
    () => variantB(),
    () => variantC(imgSrc),
  ]

  const picked = variants[Math.floor(Math.random() * variants.length)]
  return new ImageResponse(picked(), { ...size })
}

export default Image
