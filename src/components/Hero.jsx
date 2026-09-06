import { Link } from "react-router";
import "../styles/Hero.css";
import "../styles/Rockers-Hero.css";
import "../styles/Theory-Hero.css";
import "../styles/Gear-Hero.css";

function Hero({ id, title, path, children }) {
  return (
    <section id={id} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="hero-text">
          {children}{" "}
          <Link to={path} className="hero-btn">
            Check it Out
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
