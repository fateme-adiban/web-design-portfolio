"use client"

import { useState } from "react"

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggleFaq = index => {
    setOpenIndexes(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index)
      }

      return [...prev, index]
    })
  }

  const faqs = [
    {
      question: "How much of my time does this take?",
      answer: "I handle the design and development, so your only job is providing the information, photos, and feedback I need to build your website."
    },
    {
      question: "What if I don't have testimonials yet?",
      answer: "That's completely okay. We can build the website around your expertise, offers, and other forms of proof."
    },
    {
      question: "I'm not tech-savvy. Can I update it myself?",
      answer: "Yes. I'll show you how everything works and give you a simple walkthrough so you know exactly what you need to do."
    },
    {
      question: "I could use Squarespace myself. What's the difference?",
      answer: "You absolutely could. The difference is that I build the website around your personal brand, your audience, and your goals rather than starting with a generic template. And I can get it done faster, instead of you spending weeks trying to figure everything out yourself."
    },
    {
      question: "How do I get started?",
      answer: "Send me a DM and I'll ask you a few questions about your brand, your goals, and what you need from your website. Then we can get started!"
    }
  ]

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-heading">
          <div className="faq-title-wrapper">
            <h2>
              <span className="faq-got">
                Got
                <img src="/butterfly.png" alt="butterfly" className="faq-butterfly" />
              </span>{" "}
              questions? <span className="italic">Good.</span>
            </h2>
          </div>

          <p>Smart people ask before they say yes.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index)

            return (
              <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={index}>
                <button type="button" className="faq-question" onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                  <span>{faq.question}</span>

                  <span className={`faq-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>

                <div className={`faq-answer-wrapper ${isOpen ? "is-open" : ""}`}>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
