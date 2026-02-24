import { ImageResponse } from "next/og"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

export const alt = "Stellar Web Development — Blog"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }))

const c = {
  ocean: "#0c8a9e",
  oceanDeep: "#065563",
  oceanLight: "#17c1e8",
  sand: "#faf3e0",
  sunset: "#ff6b35",
  palm: "#3a9d5e",
  aiPurple: "#8b5cf6",
}

const Image = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.title ?? "Blog Post"
  const author = post?.author ?? "Jelte Homminga"
  const tags = post?.tags?.slice(0, 4) ?? []

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(155deg, ${c.oceanDeep}, #043a44, ${c.ocean})`,
          padding: "60px 70px",
          fontFamily: "system-ui",
        }}
      >
        {/* Top: logo + blog label */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 11,
              background: `linear-gradient(135deg, ${c.ocean}, ${c.palm})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 22,
            }}
          >
            *
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>
            Stellar Web Development
          </span>
          <span style={{ fontSize: 16, fontWeight: 700, color: c.oceanLight, marginLeft: "auto" }}>
            Blog
          </span>
        </div>

        {/* Middle: title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, justifyContent: "center" }}>
          {title.includes("—") ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 56, fontWeight: 900, color: "white", lineHeight: 1.15 }}>
                {title.split("—")[0].trim()}
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "white", lineHeight: 1.2 }}>
                {title.split("—")[1].trim()}
              </div>
            </div>
          ) : (
            <div style={{ fontSize: 56, fontWeight: 900, color: "white", lineHeight: 1.15 }}>
              {title}
            </div>
          )}
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 15,
                    fontWeight: 700,
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: author + URL */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: c.oceanLight }}>{author}</span>
            <span style={{ fontSize: 15, color: "rgba(255,255,255,0.5)" }}>AI-first Frontend Engineer</span>
          </div>
          <span style={{ fontSize: 16, fontWeight: 700, color: c.oceanLight, letterSpacing: 0.5 }}>
            stellar-web.dev
          </span>
        </div>

        {/* Bottom gradient bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
            background: `linear-gradient(90deg, ${c.ocean}, ${c.palm}, ${c.sunset}, ${c.aiPurple})`,
          }}
        />
      </div>
    ),
    { ...size },
  )
}

export default Image
