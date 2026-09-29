import Image from "next/image"

export default function Problem() {
  return (
    <section id="about" className="problem-section">
      <div className="problem-container">
        <div className="problem-heading">
          <h2>
            Is your website costing you{" "}
            <span className="clients-heading">
              CLIENTS?
              <Image src="/chalk-firework.svg" alt="" width={162} height={162} className="chalk-firework-problem" />
            </span>
          </h2>
        </div>

        <div className="problem-content">
          <div className="problem-image">
            <Image src="/problem-img.png" alt="Workspace with flowers, laptop and stationery" width={500} height={700} className="problem-img" />
          </div>

          <div className="problem-text">
            <p>You’ve built a strong personal brand.</p>
            <p>You share valuable content, built an audience, and show up consistently.</p>
            <p>But when someone visits your website, they can’t figure out:</p>

            <ul>
              <li>→ what you do</li>
              <li>→ who you help</li>
              <li>→ why you’re the right coach for them</li>
            </ul>

            {/* <p>A generic design makes you blend in. </p>
            <p>Unclear messaging makes your offer confusing.</p>
            <p>And a weak CTA leaves visitors unsure what to do.</p> */}

            <p>
              A generic design makes you blend in.
              <br />
              Unclear messaging makes your offer confusing.
              <br />
              And a weak CTA leaves visitors unsure what to do.
            </p>

            <p className="highlight">Your website should do the opposite.</p>

            <p>
              It should make your value <span className="font-medium">clear</span>, build <span className="font-medium">trust</span>, and turn visitors into <span className="font-medium">clients</span>.
            </p>

            <p className="final-line">That’s what I build.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
