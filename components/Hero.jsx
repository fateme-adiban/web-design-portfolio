import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function Hero() {
  return (
    <main id="home" className="hero-section">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Turn your{" "}
            <span className="brand-text">
              <Image src="/watercolor-brush-stroke.svg" alt="watercolor brush stroke" width={495} height={73} className="brush-stroke" />
              <span className="brand-label">personal brand</span>
            </span>{" "}
            into a WEBSITE that builds trust and brings you{" "}
            <span className="clients-text">
              CLIENTS
              <Image src="/chalk-firework.svg" alt="chalk firework" width={162} height={162} className="chalk-firework" />
            </span>
          </h1>

          <p className="hero-description">Custom websites for personal brand coaches who are ready to build trust, clarify their offer, and attract more of their ideal clients.</p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              DM ME NOW
            </a>

            <a href="#work" className="secondary-button">
              SEE MY WORK
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="hero-visual">
          <Image src="/hero-img.png" alt="Fateme Adiban" width={571} height={560} className="portrait" loading="eager" />
        </div>
      </section>
    </main>
  )
}
