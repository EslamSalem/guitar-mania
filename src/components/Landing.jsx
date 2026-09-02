import heroLogo from "../assets/hero/hero-logo-2.png";
import "../styles/Hero.css";
import "../styles/Landing.css";

function Landing() {
  return (
    <section id="landing" className="hero">
      <div className="hero-content">
        <img id="landing-logo" src={heroLogo} alt="Guitar Mania Logo" />
      </div>
    </section>
  );
}

export default Landing;
