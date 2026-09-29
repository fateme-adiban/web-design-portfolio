import Hero from "@/components/Hero"
import Problem from "@/components/Problem"
import SocialProof from "@/components/SocialProof"
import Value from "@/components/Value"
import Work from "@/components/Work"
import Process from "@/components/Process"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/SmoothScroll"
import "lenis/dist/lenis.css"

export default function Home() {
  return (
    <div>
      <SmoothScroll />
      <Hero />
      <Problem />
      <SocialProof />
      <Value />
      <Work />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
