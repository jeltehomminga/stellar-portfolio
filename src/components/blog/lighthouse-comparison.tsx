import Image from "next/image"

export const LighthouseComparison = () => (
  <figure className="my-8">
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-1.5">
        <Image
          src="/images/blog/lighthouse-after.png"
          alt="Final Lighthouse mobile score"
          width={600}
          height={200}
          className="rounded-[var(--radius)] border border-rule"
        />
        <span className="font-sans text-small text-ink-faint">
          Mobile
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <Image
          src="/images/blog/lighthouse-desktop.png"
          alt="Final Lighthouse desktop score"
          width={600}
          height={200}
          className="rounded-[var(--radius)] border border-rule"
        />
        <span className="font-sans text-small text-ink-faint">
          Desktop
        </span>
      </div>
    </div>
  </figure>
)
