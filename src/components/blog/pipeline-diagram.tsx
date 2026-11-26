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

/** The pull-request-to-clip pipeline, drawn in the site's colour tokens so it follows the theme. */
export const PipelineDiagram = () => (
  <svg
    viewBox="0 0 1200 540"
    role="img"
    aria-label="From pull request to clip: facts, inventory, worktrees and capture feed one props.json; timeline() computes every frame for the render, the checks and the agent notes; the clip waits for a human yes."
    className="h-auto w-full rounded-[var(--radius)] border border-rule bg-paper font-sans"
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
