import { ogContentType, ogSize, renderSiteOg } from "@/lib/og"

export const alt = "Jelte Homminga, Senior Frontend & Mobile Engineer"
export const size = ogSize
export const contentType = ogContentType

const Image = () => renderSiteOg()

export default Image
