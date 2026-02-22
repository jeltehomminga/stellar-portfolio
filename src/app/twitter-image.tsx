import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Jelte Homminga — AI-first Frontend Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const colors = {
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

const techPills = ["React", "Next.js", "Expo", "TypeScript"]

const logoMark = (size: number) => ({
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: `${size * 0.25}px`,
  background: `linear-gradient(135deg, ${colors.ocean}, ${colors.palm})`,
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  color: "white",
  fontSize: `${size * 0.45}px`,
  transform: "rotate(-5deg)",
})

const gradientBar = {
  position: "absolute" as const,
  bottom: 0,
  left: 0,
  right: 0,
  height: "6px",
  background: `linear-gradient(90deg, ${colors.ocean}, ${colors.palm}, ${colors.sunset}, ${colors.aiPurple})`,
}

// Option A: Hero Card — light bg with caricature
const optionA = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      background: `linear-gradient(135deg, ${colors.sand} 0%, ${colors.sandWarm} 40%, rgba(12,138,158,0.08) 100%)`,
      padding: "60px",
      fontFamily: "system-ui, sans-serif",
      position: "relative",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingRight: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
        <div style={logoMark(40)}>✦</div>
        <span style={{ fontSize: "18px", fontWeight: 800, color: colors.oceanDeep }}>Stellar Web Development</span>
      </div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: colors.textMid, marginBottom: "8px" }}>Jelte Homminga</div>
      <div style={{ fontSize: "48px", fontWeight: 900, color: colors.oceanDeep, lineHeight: 1.1, marginBottom: "20px", display: "flex", flexWrap: "wrap" }}>
        <span>AI-first&nbsp;</span><span style={{ color: colors.sunset }}>Frontend</span><span>&nbsp;Engineer</span>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
        {techPills.map((t) => (
          <span key={t} style={{ padding: "6px 16px", borderRadius: "20px", background: `${colors.ocean}18`, color: colors.ocean, fontSize: "15px", fontWeight: 700 }}>{t}</span>
        ))}
        <span style={{ padding: "6px 16px", borderRadius: "20px", background: `${colors.aiPurple}18`, color: colors.aiPurple, fontSize: "15px", fontWeight: 700 }}>🤖 AI-augmented</span>
      </div>
      <div style={{ fontSize: "16px", color: colors.textMid }}>🌴 Based in Bali · Shipping for EU Enterprise</div>
      <div style={{ marginTop: "24px", fontSize: "16px", fontWeight: 700, color: colors.ocean, letterSpacing: "0.5px" }}>stellar-web.dev</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "320px", flexShrink: 0 }}>
      <div style={{ width: "280px", height: "380px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 16px 50px rgba(6,85,99,0.18), 0 3px 10px rgba(0,0,0,0.06)", transform: "rotate(1.5deg)", border: `3px solid ${colors.ocean}20` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://stellar-web.dev/images/hero-caricature.png" alt="" width={280} height={380} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
    <div style={gradientBar} />
  </div>
)

// Option B: Bold Gradient — dark centered typography
const optionB = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(155deg, ${colors.oceanDeep} 0%, #043a44 50%, ${colors.ocean} 100%)`,
      padding: "60px 80px",
      fontFamily: "system-ui, sans-serif",
      position: "relative",
      textAlign: "center",
    }}
  >
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at 20% 30%, rgba(23,193,232,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(58,157,94,0.08) 0%, transparent 50%)" }} />
    <div style={{ ...logoMark(56), marginBottom: "28px", boxShadow: "0 8px 30px rgba(0,0,0,0.3)", zIndex: 1 }}>✦</div>
    <div style={{ fontSize: "56px", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "8px", zIndex: 1, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <span>AI-first&nbsp;</span><span style={{ color: colors.sunset }}>Frontend</span><span>&nbsp;Engineer</span>
    </div>
    <div style={{ fontSize: "24px", fontWeight: 700, color: colors.oceanLight, marginBottom: "28px", zIndex: 1 }}>
      Jelte Homminga · Stellar Web Development
    </div>
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "32px", zIndex: 1 }}>
      {techPills.map((t) => (
        <span key={t} style={{ padding: "8px 20px", borderRadius: "24px", background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "16px", fontWeight: 700, border: "1px solid rgba(255,255,255,0.15)" }}>{t}</span>
      ))}
      <span style={{ padding: "8px 20px", borderRadius: "24px", background: `${colors.aiPurple}30`, color: "#c4b5fd", fontSize: "16px", fontWeight: 700, border: `1px solid ${colors.aiPurple}40` }}>🤖 AI-augmented</span>
    </div>
    <div style={{ display: "flex", gap: "20px", fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "20px", zIndex: 1 }}>
      <span>🌴 Bali</span><span>🇪🇺 EU Enterprise</span><span>🤖 AI-augmented</span>
    </div>
    <div style={{ fontSize: "18px", fontWeight: 700, color: colors.oceanLight, letterSpacing: "1px", zIndex: 1 }}>stellar-web.dev</div>
    <div style={gradientBar} />
  </div>
)

