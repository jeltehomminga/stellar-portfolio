import { ViewTransition } from "react"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { postTitleTransition } from "@/components/post-list"

type PostPagerProps = {
  slug: string
}

/** The older and newer post at the end of an article. Titles morph into the next page's h1. */
export const PostPager = ({ slug }: PostPagerProps) => {
  const posts = getAllPosts() // newest first
  const index = posts.findIndex((post) => post.slug === slug)
  const links = [
    { label: "Older", post: posts[index + 1] },
    { label: "Newer", post: posts[index - 1] },
  ].filter((link) => link.post)

  if (!links.length) return null

  return (
    <nav aria-label="More posts">
      <ul className="grid gap-6 sm:grid-cols-2">
        {links.map(({ label, post }) => (
          <li key={label} className={label === "Newer" ? "group sm:col-start-2 sm:text-right" : "group"}>
            <Link href={`/blog/${post.slug}`} className="block text-ink no-underline">
              <span className="block text-small text-ink-faint transition-colors duration-150 group-hover:text-accent">
                {label}
              </span>
              <ViewTransition name={postTitleTransition(post.slug)}>
                <span className="grow-underline text-h3 font-semibold">{post.title}</span>
              </ViewTransition>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
