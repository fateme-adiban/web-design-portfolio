import Project from "./Project"
import Image from "next/image"

const projects = [
  {
    title: "Personal Brand Website",
    image: "/projec-img-1.png",
    alt: "Hanna personal brand website",
    challenge: "Hanna had strong expertise but no website that communicated it clearly.",
    process: "Strategy → Design → Development",
    result: "A polished website designed to turn profile visitors into potential clients.",
    link: "https://hannadiftyari.vercel.app/"
  },
  {
    title: "Personal Brand Website",
    image: "/projec-img-2.png",
    alt: "Edha personal brand website",
    challenge: "Edha had strong expertise and impressive results, but needed a website that clearly positioned her as an expert.",
    process: "Strategy → Design → Development",
    result: "A website that builds trust, showcases her expertise, and turns visitors into potential clients.",
    link: "https://edhajain.vercel.app/"
  },
  {
    title: "Personal Brand Website",
    image: "/projec-img-3.png",
    alt: "Personal brand website",
    challenge: "The brand had strong expertise but no website that communicated it clearly.",
    process: "Strategy → Design → Development",
    result: "A polished website designed to turn profile visitors into potential clients.",
    link: "https://lelde-legzdina.vercel.app/"
  }
]

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-heading">
          <h2>
            See my work for{" "}
            <span className="work-yourself">
              yourself
              <Image src="/chalk-firework.svg" alt="chalk firework" width={162} height={162} className="work-spark" />
            </span>
          </h2>
        </div>

        <div className="work-projects">
          {projects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
