export const formatDate = (dateStr: string, month: "short" | "long" = "long") =>
  new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month,
    day: month === "long" ? "numeric" : undefined,
    timeZone: "UTC",
  })
