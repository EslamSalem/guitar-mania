import rockersImg from "../assets/rockers/rockers-card-1.webp";
import theoryImg from "../assets/theory/theory-card-1.jpg";
import gearImg from "../assets/guitar-gear.jpg";
import Card from "./Card";
import "../styles/Welcome.css";

function Welcome() {
  return (
    <section id="welcome">
      <div id="welcome-msg">
        <h1>Welcome to Guitar Mania!</h1>
        <h2>For Everything Guitars</h2>
      </div>
      <div id="welcome-text">
        <p>
          Here, you can learn cool facts about your favorite rock & metal
          guitarists, learn music theory, browse gear, and much more. Ready to
          dive in to the music?
        </p>
      </div>
      <div id="features">
        <a href="#rockers-hero">
          <Card id="rockers-card" img={rockersImg} title="Famous Rockers" />
        </a>
        <a href="#theory-hero">
          <Card id="theory-card" img={theoryImg} title="Learn Theory" />
        </a>
        <a href="#">
          <Card id="gear-card" img={gearImg} title="Guitar Gear" />
        </a>
      </div>
    </section>
  );
}

export default Welcome;
