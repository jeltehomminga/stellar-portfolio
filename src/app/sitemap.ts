import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const sitemap = (): MetadataRoute.Sitemap => {
  const posts = getAllPosts()

  const blogEntries = posts.map((post) => ({
    url: `https://stellar-web.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: "https://stellar-web.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://stellar-web.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ]
}

export default sitemap
