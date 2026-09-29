import Image from "next/image"

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <Image src="/hand-drawn-violet-flowers-footer.png" alt="hand drawn violet flowers" width={242} height={214} className="footer-flowers" />

        <div className="footer-links">
          <div className="footer-column">
            <h3>Socials</h3>

            <a href="https://www.linkedin.com/in/fateme-adiban/" target="_blank" rel="noreferrer">
              linkedIn
            </a>
          </div>

          <div className="footer-column">
            <h3>links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-name-wrapper">
          <Image src="/logo.png" alt="Fateme Adiban" width={447} height={312} className="footer-name" />
        </div>

        <p className="footer-powered">
          Powered by{" "}
          <a href="https://www.linkedin.com/in/fateme-adiban/" target="_blank" rel="noopener noreferrer">
            Fateme Adiban
          </a>
        </p>
      </div>
    </footer>
  )
}
