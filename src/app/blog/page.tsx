import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { PostList } from "@/components/post-list"

const description =
  "Notes on Next.js, React Native and building with Claude Code and agents, by Jelte Homminga."

export const metadata: Metadata = {
  title: "Writing, Jelte Homminga",
  description,
  openGraph: { title: "Writing, Jelte Homminga", description },
  alternates: { canonical: "https://stellar-web.dev/blog" },
}

const BlogPage = () => (
  <div className="pt-12 sm:pt-20">
    <h1 className="text-title font-semibold">Writing</h1>
    <p className="mt-4 mb-12 max-w-[62ch] text-ink-muted">
      Notes from building with Claude Code and agents: what speeds up real
      product work, and where it still needs an engineer.
    </p>
    <PostList posts={getAllPosts()} headingLevel="h2" />
  </div>
)

export default BlogPage
