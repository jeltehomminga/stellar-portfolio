import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
)

export default BlogLayout
