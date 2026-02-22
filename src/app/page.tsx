import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { Now } from "@/components/now"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const Home = () => (
  <>
    <Navigation />
    <Hero />
    <About />
    <TechStack />
    <Philosophy />
    <Projects />
    <Now />
    <Experience />
    <Contact />
    <Footer />
  </>
)

export default Home
