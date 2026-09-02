import "../styles/Hero.css";
import "../styles/Rockers-Hero.css";

function Hero({ id, title, children }) {
  return (
    <section id={id} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="hero-text">
          {children} <p className="hero-btn">Check it Out</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
