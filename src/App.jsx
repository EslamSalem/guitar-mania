import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <Welcome />
      <Hero
        id={"rockers-hero"}
        title={
          <>
            FAMOUS
            <br />
            ROCKERS
          </>
        }
        path={"rockers"}
      >
        <p>
          Get to know more about your favorite guitarists & musicians, check out
          what gear they use, and listen to some of their most popular work.
        </p>
      </Hero>
      <Divider />
      <Hero
        id={"theory-hero"}
        title={
          <>
            LEARN
            <br />
            THEORY
          </>
        }
        path={"theory"}
      >
        <p>
          Explore lessons about music theory where you can learn different
          scales, how to construct chords, and how to use it effectively in your
          guitar playing.
        </p>
      </Hero>
      <Divider />
      <Hero
        id={"gear-hero"}
        title={
          <>
            Guitar
            <br />
            Gear
          </>
        }
        path={"gear"}
      >
        <p>
          Browse different guitar related gear like amplifiers, pedals,
          speakers, and many other music production devices to get you started
          on your music recording journey.
        </p>
      </Hero>
      <Footer />
    </>
  );
}

export default App;
