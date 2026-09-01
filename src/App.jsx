import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
