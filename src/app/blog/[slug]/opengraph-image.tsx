import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { formatDate } from "@/lib/format"
import { ogSize, renderPostOg } from "@/lib/og"

export const alt = "Blog post by Jelte Homminga"
export const size = ogSize
export const contentType = "image/png"

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }))

const Image = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return renderPostOg({
    title: post?.title ?? "Writing",
    date: post ? formatDate(post.date) : undefined,
  })
}

export default Image
