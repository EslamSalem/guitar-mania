import listImg from "../assets/list-temp.jpg"
import Card from "./Card";
import "../styles/Welcome.css"

function Welcome() {
  return (
    <section id="welcome">
      <h1>Welcome to Guitar Mania!</h1>
      <h2>For everything guitars.</h2>
      <div id="features">
        <Card id="list-card" img={listImg} title="Famous Rockers" />
        <Card id="list-card" img={listImg} title="Learn Theory" />
        <Card id="list-card" img={listImg} title="More..." />
      </div>
    </section>
  );
}

export default Welcome;