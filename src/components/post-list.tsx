import Link from "next/link"
import { formatDate } from "@/lib/format"
import type { BlogPost } from "@/lib/blog"

type PostListProps = {
  posts: BlogPost[]
  headingLevel?: "h2" | "h3"
}

export const PostList = ({ posts, headingLevel: Heading = "h3" }: PostListProps) => (
  <ul className="space-y-8">
    {posts.map((post) => (
      <li key={post.slug} className="sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-x-6">
        <time dateTime={post.date} className="tabular block text-small text-ink-faint sm:pt-0.5">
          {formatDate(post.date, "short")}
        </time>
        <div className="mt-1 sm:mt-0">
          <Heading className="text-h3 font-semibold">
            <Link
              href={`/blog/${post.slug}`}
              className="text-ink no-underline decoration-1 underline-offset-[3px] hover:underline"
            >
              {post.title}
            </Link>
          </Heading>
          <p className="mt-1 max-w-[62ch] text-ink-muted">{post.description}</p>
        </div>
      </li>
    ))}
  </ul>
)
