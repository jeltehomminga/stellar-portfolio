type Box = { x: number; y: number; w: number; h: number; title: string; sub: string }

const boxes: Box[] = [
  { x: 40, y: 60, w: 196, h: 84, title: "Pull request", sub: "owner/repo#42" },
  { x: 268, y: 60, w: 196, h: 84, title: "1 · Facts", sub: "gh and git, read-only" },
  { x: 496, y: 60, w: 196, h: 84, title: "2 · Inventory", sub: "every state, in or out" },
  { x: 724, y: 60, w: 196, h: 84, title: "3 · Worktrees", sub: "before and after builds" },
  { x: 952, y: 60, w: 208, h: 84, title: "4 · Capture", sub: "Chrome CDP · argent" },
  { x: 40, y: 322, w: 196, h: 84, title: "5 · props.json", sub: "the one manifest" },
  { x: 520, y: 250, w: 200, h: 64, title: "6 · Render", sub: "Remotion, then ffmpeg" },
  { x: 520, y: 332, w: 200, h: 64, title: "7 · Checks", sub: "one row per rule" },
  { x: 520, y: 414, w: 200, h: 64, title: "Agent notes", sub: "JSON in the comment tag" },
  { x: 776, y: 322, w: 180, h: 84, title: "clip.mp4", sub: "3 MB, notes inside" },
]

const arrows = [
  "M240 102 H264",
  "M468 102 H492",
  "M696 102 H720",
  "M924 102 H948",
  "M1056 148 V200 H138 V316",
  "M240 364 H264",
  "M468 364 L516 284",
  "M468 364 H516",
  "M468 364 L516 444",
  "M724 282 L772 360",
  "M724 364 H772",
  "M724 446 L772 368",
  "M960 364 H980",
]

type LabelProps = { box: Box; title: string; sub: string }

/** Box text: the title near the top, the subtitle under it; short boxes sit tighter. */
const Label = ({ box, title, sub }: LabelProps) => {
  const short = box.h < 80
  return (
    <>
      <text x={box.x + 18} y={box.y + (short ? 30 : 36)} className={title} fontSize="20" fontWeight="600">
        {box.title}
      </text>
      <text x={box.x + 18} y={box.y + (short ? 52 : 64)} className={sub} fontSize="15">
        {box.sub}
      </text>
    </>
  )
}

const ariaLabel =
  "From pull request to clip: facts, inventory, worktrees and capture feed one props.json; timeline() computes every frame for the render, the checks and the agent notes; the clip waits for a human yes."

const tallSteps = [
  ["Pull request", "owner/repo#42"],
  ["1 · Facts", "gh and git, read-only"],
  ["2 · Inventory", "every state, in or out"],
  ["3 · Worktrees", "before and after builds"],
  ["4 · Capture", "Chrome CDP · argent"],
  ["5 · props.json", "the one manifest"],
  ["timeline()", "every frame, computed"],
] as const

const tallBranches = [
  { x: 20, title: "6 · Render" },
  { x: 130, title: "7 · Checks" },
  { x: 240, title: "Agent notes" },
]

/** Top of row i in the tall diagram: 52 px boxes with a 20 px gap for the arrow. */
const rowY = (i: number) => 16 + i * 72

