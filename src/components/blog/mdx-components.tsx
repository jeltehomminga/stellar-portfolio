import Image from "next/image"
import type { MDXComponents } from "mdx/types"
import { cn } from "@/lib/utils"
import { Caption } from "./caption"
import { ThemeGrid } from "./theme-grid"
import { LighthouseComparison } from "./lighthouse-comparison"

type BlogImageProps = {
  src?: string
  alt?: string
  title?: string
}

/** Markdown image → next/image in a figure. The title (or alt) becomes the caption. */
const BlogImage = ({ src, alt, title }: BlogImageProps) => {
  if (!src) return null
  const isPhone = src.includes("claude-phone")
  const caption = title ?? alt

  return (
    <figure className={cn("my-8", isPhone && "mx-auto w-1/2 max-w-[260px] min-w-[180px]")}>
      <Image
        src={src}
        alt={alt ?? ""}
        width={isPhone ? 400 : 1200}
        height={isPhone ? 600 : 750}
        sizes={isPhone ? "260px" : "(max-width: 720px) 100vw, 672px"}
        className="h-auto w-full rounded-[var(--radius)] border border-rule"
      />
      {caption && <Caption>{caption}</Caption>}
    </figure>
  )
}

const isExternal = (href?: string) => href?.startsWith("http")

export const mdxComponents: MDXComponents = {
  h1: (props) => <h2 className="mt-12 mb-4 font-sans text-h2 font-semibold" {...props} />,
  h2: (props) => <h2 className="mt-12 mb-4 font-sans text-h2 font-semibold" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 font-sans text-h3 font-semibold" {...props} />,
  h4: (props) => <h4 className="mt-6 mb-2 font-sans font-semibold" {...props} />,
  p: (props) => <p className="mb-5 max-w-[65ch]" {...props} />,
  a: ({ href, ...props }) => (
    <a
      href={href}
      className="link"
      target={isExternal(href) ? "_blank" : undefined}
      rel={isExternal(href) ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold" {...props} />,
  code: ({ className, ...props }) => (
    <code
      className={cn(
        // Inline code only; fenced code is styled via pre[data-language] in globals.css
        "[:not(pre)>&]:rounded-[4px] [:not(pre)>&]:bg-paper-raised [:not(pre)>&]:px-1.5 [:not(pre)>&]:py-0.5 [:not(pre)>&]:font-mono [:not(pre)>&]:text-[0.82em]",
        className,
      )}
      {...props}
    />
  ),
  ul: (props) => <ul className="mb-5 ml-6 max-w-[62ch] list-disc space-y-2 marker:text-ink-faint" {...props} />,
  ol: (props) => <ol className="mb-5 ml-6 max-w-[62ch] list-decimal space-y-2 marker:text-ink-faint" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-6 border-l-2 border-accent pl-5 text-ink-muted italic" {...props} />
  ),
  hr: () => <hr className="my-12 border-rule" />,
  table: (props) => (
    <div className="my-6 overflow-x-auto font-sans">
      <table className="w-full border-collapse text-small" {...props} />
    </div>
  ),
  th: (props) => <th className="border-b border-ink-faint px-3 py-2 text-left font-semibold" {...props} />,
  td: (props) => <td className="border-b border-rule px-3 py-2 align-top" {...props} />,
  img: BlogImage as MDXComponents["img"],
  ThemeGrid,
  LighthouseComparison,
  Image: ({ className, alt, ...props }: React.ComponentProps<typeof Image>) => (
    <Image
      {...props}
      alt={alt}
      sizes={props.sizes ?? "(max-width: 720px) 100vw, 672px"}
      className={cn("h-auto w-full rounded-[var(--radius)] border border-rule", className?.replace(/rounded-\S+|shadow-\S+/g, ""))}
    />
  ),
}
