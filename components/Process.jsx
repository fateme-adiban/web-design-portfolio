import Image from "next/image"

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-heading">
          <h2>
            <span>
              <span className="process-whats">
                <span className="relative">What's</span>

                <Image src="/chalk-firework-social-proof.png" width={398} height={398} alt="chalk firework" />
              </span>{" "}
              it actually like to
            </span>{" "}
            <span className="process-work">
              <span className="relative z-10">work with me?</span>
              <Image src="/watercolor-brush-stroke-value.png" width={618} height={299} alt="watercolor brush stroke" />
            </span>
          </h2>

          <p>And why you'll never want to do it yourself again...</p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span className="process-number">01</span>
            <h3>We figure out what your website needs to say</h3>
            <p>We clarify your audience, offer, positioning, and the action you want visitors to take.</p>
          </div>

          <div className="process-card">
            <span className="process-number">02</span>
            <h3>Build the structure</h3>
            <p>I map out the pages and sections to help visitors understand your value and know what to do next.</p>
          </div>

          <div className="process-card">
            <span className="process-number">03</span>
            <h3>I design your website</h3>
            <p>You get a custom design that feels like you, not another cookie-cutter coaching website.</p>
          </div>

          <div className="process-card">
            <span className="process-number">04</span>
            <h3>I build the website</h3>
            <p>I turn the design into a fast, responsive website that works beautifully across devices.</p>
          </div>

          <div className="process-card">
            <span className="process-number">05</span>
            <h3>We launch your website</h3>
            <p>Your new website goes live, ready to turn your audience into conversations and potential clients.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
