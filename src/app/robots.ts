import type { MetadataRoute } from "next"

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://stellar-web.dev/sitemap.xml",
})

export default robots