// Option C: Split Tropical — dark/light split with caricature
const optionC = () => (
  <div style={{ width: "100%", height: "100%", display: "flex", fontFamily: "system-ui, sans-serif", position: "relative" }}>
    {/* Left panel */}
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "55%", background: `linear-gradient(165deg, ${colors.oceanDeep} 0%, #043a44 100%)`, padding: "60px 50px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at 30% 20%, rgba(23,193,232,0.08) 0%, transparent 60%)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px", zIndex: 1 }}>
        <div style={logoMark(40)}>✦</div>
        <span style={{ fontSize: "16px", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>Stellar Web Development</span>
      </div>
      <div style={{ fontSize: "20px", fontWeight: 700, color: colors.oceanLight, marginBottom: "8px", zIndex: 1 }}>Jelte Homminga</div>
      <div style={{ fontSize: "44px", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "24px", zIndex: 1, display: "flex", flexWrap: "wrap" }}>
        <span>AI-first&nbsp;</span><span style={{ color: colors.sunset }}>Frontend</span><span>&nbsp;Engineer</span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px", zIndex: 1 }}>
        {techPills.map((t) => (
          <span key={t} style={{ padding: "5px 14px", borderRadius: "16px", background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 700 }}>{t}</span>
        ))}
      </div>
      <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "20px", zIndex: 1 }}>🌴 Based in Bali · 🇪🇺 EU Enterprise · 🤖 AI-augmented</div>
      <div style={{ fontSize: "16px", fontWeight: 700, color: colors.oceanLight, letterSpacing: "0.5px", zIndex: 1 }}>stellar-web.dev</div>
    </div>
    {/* Right panel */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "45%", background: `linear-gradient(165deg, ${colors.sand} 0%, ${colors.sandWarm} 100%)`, position: "relative" }}>
      <div style={{ position: "absolute", top: "40px", left: "30px", fontSize: "32px", opacity: 0.2 }}>🌴</div>
      <div style={{ position: "absolute", top: "50px", right: "50px", fontSize: "28px", opacity: 0.15 }}>🥥</div>
      <div style={{ position: "absolute", bottom: "80px", left: "40px", fontSize: "26px", opacity: 0.18 }}>🏸</div>
      <div style={{ position: "absolute", bottom: "50px", right: "40px", fontSize: "30px", opacity: 0.15 }}>☕</div>
      <div style={{ position: "absolute", top: "160px", right: "30px", fontSize: "24px", opacity: 0.12 }}>🌊</div>
      <div style={{ width: "300px", height: "400px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(6,85,99,0.2), 0 4px 12px rgba(0,0,0,0.08)", transform: "rotate(2deg)", border: `3px solid ${colors.ocean}15` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://stellar-web.dev/images/hero-caricature.png" alt="" width={300} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
    <div style={gradientBar} />
  </div>
)

const variants = [optionA, optionB, optionC]

const Image = () => {
  const variant = variants[Math.floor(Math.random() * variants.length)]
  return new ImageResponse(variant(), { ...size })
}

export default Image
