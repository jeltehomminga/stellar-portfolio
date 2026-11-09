import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Writing } from "@/components/writing"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const Home = () => (
  <>
    <SiteHeader />
    <main id="main" className="mx-auto max-w-[42rem] px-6 sm:px-8">
      <Hero />
      <Work />
      <Writing />
      <Experience />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
)

export default Home
