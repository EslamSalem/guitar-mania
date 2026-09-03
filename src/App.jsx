import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

function App() {
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
      >
        <p>
          Explore lessons about music theory where you can learn different
          scales, how to construct chords, and how to use it effectively in your
          guitar playing.
        </p>
      </Hero>
      <Footer />
    </>
  );
}

export default App;
