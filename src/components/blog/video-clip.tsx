import { Caption } from "./caption"

type VideoClipProps = {
  src: string
  poster: string
  caption?: string
}

/** A clip in a post: poster first, native controls, nothing downloads until play. */
export const VideoClip = ({ src, poster, caption }: VideoClipProps) => (
  <figure className="my-8">
    <video
      src={src}
      poster={poster}
      controls
      playsInline
      preload="none"
      className="aspect-video h-auto w-full rounded-[var(--radius)] border border-rule bg-paper-raised"
    />
    {caption && <Caption>{caption}</Caption>}
  </figure>
)
