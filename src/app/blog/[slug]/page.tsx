import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypePrettyCode from "rehype-pretty-code"
import { getAllPosts, getPostBySlug, getReadingTime } from "@/lib/blog"
import { formatDate } from "@/lib/format"
import { mdxComponents } from "@/components/blog/mdx-components"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }))

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title}, Jelte Homminga`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://stellar-web.dev/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://stellar-web.dev/blog/${slug}`,
    },
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const readingTime = getReadingTime(post.content)
  // The page renders the title from frontmatter; drop the duplicate MDX h1.
  const body = post.content.replace(/^\s*#\s+.+\n/, "")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://stellar-web.dev",
    },
    publisher: {
      "@type": "Organization",
      name: "Stellar Web Development",
      url: "https://stellar-web.dev",
    },
    url: `https://stellar-web.dev/blog/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-12 sm:pt-20">
        <header className="mb-10">
          <h1 className="text-title font-semibold">{post.title}</h1>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-small text-ink-faint">
            <time dateTime={post.date} className="tabular">
              {formatDate(post.date)}
            </time>
            <span>{readingTime} min read</span>
          </p>
        </header>
        <div className="font-serif text-prose">
          <MDXRemote
            source={body}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkUnwrapImages],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: { light: "github-light", dark: "github-dark-dimmed" },
                      keepBackground: false,
                      defaultLang: "plaintext",
                    },
                  ],
                ],
              },
            }}
          />
        </div>
        <footer className="mt-16 border-t border-rule pt-6 font-sans">
          <Link href="/blog" className="link">
            All posts
          </Link>
        </footer>
      </article>
    </>
  )
}

export default BlogPostPage
