import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkUnwrapImages from "remark-unwrap-images"
import { getAllPosts, getPostBySlug, getReadingTime } from "@/lib/blog"
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
    title: `${post.title} — Stellar Web Development`,
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

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const readingTime = getReadingTime(post.content)

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
      <article className="min-h-screen pt-24 pb-32">
        <div className="relative z-[5] mx-auto max-w-[720px] px-6">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-bold text-ocean transition-colors hover:text-sunset"
          >
            <span>&#8592;</span> All posts
          </Link>

          <header className="mb-10">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <time className="text-sm text-text-mid">
                {formatDate(post.date)}
              </time>
              <span className="text-sm text-text-mid">
                {readingTime} min read
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sand-warm px-2.5 py-0.5 text-xs font-medium text-ocean-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose-tropical">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkUnwrapImages] } }}
            />
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogPostPage
