import heroLogo from "../assets/hero/hero-logo-2.png";
import "../styles/Landing.css"

function Hero() {
  return (
    <section id="hero">
      <img src={heroLogo} alt="Guitar Mania Logo" />
    </section>
  )
}

export default Hero;