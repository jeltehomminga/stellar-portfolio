import Link from "next/link"
import { Section } from "@/components/section"
import { PostList } from "@/components/post-list"
import { getAllPosts } from "@/lib/blog"

export const Writing = () => {
  const posts = getAllPosts().slice(0, 4)

  return (
    <Section id="writing" title="Writing">
      <p className="mb-8 max-w-[62ch] text-ink-muted">
        Notes from building with Claude Code and agents: what speeds up real
        product work, and where it still needs an engineer.
      </p>
      <PostList posts={posts} />
      <p className="mt-8 sm:pl-[calc(7.5rem+1.5rem)]">
        <Link href="/blog" className="link">
          All posts
        </Link>
      </p>
    </Section>
  )
}
