import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "src/content/blog")

type BlogPost = {
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  featured: boolean
  slug: string
}

type BlogPostWithContent = BlogPost & {
  content: string
}

const readingTime = (text: string) => {
  const wordsPerMinute = 230
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export const getAllPosts = (): BlogPost[] => {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8")
      const { data } = matter(raw)

      return {
        title: data.title,
        date: data.date,
        description: data.description,
        author: data.author,
        tags: data.tags ?? [],
        featured: data.featured ?? false,
        slug,
      } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const getPostBySlug = (slug: string): BlogPostWithContent | null => {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author,
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    slug,
    content,
  }
}

export const getReadingTime = (content: string) => readingTime(content)
