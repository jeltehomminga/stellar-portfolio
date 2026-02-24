import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Stellar Web Development",
  description:
    "Technical articles about React, Next.js, AI-augmented development, and performance optimization.",
  openGraph: {
    title: "Blog — Stellar Web Development",
    description:
      "Technical articles about React, Next.js, AI-augmented development, and performance optimization.",
  },
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const BlogPage = () => {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="relative z-[5] mx-auto max-w-[800px] px-6">
        <header className="mb-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-bold text-ocean transition-colors hover:text-sunset"
          >
            <span>&#8592;</span> Back to home
          </Link>
          <h1 className="font-heading text-5xl text-ocean-deep">Blog</h1>
          <p className="mt-3 text-lg text-text-mid">
            Technical articles about React, Next.js, AI-augmented development,
            and performance optimization.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[20px] border-[1.5px] border-ocean/10 bg-[rgba(255,253,248,0.9)] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,85,99,0.12)]"
            >
              <div className="flex flex-col gap-2">
                {post.featured && (
                  <span className="w-fit rounded-full bg-sunset/10 px-2.5 py-0.5 text-xs font-bold text-sunset">
                    Featured
                  </span>
                )}
                <h2 className="font-heading text-xl text-ocean-deep transition-colors group-hover:text-ocean">
                  {post.title}
                </h2>
                <p className="text-sm text-text-mid">{post.description}</p>
                <div className="mt-2 flex items-center gap-3">
                  <time className="text-xs text-text-mid">
                    {formatDate(post.date)}
                  </time>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sand-warm px-2 py-0.5 text-xs font-medium text-ocean-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
