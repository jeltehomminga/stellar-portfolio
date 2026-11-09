// TEMPORARY — type specimen for the editorial redesign. Delete before merging.
import type { Metadata } from "next"
import {
  Newsreader,
  IBM_Plex_Sans,
  JetBrains_Mono,
  Instrument_Sans,
  Schibsted_Grotesk,
  Source_Serif_4,
} from "next/font/google"

export const metadata: Metadata = {
  title: "Type specimen",
  robots: { index: false, follow: false },
}

const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--f-newsreader" })
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-plex" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--f-jetbrains" })
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--f-instrument" })
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--f-schibsted" })
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--f-sourceserif" })

const pairings = [
  {
    id: "a",
    name: "A — Newsreader + IBM Plex Sans + JetBrains Mono",
    note: "Serif headings, technical sans body. Classic editorial-engineer; the serif carries the warmth the old site got from rounded type.",
    head: "var(--f-newsreader)",
    headWeight: 400,
    headTracking: "-0.015em",
    body: "var(--f-plex)",
    prose: "var(--f-plex)",
    mono: "var(--f-jetbrains)",
  },
  {
    id: "b",
    name: "B — Instrument Sans throughout (+ JetBrains Mono for code)",
    note: "One neutral grotesk, hierarchy from size and weight only. Quietest and most product-like; closest to leerob.com.",
    head: "var(--f-instrument)",
    headWeight: 500,
    headTracking: "-0.025em",
    body: "var(--f-instrument)",
    prose: "var(--f-instrument)",
    mono: "var(--f-jetbrains)",
  },
  {
    id: "c",
    name: "C — Schibsted Grotesk + Source Serif 4 (for long-form)",
    note: "Grotesk for UI and headings, serif for blog prose. Inverts A: the homepage reads crisp, the writing reads like a publication.",
    head: "var(--f-schibsted)",
    headWeight: 600,
    headTracking: "-0.02em",
    body: "var(--f-schibsted)",
    prose: "var(--f-sourceserif)",
    mono: "var(--f-jetbrains)",
  },
]

const Sample = ({ p, dark }: { p: (typeof pairings)[number]; dark?: boolean }) => (
  <div
    id={`pairing-${p.id}${dark ? "-dark" : ""}`}
    style={{
      background: dark ? "#141516" : "#faf9f6",
      color: dark ? "#ecebe7" : "#1c1b19",
      fontFamily: p.body,
      padding: "56px 48px 64px",
      ["--muted" as string]: dark ? "#a3a09a" : "#63605a",
      ["--rule" as string]: dark ? "#2a2b2c" : "#e4e1da",
      ["--accent" as string]: dark ? "#7cc0ca" : "#065563",
      ["--code-bg" as string]: dark ? "#1c1d1f" : "#f2f0eb",
    }}
  >
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 40px" }}>{p.name}</p>

      <p style={{ fontSize: 16, fontWeight: 500, margin: 0 }}>Jelte Homminga</p>
      <h1
        style={{
          fontFamily: p.head,
          fontWeight: p.headWeight,
          letterSpacing: p.headTracking,
          fontSize: 44,
          lineHeight: 1.1,
          margin: "12px 0 20px",
          textWrap: "balance",
        }}
      >
        Senior frontend and mobile engineer for teams shipping Next.js and React Native at scale.
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 12px", maxWidth: "60ch" }}>
        Core contributor to My Luminus, Belgium&rsquo;s Product of the Year 2026. I work on the parts that
        decide whether an app stays fast: rendering strategy, caching, auth and release pipelines.
      </p>
      <p style={{ fontSize: 15, margin: "0 0 48px" }}>
        Open to new freelance projects.{" "}
        <a href="#" style={{ color: "var(--accent)", textUnderlineOffset: 3 }}>
          Email me
        </a>
      </p>

      <h2
        style={{
          fontFamily: p.head,
          fontWeight: p.headWeight,
          letterSpacing: p.headTracking,
          fontSize: 24,
          lineHeight: 1.25,
          margin: "0 0 20px",
          paddingTop: 24,
          borderTop: "1px solid var(--rule)",
        }}
      >
        Selected work
      </h2>
      <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>School app: React Native CLI to Expo</h3>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 48px", maxWidth: "62ch" }}>
        Moved a school&rsquo;s React Native CLI app to Expo with EAS Build, fingerprint-based build reuse
        and OTA updates, so JavaScript-only fixes reach users without a new store release.
      </p>

      <h2
        style={{
          fontFamily: p.head,
          fontWeight: p.headWeight,
          letterSpacing: p.headTracking,
          fontSize: 32,
          lineHeight: 1.2,
          margin: "0 0 16px",
          textWrap: "balance",
        }}
      >
        You might not need an MCP
      </h2>
      <div style={{ fontFamily: p.prose, fontSize: p.prose.includes("serif") ? 19 : 17, lineHeight: p.prose.includes("serif") ? 1.7 : 1.65, maxWidth: "65ch" }}>
        <p style={{ margin: "0 0 18px" }}>
          There&rsquo;s a pattern in frontend history that keeps repeating. A genuinely useful tool arrives,
          the ecosystem sprints toward it, and some years later someone writes the sober follow-up. None of
          those posts said the tool was bad. They said the tool has a price.
        </p>
        <pre
          style={{
            fontFamily: p.mono,
            fontSize: 14,
            lineHeight: 1.6,
            background: "var(--code-bg)",
            border: "1px solid var(--rule)",
            borderRadius: 6,
            padding: "14px 16px",
            margin: "0 0 18px",
            overflowX: "auto",
          }}
        >
          {`curl -s -u "$BB_USER:$BB_TOKEN" \\
  "https://api.bitbucket.org/2.0/repositories/$REPO/pullrequests" \\
  | jq '.values[] | {id, title}'`}
        </pre>
        <p style={{ margin: 0 }}>
          Plain <code style={{ fontFamily: p.mono, fontSize: "0.88em" }}>curl</code> and a token. No server
          process, no tool schema in the context window, and it works in every agent.
        </p>
      </div>
    </div>
  </div>
)

export default function Specimen() {
  return (
    <main
      className={[newsreader, plex, jetbrains, instrument, schibsted, sourceSerif].map((f) => f.variable).join(" ")}
    >
      {pairings.map((p) => (
        <section key={p.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <Sample p={p} />
          <Sample p={p} dark />
        </section>
      ))}
    </main>
  )
}
