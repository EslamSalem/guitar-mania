import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Welcome />
      <Hero id={"rockers-hero"} title={<>FAMOUS<br />ROCKERS</>}>
        <p>
          Get to know more about your favorite guitarists & musicians, check out
          what gear they use, and listen to some of their most popular work.
        </p>
      </Hero>
      <Footer />
    </>
  );
}

export default App;
