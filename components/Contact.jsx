const benefits = ["A strategy session to clarify your audience, offer, and message.", "A custom website built around your personal brand.", "Conversion-focused page structure and messaging refinement.", "Responsive development for desktop, tablet, and mobile.", "A polished launch with handoff guidance."]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <img src="/hand-drawn-violet-flowers.png" alt="hand drawn violet flowers" className="contact-flowers" />

        <div className="contact-heading-wrapper">
          <h2 className="contact-heading">
            Your website in 30{" "}
            <span className="contact-days">
              days
              <img src="/butterfly-contact.png" alt="butterfly" className="contact-butterfly" />
            </span>
          </h2>
        </div>

        <ul className="contact-benefits">
          {benefits.map((benefit, index) => (
            <li key={index} className="contact-benefit">
              <span className="contact-check">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="contact-description">
          <p>You’ve built a personal brand worth paying attention to. Now let’s give it a digital home that reflects your expertise and helps the right people take the next step.</p>
        </div>

        <a href="https://www.linkedin.com/in/fateme-adiban/" target="_blank" rel="noopener noreferrer" className="contact-cta">
          DM me "Website"
        </a>
      </div>
    </section>
  )
}
