import Image from "next/image"

export default function Value() {
  return (
    <section className="value-section">
      <div className="value-container">
        <div className="value-heading">
          <h2>
            <span className="value-turn">
              Turn
              <Image src="/chalk-firework-social-proof.png" width={398} height={398} alt="chalk firework" />
            </span>{" "}
            your website into your <span className="italic">best</span>{" "}
            <span className="value-first-impression">
              <span className="relative z-10">first impression</span>
              <Image src="/watercolor-brush-stroke-value.png" width={618} height={299} alt="watercolor brush stroke" />
            </span>
            .
          </h2>
        </div>

        <div className="value-content">
          <div className="value-text">
            <p>Your website should make your ICP think:</p>

            <div className="value-quotes">
              <p>“She gets me.”</p>
              <p>“She knows what she’s doing.”</p>
              <p>“I want to work with her.”</p>
            </div>

            <p>That starts with a website that:</p>

            <ul>
              <li>Makes your offer clear</li>
              <li>Builds trust</li>
              <li>Makes taking the next step easy</li>
            </ul>

            <p>The right visitors know exactly what to do when they’re ready to work with you.</p>

            <p className="value-highlight">This is more than a website.</p>

            <p>A digital home for your personal brand that turns attention into clients.</p>
          </div>

          <div className="value-images">
            <Image src="/value-img.png" alt="value img" width={513} height={470} />
          </div>
        </div>
      </div>
    </section>
  )
}
