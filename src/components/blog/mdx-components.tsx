import Image from "next/image"
import type { MDXComponents } from "mdx/types"
import { ThemeGrid } from "./theme-grid"
import { LighthouseComparison } from "./lighthouse-comparison"

type BlogImageProps = {
  src?: string
  alt?: string
}

const BlogImage = ({ src, alt }: BlogImageProps) => {
  if (!src) return null

  const isPhone = src.includes("claude-phone")
  const isPortfolio = src.includes("portfolio.png")

  if (isPhone) {
    return (
      <figure className="my-8 flex justify-center">
        <div className="w-1/3 min-w-[180px] max-w-[260px]">
          <Image
            src={src}
            alt={alt ?? ""}
            width={400}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>
        {alt && <figcaption className="sr-only">{alt}</figcaption>}
      </figure>
    )
  }

  if (isPortfolio) {
    return (
      <figure className="my-8">
        <Image
          src={src}
          alt={alt ?? ""}
          width={1200}
          height={750}
          className="rounded-2xl border-[3px] border-ocean-deep shadow-lg"
        />
        {alt && (
          <figcaption className="mt-2 text-center text-sm text-text-mid italic">
            {alt}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={750}
        className="rounded-2xl shadow-lg"
      />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-text-mid italic">
          {alt}
        </figcaption>
      )}
    </figure>
  )
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-heading text-4xl text-ocean-deep mb-6 leading-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-heading text-2xl text-ocean-deep mt-12 mb-4 pt-6 border-t-2 border-sand-warm"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-sans text-xl font-bold text-ocean mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => <p className="mb-5 leading-relaxed text-text-dark" {...props} />,
  a: (props) => (
    <a
      className="text-ocean underline underline-offset-4 decoration-ocean-light hover:text-sunset transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props) => <strong className="text-ocean-deep font-bold" {...props} />,
  em: (props) => <em className="text-text-mid" {...props} />,
  code: (props) => (
    <code
      className="font-mono bg-sand-warm px-1.5 py-0.5 rounded text-ai-purple text-sm"
      {...props}
    />
  ),
  ul: (props) => <ul className="mb-5 ml-6 list-disc space-y-1" {...props} />,
  ol: (props) => <ol className="mb-5 ml-6 list-decimal space-y-1" {...props} />,
  li: (props) => <li className="leading-relaxed text-text-dark" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-sunset pl-4 italic text-text-mid"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-t-2 border-sand-warm" />,
  img: BlogImage as MDXComponents["img"],
  ThemeGrid,
  LighthouseComparison,
}