/** Phones: the same pipeline stacked in one column, drawn about 1:1 so the labels stay readable. */
const TallDiagram = () => (
  <svg
    viewBox="0 0 360 732"
    role="img"
    aria-label={ariaLabel}
    className="mx-auto block h-auto w-full max-w-sm rounded-[var(--radius)] border border-rule bg-paper font-sans md:hidden"
  >
    <defs>
      <marker id="pipeline-arrow-tall" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" className="fill-ink-faint" />
      </marker>
    </defs>
    {tallSteps.map(([title, sub], i) => {
      const isTimeline = title === "timeline()"
      return (
        <g key={title}>
          <rect
            x="20"
            y={rowY(i)}
            width="320"
            height="52"
            rx="8"
            className={isTimeline ? "fill-paper-raised stroke-accent" : "fill-paper-raised stroke-rule"}
            strokeWidth={isTimeline ? 2.5 : 1.5}
          />
          <text x="36" y={rowY(i) + 22} fontSize="15" fontWeight="600" className={isTimeline ? "fill-accent" : "fill-ink"}>
            {title}
          </text>
          <text x="36" y={rowY(i) + 41} fontSize="12" className="fill-ink-muted">
            {sub}
          </text>
        </g>
      )
    })}
    {tallBranches.map((branch) => (
      <g key={branch.title}>
        <rect x={branch.x} y={rowY(7)} width="100" height="52" rx="8" className="fill-paper-raised stroke-rule" strokeWidth="1.5" />
        <text x={branch.x + 50} y={rowY(7) + 31} fontSize="13" fontWeight="600" textAnchor="middle" className="fill-ink">
          {branch.title}
        </text>
      </g>
    ))}
    <rect x="20" y={rowY(8)} width="320" height="52" rx="8" className="fill-paper-raised stroke-rule" strokeWidth="1.5" />
    <text x="36" y={rowY(8) + 22} fontSize="15" fontWeight="600" className="fill-ink">clip.mp4</text>
    <text x="36" y={rowY(8) + 41} fontSize="12" className="fill-ink-muted">3 MB, notes inside</text>
    <rect x="20" y={rowY(9)} width="320" height="52" rx="8" className="fill-accent" />
    <text x="36" y={rowY(9) + 22} fontSize="15" fontWeight="600" className="fill-accent-ink">8 · Human yes</text>
    <text x="36" y={rowY(9) + 41} fontSize="12" className="fill-accent-ink opacity-80">before any post</text>
    <g className="fill-none stroke-ink-faint" strokeWidth="1.75" markerEnd="url(#pipeline-arrow-tall)">
      {tallSteps.slice(0, -1).map(([title], i) => (
        <path key={title} d={`M180 ${rowY(i) + 52} V${rowY(i + 1) - 4}`} />
      ))}
      <path d="M180 500 L72 516" />
      <path d="M180 500 V516" />
      <path d="M180 500 L288 516" />
      <path d="M70 572 L176 588" />
      <path d="M180 572 V588" />
      <path d="M290 572 L184 588" />
      <path d="M180 644 V660" />
    </g>
  </svg>
)

/** The pull-request-to-clip pipeline, drawn in the site's colour tokens so it follows the theme. */
export const PipelineDiagram = () => (
  <>
    <WideDiagram />
    <TallDiagram />
  </>
)

/** Tablets and up: the pipeline in two rows. */
const WideDiagram = () => (
  <svg
    viewBox="0 0 1200 540"
    role="img"
    aria-label={ariaLabel}
    className="hidden h-auto w-full rounded-[var(--radius)] border border-rule bg-paper font-sans md:block"
  >
    <defs>
      <marker id="pipeline-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" className="fill-ink-faint" />
      </marker>
    </defs>
    {boxes.map((box) => (
      <g key={box.title}>
        <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="8" className="fill-paper-raised stroke-rule" strokeWidth="1.5" />
        <Label box={box} title="fill-ink" sub="fill-ink-muted" />
      </g>
    ))}
    <rect x="268" y="322" width="196" height="84" rx="8" className="fill-paper-raised stroke-accent" strokeWidth="2.5" />
    <Label box={{ x: 268, y: 322, w: 196, h: 84, title: "timeline()", sub: "every frame, computed" }} title="fill-accent" sub="fill-ink-muted" />
    <rect x="984" y="322" width="176" height="84" rx="8" className="fill-accent" />
    <Label box={{ x: 984, y: 322, w: 176, h: 84, title: "8 · Human yes", sub: "before any post" }} title="fill-accent-ink" sub="fill-accent-ink opacity-80" />
    <g className="fill-none stroke-ink-faint" strokeWidth="1.75" markerEnd="url(#pipeline-arrow)">
      {arrows.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  </svg>
)
