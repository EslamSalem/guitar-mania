import rockersImg from "../assets/rockers/rockers-card-1.webp";
import tempImg from "../assets/list-temp.jpg";
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
          guitarists, learn music theory, and much more. Ready to dive in to the
          music?
        </p>
      </div>
      <div id="features">
        <Card id="list-card" img={rockersImg} title="Famous Rockers" />
        <Card id="list-card" img={tempImg} title="Learn Theory" />
        <Card id="list-card" img={tempImg} title="More..." />
      </div>
    </section>
  );
}

export default Welcome;
