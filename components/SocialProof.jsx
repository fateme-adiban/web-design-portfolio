import Image from "next/image"

const SocialProof = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <div className="testimonials-title">
            <h2>Don't take my word for it!</h2>
            <Image src="/chalk-firework-social-proof.png" width={398} height={398} alt="chalk firework" />
          </div>

          <p>This is what happens when you're working with me...</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial testimonial-mustapha">
            <Image width={400} height={400} src="/social-proof-img-1.png" alt="Mustapha's testimonial" />
          </div>

          <div className="testimonial testimonial-lelde">
            <Image width={400} height={400} src="/social-proof-img-2.png" alt="Lelde's testimonial" />
          </div>

          <div className="testimonial testimonial-hanna">
            <Image width={400} height={400} src="/social-proof-img-3.png" alt="Hanna's testimonial" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
