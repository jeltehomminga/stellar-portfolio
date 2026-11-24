import { ogSize, renderSiteOg } from "@/lib/og"

export const alt = "Jelte Homminga, Senior Frontend & Mobile Engineer"
export const size = ogSize
export const contentType = "image/png"

const Image = () => renderSiteOg()

export default Image
