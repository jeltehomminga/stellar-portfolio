import { ViewTransition } from "react"
import Link from "next/link"
import { formatDate } from "@/lib/format"
import type { BlogPost } from "@/lib/blog"

type PostListProps = {
  posts: BlogPost[]
  headingLevel?: "h2" | "h3"
}

/** Shared with the post page so the title morphs between list and article. */
export const postTitleTransition = (slug: string) => `post-title-${slug}`

export const PostList = ({ posts, headingLevel: Heading = "h3" }: PostListProps) => (
  <ul className="space-y-8">
    {posts.map((post) => (
      <li key={post.slug} className="reveal group relative sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-x-6">
        <time
          dateTime={post.date}
          className="tabular block text-small text-ink-faint transition-colors duration-150 group-hover:text-accent sm:pt-0.5"
        >
          {formatDate(post.date, "short")}
        </time>
        <div className="mt-1 sm:mt-0">
          <Heading className="text-h3 font-semibold">
            {/* The ::after stretches the link over the whole row for a larger target. */}
            <Link
              href={`/blog/${post.slug}`}
              className="text-ink no-underline after:absolute after:inset-0 focus-visible:outline-none"
            >
              <ViewTransition name={postTitleTransition(post.slug)}>
                <span className="grow-underline">{post.title}</span>
              </ViewTransition>
            </Link>
          </Heading>
          <p className="mt-1 max-w-[62ch] text-ink-muted">{post.description}</p>
        </div>
      </li>
    ))}
  </ul>
)
