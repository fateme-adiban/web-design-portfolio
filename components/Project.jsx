import Image from "next/image"

export default function Project({ project, index }) {
  return (
    <div className="work-project">
      <div className="work-image-wrapper">
        <Image src={project.image} alt={project.alt} width={628} height={360} className="work-image" />
      </div>

      <div className="work-info">
        <h3>{project.title}</h3>

        <div className="work-detail">
          <h4>Challenge:</h4>
          <p>{project.challenge}</p>
        </div>

        <div className="work-detail">
          <h4>What I did:</h4>
          <p>{project.process}</p>
        </div>

        <div className="work-detail">
          <h4>Result:</h4>
          <p>{project.result}</p>
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-button">
          VIEW PROJECT
        </a>
      </div>
    </div>
  )
}
