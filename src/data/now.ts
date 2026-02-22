type NowItem = {
  icon: string
  iconBg: string
  title: string
  desc: string
  tag: string
  tagType: "ai" | "active" | "exploring"
}

export const nowItems: NowItem[] = [
  {
    icon: "🤖",
    iconBg: "bg-ai-purple/10",
    title: "AI-Augmented Development",
    desc: "Deep-diving into Cursor IDE, Claude for architecture & code review, and integrating AI throughout the full dev lifecycle — from planning to PR review.",
    tag: "Core focus",
    tagType: "ai",
  },
  {
    icon: "📱",
    iconBg: "bg-ocean/10",
    title: "Expo Modernization",
    desc: "Migrating enterprise React Native apps to Expo. EAS Workflows, fingerprint-based build reuse, OTA strategy.",
    tag: "Active",
    tagType: "active",
  },
  {
    icon: "⚛️",
    iconBg: "bg-sunset/10",
    title: "React 19 & Server Components",
    desc: "New patterns in React 19 — server components, actions, and how they change data fetching in Next.js.",
    tag: "Exploring",
    tagType: "exploring",
  },
  {
    icon: "🏸",
    iconBg: "bg-wood/10",
    title: "Padel & Side Projects",
    desc: "Building a padel club community app and exploring villa development in Bali. Life beyond the terminal.",
    tag: "Side project",
    tagType: "exploring",
  },
]
